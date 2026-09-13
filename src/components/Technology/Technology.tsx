import { use, useState } from "react";
import type { TechnologyType } from "../../type";
import Card from "./Card";
import Stack from "./Stack";


interface TechnologyProps {
    technologyPromise: Promise<TechnologyType[]>
}


const Technology = ({ technologyPromise }: TechnologyProps) => {
    const technology = use(technologyPromise);

    const [addStack, setAddStack] = useState<TechnologyType[]>([]);

    return (
        <div className="container mx-auto max-w-300 p-5 sm:p-0">
            <div className="text-center sm:text-left mb-8">

                <h1 className="text-[26px] sm:text-3xl font-bold">Explore the <span className="text-[27px] sm:text-[32px] bg-linear-30 from-[#FD5526] via-[#C1239B] to-[#8537E3] bg-clip-text text-transparent">Technologies</span></h1>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 col-span-3 gap-2">
                    {
                        technology.map((tech) => {
                            return (
                                <Card key={tech.id}
                                    tech={tech}
                                    addStack={addStack}
                                    setAddStack={setAddStack}
                                />

                            )
                        })
                    }
                </div>
                <div className=" col-span-1 card bg-base-100 w-75 p-8 shadow-sm">
                    <Stack addStack={addStack} setAddStack={setAddStack} />
                </div>
            </div>
        </div>
    );
};

export default Technology;