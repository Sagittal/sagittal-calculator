const {calculateInitialPosition} = require("../data/calculateInitialPosition")

const calculateInitialHistory = bound => {
    const initialPosition = calculateInitialPosition(bound)

    return [{
        level: undefined,
        type: "INITIAL",
        name: "INITIAL",
        position: initialPosition,
    }]
}

module.exports = {
    calculateInitialHistory,
}
