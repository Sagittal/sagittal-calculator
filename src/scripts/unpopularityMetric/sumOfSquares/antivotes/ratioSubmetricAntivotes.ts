import { computeLog, computeMonzoFromInteger, computeMonzoFromRatio, Ratio } from "../../../../general"
import { ParameterValue, Submetric } from "../../types"
import { Antivotes } from "../types"
import { computeSubmetricAntivotes } from "./submetricAntivotes"

const computeRatioSubmetricAntivotes = (fiveRoughRatio: Ratio, submetric: Submetric = {}): Antivotes => {
    const {
        k = 1 as ParameterValue,
        j = 1 as ParameterValue,
        useNuminator = false,
        jIsBase = false,
        jIsExponent = false,
        kIsBase = false,
        kIsExponent = false,
    }: Submetric = submetric

    if (k === j) {
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

    const weightedOutputNumerator = jIsBase ?
        computeLog(outputNumerator, j) :
        jIsExponent ?
            outputNumerator ** j :
            outputNumerator * j

    const weightedOutputDenominator = kIsBase ?
        computeLog(outputDenominator, k) :
        kIsExponent ?
            outputDenominator ** k :
            outputDenominator * k

    if (isNaN(weightedOutputNumerator) || isNaN(weightedOutputDenominator)) {
        throw new Error(`You got NaN! in ratioSubmetricAntivotes ${fiveRoughRatio} ${JSON.stringify(submetric, null, 4)} ${weightedOutputNumerator} ${weightedOutputDenominator} ${outputDenominator} ${k}`)
    }

    return weightedOutputNumerator + weightedOutputDenominator as Antivotes
}

export {
    computeRatioSubmetricAntivotes,
}
