import {computeRatioFromMonzo} from "./ratioFromMonzo"
import {computeCentsFromRatio} from "./centsFromRatio"
import {CENTS_PER_OCTAVE} from "../constants"

const computeCentsFromMonzo = monzo => {
    const ratio = computeRatioFromMonzo(monzo)

    return computeCentsFromRatio(ratio)
}

const computeMonzoInRange = (threeSlicedMonzo, lowerBound, upperBound) => {
    if (upperBound - lowerBound > CENTS_PER_OCTAVE) throw new Error("Cents range must be less than 1200.")

    const monzo = [0, ...threeSlicedMonzo]
    let cents = computeCentsFromMonzo(monzo)
    while (cents > upperBound) {
        monzo[0] -= 1
        cents = computeCentsFromMonzo(monzo)
    }
    while (cents < lowerBound) {
        monzo[0] += 1
        cents = computeCentsFromMonzo(monzo)
    }

    return cents > lowerBound && cents < upperBound ? monzo : undefined
}

export {
    computeMonzoInRange,
}
