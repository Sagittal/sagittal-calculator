import { Formatted, parseMonzo } from "../../../../src/general/io"
import { Monzo } from "../../../../src/general/math"

describe("parseMonzo", () => {
    const expected = [3, 4, 5] as Monzo

    it("parses monzos", () => {
        const monzo = "[3,4,5]" as Formatted<Monzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("parses formatted monzos", () => {
        const monzo = "[ 3 4 5 ⟩" as Formatted<Monzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with greater than signs", () => {
        const monzo = "[ 3 4 5 >" as Formatted<Monzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with pipes", () => {
        const monzo = "| 3 4 5 ⟩" as Formatted<Monzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with no spaces on the ends", () => {
        const monzo = "[3 4 5⟩" as Formatted<Monzo>

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    // TODO: does monzo parsing work with the new extra spaces?
})
