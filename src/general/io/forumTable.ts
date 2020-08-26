const forumTable = (data: string[]) => {
    const table = data.map((row, index) => {
        const cellTag = index === 0 ? "th" : "td"

        return `[tr][${cellTag}]` + row.split("\t").join(`[/${cellTag}][${cellTag}]`) + `[/${cellTag}][/tr]`
    })

    table.unshift("[table]")
    table.push("[/table]")

    return table
}

export {
    forumTable,
}
