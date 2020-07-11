import { computeSubmetricAntivotes } from "./submetricAntivotes"
import { computeMonzoFromInteger } from "../../../../utilities/comma/monzoFromInteger"
import { computeMonzoFromRatio } from "../../../../utilities/comma/monzoFromRatio"
import { computeLog } from "../../../../utilities/log"
import { Ratio } from "../../../../utilities/types"
import { Antivotes } from "../../sumOfSquares/types"

const computeRatioSubmetricAntivotes = (fiveRoughRatio: Ratio, submetric = {}): Antivotes => {
    const {
        k = 1,
        j = 1,
        numeratorIsNuminator = true,
        jIsBase = false,
        jIsExponent = false,
        kIsBase = false,
        kIsExponent = false,
    }: any = submetric

    if (k === j) {
        const fiveRoughNumberMonzo = computeMonzoFromRatio(fiveRoughRatio)

        return computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)
    }

    const [numerator, denominator] = fiveRoughRatio
    const fiveRoughNumeratorMonzo = computeMonzoFromInteger(numerator)
    const fiveRoughDenominatorMonzo = computeMonzoFromInteger(denominator)

    const numeratorPrimeContentAntivotes = computeSubmetricAntivotes(fiveRoughNumeratorMonzo, submetric)
    const denominatorPrimeContentAntivotes = computeSubmetricAntivotes(fiveRoughDenominatorMonzo, submetric)
    const numinator = numeratorIsNuminator === true ?
        numeratorPrimeContentAntivotes :
        numeratorPrimeContentAntivotes > denominatorPrimeContentAntivotes ?
            numeratorPrimeContentAntivotes :
            denominatorPrimeContentAntivotes
    const diminuator = numeratorIsNuminator === true ?
        denominatorPrimeContentAntivotes :
        numeratorPrimeContentAntivotes > denominatorPrimeContentAntivotes ?
            denominatorPrimeContentAntivotes :
            numeratorPrimeContentAntivotes

    const weightedNuminator = jIsBase ?
        computeLog(numinator, j) :
        jIsExponent ?
            numinator ** j :
            numinator * j

    const weightedDiminuator = kIsBase ?
        computeLog(diminuator, k) :
        kIsExponent ?
            diminuator ** k :
            diminuator * k

    if (isNaN(weightedNuminator) || isNaN(weightedDiminuator)) throw new Error(`You got NaN! in ratioSubmetricAntivotes ${fiveRoughRatio} ${JSON.stringify(submetric, null, 4)} ${weightedNuminator} ${weightedDiminuator} ${diminuator} ${k}`)

    return weightedNuminator + weightedDiminuator as Antivotes
}

export {
    computeRatioSubmetricAntivotes,
}
