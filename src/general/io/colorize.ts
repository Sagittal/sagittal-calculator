import { ColorMethod, IO } from "./types"

const colorize = (text: IO, color: ColorMethod): IO => {
    // @ts-ignore
    return text[ color ] as IO
}

export {
    colorize,
}
