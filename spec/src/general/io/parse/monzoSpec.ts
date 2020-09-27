import { Formatted, parseMonzo } from "../../../../../src/general/io"
import { RationalMonzo } from "../../../../../src/general/math"

describe("parseMonzo", (): void => {
    const expected = [3, 4, -5] as RationalMonzo

    it("parses monzos", (): void => {
        const monzo = "[3,4,-5]" as Formatted<RationalMonzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("parses formatted monzos", (): void => {
        const monzo = "[ 3 4 -5 ⟩" as Formatted<RationalMonzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with greater than signs", (): void => {
        const monzo = "[ 3 4 -5 >" as Formatted<RationalMonzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with pipes", (): void => {
        const monzo = "| 3 4 -5 ⟩" as Formatted<RationalMonzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with no spaces on the ends", (): void => {
        const monzo = "[3 4 -5⟩" as Formatted<RationalMonzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos as they are returned by scripts, with the extra spaces to align them", (): void => {
        const monzo = "[   3   4  -5 ⟩" as Formatted<RationalMonzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("can handle the situation where there are both commas and spaces", (): void => {
        const monzo = "[3, 4, -5]" as Formatted<RationalMonzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("can handle tab spacing", (): void => {
        const monzo = "[3\t4\t-5]" as Formatted<RationalMonzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("can handle irrational monzos", (): void => {
        const monzo = "[-9.5\t6]" as Formatted<RationalMonzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual([-9.5, 6] as RationalMonzo)
    })
})
