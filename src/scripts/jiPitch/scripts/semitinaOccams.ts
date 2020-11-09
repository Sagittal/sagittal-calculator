import {Filename, ioSettings, LogTarget, saveLog, setupScriptAndIo, time} from "../../../general"
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

/*********************************************/
/*  PHASE ONE: COMPUTE BEST COMMAS PER ZONE  */
/*********************************************/

// GATHER ALL THE COMMAS (AND ANALYZE THEM)
const commaAnalyses = computeAllCommasLessThanHalfApotome()
// SORT THEM BY SEMITINA ZONE
const commaAnalysesBySemitinaZone = computeCommaAnalysesBySemitinaZone(commaAnalyses)
// CONVERT RESULTS TO TUPLES OF [SEMITINA ZONE NAMES WHICH ARE ACTUALLY NUMERIC, COMMA ANALYSES] SORTED BY SEMITINA ZONE
const commaAnalysesBySemitinaZoneEntries = computeCommaAnalysesBySemitinaZoneEntries(commaAnalysesBySemitinaZone)
// FIND THE SINGLE BEST COMMA IN EACH ZONE
const bestCommaPerSemitinaZone = computeBestCommaPerSemitinaZone(commaAnalysesBySemitinaZoneEntries)

/****************************************************************************************/
/*  PHASE TWO: COMPUTE METACOMMAS, BUCKET OCCURRENCES BY TINA, SORT AND LOG CANDIDATES  */
/****************************************************************************************/

saveLog("(* indicates inconsistent commas)", LogTarget.FINAL)

// COMPUTE METACOMMAS AND BUCKET THEM AS YOU GO
const tinaCandidateBucketOccams = computeTinaCandidateBucketOccams(bestCommaPerSemitinaZone)
// SORT EACH SEMITINA BUCKET BY DESCENDING OCCAM AND SHARE FINAL RESULT
logOccamResults(tinaCandidateBucketOccams)

// FIND WHICH METACOMMAS ACROSS THE ENTIRE SERIES OF BEST COMMAS FOR EACH SEMITINA ZONE ARE THE MOST COMMON
logSemitinaCandidates(bestCommaPerSemitinaZone)

if (ioSettings.time) saveLog(`\n\nTOOK ${time()}`, LogTarget.FINAL)