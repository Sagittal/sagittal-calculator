const {PARAMETER} = require("../constants")

const checkSubmetricCombinationForIssues = submetricCombination => {
    submetricCombination.forEach(submetric => {
        if(submetric[PARAMETER.A] === 1 && submetric[PARAMETER.A_IS_BASE_NOT_POWER]) {
            throw new Error("Submetric has base 1 and will calculate undefined antivotes.")
        }
        if(submetric[PARAMETER.A] < 0  && submetric[PARAMETER.A_IS_BASE_NOT_POWER]) {
            throw new Error("Submetric has negative base and will calculate undefined antivotes.")
        }
    })
}

module.exports = {
    checkSubmetricCombinationForIssues,
}
