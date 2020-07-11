const COLUMN_WIDTH = 7

const presentHeaderRow = (columnHeaders: string[][]) => {
    const maxColumnHeaderHeight = Math.max(...columnHeaders.map(columnHeader => columnHeader.length))

    const rows: string[][] = [...Array(maxColumnHeaderHeight).keys()].map(row => [] as string[])

    columnHeaders.forEach(columnHeader => {
        while (columnHeader.length < maxColumnHeaderHeight) {
            columnHeader.unshift("       ")
        }

        columnHeader.forEach((columnHeaderElement, index) => {
            let presentedColumnHeaderElement = columnHeaderElement

            while (presentedColumnHeaderElement.length < COLUMN_WIDTH) {
                presentedColumnHeaderElement = presentedColumnHeaderElement + " "
            }

            rows[ index ].push(presentedColumnHeaderElement)
        })
    })

    return rows.map(row => row.join("\t")).join("\n") + "\n"
}

const BOUNDS_ANALYSIS_HEADER_ROW = "   ---   Bound Analyses   ---   \n\n\n" + presentHeaderRow([
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
    presentHeaderRow,
    BOUNDS_ANALYSIS_HEADER_ROW,
}
