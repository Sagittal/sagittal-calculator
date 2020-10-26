import {Count, count, indexOfFinalElement, shallowClone} from "../../general"
import {BoundClassId} from "../bound"
import {CaptureZone, Notation} from "./types"

const computeCaptureZones = (notation: Notation): CaptureZone[] => {
    const {boundClassIds, symbolClassIds} = notation

    const symbolClassCount = count(symbolClassIds)
    const boundClassCount = count(boundClassIds)

    if (symbolClassCount as Count !== boundClassCount as Count) {
        throw new Error(`The count of symbol and bound classes must be the same, but were ${symbolClassCount} and ${boundClassCount}, respectively.`)
    }

    const captureZones = [] as CaptureZone[]

    // P1A: upwards, from unison to half apotome
    boundClassIds.forEach((boundClassId: BoundClassId, boundClassOrSymbolClassIndex: number): void => {
        const symbolClassId = symbolClassIds[boundClassOrSymbolClassIndex]

        captureZones.push({
            boundClassId,
            symbolClassId,
            section: {
                negated: false,
                shifted: false,
                mirrored: false,
            },
        })
    })

    // P1T: upwards, from half apotome to apotome
    const reversedBoundClassIds = shallowClone(boundClassIds).reverse()
    const finalBoundClassIndex = indexOfFinalElement(reversedBoundClassIds)
    reversedBoundClassIds.forEach((boundClassId: BoundClassId, remainingBoundClassIndex: number): void => {
        const symbolClassIndex = finalBoundClassIndex - remainingBoundClassIndex
        const symbolClassId = symbolClassIds[symbolClassIndex]

        captureZones.push({
            boundClassId,
            symbolClassId,
            section: {
                negated: false,
                shifted: false,
                mirrored: true,
            },
        })
    })

    // P2A: upwards, from apotome to apotome and a half
    boundClassIds.forEach((boundClassId: BoundClassId, boundClassOrSymbolClassIndex: number): void => {
        const symbolClassId = symbolClassIds[boundClassOrSymbolClassIndex]

        captureZones.push({
            boundClassId,
            symbolClassId,
            section: {
                negated: false,
                shifted: true,
                mirrored: false,
            },
        })
    })

    // P2T: upwards, from apotome and a half to double apotome
    reversedBoundClassIds.forEach((boundClassId: BoundClassId, remainingBoundClassIndex: number): void => {
        const symbolClassIndex = finalBoundClassIndex - remainingBoundClassIndex
        const symbolClassId = symbolClassIds[symbolClassIndex]

        captureZones.push({
            boundClassId,
            symbolClassId,
            section: {
                negated: false,
                shifted: true,
                mirrored: true,
            },
        })
    })

    // N1A: upwards, from negative half apotome to unison
    // N1T: upwards, from negative apotome to negative half apotome
    // N2A: upwards, from negative apotome and a half to negative apotome
    // N2T: upwards, from negative double apotome to negative apotome and a half

    return captureZones
}

export {
    computeCaptureZones,
}
