import { Exponent, Integer, Monzo, Prime } from "../math"
import { Formatted, IO } from "./types"

const spaceTerm = (term: Exponent<Prime>): IO => {
    let termText = term.toString()
    while (termText.length < 3) {
        termText = " " + termText
    }

    return termText as IO
}

const formatMonzo = (monzo: Monzo, { punctuated = false } = {}): Formatted<Monzo> => {
    let contents
    if (punctuated) {
        const fiveSlicedMonzo: Monzo<Integer, 5> = monzo.splice(2) as Monzo<Integer, 5>
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

    return `[ ${contents} ⟩` as Formatted<Monzo>
}

export {
    formatMonzo,
}
