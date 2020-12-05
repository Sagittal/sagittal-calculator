import {Comma, Scamon} from "@sagittal/general"
import {CommaNameOptions, computeCommaName, computeSizeCategoryIndex, FactoringMode} from "../name"
import {analyzeJiPitch} from "./pitch"
import {PotentiallyCommaAnalysis} from "./types"

const analyzePotentiallyComma = (
    jiPitch: Scamon<{rational: true}>,
    options: CommaNameOptions = {},
): PotentiallyCommaAnalysis => {
    const {directed = true, factoringMode = FactoringMode.THRESHOLD, abbreviated = true} = options

    let name
    try {
        name = computeCommaName(jiPitch as Comma, {directed, factoringMode, abbreviated})
    } catch (e) {
    }

    let sizeCategory
    try {
        sizeCategory = computeSizeCategoryIndex(jiPitch as Comma)
    } catch (e) {
    }

    const jiPitchAnalysis = analyzeJiPitch(jiPitch)

    return {...jiPitchAnalysis, pitch: jiPitch, sizeCategory, name} as PotentiallyCommaAnalysis
}

export {
    analyzePotentiallyComma,
}
