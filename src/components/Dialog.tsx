import { ModesType } from "@/App"

export default function Dialog({
    result,
    dialogRef,
    setCurrentMode,
    currentScore,
    setScore,
}: {
    result: string
    dialogRef: React.RefObject<HTMLDialogElement | null>
    setCurrentMode: React.Dispatch<React.SetStateAction<ModesType>>
    currentScore: number
    setScore: React.Dispatch<React.SetStateAction<number>>
}) {
    function handleClick() {
        setCurrentMode("")
        setScore(0)
        dialogRef.current?.close()
    }

    return (
        <dialog
            ref={dialogRef}
            className="w-4/5 md:w-1/2 lg:w-1/3 p-10 bg-black/20 text-white backdrop-blur-lg rounded-xl backdrop:backdrop-blur-sm">
            <div className="h-56 flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col text-center">
                    <span className="text-4xl font-extrabold">
                        {result} {result === "You win!" ? "🎉" : "😢"}
                    </span>
                    <span className="text-2xl font-bold">
                        Your Score: {currentScore}
                    </span>
                </div>
                <button
                    className="text-lg font-bold bg-black/40 py-3 px-6 rounded-xl"
                    onClick={handleClick}>
                    Play again
                </button>
            </div>
        </dialog>
    )
}
