import { Cents } from "../../../general"
import { JiNotationBound, MAX_SYMBOL_CLASS_CENTS } from "../../../sagittal"
import { computeBoundedSymbolClassPositions } from "../boundedPositions"

const computeInitialPosition = (jiNotationBound: JiNotationBound): Cents => {
    const { cents, jiNotationLevels } = jiNotationBound
    const initialLevel = jiNotationLevels[ 0 ]
    const [lesserBoundedCommaPosition = 0, greaterBoundedCommaPosition] =
        computeBoundedSymbolClassPositions(cents, initialLevel)

    return greaterBoundedCommaPosition ?
        (lesserBoundedCommaPosition + greaterBoundedCommaPosition) / 2 as Cents :
        MAX_SYMBOL_CLASS_CENTS
}

export {
    computeInitialPosition,
}
