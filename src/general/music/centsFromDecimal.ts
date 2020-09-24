import { BASE_2, DecimalNotDefaultingToPotentiallyIrrational, log } from "../math"
import { CENTS_PER_OCTAVE } from "./constants"
import { Cents } from "./types"

// TODO: if we decide to make it so that Decimals don't exist outside of Nums
//  then when we extract the primitive number from a Num, which is probably a Pitch, in preparation to takings its Cents
//  then it wouldn't be a Decimal, it'd just be a plain "number".
const computeCentsFromDecimal = (decimal: DecimalNotDefaultingToPotentiallyIrrational): Cents =>
    log(decimal, BASE_2) * CENTS_PER_OCTAVE as Cents

export {
    computeCentsFromDecimal,
}
