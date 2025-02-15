import { useEffect } from "react"
import { HeaderPropsType } from "./Header"
import { ModesType } from "@/App"

export default function ScoreCard({
    score,
    currentMode,
    modeHighScore,
    setModeHighScore,
}: HeaderPropsType) {
    const highScore = modeHighScore[currentMode as Exclude<ModesType, "">]

    useEffect(() => {
        if (score > highScore) {
            setModeHighScore((prev) => ({
                ...prev,
                [currentMode]: score,
            }))
        }
    }, [score, highScore, currentMode, setModeHighScore])

    return (
        <div className="text-2xl text-white text-center font-bold p-2 pl-4 pr-4 bg-black/20 backdrop-blur-lg rounded-xl">
            <span>Score: {score}</span>
            <br />
            <span>Highest: {highScore}</span>
        </div>
    )
}
