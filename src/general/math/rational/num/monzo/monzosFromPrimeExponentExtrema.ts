import { computeExtensionBase, computeRange, computeTrimmedArray, ExtensionBaseType } from "../../../../code"
import { Extrema } from "../../../../types"
import { Exponent } from "../../../types"
import { Integer, Prime } from "../../types"
import { RationalMonzo } from "./types"

const computeRationalMonzosFromPrimeExponentExtremas = (
    primeExponentExtremas: Array<Extrema<Integer & Exponent<Prime>>>,
): RationalMonzo[] => {
    let monzos = [computeExtensionBase(ExtensionBaseType.ARRAY)] as RationalMonzo[]

    primeExponentExtremas.forEach((primeExponentExtrema: Extrema<Integer & Exponent<Prime>>): void => {
        const extendedPossibleMonzos = [] as unknown[] as RationalMonzo[]
        const [minPrimeExponent, maxPrimeExponent] = primeExponentExtrema
        const range = computeRange(minPrimeExponent, maxPrimeExponent + 1 as Integer & Exponent<Prime>)

        range.forEach((primeExponent: Integer & Exponent<Prime>): void => {
            monzos.forEach((numeratorMonzoToCheck: RationalMonzo): void => {
                extendedPossibleMonzos.push([...numeratorMonzoToCheck, primeExponent] as RationalMonzo)
            })
        })

        monzos = extendedPossibleMonzos
    })

    return monzos.map(computeTrimmedArray)
}

export {
    computeRationalMonzosFromPrimeExponentExtremas,
}
