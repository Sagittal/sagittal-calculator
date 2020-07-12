import { MAXIMUM_POSITION } from "../../notations/ji/intervals"
import { computeBoundedSymbolPositions } from "../../notations/ji/boundedSymbolPositions"
import { Bound } from "../../notations/ji/types"
import { Cents } from "../../utilities/types"

const computeInitialPosition = (bound: Bound): Cents => {
    const { position, levels } = bound
    const initialLevel = levels[ 0 ]
    const [lesserBoundedCommaPosition = 0, greaterBoundedCommaPosition] = computeBoundedSymbolPositions(position, initialLevel)

    return greaterBoundedCommaPosition ? (lesserBoundedCommaPosition + greaterBoundedCommaPosition) / 2 as Cents : MAXIMUM_POSITION
}

export {
    computeInitialPosition,
}
