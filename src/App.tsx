import { useEffect, useState } from "react"
import charactersPromise, { Character } from "@/fetchCharacters"
import Cards from "@/components/Cards"
import Header from "@/components/Header"
import ModeSelector from "@/components/ModeSelector"
import Background from "@/assets/background.jpg"
import { Loader2 } from "lucide-react"

export type ModesType = "easy" | "medium" | "hard" | ""
export type ModeHighScoreType = Record<Exclude<ModesType, "">, number>

function App() {
    const [score, setScore] = useState(0)
    const [maxScore, setMaxScore] = useState(0)
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState(true)
    const [currentMode, setCurrentMode] = useState<ModesType>("")
    const [modeHighScore, setModeHighScore] = useState<ModeHighScoreType>({
        easy: 0,
        medium: 0,
        hard: 0,
    })

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
                className="text-white grid place-items-center bg-center bg-cover h-full sm:h-screen"
                style={{ backgroundImage: `url(${Background})` }}>
                <div className="h-screen w-full grid place-items-center backdrop-blur-md">
                    <Loader2 size={64} className="animate-spin" />
                </div>
            </div>
        )
    }

    if (currentMode === "") {
        return (
            <div
                className="grid place-items-center bg-center bg-cover h-screen"
                style={{ backgroundImage: `url(${Background})` }}>
                <ModeSelector
                    setCurrentMode={setCurrentMode}
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
                currentMode={currentMode}
                modeHighScore={modeHighScore}
                setModeHighScore={setModeHighScore}
            />
            <Cards
                characters={characters}
                score={score}
                setScore={setScore}
                maxScore={maxScore}
                setCurrentMode={setCurrentMode}
            />
        </div>
    )
}

export default App
