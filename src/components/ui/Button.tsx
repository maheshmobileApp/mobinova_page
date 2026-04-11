import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  href?: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
}) => {
  const baseStyle =
    "px-4 py-2 rounded-xl font-medium transition";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:opacity-90",
    outline:
      "border border-gray-300 text-white-700 hover:bg-primary-100 hover:text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;