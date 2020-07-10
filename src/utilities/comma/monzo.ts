const parseMonzo = monzoString => {
    const preparsedMonzoString = monzoString
        .replace("⟩", "]")
        .replace(">", "]")
        .replace("|", "[")
        .replace("[ ", "[")
        .replace(" ]", "]")
        .replace(/\s/g, ",")

    return JSON.parse(preparsedMonzoString)
}

export {
    parseMonzo,
}
