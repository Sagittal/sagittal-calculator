import {
    computeMonzoFromInteger,
    computeMonzoFromRatio,
    FractionalPartType,
    isUndefined,
    Ratio,
} from "../../../../general"
import { Antivotes, ParameterValue, Submetric } from "../types"
import { maybeNuminatorSwap } from "./numinator"
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
    let { numeratorAntivotes, denominatorAntivotes } = maybeNuminatorSwap({
        useNuminator,
        numeratorAntivotes: computeSubmetricAntivotes(
            computeMonzoFromInteger(numerator), submetric, FractionalPartType.NUMERATOR,
        ),
        denominatorAntivotes: computeSubmetricAntivotes(
            computeMonzoFromInteger(denominator), submetric, FractionalPartType.DENOMINATOR,
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
        throw new Error(`You got NaN! in ratioSubmetricAntivotes ${fiveRoughRatio} ${JSON.stringify(submetric, undefined, 4)} ${numeratorAntivotes} ${denominatorAntivotes}`)
    }

    return numeratorAntivotes + denominatorAntivotes as Antivotes
}

export {
    computeRatioSubmetricAntivotes,
}
