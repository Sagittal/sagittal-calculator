const {computeSampleRange} = require("./sampleRange")

const computeAdjustmentsToCheck = (adjustmentSamples = {}) => {
    let adjustmentsToCheck = [ {} ]

    Object.entries(adjustmentSamples).forEach(([adjustmentKey, adjustmentSample]) => {
        let extendedAdjustmentsToCheck = []

        const sampleRange = computeSampleRange(adjustmentSample)
        if (!sampleRange.length) return

        adjustmentsToCheck.forEach(adjustmentToCheck => {
            sampleRange.forEach(samplePoint => {
                extendedAdjustmentsToCheck.push({ ...adjustmentToCheck, [adjustmentKey]: samplePoint })
            })
        })

        adjustmentsToCheck = extendedAdjustmentsToCheck
    })

    return adjustmentsToCheck
}

module.exports = {
    computeAdjustmentsToCheck,
}
