
import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { baseURL } from "../services/api";
import { ITodo } from "../types/Todo";

type ITodoContext = {
    todos: ITodo[]
    addTodo: (description: string) => void
    editTodo: (updatedTodo: ITodo) => void
    deleteTodo: (id: number) => void

}

const TodoContext = createContext<ITodoContext>(null!)

export function TodoProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        //iife
        (async () => {
            const todos = (await axios.get(`${baseURL}/todos`)).data;
            setTodos(todos)
        })();
    }, []);

    async function addTodo(description: string) {
        try {
            const newTodo = (await axios.post(`${baseURL}/todos`, { description })).data;
            setTodos([...todos, newTodo])
        } catch (error) {
            alert("não foi possivel adicionar a tarefa")
        }

    }


    async function editTodo(updatedTodo: ITodo) {
        // O map vai percorrer todos os elementos do vetor e retornar um novo vetor com as modificações feitas dentro
        // da função callback que é passada como parâmetro
        try {
            await axios.put(`${baseURL}/todos/${updatedTodo.id}`, updatedTodo)
            const updatedTodos = todos.map(todo => {
                // Se o id do todo for igual ao id do todo que queremos editar ele irá mudar a descrição
                if (todo.id === updatedTodo.id) {
                    todo = { ...updatedTodo }
                }

                // E necessário retornar alguma coisa da função map
                return todo;
            });

            setTodos(updatedTodos);

        }catch{
            alert("não foi possivel carregar esta tarefa")
        }
        
    }

    async function deleteTodo(id: number) {
        try {
            await axios.delete(`${baseURL}/todos/${id}`)
            const updatedTodos = todos.filter(todo => todo.id !== id);
            setTodos(updatedTodos);
        } catch (error) {
            alert("não foi possivel adicionar a tarefa")
        }

    }


    return (
        <TodoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>

    )

}

export const useTodo = () => useContext(TodoContext);