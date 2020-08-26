import { ARRAY_EXTENSION_BASE, OBJECT_EXTENSION_BASE } from "./constants"
import { computeDeepClone } from "./deepClone"
import { ExtensionBaseType } from "./types"

const computeExtensionBase = (extensionBaseType: ExtensionBaseType) => {
    return extensionBaseType === ExtensionBaseType.ARRAY ?
        ARRAY_EXTENSION_BASE.slice() :
        computeDeepClone(OBJECT_EXTENSION_BASE)
}

export {
    computeExtensionBase,
}
