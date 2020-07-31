import { computeLog, computeMonzoFromInteger, computeMonzoFromRatio, isUndefined, Ratio } from "../../../../general"
import { ParameterValue, Submetric } from "../../types"
import { Antivotes } from "../types"
import { computeSubmetricAntivotes } from "./submetricAntivotes"

const computeRatioSubmetricAntivotes = (fiveRoughRatio: Ratio, submetric: Submetric = {}): Antivotes => {
    const {
        useNuminator = false,
        kAsCoefficient = 1 as ParameterValue,
        jAsCoefficient = 1 as ParameterValue,
        jAsBase = undefined,
        jAsExponent = undefined,
        kAsBase = undefined,
        kAsExponent = undefined,
    }: Submetric = submetric

    if (kAsCoefficient === jAsCoefficient && isUndefined(jAsBase) && isUndefined(jAsExponent) && isUndefined(kAsBase) && isUndefined(kAsExponent)) {
        const fiveRoughNumberMonzo = computeMonzoFromRatio(fiveRoughRatio)

        return computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)
    }

    const [numerator, denominator] = fiveRoughRatio
    const fiveRoughNumeratorMonzo = computeMonzoFromInteger(numerator)
    const fiveRoughDenominatorMonzo = computeMonzoFromInteger(denominator)

    const numeratorPrimeContentAntivotes = computeSubmetricAntivotes(fiveRoughNumeratorMonzo, submetric)
    const denominatorPrimeContentAntivotes = computeSubmetricAntivotes(fiveRoughDenominatorMonzo, submetric)
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

    const weightedOutputNumerator = !isUndefined(jAsBase) ?
        computeLog(outputNumerator, jAsBase) :
        !isUndefined(jAsExponent) ?
            outputNumerator ** jAsExponent :
            outputNumerator * jAsCoefficient

    const weightedOutputDenominator = !isUndefined(kAsBase) ?
        computeLog(outputDenominator, kAsBase) :
        !isUndefined(kAsExponent) ?
            outputDenominator ** kAsExponent :
            outputDenominator * kAsCoefficient

    if (isNaN(weightedOutputNumerator) || isNaN(weightedOutputDenominator)) {
        throw new Error(`You got NaN! in ratioSubmetricAntivotes ${fiveRoughRatio} ${JSON.stringify(submetric, null, 4)} ${weightedOutputNumerator} ${weightedOutputDenominator} ${outputDenominator}`)
    }

    return weightedOutputNumerator + weightedOutputDenominator as Antivotes
}

export {
    computeRatioSubmetricAntivotes,
}
