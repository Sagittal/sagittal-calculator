import { computeRange, computeTrimmedArray } from "../code"
import { Extrema } from "../types"
import { Exponent, Monzo, Prime } from "./types"

const computeMonzosFromPrimeExponentExtremas = (primeExponentExtremas: Array<Extrema<Exponent<Prime>>>): Monzo[] => {
    let possibleMonzos = [
        // TODO: add a constant to describe this as an extension base, since I now use this strategy in so many places
        [],
    ] as Monzo[]

    primeExponentExtremas.forEach(primeExponentExtrema => {
        const extendedPossibleMonzos = [] as Monzo[]
        const [minPrimeExponent, maxPrimeExponent] = primeExponentExtrema
        const range = computeRange(minPrimeExponent, maxPrimeExponent + 1 as Exponent<Prime>)

        range.forEach(primeExponent => {
            possibleMonzos.forEach(numeratorMonzoToCheck => {
                extendedPossibleMonzos.push([...numeratorMonzoToCheck, primeExponent])
            })
        })

        possibleMonzos = extendedPossibleMonzos
    })

    return possibleMonzos.map(computeTrimmedArray)
}

export {
    computeMonzosFromPrimeExponentExtremas,
}
