import {deepEquals, isUndefined} from "@sagittal/general"
import {Accent, AccentId} from "../flacco"
import {Accidental, Compatible} from "../flavor"
import {
    ACCENT_TO_UNICODE_MAP,
    COMPATIBLE_TO_UNICODE_MAP,
    CORE_UNICODE_EQUIVALENTS,
    DOWN_ACCENT_TO_UNICODE_MAP,
    Unicode,
} from "../glyph"

const parseUnicode = (unicode: Unicode): Accidental => {
    let accidental = {} as Accidental

    for (let index = 0; index < unicode.length; index++) {
        const unicodeChar = unicode[index]
        const maybeCoreEquivalent = CORE_UNICODE_EQUIVALENTS
            .find((equivalent: {unicode: Unicode}): boolean => deepEquals(equivalent.unicode, unicodeChar))

        if (!isUndefined(maybeCoreEquivalent)) {
            accidental = {...accidental, ...maybeCoreEquivalent.core}

            if (accidental.down && !isUndefined(accidental.arm)) {
                accidental.arm = accidental.arm.map((accent: Accent): Accent => {
                    return {...accent, anti: !accent.anti}
                })
            }
        } else {
            const compatibleToUnicodeMapEntries =
                Object.entries(COMPATIBLE_TO_UNICODE_MAP) as Array<[Compatible, Unicode]>
            compatibleToUnicodeMapEntries.forEach(([entryCompatible, entryUnicode]: [Compatible, Unicode]): void => {
                if (unicodeChar === entryUnicode) {
                    accidental.compatible = entryCompatible
                }
            })

            const accentToUnicodeMapEntries =
                Object.entries(ACCENT_TO_UNICODE_MAP) as Array<[AccentId, Unicode]>
            accentToUnicodeMapEntries.forEach(([accentId, entryUnicode]: [AccentId, Unicode]): void => {
                if (unicodeChar === entryUnicode) {
                    accidental.arm = accidental.arm || []
                    accidental.arm.push({id: accentId})
                }
            })

            const downAccentToUnicodeMapEntries =
                Object.entries(DOWN_ACCENT_TO_UNICODE_MAP) as Array<[AccentId, Unicode]>
            downAccentToUnicodeMapEntries.forEach(([downAccentId, entryUnicode]: [AccentId, Unicode]): void => {
                if (unicodeChar === entryUnicode) {
                    accidental.arm = accidental.arm || []
                    accidental.arm.push({id: downAccentId, anti: true})
                }
            })
        }
    }

    return accidental
}

export {
    parseUnicode,
}
