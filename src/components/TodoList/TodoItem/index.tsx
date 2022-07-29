
import styles from "./TodoItem.module.css";
import Button from "../Button";
import { useState } from "react";
[
    {id :1, description: "dadadada", completed:false},
    {id :2, description: "dadadada", completed:false},
]

function editTodo(id:number,description:string){
    const updatedTodos = todos.map(todo =>){
        if (todo.id === id){
            todo.description = description
        }
        return todo
    }
}


type Props = {
    description: string;
    editTodo:
}

export default function TodoItem(props: Props) {
    const [editMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState(props.description);
    
    function editTodo(){
        setEditMode(false);
    }

    return (
        <li className={styles["todo-item"]}>
            <input type="checkbox" />
            {
                editMode
                    ? <>
                        <input type="text" value={editText} onChange={e => setEditText(e.target.value)} />
                        <Button
                            backgroundColor="green"
                            icon="fa-solid fa-check"
                            onClick={() => setEditMode(true)}
                        />
                    </>
                    :<> <p>{props.description}</p>
                      <Button 
                         backgroundColor="green" 
                         icon="fa-solid fa-pen-to-square" 
                        onClick={() => setEditMode(true)}
 
                     />
                    </>
            }
            
            <Button backgroundColor="red" icon="fa-solid fa-trash" onClick={() => { }} />
        </li>
    );
}
