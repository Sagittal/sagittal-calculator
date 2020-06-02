const structureHistories = histories => {
    const structuredHistories = {}

    let cursor = structuredHistories
    histories.forEach(history => {
        history.events.forEach((event, index) => {
            const intializeValue = index === history.events.length - 1 ? history.position : {}
            cursor[event] = cursor[event] || intializeValue
            cursor = cursor[event]
        })
        cursor = structuredHistories
    })

    return structuredHistories
}

module.exports = {
    structureHistories,
}
