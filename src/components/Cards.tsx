import { Character } from "@/fetchCharacters"
import Card from "@/components/Card"

export default function Cards({ characters }: { characters: Character[] }) {
    return (
        <div className="p-8 w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-5 m-auto justify-items-center">
            {characters.map((character) => (
                <Card key={character.mal_id} character={character} />
            ))}
        </div>
    )
}
