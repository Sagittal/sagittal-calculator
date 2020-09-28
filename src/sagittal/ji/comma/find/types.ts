import { Abs, Exponent, IntegerDecimal, Max, Min, Num, Prime } from "../../../../general"
import { ApotomeSlope } from "../../pitch"
import { N2D3P9 } from "../../twoThreeFreeClass"

type CommasFrom23FreeMonzoOptions = Partial<{
    lowerBound: Min<Num>,
    upperBound: Max<Num>,
    maxAte: Max<Abs<IntegerDecimal & Exponent<3 & Prime>>>,
    maxAas: Max<Abs<ApotomeSlope>>,
    maxN2D3P9: Max<N2D3P9>,
}>

export {
    CommasFrom23FreeMonzoOptions,
}
