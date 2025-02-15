import { useEffect, useState } from "react"
import charactersPromise, { Character } from "@/fetchCharacters"
import Cards from "@/components/Cards"
import Header from "@/components/Header"
import Background from "@/assets/background.jpg"
import { Loader2 } from "lucide-react"

function App() {
    const [score, setScore] = useState(0)
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        charactersPromise.then((charactersArr) => {
            if (!charactersArr) throw new Error("Failed to fetch characters")

            const img = new Image()
            img.src = charactersArr[0].image_url
            img.onload = () => setLoading(false)

            setCharacters(charactersArr)
        })
    }, [])

    if (loading) {
        return (
            <div
                className="text-white flex flex-col gap-4 bg-center bg-cover h-full sm:h-screen z-10"
                style={{ backgroundImage: `url(${Background})` }}>
                <Header score={score} />
                <div className="absolute top-0 h-full w-full grid place-items-center backdrop-blur-md">
                    <Loader2 size={64} className="animate-spin" />
                </div>
            </div>
        )
    }

    return (
        <div
            className="flex flex-col gap-4 bg-center bg-cover h-full sm:h-screen"
            style={{ backgroundImage: `url(${Background})` }}>
            <Header score={score} />
            <Cards characters={characters} score={score} setScore={setScore} />
        </div>
    )
}

export default App
