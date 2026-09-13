import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../type";
import { Bounce, toast } from "react-toastify";
import { ImCross } from "react-icons/im";

interface StackProps {
    addStack: TechnologyType[]
    setAddStack: Dispatch<SetStateAction<TechnologyType[]>>
}

const Stack = ({ addStack, setAddStack }: StackProps) => {

    const handleRemoveStack = (Stacks: TechnologyType) => {
        const restStack = addStack.filter((selectedStack) => selectedStack.id != Stacks.id);
        setAddStack(restStack);
        toast.error(`${Stacks.name} removed successfully!`, {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
    }

    const handleRemoveAll = () => {
        setAddStack([]);
        toast.error("All stacks removed successfully!", {
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
    }

    return (
        <div className="">
            <h2 className="text-2xl font-bold">Your Stack</h2>
            <p className="text-gray-400">{addStack.length <= 0 ? "No technologies selected yet." : `${addStack.length} Technology selected`}</p>
            <div className="divider"/>

            {addStack.length <= 0 ? <p className="text-center text-gray-400 border p-4 rounded-2xl">Your Stack is empty.</p> : ""}
            {addStack.map((Stack) => {
                return (
                    <div key={Stack.id} className="flex gap-4 my-3 items-center justify-between border rounded-xl">
                        <img className="w-10 pl-2" src={Stack.icon} alt="" />
                        <div className="p-3">
                            <h2 className="text-lg font-semibold">{Stack.name}</h2>
                            <p className="text-sm">{Stack.category}</p>
                        </div>
                        
                        <p onClick={() => handleRemoveStack(Stack)} className="text-red-700 rounded-2xl px-2 mr-2 text-sm cursor-pointer"><ImCross /></p>
                    </div>
                )
            })}
            {addStack.length > 1 ? <button onClick={() => handleRemoveAll()} className="btn btn-outline btn-error px-10 py-5 w-full rounded-xl mt-5">Remove All</button> : ""}
        </div>
    );
};

export default Stack;