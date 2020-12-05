// tslint:disable max-line-length

import {Io} from "@sagittal/general"
import * as cp from "child_process"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {
    OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS,
    OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS,
    OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS,
} from "../../../../helpers/src/scripts/jiPitch/constants"
import {runScriptAndGetConsoleOutput} from "../../../../helpers/src/scripts/runScriptAndGetConsoleOutput"

describe("analyze-ji-pitch", (): void => {
    const expected = [
        "   --- JI pitch ---",
        "",
        "quotient\t \t    \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
        "       n\t/\td   \t     \t  2    \t  3    \t  5    \t  7    \t 11    \t \tcents          \tslope  \tAAS    \tATE    ",
        "    2200\t/\t2187\t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
        "",
        "   --- 2,3-free class ---",
        "",
        "prime  \tname\t \t \t   \t       \t       \t       ",
        "limit  \t   n\t/\td\t₂,₃\tCoPFR  \tSoPFR  \tN2D3P9 ",
        " 11    \t 275\t/\t1\t₂,₃\t  3    \t 21    \t 42.014",
        "",
        "   --- notating commas ---",
        "",
        "comma   \t          \tquotient\t \t        \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
        "class   \tname      \t       n\t/\td       \t     \t  2    \t  3    \t  5    \t  7    \t 11    \t \tcents          \tslope  \tAAS    \tATE    ",
        "   `)|( \t5²⋅11k    \t    2200\t/\t2187    \t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
        "        \t5²⋅11S    \t   66825\t/\t65536   \t    [\t-16    \t  5    \t  2    \t  0    \t  1    \t⟩\t        33.720¢\t  2.924\t  2.924\t  5    ",
        "        \t1/(5²⋅11)M\t16777216\t/\t16238475\t    [\t 24    \t-10    \t -2    \t  0    \t -1    \t⟩\t        56.505¢\t-13.479\t 13.479\t 10    ",
        "",
    ] as Io[]

    it("can analyze a JI pitch, given it in the form of a monzo (note that it includes inverses in the notating commas list)", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch -- -m [3,-7,2,0,1] --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })

    it("can analyze a JI pitch, given it in the form of a rational quotient", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch -- -q 2200/2187 --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })

    it("can analyze a JI pitch, give it in the form of a comma name", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch -- --comma-name 275k --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })

    it("can analyze a JI pitch, given it in the form of a completely differently formatted comma name", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch -- --comma-name 5²⋅11-kleisma --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })

    /*
    Formats that work:
    npm run analyze-ji-pitch "|\\\\"          |\    requires escaping the backlash in two phases!
    npm run analyze-ji-pitch " /|"           /|     requires a space to prevent interpretation as file path
    npm run analyze-ji-pitch " /|\\\\"       /|\    both hacks required
    npm run analyze-ji-pitch "'/|"          '/|     leading space not required if anything is in front of the fwd slash
    npm run analyze-ji-pitch "\`)|("        `)|(    double quote requires escaping `
    npm run analyze-ji-pitch '`)|('         `)|(    single quote requires *not* escaping `, which is better, of course
    npm run analyze-ji-pitch "'"'/|'        '/|     when single quoting, a tick up needs to be in double quotes
    npm run analyze-ji-pitch '`'"'"'/|'    `'/|     this works too, when the single quote is in the middle of the symbol
    npm run analyze-ji-pitch '|\\'            |\    when single quoting, only need one phase of backlash escaping
    npm run analyze-ji-pitch ' /|'           /|     single quotes still requires the leading space
    npm run analyze-ji-pitch ' /|\\'         /|\

    So of course double quotes are nice because they're not actually used in any of the symbols
    But they don't seem to work on CI, so that's kind of a deal-breaker
    And the single quotes require less escaping of \, and not escaping `, but do require escaping '

    Wait... except single quotes don't work on CI or locally, but double-quotes do...?
     */

    it("can analyze a JI pitch, given it in the form of an accidental (expressed as ASCII)", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch -- --accidental "\`)|(" --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })

    it("can analyze a JI pitch, given it in the form of an accidental (expressed as smiley)", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch -- --accidental ":\`::)|(:" --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })

    it("can analyze a JI pitch, given it in the form of an accidental (expressed as Unicode)", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch -- --accidental "" --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })

    it("throws an error if you provide neither monzo, quotient, comma name, integer decimal, or accidental", (): void => {
        onlyRunInCi()

        const script = "npm run analyze-ji-pitch" as Io

        expect((): void => {
            cp.execSync(script, {stdio: [undefined, undefined, undefined]})
        }).toThrowError(/Unable to read JI pitch/)
    })

    it("can sort the notating commas", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch [3,-7,2,0,1] -- --sort-by apotomeSlope --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "   --- JI pitch ---",
            "",
            "quotient\t \t    \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "       n\t/\td   \t     \t  2    \t  3    \t  5    \t  7    \t 11    \t \tcents          \tslope  \tAAS    \tATE    ",
            "    2200\t/\t2187\t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
            "",
            "   --- 2,3-free class ---",
            "",
            "prime  \tname\t \t \t   \t       \t       \t       ",
            "limit  \t   n\t/\td\t₂,₃\tCoPFR  \tSoPFR  \tN2D3P9 ",
            " 11    \t 275\t/\t1\t₂,₃\t  3    \t 21    \t 42.014",
            "",
            "   --- notating commas ---",
            "",
            "comma   \t          \tquotient\t \t        \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "class   \tname      \t       n\t/\td       \t     \t  2    \t  3    \t  5    \t  7    \t 11    \t \tcents          \tslope  \tAAS    \tATE    ",
            "        \t1/(5²⋅11)M\t16777216\t/\t16238475\t    [\t 24    \t-10    \t -2    \t  0    \t -1    \t⟩\t        56.505¢\t-13.479\t 13.479\t 10    ",
            "   `)|( \t5²⋅11k    \t    2200\t/\t2187    \t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
            "        \t5²⋅11S    \t   66825\t/\t65536   \t    [\t-16    \t  5    \t  2    \t  0    \t  1    \t⟩\t        33.720¢\t  2.924\t  2.924\t  5    ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("sorts size category correctly (notice that it hasn't sorted by cents, as in the middle of the S size category, it has one that's out of order, but is still in the correct category)", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch [-271,171] -- --sort-by sizeCategory` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "   --- JI pitch ---",
            "",
            "             quotient\t \t                     \tmonzo\t       \t       \t \t               \tapotome\t       \t       ",
            "                    n\t/\td                    \t     \t  2    \t  3    \t \tcents          \tslope  \tAAS    \tATE    ",
            "3.870210234510308e+81\t/\t3.794275180128377e+81\t    [\t-271   \t171    \t⟩\t        34.305¢\t168.888\t168.888\t171    ",
            "",
            "   --- 2,3-free class ---",
            "",
            "prime  \tname\t \t \t   \t       \t       \t       ",
            "limit  \t   n\t/\td\t₂,₃\tCoPFR  \tSoPFR  \tN2D3P9 ",
            "  1    \t   1\t/\t1\t₂,₃\t  0    \t  0    \t  1.000",
            "",
            "   --- notating commas ---",
            "",
            "comma   \t      \t              quotient\t \t                      \tmonzo\t       \t       \t \t               \tapotome \t       \t       ",
            "class   \tname  \t                     n\t/\td                     \t     \t  2    \t  3    \t \tcents          \tslope   \tAAS    \tATE    ",
            " (|//|) \t1u    \t                     1\t/\t1                     \t    [\t       \t       \t⟩\t         0.000¢\t  0.000 \t  0.000\t  0    ",
            "        \t3s    \t 1.938324566768002e+25\t/\t1.9342813113834067e+25\t    [\t-84    \t 53    \t⟩\t         3.615¢\t 52.777 \t 52.777\t 53    ",
            "        \t3k    \t 3.757102126136363e+50\t/\t3.7414441915671115e+50\t    [\t-168   \t106    \t⟩\t         7.230¢\t105.555 \t105.555\t106    ",
            "        \t159e3k\t 7.282483350946405e+75\t/\t7.237005577332262e+75 \t    [\t-252   \t159    \t⟩\t        10.845¢\t158.332 \t158.332\t159    ",
            "        \t147e3C\t1.3803492693581128e+70\t/\t1.3703277223523221e+70\t    [\t233    \t-147   \t⟩\t        12.615¢\t-147.777\t147.777\t147    ",
            "        \t94e3C \t   7.1362384635298e+44\t/\t7.069650490151047e+44 \t    [\t149    \t-94    \t⟩\t        16.230¢\t-94.999 \t 94.999\t 94    ",
            "        \t41e3C \t  36893488147419103000\t/\t36472996377170790000  \t    [\t 65    \t-41    \t⟩\t        19.845¢\t-42.222 \t 42.222\t 41    ",
            "   '/|  \t3C    \t                531441\t/\t524288                \t    [\t-19    \t 12    \t⟩\t        23.460¢\t 10.555 \t 10.555\t 12    ",
            "        \t65e3C \t1.0301051460877538e+31\t/\t1.0141204801825835e+31\t    [\t-103   \t 65    \t⟩\t        27.075¢\t 63.333 \t 63.333\t 65    ",
            "        \t118e3C\t1.9966781110160347e+56\t/\t1.9615942923083377e+56\t    [\t-187   \t118    \t⟩\t        30.690¢\t116.110 \t116.110\t118    ",
            "        \t135e3S\t2.6328072917139297e+64\t/\t2.5785133671514282e+64\t    [\t214    \t-135   \t⟩\t        36.075¢\t-137.221\t137.221\t135    ",
            "        \t82e3S \t 1.361129467683754e+39\t/\t1.3302794647291133e+39\t    [\t130    \t-82    \t⟩\t        39.690¢\t-84.444 \t 84.444\t 82    ",
            "        \t3S    \t        70368744177664\t/\t68630377364883        \t    [\t 46    \t-29    \t⟩\t        43.305¢\t-31.666 \t 31.666\t 29    ",
            "        \t171e3S\t 3.870210234510308e+81\t/\t3.794275180128377e+81 \t    [\t-271   \t171    \t⟩\t        34.305¢\t168.888 \t168.888\t171    ",
            "        \t3M    \t          282429536481\t/\t274877906944          \t    [\t-38    \t 24    \t⟩\t        46.920¢\t 21.111 \t 21.111\t 24    ",
            "        \t77e3M \t 5.474401089420219e+36\t/\t5.316911983139664e+36 \t    [\t-122   \t 77    \t⟩\t        50.535¢\t 73.888 \t 73.888\t 77    ",
            "        \t130e3M\t1.0611166119964724e+62\t/\t1.0284403483257538e+62\t    [\t-206   \t130    \t⟩\t        54.150¢\t126.666 \t126.666\t130    ",
            "",
        ] as Io[]
        expect(actual.join()).toEqualWhitespaceAgnostic(expected.join())
    })

    it("can analyze a JI pitch given as an integer decimal", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch -- -i 275 --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "   --- JI pitch ---",
            "",
            "quotient\t \t \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome \t       \t       ",
            "       n\t/\td\t     \t  2    \t  3    \t  5    \t  7    \t 11    \t \tcents          \tslope   \tAAS    \tATE    ",
            "     275\t/\t1\t    [\t  0    \t  0    \t  2    \t  0    \t  1    \t⟩\t      9723.945¢\t-598.739\t598.739\t  0    ",
            "",
            "   --- 2,3-free class ---",
            "",
            "prime  \tname\t \t \t   \t       \t       \t       ",
            "limit  \t   n\t/\td\t₂,₃\tCoPFR  \tSoPFR  \tN2D3P9 ",
            " 11    \t 275\t/\t1\t₂,₃\t  3    \t 21    \t 42.014",
            "",
            "   --- notating commas ---",
            "",
            "comma   \t          \tquotient\t \t        \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "class   \tname      \t       n\t/\td       \t     \t  2    \t  3    \t  5    \t  7    \t 11    \t \tcents          \tslope  \tAAS    \tATE    ",
            "   `)|( \t5²⋅11k    \t    2200\t/\t2187    \t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
            "        \t5²⋅11S    \t   66825\t/\t65536   \t    [\t-16    \t  5    \t  2    \t  0    \t  1    \t⟩\t        33.720¢\t  2.924\t  2.924\t  5    ",
            "        \t1/(5²⋅11)M\t16777216\t/\t16238475\t    [\t 24    \t-10    \t -2    \t  0    \t -1    \t⟩\t        56.505¢\t-13.479\t 13.479\t 10    ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can format the names of the commas in the notating commas table", (): void => {
        onlyRunInCi()

        const script = `npm run analyze-ji-pitch [3,-7,2,0,1] -- --undirected --factoring-mode always --unabbreviated --max-n2d3p9 ${OLD_MAX_N2D3P9_FOR_SHORTER_TEST_RESULTS} --max-ate ${OLD_MAX_ATE_FOR_SHORTER_TEST_RESULTS} --max-aas ${OLD_MAX_AAS_FOR_SHORTER_TEST_RESULTS}` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "   --- JI pitch ---",
            "",
            "quotient\t \t    \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "       n\t/\td   \t     \t  2    \t  3    \t  5    \t  7    \t 11    \t \tcents          \tslope  \tAAS    \tATE    ",
            "    2200\t/\t2187\t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
            "",
            "   --- 2,3-free class ---",
            "",
            "prime  \tname\t \t \t   \t       \t       \t       ",
            "limit  \t   n\t/\td\t₂,₃\tCoPFR  \tSoPFR  \tN2D3P9 ",
            " 11    \t 275\t/\t1\t₂,₃\t  3    \t 21    \t 42.014",
            "",
            "   --- notating commas ---",
            "",
            "comma   \t                   \tquotient\t \t        \tmonzo\t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "class   \tname               \t       n\t/\td       \t     \t  2    \t  3    \t  5    \t  7    \t 11    \t \tcents          \tslope  \tAAS    \tATE    ",
            "   `)|( \t5²⋅11-kleisma      \t    2200\t/\t2187    \t    [\t  3    \t -7    \t  2    \t  0    \t  1    \t⟩\t        10.260¢\t -7.632\t  7.632\t  7    ",
            "        \t5²⋅11-Small-Diesis \t   66825\t/\t65536   \t    [\t-16    \t  5    \t  2    \t  0    \t  1    \t⟩\t        33.720¢\t  2.924\t  2.924\t  5    ",
            "        \t5²⋅11-Medium-Diesis\t16777216\t/\t16238475\t    [\t 24    \t-10    \t -2    \t  0    \t -1    \t⟩\t        56.505¢\t-13.479\t 13.479\t 10    ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("automatically adjusts the filters to include the JI pitch itself in the list of notating commas", (): void => {
        onlyRunInCi()

        const script = "npm run analyze-ji-pitch \"[  -34   19   0   0   1  -1   0   1 ⟩\"" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "   --- JI pitch ---",
            "",
            "    quotient\t \t            \tmonzo\t       \t       \t       \t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "           n\t/\td           \t     \t  2    \t  3    \t  5    \t  7    \t 11    \t 13    \t 17    \t 19    \t \tcents          \tslope  \tAAS    \tATE    ",
            "242912646603\t/\t223338299392\t    [\t-34    \t 19    \t  0    \t  0    \t  1    \t -1    \t  0    \t  1    \t⟩\t       145.448¢\t 10.044\t 10.044\t 19    ",
            "",
            "   --- 2,3-free class ---",
            "",
            "prime  \tname\t \t  \t   \t       \t       \t       ",
            "limit  \t   n\t/\td \t₂,₃\tCoPFR  \tSoPFR  \tN2D3P9 ",
            " 19    \t 209\t/\t13\t₂,₃\t  3    \t 43    \t477.991",
            "",
            "   --- notating commas ---",
            "",
            "comma\t           \t quotient\t \t         \tmonzo\t       \t       \t       \t       \t       \t       \t       \t       \t \t               \tapotome\t       \t       ",
            "class\tname       \t        n\t/\td        \t     \t  2    \t  3    \t  5    \t  7    \t 11    \t 13    \t 17    \t 19    \t \tcents          \tslope  \tAAS    \tATE    ",
            "     \t11⋅19/13k  \t      209\t/\t208      \t    [\t -4    \t  0    \t  0    \t  0    \t  1    \t -1    \t  0    \t  1    \t⟩\t         8.303¢\t -0.511\t  0.511\t  0    ",
            "     \t11⋅19/13C  \t111071169\t/\t109051904\t    [\t-23    \t 12    \t  0    \t  0    \t  1    \t -1    \t  0    \t  1    \t⟩\t        31.763¢\t 10.044\t 10.044\t 12    ",
            "     \t13/(11⋅19)C\t  6908733\t/\t6848512  \t    [\t-15    \t 12    \t  0    \t  0    \t -1    \t  1    \t  0    \t -1    \t⟩\t        15.157¢\t 11.067\t 11.067\t 12    ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    // There's a complication with respect to ordered fields, which only pertains to the `analyze-ji-pitch` script:
    // You can't specify which table the ordered fields are for.
    // Now, all three of the constituent tables have had the work done to make them orderable.
    // But you still can't choose different orders for each of them.
    // Which is... fine I guess, but the problem was when you pick ordered fields that one of the tables doesn't have
    // Then it gets totally scrambled. So I've fixed that now. Which results sometimes in a table having no columns.
    it("can order fields without scrambling any of the tables", (): void => {
        onlyRunInCi()

        const script = "npm run analyze-ji-pitch 1/5C -- --ordered-fields name,cents,aas,ate" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "   --- JI pitch ---",
            "",
            "               \t       \t       ",
            "cents          \tAAS    \tATE    ",
            "        21.506¢\t  2.676\t  4    ",
            "",
            "",
            "   --- notating commas ---",
            "",
            "    \t               \t       \t       ",
            "name\tcents          \tAAS    \tATE    ",
            "1/5C\t        21.506¢\t  2.676\t  4    ",
            "1/5S\t        44.966¢\t 13.231\t 16    ",
            "5s  \t         1.954¢\t  7.880\t  8    ",
            "c5C \t        25.414¢\t 18.435\t 20    ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
