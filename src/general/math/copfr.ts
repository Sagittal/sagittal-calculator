import { abs, Integer } from "../math"
import { JiPitch } from "../music"
import { computeMonzoFromIntegerOrJiPitch } from "./monzo"
import { Copfr } from "./types"

// Count Of Prime Factors with Repetition (big omega)

const computeCopfr = (integerOrJiPitch: Integer | JiPitch): Copfr => {
    const monzo = computeMonzoFromIntegerOrJiPitch(integerOrJiPitch)

    return monzo.reduce(
        (copfr, primeExponent) =>
            copfr + abs(primeExponent) as Copfr,
        0 as Copfr,
    )
}

export {
    computeCopfr,
}
