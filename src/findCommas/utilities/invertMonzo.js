const invertMonzo = monzo =>
    monzo.map(term => -term)

module.exports = {
    invertMonzo,
}
