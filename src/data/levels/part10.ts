import { Level } from '../../types/game';

export const PART_10_LEVELS: Level[] = [
  // Level 91
  {
    levelNumber: 91,
    partNumber: 10,
    title: 'Day 18: Fall of Shalya & The Hidden Lake',
    title_te: '18వ రోజు: శల్య వధ & ద్వైపాయన సరస్సులో దాక్కున్న దుర్యోధనుడు',
    title_hi: '१८वाँ दिन: शल्य वध और द्वैपायन सरोवर में छिपा दुर्योधन',
    subtitle: 'The Last General & Jalastambhana Vidya',
    subtitle_te: 'చివరి సేనాపతి & జలస్తంభన విద్య',
    subtitle_hi: 'अंतिम कौरव सेनापति और जल में छिपने की माया',
    questions: [
      {
        id: 'q91-1',
        type: 'mcq',
        prompt: 'On the 18th day, who assumed final supreme command of the remaining Kaurava army, and which Pandava brother personally vanquished him in combat?',
        prompt_te: '18వ రోజున మిగిలిన కౌరవ సైన్యానికి చివరి సేనాధిపతిగా ఎవరు వ్యవహరించారు, మరియు ఏ పాండవుడు స్వయంగా అతనిని సంహరించాడు?',
        prompt_hi: '१८वें दिन कौरव सेना का अंतिम सेनापति कौन बना और किस पांडव ने युद्ध में उसका वध किया?',
        options: [
          'King Shalya of Madra, who was slain in personal combat by King Yudhishthira using a golden celestial spear (Shakti)',
          'Ashwatthama, slain by Arjuna',
          'Kripacharya, slain by Bhima',
          'Kritavarma, slain by Satyaki'
        ],
        options_te: [
          'మద్ర దేశపు రాజు శల్యుడు సేనాపతి అయ్యాడు; ధర్మరాజు తన బంగారు దివ్య శక్తి ఆయుధాన్ని (ఈటెను) ప్రయోగించి శల్యుడిని సంహరించాడు',
          'అశ్వత్థామ, అర్జునుడి చేతిలో చంపబడ్డాడు',
          'కృపాచార్యుడు, భీముడి చేతిలో చంపబడ్డాడు',
          'కృతవర్మ, సాత్యకి చేతిలో చంపబడ్డాడు'
        ],
        options_hi: [
          'मद्रराज शल्य सेनापति बने, और धर्मराज युधिष्ठिर ने एक दिव्य स्वर्ण शक्ति (भाले) का प्रयोग कर स्वयं उनका वध किया',
          'अश्वत्थामा, जिनका अर्जुन ने वध किया',
          'कृपाचार्य, जिनका भीम ने वध किया',
          'कृतवर्मा, जिनका सात्यकि ने वध किया'
        ],
        correctIndex: 0,
        learnMore: 'Yudhishthira hurled a sacred dart forged by Twashta; piercing Shalya’s chest, it felled the last Kaurava general, bringing the field battle to an end.',
        learnMore_te: 'త్వష్ట ప్రజాపతి రూపొందించిన దివ్య శక్తిని ధర్మరాజు ప్రయోగించగా, అది శల్యుని వక్షాన్ని చీల్చింది. దీంతో కౌరవ సేనానాయకత్వం అంతమైంది.',
        learnMore_hi: 'युधिष्ठिर ने मद्रराज शल्य पर एक तेजस्वी शक्ति का संधान किया जिसने शल्य के वक्ष को चीर दिया। इस प्रकार कौरवों का अंतिम सेनापति भी वीरगति को प्राप्त हुआ।',
        hint: 'Yudhishthira personally slew King Shalya with a spear.',
        hint_te: 'ధర్మరాజు ఈటెతో శల్యుడిని సంహరించాడు.',
        hint_hi: 'युधिष्ठिर ने भाला चलाकर शल्य का वध किया।',
        xpReward: 10
      },
      {
        id: 'q91-2',
        type: 'mcq',
        prompt: 'Realizing his eleven Akshauhinis were completely wiped out, how did King Duryodhana attempt to preserve his life on the afternoon of Day 18?',
        prompt_te: 'తన 11 అక్షౌహిణుల మహా సైన్యం పూర్తిగా తుడిచిపెట్టుకుపోయిందని గ్రహించిన దుర్యోధనుడు, 18వ రోజు మధ్యాహ్నం ప్రాణాలను రక్షించుకోవడానికి ఏమి చేశాడు?',
        prompt_hi: 'अपनी ११ अक्षौहिणी सेना का पूर्ण विनाश देखकर १८वें दिन दोपहर को दुर्योधन ने अपने प्राण बचाने के लिए क्या किया?',
        options: [
          'He used the ancient art of Jalastambhana (solidifying water) to submerge and hide himself beneath the waters of Dwaipayana Lake',
          'He disguised himself as a sanyasi and ran to Kashi',
          'He built a tunnel leading under Hastinapur',
          'He climbed to the top of an ashoka tree'
        ],
        options_te: [
          'జలస్తంభన విద్య ద్వారా నీటిని స్తంభింపజేసి, ద్వైపాయన సరస్సు అడుగున దాక్కున్నాడు',
          'సన్యాసి వేషంలో కాశీకి పారిపోయాడు',
          'హస్తినాపురానికి సొరంగం తవ్వుకున్నాడు',
          'అశోక వృక్షం పైకి ఎక్కి దాక్కున్నాడు'
        ],
        options_hi: [
          'जलस्तंभन विद्या के बल पर जल को स्थिर कर वह द्वैपायन सरोवर की गहराइयों में जाकर छिप गया',
          'संन्यासी बनकर काशी भाग गया',
          'हस्तिनापुर की सुरंग में चला गया',
          'पेड़ पर चढ़कर छिप गया'
        ],
        correctIndex: 0,
        learnMore: 'Carrying his heavy mace, Duryodhana entered the lake and solidified the waters around him, resting in cold seclusion while hunters eventually overheard him speaking to Ashwatthama.',
        learnMore_te: 'గదను చేతబట్టి సరస్సులోకి దిగిన దుర్యోధనుడు నీటిని గడ్డకట్టించి లోపల విశ్రమించాడు. వేటగాళ్ళు అతడు అశ్వత్థామతో మాట్లాడుతుండగా విని పాండవులకు ఉనికి చెప్పారు.',
        learnMore_hi: 'गदा लेकर दुर्योधन सरोवर में उतर गया और जलस्तंभन विद्या से जल को अपने चारों ओर बांधकर छिप गया। बाद में व्याधों (शिकारियों) ने पांडवों को उसकी सूचना दी।',
        hint: 'Jalastambhana Vidya in Dwaipayana Lake.',
        hint_te: 'ద్వైపాయన సరస్సులో జలస్తంభన విద్య.',
        hint_hi: 'द्वैपायन सरोवर में जलस्तंभन विद्या।',
        xpReward: 10
      },
      {
        id: 'q91-3',
        type: 'true_false',
        prompt: 'When the Pandavas located Duryodhana in the lake, Yudhishthira generously offered: "Choose any one of us five brothers, fight with any weapon of your choice, and if you win, the entire kingdom is yours!"',
        prompt_te: 'సరస్సులో ఉన్న దుర్యోధనుడిని కనుగొన్నప్పుడు ధర్మరాజు ఉదారంగా: "మా ఐదుగురిలో ఎవరినైనా ఎంచుకో, నీకిష్టమైన ఆయుధంతో పోరాడు, నీవు గెలిస్తే రాజ్యం మొత్తం నీదే!" అని ప్రతిపాదించాడు.',
        prompt_hi: 'द्वैपायन सरोवर पर पहुँचकर युधिष्ठिर ने उदारतापूर्वक कहा: "हम पाँचों भाइयों में से किसी एक को चुन लो, अपनी पसंद का शस्त्र ले लो, और यदि तुम जीत गए तो पूरा राज्य तुम्हारा होगा!"',
        correctAnswer: true,
        learnMore: 'Krishna chided Yudhishthira for this reckless gamble: "Had Duryodhana chosen anyone other than Bhima in a mace duel, or challenged you, all your 18 days of triumph would be lost!"',
        learnMore_te: 'శ్రీకృష్ణుడు ధర్మరాజు తొందరపాటును హెచ్చరించాడు: "దుర్యోధనుడు భీముడిని కాకుండా నీతో గదాయుద్ధం చేయాలని కోరితే మన శ్రమంతా బూడిదలో పోసిన పన్నీరయ్యేది!"',
        learnMore_hi: 'श्रीकृष्ण ने युधिष्ठिर की इस भूल पर टोका कि यदि दुर्योधन ने तुमसे या नकुल-सहदेव से गदा युद्ध चुन लिया होता तो सारा परिश्रम व्यर्थ चला जाता!',
        hint: 'Yudhishthira’s chivalric offer allowed Duryodhana to pick his opponent.',
        hint_te: 'ఎవరితోనైనా యుద్ధం చేయవచ్చని ధర్మరాజు ఇచ్చిన వెసులుబాటు.',
        hint_hi: 'युधिष्ठिर का यह जुआ अत्यंत जोखिम भरा था।',
        xpReward: 10
      }
    ]
  },

  // Level 92
  {
    levelNumber: 92,
    partNumber: 10,
    title: 'The Great Mace Duel & The Shattered Thighs',
    title_te: 'ద్వైపాయన తీరంలో గదాయుద్ధం & తొడలు విరుగుట',
    title_hi: 'द्वैपायन तट पर महा-गदायुद्ध और जंघा भंग',
    subtitle: 'Bhima vs. Duryodhana: Balarama Watches & Vows Fulfilled',
    subtitle_te: 'భీమ-దుర్యోధనుల తుది పోరు & బలరాముని ఆగ్రహం',
    subtitle_hi: 'भीम और दुर्योधन का अंतिम द्वंद्व और प्रतिज्ञा पूर्ति',
    questions: [
      {
        id: 'q92-1',
        type: 'mcq',
        prompt: 'As Bhima and Duryodhana clashed in their cataclysmic mace duel, which supreme mace-fighting master arrived just in time to witness the battle of his two foremost pupils?',
        prompt_te: 'భీమ-దుర్యోధనుల భీకర గదాయుద్ధం జరుగుతుండగా, వారిద్దరికీ గదా యుద్ధం నేర్పిన గురువైన ఏ మహానుభావుడు తీర్థయాత్రల నుండి తిరిగి వచ్చి ఆ పోరును తిలకించాడు?',
        prompt_hi: 'भीम और दुर्योधन के भीषण गदायुद्ध के समय उनके परम गुरु तीर्थयात्रा से लौटकर युद्ध देखने पहुँचे, वे कौन थे?',
        options: [
          'Lord Balarama (wielder of the plough)',
          'Lord Parashurama',
          'Guru Dronacharya',
          'Lord Shiva'
        ],
        options_te: [
          'శ్రీ బలరాముడు (హలధరుడు)',
          'పరశురాముడు',
          'ద్రోణాచార్యుడు',
          'పరమశివుడు'
        ],
        options_hi: [
          'भगवान बलराम (हलधर)',
          'परशुराम जी',
          'द्रोणाचार्य',
          'भगवान शिव'
        ],
        correctIndex: 0,
        learnMore: 'Balarama loved both pupils: he considered Bhima superior in raw physical power, but Duryodhana superior in technique, footwork, and tactical grace.',
        learnMore_te: 'బలరామునికి ఇద్దరూ శిష్యులే. భీమునికి శారీరక బలం ఎక్కువైతే, దుర్యోధనునికి గదా యుద్ధ నైపుణ్యం, విన్యాసాలు ఎక్కువని బలరాముని అభిప్రాయం.',
        learnMore_hi: 'बलराम जी ने कहा कि भीम में शारीरिक बल अधिक है, परंतु दुर्योधन गदा संचालन की कला और तकनीक में अधिक प्रवीण है।',
        hint: 'Krishna’s elder brother, who had gone on pilgrimage along the Saraswati.',
        hint_te: 'సరస్వతీ నదీ తీర్థయాత్రలకు వెళ్ళిన కృష్ణుని అన్నయ్య బలరాముడు.',
        hint_hi: 'तीर्थाटन से लौटे श्रीकृष्ण के बड़े भ्राता।',
        xpReward: 10
      },
      {
        id: 'q92-2',
        type: 'mcq',
        prompt: 'Seeing Duryodhana’s superior agility wearing Bhima down, what subtle gesture did Lord Krishna make to remind Bhima of his ancient vow?',
        prompt_te: 'దుర్యోధనుడి విన్యాసాల ముందు భీముడు అలసిపోవడం చూసిన శ్రీకృష్ణుడు, భీముడికి పాత ప్రతిజ్ఞను గుర్తుచేయడానికి ఏ సంజ్ఞ చేశాడు?',
        prompt_hi: 'दुर्योधन के चपल पैंतरों के सामने भीम को संकट में देखकर श्रीकृष्ण ने अपनी पुरानी प्रतिज्ञा याद दिलाने के लिए क्या संकेत किया?',
        options: [
          'Krishna caught Arjuna’s eye, who then loudly slapped his own left thigh in view of Bhima',
          'Krishna pointed His flute at Duryodhana’s helmet',
          'Krishna blew three blasts on His conch shell',
          'Krishna threw a handful of sand into Duryodhana’s eyes'
        ],
        options_te: [
          'కృష్ణుని సూచనతో అర్జునుడు భీమునికి కనిపించేలా తన ఎడమ తొడను గట్టిగా చరిచి చూపించాడు',
          'దుర్యోధనుడి కిరీటం వైపు పిల్లనగ్రోవిని చూపించాడు',
          'శంఖాన్ని మూడుసార్లు పూరించాడు',
          'దుర్యోధనుడి కళ్ళలో ఇసుక చల్లాడు'
        ],
        options_hi: [
          'श्रीकृष्ण के संकेत पर अर्जुन ने भीम को देखते हुए अपनी बाईं जंघा (जांघ) पर जोर से हाथ मारा',
          'बांसुरी से दुर्योधन के मुकुट की ओर इशारा किया',
          'शंख बजाया',
          'धूल उड़ा दी'
        ],
        correctIndex: 0,
        learnMore: 'Bhima remembered his vow in the dice assembly: "I shall smash the left thigh on which you brazenly invited Draupadi to sit!" Bhima leapt and struck Duryodhana’s thighs, shattering them.',
        learnMore_te: 'జూదసభలో ద్రౌపదిని కూర్చోమని సైగ చేసిన తొడను పగలగొడతానన్న శపథం భీముడికి గుర్తొచ్చింది. వెంటనే గదను విసిరి దుర్యోధనుడి రెండు తొడలనూ బద్దలు కొట్టాడు.',
        learnMore_hi: 'भीम को भरी सभा में द्रौपदी के अपमान और जंघा तोड़ने की प्रतिज्ञा याद आ गई। उन्होंने गदा का भीषण प्रहार कर दुर्योधन की दोनों जंघाएँ तोड़ दीं।',
        hint: 'Arjuna slapped his thigh upon Krishna’s prompt.',
        hint_te: 'అర్జునుడు తొడపై చరచి సైగ చేయడం.',
        hint_hi: 'अर्जुन द्वारा जांघ पर हाथ मारकर संकेत देना।',
        xpReward: 10
      },
      {
        id: 'q92-3',
        type: 'true_false',
        prompt: 'Enraged that Bhima had struck below the navel contrary to classical mace rules, Balarama raised his plough to kill Bhima on the spot, but was restrained by Krishna’s philosophical discourse.',
        prompt_te: 'నాభి కింద కొట్టకూడదనే గదాయుద్ధ నిబంధనను ఉల్లంఘించినందుకు ఆగ్రహించిన బలరాముడు తన నాగలితో భీముడిని చంపడానికి రాగా, శ్రీకృష్ణుడు ధర్మ సూక్ష్మాలను వివరించి శాంతింపజేశాడు.',
        prompt_hi: 'नाभि से नीचे प्रहार करने के नियम-उल्लंघन से क्रोधित होकर बलराम जी हल उठाकर भीम को मारने दौड़े, किंतु श्रीकृष्ण ने उन्हें शांत कर प्रतिज्ञा और अधर्म का स्मरण कराया।',
        correctAnswer: true,
        learnMore: 'Krishna reminded Balarama: "Where was mace chivalry when Draupadi was dragged, when Abhimanyu was lynched, and when they poisoned Bhima? The vow of the Kshatriya must be upheld!"',
        learnMore_te: 'కృష్ణుడు బలరాముడికి నచ్చజెప్పాడు: "ద్రౌపదికి అవమానం జరిగినప్పుడు, అభిమన్యుడిని చుట్టుముట్టి చంపినప్పుడు ధర్మం ఏమైంది? చేసిన శపథాన్ని నెరవేర్చడం క్షత్రియ ధర్మం."',
        learnMore_hi: 'श्रीकृष्ण ने बलराम को समझाया: "द्रौपदी के अपमान और अभिमन्यु के निहत्थे वध के समय यह मर्यादा कहाँ थी? अधर्म का नाश करने के लिए भीम ने अपनी प्रतिज्ञा पूरी की है।"',
        hint: 'Krishna held Balarama back and reminded him of the Kauravas’ endless sins.',
        hint_te: 'కృష్ణుడు బలరాముని ఆగ్రహాన్ని ఆపాడు.',
        hint_hi: 'श्रीकृष्ण ने हलधर बलराम को शांत किया।',
        xpReward: 10
      }
    ]
  },

  // Level 93
  {
    levelNumber: 93,
    partNumber: 10,
    title: 'Sauptika Parva: The Midnight Massacre',
    title_te: 'సౌప్తిక పర్వం: నిద్రించే వీరుల సంహారం',
    title_hi: 'सौप्तिक पर्व: रात्रि का संहार और उल्लू की प्रेरणा',
    subtitle: 'Ashwatthama’s Nocturnal Raid on the Sleeping Camp',
    subtitle_te: 'అశ్వత్థామ క్రూర ప్రతీకారం & ఉపపాండవుల వధ',
    subtitle_hi: 'शिव कृपा से अश्वत्थामा का पांडव शिविर में प्रवेश',
    questions: [
      {
        id: 'q93-1',
        type: 'mcq',
        prompt: 'What observation in the forest at night inspired Ashwatthama to carry out a deadly ambush upon the sleeping Pandava camp?',
        prompt_te: 'అడవిలో విశ్రాంతి తీసుకుంటున్నప్పుడు ఏ పక్షి చర్యను చూసి అశ్వత్థామ నిద్రపోతున్న పాండవ శిబిరంపై రాత్రిపూట దాడి చేయాలనే ఆలోచన చేశాడు?',
        prompt_hi: 'रात में बरगद के पेड़ के नीचे बैठे अश्वत्थामा ने किस पक्षी की चेष्टा देखकर सोते हुए पांडवों पर आक्रमण करने की प्रेरणा ली?',
        options: [
          'He watched an owl silently enter a banyan tree and slaughter thousands of sleeping crows one by one in the dark',
          'He saw an eagle catch a fish in mid-air',
          'He saw a pack of wolves attack an old tiger',
          'He heard a jackal howling toward Hastinapur'
        ],
        options_te: [
          'ఒక గుడ్లగూబ రాత్రిపూట మర్రిచెట్టుపై నిద్రిస్తున్న వేలాది కాకులను నిశ్శబ్దంగా ఒక్కొక్కటిగా చంపడం చూసి',
          'గరుడ పక్షి గాల్లో చేపను పట్టుకోవడం చూసి',
          'తోడేళ్ళు పులిపై దాడి చేయడం చూసి',
          'నక్క ఊళ వేయడం విని'
        ],
        options_hi: [
          'उसने देखा कि एक उल्लू ने रात्रि के अंधकार में बरगद के पेड़ पर सो रहे सैकड़ों कौओं को एक-एक कर चुपचाप मार डाला',
          'चील द्वारा मछली पकड़ना देखकर',
          'भेड़ियों का झुंड देखकर',
          'सियार की आवाज सुनकर'
        ],
        correctIndex: 0,
        learnMore: 'Ashwatthama declared: "If that owl can wipe out its natural enemies while they slumber, I too will wipe out the slayers of my father while they sleep in their tents!"',
        learnMore_te: 'అశ్వత్థామ: "నిద్రిస్తున్న శత్రువులను ఆ గుడ్లగూబ చంపినట్లే, నా తండ్రిని చంపినవారిని నిద్రపోతున్నప్పుడే తుదముట్టిస్తాను!" అని నిర్ణయించుకున్నాడు.',
        learnMore_hi: 'अश्वत्थामा ने सोचा: "जिस प्रकार उल्लू ने सोते हुए कौओं का संहार किया, उसी प्रकार मैं भी अपने पिता के हत्यारों का सोते हुए संहार करूँगा।"',
        hint: 'An owl slaughtering sleeping crows in a banyan tree.',
        hint_te: 'కాకులను చంపిన గుడ్లగూబ.',
        hint_hi: 'उल्लू द्वारा सोते हुए कौओं का वध।',
        xpReward: 10
      },
      {
        id: 'q93-2',
        type: 'mcq',
        prompt: 'Who were the victims butchered by Ashwatthama, Kripa, and Kritavarma during their atrocious raid on the Pandava camp?',
        prompt_te: 'పాండవ శిబిరంపై అర్ధరాత్రి జరిగిన ఆ ఘోర దాడిలో అశ్వత్థామ చేతిలో నిద్రలోనే ప్రాణాలు కోల్పోయినది ఎవరు?',
        prompt_hi: 'उस भयानक रात्रि-संहार में अश्वत्थामा और उसके सहयोगियों द्वारा शिविर में किन-किन का वध किया गया?',
        options: [
          'Dhrishtadyumna, Shikhandi, the five young sons of Draupadi (Upapandavas), and all remaining Panchala soldiers',
          'The five Pandava brothers themselves',
          'Lord Krishna and Satyaki',
          'Queen Kunti and Vidura'
        ],
        options_te: [
          'ధృష్టద్యుమ్నుడు, శిఖండి, ద్రౌపది ఐదుగురు కుమారులు (ఉపపాండవులు) మరియు మిగిలిన పాంచాల సైనికులందరూ',
          'ఐదుగురు పాండవులు స్వయంగా',
          'శ్రీకృష్ణుడు మరియు సాత్యకి',
          'కుంతీదేవి మరియు విదురుడు'
        ],
        options_hi: [
          'धृष्टद्युम्न, शिखंडी, द्रौपदी के पाँचों पुत्र (उपपांडव) और शिविर में सो रहे समस्त पांचाल योद्धा',
          'पाँचों पांडव स्वयं',
          'श्रीकृष्ण और सात्यकि',
          'माता कुंती और विदुर'
        ],
        correctIndex: 0,
        learnMore: 'Krishna had wisely taken the five Pandavas and Satyaki away from camp that night. Thinking the five sleeping youths were the Pandavas, Ashwatthama murdered Draupadi’s children.',
        learnMore_te: 'శ్రీకృష్ణుడు ముందుచూపుతో పాండవులను ఆ రాత్రి శిబిరానికి దూరంగా ఉంచాడు. నిద్రిస్తున్న ఐదుగురు ఉపపాండవులను పాండవులే అనుకుని అశ్వత్థామ క్రూరంగా చంపేశాడు.',
        learnMore_hi: 'श्रीकृष्ण ने पांडवों को उस रात शिविर से दूर रखा था। अश्वत्थामा ने द्रौपदी के पाँचों पुत्रों को पांडव समझकर उनका सिर काट दिया और धृष्टद्युम्न व शिखंडी को मार डाला।',
        hint: 'The Upapandavas (Draupadi’s five boys) and Dhrishtadyumna.',
        hint_te: 'ఉపపాండవులు మరియు ధృష్టద్యుమ్నుడు.',
        hint_hi: 'द्रौपदी के पाँचों पुत्र और धृष्टद्युम्न।',
        xpReward: 10
      },
      {
        id: 'q93-3',
        type: 'true_false',
        prompt: 'Before Duryodhana drew his final breath, Ashwatthama presented him with the gruesome report of the massacre, but Duryodhana died in sorrow learning the Pandavas themselves were still alive.',
        prompt_te: 'దుర్యోధనుడు ప్రాణాలు విడిచే ముందు అశ్వత్థామ ఈ మారణహోమం వార్తను చెప్పాడు; కానీ పాండవులు ఇంకా బ్రతికే ఉన్నారని తెలిసి దుర్యోధనుడు విచారంతో కన్నుమూశాడు.',
        prompt_hi: 'दुर्योधन के अंतिम श्वास लेने से पूर्व अश्वत्थामा ने इस संहार का समाचार दिया, किंतु यह जानकर कि पाँचों पांडव अब भी जीवित हैं, दुर्योधन अत्यंत दुखी होकर मर गया।',
        correctAnswer: true,
        learnMore: 'Duryodhana thanked Ashwatthama for avenging him, but wept that the royal lineage was eradicated while his enemies still survived to inherit the earth.',
        learnMore_te: 'వంశం మొత్తం నిర్మూలించబడిందని, పాండవులు బ్రతికే ఉన్నారని తెలిసి దుర్యోధనుడు నిట్టూరుస్తూ తుది శ్వాస విడిచాడు.',
        learnMore_hi: 'दुर्योधन ने अश्वत्थामा की प्रशंसा तो की, परंतु यह जानकर कि कुल का कोई बालक नहीं बचा और शत्रु जीवित हैं, वह भारी मन से परलोक सिधार गया।',
        hint: 'Duryodhana passed away with the realization that the five Pandavas lived.',
        hint_te: 'పాండవులు బ్రతికే ఉన్నారని తెలుసుకుని మరణించాడు.',
        hint_hi: 'पांडवों के जीवित रहने की सूचना से दुखी होकर प्राण त्यागे।',
        xpReward: 10
      }
    ]
  },

  // Level 94
  {
    levelNumber: 94,
    partNumber: 10,
    title: 'The Brahmashira Clashes & The 3000-Year Curse',
    title_te: 'బ్రహ్మశిరో నామకాస్త్రం & 3000 ఏళ్ళ శాపం',
    title_hi: 'ब्रह्मशिरा का टकराव और अश्वत्थामा को ३००० वर्ष का शाप',
    subtitle: 'The Ultimate Weapons & The Gem from the Forehead',
    subtitle_te: 'అశ్వత్థామ శిరోమణి హరణం & నిత్య సంచార శాపం',
    subtitle_hi: 'उत्तरा के गर्भ पर प्रहार और माथे की मणि का निष्कासन',
    questions: [
      {
        id: 'q94-1',
        type: 'mcq',
        prompt: 'When Arjuna and Ashwatthama launched their apocalyptic Brahmashira Astras at each other, threatening to incinerate the three worlds, who intervened to command them to withdraw the weapons?',
        prompt_te: 'అర్జునుడు మరియు అశ్వత్థామ సమస్త లోకాలను దహించగల బ్రహ్మశిరో నామకాస్త్రాలను సంధించినప్పుడు, సృష్టిని కాపాడటానికి ఎవరు మధ్యలోకి వచ్చి ఆ అస్త్రాలను ఉపసంహరించుకోమని ఆజ్ఞాపించారు?',
        prompt_hi: 'जब अर्जुन और अश्वत्थामा ने एक-दूसरे पर तीनों लोकों को भस्म करने वाले ब्रह्मशिरा अस्त्र छोड़ दिए, तब किसने बीच में आकर दोनों को अस्त्र वापस लेने की आज्ञा दी?',
        options: [
          'Sage Vyasa and Sage Narada',
          'Lord Indra and Lord Varuna',
          'King Dhritarashtra and Queen Gandhari',
          'Lord Yama and Chitragupta'
        ],
        options_te: [
          'వేదవ్యాస మహర్షి మరియు నారద మహర్షి',
          'ఇంద్రుడు మరియు వరుణుడు',
          'ధృతరాష్ట్రుడు మరియు గాంధారి',
          'యమధర్మరాజు మరియు చిత్రగుప్తుడు'
        ],
        options_hi: [
          'महर्षि वेदव्यास और देवर्षि नारद',
          'इंद्रदेव और वरुणदेव',
          'धृतराष्ट्र और गांधारी',
          'यमराज और चित्रगुप्त'
        ],
        correctIndex: 0,
        learnMore: 'Arjuna possessed the spiritual discipline to withdraw his weapon; Ashwatthama, unable to withdraw it, maliciously diverted the fiery weapon into the womb of Uttara to exterminate the last Pandava heir.',
        learnMore_te: 'అర్జునుడు అస్త్రాన్ని ఉపసంహరించుకున్నాడు; కానీ ఉపసంహరణ రాని అశ్వత్థామ పాండవ వంశాన్ని సమూలంగా నాశనం చేయడానికి ఆ అస్త్రాన్ని ఉత్తర గర్భం వైపు మళ్ళించాడు.',
        learnMore_hi: 'अर्जुन ने अपने तपोबल से अस्त्र लौटा लिया, किंतु अस्त्र लौटाने में असमर्थ अश्वत्थामा ने पांडवों के अंतिम वंशज को मारने के लिए उसे उत्तरा के गर्भ की ओर मोड़ दिया।',
        hint: 'The divine sages Vyasa and Narada stood between the fires.',
        hint_te: 'వ్యాసుడు మరియు నారదుడు.',
        hint_hi: 'व्यास और नारद मुनि।',
        xpReward: 10
      },
      {
        id: 'q94-2',
        type: 'mcq',
        prompt: 'What retribution did Lord Krishna pronounce upon Ashwatthama for his cowardly attempt to murder an unborn child in the mother’s womb?',
        prompt_te: 'గర్భస్థ శిశువును చంపడానికి ప్రయత్నించినందుకు శ్రీకృష్ణుడు అశ్వత్థామకు ఏ భయంకరమైన శిక్షను విధించాడు?',
        prompt_hi: 'गर्भ में पल रहे अजन्मे शिशु की हत्या का प्रयास करने पर श्रीकृष्ण ने अश्वत्थामा को क्या कठोर दंड दिया?',
        options: [
          'The protective gem on his forehead was pried out, and he was cursed to wander the uninhabited earth for 3,000 years, covered in oozing, incurable wounds and sores, denied human company and food',
          'He was banished to the bottom of the ocean',
          'He was stripped of his Brahmin lineage and forced to farm',
          'He was immediately beheaded before Draupadi'
        ],
        options_te: [
          'అతని నుదుటిపై ఉన్న రక్షక మణిని తీసివేసి, ఒళ్ళంతా చీము రక్తం కారే పుండ్లతో, ఎవరూ అన్నం పెట్టకుండా, మాట్లాడకుండా 3000 ఏళ్ళు భూమిపై ఒంటరిగా నరకం అనుభవిస్తూ తిరగాలని శపించాడు',
          'సముద్రం అడుగుకు పంపించేశాడు',
          'వ్యవసాయం చేసుకోమని శిక్షించాడు',
          'వెంటనే ద్రౌపది ఎదుట శిరచ్ఛేదం చేయించాడు'
        ],
        options_hi: [
          'उसके माथे की दिव्य मणि छीन ली गई और उसे ३००० वर्षों तक रक्त और मवाद से रिसते घावों के साथ निर्जन वनों में भटकने का शाप दिया गया, जहाँ कोई उसे शरण या जल न देगा',
          'समुद्र में फेंक दिया गया',
          'उसे खेती करने भेज दिया गया',
          'द्रौपदी के सामने उसका सिर काट दिया गया'
        ],
        correctIndex: 0,
        learnMore: 'Draupadi showed divine magnanimity: seeing Ashwatthama’s gem, she said: "His mother Gautami (Kripi) must not weep for her son as I weep for mine." She spared his mortal life.',
        learnMore_te: 'ద్రౌపది ఉదాత్తత చాటింది: "గురుపత్ని కృపి తన కొడుకు కోసం నాలాగే ఏడవకూడదు" అని అశ్వత్థామను చంపకుండా వదిలేయమంది. ఆ మణిని ధర్మరాజు కిరీటంలో ధరించాడు.',
        learnMore_hi: 'द्रौपदी ने कहा: "गुरुमाता कृपी को अपने पुत्र के लिए वैसे न रोना पड़े जैसे मैं रो रही हूँ।" उन्होंने उसके प्राण बख्श दिए और उसकी मणि युधिष्ठिर के मुकुट में लगाई गई।',
        hint: 'The forehead gem was removed and an eternity of wandering with festering wounds.',
        hint_te: 'శిరోమణిని తీసివేసి 3000 ఏళ్ళ శాపం ఇవ్వడం.',
        hint_hi: 'मणि छीनकर ३००० वर्ष भटकने का शाप।',
        xpReward: 10
      },
      {
        id: 'q94-3',
        type: 'true_false',
        prompt: 'The gem that adorned Ashwatthama’s head from birth had previously protected him from hunger, thirst, weapons, demons, and snake bites.',
        prompt_te: 'పుట్టుకతోనే అశ్వత్థామ నుదుటిపై ఉన్న దివ్య మణి అతనికి ఆకలి, దప్పిక, ఆయుధాలు, విషసర్పాల నుండి సంపూర్ణ రక్షణ కల్పించేది.',
        prompt_hi: 'जन्म से ही अश्वत्थामा के माथे पर सुशोभित दिव्य मणि उसे भूख, प्यास, अस्त्र-शस्त्र, रोग और सर्प-दंश से सर्वथा सुरक्षित रखती थी।',
        correctAnswer: true,
        learnMore: 'Once the gem was excised from his flesh, Ashwatthama lost all divine immunity and vigor, becoming a wretched ghost of his former glorious self.',
        learnMore_te: 'ఆ మణిని శరీరం నుండి వేరు చేయగానే అశ్వత్థామ తన దివ్య శక్తులన్నింటినీ కోల్పోయి నిస్సహాయుడయ్యాడు.',
        learnMore_hi: 'मणि के निकलते ही अश्वत्थामा का सारा तेज और अमरता का सुख छिन गया और वह केवल एक शापित यातना भोगने वाला बन गया।',
        hint: 'The natural protective gem bestowed at his birth.',
        hint_te: 'పుట్టుకతో వచ్చిన సహజ రక్షణ మణి.',
        hint_hi: 'जन्मजात दैवीय सुरक्षा कवच रूपी मणि।',
        xpReward: 10
      }
    ]
  },

  // Level 95
  {
    levelNumber: 95,
    partNumber: 10,
    title: 'The Miracle in the Womb & The Birth of Parikshit',
    title_te: 'గర్భంలో అద్భుతం & పరీక్షిత్తు జననం',
    title_hi: 'उत्तरा के गर्भ की रक्षा और परीक्षित का पुनर्जीवन',
    subtitle: 'Krishna Revives the Dead Child by the Power of Eternal Truth',
    subtitle_te: 'సత్య నిష్ఠతో మృత శిశువును బతికించిన శ్రీకృష్ణుడు',
    subtitle_hi: 'सत्य की शक्ति से अजन्मे बालक को जीवनदान',
    questions: [
      {
        id: 'q95-1',
        type: 'mcq',
        prompt: 'When Princess Uttara gave birth to a stillborn child, burned black by Ashwatthama’s Brahmashira weapon, how did Lord Krishna miraculously restore the infant to life?',
        prompt_te: 'అశ్వత్థామ బ్రహ్మాస్త్రం వల్ల ఉత్తర గర్భంలోని శిశువు బొగ్గులా మాడి నిర్జీవంగా జన్మించినప్పుడు, శ్రీకృష్ణుడు ఆ బిడ్డను ఎలా బతికించాడు?',
        prompt_hi: 'अश्वत्थामा के ब्रह्मास्त्र के तेज से जब उत्तरा ने एक मृत, काले पड़े बालक को जन्म दिया, तब श्रीकृष्ण ने उसे किस प्रकार जीवित किया?',
        options: [
          'He made a proclamation of absolute truth: "If I have never uttered a lie even in jest, and if Dharma is My eternal form, let this dead child breathe and live!"',
          'He poured Amrita brought down from Indraloka onto the infant’s forehead',
          'He used celestial lightning to shock the child’s heart',
          'He gave the baby to sage Vyasa to perform a secret yajna'
        ],
        options_te: [
          'సత్య ప్రమాణం చేశాడు: "పరిహాసానికి కూడా నేను ఎప్పుడూ అసత్యం పలకకపోతే, నా యందు ధర్మం నిత్యం స్థిరమై ఉంటే, ఈ మృత శిశువు ఇప్పుడే ప్రాణాలు పొందుగాక!"',
          'ఇంద్రలోకం నుండి అమృతాన్ని తెచ్చి పోశాడు',
          'మెరుపును సృష్టించి గుండె కొట్టుకునేలా చేశాడు',
          'వ్యాస మహర్షికి ఇచ్చి రహస్య యజ్ఞం చేయించాడు'
        ],
        options_hi: [
          'उन्होंने अपने सत्य की घोषणा की: "यदि मैंने कभी परिहास में भी असत्य न कहा हो, और यदि धर्म मेरा ही स्वरूप है, तो यह मृत बालक अभी जीवित हो जाए!"',
          'इंद्रलोक से अमृत लाकर छिड़का',
          'बिजली का झटका देकर हृदय चलाया',
          'व्यास मुनि से गुप्त यज्ञ करवाया'
        ],
        correctIndex: 0,
        learnMore: 'As soon as Krishna’s declaration of truth touched the baby, life flared up in the still infant; he opened his eyes, sneezed, cried, and beamed with vitality.',
        learnMore_te: 'కృష్ణుని సత్యవాక్కుతో ఆ శిశువు ఒంట్లోకి ప్రాణాలు ప్రవేశించాయి; వెంటనే తుమ్మి కేరింతలు కొడుతూ నవ్వసాగాడు.',
        learnMore_hi: 'सत्य की उस घोषणा से बालक के निष्प्राण शरीर में चेतना लौट आई, उसका रंग कंचन जैसा हो गया और वह रो पड़ा। पांडव वंश का दीपक फिर जल उठा।',
        hint: 'A solemn vow of absolute personal truth and righteousness.',
        hint_te: 'శ్రీకృష్ణుని అచంచల సత్య ప్రతిజ్ఞ.',
        hint_hi: 'श्रीकृष्ण का सत्यवादी प्रतिज्ञा-वाक्य।',
        xpReward: 10
      },
      {
        id: 'q95-2',
        type: 'mcq',
        prompt: 'Why was this miraculous royal baby given the sacred name "Parikshit"?',
        prompt_te: 'ఈ అద్భుత శిశువుకు "పరీక్షిత్తు" అనే పేరు ఎందుకు పెట్టారు?',
        prompt_hi: 'इस अलौकिक बालक का नाम "परीक्षित" क्यों रखा गया?',
        options: [
          'Because even while in the womb he had tested (pariksha) the divine vision of Krishna, and because he was born when the Kuru lineage was almost tested to total extinction',
          'Because he was born on a full moon day',
          'Because his father Abhimanyu wished it in a dream',
          'Because he cried louder than any baby in Hastinapur'
        ],
        options_te: [
          'గర్భంలో ఉండగానే తనను రక్షించిన శ్రీకృష్ణుని రూపాన్ని నిరంతరం పరీక్షిస్తూ (వెతుకుతూ) ఉండటం వల్ల, మరియు కురువంశం అంతరించిపోయే పరీక్షా సమయంలో పుట్టినందున',
          'పౌర్ణమి రోజున పుట్టినందున',
          'అభిమన్యుడు కలలో వచ్చి చెప్పినందున',
          'బిగ్గరగా ఏడ్చినందున'
        ],
        options_hi: [
          'क्योंकि उसने गर्भ में ही अपनी रक्षा करने वाले श्रीकृष्ण को पहचाना था और सबको अपनी दृष्टि से परखता (परीक्षा लेता) था, साथ ही वह कुरुवंश के महापरीक्षण काल में जन्मा था',
          'पूर्णिमा के दिन जन्म होने के कारण',
          'अभिमन्यु ने सपने में यह नाम बताया था',
          'बहुत तेज रोने के कारण'
        ],
        correctIndex: 0,
        learnMore: 'Parikshit would grow up to be the sole emperor of the earth and the listener to whom Sage Shuka narrated the sacred Srimad Bhagavatam.',
        learnMore_te: 'ఈ పరీక్షిత్తు మహారాజే భవిష్యత్తులో శుక మహర్షి ద్వారా శ్రీమద్భాగవతాన్ని విని మోక్షాన్ని పొందిన పుణ్యాత్ముడు.',
        learnMore_hi: 'यही बालक आगे चलकर चक्रवर्ती राजा परीक्षित बना, जिसे शुकदेव जी ने संपूर्ण श्रीमद्भागवत महापुराण का श्रवण कराया था।',
        hint: '"Pariksha" signifies testing or examining.',
        hint_te: 'పరీక్షించడం అనే పదం నుండి వచ్చింది.',
        hint_hi: 'परीक्षण करने और कुरुवंश की परीक्षा से जुड़ा नाम।',
        xpReward: 10
      },
      {
        id: 'q95-3',
        type: 'true_false',
        prompt: 'To protect the fetus inside Uttara’s womb from the heat of the Brahmashira weapon, Krishna entered the womb in a thumb-sized spiritual form holding the Sudarshana Chakra.',
        prompt_te: 'ఉత్తర గర్భంలోని పిండాన్ని బ్రహ్మాస్త్ర సెగ తగలకుండా కాపాడటానికి, శ్రీకృష్ణుడు బొటనవేలంత సూక్ష్మ రూపంలో సుదర్శన చక్రాన్ని తిప్పుతూ గర్భంలోకి ప్రవేశించాడు.',
        prompt_hi: 'उत्तरा के गर्भ को ब्रह्मास्त्र की अग्नि से बचाने के लिए श्रीकृष्ण ने अंगूठे के बराबर सूक्ष्म रूप धरकर सुदर्शन चक्र से गर्भ की रक्षा की थी।',
        correctAnswer: true,
        learnMore: 'The child saw this dazzling being wielding the blazing mace and discus circling his womb, and spent his infant days looking into every human face to see if it matched that Lord.',
        learnMore_te: 'గర్భంలో ఉండగా చుట్టూ రక్షణగా తిరుగుతున్న ఆ దివ్య పురుషుడిని చూసిన ఆ శిశువు, పుట్టిన తర్వాత అందరి ముఖాలనూ చూస్తూ "ఆయన ఈయనేనా?" అని పరీక్షించేవాడు.',
        learnMore_hi: 'गर्भ में बालक ने उस चतुर्भुज पुरुष को गदा और चक्र घुमाते देखा था, इसलिए जन्म के बाद वह हर व्यक्ति को देखकर पहचानता था कि क्या यह वही रक्षक है।',
        hint: 'An avatar the size of a thumb with the discus.',
        hint_te: 'బొటనవేలంత సూక్ష్మ రూపం.',
        hint_hi: 'अंगूठे के आकार का दिव्य स्वरूप।',
        xpReward: 10
      }
    ]
  },

  // Level 96
  {
    levelNumber: 96,
    partNumber: 10,
    title: 'Stree Parva & Queen Gandhari’s Curse',
    title_te: 'స్త్రీ పర్వం & గాంధారి శాపం',
    title_hi: 'स्त्री पर्व: रुदन और माता गांधारी का शाप',
    subtitle: 'The Iron Bhima & The 36-Year Doom of the Yadavas',
    subtitle_te: 'ఇనుప విగ్రహం & 36 ఏళ్ళ తర్వాత యదువంశ నాశనం',
    subtitle_hi: 'लोहे की प्रतिमा का चूर्ण और यदुवंश का विनाश-शाप',
    questions: [
      {
        id: 'q96-1',
        type: 'mcq',
        prompt: 'When the Pandavas visited blind King Dhritarashtra after the war, how did Lord Krishna save Bhima from Dhritarashtra’s murderous grief?',
        prompt_te: 'యుద్ధం ముగిశాక పాండవులు ధృతరాష్ట్రుని వద్దకు వెళ్ళినప్పుడు, పుత్రశోకంతో రగిలిపోతున్న ధృతరాష్ట్రుని చేతి నుండి శ్రీకృష్ణుడు భీముడిని ఎలా కాపాడాడు?',
        prompt_hi: 'युद्ध के बाद जब पांडव धृतराष्ट्र से मिलने गए, तब पुत्र-शोक में अंधे धृतराष्ट्र के प्राणघातक आलिंगन से श्रीकृष्ण ने भीम की रक्षा कैसे की?',
        options: [
          'Krishna shoved an iron training statue of Bhima into the king’s arms, which Dhritarashtra crushed to powder with his superhuman strength of 10,000 elephants',
          'Krishna cast a spell that made Dhritarashtra’s hands numb',
          'Krishna sent Arjuna disguised as Bhima',
          'Krishna threw water on the king’s head'
        ],
        options_te: [
          'భీముని స్థానంలో సాధన కోసం వాడే ఇనుప విగ్రహాన్ని ముందుంచాడు; పదివేల ఏనుగుల బలం ఉన్న ధృతరాష్ట్రుడు భీముడే అనుకుని ఆ విగ్రహాన్ని పిండిపిండిగా నలిపేశాడు',
          'ధృతరాష్ట్రుని చేతులు మొద్దుబారేలా చేశాడు',
          'అర్జునుడికి భీముని వేషం వేయించి పంపాడు',
          'రాజు తలపై నీళ్ళు చల్లాడు'
        ],
        options_hi: [
          'श्रीकृष्ण ने असली भीम के स्थान पर भीम की लोहे की अभ्यास-प्रतिमा आगे कर दी, जिसे धृतराष्ट्र ने १०,००० हाथियों के बल से भींचकर चूर-चूर कर दिया',
          'धृतराष्ट्र के हाथ सुन्न कर दिए',
          'अर्जुन को भीम बनाकर भेजा',
          'राजा पर जल छिड़क दिया'
        ],
        correctIndex: 0,
        learnMore: 'Dhritarashtra coughed blood from the immense strain, then wept thinking he had killed Bhima. Krishna comforted him: "Weep not, Sire; your fury struck only iron. Your nephew lives!"',
        learnMore_te: 'విగ్రహం పొడికాగానే భీముడు చనిపోయాడనుకుని ధృతరాష్ట్రుడు రోదించాడు. కృష్ణుడు: "రాజా! చనిపోయింది ఇనుప విగ్రహం మాత్రమే, నీ మేనల్లుడు క్షేమంగా ఉన్నాడు" అని నిజం చెప్పాడు.',
        learnMore_hi: 'प्रतिमा चूर्ण होने पर जब धृतराष्ट्र विलाप करने लगे कि उन्होंने भीम को मार डाला, तब श्रीकृष्ण ने उन्हें सांत्वना दी कि भीम जीवित है और केवल लोहे की मूर्ति नष्ट हुई है।',
        hint: 'An iron dummy substituted for the real warrior.',
        hint_te: 'భీముని ఇనుప విగ్రహం.',
        hint_hi: 'लोहे की बनी भीम की प्रतिमा।',
        xpReward: 10
      },
      {
        id: 'q96-2',
        type: 'mcq',
        prompt: 'Walking over the battlefield strewn with corpses of her hundred sons, what dreadful curse did Queen Gandhari lay upon Lord Krishna in Stree Parva?',
        prompt_te: 'వందమంది కొడుకుల కళేబరాలు పడి ఉన్న కురుక్షేత్ర భూమిపై నడుస్తూ, తీవ్ర దుఃఖంతో గాంధారీ దేవి శ్రీకృష్ణుడిపై ఏ భయంకరమైన శాపాన్ని విధించింది?',
        prompt_hi: 'कुरुक्षेत्र की भूमि पर अपने सौ पुत्रों के शवों को देखकर शोकाकुल माता गांधारी ने श्रीकृष्ण को कौन-सा दारुण शाप दिया?',
        options: [
          '"Thirty-six years from today, your own Yadava kinsmen shall slaughter each other in drunken madness, your cities shall sink into the ocean, and You shall perish alone in a desolate forest by a hunter’s arrow!"',
          'That Krishna would immediately turn into a stone statue',
          'That Krishna would lose all His divine weapons forever',
          'That the Pandavas would instantly die'
        ],
        options_te: [
          '"ఇప్పటికి 36 ఏళ్ళ తర్వాత, నీ యదువంశీయులు పరస్పరం కొట్టుకుని పిచ్చివాళ్ళలా చనిపోతారు; నీ ద్వారక సముద్రంలో మునిగిపోతుంది; నీవు అనాథలా ఒక అడవిలో వేటగాడి బాణానికి మరణిస్తావు!"',
          'కృష్ణుడు వెంటనే రాయిగా మారిపోవాలని',
          'కృష్ణుడు తన ఆయుధాలన్నింటినీ కోల్పోవాలని',
          'పాండవులు వెంటనే మరణించాలని'
        ],
        options_hi: [
          '"आज से ३६वें वर्ष में तुम्हारे अपने यदुवंशी मदिरा के नशे में एक-दूसरे का संहार कर लेंगे, तुम्हारी द्वारका नगरी समुद्र में डूब जाएगी और तुम एक बहेलिए के बाण से निर्जन वन में मारे जाओगे!"',
          'श्रीकृष्ण तुरंत पत्थर की मूर्ति बन जाएँ',
          'श्रीकृष्ण के सुदर्शन चक्र की शक्ति समाप्त हो जाए',
          'पांडव तुरंत मर जाएँ'
        ],
        correctIndex: 0,
        learnMore: 'Krishna smiled gently and accepted the curse: "O Mother, what you have spoken will come to pass. None other than the Yadavas could ever destroy the Yadavas; it is destined."',
        learnMore_te: 'శ్రీకృష్ణుడు ప్రశాంతంగా చిరునవ్వుతో ఆ శాపాన్ని స్వీకరించాడు: "అమ్మా! నీవు పలికినట్లే జరుగుతుంది. యదువంశాన్ని వారంతట వారు తప్ప మరెవరూ నాశనం చేయలేరు."',
        learnMore_hi: 'श्रीकृष्ण ने शांत भाव से मुस्कराकर शाप स्वीकार किया: "माते! जो आपने कहा वह अवश्य होगा। यदुवंशियों का संहार उनके सिवा कोई और नहीं कर सकता था।"',
        hint: 'The destruction of the Yadava clan after 36 years.',
        hint_te: '36 సంవత్సరాల తర్వాత యదువంశ పతనం.',
        hint_hi: '३६ वर्ष बाद यदुवंश के विनाश का शाप।',
        xpReward: 10
      },
      {
        id: 'q96-3',
        type: 'true_false',
        prompt: 'In Stree Parva, Queen Kunti finally revealed the secret of Karna’s divine birth to the grieving Pandavas, causing Yudhishthira to weep uncontrollably and curse all womankind never to keep secrets.',
        prompt_te: 'స్త్రీ పర్వంలో కుంతీదేవి కర్ణుడు పాండవుల పెద్దన్నయ్య అనే నిజాన్ని వెల్లడించినప్పుడు, ధర్మరాజు తట్టుకోలేక రోదిస్తూ స్త్రీలందరికీ ఏ రహస్యాన్నీ దాచలేరని శాపమిచ్చాడు.',
        prompt_hi: 'स्त्री पर्व में माता कुंती ने जब कर्ण के जन्म का सत्य प्रकट किया कि वह उनका ज्येष्ठ भाई था, तब युधिष्ठिर ने फूट-फूट कर रोते हुए समस्त स्त्री जाति को शाप दिया कि वे कोई भी रहस्य छिपा नहीं सकेंगी।',
        correctAnswer: true,
        learnMore: 'Yudhishthira performed Karna’s funeral rites with royal honors: "Had we known Karna was our elder brother, this war would never have occurred; he would be sovereign emperor today!"',
        learnMore_te: 'ధర్మరాజు కర్ణునికి చక్రవర్తిలా దహన సంస్కారాలు నిర్వహించి: "కర్ణుడు మా అన్నయ్య అని తెలిస్తే ఈ యుద్ధమే జరిగేది కాదు, ఆయననే సింహాసనంపై కూర్చోబెట్టేవాళ్ళం" అని విలపించాడు.',
        learnMore_hi: 'युधिष्ठिर ने कर्ण का अंतिम संस्कार राजसी सम्मान से किया और कहा: "यदि हमें पहले पता होता, तो हम कर्ण को सम्राट बनाकर स्वयं उनके चरणों में बैठते, यह महाविनाश न होता।"',
        hint: 'Yudhishthira’s famous curse that women cannot keep secrets.',
        hint_te: 'స్త్రీలు రహస్యాలను దాచుకోలేరని ధర్మరాజు ఇచ్చిన శాపం.',
        hint_hi: 'युधिष्ठिर द्वारा स्त्री जाति को दिया गया रहस्य न छिपा पाने का शाप।',
        xpReward: 10
      }
    ]
  },

  // Level 97
  {
    levelNumber: 97,
    partNumber: 10,
    title: 'Shanti Parva & Sri Vishnu Sahasranama',
    title_te: 'శాంతి పర్వం & శ్రీ విష్ణు సహస్రనామ స్తోత్రం',
    title_hi: 'शांति व अनुशासन पर्व: भीष्म उपदेश और श्री विष्णु सहस्रनाम',
    subtitle: 'Rajadharma from the Bed of Arrows & Bhishma’s Nirvana',
    subtitle_te: 'అంపశయ్యపై రాజధర్మ బోధ & భీష్మ ముక్తి',
    subtitle_hi: 'शरशय्या से राजधर्म का अमर उपदेश और पितामह का महाप्रयाण',
    questions: [
      {
        id: 'q97-1',
        type: 'mcq',
        prompt: 'To heal King Yudhishthira’s deep grief and reluctance to rule after the bloodshed, to whom did Lord Krishna guide him to learn statecraft and duty (Rajadharma)?',
        prompt_te: 'రక్తపాతం చూసి విరక్తి చెందిన ధర్మరాజును శాంతింపజేసి, రాజధర్మాలను నేర్చుకోవడానికి శ్రీకృష్ణుడు ఎవరి వద్దకు తీసుకెళ్ళాడు?',
        prompt_hi: 'रक्तपात से विरक्त होकर राजपाट छोड़ने का विचार कर रहे युधिष्ठिर को राजधर्म और जीवन-दर्शन सिखाने के लिए श्रीकृष्ण किसके पास ले गए?',
        options: [
          'Grandfather Bhishma, who was lying upon the bed of arrows awaiting the holy Uttarayana solstice',
          'Sage Agastya in the southern mountains',
          'Indra on Mount Meru',
          'The royal priests of Kashi'
        ],
        options_te: [
          'ఉత్తరాయణ పుణ్యకాలం కోసం అంపశయ్యపై వేచి చూస్తున్న కురువృద్ధుడు భీష్మ పితామహుని వద్దకు',
          'దక్షిణ పర్వతాలలోని అగస్త్య మహర్షి వద్దకు',
          'మేరు పర్వతంపై ఉన్న ఇంద్రుని వద్దకు',
          'కాశీ నగర పండితుల వద్దకు'
        ],
        options_hi: [
          'शरशय्या पर उत्तरायण की प्रतीक्षा कर रहे पितामह भीष्म के पास',
          'दक्षिण भारत में महर्षि अगस्त्य के पास',
          'इंद्रलोक में देवराज इंद्र के पास',
          'काशी के पुरोहितों के पास'
        ],
        correctIndex: 0,
        learnMore: 'For weeks, Bhishma delivered the monumental discourses on governance, ethics, philosophy, and duties that form the Shanti and Anushasana Parvas—the encyclopedia of Sanatana Dharma.',
        learnMore_te: 'భీష్ముడు రాజనీతి, మోక్ష ధర్మం, దాన ధర్మాలపై చేసిన అమూల్యమైన ఉపదేశాలే శాంతి, అనుశాసనిక పర్వాలుగా భారతంలో నిలిచిపోయాయి.',
        learnMore_hi: 'पितामह भीष्म ने शरशय्या से राजधर्म, आपद्धर्म और मोक्षधर्म का जो उपदेश दिया, वह महाभारत के शांति और अनुशासन पर्व के रूप में ज्ञान का महासागर है।',
        hint: 'The grandsire lying on his bed of arrows.',
        hint_te: 'అంపశయ్యపై ఉన్న తాత భీష్ముడు.',
        hint_hi: 'शरशय्या पर लेटे पितामह भीष्म।',
        xpReward: 10
      },
      {
        id: 'q97-2',
        type: 'mcq',
        prompt: 'In the Anushasana Parva, when Yudhishthira asked what is the supreme hymn that bestows liberation and removes all sins, what jewel did Bhishma sing from his bed of arrows?',
        prompt_te: 'సకల పాపాలను పోగొట్టి మోక్షాన్ని ప్రసాదించే పరమ శ్రేష్టమైన స్తోత్రం ఏదని ధర్మరాజు అడిగినప్పుడు, భీష్ముడు అంపశయ్యపై నుండి దేనిని ఉపదేశించాడు?',
        prompt_hi: 'अनुशासन पर्व में जब युधिष्ठिर ने पूछा कि संसार के समस्त दुखों और पापों से मुक्ति दिलाने वाला सर्वोत्तम स्तोत्र कौन-सा है, तब भीष्म ने किसका उपदेश दिया?',
        options: [
          'The Sri Vishnu Sahasranama Stotram (The Thousand Holy Names of Lord Vishnu)',
          'The Aditya Hridaya Stotram',
          'The Shiva Tandava Stotram',
          'The Gayatri Mantra chant'
        ],
        options_te: [
          'శ్రీ విష్ణు సహస్రనామ స్తోత్రం (శ్రీ మహావిష్ణువు యొక్క వేయి నామాలు)',
          'ఆదిత్య హృదయ స్తోత్రం',
          'శివ తాండవ స్తోత్రం',
          'గాయత్రీ మంత్ర జపం'
        ],
        options_hi: [
          'श्री विष्णु सहस्रनाम स्तोत्र (भगवान विष्णु के एक हजार पवित्र नाम)',
          'आदित्य हृदय स्तोत्र',
          'शिव तांडव स्तोत्र',
          'गायत्री महामंत्र'
        ],
        correctIndex: 0,
        learnMore: 'Pointing to Krishna sitting silently before him, Bhishma proclaimed: "He is the supreme shelter, the primal Purusha, the eternal truth!" and chanted the 1,000 sacred names.',
        learnMore_te: 'ఎదురుగా కూర్చున్న శ్రీకృష్ణుడిని చూపిస్తూ: "ఈయనే సమస్త లోకాలకు ఏకైక రక్షకుడు" అని భీష్ముడు విష్ణు సహస్రనామాలను గానం చేశాడు.',
        learnMore_hi: 'सामने बैठे श्रीकृष्ण की ओर संकेत करते हुए भीष्म ने कहा कि वे ही परम पुरुष और समस्त लोकों के आश्रय हैं, और उन्होंने एक हजार नामों का गान किया।',
        hint: 'The 1,000 names of Lord Vishnu revealed in the Mahabharata.',
        hint_te: 'విష్ణు సహస్రనామాలు.',
        hint_hi: 'भगवान विष्णु के एक हजार नाम।',
        xpReward: 10
      },
      {
        id: 'q97-3',
        type: 'true_false',
        prompt: 'When the auspicious Uttarayana solstice arrived, Bhishma voluntarily withdrew his life-breaths through the crown of his head (Brahmarandhra) by his boon of Ichha-Mrityu, leaving not a mark of pain on his radiant face.',
        prompt_te: 'పవిత్రమైన ఉత్తరాయణ పుణ్యకాలం రాగానే, భీష్ముడు తన ఇచ్ఛామృత్యువు వరం ద్వారా బ్రహ్మరంధ్రం నుండి ప్రాణాలను విడిచి భగవత్ సన్నిధికి చేరాడు.',
        prompt_hi: 'उत्तरायण का पावन समय आने पर पितामह भीष्म ने इच्छा-मृत्यु के वरदान द्वारा योगबल से अपने प्राणों को ब्रह्मरंध्र से त्याग दिया और परमधाम को सिधारे।',
        correctAnswer: true,
        learnMore: 'As his soul ascended like a dazzling meteor into the highest heavens, celestial drums sounded and the sky showered divine blossoms upon the fallen patriarch.',
        learnMore_te: 'ఆయన ఆత్మ ప్రకాశవంతమైన తేజస్సులా ఆకాశంలోకి ఎగిసిపోగా, దేవదుందుభులు మోగాయి, పూలవాన కురిసింది.',
        learnMore_hi: 'पितामह की आत्मा उल्कापिंड की भाँति आकाश में लीन हो गई। देवताओं ने पुष्प वर्षा की और कुरुवंश के सबसे महान स्तंभ का महाप्रयाण हुआ।',
        hint: 'The passing of the grand old warrior at Uttarayana.',
        hint_te: 'ఉత్తరాయణంలో భీష్ముని మోక్షం.',
        hint_hi: 'उत्तरायण में भीष्म का देहत्याग।',
        xpReward: 10
      }
    ]
  },

  // Level 98
  {
    levelNumber: 98,
    partNumber: 10,
    title: 'Thirty-Six Golden Years & The Departure of Krishna',
    title_te: '36 స్వర్ణ సంవత్సరాల పాలన & శ్రీకృష్ణుని నిర్యాణం',
    title_hi: 'छत्तीस वर्ष का धर्मराज और श्रीकृष्ण का महाप्रयाण',
    subtitle: 'The Ashwamedha Yajna, Iron Pestle & Mausala Parva',
    subtitle_te: 'అశ్వమేధ యాగం, ఇనుప రోకలి & మౌసల పర్వం',
    subtitle_hi: 'अश्वमेध यज्ञ, मूसल का शाप और द्वारका का जलमग्न होना',
    questions: [
      {
        id: 'q98-1',
        type: 'mcq',
        prompt: 'Following the war, King Yudhishthira performed the magnificent Ashwamedha Yajna (Horse Sacrifice). How long did the Pandavas rule Hastinapur in absolute peace and justice?',
        prompt_te: 'యుద్ధం తర్వాత ధర్మరాజు అశ్వమేధ యాగం నిర్వహించాడు. పాండవులు హస్తినాపురాన్ని ఎన్ని సంవత్సరాలు సంపూర్ణ ధర్మబద్ధంగా, శాంతియుతంగా పాలించారు?',
        prompt_hi: 'युद्ध के उपरांत युधिष्ठिर ने अश्वमेध यज्ञ संपन्न किया। पांडवों ने हस्तिनापुर पर कितने वर्षों तक शांति और धर्मपूर्वक राज्य किया?',
        options: [
          '36 Golden Years',
          '12 Years',
          '50 Years',
          '100 Years'
        ],
        options_te: [
          '36 స్వర్ణ సంవత్సరాలు',
          '12 సంవత్సరాలు',
          '50 సంవత్సరాలు',
          '100 సంవత్సరాలు'
        ],
        options_hi: [
          '३६ स्वर्णिम वर्ष',
          '१२ वर्ष',
          '५० वर्ष',
          '१०० वर्ष'
        ],
        correctIndex: 0,
        learnMore: 'During these 36 years, rains came on time, famine and crime vanished, and virtue flourished across the empire as prophesied in Gandhari’s curse timeline.',
        learnMore_te: 'ఈ 36 సంవత్సరాల కాలంలో సమయానికి వర్షాలు కురిశాయి, ప్రజలు సుభిక్షంగా జీవించారు; గాంధారి శాపం ప్రకారం 36వ సంవత్సరం రాగానే మార్పు మొదలైంది.',
        learnMore_hi: 'इन ३६ वर्षों में प्रजा अत्यंत सुखी रही, समय पर वर्षा हुई और धर्म का बोलबाला रहा। ३६ वर्ष पूर्ण होते ही गांधारी के शाप का समय निकट आ गया।',
        hint: 'Matches the exact duration specified in Queen Gandhari’s curse.',
        hint_te: 'గాంధారి శాపంలో పేర్కొన్న 36 సంవత్సరాలు.',
        hint_hi: 'माता गांधारी के शाप की ३६ वर्ष की अवधि।',
        xpReward: 10
      },
      {
        id: 'q98-2',
        type: 'mcq',
        prompt: 'How did the destruction of the Yadava dynasty occur at Prabhasa Tirtha, as recorded in the Mausala Parva?',
        prompt_te: 'మౌసల పర్వంలో వివరించిన విధంగా, ప్రభాస తీర్థంలో యదువంశ వినాశనం ఎలా సంభవించింది?',
        prompt_hi: 'मौसल पर्व के अनुसार प्रभास तीर्थ में यदुवंश का विनाश किस प्रकार हुआ?',
        options: [
          'Intoxicated by liquor, they quarreled and struck each other with razor-sharp sea rushes (Eraka grass) that grew from the powder of a cursed iron pestle (Mausala)',
          'An enormous sea monster swallowed their ships',
          'They were struck down by an army from Magadha',
          'They drank poisoned well water'
        ],
        options_te: [
          'మద్యం మత్తులో ఒకరినొకరు నిందించుకుంటూ, మునుల శాపం వల్ల ఇనుప రోకలి పొడి నుండి మొలచిన ఎరక గడ్డితో (కత్తుల వంటి గడ్డితో) కొట్టుకుని ఒకరినొకరు చంపుకున్నారు',
          'సముద్ర రాక్షసుడు ఓడలను మింగేశాడు',
          'మగధ సైన్యం వచ్చి చంపేసింది',
          'విషపూరితమైన బావి నీరు తాగారు'
        ],
        options_hi: [
          'मदिरा के नशे में परस्पर विवाद कर वे ऋषियों के शाप से उत्पन्न लोहे के मूसल के चूर्ण से उपजी "एरका घास" (जो वज्र के समान तीखी थी) से एक-दूसरे का वध करने लगे',
          'समुद्री दैत्य ने जहाज डुबो दिए',
          'मगध की सेना ने आक्रमण कर दिया',
          'विषैला जल पीने से'
        ],
        correctIndex: 0,
        learnMore: 'Sages Vishwamitra, Durvasa, and Kanva had cursed Samba (dressed as a pregnant woman in a prank) to birth an iron pestle that wiped out the dynasty.',
        learnMore_te: 'సాంబుడికి మునులు ఇచ్చిన శాపం వల్ల పుట్టిన ఇనుప రోకలి ఎరక గడ్డిగా మొలిచి, యదువంశాన్ని సర్వనాశనం చేసింది.',
        learnMore_hi: 'ऋषियों के साथ किए गए उपहास के कारण सांब के पेट से लोहे का मूसल उत्पन्न हुआ था, जिसके चूर्ण से उपजी घास ने पूरे यदुवंश का अंत कर दिया।',
        hint: 'The cursed iron pestle and the sharp Eraka reeds.',
        hint_te: 'ఇనుప రోకలి పొడితో మొలిచిన ఎరక గడ్డి.',
        hint_hi: 'मूसल से उत्पन्न तीखी एरका घास।',
        xpReward: 10
      },
      {
        id: 'q98-3',
        type: 'mcq',
        prompt: 'How did Lord Krishna depart from the mortal world to return to Vaikuntha?',
        prompt_te: 'శ్రీకృష్ణ పరమాత్మ ఈ భౌతిక లోకాన్ని వీడి వైకుంఠానికి ఎలా తిరిగి వెళ్ళాడు?',
        prompt_hi: 'भगवान श्रीकृष्ण इस नश्वर संसार को त्यागकर अपने वैकुंठ धाम कैसे लौटे?',
        options: [
          'Resting in yogic meditation under a peepal tree, a hunter named Jara mistook His reddish lotus foot for a deer and shot an arrow tipped with the iron fragment of the pestle',
          'He rode away on a flying horse',
          'He drowned in the ocean waters of Dwaraka',
          'He dissolved into pure light before the assembly at Hastinapur'
        ],
        options_te: [
          'రావిచెట్టు కింద ధ్యానంలో కూర్చుని ఉండగా, ఆయన అరుణ వర్ణపు పాదాన్ని జింక ముఖం అనుకుని జరా అనే వేటగాడు ఆ ఇనుప రోకలి ముక్కతో చేసిన బాణాన్ని ప్రయోగించాడు',
          'ఎగిరే గుర్రంపై వెళ్ళిపోయాడు',
          'ద్వారక సముద్రంలో మునిగిపోయాడు',
          'హస్తినాపుర సభలో కాంతిలో కరిగిపోయాడు'
        ],
        options_hi: [
          'एक पीपल के वृक्ष के नीचे योग-समाधि में बैठे श्रीकृष्ण के लाल चरण को मृग समझकर "जरा" नामक बहेलिए ने मूसल के टुकड़े से बने बाण से प्रहार कर दिया',
          'उड़ने वाले घोड़े पर बैठकर',
          'द्वारका के समुद्र में डूबकर',
          'हस्तिनापुर की सभा में विलीन होकर'
        ],
        correctIndex: 0,
        learnMore: 'The hunter Jara wept in repentance, but Krishna blessed him, revealing that Jara was the rebirth of King Vali whom Rama had once shot from concealment.',
        learnMore_te: 'జరా అనే వేటగాడు కృష్ణుడి పాదాలపై పడి క్షమించమని వేడగా, కృష్ణుడు అతడిని అనుగ్రహించి, త్రేతాయుగంలో రాముడిగా వాలిని చెట్టు చాటు నుండి కొట్టినందుకు రుణం తీరిందని చెప్పి వైకుంఠానికి పయనమయ్యాడు.',
        learnMore_hi: 'जरा बहेलिया त्रेतायुग के वानरराज बालि का पुनर्जन्म था जिसे श्रीराम ने छिपकर बाण मारा था। श्रीकृष्ण ने उसे अभयदान देकर अपने धाम गमन किया।',
        hint: 'The hunter Jara mistook Krishna’s foot for a deer.',
        hint_te: 'జింక అనుకుని బాణం వేసిన జరా అనే వేటగాడు.',
        hint_hi: 'जरा नामक बहेलिए का बाण।',
        xpReward: 10
      }
    ]
  },

  // Level 99
  {
    levelNumber: 99,
    partNumber: 10,
    title: 'Mahaprasthana Parva: The Great Ascent',
    title_te: 'మహాప్రస్థానిక పర్వం: హిమాలయ యాత్ర',
    title_hi: 'महाप्रस्थानिक पर्व: हिमालय की अंतिम यात्रा',
    subtitle: 'Renunciation, The Falling Pilgrims & The Loyal Dog',
    subtitle_te: 'సన్యాస దీక్ష & పాండవులతో నడిచిన శునకం',
    subtitle_hi: 'संसार त्याग, एक-एक का गिरना और निष्ठावान श्वान',
    questions: [
      {
        id: 'q99-1',
        type: 'mcq',
        prompt: 'Upon learning that Lord Krishna had departed and Dwaraka was submerged beneath the sea, what historic decision did the five Pandavas and Draupadi make?',
        prompt_te: 'శ్రీకృష్ణ నిర్యాణం జరిగిందని, ద్వారకా నగరం సముద్రంలో మునిగిపోయిందని తెలిసిన వెంటనే పాండవులు మరియు ద్రౌపది ఏ చరిత్రాత్మక నిర్ణయం తీసుకున్నారు?',
        prompt_hi: 'श्रीकृष्ण के गोलोक गमन और द्वारका के समुद्र में समाने का समाचार सुनकर पाँचों पांडवों और द्रौपदी ने क्या ऐतिहासिक निर्णय लिया?',
        options: [
          'They crowned young Parikshit as Emperor of Hastinapur, gave up royal robes for tree bark, and embarked on foot for the Mahaprasthana (The Great Final Journey to the Himalayas)',
          'They waged war on surrounding tribes',
          'They rebuilt the submerged city of Dwaraka',
          'They constructed five massive golden pyramids'
        ],
        options_te: [
          'యువ పరీక్షిత్తుకు హస్తినాపుర చక్రవర్తిగా పట్టాభిషేకం చేసి, నారచీరలు ధరించి, హిమాలయాల వైపు మహాప్రస్థాన యాత్రకు కాలినడకన బయలుదేరారు',
          'పొరుగు రాజ్యాలపై దండయాత్ర చేశారు',
          'మునిగిపోయిన ద్వారకను తిరిగి నిర్మించారు',
          'ఐదు బంగారు పిరమిడ్లు నిర్మించారు'
        ],
        options_hi: [
          'उन्होंने युवा परीक्षित को सम्राट घोषित किया, राजसी वस्त्र त्यागकर वल्कल वस्त्र पहने और हिमालय की ओर "महाप्रस्थान" (अंतिम यात्रा) पर निकल पड़े',
          'अन्य राजाओं पर आक्रमण कर दिया',
          'द्वारका को पुनः बसाने लगे',
          'विशाल स्वर्ण स्मारक बनाने लगे'
        ],
        correctIndex: 0,
        learnMore: 'They entrusted the kingdom to Parikshit and the regent Yuyutsu, walking northward toward Mount Meru accompanied only by a stray dog who followed them.',
        learnMore_te: 'పరీక్షిత్తుకు రాజ్యాన్ని, యుయుత్సునికి రక్షణ బాధ్యతలను అప్పగించి, ఉత్తర దిక్కుగా నడుస్తూ మేరు పర్వతం వైపు పయనమయ్యారు. వారి వెంటే ఒక కుక్క కూడా నడిచింది.',
        learnMore_hi: 'परीक्षित को हस्तिनापुर का राजा और युयुत्सु को संरक्षक बनाकर वे उत्तर की ओर चले। उनके साथ केवल एक निष्ठावान कुत्ता चला।',
        hint: 'Crowning Parikshit and walking toward the Himalayas.',
        hint_te: 'పరీక్షిత్తుకు పట్టాభిషేకం చేసి నారచీరలతో హిమాలయాలకు వెళ్ళడం.',
        hint_hi: 'परीक्षित को राज सौंपकर महाप्रस्थान करना।',
        xpReward: 10
      },
      {
        id: 'q99-2',
        type: 'mcq',
        prompt: 'As the pilgrims scaled the freezing heights of the Himalayas, they fell dead one by one. In what order did they fall, and who alone remained standing with the dog?',
        prompt_te: 'మంచుకొండలను ఎక్కుతూ ఉండగా వారు ఒక్కొక్కరుగా మరణించారు. మొదట ఎవరు పడిపోయారు, మరియు కుక్కతో కలిసి చివరకు మిగిలింది ఎవరు?',
        prompt_hi: 'हिमालय की बर्फीली ऊंचाइयों पर चढ़ते समय वे एक-एक कर गिरते गए। गिरने का क्रम क्या था और अंत में कुत्ते के साथ केवल कौन जीवित बचा रहा?',
        options: [
          'Draupadi fell first, followed by Sahadeva, Nakula, Arjuna, and Bhima; King Yudhishthira alone reached the summit on foot accompanied by the dog',
          'Bhima fell first, followed by Arjuna and Draupadi',
          'Yudhishthira fell first because he was the eldest',
          'All fell together in a single avalanche'
        ],
        options_te: [
          'మొదట ద్రౌపది, ఆ తర్వాత సహదేవుడు, నకులుడు, అర్జునుడు, చివరగా భీముడు పడిపోయారు; ధర్మరాజు ఒక్కడే సశరీరంగా ఆ శునకంతో కలిసి శిఖరాన్ని చేరుకున్నాడు',
          'భీముడు మొదట పడిపోయాడు',
          'పెద్దవాడైన ధర్మరాజు మొదట పడిపోయాడు',
          'మంచు తుఫానులో అందరూ ఒకేసారి పడిపోయారు'
        ],
        options_hi: [
          'सबसे पहले द्रौपदी गिरीं, फिर सहदेव, नकुल, अर्जुन और अंत में भीम गिरे; केवल युधिष्ठिर उस कुत्ते के साथ जीवित शिखर तक पहुँचे',
          'भीम सबसे पहले गिरे',
          'युधिष्ठिर सबसे पहले गिरे',
          'सब एक साथ हिमस्खलन में समा गए'
        ],
        correctIndex: 0,
        learnMore: 'Each fell due to a subtle attachment: Draupadi favored Arjuna; Sahadeva prided his intellect; Nakula his beauty; Arjuna his archery; Bhima his gluttony and physical strength.',
        learnMore_te: 'ప్రతి ఒక్కరికీ ఒక చిన్న దోషం ఉండటం వల్ల పడిపోయారు: ద్రౌపదికి అర్జునుడిపై పక్షపాతం, సహదేవుడికి బుద్ధి గర్వం, నకులుడికి రూప గర్వం, అర్జునుడికి విలువిద్య గర్వం, భీమునికి తిండిపై ఆశ, బలగర్వం.',
        learnMore_hi: 'प्रत्येक के पतन का एक सूक्ष्म कारण था: द्रौपदी का अर्जुन के प्रति विशेष पक्षपात, सहदेव का ज्ञान का अभिमान, नकुल का रूप का गर्व, अर्जुन का धनुर्विद्या का अहंकार और भीम का बल का घमंड।',
        hint: 'Draupadi fell first; Yudhishthira alone stood firm.',
        hint_te: 'మొదట ద్రౌపది, చివరకు ధర్మరాజు.',
        hint_hi: 'पहले द्रौपदी और अंत में केवल युधिष्ठिर।',
        xpReward: 10
      },
      {
        id: 'q99-3',
        type: 'true_false',
        prompt: 'When Indra arrived with his celestial chariot at the summit to invite Yudhishthira into Swarga in his mortal body, Yudhishthira refused to board unless the faithful dog was allowed inside with him.',
        prompt_te: 'స్వర్గ రథంతో వచ్చిన ఇంద్రుడు ధర్మరాజును సశరీరంగా స్వర్గానికి రమ్మని ఆహ్వానించినప్పుడు, తన వెంట వచ్చిన విశ్వాసంగల శునకాన్ని రానిస్తేనే రథం ఎక్కుతానని ధర్మరాజు స్పష్టం చేశాడు.',
        prompt_hi: 'जब इंद्र अपना दिव्य रथ लेकर युधिष्ठिर को सशरीर स्वर्ग ले जाने आए, तब युधिष्ठिर ने उस निष्ठावान कुत्ते को साथ लिए बिना स्वर्ग जाने से स्पष्ट मना कर दिया।',
        correctAnswer: true,
        learnMore: 'Indra argued: "Dogs have no place in heaven; abandon it!" Yudhishthira replied: "To abandon a faithful dependent seeking refuge is as great a sin as slaying a Brahmin. I will not enter heaven without him!"',
        learnMore_te: 'కుక్కకు స్వర్గంలో ప్రవేశం లేదని ఇంద్రుడు చెప్పగా, ధర్మరాజు: "నన్ను నమ్ముకుని వచ్చిన మూగజీవిని వదిలి స్వర్గానికి రావడం కంటే మహాపాపం లేదు" అని నిరాకరించాడు.',
        learnMore_hi: 'इंद्र ने कहा कि कुत्ते के लिए स्वर्ग में कोई स्थान नहीं है। युधिष्ठिर ने उत्तर दिया: "शरण में आए भक्त और निष्ठावान का त्याग करना ब्रह्महत्या के समान पाप है; मैं इसके बिना स्वर्ग नहीं जाऊँగా!"',
        hint: 'Yudhishthira refused heaven without his faithful four-legged companion.',
        hint_te: 'కుక్క లేకుండా స్వర్గానికి వెళ్ళనన్న ధర్మరాజు.',
        hint_hi: 'कुत्ते को छोड़े बिना स्वर्ग जाने से इनकार।',
        xpReward: 10
      }
    ]
  },

  // Level 100
  {
    levelNumber: 100,
    partNumber: 10,
    title: 'Swargarohana Parva: The Final Test & Eternal Unity',
    title_te: 'స్వర్గారోహణ పర్వం: పరమ ధర్మ పరీక్ష & శాశ్వత మోక్షం',
    title_hi: 'स्वर्गारोहण पर्व: धर्म की अंतिम परीक्षा और शाश्वत सद्गति',
    subtitle: 'The Illusions Dispelled, The Great Reunion & The Scholar’s Crown',
    subtitle_te: 'మాయ వీడింది, ఆత్మల ఐక్యత & మహాభారత విద్వాంసుని కిరీటం',
    subtitle_hi: 'माया का अंत, वैकुंठ में मिलन और महाभारत विद्वान का गौरव',
    questions: [
      {
        id: 'q100-1',
        type: 'mcq',
        prompt: 'When Yudhishthira steadfastly refused to abandon the dog at the gates of Swarga, what miraculous transformation took place before his eyes?',
        prompt_te: 'స్వర్గ ద్వారాల వద్ద కుక్కను విడిచిపెట్టడానికి ధర్మరాజు నిరాకరించినప్పుడు, ఆ కుక్క ఏ దివ్య రూపంలోకి మారింది?',
        prompt_hi: 'जब युधिष्ठिर ने कुत्ते को छोड़ने से इनकार कर दिया, तब वह कुत्ता किस दिव्य रूप में परिवर्तित हो गया?',
        options: [
          'The dog revealed Himself to be Lord Dharma (Yama), his divine father, who embraced Yudhishthira and praised him as peerless in compassion across all the three worlds',
          'The dog turned into a winged white Pegasus',
          'The dog transformed into an enormous mountain of gold',
          'The dog spoke with the voice of Lord Brahma'
        ],
        options_te: [
          'ఆ శునకం సాక్షాత్తూ యమధర్మరాజుగా (ధర్మదేవుడిగా) మారి, తన కుమారుడైన ధర్మరాజును కౌగిలించుకుని ముల్లోకాలలో నీకు సాటివచ్చే దయామయుడు లేడని ప్రశంసించాడు',
          'రెక్కల గుర్రంగా మారింది',
          'బంగారు పర్వతంగా మారింది',
          'బ్రహ్మదేవుని కంఠంతో మాట్లాడింది'
        ],
        options_hi: [
          'वह श्वान साक्षात् धर्मराज (यमदेव) के रूप में प्रकट हुआ, जिन्होंने अपने पुत्र युधिष्ठिर को गले लगाकर कहा कि तीनों लोकों में तुम्हारी जैसी दया और सत्यनिष्ठा किसी में नहीं है',
          'वह पंखों वाला घोड़ा बन गया',
          'वह सोने का पर्वत बन गया',
          'वह ब्रह्मा जी की वाणी में बोलने लगा'
        ],
        correctIndex: 0,
        learnMore: 'Dharma said: "Twice have I tested your virtue, my son—once at the enchanted lake as the Yaksha, and today as this faithful hound. In both you proved peerless!"',
        learnMore_te: 'ధర్మదేవుడు: "పూర్వం యక్షప్రశ్నల వద్ద సరస్సు తీరాన, ఇప్పుడు ఈ శునక రూపంలో నిన్ను పరీక్షించాను; రెండు పరీక్షలలోనూ నీవు ఉత్తముడిగా నిలిచావు" అని దీవించాడు.',
        learnMore_hi: 'धर्मराज ने कहा: "वत्स! मैंने दो बार तुम्हारी परीक्षा ली—एक बार द्वैतवन में यक्ष बनकर और आज इस श्वान के रूप में। दोनों बार तुमने सिद्ध कर दिया कि तुम साक्षात् धर्मस्वरूप हो।"',
        hint: 'The dog was Lord Dharma, the god of righteousness.',
        hint_te: 'సాక్షాత్తూ ధర్మదేవుడు.',
        hint_hi: 'साक्षात् धर्मराज (यमदेव)।',
        xpReward: 10
      },
      {
        id: 'q100-2',
        type: 'mcq',
        prompt: 'In Swargarohana Parva, why was Yudhishthira initially shown a horrifying illusion of hell where his brothers suffered, while Duryodhana sat on a golden throne in heaven?',
        prompt_te: 'స్వర్గారోహణ పర్వంలో మొదట ధర్మరాజుకు నరకంలో సోదరులు బాధపడుతున్నట్లు, స్వర్గంలో దుర్యోధనుడు సింహాసనంపై ఉన్నట్లు ఎందుకు కనిపించింది?',
        prompt_hi: 'स्वर्गारोहण पर्व में प्रारंभ में युधिष्ठिर को नरक में अपने भाइयों के कष्ट और स्वर्ग में दुर्योधन के सिंहासन पर बैठने का भयानक दृश्य क्यों दिखाया गया?',
        options: [
          'It was a final psychological illusion (Maya) to cleanse Yudhishthira’s single momentary half-truth regarding Ashwatthama, and because Duryodhana had died facing forward on the field of honor',
          'Because the gods had made a clerical mistake in their registers',
          'Because Duryodhana had bribed the gatekeepers of heaven',
          'Because the Pandavas had committed unforgivable cosmic sins'
        ],
        options_te: [
          'పూర్వం యుద్ధంలో అశ్వత్థామ గురించి పలికిన ఏకైక అర్ధ సత్యం పాపాన్ని కడిగివేయడానికి సృష్టించిన చివరి మాయ; అలాగే దుర్యోధనుడు యుద్ధభూమిలో ఎదురొడ్డి వీరమరణం పొందినందుకు ఆ మాత్రం స్వర్గఫలం లభించింది',
          'స్వర్గ దూతలు లెక్కలు తప్పుగా రాసుకున్నందున',
          'దుర్యోధనుడు ద్వారపాలకులకు లంచం ఇచ్చినందున',
          'పాండవులు క్షమించరాని పాపం చేసినందున'
        ],
        options_hi: [
          'यह युधिष्ठिर द्वारा युद्ध में बोले गए एकमात्र अर्ध-सत्य (अश्वत्थामा हतः) के प्रायश्चित्त हेतु अंतिम माया थी, तथा दुर्योधन को क्षत्रिय धर्म से लड़ते हुए वीरगति पाने का फल मिला था',
          'यमराज के बहीखाते में भूल हो गई थी',
          'दुर्योधन ने द्वारपालों को प्रसन्न कर लिया था',
          'पांडवों ने महापाप किए थे'
        ],
        correctIndex: 0,
        learnMore: 'As soon as Yudhishthira chose to stay in hell to comfort his suffering brothers rather than enjoy heaven alone, the illusion dissolved into celestial radiant bliss.',
        learnMore_te: 'సుఖాల స్వర్గం కంటే తన సోదరులున్న నరకంలోనే ఉంటానని ధర్మరాజు దృఢంగా చెప్పగానే, ఆ మాయ అంతరించి అందరూ దివ్య శరీరాలతో ప్రత్యక్షమయ్యారు.',
        learnMore_hi: 'जैसे ही युधिष्ठिर ने कहा कि वे स्वर्ग के सुख को त्यागकर अपने भाइयों के साथ नरक में ही रहेंगे, माया का पर्दा हट गया और सब परम आनंद में लीन हो गए।',
        hint: 'A final cleansing of his half-truth and a test of his brotherhood.',
        hint_te: 'అర్ధ సత్య పాప ప్రక్షాళన కోసం ఏర్పడిన మాయ.',
        hint_hi: 'अर्ध-सत्य के पाप का निवारण और अंतिम परीक्षा।',
        xpReward: 10
      },
      {
        id: 'q100-3',
        type: 'true_false',
        prompt: 'At the conclusion of the epic, taking a holy bath in the celestial Mandakini (Heavenly Ganga), all human grudges, jealousies, and sorrow dissolved, and all kings and heroes reunited in their eternal divine forms in Swarga and Vaikuntha.',
        prompt_te: 'మహాభారత ముగింపులో దివ్య గంగ (మందాకిని)లో స్నానమాచరించిన తర్వాత వైరాలు, అసూయలు, దుఃఖాలన్నీ తొలగిపోయి, అందరు వీరులూ తమ శాశ్వత దివ్య రూపాలలో పరమ శాంతిని పొందారు.',
        prompt_hi: 'महाभारत के समापन पर देवनदी मंदाकिनी में स्नान कर सभी प्रकार के राग, द्वेष और शोक समाप्त हो गए, और समस्त कुरु वीर अपने शाश्वत देव-स्वरूपों में आनंदपूर्वक एक हो गए।',
        correctAnswer: true,
        learnMore: 'Vyasa concludes: "Dharma is eternal; pleasure and pain are transient. From Dharma arises prosperity and bliss. Why then do men not follow Dharma?" With this, the 100-level journey is complete!',
        learnMore_te: 'వ్యాస మహర్షి సందేశం: "ధర్మాదర్థశ్చ కామశ్చ స కిమర్థం న సేవ్యతే" - ధర్మం నుండే సర్వమూ లభిస్తుంది, ధర్మాన్ని ఎల్లప్పుడూ ఆచరించండి. దీంతో మీ 100 స్థాయిల మహాభారత ప్రయాణం సంపూర్ణమైంది!',
        learnMore_hi: 'महर्षि वेदव्यास का अमर संदेश: "ऊर्ध्वबाहुर्विरौम्येष न च कश्चिच्छृणोति माम्। धर्मादर्थश्च कामश्च स किमर्थं न सेव्यते॥" धर्म से ही सब कुछ प्राप्त होता है। 100 स्तरों की यह यात्रा संपन्न हुई!',
        hint: 'The immortal resolution: "Yato Dharmastato Jayah" (Where there is Dharma, there is victory).',
        hint_te: 'యతో ధర్మస్తతో జయః - ధర్మం ఉన్నచోటే విజయం.',
        hint_hi: 'यतो धर्मस्ततो जयः — जहाँ धर्म है, वहीं विजय है।',
        xpReward: 10
      }
    ]
  }
];
