import { computeExtensionBase, computeRange, computeTrimmedArray, ExtensionBaseType } from "../../../code"
import { Extrema } from "../../../types"
import { Exponent } from "../../types"
import { Integer, Prime } from "../types"
import { Monzo } from "./types"

const computeMonzosFromPrimeExponentExtremas = (
    primeExponentExtremas: Array<Extrema<Integer & Exponent<Prime>>>,
): Monzo[] => {
    let monzos = [computeExtensionBase(ExtensionBaseType.ARRAY)] as Monzo[]

    primeExponentExtremas.forEach((primeExponentExtrema: Extrema<Integer & Exponent<Prime>>): void => {
        const extendedPossibleMonzos = [] as Monzo[]
        const [minPrimeExponent, maxPrimeExponent] = primeExponentExtrema
        const range = computeRange(minPrimeExponent, maxPrimeExponent + 1 as Integer & Exponent<Prime>)

        range.forEach((primeExponent: Integer & Exponent<Prime>): void => {
            monzos.forEach((numeratorMonzoToCheck: Monzo): void => {
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
