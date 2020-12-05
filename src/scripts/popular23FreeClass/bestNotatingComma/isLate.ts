import {Comma, computeCentsFromPitch} from "@sagittal/general"
import {computeAte} from "@sagittal/system"

const isLate = (notatingComma: Comma, bestNotatingComma: Comma): boolean => {
    const ate = computeAte(notatingComma)
    const late = computeAte(bestNotatingComma)

    return ate < late ||
        (ate === late && computeCentsFromPitch(notatingComma) < computeCentsFromPitch(bestNotatingComma))
}

export {
    isLate,
}
