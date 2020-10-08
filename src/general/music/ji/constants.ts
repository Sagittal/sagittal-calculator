import { Max, Prime } from "../../math"
import { Pitch } from "../pitch"

const THREE_PRIME_LIMIT: 3 & Max<Prime> = 3 as 3 & Max<Prime>
const FIVE_PRIME_LIMIT: 5 & Max<Prime> = 5 as 5 & Max<Prime>
const SEVEN_PRIME_LIMIT: 7 & Max<Prime> = 7 as 7 & Max<Prime>

const TWO_3_FREE_CLASS_SIGN = "₍₂,₃₎"

// I wish I could use the EMPTY_MONZO here but it leads to bundling errors
const UNISON = { monzo: [] as unknown[] } as Pitch<{ rational: true }>

export {
    TWO_3_FREE_CLASS_SIGN,
    THREE_PRIME_LIMIT,
    FIVE_PRIME_LIMIT,
    SEVEN_PRIME_LIMIT,
    UNISON,
}
