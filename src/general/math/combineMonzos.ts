import { Exponent, max, Prime } from "../math"
import { Monzo } from "./types"

const combineMonzos = (...monzos: Monzo[]): Monzo => {
    const maxMonzoLength = max(...monzos.map(monzo => monzo.length))

    return [...Array(maxMonzoLength).keys()].map((index: number) =>
        monzos.reduce(
            (primeExponent: Exponent<Prime>, monzo: Monzo) =>
                primeExponent + (monzo[ index ] || 0) as Exponent<Prime>,
            0 as Exponent<Prime>,
        )) as Monzo
}

export {
    combineMonzos,
}
