// todo: computeAdjustmentsToCheck should be handled inside computeCombinedSubmetricAdjustments I think... don't change its test though, just encapsulate another layer
const computeCombinedSubmetricAdjustments = primeContentUnpopularitySubmetricAdjustments => {
    let combinedAdjustments = [ {} ]

    Object.entries(primeContentUnpopularitySubmetricAdjustments).forEach(([submetricName, submetricAdjustments]) => {
        let extendedCombinedAdjustments = []

        combinedAdjustments.forEach(combinedAdjustment => {
            submetricAdjustments.forEach(submetricAdjustment => {
                extendedCombinedAdjustments.push({ ...combinedAdjustment, [submetricName]: submetricAdjustment })
            })
        })

        combinedAdjustments = extendedCombinedAdjustments
    })

    return combinedAdjustments
}

module.exports = {
    computeCombinedSubmetricAdjustments,
}
