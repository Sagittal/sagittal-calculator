export {Semitina} from "./types"
export {SEMITINA} from "./constants"
export {
    computeAllCommasLessThanHalfApotome,
    computeBestCommaPerSemitinaZone,
    computeCommaAnalysesBySemitinaZone,
    computeCommaAnalysesBySemitinaZoneEntries,
} from "./phase1"
export {
    checkMetacommaConsistency, TinaBucket, Occam, computeTinaCandidateBucketOccams, logOccamResults,
} from "./phase2"
export {logSemitinaCandidates} from "./phase3"
