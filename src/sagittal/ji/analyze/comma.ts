import {Comma, NumericProperties} from "@sagittal/general"
import {CommaNameOptions, computeCommaName, computeSizeCategoryIndex, FactoringMode} from "../name"
import {analyzeJiPitch} from "./pitch"
import {CommaAnalysis} from "./types"

const analyzeComma = <T extends NumericProperties, U extends Comma<T>>(
    comma: U,
    options: CommaNameOptions = {},
): CommaAnalysis<T, U> => {
    const {directed = true, factoringMode = FactoringMode.THRESHOLD, abbreviated = true} = options
    const name = computeCommaName(comma, {directed, factoringMode, abbreviated})
    const sizeCategory = computeSizeCategoryIndex(comma)

    const jiPitchAnalysis = analyzeJiPitch(comma)

    return {...jiPitchAnalysis, pitch: comma, sizeCategory, name} as CommaAnalysis<T, U>
}

export {
    analyzeComma,
}
