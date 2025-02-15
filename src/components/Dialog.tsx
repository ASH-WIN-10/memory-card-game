import { ModesType } from "@/App"

export default function Dialog({
    result,
    dialogRef,
    setCurrentMode,
}: {
    result: string
    dialogRef: React.RefObject<HTMLDialogElement | null>
    setCurrentMode: React.Dispatch<React.SetStateAction<ModesType>>
}) {
    function handleClick() {
        setCurrentMode("")
        dialogRef.current?.close()
    }

    return (
        <dialog
            ref={dialogRef}
            className="w-4/5 md:w-1/2 lg:w-1/3 p-10 bg-black/20 text-white backdrop-blur-lg rounded-xl backdrop:backdrop-blur-sm">
            <div className="flex flex-col items-center gap-6">
                <span className="text-4xl font-extrabold">{result}</span>
                <button
                    className="text-lg font-bold bg-black/40 py-3 px-6 rounded-xl"
                    onClick={handleClick}>
                    Play again
                </button>
            </div>
        </dialog>
    )
}
