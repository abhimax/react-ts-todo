import { useContext, useRef } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todo-context";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
          }
          todosCtx.addTodo(enteredText);
    }
    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="newTodo">Todo name</label>
        <input id="newTodo" ref={todoTextInputRef}></input>
        <button>Add Todo</button>
    </form>
}
export default NewTodo;