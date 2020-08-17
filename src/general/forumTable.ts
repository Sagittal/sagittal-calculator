const forumTable = (data: string[]) => {
    const table = data.map((row, rowIndex) => {
        const cellTag = rowIndex === 0 ? "th" : "td"

        return `[tr][${cellTag}]` + row.split("\t").join(`[/${cellTag}][${cellTag}]`) + `[/${cellTag}][/tr]`
    })

    table.unshift("[table]")
    table.push("[/table]")

    return table
}

export {
    forumTable,
}
