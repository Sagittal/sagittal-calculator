import { Cents, CentsPosition, Max } from "../general"
import { SIZE_CATEGORY_BOUNDS } from "./sizeCategoryBounds"

const MAX_SINGLE_SHAFT_POSITION: CentsPosition = SIZE_CATEGORY_BOUNDS[7]

// Math.log2(Math.pow(3, 9.5) / Math.pow(2, 15)) * 1200 = 68.5725082211804
const MAX_SINGLE_SHAFT_CENTS: Max<Cents> = MAX_SINGLE_SHAFT_POSITION.cents as Max<Cents>

export {
    MAX_SINGLE_SHAFT_POSITION,
    MAX_SINGLE_SHAFT_CENTS,
}
