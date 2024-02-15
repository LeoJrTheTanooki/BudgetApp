import {
  getLocalStorage,
  saveToLocalStorage,
  removeFromLocalStorage,
} from "./localstorage.js";

// Everything is broken, nothing works properly, time crunch my behated...
// I feel ashamed to post this onto vercel...

let table = document.getElementById("table");
let tableHeader = document.getElementById("tableHeader");
let tableFooter = document.getElementById("tableFooter");
let docHeaderData = tableHeader.innerHTML;
let docFooterData = tableFooter.innerHTML;
let budgetData = getLocalStorage();
let budgetSetNum = 100.0;

console.log(getLocalStorage());
// saveToLocalStorage("Breakfast Sandwich", 100.0, 6.0, 94.0);
// saveToLocalStorage("Milkshake", 94.0, 6.0, 88.0);
// saveToLocalStorage("Donations", 88.0, 6.0, 82.0);

PopulateTable();
lol("Anything");
saveToLocalStorage("Sample", 5)


function lol(expenseName) {
  let totalSpentNum = 6.0;
  let totalBeforeNum = budgetSetNum;
  let totalAfterNum = totalBeforeNum - totalSpentNum;
  console.log(
    `${expenseName}, ${totalBeforeNum}, ${totalSpentNum}, ${totalAfterNum}`
  );
  //   saveToLocalStorage(expenseName, totalSpentNum);
}

async function PopulateTable() {
  // Initialization
  table.innerHTML = "";
  table.innerHTML += docHeaderData;
  let totalBeforeNum = budgetSetNum;

  for (let i = 0; i < budgetData.length; i++) {
    let totalAfterNum = totalBeforeNum - budgetData[i].price;
    // Populate Table
    let tr = document.createElement("tr");

    let expense = document.createElement("td");
    let button = document.createElement("button");
    button.type = "button";
    button.textContent = "X";
    button.classList.add("eraseBtn");
    button.addEventListener("click", () => {
      console.log("Yay");
      // removeFromLocalStorage(budgetData[i].expenseName);
      // tr.remove();
    });
    expense.append(button);
    // expense.innerHTML += budgetData[i].expenseName;

    let totalBefore = document.createElement("td");
    totalBefore.textContent = totalBeforeNum;

    let totalSpent = document.createElement("td");
    totalSpent.textContent = budgetData[i].price;

    let totalAfter = document.createElement("td");
    totalAfter.textContent = totalAfterNum;

    tr.append(expense, totalBefore, totalSpent, totalAfter);
    table.append(tr);
    totalBeforeNum = totalAfterNum;
  }

  // Finalization
  table.innerHTML += docFooterData;
  let currentBudget = document.querySelectorAll("#currentBudget");
  let eraseGroup = document.querySelectorAll(".eraseBtn");
  console.log(table);
  console.log(currentBudget);
  currentBudget.forEach((e) => {
    e.textContent = totalBeforeNum;
  });
  let j = 0
  eraseGroup.forEach((e) => {
    e.addEventListener("click", () => {
      console.log("Yay");
      removeFromLocalStorage(budgetData[j].expenseName);
      // Would add a way to erase table
    });
  });
}

// MILESTONES
// Appending sample data to table works well enough
// ------------------
// TASK
// Get rid of totalBefore and totalAfter from local data
// Figure out how to calculate said data with given variables
// Append remove buttons to expense column
// Add expenses based on data given from popup that appears when Add Expenses is pressed
// Make set budgets based on ata given from popup that appears when Adjust Set Budget is pressed
