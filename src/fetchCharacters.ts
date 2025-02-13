interface Pagination {
    last_visible_page: number
    has_next_page: boolean
    current_page: number
    items: {
        count: number
        total: number
        per_page: number
    }
}

interface Image {
    image_url: string
}

interface Images {
    jpg: Image
    webp: Image & { small_image_url: string }
}

interface CharacterFull {
    mal_id: number
    url: string
    images: Images
    name: string
    name_kanji: string
    nicknames: string[]
    favorites: number
    about: string
}

interface Characters {
    pagination: Pagination
    data: CharacterFull[]
}

export interface Character {
    mal_id: number
    name: string
    image_url: string
}

async function fetchCharacters(): Promise<Characters | null> {
    try {
        const url = "https://api.jikan.moe/v4/top/characters?page=1&limit=12"
        const res = await fetch(url)
        const data = (await res.json()) as Characters
        return data
    } catch (err) {
        console.error(err)
    }

    return null
}

const charactersPromise = fetchCharacters().then((data) =>
    data?.data.map((character) => {
        return {
            mal_id: character.mal_id,
            name: character.name,
            image_url: character.images.jpg.image_url,
        } as Character
    }),
)

export default charactersPromise
