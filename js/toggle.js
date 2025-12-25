const cashOutBigBtn = document.getElementById("cash-big-btn").addEventListener("click", function(){
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden")
})

const addMoneyBigBtn = document.getElementById("add-big-btn").addEventListener("click", function(){
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
})