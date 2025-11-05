import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
                                                variant = "primary",
                                                size = "md",
                                                disabled,
                                                children,
                                                ...props
                                              }) => {
  return (
      <button
          className={clsx(
              styles.button,
              styles[variant],
              styles[size],
              disabled && styles.disabled
          )}
          disabled={disabled}
          {...props}
      >
        {children}
      </button>
  );
};
