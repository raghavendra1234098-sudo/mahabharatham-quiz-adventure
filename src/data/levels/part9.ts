import { Level } from '../../types/game';

export const PART_9_LEVELS: Level[] = [
  // Level 81
  {
    levelNumber: 81,
    partNumber: 9,
    title: 'Guru Drona Takes Command & Bhagadatta’s Elephant',
    title_te: 'ద్రోణాచార్యుని సేనాధిపత్యం & భగదత్తుని సుప్రతీకం',
    title_hi: 'द्रोणाचार्य का सेनापतित्व और भगदत्त का वैष्णवास्त्र',
    subtitle: 'Days 11–12: The Plan to Capture Yudhishthira',
    subtitle_te: '11–12వ రోజులు: ధర్మరాజును బంధించే వ్యూహం',
    subtitle_hi: '११-१२वाँ दिन: युधिष्ठिर को बंदी बनाने का षड्यंत्र',
    questions: [
      {
        id: 'q81-1',
        type: 'mcq',
        prompt: 'What specific pledge did Acharya Drona make to Duryodhana upon assuming supreme command of the Kaurava forces on Day 11?',
        prompt_te: '11వ రోజున కౌరవ సర్వసేనాధిపతిగా బాధ్యతలు చేపట్టిన ద్రోణాచార్యుడు దుర్యోధనుడికి ఏమని వాగ్దానం చేశాడు?',
        prompt_hi: '११वें दिन कौरव सेना का सेनापति बनने पर द्रोणाचार्य ने दुर्योधन को क्या विशिष्ट वचन दिया?',
        options: [
          'To capture King Yudhishthira alive, provided Arjuna was lured far away from his brother’s defense',
          'To kill all five Pandavas before sunset of the first day',
          'To destroy the city of Indraprastha with a firestorm',
          'To crown Karna as king of the Kurus'
        ],
        options_te: [
          'అర్జునుడిని దూరంగా తీసుకెళ్తే, ధర్మరాజును సజీవంగా బంధించి తెచ్చి నీకు అప్పగిస్తానని',
          'మొదటి రోజే ఐదుగురు పాండవులను చంపేస్తానని',
          'ఇంద్రప్రస్థ నగరాన్ని అగ్నితో నాశనం చేస్తానని',
          'కర్ణుడికి కురు సామ్రాజ్య పట్టాభిషేకం చేస్తానని'
        ],
        options_hi: [
          'यदि अर्जुन को किसी प्रकार युद्धभूमि से दूर हटा दिया जाए, तो वे युधिष्ठिर को जीवित बंदी बनाकर सौंप देंगे',
          'पहले ही दिन पाँचों पांडवों का वध कर देंगे',
          'इंद्रप्रस्थ को अग्नि में भस्म कर देंगे',
          'कर्ण को कुरु साम्राज्य का राजा बना देंगे'
        ],
        correctIndex: 0,
        learnMore: 'Duryodhana did not want Yudhishthira dead, fearing total Pandava wrath; he planned to force Yudhishthira into another game of dice to exile them again.',
        learnMore_te: 'ధర్మరాజును చంపితే పాండవుల క్రోధం తట్టుకోలేమని, సజీవంగా పట్టుకుని మళ్ళీ జూదమాడించి అడవులకు పంపవచ్చని దుర్యోధనుడి దురాలోచన.',
        learnMore_hi: 'दुर्योधन युधिष्ठिर को जीवित पकड़कर पुनः द्यूत क्रीड़ा में हराकर फिर से बारह वर्ष के वनवास में भेजना चाहता था।',
        hint: 'Capture Yudhishthira alive if Arjuna is absent.',
        hint_te: 'అర్జునుడు లేనప్పుడు ధర్మరాజును సజీవంగా పట్టుకోవడం.',
        hint_hi: 'युधिष्ठिर को जीवित बंदी बनाने की योजना।',
        xpReward: 10
      },
      {
        id: 'q81-2',
        type: 'mcq',
        prompt: 'On Day 12, when aged King Bhagadatta of Pragjyotisha hurled the invincible Vaishnavastra at Arjuna, how was Arjuna saved from certain death?',
        prompt_te: '12వ రోజున ప్రాగ్‌జ్యోతిషపు రాజు భగదత్తుడు అర్జునుడిపై తిరుగులేని వైష్ణవాస్త్రాన్ని ప్రయోగించినప్పుడు, అర్జునుడిని ఎవరు, ఎలా కాపాడారు?',
        prompt_hi: '१२वें दिन जब प्राग्ज्योतिषपुर के राजा भगदत्त ने अर्जुन पर अमोघ वैष्णवास्त्र चलाया, तब अर्जुन की प्राण रक्षा कैसे हुई?',
        options: [
          'Lord Krishna stepped forward on the chariot and took the missile on His own chest, where it turned into a fragrant garland of flowers (Vaijayanti mala)',
          'Arjuna shot a thousand arrows that vaporized the weapon in mid-air',
          'Bhima caught the weapon in his bare fists',
          'The weapon dissolved harmlessly into the morning mist'
        ],
        options_te: [
          'శ్రీకృష్ణుడు రథంపై ముందుకొచ్చి ఆ అస్త్రాన్ని తన వక్షస్థలంపై స్వీకరించాడు; అది వెంటనే సువాసనలు వెదజల్లే వైజయంతి పూలమాలగా మారింది',
          'అర్జునుడు వేయి బాణాలతో ఆ అస్త్రాన్ని గాల్లోనే నాశనం చేశాడు',
          'భీముడు తన చేతులతో పట్టుకున్నాడు',
          'అస్త్రం మంచులో కరిగిపోయింది'
        ],
        options_hi: [
          'श्रीकृष्ण स्वयं आगे आ गए और उस दिव्यास्त्र को अपनी छाती पर ले लिया, जहाँ वह सुगंधित वैजयंती माला बनकर उनके गले में सुशोभित हो गया',
          'अर्जुन ने हजारों बाण मारकर उसे हवा में ही नष्ट कर दिया',
          'भीम ने उसे अपनी गदा से रोक लिया',
          'वह अस्त्र कोहरे में विलीन हो गया'
        ],
        correctIndex: 0,
        learnMore: 'The Vaishnavastra belonged originally to Lord Vishnu (given to Narakasura, Bhagadatta’s father). It could only return peacefully to its supreme master, Krishna.',
        learnMore_te: 'వైష్ణవాస్త్రం నరకాసురుడి తండ్రి అయిన విష్ణువు యొక్క స్వంత అస్త్రం. కాబట్టి అది తన నిజమైన అధిపతి అయిన శ్రీకృష్ణుడి వద్దకు చేరగానే పూలమాలగా మారింది.',
        learnMore_hi: 'वैष्णवास्त्र साक्षात् भगवान विष्णु का ही अस्त्र था (जो नरकासुर को दिया गया था)। अतः श्रीकृष्ण के स्पर्श से वह शांत होकर वैजयंती माला बन गया।',
        hint: 'It turned into a divine garland around Krishna’s neck.',
        hint_te: 'శ్రీకృష్ణుడి మెడలో పూలమాలగా మారిన అస్త్రం.',
        hint_hi: 'श्रीकृष्ण के वक्ष पर माला बन जाने वाला अस्त्र।',
        xpReward: 10
      },
      {
        id: 'q81-3',
        type: 'true_false',
        prompt: 'To draw Arjuna away from Yudhishthira so Drona could spring his trap, Susharma and the Trigarta warriors took a solemn oath of suicide (Samsaptakas) and challenged Arjuna to the southern field.',
        prompt_te: 'ద్రోణుడు ధర్మరాజును బంధించడానికి వీలుగా, సుశర్మ నేతృత్వంలోని త్రిగర్త వీరులు "సంశప్తకులు"గా చావో రేవో తేల్చుకుంటామని ప్రమాణం చేసి అర్జునుడిని దక్షిణ దిక్కుకు లాగారు.',
        prompt_hi: 'द्रोणाचार्य की योजना को सफल बनाने के लिए सुशर्मा और त्रिगर्त देश के योद्धाओं ने प्राण त्यागने की प्रतिज्ञा (संशप्तक) लेकर अर्जुन को दक्षिण दिशा की ओर युद्ध के लिए ललकारा।',
        correctAnswer: true,
        learnMore: 'Samsaptakas were warriors sworn before sacred sacrificial fires never to retreat alive. Arjuna had to defeat them all day, leaving Yudhishthira exposed.',
        learnMore_te: 'సంశప్తకులు అనగా యజ్ఞాగ్ని సాక్షిగా వెనుదిరగబోమని, శత్రువును చంపైనా చస్తామని ప్రతిజ్ఞ చేసిన యోధులు. వారిని ఎదుర్కోవడానికి అర్జునుడు వెళ్ళవలసి వచ్చింది.',
        learnMore_hi: 'संशप्तक वे योद्धा थे जो अग्नि को साक्षी मानकर या तो शत्रु को मारने या स्वयं वीरगति पाने की शपथ लेते थे। उन्होंने अर्जुन को पूरे दिन उलझाए रखा।',
        hint: 'Samsaptaka literally means "those sworn under oath".',
        hint_te: 'మరణ శపథం చేసిన సంశప్తకులు.',
        hint_hi: 'प्राणों की बाजी लगाने वाले संशप्तक योद्धा।',
        xpReward: 10
      }
    ]
  },

  // Level 82
  {
    levelNumber: 82,
    partNumber: 9,
    title: 'The Chakravyuha & The Fearless Youth',
    title_te: 'చక్రవ్యూహం & అభిమన్యుని ధైర్యం',
    title_hi: 'चक्रव्यूह रचना और वीर अभिमन्यु का प्रवेश',
    subtitle: 'Day 13: Drona’s Insoluble Wheel Formation',
    subtitle_te: '13వ రోజు: ద్రోణుని అభేద్య చక్రవ్యూహం',
    subtitle_hi: '१३वाँ दिन: द्रोण का अभेद्य चक्रव्यूह',
    questions: [
      {
        id: 'q82-1',
        type: 'mcq',
        prompt: 'On Day 13, Guru Drona arranged the Kaurava army into the formidable Chakravyuha (Wheel Formation). Who alone among the Pandava forces present knew the secret of penetrating inside it?',
        prompt_te: '13వ రోజున ద్రోణాచార్యుడు చక్రవ్యూహం పన్నినప్పుడు, అక్కడ ఉన్న పాండవ సైన్యంలో ఆ వ్యూహాన్ని ఛేదించి లోపలికి ప్రవేశించగల రహస్యం తెలిసిన ఏకైక వీరుడు ఎవరు?',
        prompt_hi: '१३वें दिन जब द्रोणाचार्य ने अभेद्य चक्रव्यूह की रचना की, तब अर्जुन की अनुपस्थिति में पांडव पक्ष से केवल कौन उस चक्रव्यूह को भेदकर भीतर प्रवेश करना जानता था?',
        options: [
          'Sixteen-year-old Abhimanyu (son of Arjuna and Subhadra)',
          'King Yudhishthira',
          'Bhima',
          'Dhrishtadyumna'
        ],
        options_te: [
          'పదహారేళ్ళ బాలవీరుడు అభిమన్యుడు (అర్జున-సుభద్రల కుమారుడు)',
          'ధర్మరాజు',
          'భీముడు',
          'ధృష్టద్యుమ్నుడు'
        ],
        options_hi: [
          'सोलह वर्षीय वीर अभिमन्यु (अर्जुन और सुभद्रा के पुत्र)',
          'युधिष्ठिर',
          'भीम',
          'धृष्टद्युम्न'
        ],
        correctIndex: 0,
        learnMore: 'Abhimanyu had learned how to penetrate the Chakravyuha while still in his mother Subhadra’s womb as Arjuna described it, but Subhadra fell asleep before Arjuna explained how to exit.',
        learnMore_te: 'అభిమన్యుడు తల్లి గర్భంలో ఉండగానే తండ్రి అర్జునుడు చెప్పిన వ్యూహ ప్రవేశ రహస్యాన్ని విన్నాడు; కానీ బయటకు వచ్చే మార్గం చెప్పే సమయానికి సుభద్ర నిద్రపోవడంతో ఆ భాగం వినలేకపోయాడు.',
        learnMore_hi: 'अभिमन्यु ने अपनी माता सुभद्रा के गर्भ में ही अर्जुन से चक्रव्यूह भेदने का रहस्य सुन लिया था, किंतु बाहर निकलने का मार्ग सुनने से पहले ही सुभद्रा सो गई थीं।',
        hint: 'The young lion of the Pandavas, nephew of Sri Krishna.',
        hint_te: 'శ్రీకృష్ణుని మేనల్లుడు, అర్జునుని వీర పుత్రుడు.',
        hint_hi: 'श्रीकृष्ण के भानजे और अर्जुन के वीर पुत्र।',
        xpReward: 10
      },
      {
        id: 'q82-2',
        type: 'mcq',
        prompt: 'Why were Bhima, Yudhishthira, Nakula, Sahadeva, and Dhrishtadyumna unable to follow Abhimanyu through the breach to protect him inside the Chakravyuha?',
        prompt_te: 'అభిమన్యుడు చక్రవ్యూహాన్ని ఛేదించి లోపలికి వెళ్ళిన తర్వాత, అతనికి రక్షణగా వెనుక వెళ్ళడానికి ప్రయత్నించిన భీమ, ధర్మరాజాదులను ఎవరు, ఎలా అడ్డుకున్నారు?',
        prompt_hi: 'अभिमन्यु के चक्रव्यूह में प्रवेश करने के बाद भीम, युधिष्ठिर और अन्य पांडव महारथी उसकी सहायता के लिए भीतर क्यों नहीं पहुँच सके?',
        options: [
          'King Jayadratha of Sindhu, empowered by Lord Shiva’s boon to hold back the four Pandavas for a single day, sealed the breach and stopped all reinforcements',
          'A massive stone wall suddenly rose from the ground',
          'Drona shot an arrow that turned into a river of lava',
          'The Pandavas ran out of arrows and had to turn back'
        ],
        options_te: [
          'శివుని వర ప్రభావంతో ఒక రోజు పాటు నలుగురు పాండవులను నిలువరించగల శక్తిని పొందిన సైంధవుడు (జయద్రథుడు) వ్యూహ ద్వారాన్ని మూసివేసి ఎవరినీ లోపలికి రానివ్వకుండా అడ్డుకున్నాడు',
          'భూమి నుండి అకస్మాత్తుగా రాతి గోడ వెలిసింది',
          'ద్రోణుడు లావా నదిని సృష్టించాడు',
          'పాండవుల బాణాలు అయిపోవడంతో వెనక్కి తగ్గారు'
        ],
        options_hi: [
          'सिंधु नरेश जयद्रथ ने, जिसे भगवान शिव से एक दिन के लिए अर्जुन को छोड़कर चारों पांडवों को रोकने का वरदान प्राप्त था, व्यूह का द्वार बंद कर सबको रोक दिया',
          'भूमि से अचानक विशाल दीवार खड़ी हो गई',
          'द्रोण ने अग्नि की नदी बहा दी',
          'पांडवों के बाण समाप्त हो गए थे'
        ],
        correctIndex: 0,
        learnMore: 'After earlier being humiliated by Bhima and Arjuna for abducting Draupadi, Jayadratha had performed intense penance; Lord Shiva granted him the power to check the four Pandavas for one day.',
        learnMore_te: 'గతంలో ద్రౌపదిని అపహరించినందుకు భీమార్జునుల చేతిలో పరాభవం పొందిన జయద్రథుడు శివుడిని ప్రార్థించి, ఒకరోజు పాటు అర్జునుడు తప్ప మిగతా నలుగురు పాండవులను నిలువరించే వరం పొందాడు.',
        learnMore_hi: 'द्रौपदी हरण के समय भीम द्वारा अपमानित जयद्रथ ने शिवजी से वरदान पाया था कि वह एक दिन अर्जुन के अतिरिक्त सभी पांडवों को युद्ध में रोक सकेगा। उसी वरदान से उसने पांडव सेना को रोक दिया।',
        hint: 'King Jayadratha of Sindhu wielded Lord Shiva’s boon.',
        hint_te: 'శివుని వరం పొందిన సైంధవుడు.',
        hint_hi: 'शिवजी के वरदान से युक्त सिंधुराज जयद्रथ।',
        xpReward: 10
      },
      {
        id: 'q82-3',
        type: 'true_false',
        prompt: 'Inside the Chakravyuha, young Abhimanyu fought with such ferocious brilliance that he defeated Duryodhana, Drona, Karna, Ashwatthama, and slaughtered Duryodhana’s son Lakshmana Kumara.',
        prompt_te: 'చక్రవ్యూహం లోపల అభిమన్యుడు అసమాన పరాక్రమంతో పోరాడి ద్రోణ, కర్ణ, దుర్యోధనాదులను ముప్పుతిప్పలు పెట్టి, దుర్యోధనుడి కుమారుడైన లక్ష్మణ కుమారుడిని సంహరించాడు.',
        prompt_hi: 'चक्रव्यूह के भीतर अकेले अभिमन्यु ने ऐसा अप्रतिम पराक्रम दिखाया कि द्रोण, कर्ण और दुर्योधन जैसे महारथी भी दंग रह गए और उसने दुर्योधन के पुत्र लक्ष्मण का वध कर दिया।',
        correctAnswer: true,
        learnMore: 'Abhimanyu seemed like Lord Shiva in His cosmic dance. Enraged by the death of his beloved son Lakshmana, Duryodhana demanded Abhimanyu be slain by any means necessary.',
        learnMore_te: 'తన కొడుకు లక్ష్మణ కుమారుని మరణంతో రగిలిపోయిన దుర్యోధనుడు, ఏ ధర్మాలూ పాటించకుండా ఏకకాలంలో అందరూ కలిసి అభిమన్యుడిని చంపాలని ఆదేశించాడు.',
        learnMore_hi: 'अपने पुत्र लक्ष्मण की मृत्यु से पागल होकर दुर्योधन ने समस्त नियमों को ताक पर रखकर अभिमन्यु को घेरकर मारने का आदेश दिया।',
        hint: 'He slew Lakshmana Kumara and routed supreme warriors single-handedly.',
        hint_te: 'లక్ష్మణుడిని సంహరించి ఒంటరిగా పోరాడాడు.',
        hint_hi: 'अभिमन्यु ने अकेले ही कौरवों के छक्के छुड़ा दिए थे।',
        xpReward: 10
      }
    ]
  },

  // Level 83
  {
    levelNumber: 83,
    partNumber: 9,
    title: 'The Martyrdom of Abhimanyu',
    title_te: 'వీర అభిమన్యుని బలిదానం',
    title_hi: 'अभिमन्यु का बलिदान: धर्मयुद्ध का अंत',
    subtitle: 'Six Maharathis Break the Sacred Code of Chivalry',
    subtitle_te: 'ఆరుగురు మహారథుల అధర్మ దాడి',
    subtitle_hi: 'छह महारथियों द्वारा नियमों की धज्जियाँ उड़ाना',
    questions: [
      {
        id: 'q83-1',
        type: 'mcq',
        prompt: 'How did six great Kaurava Maharathis (Drona, Kripa, Karna, Ashwatthama, Brihadbala, and Kritavarma) dishonorably overcome the lone youth Abhimanyu?',
        prompt_te: 'ఆరుగురు కౌరవ మహారథులు (ద్రోణ, కృప, కర్ణ, అశ్వత్థామ, బృహద్బలుడు, కృతవర్మ) ఏ విధంగా అధర్మంగా ఒంటరి బాలుడైన అభిమన్యుడిని చుట్టుముట్టి దాడి చేశారు?',
        prompt_hi: 'कौरवों के छह महारथियों (द्रोण, कर्ण, कृपाचार्य, अश्वत्थामा, कृतवर्मा आदि) ने किस प्रकार छलपूर्वक अकेले बालक अभिमन्यु को घेरा?',
        options: [
          'Karna shot him from behind to sever his bowstring, Drona killed his horses, Kripa slew his charioteer, and they all simultaneously bombarded the unarmed boy',
          'They invited him to a meal and poisoned his water',
          'They cast an iron cage over him while he slept',
          'They had ten thousand foot soldiers bury him under rocks'
        ],
        options_te: [
          'కర్ణుడు వెనుక నుండి బాణం వేసి వింటి నారిని తెంచాడు, ద్రోణుడు గుర్రాలను చంపాడు, కృపుడు సారథిని కూల్చాడు; నిరాయుధుడైన ఆ బాలుడిపై ఆరుగురూ ఏకకాలంలో బాణాలు కురిపించారు',
          'భోజనానికి పిలిచి విషం ఇచ్చారు',
          'నిద్రపోతున్నప్పుడు ఇనుప బోను వేశారు',
          'వేలాది సైనికులు రాళ్ళ కింద పూడ్చేశారు'
        ],
        options_hi: [
          'कर्ण ने पीछे से वार करके उसका धनुष काट दिया, द्रोण ने रथ के घोड़े मारे, कृपाचार्य ने सारथी का वध किया और निहत्थे बालक पर सबने एक साथ बाण बरसाए',
          'उसे भोजन पर बुलाकर विष दे दिया',
          'सोते समय पिंजरा डाल दिया',
          'हजारों सैनिकों ने पत्थरों से दबा दिया'
        ],
        correctIndex: 0,
        learnMore: 'Even with his chariot destroyed and bow snapped, Abhimanyu grabbed a sword and shield, and when those shattered, he wielded a broken chariot wheel like a discus until struck down.',
        learnMore_te: 'ధనుస్సు విరిగి, రథం కూలిపోయినా, అభిమన్యుడు రథచక్రాన్ని చేతబట్టి రుద్రుడిలా పోరాడాడు. చివరకు దుశ్శాసనుడి కొడుకు గదతో కొట్టడంతో వీరమరణం చెందాడు.',
        learnMore_hi: 'धनुष कटने पर भी उस वीर ने टूटे रथ का पहिया उठाकर चक्र की भाँति युद्ध किया। अंत में दुःशासन के पुत्र ने गदा से प्रहार कर उस अमर वीर को वीरगति दी।',
        hint: 'Karna severed his bow from behind; multiple warriors attacked an unarmed boy.',
        hint_te: 'కర్ణుడు వెనుక నుండి విల్లు నరికివేయగా, అందరూ కలిసి నిరాయుధుడిపై దాడి చేశారు.',
        hint_hi: 'पीछे से वार कर धनुष काटना और निहत्थे पर सामूहिक प्रहार करना।',
        xpReward: 10
      },
      {
        id: 'q83-2',
        type: 'mcq',
        prompt: 'Which foul deed marked the final moment of Abhimanyu’s physical martyrdom?',
        prompt_te: 'అభిమన్యుని వీరమరణానికి దారితీసిన తుది ఘట్టం ఏమిటి?',
        prompt_hi: 'अभिमन्यु के अंतिम क्षणों में किस घटना ने उसके प्राण लिए?',
        options: [
          'While fighting an exhausted mace duel on foot, Durmashana (Dushasana’s son) struck Abhimanyu’s head with a heavy mace',
          'He surrendered and was executed after trial',
          'A rogue elephant trampled his tent',
          'He drowned while crossing the Yamuna'
        ],
        options_te: [
          'నేలపై నిలబడి అలసిపోయి గదాయుద్ధం చేస్తుండగా, దుశ్శాసనుని కుమారుడు వెనుక నుండి అభిమన్యుని తలపై గదతో బలంగా కొట్టాడు',
          'లొంగిపోయిన తర్వాత విచారణ జరిపి చంపారు',
          'శిబిరంలో ఏనుగు తొక్కి చంపింది',
          'యమునా నది దాటుతూ మునిగిపోయాడు'
        ],
        options_hi: [
          'थककर पैदल ही गदा युद्ध लड़ते हुए दुःशासन के पुत्र ने अभिमन्यु के सिर पर पीछे से गदा का घातक प्रहार किया',
          'उसने आत्मसमर्पण कर दिया था',
          'हाथी ने उसे कुचल दिया',
          'वह नदी में डूब गया'
        ],
        correctIndex: 0,
        learnMore: 'Both princes struck each other down; Dushasana’s son rose first and struck the fallen hero. The heavens rained fragrant flowers as the immortal soul of Chandra’s son Varchas returned to the sky.',
        learnMore_te: 'ఇద్దరు రాజకుమారులూ కిందపడగా, దుశ్శాసనుడి కొడుకు ముందుగా లేచి అభిమన్యుడి తలపై మోదాడు. చంద్రుని కుమారుడైన వర్చస్సు తిరిగి తన దివ్య లోకానికి చేరుకున్నాడు.',
        learnMore_hi: 'दोनों भूमि पर गिरे, परंतु दुःशासन का पुत्र पहले उठा और उसने वीर अभिमन्यु पर वार किया। चंद्रमा के पुत्र "वर्चस" के रूप में अवतरित अभिमन्यु अपने धाम लौट गए।',
        hint: 'Dushasana’s son struck his head with a mace.',
        hint_te: 'దుశ్శాసనుడి కొడుకు గదా ప్రహారం.',
        hint_hi: 'दुःशासन के पुत्र का गदा प्रहार।',
        xpReward: 10
      },
      {
        id: 'q83-3',
        type: 'true_false',
        prompt: 'Yuyutsu, the righteous son of Dhritarashtra, bitterly condemned the Kauravas for celebrating around Abhimanyu’s fallen body, declaring that chivalry and righteousness had died forever in the Kuru camp.',
        prompt_te: 'అభిమన్యుని మృతదేహం చుట్టూ నాట్యమాడుతూ సంబరాలు చేసుకుంటున్న కౌరవులను చూసి యుయుత్సుడు ఛీత్కరించుకుంటూ, కురు వంశంలో క్షత్రియ ధర్మం సమాధి అయిపోయిందని దుయ్యబట్టాడు.',
        prompt_hi: 'अभिमन्यु के मृत शरीर के चारों ओर नाचते और जश्न मनाते कौरवों को देखकर युयुत्सु ने धिक्कारते हुए कहा कि आज कुरुवंश से धर्म और क्षत्रिय मर्यादा सदा के लिए नष्ट हो गई।',
        correctAnswer: true,
        learnMore: 'Even Sanjaya lamented: "By slaying a single boy through six warriors, the Kauravas have dug their own grave; when Arjuna hears of this, doom will fall upon all."',
        learnMore_te: 'సంజయుడు సైతం: "ఒక బాలుడిని ఆరుగురు కలిసి చంపిన రోజునే కౌరవుల సర్వనాశనం ఖాయమైంది; అర్జునుడి ప్రతాపాగ్నికి ఎవరూ మిగలరు" అని విలపించాడు.',
        learnMore_hi: 'संजय ने धृतराष्ट्र से कहा: "छह महारथियों द्वारा एक बालक की इस प्रकार हत्या ने कौरवों के विनाश पर मुहर लगा दी है; अर्जुन का क्रोध अब प्रलय लाएगा।"',
        hint: 'The Kaurava celebratory frenzy over a murdered youth was universally condemned.',
        hint_te: 'అధర్మ యుద్ధాన్ని యుయుత్సుడు ఖండించాడు.',
        hint_hi: 'युयुत्सु ने इस कायरतापूर्ण कृत्य का कड़ा विरोध किया।',
        xpReward: 10
      }
    ]
  },

  // Level 84
  {
    levelNumber: 84,
    partNumber: 9,
    title: 'Arjuna’s Grief & The Terrible Vow',
    title_te: 'అర్జునుడి శోకం & భీకర ప్రతిజ్ఞ',
    title_hi: 'अर्जुन का विलाप और जयद्रथ-वध की भीषण प्रतिज्ञा',
    subtitle: 'Slay Jayadratha by Sunset or Enter the Blazing Fire',
    subtitle_te: 'సూర్యాస్తమయంలోగా సైంధవుని వధ లేదా అగ్ని ప్రవేశం',
    subtitle_hi: 'सूर्यास्त से पहले जयद्रथ का वध अथवा आत्मदाह',
    questions: [
      {
        id: 'q84-1',
        type: 'mcq',
        prompt: 'When Arjuna returned to the camp and learned of the foul slaughter of his beloved son Abhimanyu, what terrifying vow did he proclaim before all creation?',
        prompt_te: 'యుద్ధం ముగించుకుని శిబిరానికి వచ్చిన అర్జునుడు తన కుమారుడు అభిమన్యుని ఘోర మరణవార్త విని, సమస్త లోకాలు కంపించేలా ఏ భీకర ప్రతిజ్ఞ చేశాడు?',
        prompt_hi: 'शिविर में लौटकर जब अर्जुन को अपने प्रिय पुत्र अभिमन्यु के धोखे से किए गए वध का पता चला, तो उन्होंने कौन-सी भीषण प्रतिज्ञा ली?',
        options: [
          '"Tomorrow before the sun sets, I shall slay Jayadratha, the root cause of my son’s death; if I fail to kill him before dusk, I shall throw myself into a blazing fire!"',
          'He vowed never to pick up the Gandiva bow again',
          'He swore to crown Drona as king of Hastinapur',
          'He vowed to leave for the Himalayas immediately'
        ],
        options_te: [
          '"రేపు సూర్యాస్తమయం అయ్యేలోగా నా కొడుకు మరణానికి ప్రధాన కారణమైన సైంధవుడిని (జయద్రథుడిని) సంహరిస్తాను; అలా చేయలేకపోతే సజీవంగా అగ్ని ప్రవేశం చేస్తాను!"',
          'ఇకపై గాండీవాన్ని ఎప్పటికీ చేతబట్టనని ప్రతిజ్ఞ చేశాడు',
          'ద్రోణుడిని హస్తినాపుర రాజుగా చేస్తానని అన్నాడు',
          'వెంటనే హిమాలయాలకు వెళ్ళిపోతానని అన్నాడు'
        ],
        options_hi: [
          '"कल सूर्यास्त से पूर्व मैं अभिमन्यु की मृत्यु के मुख्य कारण जयद्रथ का वध कर दूँगा; यदि मैं ऐसा न कर सका, तो मैं स्वयं जीवित ही चिता में जलकर भस्म हो जाऊँगा!"',
          'उन्होंने प्रतिज्ञा की कि वे अब कभी गांडीव नहीं उठाएँगे',
          'उन्होंने द्रोण को राजा बनाने की शपथ ली',
          'वे तुरंत हिमालय जाने के लिए तैयार हो गए'
        ],
        correctIndex: 0,
        learnMore: 'Arjuna washed his hands, touched water, and swore by his truth, righteousness, and Gandiva. The twang of Gandiva rattled Hastinapur and struck terror into Jayadratha’s soul.',
        learnMore_te: 'అర్జునుడు పవిత్ర జలాలను తాకి గాండీవంపై శపథం చేశాడు. ఆ గాండీవ టంకారానికి కౌరవ శిబిరంలో గుండెలు దడదడలాడాయి, జయద్రథుడు భయంతో వణికిపోయాడు.',
        learnMore_hi: 'गांडीव की भयंकर टंकार से कौरवों की छाती दहल गई और जयद्रथ भय से काँपने लगा। अर्जुन की इस प्रतिज्ञा ने अगले दिन के युद्ध को जीवन-मरण का संग्राम बना दिया।',
        hint: 'Slay Jayadratha by sunset or enter the burning pyre.',
        hint_te: 'సూర్యాస్తమయంలోగా జయద్రథ వధ లేదా చితి ఎక్కడం.',
        hint_hi: 'सूर्यास्त तक जयद्रथ वध या आत्मदाह।',
        xpReward: 10
      },
      {
        id: 'q84-2',
        type: 'mcq',
        prompt: 'To protect Jayadratha from Arjuna’s vow, how did Guru Drona arrange the Kaurava forces for Day 14?',
        prompt_te: 'అర్జునుని ప్రతిజ్ఞ నుండి జయద్రథుడిని కాపాడటానికి 14వ రోజున ద్రోణాచార్యుడు ఎటువంటి అద్భుతమైన వ్యూహాలను పన్నాడు?',
        prompt_hi: 'अर्जुन की प्रतिज्ञा से जयद्रथ को बचाने के लिए १४वें दिन द्रोणाचार्य ने कौरव सेना को किस प्रकार व्यवस्थित किया?',
        options: [
          'A three-tiered triple defense (Shakata Vyuha, Padma Vyuha, and Suchimukha Vyuha), placing Jayadratha twelve miles deep at the tail, guarded by Karna, Ashwatthama, and Kripa',
          'They hid Jayadratha inside an underground gold vault in Hastinapur',
          'They dressed Jayadratha as an ordinary foot soldier cooking food',
          'They sent Jayadratha away to Lanka on a flying chariot'
        ],
        options_te: [
          'శకట, పద్మ, సూచీముఖ వ్యూహాలనే త్రివిధ రక్షణ వలయం పన్ని, పన్నెండు మైళ్ళ దూరంలో కర్ణ, అశ్వత్థామ, కృపాచార్యుల రక్షణలో జయద్రథుడిని దాచారు',
          'హస్తినాపురంలో నేలమాళిగలో దాచారు',
          'వంటవాడి వేషం వేయించి సైన్యంలో ఉంచారు',
          'ఎగిరే రథంలో లంకకు పంపించారు'
        ],
        options_hi: [
          'शकटव्यूह, पद्मव्यूह और सूचिव्यूह की त्रिस्तरीय अभेद्य रचना की, और जयद्रथ को बारह मील पीछे कर्ण, कृपाचार्य और अश्वत्थामा की सुरक्षा में रखा',
          'जयद्रथ को हस्तिनापुर के गुप्त तहखाने में छिपा दिया',
          'जयद्रथ को रसोइये का भेष पहना दिया',
          'उसे लंका भेज दिया'
        ],
        correctIndex: 0,
        learnMore: 'Drona promised Jayadratha: "You will be surrounded by six invincible Maharathis and thousands of chariots; Arjuna will never reach you before the sun sinks."',
        learnMore_te: 'ద్రోణుడు: "నీ చుట్టూ ఆరుగురు మహారథులు, లక్షలాది సైన్యం ఉంటుంది; సూర్యుడు అస్తమించేలోగా అర్జునుడు నిన్ను చేరడం అసాధ్యం" అని ధైర్యం చెప్పాడు.',
        learnMore_hi: 'द्रोणाचार्य ने जयद्रथ को आश्वस्त किया कि अर्जुन लाखों सैनिकों और महारथियों को पार करके उस तक सूर्यास्त से पहले कभी नहीं पहुँच सकेगा।',
        hint: 'A triple-tier formation placing Jayadratha miles in the rear.',
        hint_te: 'త్రివిధ వ్యూహాలు మరియు 12 మైళ్ళ వెనుక జయద్రథుని రక్షణ.',
        hint_hi: 'तीन-स्तरीय व्यूह रचना और मील दूर सुरक्षा।',
        xpReward: 10
      },
      {
        id: 'q84-3',
        type: 'true_false',
        prompt: 'On the night before Day 14, Lord Krishna took Arjuna in a spiritual trance to Mount Kailasha to seek Lord Shiva’s grace and obtain the supreme Pashupatastra.',
        prompt_te: '14వ రోజు యుద్ధానికి ముందు రాత్రి, శ్రీకృష్ణుడు అర్జునుడిని యోగదృష్టితో కైలాస పర్వతానికి తీసుకెళ్ళి పరమశివుని అనుగ్రహం, పాశుపతాస్త్ర ప్రయోగ రహస్యాన్ని పొందాడు.',
        prompt_hi: '१४वें दिन के युद्ध से पूर्व रात में श्रीकृष्ण अर्जुन को दिव्य स्वप्न में कैलाश पर्वत पर ले गए जहाँ उन्होंने भगवान शिव की वंदना कर पाशुपतास्त्र का पुनः स्मरण किया।',
        correctAnswer: true,
        learnMore: 'In this mystic vision, Shiva blessed Arjuna and revealed the celestial bow and mantras needed to destroy any obstacle on the morrow.',
        learnMore_te: 'శివుడు ప్రసన్నుడై అర్జునుడికి విజయాన్ని ఆశీర్వదించి, రేపటి యుద్ధంలో ఎదురయ్యే ఆటంకాలను ఛేదించే దివ్య మంత్రాలను గుర్తుచేశాడు.',
        learnMore_hi: 'भगवान आशुतोष ने अर्जुन को विजयी होने का वरदान दिया और पाशुपतास्त्र के संधान की विधि का पुनः स्मरण कराया।',
        hint: 'A nocturnal visionary journey to Kailasha with Krishna.',
        hint_te: 'కృష్ణునితో కలిసి కైలాస దర్శనం.',
        hint_hi: 'कैलाश पर शिवजी के दर्शन का दिव्य स्वप्न।',
        xpReward: 10
      }
    ]
  },

  // Level 85
  {
    levelNumber: 85,
    partNumber: 9,
    title: 'The Race Against the Sun & Jayadratha’s Head',
    title_te: 'సూర్యునితో పరుగు & సైంధవ వధ',
    title_hi: 'जयद्रथ वध: सूर्य का अस्त और सुदर्शन चक्र की माया',
    subtitle: 'Day 14: The Solar Illusion & Vriddhakshatra’s Lap',
    subtitle_te: '14వ రోజు: సూర్య మాయ & వృద్ధక్షత్రుని ఒడిలో తల',
    subtitle_hi: '१४वाँ दिन: कृत्रिम सूर्यास्त और पिता की गोद में कटा सिर',
    questions: [
      {
        id: 'q85-1',
        type: 'mcq',
        prompt: 'As the sun sank low on Day 14 and Jayadratha remained still shielded behind impenetrable Kaurava battalions, what divine illusion did Lord Krishna deploy?',
        prompt_te: '14వ రోజు సాయంత్రం సూర్యుడు అస్తమించడానికి సిద్ధమవుతుండగా, సైంధవుడు ఇంకా రక్షణ వలయంలోనే ఉన్నప్పుడు శ్రీకృష్ణుడు ఏ మాయను సృష్టించాడు?',
        prompt_hi: '१४वें दिन जब सूर्य अस्ताचल की ओर बढ़ रहा था और जयद्रथ अभी भी दूर सुरक्षित खड़ा था, तब श्रीकृष्ण ने कौन-सी दिव्य लीला रची?',
        options: [
          'He veiled the sun using His Sudarshana Chakra, creating a false sunset that caused the rejoicing Kauravas to lower their guard and Jayadratha to crane his neck outward',
          'He summoned thunderclouds that poured burning oil',
          'He grew to a giant height and kicked Jayadratha across the field',
          'He turned all the Kaurava chariots into sand'
        ],
        options_te: [
          'సుదర్శన చక్రాన్ని సూర్యునికి అడ్డుగా ఉంచి కృత్రిమ సూర్యాస్తమయాన్ని సృష్టించాడు; దాంతో సూర్యుడు మునిగిపోయాడని భావించిన కౌరవులు ఆయుధాలు దించగా, జయద్రథుడు గర్వంతో మెడ చాచి చూశాడు',
          'ఉరుములు మెరుపులతో నూనె వర్షం కురిపించాడు',
          'విరాట రూపం ఎత్తి సైంధవుడిని కాలితో తన్నాడు',
          'కౌరవ రథాలన్నింటినీ ఇసుకగా మార్చేశాడు'
        ],
        options_hi: [
          'अपने सुदर्शन चक्र से सूर्य को ढककर कृत्रिम सूर्यास्त का भ्रम उत्पन्न कर दिया, जिससे कौरव प्रसन्न होकर ढीले पड़ गए और जयद्रथ निश्चिंत होकर सिर उठाकर आकाश देखने लगा',
          'अंगारों की वर्षा करवा दी',
          'विराट रूप धरकर जयद्रथ को फेंक दिया',
          'सारे रथों को भस्म कर दिया'
        ],
        correctIndex: 0,
        learnMore: 'Seeing dusk, Jayadratha rejoiced that Arjuna must now enter fire. Suddenly Krishna withdrew the disc, revealing the sun still shining, shouting: "Arjuna, strike! There stands Jayadratha!"',
        learnMore_te: 'సూర్యుడు అస్తమించాడనుకుని జయద్రథుడు నిర్భయంగా తలెత్తి చూశాడు. క్షణంలో కృష్ణుడు చక్రాన్ని ఉపసంహరించగా సూర్యుడు మళ్ళీ ప్రకాశించాడు. "అర్జునా! కొట్టు!" అని కృష్ణుడు హెచ్చరించాడు.',
        learnMore_hi: 'जयद्रथ को लगा कि अर्जुन अब आत्मदाह करेगा। तभी श्रीकृष्ण ने सुदर्शन चक्र हटा लिया और सूर्य चमक उठा: "पार्थ! संधान करो, सूर्य अभी अस्त नहीं हुआ है!"',
        hint: 'Sudarshana created a temporary veil over the sun.',
        hint_te: 'సుదర్శన చక్రంతో సూర్యుడిని కప్పి ఉంచడం.',
        hint_hi: 'सुदर्शन चक्र से सूर्य को आच्छादित करना।',
        xpReward: 10
      },
      {
        id: 'q85-2',
        type: 'mcq',
        prompt: 'Why did Krishna explicitly command Arjuna to carry Jayadratha’s severed head with aerial arrows all the way into the lap of his meditating father, King Vriddhakshatra?',
        prompt_te: 'జయద్రథుని తలను నేలపై పడనీయకుండా, బాణాలతో గాల్లోనే మోసుకెళ్ళి తపస్సు చేసుకుంటున్న అతని తండ్రి వృద్ధక్షత్రుని ఒడిలో పడేలా చేయమని కృష్ణుడు ఎందుకు ఆదేశించాడు?',
        prompt_hi: 'श्रीकृष्ण ने अर्जुन को यह विशेष निर्देश क्यों दिया कि जयद्रथ का सिर भूमि पर न गिरे, बल्कि बाणों की सहायता से उड़ते हुए उसके पिता वृद्धक्षत्र की गोद में जाकर गिरे?',
        options: [
          'Vriddhakshatra had cast a terrible curse: "Whoever causes my son’s head to hit the ground, his own head shall shatter into a hundred fragments!"',
          'Because Jayadratha had swallowed a priceless jewel',
          'So that his father could magically resurrect him',
          'To show respect to an elder ascetic'
        ],
        options_te: [
          'వృద్ధక్షత్రుడు గతంలో ఒక ఘోరమైన శాపం ఇచ్చాడు: "ఎవడైతే నా కొడుకు తలను నేలపై పడేలా చేస్తాడో, వాని తల నూరు ముక్కలై పగిలిపోవునుగాక!"',
          'జయద్రథుడు అమూల్యమైన రత్నాన్ని మింగినందున',
          'తండ్రి అతడిని బతికించగలడని',
          'ముసలి మునిని గౌరవించడానికి'
        ],
        options_hi: [
          'क्योंकि वृद्धक्षत्र ने वरदान/शाप दे रखा था: "जो कोई मेरे पुत्र का सिर पृथ्वी पर गिराएगा, उसका अपना सिर उसी क्षण सौ टुकड़ों में फट जाएगा!"',
          'क्योंकि जयद्रथ ने दिव्य मणि निगल रखी थी',
          'ताकि उसका पिता उसे जीवित कर सके',
          'तपस्वी का आदर करने के लिए'
        ],
        correctIndex: 0,
        learnMore: 'Arjuna launched a volley of arrows like flying hands that propelled the severed head miles away into the lap of Vriddhakshatra; startled, the father stood up, the head dropped, and his own head shattered!',
        learnMore_te: 'అర్జునుని అద్భుత బాణాలు ఆ తలను మోసుకుంటూ వెళ్ళి ధ్యానంలో ఉన్న తండ్రి ఒడిలో వేశాయి. ఉలిక్కిపడి లేచిన తండ్రి ఒడి నుండి తల నేలపై పడగానే, అతని స్వంత శాపం ప్రకారమే తల నూరు ముక్కలైంది!',
        learnMore_hi: 'अर्जुन के बाण जयद्रथ के सिर को उड़ाते हुए समंतपंचक तीर्थ में तप कर रहे उसके पिता की गोद में ले गए। पिता घबराकर उठे, सिर भूमि पर गिरा और शाप के प्रभाव से वृद्धक्षत्र का सिर फट गया।',
        hint: 'The father’s boon stated that whoever dropped the head to the earth would have his own skull burst.',
        hint_te: 'తల నేల మీద పడేసిన వారి తల పగిలిపోతుందన్న తండ్రి శాపం.',
        hint_hi: 'पिता का शाप था कि सिर गिराने वाले का मस्तक फट जाएगा।',
        xpReward: 10
      },
      {
        id: 'q85-3',
        type: 'true_false',
        prompt: 'To enable Arjuna’s horses to rest and drink during the exhausting Day 14 pursuit, Arjuna created a lake of cool spring water and an arrow-built stable right on the battlefield.',
        prompt_te: '14వ రోజు సుదీర్ఘ పోరాటంలో అలసిపోయిన గుర్రాలకు విశ్రాంతి ఇవ్వడానికి, అర్జునుడు యుద్ధభూమిలోనే బాణాలతో ఒక సరస్సును, రక్షణ కొట్టాన్ని నిర్మించాడు.',
        prompt_hi: '१४वें दिन के भीषण युद्ध में जब घोड़े थककर हाँफने लगे, तब अर्जुन ने युद्धभूमि में ही बाण मारकर शीतल जल का सरोवर और बाणों की सुरक्षित छावनी बना दी थी।',
        correctAnswer: true,
        learnMore: 'While Arjuna held off legions of attackers single-handedly on foot, Krishna unharnessed the divine steeds, pulled arrows from their flanks, washed them, and let them drink.',
        learnMore_te: 'అర్జునుడు ఒంటరిగా శత్రువులను నిలువరించగా, కృష్ణుడు గుర్రాల కట్లను విప్పి, వాటి ఒంటిపై ఉన్న బాణాలను తీసివేసి, నీరు త్రాగించి సేదతీర్చాడు.',
        learnMore_hi: 'अर्जुन बाणों से शत्रुओं को रोके रहे और श्रीकृष्ण ने घोड़ों की पीठ से बाण निकाले, उन्हें जल पिलाया और सहलाकर उनकी थकान मिटाई।',
        hint: 'A miraculous respite created by arrow-craft in the middle of battle.',
        hint_te: 'బాణాలతో సరస్సు నిర్మించి గుర్రాలను సేదదీర్చారు.',
        hint_hi: 'बाणों से बाण-सर (सरोवर) का निर्माण।',
        xpReward: 10
      }
    ]
  },

  // Level 86
  {
    levelNumber: 86,
    partNumber: 9,
    title: 'The Midnight Inferno & Ghatotkacha’s Sacrifice',
    title_te: 'రాత్రి యుద్ధం & ఘటోత్కచుని ప్రాణత్యాగం',
    title_hi: 'रात्रि का भीषण युद्ध और घटोत्कच का अमर बलिदान',
    subtitle: 'Night of Day 14: Torches, Illusions & The Vasavi Shakti',
    subtitle_te: '14వ రాత్రి: దివిటీల వెలుగు & వాసవీ శక్తి ప్రయోగం',
    subtitle_hi: 'इंद्र की अमोघ शक्ति और कर्ण का विवश प्रयोग',
    questions: [
      {
        id: 'q86-1',
        type: 'mcq',
        prompt: 'Why did the battle continue past sunset on the 14th day, breaking the traditional chivalric code of sunrise-to-sunset combat?',
        prompt_te: 'సూర్యోదయం నుండి సూర్యాస్తమయం వరకే పోరాడాలన్న సాంప్రదాయ నియమాన్ని ఉల్లంఘించి, 14వ రోజు రాత్రి కూడా యుద్ధం ఎందుకు కొనసాగింది?',
        prompt_hi: '१४वें दिन सूर्यास्त के बाद भी युद्ध क्यों नहीं रुका और दोनों सेनाएँ रात्रि के घोर अंधकार में क्यों लड़ती रहीं?',
        options: [
          'Duryodhana was so enraged by Jayadratha’s death that he commanded fighting to continue by the light of thousands of torches',
          'A solar eclipse convinced both armies it was still daytime',
          'The battlefield caught fire by an earthquake',
          'Pandavas wanted to capture Hastinapur before dawn'
        ],
        options_te: [
          'జయద్రథుని మరణంతో రగిలిపోయిన దుర్యోధనుడు పిచ్చి కోపంతో, వేలాది దివిటీల వెలుగులో రాత్రి కూడా యుద్ధం కొనసాగించాలని ఆదేశించాడు',
          'సూర్యగ్రహణం వల్ల పగలే అనుకున్నారు',
          'భూకంపం వల్ల అగ్ని చెలరేగింది',
          'తెల్లవారేలోగా హస్తినాపురాన్ని పట్టుకోవాలని పాండవులు భావించారు'
        ],
        options_hi: [
          'जयद्रथ के वध से उन्मत्त हुए दुर्योधन ने प्रतिशोध की ज्वाला में जलते हुए लाखों मशालों की रोशनी में युद्ध जारी रखने की आज्ञा दी',
          'सूर्यग्रहण के कारण भ्रम हो गया था',
          'भूकंप से युद्धभूमि में आग लग गई थी',
          'पांडव रात में ही विजय चाहते थे'
        ],
        correctIndex: 0,
        learnMore: 'Torches were affixed to horses, elephants, and chariots. Soldiers fought in nocturnal frenzy, sometimes striking their own comrades in the shadows.',
        learnMore_te: 'గుర్రాలు, ఏనుగులు, రథాలకు దివిటీలు కట్టారు. చీకట్లో ఎవరు శత్రువో ఎవరు మిత్రుడో తెలియక ఒకరినొకరు నరుక్కున్నారు.',
        learnMore_hi: 'मशालों के प्रकाश में रात भर घमासान युद्ध हुआ जिसमें भारी रक्तपात हुआ और पहचानना कठिन हो गया कि कौन अपना है और कौन पराया।',
        hint: 'Duryodhana’s insatiable thirst for revenge drove the night war.',
        hint_te: 'దుర్యోధనుని ప్రతీకార వాంఛతో రాత్రి యుద్ధం జరిగింది.',
        hint_hi: 'दुर्योधन के प्रतिशोध के कारण रात में भी युद्ध हुआ।',
        xpReward: 10
      },
      {
        id: 'q86-2',
        type: 'mcq',
        prompt: 'During the night battle, why did Ghatotkacha (Bhima’s half-demon son) become virtually unstoppable against the Kaurava army?',
        prompt_te: 'రాత్రిపూట యుద్ధంలో రాక్షస అంశ కల ఘటోత్కచుడు (భీముని కుమారుడు) కౌరవ సైన్యానికి ఎందుకు అజేయుడిగా మారాడు?',
        prompt_hi: 'रात्रि के इस युद्ध में घटोत्कच (भीम और हिडिम्बा के पुत्र) कौरव सेना के लिए यमराज के समान अजेय क्यों बन गए?',
        options: [
          'Demonic (Rakshasa) powers, illusions, and strength naturally increase tenfold in darkness and midnight hours',
          'He had borrowed Arjuna’s Gandiva bow',
          'He was riding an invincible flying iron chariot from Indra',
          'The Kauravas could not see him because he was painted black'
        ],
        options_te: [
          'రాక్షస శక్తులు, మాయలు, బలం రాత్రి వేళల్లో, గాఢాంధకారంలో సహజంగానే పదిరెట్లు పెరుగుతాయి',
          'అర్జునుడి గాండీవాన్ని తీసుకున్నాడు',
          'ఇంద్రుడు ఇచ్చిన ఇనుప రథంపై ఉన్నాడు',
          'నల్లని రంగు పూసుకోవడం వల్ల కనిపించలేదు'
        ],
        options_hi: [
          'राक्षसी माया और शक्तियाँ रात्रि के अंधकार में कई गुना बढ़ जाती हैं, जिससे वह आकाश से भयानक अस्त्र और पत्थर बरसाने लगा',
          'उसने गांडीव ले लिया था',
          'वह उड़ने वाले रथ पर था',
          'वह दिखाई नहीं दे रहा था'
        ],
        correctIndex: 0,
        learnMore: 'Ghatotkacha soared into the sky, raining fire, boulder showers, and phantom armies. Kaurava soldiers panicked and screamed: "Karna, save us with your divine dart!"',
        learnMore_te: 'ఆకాశంలో ఎగురుతూ నిప్పులు, కొండరాళ్ళు కురిపిస్తూ ఘటోత్కచుడు కౌరవులను పిప్పి చేశాడు. "కర్ణా! ఆ దివ్యాస్త్రంతో మమ్మల్ని కాపాడు!" అని సైన్యం ఆర్తనాదాలు చేసింది.',
        learnMore_hi: 'घटोत्कच की भयानक गर्जना और मायावी प्रहारों से कौरव सेना भागने लगी। दुर्योधन और सैनिकों ने कर्ण से अपनी रक्षा की गुहार लगाई।',
        hint: 'Rakshasas possess immense nocturnal powers.',
        hint_te: 'రాక్షసులకు రాత్రిపూట బలం అపారం.',
        hint_hi: 'निशाचर होने के कारण रात में उसकी शक्ति अपार थी।',
        xpReward: 10
      },
      {
        id: 'q86-3',
        type: 'mcq',
        prompt: 'To save the fleeing Kaurava army from total annihilation, what irreplaceable divine weapon was Karna forced to unleash to slay Ghatotkacha?',
        prompt_te: 'సర్వనాశనం కానున్న కౌరవ సైన్యాన్ని కాపాడటానికి, అర్జునుడిని చంపడం కోసం దాచిపెట్టుకున్న ఏ దివ్య అస్త్రాన్ని ప్రయోగించి కర్ణుడు ఘటోత్కచుడిని సంహరించాడు?',
        prompt_hi: 'कौरव सेना के पूर्ण विनाश को रोकने के लिए कर्ण को विवश होकर कौन-सा अमोघ अस्त्र चलाना पड़ा जिसे उसने अर्जुन के वध के लिए सँभाल रखा था?',
        options: [
          'The Vasavi Shakti (Indra’s celestial javelin, which could be used only once and was guaranteed to kill any single foe)',
          'The Brahmashira Astra',
          'The Pashupatastra',
          'The Narayanastra'
        ],
        options_te: [
          'వాసవీ శక్తి (ఒక్కసారి మాత్రమే ప్రయోగించగల ఇంద్రుని దివ్య అస్త్రం; ఇది కచ్చితంగా శత్రువును చంపి ఇంద్రుని వద్దకు తిరిగి వెళ్తుంది)',
          'బ్రహ్మశిరో నామకాస్త్రం',
          'పాశుపతాస్త్రం',
          'నారాయణాస్త్రం'
        ],
        options_hi: [
          'इंद्र द्वारा प्रदत्त "वासवी शक्ति" (अमोघ शक्ति), जिसका प्रयोग केवल एक बार ही किया जा सकता था और वह निश्चित रूप से एक शत्रु का वध करती',
          'ब्रह्मशिरा अस्त्र',
          'पाशुपतास्त्र',
          'नारायणास्त्र'
        ],
        correctIndex: 0,
        learnMore: 'Krishna danced with joy upon Ghatotkacha’s death, explaining to a startled Arjuna: "Karna had saved Indra’s Shakti exclusively for you! Now your life is secure!"',
        learnMore_te: 'ఘటోత్కచుని త్యాగంతో కర్ణుడి వద్ద ఉన్న ఏకైక అమోఘమైన వాసవీ శక్తి ఖర్చయిపోయింది. దీనితో అర్జునుడి ప్రాణాలకు పెను ప్రమాదం తప్పిందని కృష్ణుడు ఆనందించాడు.',
        learnMore_hi: 'श्रीकृष्ण ने अर्जुन से कहा: "घटोत्कच ने अपने प्राण देकर तुम्हारी रक्षा की है। कर्ण के पास जो अमोघ शक्ति थी, वह समाप्त हो गई और अब तुम सुरक्षित हो!"',
        hint: 'The single-use infallible javelin given by Indra in exchange for armor.',
        hint_te: 'ఇంద్రుడు కవచకుండలాలకు బదులుగా ఇచ్చిన ఏకైక ప్రయోగ శక్తి.',
        hint_hi: 'इंद्र द्वारा कवच-कुंडल के बदले दिया गया एक बार प्रयोग होने वाला अस्त्र।',
        xpReward: 10
      }
    ]
  },

  // Level 87
  {
    levelNumber: 87,
    partNumber: 9,
    title: 'The Fall of Dronacharya & Truth Half-Spoken',
    title_te: 'ద్రోణాచార్య పతనం & అర్ధ సత్యం',
    title_hi: 'द्रोणाचार्य का पतन: "अश्वत्थामा हतः... नरो वा कुञ्जरो वा"',
    subtitle: 'Day 15: The Slaying of the Elephant & Dhrishtadyumna’s Revenge',
    subtitle_te: '15వ రోజు: అశ్వత్థామ అనే ఏనుగు & ధృష్టద్యుమ్నుని ప్రతీకారం',
    subtitle_hi: '१५वाँ दिन: सत्यवादी युधिष्ठिर की वाणी और गुरु द्रोण का समाधि मरण',
    questions: [
      {
        id: 'q87-1',
        type: 'mcq',
        prompt: 'On Day 15, Dronacharya’s celestial weapons were wiping out the Pandava forces. What strategy did Lord Krishna formulate to disarm the invincible preceptor?',
        prompt_te: '15వ రోజున ద్రోణాచార్యుని బ్రహ్మాస్త్ర ధాటికి వేలాది సైన్యం నశిస్తుండగా, ఆ మహానుభావుడిని నిరాయుధుడిని చేయడానికి శ్రీకృష్ణుడు ఏ ఉపాయం ఆలోచించాడు?',
        prompt_hi: '१५वें दिन जब द्रोणाचार्य के दिव्यास्त्रों से पांडव सेना का संहार हो रहा था, तब उन्हें शस्त्र त्यागने पर विवश करने के लिए श्रीकृष्ण ने क्या युक्ति सुझाई?',
        options: [
          'Since Drona would only lay down his weapons upon hearing his beloved son Ashwatthama was dead, an elephant named Ashwatthama was slain and the news announced to Drona',
          'To set fire to Drona’s ancestral village in Panchala',
          'To challenge Drona to an archery debate on Vedic texts',
          'To offer Drona the entire kingdom of Hastinapur'
        ],
        options_te: [
          'తన ప్రాణసమానుడైన కుమారుడు అశ్వత్థామ మరణించాడని తెలిస్తే తప్ప ద్రోణుడు ఆయుధాలు విడవడు కాబట్టి, అశ్వత్థామ అనే ఏనుగును చంపి "అశ్వత్థామ హతః" అని ప్రకటించడం',
          'ద్రోణుని స్వగ్రామానికి నిప్పు పెట్టడం',
          'వేద మంత్రాలపై విలువిద్య చర్చకు ఆహ్వానించడం',
          'హస్తినాపుర రాజ్యాన్ని ద్రోణుడికి రాసివ్వడం'
        ],
        options_hi: [
          'चूँकि द्रोण अपने पुत्र अश्वत्थामा की मृत्यु का समाचार सुनकर ही शस्त्र त्याग सकते थे, अतः अश्वत्थामा नामक हाथी को मारकर यह घोषणा की गई',
          'उनके पैतृक गाँव में आग लगा दी जाए',
          'उन्हें वेद चर्चा में उलझाया जाए',
          'उन्हें पूरा राज्य देने का प्रस्ताव दिया जाए'
        ],
        correctIndex: 0,
        learnMore: 'Bhima slew Indravarma’s massive war elephant named Ashwatthama and loudly proclaimed across the field: "Ashwatthama is dead!"',
        learnMore_te: 'భీముడు ఇంద్రవర్మకు చెందిన "అశ్వత్థామ" అనే ఏనుగును గదతో చంపి: "అశ్వత్థామ చనిపోయాడు!" అని బిగ్గరగా అరిచాడు.',
        learnMore_hi: 'भीम ने मालवराज इंद्रवर्मा के "अश्वत्थामा" नामक विशाल हाथी का वध कर दिया और युद्धभूमि में गर्जना की कि अश्वत्थामा मारा गया।',
        hint: 'An elephant sharing the name of Drona’s son was slain.',
        hint_te: 'ద్రోణుని కొడుకు పేరు గల ఒక ఏనుగును చంపడం.',
        hint_hi: 'अश्वत्थामा नाम के हाथी का वध।',
        xpReward: 10
      },
      {
        id: 'q87-2',
        type: 'mcq',
        prompt: 'Distrusting Bhima’s words, Dronacharya turned to King Yudhishthira, whose chariot famously floated four fingers above the ground due to his absolute truthfulness. What did Yudhishthira say?',
        prompt_te: 'భీముని మాటలను నమ్మని ద్రోణుడు సత్యవ్రతుడైన ధర్మరాజును అడిగాడు. అప్పుడు ధర్మరాజు ఏమని పలికాడు?',
        prompt_hi: 'भीम के शब्दों पर अविश्वास करते हुए द्रोणाचार्य ने सत्यवादी युधिष्ठिर से पूछा जिनका रथ सत्य के प्रभाव से भूमि से चार अंगुल ऊपर चलता था। युधिष्ठिर ने क्या कहा?',
        options: [
          '"Ashwatthama is dead..." and added quietly "...whether human or elephant" (Hatah Kunjaro va), while Krishna blew His conch shell to drown the last words',
          '"Ashwatthama lives on forever as an immortal sage"',
          '"I have not seen your son all morning"',
          '"Ask Duryodhana, for he knows best"'
        ],
        options_te: [
          '"అశ్వత్థామ హతః..." (అశ్వత్థామ చనిపోయాడు) అని గట్టిగా చెప్పి, "...కుంజరో వా" (ఏనుగో లేక మనిషో) అని మెల్లగా అన్నాడు; ఆ రెండవ మాట వినబడకుండా కృష్ణుడు శంఖం పూరించాడు',
          '"అశ్వత్థామ చిరంజీవి, ఎప్పటికీ చావడు"',
          '"నేను ఉదయం నుండి మీ కుమారుడిని చూడలేదు"',
          '"దుర్యోధనుడిని అడగండి, అతడికే తెలుసు"'
        ],
        options_hi: [
          '"अश्वत्थामा मारा गया..." और फिर धीमे स्वर में कहा "...चाहे नर हो या हाथी (नरो वा कुञ्जरो वा)", किंतु श्रीकृष्ण ने उसी क्षण शंख बजाकर अंतिम शब्द दबा दिए',
          '"अश्वत्थामा तो अमर है"',
          '"मुझे नहीं पता कि वह कहाँ है"',
          '"दुर्योधन से पूछिए"'
        ],
        correctIndex: 0,
        learnMore: 'Because Yudhishthira uttered this half-truth, his celestial chariot instantly sank down to touch the mortal dust of the earth forever after.',
        learnMore_te: 'ఈ అర్ధ సత్యం పలికిన క్షణంలోనే, అంతవరకు గాల్లో తేలియాడే ధర్మరాజు రథ చక్రాలు భూమిని తాకి సామాన్య రథంలా మారిపోయాయి.',
        learnMore_hi: 'इस अर्ध-सत्य को बोलने के कारण युधिष्ठिर का रथ जो अब तक भूमि से चार अंगुल ऊपर चलता था, तुरंत नीचे गिरकर सामान्य रथों की तरह धरती को छूने लगा।',
        hint: '"Ashwatthama is dead... elephant or man."',
        hint_te: 'అశ్వత్థామ హతః... కుంజరో వా.',
        hint_hi: 'अश्वत्थामा हतः... नरो वा कुञ्जरो वा।',
        xpReward: 10
      },
      {
        id: 'q87-3',
        type: 'true_false',
        prompt: 'Heartbroken, Drona laid down all his weapons, sat in yogic meditation on his chariot seat, and released his soul to the heavens before Dhrishtadyumna severed his head.',
        prompt_te: 'పుత్రశోకంతో కుంగిపోయిన ద్రోణుడు ఆయుధాలు కింద పెట్టి, రథంపై పద్మాసనంలో కూర్చుని యోగసమాధి ద్వారా ప్రాణాలు విడిచిన తర్వాత ధృష్టద్యుమ్నుడు అతని శిరస్సును ఖండించాడు.',
        prompt_hi: 'पुत्र-शोक से विह्वल होकर द्रोणाचार्य ने समस्त अस्त्र त्याग दिए और रथ पर योगासन में बैठकर समाधि लगा ली। उनके प्राण पहले ही निकल चुके थे जब धृष्टद्युम्न ने उनका मस्तक काटा।',
        correctAnswer: true,
        learnMore: 'Arjuna shouted desperately: "Do not slay our preceptor alive!" But Dhrishtadyumna fulfilled the prophecy of his birth from the sacred fire, beheading Drona’s physical shell.',
        learnMore_te: 'అర్జునుడు "గురువుగారిని చంపవద్దు!" అని అరుస్తున్నప్పటికీ, ద్రోణుని సంహరించడానికే యజ్ఞం నుండి పుట్టిన ధృష్టద్యుమ్నుడు ద్రోణుడి శిరస్సును ఖండించాడు.',
        learnMore_hi: 'अर्जुन चिल्लाते रहे कि गुरुदेव का वध मत करो, किंतु यज्ञ की अग्नि से द्रोण-वध के लिए ही जन्मे धृष्टद्युम्न ने उनका मस्तक धड़ से अलग कर दिया।',
        hint: 'Drona had already ascended through yoga before the sword struck.',
        hint_te: 'ఖడ్గం తాకకముందే ద్రోణుడు యోగసమాధిలో ప్రాణాలు విడిచాడు.',
        hint_hi: 'द्रोणाचार्य समाधिस्थ होकर पहले ही देह त्याग चुके थे।',
        xpReward: 10
      }
    ]
  },

  // Level 88
  {
    levelNumber: 88,
    partNumber: 9,
    title: 'Karna Takes Command & The Charioteer King',
    title_te: 'కర్ణుని సేనాధిపత్యం & శల్య సారథ్యం',
    title_hi: 'कर्ण का सेनापतित्व और राजा शल्य का सारथी बनना',
    subtitle: 'Days 16–17: The Supreme Clash Draws Near',
    subtitle_te: '16–17వ రోజులు: నిర్ణయాత్మక పోరుకు వేదిక',
    subtitle_hi: '१६-१७वाँ दिन: शल्य का कटु वचन और कर्ण का अदम्य साहस',
    questions: [
      {
        id: 'q88-1',
        type: 'mcq',
        prompt: 'On Day 16, Karna was appointed supreme commander. Before facing Arjuna, what single demand did Karna make to equal Arjuna’s advantage of having Krishna as charioteer?',
        prompt_te: '16వ రోజున కర్ణుడు సేనాధిపతి అయినప్పుడు, అర్జునుడికి శ్రీకృష్ణుడు సారథిగా ఉన్నట్లే తనకు కూడా సమానుడైన ఎవరిని సారథిగా నియమించాలని డిమాండ్ చేశాడు?',
        prompt_hi: '१६वें दिन सेनापति बनने पर अर्जुन के सारथी श्रीकृष्ण की बराबरी के लिए कर्ण ने दुर्योधन से किसे अपना सारथी बनाने की माँग की?',
        options: [
          'King Shalya of Madra, who was renowned across the earth as peerless in handling war horses',
          'Ashwatthama',
          'Dushasana',
          'Kripacharya'
        ],
        options_te: [
          'గుర్రాలను నడపడంలో జగత్ప్రసిద్ధుడైన మద్ర దేశాధిపతి శల్యుడిని',
          'అశ్వత్థామను',
          'దుశ్శాసనుడిని',
          'కృపాచార్యుడిని'
        ],
        options_hi: [
          'मद्रराज शल्य को, जो अश्व संचालन और सारथी-कर्म में संसार में अद्वितीय माने जाते थे',
          'अश्वत्थामा को',
          'दुःशासन को',
          'कृपाचार्य को'
        ],
        correctIndex: 0,
        learnMore: 'Duryodhana had to beg Shalya on bended knee to accept driving the chariot of a Suta’s son. Shalya agreed only on condition that he could speak his mind freely.',
        learnMore_te: 'సూత పుత్రుడైన కర్ణుడికి సారథ్యం చేయడానికి శల్యుడు మొదట తిరస్కరించాడు. దుర్యోధనుడు బ్రతిమిలాడటంతో, తాను ఏది మాట్లాడినా అభ్యంతరం చెప్పకూడదనే షరతుపై ఒప్పుకున్నాడు.',
        learnMore_hi: 'शल्या पहले तो सूतपुत्र का सारथी बनने पर कुपित हुए, किंतु दुर्योधन की प्रार्थना पर इस शर्त के साथ माने कि वे कर्ण से अपनी इच्छानुसार कुछ भी कह सकेंगे।',
        hint: 'King Shalya, the maternal uncle of Nakula and Sahadeva.',
        hint_te: 'నకుల సహదేవుల మేనమామ శల్యుడు.',
        hint_hi: 'नकुल-सहदेव के सगे मामा मद्रराज शल्य।',
        xpReward: 10
      },
      {
        id: 'q88-2',
        type: 'mcq',
        prompt: 'Remembering his earlier secret promise to Yudhishthira, how did Shalya conduct himself while steering Karna’s chariot on Day 17?',
        prompt_te: 'పూర్వం ధర్మరాజుకు ఇచ్చిన రహస్య మాట ప్రకారం, కర్ణుడి రథాన్ని నడుపుతూ శల్యుడు ఎలా వ్యవహరించాడు?',
        prompt_hi: 'युधिष्ठिर को दिए अपने पुराने गुप्त वचन को निभाते हुए शल्य ने कर्ण का सारथी बनकर क्या किया?',
        options: [
          'He constantly praised Arjuna and belittled Karna’s boasts, demoralizing Karna’s confidence throughout the duel',
          'He purposely drove the chariot into a river',
          'He poisoned the food in Karna’s chariot',
          'He refused to hold the reins and fell asleep'
        ],
        options_te: [
          'అడుగడుగునా అర్జునుడి పరాక్రమాన్ని పొగుడుతూ, కర్ణుడి మాటలను ఎగతాళి చేస్తూ కర్ణుడి మనోధైర్యాన్ని దెబ్బతీశాడు',
          'రథాన్ని ఉద్దేశపూర్వకంగా నదిలోకి తోలాడు',
          'కర్ణుడి ఆహారంలో విషం కలిపాడు',
          'పగ్గాలు పట్టుకోకుండా నిద్రపోయాడు'
        ],
        options_hi: [
          'वे निरंतर अर्जुन के पराक्रम की प्रशंसा करते रहे और कर्ण को हतोत्साहित करने के लिए ताने मारकर उसका मनोबल गिराते रहे',
          'रथ को जानबूझकर नदी में उतार दिया',
          'कर्ण के जल में विष मिला दिया',
          'रास छोड़कर सो गए'
        ],
        correctIndex: 0,
        learnMore: 'Shalya told Karna: "A crow cannot face a swan, nor a jackal a lion. You are mad to believe you can fell Arjuna and Krishna!" Yet Karna pressed forward bravely.',
        learnMore_te: 'శల్యుడు: "కాకి హంసతో, నక్క సింహంతో సమానం కాదు. కృష్ణార్జునులను గెలవడం నీ వల్ల కాదు" అని నిరంతరం కర్ణుడిని ఎగతాళి చేశాడు.',
        learnMore_hi: 'शल्य ने बार-बार कर्ण से कहा: "गीदड़ कभी सिंह का मुकाबला नहीं कर सकता। तुम व्यर्थ ही अर्जुन से उलझ रहे हो।" इस प्रकार उन्होंने कर्ण का उत्साह तोड़ा।',
        hint: 'Psychological demoralization through sarcastic taunts.',
        hint_te: 'కర్ణుడి ఆత్మవిశ్వాసాన్ని మాటలతో దెబ్బతీయడం.',
        hint_hi: 'व्यंग्य और तानों से कर्ण का मनोबल तोड़ना।',
        xpReward: 10
      },
      {
        id: 'q88-3',
        type: 'true_false',
        prompt: 'On Day 16, Karna had Yudhishthira, Bhima, Nakula, and Sahadeva at his mercy on different occasions, but spared all four of their lives to honor his promise to Queen Kunti.',
        prompt_te: '16వ రోజున ధర్మరాజు, భీముడు, నకుల, సహదేవులు కర్ణుడికి చిక్కినప్పటికీ, కుంతీదేవికి ఇచ్చిన మాట ప్రకారం వారిని చంపకుండా విడిచిపెట్టాడు.',
        prompt_hi: '१६वें दिन कर्ण ने युधिष्ठिर, भीम, नकुल और सहदेव को युद्ध में परास्त कर अपने वश में कर लिया था, किंतु माता कुंती को दिए वचन के कारण उसने चारों के प्राण बख्श दिए।',
        correctAnswer: true,
        learnMore: 'Karna touched them with his bow and mocked them, but kept his sacred word to Kunti: "Five sons of yours will always remain alive: either Arjuna or myself!"',
        learnMore_te: 'కర్ణుడు వారిని విల్లుతో తాకి పరిహాసం చేశాడు కానీ ప్రాణాలు తీయలేదు. "అర్జునుడు లేదా నేను తప్ప నీ ఐదుగురు కొడుకులు సజీవంగా ఉంటారు" అన్న కుంతికి ఇచ్చిన మాటను నిలబెట్టుకున్నాడు.',
        learnMore_hi: 'कर्ण ने अपने वचन की मर्यादा रखी: "माते! तुम्हारे पाँच पुत्र सदैव जीवित रहेंगे, या तो अर्जुन या मैं।" अतः उसने अर्जुन के अतिरिक्त किसी पांडव का वध नहीं किया।',
        hint: 'Karna’s inviolable promise to Kunti.',
        hint_te: 'కుంతీదేవికి కర్ణుడు ఇచ్చిన మాట.',
        hint_hi: 'कुंती को दिया गया वचन।',
        xpReward: 10
      }
    ]
  },

  // Level 89
  {
    levelNumber: 89,
    partNumber: 9,
    title: 'Bhima Fulfills the Oath of Blood',
    title_te: 'భీముని రక్త శపథం నెరవేరింది',
    title_hi: 'भीम का भयानक प्रतिशोध: दुःशासन का वध',
    subtitle: 'Day 17: Slaying Dushasana & Washing Draupadi’s Tresses',
    subtitle_te: '17వ రోజు: దుశ్శాసన వధ & ద్రౌపది వేణీ సంహారం',
    subtitle_hi: '१७वाँ दिन: छाती का लहू और द्रौपदी के केशों का बंधन',
    questions: [
      {
        id: 'q89-1',
        type: 'mcq',
        prompt: 'On Day 17, when Bhima cornered Dushasana—the man who dragged Draupadi by the hair into the gambling assembly—what terrifying vow did Bhima fulfill?',
        prompt_te: '17వ రోజున జూదసభలో ద్రౌపదిని జుట్టు పట్టి ఈడ్చుకొచ్చిన దుశ్శాసనుడిని పట్టుకున్న భీముడు, గతంలో చేసిన ఏ భీకర శపథాన్ని నెరవేర్చాడు?',
        prompt_hi: '१७वें दिन जब भीम ने दुःशासन को धराशायी किया—जिसने द्रौपदी के केश खींचकर भरी सभा में अपमानित किया था—तब भीम ने अपनी कौन-सी भयंकर प्रतिज्ञा पूरी की?',
        options: [
          'He tore open Dushasana’s chest with his bare hands, drank his warm blood, and took the blood to wash and tie Draupadi’s unbraided hair',
          'He threw Dushasana into a cage of lions',
          'He exiled Dushasana to the southern sea',
          'He forced Dushasana to sweep the Pandava camp'
        ],
        options_te: [
          'దుశ్శాసనుని వక్షస్థలాన్ని తన చేతులతో చీల్చి, గుండెల రక్తాన్ని త్రాగి, ఆ రక్తంతో ద్రౌపది ముడువని కురులను కడిగించి ముడి వేయించాడు',
          'సింహాల బోనులో పడేశాడు',
          'దక్షిణ సముద్రానికి బహిష్కరించాడు',
          'పాండవ శిబిరాన్ని శుభ్రం చేయించాడు'
        ],
        options_hi: [
          'उसने अपनी नंगी भुजाओं से दुःशासन की छाती चीरकर उसका गर्म रक्त पिया और उस रक्त से द्रौपदी के खुले केश धुलवाकर उसका जूड़ा बंधवाया',
          'उसे शेरों के पिंजरे में डाल दिया',
          'उसे समुद्र में फेंक दिया',
          'उससे शिविर में झाड़ू लगवाई'
        ],
        correctIndex: 0,
        learnMore: 'For thirteen years, Draupadi had kept her hair untied in mourning and rage. Bhima fulfilled his oath made in the dice hall, roaring like an enraged lion across the field.',
        learnMore_te: 'పదమూడేళ్ళుగా ద్రౌపది తన కురులను విరబోసుకుని శపథంతో జీవించింది. భీముడు ఆ రక్తాన్ని తీసుకొచ్చి ఆమె కురులను ముడివేయించి ప్రతిజ్ఞ నెరవేర్చాడు.',
        learnMore_hi: 'तेरह वर्षों से द्रौपदी के केश खुले थे। भीम ने भरे कुरुक्षेत्र में दुःशासन की छाती का रक्त पीकर अपनी भयानक प्रतिज्ञा पूरी की और द्रौपदी के केशों को बाँधा।',
        hint: 'Tearing the chest and drinking the blood to bind Draupadi’s hair.',
        hint_te: 'రొమ్ము చీల్చి రక్తం త్రాగడం మరియు ద్రౌపది కురులు ముడవడం.',
        hint_hi: 'छाती चीरकर रक्त पीना और केशों का बंधन।',
        xpReward: 10
      },
      {
        id: 'q89-2',
        type: 'mcq',
        prompt: 'How did the Kaurava soldiers react when they witnessed Bhima drinking Dushasana’s blood with roaring fury?',
        prompt_te: 'భీముడు ఉగ్రరూపంతో దుశ్శాసనుని రక్తాన్ని త్రాగుతూ సింహనాదం చేయడం చూసిన కౌరవ సైనికులు ఎలా స్పందించారు?',
        prompt_hi: 'भीम को दुःशासन का लहू पीते और गर्जना करते देखकर कौरव सैनिकों पर क्या प्रभाव पड़ा?',
        options: [
          'They panicked in sheer horror, screaming that Bhima was not a mortal man but a maneater demon (Rakshasa), and fled in utter terror',
          'They laughed and applauded Bhima’s strength',
          'They surrounded Bhima and took him prisoner',
          'They invited Bhima to a feast'
        ],
        options_te: [
          'భయకంపితులై "ఇతను మనిషి కాదు, సాక్షాత్తూ రాక్షసుడు!" అని భయంతో కేకలు వేస్తూ ఆయుధాలు పారేసి పరుగులు తీశారు',
          'నవ్వుతూ చప్పట్లు కొట్టారు',
          'భీముడిని బంధించారు',
          'విందుకు ఆహ్వానించారు'
        ],
        options_hi: [
          'वे भय और आतंक से काँप उठे और चिल्लाते हुए भागे कि "यह मनुष्य नहीं, साक्षात् नरभक्षी राक्षस है!" और सेना में भगदड़ मच गई',
          'हँसने लगे',
          'भीम को बंदी बना लिया',
          'भोजन के लिए बुलाया'
        ],
        correctIndex: 0,
        learnMore: 'Even great warriors trembled; Sanjaya reported that hundreds of soldiers dropped their weapons and fainted simply from the horrifying sight of Bhima fulfilling his vow.',
        learnMore_te: 'ఆ భయంకర దృశ్యాన్ని చూసిన వందలాది మంది సైనికులు స్పృహతప్పి పడిపోయారు; కౌరవ సైన్యం భయంతో వణికిపోయింది.',
        learnMore_hi: 'संजय ने कहा कि उस दृश्य को देखकर कौरव सेना की हिम्मत टूट गई और कई सैनिक अस्त्र फेंककर भाग खड़े हुए।',
        hint: 'Absolute panic and horror at the terrifying spectacle.',
        hint_te: 'భీకరమైన భయంతో సైన్యం పారిపోవడం.',
        hint_hi: 'भय से सैनिकों का त्राहि-त्राहि कर भागना।',
        xpReward: 10
      },
      {
        id: 'q89-3',
        type: 'true_false',
        prompt: 'Before tearing Dushasana’s chest, Bhima tore off Dushasana’s right arm—the very arm that had pulled Draupadi’s sari—and threw it before the Kaurava princes.',
        prompt_te: 'దుశ్శాసనుని వక్షాన్ని చీల్చడానికి ముందు, ద్రౌపది చీరను లాగిన అతని కుడి చేతిని భీముడు శరీరం నుండి పెరికి విసిరికొట్టాడు.',
        prompt_hi: 'छाती चीरने से पहले भीम ने दुःशासन की उस दाईं भुजा को उखाड़ फेंका जिससे उसने द्रौपदी का चीर खींचा था।',
        correctAnswer: true,
        learnMore: 'Bhima shouted: "This is the arm that dragged the Queen of the Kurus into the assembly! Look upon it now, sons of Dhritarashtra!"',
        learnMore_te: 'భీముడు: "ఈ చేత్తోనే కదా ద్రౌపదిని అవమానించావు!" అంటూ ఆ చేతిని వేరుచేసి కౌరవుల వైపు విసిరాడు.',
        learnMore_hi: 'भीम ने ललकार कर कहा: "यह वही हाथ है जिसने द्रौपदी के केश और वस्त्र खींचे थे! देखो कौरवों, तुम्हारे अधर्म का परिणाम!"',
        hint: 'The arm that committed the outrage was ripped away.',
        hint_te: 'చీర లాగిన చేతిని పెరికి వేయడం.',
        hint_hi: 'चीर खींचने वाली भुजा को उखाड़ना।',
        xpReward: 10
      }
    ]
  },

  // Level 90
  {
    levelNumber: 90,
    partNumber: 9,
    title: 'The Fall of Karna: The Sinking Wheel',
    title_te: 'కర్ణ పతనం: కుంగిన రథచక్రం',
    title_hi: 'कर्ण का पतन: पहिए का धँसना और अंजलिका बाण',
    subtitle: 'Day 17: Curses Mature & The Anjalika Arrow',
    subtitle_te: '17వ రోజు: శాపాల పరిపక్వత & అంజలికాస్త్ర ప్రయోగం',
    subtitle_hi: '१७वाँ दिन: शापों की परिणति और सूर्यपुत्र की वीरगति',
    questions: [
      {
        id: 'q90-1',
        type: 'mcq',
        prompt: 'During the climactic duel between Karna and Arjuna on Day 17, how did the three ancient curses upon Karna manifest simultaneously at the fatal hour?',
        prompt_te: '17వ రోజున కర్ణార్జునుల నిర్ణయాత్మక పోరాటంలో, కర్ణుడికి పూర్వం తగిలిన మూడు శాపాలు ఒకేసారి ఎలా పనిచేశాయి?',
        prompt_hi: '१७वें दिन जब कर्ण और अर्जुन का अंतिम द्वंद्व चल रहा था, तब कर्ण को मिले तीनों शाप किस प्रकार एक साथ फलित हुए?',
        options: [
          'His chariot wheel sank into the earth (Brahmin’s curse), he forgot the invocations for the Brahmastra (Parashurama’s curse), and Mother Earth held his wheel fast (cow curse)',
          'His bow snapped in two and his arrows turned to water',
          'He was struck by lightning from Indra',
          'His eyesight failed completely due to dust'
        ],
        options_te: [
          'రథచక్రం భూమిలోకి కుంగిపోయింది (బ్రాహ్మణుని శాపం), బ్రహ్మాస్త్ర మంత్రాలు గుర్తుకు రాలేదు (పరశురాముని శాపం), మరియు భూదేవి చక్రాలను గట్టిగా పట్టి ఉంచింది',
          'విల్లు విరిగి బాణాలు నీరుగా మారాయి',
          'ఇంద్రుని పిడుగు వచ్చి పడింది',
          'ధూళి వల్ల కళ్ళు పూర్తిగా కనిపించకుండా పోయాయి'
        ],
        options_hi: [
          'रथ का पहिया धरती में धँस गया (ब्राह्मण का शाप), ब्रह्मास्त्र का मंत्र विस्मृत हो गया (परशुराम का शाप) और धरती ने पहिए को जकड़ लिया',
          'धनुष टूट गया और बाण पानी बन गए',
          'इंद्र की बिजली गिर पड़ी',
          'धूल के कारण आँखें बंद हो गईं'
        ],
        correctIndex: 0,
        learnMore: 'As Karna frantically tried to lift the sunken wheel from the earth, he cried out: "Virtue does not always protect those who practice it!" Krishna reminded him where his virtue was when Draupadi wept and Abhimanyu was surrounded.',
        learnMore_te: 'కుంగిన చక్రాన్ని పైకి లేపడానికి ప్రయత్నిస్తూ కర్ణుడు: "ధర్మం ఎవరినీ రక్షించదు!" అని అరవగా, ద్రౌపదిని అవమానించినప్పుడు, అభిమన్యుడిని చుట్టుముట్టినప్పుడు నీ ధర్మం ఏమైందని కృష్ణుడు నిలదీశాడు.',
        learnMore_hi: 'पहिया निकालते हुए कर्ण ने जब धर्म की दुहाई दी, तो श्रीकृष्ण ने तीखे स्वर में पूछा: "द्रौपदी के चीरहरण और निहत्थे अभिमन्यु के वध के समय तुम्हारा धर्म कहाँ था कर्ण?"',
        hint: 'The sunken wheel and forgotten astras from his curses.',
        hint_te: 'కుంగిన చక్రం మరియు మరచిపోయిన బ్రహ్మాస్త్రం.',
        hint_hi: 'पहिए का धँसना और मंत्र भूल जाना।',
        xpReward: 10
      },
      {
        id: 'q90-2',
        type: 'mcq',
        prompt: 'Which divine arrow did Arjuna shoot at Krishna’s urging to sever the neck of Karna while Karna was attempting to lift his wheel?',
        prompt_te: 'కర్ణుడు రథచక్రాన్ని పైకి ఎత్తుతున్న సమయంలో, శ్రీకృష్ణుని ఆజ్ఞ మేరకు అర్జునుడు ఏ దివ్యాస్త్రాన్ని ప్రయోగించి కర్ణుని శిరస్సును ఖండించాడు?',
        prompt_hi: 'पहिया निकालते समय श्रीकृष्ण के कहने पर अर्जुन ने किस दिव्य बाण का संधान कर कर्ण का मस्तक धड़ से अलग किया?',
        options: [
          'The crescent-headed Anjalika Astra, blazing like the noonday sun',
          'The Pashupatastra',
          'The Brahmashira Astra',
          'The Agneyastra'
        ],
        options_te: [
          'సూర్యతేజస్సుతో ప్రకాశించే చంద్రవంక ఆకారపు అంజలికాస్త్రం',
          'పాశుపతాస్త్రం',
          'బ్రహ్మశిరో నామకాస్త్రం',
          'ఆగ్నేయాస్త్రం'
        ],
        options_hi: [
          'सूर्य के समान प्रज्वलित अर्धचंद्राकार "अंजलिका अस्त्र"',
          'पाशुपतास्त्र',
          'ब्रह्मशिरा अस्त्र',
          'आग्नेयास्त्र'
        ],
        correctIndex: 0,
        learnMore: 'Arjuna prayed: "If I have lived in righteousness, may this arrow fell my foe!" The brilliant Anjalika missile sped like lightning and severed Karna’s head, which glowed like the setting sun.',
        learnMore_te: 'అర్జునుడు ధర్మాన్ని స్మరించి అంజలికాస్త్రాన్ని ప్రయోగించాడు. ఆ బాణం మెరుపులా దూసుకెళ్ళి కర్ణుడి శిరస్సును ఖండించగా, కర్ణునిలోని దివ్యతేజస్సు సూర్యునిలో ఐక్యమైంది.',
        learnMore_hi: 'अर्जुन ने सत्य और धर्म की शपथ लेकर अंजलिका बाण छोड़ा जिसने कर्ण का मस्तक काट दिया। कर्ण के शरीर से एक दिव्य ज्योति निकलकर सूर्य में समा गई।',
        hint: 'The crescent-shaped Anjalika weapon.',
        hint_te: 'అంజలికాస్త్రం.',
        hint_hi: 'अंजलिका अस्त्र।',
        xpReward: 10
      },
      {
        id: 'q90-3',
        type: 'true_false',
        prompt: 'Upon Karna’s fall, a luminous ray of celestial solar light emerged from his body and ascended directly into the sky to merge with Surya, his divine father.',
        prompt_te: 'కర్ణుడు నేలకొరిగినప్పుడు, అతని శరీరం నుండి ఒక దివ్యమైన సూర్య తేజస్సు పైకి లేచి ఆకాశంలో ఉన్న సూర్య భగవానుడిలో లీనమైంది.',
        prompt_hi: 'कर्ण के धराशायी होने पर उसके निष्प्राण शरीर से एक दिव्य सौर तेज निकला और आकाश की ओर जाकर उसके पिता सूर्यदेव में विलीन हो गया।',
        correctAnswer: true,
        learnMore: 'The epic records that all quarters glowed; the great giver Danaveera Karna, despite fighting on the side of adharma due to gratitude, returned to his eternal solar source.',
        learnMore_te: 'దానవీర కర్ణుడు కృతజ్ఞత కోసం అధర్మం వైపు పోరాడినప్పటికీ, అతని దివ్య ఆత్మ తన తండ్రియైన సూర్యదేవునిలో ఐక్యమై శాశ్వత శాంతిని పొందింది.',
        learnMore_hi: 'दानवीर कर्ण का तेज साक्षात् सूर्यदेव में समा गया। अधर्म का साथ देने पर भी उसकी दानशीलता और निष्ठा ने उसे इतिहास में अमर कर दिया।',
        hint: 'Surya embraced his son’s soul back into light.',
        hint_te: 'సూర్యునిలో లీనమైన కర్ణుని తేజస్సు.',
        hint_hi: 'सूर्यदेव के तेज में विलीन होना।',
        xpReward: 10
      }
    ]
  }
];
