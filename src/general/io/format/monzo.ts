import { indexOfFinalElement } from "../../code"
import { Exponent, Monzo, NumTypeParameters, Prime } from "../../math"
import { Io } from "../types"
import { Formatted } from "./types"

const spaceTerm = (term: Exponent<Prime>): Io => {
    let termText = term.toString()
    while (termText.length < 3) {
        termText = " " + termText
    }

    return termText as Io
}

const formatMonzo = <T extends NumTypeParameters>(
    monzo: Monzo<T>,
    { punctuated = false }: { punctuated?: boolean } = {},
): Formatted<Monzo<T>> => {
    let contents
    if (punctuated) {
        const twoThreeFreeMonzo: Monzo<T & { rough: 5 }> = monzo.splice(2) as Monzo<T & { rough: 5 }>
        contents = monzo.map(spaceTerm).join(" ") + ", "

        let index = 0
        while (index < twoThreeFreeMonzo.length) {
            contents = contents + spaceTerm(twoThreeFreeMonzo[ index ])
            if (index < indexOfFinalElement(twoThreeFreeMonzo)) {
                if (index % 3 === 2) {
                    contents = contents + ", "
                } else {
                    contents = contents + " "
                }
            }
            index += 1
        }
    } else {
        contents = monzo.map(spaceTerm).join(" ")
    }

    return `[ ${contents} ⟩` as Formatted<Monzo<T>>
}

export {
    formatMonzo,
}
