import { computeRange } from "../../../code"
import { Exponent } from "../../../math"
import { Prime } from "../../../types"
import { computeTrimmedMonzo } from "../../trimmedMonzo"
import { Monzo } from "../../types"
import { PrimeExponentExtrema } from "./types"

// TODO: this method is completely generic from N2D3P9 and thus should be extracted
//  although I recognize that along with that you'd have to extract the PrimeExponentExtrema type

const computePossibleMonzosFromPrimeExponentExtremas = (primeExponentExtremas: Array<PrimeExponentExtrema>) => {
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

    // TODO: make sure this is tested, the trimming
    return possibleMonzos.map(computeTrimmedMonzo)
}

export {
    computePossibleMonzosFromPrimeExponentExtremas,
}
