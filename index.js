const expenseForm = document.querySelector('#expenseForm');
const expenseList = document.querySelector('#expenseList');
const totalExpenseElement = document.querySelector('#totalExpense');
const resetButton = document.querySelector('#resetButton');
let totalExpense = 0;

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.querySelector('#description').value;
    const amount = parseFloat(document.querySelector('#amount').value);
    const category = document.querySelector('#category').value;
    const date = document.querySelector('#date').value;

    if(description && amount && category && date && amount > 0 && !isNaN(amount)) {
        const newRow = document.createElement('tr');
        
        newRow.innerHTML = `
            <td>${description}</td>
            <td>${category}</td>
            <td>${amount}</td>
            <td>${date}</td>`;

        expenseList.appendChild(newRow);

        // Update total expense
        totalExpense += amount;
        totalExpenseElement.textContent = totalExpense.toFixed(2);

        // Reset the form using the form's reset method
        expenseForm.reset();
    } 
    else {
        alert('Please fill all the fields with valid data');
    }   
});

resetButton.addEventListener('click', function() {
    expenseList.innerHTML = '';
    totalExpense = 0;
    totalExpenseElement.textContent = '0';
});