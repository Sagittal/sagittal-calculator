import { computeExtensionBase, computeRange, computeTrimmedArray, ExtensionBaseType } from "../../../../code"
import { Extrema } from "../../../../types"
import { Exponent } from "../../../types"
import { Prime } from "../../types"
import { IntegerDecimal } from "../decimal"
import { RationalMonzo } from "./types"

const computeRationalMonzosFromPrimeExponentExtremas = (
    primeExponentExtremas: Array<Extrema<IntegerDecimal & Exponent<Prime>>>,
): RationalMonzo[] => {
    let rationalMonzos = [computeExtensionBase(ExtensionBaseType.ARRAY)] as RationalMonzo[]

    primeExponentExtremas.forEach((primeExponentExtrema: Extrema<IntegerDecimal & Exponent<Prime>>): void => {
        const extendedPossibleMonzos = [] as unknown[] as RationalMonzo[]
        const [minPrimeExponent, maxPrimeExponent] = primeExponentExtrema
        const range = computeRange(minPrimeExponent, maxPrimeExponent + 1 as IntegerDecimal & Exponent<Prime>)

        range.forEach((primeExponent: IntegerDecimal & Exponent<Prime>): void => {
            rationalMonzos.forEach((numeratorMonzoToCheck: RationalMonzo): void => {
                extendedPossibleMonzos.push([...numeratorMonzoToCheck, primeExponent] as RationalMonzo)
            })
        })

        rationalMonzos = extendedPossibleMonzos
    })

    return rationalMonzos.map(computeTrimmedArray)
}

export {
    computeRationalMonzosFromPrimeExponentExtremas,
}
