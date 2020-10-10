// tslint:disable max-line-length

import { Count, Io, NEWLINE, Row, Table } from "../../../../../src/general"
import { formatTableForForum } from "../../../../../src/general/io/table/tableForForum"
import { Justification } from "../../../../../src/general/io/table/types"

describe("formatTableForForum", (): void => {
    it("formats a table to be posted on the Sagittal forum", (): void => {
        const table = [
            ["comma name", "prime limit", "2,3-free SoPFR", "cents", "monzo", "quotient", "apotome slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table)

        let expected =
            "[table]" + NEWLINE +
            "[tr][th][pre]comma name[/pre][/th][th][pre]prime limit[/pre][/th][th][pre]2,3-free SoPFR[/pre][/th][th][pre]cents[/pre][/th][th][pre]monzo  [/pre][/th][th][pre]quotient[/pre][/th][th][pre]apotome slope[/pre][/th][th][pre]N2D3P9[/pre][/th][/tr]" + NEWLINE +
            "[tr][td][pre]11M       [/pre][/td][td][pre]11         [/pre][/td][td][pre]11            [/pre][/td][td][pre]45.45[/pre][/td][td][pre][0 0 1⟩[/pre][/td][td][pre]33/32   [/pre][/td][td][pre]-4           [/pre][/td][td][pre]6.722 [/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre]25/49M    [/pre][/td][td][pre]7          [/pre][/td][td][pre]24            [/pre][/td][td][pre]33.4 [/pre][/td][td][pre][0 0⟩  [/pre][/td][td][pre]50/49   [/pre][/td][td][pre]-59.333      [/pre][/td][td][pre]26.466[/pre][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("supports a custom count of header rows", (): void => {
        const table = [
            ["comma", "prime", "2,3-free", "", "", "", "apotome", ""],
            ["name", "limit", "SoPFR", "cents", "monzo", "quotient", "slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table, { headerRowCount: 2 as Count<Row<{ of: string, header: true }>> })

        let expected =
            "[table]" + NEWLINE +
            "[tr][th][pre]comma [/pre][/th][th][pre]prime[/pre][/th][th][pre]2,3-free[/pre][/th][th][pre]     [/pre][/th][th][pre]       [/pre][/th][th][pre]        [/pre][/th][th][pre]apotome[/pre][/th][th][pre]      [/pre][/th][/tr]" + NEWLINE +
            "[tr][th][pre]name  [/pre][/th][th][pre]limit[/pre][/th][th][pre]SoPFR   [/pre][/th][th][pre]cents[/pre][/th][th][pre]monzo  [/pre][/th][th][pre]quotient[/pre][/th][th][pre]slope  [/pre][/th][th][pre]N2D3P9[/pre][/th][/tr]" + NEWLINE +     // Note the second header row!
            "[tr][td][pre]11M   [/pre][/td][td][pre]11   [/pre][/td][td][pre]11      [/pre][/td][td][pre]45.45[/pre][/td][td][pre][0 0 1⟩[/pre][/td][td][pre]33/32   [/pre][/td][td][pre]-4     [/pre][/td][td][pre]6.722 [/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre]25/49M[/pre][/td][td][pre]7    [/pre][/td][td][pre]24      [/pre][/td][td][pre]33.4 [/pre][/td][td][pre][0 0⟩  [/pre][/td][td][pre]50/49   [/pre][/td][td][pre]-59.333[/pre][/td][td][pre]26.466[/pre][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("supports colors per row", (): void => {
        const table = [
            ["comma", "prime", "2,3-free", "", "", "", "apotome", ""],
            ["name", "limit", "SoPFR", "cents", "monzo", "quotient", "slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table, { colors: ["yellow", "red", "blue", "cyan"] })

        let expected =
            "[table]" + NEWLINE +
            "[tr][th][pre][hilite=yellow]comma [/hilite][/pre][/th][th][pre][hilite=yellow]prime[/hilite][/pre][/th][th][pre][hilite=yellow]2,3-free[/hilite][/pre][/th][th][pre][hilite=yellow]     [/hilite][/pre][/th][th][pre][hilite=yellow]       [/hilite][/pre][/th][th][pre][hilite=yellow]        [/hilite][/pre][/th][th][pre][hilite=yellow]apotome[/hilite][/pre][/th][th][pre][hilite=yellow]      [/hilite][/pre][/th][/tr]" + NEWLINE +
            "[tr][td][pre][hilite=red]name  [/hilite][/pre][/td][td][pre][hilite=red]limit[/hilite][/pre][/td][td][pre][hilite=red]SoPFR   [/hilite][/pre][/td][td][pre][hilite=red]cents[/hilite][/pre][/td][td][pre][hilite=red]monzo  [/hilite][/pre][/td][td][pre][hilite=red]quotient[/hilite][/pre][/td][td][pre][hilite=red]slope  [/hilite][/pre][/td][td][pre][hilite=red]N2D3P9[/hilite][/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre][hilite=blue]11M   [/hilite][/pre][/td][td][pre][hilite=blue]11   [/hilite][/pre][/td][td][pre][hilite=blue]11      [/hilite][/pre][/td][td][pre][hilite=blue]45.45[/hilite][/pre][/td][td][pre][hilite=blue][0 0 1⟩[/hilite][/pre][/td][td][pre][hilite=blue]33/32   [/hilite][/pre][/td][td][pre][hilite=blue]-4     [/hilite][/pre][/td][td][pre][hilite=blue]6.722 [/hilite][/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre][hilite=cyan]25/49M[/hilite][/pre][/td][td][pre][hilite=cyan]7    [/hilite][/pre][/td][td][pre][hilite=cyan]24      [/hilite][/pre][/td][td][pre][hilite=cyan]33.4 [/hilite][/pre][/td][td][pre][hilite=cyan][0 0⟩  [/hilite][/pre][/td][td][pre][hilite=cyan]50/49   [/hilite][/pre][/td][td][pre][hilite=cyan]-59.333[/hilite][/pre][/td][td][pre][hilite=cyan]26.466[/hilite][/pre][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("supports justification", (): void => {
        const table = [
            ["comma", "prime", "2,3-free", "", "", "", "apotome", ""],
            ["name", "limit", "SoPFR", "cents", "monzo", "quotient", "slope", "N2D3P9"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4", "6.722"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333", "26.466"],
        ] as Table<Io>

        const actual = formatTableForForum(table, { justification: [Justification.RIGHT, Justification.CENTER] })

        let expected =
            "[table]" + NEWLINE +
            "[tr][th][pre] comma[/pre][/th][th][pre]prime[/pre][/th][th][pre]2,3-free[/pre][/th][th][pre]     [/pre][/th][th][pre]       [/pre][/th][th][pre]        [/pre][/th][th][pre]apotome[/pre][/th][th][pre]      [/pre][/th][/tr]" + NEWLINE +
            "[tr][td][pre]  name[/pre][/td][td][pre]limit[/pre][/td][td][pre]SoPFR   [/pre][/td][td][pre]cents[/pre][/td][td][pre]monzo  [/pre][/td][td][pre]quotient[/pre][/td][td][pre]slope  [/pre][/td][td][pre]N2D3P9[/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre]   11M[/pre][/td][td][pre]  11 [/pre][/td][td][pre]11      [/pre][/td][td][pre]45.45[/pre][/td][td][pre][0 0 1⟩[/pre][/td][td][pre]33/32   [/pre][/td][td][pre]-4     [/pre][/td][td][pre]6.722 [/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre]25/49M[/pre][/td][td][pre]  7  [/pre][/td][td][pre]24      [/pre][/td][td][pre]33.4 [/pre][/td][td][pre][0 0⟩  [/pre][/td][td][pre]50/49   [/pre][/td][td][pre]-59.333[/pre][/td][td][pre]26.466[/pre][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("supports undefined cells, rendering them as blank", (): void => {
        const table = [
            ["id", "name", "nmm", "thing"],
            ["1", "jim", "45", "barb"],
            ["2", "bob", undefined, "spot"],
            ["2", "bo", "9999", "jet"],
        ] as Table

        const actual = formatTableForForum(table)

        const expected =
            "[table]" + NEWLINE +
            "[tr][th][pre]id[/pre][/th][th][pre]name[/pre][/th][th][pre]nmm [/pre][/th][th][pre]thing[/pre][/th][/tr]" + NEWLINE +
            "[tr][td][pre]1 [/pre][/td][td][pre]jim [/pre][/td][td][pre]45  [/pre][/td][td][pre]barb [/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre]2 [/pre][/td][td][pre]bob [/pre][/td][td][pre]    [/pre][/td][td][pre]spot [/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre]2 [/pre][/td][td][pre]bo  [/pre][/td][td][pre]9999[/pre][/td][td][pre]jet  [/pre][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
