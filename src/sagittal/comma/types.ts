import { Abs, Cents, Exponent, Integer, Max, Min, Prime, Ratio } from "../../general"
import { ApotomeSlope, N2D3P9 } from "./evaluation"

type CommasFromFiveSlicedMonzoOptions = Partial<{
    minCents: Min<Cents>,
    maxCents: Max<Cents>,
    maxAbsoluteThreeExponent: Max<Abs<Integer & Exponent<Prime>>>,
    maxAbsoluteApotomeSlope: Max<Abs<ApotomeSlope>>,
    maxN2D3P9: Max<N2D3P9>,
    commaNameOptions: CommaNameOptions,
}>

type CommaNameOptions = Partial<{
    directed: boolean,
    factored: boolean,
    abbreviated: boolean
}>

type AnalyzeRationalPitchOptions = CommaNameOptions & Partial<{
    giveName: boolean
}>

type TwoThreeFreeClass = Ratio & { _TwoThreeFreeClassBrand: "TwoThreeFreeClass"}

export {
    CommaNameOptions,
    CommasFromFiveSlicedMonzoOptions,
    AnalyzeRationalPitchOptions,
    TwoThreeFreeClass,
}
