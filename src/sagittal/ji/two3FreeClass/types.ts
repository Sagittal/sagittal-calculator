import { Copfr, Max, Name, NumTypeParameters, Prime, Sopfr, Two3FreeClass } from "../../../general"
import { N2D3P9 } from "./n2d3p9"

type Two3FreeClassAnalysis<T extends NumTypeParameters = {}> = Two3FreeClass<T> & {
    name: Name<Two3FreeClass>,
    two3FreePrimeLimit: Max<Prime<{ rough: 5 }>>,
    n2d3p9: N2D3P9,
    two3FreeCopfr: Copfr<Omit<T, "rough"> & { rough: 5 }>,
    two3FreeSopfr: Sopfr<Omit<T, "rough"> & { rough: 5 }>,
}

export {
    Two3FreeClassAnalysis,
}
