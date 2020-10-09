import { computeStackedJiPitch, Pitch, SQRT_SCALER, UNISON } from "../../../general"
import { JiNotationBound, MAX_SYMBOL_CLASS_POSITION } from "../../../sagittal"
import { computeBoundedSymbolClassPositions } from "../boundedPositions"

const computeInitialPosition = (jiNotationBound: JiNotationBound): Pitch => {
    const { jiNotationLevels } = jiNotationBound

    const initialLevel = jiNotationLevels[ 0 ]
    const [lesserBoundedCommaPosition = UNISON, greaterBoundedCommaPosition] =
        computeBoundedSymbolClassPositions(jiNotationBound.pitch, initialLevel)

    return greaterBoundedCommaPosition ?
        {
            monzo: computeStackedJiPitch(lesserBoundedCommaPosition, greaterBoundedCommaPosition).monzo,
            // TODO: argh!!!! definitely need a pitchMean helper... so sad...
            //  All this investment in the type system, and it doesn't even really help sometimes!
            scaler: SQRT_SCALER,
        } as Pitch<{ rational: false }> :
        MAX_SYMBOL_CLASS_POSITION
}

export {
    computeInitialPosition,
}
