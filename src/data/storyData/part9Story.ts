import { StoryPart } from '../../types/game';

export const PART_9_STORY: StoryPart = {
  partNumber: 9,
  title: 'The Climax: Fall of the Titans',
  title_te: 'మహా సంగ్రామం: అభిమన్యు వీరమరణం & కర్ణ పతనం',
  title_hi: 'महासंग्राम: चक्रव्यूह, अभिमन्यु और कर्ण का पतन',
  sanskritTitle: 'चक्रव्यूहः कर्णवधश्च',
  summary: 'The lethal labyrinth of Chakravyuha, sixteen-year-old Abhimanyu’s immortal martyrdom, Arjuna’s fiery vow against Jayadratha, Ghatotkacha’s night sacrifice, and the earth-shattering duel between Arjuna and Karna.',
  summary_te: 'చక్రవ్యూహం, పదహారేళ్ళ అభిమన్యుని అద్భుత పోరాటం & వీరమరణం, జయద్రథునిపై అర్జునుని ప్రతిజ్ఞ, ఘటోత్కచుని త్యాగం, ద్రోణుని పతనం, మరియు కర్ణార్జునుల చారిత్రక రణ ద్వంద్వం.',
  summary_hi: 'अभेद्य चक्रव्यूह, सोलह वर्षीय अभिमन्यु का अमर बलिदान, जयद्रथ वध की भीषण प्रतिज्ञा, घटोत्कच का रात्रि-बलिदान और कर्ण-अर्जुन का महाविनाशक द्वंद्व।',
  characterRewardId: 'abhimanyu',

  charactersInPart: [
    {
      id: 'abhimanyu_hero',
      name: 'Abhimanyu (Saubhadra)',
      name_te: 'అభిమన్యుడు (సౌభద్రుడు)',
      name_hi: 'अभिमन्यु (सौभद्र)',
      title: 'Lion of the Chakravyuha & Eternal Martyr',
      title_te: 'చక్రవ్యూహ వీరుడు & అమర బాలుడు',
      title_hi: 'चक्रव्यूह का अजेय योद्धा एवं अमर बलिदानी',
      relationship: 'Son of Arjuna and Subhadra (nephew of Krishna); husband of Uttara',
      relationship_te: 'అర్జునుడు మరియు సుభద్రల కుమారుడు; కృష్ణుని మేనల్లుడు',
      relationship_hi: 'अर्जुन और सुभद्रा के वीर पुत्र; श्रीकृष्ण के भांजे',
      intro: 'Learned how to enter the Chakravyuha while still in his mother’s womb; fought six veteran Maharathas with a broken chariot wheel.',
      intro_te: 'తల్లి గర్భంలోనే చక్రవ్యూహ భేదనం నేర్చుకుని, ఒంటిచేత్తో కౌరవ సైన్యాన్ని గడగడలాడించి విరిగిన రథచక్రంతో పోరాడిన అమర యోధుడు.',
      intro_hi: 'गर्भ में ही चक्रव्यूह भेदन सीखने वाले, जिन्होंने टूटे रथ के पहिए से अकेले छह महारथियों का सामना किया।',
      avatarUrl: '/assets/wallpapers/abhimanyu.jpg',
      role: 'hero'
    },
    {
      id: 'karna_commander',
      name: 'Karna (Vaikartana)',
      name_te: 'కర్ణుడు (వైకర్తనుడు)',
      name_hi: 'कर्ण (वैकर्तन)',
      title: 'Supreme Commander of Kauravas & Tragic Archer',
      title_te: 'కౌరవ సేనాపతి & దానవీరుడు',
      title_hi: 'कौरव सेनापति एवं अद्वितीय दानवीर',
      relationship: 'Eldest brother of Pandavas; commanded the army on Days 16 and 17',
      relationship_te: 'పాండవుల పెద్దన్న; పదహారు, పదిహేడో రోజుల కౌరవ సేనాపతి',
      relationship_hi: 'पांडवों के ज्येष्ठ भ्राता; 16वें-17वें दिन के कौरव सेनापति',
      intro: 'Possessed supernatural skill, but ancient curses stripped his knowledge and sank his chariot wheel at the fateful moment.',
      intro_te: 'పరశురాముని శాపం మరియు బ్రాహ్మణ శాపం వల్ల కీలక సమయంలో విద్య మర్చిపోయి, రథచక్రం భూమిలో కూరుకుపోయి వీరమరణం పొందిన విషాద యోధుడు.',
      intro_hi: 'परशुराम के शापवश अंत समय में अस्त्र विद्या भूल गए और पहिया धंसने पर अर्जुन के बाण का शिकार बने।',
      avatarUrl: '/assets/wallpapers/karna.jpg',
      role: 'adversary'
    },
    {
      id: 'drona_commander',
      name: 'Guru Dronacharya',
      name_te: 'గురు ద్రోణాచార్యుడు',
      name_hi: 'गुरु द्रोणाचार्य',
      title: 'Supreme Commander (Days 11–15)',
      title_te: 'కౌరవ సేనాపతి (11-15 రోజులు)',
      title_hi: 'कौरव प्रधान सेनापति (11वें से 15वें दिन)',
      relationship: 'Preceptor to both sides; architect of the Chakravyuha',
      relationship_te: 'ఇరువైపులా ఆయుధ గురువు; చక్రవ్యూహ నిర్మాత',
      relationship_hi: 'दोनों पक्षों के शस्त्र-गुरु; चक्रव्यूह के रचयिता',
      intro: 'Fought with unstoppable celestial fury until Yudhishthira uttered "Ashwatthama is dead," causing him to sit in yoga and drop his bow.',
      intro_te: '"అశ్వత్థామ హతః కుంజరః" అన్న మాట విని, పుత్రశోకంతో ధనుస్సును నేలబెట్టి యోగ సమాధిలో కూర్చుని వీరమరణం పొందిన రాజగురువు.',
      intro_hi: '"अश्वत्थामा मारा गया" सुनकर शस्त्र त्यागकर समाधि में लीन हुए, जहाँ धृष्टद्युम्न ने उनका मस्तक काटा।',
      avatarUrl: '/assets/wallpapers/dronacharya.jpg',
      role: 'mentor'
    },
    {
      id: 'ghatotkacha_hero',
      name: 'Ghatotkacha',
      name_te: 'ఘటోత్కచుడు',
      name_hi: 'घटोत्कच',
      title: 'Giant Demon Prince & Savior of Arjuna',
      title_te: 'రాక్షస వీరుడు & అర్జున ప్రాణ రక్షకుడు',
      title_hi: 'मायावी महाबली एवं अर्जुन का जीवनदाता',
      relationship: 'Son of Bhima and Hidimbi; nephew of the Pandavas',
      relationship_te: 'భీముడు మరియు హిడింబిల కుమారుడు',
      relationship_hi: 'भीम और हिडिम्बा के महाबली पुत्र',
      intro: 'Rampaged through the night battle with sorcery, forcing Karna to exhaust his single-use Vasavi Shakti intended for Arjuna.',
      intro_te: 'రాత్రి యుద్ధంలో మాయా యుద్ధంతో కౌరవులను వణికించి, అర్జునుని కోసం దాచిన వాసవి శక్తిని తనపై ప్రయోగించేలా చేసి ప్రాణత్యాగం చేసిన వీరుడు.',
      intro_hi: 'रात्रि-युद्ध में अपनी माया से कोहराम मचाकर कर्ण को विवश किया कि वह अर्जुन हेतु रखी वासव-शक्ति उन पर चलाए।',
      avatarUrl: '/assets/wallpapers/bhima.jpg',
      role: 'hero'
    },
    {
      id: 'jayadratha_king',
      name: 'King Jayadratha',
      name_te: 'సైంధవుడు (జయద్రథుడు)',
      name_hi: 'जयद्रथ (सिंधु नरेश)',
      title: 'King of Sindhu & Instrument of Abhimanyu’s Trap',
      title_te: 'సింధు దేశాధిపతి & వ్యూహ ద్వార పాలకుడు',
      title_hi: 'सिंधु नरेश एवं चक्रव्यूह का अवरोधक',
      relationship: 'Brother-in-law of Duryodhana (husband of Dushala)',
      relationship_te: 'దుర్యోధనుని బావ (దుశ్శల భర్త)',
      relationship_hi: 'दुर्योधन का बहनोई (दुःशला का पति)',
      intro: 'Blessed by Shiva to hold back all four Pandavas for one single day, sealing Abhimanyu’s doom inside the wheel.',
      intro_te: 'శివుని వరం వల్ల ఒక్కరోజు పాటు నలుగురు పాండవులను చక్రవ్యూహ ద్వారం వద్ద నిలువరించి, లోపల ఉన్న అభిమన్యుడిని ఒంటరిని చేసినవాడు.',
      intro_hi: 'शिवजी के वरदान से एक दिन चारों पांडवों को रोककर अभिमन्यु को चक्रव्यूह में अकेला घेरने वाला।',
      avatarUrl: '/assets/wallpapers/karna.jpg',
      role: 'adversary'
    }
  ],

  familyTree: {
    title: 'The Fallen Titans & The Lineage of Tomorrow',
    title_te: 'నేలకొరిగిన మహాయోధులు & రేపటి వంశాంకురం',
    title_hi: 'रणभूमि के अमर बलिदानी और भावी वंश',
    description: 'The monumental sacrifices of the next generation—Abhimanyu and Ghatotkacha—securing the survival of the Pandavas.',
    description_te: 'తమ ప్రాణాలను ధారపోసి పాండవుల విజయానికి బాటలు వేసిన అభిమన్యు, ఘటోత్కచుల వంశ పటం.',
    description_hi: 'अभिमन्यु और घटोत्कच के महान बलिदानों ने पांडवों के प्राणों की रक्षा कर भावी कुल को बचाया।',
    nodes: [
      { id: 'arjuna_t9', name: 'Arjuna', name_te: 'అర్జునుడు', name_hi: 'अर्जुन', clan: 'Pandava', generation: 3, role: 'Father of Abhimanyu; Slayer of Jayadratha & Karna' },
      { id: 'subhadra_t9', name: 'Subhadra', name_te: 'సుభద్ర', name_hi: 'सुभद्रा', clan: 'Yadava', generation: 3, role: 'Sister of Krishna; Mother of Abhimanyu' },
      { id: 'abhimanyu_t9', name: 'Abhimanyu', name_te: 'అభిమన్యుడు', name_hi: 'अभिमन्यु', clan: 'Pandava', generation: 4, isKeyCharacter: true, role: 'Martyr of Chakravyuha' },
      { id: 'uttara_w_t9', name: 'Princess Uttara', name_te: 'ఉత్తర', name_hi: 'उत्तरा', clan: 'Matsya', generation: 4, role: 'Widow carrying Parikshit' },
      { id: 'bhima_t9', name: 'Bhima', name_te: 'భీముడు', name_hi: 'भीम', clan: 'Pandava', generation: 3, role: 'Father of Ghatotkacha' },
      { id: 'hidimbi_t9', name: 'Hidimbi', name_te: 'హిడింబి', name_hi: 'हिडिम्बा', clan: 'Pandava', generation: 3, role: 'Demon Queen' },
      { id: 'ghatotkacha_t9', name: 'Ghatotkacha', name_te: 'ఘటోత్కచుడు', name_hi: 'घटोत्कच', clan: 'Pandava', generation: 4, isKeyCharacter: true, role: 'Absorbed Vasavi Shakti' },
      { id: 'karna_t9', name: 'Karna', name_te: 'కర్ణుడు', name_hi: 'कर्ण', clan: 'Kaurava', generation: 3, isKeyCharacter: true, role: 'Commander Day 16-17' },
      { id: 'drona_t9', name: 'Guru Drona', name_te: 'ద్రోణాచార్యుడు', name_hi: 'द्रोणाचार्य', clan: 'Kuru', generation: 2, isKeyCharacter: true, role: 'Commander Day 11-15' }
    ],
    links: [
      { from: 'arjuna_t9', to: 'abhimanyu_t9', relationship: 'parent_of', label: 'Father of' },
      { from: 'subhadra_t9', to: 'abhimanyu_t9', relationship: 'parent_of', label: 'Mother of' },
      { from: 'abhimanyu_t9', to: 'uttara_w_t9', relationship: 'married_to', label: 'Parents of Parikshit' },
      { from: 'bhima_t9', to: 'ghatotkacha_t9', relationship: 'parent_of', label: 'Father of' },
      { from: 'karna_t9', to: 'ghatotkacha_t9', relationship: 'rivalry', label: 'Killed with Vasavi Shakti' },
      { from: 'arjuna_t9', to: 'karna_t9', relationship: 'rivalry', label: 'Slew with Anjalikastra' }
    ]
  },

  illustratedPages: [
    {
      pageNumber: 1,
      title: 'Guru Drona’s Command & The Chakravyuha Plan',
      title_te: 'ద్రోణుని సేనాధిపత్యం & చక్రవ్యూహ రచన',
      title_hi: 'द्रोणाचार्य का सेनापतित्व और चक्रव्यूह की रचना',
      sceneTag: 'Kaurava War Pavilion at Night',
      sceneTag_te: 'కౌరవ సైనిక శిబిరం',
      sceneTag_hi: 'कौरवों की युद्ध-मंत्रणा',
      hookLine: 'To capture King Yudhishthira alive, the master of astras spun an impenetrable wheel of death.',
      hookLine_te: 'ధర్మరాజును సజీవంగా బంధించడానికి ద్రోణాచార్యుడు నిర్మించిన అభేద్యమైన మృత్యు చక్రం: చక్రవ్యూహం.',
      hookLine_hi: 'युधिष्ठिर को बंदी बनाकर युद्ध समाप्त करने हेतु गुरु द्रोण ने अभेद्य चक्रव्यूह का निर्माण किया।',
      paragraphs: [
        'Following Bhishma’s fall, Guru Dronacharya assumed supreme command of the Kaurava army. Duryodhana begged him: "Master, do not merely kill soldiers; capture Yudhishthira alive! Once we have him captive, we shall force him into another game of dice and banish the Pandavas forever!"',
        'Drona agreed, but placed one condition: "I can capture Yudhishthira only if Arjuna is lured far away from the battlefield, for while Arjuna is near, the devas themselves cannot break his defense."',
        'On the thirteenth morning, the Samsaptaka warriors (sworn suicide squads led by King Susharma of Trigarta) challenged Arjuna to the southern horizon, dragging him leagues away. With Arjuna gone, Guru Drona deployed the Kaurava host into the dreaded "Chakravyuha"—a circular spinning maze of interlocking infantry, chariots, and elephants that rotated like a cosmic grindstone, grinding everything in its path.'
      ],
      paragraphs_te: [
        'భీష్ముని పతనం తర్వాత గురు ద్రోణాచార్యుడు కౌరవ సైన్యాధ్యక్షుడయ్యాడు. దుర్యోధనుడు ఆయనను వేడుకున్నాడు: "గురుదేవా! సైనికులను చంపడం కాదు, ధర్మరాజును సజీవంగా బంధించండి! అతన్ని మళ్ళీ జూదంలో ఓడించి అడవుల పాలు చేద్దాం!"',
        'ద్రోణుడు అంగీకరించాడు కానీ: "అర్జునుడు దగ్గరున్నంత వరకు ధర్మరాజును ఎవరూ ముట్టుకోలేరు. అతన్ని రణరంగం నుండి దూరంగా తీసుకెళ్ళండి" అన్నాడు.',
        'పదమూడవ రోజు సంశప్తక వీరులు అర్జునుడిని యుద్ధానికి పిలిచి మైళ్ళ దూరం తీసుకెళ్ళారు. ఆ సమయంలో ద్రోణాచార్యుడు ఎవరికీ లొంగని భయంకరమైన "చక్రవ్యూహం"ను రచించాడు. ఆ చక్రం తిరుగుతూ పాండవ సైన్యాన్ని పిండిపిండి చేయసాగింది.'
      ],
      paragraphs_hi: [
        'भीष्म के बाद द्रोणाचार्य कौरव सेना के प्रधान बने। दुर्योधन ने उनसे प्रार्थना की: "गुरुवर! युधिष्ठिर को जीवित बंदी बना लीजिए, हम उन्हें पुनः द्यूत में हराकर वनवास भेज देंगे!"',
        'द्रोण ने कहा: "यह तभी संभव है जब अर्जुन को रणक्षेत्र से दूर ले जाया जाए, क्योंकि अर्जुन के रहते युधिष्ठिर को छूना भी असंभव है।"',
        'तेरहवें दिन संशप्तक योद्धाओं ने अर्जुन को ललकार कर युद्धभूमि से मीलों दूर खींच लिया। अर्जुन की अनुपस्थिति में द्रोणाचार्य ने अत्यंत जटिल \'चक्रव्यूह\' की रचना कर दी, जो घूमते हुए पहिए की भांति पांडव सेना को कुचलने लगा।'
      ],
      dialogueQuote: '"Lure Arjuna away; without his Gandiva, no warrior on earth can unlock my circular labyrinth!"',
      dialogueQuote_te: '"అర్జునుడిని దూరంగా తీసుకెళ్ళండి; అతని గాండీవం లేకపోతే భూమిపై ఎవరూ ఈ చక్రవ్యూహాన్ని ఛేదించలేరు!"',
      dialogueQuote_hi: '"अर्जुन को दूर ले जाओ; उसके बिना संसार का कोई भी योद्धा मेरे चक्रव्यूह को नहीं भेद सकता!"',
      speaker: 'Guru Drona planning the Chakravyuha',
      speaker_te: 'చక్రవ్యూహం రచిస్తూ ద్రోణుడు',
      speaker_hi: 'द्रोणाचार्य की चक्रव्यूह योजना',
      imageUrl: '/assets/wallpapers/dronacharya.jpg',
      imageCaption: 'Guru Drona directing the concentric circular formations of the deadly Chakravyuha.',
      imageCaption_te: 'చక్రవ్యూహ సైనిక నిర్మాణాన్ని పర్యవేక్షిస్తున్న గురు ద్రోణాచార్యుడు.',
      imageCaption_hi: 'समरभूमि में भयानक चक्रव्यूह की व्यूहरचना करते गुरु द्रोणाचार्य।'
    },
    {
      pageNumber: 2,
      title: 'The Young Lion: Abhimanyu Breaches the Labyrinth',
      title_te: 'యువ సింహం: చక్రవ్యూహంలోకి అభిమన్యుని దూకుడు',
      title_hi: 'युवा सिंह अभिमन्यु का चक्रव्यूह में प्रवेश',
      sceneTag: 'Outer Ring of the Chakravyuha',
      sceneTag_te: 'చక్రవ్యూహ ప్రవేశ ద్వారం',
      sceneTag_hi: 'चक्रव्यूह का मुख्य द्वार',
      hookLine: 'Sixteen years of age, he charged like an elephant into a lotus pool, knowing how to enter but not how to leave.',
      hookLine_te: 'లోపలికి వెళ్ళడం తెలుసు కానీ బయటకు రావడం తెలియదు; అయినా ధర్మరాజు ఆజ్ఞతో సింహంలా వ్యూహంలోకి దూసుకెళ్ళిన బాలుడు.',
      hookLine_hi: 'अभिमन्यु प्रवेश करना जानते थे किंतु निकलना नहीं; फिर भी धर्म की रक्षा हेतु मृत्यु के मुख में कूद पड़े।',
      paragraphs: [
        'As the Chakravyuha crushed entire divisions, Emperor Yudhishthira held his head in agony. Only four souls in creation knew how to break the Chakravyuha: Krishna, Arjuna, Pradyumna, and sixteen-year-old Abhimanyu.',
        'Yudhishthira called young Abhimanyu: "Beloved child, save us from this shame! Pierce this formation, and we four—Bhima, myself, Dhrishtadyumna, and Satyaki—shall follow directly behind you like an iron wall to protect your back!"',
        'Abhimanyu smiled with radiant courage: "My father taught me how to enter this formation while I was in my mother Subhadra’s womb. But before he could teach the method of exit, my mother fell asleep! Yet, I shall break into the center of the trap today and cover my family in eternal glory!" Spurring his charioteer Sumitra, the boy’s golden chariot smashed straight through Drona’s outer vanguard like a thunderbolt splitting an oak tree.'
      ],
      paragraphs_te: [
        'చక్రవ్యూహం పాండవ సైన్యాన్ని నాశనం చేస్తుండటం చూసి ధర్మరాజు విలపించాడు. ఆ వ్యూహాన్ని ఛేదించడం శ్రీకృష్ణుడు, అర్జునుడు, ప్రద్యుమ్నుడు మరియు పదహారేళ్ళ అభిమన్యునికి మాత్రమే తెలుసు.',
        'ధర్మరాజు అభిమన్యుడిని పిలిచాడు: "నాయనా! మమ్మల్ని ఈ విపత్తు నుండి కాపాడు. నీవు మార్గం తెరిస్తే, మేము నలుగురం నీ వెంటే ఉంటూ నిన్ను రక్షిస్తాము!"',
        'అభిమన్యుడు చిరునవ్వుతో: "పెదనాన్నా! అమ్మ కడుపులో ఉండగా నాన్నగారు చెబుతుంటే వ్యూహం లోపలికి వెళ్ళడం విన్నాను, కానీ బయటకు రావడం చెప్పేలోపే అమ్మ నిద్రపోయింది. అయినా సరే, నేను లోపలికి వెళ్ళి కౌరవుల అహంకారాన్ని అణచివేస్తాను!" అంటూ రథాన్ని వాయువేగంతో వ్యూహం లోపలికి నడిపించాడు.'
      ],
      paragraphs_hi: [
        'चक्रव्यूह के संहार से घबराकर युधिष्ठिर व्याकुल हो उठे। इस व्यूह को तोड़ना केवल कृष्ण, अर्जुन, प्रद्युम्न और 16 वर्ष के बालक अभिमन्यु को ज्ञात था।',
        'युधिष्ठिर ने अभिमन्यु से कहा: "तात! कुल की रक्षा करो। तुम व्यूह का द्वार खोलो, हम चारों भाई तुम्हारी रक्षा करते हुए तुम्हारे पीछे-पीछे चलेंगे।"',
        'अभिमन्यु ने कहा: "तात! माता के गर्भ में मैंने प्रवेश करना सीखा था, किंतु निकलने की विधि से पूर्व माता सो गईं। फिर भी मैं आज कुरुवंश की रक्षा हेतु इस काल-चक्र में प्रवेश करूँगा!" सुमित्र को आदेश देकर अभिमन्यु का रथ बिजली की तरह व्यूह के मुख्य द्वार को चीरते हुए भीतर घुस गया।'
      ],
      dialogueQuote: '"I know how to pierce the wheel, Uncle; today I shall make the world remember the son of Arjuna!"',
      dialogueQuote_te: '"వ్యూహాన్ని ఛేదించడం నాకు తెలుసు పెదనాన్నా; ఈరోజు అర్జునుని కొడుకు అంటే ఏమిటో లోకానికి చూపిస్తాను!"',
      dialogueQuote_hi: '"मुझे चक्रव्यूह भेदना आता है तात; आज मैं सिद्ध कर दूँगा कि मैं गांडीवधारी पार्थ का ही पुत्र हूँ!"',
      speaker: 'Young Abhimanyu charging the Chakravyuha',
      speaker_te: 'వ్యూహంలోకి దూకుతూ అభిమన్యుడు',
      speaker_hi: 'चक्रव्यूह में प्रवेश करते अभिमन्यु के उद्गार',
      imageUrl: '/assets/wallpapers/abhimanyu.jpg',
      imageCaption: 'Young Prince Abhimanyu firing arrows from his chariot as he breaches the outer ring of the Chakravyuha.',
      imageCaption_te: 'చక్రవ్యూహాన్ని ఛేదిస్తూ బాణాలు వేస్తున్న యువ అభిమన్యుడు.',
      imageCaption_hi: 'चक्रव्यूह का द्वार तोड़कर भीतर प्रविष्ट होते तेजस्वी अभिमन्यु।'
    },
    {
      pageNumber: 3,
      title: 'Jayadratha’s Boon & The Severed Rear',
      title_te: 'సైంధవుని వరం & ద్వారం వద్ద ఒంటరైన అభిమన్యుడు',
      title_hi: 'जयद्रथ का वरदान और पीछे छूटे पांडव',
      sceneTag: 'Entrance Breach of the Chakravyuha',
      sceneTag_te: 'చక్రవ్యూహ ప్రవేశ మార్గం',
      sceneTag_hi: 'चक्रव्यूह का संकरा प्रवेश द्वार',
      hookLine: 'Holding back four titans with a divine boon, Jayadratha slammed shut the jaws of the trap.',
      hookLine_te: 'శివుని వరంతో నలుగురు పాండవులను నిలువరించిన సైంధవుడు; లోపల ఒంటరిగా చిక్కుకుపోయిన పసిబాలుడు.',
      hookLine_hi: 'महादेव के वरदान से जयद्रथ ने भीम और युधिष्ठिर को रोक दिया, और अभिमन्यु भीतर अकेले घिर गए।',
      paragraphs: [
        'The moment Abhimanyu breached the first ring, King Jayadratha of Sindhu rushed his division to seal the breach. Years earlier, Jayadratha had performed intense tapasya to Lord Shiva, seeking a boon to defeat all five Pandavas.',
        'Shiva had answered: "You can never defeat Arjuna, but for one single day, you shall possess the power to hold back the other four Pandavas simultaneously!"',
        'That fateful day was today. As Bhima, Yudhishthira, Satyaki, and Dhrishtadyumna charged through the breach, Jayadratha met them with invincible fury. No matter how ferociously Bhima swung his mace, Jayadratha\'s shafts repelled them. The circular formation rotated shut. Abhimanyu was trapped deep inside the belly of the serpent, completely alone against the entire elite of the Kaurava empire.'
      ],
      paragraphs_te: [
        'అభిమన్యుడు లోపలికి వెళ్ళిన మరుక్షణమే సింధు రాజు జయద్రథుడు ప్రవేశ ద్వారాన్ని మూసివేశాడు. పూర్వం శివుని వద్ద నుండి ఒక్కరోజు పాటు నలుగురు పాండవులను నిలువరించే వరాన్ని పొందివున్నాడు జయద్రథుడు.',
        'ఆ వరం ప్రభావంతో భీముడు, ధర్మరాజు, సాత్యకి ఎంత ప్రయత్నించినా జయద్రథుడిని దాటి లోపలికి వెళ్ళలేకపోయారు. భీముని గదాఘాతాలను కూడా సైంధవుడు తిప్పికొట్టాడు.',
        'చక్రవ్యూహం తిరిగి మూసుకుపోయింది. పదహారేళ్ళ అభిమన్యుడు శత్రువుల నడిబొడ్డున ఒంటరిగా చిక్కుకుపోయాడు. చుట్టూ ద్రోణుడు, కర్ణుడు, అశ్వత్థామ, శల్యుడు, దుర్యోధనుడు ఉన్నారు.'
      ],
      paragraphs_hi: [
        'अभिमन्यु के भीतर जाते ही सिंधु नरेश जयद्रथ ने आगे बढ़कर व्यूह का मुख बंद कर दिया। जयद्रथ को भगवान शिव का वरदान था कि वह एक दिन के लिए अर्जुन को छोड़कर बाकी चारों पांडवों को रोक सकता है।',
        'भीम, युधिष्ठिर, सात्यकि और धृष्टद्युम्न ने भीतर जाने का भरसक प्रयास किया, किंतु जयद्रथ ने अपने अमोघ वरदान के बल पर सभी को रोक दिया।',
        'चक्रव्यूह का मुख पुनः बंद हो गया। सोलह वर्ष का निडर बालक चक्रव्यूह के केंद्र में सर्वथा अकेला रह गया, और चारों ओर कौरवों के दिग्गज महारथी एकत्र हो गए।'
      ],
      dialogueQuote: '"Turn back, Bhima! Today Shiva’s boon renders me master of this gate; thy nephew dies alone!"',
      dialogueQuote_te: '"వెనక్కి పో భీమా! ఈరోజు శివుని వరం నన్ను అజేయుడిని చేసింది; నీ మేనల్లుడు లోపలే శవమవుతాడు!"',
      dialogueQuote_hi: '"लौट जाओ भीम! आज महादेव का वरदान मेरे साथ है; तुम्हारा भतीजा अब जीवित नहीं बचेगा!"',
      speaker: 'Jayadratha barring the Pandavas',
      speaker_te: 'పాండవులను అడ్డుకుంటూ జయద్రథుడు',
      speaker_hi: 'पांडवों को रोकते हुए जयद्रथ का अट्टहास',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'Jayadratha with raised sword blocking the entry breach as Bhima’s chariot rages in vain.',
      imageCaption_te: 'వ్యూహ ప్రవేశాన్ని అడ్డుకుంటున్న జయద్రథుడు; నిస్సహాయంగా చూస్తున్న భీముడు.',
      imageCaption_hi: 'चक्रव्यूह के द्वार पर पांडवों को रोकते सिंधु नरेश जयद्रथ।'
    },
    {
      pageNumber: 4,
      title: 'The Six Maharathas & The Broken Chariot Wheel',
      title_te: 'ఆరుగురు మహారథుల దాడి & విరిగిన రథచక్ర పోరాటం',
      title_hi: 'छह महारथियों का अधर्म और रथ का पहिया',
      sceneTag: 'Heart of the Chakravyuha',
      sceneTag_te: 'చక్రవ్యూహం నడిబొడ్డు',
      sceneTag_hi: 'चक्रव्यूह का केंद्र',
      hookLine: 'When weapons snapped and horses died, he lifted a heavy wooden wheel and spun it against six veterans.',
      hookLine_te: 'ధనుస్సు విరిగి, రథం కూలిపోయినా... విరిగిన రథచక్రాన్ని చేతబట్టి ఆరుగురు మహారథులతో పోరాడిన వీరుడు.',
      hookLine_hi: 'धनुष कटने पर टूटे रथ का पहिया उठाकर काल की भांति छह महारथियों से भिड़ गया वीर बालक।',
      paragraphs: [
        'Alone inside the center, Abhimanyu fought like Rudra Himself. He slaughtered Duryodhana’s young son Lakshmana right before his father’s eyes, shattered Shalya\'s chariot, and drove Karna into retreat three times.',
        'Realizing the boy could not be defeated lawfully, Duryodhana screamed for a coordinated assault contrary to all Kshatriya ethics. Six Maharathas—Drona, Kripa, Karna, Ashwatthama, Brihadbala, and Kritavarma—encircled the lone teenager simultaneously.',
        'Karna snuck up from behind and sliced Abhimanyu’s bowstring with a razor arrow; Drona killed his horses; Kripa slew his charioteer. Deprived of bow and chariot, Abhimanyu drew his celestial sword; Ashwatthama shattered the blade. Weaponless, the glorious youth hoisted a heavy, mud-caked wooden chariot wheel in both hands, spinning it like a whirlwind to smash back arrows and swords until Dushasana’s son struck his head from behind with a mace. The golden sun of the Pandavas set in blood and immortality.'
      ],
      paragraphs_te: [
        'చక్రవ్యూహ మధ్యంలో అభిమన్యుడు ప్రళయ రుద్రుడిలా పోరాడాడు. దుర్యోధనుని కుమారుడైన లక్ష్మణ కుమారుడిని క్షణాల్లో సంహరించాడు, శల్యుడిని గాయపరిచాడు, కర్ణుడిని మూడుసార్లు వెనక్కి తరిమాడు.',
        'ధర్మబద్ధంగా ఆ బాలుడిని ఎవరూ ఓడించలేరని గ్రహించిన కౌరవులు యుద్ధ నియమాలను కాలరాశారు. ద్రోణుడు, కృపుడు, కర్ణుడు, అశ్వత్థామ సహా ఆరుగురు మహారథులు ఒకేసారి ఆ బాలుడిని చుట్టుముట్టారు.',
        'కర్ణుడు వెనుక నుండి దొంగచాటుగా బాణం వేసి వింటి నారిని తెంచాడు; ద్రోణుడు గుర్రాలను, రథాన్ని విరిచేశాడు. ఆయుధాలు లేకపోయినా రథం నుండి కిందపడిన ఒక బరువైన చెక్క చక్రాన్ని రెండు చేతులతో ఎత్తి తిప్పుతూ పోరాడాడు. చివరకు దుశ్శాసనుని కొడుకు వెనుక నుండి గదతో తలపై కొట్టడంతో ఆ అమర వీరుడు వీరమరణం పొందాడు.'
      ],
      paragraphs_hi: [
        'अकेले घिर जाने पर भी अभिमन्यु ने ऐसा पराक्रम दिखाया कि कौरव कांप उठे। उसने दुर्योधन के पुत्र लक्ष्मण का वध कर दिया और कर्ण को तीन बार रण छोड़कर भागने पर विवश किया।',
        'जब धर्म से बालक को न जीत सके, तो छह महारथियों (द्रोण, कर्ण, कृप, अश्वत्थामा आदि) ने मिलकर एक साथ उस अकेले निहत्थे बालक को घेर लिया।',
        'कर्ण ने पीछे से वार कर धनुष की प्रत्यंचा काट दी; द्रोण ने रथ के घोड़े मार दिए। जब कोई अस्त्र न बचा, तो उस वीर बालक ने अपने टूटे रथ का भारी पहिया उठा लिया और उसे सुदर्शन की भांति घुमाते हुए तीरों को रोकने लगा। अंत में दुःशासन के पुत्र ने पीछे से सिर पर गदा का प्रहार कर दिया और वह अमर वीर सदा के लिए सो गया।'
      ],
      dialogueQuote: '"Cowards! Six crowned Maharathas attack a weaponless boy from behind—is this the chivalry of Hastinapur?"',
      dialogueQuote_te: '"పిరికిపందలారా! ఆయుధం లేని ఒక బాలుడిపై ఆరుగురు కలిసి వెనుక నుండి దాడి చేయడమేనా మీ క్షత్రియ ధర్మం?"',
      dialogueQuote_hi: '"कायरों! एक निहत्थे बालक पर छह महारथी मिलकर पीछे से वार करते हो—क्या यही हस्तिनापुर का पराक्रम है?"',
      speaker: 'Abhimanyu’s final words defying the six warriors',
      speaker_te: 'ఆరుగురు వీరులను ఛీత్కరిస్తున్న అభిమన్యుడు',
      speaker_hi: 'अभिमन्यु की अंतिम ललकार',
      imageUrl: '/assets/wallpapers/abhimanyu.jpg',
      imageCaption: 'Prince Abhimanyu wielding a broken wooden chariot wheel as a shield against encircling Maharathas.',
      imageCaption_te: 'విరిగిన రథచక్రాన్ని రక్షణ కవచంగా చేసుకుని పోరాడుతున్న అభిమన్యుడు.',
      imageCaption_hi: 'टूटे रथ का पहिया थामे छह महारथियों से अकेले लोहा लेते अमर बलिदानी अभिमन्यु।'
    },
    {
      pageNumber: 5,
      title: 'The Terrible Vow of Arjuna & The Eclipse of Jayadratha',
      title_te: 'అర్జునుని ప్రళయ ప్రతిజ్ఞ & జయద్రథ వధ',
      title_hi: 'अर्जुन की भीषण प्रतिज्ञा और जयद्रथ वध',
      sceneTag: 'Sunset Horizon of Kurukshetra on Day 14',
      sceneTag_te: 'పద్నాలుగో రోజు సూర్యాస్తమయ వేళ',
      sceneTag_hi: 'चौदहवें दिन का सूर्यास्त',
      hookLine: 'Arjuna vowed to jump into blazing flames if Jayadratha was not slain before tomorrow’s sunset.',
      hookLine_te: '"రేపు సూర్యాస్తమయం లోపు జయద్రథుని తల నరకకపోతే అగ్నిప్రవేశం చేస్తాను!" అని అర్జునుని శపథం.',
      hookLine_hi: '"कल सूर्यास्त से पूर्व यदि जयद्रथ का वध न किया, तो मैं गांडीव सहित अग्नि समाधि ले लूँगा!"',
      paragraphs: [
        'Returning at dusk, Arjuna found the Pandava camp drowned in inconsolable mourning. Subhadra and teenage widow Uttara were tearing their hair in grief. When told how Jayadratha barred the gate and six elders butchered his unarmed boy, Arjuna collapsed, tearing the grass with his fingernails.',
        'Rising with eyes burning like meteors, Arjuna took a terrible oath: "Before the sun sets tomorrow, I shall sever the head of Jayadratha! If I fail to kill him before dusk, I shall cast myself and my Gandiva into a blazing funeral pyre!"',
        'On Day 14, Drona built a triple-layered defense thirty miles deep to protect Jayadratha. Arjuna cut through armies like a scythe through wheat, yet dusk approached and Jayadratha remained hidden. Lord Krishna hurled His Sudarshana Chakra to blot out the sun! Believing sunset had occurred, Jayadratha leaped out laughing to watch Arjuna burn. Instantly, Krishna lowered the Chakra: the sun blazed anew! "Shoot, Partha!" roared Krishna. Arjuna’s divine arrow sliced off Jayadratha’s head, carrying it through the air directly into his meditating father’s lap, fulfilling an ancient curse.'
      ],
      paragraphs_te: [
        'సాయంత్రం తిరిగి వచ్చిన అర్జునుడు కుమారుని మరణవార్త విని గుండెలు బాదుకున్నాడు. సుభద్ర, ఉత్తరల రోదనలు మిన్నంటాయి. ఆరుగురు కలిసి నిరాయుధుడైన బిడ్డను చంపారని తెలిసి రగిలిపోయాడు.',
        'అర్జునుడు భయంకరమైన శపథం చేశాడు: "రేపు సూర్యాస్తమయం లోపు జయద్రథుని తల నరకకపోతే, నేను గాండీవంతో సహా చితి పేర్చుకుని అగ్నిప్రవేశం చేస్తాను!"',
        'పద్నాలుగో రోజు సూర్యాస్తమయ సమయం దగ్గరపడుతున్నా జయద్రథుడు కనిపించలేదు. శ్రీకృష్ణుడు తన సుదర్శన చక్రంతో సూర్యుడిని కప్పిపెట్టి కృత్రిమ సూర్యాస్తమయాన్ని సృష్టించాడు. సూర్యుడు మునిగిపోయాడని భావించిన జయద్రథుడు నవ్వుతూ బయటకు వచ్చాడు. వెంటనే కృష్ణుడు చక్రాన్ని ఉపసంహరించగా సూర్యుడు మళ్ళీ కనిపించాడు! "బాణం వేయి పార్థా!" అని కృష్ణుడు ఆదేశించగా, అర్జునుని బాణం జయద్రథుని తలను ఎగరగొట్టి అతని తండ్రి ఒడిలో పడేలా చేసింది.'
      ],
      paragraphs_hi: [
        'संध्या समय लौटने पर पुत्र के वध का समाचार सुनकर अर्जुन मूर्छित हो गए। सुभद्रा और उत्तरा का विलाप देखकर अर्जुन ने प्रतिज्ञा की: "कल सूर्यास्त से पूर्व यदि मैंने जयद्रथ का वध न किया, तो मैं जीवित चिता में जलकर भस्म हो जाऊँगा!"',
        'चौदहवें दिन द्रोण ने जयद्रथ को छिपाने हेतु तीन परतों वाला अभेद्य व्यूह रचा। अर्जुन ने लाखों सैनिकों का संहार किया, किंतु सूर्यास्त निकट आ गया और जयद्रथ न मिला।',
        'तब श्रीकृष्ण ने सुदर्शन चक्र से सूर्य को ढककर कृत्रिम सूर्यास्त का भ्रम रच दिया। अर्जुन को चिता में जलते देखने हेतु जयद्रथ हँसता हुआ बाहर आ गया। उसी क्षण प्रभु ने चक्र हटा लिया और सूर्य चमक उठा! "तीर चलाओ पार्थ!" अर्जुन के पाशुपत बाण ने जयद्रथ का मस्तक काटकर सीधे उसके तपस्वी पिता की गोद में गिरा दिया।'
      ],
      dialogueQuote: '"Behold the sun, Partha! Release the divine arrow before the light fades!"',
      dialogueQuote_te: '"సూర్యుడిని చూడు పార్థా! క్షణం ఆలస్యం చేయకుండా ఆ దుర్మార్గుని తలను ఖండించు!"',
      dialogueQuote_hi: '"पार्थ! सूर्य अभी डूबा नहीं है; बाण चलाओ और जयद्रथ का मस्तक उड़ा दो!"',
      speaker: 'Sri Krishna revealing the sun on Day 14',
      speaker_te: 'సూర్యుని చూపిస్తూ శ్రీకృష్ణుడు',
      speaker_hi: 'भगवान श्रीकृष्ण का अर्जुन को निर्देश',
      imageUrl: '/assets/wallpapers/arjuna.jpg',
      imageCaption: 'Arjuna loosing the fatal arrow at Jayadratha under the restored rays of the setting sun.',
      imageCaption_te: 'సూర్యాస్తమయ వేళ జయద్రథునిపై బాణాన్ని సంధిస్తున్న అర్జునుడు.',
      imageCaption_hi: 'अस्त होते सूर्य के समक्ष जयद्रथ का वध करते गांडीवधारी अर्जुन।'
    },
    {
      pageNumber: 6,
      title: 'The Night of Sorcery: Ghatotkacha’s Sacrifice',
      title_te: 'మాయా రాత్రి యుద్ధం & ఘటోత్కచుని ప్రాణత్యాగం',
      title_hi: 'मायावी रात्रि-युद्ध और घटोत्कच का अमर बलिदान',
      sceneTag: 'Pitch-Dark Battlefield at Midnight',
      sceneTag_te: 'కురుక్షేత్రంలో అర్ధరాత్రి యుద్ధం',
      sceneTag_hi: 'मध्यरात्रि का भयानक रणक्षेत्र',
      hookLine: 'To save Arjuna from Indra’s lethal dart, the colossal demon absorbed the weapon with his life.',
      hookLine_te: 'అర్జునుని కోసం దాచిన ఇంద్రుని వాసవి శక్తిని తనపై ప్రయోగించేలా చేసి ప్రాణాలర్పించిన ఘటోత్కచుడు.',
      hookLine_hi: 'अर्जुन के प्राण बचाने हेतु जिसने इंद्र की अमोघ वासव-शक्ति को अपनी छाती पर झेल लिया।',
      paragraphs: [
        'The war did not cease at dusk on Day 14; furious torches illuminated the first night battle in history. Demons and sorcerers thrive in darkness, and Bhima’s colossal son Ghatotkacha expanded his form to the height of a mountain.',
        'Hurling trees, flaming boulders, and phantom chariots from the black sky, Ghatotkacha pulverized entire Kaurava divisions. Terrified soldiers trampled each other, crying: "Duryodhana, flee! The Asura has swallowed the universe!" Duryodhana wept to Karna: "Use the Vasavi Shakti, or not a single man shall survive tonight!"',
        'Karna had guarded the divine spear Vasavi Shakti—given to him by Indra in exchange for his armor—specifically to kill Arjuna. It could be used only once before returning to heaven. Driven to absolute desperation by Ghatotkacha’s devastation, Karna notched the fiery spear and released it. The spear pierced Ghatotkacha’s heart. Even in death, the titan enlarged his body and crashed down on the Kaurava army, crushing an entire Akshauhini beneath his falling corpse!'
      ],
      paragraphs_te: [
        'పద్నాలుగో రోజు రాత్రి కూడా యుద్ధం ఆగలేదు. దివిటీల వెలుగులో రాత్రి యుద్ధం జరిగింది. చీకట్లో రాక్షసుల మాయాశక్తులు పెరుగుతాయి కనుక, భీముని కుమారుడు ఘటోత్కచుడు పర్వతాకారంలో పెరిగిపోయాడు.',
        'ఆకాశం నుండి రాళ్ళను, నిప్పులను కురిపిస్తూ కౌరవ సైన్యాన్ని తొక్కిపారేశాడు. భయపడిపోయిన దుర్యోధనుడు కర్ణుడిని వేడుకున్నాడు: "కర్ణా! ఆ వాసవి శక్తిని ప్రయోగించు, లేదంటే ఈ రాత్రికి మన సైన్యం మిగలదు!"',
        'కర్ణుడు ఆ వాసవి శక్తిని అర్జునుడిని చంపడానికే దాచిపెట్టుకున్నాడు. అది ఒక్కసారి మాత్రమే పనిచేస్తుంది. కానీ గత్యంతరం లేక ఆ దివ్య శక్తిని ఘటోత్కచునిపై ప్రయోగించాడు. ఆ శక్తి గుండెను చీల్చగా, ఘటోత్కచుడు చనిపోతూ కూడా తన భారీ శరీరాన్ని కౌరవ సైన్యంపై పడేలా చేసి ఒక అక్షౌహిణి సైన్యాన్ని నలిపివేశాడు. కృష్ణుడు ఆనందంతో నృత్యం చేశాడు, ఎందుకంటే అర్జునునికి ప్రాణాపాయం తప్పింది!'
      ],
      paragraphs_hi: [
        'चौदहवें दिन की रात को भी युद्ध नहीं रुका। मशालों के प्रकाश में घमासान रात्रि-युद्ध हुआ। भीम-पुत्र घटोत्कच ने पर्वताकार रूप धारण कर अपनी मायावी शक्तियों से कौरव सेना में महाप्रलय ला दिया।',
        'आकाश से अग्नि और शिलाएं बरसने लगीं। भयभीत कौरव भागने लगे। दुर्योधन ने रोते हुए कर्ण से कहा: "कर्ण! किसी भी तरह इस राक्षस का अंत करो, अन्यथा आज रात पूरी सेना मारी जाएगी!"',
        'कर्ण ने इंद्र द्वारा दी गई अमोघ \'वासव-शक्ति\' को अर्जुन के वध हेतु संभालकर रखा था, जिसका प्रयोग केवल एक बार हो सकता था। विवश होकर कर्ण ने वह शक्ति घटोत्कच पर चला दी। बाण घटोत्कच के सीने में जा धंसा। मरते-मरते भी उस महाबली ने अपना शरीर विशाल कर कौरवों की एक पूरी अक्षौहिणी सेना को अपने नीचे दबाकर मार डाला।'
      ],
      dialogueQuote: '"The thorn in Arjuna’s destiny is plucked; the Vasavi Shakti has returned to heaven!"',
      dialogueQuote_te: '"అర్జునుని ప్రాణాలకు ఉన్న ఏకైక ముప్పు తొలగిపోయింది; వాసవి శక్తి స్వర్గానికి తిరిగి వెళ్ళిపోయింది!"',
      dialogueQuote_hi: '"अर्जुन के मार्ग का सबसे बड़ा संकट टल गया; वासव-शक्ति अब स्वर्ग लौट चुकी है!"',
      speaker: 'Sri Krishna celebrating Ghatotkacha’s sacrifice',
      speaker_te: 'ఘటోత్కచుని త్యాగాన్ని కొనియాడుతూ శ్రీకృష్ణుడు',
      speaker_hi: 'श्रीकृष्ण का घटोत्कच के प्रति आभार',
      imageUrl: '/assets/wallpapers/bhima.jpg',
      imageCaption: 'Ghatotkacha in his mountain-like form crashing upon the Kaurava army as the fiery dart strikes him.',
      imageCaption_te: 'వాసవి శక్తి తగిలి కౌరవ సైన్యంపై కూలుతున్న రాక్షస వీరుడు ఘటోత్కచుడు.',
      imageCaption_hi: 'वासव-शक्ति से विद्ध होकर कौरव सेना पर गिरते महाबली घटोत्कच।'
    },
    {
      pageNumber: 7,
      title: 'The Fall of Drona: "Ashwatthama is Dead"',
      title_te: 'ద్రోణుని పతనం: "అశ్వత్థామ హతః కుంజరః"',
      title_hi: 'द्रोणाचार्य का पतन और युधिष्ठिर का अर्ध-सत्य',
      sceneTag: 'Day Fifteen on the Kurukshetra Plain',
      sceneTag_te: 'పదిహేనవ రోజు యుద్ధం',
      sceneTag_hi: 'पंद्रहवें दिन का रणक्षेत्र',
      hookLine: 'When the truthful king whispered of an elephant’s death, the preceptor dropped his weapons in grief.',
      hookLine_te: '"అశ్వత్థామ మరణించాడు" అన్న మాట విని, పుత్రశోకంతో ఆయుధాలు వదిలేసి ధ్యానంలో కూర్చున్న గురువు.',
      hookLine_hi: '"अश्वत्थामा मारा गया" सुनकर गुरु द्रोण ने शस्त्र त्याग दिए और समाधिस्थ हो गए।',
      paragraphs: [
        'On the fifteenth day, Guru Dronacharya unleashed Brahmastras that threatened to consume all life. Krishna knew Drona was invincible as long as he held his bow. There was only one vulnerable spot in his soul: his blind love for his son Ashwatthama.',
        'Bhima slew an elephant named Ashwatthama belonging to King Indravarman and shouted across the lines: "Ashwatthama is dead!" Suspecting a ruse, Drona approached King Yudhishthira, knowing that Dharmaraja had never uttered a lie in his life.',
        'Coached by Krishna, Yudhishthira proclaimed loudly: "Ashwatthama is dead!" then added in a quiet whisper: "the elephant" (Ashwatthama Hatah... Iti Gajah). Lord Krishna blew his conch at that precise second, drowning out the word "elephant." Believing his son dead, Drona dropped his bow, sat down on his chariot floor in deep Yogic meditation, and detached his soul. Prince Dhrishtadyumna leaped forward with his sword and severed the preceptor\'s head, avenging his father Drupada.'
      ],
      paragraphs_te: [
        'పదిహేనవ రోజు ద్రోణాచార్యుడు బ్రహ్మాస్త్రాలను ప్రయోగిస్తూ విధ్వంసం సృష్టించాడు. చేతిలో ఆయుధం ఉన్నంతవరకు ద్రోణుడిని ఎవరూ చంపలేరు. ఆయనకు కొడుకు అశ్వత్థామ అంటే అమితమైన ప్రాణం.',
        'భీముడు "అశ్వత్థామ" అనే పేరుగల ఏనుగును చంపి "అశ్వత్థామ చనిపోయాడు!" అని అరిచాడు. నమ్మని ద్రోణుడు, జీవితంలో అబద్ధం చెప్పని ధర్మరాజు వద్దకు వచ్చి అడిగాడు.',
        'కృష్ణుని సూచనతో ధర్మరాజు: "అశ్వత్థామ హతః..." అని గట్టిగా చెప్పి, "...కుంజరః" (ఏనుగు) అని మెల్లగా అన్నాడు. అదే సమయంలో కృష్ణుడు శంఖం పూరించడంతో ఏనుగు అనే పదం ద్రోణునికి వినిపించలేదు. కొడుకు చనిపోయాడన్న శోకంతో ద్రోణుడు ఆయుధాలు విడిచి రథంపై యోగ సమాధిలో కూర్చున్నాడు. దృష్టద్యుమ్నుడు ఖడ్గంతో ఆయన తలను నరికివేశాడు.'
      ],
      paragraphs_hi: [
        'पंद्रहवें दिन द्रोणाचार्य ने ब्रह्मास्त्र चलाकर प्रलय मचा दी। जब तक उनके हाथ में धनुष था, उन्हें कोई परास्त नहीं कर सकता था। उनकी एकमात्र दुर्बलता पुत्र अश्वत्थामा का मोह था।',
        'भीम ने \'अश्वत्थामा\' नामक हाथी को मारकर घोषणा की: "अश्वत्थामा मारा गया!" द्रोण ने सत्य जानने हेतु युधिष्ठिर से पूछा, जो कभी असत्य नहीं बोलते थे।',
        'श्रीकृष्ण के कहने पर युधिष्ठिर ने कहा: "अश्वत्थामा मारा गया..." और फिर धीरे से बोले: "...किंतु हाथी।" उसी समय श्रीकृष्ण ने जोर से शंख बजा दिया जिससे \'हाथी\' शब्द द्रोण न सुन सके। पुत्रशोक में व्याकुल होकर द्रोण ने अस्त्र रख दिए और समाधिस्थ हो गए। तभी धृष्टद्युम्न ने खड्ग से उनका मस्तक काट दिया।'
      ],
      dialogueQuote: '"Ashwatthama Hatah... (Iti Gajah) — Ashwatthama is slain... (the elephant)!"',
      dialogueQuote_te: '"అశ్వత్థామ హతః... కుంజరః!"',
      dialogueQuote_hi: '"अश्वत्थामा हतः... नरो वा कुंजरो वा!"',
      speaker: 'Yudhishthira’s historic half-truth',
      speaker_te: 'ధర్మరాజు పలికిన అర్ధసత్యం',
      speaker_hi: 'युधिष्ठिर का अर्द्धसत्य',
      imageUrl: '/assets/wallpapers/dronacharya.jpg',
      imageCaption: 'Guru Drona seated in yogic trance on his chariot as weapons fall from his hands.',
      imageCaption_te: 'ఆయుధాలను వదిలేసి రథంపై యోగసమాధిలో కూర్చున్న గురు ద్రోణాచార్యుడు.',
      imageCaption_hi: 'समाधि में लीन गुरु द्रोणाचार्य और शस्त्र त्यागने का कारुणिक दृश्य।'
    },
    {
      pageNumber: 8,
      title: 'The Duel of Titans: The Sunset of Karna',
      title_te: 'కర్ణార్జునుల రణ సంగ్రామం & కర్ణ పతనం',
      title_hi: 'कर्ण-अर्जुन का महासंग्राम और सूर्यपुत्र का पतन',
      sceneTag: 'Sunset Duel on Day Seventeen',
      sceneTag_te: 'పదిహేడో రోజు సాయంత్రం కురుక్షేత్రం',
      sceneTag_hi: 'सत्रहवें दिन का अंतिम द्वंद्वयुद्ध',
      hookLine: 'The earth swallowed his chariot wheel, Parashurama\'s curse erased his mantras, and the arrow struck.',
      hookLine_te: 'రథచక్రం భూమిలో కూరుకుపోయింది, పరశురాముని శాపంతో మంత్రాలు గుర్తుకురాలేదు; అంజలికాస్త్రంతో నేలకొరిగిన కర్ణుడు.',
      hookLine_hi: 'धरती ने रथ का पहिया निगल लिया, शापवश अस्त्र-विद्या विस्मृत हो गई और अंजलि का बाण चल गया।',
      paragraphs: [
        'On the seventeenth day, Karna took command as general. The long-awaited duel between Arjuna and Karna shook the heavens. Arrows shattered arrows mid-air, celestial fires clashed with water astras, and gods and celestial beings watched in breathless terror from golden aerial chariots.',
        'Suddenly, Mother Earth opened her jaws and swallowed Karna’s left chariot wheel up to the hub, fulfilling an ancient curse of a Brahmin. Karna leaped down, struggling with all his mighty strength to lift the massive iron wheel from the mud. As he tried to summon the Brahmastra to protect himself, Parashurama’s curse struck: his mind went entirely blank, forgetting every sacred syllable!',
        '"Hold thy fire, Arjuna!" cried Karna, invoking the Kshatriya code. "Righteousness forbids shooting an unarmed warrior lifting his wheel!"',
        'Lord Krishna smiled bitterly: "Where was thy righteousness, Karna, when Draupadi was dragged by the hair in single cloth? Where was thy dharma when six Maharathas butchered unarmed child Abhimanyu? Today, reap what thou hast sown!" Krishna commanded: "Cut off his head, Partha, before he climbs back!" Arjuna drew the crescent-headed Anjalikastra; singing with blinding light, it severed Karna’s neck. A divine ray of golden solar light rose from Karna’s fallen body and merged forever into the blazing orb of the setting Sun.'
      ],
      paragraphs_te: [
        'పదిహేడవ రోజు కర్ణుడు సర్వసైన్యాధ్యక్షుడిగా రంగంలోకి దిగాడు. కర్ణార్జునుల మధ్య జరిగిన ద్వంద్వ యుద్ధం భూమ్యాకాశాలను వణికించింది. బాణాలను బాణాలతో కొడుతూ ఇద్దరూ అద్భుతంగా పోరాడారు.',
        'అకస్మాత్తుగా పూర్వ శాపం వల్ల కర్ణుని ఎడమ రథచక్రం భూమిలోకి కూరుకుపోయింది. కర్ణుడు రథం దిగి చక్రం ఎత్తడానికి ప్రయత్నించాడు. పరశురాముని శాపం వల్ల బ్రహ్మాస్త్ర మంత్రాలు మర్చిపోయాడు. "అర్జునా! రథచక్రం ఎత్తే వరకు బాణం వేయకు, ఇది యుద్ధ ధర్మం కాదు" అని కర్ణుడు అన్నాడు.',
        'శ్రీకృష్ణుడు కటువుగా నవ్వి: "కర్ణా! ద్రౌపదిని సభలోకి ఈడ్చినప్పుడు ఎక్కడికి పోయింది నీ ధర్మం? ఆరుగురు కలిసి నిరాయుధుడైన అభిమన్యుడిని చంపినప్పుడు నీ ధర్మం ఏమైంది? ఈరోజు నీ కర్మ ఫలాన్ని అనుభవించు!" అన్నాడు. "బాణం వేయి పార్థా!" అని కృష్ణుడు ఆదేశించగా, అర్జునుడు అంజలికాస్త్రాన్ని ప్రయోగించాడు. ఆ బాణం కర్ణుని శిరస్సును ఖండించింది. కర్ణుని దేహం నుండి ఒక దివ్య తేజస్సు బయటకు వచ్చి సూర్యమండలంలో ఐక్యమైంది.'
      ],
      paragraphs_hi: [
        'सत्रहवें दिन कर्ण सेनापति बने। कर्ण और अर्जुन के बीच ऐसा महासंग्राम हुआ जिसने तीनों लोकों को हिला दिया। आकाश में बाणों से बाण टकराकर अग्नि उगल रहे थे।',
        'तभी ब्राह्मण के शापवश कर्ण के रथ का बायां पहिया धरती में धंस गया। कर्ण नीचे उतरकर पहिया निकालने लगे। परशुराम के शाप से वे ब्रह्मास्त्र का मंत्र भूल गए। कर्ण ने कहा: "ठहरो अर्जुन! निहत्थे पर वार करना क्षत्रिय धर्म नहीं है!"',
        'श्रीकृष्ण ने कहा: "कर्ण! तुम्हारा यह धर्म तब कहाँ था जब रजस्वला द्रौपदी के वस्त्र खींचे जा रहे थे? तब धर्म कहाँ था जब छह महारथियों ने अकेले बालक अभिमन्यु को घेरा था? आज अपने पापों का फल भोगो!" प्रभु ने आदेश दिया: "बाण चलाओ पार्थ!" अर्जुन ने अंजलि का बाण छोड़ दिया, जिसने कर्ण का मस्तक धड़ से अलग कर दिया। कर्ण के शरीर से एक सूर्य जैसी दिव्य ज्योति निकली और अस्त होते सूर्यदेव में समा गई।'
      ],
      dialogueQuote: '"Where was thy righteousness when Draupadi wept in the hall, and when six lions surrounded one cub?"',
      dialogueQuote_te: '"ద్రౌపది సభలో ఏడ్చినప్పుడు, ఆరుగురు కలిసి ఒక్క పసికూనను చంపినప్పుడు నీ ధర్మం ఎక్కడికి పోయింది కర్ణా?"',
      dialogueQuote_hi: '"जब द्रौपदी सभा में रोई थी और छह सिंहों ने एक शावक को घेरा था, तब तुम्हारा धर्म कहाँ सो गया था कर्ण?"',
      speaker: 'Sri Krishna indicting Karna before his fall',
      speaker_te: 'కర్ణుని నిలదీస్తున్న శ్రీకృష్ణుడు',
      speaker_hi: 'कर्ण के धर्म-दुहाई पर श्रीकृष्ण का प्रत्युत्तर',
      imageUrl: '/assets/wallpapers/karna.jpg',
      imageCaption: 'The tragic fallen warrior Karna on the sunset sands of Kurukshetra as a golden ray returns to the Sun.',
      imageCaption_te: 'కురుక్షేత్రంలో అస్తమించిన దానవీర కర్ణుడు; సూర్యమండలంలో ఐక్యమైన దివ్య తేజస్సు.',
      imageCaption_hi: 'रणभूमि में कर्ण का वीरगति पाना और उनकी आत्मा का सूर्य में विलीन होना।'
    }
  ],

  partSummary: {
    majorEvents: [
      'Guru Dronacharya assumes supreme command and crafts the deadly spinning Chakravyuha',
      'Arjuna is lured away by the suicide squad Samsaptakas; sixteen-year-old Abhimanyu enters the labyrinth alone',
      'Jayadratha holds back the other four Pandavas at the gate using his single-day boon from Shiva',
      'Abhimanyu slays Lakshmana and fights six Maharathas with a broken chariot wheel before his martyrdom',
      'Arjuna takes a fierce vow to slay Jayadratha before sunset or immolate himself in fire',
      'Krishna causes a false sunset with His Sudarshana Chakra, enabling Arjuna to behead Jayadratha',
      'The terrifying night battle: Ghatotkacha unleashes monstrous illusion warfare, forcing Karna to waste the Vasavi Shakti',
      'Guru Dronacharya drops his weapons in grief upon hearing "Ashwatthama is dead" and is beheaded by Dhrishtadyumna',
      'Karna’s chariot wheel is swallowed by the earth; curses strip his mantras, and Arjuna fells him with the Anjalikastra'
    ],
    majorEvents_te: [
      'ద్రోణాచార్యుని సేనాధిపత్యం & మృత్యు చక్రం లాంటి చక్రవ్యూహ రచన',
      'సంశప్తకులు అర్జునుడిని దూరం తీసుకెళ్ళడం; పదహారేళ్ళ అభిమన్యుడు ఒంటరిగా చక్రవ్యూహంలోకి ప్రవేశించడం',
      'శివుని వరంతో నలుగురు పాండవులను వ్యూహ ద్వారం వద్ద నిలువరించిన సైంధవుడు',
      'లక్ష్మణ కుమారుని సంహరించి, విరిగిన రథచక్రంతో ఆరుగురు మహారథులతో పోరాడి వీరమరణం పొందిన అభిమన్యుడు',
      'సూర్యాస్తమయం లోపు జయద్రథుని చంపకపోతే అగ్నిప్రవేశం చేస్తానని అర్జునుని శపథం',
      'సుదర్శన చక్రంతో కృత్రిమ సూర్యాస్తమయాన్ని సృష్టించి జయద్రథుని వధించిన అర్జునుడు',
      'మాయా రాత్రి యుద్ధం: ఘటోత్కచుని విధ్వంసానికి భయపడి కర్ణుడు వాసవి శక్తిని ప్రయోగించి ప్రాణత్యాగం చేయించడం',
      '"అశ్వత్థామ హతః కుంజరః" అన్న మాటతో ఆయుధాలు వదిలేసిన ద్రోణుని పతనం',
      'రథచక్రం కూరుకుపోవడం, శాపాలతో మంత్రాలు మర్చిపోవడం & అంజలికాస్త్రంతో కర్ణుని వీరమరణం'
    ],
    majorEvents_hi: [
      'द्रोणाचार्य का सेनापतित्व और चक्रव्यूह का निर्माण',
      'संशप्तकों द्वारा अर्जुन को दूर ले जाना और अभिमन्यु का अकेले चक्रव्यूह में प्रवेश',
      'जयद्रथ द्वारा शिव के वरदान से चारों पांडवों को रोकना',
      'अभिमन्यु द्वारा छह महारथियों से रथ के पहिए से युद्ध और वीरगति',
      'अर्जुन की जयद्रथ वध की भीषण प्रतिज्ञा',
      'सुदर्शन चक्र द्वारा भ्रमित कर जयद्रथ का सिर काटना',
      'घटोत्कच का रात्रि-युद्ध और कर्ण द्वारा वासव-शक्ति का व्यर्थ होना',
      'अश्वत्थामा की मृत्यु की सूचना पर द्रोण का शस्त्र-त्याग और वध',
      'पहिया धंसने और शाप के कारण कर्ण का अर्जुन के हाथों अंत'
    ],
    importantCharacters: [
      'Abhimanyu - The immortal sixteen-year-old martyr who demonstrated the pinnacle of solitary valor',
      'Karna - Tragic titan who fell to accumulated karmic curses and moral violations of the past',
      'Guru Drona - Master of weapons immobilized by fatherly grief and moral compromise',
      'Ghatotkacha - Loyal son who gave his life to neutralize the ultimate weapon threatening Arjuna',
      'Jayadratha - Instrument of doom whose decapitation avenged the butchery of Abhimanyu'
    ],
    importantCharacters_te: [
      'అభిమన్యుడు - అసమాన ధైర్య సాహసాలతో వీరమరణం పొందిన అమర బాలుడు',
      'కర్ణుడు - విధి వంచిత, శాపాల భారంతో నేలకొరిగిన దానవీరుడు',
      'ద్రోణాచార్యుడు - పుత్రప్రేమతో ఆయుధాలు వదిలిన రాజగురువు',
      'ఘటోత్కచుడు - అర్జునుని ప్రాణాల కోసం తన ప్రాణాలను త్యాగం చేసిన వీరుడు',
      'జయద్రథుడు - అభిమన్యుని పతనానికి కారణమై అర్జునుని చేతిలో హతమైనవాడు'
    ],
    importantCharacters_hi: [
      'अभिमन्यु - अद्वितीय शौर्य के प्रतीक 16 वर्षीय अमर बलिदानी',
      'कर्ण - शापों और पूर्वकर्मों के भार से धराशायी हुए दानवीर',
      'द्रोणाचार्य - पुत्रमोह में अस्त्र त्यागने वाले महासेनापति',
      'घटोत्कच - अर्जुन के प्राण बचाने हेतु प्राणों की आहुति देने वाले महाबली',
      'जयद्रथ - चक्रव्यूह का खलनायक जिसका अर्जुन ने वध किया'
    ],
    importantRelationships: [
      'Father & Son (Arjuna & Abhimanyu): Grief transformed into the unstoppable fire of justice',
      'Krishna & Karna: The final accountability for moral hypocrisy in the assembly of shame',
      'Bhima & Ghatotkacha: The supreme filial sacrifice preserving the core of the Pandava cause'
    ],
    importantRelationships_te: [
      'అర్జునుడు & అభిమన్యుడు: పుత్రశోకం ప్రతీకార జ్వాలగా మారి జయద్రథుని సంహరించిన బంధం',
      'కృష్ణుడు & కర్ణుడు: గతంలో చేసిన పాపాలకు కర్మ సిద్ధాంతం వేసిన అంతిమ తీర్పు',
      'భీముడు & ఘటోత్కచుడు: తండ్రి పక్షం కోసం ప్రాణాలర్పించిన కొడుకు త్యాగం'
    ],
    importantRelationships_hi: [
      'अर्जुन और अभिमन्यु - वात्सल्य और प्रतिशोध का भीषण संगम',
      'श्रीकृष्ण और कर्ण - धर्म की कसौटी पर पूर्व पापों का अंतिम न्याय',
      'भीम और घटोत्कच - पांडव वंश की रक्षा हेतु पुत्र का महाबलिदान'
    ],
    majorDecisions: [
      'Abhimanyu choosing to enter the Chakravyuha despite knowing only the entrance',
      'The six Maharathas violating all codes to kill an unarmed youth simultaneously',
      'Karna exhausting his precious Vasavi Shakti on Ghatotkacha to save the Kaurava army',
      'Yudhishthira uttering the fateful half-truth about Ashwatthama to break Drona’s will'
    ],
    majorDecisions_te: [
      'బయటకు రావడం తెలియకపోయినా ధర్మం కోసం వ్యూహంలోకి దూకిన అభిమన్యుని ధైర్యం',
      'యుద్ధ ధర్మాలను కాలరాసి ఆరుగురు కలిసి ఒక బాలుడిని చంపిన కౌరవుల పాపం',
      'అర్జునుని కోసం దాచుకున్న వాసవి శక్తిని ఘటోత్కచునిపై ప్రయోగించిన కర్ణుని అగత్యం',
      'ద్రోణుని పతనం కోసం ధర్మరాజు అర్ధసత్యం పలకడం'
    ],
    majorDecisions_hi: [
      'निकलने का मार्ग न जानते हुए भी व्यूह में कूदना',
      'युद्ध के सारे नियम तोड़कर छह महारथियों द्वारा बालक का वध',
      'सेना को बचाने हेतु कर्ण द्वारा वासव-शक्ति का विवशता में प्रयोग',
      'अधर्म के अंत हेतु युधिष्ठिर द्वारा अर्द्धसत्य का उच्चारण'
    ],
    consequences: [
      'The Kaurava military backbone is completely broken with the deaths of Drona, Jayadratha, and Karna',
      'Arjuna’s ultimate danger (the Vasavi Shakti) is neutralized forever',
      'Only the final eighteenth day of battle remains before the restoration of Dharma'
    ],
    consequences_te: [
      'ద్రోణుడు, జయద్రథుడు, కర్ణుల మరణంతో కౌరవ సైన్యం వెన్ను విరిగిపోవడం',
      'అర్జునునికి ప్రాణసంకటంగా ఉన్న వాసవి శక్తి శాశ్వతంగా తొలగిపోవడం',
      'పద్దెనిమిదో రోజు చివరి యుద్ధానికి రంగం సిద్ధమవడం'
    ],
    consequences_hi: [
      'द्रोण, जयद्रथ और कर्ण के पतन से कौरवों की कमर पूरी तरह टूटना',
      'अर्जुन के जीवन का सबसे बड़ा संकट (वासव-शक्ति) समाप्त होना',
      'अठारहवें दिन के अंतिम निर्णायक युद्ध का मार्ग प्रशस्त होना'
    ]
  },

  slides: [
    {
      slideNumber: 1,
      title: 'The Hero of the Labyrinth',
      title_te: 'చక్రవ్యూహ అమరవీరుడు',
      title_hi: 'चक्रव्यूह का अमर बलिदानी',
      content: 'Sixteen-year-old Abhimanyu breaches Drona’s Chakravyuha alone, fighting six Maharathas with a chariot wheel till his last breath.',
      content_te: 'పదహారేళ్ళ అభిమన్యుడు చక్రవ్యూహాన్ని ఛేదించి, ఒంటిచేత్తో ఆరుగురు మహారథులతో పోరాడి వీరమరణం పొందాడు.',
      content_hi: 'सोलह वर्ष के वीर अभिमन्यु ने चक्रव्यूह भेदकर टूटे रथ के पहिए से छह महारथियों का सामना किया और अमर हो गए।',
      moralLesson: 'True valor is not measured by age or numbers, but by unyielding courage in the face of impossible odds.',
      moralLesson_te: 'వీరత్వానికి వయసు ముఖ్యం కాదు; కష్టాల్లో కూడా చూపించే ధైర్య సాహసాలే మనిషిని అమరుడిని చేస్తాయి.',
      moralLesson_hi: 'वीरता आयु से नहीं, विषम परिस्थितियों में दिखाए गए अदम्य साहस से पहचानी जाती है।'
    },
    {
      slideNumber: 2,
      title: 'The Law of Karma',
      title_te: 'కర్మ సిద్ధాంతం',
      title_hi: 'कर्म का अमिट विधान',
      content: 'Karna invokes the warrior code when his wheel sinks, but Krishna reminds him that those who deny justice reap destruction.',
      content_te: 'రథచక్రం కూరుకుపోయినప్పుడు కర్ణుడు ధర్మాన్ని గుర్తుచేయగా, ద్రౌపదీ పరాభవాన్ని, అభిమన్యుని వధను గుర్తుచేసి న్యాయం చేశాడు కృష్ణుడు.',
      content_hi: 'पहिया धंसने पर कर्ण ने धर्म की दुहाई दी, किंतु श्रीकृष्ण ने याद दिलाया कि अधर्म करने वाले को धर्म का फल नहीं मिलता।',
      moralLesson: 'He who tramples on righteousness cannot appeal to righteousness when justice knocks at his door.',
      moralLesson_te: 'అవకాశం ఉన్నప్పుడు అధర్మాన్ని ప్రోత్సహించినవాడు, ఆపద వచ్చినప్పుడు ధర్మం రక్షిస్తుందని ఆశించలేడు.',
      moralLesson_hi: 'जो दूसरों के साथ अधर्म करता है, संकट के समय धर्म भी उसकी रक्षा नहीं करता।'
    },
    {
      slideNumber: 3,
      title: 'The Great Sacrifice',
      title_te: 'ఘటోత్కచుని అమర త్యాగం',
      title_hi: 'घटोत्कच का सर्वोच्च बलिदान',
      content: 'Ghatotkacha gives his life under the Vasavi Shakti, destroying the divine weapon meant to slay Arjuna and securing victory.',
      content_te: 'ఘటోత్కచుడు తన ప్రాణాలను అర్పించి అర్జునుని కోసం దాచిన వాసవి శక్తిని నాశనం చేసి పాండవుల విజయానికి బాటలు వేశాడు.',
      content_hi: 'घटोत्कच ने अपने प्राण देकर अर्जुन के काल वासव-शक्ति को समाप्त कर दिया और धर्म की विजय सुनिश्चित की।',
      moralLesson: 'Selfless sacrifice for a noble cause lives forever in the memory of the cosmos.',
      moralLesson_te: 'ధర్మం కోసం చేసే నిస్వార్థ ప్రాణత్యాగం విశ్వ చరిత్రలో చిరస్థాయిగా నిలిచిపోతుంది.',
      moralLesson_hi: 'धर्म और सत्य के लिए दिया गया सर्वोच्च बलिदान युगों-युगों तक पूजा जाता है।'
    }
  ]
};
