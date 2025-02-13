import { Character } from "@/fetchCharacters"

type PropsType = {
    character: Character
    handleClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

export default function Card({ character, handleClick }: PropsType) {
    return (
        <div
            className="bg-cover bg-center w-56 h-72 flex items-end rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{
                backgroundImage: `url(${character.image_url})`,
                boxShadow: "rgba(0, 0, 0, 0.4) 3px 5px 8px",
            }}
            data-mal_id={character.mal_id}
            onClick={handleClick}>
            <span className="w-full text-center text-xl font-bold text-white p-4 bg-black/30 backdrop-blur-md rounded-b-xl">
                {character.name}
            </span>
        </div>
    )
}
