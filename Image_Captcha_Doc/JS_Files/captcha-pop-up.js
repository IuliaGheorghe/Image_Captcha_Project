/*

    Code Flow:

    1. On "Are you human?" click, display captcha popup
    2. If captcha is valid, display check mark
    3. If captcha is not valid, display x-mark and try again button
    4. Hide popup

    IF USER HAVEN'T CHECKED CAPTCHA AND CLICKS SUBMIT: alert him to set all info or/and check captcha

    If captcha and info are okay, on SUBMIT click, display success message
    If captcha and info are not okay, on SUBMIT click, display failure message

    ON GO BACK BUTTON: Reload Page


*/

areYouHumanPoint = document.getElementById("are-you-human-msg")
humanCheckPoint = document.getElementById("image-captcha-checkpoint")
humanCheckFontAwesomeIcon = humanCheckPoint.querySelector(".fa-solid")
humanSeemsRobotContainer = humanCheckPoint.querySelector("#image-captcha-seems-robot-message")
humanCheckFailureContainer = humanCheckPoint.querySelector("#image-captcha-wrong-result-message")
humanCheckSuccessContainer = humanCheckPoint.querySelector("#image-captcha-success-result-message")
popup = document.getElementById("image-captcha-container")

popup.style.display = "none"

function setPopUpDisplay(){
    if(popup.style.display=="none"){
        popup.style.display = "block" 
        document.querySelector("body").style.overflow = "hidden"
    }
    else{
        popup.style.display = "none"
        document.querySelector("body").style.overflow = "auto"
    }

}

// On human check button click, display popup with captcha template
areYouHumanPoint.addEventListener("click", function(){
    if(areYouHumanPoint.querySelector("#captcha-check-icon i").classList.value.includes("fa-square"))
        setPopUpDisplay()
})


popupCheckSolutionBtn = document.getElementById("image-captcha-template-check-captcha-btn")

popupCheckSolutionBtn.addEventListener("click", function(){
    
    captchaResult = document.getElementById("image-captcha-template-result-hidden").value

    // If correct answer from user
    if(successValues.includes(captchaResult)){
        // Display blue check mark near "Are you human?" label
        humanCheckFontAwesomeIcon.classList.remove("fa-square")
        if(humanCheckFontAwesomeIcon.classList.value.includes("fa-circle-xmark"))
            humanCheckFontAwesomeIcon.classList.remove("fa-circle-xmark")
        humanCheckFontAwesomeIcon.classList.add("fa-check-circle")
        humanSeemsRobotContainer.style.display = "none"
    } else {
        // Otherwise display red x-mark near "Are you human?" label
        humanCheckFontAwesomeIcon.classList.remove("fa-square")
        humanCheckFontAwesomeIcon.classList.add("fa-circle-xmark")
        humanSeemsRobotContainer.style.display = "flex"
    }
    
    setPopUpDisplay()
})

tryAgain = humanSeemsRobotContainer.querySelector("#image-captcha-wrong-result-message-try-again")

tryAgain.addEventListener("click", function(){
    if(humanCheckFailureContainer)
        humanCheckFailureContainer.style.display = "none"
    if(humanCheckSuccessContainer)
        humanCheckSuccessContainer.style.display = "none"
    resetToTryAgain()
    setPopUpDisplay()
})

mainForm = document.querySelector('form:not([action="verification.php"])')

if(mainForm.querySelector("button")!==null)
    mainFormBtn = mainForm.querySelector("button")
else
    mainFormBtn = mainForm.querySelector("[type='submit']")

// If captcha was not tried or fields are empty or invalid
mainFormBtn.addEventListener("click", function(){

    let requiredFields = document.querySelectorAll("[required]")
    let requiredValues = new Array()

    requiredFields.forEach(element => {
        requiredValues.push(element.value)
    });

    let emailFields = document.querySelectorAll("[type=email]")
    let validEmails = new Array()

    emailFields.forEach(element => {
        if(element.value.includes("@") && element.value.includes("."))
            validEmails.push(true)
        else
            validEmails.push(false)
    });

    if(requiredValues.includes("") || validEmails.includes(false)){
        // Alert user to check captcha
        // alert("Please make sure you've completed the required fields and you've checked the captcha as well!")

        document.addEventListener('invalid', (function () {
            return function (e) {
                e.preventDefault();
            };
        })(), true);
        

        const alertPopupContainer = document.getElementById("alert-popUp-msg-container")
        alertPopupContainer.style.display = "block"
        const popUpOkBtn = alertPopupContainer.querySelector("button")
        popUpOkBtn.addEventListener("click", function(){
            
            alertPopupContainer.style.display = "none"            
            
        })
    } else{
        document.querySelector('#image-captcha-checkpoint #message-after-email').style.display = 'block'
    }    
})


if(document.querySelector('#image-captcha-checkpoint #message-after-email>div'))
    document.querySelector('#image-captcha-checkpoint #message-after-email').style.display = 'block'

xBtn = document.querySelector("#image-captcha-template-container #image-captcha-template .fa-x")

xBtn.addEventListener("click", function(){
    popup.style.display="none"
    document.querySelector("body").style.overflowY = "auto"
})

tryDifferentCaptchaBtn = document.querySelector("#image-captcha-template #image-captcha-template-form #lets-try-different")
tryDifferentCaptchaBtn.addEventListener("click", resetToTryAgain)


// Reload on Back Bttn
window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                           ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      // Handle page restore.
      window.location.reload();
    }
  });
