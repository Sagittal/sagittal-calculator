import { Cents, Decimal, Name } from "../../../../../src/general"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { CommaMean } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeJiNotationLevelCommaMeans } from "../../../../../src/scripts/jiNotationBound/histories/levelCommaMeans"

describe("computeJiNotationLevelCommaMeans", (): void => {
    it(
        "can return the comma means for the Medium JI notation level, both the positions and the bounded commas' symbols",
        (): void => {
            expect(computeJiNotationLevelCommaMeans(JiNotationLevel.MEDIUM)).toBeCloseToObject([
                {
                    name: "|//| |(" as Name<CommaMean>,
                    decimal: 1.001664301900464 as Decimal,
                    cents: 2.878901 as Cents,
                },
                {
                    name: "|( )|(" as Name<CommaMean>,
                    decimal: 1.004470875913052 as Decimal,
                    cents: 7.722881 as Cents,
                },
                {
                    name: ")|( ~|(" as Name<CommaMean>,
                    decimal: 1.0070772291411147 as Decimal,
                    cents: 12.209187 as Cents,
                },
                {
                    name: "~|( /|" as Name<CommaMean>,
                    decimal: 1.010520525965919 as Decimal,
                    cents: 18.118351 as Cents,
                },
                {
                    name: "/| |)" as Name<CommaMean>,
                    decimal: 1.01418510567422 as Decimal,
                    cents: 24.385190 as Cents,
                },
                {
                    name: "|) (|" as Name<CommaMean>,
                    decimal: 1.0176007879499522 as Decimal,
                    cents: 30.206031 as Cents,
                },
                {
                    name: "(| (|(" as Name<CommaMean>,
                    decimal: 1.0210279739298342 as Decimal,
                    cents: 36.026872 as Cents,
                },
                {
                    name: "(|( //|" as Name<CommaMean>,
                    decimal: 1.023941041116049 as Decimal,
                    cents: 40.959176 as Cents,
                },
                {
                    name: "//| /|)" as Name<CommaMean>,
                    decimal: 1.0268624194951477 as Decimal,
                    cents: 45.891480 as Cents,
                },
                {
                    name: "/|) /|\\" as Name<CommaMean>,
                    decimal: 1.0299098434883927 as Decimal,
                    cents: 51.021662 as Cents,
                },
                {
                    name: "/|\\ (|)" as Name<CommaMean>,
                    decimal: 1.0333784852366534 as Decimal,
                    cents: 56.842503 as Cents,
                },
                {
                    name: "(|) (|\\" as Name<CommaMean>,
                    decimal: 1.0368588090517024 as Decimal,
                    cents: 62.663343 as Cents,
                },
            ])
        },
    )

    it(
        "can return the comma means for the High JI notation level, both the positions and the bounded commas' symbols",
        (): void => {
            expect(computeJiNotationLevelCommaMeans(JiNotationLevel.HIGH)).toBeCloseToObject([
                {
                    name: "|//| )|" as Name<CommaMean>,
                    decimal: 1.0009760861279353 as Decimal,
                    cents: 1.689009 as Cents,
                },
                {
                    name: ")| |(" as Name<CommaMean>,
                    decimal: 1.0026420125303974 as Decimal,
                    cents: 4.567910 as Cents,
                },
                {
                    name: "|( ~|" as Name<CommaMean>,
                    decimal: 1.0041928905068678 as Decimal,
                    cents: 7.243699 as Cents,
                },
                {
                    name: "~| )|(" as Name<CommaMean>,
                    decimal: 1.0053333711589283 as Decimal,
                    cents: 9.208778 as Cents,
                },
                {
                    name: ")|( )~|" as Name<CommaMean>,
                    decimal: 1.0063021026187071 as Decimal,
                    cents: 10.876179 as Cents,
                },
                {
                    name: ")~| ~|(" as Name<CommaMean>,
                    decimal: 1.0077686656998388 as Decimal,
                    cents: 13.397405 as Cents,
                },
                {
                    name: "~|( |~" as Name<CommaMean>,
                    decimal: 1.0090734198593614 as Decimal,
                    cents: 15.637377 as Cents,
                },
                {
                    name: "|~ ~~|" as Name<CommaMean>,
                    decimal: 1.0099030933705948 as Decimal,
                    cents: 17.060236 as Cents,
                },
                {
                    name: "~~| )|~" as Name<CommaMean>,
                    decimal: 1.0109354520533513 as Decimal,
                    cents: 18.829061 as Cents,
                },
                {
                    name: ")|~ /|" as Name<CommaMean>,
                    decimal: 1.012083590358699 as Decimal,
                    cents: 20.794140 as Cents,
                },
                {
                    name: "/| )/|" as Name<CommaMean>,
                    decimal: 1.0134882872045345 as Decimal,
                    cents: 23.195298 as Cents,
                },
                {
                    name: ")/| |)" as Name<CommaMean>,
                    decimal: 1.0151750376870272 as Decimal,
                    cents: 26.074200 as Cents,
                },
                {
                    name: "|) )|)" as Name<CommaMean>,
                    decimal: 1.0168645954315534 as Decimal,
                    cents: 28.953101 as Cents,
                },
                {
                    name: ")|) |\\" as Name<CommaMean>,
                    decimal: 1.0181877769873044 as Decimal,
                    cents: 31.204382 as Cents,
                },
                {
                    name: "|\\ (|" as Name<CommaMean>,
                    decimal: 1.0189249274664447 as Decimal,
                    cents: 32.457312 as Cents,
                },
                {
                    name: "(| ~|)" as Name<CommaMean>,
                    decimal: 1.0200821395684856 as Decimal,
                    cents: 34.422391 as Cents,
                },
                {
                    name: "~|) /|~" as Name<CommaMean>,
                    decimal: 1.021527541732732 as Decimal,
                    cents: 36.873721 as Cents,
                },
                {
                    name: "/|~ (|(" as Name<CommaMean>,
                    decimal: 1.0224747162910903 as Decimal,
                    cents: 38.478202 as Cents,
                },
                {
                    name: "(|( ~|\\" as Name<CommaMean>,
                    decimal: 1.0230518172912486 as Decimal,
                    cents: 39.455062 as Cents,
                },
                {
                    name: "~|\\ //|" as Name<CommaMean>,
                    decimal: 1.0242659708481365 as Decimal,
                    cents: 41.508465 as Cents,
                },
                {
                    name: "//| )//|" as Name<CommaMean>,
                    decimal: 1.0261578825892241 as Decimal,
                    cents: 44.703261 as Cents,
                },
                {
                    name: ")//| /|)" as Name<CommaMean>,
                    decimal: 1.0278657191033935 as Decimal,
                    cents: 47.582162 as Cents,
                },
                {
                    name: "/|) (|~" as Name<CommaMean>,
                    decimal: 1.0289055430608551 as Decimal,
                    cents: 49.332652 as Cents,
                },
                {
                    name: "(|~ /|\\" as Name<CommaMean>,
                    decimal: 1.0302443927398632 as Decimal,
                    cents: 51.583933 as Cents,
                },
                {
                    name: "/|\\ (/|" as Name<CommaMean>,
                    decimal: 1.0316239243982173 as Decimal,
                    cents: 53.900563 as Cents,
                },
                {
                    name: "(/| )/|\\" as Name<CommaMean>,
                    decimal: 1.0325804604631443 as Decimal,
                    cents: 55.505043 as Cents,
                },
                {
                    name: ")/|\\ |\\)" as Name<CommaMean>,
                    decimal: 1.0339617404975123 as Decimal,
                    cents: 57.819363 as Cents,
                },
                {
                    name: "|\\) (|)" as Name<CommaMean>,
                    decimal: 1.0351360301894192 as Decimal,
                    cents: 59.784442 as Cents,
                },
                {
                    name: "(|) |\\\\" as Name<CommaMean>,
                    decimal: 1.0365221119137287 as Decimal,
                    cents: 62.101072 as Cents,
                },
                {
                    name: "|\\\\ (|\\" as Name<CommaMean>,
                    decimal: 1.0378708725518453 as Decimal,
                    cents: 64.352353 as Cents,
                },
                {
                    name: "(|\\ )|\\\\" as Name<CommaMean>,
                    decimal: 1.0389208180631835 as Decimal,
                    cents: 66.102843 as Cents,
                },
            ])
        },
    )

    it(
        // tslint:disable-next-line max-line-length
        "can return the comma means for the Ultra JI notation level, both the positions and the bounded commas' symbols",
        (): void => {
            expect(computeJiNotationLevelCommaMeans(JiNotationLevel.ULTRA)).toBeCloseToObject([
                {
                    name: "|//| .)|" as Name<CommaMean>,
                    decimal: 1.0004114379931337 as Decimal, // TODO: abbreviate these like you did for the cents here
                    cents: 0.712148 as Cents,
                },
                {
                    name: ".)| '|" as Name<CommaMean>,
                    decimal: 1.0009760861279355 as Decimal,
                    cents: 1.689009 as Cents,
                },
                {
                    name: "'| )|" as Name<CommaMean>,
                    decimal: 1.0015410529591293 as Decimal,
                    cents: 2.665869 as Cents,
                },
                {
                    name: ")| |(" as Name<CommaMean>,
                    decimal: 1.0026420125303974 as Decimal,
                    cents: 4.567910 as Cents,
                },
                {
                    name: "|( .~|" as Name<CommaMean>,
                    decimal: 1.003626427780671 as Decimal,
                    cents: 6.266838 as Cents,
                },
                {
                    name: ".~| '|(" as Name<CommaMean>,
                    decimal: 1.0041928905068676 as Decimal,
                    cents: 7.243699 as Cents,
                },
                {
                    name: "'|( ~|" as Name<CommaMean>,
                    decimal: 1.004759672953641 as Decimal,
                    cents: 8.220559 as Cents,
                },
                {
                    name: "~| )|(" as Name<CommaMean>,
                    decimal: 1.0053333711589283 as Decimal,
                    cents: 9.208778 as Cents,
                },
                {
                    name: ")|( ')|(" as Name<CommaMean>,
                    decimal: 1.0061792555081206 as Decimal,
                    cents: 10.664821 as Cents,
                },
                {
                    name: "')|( )~|" as Name<CommaMean>,
                    decimal: 1.0068700755383595 as Decimal,
                    cents: 11.853039 as Cents,
                },
                {
                    name: ")~| .~|(" as Name<CommaMean>,
                    decimal: 1.0072001858876987 as Decimal,
                    cents: 12.420545 as Cents,
                },
                {
                    name: ".~|( ~|(" as Name<CommaMean>,
                    decimal: 1.007976004178671 as Decimal,
                    cents: 13.753553 as Cents,
                },
                {
                    name: "~|( |~" as Name<CommaMean>,
                    decimal: 1.0090734198593614 as Decimal,
                    cents: 15.637377 as Cents,
                },
                {
                    name: "|~ ~~|" as Name<CommaMean>,
                    decimal: 1.0099030933705948 as Decimal,
                    cents: 17.060236 as Cents,
                },
                {
                    name: "~~| ./|" as Name<CommaMean>,
                    decimal: 1.0107808884892648 as Decimal,
                    cents: 18.564349 as Cents,
                },
                {
                    name: "./| )|~" as Name<CommaMean>,
                    decimal: 1.0115126765082294 as Decimal,
                    cents: 19.817280 as Cents,
                },
                {
                    name: ")|~ /|" as Name<CommaMean>,
                    decimal: 1.012083590358699 as Decimal,
                    cents: 20.794140 as Cents,
                },
                {
                    name: "/| .)/|" as Name<CommaMean>,
                    decimal: 1.0129165809680478 as Decimal,
                    cents: 22.218438 as Cents,
                },
                {
                    name: ".)/| '/|" as Name<CommaMean>,
                    decimal: 1.0134882872045345 as Decimal,
                    cents: 23.195298 as Cents,
                },
                {
                    name: "'/| )/|" as Name<CommaMean>,
                    decimal: 1.0140603161211186 as Decimal,
                    cents: 24.172159 as Cents,
                },
                {
                    name: ")/| .|)" as Name<CommaMean>,
                    decimal: 1.0146023799587647 as Decimal,
                    cents: 25.097339 as Cents,
                },
                {
                    name: ".|) |)" as Name<CommaMean>,
                    decimal: 1.0152999644169847 as Decimal,
                    cents: 26.287231 as Cents,
                },
                {
                    name: "|) '|)" as Name<CommaMean>,
                    decimal: 1.0164463907684076 as Decimal,
                    cents: 28.240952 as Cents,
                },
                {
                    name: "'|) )|)" as Name<CommaMean>,
                    decimal: 1.0174385299902267 as Decimal,
                    cents: 29.929961 as Cents,
                },
                {
                    name: ")|) .(|" as Name<CommaMean>,
                    decimal: 1.0180194675759577 as Decimal,
                    cents: 30.918180 as Cents,
                },
                {
                    name: ".(| |\\" as Name<CommaMean>,
                    decimal: 1.0183501544346312 as Decimal,
                    cents: 31.480451 as Cents,
                },
                {
                    name: "|\\ (|" as Name<CommaMean>,
                    decimal: 1.0189249274664447 as Decimal,
                    cents: 32.457312 as Cents,
                },
                {
                    name: "(| '(|" as Name<CommaMean>,
                    decimal: 1.019869688844622 as Decimal,
                    cents: 34.061792 as Cents,
                },
                {
                    name: "'(| ~|)" as Name<CommaMean>,
                    decimal: 1.0206207261596576 as Decimal,
                    cents: 35.336213 as Cents,
                },
                {
                    name: "~|) .(|(" as Name<CommaMean>,
                    decimal: 1.021203480717427 as Decimal,
                    cents: 36.324432 as Cents,
                },
                {
                    name: ".(|( '~|)" as Name<CommaMean>,
                    decimal: 1.0217798642119988 as Decimal,
                    cents: 37.301292 as Cents,
                },
                {
                    name: "'~|) /|~" as Name<CommaMean>,
                    decimal: 1.0221041081324975 as Decimal,
                    cents: 37.850582 as Cents,
                },
                {
                    name: "/|~ (|(" as Name<CommaMean>,
                    decimal: 1.0224747162910903 as Decimal,
                    cents: 38.478202 as Cents,
                },
                {
                    name: "(|( ~|\\" as Name<CommaMean>,
                    decimal: 1.0230518172912486 as Decimal,
                    cents: 39.455062 as Cents,
                },
                {
                    name: "~|\\ .//|" as Name<CommaMean>,
                    decimal: 1.0236881849469592 as Decimal,
                    cents: 40.531605 as Cents,
                },
                {
                    name: ".//| //|" as Name<CommaMean>,
                    decimal: 1.024577961894555 as Decimal,
                    cents: 42.035718 as Cents,
                },
                {
                    name: "//| '//|" as Name<CommaMean>,
                    decimal: 1.0257358558871925 as Decimal,
                    cents: 43.991112 as Cents,
                },
                {
                    name: "'//| )//|" as Name<CommaMean>,
                    decimal: 1.0267380547824267 as Decimal,
                    cents: 45.681795 as Cents,
                },
                {
                    name: ")//| /|)" as Name<CommaMean>,
                    decimal: 1.0278657191033935 as Decimal,
                    cents: 47.582162 as Cents,
                },
                {
                    name: "/|) (|~" as Name<CommaMean>,
                    decimal: 1.0289055430608551 as Decimal,
                    cents: 49.332652 as Cents,
                },
                {
                    name: "(|~ '/|)" as Name<CommaMean>,
                    decimal: 1.0294862737219739 as Decimal,
                    cents: 50.309513 as Cents,
                },
                {
                    name: "'/|) ./|\\" as Name<CommaMean>,
                    decimal: 1.0299098434883927 as Decimal,
                    cents: 51.021662 as Cents,
                },
                {
                    name: "./|\\ /|\\" as Name<CommaMean>,
                    decimal: 1.0306682744252496 as Decimal,
                    cents: 52.296082 as Cents,
                },
                {
                    name: "/|\\ (/|" as Name<CommaMean>,
                    decimal: 1.0316239243982173 as Decimal,
                    cents: 53.900563 as Cents,
                },
                {
                    name: "(/| '/|\\" as Name<CommaMean>,
                    decimal: 1.0322061893570194 as Decimal,
                    cents: 54.877423 as Cents,
                },
                {
                    name: "'/|\\ )/|\\" as Name<CommaMean>,
                    decimal: 1.0327887829554296 as Decimal,
                    cents: 55.854284 as Cents,
                },
                {
                    name: ")/|\\ .(|)" as Name<CommaMean>,
                    decimal: 1.0337531814094754 as Decimal,
                    cents: 57.470123 as Cents,
                },
                {
                    name: ".(|) |\\)" as Name<CommaMean>,
                    decimal: 1.0345521125146488 as Decimal,
                    cents: 58.807582 as Cents,
                },
                {
                    name: "|\\) (|)" as Name<CommaMean>,
                    decimal: 1.0351360301894192 as Decimal,
                    cents: 59.784442 as Cents,
                },
                {
                    name: "(|) '(|)" as Name<CommaMean>,
                    decimal: 1.0360958227277313 as Decimal,
                    cents: 61.388923 as Cents,
                },
                {
                    name: "'(|) .(|\\" as Name<CommaMean>,
                    decimal: 1.0368588090517024 as Decimal,
                    cents: 62.663343 as Cents,
                },
                {
                    name: ".(|\\ |\\\\" as Name<CommaMean>,
                    decimal: 1.0372854121592616 as Decimal,
                    cents: 63.375492 as Cents,
                },
                {
                    name: "|\\\\ (|\\" as Name<CommaMean>,
                    decimal: 1.0378708725518453 as Decimal,
                    cents: 64.352353 as Cents,
                },
                {
                    name: "(|\\ )|\\\\" as Name<CommaMean>,
                    decimal: 1.0389208180631835 as Decimal,
                    cents: 66.102843 as Cents,
                },
            ])
        },
    )

    it(
        "can return the comma means for the Extreme JI notation level, both the positions and the bounded commas' symbols",
        (): void => {
            expect(computeJiNotationLevelCommaMeans(JiNotationLevel.EXTREME)).toBeCloseToObject([
                {
                    name: "|//| `|" as Name<CommaMean>,
                    decimal: 1.0001220926687902 as Decimal,
                    cents: 0.211358 as Cents,
                },
                {
                    name: "`| ``|" as Name<CommaMean>,
                    decimal: 1.000362593355847 as Decimal,
                    cents: 0.627620 as Cents,
                },
                {
                    name: "``| .)|" as Name<CommaMean>,
                    decimal: 1.0006520082594448 as Decimal,
                    cents: 1.128411 as Cents,
                },
                {
                    name: ".)| '|" as Name<CommaMean>,
                    decimal: 1.0009760861279355 as Decimal,
                    cents: 1.689009 as Cents,
                },
                {
                    name: "'| `'|" as Name<CommaMean>,
                    decimal: 1.0012513809203998 as Decimal,
                    cents: 2.165078 as Cents,
                },
                {
                    name: "`'| ,)|" as Name<CommaMean>,
                    decimal: 1.001548851427391 as Decimal,
                    cents: 2.679349 as Cents,
                },
                {
                    name: ",)| )|" as Name<CommaMean>,
                    decimal: 1.0018386095273133 as Decimal,
                    cents: 3.180140 as Cents,
                },
                {
                    name: ")| `)|" as Name<CommaMean>,
                    decimal: 1.0021129133950835 as Decimal,
                    cents: 3.654088 as Cents,
                },
                {
                    name: "`)| ``)|" as Name<CommaMean>,
                    decimal: 1.00243843327159 as Decimal,
                    cents: 4.216360 as Cents,
                },
                {
                    name: "``)| ,,|(" as Name<CommaMean>,
                    decimal: 1.0027265772851153 as Decimal,
                    cents: 4.713919 as Cents,
                },
                {
                    name: ",,|( ,|(" as Name<CommaMean>,
                    decimal: 1.0030003067719448 as Decimal,
                    cents: 5.186456 as Cents,
                },
                {
                    name: ",|( |(" as Name<CommaMean>,
                    decimal: 1.0032414995869672 as Decimal,
                    cents: 5.602718 as Cents,
                },
                {
                    name: "|( `|(" as Name<CommaMean>,
                    decimal: 1.003540379302116 as Decimal,
                    cents: 6.118400 as Cents,
                },
                {
                    name: "`|( .~|" as Name<CommaMean>,
                    decimal: 1.0038354948442407 as Decimal,
                    cents: 6.627437 as Cents,
                },
                {
                    name: ".~| ,'|(" as Name<CommaMean>,
                    decimal: 1.0040781190463515 as Decimal,
                    cents: 7.045821 as Cents,
                },
                {
                    name: ",'|( '|(" as Name<CommaMean>,
                    decimal: 1.0043494832354019 as Decimal,
                    cents: 7.513645 as Cents,
                },
                {
                    name: "'|( ,~|" as Name<CommaMean>,
                    decimal: 1.0046735273134129 as Decimal,
                    cents: 8.072121 as Cents,
                },
                {
                    name: ",~| ~|" as Name<CommaMean>,
                    decimal: 1.0049689760853675 as Decimal,
                    cents: 8.581158 as Cents,
                },
                {
                    name: "~| ,)|(" as Name<CommaMean>,
                    decimal: 1.0051864089520404 as Decimal,
                    cents: 8.955683 as Cents,
                },
                {
                    name: ",)|( )|(" as Name<CommaMean>,
                    decimal: 1.0054646693886806 as Decimal,
                    cents: 9.434865 as Cents,
                },
                {
                    name: ")|( `)|(" as Name<CommaMean>,
                    decimal: 1.0057779303058083 as Decimal,
                    cents: 9.974162 as Cents,
                },
                {
                    name: "`)|( ``)|(" as Name<CommaMean>,
                    decimal: 1.006103668289781 as Decimal,
                    cents: 10.534760 as Cents,
                },
                {
                    name: "``)|( ,')|(" as Name<CommaMean>,
                    decimal: 1.0063534432530417 as Decimal,
                    cents: 10.964502 as Cents,
                },
                {
                    name: ",')|( ')|(" as Name<CommaMean>,
                    decimal: 1.006595442401244 as Decimal,
                    cents: 11.380764 as Cents,
                },
                {
                    name: "')|( )~|" as Name<CommaMean>,
                    decimal: 1.0068700755383595 as Decimal,
                    cents: 11.853039 as Cents,
                },
                {
                    name: ")~| .~|(" as Name<CommaMean>,
                    decimal: 1.0072001858876987 as Decimal,
                    cents: 12.420545 as Cents,
                },
                {
                    name: ".~|( `.~|(" as Name<CommaMean>,
                    decimal: 1.0075505355472798 as Decimal,
                    cents: 13.022641 as Cents,
                },
                {
                    name: "`.~|( ,,~|(" as Name<CommaMean>,
                    decimal: 1.007846830373725 as Decimal,
                    cents: 13.531678 as Cents,
                },
                {
                    name: ",,~|( ,~|(" as Name<CommaMean>,
                    decimal: 1.008115219752334 as Decimal,
                    cents: 13.992644 as Cents,
                },
                {
                    name: ",~|( ~|(" as Name<CommaMean>,
                    decimal: 1.0083876750164096 as Decimal,
                    cents: 14.460468 as Cents,
                },
                {
                    name: "~|( `~|(" as Name<CommaMean>,
                    decimal: 1.0086816227489368 as Decimal,
                    cents: 14.965054 as Cents,
                },
                {
                    name: "`~|( ,,|~" as Name<CommaMean>,
                    decimal: 1.0089782501991804 as Decimal,
                    cents: 15.474090 as Cents,
                },
                {
                    name: ",,|~ ,|~" as Name<CommaMean>,
                    decimal: 1.0092535334465123 as Decimal,
                    cents: 15.946365 as Cents,
                },
                {
                    name: ",|~ |~" as Name<CommaMean>,
                    decimal: 1.009485538896294 as Decimal,
                    cents: 16.344292 as Cents,
                },
                {
                    name: "|~ `|~" as Name<CommaMean>,
                    decimal: 1.0097320555114089 as Decimal,
                    cents: 16.767008 as Cents,
                },
                {
                    name: "`|~ ~~|" as Name<CommaMean>,
                    decimal: 1.010032992797895 as Decimal,
                    cents: 17.282903 as Cents,
                },
                {
                    name: "~~| `~~|" as Name<CommaMean>,
                    decimal: 1.0103313674747298 as Decimal,
                    cents: 17.794253 as Cents,
                },
                {
                    name: "`~~| ``~~|" as Name<CommaMean>,
                    decimal: 1.0106110521630236 as Decimal,
                    cents: 18.273435 as Cents,
                },
                {
                    name: "``~~| ,./|" as Name<CommaMean>,
                    decimal: 1.0109372695868597 as Decimal,
                    cents: 18.832173 as Cents,
                },
                {
                    name: ",./| ./|" as Name<CommaMean>,
                    decimal: 1.01123456036511 as Decimal,
                    cents: 19.341210 as Cents,
                },
                {
                    name: "./| )|~" as Name<CommaMean>,
                    decimal: 1.0115126765082294 as Decimal,
                    cents: 19.817280 as Cents,
                },
                {
                    name: ")|~ ,,/|" as Name<CommaMean>,
                    decimal: 1.0117625252650368 as Decimal,
                    cents: 20.244851 as Cents,
                },
                {
                    name: ",,/| ,/|" as Name<CommaMean>,
                    decimal: 1.0120552382829548 as Decimal,
                    cents: 20.745641 as Cents,
                },
                {
                    name: ",/| /|" as Name<CommaMean>,
                    decimal: 1.0123763962639598 as Decimal,
                    cents: 21.294931 as Cents,
                },
                {
                    name: "/| `/|" as Name<CommaMean>,
                    decimal: 1.012615734126228 as Decimal,
                    cents: 21.704167 as Cents,
                },
                {
                    name: "`/| ``/|" as Name<CommaMean>,
                    decimal: 1.0128551285708234 as Decimal,
                    cents: 22.113403 as Cents,
                },
                {
                    name: "``/| .)/|" as Name<CommaMean>,
                    decimal: 1.013156046536427 as Decimal,
                    cents: 22.627674 as Cents,
                },
                {
                    name: ".)/| '/|" as Name<CommaMean>,
                    decimal: 1.0134882872045345 as Decimal,
                    cents: 23.195298 as Cents,
                },
                {
                    name: "'/| `'/|" as Name<CommaMean>,
                    decimal: 1.0137591295779698 as Decimal,
                    cents: 23.657888 as Cents,
                },
                {
                    name: "`'/| ,,)/|" as Name<CommaMean>,
                    decimal: 1.0139333869076101 as Decimal,
                    cents: 23.955448 as Cents,
                },
                {
                    name: ",,)/| ,)/|" as Name<CommaMean>,
                    decimal: 1.0140571807407932 as Decimal,
                    cents: 24.166806 as Cents,
                },
                {
                    name: ",)/| )/|" as Name<CommaMean>,
                    decimal: 1.014300052082138 as Decimal,
                    cents: 24.581395 as Cents,
                },
                {
                    name: ")/| ,.|)" as Name<CommaMean>,
                    decimal: 1.0144785195688801 as Decimal,
                    cents: 24.885981 as Cents,
                },
                {
                    name: ",.|) .|)" as Name<CommaMean>,
                    decimal: 1.0146033605858051 as Decimal,
                    cents: 25.099012 as Cents,
                },
                {
                    name: ".|) `.|)" as Name<CommaMean>,
                    decimal: 1.0149319568328004 as Decimal,
                    cents: 25.659611 as Cents,
                },
                {
                    name: "`.|) ,,|)" as Name<CommaMean>,
                    decimal: 1.0152606595011793 as Decimal,
                    cents: 26.220209 as Cents,
                },
                {
                    name: ",,|) ,|)" as Name<CommaMean>,
                    decimal: 1.015504800579495 as Decimal,
                    cents: 26.636471 as Cents,
                },
                {
                    name: ",|) |)" as Name<CommaMean>,
                    decimal: 1.01574900036674 as Decimal,
                    cents: 27.052733 as Cents,
                },
                {
                    name: "|) `|)" as Name<CommaMean>,
                    decimal: 1.0159891355528685 as Decimal,
                    cents: 27.461969 as Cents,
                },
                {
                    name: "`|) ``|)" as Name<CommaMean>,
                    decimal: 1.0163181806062358 as Decimal,
                    cents: 28.022568 as Cents,
                },
                {
                    name: "``|) ,'|)" as Name<CommaMean>,
                    decimal: 1.016651458221751 as Decimal,
                    cents: 28.590192 as Cents,
                },
                {
                    name: ",'|) '|)" as Name<CommaMean>,
                    decimal: 1.0168959337472812 as Decimal,
                    cents: 29.006454 as Cents,
                },
                {
                    name: "'|) `'|)" as Name<CommaMean>,
                    decimal: 1.0171363400821487 as Decimal,
                    cents: 29.415690 as Cents,
                },
                {
                    name: "`'|) ,)|)" as Name<CommaMean>,
                    decimal: 1.0174179085550146 as Decimal,
                    cents: 29.894872 as Cents,
                },
                {
                    name: ",)|) )|)" as Name<CommaMean>,
                    decimal: 1.0177201821167263 as Decimal,
                    cents: 30.409143 as Cents,
                },
                {
                    name: ")|) .(|" as Name<CommaMean>,
                    decimal: 1.0180194675759577 as Decimal,
                    cents: 30.918180 as Cents,
                },
                {
                    name: ".(| |\\" as Name<CommaMean>,
                    decimal: 1.0183501544346312 as Decimal,
                    cents: 31.480451 as Cents,
                },
                {
                    name: "|\\ `|\\" as Name<CommaMean>,
                    decimal: 1.0186428721626566 as Decimal,
                    cents: 31.978011 as Cents,
                },
                {
                    name: "`|\\ ,(|" as Name<CommaMean>,
                    decimal: 1.018894482113922 as Decimal,
                    cents: 32.405582 as Cents,
                },
                {
                    name: ",(| (|" as Name<CommaMean>,
                    decimal: 1.0191766070867996 as Decimal,
                    cents: 32.884883 as Cents,
                },
                {
                    name: "(| `(|" as Name<CommaMean>,
                    decimal: 1.0194696614949148 as Decimal,
                    cents: 33.382611 as Cents,
                },
                {
                    name: "`(| ``(|" as Name<CommaMean>,
                    decimal: 1.019803902718557 as Decimal,
                    cents: 33.950117 as Cents,
                },
                {
                    name: "``(| ,'(|" as Name<CommaMean>,
                    decimal: 1.0201214502594054 as Decimal,
                    cents: 34.489106 as Cents,
                },
                {
                    name: ",'(| '(|" as Name<CommaMean>,
                    decimal: 1.0203255357771537 as Decimal,
                    cents: 34.835422 as Cents,
                },
                {
                    name: "'(| ,~|)" as Name<CommaMean>,
                    decimal: 1.0204921440204184 as Decimal,
                    cents: 35.118091 as Cents,
                },
                {
                    name: ",~|) ~|)" as Name<CommaMean>,
                    decimal: 1.0207047244089384 as Decimal,
                    cents: 35.478690 as Cents,
                },
                {
                    name: "~|) `~|)" as Name<CommaMean>,
                    decimal: 1.0209925209541146 as Decimal,
                    cents: 35.966757 as Cents,
                },
                {
                    name: "`~|) ,.(|(" as Name<CommaMean>,
                    decimal: 1.0212968142734182 as Decimal,
                    cents: 36.482652 as Cents,
                },
                {
                    name: ",.(|( .(|(" as Name<CommaMean>,
                    decimal: 1.0215078369104984 as Decimal,
                    cents: 36.840326 as Cents,
                },
                {
                    name: ".(|( '~|)" as Name<CommaMean>,
                    decimal: 1.0217798642119988 as Decimal,
                    cents: 37.301292 as Cents,
                },
                {
                    name: "'~|) /|~" as Name<CommaMean>,
                    decimal: 1.0221041081324975 as Decimal,
                    cents: 37.850582 as Cents,
                },
                {
                    name: "/|~ ,,(|(" as Name<CommaMean>,
                    decimal: 1.0222288995508408 as Decimal,
                    cents: 38.061940 as Cents,
                },
                {
                    name: ",,(|( ,(|(" as Name<CommaMean>,
                    decimal: 1.0223741334649856 as Decimal,
                    cents: 38.307889 as Cents,
                },
                {
                    name: ",(|( (|(" as Name<CommaMean>,
                    decimal: 1.0226199851298272 as Decimal,
                    cents: 38.724151 as Cents,
                },
                {
                    name: "(|( `(|(" as Name<CommaMean>,
                    decimal: 1.0228521402294446 as Decimal,
                    cents: 39.117131 as Cents,
                },
                {
                    name: "`(|( ~|\\" as Name<CommaMean>,
                    decimal: 1.0231767244179324 as Decimal,
                    cents: 39.666420 as Cents,
                },
                {
                    name: "~|\\ ,.//|" as Name<CommaMean>,
                    decimal: 1.0235632153823178 as Decimal,
                    cents: 40.320247 as Cents,
                },
                {
                    name: ",.//| .//|" as Name<CommaMean>,
                    decimal: 1.023874992369674 as Decimal,
                    cents: 40.847500 as Cents,
                },
                {
                    name: ".//| `.//|" as Name<CommaMean>,
                    decimal: 1.0241170486372915 as Decimal,
                    cents: 41.256736 as Cents,
                },
                {
                    name: "`.//| ,,//|" as Name<CommaMean>,
                    decimal: 1.0243938285880985 as Decimal,
                    cents: 41.724559 as Cents,
                },
                {
                    name: ",,//| ,//|" as Name<CommaMean>,
                    decimal: 1.0247297544222076 as Decimal,
                    cents: 42.292184 as Cents,
                },
                {
                    name: ",//| //|" as Name<CommaMean>,
                    decimal: 1.0250311012172595 as Decimal,
                    cents: 42.801221 as Cents,
                },
                {
                    name: "//| `//|" as Name<CommaMean>,
                    decimal: 1.025273430802806 as Decimal,
                    cents: 43.210457 as Cents,
                },
                {
                    name: "`//| ``//|" as Name<CommaMean>,
                    decimal: 1.0255158176779586 as Decimal,
                    cents: 43.619693 as Cents,
                },
                {
                    name: "``//| ,'//|" as Name<CommaMean>,
                    decimal: 1.0258173956340964 as Decimal,
                    cents: 44.128729 as Cents,
                },
                {
                    name: ",'//| '//|" as Name<CommaMean>,
                    decimal: 1.0261547800851307 as Decimal,
                    cents: 44.698027 as Cents,
                },
                {
                    name: "'//| ,,)//|" as Name<CommaMean>,
                    decimal: 1.0264912130779862 as Decimal,
                    cents: 45.265533 as Cents,
                },
                {
                    name: ",,)//| ,)//|" as Name<CommaMean>,
                    decimal: 1.0267328955000532 as Decimal,
                    cents: 45.673096 as Cents,
                },
                {
                    name: ",)//| )//|" as Name<CommaMean>,
                    decimal: 1.0269797953221866 as Decimal,
                    cents: 46.089358 as Cents,
                },
                {
                    name: ")//| `)//|" as Name<CommaMean>,
                    decimal: 1.0272859025931278 as Decimal,
                    cents: 46.605302 as Cents,
                },
                {
                    name: "`)//| ``)//|" as Name<CommaMean>,
                    decimal: 1.027594535889138 as Decimal,
                    cents: 47.125348 as Cents,
                },
                {
                    name: "``)//| ,,/|)" as Name<CommaMean>,
                    decimal: 1.0279273395452693 as Decimal,
                    cents: 47.685947 as Cents,
                },
                {
                    name: ",,/|) ,/|)" as Name<CommaMean>,
                    decimal: 1.0281986105867387 as Decimal,
                    cents: 48.142761 as Cents,
                },
                {
                    name: ",/|) /|)" as Name<CommaMean>,
                    decimal: 1.0284458628713242 as Decimal,
                    cents: 48.559023 as Cents,
                },
                {
                    name: "/|) `/|)" as Name<CommaMean>,
                    decimal: 1.0286889997472795 as Decimal,
                    cents: 48.968259 as Cents,
                },
                {
                    name: "`/|) (|~" as Name<CommaMean>,
                    decimal: 1.0290231524277662 as Decimal,
                    cents: 49.530530 as Cents,
                },
                {
                    name: "(|~ ,'/|)" as Name<CommaMean>,
                    decimal: 1.0293605963396193 as Decimal,
                    cents: 50.098155 as Cents,
                },
                {
                    name: ",'/|) '/|)" as Name<CommaMean>,
                    decimal: 1.029607132919122 as Decimal,
                    cents: 50.512744 as Cents,
                },
                {
                    name: "'/|) `'/|)" as Name<CommaMean>,
                    decimal: 1.0298505443331756 as Decimal,
                    cents: 50.921980 as Cents,
                },
                {
                    name: "`'/|) ./|\\" as Name<CommaMean>,
                    decimal: 1.0300275676521753 as Decimal,
                    cents: 51.219540 as Cents,
                },
                {
                    name: "./|\\ `./|\\" as Name<CommaMean>,
                    decimal: 1.0301949479826407 as Decimal,
                    cents: 51.500844 as Cents,
                },
                {
                    name: "`./|\\ ,,/|\\" as Name<CommaMean>,
                    decimal: 1.0304494113551723 as Decimal,
                    cents: 51.928415 as Cents,
                },
                {
                    name: ",,/|\\ ,/|\\" as Name<CommaMean>,
                    decimal: 1.030752440154946 as Decimal,
                    cents: 52.437451 as Cents,
                },
                {
                    name: ",/|\\ /|\\" as Name<CommaMean>,
                    decimal: 1.031079531365064 as Decimal,
                    cents: 52.986741 as Cents,
                },
                {
                    name: "/|\\ `/|\\" as Name<CommaMean>,
                    decimal: 1.0313581930105753 as Decimal,
                    cents: 53.454565 as Cents,
                },
                {
                    name: "`/|\\ ,(/|" as Name<CommaMean>,
                    decimal: 1.03160620508414 as Decimal,
                    cents: 53.870827 as Cents,
                },
                {
                    name: ",(/| (/|" as Name<CommaMean>,
                    decimal: 1.0318720003725614 as Decimal,
                    cents: 54.316825 as Cents,
                },
                {
                    name: "(/| `(/|" as Name<CommaMean>,
                    decimal: 1.0321280162555164 as Decimal,
                    cents: 54.746305 as Cents,
                },
                {
                    name: "`(/| '/|\\" as Name<CommaMean>,
                    decimal: 1.0323362474674525 as Decimal,
                    cents: 55.095545 as Cents,
                },
                {
                    name: "'/|\\ `'/|\\" as Name<CommaMean>,
                    decimal: 1.0325404865741623 as Decimal,
                    cents: 55.438022 as Cents,
                },
                {
                    name: "`'/|\\ ,)/|\\" as Name<CommaMean>,
                    decimal: 1.032826319295421 as Decimal,
                    cents: 55.917204 as Cents,
                },
                {
                    name: ",)/|\\ )/|\\" as Name<CommaMean>,
                    decimal: 1.033074684411262 as Decimal,
                    cents: 56.333466 as Cents,
                },
                {
                    name: ")/|\\ `)/|\\" as Name<CommaMean>,
                    decimal: 1.0333784852366532 as Decimal,
                    cents: 56.842503 as Cents,
                },
                {
                    name: "`)/|\\ ``)/|\\" as Name<CommaMean>,
                    decimal: 1.0336823754020923 as Decimal,
                    cents: 57.351539 as Cents,
                },
                {
                    name: "``)/|\\ ,.(|)" as Name<CommaMean>,
                    decimal: 1.0339309463748814 as Decimal,
                    cents: 57.767801 as Cents,
                },
                {
                    name: ",.(|) .(|)" as Name<CommaMean>,
                    decimal: 1.0342171640097717 as Decimal,
                    cents: 58.246983 as Cents,
                },
                {
                    name: ".(|) ,|\\)" as Name<CommaMean>,
                    decimal: 1.0344217752401141 as Decimal,
                    cents: 58.589460 as Cents,
                },
                {
                    name: ",|\\) |\\)" as Name<CommaMean>,
                    decimal: 1.0346304692165578 as Decimal,
                    cents: 58.938700 as Cents,
                },
                {
                    name: "|\\) `|\\)" as Name<CommaMean>,
                    decimal: 1.0348871694981947 as Decimal,
                    cents: 59.368180 as Cents,
                },
                {
                    name: "`|\\) ,(|)" as Name<CommaMean>,
                    decimal: 1.0351538101332982 as Decimal,
                    cents: 59.814178 as Cents,
                },
                {
                    name: ",(|) (|)" as Name<CommaMean>,
                    decimal: 1.0354027349439503 as Decimal,
                    cents: 60.230440 as Cents,
                },
                {
                    name: "(|) `(|)" as Name<CommaMean>,
                    decimal: 1.0356825649872294 as Decimal,
                    cents: 60.698264 as Cents,
                },
                {
                    name: "`(|) ``(|)" as Name<CommaMean>,
                    decimal: 1.0360112206860013 as Decimal,
                    cents: 61.247554 as Cents,
                },
                {
                    name: "``(|) ,'(|)" as Name<CommaMean>,
                    decimal: 1.0363158850715566 as Decimal,
                    cents: 61.756590 as Cents,
                },
                {
                    name: ",'(|) '(|)" as Name<CommaMean>,
                    decimal: 1.0365718603465663 as Decimal,
                    cents: 62.184161 as Cents,
                },
                {
                    name: "'(|) ,.(|\\" as Name<CommaMean>,
                    decimal: 1.0367403041299996 as Decimal,
                    cents: 62.465465 as Cents,
                },
                {
                    name: ",.(|\\ .(|\\" as Name<CommaMean>,
                    decimal: 1.0369185117452575 as Decimal,
                    cents: 62.763025 as Cents,
                },
                {
                    name: ".(|\\ `.(|\\" as Name<CommaMean>,
                    decimal: 1.0371636516565232 as Decimal,
                    cents: 63.172261 as Cents,
                },
                {
                    name: "`.(|\\ |\\\\" as Name<CommaMean>,
                    decimal: 1.0374120571035295 as Decimal,
                    cents: 63.586850 as Cents,
                },
                {
                    name: "|\\\\ ,(|\\" as Name<CommaMean>,
                    decimal: 1.0377522519591325 as Decimal,
                    cents: 64.154475 as Cents,
                },
                {
                    name: ",(|\\ (|\\" as Name<CommaMean>,
                    decimal: 1.038089348687841 as Decimal,
                    cents: 64.716746 as Cents,
                },
                {
                    name: "(|\\ `(|\\" as Name<CommaMean>,
                    decimal: 1.0383347653989332 as Decimal,
                    cents: 65.125982 as Cents,
                },
                {
                    name: "`(|\\ ``(|\\" as Name<CommaMean>,
                    decimal: 1.03858445513812 as Decimal,
                    cents: 65.542244 as Cents,
                },
                {
                    name: "``(|\\ ,,)|\\\\" as Name<CommaMean>,
                    decimal: 1.0388585386029336 as Decimal,
                    cents: 65.999058 as Cents,
                },
                {
                    name: ",,)|\\\\ ,)|\\\\" as Name<CommaMean>,
                    decimal: 1.0391949902945057 as Decimal,
                    cents: 66.559657 as Cents,
                },
                {
                    name: ",)|\\\\ )|\\\\" as Name<CommaMean>,
                    decimal: 1.039507201504883 as Decimal,
                    cents: 67.079703 as Cents,
                },
                {
                    name: ")|\\\\ `)|\\\\" as Name<CommaMean>,
                    decimal: 1.039817042763714 as Decimal,
                    cents: 67.595647 as Cents,
                },
                {
                    name: "`)|\\\\ ``)|\\\\" as Name<CommaMean>,
                    decimal: 1.0400670889481058 as Decimal,
                    cents: 68.011909 as Cents,
                },
            ])
        },
    )
})
