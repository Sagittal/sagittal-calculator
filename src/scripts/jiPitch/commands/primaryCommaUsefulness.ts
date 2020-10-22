import {Comma, Id, saveLog, stringify} from "../../../general"
import {
    analyzeComma,
    CommaAnalysis,
    CommaClass,
    computeCommaName,
    computeSecondaryCommaZone,
    formatCommaClass,
    getCommaClass,
    JI_NOTATION,
} from "../../../sagittal"
import {computeCommas, parseFindCommasSettings} from "../findCommas"
import {jiPitchScriptGroupSettings} from "../globals"
import {applySharedPitchCommandSetup} from "./shared"

// TODO: FINALLY IMPLEMENT PRIMARY COMMA USEFULNESS CHECK
//  See: http://forum.sagittal.org/viewtopic.php?p=2432#p2432
//  And: http://forum.sagittal.org/viewtopic.php?p=2419#p2419

applySharedPitchCommandSetup()

const findCommasSettings = parseFindCommasSettings()

JI_NOTATION.forEach((commaClassId: Id<CommaClass>): void => {
    const commaClass = getCommaClass(commaClassId)
    const commaName = computeCommaName(commaClass.pitch)

    saveLog(`\n\n${formatCommaClass(commaClassId)} ${commaName}\n\n`)

    const secondaryCommaZone = computeSecondaryCommaZone(commaClassId)
    const lowerBound = secondaryCommaZone[0]
    const upperBound = secondaryCommaZone[1]

    const commas = computeCommas({...jiPitchScriptGroupSettings, ...findCommasSettings, lowerBound, upperBound})

    const commaAnalyses = commas.map((comma: Comma): CommaAnalysis => analyzeComma(comma))

    saveLog(stringify(commaAnalyses, {multiline: true}))
})
