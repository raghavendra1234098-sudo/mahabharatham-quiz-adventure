import { Level } from '../../types/game';

export const PART_5_LEVELS: Level[] = [
  // Level 41
  {
    levelNumber: 41,
    partNumber: 5,
    title: 'The Deceitful Dice',
    title_te: 'మాయా పాచికలు',
    title_hi: 'मायावी पासे और षड्यंत्र',
    subtitle: 'Shakuni’s Loaded Ancestral Bones',
    subtitle_te: 'శకుని ఎముకల పాచికలు & పన్నాగం',
    subtitle_hi: 'शकुनि के जादुई पासे और धृतराष्ट्र',
    questions: [
      {
        id: 'q41-1',
        type: 'mcq',
        prompt: 'From what material were Uncle Shakuni’s magical, obedient dice carved, guaranteeing that he would never lose a roll?',
        prompt_te: 'ఎన్నడూ ఓడిపోకుండా తాను కోరిన సంఖ్యను మాత్రమే చూపే శకుని మాయా పాచికలు దేనితో చేయబడ్డాయి?',
        prompt_hi: 'शकुनि के जादुई पासे किस वस्तु से बने थे, जो सदैव उसकी इच्छा के अनुसार ही अंक दिखाते थे?',
        options: [
          'The bones of his deceased father (King Subala)',
          'Black obsidian stone from Mount Meru',
          'Enchanted ivory from Indra’s elephant',
          'Polished meteorite iron'
        ],
        options_te: [
          'తన తండ్రి సుబల మహారాజు అస్థికలతో (ఎముకలతో)',
          'మేరు పర్వతం నుండి తెచ్చిన నల్లని రాయి',
          'ఐరావతం దంతంతో చేసిన దంతపు పాచికలు',
          'ఉల్కాపాతం నుండి తీసిన ఇనుము'
        ],
        options_hi: [
          'उनके दिवंगत पिता (राजा सुबल) की अस्थियों से',
          'मेरु पर्वत के काले पाषाण से',
          'ऐरावत हाथी के दांतों से',
          'उल्कापिंड के लोहे से'
        ],
        correctIndex: 0,
        learnMore: 'Shakuni’s dying father King Subala instructed him to carve dice from his bones, which would obey Shakuni’s psychic commands to avenge his family.',
        learnMore_te: 'తన వంశాన్ని నాశనం చేసిన కురువంశంపై ప్రతీకారం తీర్చుకోవడానికి సుబలుడు తన ఎముకలతో పాచికలు తయారు చేయమని చెప్పాడు.',
        learnMore_hi: 'राजा सुबल ने मृत्यु से पूर्व शकुनि को अपनी अस्थियों से पासे बनाने का रहस्य बताया था ताकि कुरुवंश का विनाश हो सके।',
        xpReward: 10
      },
      {
        id: 'q41-2',
        type: 'true_false',
        prompt: 'Duryodhana threatened to starve himself to death unless King Dhritarashtra consented to invite Yudhishthira to a game of dice.',
        prompt_te: 'యుధిష్ఠిరుడిని జూదానికి పిలవకపోతే తాను నిరాహారదీక్షతో ప్రాణాలర్పిస్తానని దుర్యోధనుడు తండ్రి ధృతరాష్ట్రుడిని బెదిరించాడు.',
        prompt_hi: 'दुर्योधन ने धृतराष्ट्र को धमकी दी कि यदि युधिष्ठिर को द्यूत-क्रीड़ा के लिए नहीं बुलाया गया, तो वह अन्न-जल त्याग कर प्राण दे देगा।',
        correctAnswer: true,
        learnMore: 'Blind with paternal weakness, Dhritarashtra overruled Vidura’s warnings and ordered the grand gambling hall to be erected.',
        learnMore_te: 'పుత్రమోహంతో గుడ్డివాడైన ధృతరాష్ట్రుడు విదురుడి హితవులను పెడచెవిన పెట్టి జూదశాలను సిద్ధం చేయించాడు.',
        learnMore_hi: 'पुत्र-मोह में अंधे धृतराष्ट्र ने विदुर के कड़े विरोध की उपेक्षा कर भव्य द्यूत-भवन के निर्माण की आज्ञा दे दी।',
        xpReward: 10
      },
      {
        id: 'q41-3',
        type: 'riddle',
        prompt: 'The scheming prince of Gandhara whose limp reminded him of his family’s tragedy and whose loaded dice destroyed the Kuru golden age. Who am I?',
        prompt_te: 'కుంటుతూ నడుస్తూ తన కుటుంబ పగను మోస్తూ, మాయా పాచికలతో కురువంశ నాశనానికి నాంది పలికిన గాంధార రాజును నేను. నేను ఎవరిని?',
        prompt_hi: 'गांधार का कुटिल नरेश, जिसके पांसों ने कुरुवंश की स्वर्णमयी शांति को राख के ढेर में बदल दिया। मैं कौन हूँ?',
        hint: 'Maternal uncle (Mama) of Duryodhana.',
        hint_te: 'దుర్యోధనుడి మేనమామ.',
        hint_hi: 'कौरवों के कपटी मामा।',
        answer: 'King Shakuni (Saubala)',
        answer_te: 'శకుని (సౌబలుడు)',
        answer_hi: 'शकुनि (सौबल)',
        options: ['King Shakuni (Saubala)', 'Dushasana', 'Jayadratha', 'Karna'],
        options_te: ['శకుని (సౌబలుడు)', 'దుశ్శాసనుడు', 'జయద్రథుడు', 'కర్ణుడు'],
        options_hi: ['शकुनि (सौबल)', 'दुःशासन', 'जयद्रथ', 'कर्ण'],
        learnMore: 'Shakuni operated as the venomous brain behind every injustice meted out to the Pandavas.',
        learnMore_te: 'పాండవులపై జరిగిన ప్రతి అధర్మానికి శకునియే ప్రధాన సూత్రధారిగా నిలిచాడు.',
        learnMore_hi: 'शकुनि ने अपने छल-कपट से धर्मराज युधिष्ठिर को सर्वस्व दांव पर लगाने पर विवश किया।',
        xpReward: 20
      }
    ]
  },

  // Level 42
  {
    levelNumber: 42,
    partNumber: 5,
    title: 'The Fatal Invitation',
    title_te: 'వినాశకర ఆహ్వానం',
    title_hi: 'विनाशकारी आमंत्रण',
    subtitle: 'Kshatriya Code & Reluctant Departure',
    subtitle_te: 'క్షత్రియ ధర్మం & అనివార్య ప్రయాణం',
    subtitle_hi: 'क्षत्रिय मर्यादा और विवश प्रस्थान',
    questions: [
      {
        id: 'q42-1',
        type: 'mcq',
        prompt: 'Why did the wise Emperor Yudhishthira accept the invitation to gamble despite knowing the immense perils of dice?',
        prompt_te: 'జూదం వల్ల కలిగే ప్రమాదాలు తెలిసినప్పటికీ యుధిష్ఠిరుడు ఆ ఆహ్వానాన్ని ఎందుకు అంగీకరించాడు?',
        prompt_hi: 'द्यूत के भयानक परिणामों को जानते हुए भी धर्मराज युधिष्ठिर ने इस आमंत्रण को क्यों स्वीकार किया?',
        options: [
          'A consecrated Kshatriya king cannot refuse an invitation to contest from elders or royal peers without dishonor',
          'He was addicted to gambling',
          'He wanted to win Duryodhana’s kingdom',
          'Draupadi urged him to play'
        ],
        options_te: [
          'పెద్దల నుండి లేదా సమానుల నుండి వచ్చిన ఆహ్వానాన్ని తిరస్కరించడం క్షత్రియ ధర్మానికి విరుద్ధం కాబట్టి',
          'అతనికి జూదం అంటే విపరీతమైన వ్యసనం',
          'దుర్యోధనుడి రాజ్యాన్ని గెలవాలని భావించి',
          'ద్రౌపది ఆడమని ప్రోత్సహించింది'
        ],
        options_hi: [
          'क्षत्रिय मर्यादा के अनुसार ज्येष्ठों द्वारा दिए गए खेल या युद्ध के आमंत्रण को अस्वीकार करना कायरता माना जाता था',
          'उन्हें जुआ खेलने का व्यसन था',
          'वे कौरवों का राज्य जीतना चाहते थे',
          'द्रौपदी ने उन्हें खेलने के लिए कहा था'
        ],
        correctIndex: 0,
        learnMore: 'Yudhishthira stated: "Fate takes away our reason as light leaves the eyes. I go as Dharma and my uncle command."',
        learnMore_te: 'విధి బలీయమైనదని, పెద్దల ఆజ్ఞను మీరడం క్షత్రియ ధర్మం కాదని భావించి ధర్మరాజు హస్తినాపురానికి బయలుదేరాడు.',
        learnMore_hi: 'युधिष्ठिर ने कहा: "काल मनुष्य की बुद्धि हर लेता है; बड़े-बुजुर्गों की आज्ञा शिरोधार्य कर मैं अवश्य जाऊंगा।"',
        xpReward: 10
      },
      {
        id: 'q42-2',
        type: 'true_false',
        prompt: 'Mahatma Vidura traveled in person to Indraprastha with tears in his eyes to deliver the royal invitation, openly warning Yudhishthira of its catastrophic nature.',
        prompt_te: 'విదురుడు కన్నీళ్లతో ఇంద్రప్రస్థానికి వెళ్లి ఆహ్వానాన్ని అందిస్తూనే, దీని వెనుక ఉన్న మహా విపత్తు గురించి యుధిష్ఠిరుడిని హెచ్చరించాడు.',
        prompt_hi: 'विदुर ने भारी मन से इंद्रप्रस्थ जाकर आमंत्रण दिया और युधिष्ठिर को पहले ही सावधान किया कि यह खेल सर्वनाश लाएगा।',
        correctAnswer: true,
        learnMore: 'Vidura begged Dhritarashtra and Yudhishthira to avert this doom, but destiny’s wheels were already turning.',
        learnMore_te: 'ఈ జూదాన్ని ఆపాలని విదురుడు ఎంతగానో ప్రయత్నించినప్పటికీ విధిని ఎవరూ మార్చలేకపోయారు.',
        learnMore_hi: 'विदुर ने दोनों पक्षों को समझाने का अथक प्रयास किया, किंतु प्रारब्ध के आगे उनकी एक न चली।',
        xpReward: 10
      },
      {
        id: 'q42-3',
        type: 'riddle',
        prompt: 'When the game commenced in the royal hall, I did not roll the dice myself, but declared that my uncle Shakuni would cast the throws on my behalf. Who am I?',
        prompt_te: 'జూదం ప్రారంభమైనప్పుడు పాచికలను నేను వేయకుండా, నా బదులుగా నా మేనమామ శకుని వేస్తాడని ప్రకటించిన కురుకుమారుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'द्यूत आरंभ होने पर मैंने स्वयं पासे न फेंककर घोषणा की कि मेरे स्थान पर मेरे मामा शकुनि पासे फेंकेंगे। मैं कौन हूँ?',
        hint: 'Eldest Kaurava prince.',
        hint_te: 'కౌరవులలో పెద్దవాడు.',
        hint_hi: 'कौरवों का ज्येष्ठ भ्राता।',
        answer: 'Prince Duryodhana',
        answer_te: 'దుర్యోధనుడు',
        answer_hi: 'दुर्योधन',
        options: ['Prince Duryodhana', 'Dushasana', 'Karna', 'Vikarna'],
        options_te: ['దుర్యోధనుడు', 'దుశ్శాసనుడు', 'కర్ణుడు', 'వికర్ణుడు'],
        options_hi: ['दुर्योधन', 'दुःशासन', 'कर्ण', 'विकर्ण'],
        learnMore: 'Yudhishthira protested that one playing by proxy violates traditional gaming codes, but Duryodhana insisted, and Shakuni rolled.',
        learnMore_te: 'ఒకరి తరఫున మరొకరు పాచికలు వేయడం నిబంధనలకు విరుద్ధమని యుధిష్ఠిరుడు చెప్పినా దుర్యోధనుడు ఒప్పుకోలేదు.',
        learnMore_hi: 'युधिष्ठिर ने नियम विरुद्ध होने का विरोध किया, किंतु दुर्योधन के हठ के आगे खेल आगे बढ़ा।',
        xpReward: 20
      }
    ]
  },

  // Level 43
  {
    levelNumber: 43,
    partNumber: 5,
    title: 'The Stakes of Wealth & Empire',
    title_te: 'ధన, రాజ్యాధికారాల పందెం',
    title_hi: 'संपत्ति और साम्राज्य का दांव',
    subtitle: 'Turn by Turn, The Treasury Lost',
    subtitle_te: 'వరుస ఓటములు & ఖజానా ఖాళీ',
    subtitle_hi: 'खजाना, हाथी, घोड़े और प्रजा की पराजय',
    questions: [
      {
        id: 'q43-1',
        type: 'mcq',
        prompt: 'What did Emperor Yudhishthira stake in the initial rounds of the gambling match, losing every single throw to Shakuni?',
        prompt_te: 'జూదం ప్రారంభ రౌండ్లలో యుధిష్ఠిరుడు పందెంగా పెట్టి, శకుని చేతిలో వరుసగా కోల్పోయిన సంపద ఏమిటి?',
        prompt_hi: 'द्यूत के आरंभिक चरणों में युधिष्ठिर ने क्या-क्या दांव पर लगाया और शकुनि के हाथों हारते चले गए?',
        options: [
          'Priceless ocean pearls, chariot fleets, thousand war elephants, royal armies, and imperial lands',
          'Only a single chest of silver coins',
          'Five hunting bows',
          'The palace gardens of Indraprastha'
        ],
        options_te: [
          'సముద్రపు ముత్యాలు, రథాల సమూహాలు, వేల ఏనుగులు, సైన్యాలు మరియు సమస్త సామ్రాజ్య భూములు',
          'ఒకే ఒక్క వెండి నాణాల పెట్టె',
          'ఐదు వేట ధనుస్సులు',
          'ఇంద్రప్రస్థ తోటలు'
        ],
        options_hi: [
          'अमूल्य मणियां, रथ, सहस्रों हाथी, सेनाएं और इंद्रप्रस्थ की समूची धन-संपदा व भूमि',
          'चांदी के कुछ सिक्के',
          'शिकारी धनुष',
          'इंद्रप्रस्थ के बाग-बगीचे'
        ],
        correctIndex: 0,
        learnMore: 'Round after round, Shakuni cried "Lo, I have won!", wiping out the boundless treasury amassed during the Rajasuya.',
        learnMore_te: 'ప్రతి రౌండ్‌లో శకుని "ఇదిగో నేనే గెలిచాను!" అంటూ రాజసూయ యాగంలో సంపాదించిన సమస్త సంపదను హరించాడు.',
        learnMore_hi: 'प्रत्येक चाल पर शकुनि "यह मैंने जीत लिया!" पुकारता रहा और राजकोष शून्य होता चला गया।',
        xpReward: 10
      },
      {
        id: 'q43-2',
        type: 'true_false',
        prompt: 'During the betting, Mahatma Vidura stood up and openly begged Dhritarashtra to abandon Duryodhana before his toxic greed consumed the dynasty.',
        prompt_te: 'జూదం జరుగుతుండగానే విదురుడు లేచి, ఈ దురాశ కురువంశాన్ని నాశనం చేయకముందే దుర్యోధనుడిని త్యజించమని ధృతరాష్ట్రుడిని వేడుకున్నాడు.',
        prompt_hi: 'द्यूत के मध्य महात्मा विदुर ने खड़े होकर धृतराष्ट्र से प्रार्थना की कि कुल के विनाश से पूर्व इस दुष्ट दुर्योधन का त्याग कर दें।',
        correctAnswer: true,
        learnMore: 'Duryodhana cursed Vidura as an ungrateful snake nurtured on royal salt who secretly favored the Pandavas.',
        learnMore_te: 'దుర్యోధనుడు ఆగ్రహంతో విదురుడిని తిండి పెట్టిన ఇంటికే ద్రోహం తలపెట్టే పాము అని దూషించాడు.',
        learnMore_hi: 'दुर्योधन ने विदुर को अपमानित करते हुए कहा कि "तुम हमारे ही टुकड़ों पर पलकर हमारे शत्रुओं का हित चाहते हो।"',
        xpReward: 10
      },
      {
        id: 'q43-3',
        type: 'riddle',
        prompt: 'Bound by my solemn pledge to protect the throne and eat the royal salt of Hastinapur, I sat with head bowed in deep sorrow as Dharma fell. Who am I?',
        prompt_te: 'హస్తినాపుర ఉప్పు తిన్నందుకు, రాజ్యాన్ని రక్షించే ప్రతిజ్ఞకు కట్టుబడి, అధర్మం జరుగుతున్నా తలదించుకుని మౌనంగా ఉండిపోయిన కురువృద్ధుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'हस्तिनापुर के राजसिंहासन की रक्षा के वचन में बंधे होने के कारण अधर्म होते देखकर भी मौन बैठे रहने वाले पितामह। मैं कौन हूँ?',
        hint: 'The grandsire of both Pandavas and Kauravas.',
        hint_te: 'గంగాపుత్రుడు.',
        hint_hi: 'गंगापुत्र भीष्म।',
        answer: 'Bhishma Pitamaha',
        answer_te: 'భీష్మ పితామహుడు',
        answer_hi: 'भीष्म पितामह',
        options: ['Bhishma Pitamaha', 'Guru Drona', 'Kripacharya', 'King Shalya'],
        options_te: ['భీష్మ పితామహుడు', 'గురు ద్రోణుడు', 'కృపాచార్యుడు', 'శల్య మహారాజు'],
        options_hi: ['भीष्म पितामह', 'गुरु द्रोण', 'कृपाचार्य', 'राजा शल्य'],
        learnMore: 'Bhishma’s tragic silence in the assembly hall remains the central moral dilemma of the Mahabharata.',
        learnMore_te: 'సభలో భీష్ముడి మౌనం మహాభారతంలో అత్యంత చర్చనీయాంశమైన ధర్మ సంకటంగా నిలిచింది.',
        learnMore_hi: 'सभा में भीष्म का मौन महाभारत का सबसे बड़ा नैतिक संकट बन गया।',
        xpReward: 20
      }
    ]
  },

  // Level 44
  {
    levelNumber: 44,
    partNumber: 5,
    title: 'The Loss of Kin & Self',
    title_te: 'సోదరులు & తనను తాను ఓడిపోవటం',
    title_hi: 'भाइयों और स्वयं का दांव',
    subtitle: 'From Nakula to Dharmaraja Himself',
    subtitle_te: 'నకులుడి నుండి యుధిష్ఠిరుడి వరకు బానిసలుగా',
    subtitle_hi: 'नकुल, सहदेव, अर्जुन, भीम और युधिष्ठिर की पराजय',
    questions: [
      {
        id: 'q44-1',
        type: 'mcq',
        prompt: 'When wealth and territory were gone, whom did Shakuni sinisterly provoke Yudhishthira to stake first among his brothers?',
        prompt_te: 'సంపద, రాజ్యం అంతా పోయిన తర్వాత, మొదట ఏ సోదరుడిని పందెంగా పెట్టమని శకుని యుధిష్ఠిరుడిని రెచ్చగొట్టాడు?',
        prompt_hi: 'धन और राज्य समाप्त होने पर शकुनि ने सबसे पहले किस पाण्डव भाई को दांव पर लगाने के लिए उकसाया?',
        options: [
          'Prince Nakula (beloved son of Queen Madri)',
          'Bhima of mighty arms',
          'Arjuna the archer',
          'Sahadeva the wise'
        ],
        options_te: [
          'నకులుడు (మాద్రీదేవి ప్రియ కుమారుడు)',
          'మహాబలుడైన భీముడు',
          'గాండీవధారి అర్జునుడు',
          'జ్ఞాని అయిన సహదేవుడు'
        ],
        options_hi: [
          'राजकुमार नकुल (माद्री के सुकुमार पुत्र)',
          'महाबली भीम',
          'धनुर्धर अर्जुन',
          'ज्ञानी सहदेव'
        ],
        correctIndex: 0,
        learnMore: 'Hoping to sow discord by making Yudhishthira risk his stepbrother, Shakuni targeted Nakula first; Yudhishthira staked him and lost.',
        learnMore_te: 'సవతి తల్లి కుమారుడిని పందెంగా పెట్టడం ద్వారా పాండవుల మధ్య విభేదాలు సృష్టించవచ్చని శకుని ఈ కుట్ర పన్నాడు.',
        learnMore_hi: 'शकुनि ने भेद डालने के उद्देश्य से पहले माद्री-पुत्र नकुल का दांव लगवाया, और युधिष्ठिर हार गए।',
        xpReward: 10
      },
      {
        id: 'q44-2',
        type: 'true_false',
        prompt: 'After losing Sahadeva, Arjuna, and Bhima, Emperor Yudhishthira finally staked his own freedom and became Duryodhana’s slave.',
        prompt_te: 'సహదేవుడు, అర్జునుడు మరియు భీములను కోల్పోయిన తర్వాత, యుధిష్ఠిరుడు తనను తాను పందెంగా పెట్టి దుర్యోధనుడికి బానిసయ్యాడు.',
        prompt_hi: 'सहदेव, अर्जुन और भीम को हारने के पश्चात युधिष्ठिर ने स्वयं को दांव पर लगा दिया और दुर्योधन के दास बन गए।',
        correctAnswer: true,
        learnMore: 'With all five brothers now legally enslaved according to the gambling code, Shakuni had achieved what armies could never do.',
        learnMore_te: 'ఐదుగురు పాండవులు బానిసలుగా మారడంతో యుద్ధంలో సాధించలేని విజయాన్ని శకుని పాచికలతో సాధించాడు.',
        learnMore_hi: 'पांचों भाई अब कौरवों के दास बन चुके थे, जो किसी युद्ध में संभव न हो सका था।',
        xpReward: 10
      },
      {
        id: 'q44-3',
        type: 'riddle',
        prompt: 'Clenching my fists until blood dripped, I roared that Yudhishthira’s gambling hands deserved to be burnt in fire, before Arjuna calmed my fury. Who am I?',
        prompt_te: 'కోపంతో పిడికిళ్ళు బిగించి, జూదం ఆడిన యుధిష్ఠిరుడి చేతులను నిప్పుల్లో కాల్చాలని గర్జించిన వీరుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'क्रोध से कांपते हुए जिसने कहा कि "युधिष्ठिर के जुआरी हाथों को जला देना चाहिए", जिसे अर्जुन ने शांत किया। मैं कौन हूँ?',
        hint: 'The second Pandava, known for his fiery temperament.',
        hint_te: 'రెండవ పాండవుడు, వాయుపుత్రుడు.',
        hint_hi: 'पवनपुत्र भीमसेन।',
        answer: 'Bhima (Vrikodara)',
        answer_te: 'భీముడు (వృకోదరుడు)',
        answer_hi: 'भीम (वृकोदर)',
        options: ['Bhima (Vrikodara)', 'Arjuna', 'Nakula', 'Sahadeva'],
        options_te: ['భీముడు (వృకోదరుడు)', 'అర్జునుడు', 'నకులుడు', 'సహదేవుడు'],
        options_hi: ['भीम (वृकोदर)', 'अर्जुन', 'नकुल', 'सहदेव'],
        learnMore: 'Arjuna reminded Bhima that Yudhishthira was their revered eldest brother and king, preventing family strife.',
        learnMore_te: 'ధర్మరాజు మన అన్నయ్య మరియు రాజు అని అర్జునుడు గుర్తుచేసి భీముడి ఆగ్రహాన్ని ఉపశమింపజేశాడు.',
        learnMore_hi: 'अर्जुन ने याद दिलाया कि युधिष्ठिर हमारे ज्येष्ठ और सम्राट हैं, उनके विरुद्ध बोलना धर्म के विरुद्ध है।',
        xpReward: 20
      }
    ]
  },

  // Level 45
  {
    levelNumber: 45,
    partNumber: 5,
    title: 'The Staking of Draupadi',
    title_te: 'ద్రౌపదిని పందెంగా పెట్టడం',
    title_hi: 'द्रौपदी का दांव',
    subtitle: 'The Catastrophic Utterance',
    subtitle_te: 'సభలో భయానక క్షణాలు & శకుని చివరి పాచిక',
    subtitle_hi: 'सभा में स्तब्धता और महाविनाश का दांव',
    questions: [
      {
        id: 'q45-1',
        type: 'mcq',
        prompt: 'What did Shakuni cunningly whisper to Yudhishthira when the king had lost his own liberty and had nothing left to stake?',
        prompt_te: 'తనను తాను ఓడిపోయిన యుధిష్ఠిరుడికి శకుని ఏమని ఎగదోసి, ద్రౌపదిని పందెంగా పెట్టేలా చేశాడు?',
        prompt_hi: 'जब युधिष्ठिर स्वयं को भी हार गए, तब शकुनि ने उन्हें किस अमूल्य रत्न का दांव लगाने के लिए फुसलाया?',
        options: [
          '"You still possess Princess Draupadi, the jewel of Panchala; stake her and win back all your brothers and empire!"',
          '"Stake your Gandiva bow"',
          '"Stake your royal crowns"',
          '"The game is officially over"'
        ],
        options_te: [
          '"నీ వద్ద ఇంకా పాంచాల రాజపుత్రి ద్రౌపది ఉంది; ఆమెను పందెంగా పెట్టి నీ సోదరులను, రాజ్యాన్ని తిరిగి గెలుచుకో!"',
          '"నీ గాండీవ ధనుస్సును పందెంగా పెట్టు"',
          '"మీ కిరీటాలను పందెంగా పెట్టండి"',
          '"ఆట ముగిసింది"'
        ],
        options_hi: [
          '"तुम्हारे पास अभी भी द्रौपदी जैसी महारानी है; उसे दांव पर लगाकर अपना खोया सब कुछ पुनः जीत लो!"',
          '"अपना गांडीव दांव पर लगाओ"',
          '"अपने मुकुट दांव पर रख दो"',
          '"अब खेल समाप्त हो चुका है"'
        ],
        correctIndex: 0,
        learnMore: 'A collective shudder passed through the assembly; elders groaned in horror, but blinded by destiny, Yudhishthira uttered the fatal stake.',
        learnMore_te: 'ధర్మరాజు ద్రౌపదిని పందెంగా పెట్టగానే సభలోని పెద్దలంతా హాహాకారాలు చేశారు; శకుని మళ్ళీ పాచికలు వేసి గెలిచాడు.',
        learnMore_hi: 'सभा में बैठे वृद्धजनों के मुख से हाहाकार निकल पड़ा, किंतु प्रारब्ध से मोहित युधिष्ठिर ने द्रौपदी का दांव लगा दिया।',
        xpReward: 10
      },
      {
        id: 'q45-2',
        type: 'true_false',
        prompt: 'When Shakuni rolled the dice and cried "Won!", old King Dhritarashtra repeatedly asked in greedy excitement: "Has she been won? Has she been won?"',
        prompt_te: 'శకుని "గెలిచాను!" అని అరవగానే, అంధుడైన ధృతరాష్ట్రుడు దురాశతో "ఆమెను గెలిచారా? ఆమెను గెలిచారా?" అని పదే పదే అడిగాడు.',
        prompt_hi: 'शकुनि द्वारा पासा जीतने पर धृतराष्ट्र ने उतावली में बार-बार पूछा: "क्या द्रौपदी जीती गई? क्या वह जीती गई?"',
        correctAnswer: true,
        learnMore: 'Dhritarashtra’s uncontrollable greed for Draupadi’s capture exposed the moral degradation of the Kuru leadership.',
        learnMore_te: 'ధృతరాష్ట్రుడి ఈ ప్రవర్తన కురు సామ్రాజ్య అధఃపతనానికి అద్దం పట్టింది.',
        learnMore_hi: 'धृतराष्ट्र की इस प्रतिक्रिया ने कुरु राजसभा के नैतिक पतन को पूरी तरह उजागर कर दिया।',
        xpReward: 10
      },
      {
        id: 'q45-3',
        type: 'riddle',
        prompt: 'The chariot driver sent by Duryodhana to drag Queen Draupadi from the inner chambers, who fled back in terror upon hearing her fierce questions. Who am I?',
        prompt_te: 'ద్రౌపదిని సభకు తీసుకురావడానికి దుర్యోధనుడి చేత పంపబడి, ఆమె వేసిన న్యాయపరమైన ప్రశ్నలకు భయపడి వెనక్కి పారిపోయిన సారథిని నేను. నేను ఎవరిని?',
        prompt_hi: 'दुर्योधन द्वारा द्रौपदी को अंतःपुर से सभा में घसीट लाने भेजा गया सूत-पुत्र, जो द्रौपदी के प्रश्नों से भयभीत होकर खाली हाथ लौट आया। मैं कौन हूँ?',
        hint: 'Duryodhana’s royal charioteer.',
        hint_te: 'దుర్యోధనుడి రథసారథి.',
        hint_hi: 'दुर्योधन का सारथी।',
        answer: 'Pratikami',
        answer_te: 'ప్రాతిక్రామి',
        answer_hi: 'प्रातिकामी',
        options: ['Pratikami', 'Sanjaya', 'Dushasana', 'Purochana'],
        options_te: ['ప్రాతిక్రామి', 'సంజయుడు', 'దుశ్శాసనుడు', 'పురోచనుడు'],
        options_hi: ['प्रातिकामी', 'संजय', 'दुःशासन', 'पुरोचन'],
        learnMore: 'Draupadi asked Pratikami: "Go back and ask the gambler: Did you lose yourself first, or did you lose me?"',
        learnMore_te: '"తనను తాను ముందు ఓడిపోయాడా, లేక నన్ను ఓడిపోయాడా?" అని జూదగాడిని అడిగి రమ్మని ద్రౌపది నిలదీసింది.',
        learnMore_hi: 'द्रौपदी ने प्रश्न किया: "सभा में जाकर पूछो कि उस द्यूतकार ने पहले स्वयं को हारा था या मुझे?"',
        xpReward: 20
      }
    ]
  },

  // Level 46
  {
    levelNumber: 46,
    partNumber: 5,
    title: 'The Assembly of Shame',
    title_te: 'సభా పర్వం: ద్రౌపది అవమానం',
    title_hi: 'कुरु सभा और द्रौपदी का अपमान',
    subtitle: 'Dragged by the Hair into Court',
    subtitle_te: 'వెండ్రుకలు పట్టి ఈడ్చుకురావటం & ధర్మ సంకటం',
    subtitle_hi: 'केश पकड़कर घसीटना और मौन सभा',
    questions: [
      {
        id: 'q46-1',
        type: 'mcq',
        prompt: 'Who violently dragged Queen Draupadi by her long, sacred hair across the palace floors and into the royal Kuru assembly?',
        prompt_te: 'రాణి ద్రౌపదిని ఆమె కేశపాశాలను పట్టుకుని ఈడ్చుకుంటూ సభలోకి తెచ్చిన కర్కోటకుడైన కౌరవుడు ఎవరు?',
        prompt_hi: 'राजकुमारी द्रौपदी के केश पकड़कर घसीटते हुए भरी सभा में लाने वाला दुष्ट कौन था?',
        options: ['Dushasana', 'Duryodhana', 'Shakuni', 'Karna'],
        options_te: ['దుశ్శాసనుడు', 'దుర్యోధనుడు', 'శకుని', 'కర్ణుడు'],
        options_hi: ['दुःशासन', 'दुर्योधन', 'शकुनि', 'कर्ण'],
        correctIndex: 0,
        learnMore: 'Draupadi cried that she was clad in a single garment (Ekavastra), but Dushasana laughed and called her a common slave woman.',
        learnMore_te: 'తాను ఏకవస్త్రంలో ఉన్నానని ద్రౌపది వేడుకున్నా వినకుండా దుశ్శాసనుడు బానిస అంటూ అవమానిస్తూ ఈడ్చుకొచ్చాడు.',
        learnMore_hi: 'द्रौपदी एकवस्त्रा थीं, किंतु निर्लज्ज दुःशासन ने उन्हें "दासी" कहकर घसीटा।',
        xpReward: 10
      },
      {
        id: 'q46-2',
        type: 'true_false',
        prompt: 'Standing before Bhishma, Drona, and Dhritarashtra, Draupadi posed a profound constitutional question: "If Yudhishthira had already lost himself, had he any legal right to stake me?"',
        prompt_te: 'తనను తాను ఓడిపోయి బానిసైన యుధిష్ఠిరుడికి, నన్ను పందెంగా పెట్టే అధికారం ధర్మశాస్త్రం ప్రకారం ఉందా? అని ద్రౌపది సభను నిలదీసింది.',
        prompt_hi: 'द्रौपदी ने सभा में प्रश्न उठाया: "यदि युधिष्ठिर स्वयं दास बन चुके थे, तो उन्हें अपनी पत्नी को दांव पर लगाने का क्या अधिकार था?"',
        correctAnswer: true,
        learnMore: 'Bhishma conceded that the subtleties of Dharma are extremely intricate, leaving the entire assembly paralyzed in shame.',
        learnMore_te: 'ధర్మ సూక్ష్మం చాలా గహనమైనదని చెబుతూ భీష్ముడు తలదించుకున్నాడు.',
        learnMore_hi: 'भीष्म ने लाचार होकर कहा कि "धर्म की गति अत्यंत सूक्ष्म है, मैं इसका यथोचित उत्तर देने में असमर्थ हूँ।"',
        xpReward: 10
      },
      {
        id: 'q46-3',
        type: 'riddle',
        prompt: 'Egged on by fury, I struck my left thigh before the court and crudely invited Queen Draupadi to sit upon my lap. Who am I?',
        prompt_te: 'సభ మధ్యలో తన ఎడమ తొడను చరుస్తూ, ద్రౌపదిని వచ్చి తన ఒడిలో కూర్చోమని సైగ చేసిన అహంకారిని నేను. నేను ఎవరిని?',
        prompt_hi: 'भरी सभा में अपनी बाईं जंघा को ठोककर द्रौपदी को उस पर बैठने का अश्लील संकेत करने वाला कौरव। मैं कौन हूँ?',
        hint: 'The eldest Kaurava prince.',
        hint_te: 'దుర్యోధనుడు.',
        hint_hi: 'कौरव राजपुत्र दुर्योधन।',
        answer: 'Duryodhana',
        answer_te: 'దుర్యోధనుడు',
        answer_hi: 'दुर्योधन',
        options: ['Duryodhana', 'Dushasana', 'Shakuni', 'Karna'],
        options_te: ['దుర్యోధనుడు', 'దుశ్శాసనుడు', 'శకుని', 'కర్ణుడు'],
        options_hi: ['दुर्योधन', 'दुःशासन', 'शकुनि', 'कर्ण'],
        learnMore: 'This unspeakable obscenity provoked Bhima to leap forward and roar the terrible vow to shatter that very thigh in battle.',
        learnMore_te: 'ఈ ఘోర అవమానాన్ని చూసిన భీముడు యుద్ధంలో ఆ తొడను గదతో విరగ్గొడతానని భీకర ప్రతిజ్ఞ చేశాడు.',
        learnMore_hi: 'इस कृत्य को देखकर भीम ने भीषण प्रतिज्ञा ली कि "युद्ध में मैं गदा से दुर्योधन की इस जंघा को चकनाचूर करूंगा।"',
        xpReward: 20
      }
    ]
  },

  // Level 47
  {
    levelNumber: 47,
    partNumber: 5,
    title: 'The Voice in the Dark: Vikarna',
    title_te: 'ధర్మ స్వరము: వికర్ణుడు',
    title_hi: 'अधर्म के विरुद्ध एकमात्र स्वर: विकर्ण',
    subtitle: 'The Solitary Protest in the Court',
    subtitle_te: 'వందమంది కౌరవులలో ధర్మాన్ని సమర్థించినవాడు',
    subtitle_hi: 'विकर्ण का विरोध और कर्ण का आक्षेप',
    questions: [
      {
        id: 'q47-1',
        type: 'mcq',
        prompt: 'Which single Kaurava brother possessed the moral courage to stand up in the assembly and proclaim that Draupadi had NOT been won legally?',
        prompt_te: 'సభలో లేచి నిలబడి, ద్రౌపదిని న్యాయబద్ధంగా గెలవలేదని గళమెత్తిన ఏకైక కౌరవ సోదరుడు ఎవరు?',
        prompt_hi: 'भरी सभा में उठकर यह घोषणा करने का नैतिक साहस किस एकमात्र कौरव भाई ने दिखाया कि द्रौपदी अधर्म से जीती गई है?',
        options: ['Prince Vikarna', 'Dushasana', 'Chitrasena', 'Yuyutsu'],
        options_te: ['వికర్ణుడు', 'దుశ్శాసనుడు', 'చిత్రసేనుడు', 'యుయుత్సుడు'],
        options_hi: ['राजकुमार विकर्ण', 'दुःशासन', 'चित्रसेन', 'युयुत्सु'],
        correctIndex: 0,
        learnMore: 'Vikarna argued that hunting, drinking, gambling, and women are vices where a man loses his senses; Yudhishthira was incited by a cheat, and a slave cannot stake his free wife.',
        learnMore_te: 'వికర్ణుడు ధర్మశాస్త్రాలను ఉటంకిస్తూ, బానిసైన వాడు వేరొకరిని పందెంగా పెట్టలేడని స్పష్టంగా చెప్పాడు.',
        learnMore_hi: 'विकर्ण ने स्पष्ट कहा कि जुआ व्यसन है, और स्वतंत्र न रहने वाला व्यक्ति किसी अन्य पर अधिकार नहीं रख सकता।',
        xpReward: 10
      },
      {
        id: 'q47-2',
        type: 'true_false',
        prompt: 'Karna angrily rebuked young Vikarna, declaring that Draupadi was a common woman because she was wed to five men, and ordered Dushasana to strip the Pandavas and Draupadi of their robes.',
        prompt_te: 'కర్ణుడు వికర్ణుడిని మందలిస్తూ, పాండవుల మరియు ద్రౌపది వస్త్రాలను లాగివేయమని దుశ్శాసనుడిని ఆజ్ఞాపించాడు.',
        prompt_hi: 'कर्ण ने विकर्ण को डांटते हुए दुःशासन को आदेश दिया कि वह पाण्डवों और द्रौपदी के वस्त्र उतार ले।',
        correctAnswer: true,
        learnMore: 'This cruel instigation by Karna became his greatest moral blemish, for which Lord Krishna reminded him on his final day at Kurukshetra.',
        learnMore_te: 'కర్ణుడి జీవితంలో ఇది క్షమించరాని తప్పుగా మిగిలిపోయింది; కురుక్షేత్రంలో కృష్ణుడు దీనిని కర్ణుడికి గుర్తుచేశాడు.',
        learnMore_hi: 'कर्ण का यह आचरण उसके चरित्र पर सबसे बड़ा कलंक बना, जिसका स्मरण श्रीकृष्ण ने कुरुक्षेत्र के 17वें दिन कराया।',
        xpReward: 10
      },
      {
        id: 'q47-3',
        type: 'riddle',
        prompt: 'Realizing that all mortal kings, husbands, and elders had failed to defend her, I released my hold on my falling garments, raised both hands to the sky, and surrendered completely to Govinda. Who am I?',
        prompt_te: 'సభలో భర్తలు, పెద్దలు ఎవరూ కాపాడలేరని గ్రహించి, చీరను వదిలేసి రెండు చేతులు పైకెత్తి శ్రీకృష్ణుడికి సంపూర్ణ శరణాగతి చేసిన మహారాణిని నేను. నేను ఎవరిని?',
        prompt_hi: 'जब किसी नश्वर ने सहायता नहीं की, तब दोनों हाथ ऊपर उठाकर अनन्य भाव से "हे गोविंद! हे द्वारकानाथ!" पुकारने वाली महारानी। मैं कौन हूँ?',
        hint: 'Yajnaseni, Queen of the Pandavas.',
        hint_te: 'యాజ్ఞసేని.',
        hint_hi: 'द्रौपदी।',
        answer: 'Queen Draupadi',
        answer_te: 'ద్రౌపది దేవి',
        answer_hi: 'महारानी द्रौपदी',
        options: ['Queen Draupadi', 'Queen Kunti', 'Gandhari', 'Subhadra'],
        options_te: ['ద్రౌపది దేవి', 'కుంతీ దేవి', 'గాంధారి దేవి', 'సుభద్ర'],
        options_hi: ['महारानी द्रौपदी', 'माता कुन्ती', 'गांधारी', 'सुभद्रा'],
        learnMore: 'True divine grace descends when human ego and self-reliance surrender unconditionally to the Supreme Divine.',
        learnMore_te: 'సంపూర్ణ శరణాగతి చేసినప్పుడే భగవంతుడి రక్షణ సాక్షాత్కరిస్తుందని ఈ సంఘటన నిరూపిస్తుంది.',
        learnMore_hi: 'जब मनुष्य का अहंकार और स्वयं का बल समाप्त हो जाता है, तभी साक्षात ईश्वर का अवतरण होता है।',
        xpReward: 20
      }
    ]
  },

  // Level 48
  {
    levelNumber: 48,
    partNumber: 5,
    title: 'The Miracle of Infinite Silk',
    title_te: 'అక్షయ వస్త్రాపహరణ అద్భుతం',
    title_hi: 'चीरहरण और अक्षय वस्त्र का चमत्कार',
    subtitle: 'Lord Krishna’s Infinite Divine Grace',
    subtitle_te: 'శ్రీకృష్ణుడి అభయహస్తం & ముగియని చీరలు',
    subtitle_hi: 'भगवान श्रीकृष्ण की अलौकिक कृपा',
    questions: [
      {
        id: 'q48-1',
        type: 'mcq',
        prompt: 'What miraculous phenomenon occurred when Dushasana tried to forcibly strip the garments from Queen Draupadi?',
        prompt_te: 'దుశ్శాసనుడు ద్రౌపది వస్త్రాన్ని లాగుతుండగా ఏ దివ్య అద్భుతం సంభవించింది?',
        prompt_hi: 'जब दुःशासन ने द्रौपदी का चीर हरण करने का प्रयास किया, तब क्या अलौकिक चमत्कार हुआ?',
        options: [
          'Endless folds of radiant, colorful silk manifested continuously from the unseen, piling up in enormous heaps as Dushasana collapsed in exhaustion',
          'A lightning bolt struck Dushasana',
          'The palace hall caught fire',
          'The garments turned into iron armor'
        ],
        options_te: [
          'లాగుతున్న కొద్దీ అంతం లేని రంగురంగుల పట్టు చీరలు వెలువరిస్తూ భారీ కుప్పగా పేరుకుపోయాయి; దుశ్శాసనుడు అలసిపోయి కుప్పకూలాడు',
          'పిడుగు పడి దుశ్శాసనుడు మరణించాడు',
          'భవనం అంటుకుంది',
          'దుస్తులు ఇనుప కవచాలుగా మారాయి'
        ],
        options_hi: [
          'अदृश्य रूप से अंतहीन वस्त्र प्रकट होते चले गए, वस्त्रों का विशाल पर्वत लग गया और दुःशासन हांफते हुए गिर पड़ा',
          'दुःशासन पर आकाशीय बिजली गिरी',
          'राजमहल में आग लग गई',
          'वस्त्र लोहे के कवच में बदल गए'
        ],
        correctIndex: 0,
        learnMore: 'Mountains of celestial cloth of every hue covered the floor; the assembly burst into cheers of "Sadhu! Sadhu!", glorifying Lord Krishna.',
        learnMore_te: 'వేలకొద్దీ చీరలు కుప్పలుగా పడటం చూసి సభలోని వారంతా "సాధు! సాధు!" అంటూ శ్రీకృష్ణుడి లీలను కొనియాడారు.',
        learnMore_hi: 'वस्त्रों का ढेर लग गया और दुःशासन पसीने से लथपथ होकर गिर पड़ा; सभा ने भगवान कृष्ण के जयकारे लगाए।',
        xpReward: 10
      },
      {
        id: 'q48-2',
        type: 'true_false',
        prompt: 'Lord Krishna manifested invisibly as the Dharma-Cloth (Vastravatara) to protect His sister and devotee Draupadi in her darkest hour.',
        prompt_te: 'శ్రీకృష్ణుడు అదృశ్యంగా స్వయంగా వస్త్రరూపంలో అవతరించి తన భక్తురాలైన ద్రౌపది మానాన్ని కాపాడాడు.',
        prompt_hi: 'भगवान श्रीकृष्ण ने स्वयं अदृश्य रूप से वस्त्रावतार धारण कर अपनी अनन्य भक्त द्रौपदी की लज्जा की रक्षा की।',
        correctAnswer: true,
        learnMore: 'Draupadi had once bandaged Krishna’s bleeding finger with a strip of her sari; Krishna returned that thread as endless oceans of silk.',
        learnMore_te: 'ఒకప్పుడు కృష్ణుడి వేలికి రక్తం కారినప్పుడు ద్రౌపది తన చీర కొంగును చించి కట్టింది; ఆ ఒక్క పోగుకు బదులుగా కృష్ణుడు అక్షయ వస్త్రాలను ఇచ్చాడు.',
        learnMore_hi: 'शिशुपाल वध के समय द्रौपदी ने अपनी साड़ी फाड़कर कृष्ण की उंगली पर बांधी थी; प्रभु ने उस ऋण को कोटि-गुना कर लौटाया।',
        xpReward: 10
      },
      {
        id: 'q48-3',
        type: 'riddle',
        prompt: 'The sacred mantra of total surrender chanted by Draupadi with tears streaming down her face, invoking the Supreme Lord of Dvaraka. What name was invoked?',
        prompt_te: '"హే గోవింద! హే గోపీజన వల్లభ! హే కృష్ణా!" అంటూ ద్రౌపది ఆర్తితో స్మరించిన పరమాత్ముని నామం ఏమిటి?',
        prompt_hi: 'द्रौपदी ने अश्रुपूर्ण नेत्रों से आर्तभाव में किस नाम का स्मरण कर श्रीकृष्ण को पुकारा था?',
        hint: 'Protector of the cows and senses.',
        hint_te: 'గోవులను, భక్తులను రక్షించేవాడు.',
        hint_hi: 'दीनबंधु, द्वारकानाथ।',
        answer: 'Govinda / Krishna',
        answer_te: 'గోవిందా / శ్రీకృష్ణా',
        answer_hi: 'गोविंद / श्रीकृष्ण',
        options: ['Govinda / Krishna', 'Indra', 'Varuna', 'Yama'],
        options_te: ['గోవిందా / శ్రీకృష్ణా', 'ఇంద్రుడు', 'వరుణుడు', 'యముడు'],
        options_hi: ['गोविंद / श्रीकृष्ण', 'इंद्र', 'वरुण', 'यमदेव'],
        learnMore: 'The name "Govinda" echoes through time as the supreme refuge of those who possess no other protector in the world.',
        learnMore_te: 'ఎవరూ దిక్కులేని అనాథలకు భగవంతుడైన గోవిందుడే ఏకైక దిక్కు.',
        learnMore_hi: '"गोविंद" नाम का आश्रय लेकर द्रौपदी ने सिद्ध किया कि जिसके रक्षक ईश्वर हैं, उसका संसार में कोई बाल भी बांका नहीं कर सकता।',
        xpReward: 20
      }
    ]
  },

  // Level 49
  {
    levelNumber: 49,
    partNumber: 5,
    title: 'Fierce Vows of Retribution',
    title_te: 'ప్రతీకార ప్రతిజ్ఞలు',
    title_hi: 'प्रतिशोध की भीषण प्रतिज्ञाएं',
    subtitle: 'Bhima’s Blood Oath & Draupadi’s Hair',
    subtitle_te: 'రక్తతర్పణ ప్రతిజ్ఞ & ద్రౌపది వీడిన కురులు',
    subtitle_hi: 'छाती का रक्त और खुले केशों का प्रण',
    questions: [
      {
        id: 'q49-1',
        type: 'mcq',
        prompt: 'What horrific vow did Bhima thunder before the terrified court regarding Dushasana?',
        prompt_te: 'దుశ్శాసనుడి గురించి భీముడు సభ దద్దరిల్లేలా చేసిన భయంకరమైన ప్రతిజ్ఞ ఏమిటి?',
        prompt_hi: 'दुःशासन के संबंध में भीम ने भरी सभा में क्या भयानक प्रतिज्ञा की थी?',
        options: [
          'To tear open Dushasana’s chest on the battlefield and drink his warm blood like nectar',
          'To lock Dushasana in a dungeon',
          'To banish Dushasana to the southern seas',
          'To cut off Dushasana’s right hand'
        ],
        options_te: [
          'కురుక్షేత్ర రణరంగంలో దుశ్శాసనుడి గుండెలను చీల్చి అతని వెచ్చని రక్తాన్ని తాగుతానని',
          'దుశ్శాసనుడిని చెరసాలలో బంధిస్తానని',
          'దక్షిణ సముద్రాలకు బహిష్కరిస్తానని',
          'దుశ్శాసనుడి కుడిచేతిని నరుకుతానని'
        ],
        options_hi: [
          'युद्धभूमि में दुःशासन की छाती चीरकर उसका गरम रक्त पियूंगा',
          'दुःशासन को कारागार में डालूंगा',
          'दुःशासन को देश निकाला दूंगा',
          'दुःशासन का हाथ काट दूंगा'
        ],
        correctIndex: 0,
        learnMore: 'Bhima swore: "If I do not rip open the chest of this wretch and drink his blood, may I not attain the realms of my ancestors!"',
        learnMore_te: 'ఈ ప్రతిజ్ఞ నెరవేర్చకపోతే తన పూర్వీకుల పుణ్యలోకాలకు వెళ్ళే అర్హత తనకు లేకుండా పోతుందని భీముడు శపథం చేశాడు.',
        learnMore_hi: 'भीम ने कहा कि यदि मैं इस पापी का वक्ष चीरकर लहू न पियूं तो मुझे पूर्वजों के लोक में स्थान न मिले।',
        xpReward: 10
      },
      {
        id: 'q49-2',
        type: 'true_false',
        prompt: 'Queen Draupadi vowed that her hair would remain unbound and disheveled until it was washed in the blood of Dushasana.',
        prompt_te: 'దుశ్శాసనుడి రక్తంతో తడిపేంత వరకు తన కేశపాశాలను ముడవబోనని ద్రౌపది ప్రతిజ్ఞ చేసింది.',
        prompt_hi: 'महारानी द्रौपदी ने प्रतिज्ञा की कि उनके केश तब तक खुले रहेंगे जब तक वे दुःशासन के रक्त से धोए न जाएं।',
        correctAnswer: true,
        learnMore: 'For thirteen agonizing years, Draupadi wore her hair open as an unyielding symbol of righteous justice waiting to be fulfilled.',
        learnMore_te: 'పదమూడేళ్ల పాటు ద్రౌపది తన వీడిన కురులతోనే తిరుగుతూ ప్రతీకార దీక్షను సజీవంగా ఉంచింది.',
        learnMore_hi: 'तेरह वर्षों तक द्रौपदी के खुले केश कुरुवंश के विनाश और न्याय की प्रतीक्षा का प्रतीक बने रहे।',
        xpReward: 10
      },
      {
        id: 'q49-3',
        type: 'riddle',
        prompt: 'Standing alongside Bhima with flaming eyes, I vowed to slay Karna, while Sahadeva swore to extinguish Shakuni and Nakula to eliminate Shakuni’s sons. Who am I?',
        prompt_te: 'సభలో భీముడి పక్కన నిలబడి, కర్ణుడిని సంహరిస్తానని ప్రతిజ్ఞ చేసిన ధనుర్ధారిని నేను. నేను ఎవరిని?',
        prompt_hi: 'भीम के साथ खड़े होकर कर्ण के वध की भीषण प्रतिज्ञा करने वाला गांडीवधारी वीर। मैं कौन हूँ?',
        hint: 'The third Pandava.',
        hint_te: 'గాండీవధారి.',
        hint_hi: 'अर्जुन।',
        answer: 'Arjuna (Phalguna)',
        answer_te: 'అర్జునుడు (ఫల్గుణుడు)',
        answer_hi: 'अर्जुन (फाल्गुन)',
        options: ['Arjuna (Phalguna)', 'Yudhishthira', 'Bhima', 'Abhimanyu'],
        options_te: ['అర్జునుడు (ఫల్గుణుడు)', 'యుధిష్ఠిరుడు', 'భీముడు', 'అభిమన్యుడు'],
        options_hi: ['अर्जुन (फाल्गुन)', 'युधिष्ठिर', 'भीम', 'अभिमन्यु'],
        learnMore: 'Every single vow uttered in that fateful assembly hall was meticulously fulfilled eighteen years later at Kurukshetra.',
        learnMore_te: 'ఆ సభలో చేసిన ప్రతి ప్రతిజ్ఞ కూడా కురుక్షేత్ర యుద్ధంలో అక్షరాలా నెరవేర్చబడింది.',
        learnMore_hi: 'उस सभा में ली गई एक-एक प्रतिज्ञा कुरुक्षेत्र के रणक्षेत्र में रक्त से पूरी की गई।',
        xpReward: 20
      }
    ]
  },

  // Level 50
  {
    levelNumber: 50,
    partNumber: 5,
    title: 'The Exiled Verdict',
    title_te: 'వనవాస శిక్ష',
    title_hi: 'अनुद्यूत और वनवास का दंड',
    subtitle: 'Twelve Years Forest & One Year Incognito',
    subtitle_te: '12 ఏళ్ల వనవాసం & 1 ఏడాది అజ్ఞాతవాసం',
    subtitle_hi: '१२ वर्ष वनवास और १ वर्ष अज्ञातवास',
    questions: [
      {
        id: 'q50-1',
        type: 'mcq',
        prompt: 'What terrified King Dhritarashtra into briefly restoring the Pandavas’ liberty and kingdom before the second dice game (Anudyuta)?',
        prompt_te: 'మొదటి జూదం తర్వాత భయపడి పాండవుల రాజ్యాన్ని తిరిగి ఇచ్చేలా ధృతరాష్ట్రుడిని వణికించిన శకునాలు ఏమిటి?',
        prompt_hi: 'किस अशुभ घटना और अपशकुनों से भयभीत होकर धृतराष्ट्र ने द्रौपदी को वरदान देकर पाण्डवों को उनका राज्य लौटा दिया था?',
        options: [
          'Jackals howling in the sacrificial room, donkeys braying, vultures circling the palace, and Gandhari warning of immediate total destruction',
          'An eclipse of the sun',
          'An earthquake that destroyed Hastinapur’s walls',
          'A sudden famine in Gandhara'
        ],
        options_te: [
          'యాగశాలలో నక్కలు కూయడం, గాడిదలు అరవడం, రాబందులు తిరగడం మరియు సర్వనాశనం ఖాయమని గాంధారి హెచ్చరించడం',
          'సూర్యగ్రహణం సంభవించడం',
          'భూకంపం వచ్చి కోట గోడలు కూలడం',
          'గాంధార దేశంలో కరువు రావడం'
        ],
        options_hi: [
          'अग्निहोत्र शाला में गीदड़ों का रोना, गदहों का रेंकना, गिद्धों का मंडराना और गांधारी द्वारा कुलनाश की चेतावनी देना',
          'अचानक सूर्यग्रहण पड़ना',
          'हस्तिनापुर की दीवारें भूकंप से गिरना',
          'द्वारका से सेना का चढ़ आना'
        ],
        correctIndex: 0,
        learnMore: 'Terrified by these horrific celestial omens, Dhritarashtra granted Draupadi three boons; she asked only for the freedom of her husbands and their weapons.',
        learnMore_te: 'ఈ భయంకర శకునాలకు భయపడిన ధృతరాష్ట్రుడు ద్రౌపదికి వరాలు ఇచ్చి పాండవుల దాస్య విముక్తిని కలిగించాడు.',
        learnMore_hi: 'धृतराष्ट्र ने भयभीत होकर द्रौपदी से वर मांगने को कहा, और द्रौपदी ने पाण्डवों की स्वतंत्रता मांगी।',
        xpReward: 10
      },
      {
        id: 'q50-2',
        type: 'true_false',
        prompt: 'In the second dice game (Anudyuta), the agreed condition was twelve years of forest exile (Vanavasa) and one thirteenth year living incognito (Agyatavasa).',
        prompt_te: 'రెండవ జూదంలో ఓడిపోయిన వారు 12 ఏళ్ళు వనవాసం, 13వ ఏట ఎవరికీ తెలియకుండా అజ్ఞాతవాసం చేయాలనే నిబంధన పెట్టారు.',
        prompt_hi: 'अनुद्यूत (दूसरे खेल) की शर्त थी कि हारने वाले को १२ वर्ष का वनवास और १३वें वर्ष अज्ञातवास में रहना होगा।',
        correctAnswer: true,
        learnMore: 'If discovered during the incognito year, the exile would reset for another full twelve years.',
        learnMore_te: 'అజ్ఞాతవాసంలో దొరికిపోతే మళ్ళీ పన్నెండేళ్ల వనవాసం చేయాల్సి ఉంటుంది.',
        learnMore_hi: 'यदि १३वें वर्ष में पहचान लिए जाते, तो पुनः १२ वर्ष का वनवास भोगना पड़ता।',
        xpReward: 10
      },
      {
        id: 'q50-3',
        type: 'riddle',
        prompt: 'Generous to a fault, firstborn son of Surya who stood steadfastly beside Duryodhana throughout the tragic dice assembly. Who am I?',
        prompt_te: 'సూర్యపుత్రుడు, దానవీరుడు; జూదసభలో దుర్యోధనుడి పక్షాన నిలిచిన విషాద వీరుణ్ని నేను. నేను ఎవరిని?',
        prompt_hi: 'सूर्यपुत्र, महादानी, जिसने द्यूत सभा में दुर्योधन का साथ देकर अपने जीवन का सबसे दुखद अध्याय लिखा। मैं कौन हूँ?',
        hint: 'Completing Part 5 unlocks his golden warrior wallpaper in your gallery!',
        hint_te: 'పార్ట్ 5 పూర్తి చేయడంతో ఈయన వాల్‌పేపర్ అన్‌లాక్ అవుతుంది.',
        hint_hi: 'भाग 5 पूर्ण करने पर इनका स्वर्ण कवच वॉलपेपर अनलॉक होता है।',
        answer: 'Karna (Danaveera)',
        answer_te: 'కర్ణుడు (దానవీరుడు)',
        answer_hi: 'कर्ण (दानवीर)',
        options: ['Karna (Danaveera)', 'Shakuni', 'Bhishma', 'Drona'],
        options_te: ['కర్ణుడు (దానవీరుడు)', 'శకుని', 'భీష్ముడు', 'ద్రోణుడు'],
        options_hi: ['कर्ण (दानवीर)', 'शकुनि', 'भीष्म', 'द्रोण'],
        learnMore: 'The Pandavas cast off their royal finery, donned deer skins, and walked out of Hastinapur into the wilderness.',
        learnMore_te: 'రాజవస్త్రాలను విడిచి నారచీరలు ధరించి పాండవులు అరణ్యానికి పయనమయ్యారు.',
        learnMore_hi: 'पाण्डव राजसी वस्त्र त्यागकर मृगचर्म धारण कर हस्तिनापुर से वन की ओर निकल पड़े।',
        xpReward: 20
      }
    ]
  }
];
