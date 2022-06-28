/*

    Code Flow:

    1. Pick a data set (from all the objects with images -- file: captcha-images-data.js --, choose a random one)
    2. Pick a random topic form the data set (from dogs and cats as possible labels, pick a random value, let's say dogs)
    3. Place the topic as text in the captcha template ("Select all images that contain [selected topic here]:")
    4. Add all the image sources from the data set (picked at step 1) to an array (allSetImagesCopy) (with the real path, including "Image_Captcha_Doc/image captcha/" at the beginning)
    
    For each of the 9 image containers (from the template):
        5. Pick a random image source from the array created at step 4 and set it visible
        6. In an array (imagesSourcesArray), add the source of the image displayed at step 5
        7. Remove the source of the displayed image from the allSetImagesCopy array (see step 4)

    For each selection the user makes:

        8. Add the .selected class to the container, so the opacity of the image reduces and the border and font-awesome color changes
        9. Add the source of the selected image to an array (selectedIMGsSources)

    When "Check Captcha" Button is Clicked:

        10. In an array (imagesMeaningsArray) set the meanings for each image from imagesSourcesArray (goodChoice/badChoice, depending on the selected topic) 
        11. If the user made no selections, in case that there were no visible images displayed for the selected topic, validate the answer; otherwise set the captcha result as a failure
        12. In case the user made selections, check that in the array selectedIMGsSources there are all the images marked as "goodChoice" and no images marked as "badChoice"

    I created some arrays with hashed values, some for success and some for failures

        13. Depending on the result from the captcha validation, a value from the right array will be randomly picked
        14. Add the value to the hidden inputs from the template and from the contact file for later usage in PHP
        15. Submit the Image_Captcha_Doc/verification.php form, so the $_SESSION['captcha'] variable will be interpreted and set in PHP 

    In case user has to try again, the function resetToTryAgain() will reload the captcha template by restarting the process described above


*/


let pickDataSetIndex = Math.floor(Math.random() * captchaImagesData.length) // select an index to pick a data set
let pickDataSet = captchaImagesData[pickDataSetIndex] // select data set

let pickRandomTopicIndex = Math.floor(Math.random() * pickDataSet.possibleLabels.length) // select index to pick a topic from the chosen data set
let pickRandomTopic = pickDataSet.possibleLabels[pickRandomTopicIndex] // select the value which is corresponding to the index above (chose topic name for image selection)

let imagesTopicParagraph = document.getElementById('image-captcha-template-images-topic')
imagesTopicParagraph.innerText = pickRandomTopic // place selected topic between the bold tags


let allSetImagesCopy = new Array() 


// places all image sources from the picked data set in one array
function appendImagesToArray(key){
    key = key.replace(/\s/g, '').toLowerCase() // format key to match
    pickDataSet[key].forEach(element => {
        allSetImagesCopy.push("Image_Captcha_Doc/image captcha/" + element)
    });
}
pickDataSet.possibleLabels.forEach(element => {
    appendImagesToArray(element)
});


// removes element from array
function removeItemOnce(arr, index) {
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
}

imagesSourcesArray = new Array()

function addToImagesSources(imageSource){
    imagesSourcesArray.push(imageSource)
}

imagesMeaningsArray = new Array()

function addToImagesMeaning(){

    pickRandomTopic = pickRandomTopic.replace(/\s/g, '').toLowerCase()

    imagesSourcesArray.forEach((imageSrc, imageSrcIndex) => {
        if(pickDataSet[pickRandomTopic].includes(getStringBetween(imageSrc, "Image_Captcha_Doc/image captcha/" ,"")))
            imagesMeaningsArray[imageSrcIndex] = "goodChoice"
        else
            imagesMeaningsArray[imageSrcIndex] = "badChoice"
    });

}

// fills an image with a random source
function fillImage(indexToFill){
    let divImage = document.getElementById("image-captcha-template-generated-image-" + indexToFill)
    let image = divImage.querySelector("img")

    let randomPictureSrcIndex = Math.floor(Math.random() * allSetImagesCopy.length)
    image.src = allSetImagesCopy[randomPictureSrcIndex]

    addToImagesSources(allSetImagesCopy[randomPictureSrcIndex]) // for the random displayed images create an array with the sources
    removeItemOnce(allSetImagesCopy, randomPictureSrcIndex) // delete the image from the source copies array to not show duplicates
}

for(let i=0; i<9; i++) // 9 for 9 images
    fillImage(i) // fill image source


    
let imagesCont = document.querySelectorAll("#image-captcha-template-images-container .image-captcha-template-images-grid div")

let selectedIMGs
let selectedIMGsSources

// gets the string between two smaller strings (REGEX)
function getStringBetween(str, start, end) {
    const result = str.match(new RegExp(start + "(.*)" + end));
    return result[1]
}

function updateSelections(){

    selectedIMGs = document.querySelectorAll('#image-captcha-template .selected img')
    selectedIMGsSources = Array.from(selectedIMGs).map(x => getStringBetween(x.outerHTML, "src=\"" ,"\" alt")) // add the image source to the array with user image selections
}


