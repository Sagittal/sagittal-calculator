// TODO: this is the file which mostly centralizes the stuff I'm in suspense from feedback from Dave on
const computeBestPossibleHistories = analyzedHistories => {
    let bestPossibleScore = Infinity
    let bestPossibleSleda = Infinity

    analyzedHistories.forEach(analyzedHistory => {
        if (analyzedHistory.score < bestPossibleScore) {
            bestPossibleScore = analyzedHistory.score
        }
        if (analyzedHistory.sleda < bestPossibleSleda) {
            bestPossibleSleda = analyzedHistory.sleda
        }
    })

    let historyWithLowestSledaAmongHistoriesWithBestPossibleScore = {sleda: Infinity}
    let historyWithLowestScoreAmongHistoriesWithBestPossibleSleda = {score: Infinity}

    analyzedHistories.forEach(analyzedHistory => {
        if (analyzedHistory.score === bestPossibleScore && analyzedHistory.sleda < historyWithLowestSledaAmongHistoriesWithBestPossibleScore.sleda) {
            historyWithLowestSledaAmongHistoriesWithBestPossibleScore = analyzedHistory
        }
        if (analyzedHistory.sleda === bestPossibleSleda && analyzedHistory.score < historyWithLowestScoreAmongHistoriesWithBestPossibleSleda.score) {
            historyWithLowestScoreAmongHistoriesWithBestPossibleSleda = analyzedHistory
        }
    })

    // forEachSledaBetterThanSledaOfHistoryWithBestSledaAmongHistoriesWithBestPossibleScoreTheHistoryWithTheBestScore
    const sledaThing = {}
    // forEachScoreBetterThanScoreOfHistoryWithBestScoreAmongHistoriesWithBestPossibleSledaTheHistoryWithTheBestSleda
    const scoreThing = {}

    analyzedHistories.forEach(analyzedHistory => {
        if (
            analyzedHistory.sleda < historyWithLowestSledaAmongHistoriesWithBestPossibleScore.sleda &&
            (
                !sledaThing[analyzedHistory.sleda] ||
                analyzedHistory.score < sledaThing[analyzedHistory.sleda].score
            )
        ) {
            sledaThing[analyzedHistory.sleda] = analyzedHistory
        } else if (
            analyzedHistory.score < historyWithLowestScoreAmongHistoriesWithBestPossibleSleda.score &&
            (
                !scoreThing[analyzedHistory.score] ||
                analyzedHistory.sleda < scoreThing[analyzedHistory.score].sleda
            )
        ) {
            scoreThing[analyzedHistory.score] = analyzedHistory
        } else if (
            analyzedHistory.score === historyWithLowestScoreAmongHistoriesWithBestPossibleSleda.score &&
            analyzedHistory.sleda === historyWithLowestSledaAmongHistoriesWithBestPossibleScore.sleda
        ) {
            scoreThing[analyzedHistory.score] = analyzedHistory // just pick one or the other
        }
    })

    return Object.values(sledaThing).concat(Object.values(scoreThing))
}

module.exports = {
    computeBestPossibleHistories,
}
