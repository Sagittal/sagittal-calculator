import { Io } from "./types"

const removeColor = (text: Io): Io => {
    return text.replace(/\[\d\dm/g, "") as Io
}

export {
    removeColor,
}
