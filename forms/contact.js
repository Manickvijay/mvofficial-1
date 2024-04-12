const cname = document.getElementById('name');
const cemail = document.getElementById('email');
const csubject = document.getElementById('subject');
const cmessage = document.getElementById('message');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>Email: </h1>${cemail.value}
    <br>
    <h1>Name: </h1>${cname.value}
    <br>
    <h1>Message: </h1>${cmessage.value}
    `;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "manickvijay596@gmail.com",
        Password : "C199EB33FAA152AF3BF82FAE35D07739B3A0",
        To : 'manickvijay596@gmail.com', 
        From : "manickvijay596@gmail.com",
        Subject : ${csubject.value},
        Body : ebody

    }).then(

      message => alert(message)

    );

});
