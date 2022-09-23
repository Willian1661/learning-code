//the sending functionality it's not working
//i tried smtpjs.com and Formspree to send the emails
//but both don't work anymore
//if anyone have something in mind to solve this, you can comment or fork the code :)

var btn = document.getElementById('button');
btn.addEventListener('click', function (e) {
    e.preventDefault()
    console.log('hi');

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    //var Subject = document.getElementById('subject').value;
    var MESSAGE = document.getElementById('MESSAGE').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "email@gmail.com",
        Password: "apppassword",
        To: "email@gmail.com",
        From: document.getElementById("email").value,
        Subject: "new contact",
        Body: "Name: " + name + "<br> Email: " + email + "<br> phone no.: " + phone + "<br> Message: " + MESSAGE
    }).then(
        message => alert(message + "Message sent sucefully.")
    );
})