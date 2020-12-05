import {Name, RecordKey} from "@sagittal/general"
import {CommaClassId} from "../../notation"
import {Minas} from "./types"

const EXTREME_NOTATION_MINAS: Record<RecordKey<CommaClassId>, Name<Minas>> = {
    [CommaClassId._1_u]: "0" as Name<Minas>,                //  (|//|)
    [CommaClassId._1_V_5_7_13_n]: "1" as Name<Minas>,       //     `|
    [CommaClassId._65_V_77_n]: "2" as Name<Minas>,          //    ``|
    [CommaClassId._19_V_5_n]: "3" as Name<Minas>,           //    .)|
    [CommaClassId._5_s]: "4" as Name<Minas>,                //     '|
    [CommaClassId._1_V_7_13_s]: "5" as Name<Minas>,         //    `'|
    [CommaClassId._19_V_5_P_4_7_s]: "6" as Name<Minas>,     //    ,)|
    [CommaClassId._19_s]: "7" as Name<Minas>,               //     )|
    [CommaClassId._49_V_55_s]: "8" as Name<Minas>,          //    `)|
    [CommaClassId._5_7_11_k]: "9" as Name<Minas>,           //   ``)|
    [CommaClassId._11_V_13_k]: "10" as Name<Minas>,         //    ,,|(
    [CommaClassId._31_V_11_k]: "11" as Name<Minas>,         //     ,|(
    [CommaClassId._5_V_7_k]: "12" as Name<Minas>,           //      |(
    [CommaClassId._7_P_3_V_5_k]: "13" as Name<Minas>,       //     `|(
    [CommaClassId._1_V_5_17_k]: "14" as Name<Minas>,        //    .~|
    [CommaClassId._1_V_5_P_2_7_P_2_k]: "15" as Name<Minas>, //    ,'|(
    [CommaClassId._25_V_7_k]: "16" as Name<Minas>,          //     '|(
    [CommaClassId._7_P_3_k]: "17" as Name<Minas>,           //    ,~|
    [CommaClassId._1_V_17_k]: "18" as Name<Minas>,          //     ~|
    [CommaClassId._11_P_4_k]: "19" as Name<Minas>,          //    ,)|(
    [CommaClassId._7_V_11_k]: "20" as Name<Minas>,          //     )|(
    [CommaClassId._5_P_2_11_k]: "21" as Name<Minas>,        //    `)|(
    [CommaClassId._49_V_13_k]: "22" as Name<Minas>,         //   ``)|(
    [CommaClassId._1_V_5_P_2_7_P_3_k]: "23" as Name<Minas>, //   ,')|(
    [CommaClassId._35_V_11_k]: "24" as Name<Minas>,         //    ')|(
    [CommaClassId._1_V_143_C]: "25" as Name<Minas>,         //    )~|
    [CommaClassId._17_V_5_C]: "26" as Name<Minas>,          //    .~|(
    [CommaClassId._11_V_23_C]: "27" as Name<Minas>,         //   `.~|(
    [CommaClassId._7_V_125_C]: "28" as Name<Minas>,         //   ,,~|(
    [CommaClassId._5_7_P_2_C]: "29" as Name<Minas>,         //    ,~|(
    [CommaClassId._17_C]: "30" as Name<Minas>,              //     ~|(
    [CommaClassId._143_V_7_C]: "31" as Name<Minas>,         //    `~|(
    [CommaClassId._7_V_25_C]: "32" as Name<Minas>,          //    ,,|~
    [CommaClassId._5_P_2_7_P_2_C]: "33" as Name<Minas>,     //     ,|~
    [CommaClassId._23_C]: "34" as Name<Minas>,              //      |~
    [CommaClassId._1_V_13_P_2_C]: "35" as Name<Minas>,      //     `|~
    [CommaClassId._11_V_49_C]: "36" as Name<Minas>,         //    ~~|
    [CommaClassId._11_V_31_C]: "37" as Name<Minas>,         //   `~~|
    [CommaClassId._17_V_7_C]: "38" as Name<Minas>,          //  ``~~|
    [CommaClassId._7_13_V_5_C]: "39" as Name<Minas>,        //   ,./|
    [CommaClassId._1_V_25_C]: "40" as Name<Minas>,          //    ./|
    [CommaClassId._1_V_19_C]: "41" as Name<Minas>,          //     )|~
    [CommaClassId._1_V_11_23_C]: "42" as Name<Minas>,       //   ,,/|
    [CommaClassId._7_13_C]: "43" as Name<Minas>,            //    ,/|
    [CommaClassId._1_V_5_C]: "44" as Name<Minas>,           //     /|
    [CommaClassId._5_P_3_7_C]: "45" as Name<Minas>,         //    `/|
    [CommaClassId._25_V_13_C]: "46" as Name<Minas>,         //   ``/|
    [CommaClassId._19_V_25_C]: "47" as Name<Minas>,         //   .)/|
    [CommaClassId._3_C]: "48" as Name<Minas>,               //    '/|
    [CommaClassId._5_P_4_7_C]: "49" as Name<Minas>,         //   `'/|
    [CommaClassId._77_V_5_C]: "49.567569" as Name<Minas>,   //  ,,)/|
    [CommaClassId._125_V_13_C]: "50" as Name<Minas>,        //   ,)/|
    [CommaClassId._19_V_5_C]: "51" as Name<Minas>,          //    )/|   these two are super close to each other
    [CommaClassId._13_C]: "51.458649" as Name<Minas>,       //    ,.|)  these two are super close to each other
    [CommaClassId._1_V_35_C]: "52" as Name<Minas>,          //     .|)
    [CommaClassId._77_C]: "53" as Name<Minas>,              //    `.|)
    [CommaClassId._11_V_65_C]: "54" as Name<Minas>,         //    ,,|)
    [CommaClassId._65_C]: "55" as Name<Minas>,              //     ,|)
    [CommaClassId._1_V_7_C]: "56" as Name<Minas>,           //      |)
    [CommaClassId._5_P_4_C]: "57" as Name<Minas>,           //     `|)
    [CommaClassId._11_V_13_C]: "58" as Name<Minas>,         //    ``|)
    [CommaClassId._5_P_2_13_C]: "59" as Name<Minas>,        //    ,'|)
    [CommaClassId._5_V_7_C]: "60" as Name<Minas>,           //     '|)
    [CommaClassId._5_P_5_C]: "61" as Name<Minas>,           //    `'|)
    [CommaClassId._5_17_V_11_C]: "62" as Name<Minas>,       //    ,)|)
    [CommaClassId._19_V_7_C]: "63" as Name<Minas>,          //     )|)
    [CommaClassId._7_V_55_C]: "64" as Name<Minas>,          //    .(|
    [CommaClassId._55_C]: "65" as Name<Minas>,              //      |\
    [CommaClassId._11_V_7_13_C]: "66" as Name<Minas>,       //     `|\
    [CommaClassId._125_V_23_C]: "67" as Name<Minas>,        //    ,(|
    [CommaClassId._7_V_11_C]: "68" as Name<Minas>,          //     (|
    [CommaClassId._13_V_17_S]: "69" as Name<Minas>,         //    `(|
    [CommaClassId._17_V_25_S]: "70" as Name<Minas>,         //   ``(|
    [CommaClassId._7_V_13_19_S]: "71" as Name<Minas>,       //   ,'(|
    [CommaClassId._25_V_49_S]: "72" as Name<Minas>,         //    '(|
    [CommaClassId._31_S]: "72.404868" as Name<Minas>,       //    ,~|)
    [CommaClassId._49_S]: "73" as Name<Minas>,              //     ~|)
    [CommaClassId._17_V_5_S]: "74" as Name<Minas>,          //    `~|)
    [CommaClassId._11_V_23_S]: "75" as Name<Minas>,         //   ,.(|(
    [CommaClassId._1_V_11_S]: "76" as Name<Minas>,          //    .(|(
    [CommaClassId._5_7_P_2_S]: "77" as Name<Minas>,         //    '~|)
    [CommaClassId._23_V_5_S]: "78" as Name<Minas>,          //     /|~
    [CommaClassId._7_V_13_S]: "78.390146" as Name<Minas>,   //   ,,(|(
    [CommaClassId._11_V_17_S]: "79" as Name<Minas>,         //    ,(|(
    [CommaClassId._5_V_11_S]: "80" as Name<Minas>,          //     (|(
    [CommaClassId._1_V_7_11_13_S]: "81" as Name<Minas>,     //    `(|(
    [CommaClassId._23_S]: "82" as Name<Minas>,              //     ~|\
    [CommaClassId._7_13_V_25_S]: "83" as Name<Minas>,       //  ,.//|
    [CommaClassId._1_V_125_S]: "84" as Name<Minas>,         //   .//|
    [CommaClassId._35_S]: "85" as Name<Minas>,              //  `.//|
    [CommaClassId._17_V_7_S]: "86" as Name<Minas>,          //  ,,//|
    [CommaClassId._7_13_V_5_S]: "87" as Name<Minas>,        //   ,//|
    [CommaClassId._1_V_25_S]: "88" as Name<Minas>,          //    //|
    [CommaClassId._5_P_2_7_S]: "89" as Name<Minas>,         //   `//|
    [CommaClassId._5_V_13_S]: "90" as Name<Minas>,          //  ``//|
    [CommaClassId._49_V_17_S]: "91" as Name<Minas>,         //  ,'//|
    [CommaClassId._13_V_19_S]: "92" as Name<Minas>,         //   '//|
    [CommaClassId._77_V_25_M]: "93" as Name<Minas>,         // ,,)//|
    [CommaClassId._25_V_13_M]: "94" as Name<Minas>,         //  ,)//|
    [CommaClassId._13_V_5_M]: "95" as Name<Minas>,          //   )//|
    [CommaClassId._1_V_5_P_2_7_M]: "96" as Name<Minas>,     //  `)//|
    [CommaClassId._37_M]: "97" as Name<Minas>,              // ``)//|
    [CommaClassId._11_V_5_P_2_13_M]: "98" as Name<Minas>,   //   ,,/|)
    [CommaClassId._13_M]: "99" as Name<Minas>,              //    ,/|)
    [CommaClassId._1_V_35_M]: "100" as Name<Minas>,         //     /|)
    [CommaClassId._125_M]: "101" as Name<Minas>,            //    `/|)
    [CommaClassId._11_V_19_M]: "102" as Name<Minas>,        //     (|~
    [CommaClassId._65_M]: "103" as Name<Minas>,             //   ,'/|)
    [CommaClassId._1_V_7_M]: "104" as Name<Minas>,          //    '/|)
    [CommaClassId._5_P_4_M]: "105" as Name<Minas>,          //   `'/|)
    [CommaClassId._11_V_5_M]: "105.572025" as Name<Minas>,  //    ./|\
    [CommaClassId._17_V_11_M]: "106" as Name<Minas>,        //   `./|\
    [CommaClassId._5_V_23_M]: "107" as Name<Minas>,         //   ,,/|\
    [CommaClassId._7_V_5_P_2_11_M]: "108" as Name<Minas>,   //    ,/|\
    [CommaClassId._11_M]: "109" as Name<Minas>,             //     /|\
    [CommaClassId._5_17_V_11_M]: "110" as Name<Minas>,      //    `/|\
    [CommaClassId._65_V_7_M]: "111" as Name<Minas>,         //   ,(/|
    [CommaClassId._1_V_49_M]: "112" as Name<Minas>,         //    (/|
    [CommaClassId._1_V_31_M]: "113" as Name<Minas>,         //   `(/|
    [CommaClassId._55_M]: "113.451710" as Name<Minas>,      //    '/|\
    [CommaClassId._11_V_7_13_M]: "114" as Name<Minas>,      //   `'/|\
    [CommaClassId._5_7_17_M]: "115" as Name<Minas>,         //   ,)/|\
    [CommaClassId._5_V_49_M]: "116" as Name<Minas>,         //    )/|\
}

const getMinaName = (commaClassId: CommaClassId): Name<Minas> =>
    EXTREME_NOTATION_MINAS[commaClassId]

export {
    getMinaName,
}
