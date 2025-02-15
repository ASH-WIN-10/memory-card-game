import { useEffect, useState } from "react"
import charactersPromise, { Character } from "@/fetchCharacters"
import Cards from "@/components/Cards"
import Header from "@/components/Header"
import Background from "@/assets/background.jpg"
import { Loader2 } from "lucide-react"

function ModeSelector({
    setSeletorMode,
    setMaxScore,
}: {
    setSeletorMode: React.Dispatch<React.SetStateAction<boolean>>
    setMaxScore: React.Dispatch<React.SetStateAction<number>>
}) {
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const mode = e.currentTarget.textContent?.toLowerCase()
        setSeletorMode(false)
        if (mode === "easy") {
            setMaxScore(6)
        } else if (mode === "medium") {
            setMaxScore(9)
        } else if (mode === "hard") {
            setMaxScore(12)
        }
    }

    return (
        <div className="h-full w-full flex flex-col gap-4 justify-center items-center backdrop-blur-lg">
            <span className="text-white text-5xl font-extrabold text-center">
                Choose difficulty:
            </span>
            <div className="flex flex-wrap justify-center gap-4">
                {["Easy", "Medium", "Hard"].map((mode) => (
                    <button
                        className="text-white w-64 text-4xl font-extrabold bg-black/20 backdrop-blur-lg p-6 rounded-xl"
                        onClick={handleClick}>
                        {mode}
                    </button>
                ))}
            </div>
        </div>
    )
}

function App() {
    const [score, setScore] = useState(0)
    const [maxScore, setMaxScore] = useState(0)
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
                <Header score={score} />
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
            <Header score={score} />
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
