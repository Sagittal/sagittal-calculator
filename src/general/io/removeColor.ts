import { Io } from "./types"

const removeColor = (text: Io): Io => {
    return text.replace(/\x1B\[\d+m/g, "") as Io
}

export {
    removeColor,
}
