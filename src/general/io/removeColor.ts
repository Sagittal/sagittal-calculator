import { IO } from "./types"

const removeColor = (text: IO): IO => {
    return text.replace(/\[\d\dm/g, "") as IO
}

export {
    removeColor,
}
