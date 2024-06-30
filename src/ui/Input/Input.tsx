import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className={styles.SearchInputWrapper}>
        {leftIcon && <div className={styles.IconLeft}>{leftIcon}</div>}
        <input type="text" className={styles.Input} {...props} ref={ref} />
        {rightIcon && <div className={styles.IconRight}>{rightIcon}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";
