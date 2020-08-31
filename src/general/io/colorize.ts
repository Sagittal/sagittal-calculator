import { ColorMethod, Io } from "./types"

const colorize = (text: Io, color: ColorMethod): Io => {
    // @ts-ignore
    return text[ color ] as Io
}

export {
    colorize,
}
