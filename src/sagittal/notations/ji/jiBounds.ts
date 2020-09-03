import { Cents, Id } from "../../../general"
import { Bound, Level } from "./types"

// Note: the bounds analysis I have proposed here: http://forum.sagittal.org/viewtopic.php?p=1808#p1808
// might stipulate a reorganizing of these, where each level is a separate list
// because some of these bounds bound symbols which are unrelated from one level to the next, so maybe can be different

const JI_BOUNDS: Bound[] = [
    {
        id: 0 as Id<Bound>,
        cents: 0.210788021120605 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 1 as Id<Bound>,
        cents: 0.772889410775552 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 2 as Id<Bound>,
        cents: 1.194465453016760 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 3 as Id<Bound>,
        cents: 1.756566842671710 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 4 as Id<Bound>,
        cents: 2.178142884912920 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 5 as Id<Bound>,
        cents: 2.740244274567870 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 6 as Id<Bound>,
        cents: 3.161820316809080 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 7 as Id<Bound>,
        cents: 3.723921706464020 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 8 as Id<Bound>,
        cents: 4.145497748705230 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 9 as Id<Bound>,
        cents: 4.567073790946440 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 10 as Id<Bound>,
        cents: 5.129175180601390 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 11 as Id<Bound>,
        cents: 5.550751222842600 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 12 as Id<Bound>,
        cents: 6.112852612497550 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 13 as Id<Bound>,
        cents: 6.534428654738760 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 14 as Id<Bound>,
        cents: 7.096530044393700 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 15 as Id<Bound>,
        cents: 7.518106086634910 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 16 as Id<Bound>,
        cents: 8.080207476289860 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 17 as Id<Bound>,
        cents: 8.501783518531070 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 18 as Id<Bound>,
        cents: 9.063884908186020 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 19 as Id<Bound>,
        cents: 9.485460950427230 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 20 as Id<Bound>,
        cents: 10.047562340082200 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 21 as Id<Bound>,
        cents: 10.469138382323400 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 22 as Id<Bound>,
        cents: 11.031239771978300 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 23 as Id<Bound>,
        cents: 11.452815814219500 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 24 as Id<Bound>,
        cents: 12.014917203874500 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 25 as Id<Bound>,
        cents: 12.436493246115700 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 26 as Id<Bound>,
        cents: 12.998594635770600 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 27 as Id<Bound>,
        cents: 13.420170678011900 as Cents,
        levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 28 as Id<Bound>,
        cents: 13.841746720253100 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 29 as Id<Bound>,
        cents: 14.403848109908000 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 30 as Id<Bound>,
        cents: 14.825424152149200 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 31 as Id<Bound>,
        cents: 15.387525541804200 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 32 as Id<Bound>,
        cents: 15.809101584045400 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 33 as Id<Bound>,
        cents: 16.371202973700300 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 34 as Id<Bound>,
        cents: 16.792779015941500 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 35 as Id<Bound>,
        cents: 17.354880405596500 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 36 as Id<Bound>,
        cents: 17.776456447837700 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 37 as Id<Bound>,
        cents: 18.338557837492600 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 38 as Id<Bound>,
        cents: 18.760133879733900 as Cents,
        levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 39 as Id<Bound>,
        cents: 19.322235269388800 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 40 as Id<Bound>,
        cents: 19.743811311630000 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 41 as Id<Bound>,
        cents: 20.305912701285000 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 42 as Id<Bound>,
        cents: 20.727488743526200 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 43 as Id<Bound>,
        cents: 21.289590133181100 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 44 as Id<Bound>,
        cents: 21.711166175422300 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 45 as Id<Bound>,
        cents: 22.132742217663500 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 46 as Id<Bound>,
        cents: 22.694843607318500 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 47 as Id<Bound>,
        cents: 23.116419649559700 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 48 as Id<Bound>,
        cents: 23.678521039214600 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 49 as Id<Bound>,
        cents: 23.955448448755500 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 50 as Id<Bound>,
        cents: 24.100097081455800 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 51 as Id<Bound>,
        cents: 24.662198471110800 as Cents,
        levels: [Level.MEDIUM, Level.EXTREME, Level.INSANE],
    },
    {
        id: 52 as Id<Bound>,
        cents: 24.885981585695500 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 53 as Id<Bound>,
        cents: 25.083774513352000 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 54 as Id<Bound>,
        cents: 25.645875903007000 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 55 as Id<Bound>,
        cents: 26.067451945248200 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 56 as Id<Bound>,
        cents: 26.629553334903100 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 57 as Id<Bound>,
        cents: 27.051129377144300 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 58 as Id<Bound>,
        cents: 27.613230766799300 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 59 as Id<Bound>,
        cents: 28.034806809040500 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 60 as Id<Bound>,
        cents: 28.596908198695400 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 61 as Id<Bound>,
        cents: 29.018484240936600 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 62 as Id<Bound>,
        cents: 29.580585630591600 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 63 as Id<Bound>,
        cents: 30.002161672832800 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 64 as Id<Bound>,
        cents: 30.564263062487700 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 65 as Id<Bound>,
        cents: 30.985839104728900 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 66 as Id<Bound>,
        cents: 31.407415146970200 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 67 as Id<Bound>,
        cents: 31.969516536625100 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 68 as Id<Bound>,
        cents: 32.391092578866300 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 69 as Id<Bound>,
        cents: 32.953193968521300 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 70 as Id<Bound>,
        cents: 33.374770010762500 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 71 as Id<Bound>,
        cents: 33.936871400417400 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 72 as Id<Bound>,
        cents: 34.358447442658600 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 73 as Id<Bound>,
        cents: 34.920548832313600 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 74 as Id<Bound>,
        cents: 35.118091464366500 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 75 as Id<Bound>,
        cents: 35.342124874554800 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 76 as Id<Bound>,
        cents: 35.904226264209700 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 77 as Id<Bound>,
        cents: 36.325802306450900 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 79 as Id<Bound>,
        cents: 36.887903696105900 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 80 as Id<Bound>,
        cents: 37.309479738347100 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 81 as Id<Bound>,
        cents: 37.871581128002000 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 82 as Id<Bound>,
        cents: 38.061940349778500 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 83 as Id<Bound>,
        cents: 38.293157170243300 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 84 as Id<Bound>,
        cents: 38.855258559898200 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 85 as Id<Bound>,
        cents: 39.276834602139400 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 86 as Id<Bound>,
        cents: 39.698410644380600 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 87 as Id<Bound>,
        cents: 40.260512034035600 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 88 as Id<Bound>,
        cents: 40.682088076276800 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 89 as Id<Bound>,
        cents: 41.244189465931700 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 90 as Id<Bound>,
        cents: 41.665765508172900 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 91 as Id<Bound>,
        cents: 42.227866897827900 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 92 as Id<Bound>,
        cents: 42.649442940069100 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 93 as Id<Bound>,
        cents: 43.211544329724000 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 94 as Id<Bound>,
        cents: 43.633120371965300 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 95 as Id<Bound>,
        cents: 44.195221761620200 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 96 as Id<Bound>,
        cents: 44.616797803861400 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 97 as Id<Bound>,
        cents: 45.112497836531300 as Cents,
        levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 98 as Id<Bound>,
        cents: 45.600475235757600 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 99 as Id<Bound>,
        cents: 46.162576625412500 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 100 as Id<Bound>,
        cents: 46.584152667653700 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 101 as Id<Bound>,
        cents: 47.146254057308700 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 102 as Id<Bound>,
        cents: 47.567830099549900 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 103 as Id<Bound>,
        cents: 48.129931489204800 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 104 as Id<Bound>,
        cents: 48.551507531446000 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 105 as Id<Bound>,
        cents: 48.973083573687200 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 106 as Id<Bound>,
        cents: 49.535184963342200 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 107 as Id<Bound>,
        cents: 49.956761005583400 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 108 as Id<Bound>,
        cents: 50.518862395238300 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 109 as Id<Bound>,
        cents: 50.940438437479600 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 110 as Id<Bound>,
        cents: 51.219540248855700 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 111 as Id<Bound>,
        cents: 51.502539827134500 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 112 as Id<Bound>,
        cents: 51.924115869375700 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 113 as Id<Bound>,
        cents: 52.486217259030700 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 114 as Id<Bound>,
        cents: 52.907793301271900 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 115 as Id<Bound>,
        cents: 53.469894690926800 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 116 as Id<Bound>,
        cents: 53.891470733168000 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 117 as Id<Bound>,
        cents: 54.453572122823000 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 118 as Id<Bound>,
        cents: 54.875148165064200 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 119 as Id<Bound>,
        cents: 55.095545776914000 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 120 as Id<Bound>,
        cents: 55.437249554719100 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 121 as Id<Bound>,
        cents: 55.858825596960300 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 122 as Id<Bound>,
        cents: 56.420926986615300 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 123 as Id<Bound>,
        cents: 56.842503028856500 as Cents,
        levels: [Level.MEDIUM, Level.EXTREME, Level.INSANE],
    },
    {
        id: 124 as Id<Bound>,
        cents: 57.264079071097700 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 125 as Id<Bound>,
        cents: 57.826180460752700 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 126 as Id<Bound>,
        cents: 58.247756502993900 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 127 as Id<Bound>,
        cents: 58.589460280797900 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 128 as Id<Bound>,
        cents: 58.809857892648800 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 129 as Id<Bound>,
        cents: 59.231433934890000 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 130 as Id<Bound>,
        cents: 59.793535324545000 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 131 as Id<Bound>,
        cents: 60.215111366786200 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 132 as Id<Bound>,
        cents: 60.777212756441100 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 133 as Id<Bound>,
        cents: 61.198788798682300 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 134 as Id<Bound>,
        cents: 61.760890188337300 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 135 as Id<Bound>,
        cents: 62.182466230578500 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 136 as Id<Bound>,
        cents: 62.465465808856200 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 137 as Id<Bound>,
        cents: 62.744567620233400 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 138 as Id<Bound>,
        cents: 63.166143662474700 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 139 as Id<Bound>,
        cents: 63.728245052129600 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 140 as Id<Bound>,
        cents: 64.149821094370800 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 141 as Id<Bound>,
        cents: 64.711922484025800 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 142 as Id<Bound>,
        cents: 65.133498526267000 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 143 as Id<Bound>,
        cents: 65.555074568508200 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 144 as Id<Bound>,
        cents: 66.117175958163100 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 145 as Id<Bound>,
        cents: 66.538752000404300 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 146 as Id<Bound>,
        cents: 67.100853390059300 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 147 as Id<Bound>,
        cents: 67.522429432300500 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 148 as Id<Bound>,
        cents: 68.084530821955400 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 149 as Id<Bound>,
        cents: 68.572508221180400 as Cents,
        levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
]

export {
    JI_BOUNDS,
}