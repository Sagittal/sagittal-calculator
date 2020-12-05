import {Count, count} from "@sagittal/general"
import {
    SECTION_N1A,
    SECTION_N1T,
    SECTION_N2A,
    SECTION_N2T,
    SECTION_P1A,
    SECTION_P1T,
    SECTION_P2A,
    SECTION_P2T,
} from "./sections"
import {BoundClassId, CaptureZone, Notation} from "./types"

const checkCounts = ({boundClassIds, symbolClassIds}: Notation): void => {
    const symbolClassCount = count(symbolClassIds)
    const boundClassCount = count(boundClassIds)

    if (symbolClassCount as Count !== boundClassCount as Count) {
        throw new Error(`The count of symbol and bound classes must be the same, but were ${symbolClassCount} and ${boundClassCount}, respectively.`)
    }
}

const computeCaptureZones = ({boundClassIds, symbolClassIds}: Notation): CaptureZone[] => {
    checkCounts({boundClassIds, symbolClassIds})

    const sectionN2T = [] as CaptureZone[]
    const sectionN2A = [] as CaptureZone[]
    const sectionN1T = [] as CaptureZone[]
    const sectionN1A = [] as CaptureZone[]
    const sectionP1A = [] as CaptureZone[]
    const sectionP1T = [] as CaptureZone[]
    const sectionP2A = [] as CaptureZone[]
    const sectionP2T = [] as CaptureZone[]

    boundClassIds.forEach((boundClassId: BoundClassId, boundClassOrSymbolClassIndex: number): void => {
        const symbolClassId = symbolClassIds[boundClassOrSymbolClassIndex]

        sectionP1A.push({boundClassId, symbolClassId, section: SECTION_P1A})
        sectionP2A.push({boundClassId, symbolClassId, section: SECTION_P2A})
        sectionN1A.push({boundClassId, symbolClassId, section: SECTION_N1A})
        sectionN2A.push({boundClassId, symbolClassId, section: SECTION_N2A})
        sectionP1T.push({boundClassId, symbolClassId, section: SECTION_P1T})
        sectionP2T.push({boundClassId, symbolClassId, section: SECTION_P2T})
        sectionN1T.push({boundClassId, symbolClassId, section: SECTION_N1T})
        sectionN2T.push({boundClassId, symbolClassId, section: SECTION_N2T})
    })

    return [
        ...sectionN2T,
        ...sectionN2A.reverse(),
        ...sectionN1T,
        ...sectionN1A.reverse(),

        ...sectionP1A,
        ...sectionP1T.reverse(),
        ...sectionP2A,
        ...sectionP2T.reverse(),
    ]
}

export {
    computeCaptureZones,
}
