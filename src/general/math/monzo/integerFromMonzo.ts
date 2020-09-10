import { Integer } from "../types"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { Direction, Monzo } from "./types"

const computeIntegerFromMonzo = <T extends { direction: Direction }>(monzo: Monzo<T>): Integer => {
    const ratio = computeRatioFromMonzo(monzo)
    const [numerator, denominator] = ratio

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer monzo ${monzo} which equals ratio ${ratio}`)
    }

    return numerator as Integer
}

export {
    computeIntegerFromMonzo,
}
