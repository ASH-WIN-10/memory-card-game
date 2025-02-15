import { ModeHighScoreType, ModesType } from "@/App"
import ScoreCard from "./ScoreCard"

export type HeaderPropsType = {
    score: number
    currentMode: ModesType
    modeHighScore: ModeHighScoreType
    setModeHighScore: React.Dispatch<React.SetStateAction<ModeHighScoreType>>
}

export default function Header(props: HeaderPropsType) {
    return (
        <header className="z-10 p-4 text-white flex flex-wrap gap-4 justify-center sm:justify-between items-center">
            <span
                className="text-5xl font-extrabold bg-black/20 backdrop-blur-lg rounded-xl p-2 pl-4 pr-4 cursor-help"
                title="Get points by clicking on an image but don't click on any more than once!">
                Click &amp; Remember
            </span>
            <ScoreCard {...props} />
        </header>
    )
}
