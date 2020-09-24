import { Io } from "./types"

const removeColor = (io: Io): Io => {
    return io.replace(/\x1B\[\d+m/g, "") as Io
}

export {
    removeColor,
}
