import { Cents, computeCentsFromPitch } from "../../../general"
import { JiNotationBound, MAX_SYMBOL_CLASS_POSITION } from "../../../sagittal"
import { computeBoundedSymbolClassPositions } from "../boundedPositions"

const computeInitialPosition = (jiNotationBound: JiNotationBound): Cents => {
    const { jiNotationLevels } = jiNotationBound
    const cents = computeCentsFromPitch(jiNotationBound.pitch)
    const initialLevel = jiNotationLevels[ 0 ]
    const [lesserBoundedCommaPosition = 0, greaterBoundedCommaPosition] =
        computeBoundedSymbolClassPositions(cents, initialLevel)

    return greaterBoundedCommaPosition ?
        (lesserBoundedCommaPosition + greaterBoundedCommaPosition) / 2 as Cents :
        computeCentsFromPitch(MAX_SYMBOL_CLASS_POSITION)
}

export {
    computeInitialPosition,
}
