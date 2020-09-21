import { Abs, Cents, Exponent, Integer, Max, Min, Prime } from "../../../../general"
import { ApotomeSlope } from "../../pitch"
import { N2D3P9 } from "../../twoThreeFreeClass"

type CommasFrom23FreeMonzoOptions = Partial<{
    minCents: Min<Cents>,
    maxCents: Max<Cents>,
    maxAte: Max<Abs<Integer & Exponent<3 & Prime>>>,
    maxAas: Max<Abs<ApotomeSlope>>,
    maxN2D3P9: Max<N2D3P9>,
}>

export {
    CommasFrom23FreeMonzoOptions,
}
