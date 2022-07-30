import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColor: string;
    icon: string;
    
    children?: ReactNode
}

export default function Button({ backgroundColor, icon, onClick,children,...rest}:  Props) {
    return (
        <button 
            {...rest}
            style={{ backgroundColor: backgroundColor }} 
            className={styles.button}
            onClick={onClick}
        >
            <i className={icon}></i>
            {children }
        </button>
    );
}