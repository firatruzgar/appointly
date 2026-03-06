import React from "react";

type InputProps = {
  label?: string;
  error?: string;
  inputSize?: "sm" | "md" | "lg";
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  error,
  inputSize = "md",
  className = "",
  id,
  name,
  ...props
}: InputProps) {
  const baseClass = "input";
  const sizeClass = inputSize !== "md" ? `input-${inputSize}` : "";
  const errorClass = error ? "input-error" : "";

  const classes = [baseClass, sizeClass, errorClass, className]
    .filter(Boolean)
    .join(" ");

  const inputId = id || name;

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <input id={inputId} className={classes} name={name} {...props} />
      {error && <span>{error}</span>}
    </div>
  );
}
