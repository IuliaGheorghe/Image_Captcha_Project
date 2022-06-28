<?php
    session_start();
    $captchaCode = $_POST['image-captcha-template-result']; // GET VALUE FORM CAPTCHA

    $successValues = ["e9197112d0c4a95fe0657a84aeab7984", "aef0141907a19f26375d01589dad68e0", "23a72a2db9c3e8cbe0069b1f900af9e9", "46850a2b6ea711cab10db2e85185864b", "b1f066eeab6c2057ce6412fe6ed3519a" , "e47b4ef337aabd57b8875e4d64350ac9" , "d482780f5563e12dde1050f9b17a17f0", "0ac10ab02741389addeaed8cc25d1242", "339300916a83b486bbe62a34cdccbb4f", "790b0227a6c24098e46e59aba82f90af" ]; // SUCCESS HASH CODES

    $failureValues = ["f8127102d0c4a96fe0657a84aeab1184", "zif0140027a19f26375e22589dad23e0", "45a72a3cc9c3e8cbe0007b1f900af900", "22431a2b6ea711cab00cc2e85185864b", "cxf023eecdci2032ce6412fe6ed3420a", "e47b4eg452aabd57b8762e4d64350add", "d110380f3321e12dde1050f9b17a160x", "0fc10ab02740017axetyed8cc44d1135", "329300716a83b486bbe52a34cdeebf5f", "990b02i7a6c24052e46e59add82f91ex"]; // FAILURE HASH CODES

    if(in_array($captchaCode, $successValues))
        $_SESSION['captcha'] = true; // IF THE HASH CODE FROM $captchaCode IS INCLUDED IN SUCCESS ARRAY, SET $_SESSION['captcha'] TO "true"
    else
        $_SESSION['captcha'] = false; // IF THE HASH CODE FROM $captchaCode IS INCLUDED IN FAILURE ARRAY, SET $_SESSION['captcha'] TO "false"
?>