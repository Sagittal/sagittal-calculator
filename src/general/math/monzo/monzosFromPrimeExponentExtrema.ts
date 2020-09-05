import { computeExtensionBase, computeRange, computeTrimmedArray, ExtensionBaseType } from "../../code"
import { Extrema } from "../../types"
import { Exponent, Integer, Prime } from "../types"
import { Monzo } from "./types"

const computeMonzosFromPrimeExponentExtremas = (
    primeExponentExtremas: Array<Extrema<Integer & Exponent<Prime>>>
): Monzo[] => {
    let monzos = [computeExtensionBase(ExtensionBaseType.ARRAY)] as Monzo[]

    primeExponentExtremas.forEach(primeExponentExtrema => {
        const extendedPossibleMonzos = [] as Monzo[]
        const [minPrimeExponent, maxPrimeExponent] = primeExponentExtrema
        const range = computeRange(minPrimeExponent, maxPrimeExponent + 1 as Integer & Exponent<Prime>)

        range.forEach(primeExponent => {
            monzos.forEach(numeratorMonzoToCheck => {
                extendedPossibleMonzos.push([...numeratorMonzoToCheck, primeExponent])
            })
        })

        monzos = extendedPossibleMonzos
    })

    return monzos.map(computeTrimmedArray)
}

export {
    computeMonzosFromPrimeExponentExtremas,
}
