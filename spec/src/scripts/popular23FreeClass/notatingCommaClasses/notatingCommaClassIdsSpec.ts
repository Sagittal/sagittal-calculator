import {Scamon} from "../../../../../src/general"
import {CommaClassId} from "../../../../../src/sagittal/ji"
import {computeNotatingCommaClassIds} from "../../../../../src/scripts/popular23FreeClass/notatingCommaClasses/notatingCommaClassIds"

describe("computeNotatingCommaClassIds", (): void => {
    it("returns a list of JI Notation comma class IDs for comma classes which notate this pitch relative to a skeleton of Pythagorean nominals", (): void => {
        const jiPitch = {monzo: [0, -2, 0, 0, 1]} as Scamon<{rational: true}>

        const actual = computeNotatingCommaClassIds(jiPitch)

        const expected = [
            CommaClassId._1_11_S,
            CommaClassId._11_M,
        ]
        expect(actual).toEqual(expected)
    })

    it("another example", (): void => {
        const jiPitch = {monzo: [0, 0, 1, 1]} as Scamon<{rational: true}>

        const actual = computeNotatingCommaClassIds(jiPitch)

        const expected = [
            CommaClassId._1_35_C,
            CommaClassId._35_S,
            CommaClassId._1_35_M,
        ]
        expect(actual).toEqual(expected)
    })
})
