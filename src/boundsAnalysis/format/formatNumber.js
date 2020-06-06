const {round} = require("../utilities/round")

const PRESENTATIONAL_ACCURACY = 3

const formatNumber = position =>
    round(position, PRESENTATIONAL_ACCURACY)
        .toPrecision(5)
        .replace(/\.(\d\d\d)0*$/, ".$1")

module.exports = {
    formatNumber: formatNumber,
}
