import clsx from "clsx";

// Interfaces
interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost" | "link";
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "standard"
    | "default";
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "solid",
  color = "default",
  size = "md",
  rounded = "md",
  icon,
  iconPosition = "left",
  disabled = false,
  loading = false,
  fullWidth = false,
  type = "button",
  className = "",
}) => {
  // Base styles
  const baseStyles =
    "font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  // Size styles
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }[size];

  // Color and variant styles
  const colorStyles = {
    standard: {
      solid: "bg-[#304EA1] text-white hover:bg-[#223a7e]",
      outline:
        "bg-white text-[#304EA1] border border-[#4668B1] hover:bg-[#f0f4ff]",
      ghost: "text-[#304EA1] hover:bg-[#f0f4ff]",
      link: "text-[#304EA1] hover:underline",
    },

    primary: {
      solid: "bg-indigo-600 text-white hover:bg-indigo-700",
      outline:
        "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50",
      ghost: "text-indigo-600 hover:bg-indigo-50",
      link: "text-indigo-600 hover:underline",
    },
    secondary: {
      solid: "bg-gray-600 text-white hover:bg-gray-700",
      outline: "bg-white text-gray-600 border border-gray-600 hover:bg-gray-50",
      ghost: "text-gray-600 hover:bg-gray-50",
      link: "text-gray-600 hover:underline",
    },
    danger: {
      solid: "bg-red-600 text-white hover:bg-red-700",
      outline: "bg-white text-red-600 border border-red-600 hover:bg-red-50",
      ghost: "text-red-600 hover:bg-red-50",
      link: "text-red-600 hover:underline",
    },
    success: {
      solid: "bg-green-600 text-white hover:bg-green-700",
      outline:
        "bg-white text-green-600 border border-green-600 hover:bg-green-50",
      ghost: "text-green-600 hover:bg-green-50",
      link: "text-green-600 hover:underline",
    },
    warning: {
      solid: "bg-yellow-600 text-white hover:bg-yellow-700",
      outline:
        "bg-white text-yellow-600 border border-yellow-600 hover:bg-yellow-50",
      ghost: "text-yellow-600 hover:bg-yellow-50",
      link: "text-yellow-600 hover:underline",
    },
    default: {
      solid: "bg-gray-800 text-white hover:bg-gray-900",
      outline: "bg-white text-gray-800 border border-gray-800 hover:bg-gray-50",
      ghost: "text-gray-800 hover:bg-gray-50",
      link: "text-gray-800 hover:underline",
    },
  };

  // Rounded styles
  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  }[rounded];

  // Combine styles
  const variantStyle = colorStyles[color][variant];
  const fullWidthStyle = fullWidth ? "w-full" : "";

  // Handle loading state
  const content = loading ? (
    <span className="flex items-center justify-center">
      <span className="spinner mr-2"></span> Loading...
    </span>
  ) : icon ? (
    <span className="flex items-center justify-center gap-2">
      {iconPosition === "left" && icon}
      {label}
      {iconPosition === "right" && icon}
    </span>
  ) : (
    label
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        baseStyles,
        sizeStyles,
        roundedStyles,
        variantStyle,
        fullWidthStyle,
        className
      )}
      aria-label={loading ? "Loading" : label}
    >
      {content}
    </button>
  );
};

export default Button;
