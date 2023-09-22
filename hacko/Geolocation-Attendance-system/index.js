function sendOTP() {
    const mail = document.getElementById('Mail');
    const OTPverify = document.getElementsByClassName('otpVerify')[0];
    let otpgenerated = generateOTP();

    let emailBody =
        `<h1>CREATED BY SPICEE_ESHWAR</h1>
        <h2>YOUR OTP IS: </h2> ${otpgenerated} `;

    Email.send({
        SecureToken: "ecc3e273-c690-4451-a59c-b7d95da784db",
        To: mail.value,
        From: "eshwarpriyan56@gmail.com",
        Subject: "OTP VERIFICATION",
        Body: emailBody
    }).then(
        message => {

            if (message === "OK") {
                alert("OTP sent successfully!!")
                document.getElementById('otpbtn').disabled = false;
            }

            OTPverify.style.display = "block";
            const otp = document.getElementById('otp');
            const otpbtn = document.getElementById('otpbtn');

            otpbtn.addEventListener('click', () => {
                if (otp.value == otpgenerated) {
                    alert("Email address verified..");
                    document.getElementById('btnsubmit').disabled = false;
                } else {
                    alert("Invalid OTP");
                }
            });
        }
    );
}

function generateOTP() {
    let otp = '';
    for (let i = 0; i < 4; i++) {
        otp += Math.floor(Math.random() * 9) + 1
    }
    return otp;
}

const findLoc = () => {

    const sucess = (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        let res = document.querySelector('p');

        if (lat == 13.0383872 && long == 80.2095104) {
            let verifyBtn = document.getElementById('resultlogo')
            verifyBtn.style.display = 'block';
            res.innerHTML = 'Attendance Submitted successfully';
            res.style.color = 'green';
            res.style.display = 'block';

            //FIREBASE
            const firebaseConfig = {
                apiKey: "AIzaSyDDqwJqiUMANRjzEn-nTWmeF69DZXoJ9-Y",
                authDomain: "attendance-10f07.firebaseapp.com",
                projectId: "attendance-10f07",
                storageBucket: "attendance-10f07.appspot.com",
                messagingSenderId: "330170476656",
                appId: "1:330170476656:web:6a60ad385db942bf012cb5"
            };
            firebase.initializeApp(firebaseConfig);

            var contactFormDB = firebase.database().ref("attendance");

            document.getElementById("btnsubmit").addEventListener("submit", submitForm);
            // const getElementVal = (id) => {
            //     return document.getElementById(id).value;
            // };

            function submitForm(e) {
                e.preventDefault();

                let ans = document.getElementById('paraResult').value;
                let db_mail = document.getElementById('Mail').value;
                saveMessages(ans, db_mail);
                document.getElementById("paraResults").reset();
            }

            const saveMessages = (ans, db_mail) => {
                var newContactForm = contactFormDB.push();
                newContactForm.set({
                    Today: ans,
                    Email: db_mail
                });
            };

        } else {
            let btnVerify = document.getElementById('Wrong')
            btnVerify.style.display = 'block';
            res.innerHTML = 'Attendance submission was failed due to different location';
            res.style.color = 'red';
            res.style.display = 'block';
        }
    }

    const error = (err) => {
        let results = document.getElementsByClassName('result')[0];
        results.innerHTML = "An Error Occurred!!" + err.message;
        results.style.color = 'red';
    }
    navigator.geolocation.getCurrentPosition(sucess, error);

}
document.querySelector('.submit').addEventListener('click', findLoc);