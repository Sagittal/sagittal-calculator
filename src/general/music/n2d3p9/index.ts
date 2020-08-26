import { DEFAULT_N2D3P9_PRECISION } from "./constants"
import { computeN2D3P9 } from "./n2d3p9"
import { computePrimeExponentExtremasGivenMaxN2D3P9 } from "./primeExponentExtremas"
import { N2D3P9 } from "./types"

export {
    computeN2D3P9,
    N2D3P9,
    computePrimeExponentExtremasGivenMaxN2D3P9,
    DEFAULT_N2D3P9_PRECISION, // TODO: I feel like this should not be exposed... either n2d3p9 module has its own presenter, or it's located in the io module
}
