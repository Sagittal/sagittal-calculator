import {Count, count, indexOfFinalElement, shallowClone} from "../../general"
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

// TODO: would be nice to consolidate this down to one loop or something
//  I used to have a to-do for this but maybe it got lost in the chaos that was getting this generally correct
const computeCaptureZones = (notation: Notation): CaptureZone[] => {
    const {boundClassIds, symbolClassIds} = notation

    const symbolClassCount = count(symbolClassIds)
    const boundClassCount = count(boundClassIds)

    if (symbolClassCount as Count !== boundClassCount as Count) {
        throw new Error(`The count of symbol and bound classes must be the same, but were ${symbolClassCount} and ${boundClassCount}, respectively.`)
    }

    const reversedBoundClassIds = shallowClone(boundClassIds).reverse()
    const finalBoundClassIndex = indexOfFinalElement(reversedBoundClassIds)

    const captureZones = [] as CaptureZone[]

    // P1A: upwards, from unison to half apotome
    boundClassIds.forEach((boundClassId: BoundClassId, boundClassOrSymbolClassIndex: number): void => {
        const symbolClassId = symbolClassIds[boundClassOrSymbolClassIndex]

        captureZones.push({
            boundClassId,
            symbolClassId,
            section: SECTION_P1A,
        })
    })

    // P1T: upwards, from half apotome to apotome
    reversedBoundClassIds.forEach((boundClassId: BoundClassId, remainingBoundClassIndex: number): void => {
        const symbolClassIndex = finalBoundClassIndex - remainingBoundClassIndex
        const symbolClassId = symbolClassIds[symbolClassIndex]

        captureZones.push({
            boundClassId,
            symbolClassId,
            section: SECTION_P1T,
        })
    })

    // P2A: upwards, from apotome to apotome and a half
    boundClassIds.forEach((boundClassId: BoundClassId, boundClassOrSymbolClassIndex: number): void => {
        const symbolClassId = symbolClassIds[boundClassOrSymbolClassIndex]

        captureZones.push({
            boundClassId,
            symbolClassId,
            section: SECTION_P2A,
        })
    })

    // P2T: upwards, from apotome and a half to double apotome
    reversedBoundClassIds.forEach((boundClassId: BoundClassId, remainingBoundClassIndex: number): void => {
        const symbolClassIndex = finalBoundClassIndex - remainingBoundClassIndex
        const symbolClassId = symbolClassIds[symbolClassIndex]

        captureZones.push({
            boundClassId,
            symbolClassId,
            section: SECTION_P2T,
        })
    })

    const negativeCaptureZones = [] as CaptureZone[]

    // N1A: upwards, from negative half apotome to unison
    boundClassIds.forEach((boundClassId: BoundClassId, boundClassOrSymbolClassIndex: number): void => {
        const symbolClassId = symbolClassIds[boundClassOrSymbolClassIndex]

        negativeCaptureZones.push({
            boundClassId,
            symbolClassId,
            section: SECTION_N1A,
        })
    })

    // N1T: upwards, from negative apotome to negative half apotome
    reversedBoundClassIds.forEach((boundClassId: BoundClassId, remainingBoundClassIndex: number): void => {
        const symbolClassIndex = finalBoundClassIndex - remainingBoundClassIndex
        const symbolClassId = symbolClassIds[symbolClassIndex]

        negativeCaptureZones.push({
            boundClassId,
            symbolClassId,
            section: SECTION_N1T,
        })
    })

    // N2A: upwards, from negative apotome and a half to negative apotome
    boundClassIds.forEach((boundClassId: BoundClassId, boundClassOrSymbolClassIndex: number): void => {
        const symbolClassId = symbolClassIds[boundClassOrSymbolClassIndex]

        negativeCaptureZones.push({
            boundClassId,
            symbolClassId,
            section: SECTION_N2A,
        })
    })

    // N2T: upwards, from negative double apotome to negative apotome and a half
    reversedBoundClassIds.forEach((boundClassId: BoundClassId, remainingBoundClassIndex: number): void => {
        const symbolClassIndex = finalBoundClassIndex - remainingBoundClassIndex
        const symbolClassId = symbolClassIds[symbolClassIndex]

        negativeCaptureZones.push({
            boundClassId,
            symbolClassId,
            section: SECTION_N2T,
        })
    })

    return [
        ...negativeCaptureZones.reverse(),
        ...captureZones,
    ]
}

export {
    computeCaptureZones,
}
