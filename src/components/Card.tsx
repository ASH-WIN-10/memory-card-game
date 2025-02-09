import { Character } from "@/fetchCharacters"

export default function Card({ character }: { character: Character }) {
    return (
        <div
            className="bg-cover bg-center w-56 h-72 flex items-end rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{
                backgroundImage: `url(${character.image_url})`,
                boxShadow: "rgba(0, 0, 0, 0.4) 3px 5px 8px",
            }}>
            <span className="w-full text-center text-xl font-bold text-white p-4 bg-black/50 backdrop-blur-md rounded-b-xl">
                {character.name}
            </span>
        </div>
    )
}
