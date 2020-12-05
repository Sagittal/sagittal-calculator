import {Basis, Cents, indexOfFinalElement, Multiplier} from "@sagittal/general"
import {JI_NOTATION_LEVELS} from "@sagittal/system"

const computeReversedJiNotationLevelIndex = (jiNotationLevelIndex: number): Multiplier<Basis<Cents>> =>
    indexOfFinalElement(JI_NOTATION_LEVELS) - jiNotationLevelIndex as Multiplier<Basis<Cents>>

export {
    computeReversedJiNotationLevelIndex,
}
