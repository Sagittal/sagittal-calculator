import { isUndefined, Maybe } from "../../code"
import { colorize } from "../colorize"
import { ColorMethod, Io } from "../types"

const maybeColorize = (rowText: Io, rowIndex: number, colors: Maybe<Array<Maybe<ColorMethod>>>): Io => {
    if (isUndefined(colors)) {
        return rowText
    }

    const rowColor: Maybe<ColorMethod> = colors[ rowIndex ]

    return rowColor ? colorize(rowText, rowColor) : rowText
}

export {
    maybeColorize,
}
