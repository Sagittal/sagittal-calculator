import {Comma, NumericProperties} from "../../../general"
import {analyzeJiPitch} from "../pitch"
import {CommaNameOptions, computeCommaName} from "./name"
import {CommaAnalysis} from "./types"

const analyzeComma = <T extends NumericProperties, U extends Comma<T>>(
    comma: U,
    options: CommaNameOptions = {},
): CommaAnalysis<T, U> => {
    const {directed = true, factored = false, abbreviated = true} = options
    const name = computeCommaName(comma, {directed, factored, abbreviated})

    const jiPitchAnalysis = analyzeJiPitch(comma)

    return {...jiPitchAnalysis, pitch: comma, name} as CommaAnalysis<T, U>
}

export {
    analyzeComma,
}
