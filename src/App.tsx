import { useEffect, useState } from "react"
import charactersPromise, { Character } from "@/fetchCharacters"
import Cards from "@/components/Cards"
import Header from "@/components/Header"

function App() {
    const [score, setScore] = useState(0)
    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
        charactersPromise.then((charactersArr) => {
            if (!charactersArr) throw new Error("Failed to fetch characters")
            setCharacters(charactersArr)
        })
    }, [])

    if (characters.length === 0) {
        return (
            <div>
                <Header score={score} />
                <div className="absolute top-0 h-full w-full grid place-items-center backdrop-blur-md">
                    <span className="text-3xl font-extrabold">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header score={score} />
            <Cards characters={characters} score={score} setScore={setScore} />
        </div>
    )
}

export default App
