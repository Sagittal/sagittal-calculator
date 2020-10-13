import { computeRationalScamonGeometricMean, Scamon, UNISON } from "../../../general"
import { JiNotationBoundClass, MAX_SINGLE_SHAFT_POSITION } from "../../../sagittal"
import { computeBoundedCommaClassPositions } from "../boundedPositions"

const computeInitialPosition = (jiNotationBoundClass: JiNotationBoundClass): Scamon => {
    const { jiNotationLevels } = jiNotationBoundClass

    const initialLevel = jiNotationLevels[ 0 ]
    const [lesserBoundedCommaClassPosition = UNISON, greaterBoundedCommaClassPosition] =
        computeBoundedCommaClassPositions(jiNotationBoundClass.pitch, initialLevel)

    return greaterBoundedCommaClassPosition ?
        computeRationalScamonGeometricMean(lesserBoundedCommaClassPosition, greaterBoundedCommaClassPosition) :
        MAX_SINGLE_SHAFT_POSITION
}

export {
    computeInitialPosition,
}
