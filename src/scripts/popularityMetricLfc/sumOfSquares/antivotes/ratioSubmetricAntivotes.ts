import {
    computeIntegerMonzoFromInteger,
    computeRationalMonzoFromRationalRatio,
    FractionalPartType,
    isUndefined,
    RationalRatio,
    stringify,
    TwoThreeFreeClass,
} from "../../../../general"
import { Antivotes, ParameterValue, Submetric } from "../types"
import { maybeNuminatorSwap } from "./numinator"
import { computeSubmetricAntivotes } from "./submetricAntivotes"
import { computeWeightedAntivotes } from "./weightedAntivotes"

const computeRatioSubmetricAntivotes = (twoThreeFreeClass: TwoThreeFreeClass, submetric: Submetric = {}): Antivotes => {
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
        const twoThreeFreeNumberMonzo = computeRationalMonzoFromRationalRatio(twoThreeFreeClass.ratio as RationalRatio)

        return computeSubmetricAntivotes(twoThreeFreeNumberMonzo, submetric)
    }

    const [numerator, denominator] = twoThreeFreeClass.ratio
    let { numeratorAntivotes, denominatorAntivotes } = maybeNuminatorSwap({
        useNuminator,
        numeratorAntivotes: computeSubmetricAntivotes(
            computeIntegerMonzoFromInteger(numerator), submetric, FractionalPartType.NUMERATOR,
        ),
        denominatorAntivotes: computeSubmetricAntivotes(
            computeIntegerMonzoFromInteger(denominator), submetric, FractionalPartType.DENOMINATOR,
        ),
    })

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

    if (isNaN(numeratorAntivotes) || isNaN(denominatorAntivotes)) {
        throw new Error(`You got NaN! in ratioSubmetricAntivotes ${twoThreeFreeClass} ${stringify(submetric, { multiline: true })} ${numeratorAntivotes} ${denominatorAntivotes}`)
    }

    return numeratorAntivotes + denominatorAntivotes as Antivotes
}

export {
    computeRatioSubmetricAntivotes,
}
