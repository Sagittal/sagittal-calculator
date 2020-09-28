import { Copfr, Max, Name, NumTypeParameters, Prime, Sopfr, TwoThreeFreeClass } from "../../../general"
import { N2D3P9 } from "./n2d3p9"

// TODO: 2,3-free class maybe should have a name, like comma does?
//  To less confuse with that column name that's in the analyze-ji-pitch script's 2,3-free class table
//  (i.e. it's supposedly the class itself, but we can't have that within its own table... so even though in the case
//  Of a 2,3-free class, its name is basically the same as its quotient representation
//  Or we might devise a way of representing them which is distinct. looks like a vertical bar is no good.
//  What about just putting them next to a sharp symbol, suggesting they are relative to a chain of JI fifths?
//  - also, double check its name "2,3-free class" against our forum thread about equivalence and such
//  We discussed its name in excruciating detail
type TwoThreeFreeClassAnalysis<T extends NumTypeParameters = {}> = TwoThreeFreeClass<T> & {
    name: Name<TwoThreeFreeClass>,
    twoThreeFreePrimeLimit: Max<Prime<{ rough: 5 }>>,
    n2d3p9: N2D3P9,
    twoThreeFreeCopfr: Copfr<Omit<T, "rough"> & { rough: 5 }>,
    twoThreeFreeSopfr: Sopfr<Omit<T, "rough"> & { rough: 5 }>,
}

export {
    TwoThreeFreeClassAnalysis,
}
