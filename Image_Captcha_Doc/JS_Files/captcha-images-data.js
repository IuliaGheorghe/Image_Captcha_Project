/*

    => How to add more image sets?

    Part I (add the images):

    1. On your server, navigate to Image_Captcha_Doc/image captcha and paste a folder with your image set
        
    Part II (set the meaning of each image in code, in this file):
    
    1. Add a new object to the base array (captchaImagesData) -- check down below, you can copy paste the code
            
        {
            possibleLabels: ['plastic', 'jellyfish'],
            plastic:['plastic vs jellyfish/A1.jpg','plastic vs jellyfish/A2.jpg', 'plastic vs jellyfish/A3.jpg', 'plastic vs jellyfish/A4.jpg'],
            jellyfish:['plastic vs jellyfish/B1.jpg','plastic vs jellyfish/B2.jpg', 'plastic vs jellyfish/B3.jpg', 'plastic vs jellyfish/B4.jpg', 'plastic vs jellyfish/B5.jpg']
        },

    2. Add all your labels in the possibleLabels property (e.g: if you have a set with dogs and cats, set the possibleLabels property to  possibleLabels: ['dogs', 'cats'])
    3. For each label, create a key with its name and associate an array with the names of the images related to that key 
        (e.g: 
            dogs:['dogvscats1.png', 'dogsvscats3.png'],
            cats:['dogvscats2.png', 'dogsvscats4.png', 'dogsvscats5.png', 'dogsvscats6.png', 'dogsvscats7.png', 'dogsvscats8.png', 'dogsvscats9.png'],
        )

    !WARNING: please make sure each set has at least 9 pictures
    *RECOMANDATION: for each lable, make sure you have at least one related picture (NOT MANDATORY, BUT USEFUL AND RECOMMENDED)

*/

const captchaImagesData = [

    {
        possibleLabels: ['boats', 'birds'],
        boats:['boat vs bird/A1.jpg','boat vs bird/A2.jpg', 'boat vs bird/A3.jpg', 'boat vs bird/A4.jpg'],
        birds:['boat vs bird/B1.jpg','boat vs bird/B2.jpg', 'boat vs bird/B3.jpg', 'boat vs bird/B4.jpg', 'boat vs bird/B5.jpg']
    },
    {
        possibleLabels: ['crosswalks', 'no crosswalks'],
        crosswalks:['crosswalk vs no crosswalk/A1.jpg','crosswalk vs no crosswalk/A2.jpg', 'crosswalk vs no crosswalk/A3.jpg', 'crosswalk vs no crosswalk/A4.jpg', 'crosswalk vs no crosswalk/A5.jpg'],
        nocrosswalks:['crosswalk vs no crosswalk/B1.jpg','crosswalk vs no crosswalk/B2.jpg', 'crosswalk vs no crosswalk/B3.jpg', 'crosswalk vs no crosswalk/B4.jpg']
    },
    {
        possibleLabels: ['fire hydrants', 'no fire hydrants'],
        firehydrants:['fire hydrant vs lack of/A1.jpg','fire hydrant vs lack of/A2.jpg', 'fire hydrant vs lack of/A3.jpg', 'fire hydrant vs lack of/A4.jpg'],
        nofirehydrants:['fire hydrant vs lack of/B1.jpg','fire hydrant vs lack of/B2.jpg', 'fire hydrant vs lack of/B3.jpg', 'fire hydrant vs lack of/B4.jpg', 'fire hydrant vs lack of/B5.jpg']
    },

]