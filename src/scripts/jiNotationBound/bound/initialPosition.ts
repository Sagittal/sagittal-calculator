import { computeJiPitchGeometricMean, Pitch, UNISON } from "../../../general"
import { JiNotationBound, MAX_SYMBOL_CLASS_POSITION } from "../../../sagittal"
import { computeBoundedSymbolClassPositions } from "../boundedPositions"

const computeInitialPosition = (jiNotationBound: JiNotationBound): Pitch => {
    const { jiNotationLevels } = jiNotationBound

    const initialLevel = jiNotationLevels[ 0 ]
    const [lesserBoundedCommaPosition = UNISON, greaterBoundedCommaPosition] =
        computeBoundedSymbolClassPositions(jiNotationBound.pitch, initialLevel)

    return greaterBoundedCommaPosition ?
        computeJiPitchGeometricMean(lesserBoundedCommaPosition, greaterBoundedCommaPosition) :
        MAX_SYMBOL_CLASS_POSITION
}

export {
    computeInitialPosition,
}
