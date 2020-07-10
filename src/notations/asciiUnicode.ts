import {SYMBOLS} from "./ji/symbols"

const unicodeFromAscii = ascii => {
    return SYMBOLS.find(symbol => symbol.ascii === ascii).unicode
}

export {
    unicodeFromAscii,
}
