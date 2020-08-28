import { IO } from "../../../../../../src/general"
import { formatHeaderRow } from "../../../../../../src/scripts/analyzeBounds/io/text/headerRow"

describe("formatHeaderRow", () => {
    it("takes multiline column headers and re-slices and re-dices them into the lines that will be printed", () => {
        const firstColumnHeader = [
            "bound",
            "index",
        ] as IO[]
        const secondColumnHeader = [
            "initial",
            "comma",
            "mean",
            "pos (¢)",
        ] as IO[]
        const columnHeaders = [firstColumnHeader, secondColumnHeader] as IO[][]

        expect(formatHeaderRow(columnHeaders)).toEqual(
            "       \tinitial\n" +
            "       \tcomma  \n" +
            "bound  \tmean   \n" +
            "index  \tpos (¢)\n",
        )
    })
})
