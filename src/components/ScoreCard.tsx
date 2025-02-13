import { useEffect, useState } from "react"

export default function ScoreCard({ score }: { score: number }) {
    const [highest, setHighest] = useState(0)

    useEffect(() => {
        if (score > highest) {
            setHighest(score)
        }
    }, [score, highest])

    return (
        <div className="text-xl text-white text-center font-bold p-2 pl-4 pr-4 bg-gray-700 rounded-xl">
            <span>Score: {score}</span>
            <br />
            <span>Highest: {highest}</span>
        </div>
    )
}
