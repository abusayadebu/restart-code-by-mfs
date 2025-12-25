const cashOutBigBtn = document.getElementById("cash-big-btn").addEventListener("click", function(){
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden")
    document.getElementById("transaction-div").classList.add("hidden");
})

const addMoneyBigBtn = document.getElementById("add-big-btn").addEventListener("click", function(){
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("transaction-div").classList.add("hidden");
})

// transaction btn toggle
const transactionBigBtn = document.getElementById("transaction-btn").addEventListener("click", function(){
    document.getElementById("transaction-div").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
})
