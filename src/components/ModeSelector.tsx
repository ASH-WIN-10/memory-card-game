import { ModesType } from "@/App"

export default function ModeSelector({
    setCurrentMode: setSeletorMode,
    setMaxScore,
}: {
    setCurrentMode: React.Dispatch<React.SetStateAction<ModesType>>
    setMaxScore: React.Dispatch<React.SetStateAction<number>>
}) {
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const mode = e.currentTarget.textContent?.toLowerCase()
        if (mode === "easy") {
            setMaxScore(6)
            setSeletorMode("easy")
        } else if (mode === "medium") {
            setMaxScore(9)
            setSeletorMode("medium")
        } else if (mode === "hard") {
            setMaxScore(12)
            setSeletorMode("hard")
        }
    }

    return (
        <div className="h-full w-full flex flex-col gap-4 justify-center items-center backdrop-blur-lg">
            <span className="text-white text-5xl font-extrabold text-center">
                Choose difficulty:
            </span>
            <div className="flex flex-wrap justify-center gap-4">
                {["Easy", "Medium", "Hard"].map((mode) => (
                    <button
                        key={mode}
                        className="text-white w-64 text-4xl font-extrabold bg-black/20 backdrop-blur-lg p-6 rounded-xl"
                        onClick={handleClick}>
                        {mode}
                    </button>
                ))}
            </div>
        </div>
    )
}
