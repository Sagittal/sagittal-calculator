const calculateBestHistories = histories => { // TODO: pretty sure it wouldn't be possible to have >1 tied history for best? maybe it is? well why don't you just find out?
    let bestRank = 8
    histories.forEach(history => {
        if (history.rank < bestRank) {
            bestRank = history.rank
        }
    })

    return histories.filter(history => history.rank === bestRank)
}

module.exports = {
    calculateBestHistories,
}
