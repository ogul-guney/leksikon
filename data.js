const dictionaryData = [
  {
    word: "leksikon",
    isHidden: true,
    origin: "Eski Yunanca <i>lexikón</i> (λεξικόν) \"sözlük\" sözcüğünden alıntıdır.",
    evolution: [
      { step: "Yun. léxis", meaning: "söz, kelime" },
      { step: "Yun. lexikón", meaning: "kelimeler kitabı, sözlük" },
      { step: "Tr. leksikon", meaning: "sözlük" }
    ],
    explanation: "Leksikon, köken olarak eski Yunanca 'sözlük' anlamına gelir. Ancak bu sitenin ismi olarak seçilmesinin asıl nedeni, içinde barındırdığı 'sik' (erkek cinsel organı, argo) sözcüğüyle yapılan kelime oyunudur. Bir argo sözlüğü olduğu için bu hece logoda da özellikle vurgulanmıştır.",
    history: "leksikon \"sözlük\" [Kamus-ı Türki, 1900].",
    lastUpdated: "07 Nisan 2026"
  },
  {
    word: "abaza",
    forms: ["abazan", "abaza çekmek", "abaza ol-"],
    origin: "Özel ad olan <i>Abaza</i> (Kafkasya'da bir halk) sözcüğünden türetilmiş argo bir kullanımdır.",
    evolution: [
      { step: "Tr. Abaza", meaning: "Kafkas halkı" },
      { step: "Tr. abaza", meaning: "cinsel açlık çeken (argo)" }
    ],
    explanation: "Kelimenin argo anlamının, denizcilik argosundaki 'abosa' (tut, bırakma) komutuyla veya tarihsel bazı stereotiplerle ses benzerliği üzerinden geliştiği düşünülmektedir.",
    history: "abaza \"cinsel yönden aç kimse\" [Argo Sözlüğü, 1980].",
    lastUpdated: "07 Nisan 2026"
  },
  {
    word: "manita",
    forms: ["manita yapmak", "manitacılık"],
    origin: "İtalyanca <i>mantenuta</i> \"besleme (kadın), metres\" sözcüğünden alıntıdır.",
    evolution: [
      { step: "Lat. manu", meaning: "el" },
      { step: "Lat. manutenēre", meaning: "elde tutmak" },
      { step: "İta. mantenere", meaning: "elde tutmak, bakmak" },
      { step: "İta. mantenuta", meaning: "bakılan kadın, metres" },
      { step: "Tr. metres", meaning: "metres" }
    ],
    explanation: "Karş. Fransızca <i>maintenir</i> > İngilizce <i>maintain</i> \"bakmak, beslemek\".",
    history: "mantinota \"metres, sürekli görülen hayat kadını\" [Ahmed Mithat, 1882].",
    lastUpdated: "06 Nisan 2026"
  },
  {
    word: "fiyaka",
    forms: ["fiyaka satmak", "fiyakalı", "fiyakası bozulmak"],
    origin: "İtalyanca <i>fiacca</i> \"gösteriş, çalım\" sözcüğünden alıntıdır.",
    evolution: [
      { step: "Lat. flaccus", meaning: "sarkık, gevşek" },
      { step: "İta. fiacco", meaning: "yorgun, bitkin" },
      { step: "İta. fiacca", meaning: "yorgunluk / gösteriş" },
      { step: "Tr. fiyaka", meaning: "gösteriş" }
    ],
    explanation: "İtalyanca sözcük <i>fiacco</i> \"yorgun, bitkin\" sözcüğünden türetilmiştir.",
    history: "fiyaka \"gösteriş\" [Ahmet Rasim, Şehir Mektupları, 1898].",
    lastUpdated: "05 Nisan 2026"
  },
  {
    word: "arak",
    forms: ["araklamak", "arakçı"],
    origin: "Arapça <i>ˁrq</i> kökünden gelen <i>ˁaraq</i> \"ter, damıtılmış içki\" sözcüğünden alıntıdır. Argo anlamı \"çalma, hırsızlık\".",
    evolution: [
      { step: "Ar. ˁrq", meaning: "terleme kökü" },
      { step: "Ar. ˁaraqa", meaning: "terledi" },
      { step: "Ar. ˁaraq", meaning: "ter, damıtılmış içki" },
      { step: "Tr. arak", meaning: "hırsızlık" }
    ],
    explanation: "Arapça sözcük <i>ˁaraqa</i> \"terledi\" fiilinin masdarıdır.",
    history: "arak \"hırsızlık\" [Osman Cemal Kaygılı, Argo Lugati, 1932].",
    lastUpdated: "01 Nisan 2026"
  },
  {
    word: "zula",
    forms: ["zulalamak", "zulaya atmak"],
    origin: "Bilinmeyen bir dilden alıntıdır. \"Gizli yer, saklama yeri\" anlamındadır.",
    evolution: [
      { step: "? zula", meaning: "gizli yer" }
    ],
    explanation: "Kökeni kesin olarak bilinmemekle birlikte, Rumca veya İtalyanca argo kökenli olabileceği düşünülmektedir.",
    history: "zula \"gizli cep, saklanacak yer\" [Argo Sözlüğü, 1940].",
    lastUpdated: "28 Mart 2026"
  },
  {
    word: "kıyak",
    forms: ["kıyak geçmek", "kıyakçı"],
    origin: "Türkçe kökenli olduğu düşünülmektedir. \"Güzel, iyi, hoşa giden\" anlamındadır.",
    evolution: [
      { step: "Tr. kıy-", meaning: "kıymak, acımasızca kesmek" },
      { step: "Tr. kıyak", meaning: "iyi, güzel, cömertçe" }
    ],
    explanation: "<i>Kıy-</i> fiilinden türetilmiş olabileceği veya doğrudan argo bir türetme olduğu varsayılmaktadır.",
    history: "kıyak \"iyi, güzel\" [Hüseyin Rahmi Gürpınar, 1920].",
    lastUpdated: "15 Mart 2026"
  },
  {
    word: "afili",
    origin: "Rumca <i>afíli</i> (αφίλι) \"gösteriş, çalım\" sözcüğünden alıntıdır.",
    evolution: [
      { step: "Yun. aphyllos", meaning: "yapraksız" },
      { step: "Rum. afíli", meaning: "yapraksız / gösterişli" },
      { step: "Tr. afili", meaning: "gösterişli" }
    ],
    explanation: "Rumca sözcük Yunanca <i>aphyllos</i> \"yapraksız\" sözcüğünden evrilmiş olabilir, ancak anlam bağı belirsizdir.",
    history: "afili \"gösterişli, fiyakalı\" [Argo Sözlüğü, 1930].",
    lastUpdated: "10 Mart 2026"
  },
  {
    word: "racon",
    forms: ["racon kesmek", "raconuna göre"],
    origin: "İtalyanca <i>ragione</i> \"akıl, mantık, hak, hukuk\" sözcüğünden alıntıdır.",
    evolution: [
      { step: "Lat. ratio", meaning: "hesap, mantık" },
      { step: "Lat. ration-", meaning: "hesap" },
      { step: "İta. ragione", meaning: "akıl, hak, hukuk" },
      { step: "Tr. racon", meaning: "yol yordam, kural" }
    ],
    explanation: "Latince <i>ratio, ration-</i> \"hesap, mantık\" sözcüğünden evrilmiştir.",
    history: "racon \"yol yordam, kural, gösteriş\" [Osman Cemal Kaygılı, 1932].",
    lastUpdated: "02 Nisan 2026"
  }
];
