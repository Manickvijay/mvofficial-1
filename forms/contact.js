const fname = document.getElementById('fname');

const lname = document.getElementById('lname');

const submit = document.getElementById('submit');



submit.addEventListener('submit',(e)=>{

    e.preventDefault();

    let ebody = `

    <h1>First Name: </h1>${fname.value}

    <br>

    <h1>Last Name: </h1>${lname.value}

    `;

    Email.send({

        Host : "smtp.elasticemail.com",

        Username : "manickvijay596@gmail.com",

        Password : "C199EB33FAA152AF3BF82FAE35D07739B3A0",

        To : 'manickvijay596@gmail.com', 

        From : "manickvijay596@gmail.com",

        Subject : "Help for mvprofilepage",

        Body : ebody

    }).then(

      message => alert(message)

    );

});
