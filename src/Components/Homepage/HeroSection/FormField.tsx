"use client";
import * as React from "react";

interface FormFieldProps {
  label: string;
  id: string;
  type?: "text" | "date" | "select";
  placeholder?: string;
  value: string | number;
  onChange: (value: string | number) => void;
  options?: Array<{ value: number; label: string }>;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  options,
  className = "",
}) => {
  const baseInputClasses =
    "px-2 py-1 w-full text-base rounded-lg border border-gray-300 border-solid transition-all duration-[0.2s]";

  if (type === "select" && options) {
    return (
      <div className="text-left">
        <label htmlFor={id} className="mb-2 text-sm font-medium text-gray-600">
          {label}
        </label>
        <select
          className={`${baseInputClasses} cursor-pointer bg-white ${className}`}
          id={id}
          value={value}
          onChange={(event) => onChange(parseInt(event.target.value))}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="text-left">
      <label htmlFor={id} className="mb-2 text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        className={`${baseInputClasses} ${className}`}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};
