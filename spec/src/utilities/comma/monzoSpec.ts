import { parseMonzo } from "../../../../src/utilities/comma/monzo"

describe("parseMonzo", () => {
    it("parses monzos", () => {
        const monzo = "[3,4,5]"

        const result = parseMonzo(monzo)

        expect(result).toEqual([3, 4, 5])
    })

    it("parses formatted monzos", () => {
        const monzo = "[ 3 4 5 ⟩"

        const result = parseMonzo(monzo)

        expect(result).toEqual([3, 4, 5])
    })

    it("parses monzos given with greater than signs", () => {
        const monzo = "[ 3 4 5 >"

        const result = parseMonzo(monzo)

        expect(result).toEqual([3, 4, 5])
    })

    it("parses monzos given with pipes", () => {
        const monzo = "| 3 4 5 ⟩"

        const result = parseMonzo(monzo)

        expect(result).toEqual([3, 4, 5])
    })

    it("parses monzos given with no spaces on the ends", () => {
        const monzo = "[3 4 5⟩"

        const result = parseMonzo(monzo)

        expect(result).toEqual([3, 4, 5])
    })
})
