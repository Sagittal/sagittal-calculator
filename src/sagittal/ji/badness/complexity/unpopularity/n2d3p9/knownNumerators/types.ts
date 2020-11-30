import {Copfr, Decimal, Max, Numerator, Prime} from "../../../../../../../general"

interface KnownLowN2D3P9Numerator {
    numerator: Numerator & Decimal<{integer: true}>,
    gpf: Max<Prime>,
    copfr: Copfr<{rough: 5}>,
}

export {
    KnownLowN2D3P9Numerator,
}
