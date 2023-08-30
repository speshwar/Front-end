function sendOTP() {
    const mail = document.getElementById('Mail');
    const OTPverify = document.getElementsByClassName('otpVerify')[0];
    let otpgenerated = generateOTP();

    let emailBody =
        `<h1>CREATED BY SPICEE_ESHWAR</h1>
        <h2>YOUR OTP IS: </h2> ${otpgenerated} `;

    Email.send({
        SecureToken: "fdc15f8b-342b-46b0-8913-e7d6077c7895",
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

        if (lat == 12.8234263 && long == 80.0458) {
            let verifyBtn = document.getElementById('resultlogo')
            verifyBtn.style.display = 'block';
            res.innerHTML = 'Attendance Submitted successfully';
            res.style.color = 'green';
            res.style.display = 'block';

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
