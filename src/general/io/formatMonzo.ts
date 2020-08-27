import { Monzo } from "../math"
import { Formatted } from "./types"

const formatMonzo = (monzo: Monzo, { punctuated = false } = {}): Formatted<Monzo> => {
    let contents
    if (punctuated) {
        const fiveSlicedMonzo: Monzo<5> = monzo.splice(2) as Monzo<5>
        const twoThreeMonzo = monzo
        contents = twoThreeMonzo.join(" ") + ", "

        let index = 0
        while (index < fiveSlicedMonzo.length) {
            contents = contents + fiveSlicedMonzo[ index ]
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
        contents = monzo.join(" ")
    }

    return `[ ${contents} ⟩` as Formatted<Monzo>
}

export {
    formatMonzo,
}
