import { Exponent, Integer, Monzo, MonzoTypeParameters, Prime, PRIMES } from "../math"
// TODO: okay I don't think Roughness will exist anymore, if we can't force S to be that type

// TODO: don't handle rough yet here, but maybe you won't keep it, see the note on Monzo type itself
const computeRoughNumberMonzo = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
    T extends Omit<MonzoTypeParameters, "rough">>(
    monzo: Monzo<T>,
    roughness: S,
): Monzo<T & { rough: S }> => {
    const roughnessIndex = PRIMES.findIndex(prime => prime as Integer >= roughness)

    return monzo.map((primeExponent: Integer & Exponent<Prime>, index): Integer & Exponent<Prime> =>
        index < roughnessIndex ? 0 as Integer & Exponent<Prime> : primeExponent) as Monzo<T & { rough: S }>
}

export {
    computeRoughNumberMonzo,
}
