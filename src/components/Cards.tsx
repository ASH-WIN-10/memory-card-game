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

function getJumbledCharacters(
    characters: Character[],
    seenCharacters: number[],
): Character[] {
    const unseenCharacters = characters.filter(
        (character) => !seenCharacters.includes(character.mal_id),
    )
    const jumbledCharacters: Character[] = []

    if (unseenCharacters.length > 0) {
        const randomUnseen =
            unseenCharacters[
                Math.floor(Math.random() * unseenCharacters.length)
            ]
        jumbledCharacters.push(randomUnseen)
    }

    const remainingCharacters = characters.filter(
        (character) => !jumbledCharacters.includes(character),
    )

    while (jumbledCharacters.length < 4) {
        const randomIndex = Math.floor(
            Math.random() * remainingCharacters.length,
        )
        jumbledCharacters.push(remainingCharacters[randomIndex])
        remainingCharacters.splice(randomIndex, 1)
    }

    jumbledCharacters.sort(() => Math.random() - 0.5)

    return jumbledCharacters
}

type CardsPropsType = {
    characters: Character[]
    score: number
    setScore: React.Dispatch<React.SetStateAction<number>>
}

export default function Cards({ characters, score, setScore }: CardsPropsType) {
    const [jumbledCharacters, setJumbledCharacters] = useState<Character[]>([])
    const [seen, setSeen] = useState<number[]>([])

    const [result, setResult] = useState("")
    const dialogRef = useRef<HTMLDialogElement | null>(null)

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

        setJumbledCharacters(getJumbledCharacters(characters, seen))
    }, [score, setScore, characters, seen])

    return (
        <div className="flex-1 flex pb-6 px-4 gap-10 flex-wrap items-center justify-center">
            <Dialog result={result} dialogRef={dialogRef} />
            {jumbledCharacters.map((character) => (
                <Card
                    key={character.mal_id}
                    character={character}
                    handleClick={handleClick}
                />
            ))}
        </div>
    )
}
