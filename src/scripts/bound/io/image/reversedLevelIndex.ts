import { Basis, Cents, Multiplier } from "../../../../general"
import { LEVELS } from "../../../../sagittal"

const computeReversedLevelIndex = (levelIndex: number): Multiplier<Basis<Cents>> =>
    LEVELS.length - 1 - levelIndex as Multiplier<Basis<Cents>>

export {
    computeReversedLevelIndex,
}
