import { Formatted, ioSettings, TableFormat } from "../../../../../src/general/io"
import { RationalDecimal, RationalMonzo, RationalQuotient } from "../../../../../src/general/math"
import { compute23FreeClass, format23FreeClass, Two3FreeClass } from "../../../../../src/general/music"

describe("compute23FreeClass", (): void => {
    it("returns the 2,3-free, THEN super taken (n ≥ d) version of the pitch, branded", (): void => {
        const jiPitch = { monzo: [4, 1, -2] as RationalMonzo }   // 48/25

        const actual = compute23FreeClass(jiPitch)

        const expected = { monzo: [0, 0, 2] } as Two3FreeClass
        expect(actual).toEqual(expected)
    })

    it("trims the monzo if necessary", (): void => {
        const jiPitch = { monzo: [4, 1] as RationalMonzo }   // 48/1

        const actual = compute23FreeClass(jiPitch)

        const expected = { monzo: [] as unknown[] as RationalMonzo } as Two3FreeClass
        expect(actual).toEqual(expected)
    })

    it("works for pitches with quotients too", (): void => {
        const jiPitch = { quotient: [48, 25] as RationalQuotient }

        const actual = compute23FreeClass(jiPitch)

        const expected = { quotient: [25, 1] } as Two3FreeClass
        expect(actual).toEqual(expected)
    })

    it("works for pitches with decimals too", (): void => {
        const jiPitch = { decimal: 34 as RationalDecimal }

        const actual = compute23FreeClass(jiPitch)

        const expected = { decimal: 17 } as Two3FreeClass
        expect(actual).toEqual(expected)
    })

    it("if more than one representation is present, it includes all of them", (): void => {
        const jiPitch = {
            decimal: 8.5 as RationalDecimal,
            quotient: [17, 2] as RationalQuotient,
            monzo: [-1, 0, 0, 0, 0, 0, 1] as RationalMonzo,
        }

        const actual = compute23FreeClass(jiPitch)

        const expected = {
            decimal: 17,
            quotient: [17, 1],
            monzo: [0, 0, 0, 0, 0, 0, 1],
        } as Two3FreeClass
        expect(actual).toEqual(expected)
    })
})

describe("format23FreeClass", (): void => {
    it("gives the name of the 2,3-free class when formatting for the terminal", (): void => {
        const two3FreeClass = { monzo: [ 0, 0, -1, 0, 1 ] } as Two3FreeClass
        
        ioSettings.tableFormat = TableFormat.TERMINAL
        const actual = format23FreeClass(two3FreeClass, ioSettings)
        
        const expected = "11/5₍₂,₃₎" as Formatted<Two3FreeClass>
        expect(actual).toBe(expected)
    })

    it("same when formatting for spreadsheets", (): void => {
        const two3FreeClass = { monzo: [ 0, 0, -1, 0, 1 ] } as Two3FreeClass

        ioSettings.tableFormat = TableFormat.SPREADSHEET
        const actual = format23FreeClass(two3FreeClass, ioSettings)

        const expected = "11/5₍₂,₃₎" as Formatted<Two3FreeClass>
        expect(actual).toBe(expected)
    })

    it("uses the LaTeX bbCode when formatting for the forum", (): void => {
        const two3FreeClass = { monzo: [ 0, 0, -1, 0, 1 ] } as Two3FreeClass

        ioSettings.tableFormat = TableFormat.FORUM
        const actual = format23FreeClass(two3FreeClass, ioSettings)

        const expected = "[latex]\\frac{11}/{5}_{\\scriptsize{(2,3)}}[/latex]" as Formatted<Two3FreeClass>
        expect(actual).toBe(expected)
    })
})
