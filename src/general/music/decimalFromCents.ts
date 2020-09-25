import { Decimal } from "../math"
import { CENTS_PER_OCTAVE } from "./constants"
import { Cents } from "./types"

const computeDecimalFromCents = (cents: Cents): Decimal => {
    return 2 ** ( cents / CENTS_PER_OCTAVE) as Decimal
}

export {
    computeDecimalFromCents,
}
