import { LEVELS } from "../../../notations"

const computeReversedLevelIndex = (levelIndex: number) => LEVELS.length - 1 - levelIndex

export {
    computeReversedLevelIndex,
}
