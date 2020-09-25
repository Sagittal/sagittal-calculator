import { Decimal } from "../../../../src/general/math"
import { Monzo } from "../../../../src/general/math/rational/monzo"
import { Ratio } from "../../../../src/general/math/rational/ratio"
import {
    Cents,
    equalPitches,
    Pitch,
    pitchIsHigher,
    pitchIsHigherOrEqual,
    pitchIsLower,
    pitchIsLowerOrEqual,
} from "../../../../src/general/music"

describe("equalPitches", (): void => {
    describe("when both have monzos", (): void => {
        it("returns true when the pitches are equal", (): void => {
            const pitchA = { monzo: [-1, -1, 0, 1] as Monzo }
            const pitchB = { monzo: [-1, -1, 0, 1] as Monzo }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false when the pitches are not equal", (): void => {
            const pitchA = { monzo: [-1, -1, 0, 1] as Monzo }
            const pitchB = { monzo: [-1, -1, -1, 2] as Monzo }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both have ratios", (): void => {
        it("returns true when the pitches are equal", (): void => {
            const pitchA = { ratio: [7, 6] as Ratio }
            const pitchB = { ratio: [7, 6] as Ratio }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false when the pitches are not equal", (): void => {
            const pitchA = { ratio: [7, 6] as Ratio }
            const pitchB = { ratio: [8, 7] as Ratio }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both have cents", (): void => {
        it("returns true when the pitches are equal", (): void => {
            const pitchA = { cents: 43 as Cents }
            const pitchB = { cents: 43 as Cents }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false when the pitches are not equal", (): void => {
            const pitchA = { cents: 56 as Cents }
            const pitchB = { cents: 43 as Cents }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both have decimals", (): void => {
        it("returns true when the pitches are equal", (): void => {
            const pitchA = { decimal: 4.3 as Decimal }
            const pitchB = { decimal: 4.3 as Decimal }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false when the pitches are not equal", (): void => {
            const pitchA = { decimal: 5.6 as Decimal }
            const pitchB = { decimal: 4.3 as Decimal }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one has a monzo and the other has a ratio", (): void => {
        it("returns true when the pitches are equal", (): void => {
            const pitchA = { monzo: [-1, -1, 0, 1] as Monzo }
            const pitchB = { ratio: [7, 6] as Ratio }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false when the pitches are not equal", (): void => {
            const pitchA = { monzo: [-1, -1, 0, 1] as Monzo }
            const pitchB = { ratio: [8, 7] as Ratio }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one has a monzo and the other has cents", (): void => {
        it("returns true when the pitches are equal", (): void => {
            const pitchA = { monzo: [-1, -1, 0, 1] as Monzo }
            const pitchB = { cents: 266.870906 as Cents }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false when the pitches are not equal", (): void => {
            const pitchA = { monzo: [-1, -1, 0, 1] as Monzo }
            const pitchB = { cents: 146.4 as Cents }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one has a monzo and the other has a decimal", (): void => {
        it("returns true when the pitches are equal", (): void => {
            const pitchA = { monzo: [-1, -1, 0, 1] as Monzo }
            const pitchB = { decimal: 1.166667 as Decimal }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false when the pitches are not equal", (): void => {
            const pitchA = { monzo: [-1, -1, 0, 1] as Monzo }
            const pitchB = { decimal: 1.144447 as Decimal }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one has a ratio and the other has cents", (): void => {
        it("returns true when the pitches are equal", (): void => {
            const pitchA = { ratio: [7, 6] as Ratio }
            const pitchB = { cents: 266.870906 as Cents }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false when the pitches are not equal", (): void => {
            const pitchA = { ratio: [7, 6] as Ratio }
            const pitchB = { cents: 146.4 as Cents }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one has a ratio and the other has a decimal", (): void => {
        it("returns true when the pitches are equal", (): void => {
            const pitchA = { ratio: [7, 6] as Ratio }
            const pitchB = { decimal: 1.166667 as Decimal }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false when the pitches are not equal", (): void => {
            const pitchA = { ratio: [7, 6] as Ratio }
            const pitchB = { decimal: 14.4 as Decimal }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one has cents and the other has a decimal", (): void => {
        it("returns true when the pitches are equal", (): void => {
            const pitchA = { cents: 701.955001 as Cents }
            const pitchB = { decimal: 1.5 as Decimal }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeTruthy()
        })

        it("returns false when the pitches are not equal", (): void => {
            const pitchA = { cents: 701.955001 as Cents }
            const pitchB = { decimal: 1.4 as Decimal }

            const actual = equalPitches(pitchA, pitchB)

            expect(actual).toBeFalsy()
        })
    })

    it("works when monzos haven't been trimmed", (): void => {
        const jiPitchA: Pitch = { monzo: [0, 0] as Monzo }
        const jiPitchB: Pitch = { monzo: [0] as Monzo }

        const actual = equalPitches(jiPitchA, jiPitchB)

        expect(actual).toBeTruthy()
    })

    it("works when ratios haven't been reduced", (): void => {
        const jiPitchA: Pitch = { ratio: [10, 14] as Ratio }
        const jiPitchB: Pitch = { ratio: [5, 7] as Ratio }

        const actual = equalPitches(jiPitchA, jiPitchB)

        expect(actual).toBeTruthy()
    })
})

describe("pitchIsHigher", (): void => {
    describe("when both pitches have monzos", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { monzo: [-3, 2] as Monzo }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { monzo: [-2, 0, 1] as Monzo }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [-3, 2] as Monzo }
            const otherPitch = { monzo: [-2, 0, 1] as Monzo }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both pitches have ratios", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { ratio: [9, 8] as Ratio }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { ratio: [9, 8] as Ratio }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both pitches have cents", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { cents: 386.313714 as Cents }
            const otherPitch = { cents: 204 as Cents }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { cents: 386.313714 as Cents }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { cents: 204 as Cents }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both pitches have decimals", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { decimal: 3.313714 as Decimal }
            const otherPitch = { decimal: 2 as Decimal }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { decimal: 3.313714 as Decimal }
            const otherPitch = { decimal: 3.313714 as Decimal }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { decimal: 2 as Decimal }
            const otherPitch = { decimal: 3.313714 as Decimal }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one pitch has a monzo and the other has a ratio", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [0, 0, 0, 1] as Monzo }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [4, -1, -1] as Monzo }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one pitch has a monzo and the other has cents", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [0, 0, 0, 1] as Monzo }
            const otherPitch = { cents: 204 as Cents }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [4, -1, -1] as Monzo }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one pitch has a monzo and the other has a decimal", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [0, 0, 0, 1] as Monzo }
            const otherPitch = { decimal: 6 as Decimal }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { decimal: 1.25 as Decimal }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [4, -1, -1] as Monzo }
            const otherPitch = { decimal: 1.3 as Decimal }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one pitch has a ratio and the other has cents", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { cents: 204 as Cents }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { ratio: [9, 8] as Ratio }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one pitch has a ratio and the other has a decimal", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { decimal: 1.2 as Decimal }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { decimal: 1.25 as Decimal }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { decimal: 1.3 as Decimal }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one pitch has cents and the other has a decimal", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { cents: 701.955001 as Cents }
            const otherPitch = { decimal: 1.4 as Decimal }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { cents: 701.955001 as Cents }
            const otherPitch = { decimal: 1.5 as Decimal }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { cents: 701.955001 as Cents }
            const otherPitch = { decimal: 1.6 as Decimal }

            const actual = pitchIsHigher(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })
})

describe("pitchIsLower", (): void => {
    describe("when both pitches have monzos", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { monzo: [-3, 2] as Monzo }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { monzo: [-2, 0, 1] as Monzo }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [-3, 2] as Monzo }
            const otherPitch = { monzo: [-2, 0, 1] as Monzo }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both pitches have ratios", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { ratio: [9, 8] as Ratio }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { ratio: [9, 8] as Ratio }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both pitches have cents", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { cents: 386.313714 as Cents }
            const otherPitch = { cents: 204 as Cents }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { cents: 386.313714 as Cents }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { cents: 204 as Cents }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both pitches have decimals", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { decimal: 3.313714 as Decimal }
            const otherPitch = { decimal: 2 as Decimal }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { decimal: 3.313714 as Decimal }
            const otherPitch = { decimal: 3.313714 as Decimal }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { decimal: 2 as Decimal }
            const otherPitch = { decimal: 3.313714 as Decimal }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one pitch has a monzo and the other has a ratio", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [0, 0, 0, 1] as Monzo }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [4, -1, -1] as Monzo }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one pitch has a monzo and the other has cents", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [0, 0, 0, 1] as Monzo }
            const otherPitch = { cents: 204 as Cents }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [4, -1, -1] as Monzo }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one pitch has a monzo and the other has a decimal", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [0, 0, 0, 1] as Monzo }
            const otherPitch = { decimal: 6 as Decimal }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { decimal: 1.25 as Decimal }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [4, -1, -1] as Monzo }
            const otherPitch = { decimal: 1.3 as Decimal }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one pitch has a ratio and the other has cents", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { cents: 204 as Cents }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { ratio: [9, 8] as Ratio }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one pitch has a ratio and the other has a decimal", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { decimal: 1.2 as Decimal }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { decimal: 1.25 as Decimal }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { decimal: 1.3 as Decimal }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one pitch has cents and the other has a decimal", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { cents: 701.955001 as Cents }
            const otherPitch = { decimal: 1.4 as Decimal }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns false if the pitch is equal to the other", (): void => {
            const pitch = { cents: 701.955001 as Cents }
            const otherPitch = { decimal: 1.5 as Decimal }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { cents: 701.955001 as Cents }
            const otherPitch = { decimal: 1.6 as Decimal }

            const actual = pitchIsLower(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })
})

describe("pitchIsHigherOrEqual", (): void => {
    describe("when both pitches have monzos", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { monzo: [-3, 2] as Monzo }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { monzo: [-2, 0, 1] as Monzo }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [-3, 2] as Monzo }
            const otherPitch = { monzo: [-2, 0, 1] as Monzo }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both pitches have ratios", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { ratio: [9, 8] as Ratio }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { ratio: [9, 8] as Ratio }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both pitches have cents", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { cents: 386.313714 as Cents }
            const otherPitch = { cents: 204 as Cents }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { cents: 386.313714 as Cents }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { cents: 204 as Cents }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when both pitches have decimals", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { decimal: 3.313714 as Decimal }
            const otherPitch = { decimal: 2 as Decimal }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { decimal: 3.313714 as Decimal }
            const otherPitch = { decimal: 3.313714 as Decimal }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { decimal: 2 as Decimal }
            const otherPitch = { decimal: 3.313714 as Decimal }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one pitch has a monzo and the other has a ratio", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [0, 0, 0, 1] as Monzo }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [4, -1, -1] as Monzo }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one pitch has a monzo and the other has cents", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [0, 0, 0, 1] as Monzo }
            const otherPitch = { cents: 204 as Cents }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [4, -1, -1] as Monzo }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one pitch has a monzo and the other has a decimal", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [0, 0, 0, 1] as Monzo }
            const otherPitch = { decimal: 6 as Decimal }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { decimal: 1.25 as Decimal }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [4, -1, -1] as Monzo }
            const otherPitch = { decimal: 1.3 as Decimal }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one pitch has a ratio and the other has cents", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { cents: 204 as Cents }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { ratio: [9, 8] as Ratio }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one pitch has a ratio and the other has a decimal", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { decimal: 1.2 as Decimal }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { decimal: 1.25 as Decimal }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { decimal: 1.3 as Decimal }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })

    describe("when one pitch has cents and the other has a decimal", (): void => {
        it("returns true if the pitch is higher than the other", (): void => {
            const pitch = { cents: 701.955001 as Cents }
            const otherPitch = { decimal: 1.4 as Decimal }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { cents: 701.955001 as Cents }
            const otherPitch = { decimal: 1.5 as Decimal }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns false if the pitch is lower than the other", (): void => {
            const pitch = { cents: 701.955001 as Cents }
            const otherPitch = { decimal: 1.6 as Decimal }

            const actual = pitchIsHigherOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })
    })
})

describe("pitchIsLowerOrEqual", (): void => {
    describe("when both pitches have monzos", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { monzo: [-3, 2] as Monzo }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { monzo: [-2, 0, 1] as Monzo }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [-3, 2] as Monzo }
            const otherPitch = { monzo: [-2, 0, 1] as Monzo }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both pitches have ratios", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { ratio: [9, 8] as Ratio }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { ratio: [9, 8] as Ratio }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both pitches have cents", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { cents: 386.313714 as Cents }
            const otherPitch = { cents: 204 as Cents }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { cents: 386.313714 as Cents }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { cents: 204 as Cents }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when both pitches have decimals", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { decimal: 3.313714 as Decimal }
            const otherPitch = { decimal: 2 as Decimal }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { decimal: 3.313714 as Decimal }
            const otherPitch = { decimal: 3.313714 as Decimal }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { decimal: 2 as Decimal }
            const otherPitch = { decimal: 3.313714 as Decimal }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one pitch has a monzo and the other has a ratio", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [0, 0, 0, 1] as Monzo }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [4, -1, -1] as Monzo }
            const otherPitch = { ratio: [5, 4] as Ratio }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one pitch has a monzo and the other has cents", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [0, 0, 0, 1] as Monzo }
            const otherPitch = { cents: 204 as Cents }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [4, -1, -1] as Monzo }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one pitch has a monzo and the other has a decimal", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { monzo: [0, 0, 0, 1] as Monzo }
            const otherPitch = { decimal: 6 as Decimal }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { monzo: [-2, 0, 1] as Monzo }
            const otherPitch = { decimal: 1.25 as Decimal }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { monzo: [4, -1, -1] as Monzo }
            const otherPitch = { decimal: 1.3 as Decimal }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one pitch has a ratio and the other has cents", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { cents: 204 as Cents }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { ratio: [9, 8] as Ratio }
            const otherPitch = { cents: 386.313714 as Cents }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one pitch has a ratio and the other has a decimal", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { decimal: 1.2 as Decimal }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { decimal: 1.25 as Decimal }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { ratio: [5, 4] as Ratio }
            const otherPitch = { decimal: 1.3 as Decimal }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })

    describe("when one pitch has cents and the other has a decimal", (): void => {
        it("returns false if the pitch is higher than the other", (): void => {
            const pitch = { cents: 701.955001 as Cents }
            const otherPitch = { decimal: 1.4 as Decimal }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeFalsy()
        })

        it("returns true if the pitch is equal to the other", (): void => {
            const pitch = { cents: 701.955001 as Cents }
            const otherPitch = { decimal: 1.5 as Decimal }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })

        it("returns true if the pitch is lower than the other", (): void => {
            const pitch = { cents: 701.955001 as Cents }
            const otherPitch = { decimal: 1.6 as Decimal }

            const actual = pitchIsLowerOrEqual(pitch, otherPitch)

            expect(actual).toBeTruthy()
        })
    })
})
