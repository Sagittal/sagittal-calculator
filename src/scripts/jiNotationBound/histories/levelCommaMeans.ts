import { computeRationalScamonGeometricMean, Id, indexOfFinalElement, Name } from "../../../general"
import {
    CommaClass,
    CommaMean,
    getPrimaryComma,
    getRepresentativeSymbol,
    JiNotationLevel,
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
} from "../../../sagittal"

const computeJiNotationLevelCommaMeans = (jiNotationLevel: JiNotationLevel): CommaMean[] => {
    const jiNotationLevelCommaClassIds = JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ jiNotationLevel ]

    const jiNotationLevelCommaClassIdsExcludingTheFinalCommaClass =
        jiNotationLevelCommaClassIds.slice(0, indexOfFinalElement(jiNotationLevelCommaClassIds))

    return jiNotationLevelCommaClassIdsExcludingTheFinalCommaClass
        .map((commaClassId: Id<CommaClass>, index: number): CommaMean => {
            const nextCommaClassId = jiNotationLevelCommaClassIds[ index + 1 ]

            const primaryComma = getPrimaryComma(commaClassId)
            const nextPrimaryComma = getPrimaryComma(nextCommaClassId)

            const name = [
                getRepresentativeSymbol(commaClassId).revoAscii,
                getRepresentativeSymbol(nextCommaClassId).revoAscii,
            ].join(" ") as Name<CommaMean>

            return {
                pitch: computeRationalScamonGeometricMean(primaryComma, nextPrimaryComma),
                name,
            }
        })
}

export {
    computeJiNotationLevelCommaMeans,
}
