import {Abs, Decimal, Exponent, Max, Min, Prime, Scamon} from "../../../general"
import {ApotomeSlope, N2D3P9} from "../badness"

type CommasFrom23FreeMonzoOptions = Partial<{
    lowerBound: Min<Scamon>,
    upperBound: Max<Scamon>,
    maxAte: Max<Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>>,
    maxAas: Max<Abs<ApotomeSlope>>,
    maxN2D3P9: Max<N2D3P9>,
    maxPrimeLimit: Max<Max<Prime>>,
}>

export {
    CommasFrom23FreeMonzoOptions,
}
