import { Level } from '../../types/game';

export const PART_4_LEVELS: Level[] = [
  // Level 31
  {
    levelNumber: 31,
    partNumber: 4,
    title: 'The Division of the Realm',
    title_te: 'రాజ్య విభజన',
    title_hi: 'कुरु साम्राज्य का विभाजन',
    subtitle: 'The Return to Hastinapur & Khandavaprastha',
    subtitle_te: 'హస్తినాపుర పునరాగమనం & ఖాండవప్రస్థ కేటాయింపు',
    subtitle_hi: 'हस्तिनापुर वापसी और खाण्डवप्रस्थ का आवंटन',
    questions: [
      {
        id: 'q31-1',
        type: 'mcq',
        prompt: 'To prevent civil war between the princes, what territory did King Dhritarashtra award to the Pandavas as their half of the kingdom?',
        prompt_te: 'అంతర్యుద్ధాన్ని నివారించడానికి ధృతరాష్ట్ర మహారాజు పాండవులకు తమ రాజ్య భాగంలో ఏ ప్రాంతాన్ని ఇచ్చాడు?',
        prompt_hi: 'गृहयुद्ध से बचने के लिए धृतराष्ट्र ने पाण्डवों को अपने हिस्से के रूप में कौन सा क्षेत्र दिया था?',
        options: [
          'Khandavaprastha (an arid, abandoned wilderness)',
          'The city of Hastinapur itself',
          'The fertile plains of Anga',
          'The coastal port of Dvaraka'
        ],
        options_te: [
          'ఖాండవప్రస్థం (ఎండిపోయిన, కఠినమైన అటవీ ప్రాంతం)',
          'హస్తినాపుర నగర భాగం',
          'అంగరాజ్య సారవంతమైన భూములు',
          'ద్వారకా తీరప్రాంతం'
        ],
        options_hi: [
          'खाण्डवप्रस्थ (एक बीहड़, सूखा और निर्जन वन क्षेत्र)',
          'मूल हस्तिनापुर राजधानी',
          'अंग देश के उपजाऊ मैदान',
          'द्वारका का समृद्ध तट'
        ],
        correctIndex: 0,
        learnMore: 'Duryodhana intended to marginalize the Pandavas by exiling them to a barren wasteland, but their virtue transformed it into heaven on earth.',
        learnMore_te: 'పాండవులు అక్కడే క్షీణించిపోవాలని దుర్యోధనుడు పాడుబడిన అడవిని ఇప్పించాడు; కానీ పాండవులు దానిని స్వర్గంగా మార్చారు.',
        learnMore_hi: 'कौरवों का विचार था कि पाण्डव उस बंजर भूमि में कुछ नहीं कर पाएंगे, किंतु पाण्डवों ने उसे स्वर्गोपम बना दिया।',
        xpReward: 10
      },
      {
        id: 'q31-2',
        type: 'true_false',
        prompt: 'Grandsire Bhishma and Mahatma Vidura strongly urged Dhritarashtra to welcome the Pandavas back and grant them their rightful half of the empire.',
        prompt_te: 'పాండవులను సగౌరవంగా ఆహ్వానించి, వారికి దక్కాల్సిన న్యాయమైన సగం రాజ్యాన్ని ఇవ్వాలని భీష్ముడు, విదురుడు ధృతరాష్ట్రుడికి హితవు పలికారు.',
        prompt_hi: 'पितामह भीष्म और महात्मा विदुर ने धृतराष्ट्र को पाण्डवों को उनका वैध आधा राज्य सौंपने का स्पष्ट परामर्श दिया था।',
        correctAnswer: true,
        learnMore: 'Recognizing that the Pandavas were backed by King Drupada and Lord Krishna, Dhritarashtra had no choice but to negotiate.',
        learnMore_te: 'పాంచాల, యాదవ కూటముల అండ చూసి ధృతరాష్ట్రుడు రాజ్య విభజనకు అంగీకరించక తప్పలేదు.',
        learnMore_hi: 'द्रुपद और यादवों की शक्ति देखकर धृतराष्ट्र को समझ आ गया था कि पाण्डवों को उनका अधिकार देना ही पड़ेगा।',
        xpReward: 10
      },
      {
        id: 'q31-3',
        type: 'riddle',
        prompt: 'Sent by Dhritarashtra to Kampilya with priceless jewels to escort Queen Kunti, Draupadi, and the five princes back to the capital. Who am I?',
        prompt_te: 'ధృతరాష్ట్రుడి ఆదేశంతో కాంపిల్య నగరానికి వెళ్లి కుంతిని, ద్రౌపదిని, పాండవులను గౌరవంగా హస్తినాపురానికి తోడ్కొని వచ్చిన మంత్రిని నేను. నేను ఎవరిని?',
        prompt_hi: 'धृतराष्ट्र के आदेश पर बहुमूल्य उपहार लेकर द्रुपद के महल पहुंचे और पाण्डवों को ससम्मान लेकर लौटे। मैं कौन हूँ?',
        hint: 'The uncle of the Pandavas and incarnation of Dharma.',
        hint_te: 'పాండవుల పినతండ్రి మరియు ధర్మమూర్తి.',
        hint_hi: 'पाण्डवों के परम हितैषी विदुर।',
        answer: 'Mahatma Vidura',
        answer_te: 'మహాత్మా విదురుడు',
        answer_hi: 'महात्मा विदुर',
        options: ['Mahatma Vidura', 'Sanjaya', 'Kripa', 'Duryodhana'],
        options_te: ['మహాత్మా విదురుడు', 'సంజయుడు', 'కృపాచార్యుడు', 'దుర్యోధనుడు'],
        options_hi: ['महात्मा विदुर', 'संजय', 'कृपाचार्य', 'दुर्योधन'],
        learnMore: 'Vidura embraced the princes with tears of joy, witnessing righteousness preserved through their divine escape.',
        learnMore_te: 'విదురుడు ఆనందబాష్పాలతో పాండవులను కౌగిలించుకుని వారికి శుభాశీస్సులు అందించాడు.',
        learnMore_hi: 'विदुर ने पाण्डवों को जीवित देखकर अत्यंत भावुक होकर गले लगाया और उनका स्वागत किया।',
        xpReward: 20
      }
    ]
  },

  // Level 32
  {
    levelNumber: 32,
    partNumber: 4,
    title: 'The Rise of Indraprastha',
    title_te: 'ఇంద్రప్రస్థ నగర నిర్మాణం',
    title_hi: 'इंद्रप्रस्थ का स्वर्णिम उत्थान',
    subtitle: 'From Wilderness to Celestial Metropolis',
    subtitle_te: 'అడవి నుండి అమరావతి వంటి రాజధానిగా',
    subtitle_hi: 'अमरावती जैसा भव्य नगर',
    questions: [
      {
        id: 'q32-1',
        type: 'mcq',
        prompt: 'Which divine architect joined forces with Maya Danava under Lord Krishna’s guidance to build the majestic city of Indraprastha?',
        prompt_te: 'శ్రీకృష్ణుడి మార్గదర్శకత్వంలో ఇంద్రప్రస్థ మహానగరాన్ని నిర్మించిన దేవ శిల్పి ఎవరు?',
        prompt_hi: 'श्रीकृष्ण के मार्गदर्शन में मय दानव के साथ मिलकर इंद्रप्रस्थ को देवलोक जैसा स्वरूप देने वाले देवशिल्पी कौन थे?',
        options: ['Vishwakarma', 'Kuber', 'Yama', 'Brihaspati'],
        options_te: ['విశ్వకర్మ', 'కుబేరుడు', 'యముడు', 'బృహస్పతి'],
        options_hi: ['विश्वकर्मा', 'कुबेर', 'यमराज', 'देवगुरु बृहस्पति'],
        correctIndex: 0,
        learnMore: 'Vishwakarma (divine architect of gods) and Maya Danava (architect of asuras) designed wide boulevards, crystal moats, and jewel-encrusted ramparts.',
        learnMore_te: 'విశ్వకర్మ మరియు మయదానవుడు కలిసి నిర్మించిన ఇంద్రప్రస్థం దేవేంద్రుడి అమరావతిని తలపించింది.',
        learnMore_hi: 'देवशिल्पी विश्वकर्मा और मय दानव ने इंद्रप्रस्थ में चौड़ी सड़कें, भव्य प्रासाद और जल-युक्त खाइयां बनाईं।',
        xpReward: 10
      },
      {
        id: 'q32-2',
        type: 'true_false',
        prompt: 'Indraprastha was named in honor of Lord Indra, who sent the celestials to shower fragrant blossoms upon the new capital.',
        prompt_te: 'దేవేంద్రుడి గౌరవార్థం ఈ నగరానికి "ఇంద్రప్రస్థం" అని పేరు పెట్టారు.',
        prompt_hi: 'देवराज इंद्र के सम्मान में इस नगरी का नाम "इंद्रप्रस्थ" रखा गया था।',
        correctAnswer: true,
        learnMore: 'Indra was delighted by the city’s piety and prosperity, bestowing continuous rain and abundant harvests upon the realm.',
        learnMore_te: 'నగర సౌందర్యానికి, పాండవుల ధర్మానికి మెచ్చిన ఇంద్రుడు సకాలంలో వర్షాలు కురిసేలా ఆశీర్వదించాడు.',
        learnMore_hi: 'इंद्रप्रस्थ की समृद्धि और धर्म-परायणता देखकर देवराज इंद्र ने वहां सदैव खुशहाली का वरदान दिया।',
        xpReward: 10
      },
      {
        id: 'q32-3',
        type: 'riddle',
        prompt: 'Rescued by Arjuna during the burning of Khandava forest, I built the miraculous Palace of Illusions (Maya Sabha) for King Yudhishthira. Who am I?',
        prompt_te: 'ఖాండవ దహన సమయంలో అర్జునుడి చేత కాపాడబడి, యుధిష్ఠిరుడి కోసం మాయాసభను నిర్మించిన అద్భుత శిల్పిని నేను. నేను ఎవరిని?',
        prompt_hi: 'खाण्डव वन दहन के समय अर्जुन द्वारा प्राणदान पाने पर मैंने कृतज्ञतावश युधिष्ठिर के लिए अद्भुत मय-सभा का निर्माण किया। मैं कौन हूँ?',
        hint: 'The master architect of the Danavas.',
        hint_te: 'దానవ శిల్పి.',
        hint_hi: 'दानवों के महान शिल्पी।',
        answer: 'Maya Danava',
        answer_te: 'మయదానవుడు',
        answer_hi: 'मय दानव',
        options: ['Maya Danava', 'Vishwakarma', 'Purochana', 'Nala'],
        options_te: ['మయదానవుడు', 'విశ్వకర్మ', 'పురోచనుడు', 'నలుడు'],
        options_hi: ['मय दानव', 'विश्वकर्मा', 'पुरोचन', 'नल'],
        learnMore: 'Maya Danava’s palace featured floors resembling water and pools resembling polished stone, confounding visitors.',
        learnMore_te: 'మయసభలో నీరు ఉన్నచోట నేలలాగా, నేల ఉన్నచోట నీరులాగా కనిపించే అద్భుతమైన భ్రమలు ఉండేవి.',
        learnMore_hi: 'मय सभा के फर्श इतने स्वच्छ थे कि स्थल जल जैसा और जल स्थल जैसा प्रतीत होता था।',
        xpReward: 20
      }
    ]
  },

  // Level 33
  {
    levelNumber: 33,
    partNumber: 4,
    title: 'The Burning of Khandava',
    title_te: 'ఖాండవ వన దహనం',
    title_hi: 'खाण्डव वन दहन और गांडीव प्राप्ति',
    subtitle: 'Agni’s Feast & Celestial Weapons',
    subtitle_te: 'అగ్నిదేవుడి ఆకలి & గాండీవ ధనుస్సు',
    subtitle_hi: 'अग्निदेव की तृप्ति और दिव्य रथ',
    questions: [
      {
        id: 'q33-1',
        type: 'mcq',
        prompt: 'Which divine bow and inexhaustible pair of quivers (Akshaya Tunira) did Lord Varuna gift to Arjuna during the Khandava burning?',
        prompt_te: 'ఖాండవ వన దహన సమయంలో వరుణ దేవుడు అర్జునుడికి బహుకరించిన ప్రసిద్ధ దివ్య ధనుస్సు ఏది?',
        prompt_hi: 'खाण्डव वन दहन के समय वरुण देव ने अर्जुन को कौन सा अलौकिक धनुष और अक्षय तरकश प्रदान किए?',
        options: [
          'The Gandiva Bow',
          'The Vijaya Bow',
          'The Pinaka Bow',
          'The Sharanga Bow'
        ],
        options_te: [
          'గాండీవ ధనుస్సు',
          'విజయ ధనుస్సు',
          'పినాక ధనుస్సు',
          'శారంగ ధనుస్సు'
        ],
        options_hi: [
          'गांडीव धनुष',
          'विजय धनुष',
          'पिनाक धनुष',
          'शारंग धनुष'
        ],
        correctIndex: 0,
        learnMore: 'The Gandiva bow was crafted by Lord Brahma; no celestial weapon could shatter it, and its twang struck terror into enemy hearts.',
        learnMore_te: 'బ్రహ్మదేవుడు నిర్మించిన గాండీవ ధనుస్సు శత్రువుల గుండెల్లో సింహస్వప్నంగా నిలిచింది.',
        learnMore_hi: 'गांडीव धनुष को ब्रह्माजी ने बनाया था; इसकी टंकार से दिशाएं गूंज उठती थीं।',
        xpReward: 10
      },
      {
        id: 'q33-2',
        type: 'true_false',
        prompt: 'Lord Krishna received the invincible Sudarshana Chakra and the Kaumodaki mace from Agni and Varuna during the Khandava episode.',
        prompt_te: 'ఖాండవ దహన సమయంలో శ్రీకృష్ణుడు సుదర్శన చక్రం మరియు కౌమోదకి గదను పొందాడు.',
        prompt_hi: 'खाण्डव दहन के समय श्रीकृष्ण को अमोघ सुदर्शन चक्र और कौमोदकी गदा प्राप्त हुई थी।',
        correctAnswer: true,
        learnMore: 'With the Sudarshana Chakra in Krishna’s hand and Gandiva in Arjuna’s, the duo became invincible across all planes of existence.',
        learnMore_te: 'కృష్ణుడి చేతిలో సుదర్శన చక్రం, అర్జునుడి చేతిలో గాండీవం ఉండటంతో ఈ నర-నారాయణులు అజేయులయ్యారు.',
        learnMore_hi: 'सुदर्शन चक्र और गांडीव के साथ कृष्ण और अर्जुन की जोड़ी तीनों लोकों में अजेय हो गई।',
        xpReward: 10
      },
      {
        id: 'q33-3',
        type: 'riddle',
        prompt: 'Flying upon the banner of Arjuna’s celestial chariot (Kapi Dhwaja) gifted by Agni, my cosmic presence infused the Pandavas with boundless courage. Who am I?',
        prompt_te: 'అర్జునుడి రథంపై ధ్వజమై వెలిసి, శత్రువులను గర్జనలతో భయపెట్టిన చిరంజీవిని నేను. నేను ఎవరిని?',
        prompt_hi: 'अर्जुन के रथ की ध्वजा पर विराजमान होकर गर्जना करने वाले महाबली चिरंजीवी। मैं कौन हूँ?',
        hint: 'Son of Vayu and supreme devotee of Lord Rama.',
        hint_te: 'రామభక్తుడు, వాయుపుత్రుడు.',
        hint_hi: 'पवनपुत्र, श्री राम के परम भक्त।',
        answer: 'Lord Hanuman (Kapi Dhwaja)',
        answer_te: 'భగవాన్ హనుమంతుడు',
        answer_hi: 'भगवान हनुमान',
        options: ['Lord Hanuman (Kapi Dhwaja)', 'Garuda', 'Nandi', 'Jatayu'],
        options_te: ['భగవాన్ హనుమంతుడు', 'గరుత్మంతుడు', 'నందీశ్వరుడు', 'జటాయువు'],
        options_hi: ['भगवान हनुमान', 'गरुड़', 'नंदी', 'जटायु'],
        learnMore: 'Arjuna’s chariot was named "Kapi Dhwaja" because Lord Hanuman Himself graced its victorious golden banner.',
        learnMore_te: 'హనుమంతుడు రథ పతాకంపై ఉన్నందువల్లనే అర్జునుడికి "కపిధ్వజుడు" అనే పేరు వచ్చింది.',
        learnMore_hi: 'हनुमान जी के ध्वज पर विराजने के कारण अर्जुन को "कपिध्वज" कहा गया।',
        xpReward: 20
      }
    ]
  },

  // Level 34
  {
    levelNumber: 34,
    partNumber: 4,
    title: 'Arjuna’s Sacred Pilgrimage',
    title_te: 'అర్జునుడి తీర్థయాత్ర',
    title_hi: 'अर्जुन की तीर्थयात्रा और सुभद्रा-परिणय',
    subtitle: 'Vow of Celibacy & The Abduction of Subhadra',
    subtitle_te: 'తీర్థయాత్రలు & సుభద్ర వివాహం',
    subtitle_hi: 'उलूपी, चित्रांगदा और सुभद्रा हरण',
    questions: [
      {
        id: 'q34-1',
        type: 'mcq',
        prompt: 'Why did Arjuna voluntarily undertake a twelve-year pilgrimage of celibacy across Aryavarta?',
        prompt_te: 'అర్జునుడు పన్నెండేళ్ల పాటు బ్రహ్మచర్యంతో కూడిన తీర్థయాత్రను ఎందుకు చేపట్టాడు?',
        prompt_hi: 'अर्जुन ने स्वेच्छा से बारह वर्षों की कठिन तीर्थयात्रा का व्रत क्यों धारण किया था?',
        options: [
          'To uphold the brothers’ code after entering the weapon room while Yudhishthira and Draupadi were seated inside, to retrieve weapons for a weeping Brahmin',
          'He was exiled by King Dhritarashtra',
          'Guru Drona ordered it as penance',
          'He wanted to learn dancing in heaven'
        ],
        options_te: [
          'బాధిత బ్రాహ్మణుడి గోవులను రక్షించడానికి ఆయుధాలు తీసుకోవడానికి వెళ్లి, నిబంధన ప్రకారం యుధిష్ఠిరుడు-ద్రౌపది ఉన్న గదిలోకి ప్రవేశించినందుకు',
          'ధృతరాష్ట్రుడు బహిష్కరించినందుకు',
          'ద్రోణాచార్యుడు శిక్ష విధించినందుకు',
          'స్వర్గంలో నాట్యం నేర్చుకోవడానికి'
        ],
        options_hi: [
          'एक पीड़ित ब्राह्मण की गायों की रक्षा हेतु शस्त्र लेने के लिए नियम भंग कर द्रौपदी और युधिष्ठिर के कक्ष में प्रवेश करने के कारण',
          'धृतराष्ट्र द्वारा निष्कासित किए जाने पर',
          'द्रोणाचार्य के कठोर आदेश पर',
          'स्वर्ग में नृत्य सीखने की इच्छा से'
        ],
        correctIndex: 0,
        learnMore: 'Even though Yudhishthira excused him because he acted to protect a citizen, Arjuna refused any compromise on Dharma and departed immediately.',
        learnMore_te: 'ధర్మరాజు క్షమించినప్పటికీ, ధర్మ నియమాన్ని గౌరవించి అర్జునుడు స్వచ్ఛందంగా యాత్రకు బయలుదేరాడు.',
        learnMore_hi: 'युधिष्ठिर के मना करने पर भी अर्जुन ने नियम की पवित्रता बनाए रखने के लिए यह तपस्या स्वीकार की।',
        xpReward: 10
      },
      {
        id: 'q34-2',
        type: 'true_false',
        prompt: 'With Lord Krishna’s secret blessing and counsel, Arjuna carried away Princess Subhadra in a chariot from Mount Raivataka in Dvaraka.',
        prompt_te: 'శ్రీకృష్ణుడి సలహాతో రైవతక పర్వతం వద్ద నుండి అర్జునుడు సుభద్రను రథంపై తీసుకువెళ్లి వివాహం చేసుకున్నాడు.',
        prompt_hi: 'श्रीकृष्ण की गुप्त सहमति और परामर्श से अर्जुन ने रैवतक पर्वत के उत्सव से सुभद्रा का क्षत्रिय रीति से हरण किया।',
        correctAnswer: true,
        learnMore: 'Krishna advised that for a heroic Kshatriya, winning a willing bride by open valor is celebrated as the highest code.',
        learnMore_te: 'శ్రీకృష్ణుడు స్వయంగా సుభద్రకు అర్జునుడి పట్ల ఉన్న ప్రేమను గుర్తించి ఈ వివాహాన్ని ప్రోత్సహించాడు.',
        learnMore_hi: 'श्रीकृष्ण ने बलराम के विरोध के बावजूद इस विवाह का समर्थन किया क्योंकि सुभद्रा भी अर्जुन को चाहती थीं।',
        xpReward: 10
      },
      {
        id: 'q34-3',
        type: 'riddle',
        prompt: 'The warrior princess of Manipur who wed Arjuna during his pilgrimage and bore the fearless prince Babruvahana. Who am I?',
        prompt_te: 'తీర్థయాత్రలో అర్జునుడిని వివాహం చేసుకుని, బబ్రువాహనుడు అనే వీరపుత్రుడికి జన్మనిచ్చిన మణిపుర రాకుమారిని నేను. నేను ఎవరిని?',
        prompt_hi: 'मणिपुर की वीरांगना राजकुमारी, जिसने तीर्थयात्रा के दौरान अर्जुन से विवाह किया और बभ्रुवाहन की माता बनीं। मैं कौन हूँ?',
        hint: 'Princess of the eastern kingdom of Manipur.',
        hint_te: 'మణిపూర్ యువరాణి.',
        hint_hi: 'मणिपुर नरेश चित्रवाहन की वीर पुत्री।',
        answer: 'Princess Chitrangada',
        answer_te: 'చిత్రాంగద రాకుమారి',
        answer_hi: 'राजकुमारी चित्रांगदा',
        options: ['Princess Chitrangada', 'Ulupi', 'Subhadra', 'Devika'],
        options_te: ['చిత్రాంగద రాకుమారి', 'ఉలూపి', 'సుభద్ర', 'దేవిక'],
        options_hi: ['राजकुमारी चित्रांगदा', 'उलूपी', 'सुभद्रा', 'देविका'],
        learnMore: 'Arjuna also wed the Naga princess Ulupi, who bore prince Iravan, another valiant warrior of the epic.',
        learnMore_te: 'అర్జునుడు నాగకన్య ఉలూపిని కూడా వివాహం చేసుకున్నాడు; వారి కుమారుడే ఇరావంతుడు.',
        learnMore_hi: 'अर्जुन ने नागकन्या उलूपी से भी विवाह किया था, जिनसे इरावान् का जन्म हुआ।',
        xpReward: 20
      }
    ]
  },

  // Level 35
  {
    levelNumber: 35,
    partNumber: 4,
    title: 'The Young Lion: Abhimanyu',
    title_te: 'వీర కుమారుడు అభిమన్యుడు',
    title_hi: 'वीर बालक अभिमन्यु',
    subtitle: 'Knowledge Imbibed in the Womb',
    subtitle_te: 'గర్భస్థ శిశువుగా యుద్ధ విద్య గ్రహణం',
    subtitle_hi: 'गर्भ में सीखी चक्रव्यूह की विद्या',
    questions: [
      {
        id: 'q35-1',
        type: 'mcq',
        prompt: 'How did young Abhimanyu learn the secret art of penetrating the impenetrable Chakravyuha (circular military labyrinth)?',
        prompt_te: 'చక్రవ్యూహాన్ని ఛేదించే రహస్యాన్ని చిన్ననాటి అభిమన్యుడు ఎలా నేర్చుకున్నాడు?',
        prompt_hi: 'बालक अभिमन्यु ने चक्रव्यूह को भेदने की अत्यंत गुप्त विद्या कैसे सीखी थी?',
        options: [
          'While in his mother Subhadra’s womb as Arjuna narrated the strategy to her',
          'From Guru Dronacharya in childhood',
          'By reading secret military scrolls',
          'From Lord Krishna at Kurukshetra'
        ],
        options_te: [
          'తల్లి సుభద్ర గర్భంలో ఉండగానే అర్జునుడు ఆమెకు వివరిస్తుండగా విని',
          'బాల్యంలో ద్రోణాచార్యుడి వద్ద నేర్చుకుని',
          'రహస్య యుద్ధ గ్రంథాలు చదివి',
          'కురుక్షేత్రంలో శ్రీకృష్ణుడి వద్ద విని'
        ],
        options_hi: [
          'माता सुभद्रा के गर्भ में रहते हुए, जब अर्जुन सुभद्रा को चक्रव्यूह भेदन का रहस्य सुना रहे थे',
          'द्रोणाचार्य से गुरुकुल में',
          'प्राचीन युद्ध-ग्रंथों को पढ़कर',
          'कुरुक्षेत्र में श्रीकृष्ण के उपदेश से'
        ],
        correctIndex: 0,
        learnMore: 'Before Arjuna could explain how to exit the labyrinth, Subhadra fell asleep, leaving Abhimanyu knowing only how to enter, but not how to break out.',
        learnMore_te: 'వ్యూహం నుండి బయటకు వచ్చే విధానం చెప్పకముందే సుభద్ర నిద్రపోవడంతో అభిమన్యుడికి వ్యూహంలోకి ప్రవేశించడం మాత్రమే తెలిసింది.',
        learnMore_hi: 'चक्रव्यूह से बाहर निकलने का रहस्य बताने से पूर्व ही सुभद्रा सो गईं, जिससे अभिमन्यु केवल प्रवेश करना सीख सके।',
        xpReward: 10
      },
      {
        id: 'q35-2',
        type: 'true_false',
        prompt: 'Abhimanyu spent his youth in Dvaraka, trained in martial mastery directly under Lord Krishna, Balarama, and Pradyumna.',
        prompt_te: 'ద్వారకలో పెరిగిన అభిమన్యుడు శ్రీకృష్ణుడు, బలరాముడు మరియు ప్రద్యుమ్నుల వద్ద సమగ్ర యుద్ధ విద్యలను అభ్యసించాడు.',
        prompt_hi: 'अभिमन्यु का बाल्यकाल द्वारका में बीता, जहां उन्हें श्रीकृष्ण, बलराम और प्रद्युम्न से युद्धकला की दीक्षा मिली।',
        correctAnswer: true,
        learnMore: 'Abhimanyu grew to possess the valor of Arjuna, the wisdom of Krishna, and the strength of Bhima.',
        learnMore_te: 'అభిమన్యుడు అర్జునుడి ధనుర్విద్యను, శ్రీకృష్ణుడి బుద్ధిని, భీముడి పరాక్రమాన్ని పుణికిపుచ్చుకున్నాడు.',
        learnMore_hi: 'अभिमन्यु में अर्जुन का शौर्य और श्रीकृष्ण की तेजस्विता समाहित थी।',
        xpReward: 10
      },
      {
        id: 'q35-3',
        type: 'riddle',
        prompt: 'Beloved sister of Krishna and Balarama, mother of heroic Abhimanyu and wife of Arjuna. Who am I?',
        prompt_te: 'కృష్ణ బలరాముల ప్రియ సోదరి, వీర అభిమన్యుడి తల్లి, అర్జునుడి ధర్మపత్నిని నేను. నేను ఎవరిని?',
        prompt_hi: 'श्रीकृष्ण और बलराम की लाड़ली बहन, वीर अभिमन्यु की माता और अर्जुन की पत्नी। मैं कौन हूँ?',
        hint: 'Princess of the Vrishnis.',
        hint_te: 'వృష్టి వంశపు రాజకుమారి.',
        hint_hi: 'द्वारका की राजकुमारी।',
        answer: 'Princess Subhadra',
        answer_te: 'సుభద్రా దేవి',
        answer_hi: 'सुभद्रा',
        options: ['Princess Subhadra', 'Rukmini', 'Satyabhama', 'Uttara'],
        options_te: ['సుభద్రా దేవి', 'రుక్మిణీ దేవి', 'సత్యభామ', 'ఉత్తర'],
        options_hi: ['सुभद्रा', 'रुक्मिणी', 'सत्यभामा', 'उत्तरा'],
        learnMore: 'Subhadra was welcomed into Indraprastha by Queen Draupadi with immense love and sisterly affection.',
        learnMore_te: 'ద్రౌపది సుభద్రను తన సొంత చెల్లెలిలా ప్రేమించి ఆదరించింది.',
        learnMore_hi: 'द्रौपदी ने सुभद्रा का इंद्रप्रस्थ में सगी बहन की भांति प्रेमपूर्वक स्वागत किया।',
        xpReward: 20
      }
    ]
  },

  // Level 36
  {
    levelNumber: 36,
    partNumber: 4,
    title: 'The Vow of Rajasuya',
    title_te: 'రాజసూయ యాగ సంకల్పం',
    title_hi: 'राजसूय यज्ञ का संकल्प',
    subtitle: 'Sage Narada’s Message from Heaven',
    subtitle_te: 'నారద మహర్షి సందేశం & సామ్రాజ్య విస్తరణ',
    subtitle_hi: 'देवर्षि नारद का संदेश और धर्म-साम्राज्य',
    questions: [
      {
        id: 'q36-1',
        type: 'mcq',
        prompt: 'What celestial message did the wandering Sage Narada deliver to King Yudhishthira from his deceased father Pandu in heaven?',
        prompt_te: 'స్వర్గంలో ఉన్న తండ్రి పాండురాజు నుండి నారద మహర్షి యుధిష్ఠిరుడికి అందించిన సందేశం ఏమిటి?',
        prompt_hi: 'स्वर्ग से देवर्षि नारद ने पाण्डु का क्या संदेश महाराज युधिष्ठिर तक पहुंचाया था?',
        options: [
          'Perform the prestigious Rajasuya Yajna so that King Pandu could attain the highest heavenly realm of Indra',
          'Abandon Indraprastha and return to the forest',
          'Wage war against Dvaraka',
          'Build a golden pyramid'
        ],
        options_te: [
          'రాజసూయ యాగం చేసి సామ్రాజ్యాధిపతివైతే తండ్రి పాండురాజుకు ఇంద్రలోకంలో శాశ్వత స్థానం లభిస్తుంది',
          'ఇంద్రప్రస్థాన్ని వదిలి అడవులకు వెళ్ళాలి',
          'ద్వారకపై దాడి చేయాలి',
          'బంగారు పిరమిడ్ నిర్మించాలి'
        ],
        options_hi: [
          'राजसूय यज्ञ संपन्न करें ताकि पाण्डु को इंद्रलोक के उच्च पद की प्राप्ति हो सके',
          'इंद्रप्रस्थ छोड़कर संन्यास ले लें',
          'हस्तिनापुर पर आक्रमण कर दें',
          'स्वर्ण का विशाल मंदिर बनाएं'
        ],
        correctIndex: 0,
        learnMore: 'Pandu informed Narada that a king whose sons perform the Rajasuya elevates his departed ancestors to the highest heavenly spheres.',
        learnMore_te: 'పుత్రులు చేసే రాజసూయ యాగం ద్వారా పితృదేవతలకు సద్గతులు కలుగుతాయని నారదుడు వివరించాడు.',
        learnMore_hi: 'पुत्र द्वारा राजसूय यज्ञ किए जाने से पितरों को देवराज इंद्र के समान परम पद प्राप्त होता है।',
        xpReward: 10
      },
      {
        id: 'q36-2',
        type: 'true_false',
        prompt: 'Lord Krishna advised Yudhishthira that the Rajasuya could not be accomplished without first subduing the tyrant King Jarasandha of Magadha.',
        prompt_te: 'మగధ దేశపు క్రూర పాలకుడైన జరాసంధుడిని ఓడించకుండా రాజసూయ యాగాన్ని పూర్తి చేయడం అసాధ్యమని శ్రీకృష్ణుడు చెప్పాడు.',
        prompt_hi: 'श्रीकृष्ण ने स्पष्ट किया कि मगध के अत्याचारी राजा जरासंध का अंत किए बिना राजसूय यज्ञ कभी सफल नहीं हो सकता।',
        correctAnswer: true,
        learnMore: 'Jarasandha had defeated and imprisoned eighty-six kings in his dungeons, intending to sacrifice one hundred rulers to Lord Shiva.',
        learnMore_te: 'జరాసంధుడు ఎనభై ఆరుగురు రాజులను బంధించి, నూరుమంది రాజులను నరబలి ఇవ్వాలని చూస్తున్నాడు.',
        learnMore_hi: 'जरासंध ने 86 राजाओं को बंदी बना रखा था और 100 राजाओं की बलि देकर रुद्र यज्ञ करना चाहता था।',
        xpReward: 10
      },
      {
        id: 'q36-3',
        type: 'riddle',
        prompt: 'Traversing the worlds with Veena in hand, singing the praises of Narayana and instigating divine events that steer cosmic destiny. Who am I?',
        prompt_te: 'చేతిలో మహతీ వీణను మీటుతూ, నారాయణ నామస్మరణ చేస్తూ లోకాల మధ్య తిరిగే బ్రహ్మర్షిని నేను. నేను ఎవరిని?',
        prompt_hi: 'हाथ में वीणा लिए "नारायण-नारायण" का जप करते हुए तीनों लोकों में विचरण करने वाले देवर्षि। मैं कौन हूँ?',
        hint: 'The divine messenger sage.',
        hint_te: 'దేవర్షి.',
        hint_hi: 'देवताओं के ऋषि।',
        answer: 'Deva Rishi Narada',
        answer_te: 'దేవర్షి నారదుడు',
        answer_hi: 'देवर्षि नारद',
        options: ['Deva Rishi Narada', 'Sage Vyasa', 'Sage Vashishta', 'Sage Durvasa'],
        options_te: ['దేవర్షి నారదుడు', 'వేదవ్యాసుడు', 'వశిష్ఠ మహర్షి', 'దుర్వాస మహర్షి'],
        options_hi: ['देवर्षि नारद', 'महर्षि वेदव्यास', 'महर्षि वशिष्ठ', 'महर्षि दुर्वासा'],
        learnMore: 'Narada’s counsel inspired Yudhishthira to embark on the historic quest to establish universal Dharma.',
        learnMore_te: 'నారదుడి ఉపదేశం రాజసూయ యాగ సంకల్పానికి, తద్వారా అధర్మ నాశనానికి నాంది పలికింది.',
        learnMore_hi: 'नारद जी की प्रेरणा से ही धर्मराज युधिष्ठिर ने आर्यावर्त को एक छत्र तले लाने का संकल्प लिया।',
        xpReward: 20
      }
    ]
  },

  // Level 37
  {
    levelNumber: 37,
    partNumber: 4,
    title: 'The Slaying of Jarasandha',
    title_te: 'జరాసంధ వధ',
    title_hi: 'जरासंध का वध',
    subtitle: 'Disguised Brahmins & The Torn Giant',
    subtitle_te: 'బ్రాహ్మణ వేషం & చీల్చబడిన దేహం',
    subtitle_hi: 'द्वंद्वयुद्ध और चीरकर फेंका गया शरीर',
    questions: [
      {
        id: 'q37-1',
        type: 'mcq',
        prompt: 'In what disguise did Lord Krishna, Bhima, and Arjuna enter the fortified capital of Girivraja in Magadha?',
        prompt_te: 'శ్రీకృష్ణుడు, భీముడు మరియు అర్జునులు మగధ రాజధాని గిరివ్రజంలోకి ఏ వేషంలో ప్రవేశించారు?',
        prompt_hi: 'श्रीकृष्ण, भीम और अर्जुन ने मगध की राजधानी गिरिव्रज में किस भेष में प्रवेश किया था?',
        options: [
          'Snataka Brahmins (ascetic scholars wearing sacred grass)',
          'Wealthy merchants selling gems',
          'Traveling royal musicians',
          'Gandhara messengers'
        ],
        options_te: [
          'స్నాతక బ్రాహ్మణుల వేషంలో (దర్భలు ధరించిన విప్రులుగా)',
          'రత్నాలు అమ్మే వ్యాపారులుగా',
          'సంచార సంగీతకారులుగా',
          'గాంధార దేశపు దూతలుగా'
        ],
        options_hi: [
          'स्नातक संन्यासी ब्राह्मणों के रूप में',
          'रत्न व्यापारी बनकर',
          'गायक और नर्तक बनकर',
          'हस्तिनापुर के दूत बनकर'
        ],
        correctIndex: 0,
        learnMore: 'Though disguised as peaceful Brahmins, Jarasandha noticed their muscular shoulders calloused from bowstrings and recognized them as Kshatriyas.',
        learnMore_te: 'బ్రాహ్మణ వేషంలో ఉన్నా వారి భుజాలపై ఉన్న బాణాల రాపిడి గుర్తులను చూసి క్షత్రియులని జరాసంధుడు గుర్తించాడు.',
        learnMore_hi: 'जरासंध ने उनके बाहुबल और धनुष की प्रत्यंचा के निशान देखकर भांप लिया कि ये ब्राह्मण नहीं क्षत्रिय हैं।',
        xpReward: 10
      },
      {
        id: 'q37-2',
        type: 'true_false',
        prompt: 'Bhima and Jarasandha engaged in an uninterrupted hand-to-hand wrestling duel that lasted fourteen continuous days and nights.',
        prompt_te: 'భీముడు మరియు జరాసంధుల మధ్య పద్నాలుగు రోజుల పాటు ఎడతెరిపి లేకుండా భీకర మల్లయుద్ధం సాగింది.',
        prompt_hi: 'भीम और जरासंध के बीच लगातार चौदह दिन और रात तक बिना रुके भीषण मल्ल-युद्ध चलता रहा।',
        correctAnswer: true,
        learnMore: 'On the fourteenth night, Jarasandha grew exhausted, giving Bhima the opportunity to finish the contest.',
        learnMore_te: 'పద్నాలుగో రాత్రికి జరాసంధుడు అలసిపోవడంతో శ్రీకృష్ణుడి సూచనతో భీముడు అతడిని అంతం చేశాడు.',
        learnMore_hi: 'चौदहवें दिन जरासंध की शक्ति क्षीण होने लगी, जिससे भीम को निर्णायक प्रहार का अवसर मिला।',
        xpReward: 10
      },
      {
        id: 'q37-3',
        type: 'riddle',
        prompt: 'To show Bhima how to kill Jarasandha whose two halves kept magically rejoining, I picked up a twig, split it down the middle, and tossed the halves in opposite directions. Who am I?',
        prompt_te: 'జరాసంధుడి శరీరం రెండు భాగాలుగా చీల్చినా మళ్ళీ అతుక్కుపోతుంటే, ఒక గడ్డిపరకను చీల్చి ఎదురెదురు దిశల్లో పడేసి మార్గం చూపిన దేవుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'जरासंध के दो फाड़ शरीर को जुड़ने से रोकने के लिए मैंने तिनका चीरकर विपरीत दिशाओं में फेंकने का गुप्त संकेत दिया। मैं कौन हूँ?',
        hint: 'The divine strategist and charioteer.',
        hint_te: 'జగద్గురువు శ్రీకృష్ణుడు.',
        hint_hi: 'भगवान वासुदेव श्रीकृष्ण।',
        answer: 'Lord Krishna (Vasudeva)',
        answer_te: 'భగవాన్ శ్రీకృష్ణుడు',
        answer_hi: 'भगवान श्रीकृष्ण',
        options: ['Lord Krishna (Vasudeva)', 'Arjuna', 'Sahadeva', 'Vidura'],
        options_te: ['భగవాన్ శ్రీకృష్ణుడు', 'అర్జునుడు', 'సహదేవుడు', 'విదురుడు'],
        options_hi: ['भगवान श्रीकृष्ण', 'अर्जुन', 'सहदेव', 'विदुर'],
        learnMore: 'Bhima followed the sign: tore Jarasandha in half, and hurled the left piece to the right and right to the left so they could never reunite.',
        learnMore_te: 'భీముడు ఆ సూచన గ్రహించి, జరాసంధుడిని నిలువునా చీల్చి కుడి భాగాన్ని ఎడమవైపు, ఎడమ భాగాన్ని కుడివైపు విసిరివేశాడు.',
        learnMore_hi: 'भीम ने तुरंत समझकर जरासंध को चीरा और उसके अंगों को उलटकर फेंक दिया जिससे वे पुनः न जुड़ सके।',
        xpReward: 20
      }
    ]
  },

  // Level 38
  {
    levelNumber: 38,
    partNumber: 4,
    title: 'The Four-Direction Conquest',
    title_te: 'దిగ్విజయ యాత్ర',
    title_hi: 'चारों दिशाओं का दिग्विजय',
    subtitle: 'Uniting Aryavarta Under Dharma',
    subtitle_te: 'ధర్మం కింద సమస్త సామ్రాజ్యాలు',
    subtitle_hi: 'पाण्डवों का विश्व-विजय अभियान',
    questions: [
      {
        id: 'q38-1',
        type: 'mcq',
        prompt: 'In which direction did Arjuna march with the white-horse army during the Digvijaya conquest for the Rajasuya?',
        prompt_te: 'రాజసూయ దిగ్విజయ యాత్రలో అర్జునుడు ఏ దిక్కును జయించడానికి సైన్యంతో వెళ్ళాడు?',
        prompt_hi: 'राजसूय दिग्विजय अभियान में अर्जुन किस दिशा को जीतने के लिए अपनी सेना लेकर प्रस्थान किए?',
        options: [
          'The Northern Quarters (Uttara Digvijaya)',
          'The Southern Ocean lands',
          'The Western Deserts',
          'The Eastern Delta'
        ],
        options_te: [
          'ఉత్తర దిశ (ఉత్తర దిగ్విజయం)',
          'దక్షిణ మహాసముద్ర తీరాలు',
          'పశ్చిమ ఎడారి ప్రాంతాలు',
          'తూర్పు ప్రాంతాలు'
        ],
        options_hi: [
          'उत्तर दिशा (उत्तर दिग्विजय)',
          'दक्षिण महासागर क्षेत्र',
          'पश्चिम मरुस्थल',
          'पूर्व का डेल्टा'
        ],
        correctIndex: 0,
        learnMore: 'Arjuna conquered the northern kingdoms, including the Kimpurushas, Harivarsha, and the outer Himalayan slopes.',
        learnMore_te: 'అర్జునుడు ఉత్తర దిక్కుగా హిమాలయాలను, గంధర్వ, కింపురుష రాజ్యాలను జయించి అపార సంపదను సమకూర్చాడు.',
        learnMore_hi: 'अर्जुन ने उत्तर में कुलिंद, प्राग्ज्योतिष और हिमालय की उपत्यकाओं तक विजय पताका फहराई।',
        xpReward: 10
      },
      {
        id: 'q38-2',
        type: 'true_false',
        prompt: 'Bhima marched East toward Magadha and Anga, Sahadeva marched South toward Lanka and Kishkindha, and Nakula conquered the West.',
        prompt_te: 'భీముడు తూర్పుకు, సహదేవుడు దక్షిణానికి, నకులుడు పశ్చిమ దిశకు వెళ్లి రాజ్యాలను జయించారు.',
        prompt_hi: 'भीम ने पूर्व, सहदेव ने दक्षिण और नकुल ने पश्चिम दिशा में दिग्विजय प्राप्त कर युधिष्ठिर की अधीनता स्वीकार कराई।',
        correctAnswer: true,
        learnMore: 'The four brothers returned to Indraprastha with boundless caravans of gold, horses, elephants, and silks from all four corners of the earth.',
        learnMore_te: 'నలుగురు సోదరులు నాలుగు దిక్కులను జయించి రత్నాలు, ఏనుగులు, గుర్రాలతో ఇంద్రప్రస్థాన్ని ధనసంపన్నం చేశారు.',
        learnMore_hi: 'चारों भाइयों ने अपार धन-संपदा, हाथी, घोड़े और रत्न लाकर हस्तिनापुर के राजकोष को भर दिया।',
        xpReward: 10
      },
      {
        id: 'q38-3',
        type: 'riddle',
        prompt: 'Youngest Pandava and master astrologer who marched south and extracted tribute even from Vibhishana’s realm of Lanka. Who am I?',
        prompt_te: 'దక్షిణ దిశగా దండయాత్ర చేసి, లంకలోని విభీషణుడి నుండి కూడా కప్పం స్వీకరించిన పిన్న పాండవుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'दक्षिण दिशा में अभियान चलाकर जिसने लंका के विभीषण तक से कर प्राप्त किया; त्रिकालदर्शी पाण्डव। मैं कौन हूँ?',
        hint: 'Twin brother of Nakula and son of Madri.',
        hint_te: 'నకులుడి కవల సోదరుడు, మాద్రి పుత్రుడు.',
        hint_hi: 'माद्री-पुत्र और नकुल के अनुज।',
        answer: 'Sahadeva',
        answer_te: 'సహదేవుడు',
        answer_hi: 'सहदेव',
        options: ['Sahadeva', 'Nakula', 'Arjuna', 'Bhima'],
        options_te: ['సహదేవుడు', 'నకులుడు', 'అర్జునుడు', 'భీముడు'],
        options_hi: ['सहदेव', 'नकुल', 'अर्जुन', 'भीम'],
        learnMore: 'Vibhishana sent messengers bearing sandalwood, divine gems, and celestial silks to honor Yudhishthira’s righteousness.',
        learnMore_te: 'విభీషణుడు సహదేవుడి ధర్మానికి మెచ్చి గంధపు చెక్కలు, రత్నాలను బహుమానంగా పంపాడు.',
        learnMore_hi: 'विभीषण ने दूतों के माध्यम से सुगंधित चंदन और अमूल्य मणियां सहदेव को आदर सहित भेंट कीं।',
        xpReward: 20
      }
    ]
  },

  // Level 39
  {
    levelNumber: 39,
    partNumber: 4,
    title: 'The Fall of Shishupala',
    title_te: 'శిశుపాల వధ',
    title_hi: 'शिशुपाल वध और अग्रपूजा',
    subtitle: 'Agra-Puja & The Hundred Pardons',
    subtitle_te: 'అగ్రపూజ & వంద తప్పుల క్షమాభిక్ష',
    subtitle_hi: 'सर्वोच्च सम्मान और सुदर्शन चक्र',
    questions: [
      {
        id: 'q39-1',
        type: 'mcq',
        prompt: 'Whom did Grandsire Bhishma declare without hesitation as the solely supreme personality worthy of the foremost worship (Agra-Puja) at the Rajasuya?',
        prompt_te: 'రాజసూయ యాగంలో అగ్రపూజను (ప్రథమ గౌరవాన్ని) అందుకోవడానికి ముల్లోకాలలో అర్హుడైన ఏకైక దేవుడిగా భీష్ముడు ఎవరిని ప్రకటించాడు?',
        prompt_hi: 'राजसूय यज्ञ में पितामह भीष्म ने बिना किसी संकोच के किसे अग्रपूजा (सर्वोच्च सम्मान) का एकमात्र अधिकारी घोषित किया?',
        options: [
          'Lord Krishna of Dvaraka',
          'King Dhritarashtra of Hastinapur',
          'Guru Dronacharya',
          'King Shishupala of Chedi'
        ],
        options_te: [
          'ద్వారకాధీశుడు భగవాన్ శ్రీకృష్ణుడు',
          'హస్తినాపుర రాజు ధృతరాష్ట్రుడు',
          'గురు ద్రోణాచార్యుడు',
          'చేది దేశపు రాజు శిశుపాలుడు'
        ],
        options_hi: [
          'द्वारकाधीश भगवान श्रीकृष्ण',
          'हस्तिनापुर नरेश धृतराष्ट्र',
          'गुरु द्रोणाचार्य',
          'चेदि नरेश शिशुपाल'
        ],
        correctIndex: 0,
        learnMore: 'Bhishma proclaimed that Krishna is the origin, preserver, and dissolution of the universe, and honoring Him honors all creation.',
        learnMore_te: 'శ్రీకృష్ణుడే సృష్టి, స్థితి, లయ కారకుడని, ఆయనను పూజించడం సమస్త విశ్వాన్ని పూజించడంతో సమానమని భీష్ముడు చాటాడు.',
        learnMore_hi: 'भीष्म ने कहा कि श्रीकृष्ण चराचर जगत के स्वामी और परमात्मा हैं, अतः वही प्रथम पूजा के अधिकारी हैं।',
        xpReward: 10
      },
      {
        id: 'q39-2',
        type: 'true_false',
        prompt: 'Krishna had promised Shishupala’s mother that He would forgive one hundred insults and crimes committed by Shishupala before taking his life.',
        prompt_te: 'శిశుపాలుడి తల్లికి ఇచ్చిన వాగ్దానం ప్రకారం శ్రీకృష్ణుడు అతడు చేసే వంద తప్పులను, దూషణలను క్షమించాడు.',
        prompt_hi: 'श्रीकृष्ण ने अपनी बुआ (शिशुपाल की माता) को वचन दिया था कि वे शिशुपाल के सौ अपराधों को क्षमा करेंगे।',
        correctAnswer: true,
        learnMore: 'When Shishupala hurled his 101st vile insult before the kings, Krishna released the blazing Sudarshana Chakra, decapitating him instantly.',
        learnMore_te: 'నూట ఒకటవ నిందను పలకగానే శ్రీకృష్ణుడు సుదర్శన చక్రాన్ని ప్రయోగించి శిశుపాలుడి శిరస్సును ఖండించాడు.',
        learnMore_hi: 'सौ अपराध पूरे होते ही शिशुपाल ने जैसे ही 101वां अपशब्द कहा, सुदर्शन चक्र ने उसका सिर धड़ से अलग कर दिया।',
        xpReward: 10
      },
      {
        id: 'q39-3',
        type: 'riddle',
        prompt: 'A blazing celestial disc of razor sharpness and thousand spokes, I fly at Krishna’s command to destroy unrighteousness and return to His finger. What weapon am I?',
        prompt_te: 'శ్రీకృష్ణుడి చిటికిన వేలుపై వెలిగి, అధర్మాన్ని సంహరించి తిరిగి ఆయన చేతికందే దివ్య ఆయుధాన్ని నేను. నేను ఏమిటి?',
        prompt_hi: 'भगवान श्रीकृष्ण की तर्जनी पर घूमने वाला हजार आंगुरों वाला दिव्य अमोघ चक्र। मैं कौन सा शस्त्र हूँ?',
        hint: 'The supreme discus of Lord Vishnu.',
        hint_te: 'విష్ణుమూర్తి చక్రాయుధం.',
        hint_hi: 'भगवान विष्णु का अमोघ चक्र।',
        answer: 'Sudarshana Chakra',
        answer_te: 'సుదర్శన చక్రం',
        answer_hi: 'सुदर्शन चक्र',
        options: ['Sudarshana Chakra', 'Kaumodaki Mace', 'Brahmashira Astra', 'Pashupatastra'],
        options_te: ['సుదర్శన చక్రం', 'కౌమోదకి గద', 'బ్రహ్మశిరో అస్త్రం', 'పాశుపతాస్త్రం'],
        options_hi: ['सुदर्शन चक्र', 'कौमोदकी गदा', 'ब्रह्मशिरा अस्त्र', 'पाशुपतास्त्र'],
        learnMore: 'After Shishupala fell, a divine soul-spark emerged from his body and merged into Lord Krishna’s lotus feet.',
        learnMore_te: 'శిశుపాలుడి మరణం తర్వాత అతని శరీరంలోని దివ్యతేజస్సు శ్రీకృష్ణుడి పాదాలలో లీనమైంది.',
        learnMore_hi: 'शिशुपाल के शरीर से एक दिव्य ज्योति निकली और भगवान श्रीकृष्ण के चरणों में समा गई।',
        xpReward: 20
      }
    ]
  },

  // Level 40
  {
    levelNumber: 40,
    partNumber: 4,
    title: 'The Palace of Illusions',
    title_te: 'మాయాసభ & దుర్యోధనుడి అవమానం',
    title_hi: 'माया सभा और दुर्योधन का अपमान',
    subtitle: 'Optical Illusions & Vows of Revenge',
    subtitle_te: 'దృష్టి భ్రమలు & పగ పట్టిన కౌరవుడు',
    subtitle_hi: 'दृष्टि-भ्रम और प्रतिशोध की ज्वाला',
    questions: [
      {
        id: 'q40-1',
        type: 'mcq',
        prompt: 'What embarrassing optical illusion confounded Prince Duryodhana while touring the Maya Sabha palace in Indraprastha?',
        prompt_te: 'ఇంద్రప్రస్థంలోని మాయాసభను చూస్తున్నప్పుడు దుర్యోధనుడికి ఏ వింత దృష్టి భ్రమ ఎదురైంది?',
        prompt_hi: 'इंद्रप्रस्थ के मय-महल में भ्रमण करते हुए दुर्योधन किस दृष्टि-भ्रम का शिकार होकर हास्यास्पद स्थिति में पड़ गए?',
        options: [
          'He mistook a crystalline pool of water for solid floor and fell in with all his royal finery, drenching his garments',
          'He walked into a wall painted like an open garden',
          'His crown was snatched by a trained monkey',
          'The floor vanished beneath his feet'
        ],
        options_te: [
          'స్ఫటికంలా మెరిసే నీటి కొలనును నేల అనుకుని నడిచి, దుస్తులతో సహా నీటిలో పడి మునిగిపోయాడు',
          'తోటలా చిత్రించిన గోడను ఢీకొన్నాడు',
          'కోతి అతని కిరీటాన్ని లాక్కుంది',
          'అతని పాదాల కింద నేల మాయమైంది'
        ],
        options_hi: [
          'जल से भरे स्फटिक कुण्ड को सूखा फर्श समझकर वे उसमें गिर पड़े और वस्त्र भीग गए',
          'बगीचा समझकर दीवार से टकरा गए',
          'बंदर ने उनका मुकुट छीन लिया',
          'फर्श उनके पैरों के नीचे से गायब हो गया'
        ],
        correctIndex: 0,
        learnMore: 'Earlier, mistaking polished crystal floor for deep water, Duryodhana had lifted his dhoti to avoid wetting it, amusing onlookers.',
        learnMore_te: 'అంతకుముందు నేలను నీరు అనుకుని బట్టలు పైకెత్తగా, నీటిని నేల అనుకుని కొలనులో పడి అవమానం పాలయ్యాడు.',
        learnMore_hi: 'पहले सूखे फर्श को जल समझकर उन्होंने धोती ऊपर उठा ली थी, और फिर असली जल को फर्श समझकर उसमें गिर पड़े।',
        xpReward: 10
      },
      {
        id: 'q40-2',
        type: 'true_false',
        prompt: 'Seeing Duryodhana fall into the pool, Draupadi and the maidservants laughed from the upper balconies, igniting Duryodhana’s burning vow to destroy Indraprastha.',
        prompt_te: 'దుర్యోధనుడు నీటిలో పడటం చూసి మేడపై నుండి ద్రౌపది, పరిచారికలు నవ్వడం దుర్యోధనుడిలో తీవ్ర ప్రతీకార జ్వాలను రగిలించింది.',
        prompt_hi: 'दुर्योधन को जल में गिरते देखकर झरोखों से द्रौपदी और दासियों के हंसने से दुर्योधन के मन में अपमान और प्रतिशोध की भयंकर अग्नि सुलग उठी।',
        correctAnswer: true,
        learnMore: 'Duryodhana departed for Hastinapur in silent fury, burning with wounded ego and declaring he would not rest until the Pandavas were ruined.',
        learnMore_te: 'తీవ్ర అవమానంతో హస్తినాపురానికి తిరిగి వచ్చిన దుర్యోధనుడు పాండవుల సంపదను సర్వనాశనం చేస్తానని శపథం చేశాడు.',
        learnMore_hi: 'दुर्योधन ने उसी क्षण इंद्रप्रस्थ की समृद्धि छीनने और पाण्डवों को धूल में मिलाने का भीषण संकल्प ले लिया।',
        xpReward: 10
      },
      {
        id: 'q40-3',
        type: 'riddle',
        prompt: 'First among the Pandavas, crowned Emperor of Aryavarta in the grand Rajasuya, embodiment of truth and Dharma. Who am I?',
        prompt_te: 'పాండవులలో ప్రథముడు, రాజసూయ యాగం చేసి సమస్త ఆర్యావర్తానికి చక్రవర్తిగా నిలిచిన సత్యమూర్తిని నేను. నేను ఎవరిని?',
        prompt_hi: 'पाण्डवों में ज्येष्ठ, राजसूय यज्ञ संपन्न कर चक्रवर्ती सम्राट कहलाने वाले साक्षात धर्मस्वरूप। मैं कौन हूँ?',
        hint: 'Completing Part 4 unlocks his imperial wallpaper in your gallery!',
        hint_te: 'పార్ట్ 4 పూర్తి చేయడంతో ఈయన వాల్‌పేపర్ అన్‌లాక్ అవుతుంది.',
        hint_hi: 'भाग 4 पूर्ण करने पर इनका भव्य सम्राट वॉलपेपर अनलॉक होता है।',
        answer: 'Emperor Yudhishthira (Dharmaraja)',
        answer_te: 'యుధిష్ఠిర చక్రవర్తి (ధర్మరాజు)',
        answer_hi: 'सम्राट युधिष्ठिर (धर्मराज)',
        options: [
          'Emperor Yudhishthira (Dharmaraja)',
          'King Dhritarashtra',
          'King Shantanu',
          'Arjuna'
        ],
        options_te: [
          'యుధిష్ఠిర చక్రవర్తి (ధర్మరాజు)',
          'ధృతరాష్ట్ర మహారాజు',
          'శంతన మహారాజు',
          'అర్జునుడు'
        ],
        options_hi: [
          'सम्राट युधिष्ठिर (धर्मराज)',
          'राजा धृतराष्ट्र',
          'राजा शांतनु',
          'अर्जुन'
        ],
        learnMore: 'Yudhishthira’s imperial sovereignty marked the golden zenith of righteousness before the shadows of the dice game fell.',
        learnMore_te: 'యుధిష్ఠిరుడి పాలన ఆర్యావర్తంలో ధర్మరాజ్యానికి స్వర్ణ యుగంగా నిలిచింది.',
        learnMore_hi: 'युधिष्ठिर का राजसूय साम्राज्य की पराकाष्ठा थी, जिसके बाद द्यूत सभा का काला अध्याय आरंभ हुआ।',
        xpReward: 20
      }
    ]
  }
];
