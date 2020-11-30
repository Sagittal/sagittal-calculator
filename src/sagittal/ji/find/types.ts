import {Abs, Max, Min, Prime, Scamon} from "../../../general"
import {ApotomeSlope, Ate, N2D3P9} from "../badness"

type CommasFrom23FreeMonzoOptions = Partial<{
    lowerBound: Min<Scamon>,
    upperBound: Max<Scamon>,
    maxAte: Max<Ate>,
    maxAas: Max<Abs<ApotomeSlope>>,
    maxN2D3P9: Max<N2D3P9>,
    maxPrimeLimit: Max<Max<Prime>>,
}>

export {
    CommasFrom23FreeMonzoOptions,
}
