import { Character } from "./fetchCharacters"

export function getJumbledCharacters(
    characters: Character[],
    seenCharacters: number[],
): Character[] {
    const unseenCharacters = characters.filter(
        (character) => !seenCharacters.includes(character.mal_id),
    )
    const jumbledCharacters: Character[] = []

    if (unseenCharacters.length > 0) {
        const randomUnseen =
            unseenCharacters[
                Math.floor(Math.random() * unseenCharacters.length)
            ]
        jumbledCharacters.push(randomUnseen)
    }

    const remainingCharacters = characters.filter(
        (character) => !jumbledCharacters.includes(character),
    )

    while (jumbledCharacters.length < 4) {
        const randomIndex = Math.floor(
            Math.random() * remainingCharacters.length,
        )
        jumbledCharacters.push(remainingCharacters[randomIndex])
        remainingCharacters.splice(randomIndex, 1)
    }

    jumbledCharacters.sort(() => Math.random() - 0.5)

    return jumbledCharacters
}
