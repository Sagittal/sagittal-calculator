import { computeMonzoFromRatio, Monzo, Name } from "../../../general"
import { AnalyzedRationalPitch } from "../../types"
import { computeNotatingCommas } from "../notatingCommas"
import { parseCommaName } from "./parseCommaName"
import { computeSizeCategoryExtrema } from "./sizeCategoryExtrema"

// TODO: we probably need to consider inclusive/exclusive extrema,
//  since the schismina size category includes 0

const computeMonzoFromCommaName = (name: Name<AnalyzedRationalPitch>): Monzo => {
    const { ratio, sizeCategoryName } = parseCommaName(name)

    const monzo = computeMonzoFromRatio(ratio)
    const [minCents, maxCents] = computeSizeCategoryExtrema(sizeCategoryName)

    const commas = computeNotatingCommas(monzo, { minCents, maxCents })

    if (commas.length !== 1) {
        throw new Error(`For whatever reason the number of commas notating the monzo ${monzo} in the range of that size category ${sizeCategoryName} was not 1. It was ${commas.length}.`)
    }

    return commas[ 0 ].monzo
}

export {
    computeMonzoFromCommaName,
}
