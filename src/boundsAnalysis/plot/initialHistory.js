const {computeInitialPosition} = require("../data/initialPosition")

const computeInitialHistory = bound => {
    const initialPosition = computeInitialPosition(bound)

    return [{
        level: undefined,
        type: "INITIAL",
        name: "INITIAL",
        position: initialPosition,
    }]
}

module.exports = {
    computeInitialHistory,
}
