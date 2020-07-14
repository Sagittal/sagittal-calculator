import { Level } from "../../../notations"

const presentLevel = (level: Level) => {
    const almost = level.toLowerCase()
        .replace(/(\_\w)/g,match => ` ${match[ 1 ].toUpperCase()}`)

    return almost.charAt(0)
        .toUpperCase() + almost.slice(1)
}

export {
    presentLevel,
}
