const {computeLevelHistories} = require("./levelHistories")
const {computeInitialHistory} = require("./initialHistory")

const computeHistories = bound => {
    const {levels} = bound

    const initialHistory = computeInitialHistory(bound)

    let boundHistories = [initialHistory]
    levels.forEach(level => {
        boundHistories = computeLevelHistories(boundHistories, level, bound)
    })

    return boundHistories
}

module.exports = {
    computeHistories,
}
