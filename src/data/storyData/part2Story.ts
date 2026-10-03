import { StoryPart } from '../../types/game';

export const PART_2_STORY: StoryPart = {
  partNumber: 2,
  title: 'Childhood & Guru Dronacharya',
  title_te: 'బాల్యం, గురుకుల విద్యాభ్యాసం & ప్రారంభ వైరాలు',
  title_hi: 'राजकुमारों का बाल्यकाल, द्रोणाचार्य और प्रारंभिक प्रतिस्पर्धा',
  sanskritTitle: 'गुरु द्रोण एवं राजकुमारों की शिक्षा',
  summary: 'The birth of the Pandavas and Kauravas, the arrival of preceptor Dronacharya, the legendary test of the bird’s eye, Ekalavya’s devotion, and the fateful tournament where Karna pledges his life to Duryodhana.',
  summary_te: 'పాండవులు-కౌరవుల జననం, ద్రోణాచార్యుని గురుకులం, పిట్ట కన్ను పరీక్ష, ఏకలవ్యుని గురుభక్తి, మరియు రంగస్థల ప్రవేశంలో కర్ణ-దుర్యోధనుల మైత్రి.',
  summary_hi: 'पांडवों और कौरवों का जन्म, गुरु द्रोण का गुरुकुल, चिड़िया की आँख का लक्ष्य-वेध, एकलव्य की गुरुभक्ति और रंगभूमि में कर्ण-दुर्योधन की अमर मित्रता।',
  characterRewardId: 'dronacharya',

  charactersInPart: [
    {
      id: 'dronacharya',
      name: 'Guru Dronacharya',
      name_te: 'గురు ద్రోణాచార్యుడు',
      name_hi: 'गुरु द्रोणाचार्य',
      title: 'Master of Celestial Astras & Royal Preceptor',
      title_te: 'సకల దివ్యాస్త్ర కోవిదుడు & రాజగురువు',
      title_hi: 'दिव्यास्त्रों के महाज्ञाता एवं राजगुरु',
      relationship: 'Royal Guru to both Pandavas and Kauravas; Father of Ashwatthama',
      relationship_te: 'పాండవ కౌరవుల గురువు; అశ్వత్థామ తండ్రి',
      relationship_hi: 'पांडव और कौरवों के गुरु; अश्वत्थामा के पिता',
      intro: 'Born of Sage Bharadwaja, Drona was a master of divine weapons who demanded supreme focus from his pupils.',
      intro_te: 'భరద్వాజ మహర్షి కుమారుడు, ఏకాగ్రతను పరమ విద్యగా బోధించిన ధనుర్వేద సార్వభౌముడు.',
      intro_hi: 'भरद्वाज मुनि के पुत्र, जिन्होंने शिष्यों में अद्वितीय एकाग्रता और पराक्रम का संचार किया।',
      avatarUrl: '/assets/wallpapers/dronacharya.jpg',
      role: 'mentor'
    },
    {
      id: 'arjuna',
      name: 'Arjuna (Savyasachin)',
      name_te: 'అర్జునుడు (సవ్యసాచి)',
      name_hi: 'अर्जुन (सव्यसाची)',
      title: 'The Incomparable Archer & Favorite Disciple',
      title_te: 'అసమాన ధనుర్ధారి & ఉత్తమ శిష్యుడు',
      title_hi: 'अद्वितीय धनुर्धर एवं प्रिय शिष्य',
      relationship: 'Third Pandava, son of Kunti & Indra; foremost pupil of Drona',
      relationship_te: 'కుంతి మరియు ఇంద్రుల కుమారుడు; ద్రోణుని ప్రియ శిష్యుడు',
      relationship_hi: 'कुंती और देवराज इंद्र के पुत्र; द्रोण के सर्वश्रेष्ठ शिष्य',
      intro: 'Possessed unmatched single-minded focus, practicing in the dead of night to master archery with both hands.',
      intro_te: 'రాత్రి చీకటిలో కూడా శబ్దవేధి సాధించిన ధనుర్ధారి; రెండు చేతులతోనూ బాణాలు వేయగల సవ్యసాచి.',
      intro_hi: 'घोर अंधकार में भी अचूक संधान करने वाले और दोनों हाथों से गांडीव चलाने वाले सव्यसाची।',
      avatarUrl: '/assets/wallpapers/arjuna.jpg',
      role: 'hero'
    },
    {
      id: 'duryodhana',
      name: 'Duryodhana (Suyodhana)',
      name_te: 'దుర్యోధనుడు (సుయోధనుడు)',
      name_hi: 'दुर्योधन (सुयोधन)',
      title: 'Eldest Kaurava Prince & Master of the Mace',
      title_te: 'కౌరవ జ్యేష్ఠుడు & గదాయోధుడు',
      title_hi: 'कौरव ज्येष्ठ एवं गदाधर',
      relationship: 'Eldest son of Dhritarashtra & Gandhari',
      relationship_te: 'ధృతరాష్ట్రుడు మరియు గాంధారుల పెద్ద కుమారుడు',
      relationship_hi: 'धृतराष्ट्र और गांधारी के ज्येष्ठ पुत्र',
      intro: 'Fiercely ambitious, proud, and consumed by jealousy against the popularity and strength of the Pandavas.',
      intro_te: 'తీవ్ర అహంకారం, భీమార్జునుల బలంపై అసూయతో రగిలిపోయిన కౌరవ నాయకుడు.',
      intro_hi: 'पांडवों के प्रति बचपन से ही द्वेष रखने वाले और अटूट राज-पिपासा से ग्रस्त कौरव युवराज।',
      avatarUrl: '/assets/wallpapers/bhima.jpg',
      role: 'adversary'
    },
    {
      id: 'karna',
      name: 'Karna (Radheya)',
      name_te: 'కర్ణుడు (రాధేయుడు)',
      name_hi: 'कर्ण (राधेय)',
      title: 'The Golden-Armored Sun-Child & King of Anga',
      title_te: 'సహజ కవచకుండలధారి & అంగరాజ కర్ణుడు',
      title_hi: 'कवच-कुंडलधारी दानवीर एवं अंगराज',
      relationship: 'Secret firstborn of Kunti & Surya; foster son of Adhiratha and Radha; lifelong friend of Duryodhana',
      relationship_te: 'కుంతి మరియు సూర్యుల ప్రథమ పుత్రుడు; అధిరథ-రాధల పెంపుడు కొడుకు; దుర్యోధనుని ఆప్తమిత్రుడు',
      relationship_hi: 'कुंती और सूर्यदेव के गुप्त ज्येष्ठ पुत्र; अधिरथ-राधा के पालित पुत्र; दुर्योधन के अभिन्न मित्र',
      intro: 'Born with divine armor, denied royal recognition due to caste prejudice, crowned King of Anga by Duryodhana.',
      intro_te: 'పుట్టుకతోనే దివ్య కవచకుండలాలున్నా, సూతపుత్రుడనే నెపంతో అవమానాలు ఎదుర్కొన్న మహాదాత.',
      intro_hi: 'जन्मजात कवच-कुंडल होते हुए भी सूतपुत्र कहकर तिरस्कृत किए गए, जिन्हें दुर्योधन ने अंगराज बनाया।',
      avatarUrl: '/assets/wallpapers/karna.jpg',
      role: 'hero'
    },
    {
      id: 'ekalavya',
      name: 'Ekalavya',
      name_te: 'ఏకలవ్యుడు',
      name_hi: 'एकलव्य',
      title: 'Nishada Prince & Supreme Emblem of Guru Devotion',
      title_te: 'నిషాద రాజపుత్రుడు & నిరుపమాన గురుభక్తుడు',
      title_hi: 'निषाद राजकुमार एवं गुरुभक्ति के अमर प्रतीक',
      relationship: 'Son of Hiranyadhanus; self-taught student of Dronacharya through a clay idol',
      relationship_te: 'హిరణ్యధనుస్సు కుమారుడు; మట్టి ద్రోణుని ముందు విద్య నేర్చిన యోధుడు',
      relationship_hi: 'निषादराज हिरण्यधनु के पुत्र; द्रोण की मिट्टी की प्रतिमा से धनुर्विद्या सीखने वाले',
      intro: 'Achieved supreme archery through pure faith and willingly severed his right thumb as Guru Dakshina.',
      intro_te: 'గురుముఖతా విద్య నేర్వకపోయినా మట్టి విగ్రహం ముందు సాధన చేసి, అడిగిన వెంటనే బొటనవేలిని కోసి సమర్పించిన త్యాగమూర్తి.',
      intro_hi: 'गुरु की मिट्टी की मूर्ति के समक्ष अभ्यास कर अद्वितीय बने और बिना संकोच अपना अंगूठा गुरुदक्षिणा में दे दिया।',
      avatarUrl: '/assets/wallpapers/dronacharya.jpg',
      role: 'hero'
    }
  ],

  familyTree: {
    title: 'The Young Princes of Hastinapur — Part 2',
    title_te: 'హస్తినాపుర యువతరం — భాగం 2',
    title_hi: 'हस्तिनापुर की युवा पीढ़ी — भाग २',
    description: 'The divine births of the 5 Pandavas through Kunti and Madri, the 100 Kauravas through Gandhari, and their martial training under Guru Drona.',
    description_te: 'కుంతి, మాద్రులకు దేవతల అనుగ్రహంతో పుట్టిన 5 పాండవులు, గాంధారికి పుట్టిన 100 మంది కౌరవులు, మరియు ద్రోణుని శిక్షణ.',
    description_hi: 'देवताओं के आह्वान से जन्मे ५ पांडव, गांधारी के १०० कौरव, और गुरु द्रोण का गुरुकुल।',
    nodes: [
      { id: 'pandu', name: 'King Pandu', name_te: 'పాండురాజు', name_hi: 'महाराज पाण्डु', role: 'Father of Pandavas', role_te: 'పాండవుల తండ్రి', role_hi: 'पांडवों के पिता', clan: 'Pandava', generation: 1 },
      { id: 'kunti', name: 'Queen Kunti', name_te: 'కుంతీదేవి', name_hi: 'माता कुंती', role: 'Mother of Pandavas & Karna', role_te: 'పాండవుల తల్లి', role_hi: 'पांडवों की माता', clan: 'Pandava', generation: 1, isKeyCharacter: true },
      { id: 'dhritarashtra', name: 'King Dhritarashtra', name_te: 'ధృతరాష్ట్రుడు', name_hi: 'धृतराष्ट्र', role: 'Father of Kauravas', role_te: 'కౌరవుల తండ్రి', role_hi: 'कौरवों के पिता', clan: 'Kaurava', generation: 1 },
      { id: 'gandhari', name: 'Queen Gandhari', name_te: 'గాంధారీ దేవి', name_hi: 'माता गांधारी', role: 'Mother of Kauravas', role_te: 'కౌరవుల తల్లి', role_hi: 'कौरवों की माता', clan: 'Kaurava', generation: 1 },
      { id: 'yudhishthira', name: 'Yudhishthira', name_te: 'ధర్మరాజు', name_hi: 'युधिष्ठिर', role: 'Son of Dharma (Eldest Pandava)', role_te: 'యమధర్మరాజు అంశ', role_hi: 'धर्मराज के पुत्र', clan: 'Pandava', generation: 2, isKeyCharacter: true },
      { id: 'bhima', name: 'Bhima', name_te: 'భీముడు', name_hi: 'भीम', role: 'Son of Vayu (Mighty Warrior)', role_te: 'వాయుదేవుని అంశ', role_hi: 'पवनपुत्र', clan: 'Pandava', generation: 2, isKeyCharacter: true },
      { id: 'arjuna', name: 'Arjuna', name_te: 'అర్జునుడు', name_hi: 'अर्जुन', role: 'Son of Indra (Master Archer)', role_te: 'ఇంద్రుని అంశ', role_hi: 'इंद्रपुत्र', clan: 'Pandava', generation: 2, isKeyCharacter: true },
      { id: 'nakula_sahadeva', name: 'Nakula & Sahadeva', name_te: 'నకుల-సహదేవులు', name_hi: 'नकुल-सहदेव', role: 'Sons of Ashwini Kumaras (Madri)', role_te: 'అశ్వినీదేవతల అంశ', role_hi: 'माद्रीपुत्र', clan: 'Pandava', generation: 2 },
      { id: 'duryodhana', name: 'Duryodhana & 99 Brothers', name_te: 'దుర్యోధనుడు & నూరు సోదరులు', name_hi: 'दुर्योधन व १०० भाई', role: 'Kaurava Princes', role_te: 'కౌరవ రాకుమారులు', role_hi: 'कौरव राजकुमार', clan: 'Kaurava', generation: 2, isKeyCharacter: true },
      { id: 'karna', name: 'Karna', name_te: 'కర్ణుడు', name_hi: 'कर्ण', role: 'Son of Surya & Kunti (King of Anga)', role_te: 'సూర్యపుత్రుడు, అంగరాజు', role_hi: 'सूर्यपुत्र, अंगराज', clan: 'Kuru', generation: 2, isKeyCharacter: true },
      { id: 'drona', name: 'Guru Dronacharya', name_te: 'ద్రోణాచార్యుడు', name_hi: 'द्रोणाचार्य', role: 'Preceptor to All Princes', role_te: 'రాజగురువు', role_hi: 'राजगुरु', clan: 'Sage / Celestial', generation: 1, isKeyCharacter: true }
    ],
    links: [
      { from: 'pandu', to: 'yudhishthira', relationship: 'parent_of', label: 'Father (Dharma)', label_te: 'తండ్రి', label_hi: 'पिता' },
      { from: 'pandu', to: 'bhima', relationship: 'parent_of', label: 'Father (Vayu)', label_te: 'తండ్రి', label_hi: 'पिता' },
      { from: 'pandu', to: 'arjuna', relationship: 'parent_of', label: 'Father (Indra)', label_te: 'తండ్రి', label_hi: 'पिता' },
      { from: 'dhritarashtra', to: 'duryodhana', relationship: 'parent_of', label: 'Father', label_te: 'తండ్రి', label_hi: 'पिता' },
      { from: 'kunti', to: 'karna', relationship: 'parent_of', label: 'Secret Eldest Son', label_te: 'ప్రథమ కుమారుడు', label_hi: 'गुप्त ज्येष्ठ पुत्र' },
      { from: 'drona', to: 'arjuna', relationship: 'mentor_of', label: 'Favorite Disciple', label_te: 'ప్రియ శిష్యుడు', label_hi: 'प्रिय शिष्य' },
      { from: 'duryodhana', to: 'karna', relationship: 'alliance', label: 'Eternal Friendship & King of Anga', label_te: 'గాఢ మైత్రి', label_hi: 'अमर मित्रता' }
    ]
  },

  illustratedPages: [
    {
      pageNumber: 1,
      title: 'The Curse of Kindama & The Birth of the Pandavas',
      title_te: 'కిందమ ముని శాపం & దేవతల అంశతో పాండవుల జననం',
      title_hi: 'किंदम मुनि का शाप और देवताओं से पांडवों का जन्म',
      sceneTag: 'Shatashringa Mountain Forest',
      sceneTag_te: 'శతశృంగ పర్వత అరణ్యం',
      sceneTag_hi: 'शतश्रृंग पर्वत के वन',
      hookLine: 'A hunter’s tragic mistake led to renunciation, mantra invocations, and celestial boons.',
      hookLine_te: 'ఒక ముని శాపం వల్ల తపస్సు బాట పట్టిన పాండురాజు; మంత్ర బలంతో పుట్టిన పంచ పాండవులు.',
      hookLine_hi: 'एक भूल का कठोर प्रायश्चित्त और मंत्र शक्ति से पाँच धर्मात्मा पुत्रों का अवतरण।',
      paragraphs: [
        'While hunting in the forested glades of Shatashringa, King Pandu shot a deer that was mating. The deer was Sage Kindama in disguised form; with his dying breath, the hermit cursed Pandu: "Should you ever approach your wife with desire, you shall perish that very instant!"',
        'Shattered by remorse, Pandu renounced his royal throne and chose the ascetic life in the forest, accompanied faithfully by Queen Kunti and Queen Madri. Distressed at having no heirs to offer oblations to his ancestors, Pandu lamented his childless fate.',
        'Queen Kunti then revealed the secret boon granted to her in girlhood by Sage Durvasa: a sacred mantra capable of summoning any celestial deity to grant her a divine child. Pandu rejoiced and urged Kunti to invoke the gods of justice, power, and glory.'
      ],
      paragraphs_te: [
        'శతశృంగ పర్వత అరణ్యంలో వేటాడుతున్న పాండురాజు పొరపాటున జింకల రూపంలో ఉన్న కిందమ మునిని బాణంతో కొట్టాడు. ప్రాణాలు విడిచే ముందు ఆ ముని: "నీవు కామంతో భార్యను తాకిన మరుక్షణమే మరణిస్తావు" అని శపించాడు.',
        'తీవ్ర పశ్చాత్తాపంతో పాండురాజు రాజ్యాన్ని త్యజించి కుంతి, మాద్రులతో కలిసి వనవాసానికి వెళ్ళాడు. సంతానం లేకపోవడంతో కురువంశానికి తర్పణాలు ఉండవని బాధపడ్డాడు.',
        'అప్పుడు కుంతీదేవి చిన్నతనంలో దూర్వాస మహర్షి ఇచ్చిన దివ్య మంత్ర వరాన్ని తెలిపింది; ఆ మంత్రంతో దేవతలను ప్రార్థించి సంతానాన్ని పొందవచ్చని చెప్పగా పాండురాజు ఆనందంతో దేవతలను ప్రార్థించమన్నాడు.'
      ],
      paragraphs_hi: [
        'शतश्रृंग पर्वत पर शिकार करते समय महाराज पांडु ने मृग रूपी किंदम मुनि को अनजाने में बाण मार दिया। मरते हुए मुनि ने शाप दिया: "काम-भाव से स्त्री का स्पर्श करते ही तुम्हारी मृत्यु हो जाएगी!"',
        'शोकग्रस्त होकर पांडु ने राजपाट त्याग दिया और दोनों रानियों (कुंती व माद्री) के साथ वन में संन्यास ले लिया। संतानहीन होने की चिंता उन्हें सताने लगी।',
        'तब माता कुंती ने महर्षि दुर्वासा द्वारा दिए गए गुप्त मंत्र के बारे में बताया, जिससे किसी भी देवता का आह्वान कर दिव्य संतान पाई जा सकती थी।'
      ],
      dialogueQuote: '"Invoke Dharma, Vayu, and Indra, O noble Queen! Bring forth sons who will illuminate the universe with righteousness."',
      dialogueQuote_te: '"ధర్మదేవుడు, వాయుదేవుడు, ఇంద్రులను ప్రార్థించు కుంతీ! ఈ లోకాన్ని ధర్మంతో పాలించే పుత్రులను పొందుదాం."',
      dialogueQuote_hi: '"धर्मराज, पवनदेव और इंद्र का आह्वान करो कुंती! हमें ऐसे पुत्र चाहिए जो धर्म और पराक्रम से संसार को आलोकित करें।"',
      speaker: 'King Pandu to Kunti',
      speaker_te: 'కుంతీదేవితో పాండురాజు',
      speaker_hi: 'महाराज पांडु का कुंती से निवेदन',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'Queen Kunti invoking the sun and celestial deities with folded hands on the sacred mountain.',
      imageCaption_te: 'శతశృంగ పర్వతంపై మంత్రాలతో దేవతలను ఆవాహన చేస్తున్న కుంతీదేవి.',
      imageCaption_hi: 'पर्वत शिखर पर मंत्रोच्चार द्वारा देवताओं का आह्वान करतीं माता कुंती।'
    },
    {
      pageNumber: 2,
      title: 'Five Sons of Gods & One Hundred Sons of Clay',
      title_te: 'పంచ పాండవుల ఉద్భవం & నూరుగురు కౌరవుల జననం',
      title_hi: 'पाँच पांडवों और सौ कौरवों का अलौకिक जन्म',
      sceneTag: 'Hastinapur & The Forest Ashrams',
      sceneTag_te: 'హస్తినాపురం & శతశృంగ ఆశ్రమం',
      sceneTag_hi: 'हस्तिनापुर का राजमहल और वन',
      hookLine: 'From divine invocations rose the five Pandavas; from a mass of flesh split into jars emerged the hundred Kauravas.',
      hookLine_te: 'దేవతా అంశలతో పాండవులు; వ్యాసుని అనుగ్రహంతో నేతి కుండల్లో పుట్టిన నూరుగురు కౌరవులు.',
      hookLine_hi: 'देवताओं के वरदान से पाँच पाण्डव जन्मे और घी के घड़ों से सौ कौरवों की उत्पत्ति हुई।',
      paragraphs: [
        'Through the sacred mantra, Kunti gave birth to Yudhishthira (son of Dharma), Bhima (son of Vayu, mighty as ten thousand elephants), and Arjuna (son of Indra, destined to be the world’s greatest archer). Generously, Kunti shared the mantra with Madri, who invoked the twin Ashwin gods and bore the handsome twins Nakula and Sahadeva.',
        'Meanwhile in Hastinapur, Queen Gandhari was pregnant for two years. Distressed that Kunti had already given birth to Yudhishthira, Gandhari struck her womb in frustration, expelling a hard ball of lifeless flesh. She was about to cast it away when Sage Vyasa arrived.',
        'Vyasa divided the ball of flesh into one hundred and one pieces, placing each in a jar filled with ghee and secret herbs. In due time, the eldest jar broke open, yielding a boy who brayed like an ass: Duryodhana! Soon followed ninety-nine brothers and one sister, Dusshala. Terrible omens rattled Hastinapur at Duryodhana’s birth, prompting Vidura to advise abandoning the child to save the dynasty, but blind fatherly attachment blinded Dhritarashtra.'
      ],
      paragraphs_te: [
        'కుంతీదేవి మంత్రంతో ధర్మరాజు (యమధర్మరాజు అంశ), భీముడు (వాయుదేవుని అంశ), అర్జునుడు (దేవేంద్రుని అంశ) జన్మించారు. మాద్రికి ఆ మంత్రం ఉపదేశించగా అశ్వినీ దేవతల అంశతో నకుల-సహదేవులు జన్మించారు. ఈ ఐదుగురే పంచపాండవులు.',
        'హస్తినాపురంలో గాంధారి రెండేళ్ళు గర్భం మోసి, కుంతికి ముందే కొడుకు పుట్టాడని విని నిరాశతో కడుపుపై కొట్టుకోగా మాంసపు ముద్ద బయటపడింది. వేదవ్యాస మహర్షి వచ్చి ఆ ముద్దను 101 భాగాలుగా చేసి నేతి కుండలలో ఉంచాడు.',
        'మొదటి కుండ నుండి దుర్యోధనుడు గాడిదలా అరుస్తూ పుట్టాడు. తర్వాత 99 మంది సోదరులు, దుశ్శల అనే చెల్లెలు పుట్టారు. దుర్యోధనుడు పుట్టినప్పుడు అశుభ శకునాలు రావడంతో విదురుడు ఆ బాలుడిని వదిలేయమని చెప్పినా, ధృతరాష్ట్రుడు పుత్రమోహంతో వినలేదు.'
      ],
      paragraphs_hi: [
        'कुंती के आह्वान पर धर्मराज से युधिष्ठिर, वायुदेव से असीम बलशाली भीम, और इंद्रदेव से सर्वश्रेष्ठ धनुर्धर अर्जुन का जन्म हुआ। माद्री ने अश्विनीकुमारों से नकुल और सहदेव को प्राप्त किया।',
        'उधर हस्तिनापुर में गांधारी के गर्भ से एक मांस-पिंड निकला। महर्षि व्यास ने उस पिंड के १०१ टुकड़े कर उन्हें घृत-पूर्ण पात्रों में सुरक्षित रखवाया।',
        'समय आने पर पहले पात्र से दुर्योधन का जन्म हुआ जो गदहे की तरह चीखा। उसके जन्म पर उल्कापात और अपशकुन हुए। विदुर ने कुल-रक्षा हेतु इस बालक के त्याग का परामर्श दिया, किंतु धृतराष्ट्र के पुत्र-मोह ने अधर्म को आश्रय दिया।'
      ],
      dialogueQuote: '"Abandon this one child to save the entire clan, O King! When he brayed at birth, jackals howled in the royal city."',
      dialogueQuote_te: '"రాజా! కురువంశాన్ని కాపాడటానికి ఈ ఒక్కడిని విడిచిపెట్టు. వీడు పుట్టగానే నక్కలు ఊళ వేశాయి, అరిష్టం పొంచి ఉంది."',
      dialogueQuote_hi: '"कुल की रक्षा हेतु इस एक बालक का त्याग कर दीजिए महाराज! इसके जन्मते ही अमंगलकारी शियार रोने लगे हैं।"',
      speaker: 'Vidura warning King Dhritarashtra',
      speaker_te: 'ధృతరాష్ట్రుడిని హెచ్చరిస్తున్న విదురుడు',
      speaker_hi: 'धृतराष्ट्र को चेतावनी देते महात्मा विदुर',
      imageUrl: '/assets/wallpapers/bhima.jpg',
      imageCaption: 'The five young Pandava brothers in the forest, surrounded by sages and wildlife.',
      imageCaption_te: 'శతశృంగ ఆశ్రమంలో ఋషుల ఆశీస్సులతో పెరుగుతున్న ఐదుగురు పాండవులు.',
      imageCaption_hi: 'ऋषि आश्रम में संतों के सान्निध्य में बड़े होते पाँचों पांडव बालक।'
    },
    {
      pageNumber: 3,
      title: 'Death of Pandu & Return to Hastinapur',
      title_te: 'పాండురాజు నిర్యాణం & హస్తినాపుర ప్రవేశం',
      title_hi: 'महाराज पांडु की मृत्यु और पांडवों का हस्तिनापुर आगमन',
      sceneTag: 'Forest of Shatashringa to Royal Gates',
      sceneTag_te: 'అడవి నుండి హస్తినాపుర మహాద్వారం వరకు',
      sceneTag_hi: 'वन से हस्तिनापुर के भव्य द्वार तक',
      hookLine: 'A spring afternoon of fateful passion ended in tragedy, bringing the fatherless boys into a den of jealousy.',
      hookLine_te: 'వసంత ఋతువు తెచ్చిన విషాదం; అనాథలైన పాండవులను హస్తినాపురానికి చేర్చిన కుంతి.',
      hookLine_hi: 'नियति का क्रूर प्रहार: पांडु का देहांत और कुंती का अनाथ बालकों के साथ लौटना।',
      paragraphs: [
        'One intoxicating spring afternoon, enchanted by blooming blossoms, King Pandu forgot the sage’s curse in a surge of desire for Madri. The moment he embraced her, his heart ceased, and he fell lifeless upon the forest floor.',
        'Madri entered the funeral pyre with her husband, entrusting her twin boys Nakula and Sahadeva to Queen Kunti. Guided by hermit sages, the grieving Kunti walked hundreds of miles back to Hastinapur with the five fatherless boys.',
        'Grandfather Bhishma, Satyavati, and Dhritarashtra welcomed the young princes into the palace. The citizens rejoiced at Yudhishthira’s gentle wisdom and Bhima’s Herculean strength. But Duryodhana and his brothers watched their cousins with burning resentment, fearful that Yudhishthira would claim the throne.'
      ],
      paragraphs_te: [
        'ఒక వసంతకాలపు మధ్యాహ్నం పాండురాజు కామవశుడై మాద్రిని కౌగిలించుకోగానే కిందమ ముని శాపం తగిలి అక్కడికక్కడే ప్రాణాలు విడిచాడు.',
        'మాద్రి భర్తతో పాటు చితి ఎక్కి ఆత్మత్యాగం చేస్తూ, తన పిల్లలైన నకుల సహదేవులను కుంతీదేవి చేతుల్లో పెట్టింది. ఋషుల రక్షణలో కుంతి ఐదుగురు అనాథ బాలురను తీసుకుని హస్తినాపురానికి తిరిగి వచ్చింది.',
        'భీష్ముడు వారిని సాదరంగా ఆహ్వానించాడు. ధర్మరాజు వినయం, భీముని అపార బలం చూసి ప్రజలు మురిసిపోయారు. కానీ దుర్యోధనుని గుండెల్లో అసూయ అగ్నిలా రాజుకుంది.'
      ],
      paragraphs_hi: [
        'वसंत ऋतु में एक दिन मुनि का शाप भूलकर पांडु ने माद्री का स्पर्श किया और उसी क्षण उनके प्राण निकल गए।',
        'माद्री ने अपने दोनों बालकों (नकुल-सहदेव) को कुंती को सौंपकर पति के साथ सती होने का निर्णय लिया। कुंती पाँचों अनाथ बालकों को लेकर हस्तिनापुर पहुँचीं।',
        'भीष्म और प्रजा ने पांडवों का भव्य स्वागत किया। भीम की शक्ति और युधिष्ठिर की धर्मनिष्ठा से प्रजा प्रसन्न थी, किंतु दुर्योधन की छाती पर ईर्ष्या के साँप लोटने लगे।'
      ],
      dialogueQuote: '"Treat Nakula and Sahadeva as your own flesh, Kunti; they have no mother now but you."',
      dialogueQuote_te: '"కుంతీ! నకుల సహదేవులను నీ కన్నబిడ్డల్లా చూసుకో; ఇకపై వారికి నీవే కన్నతల్లివి."',
      dialogueQuote_hi: '"माते कुंती! नकुल और सहदेव को अपने उर से लगाकर रखना, अब संसार में तुम्हारे सिवा उनका कोई नहीं।"',
      speaker: 'Queen Madri’s parting prayer',
      speaker_te: 'మాద్రి చివరి మాటలు',
      speaker_hi: 'रानी माद्री की अंतिम प्रार्थना',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'Queen Kunti bringing the five young Pandavas before Grandfather Bhishma and King Dhritarashtra.',
      imageCaption_te: 'భీష్ముని ఎదుట ఐదుగురు పాండవులను నిలబెట్టిన కుంతీదేవి.',
      imageCaption_hi: 'पितामह भीष्म के सम्मुख पाँचों बालकों को प्रस्तुत करतीं माता कुंती।'
    },
    {
      pageNumber: 4,
      title: 'Guru Drona and the Well of the Golden Ring',
      title_te: 'గురు ద్రోణాచార్యుని రాక & బావిలో ఉంగరం లీల',
      title_hi: 'गुरु द्रोणाचार्य का आगमन और कुएं से अंगूठी निकालना',
      sceneTag: 'Outskirts of Hastinapur',
      sceneTag_te: 'హస్తినాపుర పొలిమేరల్లోని పాడుబడ్డ బావి',
      sceneTag_hi: 'हस्तिनापुर की सीमा पर सूखा कुआं',
      hookLine: 'A ball dropped into a deep well revealed a master of Astra-vidya to the astonished princes.',
      hookLine_te: 'బావిలో పడిన బంతిని గడ్డి పోచలతో బయటకు తీసిన అద్భుత గురువు ద్రోణుడు.',
      hookLine_hi: 'तिनकों के तीर बनाकर कुएं से गेंद और अंगूठी निकालने वाले महान धनुर्धर का चमत्कार।',
      paragraphs: [
        'One day while playing ball outside the city walls, the princes watched their wooden ball drop into a deep, dry well. As they peered helplessly inside, an impoverished Brahmin with matted hair and piercing eyes approached them.',
        'Laughing at their warrior helplessness, the Brahmin pulled off his gold signet ring and threw it into the dark well as well. "Behold the power of archery!" he proclaimed.',
        'He plucked a blade of grass (isika reed), chanted a mantra, and shot it straight into the ball. He shot another blade that pierced the end of the first, creating a continuous chain of grass reeds with which he effortlessly reeled the ball up! Then with a single swift arrow, he hoisted his ring back. Stunned, the boys ran to Bhishma, who immediately recognized Dronacharya and appointed him royal preceptor.'
      ],
      paragraphs_te: [
        'ఒకనాడు రాకుమారులు బంతి ఆట ఆడుతుండగా వారి బంతి ఒక లోతైన బావిలో పడిపోయింది. దానిని తీయలేక వారు నిలబడి ఉండగా, చిరిగిన వస్త్రాలతో ఒక బ్రాహ్మణుడు అక్కడికి వచ్చాడు.',
        'వారి నిస్సహాయతను చూసి నవ్వి, తన చేతి ఉంగరాన్ని కూడా బావిలో పడేసి: "క్షత్రియులారా! ధనుర్విద్య శక్తిని చూడండి" అని ఒక గడ్డి పోచను మంత్రించి వింటినారి ద్వారా బంతిపై కొట్టాడు.',
        'ఆ పోచ వెనుక మరొక పోచను కొడుతూ గడ్డి పోచల గొలుసును తయారుచేసి బంతిని సులువుగా పైకి లాగాడు; ఇంకొక బాణంతో ఉంగరాన్ని పైకి లేపాడు. పిల్లలు పరిగెత్తుకుంటూ వెళ్ళి చెప్పగా, భీష్ముడు ఆ బ్రాహ్మణుడు ద్రోణాచార్యుడేనని గ్రహించి రాజగురువుగా నియమించాడు.'
      ],
      paragraphs_hi: [
        'एक दिन हस्तिनापुर के राजकुमारों की खेलने वाली गेंद एक गहरे कुएं में गिर गई। जब वे उसे निकाल न सके, तो एक तेजस्वी ब्राह्मण वहाँ आए।',
        'उन्होंने राजकुमारों की विवशता पर हँसकर अपनी अंगूठी भी कुएं में फेंक दी। फिर उन्होंने एक सींक (घास का तिनका) अभिमंत्रित कर गेंद में मारा। फिर दूसरी सींक से पहली सींक को जोड़ते हुए सींकों की जंजीर बनाकर गेंद बाहर निकाल ली!',
        'फिर एक ही बाण से अपनी अंगूठी भी निकाल ली। इस चमत्कार को देखकर बालक दौड़कर भीष्म के पास गए। पितामह समझ गए कि यह साक्षात् द्रोणाचार्य हैं, और उन्हें कुल-गुरु नियुक्त किया।'
      ],
      dialogueQuote: '"What use is your Kshatriya birth if you cannot even rescue a ball from a well? Watch the power of Astra-vidya!"',
      dialogueQuote_te: '"బావిలో పడిన బంతిని కూడా తీయలేని క్షత్రియులు మీరెందుకు? ధనుర్వేద మహత్తును కనులారా చూడండి!"',
      dialogueQuote_hi: '"धिक्कार है तुम्हारे क्षत्रियत्व पर जो कुएं से गेंद भी नहीं निकाल सकते! देखो अस्त्र-विद्या का चमत्कार!"',
      speaker: 'Drona teasing the young princes',
      speaker_te: 'రాకుమారులను ప్రశ్నిస్తున్న ద్రోణుడు',
      speaker_hi: 'बालकों से द्रोणाचार्य का कथन',
      imageUrl: '/assets/wallpapers/dronacharya.jpg',
      imageCaption: 'Dronacharya effortlessly drawing the ball from the deep well with linked grass blades.',
      imageCaption_te: 'గడ్డి పోచలతో బావి నుండి బంతిని పైకి లాగుతున్న ద్రోణాచార్యుడు.',
      imageCaption_hi: 'तिनकों की श्रृंखला से कुएं से गेंद निकालते आचार्य द्रोण।'
    },
    {
      pageNumber: 5,
      title: 'The Test of the Bird’s Eye & Arjuna’s Night Archery',
      title_te: 'పిట్ట కన్ను పరీక్ష & రాత్రిపూట అర్జునుని శబ్దవేధి సాధన',
      title_hi: 'चिड़िया की आँख का लक्ष्य और अर्जुन का रात्रि-अभ्यास',
      sceneTag: 'The Gurukula Forest of Drona',
      sceneTag_te: 'ద్రోణుని గురుకుల వనం',
      sceneTag_hi: 'गुरु द्रोण का तपोवन',
      hookLine: 'He saw neither tree nor sky, neither feathers nor beak; only the pupil of the eye existed.',
      hookLine_te: 'చెట్టు లేదు, ఆకాశం లేదు, పక్షి కూడా లేదు; కేవలం కనిపించింది ఆ పిట్ట కంటి నల్లగుడ్డు మాత్రమే.',
      hookLine_hi: 'न पेड़ दिखा, न पत्तियां, न चिड़िया; केवल और केवल आँख की पुतली दिखाई दी।',
      paragraphs: [
        'Dronacharya took all one hundred and five princes to the forest to test their focus. He placed a toy wooden bird high upon a tree branch. Calling Yudhishthira first, he asked: "Look upon that bird, Prince. Tell me, what do you see?" Yudhishthira replied: "I see the tree, the sky, the bird, and you, my preceptor." Drona told him to step aside.',
        'One by one, Duryodhana, Bhima, and the others stepped up, describing the foliage, the fruit, and the branch. Drona dismissed them all in disappointment.',
        'Finally, young Arjuna stepped forward and drew his bow. "What do you see, Arjuna?" asked Drona. "I see only the bird’s eye," whispered Arjuna. "Do you see the tree or me?" pressed Drona. "I see neither tree nor you, Gurudeva. I see only the black pupil of the bird’s right eye!" "Shoot!" roared Drona with joy. The arrow snapped the bird’s head clean off in an instant.'
      ],
      paragraphs_te: [
        'ద్రోణుడు రాకుమారుల ఏకాగ్రతను పరీక్షించడానికి చెట్టుపై ఒక చెక్క పిట్టను ఉంచాడు. మొదట ధర్మరాజును పిలిచి: "నీకు ఏమి కనిపిస్తోంది?" అని అడిగాడు. ధర్మరాజు: "నాకు చెట్టు, ఆకాశం, పిట్ట, మరియు మీరూ కనిపిస్తున్నారు" అన్నాడు. ద్రోణుడు అతడిని పక్కకు తప్పుకోమన్నాడు.',
        'దుర్యోధనుడు, భీముడు మొదలైనవారందరూ చెట్టు కొమ్మలు, ఆకులు కనిపిస్తున్నాయని చెప్పారు. ద్రోణుడు నిరాశ చెందాడు.',
        'చివరగా అర్జునుడు విల్లు ఎక్కుపెట్టి నిలబడ్డాడు. "అర్జునా! నీకేం కనిపిస్తోంది?" అని ద్రోణుడు అడగగా, "గురుదేవా! నాకు చెట్టు కనిపించడం లేదు, మీరూ కనిపించడం లేదు; కేవలం ఆ పిట్ట కంటి పాప మాత్రమే కనిపిస్తోంది!" అన్నాడు. "బాణం వదులు!" అని ద్రోణుడు అరవగా, ఆ బాణం సూటిగా పిట్ట కంటిని ఛేదించింది.'
      ],
      paragraphs_hi: [
        'द्रोणाचार्य ने एक दिन वृक्ष की शाखा पर एक नकली चिड़िया रखकर शिष्यों की परीक्षा ली। युधिष्ठिर से पूछा: "तुम्हें क्या दिख रहा है?" युधिष्ठिर ने कहा: "मुझे वृक्ष, पत्ते, चिड़िया और आप दिखाई दे रहे हैं।" द्रोण ने उन्हें धनुष रखने को कहा।',
        'दुर्योधन, भीम आदि सभी ने वृक्ष और आकाश दिखने की बात कही। द्रोण अप्रसन्न हुए।',
        'अंत में अर्जुन ने प्रत्यंचा खींची। द्रोण ने पूछा: "पार्थ! क्या तुम्हें पेड़ दिख रहा है?" अर्जुन बोले: "नहीं गुरुदेव!" "क्या चिड़िया दिख रही है?" "नहीं गुरुदेव! मुझे केवल उस चिड़िया की आँख की काली पुतली दिखाई दे रही है!" द्रोण बोले: "बाण छोड़ो!" और बाण ने सीधे आँख को भेद दिया।'
      ],
      dialogueQuote: '"I see neither the tree nor your feet, master. I see only the pupil of the eye, and nothing else exists in this universe."',
      dialogueQuote_te: '"గురుదేవా! నాకు ఈ సృష్టిలో ఏదీ కనిపించడం లేదు; కేవలం ఆ పిట్ట కంటి నల్లగుడ్డు మాత్రమే నా కంటికి ఆనుతోంది."',
      dialogueQuote_hi: '"गुरुदेव! मुझे न वृक्ष दिख रहा है, न आप। मुझे केवल लक्ष्य—उस चिड़िया की आँख—दिखाई दे रही है।"',
      speaker: 'Arjuna during the test of the bird’s eye',
      speaker_te: 'పిట్ట కన్ను చూస్తున్న అర్జునుడు',
      speaker_hi: 'अर्जुन का एकाग्र लक्ष्य-संधान',
      imageUrl: '/assets/wallpapers/arjuna.jpg',
      imageCaption: 'Young Arjuna taking dead aim at the wooden bird under the proud gaze of Dronacharya.',
      imageCaption_te: 'గురువు ద్రోణుని ఎదుట పిట్ట కంటిపై గురిపెట్టిన అర్జునుడు.',
      imageCaption_hi: 'आचार्य द्रोण की उपस्थिति में चिड़िया की आँख पर संधान करते वीर अर्जुन।'
    },
    {
      pageNumber: 6,
      title: 'Ekalavya’s Devotion & The Severed Thumb',
      title_te: 'ఏకలవ్యుని అసమాన గురుభక్తి & బొటనవేలి బలిదానం',
      title_hi: 'एकलव्य की गुरुभक्ति और अंगूठे की गुरुदक्षिणा',
      sceneTag: 'Deep Forest of the Nishadas',
      sceneTag_te: 'నిషాదుల దట్టమైన అరణ్యం',
      sceneTag_hi: 'निषादों का सघन वन',
      hookLine: 'A clay idol taught what the royal academy could not; yet royal prejudice demanded a terrible price.',
      hookLine_te: 'మట్టి ప్రతిమ ముందు సాధించిన అద్భుత విద్య; రాజనీతి కోరిన కఠిన గురుదక్షిణ.',
      hookLine_hi: 'मिट्टी की मूरत से सीखी अलौकिक विद्या और गुरु-वचन के लिए दिया गया सर्वोच्च बलिदान।',
      paragraphs: [
        'A young Nishada tribal prince named Ekalavya approached Dronacharya, pleading to learn archery. Bound by royal duty to teach only royal Kshatriyas, Drona gently refused. Undeterred, Ekalavya sculpted a clay idol of Drona in the deep forest and practiced before it daily with boundless faith and devotion.',
        'Years later, the Kuru princes were hunting in the woods when their dog ran ahead and began barking loudly at an ascetic archer. In seconds, seven arrows shot into the dog’s mouth with such breathtaking precision that the animal was completely silenced without a single drop of blood spilled!',
        'Stunned, Drona investigated and found Ekalavya touching his feet. Remembering his promise that no archer should surpass Arjuna, Drona asked for his Guru Dakshina: "Give me your right thumb, boy." Without a flicker of hesitation or sorrow, Ekalavya drew his hunting knife, sliced off his right thumb, and laid it at Drona’s feet, immortalizing his name forever in the annals of devotion.'
      ],
      paragraphs_te: [
        'నిషాద రాకుమారుడైన ఏకలవ్యుడు విలువిద్య నేర్పమని ద్రోణుడిని కోరగా, రాజధర్మం వల్ల ద్రోణుడు నిరాకరించాడు. కానీ ఏకలవ్యుడు నిరుత్సాహపడక, అడవిలో ద్రోణుని మట్టి విగ్రహాన్ని చేసుకుని రోజూ పూజిస్తూ స్వయంగా విలువిద్యను సాధించాడు.',
        'ఒకనాడు పాండవుల వేట కుక్క అడవిలో ఏకలవ్యుని చూసి మొరుగుతుండగా, కుక్కకు రక్తం బొట్టు రాకుండా ఏకకాలంలో ఏడు బాణాలతో దాని నోటిని మూసేశాడు! ఈ అద్భుతాన్ని చూసి ద్రోణుడు ఆశ్చర్యపోయాడు.',
        'అర్జునుడిని మించిన విలుకాడు ఉండకూడదన్న పాత ప్రతిజ్ఞ గుర్తుకొచ్చి, ద్రోణుడు గురుదక్షిణగా ఏకలవ్యుని కుడిచేతి బొటనవేలిని కోరాడు. ఏకలవ్యుడు ఏమాత్రం సంకోచించక, నవ్వుతూ తన బొటనవేలిని కోసి గురువు పాదాల వద్ద సమర్పించాడు.'
      ],
      paragraphs_hi: [
        'निषाद राजकुमार एकलव्य धनुर्विद्या सीखने द्रोण के पास आया, किंतु राजकुल के नियमों के कारण द्रोण ने मना कर दिया। एकलव्य ने वन में द्रोण की मिट्टी की प्रतिमा बनाई और श्रद्धा से अभ्यास करने लगा।',
        'एक दिन पांडवों का कुत्ता भौंकता हुआ एकलव्य के पास पहुँचा। एकलव्य ने पलक झपकते ही कुत्ते के मुँह में सात बाण इस प्रकार मारे कि एक बूँद खून बहे बिना उसका भौंकना बंद हो गया!',
        'यह देखकर द्रोण चकित रह गए। अर्जुन को सर्वश्रेष्ठ बनाने के वचन से बँधे द्रोण ने गुरुदक्षिणा में एकलव्य का दायाँ अंगूठा माँग लिया। निष्ठावान एकलव्य ने बिना किसी क्षोभ के अपना अंगूठा काटकर गुरु के चरणों में रख दिया।'
      ],
      dialogueQuote: '"If you consider me your preceptor, boy, grant me your right thumb as Guru Dakshina."',
      dialogueQuote_te: '"నన్ను నీ గురువుగా భావిస్తే, నీ కుడిచేతి బొటనవేలిని నాకు గురుదక్షిణగా సమర్పించు."',
      dialogueQuote_hi: '"यदि तुम मुझे अपना गुरु मानते हो, तो गुरुदक्षिणा में मुझे अपने दाहिने हाथ का अंगूठा भेंट करो।"',
      speaker: 'Dronacharya asking for Guru Dakshina',
      speaker_te: 'గురుదక్షిణ అడుగుతున్న ద్రోణాచార్యుడు',
      speaker_hi: 'गुरुदक्षिणा माँगते द्रोणाचार्य',
      imageUrl: '/assets/wallpapers/dronacharya.jpg',
      imageCaption: 'Ekalavya bowing with divine devotion before the clay idol of Guru Drona.',
      imageCaption_te: 'మట్టి ద్రోణుని విగ్రహం ఎదుట చేతులు జోడించి నమస్కరిస్తున్న ఏకలవ్యుడు.',
      imageCaption_hi: 'गुरु द्रोण की मिट्टी की प्रतिमा के सामने नतमस्तक वीर एकलव्य।'
    },
    {
      pageNumber: 7,
      title: 'Guru Dakshina & The Humiliation of King Drupada',
      title_te: 'ద్రోణుని అసలైన గురుదక్షిణ & ద్రుపదుని పరాభవం',
      title_hi: 'द्रुपद का पराभव और द्रोण का प्रतिशोध',
      sceneTag: 'Panchala Capital Kampilya',
      sceneTag_te: 'పాంచాల రాజధాని కాంపిల్యం',
      sceneTag_hi: 'पांचाल की राजधानी कांपिल्य',
      hookLine: 'A broken childhood friendship settled by force of arms, splitting a kingdom into North and South.',
      hookLine_te: 'చిన్ననాటి స్నేహాన్ని అహంకారంతో అవమానించిన ద్రుపదుడిని బంధించి తెచ్చిన అర్జునుడు.',
      hookLine_hi: 'अहंकारी राजा द्रुपद को बंदी बनाकर द्रोण के चरणों में डालना और पांचाल का विभाजन।',
      paragraphs: [
        'When education was complete, Dronacharya assembled the princes and revealed his true Guru Dakshina: "March upon King Drupada of Panchala, defeat his army, and drag him before me in chains!" (Drupada had earlier insulted Drona in his poverty, sneering that a king and a beggar could never be friends).',
        'Duryodhana, Karna, and the Kauravas attacked first, but Drupada routed them with blistering cavalry charges. The Kauravas fled in disarray.',
        'Then Arjuna and Bhima charged the Panchala citadel. While Bhima crushed the elephant corps, Arjuna breached the palace, captured King Drupada alive on his chariot, and placed him bound before Guru Drona. Smiling magnanimously, Drona divided Panchala in two, keeping Northern Panchala (Ahichhatra) for himself and returning Southern Panchala to Drupada: "Now we are equal sovereigns, Drupada. Now can we be friends?" Drupada burned with silent vengeance, setting the stage for future fire sacrifices.'
      ],
      paragraphs_te: [
        'విద్యాభ్యాసం పూర్తయ్యాక ద్రోణుడు గురుదక్షిణ అడిగాడు: "పాంచాల రాజు ద్రుపదుడిని యుద్ధంలో ఓడించి, బంధించి నా పాదాల వద్ద నిలబెట్టండి!" (పూర్వం ద్రుపదుడు ద్రోణుని పేదరికాన్ని ఎగతాళి చేస్తూ రాజుకు యాచకుడికి స్నేహం కుదరదని అవమానించాడు).',
        'దుర్యోధనుడు మొదట దాడి చేసి ద్రుపదుని చేతిలో ఘోరంగా ఓడిపోయి పారిపోయాడు. అప్పుడు అర్జునుడు, భీముడు రంగంలోకి దిగారు.',
        'భీముడు సైన్యాన్ని తుత్తునియలు చేయగా, అర్జునుడు ఒంటిచేత్తో ద్రుపదుడిని సజీవంగా బంధించి ద్రోణుని ముందు నిలబెట్టాడు. ద్రోణుడు ద్రుపదుని రాజ్యాన్ని సగం తన వద్ద ఉంచుకుని (ఉత్తర పాంచాలం), మిగిలిన సగం ఇచ్చి: "ఇప్పుడు మనం సమానులమైన రాజులం, మిత్రులం కావచ్చా?" అని వదిలేశాడు. ఈ అవమానంతో ద్రుపదుడు ద్రోణుని చంపే కొడుకు కోసం యజ్ఞం చేయడానికి పూనుకున్నాడు.'
      ],
      paragraphs_hi: [
        'शिक्षा पूर्ण होने पर द्रोण ने गुरुदक्षिणा माँगी: "पांचाल नरेश द्रुपद को बंदी बनाकर मेरे चरणों में लाओ!" (द्रुपद ने निर्धन द्रोण का उपहास कर कहा था कि राजा और भिक्षुक कभी मित्र नहीं हो सकते)।',
        'कौरवों ने पहले आक्रमण किया किंतु द्रुपद की सेना से पराजित होकर भाग खड़े हुए।',
        'तब अर्जुन और भीम ने आक्रमण किया। अर्जुन ने द्रुपद को जीवित बंदी बना लिया और द्रोण के चरणों में डाल दिया। द्रोण ने आधा राज्य लेकर द्रुपद को आधा लौटाते हुए कहा: "अब हम दोनों बराबर के राजा हैं, अब तो मित्रता हो सकती है?" अपमानित द्रुपद ने द्रोण-वध हेतु पुत्र-कामेष्टि यज्ञ का संकल्प लिया।'
      ],
      dialogueQuote: '"A king and a beggar cannot be friends, Drupada. But two equal kings may share peace. Take half your kingdom back."',
      dialogueQuote_te: '"రాజుకు యాచకుడికి స్నేహం ఉండదు ద్రుపదా! కానీ ఇద్దరు సమాన రాజులకు స్నేహం సాధ్యమే. నీ సగం రాజ్యాన్ని నీకే ఇస్తున్నాను."',
      dialogueQuote_hi: '"द्रुपद! राजा और भिक्षुक में मित्रता नहीं हो सकती, किंतु दो समान राजा मित्र हो सकते हैं। जाओ, आधा राज्य तुम्हारा हुआ।"',
      speaker: 'Drona forgiving King Drupada',
      speaker_te: 'ద్రుపదుడికి రాజ్యం పంచుతున్న ద్రోణుడు',
      speaker_hi: 'द्रुपद से आचार्य द्रोण के वचन',
      imageUrl: '/assets/wallpapers/dronacharya.jpg',
      imageCaption: 'Arjuna presenting the captured King Drupada before Guru Dronacharya.',
      imageCaption_te: 'బంధీగా పట్టుబడిన ద్రుపదుడిని ద్రోణాచార్యునికి అప్పగిస్తున్న అర్జునుడు.',
      imageCaption_hi: 'द्रोणाचार्य के समक्ष बंदी द्रुपद को प्रस्तुत करते वीर अर्जुन।'
    },
    {
      pageNumber: 8,
      title: 'The Tournament of Champions & Karna’s Coronation',
      title_te: 'హస్తినాపుర రంగావతరణం & కర్ణునికి అంగరాజ్య పట్టాభిషేకం',
      title_hi: 'रंगभूमि का द्वंद्व और कर्ण का अंगराज्याभिषेक',
      sceneTag: 'Grand Arena of Hastinapur',
      sceneTag_te: 'హస్తినాపుర మహా రంగస్థలం',
      sceneTag_hi: 'हस्तिनापुर की भव्य रंगभूमि',
      hookLine: 'A challenge born from destiny: when caste barred a genius, royal friendship crowned him king.',
      hookLine_te: 'కుల వివక్ష వల్ల తలెత్తిన అవమానం; దుర్యోధనుని అండతో అంగరాజుగా మారిన కర్ణుడు.',
      hookLine_hi: 'जब कुल की मर्यादा ने प्रतिभा को ललकारा, तब दुर्योधन की मित्रता ने कर्ण को मुकुट पहनाया।',
      paragraphs: [
        'A magnificent royal tournament was held in Hastinapur to showcase the princes’ martial brilliance. Spectators gasped as Arjuna performed celestial feats, summoning fire, wind, and water with his bow. He was hailed by all as the supreme warrior on earth.',
        'Suddenly, a thunderous roar silenced the stadium. A radiant youth entered the arena like a blazing sun, wearing golden armor and celestial earrings that melded with his flesh. He duplicated every single one of Arjuna’s feats with effortless mastery, then challenged Arjuna to single combat!',
        'When preceptor Kripacharya demanded Karna reveal his royal lineage—stating princes duel only with princes—Karna hung his head in humiliation as Bhima mocked him as a charioteer’s son. Duryodhana immediately stepped forward: "Valour, not birth, makes a king!" There on the arena sand, Duryodhana poured sacred waters, crowned Karna King of Anga, and forged an unbreakable bond of loyalty that sealed the destiny of the Kurus.'
      ],
      paragraphs_te: [
        'రాకుమారుల విలువిద్య ప్రదర్శనకు హస్తినాపురంలో భారీ రంగస్థలం సిద్ధమైంది. అర్జునుడు అగ్ని, వాయు, వరుణాస్త్రాలను ప్రదర్శిస్తూ అందరి జయజయధ్వానాలు అందుకున్నాడు.',
        'అకస్మాత్తుగా మేఘ గర్జనలాంటి శబ్దంతో, సహజ కవచకుండలాలతో సూర్యునిలా వెలిగిపోతూ ఒక అపరిచిత వీరుడు రంగస్థలంలోకి ప్రవేశించాడు. అతడు అర్జునుడు చేసిన ప్రతి విన్యాసాన్నీ సునాయాసంగా చేసి చూపి, అర్జునుడిని ద్వంద్వ యుద్ధానికి రమ్మని సవాలు చేశాడు!',
        'అర్జునునితో పోరాడటానికి కర్ణుని కులం, వంశం ఏమిటని కృపాచార్యుడు నిలదీయగా, భీముడు సూతపుత్రుడని పరిహసించాడు. అప్పుడు దుర్యోధనుడు ముందుకొచ్చి: "వీరత్వం ఉన్నవాడే రాజు!" అంటూ రంగస్థలంలోనే కర్ణుడికి అంగరాజ్య పట్టాభిషేకం చేశాడు. ఈ ఉపకారానికి కర్ణుడు తన జీవితాన్ని దుర్యోధనుడికి అర్పించి ప్రాణస్నేహితుడయ్యాడు.'
      ],
      paragraphs_hi: [
        'राजकुमारों के अस्त्र-कौशल प्रदर्शन हेतु रंगभूमि सजी। अर्जुन ने जब आग्नेय, वायव्य और पर्जन्य बाणों से अद्भुत करतब दिखाए, तो सबने उन्हें सर्वश्रेष्ठ घोषित किया।',
        'तभी सूर्य के समान चमकते कवच-कुंडल पहने एक तेजस्वी युवक रंगभूमि में आया। उसने अर्जुन के सभी करतब दोहराए और अर्जुन को द्वंद्वयुद्ध की चुनौती दी! वह कर्ण था।',
        'कृपाचार्य ने कहा कि राजकुमार केवल राजकुमारों से ही द्वंद्व लड़ सकते हैं, अतः कर्ण अपना कुल बताएं। भीम ने उसे "सूतपुत्र" कहकर अपमानित किया। तब दुर्योधन ने आगे आकर ललकारा: "शूरवीरता कुल से नहीं, भुजाओं के बल से पहचानी जाती है!" दुर्योधन ने तुरंत कर्ण का अंगदेश के राजा के रूप में अभिषेक किया और दोनों की अटूट मित्रता आरंभ हुई।'
      ],
      dialogueQuote: '"Caste and lineage are mere clothes; the fire in a warrior’s veins is born of virtue and steel. Karna is King of Anga!"',
      dialogueQuote_te: '"కులం పుట్టుకతో రాదు; వీరత్వమే క్షత్రియునికి నిజమైన కిరీటం. కర్ణుడు నేటి నుండి అంగదేశ చక్రవర్తి!"',
      dialogueQuote_hi: '"शूरवीर का जन्म कुल से नहीं, उसके बाहुबल से होता है। आज से कर्ण अंगदेश का अधिपति है!"',
      speaker: 'Duryodhana crowning Karna in the arena',
      speaker_te: 'కర్ణుడికి పట్టాభిషేకం చేస్తున్న దుర్యోధనుడు',
      speaker_hi: 'कर्ण का राज्याभिषेक करते दुर्योधन',
      imageUrl: '/assets/wallpapers/karna.jpg',
      imageCaption: 'Duryodhana placing the golden crown of Anga upon the head of radiant Karna.',
      imageCaption_te: 'కర్ణుని శిరస్సుపై అంగరాజ్య కిరీటాన్ని అలంకరిస్తున్న దుర్యోధనుడు.',
      imageCaption_hi: 'कर्ण के सिर पर अंगदेश का मुकुट रखते हुए युवराज दुर्योधन।'
    }
  ],

  partSummary: {
    majorEvents: [
      'Pandu kills Sage Kindama accidentally, receives the curse of celibacy, and renounces the throne.',
      'Kunti and Madri invoke Dharma, Vayu, Indra, and the Ashwins to birth the five Pandavas.',
      'Gandhari gives birth to a ball of flesh, divided by Sage Vyasa into 100 jars to yield the 100 Kauravas.',
      'Pandu dies embracing Madri; Kunti returns to Hastinapur with the five fatherless Pandavas.',
      'Drona astounds the princes at the well, is appointed preceptor, and teaches celestial Astra-vidya.',
      'Arjuna proves his unmatched single-minded focus in the test of the bird’s eye.',
      'Ekalavya masters archery before a clay idol of Drona, sacrificing his right thumb as Guru Dakshina.',
      'The Pandavas defeat King Drupada as Guru Dakshina, dividing Panchala into North and South.',
      'At the tournament, Karna challenges Arjuna; Duryodhana crowns Karna King of Anga, forging their eternal bond.'
    ],
    majorEvents_te: [
      'పాండురాజు కిందమ ముని శాపం వల్ల తపస్సు చేసి, మంత్ర బలంతో పంచ పాండవులను పొందాడు.',
      'గాంధారి మాంసపు ముద్ద నుండి వ్యాసుని అనుగ్రహంతో నూరుగురు కౌరవులు, దుశ్శల జన్మించారు.',
      'పాండురాజు మరణానంతరం కుంతి పిల్లలతో హస్తినాపురానికి తిరిగి వచ్చింది.',
      'బావిలో పడిన బంతిని గడ్డిపోచలతో తీసి ద్రోణుడు రాజగురువుగా నియమితుడయ్యాడు.',
      'పిట్ట కన్ను పరీక్షలో అర్జునుడు ఏకాగ్రతను నిరూపించి ద్రోణుని ప్రియ శిష్యుడయ్యాడు.',
      'ఏకలవ్యుడు మట్టి విగ్రహం ముందు విద్య నేర్చి, బొటనవేలిని గురుదక్షిణగా ఇచ్చాడు.',
      'పాండవులు ద్రుపదుడిని బంధించి ద్రోణునికి గురుదక్షిణగా సమర్పించి పాంచాల రాజ్యాన్ని విభజించారు.',
      'రంగస్థలంలో కర్ణుడు ప్రవేశించి అర్జునుడిని సవాలు చేయగా, దుర్యోధనుడు కర్ణునికి అంగరాజ్యాన్ని ఇచ్చాడు.'
    ],
    majorEvents_hi: [
      'किंदम मुनि के शाप के बाद पांडु ने संन्यास लिया और मंत्र शक्ति से पाँच पांडव जन्मे।',
      'व्यास जी की कृपा से घी के घड़ों से १०० कौरवों और दुःशला की उत्पत्ति हुई।',
      'पांडु की मृत्यु के बाद कुंती अनाथ बालकों के साथ हस्तिनापुर लौटीं।',
      'द्रोणाचार्य ने कुएं से गेंद निकालकर अपना अस्त्र-कौशल दिखाया और राजगुरु बने।',
      'चिड़िया की आँख की परीक्षा में अर्जुन की एकाग्रता ने इतिहास रचा।',
      'एकलव्य ने द्रोण की मिट्टी की प्रतिमा से धनुर्विद्या सीखी और अंगूठा दान किया।',
      'पांडवों ने द्रुपद को बंदी बनाकर द्रोण को गुरुदक्षिणा दी और पांचाल का विभाजन हुआ।',
      'रंगभूमि में कर्ण ने अर्जुन को ललकारा और दुर्योधन ने कर्ण को अंगराज बनाया।'
    ],
    importantCharacters: [
      'Guru Dronacharya (Preceptor of celestial Astras)',
      'Arjuna (Foremost archer of the world)',
      'Duryodhana (Eldest Kaurava consumed by jealousy)',
      'Karna (Sun-child of unshakeable loyalty and unmatched archery)',
      'Ekalavya (Emblem of pure devotion to knowledge)'
    ],
    importantCharacters_te: [
      'ద్రోణాచార్యుడు (సకల దివ్యాస్త్ర గురువు)',
      'అర్జునుడు (లోకైక ధనుర్ధారి, సవ్యసాచి)',
      'దుర్యోధనుడు (అసూయాగ్రస్తుడైన కౌరవ జ్యేష్ఠుడు)',
      'కర్ణుడు (దానశీలి, అంగరాజు, సూర్యపుత్రుడు)',
      'ఏకలవ్యుడు (నిరుపమాన గురుభక్తుడు)'
    ],
    importantCharacters_hi: [
      'गुरु द्रोणाचार्य (अस्त्र-विद्या के आचार्य)',
      'वीर अर्जुन (सर्वश्रेष्ठ धनुर्धर)',
      'दुर्योधन (ईर्ष्यालु कौरव ज्येष्ठ)',
      'कर्ण (दानवीर सूर्यपुत्र व अंगराज)',
      'एकलव्य (गुरुभक्ति के अमर प्रतीक)'
    ],
    importantRelationships: [
      'Drona & Arjuna → Teacher and favorite disciple',
      'Duryodhana & Karna → Life-and-death friendship and political alliance',
      'Drona & Ekalavya → Ideal student through faith; tragic Guru Dakshina',
      'Drona & Drupada → Childhood friends turned bitter enemies',
      'Pandavas & Kauravas → Cousins divided by deep rivalry and claim to the throne'
    ],
    importantRelationships_te: [
      'ద్రోణుడు & అర్జునుడు → గురు-శిష్యుల పవిత్ర బంధం',
      'దుర్యోధనుడు & కర్ణుడు → ప్రాణప్రదమైన మైత్రి మరియు రాజకీయ కూటమి',
      'ద్రోణుడు & ఏకలవ్యుడు → మట్టి విగ్రహ భక్తి & గురుదక్షిణ త్యాగం',
      'ద్రోణుడు & ద్రుపదుడు → శత్రువులుగా మారిన బాల్య మిత్రులు',
      'పాండవులు & కౌరవులు → సింహాసనం కోసం మొదలైన దాయాదుల పోరు'
    ],
    importantRelationships_hi: [
      'द्रोण और अर्जुन → गुरु और सर्वश्रेष्ठ शिष्य',
      'दुर्योधन और कर्ण → अटूट मित्रता और जीवन-मरण का साथ',
      'द्रोण और एकलव्य → आदर्श गुरुभक्ति और अंगूठे का त्याग',
      'द्रोण और द्रुपद → बाल सखा से घोर शत्रु',
      'पांडव और कौरव → सिंहासन के लिए चचेरे भाइयों में प्रतिस्पर्धा'
    ],
    majorDecisions: [
      'Drona’s decision to demand Ekalavya’s right thumb to keep his promise that Arjuna would have no equal.',
      'Duryodhana’s decision to crown Karna King of Anga to counter Arjuna’s archery supremacy.',
      'Karna’s pledge of eternal allegiance and life to Duryodhana in gratitude for dignity and kingship.',
      'Drupada’s vow to perform a sacrificial yajna to obtain sons capable of slaying Drona and marrying Arjuna.'
    ],
    majorDecisions_te: [
      'అర్జునుని అగ్రస్థానాన్ని కాపాడటానికి ఏకలవ్యుని బొటనవేలిని గురుదక్షిణగా అడగాలన్న ద్రోణుని నిర్ణయం.',
      'అర్జునుడిని ఎదుర్కోవడానికి కర్ణునికి తక్షణమే అంగరాజ్య పట్టాభిషేకం చేసిన దుర్యోధనుని నిర్ణయం.',
      'అవమానంలో ఆదుకున్న దుర్యోధనుడికి తన జీవితాంతం అండగా ఉంటానని కర్ణుడు చేసిన ప్రతిజ్ఞ.',
      'ద్రోణుని సంహరించే కొడుకు కోసం ద్రుపదుడు పుత్రకామేష్టి యజ్ఞం చేయాలని తీసుకున్న నిర్ణయం.'
    ],
    majorDecisions_hi: [
      'अर्जुन को सर्वश्रेष्ठ बनाए रखने हेतु एकलव्य का अंगूठा माँगने का द्रोण का निर्णय।',
      'अर्जुन के विरुद्ध कर्ण को अंगराज बनाने का दुर्योधन का कूटनीतिक निर्णय।',
      'सम्मान देने के बदले कर्ण का दुर्योधन को सर्वस्व समर्पित करने का संकल्प।',
      'द्रोण-वध हेतु द्रुपद द्वारा यज्ञ करने का निर्णय (जिससे धृष्टद्युम्न और द्रौपदी जन्मे)।'
    ],
    consequences: [
      'Karna becomes Duryodhana’s greatest weapon and unshakeable pillar for the future war.',
      'Ekalavya loses his prime shooting thumb, removing him as a challenger to Arjuna.',
      'Drupada’s humiliated heart leads directly to the birth of Dhrishtadyumna and Draupadi from the sacrificial fire.',
      'The seeds of the Kurukshetra conflict are permanently sown between Arjuna and Karna.'
    ],
    consequences_te: [
      'కర్ణుడు దుర్యోధనుడికి ప్రధాన బలమై భవిష్యత్తు యుద్ధంలో మహారథిగా నిలిచాడు.',
      'ఏకలవ్యుడు బొటనవేలు కోల్పోయి అర్జునునికి పోటీ లేకుండా పోయాడు.',
      'ద్రుపదుని అవమానం వల్ల యజ్ఞం నుండి ధృష్టద్యుమ్నుడు మరియు ద్రౌపదిల జన్మ సంభవించింది.',
      'అర్జున-కర్ణుల మధ్య జీవితాంత ద్వంద్వానికి శాశ్వత బీజం పడింది.'
    ],
    consequences_hi: [
      'कर्ण दुर्योधन का सबसे बड़ा संबल बनकर उभरा।',
      'एकलव्य का अंगूठा कटने से अर्जुन की श्रेष्ठता सुरक्षित रही।',
      'द्रुपद के अपमान के कारण यज्ञ-कुण्ड से धृष्टद्युम्न और द्रौपदी का प्राकट्य हुआ।',
      'अर्जुन और कर्ण के बीच जीवन भर की प्रतिद्वंद्विता की नींव पड़ी।'
    ]
  },

  slides: [
    {
      title: 'The Princes of Hastinapur',
      content: 'Kunti returned with the five Pandavas after Pandu’s passing. The young Pandavas and Kauravas grew up together under Bhishma’s care.',
      narrationQuote: '"Five sons of Dharma, Wind, Heaven, and Twin Gods, walking into the realm of destiny."',
      imagePrompt: 'Young Pandava princes arriving at the grand marble gates of Hastinapur',
      visualTheme: 'palace-gates'
    },
    {
      title: 'The Test of the Bird’s Eye',
      content: 'Guru Dronacharya tested the princes with a toy bird in a treetop. Arjuna alone saw only the bird’s eye, proving his peerless focus.',
      narrationQuote: '"I see only the pupil of the eye."',
      imagePrompt: 'Young Arjuna aiming a divine bow at a bird target high in a banyan tree',
      visualTheme: 'gurukul-forest'
    },
    {
      title: 'Ekalavya’s Supreme Devotion',
      content: 'Ekalavya learned archery by worshiping a clay idol of Drona, willingly surrendering his right thumb as Guru Dakshina.',
      narrationQuote: '"True learning requires unshakeable faith and unrelenting self-discipline."',
      imagePrompt: 'Ekalavya bowing before the clay statue of Guru Dronacharya',
      visualTheme: 'devotion-forest'
    }
  ]
};
