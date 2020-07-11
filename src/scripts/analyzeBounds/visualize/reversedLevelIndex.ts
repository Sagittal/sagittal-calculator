import { LEVELS } from "../../../notations/ji/levels"

const computeReversedLevelIndex = (levelIndex: number) => LEVELS.length - 1 - levelIndex

export {
    computeReversedLevelIndex,
}
