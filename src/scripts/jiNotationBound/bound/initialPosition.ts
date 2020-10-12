import { computeRationalScamonGeometricMean, Scamon, UNISON } from "../../../general"
import { JiNotationBound, MAX_SINGLE_SHAFT_POSITION } from "../../../sagittal"
import { computeBoundedCommaClassPositions } from "../boundedPositions"

const computeInitialPosition = (jiNotationBound: JiNotationBound): Scamon => {
    const { jiNotationLevels } = jiNotationBound

    const initialLevel = jiNotationLevels[ 0 ]
    const [lesserBoundedCommaPosition = UNISON, greaterBoundedCommaPosition] =
        computeBoundedCommaClassPositions(jiNotationBound.pitch, initialLevel)

    return greaterBoundedCommaPosition ?
        computeRationalScamonGeometricMean(lesserBoundedCommaPosition, greaterBoundedCommaPosition) :
        MAX_SINGLE_SHAFT_POSITION
}

export {
    computeInitialPosition,
}
