import { IO, max } from "../../../../general"
import { BOUNDS_ANALYSIS_COLUMN_WIDTH } from "./constants"

const formatHeaderRow = (columnHeaders: IO[][]): IO => {
    const maxColumnHeaderHeight = max(...columnHeaders.map(columnHeader => columnHeader.length))

    const rows: IO[][] = [...Array(maxColumnHeaderHeight).keys()].map(row => [] as IO[])

    columnHeaders.forEach(columnHeader => {
        while (columnHeader.length < maxColumnHeaderHeight) {
            columnHeader.unshift("       " as IO)
        }

        columnHeader.forEach((columnHeaderElement, index) => {
            let formattedColumnHeaderElement = columnHeaderElement

            while (formattedColumnHeaderElement.length < BOUNDS_ANALYSIS_COLUMN_WIDTH) {
                formattedColumnHeaderElement = formattedColumnHeaderElement + " " as IO
            }

            rows[ index ].push(formattedColumnHeaderElement)
        })
    })

    return rows.map(row => row.join("\t")).join("\n") + "\n" as IO
}

const BOUNDS_ANALYSIS_HEADER_ROW = "   ---   Bound Analyses   ---   \n\n\n" + formatHeaderRow([
    [
        "bound",
        "id",
    ],
    [
        "lesser",
        "mina",
    ],
    [
        "greater",
        "mina",
    ],
    [
        "  lesser",
        "  extreme",
        "  level ",
        "  symbol",
    ],
    [
        "  greater",
        "  extreme",
        "  level ",
        "  symbol",
    ],
    [
        "medium",
        "level",
        "rank",
    ],
    [
        "high",
        "level",
        "rank",
    ],
    [
        "ultra",
        "level",
        "rank",
    ],
    [
        "extreme",
        "level",
        "rank",
    ],
    [
        "overall",
        "rank",
    ],
    [
        " medium",
        "dstance",
        "  moved",
    ],
    [
        "   high",
        "dstance",
        "  moved",
    ],
    [
        "  ultra",
        "dstance",
        "  moved",
    ],
    [
        "extreme",
        "dstance",
        "  moved",
    ],
    [
        "overall",
        "dstance",
        "  moved",
    ],
    [
        " medium",
        "ina-dst",
        "  moved",
    ],
    [
        "   high",
        "ina-dst",
        "  moved",
    ],
    [
        "  ultra",
        "ina-dst",
        "  moved",
    ],
    [
        "extreme",
        "ina-dst",
        "  moved",
    ],
    [
        "overall",
        "ina-dst",
        "  moved",
    ],
    [
        " actual",
        "  bound",
        "pos (¢)",
    ],
    [
        "initial",
        "  comma",
        "   mean",
        "pos (¢)",
    ],
    [
        "a.b. vs",
        " i.c.m.",
        "  error",
        "(tinas)",
    ],
] as IO[][]) as IO

export {
    formatHeaderRow,
    BOUNDS_ANALYSIS_HEADER_ROW,
}
