
// login button click and load on the home page
const loginBtn = document.getElementById("login-btn").addEventListener("click", function (){
    // get the phone value and pin value
    const phoneNumber = document.getElementById("phone-number").value;
    const phoneValue = parseInt(phoneNumber);
    console.log(phoneValue)

    const pinNumber = document.getElementById("pin-number").value;
    const pinValue = parseInt(pinNumber);
    console.log(pinValue);

    // validate the pin number and send to the home page--
    if(phoneValue === 123456789 && pinValue === 1234){
        window.location.href = "home.html"
    }
    else{
        alert("Wrong credentials. Please try again")
    }
})
// -------------------------------------