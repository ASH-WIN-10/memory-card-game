export default function ScoreCard({ score }: { score: number }) {
    return (
        <div className="text-xl text-white text-center font-bold p-2 pl-4 pr-4 bg-gray-700 rounded-xl">
            <span>Score: {score}</span>
            <br />
            <span>Highest: 0</span>
        </div>
    )
}
