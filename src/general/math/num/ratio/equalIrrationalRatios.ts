import { isCloseTo } from "../../../code"
import { computeDecimalFromRatio } from "../decimal"
import { Ratio } from "./types"

const equalIrrationalRatios = (ratioA: Ratio, ratioB: Ratio): boolean => {
    return isCloseTo(computeDecimalFromRatio(ratioA), computeDecimalFromRatio(ratioB))
}

export {
    equalIrrationalRatios,
}
