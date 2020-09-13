import { Max, Prime } from "../math"
import { Cents } from "./types"

const CENTS_PER_OCTAVE: Cents = 1200 as Cents

const THREE_LIMIT: 3 & Max<Prime> = 3 as 3 & Max<Prime>
const FIVE_LIMIT: 5 & Max<Prime> = 5 as 5 & Max<Prime>
const SEVEN_LIMIT: 7 & Max<Prime> = 7 as 7 & Max<Prime>

export {
    CENTS_PER_OCTAVE,
    THREE_LIMIT,
    FIVE_LIMIT,
    SEVEN_LIMIT,
}
