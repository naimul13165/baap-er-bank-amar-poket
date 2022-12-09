document.getElementById("btn-withdraw").addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawAmountStrin = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountStrin);
    if(isNaN(newWithdrawAmount)){
        alert("please provide a valid number");
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawTotalStrin = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawTotalStrin);

    


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalancAmountstrin = balanceTotalElement.innerText;
    const previousBalancTotal = parseFloat(previousBalancAmountstrin);

    withdrawField.value='';
    if(previousBalancTotal<newWithdrawAmount){
        alert('tomar baper bank e eto taka nai sona')
        return
    }


    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = currentWithdrawTotal;


    const totalBalanceAmount =  previousBalancTotal-newWithdrawAmount;
    balanceTotalElement.innerText  = totalBalanceAmount;

    
    
})