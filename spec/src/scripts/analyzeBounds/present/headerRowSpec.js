const {presentHeaderRow} = require("../../../../../src/scripts/analyzeBounds/present/headerRow")

describe("presentHeaderRow", () => {
    it("takes multiline column headers and re-slices and re-dices them into the lines that will be printed", () => {
        const firstColumnHeader = [
            "bound",
            "index",
        ]
        const secondColumnHeader = [
            "initial",
            "comma",
            "mean",
            "pos (¢)",
        ]
        const columnHeaders = [firstColumnHeader, secondColumnHeader]

        expect(presentHeaderRow(columnHeaders)).toEqual(
            "       \tinitial\n" +
            "       \tcomma  \n" +
            "bound  \tmean   \n" +
            "index  \tpos (¢)\n",
        )
    })
})
