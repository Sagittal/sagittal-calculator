import {
    computeLog,
    computeMonzoFromInteger,
    computeMonzoFromRatio,
    FractionalPart,
    isUndefined,
    Ratio,
} from "../../../../general"
import { Antivotes, ParameterValue, Submetric } from "../types"
import { computeSubmetricAntivotes } from "./submetricAntivotes"

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
    const fiveRoughDenominatorMonzo = computeMonzoFromInteger(denominator)

    const numeratorPrimeContentAntivotes = computeSubmetricAntivotes(fiveRoughNumeratorMonzo, submetric, FractionalPart.NUMERATOR)
    const denominatorPrimeContentAntivotes = computeSubmetricAntivotes(fiveRoughDenominatorMonzo, submetric, FractionalPart.DENOMINATOR)
    const outputNumerator = useNuminator ?
        numeratorPrimeContentAntivotes > denominatorPrimeContentAntivotes ?
            numeratorPrimeContentAntivotes :
            denominatorPrimeContentAntivotes :
        numeratorPrimeContentAntivotes

    const outputDenominator = useNuminator ?
        numeratorPrimeContentAntivotes > denominatorPrimeContentAntivotes ?
            denominatorPrimeContentAntivotes :
            numeratorPrimeContentAntivotes :
        denominatorPrimeContentAntivotes

    // TODO: duped code fragment, yes we can dry this up
    let weightedOutputNumerator = outputNumerator
    if (!isUndefined(jAsLogarithmBase)) {
        weightedOutputNumerator = computeLog(weightedOutputNumerator, jAsLogarithmBase) as Antivotes
    }
    if (!isUndefined(jAsPowerExponent)) {
        weightedOutputNumerator = weightedOutputNumerator ** jAsPowerExponent as Antivotes
    }
    if (!isUndefined(jAsPowerBase)) {
        weightedOutputNumerator = jAsPowerBase ** weightedOutputNumerator as Antivotes

    }
    weightedOutputNumerator = weightedOutputNumerator * jAsCoefficient as Antivotes

    let weightedOutputDenominator = outputDenominator
    if (!isUndefined(kAsLogarithmBase)) {
        weightedOutputDenominator = computeLog(weightedOutputDenominator, kAsLogarithmBase) as Antivotes
    }
    if (!isUndefined(kAsPowerExponent)) {
        weightedOutputDenominator = weightedOutputDenominator ** kAsPowerExponent as Antivotes
    }
    if (!isUndefined(kAsPowerBase)) {
        weightedOutputDenominator = kAsPowerBase ** weightedOutputDenominator as Antivotes

    }
    weightedOutputDenominator = weightedOutputDenominator * kAsCoefficient as Antivotes

    if (isNaN(weightedOutputNumerator) || isNaN(weightedOutputDenominator)) {
        throw new Error(`You got NaN! in ratioSubmetricAntivotes ${fiveRoughRatio} ${JSON.stringify(submetric, null, 4)} ${weightedOutputNumerator} ${weightedOutputDenominator} ${outputDenominator}`)
    }

    return weightedOutputNumerator + weightedOutputDenominator as Antivotes
}

export {
    computeRatioSubmetricAntivotes,
}
