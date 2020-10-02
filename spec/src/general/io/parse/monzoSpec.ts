import { Io, parseMonzo } from "../../../../../src/general/io"
import { RealMonzo } from "../../../../../src/general/math"

describe("parseMonzo", (): void => {
    const expected = [3, 4, -5] as RealMonzo

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

        expect(actual).toEqual([-9.5, 6] as RealMonzo)
    })
})
