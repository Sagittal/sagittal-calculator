const calculateMinimumError = analyzedHistories => {
    const analyzedHistoryAbsoluteTinaErrors = analyzedHistories
        .map(analyzedHistory => Math.abs(analyzedHistory.tinaError))

    return Math.min(...analyzedHistoryAbsoluteTinaErrors)
}

module.exports = {
    calculateMinimumError,
}