/*

    Based on selectedIMGsSources, check if selections are correct
        Algorithm idea:

        for each correct source, there is a copy in selections from user
        AND
        for each incorrect source, there is no copy in selections from user

*/

imgCaptchaBtn = document.getElementById("image-captcha-template-check-captcha-btn")

function checkCaptchaSolution(){

    addToImagesMeaning() // for the random displayed images create an array with the meaning of each image

    // If user made 0 selections, check if no selections should be made (if so, validate the answer, otherwise, set it as failure)
    if(!selectedIMGsSources){
        if(!imagesMeaningsArray.includes("goodChoice"))
            return true
        else
            return false
    }

    // If user made selections, follow algorithm above

    else{
            correctSelection = true

            imagesMeaningsArray.forEach((imageMeaning,imageIndex) => {
                if(imageMeaning == "goodChoice"){
                    if(!selectedIMGsSources.includes(imagesSourcesArray[imageIndex])){
                        correctSelection = false
                    } 
                }
                else{
                    if(selectedIMGsSources.includes(imagesSourcesArray[imageIndex])){
                        correctSelection = false
                    }
                }
            });

            return correctSelection
    }
}

// In case user didn't solve catpcha correctly and needs to try again
function resetToTryAgain(){ 
    // Retake all process from above
    pickDataSetIndex = Math.floor(Math.random() * captchaImagesData.length) // select an index to pick a data set
    pickDataSet = captchaImagesData[pickDataSetIndex] // select data set

    pickRandomTopicIndex = Math.floor(Math.random() * pickDataSet.possibleLabels.length) // select index to pick a topic from the chosen data set
    pickRandomTopic = pickDataSet.possibleLabels[pickRandomTopicIndex] // select the value which is corresponding to the index above (chose topic name for image selection)

    imagesTopicParagraph = document.getElementById('image-captcha-template-images-topic')
    imagesTopicParagraph.innerText = pickRandomTopic // place selected topic between the bold tags


    pickDataSet.possibleLabels.forEach(element => {
        appendImagesToArray(element)
    });

    for(let i=0; i<9; i++){
        fillImage(i)
        if(document.getElementById("image-captcha-template-generated-image-" + i).classList.value.includes("selected"))
            document.getElementById("image-captcha-template-generated-image-" + i).classList.remove("selected")
    }

}


/*

    Set value on hidden input based on correct or incorrect and set session for captcha based on that value (which will redirect to problem.html or success.html)

*/

let captchaResultHiddenInput = document.getElementById("image-captcha-template-result-hidden")

let successValues = ["e9197112d0c4a95fe0657a84aeab7984", "aef0141907a19f26375d01589dad68e0", "23a72a2db9c3e8cbe0069b1f900af9e9", "46850a2b6ea711cab10db2e85185864b", "b1f066eeab6c2057ce6412fe6ed3519a" , "e47b4ef337aabd57b8875e4d64350ac9" , "d482780f5563e12dde1050f9b17a17f0", "0ac10ab02741389addeaed8cc25d1242", "339300916a83b486bbe62a34cdccbb4f", "790b0227a6c24098e46e59aba82f90af" ]

let failureValues = ["f8127102d0c4a96fe0657a84aeab1184", "zif0140027a19f26375e22589dad23e0", "45a72a3cc9c3e8cbe0007b1f900af900", "22431a2b6ea711cab00cc2e85185864b", "cxf023eecdci2032ce6412fe6ed3420a", "e47b4eg452aabd57b8762e4d64350add", "d110380f3321e12dde1050f9b17a160x", "0fc10ab02740017axetyed8cc44d1135", "329300716a83b486bbe52a34cdeebf5f", "990b02i7a6c24052e46e59add82f91ex"]

imgCaptchaBtn.addEventListener("click", function(){
    // If correct selection
    if(checkCaptchaSolution()){
        // append a value from success array to the hidden inputs
        chosenVal =  successValues[Math.floor(Math.random() * successValues.length)]
        captchaResultHiddenInput.value = chosenVal
        document.getElementById("image-captcha-special-field").value = chosenVal
    }
    // If failure from user
    else{
            // append a value from failure array to the hidden inputs

            chosenVal =  failureValues[Math.floor(Math.random() * failureValues.length)]
            captchaResultHiddenInput.value = chosenVal
            document.getElementById("image-captcha-special-field").value = chosenVal
    }
    // submit form for validations in PHP
    document.querySelector('form[action="Image_Captcha_Doc/verification.php"]').submit()
        
})

// For each image selection
imagesCont.forEach(element => {
    element.addEventListener('click', function(){
        // If it was selected, remove selection 
        if(element.classList.contains('selected')){
            element.classList.remove('selected')
            updateSelections()
        } else { // Otherwise, select image
            element.classList.add('selected')
            updateSelections()
        }
    })
})