const primeContentUnpopularityAccountingForRatioImbalance = require("./primeContentUnpopularityAccountingForRatioImbalance")

const computeWeightedPrimeContentUnpopularitySubmetric = (fiveRoughRatio, adjustments = {}, submetricType = {}) => {
    const { weight = 0 } = adjustments // todo: test

    let primeContentUnpopularitySubmetric = 0
    if (weight !== 0) {
        primeContentUnpopularitySubmetric = primeContentUnpopularityAccountingForRatioImbalance
            .computePrimeContentUnpopularityAccountingForRatioImbalance(
                fiveRoughRatio,
                adjustments,
                submetricType,
            )
        // console.log('weight', weight, 'primeContentUnpopularitySubmetric', primeContentUnpopularitySubmetric)
    }

    return weight * primeContentUnpopularitySubmetric
}

module.exports = {
    computeWeightedPrimeContentUnpopularitySubmetric,
}
