import { Max, Prime } from "../../math"

const THREE_LIMIT: 3 & Max<Prime> = 3 as 3 & Max<Prime>
const FIVE_LIMIT: 5 & Max<Prime> = 5 as 5 & Max<Prime>
const SEVEN_LIMIT: 7 & Max<Prime> = 7 as 7 & Max<Prime>

export {
    THREE_LIMIT,
    FIVE_LIMIT,
    SEVEN_LIMIT,
}
