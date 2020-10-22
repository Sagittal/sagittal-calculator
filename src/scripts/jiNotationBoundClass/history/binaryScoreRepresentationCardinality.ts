import {Decimal, Rank} from "../../../general"
import {BoundType, JI_NOTATION_LEVELS} from "../../../sagittal"

const computeBinaryScoreRepresentationIndex = (
    rank: Decimal<{integer: true}> & Rank<BoundType>,
    index: number,
): number =>
    rank * JI_NOTATION_LEVELS.length + (JI_NOTATION_LEVELS.length - 1 - index)

export {
    computeBinaryScoreRepresentationIndex,
}
