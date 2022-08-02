import { useEffect, useRef, useState } from "react";
import { useTodo } from "../../../contexts/TodoContext";
import { ITodo } from "../../../types/Todo";
import Button from "../Button";
import styles from "./TodoItem.module.css";

type Props = {
   todo:ITodo;
}

export default function TodoItem(props: Props) {
    const [editMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState(props.todo.description);

    const inputRef = useRef<HTMLInputElement>(null!);

    const { editTodo, deleteTodo} = useTodo();

    function onEditTodo() {
        editTodo({...props.todo, description:editText})
        setEditMode(false);

    }

    function onCompleteTodo(){
        editTodo({ ...props.todo, completed: !props.todo.completed})
    }

    function onStartEditing(){
        setEditMode(true);
        
    }

    function onDelete(){
        if (window.confirm("Você realmente deseja remover essa tarefa?")){
            deleteTodo(props.todo.id);
        }
    }

    useEffect(()=>{
        if (editMode){
            inputRef.current.focus()
        }
    }, [editMode])

    

    return (
        <li className={styles["todo-item"]}>
            <input type="checkbox" checked={props.todo.completed} onChange={onCompleteTodo}/>
            {
                editMode
                    ? <>
                        <input ref={inputRef} type="text" value={editText} onChange={e => setEditText(e.target.value)} />
                        <Button
                            backgroundColor="green"
                            icon="fa-solid fa-check"
                            onClick={onEditTodo}
                        />
                    </>
                    : <>
                        <p>{props.todo.description}</p>
                        <Button
                            backgroundColor="green"
                            icon="fa-solid fa-pen-to-square"
                            onClick={() => setEditMode(true)}
                        />
                    </>
            }

            <Button backgroundColor="red" icon="fa-solid fa-trash" onClick={onDelete} />
        </li>
    );
}