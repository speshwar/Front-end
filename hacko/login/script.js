let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});

// remaining tags

//ADMIN
let admin = document.getElementById('adminbtn');
admin.addEventListener("click", () => {

    let email = document.getElementById('email').value
    let pass = document.getElementById('password').value
    if (email === "admin" && pass === "admin") {
        window.location.href = "../admin/index.html"

    } else {
        console.log('Admin login failed');
    }

});

//STUDENT
let stud = document.getElementById('studbtn')
stud.addEventListener("click", () => {

    let adEmail = document.getElementById('emails').value
    let adPass = document.getElementById('passwords').value

    if (adEmail === "student" && adPass === "student") {
        window.location.href = '../Geolocation-Attendance-system/index.html'
            //console.log('student login passes');
    } else {
        console.log('student login failed');
    }
});