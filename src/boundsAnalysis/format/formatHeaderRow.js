const COLUMN_WIDTH = 7

const formatHeaderRow = columnHeaders => {
    const maxColumnHeaderHeight = Math.max(...columnHeaders.map(columnHeader => columnHeader.length))

    const rows = [...Array(maxColumnHeaderHeight).keys()].map(row => [])

    columnHeaders.forEach(columnHeader => {
        while (columnHeader.length < maxColumnHeaderHeight) {
            columnHeader.unshift("       ")
        }

        columnHeader.forEach((columnHeaderElement, index) => {
            let formattedColumnHeaderElement = columnHeaderElement

            while (formattedColumnHeaderElement.length < COLUMN_WIDTH) {
                formattedColumnHeaderElement = formattedColumnHeaderElement + " "
            }

            rows[index].push(formattedColumnHeaderElement)
        })
    })

    return rows.map(row => row.join("\t")).join("\n") + "\n"
}

module.exports = {
    formatHeaderRow,
}
