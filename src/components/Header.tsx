import ScoreCard from "./ScoreCard"

export default function Header() {
    return (
        <header
            className="p-4 text-white bg-gray-900 flex flex-wrap gap-2 justify-center sm:justify-between items-center"
            style={{ boxShadow: "rgba(0, 0, 0, 0.4) 3px 5px 8px" }}>
            <div className="flex flex-col gap-1">
                <span className="text-5xl font-extrabold">Memory Card</span>
                <span className="text-sm">
                    - Get points by clicking on an image but don't click on any
                    more than once!
                </span>
            </div>
            <ScoreCard />
        </header>
    )
}
