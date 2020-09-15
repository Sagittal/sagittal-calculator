import { Basis, Cents, indexOfFinalElement, Multiplier } from "../../../../general"
import { JI_NOTATION_LEVELS } from "../../../../sagittal"

const computeReversedJiNotationLevelIndex = (jiNotationLevelIndex: number): Multiplier<Basis<Cents>> =>
    indexOfFinalElement(JI_NOTATION_LEVELS) - jiNotationLevelIndex as Multiplier<Basis<Cents>>

export {
    computeReversedJiNotationLevelIndex,
}
