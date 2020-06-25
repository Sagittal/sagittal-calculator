const parseRatio = ratioString => {
    const ratio = ratioString.split(/[\/:]/).map(n => parseInt(n))

    if (ratioString.includes(":")) {
        ratio.reverse()
    }

    return ratio
}

module.exports = {
    parseRatio,
}
