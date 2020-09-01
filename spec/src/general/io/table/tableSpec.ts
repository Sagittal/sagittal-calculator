import { formatTable, Table } from "../../../../../src/general"

describe("table", () => {
    it("throws an error if the rows do not all have the same length", () => {
        const table = [
            ["id", "name"],
            ["1 ", "jim ", "45"],
        ] as Table

        expect(() => formatTable(table)).toThrowError("Table does not have rows with all the same lengths. Row lengths are 2,3.")
    })
})
