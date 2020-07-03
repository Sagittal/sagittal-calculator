const {computeSampleBlock} = require("./sampleBlock")

const computeAdjustmentsToCheck = (adjustmentSampleBlockOptions = {}) => {
    let adjustmentsToCheck = [ {} ]

    Object.entries(adjustmentSampleBlockOptions).forEach(([adjustmentKey, sampleBlockOptions]) => {
        let extendedAdjustmentsToCheck = []

        const sampleBlock = computeSampleBlock(sampleBlockOptions)
        if (!sampleBlock.length) return

        adjustmentsToCheck.forEach(adjustmentToCheck => {
            sampleBlock.forEach(samplePoint => {
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
