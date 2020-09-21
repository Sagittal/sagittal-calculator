import { Integer, Rank } from "../../../general"
import { BoundType, JI_NOTATION_LEVELS } from "../../../sagittal"

const computeBinaryScoreRepresentationIndex = (rank: Integer & Rank<BoundType>, index: number): number =>
    rank * JI_NOTATION_LEVELS.length + (JI_NOTATION_LEVELS.length - 1 - index)

export {
    computeBinaryScoreRepresentationIndex,
}
