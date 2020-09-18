import { computeDeepDistinct, Maybe } from "../../code"
import { count } from "../../math"
import { Count } from "../../types"
import { Formatted } from "../format"
import { ioSettings } from "../globals"
import { Io } from "../types"
import { formatTableForForum } from "./tableForForum"
import { formatTableForTerminal } from "./tableForTerminal"
import { FormatTableOptions, Row, Table } from "./types"

// TODO: ACTUAL PAN-COLUMN ALIGNMENT SOLUTION
//  I'm afraid the fancy stuff we're doing currently to align monzo terms and decimal points in numbers
//  and symbol shafts of course (not even doing it on ratios or conname names yet, or most decimals)
//  are fairly brittle. we know monzo breaks if you have a >2 digit negative (rare, but could happen)
//  and we already know that N2D3P9 has a different count of decimals from other numbers
//  and look no further than ratios which can be 57/56 or 1707519933/1677721600
//  the point is: a robust alignment capability must process all entries in a column,
//  variable entries, as a pass at the end
//  - note that, while you did just add the [pre] monospaced tag for the forum tables
//  that should stipulate that you use the same spacing methods for the forum tables now too...

const formatTable = <T = unknown>(table: Table<T>, options?: Partial<FormatTableOptions<T>>): Io => {
    const rowLengths = table.map((row: Row<{ of: T }>): Count<Maybe<Formatted<T>>> => {
        return count(row)
    })
    const distinctRowLengths = computeDeepDistinct(rowLengths)

    if (distinctRowLengths.length > 1) {
        throw new Error(`Table does not have rows with all the same lengths. Row lengths are ${rowLengths}.`)
    }

    // TODO: TSV FORMAT FOR TABLES per http://forum.sagittal.org/viewtopic.php?p=2409#p2409
    //  in TSV it would be best if all the closing angle-brackets ended up in the same rightward column,
    //  so we don't have columns with some numbers and some angle-brackets.
    //  - and perhaps name the sub-columns for monzo by the prime 2, 3, 5, 7... maybe should just do that in general
    //  - and include a BOM (https://csv.thephpleague.com/8.0/bom/)
    //  - and it should use symbol unicode!

    return ioSettings.forForum ? formatTableForForum(table, options) : formatTableForTerminal(table, options)
}

export {
    formatTable,
}
