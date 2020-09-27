import { CENTS_PER_OCTAVE } from "./constants"
import { Cents } from "./types"

const computeNumberFromCents = (cents: Cents): number => {
    return 2 ** (cents / CENTS_PER_OCTAVE)
}

export {
    computeNumberFromCents,
}
