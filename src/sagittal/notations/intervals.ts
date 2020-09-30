import { Max, Real } from "../../general"
import { SIZE_CATEGORY_BOUNDS } from "../ji"

// This is the same thing as the largest single shaft symbol's upper bound; 68.5725082211804¢
const MAX_SYMBOL_CLASS_POSITION: Max<Real> =
    SIZE_CATEGORY_BOUNDS[ 7 ] as Real as Max<Real>

export {
    MAX_SYMBOL_CLASS_POSITION,
}
