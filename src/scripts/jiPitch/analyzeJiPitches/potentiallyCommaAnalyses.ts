import {Filename, Io, isEmpty, readLines, Scamon, sort} from "../../../general"
import {analyzePotentiallyComma, PotentiallyCommaAnalysis} from "../../../sagittal"
import {jiPitchScriptGroupSettings} from "../globals"
import {parsePitch} from "../io"

const computePotentiallyCommaAnalyses = (): PotentiallyCommaAnalysis[] => {
    const jiPitchIos = readLines("src/scripts/jiPitch/input/jiPitches.txt" as Filename) as Io[]
    if (isEmpty(jiPitchIos)) throw new Error("No JI pitches found in src/scripts/jiPitch/input/jiPitches.txt to analyze.")
    const jiPitches: Array<Scamon<{rational: true}>> = jiPitchIos.map((jiPitchIo: Io): Scamon<{rational: true}> => {
        return parsePitch(jiPitchIo) as Scamon<{rational: true}>
    })
    const potentiallyCommaAnalyses: PotentiallyCommaAnalysis[] =
        jiPitches.map((jiPitch: Scamon<{rational: true}>): PotentiallyCommaAnalysis => {
            return analyzePotentiallyComma(jiPitch)
        })
    if (jiPitchScriptGroupSettings.sortKey) {
        sort(potentiallyCommaAnalyses, {by: jiPitchScriptGroupSettings.sortKey})
    }

    return potentiallyCommaAnalyses
}

export {
    computePotentiallyCommaAnalyses,
}
