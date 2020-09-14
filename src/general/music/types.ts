import { Monzo, NumericTypeParameters, Ratio } from "../math"
import { Extrema, Name } from "../types"
import { JiPitch } from "./ji"

type Cents = number & { _CentsBrand: "Cents" }

// TODO: NO LONGER BASED ON CENTS
//  if you had the code base work in Pitch first and cents only secondarily,
//  then the monzo to and from cents stuff could live in math/ instead of music/
//  and then this would be more just like some number, a pure multiplier or coefficient of waveform frequency
//  just can't figure out what to call it. PitchValue maybe...? Scaler?
type CentsPosition<T extends NumericTypeParameters = {}> = {
    cents: Cents,
    name?: Name<Pitch>,
    monzo?: Monzo<T & { noninteger: true }>,
    ratio?: Ratio<T & { noninteger: true }>,
}

// TODO: starting to think about non-JI pitches
//  what about logarithmic pitch vs acoustic pitch
//  that could help answer the question about what to name that "pitchvalue" thing
//  e.g. how in Erv's writings about golden horograms
//  he names the pitches with values between 0 and 1, like 0.618...
//  that is logarithmic pitch and would require a second piece of information, the 2, to understand what the base was
//  but actually if you combine those two things, you're still good
//  and continued fractions
//  like monzos, it may be a good idea to support those
//  so the continued fraction can be the exponent in this power
//  but it could also just be another option

type Pitch<T extends NumericTypeParameters = {}> =
    JiPitch<T> | CentsPosition<T>

type Zone<T = void> = Extrema<Cents> & (T extends void ? {} : { _ZoneOfBrand: T })

export {
    CentsPosition,
    Cents,
    Zone,
    Pitch,
}
