const addMoneyBtn = document.getElementById("add-money-btn").addEventListener("click", function(){
    const pinNumber = document.getElementById("pin-number").value;
    const pinValue = parseInt(pinNumber);
    
    if(pinValue === 1234){
        const mainBalance = document.getElementById("main-balance").innerText;
        const mainBalanceNumber = parseInt(mainBalance);
        
        const addAmount = document.getElementById("add-amount").value;
        const addAmountNumber = parseInt(addAmount);

        const totalbalance = mainBalanceNumber + addAmountNumber;
        
        // update the balnace
        document.getElementById("main-balance").innerText = totalbalance;
    }
    else{
        alert("wrong pin, try again")
    }
})