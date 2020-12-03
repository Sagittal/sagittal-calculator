import {Comma} from "../../../general"
import {computeSizeCategoryZone} from "./sizeCategoryZone"
import {SizeCategory} from "./types"

// TODO: COMMA NAMES: HAHA, CLEARLY I STARTED DOING COMPLEX STUFF AT SOME POINT BUT GOT BOGGED DOWN
const computeMaybeComplex = (comma: Comma, sizeCategory: SizeCategory): string => {
    const zone = computeSizeCategoryZone(sizeCategory)

    return ""
}

export {
    computeMaybeComplex,
}
