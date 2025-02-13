import { useEffect, useState } from "react"
import { Character } from "@/fetchCharacters"
import Card from "@/components/Card"

type PropsType = {
    characters: Character[]
    score: number
    setScore: React.Dispatch<React.SetStateAction<number>>
}

export default function Cards({ characters, score, setScore }: PropsType) {
    const [seen, setSeen] = useState<number[]>([])
    characters = characters.sort(() => Math.random() - 0.5)

    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        const mal_id = parseInt(e.currentTarget.dataset.mal_id!)

        if (seen.includes(mal_id)) {
            alert("Game Over!")
            setScore(0)
            setSeen([])
            return
        }

        setScore(score + 1)
        setSeen([...seen, mal_id])
    }

    useEffect(() => {
        if (score === characters.length) {
            alert("You win!")
            setScore(0)
            setSeen([])
        }
    }, [score, setScore, characters.length])

    return (
        <div className="p-8 w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-5 m-auto justify-items-center">
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
