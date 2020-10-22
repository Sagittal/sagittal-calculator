import {Abs, Decimal, Exponent, Max, Min, Prime, Scamon} from "../../../../general"
import {ApotomeSlope} from "../../pitch"
import {N2D3P9} from "../../two3FreeClass"

type CommasFrom23FreeMonzoOptions = Partial<{
    lowerBound: Min<Scamon>,
    upperBound: Max<Scamon>,
    maxAte: Max<Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>>,
    maxAas: Max<Abs<ApotomeSlope>>,
    maxN2D3P9: Max<N2D3P9>,
}>

export {
    CommasFrom23FreeMonzoOptions,
}
