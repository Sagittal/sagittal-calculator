(() => {
    const CLEF_AGNOSTIC_UNICODE_MAP = {
        "sp1": " ",   // U+200A   HAIR SPACE
        "sp2": " ",   // U+2009   THIN SPACE
        "sp3": "  ",  // U+2009 U+200A
        "sp4": " ",   // U+2005   FOUR-PER-EM SPACE
        "sp5": "  ",  // U+2005 U+200A
        "sp6": " ",   // U+2004   THREE-PER-EM SPACE
        "sp7": "  ",   // U+2004 U+200A
        "sp8": " ",   // U+2002   EN SPACE
        "sp9": "  ",   // U+2002 U+200A
        "sp10": " ",  // U+2008   PUNCTUATION SPACE
        "sp11": "  ",  // U+2008 U+200A
        "sp12": "　",  // U+3000   IDEOGRAPHIC SPACE
        "sp13": "　 ",  // U+3000 U+200A
        "sp14": " ",  // U+2001   EM QUAD (not in font yet)
        "sp15": "  ",  // U+2001 U+200A (not in font yet)
        "sp16": " ",  // U+2003   EM SPACE

        "ln8": "",  // staff lines
        "ln16": "",
        "ln24": "",

        "lgln": "",  // leger line

        "tbcf": "",  // treble clef
        "alcf": "",  // alto clef
        "bscf": "",  // bass clef

        "ntdb": "",  // double whole note
        "nt1": "",  // whole note
        "nt2": "",  // half note stem up
        "nt2dn": "",  // half note stem down
        "nt4": "",
        "nt4dn": "",
        "nt8": "",
        "nt8dn": "",

        "dt": "\uE1E7", // augmentation dot

        "ntbmst": "\uE1F0", // note for start of any beam (short stem)
        "ntbm8": "\uE1F2", // note for end of eighth beam, and possible continuation of any beam (short stem)
        "ntbm16": "\uE1F4", // note for end of sixteenth beam, and possible continuation of any beam (short stem)
        "bm8": "\uE1F7", // eighth beam continuation (for short stems)
        "bm16": "\uE1F9", // sixteenth beam continuation (for short stems)
        "tp3": "\uE1FF", // Tuplet digit 3 (for short stems)

        "h": "",  // natural
        "#": "",
        "b": "",
        "x": "",
        "bb": "",

        "|(": "",  // sagittals
        "!(": "",
        "/|": "",
        "\\!": "",
        "|)": "",
        "!)": "",
        "//|": "",
        "\\\\!": "",
        "/|)": "",
        "\\!)": "",
        "/|\\": "",
        "\\!/": "",
        "(|)": "",
        "(!)": "",
        "(|\\": "",
        "(!/": "",

        ")||(": "",
        ")!!(": "",
        "||)": "",
        "!!)": "",
        "||\\": "",
        "!!/": "",
        "/||)": "",
        "\\!!)": "",
        "/||\\": "",
        "\\!!/": "",
        "|||(": "",
        "!!!(": "",
        "/|||": "",
        "\\!!!": "",
        "|||)": "",
        "!!!)": "",
        "//|||": "",
        "\\\\!!!": "",
        "/|||)": "",
        "\\!!!)": "",
        "/|||\\": "",
        "\\!!!/": "",
        "(|||)": "",
        "(!!!)": "",
        "(|||\\": "",
        "(!!!/": "",
        ")X(": "",
        ")Y(": "",
        "X)": "",
        "Y)": "",
        "X\\": "",
        "Y/": "",
        "/X)": "",
        "\\Y)": "",
        "/X\\": "",
        "\\Y/": "",

        ")|(": "",
        ")!(": "",
        "~|(": "",
        "~!(": "",
        "|\\": "",
        "!/": "",
        "(|": "",
        "(!": "",
        "(|(": "",
        "(!(": "",
        "~||(": "",
        "~!!(": "",
        ")||~": "",
        ")!!~": "",
        "/||": "",
        "\\!!": "",
        "(||(": "",
        "(!!(": "",
        "//||": "",
        "\\\\!!": "",
        ")|||(": "",
        ")!!!(": "",
        "~|||(": "",
        "~!!!(": "",
        "|||\\": "",
        "!!!/": "",
        "(|||": "",
        "(!!!": "",
        "(|||(": "",
        "(!!!(": "",
        "~X(": "",
        "~Y(": "",
        ")X~": "",
        ")Y~": "",
        "/X": "",
        "\\Y": "",
        "(X(": "",
        "(Y(": "",
        "//X": "",
        "\\\\Y": "",

        "|~": "",
        "!~": "",
        ")/|": "",
        ")\\!": "",
        "/|~": "",
        "\\!~": "",
        "||~": "",
        "!!~": "",
        ")||)": "",
        ")!!)": "",
        "/||~": "",
        "\\!!~": "",
        "|||~": "",
        "!!!~": "",
        ")/|||": "",
        ")\\!!!": "",
        "/|||~": "",
        "\\!!!~": "",
        "X~": "",
        "Y~": "",
        ")X)": "",
        ")Y)": "",
        "/X~": "",
        "\\Y~": "",

        ")|": "",
        ")!": "",
        "~|": "",
        "~!": "",
        ")~|": "",
        ")~!": "",
        "~~|": "",
        "~~!": "",
        ")|~": "",
        ")!~": "",
        ")|)": "",
        ")!)": "",
        "~|)": "",
        "~!)": "",
        "~|\\": "",
        "~!/": "",
        ")//|": "",
        ")\\\\!": "",
        "(|~": "",
        "(!~": "",
        "(/|": "",
        "(\\!": "",
        ")/|\\": "",
        ")\\!/": "",
        "|\\)": "",
        "!/)": "",
        "|\\\\": "",
        "!//": "",
        ")|\\\\": "",
        ")!//": "",

        ")~||": "",
        ")~!!": "",
        "~~||": "",
        "~~!!": "",
        ")/||": "",
        ")\\!!": "",
        "(||": "",
        "(!!": "",
        "~||)": "",
        "~!!)": "",
        "~||\\": "",
        "~!!/": "",
        ")//||": "",
        ")\\\\!!": "",
        "(||~": "",
        "(!!~": "",
        ")|||": "",
        ")!!!": "",
        "~|||": "",
        "~!!!": "",
        ")~|||": "",
        ")~!!!": "",
        "~~|||": "",
        "~~!!!": "",
        ")|||~": "",
        ")!!!~": "",
        ")|||)": "",
        ")!!!)": "",
        "~|||)": "",
        "~!!!)": "",
        "~|||\\": "",
        "~!!!/": "",
        ")//|||": "",
        ")\\\\!!!": "",
        "(|||~": "",
        "(!!!~": "",
        "(/|||": "",
        "(\\!!!": "",
        ")/|||\\": "",
        ")\\!!!/": "",
        "|||\\)": "",
        "!!!/)": "",
        "|||\\\\": "",
        "!!!//": "",
        ")|||\\\\": "",
        ")!!!//": "",
        ")~X": "",
        ")~Y": "",
        "~~X": "",
        "~~Y": "",
        ")/X": "",
        ")\\Y": "",
        "(X": "",
        "(Y": "",
        "~X)": "",
        "~Y)": "",
        "~X\\": "",
        "~Y/": "",
        ")//X": "",
        ")\\\\Y": "",
        "(X~": "",
        "(Y~": "",

        "|": "",
        "!": "",
        "'": "",
        ".": "",

        "`": "",
        ",": "",
        "``": "",
        ",,": "",

        "@1": "",
        "l1": "",
        "@2": "",
        "l2": "",
        "@3": "",
        "l3": "",
        "@4": "",
        "l4": "",
        "@5": "",
        "l5": "",
        "@6": "",
        "l6": "",
        "@7": "",
        "l7": "",
        "@8": "",
        "l8": "",
        "@9": "",
        "l9": "",
        "@.": "",
        "l.": "",
    }

    const TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP = {
        "c6": "",          // U+EB97   staffPosRaise8
        "b5": "",          // U+EB96   staffPosRaise7
        "a5": "",          // U+EB95   staffPosRaise6
        "g5": "",          // U+EB94   staffPosRaise5
        "f5": "",          // U+EB93   staffPosRaise4
        "e5": "",          // U+EB92   staffPosRaise3
        "d5": "",          // U+EB91   staffPosRaise2
        "c5": "",          // U+EB90   staffPosRaise1
        "b4": "",          // N/A
        "a4": "",          // U+EB98   staffPosLower1
        "g4": "",          // U+EB99   staffPosLower2
        "f4": "",          // U+EB9A   staffPosLower3
        "e4": "",          // U+EB9B   staffPosLower4
        "d4": "",          // U+EB9C   staffPosLower5
        "c4": "",          // U+EB9D   staffPosLower6
        "b3": "",          // U+EB9E   staffPosLower7
        "a3": "",          // U+EB9F   staffPosLower8
    }

    const BASS_COMBINING_STAFF_POSITION_UNICODE_MAP = {
        "e4": "",          // U+EB97   staffPosRaise8
        "d4": "",          // U+EB96   staffPosRaise7
        "c4": "",          // U+EB95   staffPosRaise6
        "b3": "",          // U+EB94   staffPosRaise5
        "a3": "",          // U+EB93   staffPosRaise4
        "g3": "",          // U+EB92   staffPosRaise3
        "f3": "",          // U+EB91   staffPosRaise2
        "e3": "",          // U+EB90   staffPosRaise1
        "d3": "",          // N/A
        "c3": "",          // U+EB98   staffPosLower1
        "b2": "",          // U+EB99   staffPosLower2
        "a2": "",          // U+EB9A   staffPosLower3
        "g2": "",          // U+EB9B   staffPosLower4
        "f2": "",          // U+EB9C   staffPosLower5
        "e2": "",          // U+EB9D   staffPosLower6
        "d2": "",          // U+EB9E   staffPosLower7
        "c2": "",          // U+EB9F   staffPosLower8
    }

    const unicodeFromCode = userInput =>
        String.fromCharCode(parseInt(userInput.replace(/^u\+(.*)/, "0x$1")))

    const getUnicode = (userInput, clef) => {
        const CLEF_UNICODE_MAP = clef === "bass" ?
            BASS_COMBINING_STAFF_POSITION_UNICODE_MAP :
            TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP

        const INPUT_TO_UNICODE_MAP = {
            ...CLEF_AGNOSTIC_UNICODE_MAP,
            ...CLEF_UNICODE_MAP,
        }

        return INPUT_TO_UNICODE_MAP[userInput]
    }

    document.querySelectorAll("span.staff.unprocessed").forEach(staffSpan => {
        const clef = staffSpan.classList[2]

        staffSpan.classList.remove("unprocessed")

        const clefStuff = clef === "bass" ? "ln3 bclef ln3 sp2" :
            clef === "treble" ? "ln3 tclef ln3 sp2" : ""

        staffSpan.textContent = `${clefStuff}${staffSpan.textContent}`
            .toLowerCase()
            .replace(/<br>/g, " ")
            .replace(/\n/g, " ")
            .replace(/\t/g, " ")
            .split(" ")
            .map(userInput => {
                const unicode = getUnicode(userInput, clef)

                return unicode === undefined ?
                    userInput.match(/^u\+/) ?
                        unicodeFromCode(userInput) :
                        userInput :
                    unicode
            })
            .join("")
    })
})()
