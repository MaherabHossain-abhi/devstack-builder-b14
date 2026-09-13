import { type Dispatch, type SetStateAction } from 'react';
import star from "/star.svg";
import type { TechnologyType } from '../../type';
import { Bounce, toast } from 'react-toastify';

interface CardProps {
    tech: TechnologyType;
    addStack: TechnologyType[];
    setAddStack: Dispatch<SetStateAction<TechnologyType[]>>;
}

const Card = ({ tech, addStack, setAddStack }: CardProps) => {
    const isSelected = addStack.some(
        (item) => item.id === tech.id
    );

    const handleSelectedCard = () => {
        toast.success(`${tech.name} added to stack successfully.`, {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        setAddStack([...addStack, tech]);
    };

    const badgeColors: Record<string, { bg: string; text: string }> = {
        "Popular": { bg: "#E0F2FE", text: "#0284C7" },
        "Versatile": { bg: "#D1FAE5", text: "#059669" },
        "Fast": { bg: "#FEE2E2", text: "#DC2626" },
        "SSR / Edge": { bg: "#F3E8FF", text: "#9333EA" },
        "Standard": { bg: "#DCFCE7", text: "#16A34A" },
        "Top SQL": { bg: "#E0E7FF", text: "#4F46E5" },
        "Modern": { bg: "#CFFAFE", text: "#0891B2" },
        "Containers": { bg: "#E0F2FE", text: "#0284C7" },
        "Essential": { bg: "#DBEAFE", text: "#2563EB" },
        "Easy to Learn": { bg: "#D1FAE5", text: "#059669" },
        "Cache": { bg: "#FEE2E2", text: "#DC2626" },
        "Ubiquitous": { bg: "#FEF3C7", text: "#D97706" },
        "Robust": { bg: "#E0F2FE", text: "#0284C7" },
    };

    const defaultBadgeColor = { bg: "#F3F4F6", text: "#4B5563" };
    const { bg, text } = badgeColors[tech.badge] ?? defaultBadgeColor;

    return (
        <div
            className={`card bg-base-100 border ${isSelected ? "border-black shadow-md" : "border-gray-200/80"
                } w-full p-6 shadow-sm rounded-2xl transition-all flex flex-col justify-between`}
        >
            <div>
                <div className="flex justify-between items-center">
                    <img
                        src={tech.icon}
                        className="w-10 h-10 object-contain"
                        alt={tech.name}
                    />
                    
                    <span
                        style={{ backgroundColor: bg, color: text }}
                        className="font-semibold text-xs px-3 py-1 rounded-full whitespace-nowrap"
                    >
                        {tech.badge}
                    </span>
                </div>

                <div className="mt-4">
                    <h2 className="card-title font-bold text-xl sm:text-2xl text-gray-900">
                        {tech.name}
                    </h2>

                    <p className="text-gray-500 text-sm mt-2 mb-4 leading-relaxed">
                        {tech.description}
                    </p>
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center gap-3 border-t border-gray-100 pt-4 mb-5">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md font-medium">
                        {tech.category}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm font-medium">
                        {tech.difficulty}
                    </span>

                    <span className="text-amber-500 text-xs sm:text-sm font-bold flex items-center gap-1">
                        <img className="w-4 h-4" src={star} alt="star" /> {tech.rating.toFixed(1)}
                    </span>
                </div>

                <button
                    onClick={handleSelectedCard}
                    disabled={isSelected}
                    className={`btn w-full rounded-xl font-semibold text-white transition-all cursor-pointer ${isSelected
                            ? "bg-[#C9CCD5] text-gray-700 cursor-not-allowed border-none"
                            : "bg-[#0A0F1D] hover:bg-gray-800 border-none"
                        }`}
                >
                    {isSelected ? "Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default Card;