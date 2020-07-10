import {MAXIMUM_POSITION} from "../../notations/ji/intervals"
import {computeBoundedSymbolPositions} from "../../notations/ji/boundedSymbolPositions"

const computeInitialPosition = bound => {
    const {position, levels} = bound
    const initialLevel = levels[0]
    const [lesserBoundedCommaPosition, greaterBoundedCommaPosition] = computeBoundedSymbolPositions(position, initialLevel)

    return greaterBoundedCommaPosition ? (lesserBoundedCommaPosition + greaterBoundedCommaPosition) / 2 : MAXIMUM_POSITION
}

export {
    computeInitialPosition,
}
