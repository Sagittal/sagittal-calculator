import { Comma, computeCentsFromPitch } from "../../../general"
import { computeAas } from "../../../sagittal"

const isLaas = (notatingComma: Comma, bestNotatingComma: Comma): boolean => {
    const aas = computeAas(notatingComma)
    const laas = computeAas(bestNotatingComma)

    return aas < laas ||
        (aas === laas && computeCentsFromPitch(notatingComma) < computeCentsFromPitch(bestNotatingComma))
}

export {
    isLaas,
}
