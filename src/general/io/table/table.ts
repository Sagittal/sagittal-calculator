import { computeDeepDistinct } from "../../code"
import { ioSettings } from "../globals"
import { formatTableForForum } from "./tableForForum"
import { formatTableForTerminal } from "./tableForTerminal"
import { FormatTableOptions, Table } from "./types"

// TODO: I'm afraid the fancy stuff we're doing currently to align monzo terms and decimal points in numbers
//  and symbol shafts of course (not even doing it on ratios or conname names yet, or most decimals)
//  are fairly brittle. we know monzo breaks if you have a >2 digit negative (rare, but could happen)
//  and we already know that N2D3P9 has a different count of decimals from other numbers
//  and look no further than ratios which can be 57/56 or 1707519933/1677721600
//  the point is: a robust alignment capability must process all entries in a column,
//  variable entries, as a pass at the end

const formatTable = (table: Table, options?: Partial<FormatTableOptions>) => {
    const rowLengths = table.map(row => row.length)
    const distinctRowLengths = computeDeepDistinct(rowLengths)

    if (distinctRowLengths.length > 1) {
        throw new Error(`Table does not have rows with all the same lengths. Row lengths are ${rowLengths}.`)
    }

    return ioSettings.forForum ? formatTableForForum(table, options) : formatTableForTerminal(table, options)
}

export {
    formatTable,
}
