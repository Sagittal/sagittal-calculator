import { ioSettings } from "./globals"
import { ColorMethod, Io } from "./types"

const colorize = (text: Io, color: ColorMethod): Io => {
    if (ioSettings.disableColors) return text

    // @ts-ignore
    return text[ color ] as Io
}

export {
    colorize,
}
