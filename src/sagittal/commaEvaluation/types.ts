import { Abs, Cents, Exponent, Integer, Max, Min, Prime } from "../../general"
import { N2D3P9 } from "./n2d3p9"

type ApotomeSlope = number & { _ApotomeSlopeBrand: "ApotomeSlope" }

type CommasFromFiveSlicedMonzoOptions = Partial<{
    minCents: Min<Cents>,
    maxCents: Max<Cents>,
    maxAbsoluteThreeExponent: Max<Abs<Integer & Exponent<Prime>>>,
    maxAbsoluteApotomeSlope: Max<Abs<ApotomeSlope>>,
    maxN2D3P9: Max<N2D3P9>,
}>

export {
    ApotomeSlope,
    CommasFromFiveSlicedMonzoOptions,
}
