<div id="image-captcha-checkpoint">
    <input type="text" name="image-captcha-special-field" value="" id="image-captcha-special-field" required style="display:none">
    <div id="are-you-human-msg">
        <label>Are you human?</label>
        <div id="captcha-check-icon">
            <i class="fa-solid fa-square"></i>
        </div>
    </div>
    <div id="image-captcha-seems-robot-message">
        <p>Something seems weird here ... But maybe you're not a nasty robot and you just made a mistake. You have a new chance:</p>
        <div id="image-captcha-wrong-result-message-try-again">
            <p>Let's Try Again!</p>
            <i class="fa-solid fa-arrow-rotate-right"></i>
        </div>
    </div>
    <div id="message-after-email">
        <?php

        if(isset($_GET['success']))
            if($_GET['success'] == "true") {
                echo('<div id="image-captcha-success-result-message">
                <p>Thank you for your message, we\'ll get back as soon as possible!</p>
                </div>');
            } else {
                echo('<div id="image-captcha-wrong-result-message">
                <p>Oops, something went wrong, please try again!</p>
                </div>');
            }
        ?>
    </div>
</div>