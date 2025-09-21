import React, { forwardRef, ReactNode } from "react";
import './style.css'
type CustomButtonProps = {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "outlined";
    bubble?: boolean;
    loading?: boolean,
    icon?: ReactNode,
    size?: "small" | "normal";
    type?: "submit" | "reset" | "button" | undefined
};

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ onClick, children, className, variant = "default", loading, icon, size }, ref) => {
        const baseStyles =
            `relative shadow-md overflow-hidden w-auto ${size === "small" ? ` h-[32px]` : `h-[42px]`} min-w-[100px] flex rounded-[6px] justify-center items-center p-[5px]  border transition-all duration-300"`;
        const defaultStyles =
            "bg-primary hover:bg-[#162717] hover:shadow-2xl text-white border-gray-300";
        const outlinedStyles =
            "bg-white text-primary border-primary hover:bg-slate-200";
        return (
            <button
                ref={ref}
                onClick={onClick}
                className={`group active:scale-[0.98] ${baseStyles} ${variant === "default" ? defaultStyles : outlinedStyles
                    } ${className}`}
                dir="rtl"
                style={{ textAlign: "right" }}
            >
                {loading ? <section className={size === "small" ? "btnLoaderTiny" : "btnLoader"}></section> : <div className="flex justify-center items-center gap-[5px] text-sm  z-10">
                    {icon && icon}
                    {children}</div>}
            </button>
        );
    }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
