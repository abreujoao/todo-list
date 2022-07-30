import styles from "./TodoItem.module.css";
import { useEffect, useRef, useState } from "react";
import { ITodo } from "../../../types/Todo";
import Button from "../Button";
import TodoList from "..";

type Props = {
   todo:ITodo,
   editTodo: (updatedTodo:ITodo)=>void;
   deleteTodo: VoidFunction
}

export default function TodoItem(props: Props) {
    const [editMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState(props.todo.description);

    const inputRef = useRef<HTMLInputElement>(null!);

    function editTodo() {
        props.editTodo({...props.todo, description:editText})
        setEditMode(false);

    }

    function onCompleteTodo(){
        props.editTodo({ ...props.todo, completed: !props.todo.completed})
    }

    function onStartEditing(){
        setEditMode(true);
        
    }

    function onDelete(){
        if (window.confirm("Você realmente deseja remover essa tarefa?")){
            props.deleteTodo();
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
                            onClick={editTodo}
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