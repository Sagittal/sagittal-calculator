import { Exponent, Monzo, Prime } from "../math"
import { MonzoTypeParameters } from "../math/monzo/types"
import { Formatted, Io } from "./types"

const spaceTerm = (term: Exponent<Prime>): Io => {
    let termText = term.toString()
    while (termText.length < 3) {
        termText = " " + termText
    }

    return termText as Io
}

const formatMonzo = <T extends MonzoTypeParameters>(
    monzo: Monzo<T>,
    { punctuated = false } = {},
): Formatted<Monzo<T>> => {
    let contents
    if (punctuated) {
        // Not using computeSlicedMonzo here because we want the trick of keeping the leftovers
        const fiveSlicedMonzo: Monzo<T & { slice: 5 }> = monzo.splice(2) as Monzo<T & { slice: 5 }>
        const twoThreeMonzo = monzo
        contents = twoThreeMonzo.map(spaceTerm).join(" ") + ", "

        let index = 0
        while (index < fiveSlicedMonzo.length) {
            contents = contents + spaceTerm(fiveSlicedMonzo[ index ])
            if (index < fiveSlicedMonzo.length - 1) {
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
