import { Abs, Exponent, IntegerDecimal, Max, Min, Prime, Real } from "../../../../general"
import { ApotomeSlope } from "../../pitch"
import { N2D3P9 } from "../../two3FreeClass"

type CommasFrom23FreeMonzoOptions = Partial<{
    lowerBound: Min<Real>,
    upperBound: Max<Real>,
    maxAte: Max<Abs<IntegerDecimal & Exponent<3 & Prime>>>,
    maxAas: Max<Abs<ApotomeSlope>>,
    maxN2D3P9: Max<N2D3P9>,
}>

export {
    CommasFrom23FreeMonzoOptions,
}
