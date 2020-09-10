import { Abs, Cents, Exponent, Integer, Max, Min, Prime } from "../../general"
import { ApotomeSlope, N2D3P9 } from "./evaluation"

type CommasFrom23FreeMonzoOptions = Partial<{
    minCents: Min<Cents>,
    maxCents: Max<Cents>,
    maxAbsoluteThreeExponent: Max<Abs<Integer & Exponent<Prime>>>,
    maxAbsoluteApotomeSlope: Max<Abs<ApotomeSlope>>,
    maxN2D3P9: Max<N2D3P9>,
}>

type CommaNameOptions = Partial<{
    directed: boolean,
    factored: boolean,
    abbreviated: boolean
}>

export {
    CommaNameOptions,
    CommasFrom23FreeMonzoOptions,
}
