import { forumTable } from "../../../../src/general"

describe("forumTable", () => {
    it("formats a table to be posted on the Sagittal forum", () => {
        const data = [
            "comma name\tlimit\t5-rough sopfr\tcents\tmonzo\tratio\tapotome slope\tN2D3P9",
            "11M\t11\t11\t45.45\t[0 0 1⟩\t33/32\t-4\t6.722",
            "25/49M\t7\t24\t33.4\t[0 0⟩\t50/49\t-59.333\t26.466",
        ]

        const actual = forumTable(data)

        let expected = [
            "[table]",
            "[tr][th]comma name[/th][th]limit[/th][th]5-rough sopfr[/th][th]cents[/th][th]monzo[/th][th]ratio[/th][th]apotome slope[/th][th]N2D3P9[/th][/tr]",
            "[tr][td]11M[/td][td]11[/td][td]11[/td][td]45.45[/td][td][0 0 1⟩[/td][td]33/32[/td][td]-4[/td][td]6.722[/td][/tr]",
            "[tr][td]25/49M[/td][td]7[/td][td]24[/td][td]33.4[/td][td][0 0⟩[/td][td]50/49[/td][td]-59.333[/td][td]26.466[/td][/tr]",
            "[/table]",
        ]
        expect(actual).toEqual(expected)
    })
})
