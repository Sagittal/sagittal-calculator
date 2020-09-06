import { Monzo, Name, Pitch, Prime, Ratio, Sopfr } from "../general"
import { ApotomeSlope, N2D3P9 } from "./comma"

// TODO: should i just use "Ji" as the standardized signal of Rationality through the codebase?
//  though that doesn't really work with the number vs. Integer distinction, which is really the same
//  and I think having "Analyzed" things being thrown around is probably an anti-pattern
//  try to analyze them at the very last minute. this is in line with that to-do about minimal representations of
//  Sagittal data in the codebase, and the big JSON like full analyzed stuff that you have now should just be in tests
//  and if you could make Analyzed<> a parameterized thing like Formatted<>, of course it would be a bit different
//  because Formatted<> converts it from whatever object it is to a branded string, just with aspect of that object
//  whereas Analyzed would just extend the object
//  - I want to be sensitive to the issue of the type names reading in a consistent direction
//  relative to the variable names, i.e. in the opposite order
//  like how primeExponentExtremas: Array<Extrema<Integer & Exponent<Prime>>>
//  so you'd have an analyzedRationalPitch, which would be a Pitch<Ji<Analyzed>> by that pattern
//  but I'm sure you can see how that doesn't really make sense!
//  which maybe just means that the variable name should be jiPitchAnalyzed: Analyzed<Pitch<Ji>>
//  okay so would type Analyzed<T> = T & T<"Analyzed"> which would allow you to write it like the above...
//  no wait, then "Analyzed" would conflict with the Ji part...
interface AnalyzedRationalPitch extends Pitch {
    apotomeSlope: ApotomeSlope,
    name: Name<AnalyzedRationalPitch>,
    fiveRoughSopfr: Sopfr<5>,
    limit: Prime,
    monzo: Monzo,
    ratio: Ratio,
    n2d3p9: N2D3P9,
}

export {
    AnalyzedRationalPitch,
}
