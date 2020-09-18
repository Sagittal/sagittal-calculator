import { Cents, CentsPosition, Max } from "../../general"
import { SIZE_CATEGORY_BOUNDS } from "../ji"

// This is the same thing as the largest single shaft symbol's upper bound
const MAX_SYMBOL_CLASS_POSITION: CentsPosition = SIZE_CATEGORY_BOUNDS[ 7 ]

// Math.log2(Math.pow(3, 9.5) / Math.pow(2, 15)) * 1200 = 68.5725082211804
const MAX_SYMBOL_CLASS_CENTS: Max<Cents> = MAX_SYMBOL_CLASS_POSITION.cents as Max<Cents>

export {
    MAX_SYMBOL_CLASS_POSITION,
    MAX_SYMBOL_CLASS_CENTS,
}
