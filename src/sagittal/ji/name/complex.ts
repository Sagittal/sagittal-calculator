import {Comma} from "../../../general"
import {computeSizeCategoryExtrema} from "./sizeCategoryExtrema"
import {SizeCategory} from "./types"


const computeMaybeComplex = (comma: Comma, sizeCategory: SizeCategory): string => {
    const [lowerBound, upperBound] = computeSizeCategoryExtrema(sizeCategory)

    return ""
}

export {
    computeMaybeComplex,
}
