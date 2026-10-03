import { StoryPart } from '../../types/game';

export const PART_6_STORY: StoryPart = {
  partNumber: 6,
  title: 'Forest Exile & The Incognito Year',
  title_te: 'అరణ్యవాసం & విరాట నగర అజ్ఞాతవాసం',
  title_hi: 'वनपर्व और विराट नगर का अज्ञातवास',
  sanskritTitle: 'वनपर्व-विराटपर्व - अज्ञातवासश्च',
  summary: 'Twelve grueling years in the wilderness: the sun-blessed Akshayapatra, Arjuna’s duel with Lord Shiva, the profound riddles of Yaksha Prashna, Keechaka’s destruction, and Brihannala routed the Kuru army.',
  summary_te: 'పన్నెండేళ్ళ అరణ్యవాసంలో అక్షయపాత్ర, పరమశివునితో అర్జునుని పోరాటం & పాశుపతాస్త్ర ప్రాప్తి, యక్ష ప్రశ్నలు, విరాట నగరంలో అజ్ఞాతవాసం, కీచక వధ, మరియు ఉత్తర గోగ్రహణంలో బృహన్నల ప్రతాపం.',
  summary_hi: 'बारह वर्ष का वनवास: सूर्यदेव से अक्षयपात्र, शिवजी से पाशुपतास्त्र, यक्ष के गूढ़ प्रश्न, विराट नगर में छद्मवेष, कीचक का वध और बृहन्नला द्वारा कौरव सेना का मर्दन।',
  characterRewardId: 'bhima',

  charactersInPart: [
    {
      id: 'bhima_ballava',
      name: 'Bhima (Ballava / The Cook)',
      name_te: 'భీమసేనుడు (వల్లభుడు)',
      name_hi: 'भीमसेन (बल्लभ रसोइया)',
      title: 'Titan of the Kitchen & Destroyer of Keechaka',
      title_te: 'వంటలశాల వీరుడు & కీచక సంహర్త',
      title_hi: 'महाबली रसोइया एवं कीचकहंता',
      relationship: 'Second Pandava; disguised as King Virata\'s master chef and royal wrestler',
      relationship_te: 'విరాట రాజు వద్ద వంటవాడిగా, మల్లయోధుడిగా ఉన్న భీముడు',
      relationship_hi: 'विराट नरेश का महाबली रसोइया और मल्ल',
      intro: 'Cooked delicious feasts by day, and crushed the lustful commander Keechaka into a shapeless ball of flesh by night.',
      intro_te: 'పగలు విరాట మహారాజుకు అమృతంలాంటి వంటలు చేస్తూ, రాత్రి నాట్యశాలలో కీచకుడిని ముద్దలా పిసికి చంపిన వీరుడు.',
      intro_hi: 'दिन में स्वादिष्ट भोजन बनाने वाले और रात में द्रौपदी का अपमान करने वाले कीचक का संहार करने वाले।',
      avatarUrl: '/assets/wallpapers/bhima.jpg',
      role: 'hero'
    },
    {
      id: 'arjuna_brihannala',
      name: 'Arjuna (Brihannala)',
      name_te: 'అర్జునుడు (బృహన్నల)',
      name_hi: 'अर्जुन (बृहन्नला)',
      title: 'Master of Song & Wielder of Gandiva',
      title_te: 'సంగీత నాట్యాచార్యుడు & గాండీవధారి',
      title_hi: 'नृत्य गुरु एवं गांडीवधारी योद्धा',
      relationship: 'Third Pandava; disguised as a eunuch dancing master to Princess Uttara',
      relationship_te: 'ఉత్తరా రాజకుమారికి నాట్య గురువుగా ఉన్న అర్జునుడు',
      relationship_hi: 'राजकुमारी उत्तरा के नृत्य गुरु बने गांडीवधारी',
      intro: 'Turned Urvashi’s curse into a blessing, then single-handedly drove back Bhishma, Drona, and Karna to rescue the royal cows.',
      intro_te: 'ఊర్వశి శాపాన్ని వరంగా మార్చుకుని, ఒంటిచేత్తో కౌరవ సైన్యాన్ని తరిమికొట్టి గోవులను రక్షించిన సవ్యసాచి.',
      intro_hi: 'उर्वशी के शाप को ढाल बनाकर छिपे रहे, फिर अकेले ही भीष्म-द्रोण-कर्ण सहित पूरी कौरव सेना को पराजित किया।',
      avatarUrl: '/assets/wallpapers/arjuna.jpg',
      role: 'hero'
    },
    {
      id: 'draupadi_sairandhri',
      name: 'Draupadi (Sairandhri / Malini)',
      name_te: 'ద్రౌపది (సైరంధ్రి / మాలిని)',
      name_hi: 'द्रौपदी (सैरंध्री / मालिनी)',
      title: 'Handmaiden of Grace & Unbent Flame',
      title_te: 'సుధేష్ణ రాణి పరిచారిక & ఆత్మగౌరవ మూర్తి',
      title_hi: 'रानी सुदेष्णा की दासी एवं स्वाभिमानी नारी',
      relationship: 'Consort of the Pandavas; serving Queen Sudeshna of Matsya',
      relationship_te: 'విరాట రాణి సుధేష్ణ వద్ద కేశాలంకరణ దాసిగా పనిచేసిన ద్రౌపది',
      relationship_hi: 'विराट की पटरानी की केश-सज्जाकार बनीं सम्राज्ञी द्रौपदी',
      intro: 'Endured the humiliation of serving as a chambermaid while fiercely protecting her chastity against Keechaka.',
      intro_te: 'సామ్రాజ్ఞి అయి ఉండి దాసిగా బతుకుతూ, కీచకుని కామాంధత నుండి తన పాతివ్రత్యాన్ని కాపాడుకున్న ధీరవనిత.',
      intro_hi: 'महारानी होकर भी दासी का कष्ट भोगा और दुष्ट कीचक के अत्याचार का डटकर सामना किया।',
      avatarUrl: '/assets/wallpapers/draupadi.jpg',
      role: 'queen'
    },
    {
      id: 'yudhishthira_kanka',
      name: 'Yudhishthira (Kanka)',
      name_te: 'ధర్మరాజు (కంకుడు)',
      name_hi: 'युधिष्ठिर (कंक)',
      title: 'Brahmin Counselor & Victor of Yaksha Prashna',
      title_te: 'విరాట సభాసదుడు & యక్షప్రశ్నల విజేత',
      title_hi: 'विराट के सभासद एवं धर्म के ज्ञाता',
      relationship: 'Eldest Pandava; disguised as a companion in dice to King Virata',
      relationship_te: 'విరాట రాజుతో పాచికలాడే బ్రాహ్మణ సలహాదారుడు',
      relationship_hi: 'विराट राजा के साथ चौपड़ खेलने वाले विप्र सलाहकार',
      intro: 'Answered the Yaksha’s profound cosmic riddles to revive his four brothers, and bore Virata’s insults with saintly poise.',
      intro_te: 'యక్షుని ప్రశ్నలకు సమాధానమిచ్చి తమ్ముళ్ళను బతికించిన జ్ఞాని; విరాట రాజు కొట్టిన దెబ్బను కూడా ఓర్చుకున్న శాంతమూర్తి.',
      intro_hi: 'यक्ष के प्रश्नों का उत्तर देकर मृत भाइयों को जीवनदान दिलाने वाले और विराट के आघात को भी सहने वाले परम शांत।',
      avatarUrl: '/assets/wallpapers/yudhishthira.jpg',
      role: 'elder'
    },
    {
      id: 'yaksha_dharma',
      name: 'The Yaksha (Lord Yama / Dharma)',
      name_te: 'యక్షుడు (యమధర్మరాజు)',
      name_hi: 'यक्ष (यमराज / धर्मदेव)',
      title: 'Lord of Justice & Cosmic Inquisitor',
      title_te: 'ధర్మ దేవత & సత్య శోధకుడు',
      title_hi: 'धर्मराज एवं जीवन-मृत्यु के स्वामी',
      relationship: 'Spiritual Father of Yudhishthira',
      relationship_te: 'ధర్మరాజుకు దైవిక పితామహుడు',
      relationship_hi: 'युधिष्ठिर के धर्म-पिता',
      intro: 'Manifested as a crane beside an enchanted lake to test Yudhishthira’s wisdom, fairness, and universal compassion.',
      intro_te: 'కొంగ రూపంలో మాయా సరస్సు వద్ద ప్రత్యక్షమై ధర్మరాజు జ్ఞానాన్ని, నిష్పక్షపాతాన్ని పరీక్షించిన దేవుడు.',
      intro_hi: 'बगुले के रूप में मायावी सरोवर पर युधिष्ठिर की धर्म-निष्ठा और ज्ञान की परीक्षा लेने वाले।',
      avatarUrl: '/assets/wallpapers/sanatana-dharma.jpg',
      role: 'celestial'
    },
    {
      id: 'keechaka',
      name: 'Commander Keechaka',
      name_te: 'కీచకుడు',
      name_hi: 'सेनापति कीचक',
      title: 'Supreme Commander of Matsya Forces',
      title_te: 'మత్స్య దేశ సేనాపతి',
      title_hi: 'मत्स्य देश का पराक्रमी सेनापति',
      relationship: 'Brother of Queen Sudeshna; brother-in-law of King Virata',
      relationship_te: 'విరాట రాణి సుధేష్ణ సోదరుడు',
      relationship_hi: 'रानी सुदेष्णा का भाई और विराट का साला',
      intro: 'A tyrant of immense physical power whose lust for Draupadi led directly to his horrific midnight demise.',
      intro_te: 'అపారమైన బలవంతుడైనా కామంతో కళ్ళుమూసుకుపోయి ద్రౌపదిని వేధించి భీముని చేతిలో హతమైన దుర్మార్గుడు.',
      intro_hi: 'अपार बल का स्वामी किंतु कामी, जिसने सैरंध्री पर कुदृष्टि डालकर अपने काल को निमंत्रण दिया।',
      avatarUrl: '/assets/wallpapers/karna.jpg',
      role: 'adversary'
    }
  ],

  familyTree: {
    title: 'The Court of Matsya & The Six Hidden Identities',
    title_te: 'విరాట రాజదర్బారు & ఆరుగురి రహస్య రూపాలు',
    title_hi: 'विराट का दरबार और पांडवों के छह छद्मवेष',
    description: 'The undercover identities assumed by the Pandavas and Draupadi to survive the critical 13th year without discovery.',
    description_te: 'పదమూడవ ఏట అజ్ఞాతవాసం కోసం పాండవులు ధరించిన విభిన్న రూపాల పటం.',
    description_hi: 'तेरहवें वर्ष के अज्ञातवास में पहचान छिपाने के लिए धारण किए गए छह विचित्र रूप।',
    nodes: [
      { id: 'virata_t6', name: 'King Virata', name_te: 'విరాట రాజు', name_hi: 'राजा विराट', clan: 'Matsya', generation: 2, role: 'Monarch of Matsya Kingdom' },
      { id: 'sudeshna_t6', name: 'Queen Sudeshna', name_te: 'సుధేష్ణ రాణి', name_hi: 'रानी सुदेष्णा', clan: 'Matsya', generation: 2, role: 'Consort of Virata' },
      { id: 'keechaka_t6', name: 'Keechaka', name_te: 'కీచకుడు', name_hi: 'कीचक', clan: 'Matsya', generation: 2, role: 'Chief Commander & Tyrant' },
      { id: 'uttara_f_t6', name: 'Princess Uttara', name_te: 'ఉత్తర', name_hi: 'राजकुमारी उत्तरा', clan: 'Matsya', generation: 3, role: 'Daughter of Virata; student of Brihannala' },
      { id: 'uttara_m_t6', name: 'Prince Uttara Kumara', name_te: 'ఉత్తర కుమారుడు', name_hi: 'उत्तर कुमार', clan: 'Matsya', generation: 3, role: 'Boastful heir steered by Brihannala' },
      { id: 'kanka_t6', name: 'Yudhishthira (Kanka)', name_te: 'ధర్మరాజు (కంకుడు)', name_hi: 'युधिष्ठिर (कंक)', clan: 'Pandava', generation: 3, isKeyCharacter: true, role: 'Ascetic Gambler & Advisor' },
      { id: 'ballava_t6', name: 'Bhima (Ballava)', name_te: 'భీముడు (వల్లభుడు)', name_hi: 'भीम (बल्लभ)', clan: 'Pandava', generation: 3, isKeyCharacter: true, role: 'Master Chef & Wrestler' },
      { id: 'brihannala_t6', name: 'Arjuna (Brihannala)', name_te: 'అర్జునుడు (బృహన్నల)', name_hi: 'अर्जुन (बृहन्नला)', clan: 'Pandava', generation: 3, isKeyCharacter: true, role: 'Eunuch Dance Master' },
      { id: 'granthika_t6', name: 'Nakula (Granthika)', name_te: 'నకులుడు (గ్రంథికుడు)', name_hi: 'नकुल (ग्रंथिक)', clan: 'Pandava', generation: 3, role: 'Master of Horses' },
      { id: 'tantipala_t6', name: 'Sahadeva (Tantipala)', name_te: 'సహదేవుడు (తంతిపాలుడు)', name_hi: 'सहदेव (तंतिपाल)', clan: 'Pandava', generation: 3, role: 'Master of Bovines' },
      { id: 'sairandhri_t6', name: 'Draupadi (Sairandhri)', name_te: 'ద్రౌపది (సైరంధ్రి)', name_hi: 'द्रौपदी (सैरंध्री)', clan: 'Pandava', generation: 3, isKeyCharacter: true, role: 'Queen\'s Beautician' }
    ],
    links: [
      { from: 'virata_t6', to: 'uttara_f_t6', relationship: 'parent_of', label: 'Father of' },
      { from: 'virata_t6', to: 'uttara_m_t6', relationship: 'parent_of', label: 'Father of' },
      { from: 'sudeshna_t6', to: 'keechaka_t6', relationship: 'brother_of', label: 'Sister of' },
      { from: 'brihannala_t6', to: 'uttara_f_t6', relationship: 'mentor_of', label: 'Taught Music & Dance' },
      { from: 'ballava_t6', to: 'keechaka_t6', relationship: 'rivalry', label: 'Crushed in Dance Hall' },
      { from: 'sairandhri_t6', to: 'sudeshna_t6', relationship: 'alliance', label: 'Served as Maid' }
    ]
  },

  illustratedPages: [
    {
      pageNumber: 1,
      title: 'The Sun God’s Grace: The Divine Akshayapatra',
      title_te: 'సూర్యభగవానుని కరుణ & అక్షయపాత్ర',
      title_hi: 'सूर्यदेव का वरदान और अक्षयपात्र',
      sceneTag: 'Kamyaka Forest Hermitage',
      sceneTag_te: 'కామ్యక వన కుటీరం',
      sceneTag_hi: 'काम्यक वन का आश्रम',
      hookLine: 'A copper vessel blessed by the Sun fed thousands of wandering rishis every single noon.',
      hookLine_te: 'ప్రతిరోజూ వేలాదిమంది మునుల ఆకలి తీర్చిన సూర్య ప్రసాదిత దివ్య అక్షయపాత్ర.',
      hookLine_hi: 'हजारों ऋषियों और अतिथियों की क्षुधा शांत करने वाली सूर्यदेव की चमत्कारी तांबे की थाली।',
      paragraphs: [
        'Banished to the deep forest, the Pandavas were accompanied by thousands of devoted sages, Brahmins, and ascetics. Distressed that he had neither grain nor gold to offer his saintly guests, King Yudhishthira wept before his priest Dhaumya.',
        'Sage Dhaumya counseled him to worship Lord Surya, the origin of all nourishment. Standing waist-deep in the cold sacred waters, Yudhishthira sang the one hundred and eight holy names of the Sun. Blazing like a golden lotus, the Sun God appeared before the pious king.',
        'Surya placed in Yudhishthira\'s hands a divine copper vessel: the "Akshayapatra." The Sun promised: "For twelve years, this vessel shall yield inexhaustible divine food—fruits, roots, rice, milk, and sweets—until Empress Draupadi concludes her daily meal. As long as she has not washed it, its supply shall never diminish!"'
      ],
      paragraphs_te: [
        'అడవికి వెళ్ళిన పాండవుల వెంట వేలాది మంది బ్రాహ్మణులు, ఋషులు కూడా వచ్చారు. వారికి కడుపునిండా భోజనం పెట్టలేకపోతున్నానని ధర్మరాజు తన పురోహితుడైన ధౌమ్యుని ముందు ఆవేదన చెందాడు.',
        'ధౌమ్యుని సలహాతో ధర్మరాజు నడుము లోతు నీటిలో నిలబడి సూర్యభగవానుని 108 నామాలతో స్తుతించాడు. సూర్యదేవుడు ప్రత్యక్షమై ధర్మరాజుకు "అక్షయపాత్ర"ను అనుగ్రహించాడు.',
        '"ధర్మరాజా! పన్నెండేళ్ళ పాటు ఈ పాత్ర ద్వారా ఎంతమందికైనా సరిపడా ఆహారం లభిస్తుంది. ద్రౌపది భోజనం చేసి ఈ పాత్రను కడిగే వరకు ఇందులో ఆహారం ఎప్పటికీ తరగదు" అని సూర్యుడు అనుగ్రహించాడు.'
      ],
      paragraphs_hi: [
        'वन में पांडवों के साथ हजारों ब्राह्मण और तपस्वी भी चले आए। निर्धन अवस्था में इतने अतिथियों को भोजन कराने में असमर्थ देखकर युधिष्ठिर शोकमग्न हो गए।',
        'कुलगुरु धौम्य के कहने पर युधिष्ठिर ने पवित्र जल में खड़े होकर सूर्यदेव की 108 नामों से कठिन तपस्या की। भगवान सूर्य ने प्रकट होकर उन्हें एक चमत्कारी तांबे का पात्र \'अक्षयपात्र\' भेंट किया।',
        'सूर्यदेव ने वरदान दिया: "जब तक द्रौपदी भोजन नहीं कर लेती, तब तक इस पात्र से जितना चाहो उतना भोजन प्राप्त होगा। जब द्रौपदी भोजन कर पात्र धो लेगी, तभी इसकी अन्नपूर्णा शक्ति उस दिन के लिए समाप्त होगी।"'
      ],
      dialogueQuote: '"Take this vessel, son of Dharma; neither famine nor lack shall visit thy forest dwelling."',
      dialogueQuote_te: '"ఈ అక్షయపాత్రను స్వీకరించు ధర్మరాజా; మీ కుటీరంలో ఎన్నడూ ఆకలి కేకలు వినిపించవు."',
      dialogueQuote_hi: '"यह अक्षयपात्र ग्रहण करो युधिष्ठिर; वन में रहते हुए कभी तुम्हारे आश्रम में अन्न की कमी नहीं होगी।"',
      speaker: 'Lord Surya bestowing the Akshayapatra',
      speaker_te: 'ధర్మరాజుకు అక్షయపాత్రనిస్తూ సూర్యదేవుడు',
      speaker_hi: 'सूर्यदेव द्वारा युधिष्ठिर को वरदान',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'Yudhishthira receiving the glowing copper Akshayapatra from the radiant Sun God.',
      imageCaption_te: 'సూర్యదేవుని నుండి దివ్య అక్షయపాత్రను స్వీకరిస్తున్న ధర్మరాజు.',
      imageCaption_hi: 'भगवान सूर्य के कर-कमलों से अक्षयपात्र प्राप्त करते धर्मराज युधिष्ठिर।'
    },
    {
      pageNumber: 2,
      title: 'Kiratarjuniya: The Duel with Lord Shiva',
      title_te: 'కిరాతార్జునీయం & పరమశివునితో పోరాటం',
      title_hi: 'किरातार्जुनीय और देवाधिदेव महादेव से युद्ध',
      sceneTag: 'Peaks of Mount Indrakeeladri in the Himalayas',
      sceneTag_te: 'హిమాలయాల్లోని ఇంద్రకీలాద్రి పర్వతం',
      sceneTag_hi: 'हिमालय का इंद्रकीलाद्रि पर्वत',
      hookLine: 'He wrestled an uncouth tribal hunter for a dead boar, only to realize he held the feet of Mahadeva.',
      hookLine_te: 'ఒక అడవి వేటగాడితో తీవ్రంగా పోరాడి, చివరకు సాక్షాత్తూ పరమేశ్వరుని దర్శనాన్ని పొందిన పార్థుడు.',
      hookLine_hi: 'जंगली वराह पर अधिकार को लेकर एक भील से मल्ल-युद्ध हुआ, जो स्वयं त्रिलोकीनाथ शिव थे।',
      paragraphs: [
        'Knowing the coming war was inevitable, Sage Vyasa initiated Arjuna into the Pratismriti mantra to acquire celestial astras. Arjuna journeyed north into the snowy peaks of Indrakeeladri, surviving on fallen dry leaves and standing on one toe in fierce penance.',
        'One day, a ferocious wild boar charged at Arjuna. Arjuna released an arrow, while simultaneously a tribal hunter (Kirata) shot another arrow into the beast. Both arrows struck at the exact same instant.',
        'A furious dispute over ownership of the quarry turned into a duel. Arjuna fired showers of celestial shafts, but the hunter swallowed them like water! Enraged, Arjuna attacked with sword and boulders, all shattered on the hunter\'s body. Finally, they locked in wrestling combat. Exhausted, Arjuna fashioned a clay Shiva Linga and placed a garland of flowers upon it. To his utter awe, the flowers appeared around the neck of the hunter! The hunter dissolved into the three-eyed Lord Mahadeva, who blessed Arjuna with the cosmic weapon Pashupatastra.'
      ],
      paragraphs_te: [
        'రాబోయే యుద్ధం కోసం అస్త్రాలను సంపాదించమని వ్యాస మహర్షి ఆదేశించగా, అర్జునుడు హిమాలయాల్లోని ఇంద్రకీలాద్రిపై ఒంటికాలిపై నిలబడి తీవ్ర తపస్సు చేశాడు.',
        'ఒకనాడు ఒక క్రూరమైన అడవి పంది అర్జునుడిపైకి దూసుకురాగా, అతను బాణం వేశాడు. అదే సమయంలో ఒక అడవి కిరాతుడు కూడా బాణం వేశాడు. ఆ పంది ఎవరికి చెందుతుందనే వివాదం తీవ్ర ద్వంద్వ యుద్ధంగా మారింది.',
        'అర్జునుడు వేసిన బాణాలన్నీ కిరాతుడి శరీరానికి తాకి రాలిపోయాయి. చివరకు అలసిపోయిన అర్జునుడు మట్టితో శివలింగాన్ని చేసి పూలమాల వేసి ప్రార్థించాడు. ఆ పూలమాల ఆ వేటగాడి మెడలో కనిపించింది! సాక్షాత్తూ పరమశివుడే కిరాతుడిగా వచ్చాడని గ్రహించి సాష్టాంగపడ్డాడు. శివుడు ప్రసన్నుడై పరమశక్తిమంతమైన పాశుపతాస్త్రాన్ని అనుగ్రహించాడు.'
      ],
      paragraphs_hi: [
        'व्यास मुनि के आदेश पर अर्जुन ने दिव्यास्त्र प्राप्त करने हेतु हिमालय के इंद्रकीलाद्रि पर्वत पर घोर तपस्या की। वे केवल वायु पीकर एक पैर पर खड़े रहे।',
        'एक दिन एक भयानक जंगली सूअर (मूक दानव) पर अर्जुन और एक किरात (भील शिकारी) ने एक साथ तीर चलाए। शिकार पर अधिकार को लेकर दोनों में युद्ध छिड़ गया।',
        'अर्जुन के अचूक दिव्यास्त्र भी उस किरात के सामने निष्प्रभ हो गए। थककर अर्जुन ने पास ही मिट्टी का शिवलिंग बनाकर पुष्पमाला अर्पित की। वह पुष्पमाला उस शिकारी के गले में सुशोभित हो गई! अर्जुन जान गए कि यह साक्षात भगवान शिव हैं। देवाधिदेव ने प्रसन्न होकर अर्जुन को त्रैलोक्य-विनाशक पाशुपतास्त्र प्रदान किया।'
      ],
      dialogueQuote: '"Thou art the foremost of archers among mortals, Partha; wield my Pashupata, but release it never upon frail men."',
      dialogueQuote_te: '"పార్థా! నీ వీరత్వానికి మెచ్చాను; ఈ పాశుపతాస్త్రాన్ని స్వీకరించు, కానీ సామాన్యులపై దీనిని ఎన్నడూ ప్రయోగించవద్దు."',
      dialogueQuote_hi: '"पार्थ! तुम्हारी वीरता अद्वितीय है; मेरा यह अमोघ पाशुपतास्त्र ग्रहण करो, किंतु इसका प्रयोग किसी साधारण मनुष्य पर कभी मत करना।"',
      speaker: 'Lord Shiva granting Pashupatastra',
      speaker_te: 'పాశుపతాస్త్రాన్ని ప్రసాదిస్తూ పరమేశ్వరుడు',
      speaker_hi: 'भगवान शिव का अर्जुन को आशीर्वाद',
      imageUrl: '/assets/wallpapers/arjuna.jpg',
      imageCaption: 'Lord Shiva in radiant divine majesty bestowing the blazing Pashupatastra upon Arjuna.',
      imageCaption_te: 'అర్జునునికి పాశుపతాస్త్రాన్ని అనుగ్రహిస్తున్న పరమశివుడు.',
      imageCaption_hi: 'अर्जुन को दिव्य पाशुपतास्त्र प्रदान करते देवाधिदेव महादेव।'
    },
    {
      pageNumber: 3,
      title: 'The Enchanted Lake: Yaksha Prashna',
      title_te: 'మాయా సరస్సు & యక్ష ప్రశ్నలు',
      title_hi: 'मायावी सरोवर और यक्ष के प्रश्न',
      sceneTag: 'Deep Forest of Dwaitavana',
      sceneTag_te: 'ద్వైతవనంలోని మడుగు',
      sceneTag_hi: 'द्वैतवन का निर्जन सरोवर',
      hookLine: 'Four dead brothers lying beside crystal water, and a voice from the sky demanding the truth of life.',
      hookLine_te: 'మడుగు పక్కన విగతజీవులుగా పడివున్న తమ్ములు; ఆకాశవాణి రూపంలో వచ్చిన యక్షుని అద్భుత ప్రశ్నలు.',
      hookLine_hi: 'सरोवर तट पर चार भाइयों के निष्प्राण शरीर और आकाश से गूंजती यक्ष की रहस्यमयी चेतावनी।',
      paragraphs: [
        'In the twelfth year of exile, a deer carried away the firesticks of a poor ascetic. Chasing the deer into Dwaitavana forest under the scorching midday sun, the Pandavas collapsed from searing thirst. Nakula climbed a tall tree and spotted a gleaming lake.',
        'Nakula ran to the lake, but as he bent to drink, a voice boomed from a crane perched on a branch: "Do not drink, boy! Answer my questions first, or this water shall become thy death!" Parched and proud, Nakula drank and collapsed lifeless. Sahadeva, Arjuna, and Bhima followed in turn, defied the voice, drank, and fell dead.',
        'Finally, King Yudhishthira arrived. Beholding his colossal brothers lying lifeless like fallen trunks, he wept bitterly, but curbed his thirst: "Who art thou, noble spirit? Ask thy questions; I shall answer to the best of my wisdom."'
      ],
      paragraphs_te: [
        'వనవాసం చివరి రోజుల్లో ఒక బ్రాహ్మణుని అరణి కర్రలను దొంగిలించిన జింకను వెతుకుతూ పాండవులు అలసిపోయారు. విపరీతమైన దాహం వేయడంతో నకులుడు ఒక చెట్టెక్కి దగ్గర్లో ఉన్న సరస్సును చూశాడు.',
        'నకులుడు నీళ్ళు తాగబోతుండగా, ఒక కొంగ రూపంలోని యక్షుడు గద్దించాడు: "ఆగు! నా ప్రశ్నలకు సమాధానం చెప్పకుండా నీరు తాగితే మరణిస్తావు!" దాహంతో తట్టుకోలేక నకులుడు నీరు తాగి ప్రాణాలు కోల్పోయాడు. ఆ తర్వాత వచ్చిన సహదేవుడు, అర్జునుడు, భీముడు కూడా హెచ్చరికను లెక్కచేయక మరణించారు.',
        'చివరకు ధర్మరాజు అక్కడికి చేరుకున్నాడు. విగతజీవులై పడివున్న నలుగురు తమ్ముళ్ళను చూసి గుండెలు పగిలేలా రోదించాడు. కానీ వివేకాన్ని కోల్పోకుండా: "స్వామీ! మీరు ఎవరు? మీ ప్రశ్నలు అడగండి, నా పరిజ్ఞానం మేరకు సమాధానమిస్తాను" అన్నాడు.'
      ],
      paragraphs_hi: [
        'वनवास के अंतिम समय में एक ब्राह्मण की अरणि (यज्ञ की लकड़ी) लेकर भागे एक मृग का पीछा करते हुए पांडव प्यास से व्याकुल हो गए। नकुल ने एक सरोवर देखा।',
        'जैसे ही नकुल ने जल पीना चाहा, एक बगुले ने कहा: "ठहरो! पहले मेरे प्रश्नों के उत्तर दो, अन्यथा यह जल तुम्हारे प्राण हर लेगा।" नकुल ने अनसुना कर जल पिया और निष्प्राण हो गए। सहदेव, अर्जुन और भीम ने भी चेतावनी नहीं मानी और वे भी मृत्यु को प्राप्त हुए।',
        'अंत में युधिष्ठिर पहुँचे। भाइयों को मृत देखकर वे विलाप करने लगे, किंतु प्यास पर नियंत्रण रखते हुए उन्होंने कहा: "हे यक्ष! आप प्रश्न कीजिए, मैं अपनी बुद्धि अनुसार उत्तर दूँगा।"'
      ],
      dialogueQuote: '"What is swifter than wind? What is more numerous than blades of grass? What is the greatest wonder in the world?"',
      dialogueQuote_te: '"గాలి కంటే వేగమైనది ఏది? గడ్డిపోచల కంటే ఎక్కువ సంఖ్యలో ఉన్నది ఏది? ప్రపంచంలో అత్యంత ఆశ్చర్యకరమైన విషయం ఏమిటి?"',
      dialogueQuote_hi: '"वायु से भी तेज क्या है? तिनकों से भी अधिक संख्या किसकी है? और इस संसार का सबसे बड़ा आश्चर्य क्या है?"',
      speaker: 'The Yaksha’s Cosmic Inquest',
      speaker_te: 'యక్షుని గంభీర ప్రశ్నలు',
      speaker_hi: 'यक्ष के अलौकिक प्रश्न',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'Yudhishthira standing peacefully beside the enchanted lake, conversing with the glowing Yaksha.',
      imageCaption_te: 'మాయా సరస్సు తీరాన యక్షుని ప్రశ్నలకు సమాధానమిస్తున్న ధర్మరాజు.',
      imageCaption_hi: 'मायावी सरोवर तट पर यक्ष के प्रश्नों का शांत भाव से उत्तर देते युधिष्ठिर।'
    },
    {
      pageNumber: 4,
      title: 'The Greatest Wonder: The Wisdom of Dharma',
      title_te: 'అత్యంత ఆశ్చర్యం & తమ్ముళ్ళ పునర్జన్మ',
      title_hi: 'संसार का सबसे बड़ा आश्चर्य और भाइयों का पुनर्जीवन',
      sceneTag: 'Beside the Enchanted Lake',
      sceneTag_te: 'జీవిత రహస్యాల సరస్సు',
      sceneTag_hi: 'अमृतमयी सरोवर तट',
      hookLine: '"Every day mortals watch others die, yet live as though they shall never die—what wonder exceeds this?"',
      hookLine_te: '"ప్రతిరోజూ కళ్ళముందే మనుషులు చనిపోతుంటారు, అయినా తాము శాశ్వతమని బతుకుతారు—దీనికి మించిన ఆశ్చర్యం ఏముంది?"',
      hookLine_hi: '"प्रतिदिन प्राणी यमलोक जाते हैं, फिर भी जो बचे हैं वे अमर होने की भांति जीते हैं—इससे बड़ा आश्चर्य क्या होगा?"',
      paragraphs: [
        'The Yaksha fired questions like lightning: "What is faster than wind?" Yudhishthira answered: "The mind." "What is more numerous than grass?" "The worries in a human heart." "Who is the friend of a dying man?" "His charity, which alone walks with the soul into the afterlife."',
        'Then came the supreme riddle: "What is the greatest wonder in all creation?" Yudhishthira replied serenely: "Day after day, countless living beings enter the jaws of death before our eyes. Yet those who remain believe they will live forever. Nothing is more wondrous than this blindness!"',
        'Delighted, the Yaksha granted one life: "Choose one brother to revive." Yudhishthira answered without hesitation: "Revive Nakula!" Surprised, the Yaksha asked: "Why Nakula, your stepbrother, over Bhima or Arjuna?" Yudhishthira smiled: "My father had two wives: Kunti and Madri. As I, Kunti\'s son, live, let Nakula, Madri’s son, live as well, so both mothers have a son." Overjoyed by such unselfish fairness, the Yaksha revealed himself as Lord Dharma—Yudhishthira’s divine father—and brought all four brothers back to life.'
      ],
      paragraphs_te: [
        'యక్షుడు అడిగాడు: "గాలి కంటే వేగమైనది ఏది?" ధర్మరాజు: "మనస్సు." "గడ్డి కంటే ఎక్కువైనది?" "ఆందోళనలు." "మరణించే మనిషికి నిజమైన మిత్రుడు ఎవరు?" "అతను చేసిన దానధర్మం మాత్రమే."',
        '"ఈ ప్రపంచంలో అన్నిటికంటే పెద్ద ఆశ్చర్యం ఏమిటి?" అని యక్షుడు అడగ్గా, ధర్మరాజు: "ప్రతిరోజూ ప్రాణులు మరణిస్తుండటం చూస్తూ కూడా, తాము ఎప్పటికీ బతికే ఉంటామని మిగిలినవారు అనుకోవడమే అతిపెద్ద ఆశ్చర్యం" అని సమాధానమిచ్చాడు.',
        'సంతోషించిన యక్షుడు: "నీ నలుగురు తమ్ముళ్ళలో ఒక్కరిని బతికిస్తాను, ఎవరిని కోరుకుంటావు?" అని అడిగాడు. ధర్మరాజు వెంటనే "నకులుడిని బతికించండి" అన్నాడు. "నీ సొంత తమ్ముళ్ళు భీమార్జునులను కాదని సవతి తల్లి కొడుకును ఎందుకు కోరావు?" అని అడగ్గా: "మా నాన్నకు కుంతి, మాద్రి అనే ఇద్దరు భార్యలు. కుంతి కొడుకుగా నేను బతికే ఉన్నాను, మాద్రికి కూడా ఒక కొడుకు బతికి ఉండాలి" అన్నాడు. ఈ నిష్పక్షపాత ధర్మానికి ముగ్ధుడైన యమధర్మరాజు తన నిజరూపం చూపి, నలుగురు సోదరులనూ బతికించి అజ్ఞాతవాసంలో ఎవరూ గుర్తించలేరని వరమిచ్చాడు.'
      ],
      paragraphs_hi: [
        'यक्ष ने पूछा: "वायु से तेज क्या है?" युधिष्ठिर ने कहा: "मन।" "तिनकों से अधिक क्या है?" "चिंता।" "मरते हुए मनुष्य का सखा कौन है?" "उसका धर्म और दान, जो मृत्यु के बाद भी साथ जाता है।"',
        '"संसार का सबसे बड़ा आश्चर्य क्या है?" युधिष्ठिर बोले: "प्रतिदिन अनगिनत प्राणी काल के गाल में समाते हैं, फिर भी जीवित रहने वाले सदा जीने की इच्छा रखते हैं। इससे बड़ा आश्चर्य और क्या हो सकता है!"',
        'प्रसन्न होकर यक्ष ने कहा: "मैं किसी एक भाई को जीवित करूँगा, किसे चुनते हो?" युधिष्ठिर ने कहा: "नकुल को!" यक्ष ने पूछा: "भीम-अर्जुन जैसे सगे भाइयों को छोड़कर सौतेले भाई नकुल को क्यों?" युधिष्ठिर बोले: "मेरे पिता की दो पत्नियाँ थीं—कुंती और माद्री। कुंती का पुत्र मैं जीवित हूँ, तो माद्री का भी एक पुत्र जीवित रहना चाहिए।" इस निष्पक्ष धर्म-निष्ठा से गद्गद होकर धर्मराज यम ने अपना रूप प्रकट किया और चारों भाइयों को पुनर्जीवित कर दिया।'
      ],
      dialogueQuote: '"Righteousness preserved preserves the universe; abandoned, it destroys all."',
      dialogueQuote_te: '"ధర్మో రక్షతి రక్షితః — ధర్మాన్ని మనం కాపాడితే, ఆ ధర్మమే మనల్ని కాపాడుతుంది."',
      dialogueQuote_hi: '"धर्मो रक्षति रक्षितः — जो धर्म की रक्षा करता है, धर्म उसकी रक्षा करता है।"',
      speaker: 'Lord Dharma blessing Yudhishthira',
      speaker_te: 'ధర్మరాజును ఆశీర్వదిస్తూ యమధర్మరాజు',
      speaker_hi: 'यमराज द्वारा धर्मराज को दिव्य वरदान',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'The four brothers awakening to life as Lord Dharma showers golden light upon them.',
      imageCaption_te: 'యమధర్మరాజు అనుగ్రహంతో తిరిగి ప్రాణం పోసుకున్న నలుగురు పాండవులు.',
      imageCaption_hi: 'धर्मराज यम के आशीर्वाद से चारों भाइयों के पुनर्जीवित होने का अद्भुत दृश्य।'
    },
    {
      pageNumber: 5,
      title: 'The Thirteenth Year: Disguised in Matsya Kingdom',
      title_te: 'మత్స్య దేశంలో ఆరుగురి అజ్ఞాత రూపాలు',
      title_hi: 'विराट नगर में पांडवों के छह छद्मवेष',
      sceneTag: 'Royal Capital of King Virata',
      sceneTag_te: 'విరాట నగర రాజసభ',
      sceneTag_hi: 'विराट नगर का भव्य राजदरबार',
      hookLine: 'Hiding weapons in a corpse-wrapped bundle in a cremation tree, emperors became servants.',
      hookLine_te: 'శ్మశానంలోని జమ్మి చెట్టుపై ఆయుధాలను శవంలా చుట్టి దాచి, విరాట రాజు వద్ద సేవకులుగా చేరిన సార్వభౌములు.',
      hookLine_hi: 'शमी वृक्ष पर शव के रूप में गांडीव छिपाकर, चक्रवर्ती सम्राट बन गए साधारण सेवक।',
      paragraphs: [
        'The dread thirteenth year arrived. If discovered by Duryodhana’s thousands of covert spies, the Pandavas would face another twelve years of forest agony. Arriving at the outskirts of King Virata’s capital in Matsya, they hid their celestial bows in a gigantic Shami tree inside a cremation ground, wrapping the bundle in canvas resembling a decaying corpse to ward off prying hands.',
        'They adopted clever pseudonyms: Yudhishthira became "Kanka," an ascetic expert at rolling dice and advising the king; Bhima became "Ballava," a massive culinary chef and royal wrestling champion; Arjuna, afflicted by Urvashi’s curse of physical change, became "Brihannala," teaching dancing, singing, and instruments to Princess Uttara.',
        'Nakula became "Granthika," managing the royal stables with magical equine lore; Sahadeva became "Tantipala," guarding the cattle herds; and Queen Draupadi became "Sairandhri" (Malini), an exquisite hairdresser and personal companion to Queen Sudeshna.'
      ],
      paragraphs_te: [
        'అత్యంత కీలకమైన 13వ ఏడు రానే వచ్చింది. శత్రువుల గూఢచారుల కంటపడితే మళ్ళీ 12 ఏళ్ళు అడవుల పాలు కావాల్సిందే. విరాట నగర పొలిమేరల్లోని శ్మశానంలో ఉన్న జమ్మి చెట్టుపై తమ గాండీవాది ఆయుధాలను ఎవరూ తాకకుండా శవంలా చుట్టి భద్రపరిచారు.',
        'ధర్మరాజు "కంకుడు" అనే పేరుతో పాచికలాడే బ్రాహ్మణ సలహాదారుడిగా చేరాడు. భీముడు "వల్లభుడు" అనే పేరుతో రుచికరమైన వంటలు చేసే పాకశాస్త్ర నిపుణుడిగా, మల్లయోధుడిగా మారాడు. ఊర్వశి శాపంతో నపుంసక రూపం పొందిన అర్జునుడు "బృహన్నల"గా మారి ఉత్తరా రాజకుమారికి నాట్య సంగీతాలు నేర్పే గురువయ్యాడు.',
        'నకులుడు "గ్రంథికుడు"గా అశ్వశాల పాలకుడిగా, సహదేవుడు "తంతిపాలుడు"గా గోవుల రక్షకుడిగా, ద్రౌపది "సైరంధ్రి"గా విరాట రాణి సుధేష్ణ వద్ద కేశాలంకరణ దాసిగా చేరారు.'
      ],
      paragraphs_hi: [
        'तेरहवें वर्ष का संकटपूर्ण समय आ गया। यदि कोई एक भी गुप्तचर पहचान लेता, तो पुनः 12 वर्ष का वनवास निश्चित था। उन्होंने श्मशान के विशाल शमी वृक्ष पर अपने गांडीव आदि अस्त्रों को एक शव के रूप में बांधकर छिपा दिया।',
        'युधिष्ठिर \'कंक\' बनकर राजा विराट के साथ चौपड़ खेलने वाले विप्र बने। भीम \'बल्लभ\' बनकर रसोई के प्रधान और पहलवान बने। अर्जुन अप्सरा उर्वशी के शाप को वरदान बनाकर \'बृहन्नला\' के रूप में राजकुमारी उत्तरा को नृत्य-संगीत सिखाने लगे।',
        'नकुल \'ग्रंथिक\' बनकर अश्वशाला की देखरेख करने लगे, सहदेव \'तंतिपाल\' बनकर गोशाला के अध्यक्ष बने, और महारानी द्रौपदी \'सैरंध्री\' बनकर पटरानी सुदेष्णा की केश-सज्जाकार दासी बन गईं।'
      ],
      dialogueQuote: '"May this ancient Shami tree guard our celestial bows until the day of righteous reckoning arrives!"',
      dialogueQuote_te: '"మేము తిరిగి వచ్చే వరకు మా దివ్య ఆయుధాలను ఈ జమ్మి చెట్టే కంటికి రెప్పలా కాపాడుగాక!"',
      dialogueQuote_hi: '"हे पवित्र शमी वृक्ष! जब तक धर्म-युद्ध का समय न आ जाए, हमारे इन दिव्यास्त्रों की रक्षा करना!"',
      speaker: 'Arjuna blessing the Shami Tree',
      speaker_te: 'జమ్మి చెట్టును ప్రార్థిస్తూ అర్జునుడు',
      speaker_hi: 'शमी वृक्ष पर गांडीव छिपाते अर्जुन',
      imageUrl: '/assets/wallpapers/bhima.jpg',
      imageCaption: 'The sacred Shami tree in the twilight concealing the celestial weapons of the Pandavas.',
      imageCaption_te: 'పాండవుల దివ్యాస్త్రాలను తనలో దాచుకున్న పవిత్ర జమ్మి చెట్టు.',
      imageCaption_hi: 'शमी वृक्ष पर दिव्य गांडीव और अस्त्रों को सुरक्षित छिपाने का दृश्य।'
    },
    {
      pageNumber: 6,
      title: 'The Lust of Keechaka & Sairandhri’s Plight',
      title_te: 'కీచకుని కామాంధత & సైరంధ్రి వేదన',
      title_hi: 'कीचक की कुदृष्टि और सैरंध्री का संताप',
      sceneTag: 'Queen’s Palace in Matsya',
      sceneTag_te: 'రాణివాస ప్రాంగణం',
      sceneTag_hi: 'विराट नगर का रनिवास',
      hookLine: 'The invincible general of the Matsya armies demanded that the queen\'s maid surrender to his lust.',
      hookLine_te: 'మత్స్య దేశ సేనాపతి కీచకుని కామ పిశాచం; నిండు సభలో సైరంధ్రిని కాలితో తన్నిన దురహంకారం.',
      hookLine_hi: 'अपार बलशाली सेनापति कीचक ने सैरंध्री पर बुरी दृष्टि डाली और सभा में उसे लात मारी।',
      paragraphs: [
        'For ten months, the secret remained impenetrable. But disaster loomed in the form of Commander Keechaka, the brother of Queen Sudeshna and supreme marshal of the realm\'s armed forces. Beholding Sairandhri\'s divine beauty, he became mad with lust.',
        'Keechaka pressured his sister Queen Sudeshna to send Sairandhri to his private mansion under the pretext of fetching vintage wine. When Draupadi arrived, Keechaka blocked the door and grabbed her veil. Draupadi broke free with divine strength and fled into the royal assembly where King Virata, Kanka (Yudhishthira), and Ballava (Bhima) were present.',
        'In full view of the court, Keechaka caught up with her, struck her, and kicked her to the floor! Bhima\'s eyes turned to burning coals; he grabbed a tree outside the window to uproot it and smash Keechaka’s skull. But Yudhishthira caught Bhima\'s eye with an icy glare: breaking their disguise now meant twelve more years of forest exile. Bhima crushed a burning ember in his bare fist and endured the agony in silence.'
      ],
      paragraphs_te: [
        'పది నెలలు ఏ సమస్యా లేకుండా గడిచాయి. కానీ విరాట సేనాపతి, రాణి సోదరుడైన కీచకుని కళ్ళు సైరంధ్రిపై పడ్డాయి. కామంతో రగిలిపోయిన అతను ఆమెను ఎలాగైనా పొందాలని అనుకున్నాడు.',
        'మద్యం తెచ్చే నెపంతో సుధేష్ణ చేత సైరంధ్రిని తన భవనానికి రప్పించాడు. ద్రౌపది తప్పించుకుని విరాట రాజు, కంకుడు (ధర్మరాజు), వల్లభుడు (భీముడు) ఉన్న రాజసభలోకి పరుగున వచ్చింది.',
        'కీచకుడు అందరి ముందే ఆమెను పట్టుకుని నేలపై పడేసి కాలితో తన్నాడు! ఇది చూసి భీముని కళ్ళు ఎర్రబడ్డాయి, బయట ఉన్న చెట్టును పెకలించి కీచకుడిని చంపబోయాడు. కానీ ధర్మరాజు కంటిసైగతో అడ్డుకున్నాడు; ఇప్పుడు గుర్తింపు బయటపడితే మళ్ళీ 12 ఏళ్ళు వనవాసం చేయాల్సి వస్తుంది. భీముడు పళ్ళు కొరుకుతూ నిగ్రహించుకున్నాడు.'
      ],
      paragraphs_hi: [
        'दस महीने सकुशल बीत गए। किंतु सेनापति कीचक (रानी सुदेष्णा का भाई) सैरंध्री के अलौकिक रूप पर मोहित हो गया और कामवासना में अंधा हो गया।',
        'उसने सुदेष्णा को विवश कर सैरंध्री को मदिरा लाने के बहाने अपने महल में बुलवाया। द्रौपदी वहाँ से भागकर राजसभा में पहुँची जहाँ राजा विराट, कंक (युधिष्ठिर) और बल्लभ (भीम) बैठे थे।',
        'कीचक ने सबके सामने द्रौपदी को लात मार दी! यह देखकर भीमसेन क्रोध से कांप उठे और बाहर का पेड़ उखाड़ने लगे। किंतु युधिष्ठिर ने कठोर दृष्टि से उन्हें रोक दिया, क्योंकि भेद खुलने पर 12 वर्ष का वनवास पुनः भोगना पड़ता। भीम ने अंगारे चबाकर क्रोध को दबा लिया।'
      ],
      dialogueQuote: '"My husbands are five invisible Gandharvas; touch me again, and they shall feed thy flesh to the jackals of hell!"',
      dialogueQuote_te: '"నా భర్తలు ఐదుగురు అదృశ్య గంధర్వులు; ఇంకోసారి నన్ను తాకితే నిన్ను నరకానికి పంపుతారు!"',
      dialogueQuote_hi: '"मेरे पति पांच महाबली गंधर्व हैं; यदि तुमने पुनः मुझे छुआ, तो वे यमलोक में भी तुम्हें नहीं छोड़ेंगे!"',
      speaker: 'Draupadi warning Keechaka',
      speaker_te: 'కీచకుడిని హెచ్చరిస్తున్న ద్రౌపది',
      speaker_hi: 'द्रौपदी की कीचक को अंतिम चेतावनी',
      imageUrl: '/assets/wallpapers/draupadi.jpg',
      imageCaption: 'Draupadi weeping in humiliation before the constrained Bhima in the royal kitchen.',
      imageCaption_te: 'వంటశాలలో భీముని ముందు కన్నీరు మున్నీరవుతున్న ద్రౌపది.',
      imageCaption_hi: 'रसोई में भीम के सम्मुख न्याय की गुहार लगाती अपमानित द्रौपदी।'
    },
    {
      pageNumber: 7,
      title: 'Midnight in the Dancing Hall: The Fall of Keechaka',
      title_te: 'నాట్యశాలలో అర్ధరాత్రి & కీచక వధ',
      title_hi: 'नाट्यशाला में मध्यरात्रि और कीचक का अंत',
      sceneTag: 'Empty Royal Dancing Pavilion of Matsya',
      sceneTag_te: 'చీకటి నాట్యశాల',
      sceneTag_hi: 'विराट की वीरान नृत्यशाला',
      hookLine: 'In pitch darkness, the lover embraced what he thought was a maiden, but found the crushing iron coils of Bhima.',
      hookLine_te: 'చీకట్లో ద్రౌపది అనుకుని కౌగిలించుకున్న కీచకుడికి భీముని ఉక్కు పిడికిళ్లు స్వాగతం పలికాయి.',
      hookLine_hi: 'अंधेरे में जिसे सैरंध्री समझकर आलिंगन में भरा, वह साक्षात यमराज तुल्य महाबली भीम थे।',
      paragraphs: [
        'That night, weeping bitter tears, Draupadi entered the royal kitchen where Bhima slept. She showed him her bruised limbs: "If Keechaka lives to see tomorrow\'s dawn, Vrikodara, I shall drink poison and end my life!"',
        'Bhima held her tearful face gently: "Dry your eyes, Panchali. Tell Keechaka you will meet him alone tonight at midnight in the deserted dancing pavilion!" Draupadi delivered the message. Inebriated with desire, Keechaka arrived perfumed and eager in the dark hall.',
        'Seeing a figure lying covered in silk on a couch, Keechaka whispered sweet endearments and reached out. Suddenly, two colossal hands shot out and clamped around his throat like iron bands! "I am the Gandharva who has come to taste your embrace!" growled a voice of thunder. Bhima smashed Keechaka against pillars, broke his bones, and rolled his limbs into his torso, reducing the giant commander into an unrecognizable sphere of crushed flesh before vanishing into the night.'
      ],
      paragraphs_te: [
        'ఆ రాత్రి ద్రౌపది కన్నీటితో వంటశాలకు వెళ్ళి భీముడిని నిద్రలేపింది. తన గాయాలను చూపించి: "రేపటి సూర్యోదయాన్ని కీచకుడు చూస్తే నేను విషం తాగి చనిపోతాను భీమా!" అని రోదించింది.',
        'భీముడు ఆమె కన్నీళ్లు తుడిచి: "నువ్వు ఏడవకు ద్రౌపది. అర్ధరాత్రి ఎవరూ లేని నాట్యశాలలో కలుస్తానని కీచకుడికి కబురు పంపు" అన్నాడు. ద్రౌపది అలాగే చెప్పగా, కీచకుడు మోహంతో మంచి బట్టలు వేసుకుని నాట్యశాలకు వచ్చాడు.',
        'మంచంపై దుప్పటి కప్పుకుని పడుకున్న రూపాన్ని చూసి ద్రౌపది అనుకుని ముట్టుకోబోయాడు. క్షణంలో ఉక్కు లాంటి రెండు చేతులు అతని గొంతును పట్టేసుకున్నాయి! "నేనే ఆ గంధర్వుడిని!" అంటూ భీముడు కీచకుడిని స్తంభాలకు కొట్టి, చేతులు కాళ్ళు నడుములోకి దూర్చేసి, ఎముకలు పిండి చేసి మాంసపు ముద్దగా మార్చి చంపేశాడు.'
      ],
      paragraphs_hi: [
        'उस रात द्रौपदी रोते हुए भीम की रसोई में पहुँची। उसने अपने घाव दिखाकर कहा: "भीम! यदि कल का सूर्य कीचक ने देखा, तो मैं विष पीकर प्राण त्याग दूँगी।"',
        'भीम ने कहा: "पांचाली! रोओ मत। कीचक से कहो कि आज आधी रात को वह सुनसान नृत्यशाला में एकांत में तुमसे मिले।" द्रौपदी ने ऐसा ही किया। कीचक कामुक होकर इत्र लगाकर पहुँचा।',
        'शय्या पर चादर ओढ़े लेटे हुए शरीर को सैरंध्री समझकर उसने जैसे ही स्पर्श किया, दो लोहे जैसी भुजाओं ने उसकी गर्दन जकड़ ली! "मैं वह गंधर्व हूँ जो तेरा काल बनकर आया है!" भीम ने कीचक को खंभों पर पटका, उसकी हड्डियाँ तोड़ दीं और उसके हाथ-पैर पेट में घुसेड़कर उसे मांस का लोथड़ा बना दिया।'
      ],
      dialogueQuote: '"The lust that touched the fire-born queen has met its rightful bed of crushed bone!"',
      dialogueQuote_te: '"యజ్ఞకుండ సంభూతురాలైన ద్రౌపదిని కామించిన వాడికి దక్కిన శాశ్వత నిద్ర ఇది!"',
      dialogueQuote_hi: '"यज्ञ की अग्नि को छूने की इच्छा रखने वाले कामी को भीमसेन ने यमलोक पहुँचा दिया!"',
      speaker: 'Bhima standing over the slain Keechaka',
      speaker_te: 'కీచకుని శవంపై భీముని గర్జన',
      speaker_hi: 'कीचक के वध पर भीमसेन के शब्द',
      imageUrl: '/assets/wallpapers/bhima.jpg',
      imageCaption: 'Mighty Bhima after the duel in the dark dancing hall of Matsya.',
      imageCaption_te: 'చీకటి నాట్యశాలలో కీచకుడిని సంహరించిన అనంతరం భీమసేనుడు.',
      imageCaption_hi: 'नृत्यशाला में कीचक का संहार कर धर्म की रक्षा करते महाबली भीम।'
    },
    {
      pageNumber: 8,
      title: 'The Battle for the Cattle: Brihannala’s Triumph',
      title_te: 'ఉత్తర గోగ్రహణం & బృహన్నల విజయ విహారం',
      title_hi: 'उत्तर गोग्रहण और बृहन्नला का महासंग्राम',
      sceneTag: 'Outskirts of Matsya Kingdom & Shami Tree',
      sceneTag_te: 'జమ్మి చెట్టు & కౌరవ సైన్యంతో యుద్ధం',
      sceneTag_hi: 'शमी वृक्ष और कौरव सेना का रणक्षेत्र',
      hookLine: 'The disguised dancing teacher retrieved Gandiva and single-handedly routed the entire Kuru army.',
      hookLine_te: 'గాండీవాన్ని చేతబట్టి ఒంటిచేత్తో భీష్మ, ద్రోణ, కర్ణ, దుర్యోధనులను పారదోలిన బృహన్నల.',
      hookLine_hi: 'शमी वृक्ष से गांडीव उतारकर एक ही रथ पर सवार अर्जुन ने संपूर्ण कौरव महारथियों को धूल चटा दी।',
      paragraphs: [
        'Hearing of Keechaka’s death by "Gandharvas," Duryodhana suspected the Pandavas were hiding in Matsya. To flush them out before the thirteenth year expired, Duryodhana launched a massive invasion, stealing sixty thousand royal cows of Matsya.',
        'With the King away fighting in the south, the young, cowardly Prince Uttara Kumara boasted he would defeat the Kauravas if only he had a charioteer. Brihannala volunteered to drive his chariot. But when young Uttara saw the ocean of Kaurava warriors—Bhishma, Drona, Kripa, Ashwatthama, Karna, and Duryodhana—he dropped his bow and fled in terror! Arjuna caught him, brought him back, and steered the chariot to the sacred Shami tree.',
        'Unwrapping the shining Gandiva bow, Arjuna strung the celestial chord; its sonic roar echoed across the plains. Revealing his true identity to Uttara, Arjuna charged. Firing waves of divine arrows, he defeated Karna, disabled Drona, countered Bhishma, and finally unleashed the Sammohanastra (slumber weapon). As the entire Kaurava army collapsed into enchanted sleep, Prince Uttara went forward, snipped the colorful silks from the crowns of the slumbering princes for his sister\'s dolls, and drove home in glory—the thirteenth year completed without detection!'
      ],
      paragraphs_te: [
        'కీచకుడు చనిపోయాడని విని పాండవులే అక్కడ ఉన్నారని అనుమానించిన దుర్యోధనుడు, గడువు ముగియకముందే వారిని బయటకు రప్పించడానికి విరాట రాజు గోవులను అపహరించాడు.',
        'యుద్ధం చేయడానికి సారథి లేడని ఉత్తర కుమారుడు గొప్పలు చెప్పుకోగా, బృహన్నల సారథిగా వెళ్ళింది. కానీ భీష్మ, ద్రోణ, కర్ణ, దుర్యోధనులతో కూడిన మహాసైన్యాన్ని చూసి ఉత్తర కుమారుడు భయపడి రథం దిగి పారిపోయాడు. అర్జునుడు అతన్ని పట్టుకొచ్చి జమ్మి చెట్టు వద్దకు తీసుకెళ్ళాడు.',
        'జమ్మి చెట్టుపై దాచిన గాండీవాన్ని తీసి నారి సంధించగానే ఆకాశం దద్దరిల్లింది. ఉత్తరునికి ధైర్యం చెప్పి రథాన్ని నడపమన్నాడు. ఒంటిచేత్తో కౌరవ సైన్యంపై విరుచుకుపడి, సమ్మోహనాస్త్రంతో అందరినీ నిద్రపుచ్చి గోవులను రక్షించాడు. అజ్ఞాతవాసం విజయవంతంగా పూర్తయింది!'
      ],
      paragraphs_hi: [
        'कीचक के वध से दुर्योधन को संदेह हुआ कि पांडव विराट नगर में ही हैं। अज्ञातवास भंग करने हेतु कौरवों ने विराट की साठ हजार गायों का हरण कर लिया।',
        'राजकुमार उत्तर कुमार ने डींगें हाँकीं, और बृहन्नला (अर्जुन) उनके सारथी बने। किंतु भीष्म, द्रोण, कर्ण की विशाल सेना देखकर उत्तर कुमार थर-थर कांपते हुए रथ छोड़कर भागने लगा। अर्जुन ने उसे पकड़ा और शमी वृक्ष के पास ले गए।',
        'शमी वृक्ष से गांडीव उतारते ही उसकी टंकार से दसों दिशाएं गूंज उठीं। अर्जुन ने उत्तर से कहा: "डरो मत, मैं ही पार्थ हूँ!" अकेले अर्जुन ने कर्ण को पराजित किया, भीष्म के बाण रोके और अंत में सम्मोहनास्त्र चलाकर संपूर्ण कौरव सेना को सुला दिया। उत्तर कुमार ने कौरव राजाओं के रंग-बिरंगे वस्त्र काट लिए और अज्ञातवास बिना किसी विघ्न के सफलतापूर्वक पूर्ण हुआ!'
      ],
      dialogueQuote: '"Behold the Gandiva, prince! Stand firm on the chariot; today thou shalt witness the archery of Arjuna!"',
      dialogueQuote_te: '"చూడు ఉత్తర కుమారా! ఇది గాండీవం! రథంపై స్థిరంగా ఉండు; అర్జునుని బాణాల ప్రతాపం ఏమిటో ఈరోజు చూడు!"',
      dialogueQuote_hi: '"देख उत्तर! यह गांडीव है! रथ पर स्थिर रहो; आज तुम पार्थ के गांडीव का अलौकिक तांडव देखोगे!"',
      speaker: 'Arjuna revealing himself to Prince Uttara',
      speaker_te: 'ఉత్తర కుమారునికి నిజం చెబుతున్న అర్జునుడు',
      speaker_hi: 'उत्तर कुमार को गांडीव दिखाते हुए अर्जुन',
      imageUrl: '/assets/wallpapers/arjuna.jpg',
      imageCaption: 'Arjuna on the chariot with Gandiva bow ablaze, sweeping across the battlefield of Virata.',
      imageCaption_te: 'గాండీవ ధనుస్సుతో కౌరవ సైన్యాన్ని గడగడలాడిస్తున్న అర్జునుడు.',
      imageCaption_hi: 'विराट नगर के रणक्षेत्र में गांडीव से कौरव सेना को परास्त करते महाधनुर्धर अर्जुन।'
    }
  ],

  partSummary: {
    majorEvents: [
      'The Pandavas receive the inexhaustible copper Akshayapatra from Lord Surya to feed thousands of forest guests',
      'Arjuna’s intense Himalayan penance, duel with Lord Shiva as a Kirata, and acquisition of the Pashupatastra',
      'Arjuna visits the heavens (Indraloka) and receives celestial astras and the curse/boon of Urvashi',
      'The enchanted lake incident: four brothers fall lifeless; Yudhishthira answers the Yaksha\'s profound riddles',
      'The Yaksha reveals himself as Lord Dharma and revives all four brothers, granting boons for their incognito year',
      'Hiding weapons wrapped as a corpse in the Shami tree at the Matsya cremation grounds',
      'Adopting secret identities at King Virata’s court (Kanka, Ballava, Brihannala, Granthika, Tantipala, Sairandhri)',
      'Commander Keechaka assaults Draupadi; Bhima destroys Keechaka in the dark midnight dancing pavilion',
      'The Cattle Raid of Matsya: Arjuna on a single chariot uses the Sammohanastra to put the entire Kuru host to sleep',
      'The thirteenth year concludes successfully without the Pandavas being prematurely identified'
    ],
    majorEvents_te: [
      'వేలాది మంది ఆకలి తీర్చడానికి సూర్యభగవానుని నుండి అక్షయపాత్ర లభించడం',
      'హిమాలయాల్లో అర్జునుని తపస్సు, కిరాతుడిగా వచ్చిన పరమశివునితో యుద్ధం & పాశుపతాస్త్ర ప్రాప్తి',
      'ఇంద్రలోకంలో దివ్యాస్త్రాల సాధన & ఊర్వశి శాపం/వరం',
      'మాయా సరస్సు వద్ద యక్ష ప్రశ్నలు: నలుగురు సోదరులు మరణించడం & ధర్మరాజు వివేకంతో పునర్జీవితం పొందడం',
      'యమధర్మరాజు నిజరూప దర్శనం & అజ్ఞాతవాస విజయ వరం',
      'శ్మశానంలోని జమ్మి చెట్టుపై ఆయుధాలను దాచిపెట్టడం',
      'విరాట రాజ్యంలో ఆరుగురి రహస్య రూపాలు (కంకుడు, వల్లభుడు, బృహన్నల, గ్రంథికుడు, తంతిపాలుడు, సైరంధ్రి)',
      'ద్రౌపదిని వేధించిన కీచకుడిని నాట్యశాలలో ముద్దగా పిసికి చంపిన భీముడు',
      'ఉత్తర గోగ్రహణం: ఒంటిచేత్తో కౌరవ సేనను సమ్మోహనాస్త్రంతో నిద్రపుచ్చిన అర్జునుడు',
      'ఎవరికీ దొరక్కుండా విజయవంతంగా ముగిసిన 13 ఏళ్ళ వనవాస, అజ్ఞాతవాస కాలం'
    ],
    majorEvents_hi: [
      'सूर्यदेव से अक्षयपात्र की प्राप्ति जिससे हजारों ऋषियों का सत्कार हुआ',
      'इंद्रकीलाद्रि पर अर्जुन का तप, किरात रूपी शिव से युद्ध और पाशुपतास्त्र की प्राप्ति',
      'इंद्रलोक में दिव्यास्त्रों का संचय और अप्सरा उर्वशी का शाप-वरदान',
      'मायावी सरोवर पर यक्ष के प्रश्न और युधिष्ठिर द्वारा चारों भाइयों को पुनर्जीवन',
      'शमी वृक्ष पर गांडीव सहित सभी अस्त्रों को गुप्त रखना',
      'विराट नगर में छह छद्मवेष (कंक, बल्लभ, बृहन्नला, ग्रंथिक, तंतिपाल, सैरंध्री)',
      'कीचक द्वारा द्रौपदी पर अत्याचार और रात में भीम द्वारा कीचक का भयानक वध',
      'उत्तर गोग्रहण युद्ध में अकेले अर्जुन द्वारा सम्मोहनास्त्र से कौरव सेना की पराजय',
      'तेरहवें वर्ष के अज्ञातवास का बिना भेद खुले सफलतापूर्वक पूर्ण होना'
    ],
    importantCharacters: [
      'Bhima (Ballava) - Fearless protector who executed Keechaka and upheld Draupadi\'s honor',
      'Arjuna (Brihannala) - Peerless master of arms who transformed curse into glory and routed the Kurus',
      'Yudhishthira (Kanka) - Embodiment of wisdom who passed the Yaksha test and endured royal slights',
      'Draupadi (Sairandhri) - Stoic queen whose resilience triumphed over mortal danger',
      'Yaksha / Lord Dharma - Divine arbiter of righteousness who tested his son\'s soul',
      'Keechaka - Mighty commander whose uncontrolled lust provoked cosmic destruction'
    ],
    importantCharacters_te: [
      'భీముడు (వల్లభుడు) - కీచక సంహర్త, ద్రౌపదీ సంరక్షకుడు',
      'అర్జునుడు (బృహన్నల) - గోగ్రహణ విజేత, గాండీవధారి',
      'ధర్మరాజు (కంకుడు) - యక్షప్రశ్నల విజేత, సహనశీలి',
      'ద్రౌపది (సైరంధ్రి) - ఆత్మగౌరవంతో బతికిన మహాసాధ్వి',
      'యమధర్మరాజు - ధర్మాన్ని పరీక్షించిన దైవం',
      'కీచకుడు - కామాంధతతో నాశనమైన సేనాపతి'
    ],
    importantCharacters_hi: [
      'भीम (बल्लभ) - कीचक का संहार करने वाले महाबली',
      'अर्जुन (बृहन्नला) - अकेले कौरवों को परास्त करने वाले गांडीवधारी',
      'युधिष्ठिर (कंक) - यक्ष के प्रश्नों का उत्तरदाता धर्मराज',
      'द्रौपदी (सैरंध्री) - स्वाभिमानी महारानी',
      'यक्ष / धर्मदेव - निष्पक्ष न्याय के अधिष्ठाता',
      'कीचक - कामवासना में भस्म हुआ अहंकारी सेनापति'
    ],
    importantRelationships: [
      'Yudhishthira & Lord Dharma: Spiritual bond between mortal righteousness and cosmic justice',
      'Bhima & Draupadi: The quiet, unconditional pledge of physical protection in the darkest hours',
      'Arjuna & Brihannala Disguise: Converting a painful curse into the masterstroke of disguise'
    ],
    importantRelationships_te: [
      'ధర్మరాజు & యమధర్మరాజు: మానవ ధర్మానికి మరియు దైవ న్యాయానికి మధ్య పవిత్ర అనుబంధం',
      'భీముడు & ద్రౌపది: కష్టకాలంలో ఆదుకున్న అజేయ రక్షణ బంధం',
      'అర్జునుడు & బృహన్నల రూపం: శాపాన్ని కూడా విజయానికి సోపానంగా మార్చుకున్న ప్రతిభ'
    ],
    importantRelationships_hi: [
      'युधिष्ठिर और धर्मदेव - सत्य और धर्म का सर्वोच्च संगम',
      'भीम और द्रौपदी - संकट की घड़ी में रक्षा का अटूट विश्वास',
      'अर्जुन और बृहन्नला - शाप को अनुकूल परिस्थिति में बदलने का कौशल'
    ],
    majorDecisions: [
      'Arjuna undertaking the dangerous Himalayan penance alone to acquire celestial weapons',
      'Yudhishthira choosing stepbrother Nakula to be revived to honor both his mothers equally',
      'The Pandavas concealing their identity in Matsya as domestic servants without ego',
      'Bhima executing Keechaka in absolute secrecy without sounding an alarm'
    ],
    majorDecisions_te: [
      'రాబోయే యుద్ధం కోసం ఒంటరిగా హిమాలయాల్లో తపస్సు చేసిన అర్జునుని ధైర్యం',
      'ఇద్దరు తల్లులకూ సమాన న్యాయం చేయాలని నకులుడిని బతికించమని కోరిన ధర్మరాజు నిష్పక్షపాతం',
      'గర్వాన్ని వదిలి సాధారణ సేవకులుగా జీవించిన పాండవుల వినయం',
      'గుర్తింపు బయటపడకుండా కీచకుడిని నాట్యశాలలో మట్టుబెట్టిన భీముని సమయస్ఫూర్తి'
    ],
    majorDecisions_hi: [
      'अकेले जाकर हिमालय में पाशुपतास्त्र प्राप्त करने का अर्जुन का संकल्प',
      'दोनों माताओं के प्रति समान आदर हेतु नकुल को जीवित करने की युधिष्ठिर की प्रार्थना',
      'अहंकार त्यागकर विराट के यहाँ साधारण सेवकों के रूप में रहना',
      'बिना भेद खोले चुपचाप कीचक का अंत करने की भीम की युक्ति'
    ],
    consequences: [
      'The Pandavas emerge from thirteen years of exile stronger, wiser, and armed with divine weapons',
      'Duryodhana’s attempt to expose them at Matsya fails completely',
      'The stage is set for legitimate claims of their kingdom or total war'
    ],
    consequences_te: [
      'పదమూడేళ్ళ కఠిన పరీక్షల తర్వాత దివ్యాస్త్రాలతో మరింత బలవంతులుగా మారిన పాండవులు',
      'అజ్ఞాతవాసాన్ని భగ్నం చేయాలనుకున్న దుర్యోధనుని ఎత్తుగడలు బూడిదలో పోసిన పన్నీరు కావడం',
      'హస్తినాపురాన్ని న్యాయంగా అడిగేందుకు, లేదంటే మహాభారత యుద్ధానికి మార్గం సుగమమవడం'
    ],
    consequences_hi: [
      '13 वर्षों की तपस्या और कष्टों से तपकर पांडवों का अजेय महाशक्ति बनना',
      'कौरवों का षड्यंत्र विफल होकर अज्ञातवास का धर्मपूर्वक पूर्ण होना',
      'कुरुक्षेत्र के महासंग्राम की अंतिम रणभेरी बजने का मार्ग प्रशस्त होना'
    ]
  },

  slides: [
    {
      slideNumber: 1,
      title: 'Tapasya and Celestial Astras',
      title_te: 'తపస్సు & దివ్యాస్త్రాలు',
      title_hi: 'तपस्या और दिव्यास्त्र',
      content: 'In exile, Arjuna performs rigorous penance, duels Lord Shiva as a Kirata, and obtains the ultimate Pashupatastra.',
      content_te: 'అరణ్యంలో అర్జునుడు తీవ్ర తపస్సు చేసి, శివునితో కిరాతుడిగా పోరాడి పాశుపతాస్త్రాన్ని సాధించాడు.',
      content_hi: 'अर्जुन ने वनवास में कठिन तप कर किरात रूपी शिव से युद्ध किया और अमोघ पाशुपतास्त्र प्राप्त किया।',
      moralLesson: 'Adversity is an opportunity to cultivate inner strength and earn the grace of the Supreme.',
      moralLesson_te: 'కష్టాలు అనేవి అంతశ్శక్తిని పెంచుకోవడానికి మరియు దైవకృపను పొందడానికి గొప్ప అవకాశాలు.',
      moralLesson_hi: 'विपत्ति ही मनुष्य के सामर्थ्य को निखारती है और ईश्वर के अनुग्रह का द्वार खोलती है।'
    },
    {
      slideNumber: 2,
      title: 'The Inquest of Dharma',
      title_te: 'యక్ష ప్రశ్నల అంతరార్థం',
      title_hi: 'यक्ष के प्रश्नों का मर्म',
      content: 'Yudhishthira revives his fallen brothers through truthful wisdom and equal love for both his mothers.',
      content_te: 'యక్షుని ప్రశ్నలకు సత్యంతో కూడిన సమాధానాలు చెప్పి, ఇద్దరు తల్లుల పట్ల సమాన ప్రేమతో తమ్ముళ్ళను బతికించాడు ధర్మరాజు.',
      content_hi: 'युधिष्ठिर ने अपने सत्य, विवेक और दोनों माताओं के प्रति समदृष्टि से मृत भाइयों को जीवनदान दिलाया।',
      moralLesson: 'Impartiality and adherence to Dharma transcend all selfish instinct, even in the face of death.',
      moralLesson_te: 'నిష్పక్షపాత బుద్ధి మరియు ధర్మాచరణ మృత్యువును సైతం జయించగలవు.',
      moralLesson_hi: 'सच्चा धर्म वही है जो स्वार्थ से ऊपर उठकर सर्वकल्याण और निष्पक्षता की रक्षा करे।'
    },
    {
      slideNumber: 3,
      title: 'The Mask of Servitude',
      title_te: 'అజ్ఞాతవాస విజయం',
      title_hi: 'अज्ञातवास की विजय',
      content: 'Living humbly as servants in Matsya, Bhima slays Keechaka and Arjuna routs the Kaurava host, completing their exile safely.',
      content_te: 'విరాట నగరంలో వినయంగా సేవకులుగా ఉంటూ కీచకుడిని సంహరించి, గోవులను రక్షించి అజ్ఞాతవాసాన్ని పూర్తి చేశారు.',
      content_hi: 'विराट नगर में छद्मवेष में रहकर कीचक का अंत किया और अकेले अर्जुन ने कौरवों को खदेड़कर अज्ञातवास पूरा किया।',
      moralLesson: 'Patience and humility are the armor of the righteous while awaiting the appointed hour of justice.',
      moralLesson_te: 'సమయం వచ్చే వరకు ఓర్పు మరియు వినయంతో ఉండటమే ధర్మాత్ములకు రక్ష.',
      moralLesson_hi: 'धैर्य और नम्रता ही धर्मपरायण वीरों की सबसे बड़ी ढाल हैं जो उचित समय पर विजय दिलाते हैं।'
    }
  ]
};
