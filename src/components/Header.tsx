import ScoreCard from "./ScoreCard"

export default function Header({ score }: { score: number }) {
    return (
        <header className="z-10 p-4 text-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
            <span
                className="text-5xl font-extrabold bg-black/20 backdrop-blur-lg rounded-xl p-2 pl-4 pr-4 cursor-help"
                title="Get points by clicking on an image but don't click on any more than once!">
                Click &amp; Remember
            </span>
            <ScoreCard score={score} />
        </header>
    )
}
