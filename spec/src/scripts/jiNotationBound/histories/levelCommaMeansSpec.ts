import { Decimal, Name } from "../../../../../src/general"
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
                    decimal: 1.001664301900464 as Decimal,  // 2.878901¢
                },
                {
                    name: "|( )|(" as Name<CommaMean>,
                    decimal: 1.004470875913052 as Decimal,  // 7.722881¢
                },
                {
                    name: ")|( ~|(" as Name<CommaMean>,
                    decimal: 1.0070772291411147 as Decimal, // 12.209187¢
                },
                {
                    name: "~|( /|" as Name<CommaMean>,
                    decimal: 1.010520525965919 as Decimal,  // 18.118351¢
                },
                {
                    name: "/| |)" as Name<CommaMean>,
                    decimal: 1.01418510567422 as Decimal,   // 24.385190¢
                },
                {
                    name: "|) (|" as Name<CommaMean>,
                    decimal: 1.0176007879499522 as Decimal, // 30.206031¢
                },
                {
                    name: "(| (|(" as Name<CommaMean>,
                    decimal: 1.0210279739298342 as Decimal, // 36.026872¢
                },
                {
                    name: "(|( //|" as Name<CommaMean>,
                    decimal: 1.023941041116049 as Decimal,  // 40.959176¢
                },
                {
                    name: "//| /|)" as Name<CommaMean>,
                    decimal: 1.0268624194951477 as Decimal, // 45.891480¢
                },
                {
                    name: "/|) /|\\" as Name<CommaMean>,
                    decimal: 1.0299098434883927 as Decimal, // 51.021662¢
                },
                {
                    name: "/|\\ (|)" as Name<CommaMean>,
                    decimal: 1.0333784852366534 as Decimal, // 56.842503¢
                },
                {
                    name: "(|) (|\\" as Name<CommaMean>,
                    decimal: 1.0368588090517024 as Decimal, // 62.663343¢
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
                    decimal: 1.0009760861279353 as Decimal, // 1.689009¢
                },
                {
                    name: ")| |(" as Name<CommaMean>,
                    decimal: 1.0026420125303974 as Decimal, // 4.567910¢
                },
                {
                    name: "|( ~|" as Name<CommaMean>,
                    decimal: 1.0041928905068678 as Decimal, // 7.243699¢
                },
                {
                    name: "~| )|(" as Name<CommaMean>,
                    decimal: 1.0053333711589283 as Decimal, // 9.208778¢
                },
                {
                    name: ")|( )~|" as Name<CommaMean>,
                    decimal: 1.0063021026187071 as Decimal, // 10.876179¢
                },
                {
                    name: ")~| ~|(" as Name<CommaMean>,
                    decimal: 1.0077686656998388 as Decimal, // 13.397405¢
                },
                {
                    name: "~|( |~" as Name<CommaMean>,
                    decimal: 1.0090734198593614 as Decimal, // 15.637377¢
                },
                {
                    name: "|~ ~~|" as Name<CommaMean>,
                    decimal: 1.0099030933705948 as Decimal, // 17.060236¢
                },
                {
                    name: "~~| )|~" as Name<CommaMean>,
                    decimal: 1.0109354520533513 as Decimal, // 18.829061¢
                },
                {
                    name: ")|~ /|" as Name<CommaMean>,
                    decimal: 1.012083590358699 as Decimal,  // 20.794140¢
                },
                {
                    name: "/| )/|" as Name<CommaMean>,
                    decimal: 1.0134882872045345 as Decimal, // 23.195298¢
                },
                {
                    name: ")/| |)" as Name<CommaMean>,
                    decimal: 1.0151750376870272 as Decimal, // 26.074200¢
                },
                {
                    name: "|) )|)" as Name<CommaMean>,
                    decimal: 1.0168645954315534 as Decimal, // 28.953101¢
                },
                {
                    name: ")|) |\\" as Name<CommaMean>,
                    decimal: 1.0181877769873044 as Decimal, // 31.204382¢
                },
                {
                    name: "|\\ (|" as Name<CommaMean>,
                    decimal: 1.0189249274664447 as Decimal, // 32.457312¢
                },
                {
                    name: "(| ~|)" as Name<CommaMean>,
                    decimal: 1.0200821395684856 as Decimal, // 34.422391¢
                },
                {
                    name: "~|) /|~" as Name<CommaMean>,
                    decimal: 1.021527541732732 as Decimal,  // 36.873721¢
                },
                {
                    name: "/|~ (|(" as Name<CommaMean>,
                    decimal: 1.0224747162910903 as Decimal, // 38.478202¢
                },
                {
                    name: "(|( ~|\\" as Name<CommaMean>,
                    decimal: 1.0230518172912486 as Decimal, // 39.455062¢
                },
                {
                    name: "~|\\ //|" as Name<CommaMean>,
                    decimal: 1.0242659708481365 as Decimal, // 41.508465¢
                },
                {
                    name: "//| )//|" as Name<CommaMean>,
                    decimal: 1.0261578825892241 as Decimal, // 44.703261¢
                },
                {
                    name: ")//| /|)" as Name<CommaMean>,
                    decimal: 1.0278657191033935 as Decimal, // 47.582162¢
                },
                {
                    name: "/|) (|~" as Name<CommaMean>,
                    decimal: 1.0289055430608551 as Decimal, // 49.332652¢
                },
                {
                    name: "(|~ /|\\" as Name<CommaMean>,
                    decimal: 1.0302443927398632 as Decimal, // 51.583933¢
                },
                {
                    name: "/|\\ (/|" as Name<CommaMean>,
                    decimal: 1.0316239243982173 as Decimal, // 53.900563¢
                },
                {
                    name: "(/| )/|\\" as Name<CommaMean>,
                    decimal: 1.0325804604631443 as Decimal, // 55.505043¢
                },
                {
                    name: ")/|\\ |\\)" as Name<CommaMean>,
                    decimal: 1.0339617404975123 as Decimal, // 57.819363¢
                },
                {
                    name: "|\\) (|)" as Name<CommaMean>,
                    decimal: 1.0351360301894192 as Decimal, // 59.784442¢
                },
                {
                    name: "(|) |\\\\" as Name<CommaMean>,
                    decimal: 1.0365221119137287 as Decimal, // 62.101072¢
                },
                {
                    name: "|\\\\ (|\\" as Name<CommaMean>,
                    decimal: 1.0378708725518453 as Decimal, // 64.352353¢
                },
                {
                    name: "(|\\ )|\\\\" as Name<CommaMean>,
                    decimal: 1.0389208180631835 as Decimal, // 66.102843¢
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
                    // TODO: abbreviate these like you did for the cents here
                    //  well, in particular, you want all the same in test to be only 6-decimals, while in implemntation
                    //  it's gotta be to max preciison (15 in javascript)
                    decimal: 1.0004114379931337 as Decimal, // 0.712148¢
                },
                {
                    name: ".)| '|" as Name<CommaMean>,
                    decimal: 1.0009760861279355 as Decimal, // 1.689009¢
                },
                {
                    name: "'| )|" as Name<CommaMean>,
                    decimal: 1.0015410529591293 as Decimal, // 2.665869¢
                },
                {
                    name: ")| |(" as Name<CommaMean>,
                    decimal: 1.0026420125303974 as Decimal, // 4.567910¢
                },
                {
                    name: "|( .~|" as Name<CommaMean>,
                    decimal: 1.003626427780671 as Decimal,  // 6.266838¢
                },
                {
                    name: ".~| '|(" as Name<CommaMean>,
                    decimal: 1.0041928905068676 as Decimal, // 7.243699¢
                },
                {
                    name: "'|( ~|" as Name<CommaMean>,
                    decimal: 1.004759672953641 as Decimal,  // 8.220559¢
                },
                {
                    name: "~| )|(" as Name<CommaMean>,
                    decimal: 1.0053333711589283 as Decimal, // 9.208778¢
                },
                {
                    name: ")|( ')|(" as Name<CommaMean>,
                    decimal: 1.0061792555081206 as Decimal, // 10.664821¢
                },
                {
                    name: "')|( )~|" as Name<CommaMean>,
                    decimal: 1.0068700755383595 as Decimal, // 11.853039¢
                },
                {
                    name: ")~| .~|(" as Name<CommaMean>,
                    decimal: 1.0072001858876987 as Decimal, // 12.420545¢
                },
                {
                    name: ".~|( ~|(" as Name<CommaMean>,
                    decimal: 1.007976004178671 as Decimal,  // 13.753553¢
                },
                {
                    name: "~|( |~" as Name<CommaMean>,
                    decimal: 1.0090734198593614 as Decimal, // 15.637377¢
                },
                {
                    name: "|~ ~~|" as Name<CommaMean>,
                    decimal: 1.0099030933705948 as Decimal, // 17.060236¢
                },
                {
                    name: "~~| ./|" as Name<CommaMean>,
                    decimal: 1.0107808884892648 as Decimal, // 18.564349¢
                },
                {
                    name: "./| )|~" as Name<CommaMean>,
                    decimal: 1.0115126765082294 as Decimal, // 19.817280¢
                },
                {
                    name: ")|~ /|" as Name<CommaMean>,
                    decimal: 1.012083590358699 as Decimal,  // 20.794140¢
                },
                {
                    name: "/| .)/|" as Name<CommaMean>,
                    decimal: 1.0129165809680478 as Decimal, // 22.218438¢
                },
                {
                    name: ".)/| '/|" as Name<CommaMean>,
                    decimal: 1.0134882872045345 as Decimal, // 23.195298¢
                },
                {
                    name: "'/| )/|" as Name<CommaMean>,
                    decimal: 1.0140603161211186 as Decimal, // 24.172159¢
                },
                {
                    name: ")/| .|)" as Name<CommaMean>,
                    decimal: 1.0146023799587647 as Decimal, // 25.097339¢
                },
                {
                    name: ".|) |)" as Name<CommaMean>,
                    decimal: 1.0152999644169847 as Decimal, // 26.287231¢
                },
                {
                    name: "|) '|)" as Name<CommaMean>,
                    decimal: 1.0164463907684076 as Decimal, // 28.240952¢
                },
                {
                    name: "'|) )|)" as Name<CommaMean>,
                    decimal: 1.0174385299902267 as Decimal, // 29.929961¢
                },
                {
                    name: ")|) .(|" as Name<CommaMean>,
                    decimal: 1.0180194675759577 as Decimal, // 30.918180¢
                },
                {
                    name: ".(| |\\" as Name<CommaMean>,
                    decimal: 1.0183501544346312 as Decimal, // 31.480451¢
                },
                {
                    name: "|\\ (|" as Name<CommaMean>,
                    decimal: 1.0189249274664447 as Decimal, // 32.457312¢
                },
                {
                    name: "(| '(|" as Name<CommaMean>,
                    decimal: 1.019869688844622 as Decimal,  // 34.061792¢
                },
                {
                    name: "'(| ~|)" as Name<CommaMean>,
                    decimal: 1.0206207261596576 as Decimal, // 35.336213¢
                },
                {
                    name: "~|) .(|(" as Name<CommaMean>,
                    decimal: 1.021203480717427 as Decimal,  // 36.324432¢
                },
                {
                    name: ".(|( '~|)" as Name<CommaMean>,
                    decimal: 1.0217798642119988 as Decimal, // 37.301292¢
                },
                {
                    name: "'~|) /|~" as Name<CommaMean>,
                    decimal: 1.0221041081324975 as Decimal, // 37.850582¢
                },
                {
                    name: "/|~ (|(" as Name<CommaMean>,
                    decimal: 1.0224747162910903 as Decimal, // 38.478202¢
                },
                {
                    name: "(|( ~|\\" as Name<CommaMean>,
                    decimal: 1.0230518172912486 as Decimal, // 39.455062¢
                },
                {
                    name: "~|\\ .//|" as Name<CommaMean>,
                    decimal: 1.0236881849469592 as Decimal, // 40.531605¢
                },
                {
                    name: ".//| //|" as Name<CommaMean>,
                    decimal: 1.024577961894555 as Decimal,  // 42.035718¢
                },
                {
                    name: "//| '//|" as Name<CommaMean>,
                    decimal: 1.0257358558871925 as Decimal, // 43.991112¢
                },
                {
                    name: "'//| )//|" as Name<CommaMean>,
                    decimal: 1.0267380547824267 as Decimal, // 45.681795¢
                },
                {
                    name: ")//| /|)" as Name<CommaMean>,
                    decimal: 1.0278657191033935 as Decimal, // 47.582162¢
                },
                {
                    name: "/|) (|~" as Name<CommaMean>,
                    decimal: 1.0289055430608551 as Decimal, // 49.332652¢
                },
                {
                    name: "(|~ '/|)" as Name<CommaMean>,
                    decimal: 1.0294862737219739 as Decimal, // 50.309513¢
                },
                {
                    name: "'/|) ./|\\" as Name<CommaMean>,
                    decimal: 1.0299098434883927 as Decimal, // 51.021662¢
                },
                {
                    name: "./|\\ /|\\" as Name<CommaMean>,
                    decimal: 1.0306682744252496 as Decimal, // 52.296082¢
                },
                {
                    name: "/|\\ (/|" as Name<CommaMean>,
                    decimal: 1.0316239243982173 as Decimal, // 53.900563¢
                },
                {
                    name: "(/| '/|\\" as Name<CommaMean>,
                    decimal: 1.0322061893570194 as Decimal, // 54.877423¢
                },
                {
                    name: "'/|\\ )/|\\" as Name<CommaMean>,
                    decimal: 1.0327887829554296 as Decimal, // 55.854284¢
                },
                {
                    name: ")/|\\ .(|)" as Name<CommaMean>,
                    decimal: 1.0337531814094754 as Decimal, // 57.470123¢
                },
                {
                    name: ".(|) |\\)" as Name<CommaMean>,
                    decimal: 1.0345521125146488 as Decimal, // 58.807582¢
                },
                {
                    name: "|\\) (|)" as Name<CommaMean>,
                    decimal: 1.0351360301894192 as Decimal, // 59.784442¢
                },
                {
                    name: "(|) '(|)" as Name<CommaMean>,
                    decimal: 1.0360958227277313 as Decimal, // 61.388923¢
                },
                {
                    name: "'(|) .(|\\" as Name<CommaMean>,
                    decimal: 1.0368588090517024 as Decimal, // 62.663343¢
                },
                {
                    name: ".(|\\ |\\\\" as Name<CommaMean>,
                    decimal: 1.0372854121592616 as Decimal, // 63.375492¢
                },
                {
                    name: "|\\\\ (|\\" as Name<CommaMean>,
                    decimal: 1.0378708725518453 as Decimal, // 64.352353¢
                },
                {
                    name: "(|\\ )|\\\\" as Name<CommaMean>,
                    decimal: 1.0389208180631835 as Decimal, // 66.102843¢
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
                    decimal: 1.0001220926687902 as Decimal, // 0.211358¢
                },
                {
                    name: "`| ``|" as Name<CommaMean>,
                    decimal: 1.000362593355847 as Decimal,  // 0.627620¢
                },
                {
                    name: "``| .)|" as Name<CommaMean>,
                    decimal: 1.0006520082594448 as Decimal, // 1.128411¢
                },
                {
                    name: ".)| '|" as Name<CommaMean>,
                    decimal: 1.0009760861279355 as Decimal, // 1.689009¢
                },
                {
                    name: "'| `'|" as Name<CommaMean>,
                    decimal: 1.0012513809203998 as Decimal, // 2.165078¢
                },
                {
                    name: "`'| ,)|" as Name<CommaMean>,
                    decimal: 1.001548851427391 as Decimal,  // 2.679349¢
                },
                {
                    name: ",)| )|" as Name<CommaMean>,
                    decimal: 1.0018386095273133 as Decimal, // 3.180140¢
                },
                {
                    name: ")| `)|" as Name<CommaMean>,
                    decimal: 1.0021129133950835 as Decimal, // 3.654088¢
                },
                {
                    name: "`)| ``)|" as Name<CommaMean>,
                    decimal: 1.00243843327159 as Decimal,   // 4.216360¢
                },
                {
                    name: "``)| ,,|(" as Name<CommaMean>,
                    decimal: 1.0027265772851153 as Decimal, // 4.713919¢
                },
                {
                    name: ",,|( ,|(" as Name<CommaMean>,
                    decimal: 1.0030003067719448 as Decimal, // 5.186456¢
                },
                {
                    name: ",|( |(" as Name<CommaMean>,
                    decimal: 1.0032414995869672 as Decimal, // 5.602718¢
                },
                {
                    name: "|( `|(" as Name<CommaMean>,
                    decimal: 1.003540379302116 as Decimal,  // 6.118400¢
                },
                {
                    name: "`|( .~|" as Name<CommaMean>,
                    decimal: 1.0038354948442407 as Decimal, // 6.627437¢
                },
                {
                    name: ".~| ,'|(" as Name<CommaMean>,
                    decimal: 1.0040781190463515 as Decimal, // 7.045821¢
                },
                {
                    name: ",'|( '|(" as Name<CommaMean>,
                    decimal: 1.0043494832354019 as Decimal, // 7.513645¢
                },
                {
                    name: "'|( ,~|" as Name<CommaMean>,
                    decimal: 1.0046735273134129 as Decimal, // 8.072121¢
                },
                {
                    name: ",~| ~|" as Name<CommaMean>,
                    decimal: 1.0049689760853675 as Decimal, // 8.581158¢
                },
                {
                    name: "~| ,)|(" as Name<CommaMean>,
                    decimal: 1.0051864089520404 as Decimal, // 8.955683¢
                },
                {
                    name: ",)|( )|(" as Name<CommaMean>,
                    decimal: 1.0054646693886806 as Decimal, // 9.434865¢
                },
                {
                    name: ")|( `)|(" as Name<CommaMean>,
                    decimal: 1.0057779303058083 as Decimal, // 9.974162¢
                },
                {
                    name: "`)|( ``)|(" as Name<CommaMean>,
                    decimal: 1.006103668289781 as Decimal,  // 10.534760¢
                },
                {
                    name: "``)|( ,')|(" as Name<CommaMean>,
                    decimal: 1.0063534432530417 as Decimal, // 10.964502¢
                },
                {
                    name: ",')|( ')|(" as Name<CommaMean>,
                    decimal: 1.006595442401244 as Decimal,  // 11.380764¢
                },
                {
                    name: "')|( )~|" as Name<CommaMean>,
                    decimal: 1.0068700755383595 as Decimal, // 11.853039¢
                },
                {
                    name: ")~| .~|(" as Name<CommaMean>,
                    decimal: 1.0072001858876987 as Decimal, // 12.420545¢
                },
                {
                    name: ".~|( `.~|(" as Name<CommaMean>,
                    decimal: 1.0075505355472798 as Decimal, // 13.022641¢
                },
                {
                    name: "`.~|( ,,~|(" as Name<CommaMean>,
                    decimal: 1.007846830373725 as Decimal,  // 13.531678¢
                },
                {
                    name: ",,~|( ,~|(" as Name<CommaMean>,
                    decimal: 1.008115219752334 as Decimal,  // 13.992644¢
                },
                {
                    name: ",~|( ~|(" as Name<CommaMean>,
                    decimal: 1.0083876750164096 as Decimal, // 14.460468¢
                },
                {
                    name: "~|( `~|(" as Name<CommaMean>,
                    decimal: 1.0086816227489368 as Decimal, // 14.965054¢
                },
                {
                    name: "`~|( ,,|~" as Name<CommaMean>,
                    decimal: 1.0089782501991804 as Decimal, // 15.474090¢
                },
                {
                    name: ",,|~ ,|~" as Name<CommaMean>,
                    decimal: 1.0092535334465123 as Decimal, // 15.946365¢
                },
                {
                    name: ",|~ |~" as Name<CommaMean>,
                    decimal: 1.009485538896294 as Decimal,  // 16.344292¢
                },
                {
                    name: "|~ `|~" as Name<CommaMean>,
                    decimal: 1.0097320555114089 as Decimal, // 16.767008¢
                },
                {
                    name: "`|~ ~~|" as Name<CommaMean>,
                    decimal: 1.010032992797895 as Decimal,  // 17.282903¢
                },
                {
                    name: "~~| `~~|" as Name<CommaMean>,
                    decimal: 1.0103313674747298 as Decimal, // 17.794253¢
                },
                {
                    name: "`~~| ``~~|" as Name<CommaMean>,
                    decimal: 1.0106110521630236 as Decimal, // 18.273435¢
                },
                {
                    name: "``~~| ,./|" as Name<CommaMean>,
                    decimal: 1.0109372695868597 as Decimal, // 18.832173¢
                },
                {
                    name: ",./| ./|" as Name<CommaMean>,
                    decimal: 1.01123456036511 as Decimal,   // 19.341210¢
                },
                {
                    name: "./| )|~" as Name<CommaMean>,
                    decimal: 1.0115126765082294 as Decimal, // 19.817280¢
                },
                {
                    name: ")|~ ,,/|" as Name<CommaMean>,
                    decimal: 1.0117625252650368 as Decimal, // 20.244851¢
                },
                {
                    name: ",,/| ,/|" as Name<CommaMean>,
                    decimal: 1.0120552382829548 as Decimal, // 20.745641¢
                },
                {
                    name: ",/| /|" as Name<CommaMean>,
                    decimal: 1.0123763962639598 as Decimal, // 21.294931¢
                },
                {
                    name: "/| `/|" as Name<CommaMean>,
                    decimal: 1.012615734126228 as Decimal,  // 21.704167¢
                },
                {
                    name: "`/| ``/|" as Name<CommaMean>,
                    decimal: 1.0128551285708234 as Decimal, // 22.113403¢
                },
                {
                    name: "``/| .)/|" as Name<CommaMean>,
                    decimal: 1.013156046536427 as Decimal,  // 22.627674¢
                },
                {
                    name: ".)/| '/|" as Name<CommaMean>,
                    decimal: 1.0134882872045345 as Decimal, // 23.195298¢
                },
                {
                    name: "'/| `'/|" as Name<CommaMean>,
                    decimal: 1.0137591295779698 as Decimal, // 23.657888¢
                },
                {
                    name: "`'/| ,,)/|" as Name<CommaMean>,
                    decimal: 1.0139333869076101 as Decimal, // 23.955448¢
                },
                {
                    name: ",,)/| ,)/|" as Name<CommaMean>,
                    decimal: 1.0140571807407932 as Decimal, // 24.166806¢
                },
                {
                    name: ",)/| )/|" as Name<CommaMean>,
                    decimal: 1.014300052082138 as Decimal,  // 24.581395¢
                },
                {
                    name: ")/| ,.|)" as Name<CommaMean>,
                    decimal: 1.0144785195688801 as Decimal, // 24.885981¢
                },
                {
                    name: ",.|) .|)" as Name<CommaMean>,
                    decimal: 1.0146033605858051 as Decimal, // 25.099012¢
                },
                {
                    name: ".|) `.|)" as Name<CommaMean>,
                    decimal: 1.0149319568328004 as Decimal, // 25.659611¢
                },
                {
                    name: "`.|) ,,|)" as Name<CommaMean>,
                    decimal: 1.0152606595011793 as Decimal, // 26.220209¢
                },
                {
                    name: ",,|) ,|)" as Name<CommaMean>,
                    decimal: 1.015504800579495 as Decimal,  // 26.636471¢
                },
                {
                    name: ",|) |)" as Name<CommaMean>,
                    decimal: 1.01574900036674 as Decimal,   // 27.052733¢
                },
                {
                    name: "|) `|)" as Name<CommaMean>,
                    decimal: 1.0159891355528685 as Decimal, // 27.461969¢
                },
                {
                    name: "`|) ``|)" as Name<CommaMean>,
                    decimal: 1.0163181806062358 as Decimal, // 28.022568¢
                },
                {
                    name: "``|) ,'|)" as Name<CommaMean>,
                    decimal: 1.016651458221751 as Decimal,  // 28.590192¢
                },
                {
                    name: ",'|) '|)" as Name<CommaMean>,
                    decimal: 1.0168959337472812 as Decimal, // 29.006454¢
                },
                {
                    name: "'|) `'|)" as Name<CommaMean>,
                    decimal: 1.0171363400821487 as Decimal, // 29.415690¢
                },
                {
                    name: "`'|) ,)|)" as Name<CommaMean>,
                    decimal: 1.0174179085550146 as Decimal, // 29.894872¢
                },
                {
                    name: ",)|) )|)" as Name<CommaMean>,
                    decimal: 1.0177201821167263 as Decimal, // 30.409143¢
                },
                {
                    name: ")|) .(|" as Name<CommaMean>,
                    decimal: 1.0180194675759577 as Decimal, // 30.918180¢
                },
                {
                    name: ".(| |\\" as Name<CommaMean>,
                    decimal: 1.0183501544346312 as Decimal, // 31.480451¢
                },
                {
                    name: "|\\ `|\\" as Name<CommaMean>,
                    decimal: 1.0186428721626566 as Decimal, // 31.978011¢
                },
                {
                    name: "`|\\ ,(|" as Name<CommaMean>,
                    decimal: 1.018894482113922 as Decimal,  // 32.405582¢
                },
                {
                    name: ",(| (|" as Name<CommaMean>,
                    decimal: 1.0191766070867996 as Decimal, // 32.884883¢
                },
                {
                    name: "(| `(|" as Name<CommaMean>,
                    decimal: 1.0194696614949148 as Decimal, // 33.382611¢
                },
                {
                    name: "`(| ``(|" as Name<CommaMean>,
                    decimal: 1.019803902718557 as Decimal,  // 33.950117¢
                },
                {
                    name: "``(| ,'(|" as Name<CommaMean>,
                    decimal: 1.0201214502594054 as Decimal, // 34.489106¢
                },
                {
                    name: ",'(| '(|" as Name<CommaMean>,
                    decimal: 1.0203255357771537 as Decimal, // 34.835422¢
                },
                {
                    name: "'(| ,~|)" as Name<CommaMean>,
                    decimal: 1.0204921440204184 as Decimal, // 35.118091¢
                },
                {
                    name: ",~|) ~|)" as Name<CommaMean>,
                    decimal: 1.0207047244089384 as Decimal, // 35.478690¢
                },
                {
                    name: "~|) `~|)" as Name<CommaMean>,
                    decimal: 1.0209925209541146 as Decimal, // 35.966757¢
                },
                {
                    name: "`~|) ,.(|(" as Name<CommaMean>,
                    decimal: 1.0212968142734182 as Decimal, // 36.482652¢
                },
                {
                    name: ",.(|( .(|(" as Name<CommaMean>,
                    decimal: 1.0215078369104984 as Decimal, // 36.840326¢
                },
                {
                    name: ".(|( '~|)" as Name<CommaMean>,
                    decimal: 1.0217798642119988 as Decimal, // 37.301292¢
                },
                {
                    name: "'~|) /|~" as Name<CommaMean>,
                    decimal: 1.0221041081324975 as Decimal, // 37.850582¢
                },
                {
                    name: "/|~ ,,(|(" as Name<CommaMean>,
                    decimal: 1.0222288995508408 as Decimal, // 38.061940¢
                },
                {
                    name: ",,(|( ,(|(" as Name<CommaMean>,
                    decimal: 1.0223741334649856 as Decimal, // 38.307889¢
                },
                {
                    name: ",(|( (|(" as Name<CommaMean>,
                    decimal: 1.0226199851298272 as Decimal, // 38.724151¢
                },
                {
                    name: "(|( `(|(" as Name<CommaMean>,
                    decimal: 1.0228521402294446 as Decimal, // 39.117131¢
                },
                {
                    name: "`(|( ~|\\" as Name<CommaMean>,
                    decimal: 1.0231767244179324 as Decimal, // 39.666420¢
                },
                {
                    name: "~|\\ ,.//|" as Name<CommaMean>,
                    decimal: 1.0235632153823178 as Decimal, // 40.320247¢
                },
                {
                    name: ",.//| .//|" as Name<CommaMean>,
                    decimal: 1.023874992369674 as Decimal,  // 40.847500¢
                },
                {
                    name: ".//| `.//|" as Name<CommaMean>,
                    decimal: 1.0241170486372915 as Decimal, // 41.256736¢
                },
                {
                    name: "`.//| ,,//|" as Name<CommaMean>,
                    decimal: 1.0243938285880985 as Decimal, // 41.724559¢
                },
                {
                    name: ",,//| ,//|" as Name<CommaMean>,
                    decimal: 1.0247297544222076 as Decimal, // 42.292184¢
                },
                {
                    name: ",//| //|" as Name<CommaMean>,
                    decimal: 1.0250311012172595 as Decimal, // 42.801221¢
                },
                {
                    name: "//| `//|" as Name<CommaMean>,
                    decimal: 1.025273430802806 as Decimal,  // 43.210457¢
                },
                {
                    name: "`//| ``//|" as Name<CommaMean>,
                    decimal: 1.0255158176779586 as Decimal, // 43.619693¢
                },
                {
                    name: "``//| ,'//|" as Name<CommaMean>,
                    decimal: 1.0258173956340964 as Decimal, // 44.128729¢
                },
                {
                    name: ",'//| '//|" as Name<CommaMean>,
                    decimal: 1.0261547800851307 as Decimal, // 44.698027¢
                },
                {
                    name: "'//| ,,)//|" as Name<CommaMean>,
                    decimal: 1.0264912130779862 as Decimal, // 45.265533¢
                },
                {
                    name: ",,)//| ,)//|" as Name<CommaMean>,
                    decimal: 1.0267328955000532 as Decimal, // 45.673096¢
                },
                {
                    name: ",)//| )//|" as Name<CommaMean>,
                    decimal: 1.0269797953221866 as Decimal, // 46.089358¢
                },
                {
                    name: ")//| `)//|" as Name<CommaMean>,
                    decimal: 1.0272859025931278 as Decimal, // 46.605302¢
                },
                {
                    name: "`)//| ``)//|" as Name<CommaMean>,
                    decimal: 1.027594535889138 as Decimal,  // 47.125348¢
                },
                {
                    name: "``)//| ,,/|)" as Name<CommaMean>,
                    decimal: 1.0279273395452693 as Decimal, // 47.685947¢
                },
                {
                    name: ",,/|) ,/|)" as Name<CommaMean>,
                    decimal: 1.0281986105867387 as Decimal, // 48.142761¢
                },
                {
                    name: ",/|) /|)" as Name<CommaMean>,
                    decimal: 1.0284458628713242 as Decimal, // 48.559023¢
                },
                {
                    name: "/|) `/|)" as Name<CommaMean>,
                    decimal: 1.0286889997472795 as Decimal, // 48.968259¢
                },
                {
                    name: "`/|) (|~" as Name<CommaMean>,
                    decimal: 1.0290231524277662 as Decimal, // 49.530530¢
                },
                {
                    name: "(|~ ,'/|)" as Name<CommaMean>,
                    decimal: 1.0293605963396193 as Decimal, // 50.098155¢
                },
                {
                    name: ",'/|) '/|)" as Name<CommaMean>,
                    decimal: 1.029607132919122 as Decimal,  // 50.512744¢
                },
                {
                    name: "'/|) `'/|)" as Name<CommaMean>,
                    decimal: 1.0298505443331756 as Decimal, // 50.921980¢
                },
                {
                    name: "`'/|) ./|\\" as Name<CommaMean>,
                    decimal: 1.0300275676521753 as Decimal, // 51.219540¢
                },
                {
                    name: "./|\\ `./|\\" as Name<CommaMean>,
                    decimal: 1.0301949479826407 as Decimal, // 51.500844¢
                },
                {
                    name: "`./|\\ ,,/|\\" as Name<CommaMean>,
                    decimal: 1.0304494113551723 as Decimal, // 51.928415¢
                },
                {
                    name: ",,/|\\ ,/|\\" as Name<CommaMean>,
                    decimal: 1.030752440154946 as Decimal,  // 52.437451¢
                },
                {
                    name: ",/|\\ /|\\" as Name<CommaMean>,
                    decimal: 1.031079531365064 as Decimal,  // 52.986741¢
                },
                {
                    name: "/|\\ `/|\\" as Name<CommaMean>,
                    decimal: 1.0313581930105753 as Decimal, // 53.454565¢
                },
                {
                    name: "`/|\\ ,(/|" as Name<CommaMean>,
                    decimal: 1.03160620508414 as Decimal,   // 53.870827¢
                },
                {
                    name: ",(/| (/|" as Name<CommaMean>,
                    decimal: 1.0318720003725614 as Decimal, // 54.316825¢
                },
                {
                    name: "(/| `(/|" as Name<CommaMean>,
                    decimal: 1.0321280162555164 as Decimal, // 54.746305¢
                },
                {
                    name: "`(/| '/|\\" as Name<CommaMean>,
                    decimal: 1.0323362474674525 as Decimal, // 55.095545¢
                },
                {
                    name: "'/|\\ `'/|\\" as Name<CommaMean>,
                    decimal: 1.0325404865741623 as Decimal, // 55.438022¢
                },
                {
                    name: "`'/|\\ ,)/|\\" as Name<CommaMean>,
                    decimal: 1.032826319295421 as Decimal,  // 55.917204¢
                },
                {
                    name: ",)/|\\ )/|\\" as Name<CommaMean>,
                    decimal: 1.033074684411262 as Decimal,  // 56.333466¢
                },
                {
                    name: ")/|\\ `)/|\\" as Name<CommaMean>,
                    decimal: 1.0333784852366532 as Decimal, // 56.842503¢
                },
                {
                    name: "`)/|\\ ``)/|\\" as Name<CommaMean>,
                    decimal: 1.0336823754020923 as Decimal, // 57.351539¢
                },
                {
                    name: "``)/|\\ ,.(|)" as Name<CommaMean>,
                    decimal: 1.0339309463748814 as Decimal, // 57.767801¢
                },
                {
                    name: ",.(|) .(|)" as Name<CommaMean>,
                    decimal: 1.0342171640097717 as Decimal, // 58.246983¢
                },
                {
                    name: ".(|) ,|\\)" as Name<CommaMean>,
                    decimal: 1.0344217752401141 as Decimal, // 58.589460¢
                },
                {
                    name: ",|\\) |\\)" as Name<CommaMean>,
                    decimal: 1.0346304692165578 as Decimal, // 58.938700¢
                },
                {
                    name: "|\\) `|\\)" as Name<CommaMean>,
                    decimal: 1.0348871694981947 as Decimal, // 59.368180¢
                },
                {
                    name: "`|\\) ,(|)" as Name<CommaMean>,
                    decimal: 1.0351538101332982 as Decimal, // 59.814178¢
                },
                {
                    name: ",(|) (|)" as Name<CommaMean>,
                    decimal: 1.0354027349439503 as Decimal, // 60.230440¢
                },
                {
                    name: "(|) `(|)" as Name<CommaMean>,
                    decimal: 1.0356825649872294 as Decimal, // 60.698264¢
                },
                {
                    name: "`(|) ``(|)" as Name<CommaMean>,
                    decimal: 1.0360112206860013 as Decimal, // 61.247554¢
                },
                {
                    name: "``(|) ,'(|)" as Name<CommaMean>,
                    decimal: 1.0363158850715566 as Decimal, // 61.756590¢
                },
                {
                    name: ",'(|) '(|)" as Name<CommaMean>,
                    decimal: 1.0365718603465663 as Decimal, // 62.184161¢
                },
                {
                    name: "'(|) ,.(|\\" as Name<CommaMean>,
                    decimal: 1.0367403041299996 as Decimal, // 62.465465¢
                },
                {
                    name: ",.(|\\ .(|\\" as Name<CommaMean>,
                    decimal: 1.0369185117452575 as Decimal, // 62.763025¢
                },
                {
                    name: ".(|\\ `.(|\\" as Name<CommaMean>,
                    decimal: 1.0371636516565232 as Decimal, // 63.172261¢
                },
                {
                    name: "`.(|\\ |\\\\" as Name<CommaMean>,
                    decimal: 1.0374120571035295 as Decimal, // 63.586850¢
                },
                {
                    name: "|\\\\ ,(|\\" as Name<CommaMean>,
                    decimal: 1.0377522519591325 as Decimal, // 64.154475¢
                },
                {
                    name: ",(|\\ (|\\" as Name<CommaMean>,
                    decimal: 1.038089348687841 as Decimal,  // 64.716746¢
                },
                {
                    name: "(|\\ `(|\\" as Name<CommaMean>,
                    decimal: 1.0383347653989332 as Decimal, // 65.125982¢
                },
                {
                    name: "`(|\\ ``(|\\" as Name<CommaMean>,
                    decimal: 1.03858445513812 as Decimal,   // 65.542244¢
                },
                {
                    name: "``(|\\ ,,)|\\\\" as Name<CommaMean>,
                    decimal: 1.0388585386029336 as Decimal, // 65.999058¢
                },
                {
                    name: ",,)|\\\\ ,)|\\\\" as Name<CommaMean>,
                    decimal: 1.0391949902945057 as Decimal, // 66.559657¢
                },
                {
                    name: ",)|\\\\ )|\\\\" as Name<CommaMean>,
                    decimal: 1.039507201504883 as Decimal,  // 67.079703¢
                },
                {
                    name: ")|\\\\ `)|\\\\" as Name<CommaMean>,
                    decimal: 1.039817042763714 as Decimal,  // 67.595647¢
                },
                {
                    name: "`)|\\\\ ``)|\\\\" as Name<CommaMean>,
                    decimal: 1.0400670889481058 as Decimal, // 68.011909¢
                },
            ])
        },
    )
})
