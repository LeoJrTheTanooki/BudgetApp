const saveToLocalStorage = (
  expenseParam,
  priceParam
) => {
  let budget = getLocalStorage();
  let object = {
    expenseName: expenseParam,
    price: priceParam,
  };
  budget.push(object);
  localStorage.setItem("Budget", JSON.stringify(budget));
};

const getLocalStorage = () => {
  let localStorageData = localStorage.getItem("Budget");
  if (localStorageData == null) {
    return [];
  }
  return JSON.parse(localStorageData.split());
};

const removeFromLocalStorage = (expenseParam) => {
  let budget = getLocalStorage();
  let namedIndex = budget.indexOf(expenseParam);
  budget.splice(namedIndex, 1);
  localStorage.setItem("Budget", JSON.stringify(budget));
};

export { saveToLocalStorage, getLocalStorage, removeFromLocalStorage };
