/*
# staffCode

The `staffCode` script converts text codes for sheet music notation elements into SMuFL unicode
characters. You can use it to type things like:

a4 nt4 c5 nt4 e5 nt4

and see a chord displayed on a staff.

This script will find all elements on the page matching the CSS selector `span.staff.unprocessed`
and convert their `staffCode` from text to unicode. A modified version of the Bravura Text font
from Steinberg MediaTechnologies GmbH, designed by Daniel Spreadbury, is used to display as sheet
music notation. This project would not have been possible without the great work done on Bravura
Text, and its precursors Bravura and SMuFL. For more information see https://www.smufl.org/fonts/.

You may add an additional class to the span to indicate the clef. This will initiate a staff with
said clef, and also cause the note position modifiers to adjust for that clef. If no clef class
is provided, no clef will be displayed, and the note position modifiers will default to treble.

staffCode assumes your site loads the BravuraTextBB font. We suggest you locate it in your
assets/fonts folder. Please do not load it from another forum's assets, for your own performance.
*/

(() => {
    const CLEF_AGNOSTIC_UNICODE_MAP = {
        "sp1": " ",         // U+200A           HAIR SPACE
        "sp2": " ",         // U+2009           THIN SPACE
        "sp3": "  ",        // U+2009 U+200A
        "sp4": " ",         // U+2005           FOUR-PER-EM SPACE
        "sp5": "  ",        // U+2005 U+200A
        "sp6": " ",         // U+2004           THREE-PER-EM SPACE
        "sp7": "  ",        // U+2004 U+200A
        "sp8": " ",         // U+2002           EN SPACE
        "sp9": "  ",        // U+2002 U+200A
        "sp10": " ",        // U+2008           PUNCTUATION SPACE
        "sp11": "  ",       // U+2008 U+200A
        "sp12": "　",        // U+3000           IDEOGRAPHIC SPACE
        "sp13": "　 ",       // U+3000 U+200A
        "sp14": " ",        // U+2001           EM QUAD (not in font yet)
        "sp15": "  ",       // U+2001 U+200A    (not in font yet)
        "sp16": " ",        // U+2003           EM SPACE

        // staff lines
        "st8": "",         // U+E020
        "st16": "",        // U+E014
        "st24": "",        // U+E01A
        "st": "",

        "lgln": "",        // U+E022           leger line

        // clefs
        "tbcf": "",        // U+E050           treble
        "alcf": "",        // U+E05C           alto
        "bscf": "",        // U+E062           bass

        "ntdb": "",        // U+E1D0           double whole note
        "nt1": "",         // U+E1D2           whole note
        "nt2": "",         // U+E1D3           half note stem up
        "nt2dn": "",       // U+E1D4           half note stem down
        "nt4": "",         // U+E1D5           quarter note stem up
        "nt4dn": "",       // U+E1D6           quarter note stem down
        "nt8": "",         // U+E1D7           quarter note stem up
        "nt8dn": "",       // U+E1D8           quarter note stem down
        "nt16": "",        // U+E1D9           sixteenth note stem up
        "nt16dn": "",      // U+E1DA           sixteenth note stem down

        "dt": "",          // U+E1E7           augmentation dot
        "agdt": "",

        // Beamed groups of notes
        // https://w3c.github.io/smufl/gitbook/tables/beamed-groups-of-notes.html
        "ntbmst": "",      // U+E1F0           note for start of any beam (short stem)
        "ntbm8": "",       // U+E1F2           note for end of eighth beam, and possible continuation of any beam (short stem)
        "ntbm16": "",      // U+E1F4           note for end of sixteenth beam, and possible continuation of any beam (short stem)
        "bm8": "",         // U+E1F7           eighth beam continuation (for short stems)
        "bm16": "",        // U+E1F9           sixteenth beam continuation (for short stems)
        "tp3": "",         // U+E1FF           tuplet digit 3 (for short stems)

        "rsdb": "",        // U+E4E2           double whole rest
        "rs1": "",         // U+E4E3           whole rest
        "rs2": "",         // U+E4E4           half rest
        "rs4": "",         // U+E4E5           quarter rest
        "rs8": "",         // U+E4E6           eighth rest
        "rs16": "",        // U+E4E6           sixteenth rest

        "brln": "",        // U+E030           bar line (single)
        "brlndb": "",      // U+E031           bar line double

        "8va": "",         // U+E512           octave above
        "8vb": "",         // U+E51C           octave below

        "tm0": "",         // U+E080           time signature digit 0
        "tm1": "",         // U+E081           time signature digit 1
        "tm2": "",         // U+E082           time signature digit 2
        "tm3": "",         // U+E083           time signature digit 3
        "tm4": "",         // U+E084           time signature digit 4
        "tm5": "",         // U+E085           time signature digit 5
        "tm6": "",         // U+E086           time signature digit 6
        "tm7": "",         // U+E087           time signature digit 7
        "tm8": "",         // U+E088           time signature digit 8
        "tm9": "",         // U+E089           time signature digit 9

        "tmcm": "",        // U+E08A           common time

        "tmnm": "",        // U+E09E           time signature combining numerator position
        "tmdn": "",        // U+E09F           time signature combining denominator position

        // conventional compatibles
        "h": "",           // U+E261           natural
        "n": "",
        "#": "",           // U+E262           sharp
        "b": "",           // U+E260           flat
        "x": "",           // U+E47D           double sharp
        "bb": "",          // U+E264           double flat

        // sagittals
        "|(": "",          // U+E300           5:7 kleisma up, (5:7k, ~11:13k, 7C less 5C)
        "!(": "",          // U+E301           5:7 kleisma down
        "/|": "",          // U+E302           5 comma up, (5C), 1° up [22 27 29 34 41 46 53 96-EDOs], 1/12-tone up
        "\\!": "",         // U+E303           5 comma down, 1° down [22 27 29 34 41 46 53 96-EDOs], 1/12-tone down
        "|)": "",          // U+E304           7 comma up, (7C), 1° up [43-EDO], 2° up [72-EDO], 1/6-tone up
        "!)": "",          // U+E305           7 comma down, 1° down [43-EDO], 2° down [72-EDO], 1/6-tone down
        "//|": "",         // U+E306           25 small diesis up, (25S, ~5:13S, ~37S, 5C plus 5C), 2° up [53-EDO]
        "\\\\!": "",       // U+E307           25 small diesis down, 2° down [53-EDO]
        "/|)": "",         // U+E308           35 medium diesis up, (35M, ~13M, ~125M, 5C plus 7C), 2/9-tone up
        "\\!)": "",        // U+E309           35 medium diesis down, 1°[50] 2°[27] down, 2/9-tone down
        "/|\\": "",        // U+E30A           11 medium diesis up, (11M), 1°[17 31] 2°46 up, 1/4-tone up
        "\\!/": "",        // U+E30B           11 medium diesis down, 1°[17 31] 2°46 down, 1/4-tone down
        "(|)": "",         // U+E30C           11 large diesis up, (11L), (sharp less 11M), 3° up [46-EDO]
        "(!)": "",         // U+E30D           11 large diesis down, 3° down [46-EDO]
        "(|\\": "",        // U+E30E           35 large diesis up, (35L, ~13L, ~125L, sharp less 35M), 2°50 up
        "(!/": "",         // U+E30F           35 large diesis down, 2° down [50-EDO], 5/18-tone down

        ")||(": "",        // U+E310           Sharp 25S-down, 3° up [53-EDO]
        ")!!(": "",        // U+E311           Flat 25S-up, 3° down [53-EDO]
        "||)": "",         // U+E312           Sharp 7C-down, 2° up [43-EDO], 4° up [72-EDO], 1/3-tone up
        "!!)": "",         // U+E313           Flat 7C-up, 2° down [43-EDO], 4° down [72-EDO], 1/3-tone down
        "||\\": "",        // U+E314           Sharp 5C-down, 2°[22 29] 3°[27 34 41] 4°[39 46 53] 5°[72] 7°[96] up, 5/12-tone up
        "!!/": "",         // U+E315           Flat 5C-up, 2°[22 29] 3°[27 34 41] 4°[39 46 53] 5°[72] 7°[96] down, 5/12-tone down
        "/||)": "",        // U+E316           Sharp 5:7k-down
        "\\!!)": "",       // U+E317           Flat 5:7k-up
        "/||\\": "",       // U+E318           Sharp, (apotome up)[almost all-EDOs], 1/2-tone up
        "\\!!/": "",       // U+E319           Flat, (apotome down)[almost all-EDOs], 1/2-tone down
        "|||(": "",        // U+E31C           Sharp 5:7k-up
        "!!!(": "",        // U+E31D           Flat 5:7k-down
        "/|||": "",        // U+E31E           Sharp 5C-up, 4°[22 29] 5°[27 34 41] 6°[39 46 53] up, 7/12-tone up
        "\\!!!": "",       // U+E31F           Flat 5C-down, 4°[22 29] 5°[27 34 41] 6°[39 46 53] down, 7/12-tone down
        "|||)": "",        // U+E320           Sharp 7C-up, 4° up [43-EDO], 8° up [72-EDO], 2/3-tone up
        "!!!)": "",        // U+E321           Flat 7C-down, 4° down [43-EDO], 8° down [72-EDO], 2/3-tone down
        "//|||": "",       // U+E322           Sharp 25S-up, 7° up [53-EDO]
        "\\\\!!!": "",     // U+E323           Flat 25S-down, 7° down [53-EDO]
        "/|||)": "",       // U+E324           Sharp 35M-up, 4° up [50-EDO], 6° up [27-EDO], 13/18-tone up
        "\\!!!)": "",      // U+E325           Flat 35M-down, 4° down [50-EDO], 6° down [27-EDO], 13/18-tone down
        "/|||\\": "",      // U+E326           Sharp 11M-up, 3° up [17 31-EDOs], 7° up [46-EDO], 3/4-tone up
        "\\!!!/": "",      // U+E327           Flat 11M-down, 3° down [17 31-EDOs], 7° down [46-EDO], 3/4-tone down
        "(|||)": "",       // U+E328           Sharp 11L-up, 8° up [46-EDO]
        "(!!!)": "",       // U+E329           Flat 11L-down, 8° up [46-EDO]
        "(|||\\": "",      // U+E32A           Sharp 35L-up, 5° up [50-EDO]
        "(!!!/": "",       // U+E32B           Flat 35L-down, 5° down [50-EDO]
        ")X(": "",         // U+E32C           Double sharp 25S-down, 8°up [53-EDO]
        ")Y(": "",         // U+E32D           Double flat 25S-up, 8°down [53-EDO]
        "X)": "",          // U+E32E           Double sharp 7C-down, 5°[43] 10°[72] up, 5/6-tone up
        "Y)": "",          // U+E32F           Double flat 7C-up, 5° down [43-EDO], 10° down [72-EDO], 5/6-tone down
        "X\\": "",         // U+E330           Double sharp 5C-down, 5°[22 29] 7°[34 41] 9°53 up, 11/12 tone up
        "Y/": "",          // U+E331           Double flat 5C-up, 5°[22 29] 7°[34 41] 9°53 down, 11/12 tone down
        "/X)": "",         // U+E332           Double sharp 5:7k-down
        "\\Y)": "",        // U+E333           Double flat 5:7k-up
        "/X\\": "",        // U+E334           Double sharp, (2 apotomes up)[almost all-EDOs], whole-tone up
        "\\Y/": "",        // U+E335           Double flat, (2 apotomes down)[almost all-EDOs], whole-tone down

        ")|(": "",         // U+E340           7:11 kleisma up, (7:11k)
        ")!(": "",         // U+E341           7:11 kleisma down
        "~|(": "",         // U+E342           17 comma up, (17C)
        "~!(": "",         // U+E343           17 comma down
        "|\\": "",         // U+E344           55 comma up, (55C, 11M less 5C), 3°up [96-EDO], 3/16-tone up
        "!/": "",          // U+E345           55 comma down, 3° down [96-EDO], 3/16-tone down
        "(|": "",          // U+E346           7:11 comma up, (7:11C, ~13:17S, ~29S, 11L less 7C), 1° up [60-EDO]
        "(!": "",          // U+E347           7:11 comma down, 1° down [60-EDO], 1/10-tone down
        "(|(": "",         // U+E348           5:11 small diesis up, (5:11S, ~7:13S, ~11:17S, 5:7k plus 7:11C)
        "(!(": "",         // U+E349           5:11 small diesis down
        "~||(": "",        // U+E34A           Sharp 5:11S-down
        "~!!(": "",        // U+E34B           Flat 5:11S-up
        ")||~": "",        // U+E34C           Sharp 7:11C-down, 4° up [60-EDO], 2/5-tone up
        ")!!~": "",        // U+E34D           Flat 7:11C-up, 4° down [60-EDO], 2/5-tone down
        "/||": "",         // U+E34E           Sharp 55C-down, 5° up [96-EDO], 5/16-tone up
        "\\!!": "",        // U+E34F           Flat 55C-up, 5° down [96-EDO], 5/16-tone down
        "(||(": "",        // U+E350           Sharp 17C-down
        "(!!(": "",        // U+E351           Flat 17C-up
        "//||": "",        // U+E352           Sharp 7:11k-down
        "\\\\!!": "",      // U+E353           Flat 7:11k-up
        ")|||(": "",       // U+E354           Sharp 7:11k-up
        ")!!!(": "",       // U+E355           Flat 7:11k-down
        "~|||(": "",       // U+E356           Sharp 17C-up
        "~!!!(": "",       // U+E357           Flat 17C-down
        "|||\\": "",       // U+E358           Sharp 55C-up, 11° up [96-EDO], 11/16-tone up
        "!!!/": "",        // U+E359           Flat 55C-down, 11° down [96-EDO], 11/16-tone down
        "(|||": "",        // U+E35A           Sharp 7:11C-up, 6° up [60-EDO], 3/5- tone up
        "(!!!": "",        // U+E35B           Flat 7:11C-down, 6° down [60-EDO], 3/5- tone down
        "(|||(": "",       // U+E35C           Sharp 5:11S-up
        "(!!!(": "",       // U+E35D           Flat 5:11S-down
        "~X(": "",         // U+E35E           Double sharp 5:11S-down
        "~Y(": "",         // U+E35F           Double flat 5:11S-up
        ")X~": "",         // U+E360           Double sharp 7:11C-down, 9° up [60-EDO], 9/10-tone up
        ")Y~": "",         // U+E361           Double flat 7:11C-up, 9° down [60-EDO], 9/10-tone down
        "/X": "",          // U+E362           Double sharp 55C-down, 13° up [96-EDO], 13/16-tone up
        "\\Y": "",         // U+E363           Double flat 55C-up, 13° down [96-EDO], 13/16-tone down
        "(X(": "",         // U+E364           Double sharp 17C-down
        "(Y(": "",         // U+E365           Double flat 17C-up
        "//X": "",         // U+E366           Double sharp 7:11k-down
        "\\\\Y": "",       // U+E367           Double flat 7:11k-up

        "|~": "",          // U+E370           23 comma up, (23C), 2° up [96-EDO], 1/8-tone up
        "!~": "",          // U+E371           23 comma down, 2° down [96-EDO], 1/8-tone down
        ")/|": "",         // U+E372           5:19 comma up, (5:19C, 5C plus 19s), 1/20-tone up
        ")\\!": "",        // U+E373           5:19 comma down, 1/20-tone down
        "/|~": "",         // U+E374           5:23 small diesis up, (5:23S, 5C plus 23C), 2° up [60-EDO], 1/5-tone up
        "\\!~": "",        // U+E375           5:23 small diesis down, 2° down [60-EDO], 1/5-tone down
        "||~": "",         // U+E376           Sharp 5:23S-down, 3° up [60-EDO], 3/10-tone up
        "!!~": "",         // U+E377           Flat 5:23S-up, 3° down [60-EDO], 3/10-tone down
        ")||)": "",        // U+E378           Sharp 5:19C-down, 9/20-tone up
        ")!!)": "",        // U+E379           Flat 5:19C-up, 9/20-tone down
        "/||~": "",        // U+E37A           Sharp 23C-down, 6° up [96-EDO], 3/8-tone up
        "\\!!~": "",       // U+E37B           Flat 23C-up, 6° down [96-EDO], 3/8-tone down
        "|||~": "",        // U+E37C           Sharp 23C-up, 10° up [96-EDO], 5/8-tone up
        "!!!~": "",        // U+E37D           Flat 23C-down, 10° down [96-EDO], 5/8-tone down
        ")/|||": "",       // U+E37E           Sharp 5:19C-up, 11/20-tone up
        ")\\!!!": "",      // U+E37F           Flat 5:19C-down, 11/20-tone down
        "/|||~": "",       // U+E380           Sharp 5:23S-up, 7° up [60-EDO], 7/10-tone up
        "\\!!!~": "",      // U+E381           Flat 5:23S-down, 7° down [60-EDO], 7/10-tone down
        "X~": "",          // U+E382           Double sharp 5:23S-down, 8° up [60-EDO], 4/5-tone up
        "Y~": "",          // U+E383           Double flat 5:23S-up, 8° down [60-EDO], 4/5-tone down
        ")X)": "",         // U+E384           Double sharp 5:19C-down, 19/20-tone up
        ")Y)": "",         // U+E385           Double flat 5:19C-up, 19/20-tone down
        "/X~": "",         // U+E386           Double sharp 23C-down, 14°up [96-EDO], 7/8-tone up
        "\\Y~": "",        // U+E387           Double flat 23C-up, 14° down [96-EDO], 7/8-tone down

        ")|": "",          // U+E390           19 schisma up, (19s)
        ")!": "",          // U+E391           19 schisma down
        "~|": "",          // U+E392           17 kleisma up, (17k)
        "~!": "",          // U+E393           17 kleisma down
        ")~|": "",         // U+E394           143 comma up, (143C, 13L less 11M)
        ")~!": "",         // U+E395           143 comma down
        "~~|": "",         // U+E396           11:49 comma up, (11:49C, 11M less 49S)
        "~~!": "",         // U+E397           11:49 comma down
        ")|~": "",         // U+E398           19 comma up, (19C)
        ")!~": "",         // U+E399           19 comma down
        ")|)": "",         // U+E39A           7:19 comma up, (7:19C, 7C less 19s)
        ")!)": "",         // U+E39B           7:19 comma down
        "~|)": "",         // U+E39C           49 small diesis up, (49S, ~31S)
        "~!)": "",         // U+E39D           49 small diesis down
        "~|\\": "",        // U+E39E           23 small diesis up, (23S)
        "~!/": "",         // U+E39F           23 small diesis down
        ")//|": "",        // U+E3A0           5:13 medium diesis up, (5:13M, ~37M, 5C plus 13C)
        ")\\\\!": "",      // U+E3A1           5:13 medium diesis down
        "(|~": "",         // U+E3A2           11:19 medium diesis up, (11:19M, 11M plus 19s)
        "(!~": "",         // U+E3A3           11:19 medium diesis down
        "(/|": "",         // U+E3A4           49 medium diesis up, (49M, ~31M, 7C plus 7C)
        "(\\!": "",        // U+E3A5           49 medium diesis down
        ")/|\\": "",       // U+E3A6           5:49 medium diesis up, (5:49M, half apotome)
        ")\\!/": "",       // U+E3A7           5:49 medium diesis down
        "|\\)": "",        // U+E3A8           49 large diesis up, (49L, ~31L, apotome less 49M)
        "!/)": "",         // U+E3A9           49 large diesis down
        "|\\\\": "",       // U+E3AA           11:19 large diesis up, (11:19L, apotome less 11:19M)
        "!//": "",         // U+E3AB           11:19 large diesis down
        ")|\\\\": "",      // U+E3AC           5:13 large diesis up, (5:13L, ~37L, apotome less 5:13M)
        ")!//": "",        // U+E3AD           5:13 large diesis down

        ")~||": "",        // U+E3B0           Sharp 23S-down
        ")~!!": "",        // U+E3B1           Flat 23S-up
        "~~||": "",        // U+E3B2           Sharp 49S-down
        "~~!!": "",        // U+E3B3           Flat 49S-up
        ")/||": "",        // U+E3B4           Sharp 7:19C-down
        ")\\!!": "",       // U+E3B5           Flat 7:19C-up
        "(||": "",         // U+E3B6           Sharp 19C-down
        "(!!": "",         // U+E3B7           Flat 19C-up
        "~||)": "",        // U+E3B8           Sharp 11:49C-down
        "~!!)": "",        // U+E3B9           Flat 11:49C-up
        "~||\\": "",       // U+E3BA           Sharp 143C-down
        "~!!/": "",        // U+E3BB           Flat 143C-up
        ")//||": "",       // U+E3BC           Sharp 17k-down
        ")\\\\!!": "",     // U+E3BD           Flat 17k-up
        "(||~": "",        // U+E3BE           Sharp 19s-down
        "(!!~": "",        // U+E3BF           Flat 19s-up
        ")|||": "",        // U+E3C0           Sharp 19s-up
        ")!!!": "",        // U+E3C1           Flat 19s-down
        "~|||": "",        // U+E3C2           Sharp 17k-up
        "~!!!": "",        // U+E3C3           Flat 17k-down
        ")~|||": "",       // U+E3C4           Sharp 143C-up
        ")~!!!": "",       // U+E3C5           Flat 143C-down
        "~~|||": "",       // U+E3C6           Sharp 11:49C-up
        "~~!!!": "",       // U+E3C7           Flat 11:49C-down
        ")|||~": "",       // U+E3C8           Sharp 19C-up
        ")!!!~": "",       // U+E3C9           Flat 19C-down
        ")|||)": "",       // U+E3CA           Sharp 7:19C-up
        ")!!!)": "",       // U+E3CB           Flat 7:19C-down
        "~|||)": "",       // U+E3CC           Sharp 49S-up
        "~!!!)": "",       // U+E3CD           Flat 49S-down
        "~|||\\": "",      // U+E3CE           Sharp 23S-up
        "~!!!/": "",       // U+E3CF           Flat 23S-down
        ")//|||": "",      // U+E3D0           Sharp 5:13M-up
        ")\\\\!!!": "",    // U+E3D1           Flat 5:13M-down
        "(|||~": "",       // U+E3D2           Sharp 11:19M-up
        "(!!!~": "",       // U+E3D3           Flat 11:19M-down
        "(/|||": "",       // U+E3D4           Sharp 49M-up
        "(\\!!!": "",      // U+E3D5           Flat 49M-down
        ")/|||\\": "",     // U+E3D6           Sharp 5:49M-up, (one and a half apotomes)
        ")\\!!!/": "",     // U+E3D7           Flat 5:49M-down
        "|||\\)": "",      // U+E3D8           Sharp 49L-up
        "!!!/)": "",       // U+E3D9           Flat 49L-down
        "|||\\\\": "",     // U+E3DA           Sharp 11:19L-up
        "!!!//": "",       // U+E3DB           Flat 11:19L-down
        ")|||\\\\": "",    // U+E3DC           Sharp 5:13L-up
        ")!!!//": "",      // U+E3DD           Flat 5:13L-down
        ")~X": "",         // U+E3E0           Double sharp 23S-down
        ")~Y": "",         // U+E3E1           Double flat 23S-up
        "~~X": "",         // U+E3E2           Double sharp 49S-down
        "~~Y": "",         // U+E3E3           Double flat 49S-up
        ")/X": "",         // U+E3E4           Double sharp 7:19C-down
        ")\\Y": "",        // U+E3E5           Double flat 7:19C-up
        "(X": "",          // U+E3E6           Double sharp 19C-down
        "(Y": "",          // U+E3E7           Double flat 19C-up
        "~X)": "",         // U+E3E8           Double sharp 11:49C-down
        "~Y)": "",         // U+E3E9           Double flat 11:49C-up
        "~X\\": "",        // U+E3EA           Double sharp 143C-down
        "~Y/": "",         // U+E3EB           Double flat 143C-up
        ")//X": "",        // U+E3EC           Double sharp 17k-down
        ")\\\\Y": "",      // U+E3ED           Double flat 17k-up
        "(X~": "",         // U+E3EE           Double sharp 19s-down
        "(Y~": "",         // U+E3EF           Double flat 19s-up

        "|": "",           // U+E3F0           Shaft up, (natural for use with only diacritics up)
        "!": "",           // U+E3F1           Shaft down, (natural for use with only diacritics down)
        "'": "",           // U+E3F2           Acute, 5 schisma up (5s), 2 cents up
        ".": "",           // U+E3F3           Grave, 5 schisma down, 2 cents down

        "`": "",           // U+E3F4           1 mina up, 5.7.13-schismina up, 0.42 cents up
        ",": "",           // U+E3F5           1 mina down, 5.7.13-schismina down, 0.42 cents down
        "``": "",          // U+E3F6           2 minas up, 65:77-schismina up, 0.83 cents up
        ",,": "",          // U+E3F7           2 minas down, 65:77-schismina down, 0.83 cents down

        "@1": "",          // U+E3F8           1 tina up, 7²⋅11⋅19/5-schismina up, 0.17 cents up
        "l1": "",          // U+E3F9           1 tina down, 7²⋅11⋅19/5-schismina down, 0.17 cents down
        "@2": "",          // U+E3FA           2 tinas up, 1/(7³⋅17)-schismina up, 0.30 cents up
        "l2": "",          // U+E3FB           2 tinas down, 1/(7³⋅17)-schismina down, 0.30 cents down
        "@3": "",          // U+E3FC           3 tinas up, 1 mina up, 1/(5⋅7⋅13)-schismina up, 0.42 cents up
        "l3": "",          // U+E3FD           3 tinas down, 1 mina down, 1/(5⋅7⋅13)-schismina down, 0.42 cents down
        "@4": "",          // U+E3FE           4 tinas up, 5²⋅11²/7-schismina up, 0.57 cents up
        "l4": "",          // U+E3FF           4 tinas down, 5²⋅11²/7-schismina down, 0.57 cents down
        "@5": "",          // U+E400           5 tinas up, 7⁴/25-schismina up, 0.72 cents up
        "l5": "",          // U+E401           5 tinas down, 7⁴/25-schismina down, 0.72 cents down
        "@6": "",          // U+E402           6 tinas up, 2 minas up, 65/77-schismina up, 0.83 cents up
        "l6": "",          // U+E403           6 tinas down, 2 minas down, 65/77-schismina down, 0.83 cents down
        "@7": "",          // U+E404           7 tinas up, 7/(5²⋅17)-schismina up, 1.02 cents up
        "l7": "",          // U+E405           7 tinas down, 7/(5²⋅17)-schismina down, 1.02 cents down
        "@8": "",          // U+E406           8 tinas up, 11⋅17/(5²⋅7)-schismina up, 1.14 cents up
        "l8": "",          // U+E407           8 tinas down, 11⋅17/(5²⋅7)-schismina down, 1.14 cents down
        "@9": "",          // U+E408           9 tinas up, 1/(7²⋅11)-schismina up, 1.26 cents up
        "l9": "",          // U+E409           9 tinas down, 1/(7²⋅11)-schismina down, 1.26 cents down
        "@.": "",          // U+E40A           fractional tina up, 77/(5⋅37)-schismina up, 0.08 cents up
        "l.": "",          // U+E40B           fractional tina down, 77/(5⋅37)-schismina down, 0.08 cents down

        // unconventional Sagittal-compatibles
        // https://w3c.github.io/smufl/gitbook/tables/stein-zimmermann-accidentals-24-edo.html
        // https://w3c.github.io/smufl/gitbook/tables/other-accidentals.html
        ">": "",           // U+E282           Half sharp (quarter-tone sharp) (Stein)
        "<": "",           // U+E284           Narrow reversed flat (quarter-tone flat)
        ">#": "",          // U+E283           One and a half sharps (three-quarter-tones sharp) (Stein)
        "<b": "",          // U+E285           Narrow reversed flat and flat (three-quarter-tones flat)
        "+": "",           // U+E47B           Wilson plus (5 comma up)
        "-": "",           // U+E47C           Wilson minus (5 comma down)

        // ups and downs
        // https://w3c.github.io/smufl/gitbook/tables/arrows-and-arrowheads.html
        "^": "",           // U+EB88
        "v": "",           // U+EB8C

        // EHEJIPN
        // https://w3c.github.io/smufl/gitbook/tables/extended-helmholtz-ellis-accidentals-just-intonation.html
        // All EHEJIPN staffCodes start with a dot (full-stop). Unicodes are successive below.
        ".bbv": "",        // U+E2C0
        ".bv": "",         // U+E2C1
        ".hv": "",         // U+E2C2
        ".#v": "",         // U+E2C3
        ".xv": "",         // U+E2C4
        ".bb^": "",        // U+E2C5
        ".b^": "",         // U+E2C6
        ".h^": "",         // U+E2C7
        ".#^": "",         // U+E2C8
        ".x^": "",         // U+E2C9
        ".bbvv": "",       // U+E2CA
        ".bvv": "",        // U+E2CB
        ".hvv": "",        // U+E2CC
        ".#vv": "",        // U+E2CD
        ".xvv": "",        // U+E2CE
        ".bb^^": "",       // U+E2CF
        ".b^^": "",        // U+E2D0
        ".h^^": "",        // U+E2D1
        ".#^^": "",        // U+E2D2
        ".x^^": "",        // U+E2D3
        ".bbvvv": "",      // U+E2D4
        ".bvvv": "",       // U+E2D5
        ".hvvv": "",       // U+E2D6
        ".#vvv": "",       // U+E2D7
        ".xvvv": "",       // U+E2D8
        ".bb^^^": "",      // U+E2D9
        ".b^^^": "",       // U+E2DA
        ".h^^^": "",       // U+E2DB
        ".#^^^": "",       // U+E2DC
        ".x^^^": "",       // U+E2DD
        ".l": "",          // U+E2DE           lowercase L here, but people would type it uppercase
        ".p": "",          // U+E2DF           people would type it uppercase
        ".ll": "",         // U+E2E0           lowercase LL here, but people would type them uppercase
        ".pp": "",         // U+E2E1           people would type them uppercase
        ".<": "",          // U+E2E2
        ".>": "",          // U+E2E3
        ".<|": "",         // U+E2E4
        ".>|": "",         // U+E2E5
        ".\\\\": "",       // U+E2E6
        ".//": "",         // U+E2E7
        ".\\": "",         // U+E2E8
        "./": "",          // U+E2E9
        ".^": "",          // U+E2EA
        ".v": "",          // U+E2EB
        ".-": "",          // U+E2EC
        ".+": "",          // U+E2ED
        ".{": "",          // U+E2EE
        ".}": "",          // U+E2EF
        ".bbt": "",        // U+E2F0
        ".bt": "",         // U+E2F1
        ".ht": "",         // U+E2F2
        ".#t": "",         // U+E2F3
        ".xt": "",         // U+E2F4
        ".<t": "",         // U+E2F5
        ".>t": "",         // U+E2F6
        ".\\\\\\": "",     // U+E2F7
        ".///": "",        // U+E2F8
        ".~": "",          // U+E2F9
        ".~~": "",         // U+E2FA
        ".=": "",          // U+E2FB

        // For convenience of EHEJIPN users, standard accidentals with dots at the start of their codes
        // https://w3c.github.io/smufl/gitbook/tables/standard-accidentals-12-edo.html
        ".bb": "",         // U+E264
        ".b": "",          // U+E260
        ".h": "",          // U+E261
        ".#": "",          // U+E262
        ".x": "",          // U+E263            Small double-sharp, not the same as "x" or "X", which is the (sagittal-compatible) large double-sharp
    }

    const TREBLE_COMBINING_STAFF_POSITION_UNICODE_MAP = {
        "c6": "",          // U+EB97           staffPosRaise8
        "b5": "",          // U+EB96           staffPosRaise7
        "a5": "",          // U+EB95           staffPosRaise6
        "g5": "",          // U+EB94           staffPosRaise5
        "f5": "",          // U+EB93           staffPosRaise4
        "e5": "",          // U+EB92           staffPosRaise3
        "d5": "",          // U+EB91           staffPosRaise2
        "c5": "",          // U+EB90           staffPosRaise1
        "b4": "",          // N/A
        "a4": "",          // U+EB98           staffPosLower1
        "g4": "",          // U+EB99           staffPosLower2
        "f4": "",          // U+EB9A           staffPosLower3
        "e4": "",          // U+EB9B           staffPosLower4
        "d4": "",          // U+EB9C           staffPosLower5
        "c4": "",          // U+EB9D           staffPosLower6
        "b3": "",          // U+EB9E           staffPosLower7
        "a3": "",          // U+EB9F           staffPosLower8
    }

    const BASS_COMBINING_STAFF_POSITION_UNICODE_MAP = {
        "e4": "",          // U+EB97           staffPosRaise8
        "d4": "",          // U+EB96           staffPosRaise7
        "c4": "",          // U+EB95           staffPosRaise6
        "b3": "",          // U+EB94           staffPosRaise5
        "a3": "",          // U+EB93           staffPosRaise4
        "g3": "",          // U+EB92           staffPosRaise3
        "f3": "",          // U+EB91           staffPosRaise2
        "e3": "",          // U+EB90           staffPosRaise1
        "d3": "",          // N/A
        "c3": "",          // U+EB98           staffPosLower1
        "b2": "",          // U+EB99           staffPosLower2
        "a2": "",          // U+EB9A           staffPosLower3
        "g2": "",          // U+EB9B           staffPosLower4
        "f2": "",          // U+EB9C           staffPosLower5
        "e2": "",          // U+EB9D           staffPosLower6
        "d2": "",          // U+EB9E           staffPosLower7
        "c2": "",          // U+EB9F           staffPosLower8
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

        const clefInitiation = clef === "bass" ? "st24 bscf sp16 st24" :
            clef === "treble" ? "st24 tbcf sp16 st24" : ""

        const textContent = `${clefInitiation}${staffSpan.textContent}`
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
        staffSpan.textContent = textContent

        // const bravura = "assets/fonts/BravuraTextBB.otf"
        // const options = {x: 20, y: 100}
        //
        // TextToSVG.load(bravura, (_, textToSVG) => {
        //     const metrics = textToSVG.getMetrics(textContent, options)
        //     const width = metrics.width * 2
        //     const height = metrics.height * 2
        //
        //     const path = textToSVG.getPath(textContent, options)
        //     const svgString = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}">${path}</svg>`
        //
        //     const svgWrapper = document.createElement("div")
        //     staffSpan.appendChild(svgWrapper)
        //
        //     svgWrapper.innerHTML = svgString
        // })
    })
})()
