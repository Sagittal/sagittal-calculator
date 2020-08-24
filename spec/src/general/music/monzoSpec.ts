import { parseMonzo } from "../../../../src/general/music"

describe("parseMonzo", () => {
    const expected = [3, 4, 5]

    it("parses monzos", () => {
        const monzo = "[3,4,5]"

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("parses formatted monzos", () => {
        const monzo = "[ 3 4 5 ⟩"

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with greater than signs", () => {
        const monzo = "[ 3 4 5 >"

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with pipes", () => {
        const monzo = "| 3 4 5 ⟩"

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with no spaces on the ends", () => {
        const monzo = "[3 4 5⟩"

        const actual = parseMonzo(monzo)

        expect(actual).toEqual(expected)
    })
})
