document.getElementById('btn-diposit').addEventListener('click', function() {
    // console.log('diposit button clicked'); 
    const dipositField = document.getElementById('diposit-field');
    const newDipositAmountString = dipositField.value;
    const newDipositAmount = parseFloat(newDipositAmountString);
   
    
    
   const dipositTotalElement = document.getElementById('diposit-total');
   const previousDipositTotalString = dipositTotalElement.innerText;
   const previousDipositTotal = parseFloat(previousDipositTotalString);
  
const currentDipositTotal = previousDipositTotal + newDipositAmount;

   dipositTotalElement.innerText = currentDipositTotal;
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
   const currentBalanceTotal = previousBalanceTotal + newDipositAmount;
   balanceTotalElement.innerText = currentBalanceTotal;



   dipositField.value = '';

    });