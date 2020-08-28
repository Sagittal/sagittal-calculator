import { max } from "../../../general"
import { BOUNDS_ANALYSIS_COLUMN_WIDTH } from "./constants"

const formatHeaderRow = (columnHeaders: string[][]): string => {
    const maxColumnHeaderHeight = max(...columnHeaders.map(columnHeader => columnHeader.length))

    const rows: string[][] = [...Array(maxColumnHeaderHeight).keys()].map(row => [] as string[])

    columnHeaders.forEach(columnHeader => {
        while (columnHeader.length < maxColumnHeaderHeight) {
            columnHeader.unshift("       ")
        }

        columnHeader.forEach((columnHeaderElement, index) => {
            let formattedColumnHeaderElement = columnHeaderElement

            while (formattedColumnHeaderElement.length < BOUNDS_ANALYSIS_COLUMN_WIDTH) {
                formattedColumnHeaderElement = formattedColumnHeaderElement + " "
            }

            rows[ index ].push(formattedColumnHeaderElement)
        })
    })

    return rows.map(row => row.join("\t")).join("\n") + "\n"
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
])

export {
    formatHeaderRow,
    BOUNDS_ANALYSIS_HEADER_ROW,
}
