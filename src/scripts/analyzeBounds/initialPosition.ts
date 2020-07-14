import { Cents } from "../../general"
import { Bound, computeBoundedSymbolPositions, MAXIMUM_POSITION } from "../../notations"

const computeInitialPosition = (bound: Bound): Cents => {
    const { cents, levels } = bound
    const initialLevel = levels[ 0 ]
    const [lesserBoundedCommaPosition = 0, greaterBoundedCommaPosition] = computeBoundedSymbolPositions(cents, initialLevel)

    return greaterBoundedCommaPosition ? (lesserBoundedCommaPosition + greaterBoundedCommaPosition) / 2 as Cents : MAXIMUM_POSITION
}

export {
    computeInitialPosition,
}
