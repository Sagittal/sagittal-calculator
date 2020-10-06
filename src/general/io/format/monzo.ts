import { indexOfFinalElement } from "../../code"
import { Exponent, Monzo, NumericProperties, Prime } from "../../math"
import { Io } from "../types"
import { Formatted } from "./types"

const spacePrimeExponent = (primeExponent: Exponent<Prime>): Io => {
    let primeExponentText = primeExponent.toString()
    while (primeExponentText.length < 3) {
        primeExponentText = " " + primeExponentText
    }

    return primeExponentText as Io
}

const formatMonzo = <T extends NumericProperties>(
    monzo: Monzo<T>,
    { punctuated = false }: { punctuated?: boolean } = {},
): Formatted<Monzo<T>> => {
    let contents
    if (punctuated) {
        const two3FreeMonzo: Monzo<T & { rough: 5 }> = monzo.splice(2) as Monzo<T & { rough: 5 }>
        contents = monzo.map(spacePrimeExponent).join(" ") + ", "

        let index = 0
        while (index < two3FreeMonzo.length) {
            contents = contents + spacePrimeExponent(two3FreeMonzo[ index ])
            if (index < indexOfFinalElement(two3FreeMonzo)) {
                if (index % 3 === 2) {
                    contents = contents + ", "
                } else {
                    contents = contents + " "
                }
            }
            index += 1
        }
    } else {
        contents = monzo.map(spacePrimeExponent).join(" ")
    }

    return `[ ${contents} ⟩` as Formatted<Monzo<T>>
}

export {
    formatMonzo,
}
