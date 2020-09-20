import { Copfr, NumericTypeParameters, Prime, Sopfr, TwoThreeFreeClass } from "../../../general"
import { N2D3P9 } from "./n2d3p9"

type TwoThreeFreeClassAnalysis<T extends NumericTypeParameters = {}> = TwoThreeFreeClass<T> & {
    twoThreeFreePrimeLimit: Prime,
    n2d3p9: N2D3P9,
    twoThreeFreeCopfr: Copfr<Omit<T, "rough"> & { rough: 5 }>,
    twoThreeFreeSopfr: Sopfr<Omit<T, "rough"> & { rough: 5 }>,
}

export {
    TwoThreeFreeClassAnalysis,
}
