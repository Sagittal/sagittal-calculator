import {
    computeIntegerMonzoFromInteger,
    computeRationalMonzoFromRationalQuotient,
    isUndefined,
    QuotientPartType,
    RationalQuotient,
    stringify,
    TwoThreeFreeClass,
} from "../../../../general"
import { Antivotes, ParameterValue, Submetric } from "../types"
import { maybeNuminatorSwap } from "./numinator"
import { computeSubmetricAntivotes } from "./submetricAntivotes"
import { computeWeightedAntivotes } from "./weightedAntivotes"

const computeQuotientSubmetricAntivotes = (
    twoThreeFreeClass: TwoThreeFreeClass,
    submetric: Submetric = {},
): Antivotes => {
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
        const twoThreeFreeNumberMonzo =
            computeRationalMonzoFromRationalQuotient(twoThreeFreeClass.quotient as RationalQuotient)

        return computeSubmetricAntivotes(twoThreeFreeNumberMonzo, submetric)
    }

    const [numerator, denominator] = twoThreeFreeClass.quotient
    let { numeratorAntivotes, denominatorAntivotes } = maybeNuminatorSwap({
        useNuminator,
        numeratorAntivotes: computeSubmetricAntivotes(
            computeIntegerMonzoFromInteger(numerator), submetric, QuotientPartType.NUMERATOR,
        ),
        denominatorAntivotes: computeSubmetricAntivotes(
            computeIntegerMonzoFromInteger(denominator), submetric, QuotientPartType.DENOMINATOR,
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
        throw new Error(`You got NaN! in quotientSubmetricAntivotes ${twoThreeFreeClass} ${stringify(submetric, { multiline: true })} ${numeratorAntivotes} ${denominatorAntivotes}`)
    }

    return numeratorAntivotes + denominatorAntivotes as Antivotes
}

export {
    computeQuotientSubmetricAntivotes,
}
