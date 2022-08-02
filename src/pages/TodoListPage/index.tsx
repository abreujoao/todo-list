import { useTodo } from "../../contexts/TodoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList() {
    const { todos } = useTodo();

    return (
        <div className={styles.container}>
            <TodoForm />
            <ul className={styles["todo-list"]}>
                {
                    todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))
                }
            </ul>
        </div>
    );
}