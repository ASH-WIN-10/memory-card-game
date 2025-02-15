import { useEffect } from "react"

export default function ScoreCard({ score, highScore, setHighScore }: { score: number, highScore: number, setHighScore: React.Dispatch<React.SetStateAction<number>> }) {
    useEffect(() => {
        if (score > highScore) {
            setHighScore(score)
        }
    }, [score, highScore, setHighScore])

    return (
        <div className="text-2xl text-white text-center font-bold p-2 pl-4 pr-4 bg-black/20 backdrop-blur-lg rounded-xl">
            <span>Score: {score}</span>
            <br />
            <span>Highest: {highScore}</span>
        </div>
    )
}
