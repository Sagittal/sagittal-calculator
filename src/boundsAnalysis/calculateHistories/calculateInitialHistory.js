const {calculateInitialPosition} = require("../data/calculateInitialPosition")

const calculateInitialHistory = bound => {
  const initialPosition = calculateInitialPosition(bound)

  return [{
    level: "INITIAL",
    type: "INITIAL",
    name: "INITIAL",
    position: initialPosition,
  }]
}

module.exports = {
  calculateInitialHistory,
}
