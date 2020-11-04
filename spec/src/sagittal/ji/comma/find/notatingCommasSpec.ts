import {Abs, Comma, computeScamonFromDecimal, Decimal, Max, Scamon} from "../../../../../../src/general"
import {ApotomeSlope, computeNotatingCommas} from "../../../../../../src/sagittal"

describe("computeNotatingCommas", (): void => {
    it("given a JI pitch, returns a list of the commas that notate it", (): void => {
        const jiPitch = {monzo: [0, 0, 0, 0, 1]} as Scamon<{rational: true}>

        const actual = computeNotatingCommas(jiPitch)

        const expected = [
            {monzo: [14, -11, 0, 0, 1]},
            {monzo: [-5, 1, 0, 0, 1]},
            {monzo: [13, -6, 0, 0, -1]},
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("can filter", (): void => {
        const jiPitch = {monzo: [0, 0, 0, 0, 1]} as Scamon<{rational: true}>
        const maxAas = 9 as Max<Abs<ApotomeSlope>>
        const upperBound = computeScamonFromDecimal(1.032279 as Decimal) as Max<Scamon>

        const actual = computeNotatingCommas(jiPitch, {maxAas, upperBound})

        const expected = [
            {monzo: [-5, 1, 0, 0, 1]},
            {monzo: [13, -6, 0, 0, -1]},
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("when given the unison, does not return duplicates", (): void => {
        const jiPitch = {monzo: [] as unknown[]} as Scamon<{rational: true}>

        const actual = computeNotatingCommas(jiPitch)

        const expected = [
            {monzo: []},
            {monzo: [-19, 12]},
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("an edge case, with large N2D3P9", (): void => {
        const jiPitch = {monzo: [0, 0, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1]} as Scamon<{rational: true}>

        const actual = computeNotatingCommas(jiPitch)

        const expected = [
            {monzo: [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1]},
            {monzo: [-6, 3, 1, -1, -1, 0, 0, 0, 0, 0, 0, 1]},
            {monzo: [-25, 15, 1, -1, -1, 0, 0, 0, 0, 0, 0, 1]},
        ] as Comma[]
        expect(actual).toEqual(expected)
    })
})
