import { Count, Io, Row, Table } from "../../../../../src/general"
import { formatTableForForum } from "../../../../../src/general/io/table/tableForForum"
import { Justification } from "../../../../../src/general/io/table/types"

describe("formatTableForForum", () => {
    it("formats a table to be posted on the Sagittal forum", () => {
        const table = [
            ["comma name", "limit", "5-rough sopfr", "cents", "monzo", "ratio", "apotome slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table)

        let expected =
            "[table]\n" +
            "[tr][th]comma name[/th][th]limit[/th][th]5-rough sopfr[/th][th]cents[/th][th]monzo[/th][th]ratio[/th][th]apotome slope[/th][th]N2D3P9[/th][/tr]\n" +
            "[tr][td]11M[/td][td]11[/td][td]11[/td][td]45.45[/td][td][0 0 1⟩[/td][td]33/32[/td][td]-4[/td][td]6.722[/td][/tr]\n" +
            "[tr][td]25/49M[/td][td]7[/td][td]24[/td][td]33.4[/td][td][0 0⟩[/td][td]50/49[/td][td]-59.333[/td][td]26.466[/td][/tr]\n" +
            "[/table]\n" as Io
        expect(actual).toEqual(expected)
    })

    it("supports a custom count of header rows", () => {
        const table = [
            ["comma", "", "5-rough", "", "", "", "apotome", ""],
            ["name", "limit", "sopfr", "cents", "monzo", "ratio", "slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table, { headerRowCount: 2 as Count<Row<string, "Header">> })

        let expected =
            "[table]\n" +
            "[tr][th]comma[/th][th][/th][th]5-rough[/th][th][/th][th][/th][th][/th][th]apotome[/th][th][/th][/tr]\n" +
            "[tr][th]name[/th][th]limit[/th][th]sopfr[/th][th]cents[/th][th]monzo[/th][th]ratio[/th][th]slope[/th][th]N2D3P9[/th][/tr]\n" +     // Note the second header row!
            "[tr][td]11M[/td][td]11[/td][td]11[/td][td]45.45[/td][td][0 0 1⟩[/td][td]33/32[/td][td]-4[/td][td]6.722[/td][/tr]\n" +
            "[tr][td]25/49M[/td][td]7[/td][td]24[/td][td]33.4[/td][td][0 0⟩[/td][td]50/49[/td][td]-59.333[/td][td]26.466[/td][/tr]\n" +
            "[/table]\n" as Io
        expect(actual).toEqual(expected)
    })

    it("supports colors per row", () => {
        const table = [
            ["comma", "", "5-rough", "", "", "", "apotome", ""],
            ["name", "limit", "sopfr", "cents", "monzo", "ratio", "slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table, { colors: ["yellow", "red", "blue", "cyan"] })

        let expected =
            "[table]\n" +
            "[tr][th][hilite=yellow]comma[/hilite][/th][th][hilite=yellow][/hilite][/th][th][hilite=yellow]5-rough[/hilite][/th][th][hilite=yellow][/hilite][/th][th][hilite=yellow][/hilite][/th][th][hilite=yellow][/hilite][/th][th][hilite=yellow]apotome[/hilite][/th][th][hilite=yellow][/hilite][/th][/tr]\n" +
            "[tr][td][hilite=red]name[/hilite][/td][td][hilite=red]limit[/hilite][/td][td][hilite=red]sopfr[/hilite][/td][td][hilite=red]cents[/hilite][/td][td][hilite=red]monzo[/hilite][/td][td][hilite=red]ratio[/hilite][/td][td][hilite=red]slope[/hilite][/td][td][hilite=red]N2D3P9[/hilite][/td][/tr]\n" +
            "[tr][td][hilite=blue]11M[/hilite][/td][td][hilite=blue]11[/hilite][/td][td][hilite=blue]11[/hilite][/td][td][hilite=blue]45.45[/hilite][/td][td][hilite=blue][0 0 1⟩[/hilite][/td][td][hilite=blue]33/32[/hilite][/td][td][hilite=blue]-4[/hilite][/td][td][hilite=blue]6.722[/hilite][/td][/tr]\n" +
            "[tr][td][hilite=cyan]25/49M[/hilite][/td][td][hilite=cyan]7[/hilite][/td][td][hilite=cyan]24[/hilite][/td][td][hilite=cyan]33.4[/hilite][/td][td][hilite=cyan][0 0⟩[/hilite][/td][td][hilite=cyan]50/49[/hilite][/td][td][hilite=cyan]-59.333[/hilite][/td][td][hilite=cyan]26.466[/hilite][/td][/tr]\n" +
            "[/table]\n" as Io
        expect(actual).toEqual(expected)
    })

    it("supports justification", () => {
        const table = [
            ["comma", "", "5-rough", "", "", "", "apotome", ""],
            ["name", "limit", "sopfr", "cents", "monzo", "ratio", "slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table, { justification: [Justification.RIGHT, Justification.CENTER] })

        let expected =
            "[table]\n" +
            "[tr][th][right]comma[/right][/th][th][center][/center][/th][th]5-rough[/th][th][/th][th][/th][th][/th][th]apotome[/th][th][/th][/tr]\n" +
            "[tr][td][right]name[/right][/td][td][center]limit[/center][/td][td]sopfr[/td][td]cents[/td][td]monzo[/td][td]ratio[/td][td]slope[/td][td]N2D3P9[/td][/tr]\n" +
            "[tr][td][right]11M[/right][/td][td][center]11[/center][/td][td]11[/td][td]45.45[/td][td][0 0 1⟩[/td][td]33/32[/td][td]-4[/td][td]6.722[/td][/tr]\n" +
            "[tr][td][right]25/49M[/right][/td][td][center]7[/center][/td][td]24[/td][td]33.4[/td][td][0 0⟩[/td][td]50/49[/td][td]-59.333[/td][td]26.466[/td][/tr]\n" +
            "[/table]\n" as Io
        expect(actual).toEqual(expected)
    })
})
