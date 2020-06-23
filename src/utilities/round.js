const round = (number, precision = 0) => {
    const rounder = 10 ** precision
    return Math.round(number * rounder) / rounder
}

module.exports = {
    round,
}
