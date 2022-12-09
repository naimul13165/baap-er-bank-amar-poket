document.getElementById('deposit-btn').addEventListener('click' ,function(){
    const depositInputField = document.getElementById('deposit-input-field');
    const newDepositAmountStrin = depositInputField.value;
    const newDepositAmount = parseFloat(newDepositAmountStrin);
    if(isNaN(newDepositAmount)){
        alert("please provide a valid number");
        return;
    }

    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalStrin = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalStrin);
    const currentDepositAmount = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositAmount;


    const totalBalanceAmountElemnt = document.getElementById("balance-total")
    const totalBalanceAmountstrin = totalBalanceAmountElemnt.innerText;
    const totalPreviousBalance = parseFloat(totalBalanceAmountstrin);
    const currentTotalBalance = totalPreviousBalance + newDepositAmount;
    totalBalanceAmountElemnt.innerText = currentTotalBalance;


    depositInputField.value ='';
})