const cashOutBtn = document.getElementById("cashout-btn").addEventListener("click", function (){
    const cashOutPin = document.getElementById("cashout-pin").value;
    const cashOutPinNumber = parseInt(cashOutPin);

    if(cashOutPinNumber === 1234){
        const cashOutAmount = document.getElementById("cashout-amount").value;
        const cashOutAmountNumber = parseInt(cashOutAmount);

        const mainBalance = document.getElementById("main-balance").innerText;
        const mainBalanceNumber = parseInt(mainBalance);

        // updated balance
        const actualbalance = mainBalanceNumber - cashOutAmountNumber;
        document.getElementById("main-balance").innerText = actualbalance;

    }
    else{
        alert("wrong pin, try again")
    }
})