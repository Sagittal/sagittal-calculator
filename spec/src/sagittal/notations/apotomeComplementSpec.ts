import { PARENTHETICAL_CONVENTIONAL_NATURAL_SYMBOL } from "../../../../src/sagittal/constants"
import { SagittalSymbol } from "../../../../src/sagittal/notations"
import { getApotomeComplement } from "../../../../src/sagittal/notations/apotomeComplement"

describe("getApotomeComplement", (): void => {
    it("returns the apotome complement of the given symbol", (): void => {
        const symbol = "/|" as SagittalSymbol

        const actual = getApotomeComplement(symbol)

        const expected = "||\\"
        expect(actual).toBe(expected)
    })

    it("can go from a multi-shaft symbol to the single-shaft symbol", (): void => {
        const symbol = ")~||" as SagittalSymbol

        const actual = getApotomeComplement(symbol)

        const expected = "~|\\"
        expect(actual).toBe(expected)
    })

    it("is smart enough to flip the accents", (): void => {
        const symbol = ",'|(" as SagittalSymbol

        const actual = getApotomeComplement(symbol)

        const expected = "`./||)"
        expect(actual).toBe(expected)
    })

    it("is smart enough to flip accents the other way", (): void => {
        const symbol = "`./||)" as SagittalSymbol

        const actual = getApotomeComplement(symbol)

        const expected = ",'|("
        expect(actual).toBe(expected)
    })

    it("maps the (natural) to the apotome", (): void => {
        const actual = getApotomeComplement(PARENTHETICAL_CONVENTIONAL_NATURAL_SYMBOL)

        const expected = "/||\\"
        expect(actual).toBe(expected)
    })

    it("maps a bare shaft with accents to the apotome with flipped accents", (): void => {
        const symbol = "`'|" as SagittalSymbol

        const actual = getApotomeComplement(symbol)

        const expected = ",./||\\"
        expect(actual).toBe(expected)
    })
})

// TODO: account for that major refactor last week which left a bunch of tests with out-of-date describes
//  With a spec helper that will find missing const actual = [[thing]] paired with /$describe("[[thing]].../
