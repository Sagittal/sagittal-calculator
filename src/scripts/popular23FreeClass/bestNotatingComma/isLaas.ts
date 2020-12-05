import {Comma, computeCentsFromPitch} from "@sagittal/general"
import {computeAas} from "@sagittal/system"

const isLaas = (notatingComma: Comma, bestNotatingComma: Comma): boolean => {
    const aas = computeAas(notatingComma)
    const laas = computeAas(bestNotatingComma)

    return aas < laas ||
        (aas === laas && computeCentsFromPitch(notatingComma) < computeCentsFromPitch(bestNotatingComma))
}

export {
    isLaas,
}
