import { Level } from '../../types/game';

export const PART_6_LEVELS: Level[] = [
  // Level 51
  {
    levelNumber: 51,
    partNumber: 6,
    title: 'The Inexhaustible Vessel',
    title_te: 'అక్షయపాత్ర & అరణ్య జీవనం',
    title_hi: 'अक्षय पात्र और वन का तपोवन',
    subtitle: 'Life in Kamyaka & Surya’s Divine Gift',
    subtitle_te: 'కామ్యక వనం & సూర్యభగవానుడి ప్రసాదం',
    subtitle_hi: 'सूर्यदेव का वरदान और सहस्रों का पोषण',
    questions: [
      {
        id: 'q51-1',
        type: 'mcq',
        prompt: 'Which divine deity bestowed the sacred copper vessel, the Akshaya Patra, upon Queen Draupadi in the forest?',
        prompt_te: 'అరణ్యంలో వేలాదిమంది ఋషులకు ఆహారం అందించడానికి ద్రౌపదికి అక్షయపాత్రను ప్రసాదించిన దేవుడు ఎవరు?',
        prompt_hi: 'वन में सहस्रों ऋषियों और अतिथियों के भोजन हेतु द्रौपदी को दिव्य "अक्षय पात्र" किस देवता ने प्रदान किया था?',
        options: ['Surya (The Sun God)', 'Lord Shiva', 'Lord Indra', 'Lord Varuna'],
        options_te: ['సూర్య భగవానుడు', 'పరమశివుడు', 'దేవేంద్రుడు', 'వరుణ దేవుడు'],
        options_hi: ['सूर्यदेव', 'भगवान शिव', 'देवराज इंद्र', 'वरुण देव'],
        correctIndex: 0,
        learnMore: 'Surya blessed the vessel: it would provide endless, delicious food every day until Queen Draupadi herself had finished her meal.',
        learnMore_te: 'ద్రౌపది భోజనం చేసేంత వరకు ఆ పాత్ర నుండి అపరిమితమైన ఆహారం లభించేలా సూర్యుడు వరం ఇచ్చాడు.',
        learnMore_hi: 'सूर्यदेव ने वरदान दिया कि जब तक द्रौपदी स्वयं भोजन नहीं कर लेंगी, तब तक यह पात्र कभी रिक्त नहीं होगा।',
        xpReward: 10
      },
      {
        id: 'q51-2',
        type: 'true_false',
        prompt: 'When Sage Durvasa and ten thousand disciples arrived hungry after Draupadi had eaten, Lord Krishna ate a single remaining leaf of spinach (Shaaka) from the vessel, instantly satisfying the hunger of the universe.',
        prompt_te: 'దుర్వాస మహర్షి వేలమంది శిష్యులతో వచ్చినప్పుడు, పాత్రలో మిగిలిన ఒక్క ఆకుకూర రేకను కృష్ణుడు ఆరగించడంతో లోకాలన్నీ తృప్తి చెందాయి.',
        prompt_hi: 'जब दुर्वासा ऋषि दस सहस्र शिष्यों संग आए, तब श्रीकृष्ण ने अक्षय पात्र में चिपके शाक (साग) के एक पत्ते को खाकर समस्त ब्रह्मांड को तृप्त कर दिया।',
        correctAnswer: true,
        learnMore: 'Feeling inexplicably full as if they had enjoyed an imperial banquet, Durvasa and his Munis quietly departed without anger.',
        learnMore_te: 'కడుపు నిండిపోవడంతో ఆశ్చర్యపోయిన దుర్వాసుడు మరియు ఆయన శిష్యులు పాండవులకు ఎలాంటి ఆపద తలపెట్టకుండా వెళ్ళిపోయారు.',
        learnMore_hi: 'पेट तृप्त हो जाने के कारण दुर्वासा और उनके शिष्य लज्जित होकर नदी तट से ही लौट गए।',
        xpReward: 10
      },
      {
        id: 'q51-3',
        type: 'riddle',
        prompt: 'The sacred forest where the Pandavas resided during exile, hosting great sages and receiving heavenly guidance. What forest was it?',
        prompt_te: 'పాండవులు తమ వనవాస కాలంలో ఎక్కువ భాగం నివసించిన పవిత్రమైన అటవీ ప్రాంతం ఏది?',
        prompt_hi: 'वह पावन वन जहां पाण्डवों ने अपने वनवास का अधिकांश समय तपस्वियों संग व्यतीत किया। वह कौन सा वन था?',
        hint: 'Named after desire fulfillment.',
        hint_te: 'కామ్యక వనం.',
        hint_hi: 'काम्यक वन।',
        answer: 'Kamyaka Forest (and Dwaitavana)',
        answer_te: 'కామ్యక వనం (ద్వైతవనం)',
        answer_hi: 'काम्यक वन (और द्वैतवन)',
        options: ['Kamyaka Forest (and Dwaitavana)', 'Dandakaranya', 'Naimisharanya', 'Panchavati'],
        options_te: ['కామ్యక వనం (ద్వైతవనం)', 'దండకారణ్యం', 'నైమిశారణ్యం', 'పంచవటి'],
        options_hi: ['काम्यक वन (और द्वैतवन)', 'दंडकारण्य', 'नैमिषारण्य', 'पंचवटी'],
        learnMore: 'In Kamyaka, the Pandavas lived in harmony with hermits, transforming their banishment into a spiritual university.',
        learnMore_te: 'కామ్యక వనంలో పాండవులు ఋషుల వద్ద సమస్త ఆధ్యాత్మిక విజ్ఞానాన్ని నేర్చుకున్నారు.',
        learnMore_hi: 'काम्यक वन में पाण्डवों ने वेदों और उपनिषदों का गहन स्वाध्याय कर अपनी आत्मशक्ति को प्रदीप्त किया।',
        xpReward: 20
      }
    ]
  },

  // Level 52
  {
    levelNumber: 52,
    partNumber: 6,
    title: 'Arjuna’s Penance & Kiratarjuniya',
    title_te: 'కిరాతార్జునీయం: పాశుపతాస్త్రం',
    title_hi: 'किराताdetail: पाशुपतास्त्र की प्राप्ति',
    subtitle: 'The Duel with the Mountain Hunter',
    subtitle_te: 'శివుడితో ద్వంద్వ యుద్ధం & దివ్యాస్త్రం',
    subtitle_hi: 'किरात रूपी शिव और अर्जुन का युद्ध',
    questions: [
      {
        id: 'q52-1',
        type: 'mcq',
        prompt: 'On which high Himalayan peak did Arjuna stand upon one toe, performing fierce austerities to please Lord Shiva?',
        prompt_te: 'శివ ప్రీతి కోసం అర్జునుడు ఒంటికాలిపై నిలబడి ఘోర తపస్సు చేసిన హిమాలయ పర్వతం ఏది?',
        prompt_hi: 'भगवान शिव को प्रसन्न करने के लिए अर्जुन ने हिमालय के किस शिखर पर एक पैर पर खड़े होकर घोर तपस्या की थी?',
        options: ['Mount Indrakeela', 'Mount Kailash', 'Mount Gandhamadana', 'Mount Mandara'],
        options_te: ['ఇంద్రకీలాద్రి పర్వతం', 'కైలాస పర్వతం', 'గంధమాదన పర్వతం', 'మందర పర్వతం'],
        options_hi: ['इंद्रकील पर्वत', 'कैलाश पर्वत', 'गंधमादन पर्वत', 'मंदराचल'],
        correctIndex: 0,
        learnMore: 'Arjuna chanted the Pratismriti mantra taught by Sage Vyasa, radiating ascetic heat that alarmed even the gods.',
        learnMore_te: 'వ్యాసుడు ఉపదేశించిన ప్రతిస్మృతి విద్యతో అర్జునుడు చేసిన తపస్సుకు తపోగ్ని లోకాలను తాకింది.',
        learnMore_hi: 'व्यासदेव द्वारा दिए गए प्रतिस्मृति मंत्र का जाप करते हुए अर्जुन का तप तीनों लोकों को तपाने लगा।',
        xpReward: 10
      },
      {
        id: 'q52-2',
        type: 'true_false',
        prompt: 'Lord Shiva approached Arjuna disguised as a tribal mountain hunter (Kirata) to test his martial prowess and unwavering spirit.',
        prompt_te: 'పరమశివుడు ఒక కిరాతుడి (బోయవాని) రూపంలో వచ్చి అర్జునుడి శౌర్యాన్ని పరీక్షించాడు.',
        prompt_hi: 'भगवान शिव ने एक भील/किरात शिकारी का रूप धारण कर अर्जुन के पराक्रम और धैर्य की परीक्षा ली थी।',
        correctAnswer: true,
        learnMore: 'Both claimed to have shot a wild demon-boar (Muka); their dispute led to a hand-to-hand wrestling match on the cliffs.',
        learnMore_te: 'మూకాసురుడనే వరాహాన్ని ఎవరు చంపారనే విషయమై అర్జునుడికి, కిరాతుడికి మధ్య భీకర బాణ, మల్లయుద్ధాలు జరిగాయి.',
        learnMore_hi: 'शूकर रूपी मूकासुर के वध को लेकर दोनों के बीच बाण-युद्ध और मल्ल-युद्ध हुआ।',
        xpReward: 10
      },
      {
        id: 'q52-3',
        type: 'riddle',
        prompt: 'The supreme, cosmos-destroying celestial weapon bestowed by the pleased Lord Shiva upon Arjuna after revealing His Mahadeva form. What Astra is it?',
        prompt_te: 'అర్జునుడి భక్తికి, శౌర్యానికి మెచ్చి పరమేశ్వరుడు ప్రసాదించిన సృష్టి వినాశకర దివ్యాస్త్రం ఏది?',
        prompt_hi: 'भगवान शिव ने प्रसन्न होकर अर्जुन को कौन सा संहारक और अमोघ दिव्यास्त्र प्रदान किया था?',
        hint: 'Weapon of Pashupati.',
        hint_te: 'పాశుపతాస్త్రం.',
        hint_hi: 'भगवान पशुपतिनाथ का अस्त्र।',
        answer: 'The Pashupatastra',
        answer_te: 'పాశుపతాస్త్రం',
        answer_hi: 'पाशुपतास्त्र',
        options: ['The Pashupatastra', 'Brahmashira', 'Narayanastra', 'Agneyastra'],
        options_te: ['పాశుపతాస్త్రం', 'బ్రహ్మశిరో అస్త్రం', 'నారాయణాస్త్రం', 'ఆగ్నేయాస్త్రం'],
        options_hi: ['पाशुपतास्त्र', 'ब्रह्मशिरा', 'नारायणास्त्र', 'आग्नेयास्त्र'],
        learnMore: 'Shiva instructed Arjuna: "Never use this weapon against mortal foes; it is to be unleashed only if celestial annihilation threatens."',
        learnMore_te: 'సాధారణ మానవులపై ఈ అస్త్రాన్ని ప్రయోగించకూడదని శివుడు హెచ్చరించాడు.',
        learnMore_hi: 'शिवजी ने निर्देश दिया कि इसका प्रयोग साधारण युद्ध में कभी न करें, यह केवल अंतिम संहारक अस्त्र है।',
        xpReward: 20
      }
    ]
  },

  // Level 53
  {
    levelNumber: 53,
    partNumber: 6,
    title: 'Arjuna in Indraloka & Urvashi’s Curse',
    title_te: 'ఇంద్రలోకంలో అర్జునుడు & ఊర్వశి శాపం',
    title_hi: 'इंद्रलोक में अर्जुन और उर्वशी का शाप',
    subtitle: 'Celestial Chariot & The Transformed Destiny',
    subtitle_te: 'మాతలి రథం & నపుంసక శాపం',
    subtitle_hi: 'मातलि का रथ और वरदान बना शाप',
    questions: [
      {
        id: 'q53-1',
        type: 'mcq',
        prompt: 'Who was Indra’s divine charioteer who drove the celestial flying chariot to transport Arjuna to heaven (Swargaloka)?',
        prompt_te: 'అర్జునుడిని స్వర్గానికి తీసుకువెళ్ళడానికి దివ్య రథంతో వచ్చిన ఇంద్రుడి సారథి ఎవరు?',
        prompt_hi: 'अर्जुन को स्वर्गलोक ले जाने के लिए देवराज इंद्र का कौन सा दिव्य सारथी रथ लेकर आया था?',
        options: ['Matali', 'Daruka', 'Sanjaya', 'Sumantra'],
        options_te: ['మాతలి', 'దారుకుడు', 'సంజయుడు', 'సుమంత్రుడు'],
        options_hi: ['मातलि', 'दारुक', 'संजय', 'सुमंत'],
        correctIndex: 0,
        learnMore: 'Matali drove Arjuna across the celestial pathway above the stars to Amaravati, where Indra welcomed his son onto his throne.',
        learnMore_te: 'మాతలి నడిపిన ఆ రథంపై అర్జునుడు అమరావతికి చేరుకుని ఇంద్రుడి అర్ధసింహాసనాన్ని అధిష్టించాడు.',
        learnMore_hi: 'मातलि अर्जुन को अमरावती ले गया, जहां इंद्र ने अपने वीर पुत्र को अपने आधे सिंहासन पर बैठाया।',
        xpReward: 10
      },
      {
        id: 'q53-2',
        type: 'true_false',
        prompt: 'Arjuna rejected celestial dancer Urvashi’s romantic advances because she had been the wife of his ancestor King Pururavas, treating her as a mother.',
        prompt_te: 'ఊర్వశి తన పూర్వీకుడైన పురూరవుడి భార్య అయినందువల్ల, ఆమెను తల్లి సమానంగా భావించి అర్జునుడు ఆమె కోరికను తిరస్కరించాడు.',
        prompt_hi: 'उर्वशी कुरुवंश के पूर्वज राजा पुरूरवा की पत्नी रह चुकी थी, इसलिए अर्जुन ने उन्हें माता तुल्य मानकर उनके प्रणय को अस्वीकार कर दिया।',
        correctAnswer: true,
        learnMore: 'Arjuna bowed touching his forehead to her feet: "You are the mother of my dynasty; I view you with the same reverence as Kunti and Shachi."',
        learnMore_te: 'కుంతి, శచీదేవిలతో సమానంగా నిన్ను పూజిస్తానని చెప్పి అర్జునుడు ఆమె పాదాలకు నమస్కరించాడు.',
        learnMore_hi: 'अर्जुन के इस संयम और शुचिता ने उनकी जितेंद्रियता का सर्वोच्च प्रमाण प्रस्तुत किया।',
        xpReward: 10
      },
      {
        id: 'q53-3',
        type: 'riddle',
        prompt: 'Enraged by Arjuna’s rejection, I cursed him to lose his manhood and live as a dancing eunuch among women for one year. Who am I?',
        prompt_te: 'తన కోరికను తిరస్కరించినందుకు ఆగ్రహించి, ఒక సంవత్సరం పాటు స్త్రీల మధ్య నపుంసక నాట్యాచార్యుడిగా జీవించమని అర్జునుడిని శపించిన అప్సరసను నేను. నేను ఎవరిని?',
        prompt_hi: 'अर्जुन के इनकार से क्रुद्ध होकर जिसने शाप दिया कि "तुम एक वर्ष तक स्त्रियों के बीच नपुंसक नर्तक बनकर रहोगे।" मैं कौन हूँ?',
        hint: 'The most beautiful celestial nymph in Indra’s court.',
        hint_te: 'స్వర్గలోక అప్సరస.',
        hint_hi: 'इंद्र की प्रमुख अप्सरा।',
        answer: 'Urvashi',
        answer_te: 'ఊర్వశి',
        answer_hi: 'उर्वशी',
        options: ['Urvashi', 'Menaka', 'Rambha', 'Tilottama'],
        options_te: ['ఊర్వశి', 'మేనక', 'రంభ', 'తిలోత్తమ'],
        options_hi: ['उर्वशी', 'मेनका', 'रंभा', 'तिलोत्तमा'],
        learnMore: 'Indra comforted Arjuna: this curse would serve as an impenetrable disguise during the mandatory 13th year incognito.',
        learnMore_te: 'ఈ శాపమే పదమూడవ ఏట అజ్ఞాతవాసంలో మారువేషానికి వరంగా మారుతుందని ఇంద్రుడు అర్జునుడికి చెప్పాడు.',
        learnMore_hi: 'इंद्र ने समझाया कि यह शाप वास्तव में १३वें वर्ष के अज्ञातवास में अर्जुन की पहचान छिपाने का अचूक वरदान सिद्ध होगा।',
        xpReward: 20
      }
    ]
  },

  // Level 54
  {
    levelNumber: 54,
    partNumber: 6,
    title: 'The Quest for the Saugandhika Lotus',
    title_te: 'సౌగంధిక పుష్పం & భీమ-హనుమ సమాగమం',
    title_hi: 'सौगंधिक कमल और भीम-हनुमान मिलन',
    subtitle: 'The Scented Flower & An Old Monkey’s Tail',
    subtitle_te: 'పరిమళ పుష్పం & వృద్ధ వానరుడి తోక',
    subtitle_hi: 'गंधमादन पर्वत और पवनपुत्रों का मिलन',
    questions: [
      {
        id: 'q54-1',
        type: 'mcq',
        prompt: 'Why did Bhima venture up the perilous slopes of Mount Gandhamadana into the celestial gardens of Kubera?',
        prompt_te: 'గంధమాదన పర్వతంపై ఉన్న కుబేరుడి దివ్య తోటల్లోకి భీముడు ఎందుకు వెళ్ళాడు?',
        prompt_hi: 'भीमसेन गंधमादन पर्वत के दुर्गम शिखरों पर कुबेर के सरोवर की ओर क्यों गए थे?',
        options: [
          'To fetch the divine thousand-petaled Saugandhika lotus requested by Draupadi',
          'To hunt golden deer',
          'To challenge Kubera to battle',
          'To search for medicinal herbs'
        ],
        options_te: [
          'ద్రౌపది కోరిన దివ్య సౌగంధిక పద్మాన్ని తీసుకురావడానికి',
          'బంగారు లేడిని వేటాడటానికి',
          'కుబేరుడితో యుద్ధం చేయడానికి',
          'మూలికలను వెతకడానికి'
        ],
        options_hi: [
          'द्रौपदी की इच्छा पूर्ण करने हेतु दिव्य सौगंधिक कमल लाने',
          'स्वर्ण मृग का शिकार करने',
          'कुबेर को युद्ध की चुनौती देने',
          'संजीवनी बूटी खोजने'
        ],
        correctIndex: 0,
        learnMore: 'A sweet-scented celestial lotus had drifted down a mountain brook; captivated by its aroma, Draupadi asked Bhima to bring more.',
        learnMore_te: 'నీటి ప్రవాహంలో కొట్టుకువచ్చిన ఆ సువాసనల పుష్పాన్ని చూసి ముగ్ధురాలైన ద్రౌపది మరిన్ని తెచ్చివ్వమని భీముడిని కోరింది.',
        learnMore_hi: 'नदी में बहकर आए सुगंधित कमल को देखकर द्रौपदी ने भीम से वैसे और पुष्प लाने का आग्रह किया था।',
        xpReward: 10
      },
      {
        id: 'q54-2',
        type: 'true_false',
        prompt: 'An old, frail-looking monkey lay across the narrow mountain path and told Bhima to simply lift his tail out of the way if he wished to pass.',
        prompt_te: 'దారికి అడ్డంగా పడుకున్న ఒక వృద్ధ వానరుడు, వెళ్ళాలనుకుంటే తన తోకను పక్కకు జరిపి వెళ్ళమని భీముడికి చెప్పాడు.',
        prompt_hi: 'पगडंडी पर लेटे एक वृद्ध वानर ने भीम से कहा कि वह दुर्बल है, अतः भीम उसकी पूंछ हटाकर आगे निकल जाए।',
        correctAnswer: true,
        learnMore: 'Despite straining with his full strength of 10,000 elephants until mountains trembled, Bhima could not lift the tail even an inch.',
        learnMore_te: 'పదివేల ఏనుగుల బలం ఉన్న భీముడు సర్వశక్తులూ ఒడ్డినా ఆ తోకను కనీసం ఒక్క అంగుళం కూడా కదల్చలేకపోయాడు.',
        learnMore_hi: 'भीम ने अपनी पूरी शक्ति लगा दी किंतु पूंछ तिल भर भी न हिली, जिससे भीम का गर्व चूर-चूर हो गया।',
        xpReward: 10
      },
      {
        id: 'q54-3',
        type: 'riddle',
        prompt: 'Elder spiritual brother of Bhima born of Vayu, who revealed my gigantic Vishwaroopa form that once leaped across the southern ocean to Lanka. Who am I?',
        prompt_te: 'భీముడి అన్నయ్యను, వాయుపుత్రుడిని; పూర్వం లంకను లంఘించిన తన విశ్వరూపాన్ని భీముడికి చూపించి ఆశీర్వదించిన వీరుణ్ని నేను. నేను ఎవరిని?',
        prompt_hi: 'भीमसेन के बड़े भाई और पवनपुत्र, जिन्होंने लंका लांघने वाले अपने विराट रूप का दर्शन कराकर भीम को आलिंगन में बांध लिया। मैं कौन हूँ?',
        hint: 'The immortal devotee of Sri Rama.',
        hint_te: 'శ్రీరామదూత.',
        hint_hi: 'महाबली हनुमान।',
        answer: 'Lord Hanuman (Maruti)',
        answer_te: 'భగవాన్ హనుమంతుడు',
        answer_hi: 'भगवान हनुमान (मारुति)',
        options: ['Lord Hanuman (Maruti)', 'Sugriva', 'Angada', 'Jambavan'],
        options_te: ['భగవాన్ హనుమంతుడు', 'సుగ్రీవుడు', 'అంగదుడు', 'జాంబవంతుడు'],
        options_hi: ['भगवान हनुमान (मारुति)', 'सुग्रीव', 'अंगद', 'जाम्बवंत'],
        learnMore: 'Hanuman embraced Bhima, infusing his limbs with divine vigor and promising to roar from Arjuna’s chariot banner during the Kurukshetra war.',
        learnMore_te: 'హనుమంతుడు భీముడిని ఆలింగనం చేసుకుని తన దివ్యశక్తిని ప్రసాదించి, యుద్ధంలో రథ ధ్వజంపై ఉంటానని మాట ఇచ్చాడు.',
        learnMore_hi: 'हनुमान जी ने भीम को गले लगाया और वचन दिया कि वे कुरुक्षेत्र में अर्जुन के रथ की ध्वजा पर बैठकर शत्रुओं का मनोबल तोड़ेंगे।',
        xpReward: 20
      }
    ]
  },

  // Level 55
  {
    levelNumber: 55,
    partNumber: 6,
    title: 'The Humiliation of Jayadratha',
    title_te: 'జయద్రథుడి పరాభవం',
    title_hi: 'जयद्रथ का मान-मर्दन',
    subtitle: 'Abduction Foiled & The Five Tufts of Hair',
    subtitle_te: 'ద్రౌపది అపహరణ యత్నం & ఐదు పిలకల గుండు',
    subtitle_hi: 'पाण्डवों का क्रोध और मुंडन का दंड',
    questions: [
      {
        id: 'q55-1',
        type: 'mcq',
        prompt: 'Which king of Sindhu, brother-in-law to Duryodhana, attempted to forcibly abduct Queen Draupadi while the Pandavas were out hunting in the Kamyaka forest?',
        prompt_te: 'పాండవులు వేటకు వెళ్ళిన సమయంలో కామ్యక వనం నుండి ద్రౌపదిని అపహరించడానికి ప్రయత్నించిన సింధు రాజు ఎవరు?',
        prompt_hi: 'पाण्डवों की अनुपस्थिति में काम्यक वन से द्रौपदी का बलपूर्वक अपहरण करने का कुकृत्य किस राजा ने किया था?',
        options: ['King Jayadratha of Sindhu', 'King Shalya', 'King Susharma', 'King Jarasandha'],
        options_te: ['సింధు దేశపు రాజు జయద్రథుడు', 'శల్య మహారాజు', 'సుశర్మ', 'జరాసంధుడు'],
        options_hi: ['सिंधु नरेश जयद्रथ', 'राजा शल्य', 'सुशर्मा', 'जरासंध'],
        correctIndex: 0,
        learnMore: 'Draupadi resisted valiantly, pushing Jayadratha off his chariot before being overpowered, but the Pandavas returned and gave chase.',
        learnMore_te: 'ద్రౌపది ధైర్యంగా ప్రతిఘటించింది; పాండవులు వెంటనే తిరిగి వచ్చి జయద్రథుడి సైన్యాన్ని ఊచకోత కోశారు.',
        learnMore_hi: 'द्रौपदी ने उसका कड़ा विरोध किया; पाण्डवों ने लौटते ही उसका पीछा कर उसकी समूची सेना को नष्ट कर दिया।',
        xpReward: 10
      },
      {
        id: 'q55-2',
        type: 'true_false',
        prompt: 'Yudhishthira spared Jayadratha’s life solely because he was the husband of their cousin sister Dushala (Dhritarashtra’s daughter).',
        prompt_te: 'తమ సోదరి దుశ్శల (ధృతరాష్ట్రుడి కుమార్తె) భర్త అయినందువల్లనే ధర్మరాజు జయద్రథుడిని చంపకుండా ప్రాణభిక్ష పెట్టించాడు.',
        prompt_hi: 'युधिष्ठिर ने जयद्रथ का वध करने से भीम को रोका क्योंकि वह उनकी बहन दुःशला का पति था।',
        correctAnswer: true,
        learnMore: 'Bhima wanted to crush Jayadratha’s skull, but obeyed his eldest brother’s compassionate command.',
        learnMore_te: 'భీముడు చంపాలనుకున్నా, అన్నగారి మాటను గౌరవించి ప్రాణాలతో వదిలిపెట్టాడు.',
        learnMore_hi: 'भीम उसका वध करना चाहते थे, किंतु युधिष्ठिर की आज्ञा मानकर उन्होंने उसे जीवनदान दिया।',
        xpReward: 10
      },
      {
        id: 'q55-3',
        type: 'riddle',
        prompt: 'To inflict a humiliation worse than death, Bhima shaved my head completely with crescent arrows leaving only five ridiculous tufts of hair, forcing me to proclaim "I am the slave of the Pandavas!" Who am I?',
        prompt_te: 'మరణం కంటే ఘోరమైన అవమానాన్ని మిగులుస్తూ, తలపై ఐదు పిలకలు ఉంచి గుండు గీయించి "నేను పాండవుల బానిసను" అని అనిపించుకున్న రాజును నేను. నేను ఎవరిని?',
        prompt_hi: 'भीम ने अर्धचंद्राकार बाणों से सिर मूंडकर केवल पांच चोटियां छोड़ दीं और भरी सभा में "मैं पाण्डवों का दास हूँ" कहलवाया। मैं कौन हूँ?',
        hint: 'He later played a fatal role in Abhimanyu’s death at Kurukshetra.',
        hint_te: 'చక్రవ్యూహం ద్వారం వద్ద పాండవులను అడ్డుకున్నవాడు.',
        hint_hi: 'अभिमन्यु के वध में चक्रव्यूह का द्वार रोकने वाला दुःशला का पति।',
        answer: 'King Jayadratha',
        answer_te: 'జయద్రథుడు',
        answer_hi: 'राजा जयद्रथ',
        options: ['King Jayadratha', 'Kichaka', 'Shalya', 'Shakuni'],
        options_te: ['జయద్రథుడు', 'కీచకుడు', 'శల్యుడు', 'శకుని'],
        options_hi: ['राजा जयद्रथ', 'कीचक', 'शल्य', 'शकुनि'],
        learnMore: 'Shamed beyond endurance, Jayadratha performed intense penance to Lord Shiva, securing a boon to hold back all Pandavas (except Arjuna) for a single day of battle.',
        learnMore_te: 'ఈ అవమానంతో జయద్రథుడు శివుడిని ప్రార్థించి, ఒక్కరోజు పాటు అర్జునుడు తప్ప మిగిలిన నలుగురు పాండవులను నిలువరించే వరాన్ని పొందాడు.',
        learnMore_hi: 'इस अपमान का बदला लेने के लिए जयद्रथ ने शिवजी से एक दिन के लिए अर्जुन को छोड़कर चारों पाण्डवों को रोकने का वरदान पाया।',
        xpReward: 20
      }
    ]
  },

  // Level 56
  {
    levelNumber: 56,
    partNumber: 6,
    title: 'Tales of Solace: Nala & Savitri',
    title_te: 'ఓదార్పు కథలు: నలుడు & సావిత్రి',
    title_hi: 'आश्वासन की कथाएं: नल-दमयंती और सावित्री',
    subtitle: 'Sage Markandeya’s Lessons on Fortitude',
    subtitle_te: 'మార్కండేయ మహర్షి ధైర్యవచనాలు',
    subtitle_hi: 'धैर्य और सत्य की विजय गाथा',
    questions: [
      {
        id: 'q56-1',
        type: 'mcq',
        prompt: 'Which venerable sage visited the Pandavas in the forest and comforted Yudhishthira by narrating the uplifting tales of King Nala and Princess Savitri?',
        prompt_te: 'అడవిలో పాండవులను దర్శించి, నల-దమయంతి మరియు సావిత్రి-సత్యవంతుల కథల ద్వారా ధర్మరాజుకు మనోధైర్యాన్ని నింపిన చిరంజీవి మహర్షి ఎవరు?',
        prompt_hi: 'वनवास में युधिष्ठिर के शोक को दूर करने हेतु नल-दमयंती और सत्यवान-सावित्री की पावन कथाएं किस महर्षि ने सुनाई थीं?',
        options: ['Sage Markandeya', 'Sage Narada', 'Sage Agastya', 'Sage Valmiki'],
        options_te: ['మార్కండేయ మహర్షి', 'నారద మహర్షి', 'అగస్త్య మహర్షి', 'వాల్మీకి మహర్షి'],
        options_hi: ['महर्षि मार्कण्डेय', 'देवर्षि नारद', 'महर्षि अगस्त्य', 'महर्षि वाल्मीकि'],
        correctIndex: 0,
        learnMore: 'Markandeya reminded Yudhishthira that even the noblest of kings suffer reversals through the play of destiny, but truth inevitably triumphs.',
        learnMore_te: 'కాలం తెచ్చే కష్టాలను ధైర్యంతో ఎదుర్కొంటే అంతిమంగా సత్యమే గెలుస్తుందని మార్కండేయుడు ప్రబోధించాడు.',
        learnMore_hi: 'मार्कण्डेय ने समझाया कि विपत्ति महान पुरुषों की परीक्षा होती है, और धैर्यवान व्यक्ति अंततः विजय प्राप्त करता है।',
        xpReward: 10
      },
      {
        id: 'q56-2',
        type: 'true_false',
        prompt: 'Princess Savitri pursued Yamaraja (the God of Death) into the subtle realms through intellectual debate and pure devotion, winning back her husband Satyavan’s life.',
        prompt_te: 'సావిత్రి తన పాతివ్రత్య మహిమతో, ధర్మ సంభాషణలతో యమధర్మరాజును మెప్పించి తన భర్త సత్యవంతుడి ప్రాణాలను తిరిగి దక్కించుకుంది.',
        prompt_hi: 'राजकुमारी सावित्री ने अपने पातिव्रत्य और धर्मयुक्त तर्कों से यमराज को प्रसन्न कर अपने मृत पति सत्यवान को पुनर्जीवित करा लिया।',
        correctAnswer: true,
        learnMore: 'Markandeya held up Savitri as proof to Draupadi that a chaste, devoted queen can rescue her entire household from the abyss of death.',
        learnMore_te: 'పతివ్రత అయిన స్త్రీ సంకల్పం మృత్యువును కూడా జయించగలదని ద్రౌపదికి ఆదర్శంగా నిలిపాడు.',
        learnMore_hi: 'सावित्री का यह आख्यान द्रौपदी के लिए संबल बना कि स्त्री का धर्म और निष्ठा असंभव को भी संभव कर सकती है।',
        xpReward: 10
      },
      {
        id: 'q56-3',
        type: 'riddle',
        prompt: 'Defeated at dice by my brother Pushkara due to the influence of Kali, I wandered the forest and was bitten by serpent Karkotaka before regaining my kingdom. Who am I?',
        prompt_te: 'కలి ప్రభావంతో జూదంలో సర్వస్వం కోల్పోయి, కర్కోటకుడి కాటుతో రూపాన్ని మార్చుకుని చివరకు రాజ్యాన్ని తిరిగి పొందిన నిషధ రాజును నేను. నేను ఎవరిని?',
        prompt_hi: 'द्यूत में सब कुछ हारकर वन-वन भटके और कर्कोटक नाग के दंश से रूप बदलकर अंततः अपनी दमयंती व राज्य को पुनः प्राप्त किया। मैं कौन हूँ?',
        hint: 'Famous master of equine sciences.',
        hint_te: 'అశ్వహృదయ విద్య తెలిసిన నల మహారాజు.',
        hint_hi: 'अश्वविद्या के ज्ञाता राजा नल।',
        answer: 'King Nala (of Nishadha)',
        answer_te: 'నల మహారాజు',
        answer_hi: 'राजा नल',
        options: ['King Nala (of Nishadha)', 'King Harishchandra', 'King Sagara', 'King Dilipa'],
        options_te: ['నల మహారాజు', 'హరిశ్చంద్ర మహారాజు', 'సగర చక్రవర్తి', 'దిలీప మహారాజు'],
        options_hi: ['राजा नल', 'राजा हरिश्चंद्र', 'राजा सगर', 'राजा दिलीप'],
        learnMore: 'Nala’s restoration proved to Yudhishthira that righteousness, though temporarily eclipsed, rises again like the morning sun.',
        learnMore_te: 'నలుడి చరిత్ర ధర్మరాజుకు తన రాజ్యాన్ని తిరిగి సాధించగలననే అచంచల నమ్మకాన్ని ఇచ్చింది.',
        learnMore_hi: 'राजा नल की कथा ने युधिष्ठिर के मन में यह विश्वास सुदृढ़ किया कि धर्म की कभी पराजय नहीं हो सकती।',
        xpReward: 20
      }
    ]
  },

  // Level 57
  {
    levelNumber: 57,
    partNumber: 6,
    title: 'The Yaksha Prashna',
    title_te: 'యక్ష ప్రశ్నలు',
    title_hi: 'यक्ष प्रश्न: धर्म की परीक्षा',
    subtitle: 'The Enchanted Lake & Cosmic Wisdom',
    subtitle_te: 'మాయా సరస్సు & యమధర్మరాజు సమాధానాలు',
    subtitle_hi: 'दिव्य सरोवर और जीवन-मृत्यु का गूढ़ ज्ञान',
    questions: [
      {
        id: 'q57-1',
        type: 'mcq',
        prompt: 'Why did Nakula, Sahadeva, Arjuna, and Bhima fall lifeless beside the enchanted crystal lake?',
        prompt_te: 'నకులుడు, సహదేవుడు, అర్జునుడు మరియు భీములు ఆ కొలను వద్ద స్పృహతప్పి ప్రాణాలు కోల్పోవడానికి కారణం ఏమిటి?',
        prompt_hi: 'नकुल, सहदेव, अर्जुन और भीम उस निर्मल सरोवर के तट पर अचेत होकर मृत्यु को क्यों प्राप्त हो गए?',
        options: [
          'They drank the water despite the invisible crane (Yaksha) warning them to answer his questions first',
          'The water was poisoned by Duryodhana',
          'A giant serpent attacked them',
          'They ate poisonous wild forest fruits'
        ],
        options_te: [
          'తన ప్రశ్నలకు సమాధానం చెప్పిన తర్వాతే నీరు తాగాలని యక్షుడు (కొంగ) హెచ్చరించినా వినకుండా తాగినందుకు',
          'దుర్యోధనుడు నీటిలో విషం కలిపించాడు',
          'పెద్ద సర్పం దాడి చేసింది',
          'విషపూరితమైన అడవి పండ్లను తిన్నారు'
        ],
        options_hi: [
          'यक्ष की चेतावनी की उपेक्षा कर बिना प्रश्नों के उत्तर दिए हठपूर्वक जल पीने के कारण',
          'सरोवर में दुर्योधन ने विष मिलाया था',
          'नागराज ने उन्हें डस लिया था',
          'जहरीले फल खा लिए थे'
        ],
        correctIndex: 0,
        learnMore: 'Overcome by agonizing thirst, the four brothers disregarded the celestial voice and paid with their lives.',
        learnMore_te: 'తీవ్రమైన దాహం వల్ల యక్షుడి హెచ్చరికను పట్టించుకోకుండా నీటిని తాగడంతో వారు నేలకూలారు.',
        learnMore_hi: 'तीव्र प्यास के वेग में उन्होंने यक्ष के नियमों का उल्लंघन किया और प्राण गंवा बैठे।',
        xpReward: 10
      },
      {
        id: 'q57-2',
        type: 'true_false',
        prompt: 'When asked "What is the greatest wonder in the world?", Yudhishthira replied: "Day after day, countless creatures die, yet those who remain believe they will live forever."',
        prompt_te: '"ప్రపంచంలో అన్నిటికంటే గొప్ప ఆశ్చర్యం ఏమిటి?" అన్న ప్రశ్నకు, ప్రతిరోజూ జనులు చనిపోతుండటం చూస్తూ కూడా తాము శాశ్వతంగా జీవిస్తామని భావించడమే అని యుధిష్ఠిరుడు సమాధానం చెప్పాడు.',
        prompt_hi: '"संसार का सबसे बड़ा आश्चर्य क्या है?"—इस प्रश्न पर युधिष्ठिर ने उत्तर दिया: "प्रतिदिन प्राणी यमलोक जाते हैं, फिर भी जो जीवित हैं वे सदैव जीवित रहने की इच्छा करते हैं।"',
        correctAnswer: true,
        learnMore: 'Yudhishthira also answered: "The mind is swifter than wind; worry is more numerous than blades of grass; patience is the highest virtue."',
        learnMore_te: 'గాలి కంటే వేగమైనది మనస్సు, గడ్డి కంటే ఎక్కువ విస్తరించేది చింత అని ధర్మరాజు అద్భుతంగా వివరించాడు.',
        learnMore_hi: 'युधिष्ठिर ने यह भी कहा कि "वायु से तेज मन है और तिनकों से अधिक चिंताएं हैं।"',
        xpReward: 10
      },
      {
        id: 'q57-3',
        type: 'riddle',
        prompt: 'Allowed by the pleased Yaksha to revive only one brother, Yudhishthira chose Nakula over Bhima or Arjuna so both mothers (Kunti and Madri) would have a surviving son. What divine being was the Yaksha?',
        prompt_te: 'ధర్మరాజు నిష్పక్షపాత న్యాయబుద్ధికి మెచ్చి ఐదుగురు సోదరులనూ బతికించిన ఆ యక్షుడు నిజానికి ఏ దేవుడు?',
        prompt_hi: 'युधिष्ठिर की निष्पक्षता और धर्म-दृष्टि से प्रसन्न होकर पांचों भाइयों को जीवित करने वाला वह यक्ष वास्तव में कौन था?',
        hint: 'Father of Yudhishthira and God of Justice.',
        hint_te: 'యుధిష్ఠిరుడి తండ్రి, యమధర్మరాజు.',
        hint_hi: 'धर्मराज (यम)।',
        answer: 'Lord Dharma (Yamaraja)',
        answer_te: 'యమధర్మరాజు (ధర్మదేవత)',
        answer_hi: 'धर्मराज (यमराज)',
        options: ['Lord Dharma (Yamaraja)', 'Lord Indra', 'Lord Shiva', 'Lord Brahma'],
        options_te: ['యమధర్మరాజు (ధర్మదేవత)', 'ఇంద్రుడు', 'శివుడు', 'బ్రహ్మదేవుడు'],
        options_hi: ['धर्मराज (यमराज)', 'इंद्रदेव', 'भगवान शिव', 'ब्रह्माजी'],
        learnMore: 'Lord Dharma embraced his son and granted that during their upcoming incognito year, no spy would ever discover them.',
        learnMore_te: 'రాబోయే అజ్ఞాతవాసంలో ఎవరూ పాండవులను గుర్తించలేరని యమధర్మరాజు అభయమిచ్చాడు.',
        learnMore_hi: 'धर्मराज ने वरदान दिया कि १३वें वर्ष के अज्ञातवास में कोई भी गुप्तचर पाण्डवों को पहचान नहीं पाएगा।',
        xpReward: 20
      }
    ]
  },

  // Level 58
  {
    levelNumber: 58,
    partNumber: 6,
    title: 'Disguises in the Matsya Kingdom',
    title_te: 'మత్స్య దేశంలో అజ్ఞాతవాసం',
    title_hi: 'मत्स्य देश और गुप्त वेश',
    subtitle: 'The Shami Tree & Royal Identities',
    subtitle_te: 'శమీ వృక్షం & మారురూపాలు',
    subtitle_hi: 'शमी वृक्ष पर शस्त्र और राजा विराट का दरबार',
    questions: [
      {
        id: 'q58-1',
        type: 'mcq',
        prompt: 'Where did the Pandavas conceal their divine weapons (including the Gandiva bow) before entering the capital of King Virata?',
        prompt_te: 'విరాట నగరంలోకి ప్రవేశించే ముందు పాండవులు తమ దివ్యాస్త్రాలను (గాండీవంతో సహా) ఎక్కడ దాచిపెట్టారు?',
        prompt_hi: 'विराट नगरी में प्रवेश से पूर्व पाण्डवों ने अपने दिव्यास्त्रों और गांडीव को कहां छुपाकर रखा था?',
        options: [
          'Wrapped in a corpse-shroud inside a hollow Shami (banni) tree near the cremation ground',
          'Buried beneath a temple floor',
          'Thrown into the royal river',
          'Hidden in a cave in the Himalayas'
        ],
        options_te: [
          'శ్మశాన వాటిక సమీపంలోని శమీ (జమ్మి) చెట్టు తొర్రలో శవ వస్త్రంలో చుట్టి',
          'దేవాలయ నేలమాళిగలో పాతిపెట్టి',
          'నది లోపల పడేసి',
          'హిమాలయ గుహలో దాచి'
        ],
        options_hi: [
          'श्मशान के निकट एक विशाल शमी वृक्ष के कोटर में शव के वस्त्र में लपेटकर',
          'मंदिर के तहखाने में गाड़कर',
          'यमुना नदी की अथाह गहराई में',
          'हिमालय की किसी कंदरा में'
        ],
        correctIndex: 0,
        learnMore: 'They told the cowherds it was the body of their dead mother to ensure no one would dare touch or inspect the tree.',
        learnMore_te: 'ఎవరూ తాకకుండా ఉండటానికి అది తమ తల్లి శవమని చెప్పి జమ్మి చెట్టుపై కట్టారు.',
        learnMore_hi: 'उन्होंने स्थानीय लोगों से कहा कि इसमें उनकी कुलमाता का शव है, जिससे कोई भयवश उस वृक्ष के पास न भटके।',
        xpReward: 10
      },
      {
        id: 'q58-2',
        type: 'true_false',
        prompt: 'In King Virata’s palace, Bhima took the disguise of Ballava (a master chef and wrestler), while Arjuna served as Brihannala (a dance and music teacher to Princess Uttara).',
        prompt_te: 'విరాట మహారాజు వద్ద భీముడు వంటవాడైన బల్లవుడిగా, అర్జునుడు నాట్యాచార్యుడైన బృహన్నలగా చేరారు.',
        prompt_hi: 'राजा विराट के राजमहल में भीम "बल्लव" (रसोइया व मल्ल) और अर्जुन "बृहन्नला" (राजकुमारी उत्तरा के नृत्य शिक्षक) बने।',
        correctAnswer: true,
        learnMore: 'Yudhishthira was Kanka (court advisor and dice companion), Nakula was Granthika (stable keeper), Sahadeva was Tantipala (cowherd), and Draupadi was Sairandhri (queen’s hairstylist).',
        learnMore_te: 'యుధిష్ఠిరుడు కంకుడిగా, నకులుడు దామగ్రంధిగా, సహదేవుడు తంత్రీపాలుడిగా, ద్రౌపది సైరంధ్రిగా సేవలు అందించారు.',
        learnMore_hi: 'युधिष्ठिर कंक, नकुल ग्रंथिक, सहदेव तंतिपाल और द्रौपदी रानी सुदेष्णा की सैरंध्री बनीं।',
        xpReward: 10
      },
      {
        id: 'q58-3',
        type: 'riddle',
        prompt: 'Serving Queen Sudeshna as a humble hairstylist (Sairandhri), I endured insults and hardships with royal poise, guarded secretly by celestial Gandharvas. Who am I?',
        prompt_te: 'సుధేష్ణ రాణికి పూలమాలలు కడుతూ, సైరంధ్రిగా దాసీ వేషంలో ఉండి తన పాతివ్రత్యాన్ని కాపాడుకున్న రాణిని నేను. నేను ఎవరిని?',
        prompt_hi: 'महारानी सुदेष्णा की सैरंध्री बनकर केश-विन्यास करती रहीं और अपने पांच गंधर्व पतियों का भय दिखाकर सतीत्व की रक्षा की। मैं कौन हूँ?',
        hint: 'Empress Draupadi in Matsya.',
        hint_te: 'మత్స్య దేశంలో ద్రౌపది.',
        hint_hi: 'अज्ञातवास में द्रौपदी।',
        answer: 'Draupadi (as Sairandhri)',
        answer_te: 'ద్రౌపది (సైరంధ్రి రూపంలో)',
        answer_hi: 'द्रौपदी (सैरंध्री रूप में)',
        options: [
          'Draupadi (as Sairandhri)',
          'Queen Sudeshna',
          'Princess Uttara',
          'Hidimbi'
        ],
        options_te: [
          'ద్రౌపది (సైరంధ్రి రూపంలో)',
          'సుధేష్ణ రాణి',
          'ఉత్తర రాజకుమారి',
          'హిడింబి'
        ],
        options_hi: [
          'द्रौपदी (सैरंध्री रूप में)',
          'महारानी सुदेष्णा',
          'राजकुमारी उत्तरा',
          'हिडिम्बा'
        ],
        learnMore: 'Draupadi warned everyone that she was wedded to five invisible celestial Gandharvas who would slay anyone who dared harass her.',
        learnMore_te: 'తనకు ఐదుగురు గంధర్వ భర్తలు ఉన్నారని, తనను కన్నెత్తి చూసినా వారు సంహరిస్తారని ద్రౌపది హెచ్చరించింది.',
        learnMore_hi: 'द्रौपदी ने महल में सबको सचेत कर रखा था कि उनके पांच गंधर्व पति सदैव उनकी रक्षा करते हैं।',
        xpReward: 20
      }
    ]
  },

  // Level 59
  {
    levelNumber: 59,
    partNumber: 6,
    title: 'The Slaying of Keechaka',
    title_te: 'కీచక వధ',
    title_hi: 'कीचक वध और न्याय',
    subtitle: 'The Midnight Wrestling Arena',
    subtitle_te: 'నాట్యశాలలో అర్ధరాత్రి పోరాటం',
    subtitle_hi: 'नाट्यशाला में आधी रात का संहार',
    questions: [
      {
        id: 'q59-1',
        type: 'mcq',
        prompt: 'Who was Keechaka, and why did he become a deadly threat to Queen Draupadi in the Matsya kingdom?',
        prompt_te: 'కీచకుడు ఎవరు, అతడు విరాట నగరంలో ద్రౌపదికి ఎందుకు ప్రాణాంతక ముప్పుగా మారాడు?',
        prompt_hi: 'कीचक कौन था और वह मत्स्य राज्य में द्रौपदी के लिए भयंकर संकट क्यों बन गया?',
        options: [
          'He was King Virata’s commander-in-chief and brother-in-law, who tried to force himself upon Sairandhri (Draupadi)',
          'He was an undercover spy sent by Duryodhana',
          'He was a demon living in the Matsya hills',
          'He was the prime minister of Panchala'
        ],
        options_te: [
          'విరాట రాజు బావమరిది మరియు సర్వ సైన్యాధ్యక్షుడు; సైరంధ్రిపై మోహంతో ఆమెను వేధించాడు',
          'దుర్యోధనుడు పంపిన గూఢచారి',
          'కొండల్లో ఉండే రాక్షసుడు',
          'పాంచాల దేశపు ప్రధానమంత్రి'
        ],
        options_hi: [
          'राजा विराट का साला और अजेय सेनापति, जो सैरंध्री पर कुदृष्टि डालकर उसका शील भंग करना चाहता था',
          'दुर्योधन का गुप्तचर',
          'पर्वत का नरभक्षी राक्षस',
          'हस्तिनापुर का राजदूत'
        ],
        correctIndex: 0,
        learnMore: 'Keechaka held supreme military power in Matsya; when King Virata failed to discipline him, Draupadi wept before Bhima in the royal kitchen.',
        learnMore_te: 'విరాట రాజు కూడా కీచకుడికి భయపడటంతో, ద్రౌపది రాత్రిపూట వంటశాలలో ఉన్న భీముడి వద్దకు వెళ్లి న్యాయం చేయమని రోదించింది.',
        learnMore_hi: 'विराट भी कीचक के भय से मौन रहे; तब द्रौपदी ने आधी रात को रसोई में जाकर भीम से न्याय की गुहार लगाई।',
        xpReward: 10
      },
      {
        id: 'q59-2',
        type: 'true_false',
        prompt: 'Bhima waited disguised as Sairandhri in the dark dance hall at midnight, ambushing Keechaka and rolling his limbs into a ball of flesh with his bare hands.',
        prompt_te: 'చీకటి నాట్యశాలలో సైరంధ్రిలా వేచివున్న భీముడు, కీచకుడిని పట్టి నిలువునా పిసికి మాంసపు ముద్దలా చేసి చంపాడు.',
        prompt_hi: 'आधी रात को नाट्यशाला में सैरंध्री की सेज पर भीम छिपकर बैठे और कीचक के आते ही उसे अपनी भुजाओं से मसलकर मांस का लोथड़ा बना दिया।',
        correctAnswer: true,
        learnMore: 'Bhima left Keechaka without broken bones or outer puncture wounds, making it seem as though invisible celestial Gandharvas had executed him.',
        learnMore_te: 'ఎలాంటి ఆయుధాలు లేకుండా కేవలం చేతులతోనే నలిపేయడం వల్ల గంధర్వులే చంపారనే భ్రమ ప్రజల్లో కలిగింది.',
        learnMore_hi: 'भीम ने उसे बिना किसी अस्त्र के इस प्रकार मसला कि देखने वाले समझे कि सचमुच गंधर्वों ने उसे मार डाला है।',
        xpReward: 10
      },
      {
        id: 'q59-3',
        type: 'riddle',
        prompt: 'When Keechaka’s hundred brothers (Upakeechakas) tied Draupadi to Keechaka’s funeral pyre, I uprooted a tree and annihilated all one hundred of them single-handedly. Who am I?',
        prompt_te: 'కీచకుడితో పాటు ద్రౌపదిని సజీవ దహనం చేయడానికి ప్రయత్నించిన నూరుమంది ఉపకీచకులను చెట్టుతో మోది చంపిన మహావీరుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'कीचक के सौ भाइयों (उपकीचकों) द्वारा द्रौपदी को चिता पर जलाने का प्रयास करने पर अकेले ही एक वृक्ष से उन सबका संहार करने वाला वीर। मैं कौन हूँ?',
        hint: 'The second Pandava disguised as chef Ballava.',
        hint_te: 'వంటవాడైన బల్లవుడు.',
        hint_hi: 'रसोइया बल्लव रूपी भीम।',
        answer: 'Bhima (Ballava)',
        answer_te: 'భీముడు (బల్లవుడు)',
        answer_hi: 'भीम (बल्लव)',
        options: ['Bhima (Ballava)', 'Arjuna', 'Yudhishthira', 'Prince Uttara'],
        options_te: ['భీముడు (బల్లవుడు)', 'అర్జునుడు', 'యుధిష్ఠిరుడు', 'ఉత్తర కుమారుడు'],
        options_hi: ['भीम (बल्लव)', 'अर्जुन', 'युधिष्ठिर', 'राजकुमार उत्तर'],
        learnMore: 'This terrifying exhibition of strength convinced King Virata’s court that Sairandhri was truly protected by divine beings.',
        learnMore_te: 'ఈ భయానక ఘటనతో విరాట నగర ప్రజలంతా సైరంధ్రి పట్ల అత్యంత భయభక్తులతో వ్యవహరించసాగారు.',
        learnMore_hi: 'इस घटना से मत्स्य नगरी में आतंक फैल गया कि सैरंध्री के गंधर्व पति साक्षात काल के समान हैं।',
        xpReward: 20
      }
    ]
  },

  // Level 60
  {
    levelNumber: 60,
    partNumber: 6,
    title: 'The Battle of Virata (Gograhana)',
    title_te: 'ఉత్తర గోగ్రహణం: విరాట యుద్ధం',
    title_hi: 'उत्तर गोग्रहण और विराट युद्ध',
    subtitle: 'Brihannala Retrieves the Gandiva',
    subtitle_te: 'బృహన్నల గాండీవం పట్టడం & సమ్మోహనాస్త్రం',
    subtitle_hi: 'बृहन्नला का पराक्रम और सम्मोहनास्त्र',
    questions: [
      {
        id: 'q60-1',
        type: 'mcq',
        prompt: 'Why did the entire Kaurava army, led by Bhishma, Drona, Karna, and Duryodhana, invade King Virata’s kingdom in the final days of the thirteenth year?',
        prompt_te: 'పదమూడవ ఏడు ముగిసే సమయంలో భీష్మ, ద్రోణ, కర్ణ, దుర్యోధనులతో కూడిన కౌరవ సైన్యం విరాట రాజ్యంపై ఎందుకు దాడి చేసింది?',
        prompt_hi: 'तेरहवें वर्ष के अंतिम दिनों में भीष्म, द्रोण, कर्ण और दुर्योधन सहित समूची कौरव सेना ने मत्स्य देश पर आक्रमण क्यों किया था?',
        options: [
          'To steal Virata’s cattle herds (Gograhana) and smoke out the Pandavas before their incognito year expired',
          'To attend Princess Uttara’s wedding',
          'To conquer the southern ocean ports',
          'To search for medicinal roots'
        ],
        options_te: [
          'విరాట రాజు ఆవులను తోలుకుపోవడానికి (గోగ్రహణం) మరియు అజ్ఞాతవాసం ముగిసేలోపే పాండవులను బయటకు రప్పించడానికి',
          'ఉత్తరా రాకుమారి వివాహానికి హాజరు కావడానికి',
          'దక్షిణ ఓడరేవులను జయించడానికి',
          'మూలికలను వెతకడానికి'
        ],
        options_hi: [
          'विराट की गायों का हरण (गोग्रहण) कर पाण्डवों को बाहर निकलने पर विवश करना ताकि वे पहचाने जाएं',
          'राजकुमारी उत्तरा के विवाह में भाग लेने',
          'समुद्री व्यापार पर अधिकार करने',
          'अकाल के कारण अन्न की खोज में'
        ],
        correctIndex: 0,
        learnMore: 'Suspecting that only Bhima could have crushed Keechaka, Duryodhana launched the cattle raid to expose the Pandavas and force them into another 12 years of exile.',
        learnMore_te: 'కీచకుడిని చంపే శక్తి భీముడికే ఉందని అనుమానించిన దుర్యోధనుడు గోవులను పట్టుకుని యుద్ధం ప్రకటించాడు.',
        learnMore_hi: 'कीचक वध से दुर्योधन को संदेह हो गया था कि पाण्डव मत्स्य देश में ही हैं, इसलिए उसने यह चाल चली।',
        xpReward: 10
      },
      {
        id: 'q60-2',
        type: 'true_false',
        prompt: 'Young Prince Uttara panicked and tried to flee the chariot upon seeing the ocean of Kaurava flags, until Brihannala (Arjuna) ran after him, brought him back, and took charge of the bow.',
        prompt_te: 'కౌరవ సైన్యాన్ని చూసి భయంతో పారిపోతున్న ఉత్తర కుమారుడిని పట్టుకుని తెచ్చి, అర్జునుడు తానే గాండీవాన్ని చేతబూని సారథ్యం చేయమని చెప్పాడు.',
        prompt_hi: 'कौरव सेना के समुद्र को देखकर राजकुमार उत्तर रथ से कूदकर भागने लगा, जिसे अर्जुन ने पकड़कर समझाया और रथ हांकने को कहा।',
        correctAnswer: true,
        learnMore: 'Arjuna guided the chariot to the Shami tree, retrieved his Gandiva bow, celestial quivers, and revealed his true identity to Uttara.',
        learnMore_te: 'జమ్మి చెట్టు నుండి గాండీవాన్ని దించి, తన అసలు రూపాన్ని ఉత్తరుడికి వెల్లడించాడు అర్జునుడు.',
        learnMore_hi: 'अर्जुन ने शमी वृक्ष से गांडीव उतारा और उत्तर को अपना वास्तविक परिचय देकर निर्भय किया।',
        xpReward: 10
      },
      {
        id: 'q60-3',
        type: 'riddle',
        prompt: 'Unleashing the mystical sleep-inducing Sammohanastra on the entire Kaurava army, I knocked Bhishma, Drona, and Duryodhana unconscious and had Prince Uttara collect their colorful silk turbans. Who am I?',
        prompt_te: 'సమ్మోహనాస్త్రాన్ని ప్రయోగించి కౌరవ సేనానాయకులందరినీ నిద్రపుచ్చి, ఉత్తరుడితో వారి తలపాగాలను బొమ్మల కోసం తెప్పించిన వీరుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'सम्मोहनास्त्र चलाकर भीष्म, द्रोण, कर्ण और दुर्योधन को अचेत कर दिया और उत्तर से उनके मुकुट और रंगीन वस्त्र उतरवा लिए। मैं कौन हूँ?',
        hint: 'Completing Part 6 unlocks Bhima’s wallpaper in your gallery!',
        hint_te: 'పార్ట్ 6 పూర్తి చేయడంతో భీముడి వాల్‌పేపర్ అన్‌లాక్ అవుతుంది.',
        hint_hi: 'भाग 6 पूर्ण करने पर महाबली भीम का वॉलपेपर अनलॉक होता है।',
        answer: 'Arjuna (as Brihannala)',
        answer_te: 'అర్జునుడు (బృహన్నల రూపంలో)',
        answer_hi: 'अर्जुन (बृहन्नला रूप में)',
        options: ['Arjuna (as Brihannala)', 'Bhima', 'Prince Uttara', 'Satyaki'],
        options_te: ['అర్జునుడు (బృహన్నల రూపంలో)', 'భీముడు', 'ఉత్తర కుమారుడు', 'సాత్యకి'],
        options_hi: ['अर्जुन (बृहन्नला रूप में)', 'भीम', 'राजकुमार उत्तर', 'सात्यकि'],
        learnMore: 'The thirteen years of exile concluded victoriously: Dharma had triumphed without detection, and the Pandavas emerged unconquered.',
        learnMore_te: 'పదమూడేళ్ల వనవాస, అజ్ఞాతవాసాలు విజయవంతంగా ముగిసి, పాండవులు నిర్భయంగా లోకానికి తమ అస్తిత్వాన్ని ప్రకటించారు.',
        learnMore_hi: 'अज्ञातवास की अवधि निर्विघ्न समाप्त हुई और पाण्डव सत्य व धर्म के बल पर निष्कलंक बाहर आए।',
        xpReward: 20
      }
    ]
  }
];
