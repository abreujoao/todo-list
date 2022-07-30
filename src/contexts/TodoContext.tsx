
import { createContext, ReactNode } from "react";
import { ITodo } from "../types/Todo";

type ITodoContext ={
    todos: ITodo[]
    addTodo: (description:string) => void
    editTodo: (updatedTodo: ITodo)=> void
    deleteTodo: (id:number)=> void

}

const TodoContext = createContext<ITodoContext>(null!)

export function TodoProvider({ children} : {children: ReactNode}){
    <TodoContext.Provider>
        {children}
    </TodoContext.Provider>
}