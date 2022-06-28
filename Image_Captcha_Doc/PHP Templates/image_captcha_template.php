<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="Image_Captcha_Doc/image-captcha-template-style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"/>    
</head>
<body>
    <div id="image-captcha-container">
        <div id="image-captcha-template-container">
            <div id="image-captcha-template">
                <iframe name="image-captcha-backframe" id="image-captcha-backframe" style="display: none;"></iframe>
                <form method="post" action="Image_Captcha_Doc/verification.php" id="image-captcha-template-form" target="image-captcha-backframe">
                    <i class="fa-solid fa-x"></i>
                    <p>Select all images that contain <b id="image-captcha-template-images-topic">pasari</b>:</p>
                    <div id="image-captcha-template-images-container">
                        <div class="image-captcha-template-images-grid">
                            <div id="image-captcha-template-generated-image-0">
                                <i class="fa-solid fa-check-circle"></i>
                                <img src="" alt="captcha-img">
                            </div>
                            <div id="image-captcha-template-generated-image-1">
                                <i class="fa-solid fa-check-circle"></i>
                                <img src="" alt="captcha-img">
                            </div>
                            <div id="image-captcha-template-generated-image-2">
                                <i class="fa-solid fa-check-circle"></i>
                                <img src="" alt="captcha-img">
                            </div>  

                            <div id="image-captcha-template-generated-image-3">
                                <i class="fa-solid fa-check-circle"></i>
                                <img src="" alt="captcha-img">
                            </div>
                            <div id="image-captcha-template-generated-image-4">
                                <i class="fa-solid fa-check-circle"></i>
                                <img src="" alt="captcha-img">
                            </div>
                            <div id="image-captcha-template-generated-image-5">
                                <i class="fa-solid fa-check-circle"></i>
                                <img src="" alt="captcha-img">
                            </div> 
                            
                            <div id="image-captcha-template-generated-image-6">
                                <i class="fa-solid fa-check-circle"></i>
                                <img src="" alt="captcha-img">
                            </div>
                            <div id="image-captcha-template-generated-image-7">
                                <i class="fa-solid fa-check-circle"></i>
                                <img src="" alt="captcha-img">
                            </div>
                            <div id="image-captcha-template-generated-image-8">
                                <i class="fa-solid fa-check-circle"></i>
                                <img src="" alt="captcha-img">
                            </div>
                        </div>
                    </div>
                    <div id="lets-try-different">
                        <span>Change Captcha</span><span><i class="fa-solid fa-arrow-rotate-right"></i></span>
                    </div>
                    <input type="hidden" name="image-captcha-template-result" value="" id="image-captcha-template-result-hidden">
                    <button id="image-captcha-template-check-captcha-btn" type="button">Check Captcha</button>
                </form>
            </div>
        </div>
    </div>
    <script src="Image_Captcha_Doc/JS_Files/captcha-images-data.js"></script>
    <script src="Image_Captcha_Doc/JS_Files/set-fields-values.js"></script>
    <script src="Image_Captcha_Doc/JS_Files/captcha-images-template-app.js"></script>
    <script src="Image_Captcha_Doc/JS_Files/captcha-pop-up.js"></script>
</body>
</html>