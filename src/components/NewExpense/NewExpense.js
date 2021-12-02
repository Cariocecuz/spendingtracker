import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [newExpenseClicked, setNewExpenseClicked] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setNewExpenseClicked(false);
  }

  function onClickHandle() {
    setNewExpenseClicked(true);
  }

  function stopEditing(props) {
    setNewExpenseClicked(false);
  }
  return (
    <div className="new-expense">
      {!newExpenseClicked && (
        <button onClick={onClickHandle}>Add new expense</button>
      )}
      {newExpenseClicked && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
}
export default NewExpense;
