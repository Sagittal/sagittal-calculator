import {program} from "commander"
import {Scamon} from "../../../../../../src/general"
import {Compatible} from "../../../../../../src/sagittal/accidental"
import {ArmId, HeadId} from "../../../../../../src/sagittal/accidental/flacco"
import {parseJiPitch, readJiPitchIoAndFormat} from "../../../../../../src/scripts/jiPitch/io"
import {computeAccidental} from "../../../../../helpers/src/sagittal/accidental/accidental"

describe("parseJiPitch", (): void => {
    beforeEach((): void => {
        program.args = []
        program.monzo = undefined
        program.quotient = undefined
        program.commaName = undefined
        program.integer = undefined
        program.accidental = undefined
    })

    describe("when the JI pitch is provided as an argument directly (not as a specific flag)", (): void => {
        it("works for a monzo", (): void => {
            program.args = ["[0, 1, -2, 1⟩"]
            const [jiPitchIo, pitchFormat] = readJiPitchIoAndFormat()

            const actual = parseJiPitch(jiPitchIo, pitchFormat)

            const expected = {monzo: [0, 1, -2, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for a quotient", (): void => {
            program.args = ["7/2"]
            const [jiPitchIo, pitchFormat] = readJiPitchIoAndFormat()

            const actual = parseJiPitch(jiPitchIo, pitchFormat)

            const expected = {monzo: [-1, 0, 0, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for a comma name", (): void => {
            program.args = ["3A"]
            const [jiPitchIo, pitchFormat] = readJiPitchIoAndFormat()

            const actual = parseJiPitch(jiPitchIo, pitchFormat)

            const expected = {monzo: [-11, 7]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for an integer decimal", (): void => {
            program.args = ["3"]
            const [jiPitchIo, pitchFormat] = readJiPitchIoAndFormat()

            const actual = parseJiPitch(jiPitchIo, pitchFormat)

            const expected = {monzo: [0, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for an accidental", (): void => {
            program.args = ["``~~|#"]
            const [jiPitchIo, pitchFormat] = readJiPitchIoAndFormat()

            const actual = parseJiPitch(jiPitchIo, pitchFormat)

            // ``~~|# =
            // ``~~|    [  13  -9   0  -1   0   0   1 ⟩
            //      #   [ -11   7                     ⟩
            const expected = {monzo: [2, -2, 0, -1, 0, 0, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })
    })

    describe("when the JI pitch is provided by a specific flag", (): void => {
        it("works for a monzo (which will have been pre-parsed)", (): void => {
            program.monzo = [0, 1, -2, 1]
            const [jiPitchIo, pitchFormat] = readJiPitchIoAndFormat()

            const actual = parseJiPitch(jiPitchIo, pitchFormat)

            const expected = {monzo: [0, 1, -2, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for a quotient (which will have been pre-parsed)", (): void => {
            program.quotient = [7, 2]
            const [jiPitchIo, pitchFormat] = readJiPitchIoAndFormat()

            const actual = parseJiPitch(jiPitchIo, pitchFormat)

            const expected = {monzo: [-1, 0, 0, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for a comma name (which will have been pre-parsed into a comma)", (): void => {
            program.commaName = {monzo: [-11, 7]}
            const [jiPitchIo, pitchFormat] = readJiPitchIoAndFormat()

            const actual = parseJiPitch(jiPitchIo, pitchFormat)

            const expected = {monzo: [-11, 7]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for an integer decimal (which will have been pre-parsed as such)", (): void => {
            program.integer = 3
            const [jiPitchIo, pitchFormat] = readJiPitchIoAndFormat()

            const actual = parseJiPitch(jiPitchIo, pitchFormat)

            const expected = {monzo: [0, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })

        it("works for an accidental (which will have been pre-parsed as such", (): void => {
            program.accidental = computeAccidental({                                    // ``~~|#
                armId: ArmId.BIRD,
                headId: HeadId.DOUBLE_LEFT_BOATHOOK,
                compatible: Compatible.SHARP,
            })
            const [jiPitchIo, pitchFormat] = readJiPitchIoAndFormat()

            const actual = parseJiPitch(jiPitchIo, pitchFormat)

            // ``~~|# =
            // ``~~|    [  13  -9   0  -1   0   0   1 ⟩
            //      #   [ -11   7                     ⟩
            const expected = {monzo: [2, -2, 0, -1, 0, 0, 1]} as Scamon<{rational: true}>
            expect(actual).toEqual(expected)
        })
    })
})
