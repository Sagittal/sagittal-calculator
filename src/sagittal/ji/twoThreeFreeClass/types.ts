import { Copfr, Prime, Sopfr, TwoThreeFreeClass } from "../../../general"
import { N2D3P9 } from "./n2d3p9"

type TwoThreeFreeClassAnalysis = Omit<TwoThreeFreeClass, "_TwoThreeFreeClassBrand"> & {
    twoThreeFreePrimeLimit: Prime,
    n2d3p9: N2D3P9,
    twoThreeFreeCopfr: Copfr<{ rough: 5 }>,
    twoThreeFreeSopfr: Sopfr<{ rough: 5 }>,
}

export {
    TwoThreeFreeClassAnalysis,
}
