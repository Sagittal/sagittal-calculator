import { Cents } from "../../general"
import { Bound, computeBoundedJiSymbolPositions, MAX_POSITION } from "../../notations"

const computeInitialPosition = (bound: Bound): Cents => {
    const { cents, levels } = bound
    const initialLevel = levels[ 0 ]
    const [lesserBoundedCommaPosition = 0, greaterBoundedCommaPosition] =
        computeBoundedJiSymbolPositions(cents, initialLevel)

    return greaterBoundedCommaPosition ?
        (lesserBoundedCommaPosition + greaterBoundedCommaPosition) / 2 as Cents :
        MAX_POSITION
}

export {
    computeInitialPosition,
}
