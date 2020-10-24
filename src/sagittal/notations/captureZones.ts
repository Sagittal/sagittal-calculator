import {Apotome, Count, count, Direction, Id, indexOfFinalElement, shallowClone} from "../../general"
import {Flacco} from "../accidental"
import {BoundClass} from "./ji"
import {CaptureZone, Notation, Section} from "./types"

const computeCaptureZones = (notation: Notation): CaptureZone[] => {
    const { commaClassIds, boundClassIds, flaccoIds } = notation

    const commaClassCount = count(commaClassIds)
    const boundClassCount = count(boundClassIds)
    const flaccoCount = count(flaccoIds)

    if (commaClassCount as Count !== boundClassCount as Count) {
        throw new Error(`The count of comma and bound classes must be the same, but were ${commaClassCount} and ${boundClassCount}, respectively.`)
    }

    const captureZones = [] as CaptureZone[]

    // P1A: upwards, from unison to half apotome
    boundClassIds.forEach((boundClassId: Id<BoundClass>, boundCommaOrFlaccoIndex: number): void => {
        const commaClassId = commaClassIds[ boundCommaOrFlaccoIndex ]

        const flaccoId = flaccoIds[ boundCommaOrFlaccoIndex ]

        captureZones.push({
            boundClassId,
            commaClassId,
            negated: false,
            shifted: false,
            section: Section.A,
            flaccoId,
        })
    })

    // P1B: upwards, from half apotome to max single-shaft sagittal
    const finalCommaOrBoundClassIndex = indexOfFinalElement(commaClassIds)
    const extraFlaccoIds = flaccoIds.slice(boundClassCount)
    extraFlaccoIds.forEach((flaccoId: Id<Flacco>, extraFlaccoIndex: number): void => {
        const commaOrBoundClassIndex = finalCommaOrBoundClassIndex - extraFlaccoIndex
        const boundClassId = boundClassIds[ commaOrBoundClassIndex ]

        const commaClassId = commaClassIds[ commaOrBoundClassIndex ]

        captureZones.push({
            boundClassId,
            commaClassId,
            negated: false,
            shifted: false,
            section: Section.B,
            flaccoId,
        })
    })

    // P1C: upwards, past max single-shaft sagittal to apotome
    const extraFlaccoCount = flaccoCount - boundClassCount
    const reversedRemainingBoundClassIds = shallowClone(boundClassIds).reverse().slice(extraFlaccoCount)

    const finalRemainingBoundClassIndex = indexOfFinalElement(reversedRemainingBoundClassIds)
    reversedRemainingBoundClassIds.forEach((boundClassId: Id<BoundClass>, remainingBoundClassIndex: number): void => {
        const commaOrFlaccoIndex = finalRemainingBoundClassIndex - remainingBoundClassIndex
        const commaClassId = commaClassIds[ commaOrFlaccoIndex ]

        const flaccoId = flaccoIds[ commaOrFlaccoIndex ]

        captureZones.push({
            boundClassId,
            commaClassId,
            negated: false,
            shifted: false,
            section: Section.C,
            flaccoId,
        })
    })

    // P2A: upwards, from apotome to apotome-and-a-half
    boundClassIds.forEach((boundClassId: Id<BoundClass>, boundCommaOrFlaccoIndex: number): void => {
        const commaClassId = commaClassIds[ boundCommaOrFlaccoIndex ]

        const flaccoId = flaccoIds[ boundCommaOrFlaccoIndex ]

        captureZones.push({
            boundClassId,
            commaClassId,
            negated: false,
            shifted: true,
            section: Section.A,
            flaccoId,
        })
    })

    // P2B: upwards, from apotome-and-a-half to max-triple-shaft-sagittal
    extraFlaccoIds.forEach((flaccoId: Id<Flacco>, extraFlaccoIndex: number): void => {
        const commaOrBoundClassIndex = finalCommaOrBoundClassIndex - extraFlaccoIndex
        const boundClassId = boundClassIds[ commaOrBoundClassIndex ]

        const commaClassId = commaClassIds[ commaOrBoundClassIndex ]
        const commaDirection = Direction.SUB
        const apotomeCount = 2 as Count<Apotome>

        captureZones.push({
            boundClassId,
            commaClassId,
            negated: false,
            shifted: true,
            section: Section.B,
            flaccoId,
        })
    })

    // P2C: upwards, past max-triple-shaft-sagittal to double-apotome
    reversedRemainingBoundClassIds.forEach((boundClassId: Id<BoundClass>, remainingBoundClassIndex: number): void => {
        const commaOrFlaccoIndex = finalRemainingBoundClassIndex - remainingBoundClassIndex
        const commaClassId = commaClassIds[ commaOrFlaccoIndex ]

        const flaccoId = flaccoIds[ commaOrFlaccoIndex ]

        captureZones.push({
            boundClassId,
            commaClassId,
            negated: false,
            shifted: true,
            section: Section.C,
            flaccoId,
        })
    })

    // N1a: upwards, from negative half apotome to unison
    // N1B: upwards, from negative max single-shaft sagittal to negative half apotome
    // N1C: upwards, from negative apotome almost to negative max single-shaft sagittal
    // N2A: upwards, from negative apotome-and-a-half to negative apotome
    // N2B: upwards, from negative max-triple-shaft-sagittal to negative apotome-and-a-half
    // N2C: upwards, from negative double apotome almost to negative max-triple-shaft-sagittal

    return captureZones
}

export {
    computeCaptureZones,
}
