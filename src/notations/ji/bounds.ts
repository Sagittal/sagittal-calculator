import { Cents, Id } from "../../general"
import { Bound, Level } from "./types"

const BOUNDS: Bound[] = [
    {
        id: 0 as Id<Bound>,
        cents: 0.210788021120605 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 1 as Id<Bound>,
        cents: 0.772889410775553 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 2 as Id<Bound>,
        cents: 1.19446545301676 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 3 as Id<Bound>,
        cents: 1.75656684267171 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 4 as Id<Bound>,
        cents: 2.17814288491292 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 5 as Id<Bound>,
        cents: 2.74024427456787 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 6 as Id<Bound>,
        cents: 3.16182031680908 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 7 as Id<Bound>,
        cents: 3.72392170646403 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 8 as Id<Bound>,
        cents: 4.14549774870524 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 9 as Id<Bound>,
        cents: 4.56707379094645 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 10 as Id<Bound>,
        cents: 5.1291751806014 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 11 as Id<Bound>,
        cents: 5.55075122284261 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 12 as Id<Bound>,
        cents: 6.11285261249756 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 13 as Id<Bound>,
        cents: 6.53442865473877 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 14 as Id<Bound>,
        cents: 7.09653004439371 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 15 as Id<Bound>,
        cents: 7.51810608663493 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 16 as Id<Bound>,
        cents: 8.08020747628987 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 17 as Id<Bound>,
        cents: 8.50178351853108 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 18 as Id<Bound>,
        cents: 9.06388490818603 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 19 as Id<Bound>,
        cents: 9.48546095042724 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 20 as Id<Bound>,
        cents: 10.0475623400822 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 21 as Id<Bound>,
        cents: 10.4691383823234 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 22 as Id<Bound>,
        cents: 11.0312397719783 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 23 as Id<Bound>,
        cents: 11.4528158142196 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 24 as Id<Bound>,
        cents: 12.0149172038745 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 25 as Id<Bound>,
        cents: 12.4364932461157 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 26 as Id<Bound>,
        cents: 12.9985946357707 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 27 as Id<Bound>,
        cents: 13.4201706780119 as Cents,
        levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 28 as Id<Bound>,
        cents: 13.8417467202531 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 29 as Id<Bound>,
        cents: 14.403848109908 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 30 as Id<Bound>,
        cents: 14.8254241521492 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 31 as Id<Bound>,
        cents: 15.3875255418042 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 32 as Id<Bound>,
        cents: 15.8091015840454 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 33 as Id<Bound>,
        cents: 16.3712029737004 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 34 as Id<Bound>,
        cents: 16.7927790159416 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 35 as Id<Bound>,
        cents: 17.3548804055965 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 36 as Id<Bound>,
        cents: 17.7764564478377 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 37 as Id<Bound>,
        cents: 18.3385578374927 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 38 as Id<Bound>,
        cents: 18.7601338797339 as Cents,
        levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 39 as Id<Bound>,
        cents: 19.3222352693888 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 40 as Id<Bound>,
        cents: 19.74381131163 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 41 as Id<Bound>,
        cents: 20.305912701285 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 42 as Id<Bound>,
        cents: 20.7274887435262 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 43 as Id<Bound>,
        cents: 21.2895901331811 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 44 as Id<Bound>,
        cents: 21.7111661754224 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 45 as Id<Bound>,
        cents: 22.1327422176636 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 46 as Id<Bound>,
        cents: 22.6948436073185 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 47 as Id<Bound>,
        cents: 23.1164196495597 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 48 as Id<Bound>,
        cents: 23.6785210392147 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 49 as Id<Bound>,
        cents: 23.9554484487555 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 50 as Id<Bound>,
        cents: 24.1000970814559 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 51 as Id<Bound>,
        cents: 24.6621984711108 as Cents,
        levels: [Level.MEDIUM, Level.EXTREME, Level.INSANE],
    },
    {
        id: 52 as Id<Bound>,
        cents: 24.8859815856955 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 53 as Id<Bound>,
        cents: 25.083774513352 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 54 as Id<Bound>,
        cents: 25.645875903007 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 55 as Id<Bound>,
        cents: 26.0674519452482 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 56 as Id<Bound>,
        cents: 26.6295533349031 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 57 as Id<Bound>,
        cents: 27.0511293771444 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 58 as Id<Bound>,
        cents: 27.6132307667993 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 59 as Id<Bound>,
        cents: 28.0348068090405 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 60 as Id<Bound>,
        cents: 28.5969081986955 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 61 as Id<Bound>,
        cents: 29.0184842409367 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 62 as Id<Bound>,
        cents: 29.5805856305916 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 63 as Id<Bound>,
        cents: 30.0021616728328 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 64 as Id<Bound>,
        cents: 30.5642630624878 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 65 as Id<Bound>,
        cents: 30.985839104729 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 66 as Id<Bound>,
        cents: 31.4074151469702 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 67 as Id<Bound>,
        cents: 31.9695165366251 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 68 as Id<Bound>,
        cents: 32.3910925788664 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 69 as Id<Bound>,
        cents: 32.9531939685213 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 70 as Id<Bound>,
        cents: 33.3747700107625 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 71 as Id<Bound>,
        cents: 33.9368714004175 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 72 as Id<Bound>,
        cents: 34.3584474426587 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 73 as Id<Bound>,
        cents: 34.9205488323136 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 74 as Id<Bound>,
        cents: 35.1180914643665 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 75 as Id<Bound>,
        cents: 35.3421248745548 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 76 as Id<Bound>,
        cents: 35.9042262642098 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 77 as Id<Bound>,
        cents: 36.325802306451 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 79 as Id<Bound>,
        cents: 36.8879036961059 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 80 as Id<Bound>,
        cents: 37.3094797383472 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 81 as Id<Bound>,
        cents: 37.8715811280021 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 82 as Id<Bound>,
        cents: 38.0619403497785 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 83 as Id<Bound>,
        cents: 38.2931571702433 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 84 as Id<Bound>,
        cents: 38.8552585598983 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 85 as Id<Bound>,
        cents: 39.2768346021395 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 86 as Id<Bound>,
        cents: 39.6984106443807 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 87 as Id<Bound>,
        cents: 40.2605120340356 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 88 as Id<Bound>,
        cents: 40.6820880762768 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 89 as Id<Bound>,
        cents: 41.2441894659318 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 90 as Id<Bound>,
        cents: 41.665765508173 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 91 as Id<Bound>,
        cents: 42.2278668978279 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 92 as Id<Bound>,
        cents: 42.6494429400692 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 93 as Id<Bound>,
        cents: 43.2115443297241 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 94 as Id<Bound>,
        cents: 43.6331203719653 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 95 as Id<Bound>,
        cents: 44.1952217616203 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 96 as Id<Bound>,
        cents: 44.6167978038615 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 97 as Id<Bound>,
        cents: 45.1124978365313 as Cents,
        levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 98 as Id<Bound>,
        cents: 45.6004752357576 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 99 as Id<Bound>,
        cents: 46.1625766254126 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 100 as Id<Bound>,
        cents: 46.5841526676538 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 101 as Id<Bound>,
        cents: 47.1462540573087 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 102 as Id<Bound>,
        cents: 47.5678300995499 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 103 as Id<Bound>,
        cents: 48.1299314892049 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 104 as Id<Bound>,
        cents: 48.5515075314461 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 105 as Id<Bound>,
        cents: 48.9730835736873 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 106 as Id<Bound>,
        cents: 49.5351849633423 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 107 as Id<Bound>,
        cents: 49.9567610055835 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 108 as Id<Bound>,
        cents: 50.5188623952384 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 109 as Id<Bound>,
        cents: 50.9404384374796 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 110 as Id<Bound>,
        cents: 51.2195402488557 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 111 as Id<Bound>,
        cents: 51.5025398271346 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 112 as Id<Bound>,
        cents: 51.9241158693758 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 113 as Id<Bound>,
        cents: 52.4862172590307 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 114 as Id<Bound>,
        cents: 52.907793301272 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 115 as Id<Bound>,
        cents: 53.4698946909269 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 116 as Id<Bound>,
        cents: 53.8914707331681 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 117 as Id<Bound>,
        cents: 54.4535721228231 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 118 as Id<Bound>,
        cents: 54.8751481650643 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 119 as Id<Bound>,
        cents: 55.095545776914 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 120 as Id<Bound>,
        cents: 55.4372495547192 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 121 as Id<Bound>,
        cents: 55.8588255969604 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 122 as Id<Bound>,
        cents: 56.4209269866154 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 123 as Id<Bound>,
        cents: 56.8425030288566 as Cents,
        levels: [Level.MEDIUM, Level.EXTREME, Level.INSANE],
    },
    {
        id: 124 as Id<Bound>,
        cents: 57.2640790710978 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 125 as Id<Bound>,
        cents: 57.8261804607527 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 126 as Id<Bound>,
        cents: 58.247756502994 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 127 as Id<Bound>,
        cents: 58.5894602807979 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 128 as Id<Bound>,
        cents: 58.8098578926489 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 129 as Id<Bound>,
        cents: 59.2314339348901 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 130 as Id<Bound>,
        cents: 59.7935353245451 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 131 as Id<Bound>,
        cents: 60.2151113667863 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 132 as Id<Bound>,
        cents: 60.7772127564412 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 133 as Id<Bound>,
        cents: 61.1987887986824 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 134 as Id<Bound>,
        cents: 61.7608901883374 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 135 as Id<Bound>,
        cents: 62.1824662305786 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 136 as Id<Bound>,
        cents: 62.4654658088562 as Cents,
        levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 137 as Id<Bound>,
        cents: 62.7445676202335 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 138 as Id<Bound>,
        cents: 63.1661436624748 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 139 as Id<Bound>,
        cents: 63.7282450521297 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 140 as Id<Bound>,
        cents: 64.1498210943709 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 141 as Id<Bound>,
        cents: 64.7119224840259 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 142 as Id<Bound>,
        cents: 65.1334985262671 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 143 as Id<Bound>,
        cents: 65.5550745685083 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 144 as Id<Bound>,
        cents: 66.1171759581632 as Cents,
        levels: [Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
    {
        id: 145 as Id<Bound>,
        cents: 66.5387520004044 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 146 as Id<Bound>,
        cents: 67.1008533900594 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 147 as Id<Bound>,
        cents: 67.5224294323006 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 148 as Id<Bound>,
        cents: 68.0845308219555 as Cents,
        levels: [Level.EXTREME, Level.INSANE],
    },
    {
        id: 149 as Id<Bound>,
        cents: 68.5725082211804 as Cents,
        levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
    },
]

export {
    BOUNDS,
}
