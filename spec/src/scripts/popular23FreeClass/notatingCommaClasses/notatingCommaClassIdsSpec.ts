import { Id, Scamon } from "../../../../../src/general"
import { CommaClass } from "../../../../../src/sagittal/ji"
import { computeNotatingCommaClassIds } from "../../../../../src/scripts/popular23FreeClass/notatingCommaClasses/notatingCommaClassIds"

describe("computeNotatingCommaClassIds", (): void => {
    it("returns a list of JI Notation comma class IDs for comma classes which notate this pitch relative to a skeleton of Pythagorean nominals", (): void => {
        const jiPitch = { monzo: [0, -2, 0, 0, 1] } as Scamon<{ rational: true }>

        const actual = computeNotatingCommaClassIds(jiPitch)

        const expected = [
            79,     // 1/11S
            114,    // 11M
        ] as Array<Id<CommaClass>>
        expect(actual).toEqual(expected)
    })

    it("another example", (): void => {
        const jiPitch = { monzo: [0, 0, 1, 1] } as Scamon<{ rational: true }>

        const actual = computeNotatingCommaClassIds(jiPitch)

        const expected = [
            54,     // 1/35C
            89,     // 35S
            104,    // 1/35M
        ] as Array<Id<CommaClass>>
        expect(actual).toEqual(expected)
    })
})
