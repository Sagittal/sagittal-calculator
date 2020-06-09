const presentLevel = level => {
    const almost = level.toLowerCase()
        .replace(/(\_\w)/g, (match) => ` ${match[1].toUpperCase()}`)

    return almost.charAt(0)
        .toUpperCase() + almost.slice(1)
}

module.exports = {
    presentLevel,
}
