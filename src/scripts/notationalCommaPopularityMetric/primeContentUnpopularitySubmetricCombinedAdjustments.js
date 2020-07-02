const computePrimeContentUnpopularitySubmetricCombinedAdjustments = primeContentUnpopularitySubmetricAdjustments => { // todo: I may want to make an effort to shorten some of these names
    let combinedAdjustments = [ {} ]

    Object.entries(primeContentUnpopularitySubmetricAdjustments).forEach(([submetricName, adjustments]) => { //todo: is there perhaps another place where I should use submetric name? i feel like i did a couple object.entries today
        let extendedCombinedAdjustments = []

        combinedAdjustments.forEach(combinedAdjustment => {
            adjustments.forEach(adjustment => {
                extendedCombinedAdjustments.push({ ...combinedAdjustment, [submetricName]: adjustment })
            })
        })

        combinedAdjustments = extendedCombinedAdjustments
    })

    return combinedAdjustments
}

module.exports = {
    computePrimeContentUnpopularitySubmetricCombinedAdjustments,
}
