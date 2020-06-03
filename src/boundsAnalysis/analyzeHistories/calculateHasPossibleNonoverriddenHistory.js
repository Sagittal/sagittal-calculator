const calculateHasPossibleNonoverriddenHistory = analyzedHistories =>
    analyzedHistories.some(analyzedHistory => analyzedHistory.possible && !analyzedHistory.overridden)

module.exports = {
    calculateHasPossibleNonoverriddenHistory
}
