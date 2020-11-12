import {indexOfFinalElement} from "../../code"
import {Monzo, NumericProperties} from "../../math"
import {spaceMonzoOrValExponent} from "./spaceMonzoOrValExponent"
import {Formatted} from "./types"

const formatMonzo = <T extends NumericProperties>(
    monzo: Monzo<T>,
    {punctuated = false}: {punctuated?: boolean} = {},
): Formatted<Monzo<T>> => {
    let contents
    if (punctuated) {
        const two3FreeMonzo: Monzo<T & {rough: 5}> = monzo.splice(2) as Monzo<T & {rough: 5}>
        contents = monzo.map(spaceMonzoOrValExponent).join(" ") + ", "

        let index = 0
        while (index < two3FreeMonzo.length) {
            contents = contents + spaceMonzoOrValExponent(two3FreeMonzo[index])
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
        contents = monzo.map(spaceMonzoOrValExponent).join(" ")
    }

    return `[ ${contents} ⟩` as Formatted<Monzo<T>>
}

export {
    formatMonzo,
}
