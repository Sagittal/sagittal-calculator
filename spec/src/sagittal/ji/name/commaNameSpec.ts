import {Comma} from "@sagittal/general"
import {computeCommaName, FactoringMode} from "../../../../../src/sagittal"

describe("computeCommaName", (): void => {
    it("given a comma will return its Secor-Keenan systematic name", (): void => {
        const comma = {monzo: [5, -7, -1, 3]} as Comma

        const actual = computeCommaName(comma)

        const expected = "7³/5k"
        expect(actual).toBe(expected)
    })

    it("can return the name in undirected form", (): void => {
        const comma = {monzo: [5, -7, -1, 3]} as Comma

        const actual = computeCommaName(comma, {directed: false})

        const expected = "5:7³k"
        expect(actual).toBe(expected)
    })

    it("can return the name in unfactored form, even if it would normally factor it", (): void => {
        const comma = {monzo: [5, -7, -1, 3]} as Comma

        const actual = computeCommaName(comma, {factoringMode: FactoringMode.NEVER})

        const expected = "343/5k"
        expect(actual).toBe(expected)
    })

    it("can return the name in factored form, even if it would normally not factor it", (): void => {
        const comma = {monzo: [-8, 4, 1, 1, -1]} as Comma

        const actual = computeCommaName(comma, {factoringMode: FactoringMode.ALWAYS})

        const expected = "5⋅7/11k"
        expect(actual).toBe(expected)
    })

    it("can return the name in undirected and unfactored form", (): void => {
        const comma = {monzo: [5, -7, -1, 3]} as Comma

        const actual = computeCommaName(comma, {directed: false, factoringMode: FactoringMode.NEVER})

        const expected = "5:343k"
        expect(actual).toBe(expected)
    })

    it("can return the name in unabbreviated form", (): void => {
        const comma = {monzo: [5, -7, -1, 3]} as Comma

        const actual = computeCommaName(comma, {abbreviated: false})

        const expected = "7³/5-kleisma"
        expect(actual).toBe(expected)
    })

    it("works when there are only 2's and 3's in the prime factoring", (): void => {
        const comma = {monzo: [-19, 12]} as Comma

        const actual = computeCommaName(comma)

        const expected = "3C"
        expect(actual).toBe(expected)
    })

    it("works for a comma which is sub", (): void => {
        const comma = {monzo: [-4, 4, -1]} as Comma

        const actual = computeCommaName(comma)

        const expected = "1/5C"
        expect(actual).toBe(expected)
    })

    it("throws an error when there are only 2's in the prime factoring, since it must be outside of comma range             ", (): void => {
        const comma = {monzo: [1]} as Comma

        expect((): void => {
            computeCommaName(comma)
        }).toThrowError(`Comma {"monzo":[1]} is outside of comma-sized range and cannot be named: 1200.000¢`)
    })

    it("works when the monzo is empty", (): void => {
        const comma = {monzo: [] as unknown[]} as Comma

        const actual = computeCommaName(comma)

        const expected = "1u"
        expect(actual).toBe(expected)
    })

    it("assigns the correct size category", (): void => {
        expect(computeCommaName({monzo: [5, -3, 1, -1, -1, 1]} as Comma)).toBe("65/77n")
        expect(computeCommaName({monzo: [-15, 8, 1]} as Comma)).toBe("5s")
        expect(computeCommaName({monzo: [-7, 7, 0, 0, 0, 0, -1]} as Comma)).toBe("1/17k")
        expect(computeCommaName({monzo: [-12, 5, 0, 0, 0, 0, 1]} as Comma)).toBe("17C")
        expect(computeCommaName({monzo: [1, -2, -1, 0, 0, 0, 0, 0, 1]} as Comma)).toBe("23/5S")
        expect(computeCommaName({monzo: [7, -3, 1, 0, 0, 0, 0, 0, -1]} as Comma)).toBe("5/23M")
        expect(computeCommaName({monzo: [-18, 10, -1, 0, 0, 0, 0, 0, 1]} as Comma)).toBe("23/5L")
    })

    it("says 'down' when the comma is negative", (): void => {
        const comma = {monzo: [-40, 22, 1, 1]} as Comma

        const actual = computeCommaName(comma)

        const expected = "1/35s down"
        expect(actual).toBe(expected)
    })

    it("assumes (does not show) an 'over one'", (): void => {
        const comma = {monzo: [-5, 1, 0, 0, 1]} as Comma

        const actual = computeCommaName(comma)

        const expected = "11M"
        expect(actual).toBe(expected)
    })

    it("assumes (does not show) an 'over one', even when it is in undirected mode", (): void => {
        const comma = {monzo: [-5, 1, 0, 0, 1]} as Comma

        const actual = computeCommaName(comma, {directed: false})

        const expected = "11M"
        expect(actual).toBe(expected)
    })

    it("another example, not sure what was up, maybe some edge case", (): void => {
        const comma = {monzo: [-9, 13, -2, 0, -2]} as Comma

        const actual = computeCommaName(comma, {
            directed: false,
            abbreviated: false,
            factoringMode: FactoringMode.ALWAYS,
        })

        const expected = "5²⋅11²-Medium-Diesis"
        expect(actual).toBe(expected)
    })

    it("this one is apparently a close call; when fiddling with default precision, it came out to 385s", (): void => {
        const comma = {monzo: [-7, -1, 1, 1, 1]} as Comma // 1.00260416667 = 4.50256183908¢

        const actual = computeCommaName(comma)

        const expected = "5⋅7⋅11k"     // The s|k boundary is ~4.499913¢
        expect(actual).toBe(expected)
    })

    it("when factoring a denominator, and there is more than one different prime factor, puts the denominator in parentheses to disambiguate order of operations", (): void => {
        const comma = {monzo: [12, -2, -1, -1, 0, -1]} as Comma

        const actual = computeCommaName(comma, {factoringMode: FactoringMode.ALWAYS})

        const expected = "1/(5⋅7⋅13)n"
        expect(actual).toBe(expected)
    })

    it("when factoring a denominator, and there is more than one different prime factor, but is in undirected mode, and one side is not 1, does not add parentheses to disambiguate order of operations, because it's not ambiguous in undirected mode, and also it would be on the wrong side anyway", (): void => {
        const comma = {monzo: [-14, 7, 1, 0, -1, 0, 1]} as Comma

        const actual = computeCommaName(comma, {factoringMode: FactoringMode.ALWAYS, directed: false})

        const expected = "11:5⋅17M"
        expect(actual).toBe(expected)
    })

    it("when factoring a denominator, and there is more than one prime factor but they're all the same, does not need to put the denominator in parentheses to disambiguate order of operations, so it doesn't", (): void => {
        const comma = {monzo: [9, -1, 0, 0, 0, -2]} as Comma

        const actual = computeCommaName(comma)

        const expected = "1/13²C"
        expect(actual).toBe(expected)
    })

    it("the default threshold factoring mode does not factor 125, even though it has > 2 prime factors                    ", (): void => {
        const comma = {monzo: [1, 2, -3, 1]} as Comma

        const actual = computeCommaName(comma)

        const expected = "7/125C"
        expect(actual).toBe(expected)
    })

    it("the default threshold factoring mode does not factor 65, even though it has gpf > 11", (): void => {
        const comma = {monzo: [1, 1, -1, 0, 1, -1]} as Comma

        const actual = computeCommaName(comma)

        const expected = "11/65C"
        expect(actual).toBe(expected)
    })

    it("the default threshold factoring mode does not factor 143, even though it has gpf > 11", (): void => {
        const comma = {monzo: [4, 2, 0, 0, -1, -1]} as Comma

        const actual = computeCommaName(comma)

        const expected = "1/143C"
        expect(actual).toBe(expected)
    })

    it("can name complex 3-limit commas", (): void => {
        const comma = {monzo: [65, -41]} as Comma

        const actual = computeCommaName(comma)

        const expected = "41e3C"
        expect(actual).toBe(expected)
    })

    it("can name complex commas beyond the 3-limit", (): void => {
        const comma = {monzo: [-34, 20, 1]} as Comma

        const actual = computeCommaName(comma)

        const expected = "c5C"
        expect(actual).toBe(expected)
    })

    it("can name complex commas beyond the 3-limit, in unabbreviated form", (): void => {
        const comma = {monzo: [-34, 20, 1]} as Comma

        const actual = computeCommaName(comma, {abbreviated: false})

        const expected = "complex-5-Comma"
        expect(actual).toBe(expected)
    })
})
