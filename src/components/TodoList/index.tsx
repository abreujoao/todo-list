import { useState } from "react";
import { ITodo } from "../../types/Todo";
import Button from "./Button";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList() {
    const [todos, setTodos] = useState<ITodo[]>([
        { id: 1, description: "Tarefa 01", completed: false },
        { id: 2, description: "Tarefa 02", completed: false },
    ]);

    function deleteTodo(id: number) {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    function editTodo(updatedTodo:ITodo) {
        // O map vai percorrer todos os elementos do vetor e retornar um novo vetor com as modificações feitas dentro
        // da função callback que é passada como parâmetro
        const updatedTodos = todos.map(todo => {
            // Se o id do todo for igual ao id do todo que queremos editar ele irá mudar a descrição
            if (todo.id === updatedTodo.id) {
                todo= {...updatedTodo}
            }

            // E necessário retornar alguma coisa da função map
            return todo;
        });

        setTodos(updatedTodos);
    }

    function addTodo(description:string){
        const newTodo : ITodo = {
            id: todos[todos.length -1]?.id || 0+1,
            description: description,
            completed: false
        }
        setTodos([...todos,newTodo])
    }

    return (
        <div className={styles.container}>
            <TodoForm addTodo={addTodo}/>
            <ul className={styles["todo-list"]}>
                {
                    todos.map(todo => (
                        <TodoItem key={todo.id} deleteTodo={() => deleteTodo(todo.id)} editTodo={editTodo} todo={todo} />
                    ))
                }
            </ul>
            
        </div>
    );
}