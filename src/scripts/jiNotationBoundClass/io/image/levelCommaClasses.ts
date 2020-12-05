import {add, DEFAULT_PRECISION, Io, Px, round, subtract} from "@sagittal/general"
import {
    analyzeComma,
    CommaClassId,
    computeSagittalAscii,
    computeSagittalUnicode,
    getCommaClass,
    getMinaName,
    getRepresentativeSagittal,
    JiNotationLevelId,
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
} from "@sagittal/system"
import {formatMinaName} from "../terminal"
import {JI_NOTATION_LEVEL_CENTERS} from "./levelHeights"
import {DOT_SIZE, MINA_OFFSET, SAGITTAL_OFFSET} from "./sizes"
import {computeX} from "./x"

const visualizeJiNotationLevelCommaClasses = (): Io[] => {
    const jiNotationLevelCommaClassElements: Io[] = [] as Io[]

    const jiNotationLevelsCommaClassIdsEntries =
        Object.entries(JI_NOTATION_LEVELS_COMMA_CLASS_IDS) as Array<[JiNotationLevelId, CommaClassId[]]>
    jiNotationLevelsCommaClassIdsEntries.forEach((
        [jiNotationLevel, jiNotationLevelCommaClassIds]: [JiNotationLevelId, CommaClassId[]],
    ): void => {
        if (jiNotationLevel === JiNotationLevelId.INSANE) {
            return
        }

        const centerY: Px = round(JI_NOTATION_LEVEL_CENTERS[jiNotationLevel], DEFAULT_PRECISION)
        const dotY: Px = round(subtract(centerY, SAGITTAL_OFFSET), DEFAULT_PRECISION)
        const sagittalY: Px = round(add(centerY, SAGITTAL_OFFSET), DEFAULT_PRECISION)

        jiNotationLevelCommaClassIds.forEach((jiNotationLevelCommaClassId: CommaClassId): void => {
            const minaName = getMinaName(jiNotationLevelCommaClassId)
            const commaAnalysis = analyzeComma(getCommaClass(jiNotationLevelCommaClassId).pitch)
            const representativeSagittal = getRepresentativeSagittal(jiNotationLevelCommaClassId)
            const ascii = computeSagittalAscii(representativeSagittal)
            const unicode = computeSagittalUnicode(representativeSagittal)

            const positionX: Px = computeX(commaAnalysis.pitch)

            const adjustedUnicode = ascii === "/|~" ?
                unicode + "         " :
                ascii === ",,(|(" ?
                    "         " + unicode :
                    unicode

            jiNotationLevelCommaClassElements.push(
                `  <circle stroke="black" cx="${positionX}" cy="${dotY}" r="${DOT_SIZE}" />\n` as Io,
            )
            jiNotationLevelCommaClassElements.push(`  <text fill="white" text-anchor="middle" x="${positionX}" y="${sagittalY}" font-size="10px" font-family="Helvetica">${ascii}</text>\n` as Io) // So they can be searched by ASCII
            jiNotationLevelCommaClassElements.push(`  <text fill="black" text-anchor="middle" x="${positionX}" y="${sagittalY}" font-size="40px" font-family="Bravura">${adjustedUnicode}</text>\n` as Io)

            if (jiNotationLevel === JiNotationLevelId.EXTREME) {
                const minaY: Px = round(subtract(sagittalY, MINA_OFFSET), DEFAULT_PRECISION)
                jiNotationLevelCommaClassElements.push(`  <text text-anchor="middle" x="${positionX}" y="${minaY}" font-size="10px" font-family="Bravura">${formatMinaName(minaName)}</text>\n` as Io)
            }
        })
    })

    return jiNotationLevelCommaClassElements
}

export {
    visualizeJiNotationLevelCommaClasses,
}
