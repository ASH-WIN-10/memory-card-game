import { useEffect, useRef, useState } from "react"
import { Character } from "@/scripts/fetchCharacters"
import Card from "@/components/Card"
import { ModesType } from "@/App"
import { getJumbledCharacters } from "@/scripts/getJumbledCharacters"
import Dialog from "./Dialog"

type CardsPropsType = {
    characters: Character[]
    score: number
    setScore: React.Dispatch<React.SetStateAction<number>>
    maxScore: number
    setCurrentMode: React.Dispatch<React.SetStateAction<ModesType>>
}

export default function Cards({
    characters,
    score,
    setScore,
    maxScore,
    setCurrentMode,
}: CardsPropsType) {
    const [jumbledCharacters, setJumbledCharacters] = useState<Character[]>([])
    const [seen, setSeen] = useState<number[]>([])

    const [result, setResult] = useState("")
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        const mal_id = parseInt(e.currentTarget.dataset.mal_id!)

        if (seen.includes(mal_id)) {
            setSeen([])
            setResult("You lose!")
            dialogRef.current?.showModal()
            return
        }

        setScore(score + 1)
        setSeen([...seen, mal_id])
    }

    useEffect(() => {
        if (score === maxScore) {
            setSeen([])
            setResult("You win!")
            dialogRef.current?.showModal()
        }

        setJumbledCharacters(getJumbledCharacters(characters, seen))
    }, [score, setScore, maxScore, characters, seen, setCurrentMode])

    return (
        <div className="flex-1 flex pb-6 px-4 gap-10 flex-wrap items-center justify-center">
            <Dialog
                result={result}
                dialogRef={dialogRef}
                setCurrentMode={setCurrentMode}
                currentScore={score}
                setScore={setScore}
            />
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
