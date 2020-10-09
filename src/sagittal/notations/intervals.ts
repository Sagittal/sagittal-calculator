import { Max, Scamon } from "../../general"
import { SIZE_CATEGORY_BOUNDS } from "../ji"

// This is the same thing as the largest single shaft symbol's upper bound; 68.5725082211804¢
const MAX_SYMBOL_CLASS_POSITION: Max<Scamon> = SIZE_CATEGORY_BOUNDS[ 7 ].pitch as Scamon as Max<Scamon>

export {
    MAX_SYMBOL_CLASS_POSITION,
}
