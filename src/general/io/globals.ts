import { deepClone } from "../code"
import { INITIAL_IO_SETTINGS } from "./constants"
import { IoSettings } from "./types"

const ioSettings: IoSettings = deepClone(INITIAL_IO_SETTINGS)

export {
    ioSettings,
}
