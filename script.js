const loginBtn = document.getElementById("Enter");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none"; 
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"; 
})