import { useState } from "react"
import { Character } from "@/fetchCharacters"
import Card from "@/components/Card"

export default function Cards({ characters }: { characters: Character[] }) {
    const [seen, setSeen] = useState<number[]>([])
    characters = characters.sort(() => Math.random() - 0.5)
    console.log(characters)

    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        const mal_id = parseInt(e.currentTarget.dataset.mal_id!)

        if (seen.includes(mal_id)) {
            alert("Game Over!")
            setSeen([])
            return
        }
        setSeen([...seen, mal_id])
    }

    if (seen.length === characters.length) {
        alert("You win!")
        setSeen([])
    }

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
