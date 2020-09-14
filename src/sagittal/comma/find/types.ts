import { Abs, Cents, Exponent, Integer, Max, Min, Prime } from "../../../general"
import { ApotomeSlope, N2D3P9 } from "../evaluation"

type CommasFrom23FreeMonzoOptions = Partial<{
    minCents: Min<Cents>,
    maxCents: Max<Cents>,
    maxAbs3Exponent: Max<Abs<3 & Integer & Exponent<Prime>>>,
    maxAbsApotomeSlope: Max<Abs<ApotomeSlope>>,
    maxN2D3P9: Max<N2D3P9>,
}>

export {
    CommasFrom23FreeMonzoOptions,
}
