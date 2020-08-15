import { Monzo } from "./types"
import { Exponent } from "../math/types"
import { Prime } from "../types"

const combineMonzos = (...monzos: Monzo[]): Monzo => {
    const maximumMonzoLength = Math.max(...monzos.map(monzo => monzo.length))

    return [...Array(maximumMonzoLength).keys()].map((index: number) =>
        monzos.reduce(
            (primeExponent: Exponent<Prime>, monzo: Monzo) =>
                primeExponent + (monzo[ index ] || 0) as Exponent<Prime>,
            0 as Exponent<Prime>,
        )) as Monzo
}

export {
    combineMonzos,
}
