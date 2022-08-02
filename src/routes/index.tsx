import { Route, Routes } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import TodoListPage from "../pages/TodoListPage";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="todo-app" element={<TodoListPage />} />
                <Route path="login" element={<LoginPage />} />
            </Route>
        </Routes>
    );
}