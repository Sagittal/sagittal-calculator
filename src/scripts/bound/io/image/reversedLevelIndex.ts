import { Basis, Cents, indexOfFinalElement, Multiplier } from "../../../../general"
import { LEVELS } from "../../../../sagittal"

const computeReversedLevelIndex = (levelIndex: number): Multiplier<Basis<Cents>> =>
    indexOfFinalElement(LEVELS) - levelIndex as Multiplier<Basis<Cents>>

export {
    computeReversedLevelIndex,
}
