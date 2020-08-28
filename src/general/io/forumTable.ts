import { IO } from "./types"

const forumTable = (data: IO[]): IO[] => {
    const table: IO[] = data.map((row, index) => {
        const cellTag = index === 0 ? "th" : "td"

        return `[tr][${cellTag}]` + row.split("\t").join(`[/${cellTag}][${cellTag}]`) + `[/${cellTag}][/tr]` as IO
    })

    table.unshift("[table]" as IO)
    table.push("[/table]" as IO)

    return table
}

export {
    forumTable,
}
