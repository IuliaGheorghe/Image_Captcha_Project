<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Test</title>
</head>
<body>
    <form action="validation.php" method="post">
        <div>
            <label>Name:</label>
            <input name="name" type="text" placeholder="Name:" required value="<?php if(isset($_GET['success'])) if($_GET['success']=='false') {
                echo(explode("-&&&&-", base64_decode($_GET['key']))[0]);
            }
            ?>">
        </div>
        <div>
            <label>Email:</label>
            <input name="email" type="email" placeholder="Email:" required value="<?php if(isset($_GET['success'])) if($_GET['success']=='false') {
                echo(explode("-&&&&-", base64_decode($_GET['key']))[1]);
            }
            ?>">
        </div>
        <div>
            <label>Message:</label>
            <textarea name="message" id="message" rows="10" style="resize:vertical" required></textarea>
        </div>

        <?php 
            require_once("Image_Captcha_Doc/PHP Templates/image_captcha_checkpoint.php");
        ?>

        <button>Submit</button>
    </form>

    <?php 
        require_once("Image_Captcha_Doc/PHP Templates/image_captcha_template.php");
    ?>

</body>
</html>