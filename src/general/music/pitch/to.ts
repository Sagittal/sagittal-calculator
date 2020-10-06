import {
    BASE_2,
    computeDecimalFromMonzo,
    computeDecimalFromQuotient,
    computeQuotientFromMonzo,
    Decimal,
    Exponent,
    log,
    Monzo,
    NumericProperties,
    Prime,
    Quotient,
} from "../../math"
import { CENTS_PER_OCTAVE } from "../constants"
import { isJi } from "../ji"
import { Cents } from "../types"
import { Pitch } from "./types"

const computeCentsFromPitch = (pitch: Pitch): Cents =>
    log(computeDecimalFromPitch(pitch), BASE_2) * CENTS_PER_OCTAVE as Cents

const computeDecimalFromPitch = <T extends NumericProperties>(
    pitch: Pitch<T>,
): Decimal<T> =>
    isJi(pitch) ?
        computeDecimalFromMonzo(pitch.monzo) :
        computeDecimalFromMonzo(pitch.monzo) ** computeDecimalFromQuotient(pitch.scaler) as Decimal<T>

const computeMonzoFromPitch = <T extends NumericProperties>(pitch: Pitch<T>): Monzo<T> =>
    isJi(pitch) ?
        pitch.monzo :
        pitch.monzo
            .map((primeExponent: Decimal<{ integer: true }> & Exponent<Prime>): Exponent<Prime> => {
                return primeExponent * computeDecimalFromQuotient(
                    pitch.scaler as Quotient,
                ) as Exponent<Prime>
            }) as Monzo<T>

const computeQuotientFromPitch = <T extends NumericProperties>(pitch: Pitch<T>): Quotient<T> =>
    isJi(pitch) ?
        computeQuotientFromMonzo(pitch.monzo) :
        [computeDecimalFromMonzo(pitch.monzo) ** computeDecimalFromQuotient(pitch.scaler), 1] as Quotient<T>

export {
    computeMonzoFromPitch,
    computeCentsFromPitch,
    computeQuotientFromPitch,
    computeDecimalFromPitch,
}
