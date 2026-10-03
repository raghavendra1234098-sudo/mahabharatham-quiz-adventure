import { Level } from '../../types/game';

export const PART_8_LEVELS: Level[] = [
  // Level 71
  {
    levelNumber: 71,
    partNumber: 8,
    title: 'Dharmakshetra Kurukshetra & The Sacred Code of War',
    title_te: 'ధర్మక్షేత్రం కురుక్షేత్రం & యుద్ధ నియమాలు',
    title_hi: 'धर्मक्षेत्र कुरुक्षेत्र और युद्ध की आचार संहिता',
    subtitle: 'The Sacred Battlefield & Rules of Chivalry',
    subtitle_te: 'పుణ్యభూమి & వీర ధర్మ సూత్రాలు',
    subtitle_hi: 'पवित्र युद्धभूमि और धर्मयुद्ध के नियम',
    questions: [
      {
        id: 'q71-1',
        type: 'mcq',
        prompt: 'Why was the plain of Kurukshetra specifically selected as the battlefield for the Great War?',
        prompt_te: 'మహాభారత మహాయుద్ధానికి ప్రత్యేకంగా కురుక్షేత్ర భూమినే ఎందుకు ఎంచుకున్నారు?',
        prompt_hi: 'महायज्ञ रूपी इस युद्ध के लिए कुरुक्षेत्र की भूमि को ही क्यों चुना गया?',
        options: [
          'It had been sanctified by King Kuru’s severe penance, where dying in righteous combat grants eternal heaven (Swarga)',
          'It was the exact geographic midpoint between Indraprastha and Hastinapur',
          'The ground was covered with thick forest that concealed armies',
          'It had an ancient fortress where the kings could reside safely'
        ],
        options_te: [
          'కురు మహారాజు చేసిన తపస్సు వల్ల పవిత్రమైన ఈ నేలపై ధర్మం కోసం ప్రాణాలర్పించిన వీరులకు వీరస్వర్గం లభిస్తుందని నమ్మకం',
          'ఇది ఇంద్రప్రస్థ మరియు హస్తినాపురాలకు సరిగ్గా మధ్యలో ఉంది',
          'సైన్యాలను దాచడానికి దట్టమైన అడవి ఉంది',
          'రాజులు సురక్షితంగా ఉండటానికి ఒక పురాతన కోట ఉంది'
        ],
        options_hi: [
          'राजा कुरु की तपस्या से पावन इस भूमि पर धर्मयुद्ध में प्राण त्यागने वाले वीरों को सीधे स्वर्ग और सद्गति प्राप्त होती है',
          'यह हस्तिनापुर और इंद्रप्रस्थ के ठीक बीच में स्थित था',
          'यहाँ घने जंगल थे जिससे सेना छिप सकती थी',
          'यहाँ राजाओं के रहने के लिए प्राचीन किले थे'
        ],
        correctIndex: 0,
        learnMore: 'King Kuru ploughed this sacred field with seven vows of virtue; Lord Indra blessed that whoever dies on this holy plain in honest battle shall attain heavenly realms.',
        learnMore_te: 'కురు రాజు ఈ భూమిని దున్ని ధర్మ సూత్రాలతో పునీతం చేశాడు. ఇంద్రుడు ప్రసన్నుడై ఇక్కడ న్యాయంగా యుద్ధం చేస్తూ ప్రాణాలు కోల్పోయేవారు నేరుగా స్వర్గానికి చేరుకుంటారని వరమిచ్చాడు.',
        learnMore_hi: 'राजा कुरु ने इस भूमि को धर्म के नियमों से जोता था। इंद्रदेव ने वरदान दिया था कि इस पुण्य भूमि पर धर्मयुद्ध करते हुए वीरगति पाने वाले योद्धा सीधे उत्तम लोकों को प्राप्त होंगे।',
        hint: 'Think of King Kuru’s penance and the promise of Swarga for fallen warriors.',
        hint_te: 'కురు రాజు తపస్సు మరియు వీరస్వర్గ ఫలం గురించి ఆలోచించండి.',
        hint_hi: 'राजा कुरु की तपस्या और वीरों की सद्गति के वरदान को याद करें।',
        xpReward: 10
      },
      {
        id: 'q71-2',
        type: 'true_false',
        prompt: 'Under the agreed rules of fair combat (Dharma Yuddha), war could only be fought between sunrise and sunset, and combatants of equal rank had to face each other.',
        prompt_te: 'ధర్మయుద్ధ నిబంధనల ప్రకారం యుద్ధం సూర్యోదయం నుండి సూర్యాస్తమయం వరకే జరగాలి మరియు సమాన స్థాయి కలవారే పరస్పరం పోరాడాలి.',
        prompt_hi: 'धर्मयुद्ध के नियमों के अनुसार युद्ध केवल सूर्योदय से सूर्यास्त तक ही लड़ा जा सकता था और समान श्रेणी के योद्धा ही एक-दूसरे से द्वंद्व कर सकते थे।',
        correctAnswer: true,
        learnMore: 'Both armies agreed: sunset ends fighting, combatants fraternize peacefully at night, unarmed or retreating foes must not be struck, and chariot fights chariot.',
        learnMore_te: 'సూర్యాస్తమయంతో యుద్ధం ముగుస్తుంది, రాత్రిపూట శత్రువులు కూడా స్నేహపూర్వకంగా మాట్లాడుకోవచ్చు, నిరాయుధులపై లేదా పారిపోయే వారిపై దాడి చేయకూడదు అనే నిబంధనలు ఖరారయ్యాయి.',
        learnMore_hi: 'नियम बने कि सूर्यास्त के बाद शंखनाद के साथ युद्ध रुकेगा, रात में दोनों पक्ष परस्पर भेंट कर सकते हैं, और रथ का मुकाबला केवल रथ से ही होगा।',
        hint: 'This was the chivalric code agreed by both camps on Day 1.',
        hint_te: 'మొదటి రోజు ఇరుపక్షాలు అంగీకరించిన యుద్ధ ధర్మ సూత్రాలు.',
        hint_hi: 'यह दोनों पक्षों द्वारा पहले दिन स्वीकृत आचार संहिता थी।',
        xpReward: 10
      },
      {
        id: 'q71-3',
        type: 'riddle',
        prompt: 'Eleven grand Akshauhinis assembled for Duryodhana, while seven stood arrayed behind Yudhishthira. How many total Akshauhini divisions gathered on Kurukshetra?',
        prompt_te: 'దుర్యోధనుడి పక్షాన పదకొండు అక్షౌహిణులు, ధర్మరాజు పక్షాన ఏడు అక్షౌహిణుల మహాసైన్యం నిలిచింది. కురుక్షేత్రంలో మొత్తం ఎన్ని అక్షౌహిణులు సమకూరాయి?',
        prompt_hi: 'दुर्योधन के पक्ष में ग्यारह अक्षौहिणी और युधिष्ठिर के पक्ष में सात अक्षौहिणी सेनाएँ थीं। कुरुक्षेत्र में कुल कितनी अक्षौहिणी सेनाएँ एकत्रित हुई थीं?',
        hint: '11 plus 7 equals the mystic number 18.',
        hint_te: '11 మరియు 7 కూడిక 18.',
        hint_hi: '11 और 7 का योग रहस्यमयी अंक 18 है।',
        answer: 'Eighteen Akshauhinis',
        answer_te: 'పద్దెనిమిది అక్షౌహిణులు',
        answer_hi: 'अठारह अक्षौहिणी',
        options: [
          'Eighteen Akshauhinis',
          'Twenty Akshauhinis',
          'Fifteen Akshauhinis',
          'Twelve Akshauhinis'
        ],
        options_te: [
          'పద్దెనిమిది అక్షౌహిణులు',
          'ఇరవై అక్షౌహిణులు',
          'పదిహేను అక్షౌహిణులు',
          'పన్నెండు అక్షౌహిణులు'
        ],
        options_hi: [
          'अठारह अक्षौहिणी',
          'बीस अक्षौहिणी',
          'पंद्रह अक्षौहिणी',
          'बारह अक्षौहिणी'
        ],
        learnMore: '18 Akshauhinis assembled, echoing the 18 chapters of the Gita, the 18 days of war, and the 18 Parvas of the epic.',
        learnMore_te: 'మొత్తం 18 అక్షౌహిణుల సైన్యం. ఇది మహాభారతంలోని 18 పర్వాలు, గీతలోని 18 అధ్యాయాలు, మరియు 18 రోజుల యుద్ధాన్ని సూచిస్తుంది.',
        learnMore_hi: 'कुल 18 अक्षौहिणी सेना थी, जो महाभारत के 18 पर्वों, गीता के 18 अध्यायों और 18 दिनों के युद्ध के रहस्यमयी अंक 18 को दर्शाती है।',
        xpReward: 20
      }
    ]
  },

  // Level 72
  {
    levelNumber: 72,
    partNumber: 8,
    title: 'Humility Before Battle & The Barefoot King',
    title_te: 'యుద్ధానికి ముందు వినయం & పాదచారి ధర్మరాజు',
    title_hi: 'युद्ध से पूर्व विनय और युधिष्ठिर की चरण वंदना',
    subtitle: 'Yudhishthira Touches the Feet of the Elders',
    subtitle_te: 'పెద్దల పాదాలకు నమస్కరించిన ధర్మరాజు',
    subtitle_hi: 'पितामह, गुरु और कृपाचार्य से विजय का आशीर्वाद',
    questions: [
      {
        id: 'q72-1',
        type: 'mcq',
        prompt: 'Just before arrows began to fly, why did King Yudhishthira take off his armor, lay down his weapons, and walk barefoot toward the Kaurava battle lines?',
        prompt_te: 'యుద్ధం మొదలయ్యే క్షణంలో ధర్మరాజు కవచాన్ని విడిచి, ఆయుధాలు కింద పెట్టి, ఒట్టి కాళ్ళతో కౌరవ సైన్యం వైపు ఎందుకు నడిచాడు?',
        prompt_hi: 'युद्ध आरंभ होने से ठीक पहले युधिष्ठिर अपने अस्त्र-शस्त्र और कवच त्यागकर नंगे पाँव कौरव सेना की ओर क्यों चल पड़े?',
        options: [
          'To touch the feet of Bhishma, Drona, Kripa, and Shalya to seek their permission and blessings before striking them in battle',
          'He was overwhelmed with cowardice and wished to surrender',
          'He wanted to challenge Duryodhana to a single combat',
          'He had forgotten his conch shell in the enemy camp'
        ],
        options_te: [
          'యుద్ధం ప్రారంభించే ముందు తాత భీష్ముడు, గురువు ద్రోణుడు, కృపాచార్యుడు, శల్యుల పాదాలకు నమస్కరించి వారి అనుమతి మరియు ఆశీస్సులు పొందడానికి',
          'భయపడి లొంగిపోవడానికి వెళ్ళాడు',
          'దుర్యోధనుడిని ద్వంద్వ యుద్ధానికి పిలవడానికి',
          'తన శంఖాన్ని శత్రు శిబిరంలో మరచిపోయినందున'
        ],
        options_hi: [
          'युद्ध आरंभ करने से पूर्व भीष्म, द्रोण, कृपाचार्य और शल्य के चरण स्पर्श कर उनकी आज्ञा और विजय का आशीर्वाद माँगने के लिए',
          'भयभीत होकर आत्मसमर्पण करने के लिए',
          'दुर्योधन को अकेले द्वंद्वयुद्ध के लिए ललकारने के लिए',
          'शंख शत्रु शिविर में भूल जाने के कारण'
        ],
        correctIndex: 0,
        learnMore: 'Bhishma was deeply moved to tears: "Had you not come, O King, I would have cursed you. Because you showed such righteousness, you shall have victory!"',
        learnMore_te: 'భీష్ముడు భావోద్వేగంతో: "ధర్మరాజా! నీవు రాకపోతే నేను శపించేవాడిని. నీ ధర్మ వినయం వల్ల నీకే విజయం తథ్యం" అని ఆశీర్వదించాడు.',
        learnMore_hi: 'भीष्म ने भावुक होकर कहा: "यदि तुम आशीर्वाद लेने न आते तो मैं तुम्हें शाप दे देता। तुम्हारी इस धर्मनिष्ठा के कारण विजय तुम्हारी ही होगी!"',
        hint: 'He went to seek blessings from his grand-uncle and preceptors.',
        hint_te: 'తన తాత మరియు గురువుల ఆశీర్వాదం తీసుకోవడానికి వెళ్ళాడు.',
        hint_hi: 'वे अपने गुरुजनों और पितामह के चरण छूने गए थे।',
        xpReward: 10
      },
      {
        id: 'q72-2',
        type: 'mcq',
        prompt: 'When Yudhishthira made an open proclamation inviting anyone wishing to join righteous Dharma to cross over, which Kaurava prince crossed over to the Pandava side?',
        prompt_te: 'ధర్మం వైపు పోరాడాలనుకునే వారు ఎవరైనా తనతో రావచ్చని ధర్మరాజు పలికినప్పుడు, కౌరవులలో ఎవరు పాండవుల వైపు వచ్చారు?',
        prompt_hi: 'जब युधिष्ठिर ने घोषणा की कि जो धर्म के पक्ष में लड़ना चाहता है वह आ सकता है, तब धृतराष्ट्र का कौन-सा पुत्र पाण्डवों के पक्ष में आ गया?',
        options: [
          'Yuyutsu (the noble half-brother born of a Vaishya maid)',
          'Vikarna',
          'Dushasana',
          'Chitrasena'
        ],
        options_te: [
          'యుయుత్సుడు (వైశ్య స్త్రీ వలన జన్మించిన ధృతరాష్ట్రుని కుమారుడు)',
          'వికర్ణుడు',
          'దుశ్శాసనుడు',
          'చిత్రసేనుడు'
        ],
        options_hi: [
          'युयुत्सु (दासी पुत्र एवं धृतराष्ट्र का धर्मात्मा पुत्र)',
          'विकर्ण',
          'दुःशासन',
          'चित्रसेन'
        ],
        correctIndex: 0,
        learnMore: 'Yuyutsu alone among Dhritarashtra’s sons possessed the moral courage to publicly abandon adharma. He fought faithfully for the Pandavas and survived the war.',
        learnMore_te: 'ధృతరాష్ట్రుని కుమారుల్లో యుయుత్సుడు మాత్రమే అధర్మాన్ని వదిలి పాండవుల వైపు వచ్చాడు. యుద్ధానంతరం జీవించి ఉన్న ఏకైక కౌరవ పుత్రుడు అతనే.',
        learnMore_hi: 'धृतराष्ट्र के पुत्रों में केवल युयुत्सु ने अधर्म का साथ छोड़कर पांडवों का पक्ष लिया। युद्ध के बाद जीवित बचने वाला वह एकमात्र कौरव भ्राता था।',
        hint: 'His name begins with "Yu" and he managed the Pandava logistics.',
        hint_te: 'అతని పేరు యుయుత్సుడు.',
        hint_hi: 'उनका नाम "युयुत्सु" था।',
        xpReward: 10
      },
      {
        id: 'q72-3',
        type: 'true_false',
        prompt: 'Both Bhishma and Drona told Yudhishthira that their bodies were bound by obligation to Duryodhana, but their prayers and blessings were for Pandava victory.',
        prompt_te: 'భీష్ముడు మరియు ద్రోణుడు ఇద్దరూ తమ శరీరాలు దుర్యోధనుడి ఉప్పు తిన్నందుకు కట్టుబడి ఉన్నాయని, కానీ తమ ఆశీస్సులు పాండవుల విజయానికేనని ధర్మరాజుకు చెప్పారు.',
        prompt_hi: 'भीष्म और द्रोण दोनों ने युधिष्ठिर से कहा कि उनका शरीर दुर्योधन के अन्न का ऋणी होने से बँधा है, परंतु उनकी शुभकामनाएँ और आशीर्वाद पांडवों की विजय के साथ हैं।',
        correctAnswer: true,
        learnMore: 'Bhishma said: "Man is slave to wealth, but wealth is slave to none. I am bound by Kaurava royal debt, yet ask me how I may be conquered when the time arrives."',
        learnMore_te: 'భీష్ముడు: "మనిషి ధనానికి దాసుడు, నేను కౌరవ రుణపడి ఉన్నాను. కానీ నీవు ధర్మవంతుడవు కాబట్టి నన్ను ఎలా జయించవచ్చో సమయం వచ్చినప్పుడు చెబుతాను" అన్నాడు.',
        learnMore_hi: 'भीष्म ने कहा: "मनुष्य अर्थ (धन) का दास है, परंतु अर्थ किसी का दास नहीं। मैं कौरवों के ऋण से बँधा हूँ, किंतु समय आने पर मुझसे पूछना कि मेरा वध कैसे संभव होगा।"',
        hint: 'They openly acknowledged that righteousness resided with the Pandavas.',
        hint_te: 'ధర్మం పాండవుల వైపే ఉందని వారు స్పష్టంగా చెప్పారు.',
        hint_hi: 'उन्होंने स्वीकार किया कि धर्म पांडवों के साथ है।',
        xpReward: 10
      }
    ]
  },

  // Level 73
  {
    levelNumber: 73,
    partNumber: 8,
    title: 'Arjuna’s Despondency (Arjuna Vishada Yoga)',
    title_te: 'అర్జున విషాద యోగం',
    title_hi: 'अर्जुन विषाद योग: गांडीव का गिरना',
    subtitle: 'Between Two Armies & The Heavy Heart',
    subtitle_te: 'రెండు సైన్యాల మధ్య రథం & అర్జునుడి ఆవేదన',
    subtitle_hi: 'दोनों सेनाओं के मध्य रथ और मोह से व्याकुल अर्जुन',
    questions: [
      {
        id: 'q73-1',
        type: 'mcq',
        prompt: 'When Arjuna asked Krishna to position his chariot between the two opposing hosts (Senayor Ubhayor Madhye), what sight triggered his profound crisis of conscience?',
        prompt_te: 'శత్రు సైన్యాలను చూడటానికి అర్జునుడు రథాన్ని రెండు సైన్యాల మధ్య ఉంచమని శ్రీకృష్ణుడిని కోరినప్పుడు, అతనికి కలిగిన తీవ్ర ఆవేదనకు కారణమేమిటి?',
        prompt_hi: 'जब अर्जुन ने श्रीकृष्ण से रथ को दोनों सेनाओं के मध्य खड़ा करने को कहा, तब किस दृश्य को देखकर वे गहरे शोक और मोह में डूब गए?',
        options: [
          'Seeing his grandfathers, teachers, uncles, brothers, sons, and lifelong friends arrayed against him, whom he would have to slaughter for a kingdom',
          'He realized the Kaurava army was vastly superior in numbers',
          'He saw terrible ill-omened beasts prowling across the field',
          'He suddenly fell gravely ill from a poisonous breeze'
        ],
        options_te: [
          'ఒక చిన్న రాజ్యం కోసం తన తాతలను, గురువులను, సోదరులను, బంధుమిత్రులను స్వయంగా వధించవలసి వస్తుందన్న ఆలోచన అతడిని కుంగదీసింది',
          'కౌరవ సైన్యం చాలా పెద్దదిగా ఉండటం చూసి భయపడ్డాడు',
          'యుద్ధరంగంలో భయంకరమైన దుశ్శకునాలు కనిపించాయి',
          'విషపు గాలి వల్ల అకస్మాత్తుగా తీవ్ర అస్వస్థతకు గురయ్యాడు'
        ],
        options_hi: [
          'राज्य के लोभ में अपने ही पितामहों, गुरुओं, भाइयों, पुत्रों और मित्रों को वध के लिए सामने खड़े देखकर उनका हृदय करुणा और मोह से भर गया',
          'कौरवों की विशाल सेना देखकर वे भयभीत हो गए थे',
          'युद्धभूमि में भयंकर अपशकुन दिखाई दे रहे थे',
          'अचानक बीमार पड़ जाने के कारण'
        ],
        correctIndex: 0,
        learnMore: 'Arjuna’s limbs trembled, his mouth went dry, his hair stood on end, and the mighty bow Gandiva slipped from his feverish hands as he sank onto his chariot seat.',
        learnMore_te: 'అర్జునుడి చేతులు వణికాయి, నోరు ఎండిపోయింది, శరీరం కంపించింది. చేతిలోని గాండీవం జారిపడగా రథంలో కూలబడిపోయాడు.',
        learnMore_hi: 'अर्जुन के अंग शिथिल हो गए, मुख सूख गया, शरीर काँपने लगा और उनके हाथों से गांडीव धनुष गिर पड़ा। वे रथ के पिछले भाग में बैठ गए।',
        hint: 'Seeing revered kinsmen and teachers whom he must kill.',
        hint_te: 'బంధువులు, గురువులను చంపడానికి మనసు అంగీకరించకపోవడం.',
        hint_hi: 'अपने ही स्वजनों और गुरुजनों के संहार की कल्पना से उत्पन्न मोह।',
        xpReward: 10
      },
      {
        id: 'q73-2',
        type: 'mcq',
        prompt: 'What was Arjuna’s central ethical argument against waging the war, as voiced in Chapter 1 of the Bhagavad Gita?',
        prompt_te: 'భగవద్గీత ప్రథమ అధ్యాయంలో యుద్ధం చేయకూడదని అర్జునుడు వాదించిన ప్రధాన నైతిక అంశం ఏమిటి?',
        prompt_hi: 'भगवद्गीता के प्रथम अध्याय में युद्ध न करने के पक्ष में अर्जुन ने मुख्य रूप से क्या नैतिक तर्क दिया था?',
        options: [
          'Destruction of families leads to the collapse of eternal traditions, corruption of women, intermingling of castes (Varna-sankara), and damnation of ancestors',
          'The war would drain the treasury of the entire earth',
          'His divine arrows would lose their celestial potency',
          'He preferred to retire as a merchant in Hastinapur'
        ],
        options_te: [
          'కులక్షయం వల్ల సనాతన ధర్మాలు నశిస్తాయి, స్త్రీలు కలుషితమవుతారు, వర్ణసంకరం ఏర్పడి పితృదేవతలకు పిండతర్పణాలు అందక నరకం ప్రాప్తిస్తుంది',
          'యుద్ధం వల్ల ప్రపంచ ఖజానా అంతా ఖాళీ అవుతుంది',
          'దివ్యాస్త్రాలు వాటి శక్తులను కోల్పోతాయి',
          'హస్తినాపురంలో వ్యాపారిగా స్థిరపడటం మేలు'
        ],
        options_hi: [
          'कुल के नाश से सनातन कुल-धर्म नष्ट हो जाते हैं, स्त्रियाँ दूषित होती हैं, वर्णसंकर उत्पन्न होता है और पूर्वज नरक में गिरते हैं',
          'युद्ध से पृथ्वी का सारा खजाना समाप्त हो जाएगा',
          'उनके दिव्यास्त्र अपनी शक्ति खो देंगे',
          'वे एक व्यापारी बनकर जीवन बिताना चाहते थे'
        ],
        correctIndex: 0,
        learnMore: 'Arjuna exclaimed: "Better it would be for me if the sons of Dhritarashtra, weapons in hand, should slay me in battle while I stand unresisting and unarmed."',
        learnMore_te: 'అర్జునుడు: "ఆయుధాలు లేని నన్ను ధృతరాష్ట్రుని కుమారులు చంపినా సరే, నేను మాత్రం వీరిని చంపి రాజ్యాన్ని కోరుకోను" అని వాదించాడు.',
        learnMore_hi: 'अर्जुन ने कहा: "शस्त्रधारी कौरव यदि मुझ निहत्थे और प्रतिरोध न करने वाले का वध भी कर दें, तो वह भी मेरे लिए श्रेयस्कर होगा।"',
        hint: 'Kulakshaya (ruin of the clan) and moral degeneration.',
        hint_te: 'కులక్షయం మరియు సనాతన ధర్మ వినాశనం.',
        hint_hi: 'कुल का विनाश और वर्णसंकर की उत्पत्ति।',
        xpReward: 10
      },
      {
        id: 'q73-3',
        type: 'riddle',
        prompt: 'I am the celestial bow crafted by Brahma, carried by Varuna and Agni, capable of wiping out armies. Yet on the verge of the great clash, I slipped uselessly from the trembling fingers of my master. What weapon am I?',
        prompt_te: 'నేను బ్రహ్మదేవుడు సృష్టించిన, వరుణుడు మరియు అగ్నిదేవుడు అందించిన దివ్య విల్లును. కానీ యుద్ధారంభంలో నా యజమాని చేతుల నుండి జారిపడ్డాను. నేను ఎవరిని?',
        prompt_hi: 'मैं ब्रह्मा द्वारा निर्मित और अग्निदेव द्वारा प्रदत्त वह दिव्य धनुष हूँ जिसकी टंकार से दिशाएँ काँपती हैं, फिर भी पहले दिन अपने स्वामी के काँपते हाथों से छूटकर गिर गया। मैं कौन हूँ?',
        hint: 'The most famous bow in the Mahabharata, carried by Partha.',
        hint_te: 'అర్జునుడి ప్రసిద్ధ ధనుస్సు.',
        hint_hi: 'पार्थ का सुप्रसिद्ध दिव्य धनुष।',
        answer: 'Gandiva',
        answer_te: 'గాండీవం',
        answer_hi: 'गांडीव',
        options: [
          'Gandiva',
          'Vijaya Bow',
          'Kodanda',
          'Pinaka'
        ],
        options_te: [
          'గాండీవం',
          'విజయ ధనుస్సు',
          'కోదండం',
          'పినాకం'
        ],
        options_hi: [
          'गांडीव',
          'विजय धनुष',
          'कोदंड',
          'पिनाक'
        ],
        learnMore: 'The Gandiva bow of Arjuna could only be wielded by someone whose mind was resolute; under maya and attachment, even Gandiva could not be lifted.',
        learnMore_te: 'గాండీవం అర్జునుడి దివ్య ధనుస్సు. మనస్సు మోహంలో చిక్కుకున్నప్పుడు గాండీవాన్ని కూడా ఎత్తలేకపోయాడు.',
        learnMore_hi: 'गांडीव अर्जुन का दिव्य धनुष था, जो मोहग्रस्त होने पर उनके हाथों से छूटकर गिर गया था।',
        xpReward: 20
      }
    ]
  },

  // Level 74
  {
    levelNumber: 74,
    partNumber: 8,
    title: 'The Eternal Atman & Sankhya Yoga',
    title_te: 'సాంఖ్య యోగం & ఆత్మ నిత్యత్వం',
    title_hi: 'सांख्य योग: आत्मा की अमरता',
    subtitle: 'The Soul Never Dies & The Illusion of Death',
    subtitle_te: 'ఆత్మకు చావు లేదు & దేహం కేవలం వస్త్రం',
    subtitle_hi: 'न जायते म्रियते वा कदाचित्',
    questions: [
      {
        id: 'q74-1',
        type: 'mcq',
        prompt: 'In Bhagavad Gita Chapter 2, how does Lord Krishna explain the nature of the true Self (Atman) versus the physical body?',
        prompt_te: 'భగవద్గీత రెండవ అధ్యాయంలో శ్రీకృష్ణుడు స్థూల దేహానికి మరియు నిజమైన ఆత్మకు మధ్య ఉన్న తేడాను ఎలా వివరించాడు?',
        prompt_hi: 'भगवद्गीता के द्वितीय अध्याय में भगवान श्रीकृष्ण ने भौतिक शरीर और अविनाशी आत्मा के संबंध में क्या समझाया है?',
        options: [
          'Just as a person discards worn-out garments and puts on new ones, the embodied soul casts off worn-out bodies and enters into new ones',
          'The body and the soul perish together at the moment of physical death',
          'Only the minds of righteous sages survive, whereas warriors vanish into dust',
          'The soul changes with each ritual performed by priests'
        ],
        options_te: [
          'మనిషి పాతబడిన వస్త్రాలను విడిచి కొత్త వస్త్రాలను ఎలా ధరిస్తాడో, అలాగే ఆత్మ పాతబడిన దేహాన్ని వదిలి నూతన దేహాన్ని ధరిస్తుంది',
          'శరీరంతో పాటే ఆత్మ కూడా పూర్తిగా నశిస్తుంది',
          'మునుల ఆత్మలు మాత్రమే మిగులుతాయి, సైనికులు మట్టిలో కలిసిపోతారు',
          'పూజలు చేయడం ద్వారా మాత్రమే ఆత్మకు శాంతి లభిస్తుంది'
        ],
        options_hi: [
          'जैसे मनुष्य पुराने वस्त्रों को त्यागकर नए वस्त्र धारण करता है, वैसे ही जीवात्मा पुराने शरीरों को छोड़कर नए शरीर धारण करती है',
          'शरीर की मृत्यु के साथ ही आत्मा का भी नाश हो जाता है',
          'केवल ऋषियों की आत्मा अमर होती है, सैनिकों की नहीं',
          'आत्मा केवल कर्मकांडों से ही जीवित रहती है'
        ],
        correctIndex: 0,
        learnMore: '"Vasamsi jirnani yatha vihaya...": Weapons cannot cleave the Atman, fire cannot burn it, water cannot wet it, and wind cannot dry it.',
        learnMore_te: '"వాసాంసి జీర్ణాని యథా విహాయ...": ఆత్మను ఆయుధాలు ఛేదించలేవు, అగ్ని దహించలేదు, నీరు తడపలేదు, వాయువు ఆర్పలేదు. అది నిత్యం, శాశ్వతం.',
        learnMore_hi: '"वासांसि जीर्णानि यथा विहाय...": नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः। आत्मा अजर, अमर और शाश्वत है, केवल शरीर नष्ट होता है।',
        hint: 'Think of changing old clothes for new garments.',
        hint_te: 'పాత దుస్తులు మార్చి కొత్తవి ధరించడం వంటి ఉపమానం.',
        hint_hi: 'पुराने वस्त्र बदलकर नए वस्त्र धारण करने का दृष्टांत।',
        xpReward: 10
      },
      {
        id: 'q74-2',
        type: 'mcq',
        prompt: 'What did Krishna identify as the Kshatriya’s supreme duty when faced with an unprovoked righteous war?',
        prompt_te: 'ధర్మం కోసం అనుకోకుండా ఎదురైన ధర్మయుద్ధంలో క్షత్రియుడి పరమ కర్తవ్యం ఏమిటని శ్రీకృష్ణుడు స్పష్టం చేశాడు?',
        prompt_hi: 'अधर्म के विरुद्ध आए इस धर्मयुद्ध में क्षत्रिय का परम कर्तव्य श्रीकृष्ण ने क्या बताया?',
        options: [
          'There is no greater good for a Kshatriya than to fight in defense of Dharma; fleeing yields only eternal infamy, worse than death',
          'To renounce everything and retire into forest meditation immediately',
          'To negotiate indefinitely until all enemies surrender voluntarily',
          'To fight only if the enemy promises no casualties'
        ],
        options_te: [
          'ధర్మం కోసం పోరాడటాన్ని మించిన పరమ శ్రేయస్సు క్షత్రియుడికి లేదు. యుద్ధాన్ని వదిలి పారిపోతే అపకీర్తి వస్తుంది, ఆ అపకీర్తి మరణం కంటే ఘోరమైనది',
          'వెంటనే అడవులకు వెళ్ళి తపస్సు చేసుకోవడం',
          'శత్రువులు లొంగిపోయే వరకు శాంతి చర్చలు జరపడం',
          'ఎవరూ చనిపోరని హామీ ఇస్తేనే యుద్ధం చేయడం'
        ],
        options_hi: [
          'धर्मयुद्ध से बढ़कर क्षत्रिय के लिए कोई कल्याणकारी मार्ग नहीं है; युद्ध से विमुख होने पर मिलने वाला अपयश मृत्यु से भी बदतर होता है',
          'सब त्यागकर तुरंत संन्यास लेकर वन में चले जाना',
          'शत्रु के सामने गिड़गिड़ाकर शांति माँगना',
          'केवल तभी लड़ना जब विजय सुनिश्चित हो'
        ],
        correctIndex: 0,
        learnMore: '"Dharmyad dhi yuddhac chreyo \'nyat ksatriyasya na vidyate": For a warrior, an open gateway to heaven has arrived unsought in this righteous fight.',
        learnMore_te: 'క్షత్రియునికి ధర్మయుద్ధం కంటే శ్రేయస్కరమైనది మరొకటి లేదు. ఈ యుద్ధంలో మరణిస్తే వీరస్వర్గం, గెలిస్తే భూమండల పాలన లభిస్తుంది.',
        learnMore_hi: 'स्वयं उपस्थित हुआ धर्मयुद्ध क्षत्रियों के लिए स्वर्ग का खुला द्वार है। यदि तुम जीतोगे तो पृथ्वी भोगोगे, वीरगति पाओगे तो स्वर्ग प्राप्त करोगे।',
        hint: 'A righteous war is an open gateway to heaven for a Kshatriya.',
        hint_te: 'క్షత్రియ ధర్మం ప్రకారం యుద్ధం చేయడం పరమ శ్రేయస్కరం.',
        hint_hi: 'धर्म की रक्षा के लिए युद्ध करना ही क्षत्रिय का धर्म है।',
        xpReward: 10
      },
      {
        id: 'q74-3',
        type: 'true_false',
        prompt: 'Lord Krishna taught that one who grieves for that which is perishable is unwise, because the wise grieve neither for the living nor for the dead.',
        prompt_te: 'జ్ఞానులైనవారు జీవించి ఉన్నవారి గురించి గానీ, మరణించినవారి గురించి గానీ దుఃఖించరని శ్రీకృష్ణుడు బోధించాడు.',
        prompt_hi: 'श्रीकृष्ण ने उपदेश दिया कि ज्ञानी पुरुष न तो जीवित के लिए शोक करते हैं और न ही मृत के लिए, क्योंकि नश्वर देह के लिए शोक करना अज्ञान है।',
        correctAnswer: true,
        learnMore: '"Gatasun agatasums ca nanusocanti panditah": Those with true spiritual vision understand the eternal nature of the soul and do not lament physical transition.',
        learnMore_te: '"గతాసూనగతాసూంశ్చ నానుశోచంతి పండితాః": పండితులుగా పిలవబడే వివేకవంతులు పోయిన దేహాల గురించి గానీ, ఉన్న దేహాల గురించి గానీ పరితపించరు.',
        learnMore_hi: '"गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः": पंडित जन उन शरीरों के लिए शोक नहीं करते जिनके प्राण चले गए हैं अथवा नहीं गए हैं।',
        hint: 'Panditas do not mourn the transient.',
        hint_te: 'పండితులు దేహ నాశనానికి చింతించరు.',
        hint_hi: 'ज्ञानी जन आत्मा की अमरता को जानकर शोक नहीं करते।',
        xpReward: 10
      }
    ]
  },

  // Level 75
  {
    levelNumber: 75,
    partNumber: 8,
    title: 'Karma Yoga & Selfless Duty',
    title_te: 'కర్మయోగం & నిష్కామ కర్మ',
    title_hi: 'कर्मयोग: निष्काम कर्म और अनासक्ति',
    subtitle: 'Karmanye Vadhikaraste Ma Phaleshu Kadachana',
    subtitle_te: 'కర్మ చేయడమే నీ హక్కు, ఫలితంపై కాదు',
    subtitle_hi: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन',
    questions: [
      {
        id: 'q75-1',
        type: 'mcq',
        prompt: 'What is the precise meaning of the legendary verse "Karmany evadhikaras te ma phalesu kadacana" (Bhagavad Gita 2.47)?',
        prompt_te: '"కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన" అనే జగద్విఖ్యాత శ్లోకం యొక్క నిజమైన భావమేమిటి?',
        prompt_hi: '"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन" इस प्रसिद्ध श्लोक का यथार्थ संदेश क्या है?',
        options: [
          'You have a right only to perform your prescribed duty, never to claim the fruits of action; do not be driven by reward, nor attached to inaction',
          'You should only work if you are guaranteed a double reward',
          'Do no work at all so that bad karmic results can never touch you',
          'Fight ruthlessly solely for personal vengeance and land'
        ],
        options_te: [
          'నీ విధిని నిర్వర్తించడంలోనే నీకు అధికారం ఉంది, ఫలితాల మీద ఎప్పుడూ లేదు. ఫలితం ఆశించి కర్మ చేయకు, అలాగని కర్మలను వదిలివేయకు',
          'డబుల్ లాభం ఉంటుందని నమ్మకం ఉంటేనే పనిచేయాలి',
          'ఎటువంటి పనులూ చేయకపోతే పాపం అంటదు',
          'కేవలం ప్రతీకారం మరియు భూమి కోసమే పోరాడాలి'
        ],
        options_hi: [
          'तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं; इसलिए फल की इच्छा से कर्म मत करो और न ही कर्म त्यागने में तुम्हारी आसक्ति हो',
          'कार्य तभी करो जब मनचाहा फल निश्चित रूप से मिले',
          'कोई भी कर्म मत करो ताकि कोई पाप न लगे',
          'केवल प्रतिशोध लेने के लिए ही युद्ध करो'
        ],
        correctIndex: 0,
        learnMore: 'Krishna explains Nishkama Karma: when you act with devotion and dedication to Dharma without anxiety over winning or losing, action becomes liberating.',
        learnMore_te: 'నిష్కామ కర్మ: గెలుపోటములను సమానంగా భావించి, ఫలితాన్ని భగవంతుడికి అర్పించి ధర్మబద్ధమైన విధిని ఆచరిస్తే కర్మ బంధాలు అంటవు.',
        learnMore_hi: 'निष्काम कर्म का सिद्धांत: फल की चिंता से मुक्त होकर कर्तव्य भाव से किया गया कर्म ही आत्मा को बंधनों से मुक्त करता है।',
        hint: 'Duty belongs to you, but the outcome is not under your ego’s control.',
        hint_te: 'కర్మ నీ కర్తవ్యం, ఫలితం భగవదాధీనం.',
        hint_hi: 'कर्म पर तुम्हारा अधिकार है, फल पर नहीं।',
        xpReward: 10
      },
      {
        id: 'q75-2',
        type: 'mcq',
        prompt: 'How does Lord Krishna describe a "Sthitaprajna" (person of steady wisdom) in the Bhagavad Gita?',
        prompt_te: 'భగవద్గీతలో "స్థితప్రజ్ఞుడు" లక్షణాలను శ్రీకృష్ణుడు ఎలా వర్ణించాడు?',
        prompt_hi: 'भगवद्गीता में "स्थितप्रज्ञ" (स्थिर बुद्धि वाले मनुष्य) के लक्षण क्या बताए गए हैं?',
        options: [
          'One who abandons selfish desires, remains unperturbed in misery, indifferent to pleasure, and free from attachment, fear, and anger',
          'One who locks himself in an iron chamber away from society',
          'One who defeats every opponent in intellectual debates',
          'One who amasses the greatest collection of golden ornaments'
        ],
        options_te: [
          'కోరికలను త్యజించి, కష్టాలు వచ్చినప్పుడు కలత చెందక, సుఖాలు వచ్చినప్పుడు పొంగిపోక, రాగ ద్వేష భయాలు లేని స్థిర బుద్ధి కలవాడు',
          'సమాజానికి దూరంగా ఒక గదిలో దాక్కునేవాడు',
          'వాదనలలో అందరినీ ఓడించేవాడు',
          'బంగారాన్ని అధికంగా పోగు చేసుకున్నవాడు'
        ],
        options_hi: [
          'जो संपूर्ण कामनाओं का त्याग कर, दुखों में उद्विग्न न हो, सुखों में अनासक्त रहे और राग, भय तथा क्रोध से पूर्णतः मुक्त हो',
          'जो एकांत कमरे में बंद होकर बैठ जाए',
          'जो केवल वाद-विवाद में सबको पराजित करे',
          'जो अपार धन-संपत्ति एकत्रित करे'
        ],
        correctIndex: 0,
        learnMore: 'A Sthitaprajna withdraws his senses from sensory objects just as a tortoise draws its limbs into its shell, remaining anchored in tranquility.',
        learnMore_te: 'తాబేలు తన అవయవాలను లోపలికి ముడుచుకున్నట్లుగా, ఇంద్రియాలను అదుపులో ఉంచుకుని ఆత్మయందే సంతుష్టుడై ఉండేవాడే స్థితప్రజ్ఞుడు.',
        learnMore_hi: 'जैसे कछुआ अपने अंगों को समेट लेता है, वैसे ही जो अपनी इंद्रियों को विषयों से वश में कर लेता है, उसकी बुद्धि स्थिर मानी जाती है।',
        hint: 'Unshakable in grief, detached in joy, free from fear and anger.',
        hint_te: 'సుఖదుఃఖాలలో సమానంగా ఉండేవాడు.',
        hint_hi: 'सुख-दुख में सम और राग-द्वेष से परे।',
        xpReward: 10
      },
      {
        id: 'q75-3',
        type: 'true_false',
        prompt: 'According to the Gita, inaction (inaction through laziness or fear) is itself a form of bondage, because no living being can remain even for a moment without performing action.',
        prompt_te: 'గీత ప్రకారం ఏ ప్రాణీ ఒక్క క్షణం కూడా కర్మ చేయకుండా ఉండలేడు; కాబట్టి కర్మను వదిలేయడం కంటే నిష్కామంగా ఆచరించడమే శ్రేయస్కరం.',
        prompt_hi: 'गीता के अनुसार कोई भी प्राणी एक क्षण भी कर्म किए बिना नहीं रह सकता, अतः कर्म त्यागने की अपेक्षा अनासक्त भाव से कर्म करना ही श्रेष्ठ है।',
        correctAnswer: true,
        learnMore: '"Na hi kascit ksanam api jatu tisthaty akarmakrt": Nature forces everyone to act; wise people sanctify their actions as sacrifice (Yajna) for universal well-being (Lokasangraha).',
        learnMore_te: 'ప్రకృతి గుణాల వల్ల ప్రతి ఒక్కరూ కర్మ చేయక తప్పదు. కాబట్టి స్వార్థాన్ని వీడి లోకకల్యాణం కోసం కర్మను యజ్ఞంలా ఆచరించడమే ముక్తి మార్గం.',
        learnMore_hi: 'प्रकृति के गुणों द्वारा विवश होकर सभी को कर्म करना पड़ता है। इसलिए श्रेष्ठ पुरुष लोकसंग्रह और कर्तव्य भावना से कर्म करते हैं।',
        hint: 'Even breathing and living is an action.',
        hint_te: 'జీవించి ఉండటమే ఒక కర్మ.',
        hint_hi: 'सांस लेना और जीवित रहना भी कर्म के अंतर्गत आता है।',
        xpReward: 10
      }
    ]
  },

  // Level 76
  {
    levelNumber: 76,
    partNumber: 8,
    title: 'The Cosmic Form (Vishwaroopa Darshana)',
    title_te: 'విశ్వరూప సందర్శన యోగం',
    title_hi: 'विश्वरूप दर्शन योग: काल का विराट स्वरूप',
    subtitle: 'Divine Sight & "I Am Time, Destroyer of Worlds"',
    subtitle_te: 'దివ్యదృష్టి & సమస్త లోకాలను నశింపజేసే కాలస్వరూపం',
    subtitle_hi: 'दिव्य चक्षु और "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो"',
    questions: [
      {
        id: 'q76-1',
        type: 'mcq',
        prompt: 'To enable Arjuna to witness His infinite Universal Form containing all universes, gods, suns, and dimensions, what divine gift did Lord Krishna bestow upon him?',
        prompt_te: 'సమస్త బ్రహ్మాండాలు, దేవతలు, గ్రహాలను కలిగిన తన అనంత విశ్వరూపాన్ని చూడటానికి శ్రీకృష్ణుడు అర్జునుడికి ఏమి ప్రసాదించాడు?',
        prompt_hi: 'अपने अनंत विश्वरूप, जिसमें संपूर्ण ब्रह्मांड, देवता और लोक समाए हुए थे, को देखने के लिए श्रीकृष्ण ने अर्जुन को क्या प्रदान किया?',
        options: [
          'Divya Chakshu (celestial/divine vision), as mortal physical eyes cannot perceive the infinite',
          'A pair of enchanted golden spectacles forged by Vishwakarma',
          'A magic potion brewed from holy Himalayan herbs',
          'A special crystal shield to reflect the radiant light'
        ],
        options_te: [
          'దివ్య చక్షువులు (దివ్య దృష్టి), ఎందుకంటే సాధారణ చర్మ చక్షువులతో ఆ అనంత తేజస్సును చూడటం అసాధ్యం',
          'విశ్వకర్మ తయారుచేసిన బంగారు అద్దాలు',
          'హిమాలయ మూలికల రసం',
          'కాంతిని ప్రతిబింబించే స్ఫటిక కవచం'
        ],
        options_hi: [
          'दिव्य चक्षु (अलौकिक दृष्टि), क्योंकि साधारण भौतिक आँखों से उस असीम तेज को देख पाना संभव नहीं था',
          'विश्वकर्मा द्वारा निर्मित स्वर्ण चश्मा',
          'हिमालयी जड़ी-बूटियों का दिव्य रस',
          'एक विशेष स्फटिक ढाल'
        ],
        correctIndex: 0,
        learnMore: '"Divyam dadami te caksuh pasya me yogam aisvaram": "I grant you divine sight; behold now My sovereign mystic majesty!"',
        learnMore_te: 'శ్రీకృష్ణుడు: "నీ భౌతిక కళ్ళతో నన్ను చూడలేవు, అందువల్ల నీకు దివ్య దృష్టిని ఇస్తున్నాను; నా అద్భుతమైన ఈశ్వర యోగాన్ని తిలకించు."',
        learnMore_hi: 'श्रीकृष्ण ने कहा: "तुम अपनी इन प्राकृतिक आँखों से मुझे नहीं देख सकते, अतः मैं तुम्हें दिव्य चक्षु देता हूँ; अब मेरे परम ऐश्वर्य को देखो।"',
        hint: 'Divine eyes granted by the Lord.',
        hint_te: 'భగవంతుడు ప్రసాదించిన దివ్య దృష్టి.',
        hint_hi: 'श्रीकृष्ण द्वारा प्रदत्त दिव्य दृष्टि।',
        xpReward: 10
      },
      {
        id: 'q76-2',
        type: 'mcq',
        prompt: 'When Arjuna looked into the burning mouths of the cosmic form and saw the Kaurava warriors and kings already rushing toward their doom, what momentous words did Krishna utter?',
        prompt_te: 'విశ్వరూపం యొక్క అగ్నిజ్వాలల వంటి ముఖాలలోకి కౌరవ వీరులు, రాజులు నలిగిపోతూ వెళ్లడం చూసి భయపడిన అర్జునుడికి కృష్ణుడు ఏమని చెప్పాడు?',
        prompt_hi: 'विश्वरूप के प्रज्वलित मुखों में कौरव योद्धाओं और राजाओं को समाते देखकर भयभीत अर्जुन से श्रीकृष्ण ने कौन-से अमर शब्द कहे?',
        options: [
          '"I am Time (Kala), the mighty destroyer of worlds. Even without you, all these warriors arrayed in enemy ranks shall cease to exist! Become merely My instrument (Nimitta-matram)!"',
          '"Flee this battlefield at once, for the universe itself is crashing down!"',
          '"These kings are immortal and cannot be harmed by arrows"',
          '"Do not look, for this is merely a trick of the clouds"'
        ],
        options_te: [
          '"నేనే లోకాలను నశింపజేసే మహాకాలుడను (సమయాన్ని). నీవు పోరాడకపోయినా వీరంతా ఇప్పటికే నా చేత చంపబడ్డారు! నీవు కేవలం నిమిత్తమాత్రుడివి (సాధనానివి) మాత్రమే కా!"',
          '"యుద్ధభూమి నుండి వెంటనే పారిపో, ప్రపంచం కూలిపోతోంది!"',
          '"ఈ రాజులంతా అమరులు, బాణాలతో వీరిని చంపలేవు"',
          '"ఇది కేవలం మాయాజాలం, కళ్ళు మూసుకో"'
        ],
        options_hi: [
          '"मैं लोकों का नाश करने वाला महाकाल हूँ। तुम्हारे लड़े बिना भी ये सभी योद्धा नष्ट हो जाएँगे! अतः उठो और केवल निमित्त मात्र बन जाओ (निमित्तमात्रं भव सव्यसाचिन्)!"',
          '"इस युद्धभूमि से तुरंत भाग जाओ क्योंकि संसार नष्ट होने वाला है"',
          '"ये राजा अमर हैं और इन्हें कोई नहीं मार सकता"',
          '"यह केवल बादलों का भ्रम है, इसे मत देखो"'
        ],
        correctIndex: 0,
        learnMore: '"Kalo \'smi loka-ksaya-krt pravrddho... Nimitta-matram bhava savya-sacin": "All these great champions have already been slain by Me; you, O Savyasachin (Arjuna), need only be the instrument!"',
        learnMore_te: '"కాలోస్మి లోకక్షయకృత్ ప్రవృద్ధో... నిమిత్తమాత్రం భవ సవ్యసాచిన్": ధర్మ రక్షణకై దుష్టులను కాలం ఇప్పటికే కబళించింది, నీవు కేవలం బాణాన్ని ఎక్కుపెట్టే నిమిత్తానివి మాత్రమే.',
        learnMore_hi: '"कालोऽस्मि लोकक्षयकृत्प्रवृद्धो... निमित्तमात्रं भव सव्यसाचिन्": श्रीकृष्ण ने स्पष्ट किया कि काल रूपी प्रभु ने उनका संहार पहले ही कर दिया है, अर्जुन को केवल निमित्त बनना है।',
        hint: '"Nimitta-matram bhava Savyasachin" (Be thou merely an instrument).',
        hint_te: '"నిమిత్తమాత్రం భవ సవ్యసాచిన్" - కేవలం సాధనంగా ఉండు.',
        hint_hi: '"निमित्तमात्रं भव सव्यसाचिन्" — काल के हाथों का निमित्त बनो।',
        xpReward: 10
      },
      {
        id: 'q76-3',
        type: 'true_false',
        prompt: 'Terrified by the staggering majesty and blazing fire of the Vishwaroopa, Arjuna begged Lord Krishna to return to His gentle, four-armed and two-armed form holding the flute and conch.',
        prompt_te: 'విశ్వరూపం యొక్క ఉగ్ర తేజస్సును చూడలేక భయకంపితుడైన అర్జునుడు శ్రీకృష్ణుడిని తిరిగి తన సౌమ్యమైన చతుర్భుజ, ద్విభుజ రూపంలో దర్శనమివ్వమని ప్రార్థించాడు.',
        prompt_hi: 'विश्वरूप के प्रचंड तेज और संहारक रूप से भयभीत होकर अर्जुन ने श्रीकृष्ण से पुनः अपने सौम्य, चार भुजाओं वाले और मनोहर रूप में लौटने की प्रार्थना की।',
        correctAnswer: true,
        learnMore: 'Krishna withdrew His terrible cosmic form and reappeared in His graceful human-like form, reassuring the trembling Arjuna with boundless compassion and love.',
        learnMore_te: 'శ్రీకృష్ణుడు తన ఉగ్ర విశ్వరూపాన్ని ఉపసంహరించి, అర్జునుడిని ఓదారుస్తూ మధురమైన, శాంత రూపంలో ప్రత్యక్షమయ్యాడు.',
        learnMore_hi: 'श्रीकृष्ण ने अपने संहारक विश्वरूप को समेटकर पुनः अपना सौम्य, शांत और प्रिय रूप प्रकट किया तथा अर्जुन को ढांढस बँधाया।',
        hint: 'Arjuna was so awe-struck that he pleaded for the gentle form.',
        hint_te: 'అర్జునుడు భయంతో సౌమ్య రూపాన్ని కోరాడు.',
        hint_hi: 'अर्जुन ने भयभीत होकर सौम्य रूप के दर्शन की विनती की।',
        xpReward: 10
      }
    ]
  },

  // Level 77
  {
    levelNumber: 77,
    partNumber: 8,
    title: 'The Storm Breaks: Days 1 to 5',
    title_te: 'మహాసంగ్రామం ప్రారంభం: మొదటి 5 రోజులు',
    title_hi: 'महायज्ञ का आरंभ: प्रथम पाँच दिन',
    subtitle: 'Bhishma’s Fury & Pandava Counterstrokes',
    subtitle_te: 'భీష్ముని ప్రళయ తాండవం & పాండవుల వ్యూహాలు',
    subtitle_hi: 'पितामह भीष्म का पराक्रम और प्रारंभिक द्वंद्व',
    questions: [
      {
        id: 'q77-1',
        type: 'mcq',
        prompt: 'On Day 1 of the battle, which beloved young son of King Virata courageously engaged Shalya, wounding his chariot, before falling heroically as the war’s first famous martyr?',
        prompt_te: 'మొదటి రోజు యుద్ధంలో మత్స్య దేశపు రాజకుమారుడు, విరాటుని కుమారుడు శల్యుడితో వీరోచితంగా పోరాడి వీరమరణం పొందాడు. అతని పేరేమిటి?',
        prompt_hi: 'प्रथम दिन के युद्ध में मत्स्य नरेश विराट का कौन-सा साहसी युवा पुत्र शल्य से भिड़ गया और युद्ध का पहला प्रमुख शहीद बना?',
        options: [
          'Prince Uttara (charioted by his brother Shankha)',
          'Abhimanyu',
          'Iravan',
          'Ghatotkacha'
        ],
        options_te: [
          'ఉత్తర కుమారుడు (శంఖుడు సారథిగా)',
          'అభిమన్యుడు',
          'ఇరావంతుడు',
          'ఘటోత్కచుడు'
        ],
        options_hi: [
          'राजकुमार उत्तर (जिनके सारथी उनके भाई शंख थे)',
          'अभिमन्यु',
          'इरावान',
          'घटोत्कच'
        ],
        correctIndex: 0,
        learnMore: 'Prince Uttara advanced atop an elephant against King Shalya; after mortally wounding Shalya’s horses, Shalya cast a javelin that pierced Uttara’s heart.',
        learnMore_te: 'యువరాజు ఉత్తరుడు గజారోహకుడై శల్యుడిపై దాడి చేశాడు. శల్యుడి గుర్రాలను సంహరించిన తర్వాత, శల్యుడు విసిరిన శక్తి ఆయుధం ఉత్తరుడి వక్షస్థలాన్ని చీల్చింది.',
        learnMore_hi: 'राजकुमार उत्तर हाथी पर सवार होकर शल्य से भिड़ गए थे। उन्होंने शल्य के घोड़ों को मार गिराया, परंतु शल्य की शक्ति (बरछी) ने उत्तर के प्राण ले लिए।',
        hint: 'The young prince who had earlier boasted to the women in the palace.',
        hint_te: 'అంతఃపురంలో ప్రగల్భాలు పలికిన విరాట రాజకుమారుడు.',
        hint_hi: 'विराट नरेश के राजकुमार जिन्होंने पहले बढ़-चढ़कर बातें की थीं।',
        xpReward: 10
      },
      {
        id: 'q77-2',
        type: 'mcq',
        prompt: 'During the first five days, how did Grandfather Bhishma fight, causing sheer devastation in the Pandava ranks?',
        prompt_te: 'మొదటి ఐదు రోజుల్లో తాత భీష్ముడు ఏ విధంగా యుద్ధం చేస్తూ పాండవ సైన్యాలను భీతావహులను చేశాడు?',
        prompt_hi: 'प्रथम पाँच दिनों में पितामह भीष्म ने किस प्रकार का युद्ध लड़ा जिससे पांडव सेना में हाहाकार मच गया?',
        options: [
          'Like a blaze consuming dry grass, shooting thousands of arrows simultaneously so that no gap appeared between his bow and his target',
          'By using illusions and sorcery at midnight',
          'By hiding behind massive iron shields and moving forward slowly',
          'By commanding his generals from deep within the rear camp'
        ],
        options_te: [
          'ఎండిన గడ్డిని దహించే కార్చిచ్చులా ఒకేసారి వేలకొద్దీ బాణాలు ప్రయోగిస్తూ, విల్లు తీయడం బాణం తాకడం మధ్య తేడా తెలియకుండా రుద్రుడిలా పోరాడాడు',
          'రాత్రిపూట మాయా విద్యలతో దాడి చేశాడు',
          'ఇనుప కవచాల వెనుక దాక్కుని నెమ్మదిగా కదిలాడు',
          'వెనుక శిబిరంలో కూర్చుని సేనాపతులకు ఆదేశాలిచ్చాడు'
        ],
        options_hi: [
          'सूखे वन में लगी दावानल की भाँति, एक साथ हजारों बाण बरसाते हुए जिससे धनुष खींचने और बाण लगने के बीच कोई अंतर नहीं दिखता था',
          'रात्रि में मायावी विद्याओं का प्रयोग करके',
          'लोहे की ढालों के पीछे छिपकर',
          'युद्धभूमि से दूर शिविर में बैठकर केवल निर्देश देकर'
        ],
        correctIndex: 0,
        learnMore: 'Sanjaya reported to Dhritarashtra that Bhishma moved so fast on his white chariot that soldiers saw ten Bhishmas simultaneously sweeping the field.',
        learnMore_te: 'భీష్ముడి రథం ఎంత వేగంగా కదిలిందంటే, యుద్ధభూమిలో ఒకేసారి పదిమంది భీష్ములు ఉన్నట్లుగా సైనికులకు భ్రమ కలిగించింది.',
        learnMore_hi: 'संजय ने धृतराष्ट्र को बताया कि श्वेत अश्वों वाले रथ पर पितामह इतनी तीव्र गति से घूमते थे कि सैनिकों को एक साथ दस भीष्म दिखाई देते थे।',
        hint: 'Like an unquenchable forest fire mowing down thousands.',
        hint_te: 'అరణ్యాన్ని దహించే అగ్నిలా చెలరేగిపోయాడు.',
        hint_hi: 'दावानल के समान अप्रतिरोध्य वेग से।',
        xpReward: 10
      },
      {
        id: 'q77-3',
        type: 'true_false',
        prompt: 'On Day 2, Arjuna and Bhishma engaged in a magnificent duel where celestial beings gathered in the sky to marvel at the peerless archery of master and student.',
        prompt_te: 'రెండవ రోజు యుద్ధంలో భీష్ముడు మరియు అర్జునుల మధ్య జరిగిన అద్భుతమైన ద్వంద్వ యుద్ధాన్ని చూసి దేవతలు ఆకాశం నుండి పూలవాన కురిపించారు.',
        prompt_hi: 'दूसरे दिन भीष्म और अर्जुन के बीच ऐसा अद्भुत और रोमांचक द्वंद्व हुआ जिसे देखने के लिए आकाश में देवता और गंधर्व एकत्रित हो गए।',
        correctAnswer: true,
        learnMore: 'Neither could gain supremacy: whenever Bhishma shot celestial darts, Arjuna neutralized them mid-air, while secretly withholding the lethal force that would slay his grandfather.',
        learnMore_te: 'భీష్ముడు ప్రయోగించిన దివ్యాస్త్రాలను అర్జునుడు గాల్లోనే తుంచేశాడు. కానీ తాతపై ప్రేమతో అర్జునుడు ప్రాణాంతకమైన అస్త్రాలను ప్రయోగించలేదు.',
        learnMore_hi: 'दोनों के बाण आकाश में टकराकर अग्नि की वर्षा कर रहे थे; भीष्म के प्रहारों को अर्जुन हवा में ही काट देते थे, परंतु अपने पितामह पर वे घातक बाण नहीं चलाते थे।',
        hint: 'Both were world-renowned archers locked in a stalemate.',
        hint_te: 'ఇద్దరూ అసమాన ధనుర్ధారులు కావడంతో పోరాటం అద్భుతంగా సాగింది.',
        hint_hi: 'गुरु-शिष्य का यह युद्ध अद्वितीय था।',
        xpReward: 10
      }
    ]
  },

  // Level 78
  {
    levelNumber: 78,
    partNumber: 8,
    title: 'Duryodhana’s Accusation & The Five Golden Arrows',
    title_te: 'దుర్యోధనుడి నింద & భీష్ముని ఐదు బంగారు బాణాలు',
    title_hi: 'दुर्योधन का आक्षेप और भीष्म के पाँच स्वर्ण बाण',
    subtitle: 'Days 6 to 9 & The Oath of the Supreme Commander',
    subtitle_te: '6 నుండి 9వ రోజులు & సర్వసేనాపతి భీష్ముని ప్రతిజ్ఞ',
    subtitle_hi: 'पाँच स्वर्ण बाण और द्रौपदी के सौभाग्य का रहस्य',
    questions: [
      {
        id: 'q78-1',
        type: 'mcq',
        prompt: 'On the night of Day 8, why did Duryodhana angrily confront Bhishma in his tent, accusing the aged patriarch of harboring partiality for the Pandavas?',
        prompt_te: '8వ రోజు రాత్రి దుర్యోధనుడు భీష్ముని శిబిరానికి వెళ్ళి, పాండవులపై పక్షపాతం చూపిస్తూ వారిని చంపడం లేదని ఎందుకు నిందించాడు?',
        prompt_hi: 'आठवें दिन की रात दुर्योधन ने पितामह भीष्म के शिविर में जाकर उन पर पांडवों के प्रति पक्षपात करने का कटु आरोप क्यों लगाया?',
        options: [
          'Because despite slaughtering thousands of ordinary soldiers, none of the five Pandava brothers had been slain by Bhishma',
          'Because Bhishma refused to eat dinner with him',
          'Because Bhishma had given his bow to Yudhishthira',
          'Because Karna had secretly entered the battlefield'
        ],
        options_te: [
          'భీష్ముడు వేలాదిమంది సైనికులను సంహరిస్తున్నప్పటికీ, ఐదుగురు పాండవులలో ఒక్కరినీ కూడా చంపకపోవడంతో దుర్యోధనుడికి అనుమానం వచ్చింది',
          'భీష్ముడు తనతో భోజనం చేయడానికి నిరాకరించినందుకు',
          'భీష్ముడు తన విల్లును ధర్మరాజుకు బహుమతిగా ఇచ్చినందుకు',
          'కర్ణుడు రహస్యంగా యుద్ధరంగంలోకి ప్రవేశించినందుకు'
        ],
        options_hi: [
          'क्योंकि पितामह प्रतिदिन हजारों सैनिकों का संहार तो कर रहे थे, किंतु पाँचों पांडवों में से किसी का भी वध नहीं कर पा रहे थे',
          'क्योंकि भीष्म ने उनके साथ भोजन करने से मना कर दिया था',
          'क्योंकि भीष्म ने अपना धनुष युधिष्ठिर को दे दिया था',
          'क्योंकि कर्ण युद्ध में उतरने की जिद कर रहे थे'
        ],
        correctIndex: 0,
        learnMore: 'Duryodhana taunted Bhishma: "If you are unwilling to slay them due to affection, step aside and let Karna fight!" Deeply wounded, Bhishma vowed to wipe out the Pandavas the next day.',
        learnMore_te: 'దుర్యోధనుడు: "మీకు పాండవులపై ప్రేమ ఉంటే యుద్ధం నుండి తప్పుకోండి, కర్ణుడిని రానివ్వండి!" అని నిందించాడు. నొచ్చుకున్న భీష్ముడు రేపటి యుద్ధంలో పాండవులను అంతం చేస్తానని ప్రతిజ్ఞ చేశాడు.',
        learnMore_hi: 'दुर्योधन के कटु वचनों से आहत होकर भीष्म ने प्रतिज्ञा ली कि कल या तो वे पांडवों का संहार कर देंगे अथवा स्वयं मृत्यु का वरण करेंगे।',
        hint: 'Duryodhana was angry that all five Pandava brothers remained alive.',
        hint_te: 'పాండవులలో ఎవరూ చనిపోలేదని దుర్యోధనుడి ఆగ్రహం.',
        hint_hi: 'पाँचों पांडवों के जीवित रहने से दुर्योधन हताश था।',
        xpReward: 10
      },
      {
        id: 'q78-2',
        type: 'mcq',
        prompt: 'To prove his commitment, Bhishma consecrated five celestial golden arrows specifically empowered to slay the five Pandavas. How did Arjuna retrieve those arrows before sunrise?',
        prompt_te: 'పాండవులను సంహరించడానికి భీష్ముడు మంత్రించిన ఐదు బంగారు బాణాలను, సూర్యోదయానికి ముందే అర్జునుడు ఎలా దక్కించుకున్నాడు?',
        prompt_hi: 'पांडवों के वध के लिए भीष्म द्वारा अभिमंत्रित पाँच स्वर्ण बाणों को अर्जुन ने सूर्योदय से पूर्व कैसे प्राप्त कर लिया?',
        options: [
          'Sent by Krishna, Arjuna reminded Duryodhana of the old boon Duryodhana owed him from the Gandharva rescue, asking for the five arrows as that boon',
          'Arjuna snuck into Bhishma’s tent as an invisible phantom and stole them',
          'Bhima defeated Duryodhana in wrestling during the midnight truce',
          'Draupadi washed Bhishma’s feet and he willingly gave them away'
        ],
        options_te: [
          'గంధర్వుల బారి నుండి కాపాడినప్పుడు దుర్యోధనుడు ఇచ్చిన వరాన్ని గుర్తుచేస్తూ, కృష్ణుడి సూచనతో అర్జునుడు ఆ ఐదు బాణాలను వరంగా అడిగి తీసుకున్నాడు',
          'అర్జునుడు మాయా రూపంలో భీష్ముడి శిబిరంలోకి దూరి దొంగిలించాడు',
          'భీముడు కుస్తీ పోటీలో దుర్యోధనుడిని ఓడించి తీసుకున్నాడు',
          'ద్రౌపది భీష్ముడికి పాదపూజ చేయగా ఆయనే ఇచ్చేశాడు'
        ],
        options_hi: [
          'श्रीकृष्ण के निर्देश पर अर्जुन ने दुर्योधन से गंधर्वों से मुक्ति के समय दिए गए वरदान की माँग की और बदले में वे पाँचों बाण माँग लिए',
          'अर्जुन ने रात में चुपके से भीष्म के शिविर से बाण चुरा लिए',
          'भीम ने द्वंद्वयुद्ध में जीतकर बाण छीन लिए',
          'द्रौपदी ने जाकर पितामह से बाण माँग लिए थे'
        ],
        correctIndex: 0,
        learnMore: 'Bound by Kshatriya honor, Duryodhana could not refuse a promised boon. When Arjuna demanded the five arrows, Duryodhana was forced to surrender them in dismay!',
        learnMore_te: 'క్షత్రియ ధర్మం ప్రకారం ఇచ్చిన మాట తప్పకూడదు కాబట్టి, దుర్యోధనుడు ఇచ్చిన వరం ప్రకారం ఆ ఐదు బంగారు బాణాలను అర్జునుడికి ఇచ్చివేయక తప్పలేదు.',
        learnMore_hi: 'क्षत्रिय वचन से बँधे दुर्योधन को विवश होकर वे पाँचों अभिमंत्रित बाण अर्जुन को सौंपने पड़े। इस प्रकार श्रीकृष्ण की नीति से पांडवों के प्राण बच गए।',
        hint: 'The unpaid boon from the Gandharva episode in the forest.',
        hint_te: 'ద్వైతవనంలో గంధర్వుల చెర నుండి విడిపించినప్పుడు లభించిన వరం.',
        hint_hi: 'घोषयात्रा में गंधर्वों से रक्षा करने पर दुर्योधन द्वारा दिया गया वरदान।',
        xpReward: 10
      },
      {
        id: 'q78-3',
        type: 'riddle',
        prompt: 'Five golden darts consecrated with Vedic mantras, destined to spill the blood of five brothers by dusk. Yet an ancient promise given in a forest cleared the quiver before dawn. What were we?',
        prompt_te: 'పాండవులను సంహరించడానికి మంత్రించిన ఐదు బంగారు బాణాలు, కానీ పూర్వం అడవిలో ఇచ్చిన ఒక వరం వల్ల సూర్యోదయానికే చేతులు మారాయి. అవి ఏమిటి?',
        prompt_hi: 'पाँच भाइयों के संहार के लिए अभिमंत्रित पाँच बाण, जिनका तेज सूर्य के समान था, किंतु वन में दिए एक वचन ने हमारा रुख मोड़ दिया। हम क्या हैं?',
        hint: 'Consecrated by Bhishma to eliminate the five brothers.',
        hint_te: 'భీష్ముడు మంత్రించిన పంచ బాణాలు.',
        hint_hi: 'भीष्म द्वारा अभिमंत्रित पाँच दिव्य बाण।',
        answer: 'Bhishma’s Five Golden Arrows',
        answer_te: 'భీష్ముని ఐదు బంగారు బాణాలు',
        answer_hi: 'भीष्म के पाँच स्वर्ण बाण',
        options: [
          'Bhishma’s Five Golden Arrows',
          'The Astra of Pashupata',
          'The Vaishnava darts',
          'The Nagastras of Ashwasena'
        ],
        options_te: [
          'భీష్ముని ఐదు బంగారు బాణాలు',
          'పాశుపతాస్త్ర బాణాలు',
          'వైష్ణవాస్త్ర శరాలు',
          'అశ్వసేనుని నాగాస్త్రాలు'
        ],
        options_hi: [
          'भीष्म के पाँच स्वर्ण बाण',
          'पाशुपतास्त्र के बाण',
          'वैष्णवास्त्र के बाण',
          'नागास्त्र'
        ],
        learnMore: 'Bhishma realized Krishna’s divine play when he saw Duryodhana return empty-handed: "None but Vasudeva could have devised such a move to protect the righteous!"',
        learnMore_te: 'బాణాలు అర్జునుడి చేతికి చేరాయని తెలుసుకున్న భీష్ముడు నవ్వుతూ: "ఇది సాక్షాత్తూ ఆ వాసుదేవుని లీల" అని కృష్ణుడి లీలను కొనియాడాడు.',
        learnMore_hi: 'पितामह भीष्म ने जानकर मुस्कराते हुए कहा कि श्रीकृष्ण की इस अद्भुत लीला को कोई नहीं काट सकता।',
        xpReward: 20
      }
    ]
  },

  // Level 79
  {
    levelNumber: 79,
    partNumber: 8,
    title: 'Krishna Leaps with the Chariot Wheel',
    title_te: 'రథచక్రంతో దూకిన శ్రీకృష్ణుడు',
    title_hi: 'श्रीकृष्ण का चक्रपाणि रूप: प्रतिज्ञा भंग',
    subtitle: 'Breaking His Own Vow to Save Arjuna & Fulfill Bhishma’s Devotion',
    subtitle_te: 'భక్తుని ప్రతిజ్ఞ కోసం తన ప్రతిజ్ఞను వీడిన భగవంతుడు',
    subtitle_hi: 'भक्त की लाज रखने के लिए अपनी प्रतिज्ञा का त्याग',
    questions: [
      {
        id: 'q79-1',
        type: 'mcq',
        prompt: 'On Day 9, when Bhishma was decimating the Pandava forces and Arjuna hesitated to strike his grandsire decisively, what astonishing act did Lord Krishna perform?',
        prompt_te: '9వ రోజు యుద్ధంలో భీష్ముడి ధాటికి పాండవ సైన్యాలు చెల్లాచెదురవుతుండగా, అర్జునుడు తాతను కొట్టడానికి సంకోచిస్తున్నప్పుడు శ్రీకృష్ణుడు ఏమి చేశాడు?',
        prompt_hi: 'नौवें दिन जब भीष्म के बाणों से अर्जुन का शरीर क्षत-विक्षत हो रहा था और अर्जुन प्रहार में संकोच कर रहे थे, तब श्रीकृष्ण ने क्या किया?',
        options: [
          'Dropping the reins, He jumped down from the chariot, grabbed a broken chariot wheel like a discus (Sudarshana), and charged fiercely at Bhishma',
          'He summoned the Garuda bird to carry Arjuna away from the battlefield',
          'He blew his conch shell Panchajanya until all weapons shattered',
          'He magically put the entire Kaurava army into a deep sleep'
        ],
        options_te: [
          'గుర్రాల పగ్గాలను వదిలి, రథం పైనుండి కిందకు దూకి, ఒక విరిగిన రథచక్రాన్ని చక్రాయుధంలా చేతబట్టి ఉగ్రరూపంతో భీష్ముడి వైపు పరుగెత్తాడు',
          'గరుత్మంతుడిని పిలిచి అర్జునుడిని యుద్ధరంగం నుండి దూరంగా తీసుకెళ్ళాడు',
          'పాంచజన్యం పూరించి ఆయుధాలన్నీ ముక్కలయ్యేలా చేశాడు',
          'మాయతో కౌరవ సైన్యాన్నంతటినీ గాఢనిద్రలోకి పంపాడు'
        ],
        options_hi: [
          'घोड़ों की रास छोड़कर रथ से नीचे कूद पड़े और टूटे हुए रथ का पहिया चक्र की तरह उठाकर क्रोध से भीष्म की ओर दौड़ पड़े',
          'गरुड़ को बुलाकर अर्जुन को युद्धभूमि से दूर भेज दिया',
          'पाञ्चजन्य शंख बजाकर सभी अस्त्रों को नष्ट कर दिया',
          'कौरव सेना को मायावी निद्रा में डाल दिया'
        ],
        correctIndex: 0,
        learnMore: 'Krishna had vowed not to lift weapons; yet to rescue Arjuna and fulfill Bhishma’s vow ("I will force Krishna to take up arms"), the Lord willingly broke His own promise!',
        learnMore_te: 'ఆయుధం పట్టనన్న తన శపథాన్ని భక్తుడైన భీష్ముని కోరిక ("కృష్ణుడి చేత ఆయుధం పట్టిస్తాను") తీర్చడం కోసం, అర్జునుడిని రక్షించడం కోసం స్వయంగా భంగం చేసుకున్నాడు.',
        learnMore_hi: 'श्रीकृष्ण ने शस्त्र न उठाने की प्रतिज्ञा ली थी, किंतु भक्त भीष्म की प्रतिज्ञा ("मैं कृष्ण को शस्त्र उठाने पर विवश करूँगा") को पूर्ण करने के लिए उन्होंने अपनी प्रतिज्ञा तोड़ दी।',
        hint: 'Lifting a chariot wheel as Sudarshana Chakra.',
        hint_te: 'రథచక్రాన్ని సుదర్శన చక్రంలా ఎత్తడం.',
        hint_hi: 'रथ का पहिया उठाकर चक्र की भाँति लपकना।',
        xpReward: 10
      },
      {
        id: 'q79-2',
        type: 'mcq',
        prompt: 'How did Grandfather Bhishma react upon seeing Lord Krishna rushing toward him with the uplifted chariot wheel?',
        prompt_te: 'శ్రీకృష్ణుడు రథచక్రాన్ని ఎత్తి తన వైపు దూసుకురావడం చూసిన భీష్ముడు ఏ విధంగా స్పందించాడు?',
        prompt_hi: 'हाथ में रथ का पहिया लिए अपनी ओर आते श्रीकृष्ण को देखकर पितामह भीष्म की क्या प्रतिक्रिया थी?',
        options: [
          'He lowered his bow, folded his hands in joyous ecstasy, and welcomed the Lord to liberate him by slaying him with His divine hands',
          'He fired hundreds of arrows directly into Krishna’s chest',
          'He fled to Duryodhana’s tent to hide',
          'He blew his conch shell to signal a ceasefire'
        ],
        options_te: [
          'చేతిలోని విల్లును కిందపెట్టి, చేతులు జోడించి పరమానందంతో: "స్వామీ! నీ దివ్య హస్తాలతో నన్ను సంహరించి ముక్తిని ప్రసాదించు!" అని ఆహ్వానించాడు',
          'కృష్ణుడి గుండెలపై వందలాది బాణాలు వేశాడు',
          'దుర్యోధనుడి శిబిరానికి పారిపోయాడు',
          'యుద్ధ విరమణ శంఖం పూరించాడు'
        ],
        options_hi: [
          'धनुष नीचे रखकर हाथ जोड़ लिए और परमानंद में बोले: "आइए गोविंद! अपने कमलनयनों के सामने आपके हाथों से मुक्ति पाना मेरा परम सौभाग्य होगा!"',
          'श्रीकृष्ण के वक्ष पर सैकड़ों बाण चला दिए',
          'भयभीत होकर शिविर में भाग गए',
          'युद्ध रोकने के लिए शंख बजाने लगे'
        ],
        correctIndex: 0,
        learnMore: 'Bhishma said: "Come, O Lotus-eyed Lord of the universe! Slay me here today; blessed shall I be in all the worlds to fall by Thy hand!"',
        learnMore_te: 'భీష్ముడు: "రా కృష్ణా! నీ పవిత్ర హస్తాలతో నేను మరణిస్తే నా జన్మ ధన్యమవుతుంది" అని పులకించిపోయాడు.',
        learnMore_hi: 'भीष्म ने कहा: "प्रभो! आपके हाथों मृत्यु पाना तीनों लोकों में मेरा सबसे बड़ा उद्धार होगा। प्रहार कीजिए!"',
        hint: 'Bhishma welcomed death at the hands of the Supreme Lord.',
        hint_te: 'భగవంతుని చేతిలో ముక్తిని కోరుకున్నాడు.',
        hint_hi: 'श्रीकृष्ण के हाथों मृत्यु को परम मोक्ष मानकर स्वागत किया।',
        xpReward: 10
      },
      {
        id: 'q79-3',
        type: 'true_false',
        prompt: 'Arjuna sprinted after Krishna, threw himself at the Lord’s feet, caught His legs, and pleaded with Him to stop, swearing by his sons and brothers that he would fulfill his warrior duty.',
        prompt_te: 'అర్జునుడు పరుగున వచ్చి శ్రీకృష్ణుడి పాదాలను గట్టిగా పట్టుకుని, తన విధిని నెరవేరుస్తానని, శపథం చేసి కృష్ణుడిని శాంతింపజేశాడు.',
        prompt_hi: 'अर्जुन दौड़कर श्रीकृष्ण के चरणों में गिर पड़े, उनके पैर पकड़ लिए और अपने भाइयों व गांडीव की शपथ लेकर पुनः निष्ठा से युद्ध करने की प्रतिज्ञा की।',
        correctAnswer: true,
        learnMore: 'Arjuna dragged Krishna backward by His ankles: "Restrain Thy wrath, O Kesava! I swear by my truth and weapons, I will not waver from battle!" Krishna then mounted the chariot again.',
        learnMore_te: 'అర్జునుడు కృష్ణుడి కాళ్ళను పట్టుకుని: "కేశవా! శాంతించు, నా ధనుస్సు సాక్షిగా ఇకపై నేను వెనుకాడను" అని ప్రార్థించడంతో కృష్ణుడు తిరిగి రథం ఎక్కాడు.',
        learnMore_hi: 'अर्जुन ने श्रीकृष्ण के चरण पकड़कर प्रार्थना की: "हे माधव! क्रोध शांत कीजिए। मैं गांडीव की शपथ लेता हूँ कि अब युद्ध से पीछे नहीं हटूंगा।"',
        hint: 'Arjuna caught Krishna’s feet to hold Him back.',
        hint_te: 'అర్జునుడు కృష్ణుడి పాదాలు పట్టుకున్నాడు.',
        hint_hi: 'अर्जुन ने श्रीकृष्ण के चरण पकड़ लिए थे।',
        xpReward: 10
      }
    ]
  },

  // Level 80
  {
    levelNumber: 80,
    partNumber: 8,
    title: 'The Fall of Bhishma: Bed of Arrows',
    title_te: 'భీష్మ పతనం: అంపశయ్యపై గంగాపుత్రుడు',
    title_hi: 'पितामह भीष्म का पतन: शरशय्या',
    subtitle: 'Day 10: Shikhandi’s Shield & The Passing of an Era',
    subtitle_te: '10వ రోజు: శిఖండి ప్రవేశం & అంపశయ్యపై వీరుడు',
    subtitle_hi: 'दसवाँ दिन: शिखंडी की आड़ और शरशय्या पर पितामह',
    questions: [
      {
        id: 'q80-1',
        type: 'mcq',
        prompt: 'When the Pandavas visited Bhishma at night asking how he could ever be vanquished, what secret did the patriarch himself reveal?',
        prompt_te: 'రాత్రిపూట పాండవులు భీష్ముని వద్దకు వెళ్ళి మిమ్మల్ని ఎలా ఓడించగలమని అడిగినప్పుడు, భీష్ముడే స్వయంగా ఏ రహస్యాన్ని వెల్లడించాడు?',
        prompt_hi: 'जब रात में पांडवों ने भीष्म से जाकर पूछा कि उन्हें परास्त कैसे किया जाए, तब स्वयं पितामह ने क्या रहस्य बताया?',
        options: [
          'Place Shikhandi in front of Arjuna’s chariot; because Shikhandi was born female (Amba reborn), Bhishma would never raise weapons against him',
          'Shoot him with a poisoned arrow while he drinks water at noon',
          'Challenge him to an unarmed wrestling match at twilight',
          'Pour cold water over his celestial bowstring'
        ],
        options_te: [
          'శిఖండిని అర్జునుడి రథం ముందు నిలపండి; శిఖండి పూర్వజన్మలో స్త్రీ (అంబ) కాబట్టి నేను ఆయుధం ఎత్తను; అప్పుడు అర్జునుడు నాపై బాణాలు ప్రయోగించవచ్చు',
          'మధ్యాహ్నం నీళ్ళు తాగేటప్పుడు విషపు బాణం వేయండి',
          'సాయంత్రం నిరాయుధుడిగా కుస్తీ పోటీకి పిలవండి',
          'దివ్య ధనుస్సు నారిపై చల్లని నీళ్ళు పోయండి'
        ],
        options_hi: [
          'शिखंडी को अर्जुन के आगे करके युद्ध करो; क्योंकि शिखंडी पूर्वजन्म में स्त्री (अंबा) थी, अतः मैं उस पर शस्त्र नहीं उठाऊँगा और अर्जुन मुझे बाणों से बींध दे',
          'दोपहर में जल पीते समय विषैला बाण चलाओ',
          'संध्या समय निहत्थे मल्लयुद्ध की चुनौती दो',
          'उनके धनुष की प्रत्यंचा पर ठंडा जल डाल दो'
        ],
        correctIndex: 0,
        learnMore: 'Bhishma kept his vow never to strike a woman or one born female. Shikhandi shielded Arjuna, and from behind Shikhandi, Arjuna pierced Bhishma with countless arrows.',
        learnMore_te: 'స్త్రీలపై లేదా స్త్రీగా పుట్టినవారిపై ఆయుధం ఎత్తననే తన ప్రతిజ్ఞకు భీష్ముడు కట్టుబడ్డాడు. శిఖండి వెనుక నుండి అర్జునుడు బాణాల వర్షం కురిపించాడు.',
        learnMore_hi: 'भीष्म ने स्त्री या पूर्वजन्म में स्त्री रहे व्यक्ति पर अस्त्र न उठाने का नियम रखा था। शिखंडी के आगे आने पर पितामह ने शस्त्र रख दिए और अर्जुन ने बाण बरसा दिए।',
        hint: 'Shikhandi was the reborn Princess Amba.',
        hint_te: 'పూర్వజన్మలో అంబగా జన్మించిన శిఖండి.',
        hint_hi: 'शिखंडी पूर्वजन्म में अंबा थी।',
        xpReward: 10
      },
      {
        id: 'q80-2',
        type: 'mcq',
        prompt: 'On Day 10, when Bhishma collapsed from his chariot, why did his physical body not touch the earth?',
        prompt_te: '10వ రోజు భీష్ముడు రథం నుండి కింద పడినప్పుడు, అతని శరీరం నేలను ఎందుకు తాకలేదు?',
        prompt_hi: 'दसवें दिन जब पितामह भीष्म रथ से गिरे, तब उनका शरीर भूमि को क्यों नहीं छू सका?',
        options: [
          'So dense were the hundreds of arrows piercing every inch of his body that he rested suspended entirely on a bed of arrows (Sharashayya)',
          'Lord Indra caught him in mid-air on a celestial lotus cushion',
          'His mother Ganga froze the river to catch him',
          'Duryodhana caught him in his arms before he touched the dust'
        ],
        options_te: [
          'శరీరమంతా గుచ్చుకున్న వందలాది బాణాలు ఎంత దట్టంగా ఉన్నాయంటే, ఆ బాణాల కొనలపైనే శరీరం నిలిచి అంపశయ్య (బాణాల పరుపు) ఏర్పడింది',
          'ఇంద్రుడు గాల్లోనే పద్మంపై పట్టుకున్నాడు',
          'గంగాదేవి నదిని స్తంభింపజేసి ఒడిలోకి తీసుకుంది',
          'దుర్యోధనుడు నేల తాకకముందే చేతుల్లోకి తీసుకున్నాడు'
        ],
        options_hi: [
          'उनके शरीर में इतने घने बाण लगे थे कि उनका पूरा शरीर भूमि से ऊपर बाणों की शय्या (शरशय्या) पर ही टिका रह गया',
          'इंद्रदेव ने कमल के आसन पर उन्हें थाम लिया',
          'गंगा मैया ने उन्हें अपनी गोद में उठा लिया',
          'दुर्योधन ने उन्हें हाथों में थाम लिया था'
        ],
        correctIndex: 0,
        learnMore: 'Because he held the boon of Ichha-Mrityu (death at will), Bhishma chose not to abandon his mortal frame until the auspicious sun turned northward (Uttarayana).',
        learnMore_te: 'స్వచ్ఛంద మరణం (ఇచ్ఛామృత్యువు) వరం ఉన్నందున, సూర్యుడు ఉత్తరాయణంలోకి ప్రవేశించే వరకు ప్రాణాలను నిలిపి ఉంచాలని భీష్ముడు నిర్ణయించుకున్నాడు.',
        learnMore_hi: 'इच्छा-मृत्यु का वरदान होने के कारण भीष्म ने सूर्य के उत्तरायण होने तक अपने प्राण न त्यागने का निश्चय किया और शरशय्या पर रहे।',
        hint: 'A bed formed entirely of interlocking arrowheads.',
        hint_te: 'బాణాల మొనలతో ఏర్పడిన శయ్య.',
        hint_hi: 'बाणों से बनी शय्या (शरशय्या)।',
        xpReward: 10
      },
      {
        id: 'q80-3',
        type: 'riddle',
        prompt: 'Lying upon a bed of arrows, my head hung without support and my throat parched with thirst. Arjuna pierced the earth with an arrow to summon my mother Ganga’s sweet waters, and placed three arrows to pillow my head. Who am I?',
        prompt_te: 'అంపశయ్యపై నా తల వేలాడుతుంటే అర్జునుడు మూడు బాణాలతో తలగడ చేశాడు; నా దప్పిక తీర్చడానికి భూమిని చీల్చి గంగమ్మ తీపి నీటిని రప్పించాడు. నేను ఎవరిని?',
        prompt_hi: 'शरशय्या पर मेरे लटकते सिर के लिए अर्जुन ने तीन बाणों का सिरहाना बनाया और मेरी प्यास बुझाने के लिए धरती में बाण मारकर गंगा की शीतल धारा प्रकट की। मैं कौन हूँ?',
        hint: 'The grand patriarch of the Bharatas on his bed of arrows.',
        hint_te: 'కురువృద్ధుడు భీష్ముడు.',
        hint_hi: 'शरशय्या पर लेटे कुरुपितामह भीष्म।',
        answer: 'Grandfather Bhishma (Devavrata)',
        answer_te: 'భీష్మ పితామహుడు (దేవవ్రతుడు)',
        answer_hi: 'पितामह भीष्म (देवव्रत)',
        options: [
          'Grandfather Bhishma (Devavrata)',
          'Dronacharya',
          'Karna',
          'King Dhritarashtra'
        ],
        options_te: [
          'భీష్మ పితామహుడు (దేవవ్రతుడు)',
          'ద్రోణాచార్యుడు',
          'కర్ణుడు',
          'ధృతరాష్ట్రుడు'
        ],
        options_hi: [
          'पितामह भीष्म (देवव्रत)',
          'द्रोणाचार्य',
          'कर्ण',
          'धृतराष्ट्र'
        ],
        learnMore: 'Arjuna shot three arrows into the ground to support Bhishma’s head comfortably, and invoked Parjanyastra to bring up a spring of fresh Ganga water to quench his mother’s son.',
        learnMore_te: 'అర్జునుడు మూడు బాణాలతో తలగడ అమర్చి, పర్జన్యాస్త్రంతో భూమి నుండి గంగా జలధారను రప్పించి తాత దప్పిక తీర్చాడు.',
        learnMore_hi: 'अर्जुन ने तीन बाण मारकर सिरहाना बनाया और पर्जन्यास्त्र से भूमि से गंगाजल की पावन धारा प्रकट कर पितामह की प्यास बुझाई।',
        xpReward: 20
      }
    ]
  }
];
