import { useEffect, useState } from "react"
import charactersPromise, { Character } from "@/fetchCharacters"
import Cards from "@/components/Cards"
import Header from "@/components/Header"
import ModeSelector from "@/components/ModeSelector"
import Background from "@/assets/background.jpg"
import { Loader2 } from "lucide-react"

function App() {
    const [score, setScore] = useState(0)
    const [maxScore, setMaxScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState(true)
    const [selectorMode, setSelectorMode] = useState(true)

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
                className="text-white flex flex-col gap-4 bg-center bg-cover h-full sm:h-screen"
                style={{ backgroundImage: `url(${Background})` }}>
                <Header
                    score={score}
                    highScore={highScore}
                    setHighScore={setHighScore}
                />
                <div className="absolute top-0 h-full w-full grid place-items-center backdrop-blur-md">
                    <Loader2 size={64} className="animate-spin" />
                </div>
            </div>
        )
    }

    if (selectorMode) {
        return (
            <div
                className="grid place-items-center bg-center bg-cover h-screen"
                style={{ backgroundImage: `url(${Background})` }}>
                <ModeSelector
                    setSeletorMode={setSelectorMode}
                    setMaxScore={setMaxScore}
                />
            </div>
        )
    }

    return (
        <div
            className="flex flex-col gap-4 bg-center bg-cover h-full sm:h-screen"
            style={{ backgroundImage: `url(${Background})` }}>
            <Header
                score={score}
                highScore={highScore}
                setHighScore={setHighScore}
            />
            <Cards
                characters={characters}
                score={score}
                setScore={setScore}
                maxScore={maxScore}
                setSelectorMode={setSelectorMode}
            />
        </div>
    )
}

export default App
