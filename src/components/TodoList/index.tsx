
import Button from "./Button";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList(){
    return (

        <div className={styles.container}> 
            <TodoItem description="Estudar na ProWay" />
            <Button backgroundColor="dark" icon="" onClick={() => {}}  >
                submit
            </Button>
        </div>
    )
}