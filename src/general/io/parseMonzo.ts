import { Monzo } from "../math"

const parseMonzo = (monzoString: string): Monzo => {
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
