import { Comma, computeCentsFromPitch, isUndefined, Maybe } from "../../general"
import { computeAas, computeAte } from "../../sagittal"
import { popular23FreeClassesScriptGroupSettings } from "./globals"

const isLate = (notatingComma: Comma, bestNotatingComma: Comma): boolean => {
    const ate = computeAte(notatingComma)
    const late = computeAte(bestNotatingComma)

    return ate < late ||
        (ate === late && computeCentsFromPitch(notatingComma) < computeCentsFromPitch(bestNotatingComma))
}

const isLaas = (notatingComma: Comma, bestNotatingComma: Comma): boolean => {
    const aas = computeAas(notatingComma)
    const laas = computeAas(bestNotatingComma)

    return aas < laas ||
        (aas === laas && computeCentsFromPitch(notatingComma) < computeCentsFromPitch(bestNotatingComma))
}

const computeBestNotatingComma = (notatingCommas: Comma[]): Comma => {
    let bestNotatingComma: Maybe<Comma> = undefined
    for (const notatingComma of notatingCommas) {
        if (
            isUndefined(bestNotatingComma) ||
            (
                popular23FreeClassesScriptGroupSettings.useLate ?
                    isLate(notatingComma, bestNotatingComma) :
                    isLaas(notatingComma, bestNotatingComma)
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
