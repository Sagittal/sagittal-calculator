import { computeExtensionBase, computeRange, computeTrimmedArray, ExtensionBaseType } from "../../code"
import { Extrema } from "../../types"
import { Monzo } from "../index"
import { Exponent, Prime } from "../types"

const computeMonzosFromPrimeExponentExtremas = (primeExponentExtremas: Array<Extrema<Exponent<Prime>>>): Monzo[] => {
    let monzos = [computeExtensionBase(ExtensionBaseType.ARRAY)] as Monzo[]

    primeExponentExtremas.forEach(primeExponentExtrema => {
        const extendedPossibleMonzos = [] as Monzo[]
        const [minPrimeExponent, maxPrimeExponent] = primeExponentExtrema
        const range = computeRange(minPrimeExponent, maxPrimeExponent + 1 as Exponent<Prime>)

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
