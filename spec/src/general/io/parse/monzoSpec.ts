import { Io, parseMonzo } from "../../../../../src/general/io"
import { Monzo } from "../../../../../src/general/math"

describe("parseMonzo", (): void => {
    const expected = [3, 4, -5] as Monzo

    it("parses monzos", (): void => {
        const monzoIo = "[3,4,-5]" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("parses formatted monzos", (): void => {
        const monzoIo = "[ 3 4 -5 ⟩" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with greater than signs", (): void => {
        const monzoIo = "[ 3 4 -5 >" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with pipes", (): void => {
        const monzoIo = "| 3 4 -5 ⟩" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos given with no spaces on the ends", (): void => {
        const monzoIo = "[3 4 -5⟩" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("parses monzos as they are returned by scripts, with the extra spaces to align them", (): void => {
        const monzoIo = "[   3   4  -5 ⟩" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("can handle the situation where there are both commas and spaces", (): void => {
        const monzoIo = "[3, 4, -5]" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("can handle tab spacing", (): void => {
        const monzoIo = "[3\t4\t-5]" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual(expected)
    })

    it("can handle irrational monzos", (): void => {
        const monzoIo = "[-9.5\t6]" as Io

        const actual = parseMonzo(monzoIo)

        expect(actual).toEqual([-9.5, 6] as Monzo)
    })

    // TODO: it would be cool if this was smart enough to parse monzos given in George's punctuated format
    //  Though that would involve it being able to distinguish between those just copied and pasted from JS w/ commas
    //  And those with the distinctive 2, 3, 3, 3 ... spacing of the commas
    //  - Also, wait, does the punctuated monzo format supposed to collapse stretches of 3 zeroes to just a comma?
    //  - And regardless, should we default to punctuated style if the monzo exceeds a certain length?
})
