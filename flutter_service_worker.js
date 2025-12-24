'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "f802e6ea84d492682c5359534ab83172",
"main.dart.js": "3fb6ba42903968adffdff1a6994d9247",
"index.html": "eeaf02e9b38ab3d8c1632a0da1ef60d4",
"/": "eeaf02e9b38ab3d8c1632a0da1ef60d4",
"manifest.json": "9329477fb4faa3b8447fbf9742e27cd2",
"icons/Icon-512.png": "f9a91b7e43464590738e09fe24097a81",
"icons/Icon-maskable-512.png": "f9a91b7e43464590738e09fe24097a81",
"icons/Icon-maskable-192.png": "d3a8abe58e35650f140ef71f41168340",
"icons/Icon-192.png": "d3a8abe58e35650f140ef71f41168340",
"assets/jsdelivr.mjs": "2d7f7e4002e9df41426d8d25ff29a480",
"assets/AssetManifest.json": "72b044f98e8cd4bb81d3e1a67431c5c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8ca5a2a3af2cb1065521fc332e5bc6a9",
"assets/packages/thanos_snap_effect/shader/thanos_snap_effect.glsl": "71d0977cd8ebc2380c159b718b409ce6",
"assets/packages/country_flags/res/si/ac.si": "084b17449dd0ba76474f133039ee68d3",
"assets/packages/country_flags/res/si/ly.si": "b99bf6af3ded37ca4b35c612bfe98721",
"assets/packages/country_flags/res/si/ie.si": "58082f0739794c2562fbd21b9700a0a9",
"assets/packages/country_flags/res/si/by.si": "045e4e447111a76bb834bd9e969756b4",
"assets/packages/country_flags/res/si/bg.si": "75bcf4b187601813fcf6008da5ef3625",
"assets/packages/country_flags/res/si/gb.si": "b875cc97c8e2a1a41fd3ccbbdb63d291",
"assets/packages/country_flags/res/si/sx.si": "424c70f52c10927bd40135e75d958e8b",
"assets/packages/country_flags/res/si/hn.si": "bf1d541bc8c0b4826c3cf7f2d36e1b87",
"assets/packages/country_flags/res/si/pt.si": "04c1755d12a50d7524a66124c8d725cc",
"assets/packages/country_flags/res/si/vc.si": "a6d41b2c67d49f3f202dc920ad2f8c49",
"assets/packages/country_flags/res/si/sc.si": "65a3e456a8f0cfb400f7a4b354fd1839",
"assets/packages/country_flags/res/si/kn.si": "cd16cb0ce86ecb131422414a132352bb",
"assets/packages/country_flags/res/si/cm.si": "d89b50b2a1e7c5814a53894ddf6842f6",
"assets/packages/country_flags/res/si/fk.si": "bcdc2242f7af2a72255f8d89d2642fe8",
"assets/packages/country_flags/res/si/ro.si": "ec81c7e1014f2b8584ddd07d0fad9c43",
"assets/packages/country_flags/res/si/cf.si": "00cce9e9924e59417fd640f22ff3c068",
"assets/packages/country_flags/res/si/nu.si": "dac0a569e83a73006b8600fa1f1f8ac5",
"assets/packages/country_flags/res/si/ax.si": "a456e36511e13498fa3d610a026d79b8",
"assets/packages/country_flags/res/si/ad.si": "c3ccb8e3cf8b3ce384280c687c94ed53",
"assets/packages/country_flags/res/si/ec.si": "87d4beb1830c8746d02bd3eb81daa1cf",
"assets/packages/country_flags/res/si/bv.si": "d2e12ff6011d4fc76d0044e61abbd8a1",
"assets/packages/country_flags/res/si/yt.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/kw.si": "fae7c5f1138fcb68b76b6bf1ecb5f422",
"assets/packages/country_flags/res/si/mt.si": "2c7e94cc8b51a7ce1c1958a00f880398",
"assets/packages/country_flags/res/si/ea.si": "c59363bf0d9a595df07cfe238f9cc16a",
"assets/packages/country_flags/res/si/je.si": "5fb5c37d3e7469ad537882debd8c4f33",
"assets/packages/country_flags/res/si/gy.si": "6373d2b94878202fd94563aeea4fd8ca",
"assets/packages/country_flags/res/si/jo.si": "3c4f0683e2fe5e5d9b1424a5865c1e59",
"assets/packages/country_flags/res/si/kg.si": "1f1f0daac400da3f36e873982f002844",
"assets/packages/country_flags/res/si/bi.si": "4e22a5fa7d3657998c6424ee89ba328f",
"assets/packages/country_flags/res/si/tg.si": "2a23d4dbc913968f6eb97dbb5454941e",
"assets/packages/country_flags/res/si/gn.si": "ebb9409ab8449de9d040549ffcef1321",
"assets/packages/country_flags/res/si/mv.si": "47d6de70a92bb16bc0284187d12dfb47",
"assets/packages/country_flags/res/si/um.si": "bec8665843b879da2d8ed65532da7e01",
"assets/packages/country_flags/res/si/jp.si": "ee22ac07312690001d82c27ed0fab0a8",
"assets/packages/country_flags/res/si/is.si": "6a75ef472e3b3674cb992a6c1a2d8656",
"assets/packages/country_flags/res/si/ne.si": "5323700b3b0dc68916ffe048c4afc2b1",
"assets/packages/country_flags/res/si/as.si": "f12705f23ac102cc4fa8e85c3a780040",
"assets/packages/country_flags/res/si/dz.si": "74f32a3036da03823454cf8c2fbcc22f",
"assets/packages/country_flags/res/si/ga.si": "863042bec1c7781b8245d2fec2961835",
"assets/packages/country_flags/res/si/sl.si": "a0d669d7821909f6b73d73ebd29e77e7",
"assets/packages/country_flags/res/si/bb.si": "a0f7ccd01c2e5eee48607b53d0791941",
"assets/packages/country_flags/res/si/nc.si": "8760c0e60c7ab868ea1577de40a8dd04",
"assets/packages/country_flags/res/si/ar.si": "4ce98d701be0d5607ec3f0d62e5c7ff8",
"assets/packages/country_flags/res/si/az.si": "203fdb6be0df02e0b86e1ab468a84588",
"assets/packages/country_flags/res/si/fm.si": "d195abb2e8d6961f6ffa0da23d8b2813",
"assets/packages/country_flags/res/si/mf.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/be.si": "6d9dd724fd5dd06b3cff71955bf03728",
"assets/packages/country_flags/res/si/pn.si": "4df57b8f366ab9d559a134e25fa92201",
"assets/packages/country_flags/res/si/de.si": "aaabd585b21d0960b60d05acf4c54cd3",
"assets/packages/country_flags/res/si/cz.si": "722387eee039fb858312120170af2ba7",
"assets/packages/country_flags/res/si/br.si": "dc32cd1c578da0b7106bd15a74434692",
"assets/packages/country_flags/res/si/na.si": "d49f748db27e5d6f63293f41c2e8361e",
"assets/packages/country_flags/res/si/ir.si": "84eb55b574dd390d8fc86b185d182578",
"assets/packages/country_flags/res/si/gw.si": "9c6f62e2963f012b571dad989416a1f3",
"assets/packages/country_flags/res/si/ch.si": "25b5af40c1ed5254d8a5c9286a235a78",
"assets/packages/country_flags/res/si/bh.si": "637d8c9177fdc8bf98d2afb4de3a3cbe",
"assets/packages/country_flags/res/si/rw.si": "8b075359fc5a06224acf83d24b058752",
"assets/packages/country_flags/res/si/ba.si": "6719180c7b4f5d76a1c41fd76668cc69",
"assets/packages/country_flags/res/si/sa.si": "cf93fcbb04c97fac13136e80fd27ade9",
"assets/packages/country_flags/res/si/pe.si": "978e662d337e34163ef3dbc28cf35f11",
"assets/packages/country_flags/res/si/id.si": "9cf3c91fee39a1ff1d93cbbe385d7bbf",
"assets/packages/country_flags/res/si/gb-eng.si": "c23da032fa2a18ca5390c2cab903ac80",
"assets/packages/country_flags/res/si/mx.si": "add64001e4e654f95a36c24e5b212b80",
"assets/packages/country_flags/res/si/gb-nir.si": "70756040e8747ea10547485c1b5493dd",
"assets/packages/country_flags/res/si/af.si": "9fb0d66778b5afe46c5750f6b2de0a06",
"assets/packages/country_flags/res/si/cu.si": "b561ce782460b38c99795d3891be4bd8",
"assets/packages/country_flags/res/si/sk.si": "009a8dbaf2bc675683650d84bde81643",
"assets/packages/country_flags/res/si/rs.si": "f231dce72ce3243a624eb723d200a63e",
"assets/packages/country_flags/res/si/iq.si": "a0be6279c1905893dcbcbe0c7ce44302",
"assets/packages/country_flags/res/si/lt.si": "8ef10e2712fa997ca06742fc1d79c095",
"assets/packages/country_flags/res/si/cn.si": "a629d6ea2863bc2e2783ed86427fccdf",
"assets/packages/country_flags/res/si/vn.si": "5e53b20018d53d957714d0211c237211",
"assets/packages/country_flags/res/si/fr.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/tw.si": "7bba519f0f26cca5417d8edb57bdef83",
"assets/packages/country_flags/res/si/nr.si": "7762af79a081de69557b7611eaf93bf9",
"assets/packages/country_flags/res/si/gs.si": "d6e2a1be23c5e70fced629d467e0a1f7",
"assets/packages/country_flags/res/si/mn.si": "d7d59010e2822958f8390d72bfbf0072",
"assets/packages/country_flags/res/si/bl.si": "b319560213233391af1170881595344f",
"assets/packages/country_flags/res/si/vg.si": "de1ed29316c1d0f81af9946e35d254d7",
"assets/packages/country_flags/res/si/fj.si": "5315abdde8d2a5274a621a7d1fdb92a6",
"assets/packages/country_flags/res/si/kr.si": "0fc0217454ce0fac5d5b0ed0e19051ce",
"assets/packages/country_flags/res/si/om.si": "8d23e422f6191c117e764aa17c80e195",
"assets/packages/country_flags/res/si/do.si": "0c12349ea290f3e7d6bd3c7eba8ec556",
"assets/packages/country_flags/res/si/aq.si": "e15ec1a740dfd94250faaf3a04c3e009",
"assets/packages/country_flags/res/si/hm.si": "93810e1a767ca77d78fa8d70ef89878a",
"assets/packages/country_flags/res/si/it.si": "c472c6bc7844cc6633d4e41d139b282c",
"assets/packages/country_flags/res/si/ag.si": "f2607a0fcfd1aeecb45e1ea7d17979a0",
"assets/packages/country_flags/res/si/tk.si": "9fc0141c9928734e4229f05d2f2f68d4",
"assets/packages/country_flags/res/si/in.si": "335a5837f0d2b45527db4e60087b4221",
"assets/packages/country_flags/res/si/vi.si": "acbfd08b5cd096eac556c46efecb7926",
"assets/packages/country_flags/res/si/ss.si": "cd22425520f63dac39be3dbfdb49465b",
"assets/packages/country_flags/res/si/ms.si": "e04ef3545afb3927de3aff13640ff6b9",
"assets/packages/country_flags/res/si/gl.si": "f447d0f9f9e95027def4b4a333f59393",
"assets/packages/country_flags/res/si/gu.si": "f47c5abf0b2dd4b8b717e87c82e1f328",
"assets/packages/country_flags/res/si/dj.si": "c39ebb82ae2414d5b42b0c78d7db1626",
"assets/packages/country_flags/res/si/nf.si": "1473b829023248dbbd77f49b9e6e5ede",
"assets/packages/country_flags/res/si/ao.si": "042c2a03c013acf928449dbaf2a4affe",
"assets/packages/country_flags/res/si/pf.si": "29e59d85bfa9cc1ed50424098c4577b5",
"assets/packages/country_flags/res/si/za.si": "a66971379a3a65b274a702c82b3375d7",
"assets/packages/country_flags/res/si/ls.si": "f469f1632ad300b4fb00db8328f9b844",
"assets/packages/country_flags/res/si/eh.si": "99373a71bd21ee4d5ce37dd840fa8bc5",
"assets/packages/country_flags/res/si/zm.si": "ef4d9e8828b6609e41642a3fbb6541ec",
"assets/packages/country_flags/res/si/pm.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/ky.si": "498424ad28f6c9e005ae14e8d66c3e2f",
"assets/packages/country_flags/res/si/mm.si": "3ab23c7fcc44e249de75e6019af32611",
"assets/packages/country_flags/res/si/gg.si": "57b684be8b0e0fa86e1dae5100f3c0ee",
"assets/packages/country_flags/res/si/km.si": "6cc50d7456a351984bae778298741591",
"assets/packages/country_flags/res/si/uz.si": "9141032bde5150e86cd2d159c4f31b72",
"assets/packages/country_flags/res/si/mc.si": "0cb03fed360c4c1401b0e9cff5dea505",
"assets/packages/country_flags/res/si/ke.si": "87ce4c55414a8c5d29f23ca16310a01c",
"assets/packages/country_flags/res/si/tj.si": "ff5523df78dbb97dbc212adec3b67a5e",
"assets/packages/country_flags/res/si/tn.si": "d15a30567010db55d9a398ffde25694c",
"assets/packages/country_flags/res/si/ng.si": "d2764e808010a6d2389cfc1e83e3b710",
"assets/packages/country_flags/res/si/lb.si": "d2268cc1967d63699bb1ff2a87264c75",
"assets/packages/country_flags/res/si/ve.si": "e846876f7ec7ad396e58fb20e969a486",
"assets/packages/country_flags/res/si/nl.si": "130b5b1f64baa8e002dc668b0d3d589f",
"assets/packages/country_flags/res/si/ws.si": "1644f5c199bfc4a5ee49d0907eb26efa",
"assets/packages/country_flags/res/si/bn.si": "1334a282f886a35989ab2d1fee8b3acc",
"assets/packages/country_flags/res/si/eu.si": "0c7acf5338eb131940e6a2d53022fda7",
"assets/packages/country_flags/res/si/sb.si": "b6160f674954161619f0f57d4039e010",
"assets/packages/country_flags/res/si/md.si": "074b41437a23811d27d4db98bedd56d8",
"assets/packages/country_flags/res/si/lr.si": "8ea704b8b395abcb8dbd13a7fb738b3e",
"assets/packages/country_flags/res/si/ni.si": "8af49cf35b72204052de6fab8322afc8",
"assets/packages/country_flags/res/si/mg.si": "f6406a9d332acb29115b31235c49c920",
"assets/packages/country_flags/res/si/lv.si": "d61111f2dcbc8b2c84e644f7288b1fd7",
"assets/packages/country_flags/res/si/hr.si": "dc0efaf40fb58a21f52fd9a86c7ddfdc",
"assets/packages/country_flags/res/si/cx.si": "8d7a59ff653f34ab3323c39c5c5b2f75",
"assets/packages/country_flags/res/si/un.si": "d3a2546a132b2e216aa17ffafaca8f57",
"assets/packages/country_flags/res/si/tv.si": "7e462e7d6fa8bdd967bf9e37b86d0906",
"assets/packages/country_flags/res/si/ki.si": "80c4adc8b03b18055be571a612fa3f79",
"assets/packages/country_flags/res/si/nz.si": "95a431faf2077c36c314e060d3565e11",
"assets/packages/country_flags/res/si/cr.si": "7385af5d3c967dad1c62027ece383dd6",
"assets/packages/country_flags/res/si/sv.si": "912cc0a01ad6e839db6392ece5736b68",
"assets/packages/country_flags/res/si/gh.si": "21e46cb3743f96b4e47de0c0b277c604",
"assets/packages/country_flags/res/si/gp.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/aw.si": "bac854c7bbf50dd71fc643f9197f4587",
"assets/packages/country_flags/res/si/me.si": "d87206186e9601dcfabdd0d38b655899",
"assets/packages/country_flags/res/si/il.si": "5926479ae8ffa09647b9c20feceb9415",
"assets/packages/country_flags/res/si/sh.si": "084b17449dd0ba76474f133039ee68d3",
"assets/packages/country_flags/res/si/dm.si": "114b039b7de692af992aa75bdfd324d9",
"assets/packages/country_flags/res/si/dg.si": "3469f709b852fa25f3d735d4e7ee88a2",
"assets/packages/country_flags/res/si/hk.si": "cdc28623f40113eb4227c9ed796b6201",
"assets/packages/country_flags/res/si/bd.si": "18bcbe7c5cd7ef99faf8e581dcf6f2db",
"assets/packages/country_flags/res/si/mz.si": "65389bae62f6de08c93ff93fe61e7b24",
"assets/packages/country_flags/res/si/gt.si": "2841eca17a032575b20e97e3c4c0977e",
"assets/packages/country_flags/res/si/cd.si": "092862ef3f988f301bf81d937d0b2251",
"assets/packages/country_flags/res/si/mw.si": "529e2edb7b4f71261a4d8c52de450f5d",
"assets/packages/country_flags/res/si/va.si": "c23d81f5e4e3acd336ce01d9ed561ee8",
"assets/packages/country_flags/res/si/sj.si": "04dcac0249ab5999520c35c8e7f3ce38",
"assets/packages/country_flags/res/si/bq.si": "130b5b1f64baa8e002dc668b0d3d589f",
"assets/packages/country_flags/res/si/pr.si": "ccb19936defb882dea166d865f8ee5ff",
"assets/packages/country_flags/res/si/mp.si": "48f591d6c4a1e7aab511bcc750536836",
"assets/packages/country_flags/res/si/ae.si": "600a0ce358d82ca58155a6298524084f",
"assets/packages/country_flags/res/si/ug.si": "b5368d2d0a873dd2ff8adc689c6c6b09",
"assets/packages/country_flags/res/si/sr.si": "c996e0d2b46e4afc13b18a5abe492fe7",
"assets/packages/country_flags/res/si/gr.si": "a7ffe39d3dbd0f7e2d7cf03b38ebce8b",
"assets/packages/country_flags/res/si/tz.si": "643850342b81b7015ad57cddc9589a69",
"assets/packages/country_flags/res/si/no.si": "6b6efedb50f0a7b05a9afe882924fe99",
"assets/packages/country_flags/res/si/lc.si": "981c9cb18294152ac0423aa64039f6e0",
"assets/packages/country_flags/res/si/gi.si": "1d4b7516dbef91dd53a3223786433468",
"assets/packages/country_flags/res/si/gm.si": "b764f5bed08b62f0c908d224b61c62ce",
"assets/packages/country_flags/res/si/ml.si": "e583b41ed5e4f9508970265999bf47bf",
"assets/packages/country_flags/res/si/es-ct.si": "9d497fc098e8ac8eb94576ca2b72a65a",
"assets/packages/country_flags/res/si/uy.si": "8163529e4c65d4f7f97dad78c51918c7",
"assets/packages/country_flags/res/si/co.si": "471a020ee0695a4be6867c76e3e4fcdf",
"assets/packages/country_flags/res/si/ge.si": "6f700846562325e1e647946a9b7e26f6",
"assets/packages/country_flags/res/si/dk.si": "23b9112d01b91326804b173427d0a991",
"assets/packages/country_flags/res/si/sz.si": "780a7eb9794bd6cf85d59d42766e62b3",
"assets/packages/country_flags/res/si/cl.si": "1765b8d051900505b51ca7149756b62e",
"assets/packages/country_flags/res/si/bj.si": "e356b737969b4d0413d0d17781f5476f",
"assets/packages/country_flags/res/si/ru.si": "677089233d82298520fd2b176f8003a8",
"assets/packages/country_flags/res/si/np.si": "aac703fec2d68d1f05f0b368bcd05b5c",
"assets/packages/country_flags/res/si/er.si": "1f32851695ad06a33b607cbfe96cbe5c",
"assets/packages/country_flags/res/si/bo.si": "1491a562f1ee0f5fdf512a72821dc3b1",
"assets/packages/country_flags/res/si/ta.si": "084b17449dd0ba76474f133039ee68d3",
"assets/packages/country_flags/res/si/es-ga.si": "c128cec2feffaff7aab7940dadcd9ccd",
"assets/packages/country_flags/res/si/qa.si": "534abea02d79321b510b2a3fb040ffbc",
"assets/packages/country_flags/res/si/sy.si": "e510652843b486afcb5f160188b4514a",
"assets/packages/country_flags/res/si/wf.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/so.si": "ee4702222805ec60fe47cca5500fced8",
"assets/packages/country_flags/res/si/gf.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/tt.si": "6550348a507c01feaf93fd191503ce72",
"assets/packages/country_flags/res/si/ee.si": "d1d0e6c483ec14291ccafc69c4390f07",
"assets/packages/country_flags/res/si/kp.si": "863f41ba80f1b3f9c794aaeafafb02d6",
"assets/packages/country_flags/res/si/au.si": "93810e1a767ca77d78fa8d70ef89878a",
"assets/packages/country_flags/res/si/xx.si": "95362a356a59ae95c73b1a7a415abff6",
"assets/packages/country_flags/res/si/cefta.si": "4a619e7166e3a91fd3333a0aa9a7f212",
"assets/packages/country_flags/res/si/mr.si": "73d5e7f3158beeb1e09e294cc2cc3b79",
"assets/packages/country_flags/res/si/eg.si": "eb6351aaa487d5e422ecd8f1160ada0d",
"assets/packages/country_flags/res/si/cc.si": "831df80000b0c6d12f0c37f696a11e31",
"assets/packages/country_flags/res/si/gd.si": "2bd89cc35d9a35aa6b5c7dfa8888e769",
"assets/packages/country_flags/res/si/tm.si": "61cac086e156158fe52394aadb734bd1",
"assets/packages/country_flags/res/si/bw.si": "50b6724787e9b206d8998f747748f133",
"assets/packages/country_flags/res/si/vu.si": "54ccd51f720f6bb242f2256626a172b8",
"assets/packages/country_flags/res/si/fi.si": "6ed37987c4dee7606f35b1f3ef2f4352",
"assets/packages/country_flags/res/si/cv.si": "1d61ed1ebf59c2a571f54da09340b52b",
"assets/packages/country_flags/res/si/jm.si": "db4e387e95c824cefb80b16ae8f8af9f",
"assets/packages/country_flags/res/si/pa.si": "3231c2af8957eddd456819783df37ef5",
"assets/packages/country_flags/res/si/ua.si": "aeb59a31627c7e9cb89c2c31c8b95d15",
"assets/packages/country_flags/res/si/al.si": "3a10d259f602c6832ed5316403f6fe91",
"assets/packages/country_flags/res/si/mq.si": "b319560213233391af1170881595344f",
"assets/packages/country_flags/res/si/xk.si": "967bec40d36ab8264262777667c5da33",
"assets/packages/country_flags/res/si/ic.si": "5459bbd72389b2300c7da170cd528f23",
"assets/packages/country_flags/res/si/io.si": "3469f709b852fa25f3d735d4e7ee88a2",
"assets/packages/country_flags/res/si/hu.si": "379f70d867e53920ef1105ae9d3dc5e1",
"assets/packages/country_flags/res/si/sn.si": "e283672331f67926294d3609b6317d82",
"assets/packages/country_flags/res/si/tc.si": "78d2718e865371288caf216fb083c8bd",
"assets/packages/country_flags/res/si/tf.si": "2fdcf8c49f0b17d65aa2601d4b505cfa",
"assets/packages/country_flags/res/si/my.si": "017ea1b80814ba715985331e8ff494fc",
"assets/packages/country_flags/res/si/ph.si": "c8899c0eb2232931f49fa35de57f5d09",
"assets/packages/country_flags/res/si/ye.si": "cc3bd4c5b25155d249015f88380a3023",
"assets/packages/country_flags/res/si/si.si": "11367d866b110a2971aae42dbc72b47f",
"assets/packages/country_flags/res/si/cp.si": "5ac3d76ce03f06c4463d135d4129c494",
"assets/packages/country_flags/res/si/bz.si": "3fad74bf2e5948e1556c8048e65e084e",
"assets/packages/country_flags/res/si/la.si": "161dccf57b198768b6c95fd585966156",
"assets/packages/country_flags/res/si/im.si": "3bca9cb89673cd2c1837c69f72038bde",
"assets/packages/country_flags/res/si/ai.si": "98108de6fc34688b9281b6040f855730",
"assets/packages/country_flags/res/si/st.si": "201fdb14910faacd6ce8c30c0a2c1bec",
"assets/packages/country_flags/res/si/ma.si": "9ced8447a0a9b2e720d870bc5aef87cf",
"assets/packages/country_flags/res/si/pk.si": "afa64ff88820436b4ec66b1043a1ca7d",
"assets/packages/country_flags/res/si/cw.si": "8c2327f9686e6183f85b4141294f7944",
"assets/packages/country_flags/res/si/mo.si": "4a369319962984183cfed7f0bf4d60a5",
"assets/packages/country_flags/res/si/fo.si": "c074164f5875cc2ac648caa3461a4ffa",
"assets/packages/country_flags/res/si/sm.si": "e29d9a0493a72947dfc5e5668bcdcc30",
"assets/packages/country_flags/res/si/py.si": "a05eb3d105fde5507180087464bc282b",
"assets/packages/country_flags/res/si/at.si": "da9709351758847fbf187e9947fd44a5",
"assets/packages/country_flags/res/si/kh.si": "711d8494963708be2a01a1dfc5a002db",
"assets/packages/country_flags/res/si/li.si": "08d65db7ba158c62f8b70240985fbbe9",
"assets/packages/country_flags/res/si/tr.si": "3bd279bd1f4c26e0ad0abed7fb744df3",
"assets/packages/country_flags/res/si/zw.si": "b32c711b08bfe7425d509407c48ee5ed",
"assets/packages/country_flags/res/si/pg.si": "51e824f62d970ad02c7afa9cc70330d8",
"assets/packages/country_flags/res/si/es.si": "c59363bf0d9a595df07cfe238f9cc16a",
"assets/packages/country_flags/res/si/mu.si": "9f4070ad133e7380edb48cb11cffaef1",
"assets/packages/country_flags/res/si/cy.si": "f4f95412e75e3e82b62b140f1fb4d327",
"assets/packages/country_flags/res/si/gb-sct.si": "c1e2452023ede8ca68306f9360bec03f",
"assets/packages/country_flags/res/si/sg.si": "3e20b9387970793f6b3db62609820d4a",
"assets/packages/country_flags/res/si/ck.si": "30d75fc50470f00d7fc590c058b7a4c1",
"assets/packages/country_flags/res/si/mk.si": "0aee6cc90fb321101c9d4afd923c2d85",
"assets/packages/country_flags/res/si/bf.si": "36c828d75ffb1b1ee0c074f08dbd162e",
"assets/packages/country_flags/res/si/gq.si": "e8e087ae91048f042fa212b5f79a496c",
"assets/packages/country_flags/res/si/tl.si": "307e25e1507c3e76df867108079cb487",
"assets/packages/country_flags/res/si/ca.si": "a911aefa8694f795f4066047492134be",
"assets/packages/country_flags/res/si/ht.si": "2f82778ff6d4910a677170a08545bfd6",
"assets/packages/country_flags/res/si/se.si": "64f75927796e3bcf418a7f1bce12cf39",
"assets/packages/country_flags/res/si/pl.si": "034643869bc1b14ad2af44cc9aa24b9f",
"assets/packages/country_flags/res/si/lu.si": "0ac3af11df6af8b90ca8f8078902fc9a",
"assets/packages/country_flags/res/si/re.si": "b319560213233391af1170881595344f",
"assets/packages/country_flags/res/si/lk.si": "c8f0c394d54b1618603d89307e6cd127",
"assets/packages/country_flags/res/si/bm.si": "2c1effe65d4c9c6ea846536f9ebcac93",
"assets/packages/country_flags/res/si/am.si": "f1c0decc96d76ecce7dda29e1b0a3048",
"assets/packages/country_flags/res/si/to.si": "999f5edc1d7bd74937dab96f8d035368",
"assets/packages/country_flags/res/si/bs.si": "5818730530c519e134452e41830a7d4b",
"assets/packages/country_flags/res/si/bt.si": "9b9f54fdaeb57d27628dd7318c23d632",
"assets/packages/country_flags/res/si/ps.si": "e91b4cc92cc8629f42c9d8fb11d028ba",
"assets/packages/country_flags/res/si/td.si": "7fe532f134f64c198cc8b4feb90efcaf",
"assets/packages/country_flags/res/si/kz.si": "f5aad35a9ce49a2a17f165d4761d8ace",
"assets/packages/country_flags/res/si/et.si": "6020d43892ed1096172d0d01a00afe89",
"assets/packages/country_flags/res/si/sd.si": "c6e5b30fafc73d2d84b45a10c6053568",
"assets/packages/country_flags/res/si/th.si": "1654e97b82bcdcdaade71e1bc3a5590d",
"assets/packages/country_flags/res/si/ci.si": "2dd6886cd9b611e8301f347233f275db",
"assets/packages/country_flags/res/si/pw.si": "e658e7c8cdf0e27c4d9ccb084768f383",
"assets/packages/country_flags/res/si/us.si": "a524142e2a2f7df4ee1b26a98f09a927",
"assets/packages/country_flags/res/si/mh.si": "88c8196c37481de5021237e01ccb95a1",
"assets/packages/country_flags/res/si/cg.si": "a9df20410076c50e9abbd11b324712c3",
"assets/packages/country_flags/res/si/gb-wls.si": "bb7216967d97426e1d684b2745118f89",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/mir.png": "c87d1479c2784a534751238167b254b5",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/gpt_markdown/lib/fonts/JetBrainsMono-Regular.ttf": "d09f65145228b709a10fa0a06d522d89",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/assets/languages/de_DE.json": "a5730e2576982ff1eefa425818d51dbd",
"assets/assets/languages/en_US.json": "80400d4b1d1ed988684589940c2369aa",
"assets/assets/languages/fa_IR.json": "150efeccf71737bcbf06408922a575ce",
"assets/assets/languages/tr_TR.json": "4482c4fdaed1fec1841383511e40fc11",
"assets/assets/languages/es_ES.json": "b807b2fbef6fd701f13bedd602e1d190",
"assets/assets/icons/videoAIColored.png": "4a5b02ec7bf99348c4e72957261ebdf7",
"assets/assets/icons/question.png": "34fbf47d79ba641d4ef4d7f7199a48b0",
"assets/assets/icons/quick.png": "bb5e3edaac460a4f86ea4332f9f9d244",
"assets/assets/icons/cpp.png": "e4f46516b8d0d4b45f958b7e404f2d55",
"assets/assets/icons/mood.png": "c669a2dd22a0d8c750e3a8b5c789fe6a",
"assets/assets/icons/mode.png": "fda4a0a000da57df3bcddc36047809a8",
"assets/assets/icons/typescript.png": "69ce78681e62dd584bed58e374fad5de",
"assets/assets/icons/code.png": "cdd8a92d006717e902e4755cff5d217b",
"assets/assets/icons/thought_cloud.png": "d0ae1d239b7e292dbcf88ce370cd566f",
"assets/assets/icons/list.png": "5386b9218e35cafc8e32a91d306eee80",
"assets/assets/icons/automation_bots.png": "6426c1f8614d6379440b59fa943decb1",
"assets/assets/icons/explosion_emoji.png": "66bdc58025d06cffc78dc036b83cc059",
"assets/assets/icons/lock.png": "18ab9bf96c8fe7c2134434b5dd020c16",
"assets/assets/icons/expire_date.png": "91fd9a740b5b3ef7920c960b7ab8a1f5",
"assets/assets/icons/telegram.png": "9ab26a209ef0dcd746124b1eeed603a7",
"assets/assets/icons/premium.png": "34bdcf1968ac5567ae18386b387522fa",
"assets/assets/icons/markdown.png": "ca964bf81c63c2547a264ebeb4078fef",
"assets/assets/icons/about.png": "4dcfb47436a0c71132741520f7192953",
"assets/assets/icons/bookmark.png": "1edb2ed9300ac128b6728efd93d0c70e",
"assets/assets/icons/script.png": "dfb349d4b6fc305a48e76e175c22b589",
"assets/assets/icons/image_ai.png": "a97d5b57a528889b5f8b51cffb6ec7ea",
"assets/assets/icons/unity.png": "97acbfbf8e5886190ddc944ebe392b52",
"assets/assets/icons/rust.png": "830734a1dd10445ee0a591b973a4992a",
"assets/assets/icons/settings.png": "815dc6de7e30a1a6a3ddddc5120c424b",
"assets/assets/icons/quiz.png": "269e18a419c388c932a1395ff6ed8412",
"assets/assets/icons/folder.png": "0faabc2e8415f890b9e6bb9dccfa5bc7",
"assets/assets/icons/number-blocks.png": "dfd8cbc85be53b939bdbe0ff66a879a2",
"assets/assets/icons/database.png": "5527c258f8cb65027d7c8195a2cac25a",
"assets/assets/icons/hubColorful.png": "6091d1a389b7e27f18204ee021018479",
"assets/assets/icons/search.png": "92d1def3e9ff9c5ca94639be717306bf",
"assets/assets/icons/choice.png": "df8121a0baa34118268d931b3d3e4b08",
"assets/assets/icons/sort.png": "ab616c4c771c94a56650e3dbb2d2c992",
"assets/assets/icons/ai_brain.png": "ecb77d9e3653889efc819e208f47727a",
"assets/assets/icons/neuron.png": "07cd7385a3d7290977e49401cd99d19e",
"assets/assets/icons/curve_line.png": "c274f18c54783e07ff3e9b335e3779ba",
"assets/assets/icons/neuron_colorful.png": "2aa00d9b8733b7949110a343aff1ca31",
"assets/assets/icons/json.png": "a9ce631eb6befcb13305a24f6ea3b77c",
"assets/assets/icons/devices.png": "71d94ad94865d57258d9797f1cd16129",
"assets/assets/icons/html.png": "c573ff5552d6da9a1d28ec4e27cd1445",
"assets/assets/icons/login.png": "15fd4d0d6a2a0da6f1f4ccebf3265502",
"assets/assets/icons/history.png": "e44eba2a57054258f806f31000c950a0",
"assets/assets/icons/retina-filled.png": "e4e8e508faa653d153f58c06c99fcb96",
"assets/assets/icons/profile_page.png": "a11b93056c3b397b9b661e86f6ec2d1f",
"assets/assets/icons/txt-file.png": "07f49a8d65d888774cfce48d55d41695",
"assets/assets/icons/english_label.png": "a5e3d20b7f91cf54aad3ac22305bea3b",
"assets/assets/icons/sun.png": "518c0bbc9115ec744867029b3f49ba18",
"assets/assets/icons/windows.png": "19a63c96031af7ba813d083eaf6634fb",
"assets/assets/icons/email.png": "5b146b7fe3261271abd2b6e4100001eb",
"assets/assets/icons/unknown_device.png": "5af47bc7af93ed3938cc4250ffa9cf5e",
"assets/assets/icons/close.png": "b52b44e2532dd09334314d11c5b81be3",
"assets/assets/icons/github.png": "3d4c7482f267f5accbb7461766f3f790",
"assets/assets/icons/magic-wand.png": "08c2d68dd04dc3f01ef5adbf1448805c",
"assets/assets/icons/purchase_date.png": "5db7b158ed98603909daa59b3293085b",
"assets/assets/icons/moon.png": "116caba576309db2b449f783e0edc398",
"assets/assets/icons/ai_home.png": "8d780cbee0ad2b4d700e000987f37d01",
"assets/assets/icons/packet_colorful.png": "5ba0259040b50ed48f1d796dc85bcb65",
"assets/assets/icons/share.png": "88386fd3a894d8d3cdf0b908ea3c0bd7",
"assets/assets/icons/calendar.png": "00964641f3739901daa1602de5578057",
"assets/assets/icons/email_colored.png": "7f62782cc11d1cf6d5db34167d369262",
"assets/assets/icons/xml.png": "67a59857eeab44861e5a6d5e9a8c76ab",
"assets/assets/icons/submit.png": "976de300f37e1005b8d7ed5709ba4929",
"assets/assets/icons/text-to-speech.png": "1dbca07b1f858ffb440c9d9abe3e2b07",
"assets/assets/icons/console.png": "1d26278a7f0c904391c0b858e870c64a",
"assets/assets/icons/popularity.png": "5fc74531151a0ca3cc6d3e7e60bcc09c",
"assets/assets/icons/access.png": "5d401fc0bfe4658708905770564e90d1",
"assets/assets/icons/save.png": "0f437220994ce7bbfec43687fefe1397",
"assets/assets/icons/ai_generator.png": "6e7a890674742d06c1641dcccb6156db",
"assets/assets/icons/clear.png": "ccaa803a203c8d857a8db6bde16bf33c",
"assets/assets/icons/ios.png": "30b78977ebd5f0fc3c562a2327c01e40",
"assets/assets/icons/task.png": "5f3bf2ebe088ff6d69f647464e0ae611",
"assets/assets/icons/filter.png": "8c8feb8c570dfec0a04ca39cda80fc20",
"assets/assets/icons/css-3.png": "b848d5d9bb221592064de0f356f61676",
"assets/assets/icons/ruby.png": "6926fec95b18b9199e52f4627983820c",
"assets/assets/icons/output.png": "26c9828ae54786741df3f8bc8ffa3b0b",
"assets/assets/icons/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/icons/ai_answer.png": "13349f0d8aa67d418cfeb9f65443317e",
"assets/assets/icons/success.png": "cbdf7f5e24a14b631766dfcf4d2f619f",
"assets/assets/icons/download.png": "409930a4505af0ca590fb2517c481111",
"assets/assets/icons/dual_arrow.png": "0f94ad60725f8457481a598270ce7aac",
"assets/assets/icons/effect.png": "d9c0c861f482df48a624bf8475eec618",
"assets/assets/icons/template.png": "4666bed62b7c8939e3086aaee2243308",
"assets/assets/icons/java-script.png": "d9de75e5bf3a7b0ef2a48321acc06e88",
"assets/assets/icons/java.png": "1e1ba20cfa4a4c86d66437632e35df2f",
"assets/assets/icons/imageAIColored.png": "475a94459802f4b70129c9483de29635",
"assets/assets/icons/vip.png": "8a948506b9932cd950121b0fef2062e1",
"assets/assets/icons/sms.png": "3fb2393506f1b6bade1e9648249c1409",
"assets/assets/icons/general.png": "c4df87cc2d5557f7c912733f93cb18c2",
"assets/assets/icons/width.png": "232454858dc436f79218d3f3573b6065",
"assets/assets/icons/whatsapp.png": "1da1618b88bbbb6a0aa49985c76f71c8",
"assets/assets/icons/update.png": "e887c62fe1d4d7f5995e615aa5a61585",
"assets/assets/icons/card_to_card.png": "c31788b23ee8dfb0b01e1827f048564d",
"assets/assets/icons/R.png": "676d53a47a493bf61b97e49e43b11f2d",
"assets/assets/icons/ui.png": "b1c5f36c1642ea6654246ef6340cb228",
"assets/assets/icons/placeholder.png": "c0242eb898441267955cb977075dfba5",
"assets/assets/icons/wallet.png": "2b4dbaef11536ec2399a8ff2cf71b4e9",
"assets/assets/icons/error.png": "9fd8d1baeef2b50e7c9a89c331742c57",
"assets/assets/icons/instagram.png": "bdef32e358948d10a2a5cd7271a7eb7f",
"assets/assets/icons/yaml.png": "cf0f1e1477a0afba6664d5355d6f649a",
"assets/assets/icons/kotlin.png": "4ed4090dbe537699d55321c8767c92c9",
"assets/assets/icons/cancel.png": "aa3082bfd341201c2652939facb0f7cc",
"assets/assets/icons/retina-outlined.png": "43a4cee64e9a50daa293e4d205edb2fa",
"assets/assets/icons/shuffle.png": "d36a1e1532a27eb3390bb9f31e1dc840",
"assets/assets/icons/go.png": "6cb379aad502520c55cf1e5f392455a2",
"assets/assets/icons/sql.png": "e4d536b1a07294afad43045def94294f",
"assets/assets/icons/hourglass.png": "bf46a252930500ed914728c89e5f7321",
"assets/assets/icons/svg.png": "0516d4809a2711524e76e58a99863cb2",
"assets/assets/icons/vibe.png": "f75ed2b2ee8a5f50190305a6bf4d2eef",
"assets/assets/icons/C.png": "b4d1b93961882a7db508770b5ac7ad92",
"assets/assets/icons/reference.png": "b3fc6dcc65eb61eaf1cac34172528422",
"assets/assets/icons/bash.png": "14e699d61c409b62ac7e5b929f3b4cab",
"assets/assets/icons/swift.png": "9e87f7395547019c6ea4ad819e22f3f2",
"assets/assets/icons/free.png": "2f908d2badf8af0d15f9cdc04e87e8d8",
"assets/assets/icons/arrow.png": "4cee24588ad99d8ea4a49d9c5cc7e4a3",
"assets/assets/icons/php.png": "010d1f76034555827c7ef5dc461c981c",
"assets/assets/icons/premium_plans.png": "7c0afe2b02bcdf1da370026591b9b045",
"assets/assets/icons/profile.png": "374e22b2a1567ba516b2478ef2c1cf13",
"assets/assets/icons/creativity.png": "b654b2c3c1cff5ef2f890c0227a50a50",
"assets/assets/icons/ai_mode.png": "ea77077b5ae48670b477bd834e97740a",
"assets/assets/icons/versus.png": "467a429c5e62ec86d9aea37b61342b18",
"assets/assets/icons/note.png": "b003cbd25ffb22d18e419be3a001aa1f",
"assets/assets/icons/home.png": "6e05281652284249ebfffe04f4710820",
"assets/assets/icons/logo.png": "78beaa1ad380e65048fcc6c43aa78408",
"assets/assets/icons/information.png": "7da555d94c35ce5bfcd540c1bdbc3b4f",
"assets/assets/icons/dart.png": "67afaf26546ac978c500b22ba7707dda",
"assets/assets/icons/username.png": "c5901ba123a90e74bac6b9111be6a47d",
"assets/assets/icons/website.png": "ada8d2e86b982ebfcb18fef93b808291",
"assets/assets/icons/macos.png": "db0f0b0826a913271d29b708d9b9b773",
"assets/assets/icons/packet.png": "2902449c18313866d66559e8ab8d1050",
"assets/assets/icons/faq.png": "fe8cbd8d05209110b21141dae9660980",
"assets/assets/icons/fast-charge.png": "9ea2f2096e5d16a14c6a158a574d839b",
"assets/assets/icons/linux.png": "46a9d1ff1875270a12d919917001f1da",
"assets/assets/icons/pi_number.png": "262359733a091e9684824857ec235abc",
"assets/assets/icons/youtube_bw.png": "82fe05fe845a441bce2688174c7c7de0",
"assets/assets/icons/logout.png": "c23e1e9c3a6a6167942855e088748069",
"assets/assets/icons/voice_actor.png": "9a4e609f13f1645ae861b9bb8bea8885",
"assets/assets/icons/android.png": "cb97e41ae2bc86e67ab77b97682a954b",
"assets/assets/icons/add_ai.png": "d3afaa079c3ac5967fca8aa8b3d5f93f",
"assets/assets/icons/ai_bot.png": "c8f3f35fc82f8ab69e0dda74323d3072",
"assets/assets/icons/unlimited.png": "14be862caffe31c5067a14f4fdabd666",
"assets/assets/icons/youtube.png": "ec1efab49c24be248d8ee984df407508",
"assets/assets/icons/freemium.png": "12baa9b80b4357ff4689a354b045f908",
"assets/assets/icons/warning.png": "9231a5ca9ead7ebaf79021bed5ae1ad9",
"assets/assets/icons/answer.png": "104320984e63e10f05ea5162df621239",
"assets/assets/icons/height.png": "d6015b52a73266f5d8d54a151bd67191",
"assets/assets/icons/otp.png": "7f15a1ad99b5d28cbcf2ce53ca776a26",
"assets/assets/icons/c-sharp.png": "7633117ee5a6edba4ce790511dbbcb9a",
"assets/assets/icons/or.png": "5a984ae5a811f79669d6b115aa24907d",
"assets/assets/icons/language.png": "e27a2b519d123a020f47978b8f462d86",
"assets/assets/icons/ocr.png": "500b6ff68b369527a453bce19f3f1754",
"assets/assets/images/zarinpal.svg": "1a7c4c481805157f85c60bf3a6a4c1b4",
"assets/assets/images/game-cosmic-surge.jpg": "06d88128f66cf7b25ff3334b9fc41078",
"assets/assets/images/game-2048.png": "f7adaf75d4b994dfe32dcaa9ec4e5789",
"assets/assets/images/game-rhythmic-echoes.jpg": "73f7c299c8496c1649857cb58b48c51f",
"assets/assets/images/bitpay.svg": "ef2c093c54c6d94fe53b3c95d4e7785a",
"assets/assets/images/game-snake.jpg": "71a6970f737349c39acc75148e30f41d",
"assets/assets/images/enamad.png": "4aedec51837814b79e731e2d15f2a552",
"assets/assets/images/teamwork.png": "b0dca1538a110dd5ee860db55e6ea2e7",
"assets/assets/images/profile_avatar.png": "5ee355f0e1229cd89175fa7e0e578c52",
"assets/assets/images/card_to_card.jpg": "c9e45a26cd5bdc9e588d2cae7d614bf9",
"assets/assets/images/premium_card_background_image.png": "97b51fc52d116a76ed0294f3250a8cb6",
"assets/assets/images/game-stellar-memory.jpg": "bec3c481f40dfd07c3a0d36ec27f5461",
"assets/assets/images/technology.jpg": "2f260c524541e5ce019e8d050a5a2d79",
"assets/assets/images/game-tic-tac-toe.jpg": "cb99f3e595f31dc6baf042fa47da7301",
"assets/assets/gifs/message.gif": "6358cd13cf1f8250c93423cd639fd46e",
"assets/assets/gifs/digger.gif": "cb376455258ad7bb790280da6dad30e2",
"assets/assets/gifs/rocket.gif": "721315078128198b6b26e2b67a6175bb",
"assets/assets/gifs/brain.gif": "9902a4f5b6fd689f3f760476e9c074a2",
"assets/assets/gifs/analytics.gif": "0db0a790671ed9c9d4319720772b524f",
"assets/assets/gifs/cursor_select.gif": "560544a4192f9340d31fcc775e715214",
"assets/assets/gifs/thumb-up-award.gif": "92244b24ecf681033373284ef8b27fcb",
"assets/assets/audios/key4.mp3": "2381c502c46b2066870e1621afa30d3a",
"assets/assets/audios/error.mp3": "aa2279401f029fc2cbc5716ae64ec7e0",
"assets/assets/audios/key3.mp3": "90175c60422a360d33c9a6302067cb09",
"assets/assets/audios/key1.mp3": "5b981a1b93cc21ef5bb2d061b41a18e5",
"assets/assets/audios/key6.mp3": "bff23adfa5d2b75bc2bb5fc6c8fd7fd5",
"assets/assets/audios/success.mp3": "692299cda603688b3b26e1a47ae0e429",
"assets/assets/audios/key2.mp3": "47af04bc58c5b8cb01a5989b9b4c20fe",
"assets/assets/audios/key5.mp3": "d86b747a5c5df78c52900c6887773a67",
"assets/assets/audios/information.mp3": "cfd73909ba630b633459c0e3b6332777",
"assets/assets/fonts/sahel.ttf": "af9c9e017b90773e83fae9c67cc46605",
"assets/assets/fonts/iran_sans.ttf": "30d96e26d791255c14298567c0abc459",
"assets/assets/fonts/shabnam.ttf": "94798c76cb13deef9315f622c1541d52",
"assets/assets/fonts/iran_nastaliq.ttf": "083395bb280392dbac754b0aba022ad1",
"assets/assets/fonts/tanha.ttf": "ccec0bf074f173bf1b68aafe7c2005f7",
"assets/assets/fonts/samim.ttf": "cc531f954ce155c4f4863b68e9887b50",
"assets/assets/fonts/dana.ttf": "a8744233086992729ba22d2ca56e6080",
"assets/assets/fonts/vazir_matn.ttf": "24d05392e628925dcb1722a1f20952d3",
"assets/assets/fonts/yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/assets/fonts/orbitron.otf": "c8466cc6c97309a36fa80933fd0b9b37",
"assets/assets/fonts/seven_segment.ttf": "624871e1b6172da8c089029daf0c632e",
"assets/assets/fonts/fira_code.ttf": "b0ddf317b784a268d2a732a3ee4bb965",
"assets/assets/intro_markdowns/tr/why_love.md": "89c8c522451ec435fe432da28cdd13d5",
"assets/assets/intro_markdowns/tr/pricing.md": "cda98de5a98f9da5c4af48a84a4e4e77",
"assets/assets/intro_markdowns/tr/modes.md": "3ecf90287a208ab9a71f497d2d7a8451",
"assets/assets/intro_markdowns/tr/features.md": "7d50b69958266cd4f0dfd3a4b32d5cd7",
"assets/assets/intro_markdowns/tr/intro.md": "fc1f36f6505c020164fe97d84273e8ab",
"assets/assets/intro_markdowns/tr/call_to_action.md": "0e2f7ee16cbf8ec9c820dba3a850ff52",
"assets/assets/intro_markdowns/de/why_love.md": "b61f7f5643b565e90b0413bcad786041",
"assets/assets/intro_markdowns/de/pricing.md": "02ce542f2e5df6cc3c1a56089395de55",
"assets/assets/intro_markdowns/de/modes.md": "31555899f773d669f46f24a998263b0a",
"assets/assets/intro_markdowns/de/features.md": "1b111a715b559d3d0a7bd8ad28c17322",
"assets/assets/intro_markdowns/de/intro.md": "a34ce419c61f6528e9b61b106ccd769f",
"assets/assets/intro_markdowns/de/call_to_action.md": "eae20c72687df05a44f606503b206998",
"assets/assets/intro_markdowns/en/why_love.md": "c68899b4eff2e0a65c5418eac54aed87",
"assets/assets/intro_markdowns/en/pricing.md": "b6ad544c2dac3e75e978e750a858b9d6",
"assets/assets/intro_markdowns/en/modes.md": "1f0793b1417f79c8a7f8fe7ea5d25f1c",
"assets/assets/intro_markdowns/en/features.md": "7beeae1730ea2dd129feb625307c5aec",
"assets/assets/intro_markdowns/en/intro.md": "9dec8966aaa1e3e51440b79825b2b21d",
"assets/assets/intro_markdowns/en/call_to_action.md": "8b37c818ea25079252dab7b00c9cd69e",
"assets/assets/intro_markdowns/fa/why_love.md": "a8b7092bfc0c1d740a3899c78cfd6018",
"assets/assets/intro_markdowns/fa/pricing.md": "c301bfc7255cb53bb010104fc93f0f31",
"assets/assets/intro_markdowns/fa/modes.md": "c35e959d3c9dd05b72cf52d4a57ad2ca",
"assets/assets/intro_markdowns/fa/features.md": "0afbb2cc2eef978d337738763074d428",
"assets/assets/intro_markdowns/fa/intro.md": "aa8a768c97e8e161edf477f0d71b0ff9",
"assets/assets/intro_markdowns/fa/call_to_action.md": "a664309f007f58dea750ab9d16b710e5",
"assets/assets/intro_markdowns/es/why_love.md": "914ec90473e882686988e34f8bfaba28",
"assets/assets/intro_markdowns/es/pricing.md": "1113a1134bc7a16d027dded86d52088c",
"assets/assets/intro_markdowns/es/modes.md": "be8803f500e722f8eac23006d8785983",
"assets/assets/intro_markdowns/es/features.md": "62c0b8465ca11e372cd52d1d0d0156f6",
"assets/assets/intro_markdowns/es/intro.md": "0e56ddf19bd6fe4152bd85fbbfcab1cb",
"assets/assets/intro_markdowns/es/call_to_action.md": "e3828e23cbdeffe02d5e4d24aef6db23",
"assets/AssetManifest.bin.json": "3e09e33cc277a904490ec8a61697edd4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1ca44b8f5a150047cc427e266b5a2564",
"assets/FontManifest.json": "943dd6256bcf8702870f41c3752b90f5",
"assets/NOTICES": "cb18feb9a6ef8f65dc702c9f765e97b6",
"assets/fonts/MaterialIcons-Regular.otf": "585174863501f505a88f606a13b09ced",
"flutter_bootstrap.js": "f445fc5c6b9f954711ffb05fc02fc9ae",
"version.json": "c2aeafd8566e2a6c4b1ce7e78725851e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
