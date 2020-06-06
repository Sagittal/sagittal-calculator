const calculateBestPossibleHistories = histories => {
    let bestRank = 8
    histories.forEach(history => {
        if (history.rank < bestRank) {
            bestRank = history.rank
        }
    })

    return histories.filter(history => history.rank === bestRank)
}

module.exports = {
    calculateBestPossibleHistories,
}
