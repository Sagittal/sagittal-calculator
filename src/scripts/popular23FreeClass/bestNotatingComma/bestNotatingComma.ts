import { Comma, isUndefined, Maybe } from "../../../general"
import { popular23FreeClassesScriptGroupSettings } from "../globals"
import { computeIsLaas } from "./isLaas"
import { computeIsLate } from "./isLate"

const computeBestNotatingComma = (notatingCommas: Comma[]): Comma => {
    let bestNotatingComma: Maybe<Comma> = undefined
    for (const notatingComma of notatingCommas) {
        if (
            isUndefined(bestNotatingComma) ||
            (
                popular23FreeClassesScriptGroupSettings.useLate ?
                    computeIsLate(notatingComma, bestNotatingComma) :
                    computeIsLaas(notatingComma, bestNotatingComma)
            )
        ) {
            bestNotatingComma = notatingComma
        }
    }

    if (isUndefined(bestNotatingComma)) {
        throw new Error("did not find a best notating comma for this 2,3-free class")
    }

    return bestNotatingComma
}

export {
    computeBestNotatingComma,
}
