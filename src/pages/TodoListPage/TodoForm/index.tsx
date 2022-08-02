import { useState } from "react";
import { useTodo } from "../../../contexts/TodoContext";
import Button from "../Button";
import styles from "./TodoForm.module.css";

export default function TodoForm() {
    const [todoInput, setTodoInput] = useState("");

    const { addTodo } = useTodo();

    function onAddTodo(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (todoInput.trim()) {
            addTodo(todoInput);
            setTodoInput("");
        } else {
            alert("Digite uma descrição válida");
        }
    }

    return (
        <form onSubmit={onAddTodo} className={styles.form}>
            <input type="text" value={todoInput} onChange={e => setTodoInput(e.target.value)} />
            <Button
                type="submit"
                backgroundColor="blue"
                icon="fa-solid fa-paper-plane"
            >Submit</Button>
        </form>
    );
}