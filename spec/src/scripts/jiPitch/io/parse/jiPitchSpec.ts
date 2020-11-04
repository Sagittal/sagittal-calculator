import {program} from "commander"
import {Scamon} from "../../../../../../src/general/math/numeric/scamon"
import {parseJiPitch} from "../../../../../../src/scripts/jiPitch/io/parse"

describe("parseJiPitch", (): void => {
    beforeEach((): void => {
        program.args = []
        program.monzo = undefined
        program.quotient = undefined
        program.commaName = undefined
        program.integer = undefined
    })

    describe("when the JI pitch is provided as an argument directly (not as a specific flag)", (): void => {
        it("works for a monzo", (): void => {
            program.args = ["[0, 1, -2, 1⟩"]

            const actual = parseJiPitch()

            const expected = {monzo: [0, 1, -2, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for a quotient", (): void => {
            program.args = ["7/2"]

            const actual = parseJiPitch()

            const expected = {monzo: [-1, 0, 0, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for a comma name", (): void => {
            program.args = ["3A"]

            const actual = parseJiPitch()

            const expected = {monzo: [-11, 7]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for an integer decimal", (): void => {
            program.args = ["3"]

            const actual = parseJiPitch()

            const expected = {monzo: [0, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })
    })

    describe("when the JI pitch is provided by a specific flag", (): void => {
        it("works for a monzo (which will have been pre-parsed)", (): void => {
            program.monzo = [0, 1, -2, 1]

            const actual = parseJiPitch()

            const expected = {monzo: [0, 1, -2, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for a quotient (which will have been pre-parsed)", (): void => {
            program.quotient = [7, 2]

            const actual = parseJiPitch()

            const expected = {monzo: [-1, 0, 0, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for a comma name (which will have been pre-parsed into a comma)", (): void => {
            program.commaName = {monzo: [-11, 7]}

            const actual = parseJiPitch()

            const expected = {monzo: [-11, 7]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for a decimal (which will have been pre-parsed into an integer)", (): void => {
            program.integer = 3

            const actual = parseJiPitch()

            const expected = {monzo: [0, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })
    })
})
