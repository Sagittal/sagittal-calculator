const calculateBestPossibleHistories = histories => {
    let bestRank = 8
    histories.forEach(history => {
        if (history.possible && history.rank < bestRank) {
            bestRank = history.rank
        }
    })

    return histories.filter(history => history.possible && history.rank === bestRank)
}

module.exports = {
    calculateBestPossibleHistories,
}
