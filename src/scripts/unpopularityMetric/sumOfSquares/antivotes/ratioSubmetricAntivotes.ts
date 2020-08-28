import {
    computeMonzoFromInteger,
    computeMonzoFromRatio,
    FractionalPartType,
    isUndefined,
    Ratio,
} from "../../../../general"
import { Antivotes, ParameterValue, Submetric } from "../types"
import { computeSubmetricAntivotes } from "./submetricAntivotes"
import { computeWeightedAntivotes } from "./weightedAntivotes"

const computeRatioSubmetricAntivotes = (fiveRoughRatio: Ratio, submetric: Submetric = {}): Antivotes => {
    const {
        useNuminator = false,
        kAsCoefficient = 1 as ParameterValue,
        jAsCoefficient = 1 as ParameterValue,
        jAsLogarithmBase,
        jAsPowerExponent,
        jAsPowerBase,
        kAsLogarithmBase,
        kAsPowerExponent,
        kAsPowerBase,
    }: Submetric = submetric

    if (
        jAsCoefficient === kAsCoefficient &&
        isUndefined(jAsLogarithmBase) &&
        isUndefined(jAsPowerExponent) &&
        isUndefined(jAsPowerBase) &&
        isUndefined(kAsLogarithmBase) &&
        isUndefined(kAsPowerExponent) &&
        isUndefined(kAsPowerBase)
    ) {
        const fiveRoughNumberMonzo = computeMonzoFromRatio(fiveRoughRatio)

        return computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)
    }

    const [numerator, denominator] = fiveRoughRatio

    const fiveRoughNumeratorMonzo = computeMonzoFromInteger(numerator)
    const numeratorAntivotesBeforeMaybeNuminatorSwap =
        computeSubmetricAntivotes(fiveRoughNumeratorMonzo, submetric, FractionalPartType.NUMERATOR)

    const fiveRoughDenominatorMonzo = computeMonzoFromInteger(denominator)
    const denominatorAntivotesBeforeMaybeNuminatorSwap =
        computeSubmetricAntivotes(fiveRoughDenominatorMonzo, submetric, FractionalPartType.DENOMINATOR)

    // TODO: the numinator swap should be extracted because that was pretty painful
    let numeratorAntivotes = useNuminator ?
        numeratorAntivotesBeforeMaybeNuminatorSwap > denominatorAntivotesBeforeMaybeNuminatorSwap ?
            numeratorAntivotesBeforeMaybeNuminatorSwap :
            denominatorAntivotesBeforeMaybeNuminatorSwap :
        numeratorAntivotesBeforeMaybeNuminatorSwap
    let denominatorAntivotes = useNuminator ?
        numeratorAntivotesBeforeMaybeNuminatorSwap > denominatorAntivotesBeforeMaybeNuminatorSwap ?
            denominatorAntivotesBeforeMaybeNuminatorSwap :
            numeratorAntivotesBeforeMaybeNuminatorSwap :
        denominatorAntivotesBeforeMaybeNuminatorSwap

    numeratorAntivotes = computeWeightedAntivotes(numeratorAntivotes, {
        coefficient: jAsCoefficient,
        logarithmBase: jAsLogarithmBase,
        powerExponent: jAsPowerExponent,
        powerBase: jAsPowerBase,
    })

    denominatorAntivotes = computeWeightedAntivotes(denominatorAntivotes, {
        coefficient: kAsCoefficient,
        logarithmBase: kAsLogarithmBase,
        powerExponent: kAsPowerExponent,
        powerBase: kAsPowerBase,
    })

    if (isNaN(numeratorAntivotesBeforeMaybeNuminatorSwap) || isNaN(denominatorAntivotesBeforeMaybeNuminatorSwap)) {
        throw new Error(`You got NaN! in ratioSubmetricAntivotes ${fiveRoughRatio} ${JSON.stringify(submetric, undefined, 4)} ${numeratorAntivotesBeforeMaybeNuminatorSwap} ${denominatorAntivotesBeforeMaybeNuminatorSwap}`)
    }

    return numeratorAntivotes + denominatorAntivotes as Antivotes
}

export {
    computeRatioSubmetricAntivotes,
}
