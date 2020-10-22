import { Max, Prime } from "../../math"
import { Comma } from "./types"

const THREE_PRIME_LIMIT: 3 & Max<Prime> = 3 as 3 & Max<Prime>
const FIVE_PRIME_LIMIT: 5 & Max<Prime> = 5 as 5 & Max<Prime>
const SEVEN_PRIME_LIMIT: 7 & Max<Prime> = 7 as 7 & Max<Prime>

// I wish I could use the EMPTY_MONZO here but it leads to bundling errors
const UNISON = { monzo: [] as unknown[] } as Comma

const PYTHAGOREAN_SCHISMA = { monzo: [-84, 53] } as Comma
const PYTHAGOREAN_COMPLEX_KLEISMA = { monzo: [317, -200] } as Comma
const PYTHAGOREAN_LIMMA = { monzo: [8, -5] } as Comma
const PYTHAGOREAN_COMMA = { monzo: [-19, 12] } as Comma
const PYTHAGOREAN_LARGE_DIESIS = { monzo: [27, -17] } as Comma
const PYTHAGOREAN_WHOLE_TONE = { monzo: [-3, 2] } as Comma
const THIRTYONE_THREE_COMMA = { monzo: [-49, 31] } as Comma

export {
    THREE_PRIME_LIMIT,
    FIVE_PRIME_LIMIT,
    SEVEN_PRIME_LIMIT,
    UNISON,
    PYTHAGOREAN_COMMA,
    PYTHAGOREAN_LIMMA,
    PYTHAGOREAN_SCHISMA,
    PYTHAGOREAN_COMPLEX_KLEISMA,
    PYTHAGOREAN_LARGE_DIESIS,
    PYTHAGOREAN_WHOLE_TONE,
    THIRTYONE_THREE_COMMA,
}
