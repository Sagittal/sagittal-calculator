import {Filename, LogTarget, setupScriptAndIo} from "../../../general"
import {ScriptGroup} from "../../types"
import {
    computeAllCommasLessThanHalfApotome,
    computeBestCommaPerSemitinaZone,
    computeCommaAnalysesBySemitinaZone,
    computeCommaAnalysesBySemitinaZoneEntries,
    computeTinaCandidateBucketOccams,
    logOccamResults,
    logSemitinaCandidates,
} from "../semitinaOccams"

setupScriptAndIo(
    ScriptGroup.JI_PITCH as Filename,
    [LogTarget.PROGRESS, LogTarget.DETAILS, LogTarget.FINAL, LogTarget.ERROR],
)

/***************/
/*  PHASE ONE  */
/***************/

// GATHER ALL THE COMMAS (AND ANALYZE THEM)
const commaAnalyses = computeAllCommasLessThanHalfApotome()

// SORT THEM BY SEMITINA ZONE
const commaAnalysesBySemitinaZone = computeCommaAnalysesBySemitinaZone(commaAnalyses)

// CONVERT RESULTS TO TUPLES OF [SEMITINA ZONE NAMES WHICH ARE ACTUALLY NUMERIC, COMMA ANALYSES] SORTED BY SEMITINA ZONE
const commaAnalysesBySemitinaZoneEntries = computeCommaAnalysesBySemitinaZoneEntries(commaAnalysesBySemitinaZone)

// FIND THE SINGLE BEST COMMA IN EACH ZONE
const bestCommaPerSemitinaZone = computeBestCommaPerSemitinaZone(commaAnalysesBySemitinaZoneEntries)

/***************/
/*  PHASE TWO  */
/***************/

// COMPUTE METACOMMAS AND BUCKET THEM AS YOU GO (REPORTING INCONSISTENCIES FOR REFERENCE LATER)
const tinaCandidateBucketOccams = computeTinaCandidateBucketOccams(bestCommaPerSemitinaZone)

// SORT EACH SEMITINA BUCKET BY DESCENDING OCCAM AND SHARE FINAL RESULT
logOccamResults(tinaCandidateBucketOccams)

/*****************/
/*  PHASE THREE  */
/*****************/

// FIND WHICH METACOMMAS ACROSS THE ENTIRE SERIES OF BEST COMMAS FOR EACH SEMITINA ZONE ARE THE MOST COMMON
logSemitinaCandidates(bestCommaPerSemitinaZone)
