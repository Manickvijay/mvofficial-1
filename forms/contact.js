

const cname = document.getElementById('name');



const cemail = document.getElementById('email');



const csubject = document.getElementById('subject');

const cmessage = document.getElementById('message');



submit.addEventListener('submit',(e)=>{

    e.preventDefault();

    let ebody = `

<html>

<head>

    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />

    <title>Reset Password Email Template</title>

    <meta name="description" content="Reset Password Email Template.">

    <style type="text/css">

        a:hover {text-decoration: underline !important;}

    </style>

</head>



<body marginheight="0" topmargin="0" marginwidth="0" style="margin-top: -50px; background-color: #f2f3f8;" leftmargin="0">

    <!--100% body table-->

    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"

        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">

        <tr>

            <td>

                <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0" 

                    align="center" cellpadding="0" cellspacing="0">

                    <tr>

                        <td style="height:80px;">&nbsp;</td>

                    </tr>

                    <tr>

                        <td style="text-align:center;">

                          <a href="https://rakeshmandal.com" title="logo" target="_blank">

                            <img width="180" src="Lo.png" title="logo" alt="logo">

                          </a>

                        </td>

                    </tr>

                    <tr>

                        <td style="height:20px;">&nbsp;</td>

                    </tr>

                    <tr>

                        <td>

                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"

                                style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">

                                <tr>

                                    <td style="height:40px;">&nbsp;</td>

                                </tr>

                                <tr>

                                    <td style="padding:0 35px;">

                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have

                                            received Mail from <b>Mvprofilepage</b></h1>

                                        <span

                                            style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>

                                            

                                          <h1 style="font-size:20px; text-align:left">Name:${cname.value}</h1>

                                          <h1 style="font-size:20px; text-align:left">Email:${cemail.value}</h1>

                                                                                  <p style="color:#455056; font-size:15px;line-height:24px; margin:0; text-align:left">

                                         <b>subject:${csubject.value}</b>

                                          </p><br>

                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">

                                        ${cmessage.value}

                                            </p>

                        

                                            

                                    </td>

                                </tr>

                                <tr>

                                    <td style="height:40px;">&nbsp;</td>

                                </tr>

                            </table>

                        </td>

                    <tr>

                        <td style="height:20px;">&nbsp;</td>

                    </tr>

                    <tr>

                        <td style="text-align:center;">

                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>mvprofilepage.netlify.com</strong></p>

                        </td>

                    </tr>

                    <tr>

                        <td style="height:80px;">&nbsp;</td>

                    </tr>

                </table>

            </td>

        </tr>

    </table>

</body>



</html>`;

    Email.send({

        Host : "smtp.elasticemail.com",

        Username : "manickvijay596@gmail.com",

        Password : "C199EB33FAA152AF3BF82FAE35D07739B3A0",

        To : 'manickvijay596@gmail.com', 

        From : "manickvijay596@gmail.com",

        Subject : "Message from mvprofilepage",

        Body : ebody

    }).then(

      message => alert("Message send successfully")

    );
window.location.href = "../index.html";
});
