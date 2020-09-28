import { computeDeepDistinct, Maybe } from "../../code"
import { count } from "../../math"
import { Count } from "../../types"
import { Formatted } from "../format"
import { ioSettings } from "../globals"
import { Io } from "../types"
import { formatTableForForum } from "./tableForForum"
import { formatTableForSpreadsheet } from "./tableForSpreadsheet"
import { formatTableForTerminal } from "./tableForTerminal"
import { FormatTableOptions, Row, Table, TableFormat } from "./types"

// TODO: TABLE FORMATTING
//  - original thoughts about pan-column solution for tables
//  I'm afraid the fancy stuff we're doing currently to align monzo terms and decimal points in numbers
//  And symbol shafts of course (not even doing it on quotients or conname names yet, or most decimals)
//  Are fairly brittle. we know monzo breaks if you have a >2 digit negative (rare, but could happen)
//  And look no further than quotients which can be 57/56 or 1707519933/1677721600
//  The point is: a robust alignment capability must process all entries in a column,
//  Variable entries, as a pass at the end
//  - note that, while you did just add the [pre] monospaced tag for the forum tables
//  That should stipulate that you use the same spacing methods for the forum tables now too...
//  - also format monzos for tables
//  In TSV it would be best if all the closing angle-brackets ended up in the same rightward column,
//  So we don't have columns with some numbers and some angle-brackets.
//  And name the sub-columns for monzo by the prime 2, 3, 5, 7... maybe should just do that in general
//  Although if you think about what that would entail... you'd have to know ahead of time what the longest monzo
//  Was... actually that's fine, you just need to calculate the data first and THEN the header rows...
//  - quotient columns could split too! into a numerator, slash, and denominator column
//  With both quotients and monzos handled thusly, we might be closer than we think

const formatTable = <T = unknown>(table: Table<T>, options?: Partial<FormatTableOptions<T>>): Io => {
    const rowLengths = table.map((row: Row<{ of: T }>): Count<Maybe<Formatted<T>>> => {
        return count(row)
    })
    const distinctRowLengths = computeDeepDistinct(rowLengths)

    if (distinctRowLengths.length > 1) {
        throw new Error(`Table does not have rows with all the same lengths. Row lengths are ${rowLengths}.`)
    }

    switch (ioSettings.tableFormat) {
        case TableFormat.FORUM:
            return formatTableForForum(table, options)
        case TableFormat.TERMINAL:
            return formatTableForTerminal(table, options)
        case TableFormat.SPREADSHEET:
            return formatTableForSpreadsheet(table, options)
    }
}

export {
    formatTable,
}
