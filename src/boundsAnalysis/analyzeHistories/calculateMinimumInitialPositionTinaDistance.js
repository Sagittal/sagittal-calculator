const calculateMinimumInitialPositionTinaDistance = analyzedHistories => {
    const analyzedHistoryAbsoluteTinaErrors = analyzedHistories
        .map(analyzedHistory => Math.abs(analyzedHistory.initialPositionTinaDistance))

    return Math.min(...analyzedHistoryAbsoluteTinaErrors)
}

module.exports = {
    calculateMinimumInitialPositionTinaDistance,
}
