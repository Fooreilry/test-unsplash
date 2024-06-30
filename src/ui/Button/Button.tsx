import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {

  const buttonStyles = `${styles.Button} ${variant === "primary" ? styles.ButtonPrimary : styles.ButtonIcon}`

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

Button.displayName = "Button";
