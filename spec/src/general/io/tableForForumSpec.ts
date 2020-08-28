import { formatTableForForum, IO, Table } from "../../../../src/general"

describe("formatTableForForum", () => {
    it("formats a table to be posted on the Sagittal forum", () => {
        const table = [
            ["comma name", "limit", "5-rough sopfr", "cents", "monzo", "ratio", "apotome slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table

        const actual = formatTableForForum(table)

        let expected =
            "[table]\n" +
            "[tr][th]comma name[/th][th]limit[/th][th]5-rough sopfr[/th][th]cents[/th][th]monzo[/th][th]ratio[/th][th]apotome slope[/th][th]N2D3P9[/th][/tr]\n" +
            "[tr][td]11M[/td][td]11[/td][td]11[/td][td]45.45[/td][td][0 0 1⟩[/td][td]33/32[/td][td]-4[/td][td]6.722[/td][/tr]\n" +
            "[tr][td]25/49M[/td][td]7[/td][td]24[/td][td]33.4[/td][td][0 0⟩[/td][td]50/49[/td][td]-59.333[/td][td]26.466[/td][/tr]\n" +
            "[/table]\n" as IO
        expect(actual).toEqual(expected)
    })
})
