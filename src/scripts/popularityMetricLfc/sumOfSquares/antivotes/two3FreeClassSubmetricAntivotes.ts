import {
    computeIntegerMonzoFromIntegerDecimal,
    computeRationalMonzoFromRational,
    isUndefined,
    QuotientPartType,
    stringify,
    Two3FreeClass,
} from "../../../../general"
import { Antivotes, ParameterValue, Submetric } from "../types"
import { maybeNuminatorSwap } from "./numinator"
import { computeSubmetricAntivotes } from "./submetricAntivotes"
import { computeWeightedAntivotes } from "./weightedAntivotes"

const compute23FreeClassSubmetricAntivotes = (
    two3FreeClass: Two3FreeClass,
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
        const two3FreeNumberMonzo = computeRationalMonzoFromRational(two3FreeClass)

        return computeSubmetricAntivotes(two3FreeNumberMonzo, submetric)
    }

    const [numerator, denominator] = two3FreeClass.quotient
    let { numeratorAntivotes, denominatorAntivotes } = maybeNuminatorSwap({
        useNuminator,
        numeratorAntivotes: computeSubmetricAntivotes(
            computeIntegerMonzoFromIntegerDecimal(numerator), submetric, QuotientPartType.NUMERATOR,
        ),
        denominatorAntivotes: computeSubmetricAntivotes(
            computeIntegerMonzoFromIntegerDecimal(denominator), submetric, QuotientPartType.DENOMINATOR,
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
        throw new Error(`You got NaN! in two3FreeClassSubmetricAntivotes ${two3FreeClass} ${stringify(submetric, { multiline: true })} ${numeratorAntivotes} ${denominatorAntivotes}`)
    }

    return numeratorAntivotes + denominatorAntivotes as Antivotes
}

export {
    compute23FreeClassSubmetricAntivotes,
}
