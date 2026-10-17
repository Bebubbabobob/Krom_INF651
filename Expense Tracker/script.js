"use strict";
/*
  JavaScript Midterm
  Mini Expense Tracker

  Complete the application using the requirements
  provided in the exam instructions.
*/

// ------------------------------------
// 1. SELECT DOM ELEMENTS
// ------------------------------------
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categorySelectMenu = document.getElementById("category");
const addExpenseButton = document.getElementById("add-expense");
const resetButton = document.getElementById("reset");
const expensesList = document.getElementById("expense-list");
const expenseCount  = document.getElementById("expense-count");
const totalAmount = document.getElementById("total");
const budgetStatus = document.getElementById("budget-status");
const budgetMessage = document.getElementById("message");
// ------------------------------------
// 2. APPLICATION DATA
// ------------------------------------

// Create an empty array for expenses.
const expenses = [];
// Create a variable or constant for the budget.
let budget = 500;

// ------------------------------------
// 3. FUNCTIONS
// ------------------------------------

// Create a function for adding an expense.
function addExpense() {
  if (descriptionInput.value.trim() === "" || isNaN(parseFloat(amountInput.value)) || categorySelectMenu.value === "" || parseFloat(amountInput.value) <= 0) {
    alert("Please fill in all fields correctly.");
    return;
  }
  const expense = {
    description: descriptionInput.value.trim(),
    amount: parseFloat(amountInput.value),
    category: categorySelectMenu.value
  };
  expenses.push(expense);
  totalAmount.textContent = `$${calculateTotal().toFixed(2)}`;
  expenseCount.textContent = expenses.length;
}
// Create a function for displaying expenses.
function displayExpenses() {
  expensesList.innerHTML = "";
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    const description = expense.description;
    const amount = expense.amount;
    const category = expense.category;
    const expenseItem = document.createElement("li");
    expenseItem.innerHTML = `<strong>${description}</strong> - $${amount.toFixed(2)} - ${category}`;
    expensesList.appendChild(expenseItem);
  }
}
// Create a function for calculating the total.
function calculateTotal() {
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }
  return total;
}
// Create a function for updating the budget status.
function updateBudgetStatus() {
  const total = calculateTotal();
  const remaining = budget - total;
  budgetStatus.textContent = `$${remaining.toFixed(2)}`;
  if (remaining < 0) {
    budgetStatus.style.color = "red";
    budgetMessage.textContent = "You have exceeded your budget!";
  } else {
    budgetStatus.style.color = "green";
    budgetMessage.textContent = "You are within your budget.";
  }
}
// Create a function for resetting the application.
function resetApplication() {
  expenses.length = 0;
  displayExpenses();
  updateBudgetStatus();
  expenseCount.textContent = "0";
  totalAmount.textContent = "$0.00";
  budgetMessage.textContent = "";
  budget = 500;
}

// ------------------------------------
// 4. EVENT LISTENERS
// ------------------------------------

// Add an event listener to the Add Expense button.
addExpenseButton.addEventListener("click", function() {
  addExpense();
  displayExpenses();
  updateBudgetStatus();
});
// Add an event listener to the Reset button.
resetButton.addEventListener("click", function() {
  resetApplication();
});