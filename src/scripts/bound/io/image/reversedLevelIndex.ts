import { LEVELS } from "../../../../sagittal"

const computeReversedLevelIndex = (levelIndex: number) => LEVELS.length - 1 - levelIndex

export {
    computeReversedLevelIndex,
}
