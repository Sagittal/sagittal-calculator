import { computeMonzoFromRatio, Monzo, Ratio } from "../../../general"
import { computeNotatingCommas } from "../notatingCommas"
import { computeSizeCategoryExtrema } from "./sizeCategoryExtrema"
import { SizeCategoryName } from "./types"

// TODO: we probably need to consider inclusive/exclusive extrema,
//  since the schismina size category includes 0

const computeMonzoFromFiveRoughRatioAndSizeCategoryName = (
    { fiveRoughRatio, sizeCategoryName }: { fiveRoughRatio: Ratio, sizeCategoryName: SizeCategoryName },
): Monzo => {
    const fiveRoughMonzo = computeMonzoFromRatio(fiveRoughRatio)
    const [minCents, maxCents] = computeSizeCategoryExtrema(sizeCategoryName)

    const commas = computeNotatingCommas(fiveRoughMonzo, { minCents, maxCents })

    if (commas.length !== 1) {
        throw new Error(`For whatever reason the number of commas notating the monzo ${fiveRoughMonzo} in the range of that size category ${sizeCategoryName} was not 1. It was ${commas.length}.`)
    }

    return commas[ 0 ].monzo
}

export {
    computeMonzoFromFiveRoughRatioAndSizeCategoryName,
}
