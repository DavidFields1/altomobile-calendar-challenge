import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
}

export const OutlinedButton: React.FC<ButtonProps> = ({
    children,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className="p-2 rounded-lg min-w-32 text-blue-400 border-2 border-blue-400 font-semibold hover:bg-blue-400 hover:text-white"
        >
            {children}
        </button>
    );
};
