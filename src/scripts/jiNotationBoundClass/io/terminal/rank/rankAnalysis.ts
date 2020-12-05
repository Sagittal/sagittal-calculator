import {colorize, ColorMethod, Count, Decimal, Io, Rank} from "@sagittal/general"
import {BoundType} from "@sagittal/system"
import {rankBoundClassIndices} from "../../../globals"
import {RANK_COLOR_METHODS} from "../rankColors"
import {FORMATTED_RANKS} from "../rankNames"

const formatRankAnalysis = (rankCount: Count<Decimal<{integer: true}> & Rank<BoundType>>, rank: number): Io => {
    const rankAnalysisIo: Io = `${FORMATTED_RANKS[rank].trim()} event was worst-ranked bound class event:\n\ttotal: ${rankCount} bounds\n\tbounds: ${rankBoundClassIndices[rank].join(", ")}` as Io
    const color: ColorMethod = RANK_COLOR_METHODS[rank]

    return colorize(rankAnalysisIo, color)
}

export {
    formatRankAnalysis,
}
