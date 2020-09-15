import { SYMBOL_CLASSES } from "../symbolClasses"
import { JiNotationLevel, JiNotationSymbolClass, JiNotationSymbolClassMetadata, Mina } from "./types"

const JI_NOTATION_SYMBOL_CLASS_METADATA: JiNotationSymbolClassMetadata[] = [
    {
        introducingJiNotationLevel: JiNotationLevel.MEDIUM,
        mina: 0 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 1 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 2 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 3 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 4 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 5 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 6 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 7 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 8 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 9 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 10 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 11 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.MEDIUM,
        mina: 12 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 13 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 14 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 15 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 16 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 17 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 18 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 19 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.MEDIUM,
        mina: 20 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 21 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 22 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 23 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 24 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 25 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 26 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 27 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 28 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 29 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.MEDIUM,
        mina: 30 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 31 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 32 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 33 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 34 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 35 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 36 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 37 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 38 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 39 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 40 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 41 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 42 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 43 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.MEDIUM,
        mina: 44 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 45 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 46 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 47 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 48 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 49 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 49.56756901073 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 50 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 51 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 51.458648572106 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 52 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 53 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 54 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 55 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.MEDIUM,
        mina: 56 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 57 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 58 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 59 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 60 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 61 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 62 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 63 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 64 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 65 as Mina,             // ^^^ Exception; all other Athenian symbols already introduced @ Medium precision
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 66 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 67 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.MEDIUM,
        mina: 68 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 69 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 70 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 71 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 72 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 72.4048681076285 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 73 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 74 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 75 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 76 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 77 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 78 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 78.3901455452392 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 79 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.MEDIUM,
        mina: 80 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 81 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 82 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 83 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 84 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 85 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 86 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 87 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.MEDIUM,
        mina: 88 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 89 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 90 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 91 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 92 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 93 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 94 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 95 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 96 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 97 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 98 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 99 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.MEDIUM,
        mina: 100 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 101 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 102 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 103 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 104 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 105 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 105.57202549664 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 106 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 107 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 108 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.MEDIUM,
        mina: 109 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 110 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 111 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 112 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 113 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 113.451709907417 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 114 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 115 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 116 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 117 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 118 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 119 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 120 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 120.700329647587 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 121 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 122 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 123 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.MEDIUM,
        mina: 124 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 125 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 126 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 127 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 128 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 128.580014058364 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.ULTRA,
        mina: 129 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 130 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 131 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 132 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.MEDIUM,
        mina: 133 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 134 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 135 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 136 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 137 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.HIGH,
        mina: 138 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 139 as Mina,
    },
    {
        introducingJiNotationLevel: JiNotationLevel.EXTREME,
        mina: 140 as Mina,
    },
]

const JI_NOTATION_SYMBOL_CLASSES: JiNotationSymbolClass[] = JI_NOTATION_SYMBOL_CLASS_METADATA
    .map((jiNotationSymbolClassMetadata: JiNotationSymbolClassMetadata, index: number): JiNotationSymbolClass => {
        return { ...jiNotationSymbolClassMetadata, ...SYMBOL_CLASSES[ index ] }
    })

export {
    JI_NOTATION_SYMBOL_CLASSES,
}
