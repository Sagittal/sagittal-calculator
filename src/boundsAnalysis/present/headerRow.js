const COLUMN_WIDTH = 7

const presentHeaderRow = columnHeaders => {
    const maxColumnHeaderHeight = Math.max(...columnHeaders.map(columnHeader => columnHeader.length))

    const rows = [...Array(maxColumnHeaderHeight).keys()].map(row => [])

    columnHeaders.forEach(columnHeader => {
        while (columnHeader.length < maxColumnHeaderHeight) {
            columnHeader.unshift("       ")
        }

        columnHeader.forEach((columnHeaderElement, index) => {
            let presentedColumnHeaderElement = columnHeaderElement

            while (presentedColumnHeaderElement.length < COLUMN_WIDTH) {
                presentedColumnHeaderElement = presentedColumnHeaderElement + " "
            }

            rows[index].push(presentedColumnHeaderElement)
        })
    })

    return rows.map(row => row.join("\t")).join("\n") + "\n"
}

const HEADER_ROW = "   ---   Bound Analyses   ---   \n\n\n" + presentHeaderRow([
    [
        "bound",
        "index",
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
        "very",
        "high",
        "level",
        "rank",
    ],
    [
        "extreme",
        "level",
        "rank",
    ],
    [
        "insane",
        "level",
        "rank",
    ],
    [
        "best",
        "history",
        "overall",
        "rank",
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

module.exports = {
    presentHeaderRow,
    HEADER_ROW,
}
