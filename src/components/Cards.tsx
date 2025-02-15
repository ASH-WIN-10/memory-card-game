import { useEffect, useRef, useState } from "react"
import { Character } from "@/fetchCharacters"
import Card from "@/components/Card"

function Dialog({
    result,
    dialogRef,
}: {
    result: string
    dialogRef: React.RefObject<HTMLDialogElement | null>
}) {
    return (
        <dialog
            ref={dialogRef}
            className="w-4/5 md:w-1/2 lg:w-1/3 p-10 bg-black/20 text-white backdrop-blur-lg rounded-xl backdrop:backdrop-blur-sm">
            <form method="dialog" className="flex flex-col items-center gap-6">
                <span className="text-4xl font-extrabold">{result}</span>
                <button className="text-lg font-bold bg-black/40 py-3 px-6 rounded-xl">
                    Play again
                </button>
            </form>
        </dialog>
    )
}

type CardsPropsType = {
    characters: Character[]
    score: number
    setScore: React.Dispatch<React.SetStateAction<number>>
}

export default function Cards({ characters, score, setScore }: CardsPropsType) {
    const [seen, setSeen] = useState<number[]>([])

    const [result, setResult] = useState("")
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    characters = characters.sort(() => Math.random() - 0.5)

    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        const mal_id = parseInt(e.currentTarget.dataset.mal_id!)

        if (seen.includes(mal_id)) {
            setScore(0)
            setSeen([])
            setResult("You lose!")
            dialogRef.current?.showModal()
            return
        }

        setScore(score + 1)
        setSeen([...seen, mal_id])
    }

    useEffect(() => {
        if (score === characters.length) {
            setScore(0)
            setSeen([])
            setResult("You win!")
            dialogRef.current?.showModal()
        }
    }, [score, setScore, characters.length])

    return (
        <div className="p-8 w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-5 m-auto justify-items-center">
            <Dialog result={result} dialogRef={dialogRef} />
            {characters.map((character) => (
                <Card
                    key={character.mal_id}
                    character={character}
                    handleClick={handleClick}
                />
            ))}
        </div>
    )
}
