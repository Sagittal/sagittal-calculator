import { Range } from "../../code"
import { Table } from "./types"

const computeColumnRange = (table: Table): Range => {
    const exampleRow = table[ 0 ]
    const columnCount = exampleRow.length

    return [...Array(columnCount).keys()] as Range
}

export {
    computeColumnRange,
}
