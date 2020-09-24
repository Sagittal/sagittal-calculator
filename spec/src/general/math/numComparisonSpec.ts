import { Decimal, equalNums, Monzo, Num, Ratio } from "../../../../src/general/math"

describe("equalNums", (): void => {
    it("returns true if the monzos match", (): void => {
        const rationalNumA: Num = { monzo: [0, 0, 1, -1] as Monzo }
        const rationalNumB: Num = { monzo: [0, 0, 1, -1] as Monzo }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeTruthy()
    })

    it("returns true if the ratios match", (): void => {
        const rationalNumA: Num = { ratio: [5, 7] as Ratio }
        const rationalNumB: Num = { ratio: [5, 7] as Ratio }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzos do not match", (): void => {
        const rationalNumA: Num = { monzo: [0, 0, 1, -1] as Monzo }
        const rationalNumB: Num = { monzo: [0, 0, -1, -1] as Monzo }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeFalsy()
    })

    it("returns false if the ratios do not match", (): void => {
        const rationalNumA: Num = { ratio: [5, 7] as Ratio }
        const rationalNumB: Num = { ratio: [5, 6] as Ratio }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo of one is not the same rational num as the ratio of the other", (): void => {
        const rationalNumA: Num = { monzo: [0, 0, 1, -1] as Monzo }
        const rationalNumB: Num = { ratio: [5, 7] as Ratio }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo of one is not the same rational num as the ratio of the other", (): void => {
        const rationalNumA: Num = { monzo: [0, 0, 1, -1] as Monzo }
        const rationalNumB: Num = { ratio: [5, 6] as Ratio }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeFalsy()
    })

    it("works when monzos haven't been trimmed", (): void => {
        const rationalNumA: Num = { monzo: [0, 0] as Monzo }
        const rationalNumB: Num = { monzo: [0] as Monzo }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeTruthy()
    })

    it("works when ratios haven't been reduced", (): void => {
        const rationalNumA: Num = { ratio: [10, 14] as Ratio }
        const rationalNumB: Num = { ratio: [5, 7] as Ratio }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeTruthy()
    })

    it("returns true when both have decimals that match", (): void => {
        const rationalNumA: Num = { decimal: 1.4 as Decimal }
        const rationalNumB: Num = { decimal: 1.4 as Decimal }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeTruthy()
    })

    it("returns false when both have decimals that do not match", (): void => {
        const rationalNumA: Num = { decimal: 1.4 as Decimal }
        const rationalNumB: Num = { decimal: 1.3 as Decimal }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeFalsy()
    })

    it("returns true when one has a monzo and the other has a decimal, and they match", (): void => {
        const rationalNumA: Num = { monzo: [0, 0, -1, 1] as Monzo }
        const rationalNumB: Num = { decimal: 1.4 as Decimal }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeTruthy()
    })

    it("returns false when one has a monzo and the other has a decimal, and they do not match", (): void => {
        const rationalNumA: Num = { monzo: [0, 0, -2, 1] as Monzo }
        const rationalNumB: Num = { decimal: 1.4 as Decimal }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeFalsy()
    })

    it("returns true when one has a ratio and the other has a decimal, and they match", (): void => {
        const rationalNumA: Num = { ratio: [7, 5] as Ratio }
        const rationalNumB: Num = { decimal: 1.4 as Decimal }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeTruthy()
    })

    it("returns false when one has a ratio and the other has a decimal, and they do not match", (): void => {
        const rationalNumA: Num = { ratio: [7, 10] as Ratio }
        const rationalNumB: Num = { decimal: 1.4 as Decimal }

        const actual = equalNums(rationalNumA, rationalNumB)

        expect(actual).toBeFalsy()
    })
})
