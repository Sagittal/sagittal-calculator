import {Apotome, Count, count, Direction, Id, indexOfFinalElement, shallowClone} from "../../general"
import {Flacco} from "../accidental"
import {BoundClass} from "./ji"
import {Flacombo, Notation, Section} from "./types"

const computeFlacombos = (notation: Notation): Flacombo[] => {
    const { commaClassIds, boundClassIds, flaccoIds } = notation

    const commaClassCount = count(commaClassIds)
    const boundClassCount = count(boundClassIds)
    const flaccoCount = count(flaccoIds)

    if (commaClassCount as Count !== boundClassCount as Count) {
        throw new Error(`The count of comma and bound classes must be the same, but were ${commaClassCount} and ${boundClassCount}, respectively.`)
    }

    const flacombos = [] as Flacombo[]

    // Section 1a: upwards, from unison to half apotome
    boundClassIds.forEach((boundClassId: Id<BoundClass>, boundCommaOrFlaccoIndex: number): void => {
        const commaClassId = commaClassIds[ boundCommaOrFlaccoIndex ]

        const flaccoId = flaccoIds[ boundCommaOrFlaccoIndex ]

        flacombos.push({
            boundClassId,
            commaClassId,
            negated: false,
            shifted: false,
            section: Section.A,
            flaccoId,
        })
    })

    // Section 1b: upwards, from half apotome to max single-shaft symbol
    const finalCommaOrBoundClassIndex = indexOfFinalElement(commaClassIds)
    const extraFlaccoIds = flaccoIds.slice(boundClassCount)
    extraFlaccoIds.forEach((flaccoId: Id<Flacco>, extraFlaccoIndex: number): void => {
        const commaOrBoundClassIndex = finalCommaOrBoundClassIndex - extraFlaccoIndex
        const boundClassId = boundClassIds[ commaOrBoundClassIndex ]

        const commaClassId = commaClassIds[ commaOrBoundClassIndex ]

        flacombos.push({
            boundClassId,
            commaClassId,
            negated: false,
            shifted: false,
            section: Section.B,
            flaccoId,
        })
    })

    // Section 1c: upwards, past max single-shaft symbol to apotome
    const extraFlaccoCount = flaccoCount - boundClassCount
    const reversedRemainingBoundClassIds = shallowClone(boundClassIds).reverse().slice(extraFlaccoCount)

    const finalRemainingBoundClassIndex = indexOfFinalElement(reversedRemainingBoundClassIds)
    reversedRemainingBoundClassIds.forEach((boundClassId: Id<BoundClass>, remainingBoundClassIndex: number): void => {
        const commaOrFlaccoIndex = finalRemainingBoundClassIndex - remainingBoundClassIndex
        const commaClassId = commaClassIds[ commaOrFlaccoIndex ]

        const flaccoId = flaccoIds[ commaOrFlaccoIndex ]

        flacombos.push({
            boundClassId,
            commaClassId,
            negated: false,
            shifted: false,
            section: Section.C,
            flaccoId,
        })
    })

    // Section 2a: upwards, from apotome to apotome-and-a-half
    boundClassIds.forEach((boundClassId: Id<BoundClass>, boundCommaOrFlaccoIndex: number): void => {
        const commaClassId = commaClassIds[ boundCommaOrFlaccoIndex ]

        const flaccoId = flaccoIds[ boundCommaOrFlaccoIndex ]

        flacombos.push({
            boundClassId,
            commaClassId,
            negated: false,
            shifted: true,
            section: Section.A,
            flaccoId,
        })
    })

    // Section 2b: upwards, from apotome-and-a-half to max-triple-shaft-symbol
    extraFlaccoIds.forEach((flaccoId: Id<Flacco>, extraFlaccoIndex: number): void => {
        const commaOrBoundClassIndex = finalCommaOrBoundClassIndex - extraFlaccoIndex
        const boundClassId = boundClassIds[ commaOrBoundClassIndex ]

        const commaClassId = commaClassIds[ commaOrBoundClassIndex ]
        const commaDirection = Direction.SUB
        const apotomeCount = 2 as Count<Apotome>

        flacombos.push({
            boundClassId,
            commaClassId,
            negated: false,
            shifted: true,
            section: Section.B,
            flaccoId,
        })
    })

    // Section 2c: upwards, past max-triple-shaft-symbol to double-apotome
    reversedRemainingBoundClassIds.forEach((boundClassId: Id<BoundClass>, remainingBoundClassIndex: number): void => {
        const commaOrFlaccoIndex = finalRemainingBoundClassIndex - remainingBoundClassIndex
        const commaClassId = commaClassIds[ commaOrFlaccoIndex ]

        const flaccoId = flaccoIds[ commaOrFlaccoIndex ]

        flacombos.push({
            boundClassId,
            commaClassId,
            negated: false,
            shifted: true,
            section: Section.C,
            flaccoId,
        })
    })

    // Section -1a: upwards, from negative half apotome to unison
    // Section -1b: upwards, from negative max single-shaft symbol to negative half apotome
    // Section -1c: upwards, from negative apotome almost to negative max single-shaft symbol
    // Section -2a: upwards, from negative apotome-and-a-half to negative apotome
    // Section -2b: upwards, from negative max-triple-shaft-symbol to negative apotome-and-a-half
    // Section -2c: upwards, from negative double apotome almost to negative max-triple-shaft-symbol

    return flacombos
}

export {
    computeFlacombos,
}
