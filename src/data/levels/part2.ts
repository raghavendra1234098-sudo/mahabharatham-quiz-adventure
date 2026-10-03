import { Level } from '../../types/game';

export const PART_2_LEVELS: Level[] = [
  // Level 11
  {
    levelNumber: 11,
    partNumber: 2,
    title: 'The Royal Nursery',
    title_te: 'రాజకుమారుల బాల్యం',
    title_hi: 'राजकुमारों का बाल्यकाल',
    subtitle: 'Playground Games & Budding Rivalries',
    subtitle_te: 'ఆటపాటలు & పెరుగుతున్న అసూయ',
    subtitle_hi: 'खेलकूद और अंकुरित ईर्ष्या',
    questions: [
      {
        id: 'q11-1',
        type: 'mcq',
        prompt: 'Which Pandava brother routinely outmatched all one hundred Kauravas in childhood wrestling and tree-climbing games?',
        prompt_te: 'బాల్య క్రీడల్లోనూ, కుస్తీ పోటీల్లోనూ వందమంది కౌరవులను ఒంటిచేత్తో ఓడించిన పాండవ వీరుడు ఎవరు?',
        prompt_hi: 'बाल्यकाल के खेलों और कुश्ती में अकेले ही सौ कौरव भाइयों पर कौन सा पाण्डव भारी पड़ता था?',
        options: ['Bhima', 'Arjuna', 'Yudhishthira', 'Nakula'],
        options_te: ['భీముడు', 'అర్జునుడు', 'యుధిష్ఠిరుడు', 'నకులుడు'],
        options_hi: ['भीम', 'अर्जुन', 'युधिष्ठिर', 'नकुल'],
        correctIndex: 0,
        learnMore: 'Bhima playfully shook trees while the Kauravas were perched on branches, tumbling them to the ground without injury, sparking Duryodhana’s resentment.',
        learnMore_te: 'భీముడు చెట్లను కదిలించి కౌరవులను కింద పడేసేవాడు; ఇది దుర్యోధనుడిలో తీవ్ర ఈర్ష్యకు బీజం వేసింది.',
        learnMore_hi: 'भीम खेल-खेल में वृक्ष हिलाकर कौरवों को नीचे गिरा देते थे, जिससे दुर्योधन के मन में द्वेष उत्पन्न हुआ।',
        xpReward: 10
      },
      {
        id: 'q11-2',
        type: 'true_false',
        prompt: 'Prince Duryodhana was the eldest among the one hundred Kaurava brothers born to Dhritarashtra and Gandhari.',
        prompt_te: 'ధృతరాష్ట్రుడు మరియు గాంధారి దంపతులకు జన్మించిన వందమంది కౌరవులలో దుర్యోధనుడు పెద్దవాడు.',
        prompt_hi: 'धृतराष्ट्र और गांधारी के सौ पुत्रों में दुर्योधन सबसे बड़े थे।',
        correctAnswer: true,
        learnMore: 'Duryodhana was born on the very same day as Bhima, and bad omens attended his birth in Hastinapur.',
        learnMore_te: 'భీముడు పుట్టిన రోజే దుర్యోధనుడు కూడా జన్మించాడు; అతని జనన సమయంలో అనేక దుశ్శకునాలు కనిపించాయి.',
        learnMore_hi: 'दुर्योधन का जन्म उसी दिन हुआ था जिस दिन भीम जन्मे थे, और उनके जन्म के समय अमंगलकारी गीदड़ों की आवाजें सुनाई दी थीं।',
        xpReward: 10
      },
      {
        id: 'q11-3',
        type: 'riddle',
        prompt: 'Blindfolded out of unconditional devotion to my sightless husband, I gave birth to one hundred sons and one daughter (Dushala). Who am I?',
        prompt_te: 'అంధుడైన భర్త పట్ల పతివ్రతా ధర్మంతో కళ్ళకు గంతలు కట్టుకుని, వందమంది కుమారులకు మరియు దుశ్శల అనే కుమార్తెకు జన్మనిచ్చిన రాణిని నేను. నేను ఎవరిని?',
        prompt_hi: 'नेत्रहीन पति के प्रति अगाध निष्ठा के कारण जीवनभर आंखों पर पट्टी बांधे रखी और सौ पुत्रों व दुःशला को जन्म दिया। मैं कौन हूँ?',
        hint: 'Princess of Gandhara and sister of Shakuni.',
        hint_te: 'గాంధార రాజపుత్రి, శకుని సోదరి.',
        hint_hi: 'गांधार नरेश सुबल की पुत्री और शकुनि की बहन।',
        answer: 'Queen Gandhari',
        answer_te: 'గాంధారి దేవి',
        answer_hi: 'महारानी गांधारी',
        options: ['Queen Gandhari', 'Queen Kunti', 'Queen Satyavati', 'Queen Madri'],
        options_te: ['గాంధారి దేవి', 'కుంతీ దేవి', 'సత్యవతి దేవి', 'మాద్రీ దేవి'],
        options_hi: ['महारानी गांधारी', 'महारानी कुन्ती', 'महारानी सत्यवती', 'महारानी माद्री'],
        learnMore: 'Gandhari blindfolded herself when she wed Dhritarashtra so that she would never enjoy a pleasure denied to her lord.',
        learnMore_te: 'తన భర్తకు లేని దృష్టి సుఖం తనకు వద్దనుకుని గాంధారి జీవితాంతం కళ్ళకు గంతలు కట్టుకుంది.',
        learnMore_hi: 'गांधारी ने अपने पति की विवशता को साझा करने के लिए स्वेच्छा से आजीवन आंखों पर पट्टी बांधी।',
        xpReward: 20
      }
    ]
  },

  // Level 12
  {
    levelNumber: 12,
    partNumber: 2,
    title: 'The Poisoning of Bhima',
    title_te: 'భీముడికి విషప్రయోగం',
    title_hi: 'भीम को विष देना',
    subtitle: 'Pramanakoti & The Subterranean Nagaloka',
    subtitle_te: 'ప్రమాణకోటి & నాగలోక ప్రవేశం',
    subtitle_hi: 'प्रमाणकोटि और नागलोक की यात्रा',
    questions: [
      {
        id: 'q12-1',
        type: 'mcq',
        prompt: 'At which riverbank picnic resort did Duryodhana secretly feed Bhima poisoned sweet pudding (Kalakuta kheer)?',
        prompt_te: 'దుర్యోధనుడు ఏ విహార ప్రదేశంలో భీముడికి కాలకూట విషం కలిపిన పాయసాన్ని తినిపించాడు?',
        prompt_hi: 'दुर्योधन ने किस जलक्रीड़ा स्थल पर धोखे से भीम को कालकूट विषयुक्त खीर खिलाई थी?',
        options: ['Pramanakoti on Ganga', 'Varnavata', 'Kurukshetra', 'Kampilya'],
        options_te: ['గంగాతీరంలోని ప్రమాణకోటి', 'వారణావతం', 'కురుక్షేత్రం', 'కాంపిల్యం'],
        options_hi: ['गंगा तट पर प्रमाणकोटि', 'वारणावत', 'कुरुक्षेत्र', 'काम्पिल्य'],
        correctIndex: 0,
        learnMore: 'Believing Bhima dead from the deadly poison, Duryodhana bound him in creepers and tossed him into the deep whirlpools of the Ganga.',
        learnMore_te: 'విషం మత్తులో స్పృహ తప్పిన భీముడిని తీగలతో బంధించి దుర్యోధనుడు గంగానది ప్రవాహంలోకి తోసివేశాడు.',
        learnMore_hi: 'अचेत भीम को लताओं से बांधकर दुर्योधन ने गंगा की अथाह गहराई में फेंक दिया था।',
        xpReward: 10
      },
      {
        id: 'q12-2',
        type: 'true_false',
        prompt: 'In the realm of Nagas, the venomous serpent bites neutralized the plant poison in Bhima’s body and saved his life.',
        prompt_te: 'నాగలోకంలో సర్పాలు కాటు వేయడం వల్ల భీముడి శరీరంలోని కాలకూట విషం విరిగిపోయి అతనికి ప్రాణరక్షణ కలిగింది.',
        prompt_hi: 'नागलोक में सर्पों के काटने से भीम के शरीर का विष प्रभावहीन हो गया और उनके प्राण बच गए।',
        correctAnswer: true,
        learnMore: 'Serpent venom counteracted the plant toxin (Sthavara visha), awakening Bhima who defeated the attacking serpents.',
        learnMore_te: 'సర్ప విషం వృక్ష విషాన్ని హరించివేయడంతో భీముడికి స్పృహ వచ్చింది.',
        learnMore_hi: 'सर्प विष ने कालकूट विष को निष्प्रभावी कर दिया और भीम पूर्णतः स्वस्थ होकर उठ बैठे।',
        xpReward: 10
      },
      {
        id: 'q12-3',
        type: 'riddle',
        prompt: 'King of the Nagas and ancestor of Kunti, I blessed Bhima to drink eight bowls of divine nectar (Rasayana), giving him the strength of 10,000 elephants. Who am I?',
        prompt_te: 'నాగరాజును, కుంతికి పూర్వీకుడిని; భీముడికి పదివేల ఏనుగుల బలాన్నిచ్చే అమృత రసాయనాన్ని తాగించిన దేవుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'नागों का राजा और कुन्ती के ननिहाल का पूर्वज, जिसने भीम को आठ कुण्ड दिव्य रस पिलाकर दस सहस्र हाथियों का बल दिया। मैं कौन हूँ?',
        hint: 'He is the legendary sovereign serpent of Patalaloka.',
        hint_te: 'పాతాళ లోక మహాసర్ప రాజు.',
        hint_hi: 'पाताल लोक के महान नागराज।',
        answer: 'King Vasuki / Aryaka',
        answer_te: 'వాసుకి / ఆర్యక నాగరాజు',
        answer_hi: 'नागराज वासुकि / आर्यक',
        options: ['King Vasuki / Aryaka', 'Takshaka', 'Sheshanaga', 'Kaliya'],
        options_te: ['వాసుకి / ఆర్యక నాగరాజు', 'తక్షకుడు', 'శేషనాగు', 'కాళింగుడు'],
        options_hi: ['नागराज वासुकि / आर्यक', 'तक्षक', 'शेषनाग', 'कालिया नाग'],
        learnMore: 'Bhima drank eight pots of the celestial elixir, slept for eight days, and returned to Hastinapur infinitely stronger.',
        learnMore_te: 'భీముడు ఎనిమిది కుండల అమృతాన్ని తాగి ఎనిమిది రోజుల పాటు నిద్రించి అపారమైన బలంతో తిరిగి వచ్చాడు.',
        learnMore_hi: 'भीम ने आठ कुण्ड अमृत पीकर आठ दिन तक विश्राम किया और असीम बलशाली होकर हस्तिनापुर लौटे।',
        xpReward: 20
      }
    ]
  },

  // Level 13
  {
    levelNumber: 13,
    partNumber: 2,
    title: 'The Arrival of Drona',
    title_te: 'ద్రోణాచార్యుల ఆగమనం',
    title_hi: 'द्रोणाचार्य का पदार्पण',
    subtitle: 'The Well, The Ball & The Grass Blades',
    subtitle_te: 'బావి, బంతి & గడ్డిపరకల వింత',
    subtitle_hi: 'कुआं, गेंद और सींकों का चमत्कार',
    questions: [
      {
        id: 'q13-1',
        type: 'mcq',
        prompt: 'How did the ascetic Drona retrieve the rubber ball and golden ring dropped into a deep well by the young princes?',
        prompt_te: 'రాజకుమారులు బావిలో పడేసిన బంతిని మరియు ఉంగరాన్ని ద్రోణాచార్యుడు ఎలా బయటకు తీశాడు?',
        prompt_hi: 'राजकुमारों की कुएं में गिरी गेंद और अंगूठी को द्रोणाचार्य ने किस युक्ति से बाहर निकाला था?',
        options: [
          'By shooting a chain of enchanted grass blades (Isika Astra)',
          'By commanding the water to rise',
          'By sending a trained hawk',
          'By climbing down a rope'
        ],
        options_te: [
          'బాణాలుగా మార్చిన గడ్డిపరకల గొలుసును సంధించి',
          'నీటిని పైకి పొంగేలా చేసి',
          'శిక్షణ పొందిన డేగను పంపి',
          'తాడుతో బావిలోకి దిగి'
        ],
        options_hi: [
          'सींकों की बाण-श्रृंखला बनाकर (ईषिका अस्त्र से)',
          'जल को ऊपर उछालकर',
          'बाज पक्षी को भेजकर',
          'रस्सी के सहारे नीचे उतरकर'
        ],
        correctIndex: 0,
        learnMore: 'Drona shot grass blades one after another, each piercing the tail of the previous, forming a linked spear to pull out the ball effortlessly.',
        learnMore_te: 'ఒక గడ్డిపరక వెనుక మరొకటి నాటుకునేలా బాణాలు వేసి గొలుసులా చేసి బంతిని బయటకు లాగాడు.',
        learnMore_hi: 'द्रोण ने एक सींक में दूसरी सींक फंसाकर अद्भुत बाण-श्रृंखला बनाई और गेंद निकाल ली।',
        xpReward: 10
      },
      {
        id: 'q13-2',
        type: 'true_false',
        prompt: 'Guru Drona was the son of the illustrious Sage Bharadwaja, born miraculously in a clay pot (Drona).',
        prompt_te: 'ద్రోణాచార్యుడు భరద్వాజ మహర్షి కుమారుడు, ఒక ద్రోణంలో (కుండలో) జన్మించాడు.',
        prompt_hi: 'गुरु द्रोणाचार्य महर्षि भारद्वाज के पुत्र थे और उनका जन्म द्रोण (कलश) से हुआ था।',
        correctAnswer: true,
        learnMore: 'Because he was born in a vessel called a Drona, the sage named his son Dronacharya.',
        learnMore_te: 'కుండలో జన్మించినందువల్ల ఆయనకు ద్రోణుడు అనే పేరు వచ్చింది.',
        learnMore_hi: 'मिट्टी के कलश (द्रोण) से उत्पन्न होने के कारण उनका नाम द्रोण पड़ा।',
        xpReward: 10
      },
      {
        id: 'q13-3',
        type: 'riddle',
        prompt: 'Informed of the miraculous archery at the well, I immediately recognized Drona and appointed him royal preceptor for all princes. Who am I?',
        prompt_te: 'బావి వద్ద జరిగిన అద్భుతాన్ని విని, వెంటనే ద్రోణుడిని గుర్తించి రాజకుమారులందరికీ కులగురువుగా నియమించిన పెద్దను నేను. నేను ఎవరిని?',
        prompt_hi: 'कुएं के चमत्कार को सुनकर द्रोण को पहचान लिया और उन्हें समस्त राजकुमारों का धनुर्विद्या गुरु नियुक्त किया। मैं कौन हूँ?',
        hint: 'The grand patriarch of the Bharatas.',
        hint_te: 'కురువంశ పితామహుడు.',
        hint_hi: 'हस्तिनापुर के पितामह।',
        answer: 'Bhishma Pitamaha',
        answer_te: 'భీష్మ పితామహుడు',
        answer_hi: 'भीष्म पितामह',
        options: ['Bhishma Pitamaha', 'King Dhritarashtra', 'Mahatma Vidura', 'Sage Kripa'],
        options_te: ['భీష్మ పితామహుడు', 'ధృతరాష్ట్ర మహారాజు', 'విదురుడు', 'కృపాచార్యుడు'],
        options_hi: ['भीष्म पितामह', 'राजा धृतराष्ट्र', 'महात्मा विदुर', 'कृपाचार्य'],
        learnMore: 'Bhishma showered Drona with palaces, wealth, and honors, entrusting all 105 princes to his expert guidance.',
        learnMore_te: 'భీష్ముడు ద్రోణుడికి సకల సౌకర్యాలు సమకూర్చి నూట ఐదుగురు రాకుమారులను ఆయన శిష్యరికంలో ఉంచాడు.',
        learnMore_hi: 'भीष्म ने द्रोणाचार्य को आदरपूर्वक महल और धन-संपत्ति देकर कौरवों और पाण्डवों की शिक्षा का दायित्व सौंपा।',
        xpReward: 20
      }
    ]
  },

  // Level 14
  {
    levelNumber: 14,
    partNumber: 2,
    title: 'The Royal Gurukula',
    title_te: 'రాజ గురుకులం',
    title_hi: 'राजकीय गुरुकुल',
    subtitle: 'Martial Training & The Crocodile Test',
    subtitle_te: 'యుద్ధ విద్యలు & మొసలి పరీక్ష',
    subtitle_hi: 'युद्धकला और मगरमच्छ की परीक्षा',
    questions: [
      {
        id: 'q14-1',
        type: 'mcq',
        prompt: 'When an illusory crocodile seized Guru Drona in the Ganga, which prince shot multiple arrows underwater in the dark to save his Guru?',
        prompt_te: 'గంగానదిలో మొసలి ద్రోణుడి కాలును పట్టుకున్నప్పుడు, చీకటిలో నీటి అడుగున బాణాలు వేసి గురువును కాపాడిన శిష్యుడు ఎవరు?',
        prompt_hi: 'गंगा स्नान के समय जब एक मायावी मगरमच्छ ने द्रोण को पकड़ा, तब किसने तत्काल बाण चलाकर गुरु की रक्षा की?',
        options: ['Arjuna', 'Duryodhana', 'Yudhishthira', 'Karna'],
        options_te: ['అర్జునుడు', 'దుర్యోధనుడు', 'యుధిష్ఠిరుడు', 'కర్ణుడు'],
        options_hi: ['अर्जुन', 'दुर्योधन', 'युधिष्ठिर', 'कर्ण'],
        correctIndex: 0,
        learnMore: 'While other princes froze in panic, Arjuna reacted instantaneously with unerring precision, earning the divine Brahmasira weapon.',
        learnMore_te: 'ఇతరులు భయంతో చూస్తుండగానే అర్జునుడు తక్షణమే స్పందించి బాణాలతో మొసలిని సంహరించి గురువును కాపాడాడు.',
        learnMore_hi: 'अन्य सभी के स्तब्ध रह जाने पर भी अर्जुन ने पलक झपकते बाणों से ग्राह को मार डाला, जिससे द्रोण ने उन्हें ब्रह्मशिरा अस्त्र दिया।',
        xpReward: 10
      },
      {
        id: 'q14-2',
        type: 'true_false',
        prompt: 'Arjuna practiced archery in pitch darkness after realizing that hands can feed the mouth in the dark through muscle memory.',
        prompt_te: 'చీకట్లో కూడా చేతులు అన్నాన్ని నోటి వద్దకే ఎలా చేర్చగలవో గ్రహించి, రాత్రిపూట చీకట్లో ధనుర్విద్య సాధన చేశాడు అర్జునుడు.',
        prompt_hi: 'अंधेरे में भी हाथ मुंह तक भोजन पहुंचा सकता है—यह देखकर अर्जुन ने घोर अंधकार में शब्दभेदी बाण चलाने का अभ्यास किया।',
        correctAnswer: true,
        learnMore: 'Drona was awestruck to find Arjuna practicing late at night in utter darkness, vowing to make him the peerless archer of the world.',
        learnMore_te: 'అర్జునుడి ఈ నిరంతర సాధనను చూసిన ద్రోణుడు అతడిని ముల్లోకాలలో అసమాన ధనుర్ధారిగా చేస్తానని ప్రతిజ్ఞ చేశాడు.',
        learnMore_hi: 'द्रोणाचार्य ने रात में धनुष की टंकार सुनकर अर्जुन को अभ्यास करते देखा और उन्हें सर्वश्रेष्ठ धनुर्धर बनाने का वचन दिया।',
        xpReward: 10
      },
      {
        id: 'q14-3',
        type: 'riddle',
        prompt: 'Born with a divine gem (Mani) embedded on my forehead that protected me from disease and weapons, I am Drona’s beloved son. Who am I?',
        prompt_te: 'పుట్టుకతోనే నొసటిపై దివ్యమైన మణి కలిగి, ఆకలి దప్పులు లేని అమరత్వం పొందిన ద్రోణాచార్యుల ప్రియ కుమారుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'मस्तक पर जन्मजात दिव्य मणि लेकर उत्पन्न हुआ, जिससे मुझे भूख, प्यास, रोग और शस्त्रों का कोई भय न था। मैं कौन हूँ?',
        hint: 'His neigh at birth sounded like a celestial horse.',
        hint_te: 'జన్మించినప్పుడు గుర్రంలా సకిలించాడు.',
        hint_hi: 'जन्म के समय अश्व के समान हिनहिनाने वाला द्रोणपुत्र।',
        answer: 'Ashwatthama',
        answer_te: 'అశ్వత్థామ',
        answer_hi: 'अश्वत्थामा',
        options: ['Ashwatthama', 'Kripa', 'Dhrishtadyumna', 'Karna'],
        options_te: ['అశ్వత్థామ', 'కృపాచార్యుడు', 'ధృష్టద్యుమ్నుడు', 'కర్ణుడు'],
        options_hi: ['अश्वत्थामा', 'कृपाचार्य', 'धृष्टद्युम्न', 'कर्ण'],
        learnMore: 'Drona loved Ashwatthama dearly, but held Arjuna’s supreme discipline in even higher esteem.',
        learnMore_te: 'ద్రోణుడు అశ్వత్థామను ఎంతగానో ప్రేమించినప్పటికీ, అర్జునుడి అచంచల ఏకాగ్రతను అత్యున్నతంగా గౌరవించాడు.',
        learnMore_hi: 'द्रोणाचार्य अपने पुत्र अश्वत्थामा से गहरा प्रेम करते थे, किंतु योग्यता में अर्जुन को सदैव अग्रणी रखते थे।',
        xpReward: 20
      }
    ]
  },

  // Level 15
  {
    levelNumber: 15,
    partNumber: 2,
    title: 'The Bird’s Eye Test',
    title_te: 'పిట్ట కన్ను పరీక్ష',
    title_hi: 'चिड़िया की आंख की परीक्षा',
    subtitle: 'Supreme Focus & Laser Vision',
    subtitle_te: 'ఏకాగ్రత & లక్ష్య సాధన',
    subtitle_hi: 'एकाग्रता और अचूक लक्ष्य-संधान',
    questions: [
      {
        id: 'q15-1',
        type: 'mcq',
        prompt: 'When Guru Drona asked the princes what they saw while aiming at the artificial bird on the tree, what was Arjuna’s famous reply?',
        prompt_te: 'చెట్టుపై ఉన్న పిట్టను గురిచూసేటప్పుడు ఏమి కనిపిస్తోందని ద్రోణుడు అడిగినప్పుడు అర్జునుడి ప్రసిద్ధ సమాధానం ఏమిటి?',
        prompt_hi: 'वृक्ष पर रखी कृत्रिम चिड़िया पर निशाना साधते समय द्रोणाचार्य के पूछने पर अर्जुन ने क्या उत्तर दिया?',
        options: [
          '"I see only the eye of the bird, nothing else."',
          '"I see the bird, the leaves, and the blue sky."',
          '"I see you, my Guru, and the target."',
          '"I see the branches swaying in the wind."'
        ],
        options_te: [
          '"నాకు కేవలం పిట్ట కన్ను మాత్రమే కనిపిస్తోంది, మరేమీ కనిపించడం లేదు."',
          '"నాకు పిట్ట, ఆకులు మరియు నీలాకాశం కనిపిస్తున్నాయి."',
          '"నాకు మీరు, మరియు లక్ష్యం కనిపిస్తున్నాయి."',
          '"నాకు గాలిలో ఊగుతున్న కొమ్మలు కనిపిస్తున్నాయి."'
        ],
        options_hi: [
          '"मुझे केवल चिड़िया की आंख दिख रही है, और कुछ नहीं।"',
          '"मुझे चिड़िया, पत्ते और नीला आकाश दिखाई दे रहा है।"',
          '"मुझे आप और मेरा लक्ष्य दिख रहे हैं।"',
          '"मुझे हवा में हिलती टहनियां दिख रही हैं।"'
        ],
        correctIndex: 0,
        learnMore: 'All other princes, including Yudhishthira and Duryodhana, mentioned seeing the tree, trunk, or bird’s body, and were told to step down.',
        learnMore_te: 'మిగిలిన రాకుమారులంతా చెట్టు, ఆకులు కనిపిస్తున్నాయని చెప్పగా, అర్జునుడు మాత్రమే కన్నును చూసి బాణాన్ని గురిపెట్టాడు.',
        learnMore_hi: 'अन्य सभी राजकुमार वृक्ष और पक्षी का शरीर देख रहे थे; केवल अर्जुन की दृष्टि पक्षी की पुतली पर केंद्रित थी।',
        xpReward: 10
      },
      {
        id: 'q15-2',
        type: 'true_false',
        prompt: 'Drona ordered Arjuna to shoot only after confirming that Arjuna saw absolutely nothing other than the bird’s eye.',
        prompt_te: 'పిట్ట కన్ను తప్ప మరేదీ కనిపించడం లేదని ధ్రువీకరించుకున్న తర్వాతే ద్రోణుడు బాణం వదలమని ఆజ్ఞాపించాడు.',
        prompt_hi: 'द्रोणाचार्य ने केवल तभी अर्जुन को बाण चलाने की आज्ञा दी जब अर्जुन ने कहा कि उसे आंख के अतिरिक्त कुछ नहीं दिखता।',
        correctAnswer: true,
        learnMore: 'Arjuna released the arrow, severing the wooden bird’s head cleanly to the ground, delighting Drona beyond measure.',
        learnMore_te: 'బాణం విడువగానే చెక్క పిట్ట తల నేలకూలింది; ద్రోణుడు ఆనందంతో అర్జునుడిని కౌగిలించుకున్నాడు.',
        learnMore_hi: 'बाण छूटते ही चिड़िया का सिर कटकर नीचे गिर पड़ा और द्रोण ने गद्गद होकर अर्जुन को गले लगा लिया।',
        xpReward: 10
      },
      {
        id: 'q15-3',
        type: 'riddle',
        prompt: 'Placed on a high banyan limb by Drona to test all Kuru princes in concentration, I held the secret to supreme archery. What object am I?',
        prompt_te: 'రాజకుమారుల ఏకాగ్రతను పరీక్షించడానికి ద్రోణుడు మర్రిచెట్టు కొమ్మపై ఉంచిన కృత్రిమ లక్ష్యాన్ని నేను. నేను ఏమిటి?',
        prompt_hi: 'राजकुमारों की एकाग्रता की परीक्षा लेने के लिए द्रोण द्वारा वृक्ष की डाल पर रखा गया कृत्रिम लक्ष्य। मैं क्या हूँ?',
        hint: 'A painted wooden creature.',
        hint_te: 'ఒక చెక్కతో చేసిన పక్షి బొమ్మ.',
        hint_hi: 'लकड़ी की बनी एक कृत्रिम चिड़िया।',
        answer: 'The Wooden Bird Target',
        answer_te: 'చెక్క పిట్ట లక్ష్యం',
        answer_hi: 'काष्ठ की कृत्रिम चिड़िया',
        options: ['The Wooden Bird Target', 'A Golden Apple', 'A Silver Shield', 'A Clay Pot'],
        options_te: ['చెక్క పిట్ట లక్ష్యం', 'బంగారు ఆపిల్', 'వెండి డాలు', 'మట్టి కుండ'],
        options_hi: ['काष्ठ की कृत्रिम चिड़िया', 'स्वर्ण फल', 'चांदी की ढाल', 'मिट्टी का घड़ा'],
        learnMore: 'The test of the bird’s eye remains history’s most celebrated metaphor for single-minded professional focus.',
        learnMore_te: 'పిట్ట కన్ను పరీక్ష అనేది లక్ష్యంపై నిశ్చలమైన ఏకాగ్రతకు నిదర్శనంగా నేటికీ ప్రపంచవ్యాప్తంగా ప్రసిద్ధి చెందింది.',
        learnMore_hi: 'चिड़िया की आंख का यह प्रसंग आज भी लक्ष्य-प्राप्ति और एकाग्रता का सार्वभौमिक उदाहरण माना जाता है।',
        xpReward: 20
      }
    ]
  },

  // Level 16
  {
    levelNumber: 16,
    partNumber: 2,
    title: 'The Devotion of Ekalavya',
    title_te: 'ఏకలవ్యుడి గురుభక్తి',
    title_hi: 'एकलव्य की गुरुभक्ति',
    subtitle: 'Nishada Archer & Supreme Guru Dakshina',
    subtitle_te: 'నిషాద వీరుడు & బొటనవేలు త్యాగం',
    subtitle_hi: 'निषाद बालक और अंगूठे का महान बलिदान',
    questions: [
      {
        id: 'q16-1',
        type: 'mcq',
        prompt: 'After being turned away due to royal protocol, how did Ekalavya master the sublime art of archery?',
        prompt_te: 'రాజవంశస్తులకు మాత్రమే విద్య నేర్పాలనే నియమం వల్ల తిరస్కరించబడిన ఏకలవ్యుడు ధనుర్విద్యను ఎలా నేర్చుకున్నాడు?',
        prompt_hi: 'राजकुल के नियमों के कारण शिक्षा से वंचित होने पर एकलव्य ने धनुर्विद्या में दक्षता कैसे प्राप्त की?',
        options: [
          'By building a clay idol of Guru Drona and practicing before it with supreme devotion',
          'By learning from Lord Shiva in dreams',
          'By reading secret palm-leaf manuscripts',
          'By studying under Parashurama'
        ],
        options_te: [
          'ద్రోణాచార్యుల మట్టి విగ్రహాన్ని ప్రతిష్టించుకుని, దాని ముందు అచంచల భక్తితో సాధన చేసి',
          'కలలో శివుడి వద్ద నేర్చుకుని',
          'రహస్య తాళపత్ర గ్రంథాలు చదివి',
          'పరశురాముడి వద్ద శిష్యరికం చేసి'
        ],
        options_hi: [
          'द्रोणाचार्य की मिट्टी की प्रतिमा बनाकर उसके समक्ष अनन्य निष्ठा से अभ्यास करके',
          'स्वप्न में भगवान शिव से सीखकर',
          'प्राचीन ग्रंथों का अध्ययन कर',
          'परशुराम के आश्रम में जाकर'
        ],
        correctIndex: 0,
        learnMore: 'Ekalavya treated the clay statue as the living presence of Drona, demonstrating that faith and disciplined practice transcend all barriers.',
        learnMore_te: 'మట్టి ప్రతిమనే గురువుగా భావించి చేసిన సాధన ద్వారా ఏకలవ్యుడు అద్భుతమైన ధనుర్ధారిగా ఎదిగాడు.',
        learnMore_hi: 'एकलव्य ने द्रोण की मृण्मयी प्रतिमा को साक्षात गुरु मानकर अभ्यास किया और अप्रतिम धनुर्धर बन गया।',
        xpReward: 10
      },
      {
        id: 'q16-2',
        type: 'true_false',
        prompt: 'Ekalavya severed his own right thumb without a whisper of regret when Guru Drona requested it as Guru Dakshina.',
        prompt_te: 'ద్రోణాచార్యుడు గురుదక్షిణగా తన కుడిచేతి బొటనవేలిని కోరగానే, ఏకలవ్యుడు ఏమాత్రం సంకోచించకుండా కోసి ఇచ్చాడు.',
        prompt_hi: 'गुरु द्रोणाचार्य द्वारा गुरुदक्षिणा में दाहिने हाथ का अंगूठा मांगने पर एकलव्य ने बिना किसी संकोच के उसे काटकर समर्पित कर दिया।',
        correctAnswer: true,
        learnMore: 'Drona sought this tragic Dakshina to uphold his sacred promise that no archer on earth would surpass Arjuna.',
        learnMore_te: 'అర్జునుడిని మించిన ధనుర్ధారి లోకంలో ఉండకూడదనే తన పూర్వ వాగ్దానాన్ని కాపాడుకోవడానికి ద్రోణుడు ఈ కఠిన నిర్ణయం తీసుకున్నాడు.',
        learnMore_hi: 'अर्जुन को दिए गए "सर्वश्रेष्ठ धनुर्धर" के वचन की रक्षा के लिए द्रोण ने यह कठोर गुरुदक्षिणा मांगी।',
        xpReward: 10
      },
      {
        id: 'q16-3',
        type: 'riddle',
        prompt: 'Barking relentlessly at the princes in the forest, my mouth was shut with seven harmless arrows fired so swiftly that not a drop of blood was spilled. What animal was I?',
        prompt_te: 'అడవిలో రాజకుమారులపై మొరుగుతుండగా, రక్తపు చుక్క కూడా రాకుండా ఏడు బాణాలతో నా నోటిని మూయించిన వింతను చూశారు. నేను ఏ జంతువును?',
        prompt_hi: 'जंगल में पाण्डवों के पीछे भौंकने पर जिसके मुख को बिना एक बूंद रक्त बहाए सात बाणों से भर दिया गया था। वह कौन सा पशु था?',
        hint: 'Man’s faithful four-legged companion.',
        hint_te: 'పాండవుల వేట కుక్క.',
        hint_hi: 'शिकारी कुत्ता।',
        answer: 'The Royal Hunting Dog',
        answer_te: 'రాజకుమారుల వేట కుక్క',
        answer_hi: 'शिकारी कुत्ता',
        options: ['The Royal Hunting Dog', 'A Wild Boar', 'A Forest Deer', 'A Royal Horse'],
        options_te: ['రాజకుమారుల వేట కుక్క', 'అడవి పంది', 'అడవి జింక', 'గుర్రం'],
        options_hi: ['शिकारी कुत्ता', 'जंगली सूअर', 'जंगली हिरण', 'घोड़ा'],
        learnMore: 'When Drona saw the dog’s mouth packed with arrows without injury, he knew a supreme archer inhabited the forest.',
        learnMore_te: 'కుక్క నోట్లో బాణాలు చూసిన ద్రోణుడు, శబ్దభేది విద్య తెలిసిన మహా ధనుర్ధారి అక్కడ ఉన్నాడని గ్రహించాడు.',
        learnMore_hi: 'कुत्ते के मुंह में बाणों का कौशल देखकर द्रोणाचार्य स्तब्ध रह गए कि ऐसा धनुर्धर संसार में विद्यमान है।',
        xpReward: 20
      }
    ]
  },

  // Level 17
  {
    levelNumber: 17,
    partNumber: 2,
    title: 'The Arena of Champions',
    title_te: 'రంగాస్థల ప్రదర్శన',
    title_hi: 'रंगभूमि में पराक्रम प्रदर्शन',
    subtitle: 'The Tournament of Hastinapur',
    subtitle_te: 'హస్తినాపుర అస్త్ర విద్యా ప్రదర్శన',
    subtitle_hi: 'हस्तिनापुर की अस्त्र परीक्षा',
    questions: [
      {
        id: 'q17-1',
        type: 'mcq',
        prompt: 'During the martial exhibition at Hastinapur, which two princes engaged in a ferocious mace duel that threatened to turn into real bloodshed?',
        prompt_te: 'హస్తినాపుర విద్యా ప్రదర్శనలో రక్తం చిందేలా గదాయుద్ధంలో తలపడిన ఇద్దరు రాకుమారులు ఎవరు?',
        prompt_hi: 'हस्तिनापुर की रंगभूमि में किन दो राजकुमारों के बीच गदा-युद्ध इतना भयानक हो गया कि वास्तविक युद्ध का रूप लेने लगा?',
        options: ['Bhima and Duryodhana', 'Arjuna and Karna', 'Yudhishthira and Dushasana', 'Nakula and Shakuni'],
        options_te: ['భీముడు మరియు దుర్యోధనుడు', 'అర్జునుడు మరియు కర్ణుడు', 'యుధిష్ఠిరుడు మరియు దుశ్శాసనుడు', 'నకులుడు మరియు శకుని'],
        options_hi: ['भीम और दुर्योधन', 'अर्जुन और कर्ण', 'युधिष्ठिर और दुःशासन', 'नकुल और शकुनि'],
        correctIndex: 0,
        learnMore: 'Seeing the crowd polarize into factions cheering for Bhima and Duryodhana, Sage Kripa intervened to stop the duel.',
        learnMore_te: 'ప్రేక్షకులు రెండు వర్గాలుగా విడిపోయి గొడవ పడే పరిస్థితి రావడంతో కృపాచార్యుడు జోక్యం చేసుకుని ఆపాడు.',
        learnMore_hi: 'भीड़ को दो गुटों में बंटते देखकर कुलगुरु कृपाचार्य ने दोनों को अलग कर शांत कराया।',
        xpReward: 10
      },
      {
        id: 'q17-2',
        type: 'true_false',
        prompt: 'Arjuna displayed mastery over the Agneya (fire), Varuna (water), and Vayavya (wind) Astras before the cheering citizens.',
        prompt_te: 'అర్జునుడు అగ్ని, వరుణ మరియు వాయవ్య దివ్యాస్త్రాలను ప్రయోగించి ప్రజలను మంత్రముగ్ధులను చేశాడు.',
        prompt_hi: 'अर्जुन ने आग्नेय, वारुण और वायव्य जैसे दिव्यास्त्रों का प्रदर्शन कर रंगभूमि में उपस्थित सभी को चकित कर दिया।',
        correctAnswer: true,
        learnMore: 'Arjuna transformed fire into water and water into clouds, demonstrating total command over the elements.',
        learnMore_te: 'అర్జునుడు అగ్నిని నీరుగా, నీటిని మేఘాలుగా మార్చి సకల ప్రాకృతిక శక్తులపై తన అధిపత్యాన్ని నిరూపించాడు.',
        learnMore_hi: 'अर्जुन ने कभी अग्नि की ज्वालाएं तो कभी जल की वर्षा कर अपने अस्त्र-कौशल से जनता का मन मोह लिया।',
        xpReward: 10
      },
      {
        id: 'q17-3',
        type: 'riddle',
        prompt: 'Sitting in the royal pavilion alongside Gandhari and Kunti, I listened intensely to the roaring cheers of the stadium while Vidura described the feats. Who am I?',
        prompt_te: 'గాంధారి మరియు కుంతీదేవిల పక్కన కూర్చుని, విదురుడి వర్ణనల ద్వారా రంగాస్థల విన్యాసాలను వింటూ ఆనందించిన మహారాజును నేను. నేను ఎవరిని?',
        prompt_hi: 'गांधारी और कुन्ती संग राजमंच पर बैठकर विदुर के मुख से रंगभूमि के पराक्रम का आंखों देखा हाल सुनने वाले नेत्रहीन राजा। मैं कौन हूँ?',
        hint: 'The father of Duryodhana.',
        hint_te: 'దుర్యోధనుడి తండ్రి.',
        hint_hi: 'कौरवों के पिता।',
        answer: 'King Dhritarashtra',
        answer_te: 'ధృతరాష్ట్ర మహారాజు',
        answer_hi: 'महाराज धृतराष्ट्र',
        options: ['King Dhritarashtra', 'King Pandu', 'King Drupada', 'King Salva'],
        options_te: ['ధృతరాష్ట్ర మహారాజు', 'పాండు మహారాజు', 'ద్రుపద మహారాజు', 'సాల్వ మహారాజు'],
        options_hi: ['महाराज धृतराष्ट्र', 'महाराज पाण्डु', 'महाराज द्रुपद', 'महाराज शाल्व'],
        learnMore: 'Dhritarashtra took immense pride in the princes, but felt inner jealousy whenever the crowd cheered louder for the Pandavas.',
        learnMore_te: 'ధృతరాష్ట్రుడు సంతోషించినప్పటికీ, ప్రజలు పాండవులను ఎక్కువగా పొగడటం చూసి అసూయ చెందాడు.',
        learnMore_hi: 'धृतराष्ट्र को पाण्डवों की जय-जयकार सुनकर आंतरिक ईर्ष्या और असुरक्षा की अनुभूति होती थी।',
        xpReward: 20
      }
    ]
  },

  // Level 18
  {
    levelNumber: 18,
    partNumber: 2,
    title: 'The Challenge of Karna',
    title_te: 'కర్ణుడి సవాలు',
    title_hi: 'कर्ण का पदार्पण और चुनौती',
    subtitle: 'Lineage Questioned & King of Anga',
    subtitle_te: 'కులంపై ప్రశ్న & అంగరాజ్య పట్టాభిషేకం',
    subtitle_hi: 'कुल पर आक्षेप और अंगराज का मुकुट',
    questions: [
      {
        id: 'q18-1',
        type: 'mcq',
        prompt: 'When Karna challenged Arjuna in the arena, why did Guru Kripacharya refuse to allow the duel to proceed immediately?',
        prompt_te: 'రంగాస్థలంలో కర్ణుడు అర్జునుడిని సవాలు చేసినప్పుడు కృపాచార్యుడు యుద్ధాన్ని ఎందుకు ఆపాడు?',
        prompt_hi: 'रंगभूमि में जब कर्ण ने अर्जुन को द्वंद्वयुद्ध की चुनौती दी, तब कृपाचार्य ने युद्ध रोकने का क्या कारण बताया?',
        options: [
          'A royal prince can duel only an equal prince of royal lineage',
          'It was already sunset',
          'Karna had not paid the tournament entry fee',
          'Arjuna’s bow was broken'
        ],
        options_te: [
          'క్షత్రియ రాజకుమారుడు సమఉజ్జీ అయిన రాజవంశీయుడితోనే ద్వంద్వ యుద్ధం చేయాలి',
          'అప్పటికే సూర్యాస్తమయం అయిపోయింది',
          'కర్ణుడు ప్రవేశ రుసుము చెల్లించలేదు',
          'అర్జునుడి ధనుస్సు విరిగిపోయింది'
        ],
        options_hi: [
          'राजकुमार केवल अपने समान राजकुल के क्षत्रिय से ही द्वंद्व कर सकता है',
          'सूर्यास्त हो चुका था',
          'कर्ण के पास अस्त्र नहीं थे',
          'अर्जुन का गांडीव टूट गया था'
        ],
        correctIndex: 0,
        learnMore: 'Kripa asked Karna to declare his father, mother, and royal lineage, causing Karna to hang his head in silent mortification.',
        learnMore_te: 'తల్లిదండ్రుల వివరాలు, కులగోత్రాలు చెప్పాలని అడగడంతో కర్ణుడు తలదించుకున్నాడు.',
        learnMore_hi: 'कृपाचार्य द्वारा कुल और माता-पिता का नाम पूछने पर कर्ण लज्जित होकर सिर झुकाए खड़े रह गए।',
        xpReward: 10
      },
      {
        id: 'q18-2',
        type: 'true_false',
        prompt: 'Seeing Karna’s humiliation, Duryodhana immediately crowned him King of Anga on the spot to make him eligible to duel Arjuna.',
        prompt_te: 'కర్ణుడి అవమానాన్ని చూసిన దుర్యోధనుడు వెంటనే అతనికి అంగరాజ్యానికి పట్టాభిషేకం చేశాడు.',
        prompt_hi: 'कर्ण का अपमान देखकर दुर्योधन ने उसी समय रंगभूमि में कर्ण का अंगदेश के राजा के रूप में राज्याभिषेक कर दिया।',
        correctAnswer: true,
        learnMore: 'This gesture forged an eternal bond of unshakeable friendship and loyalty between Duryodhana and Karna.',
        learnMore_te: 'ఈ చర్యతో దుర్యోధనుడు మరియు కర్ణుల మధ్య ప్రాణప్రదమైన మిత్రత్వం ఏర్పడింది.',
        learnMore_hi: 'इस घटना ने दुर्योधन और कर्ण के बीच अटूट मित्रता और कृतज्ञता की नींव रखी।',
        xpReward: 10
      },
      {
        id: 'q18-3',
        type: 'riddle',
        prompt: 'Recognizing the golden armor and earrings of my abandoned firstborn from the royal gallery, I fainted in silent maternal anguish. Who am I?',
        prompt_te: 'రంగాస్థలంలో కర్ణుడి కవచకుండలాలను చూసి, తన మొదటి కుమారుడేనని గుర్తించి బాధతో మూర్ఛపోయిన తల్లిని నేను. నేను ఎవరిని?',
        prompt_hi: 'रंगभूमि में कर्ण के कुंडल और कवच देखकर पहचान लिया और मौन मातृत्व की पीड़ा से मूर्छित हो गई। मैं कौन हूँ?',
        hint: 'The mother of the elder three Pandavas.',
        hint_te: 'పాండవుల తల్లి.',
        hint_hi: 'पाण्डवों की माता।',
        answer: 'Mother Kunti',
        answer_te: 'కుంతీ దేవి',
        answer_hi: 'माता कुन्ती',
        options: ['Mother Kunti', 'Queen Gandhari', 'Satyavati', 'Draupadi'],
        options_te: ['కుంతీ దేవి', 'గాంధారి దేవి', 'సత్యవతి దేవి', 'ద్రౌపది'],
        options_hi: ['माता कुन्ती', 'महारानी गांधारी', 'सत्यवती', 'द्रौपदी'],
        learnMore: 'Kunti knew the truth of Karna’s birth, but societal shame prevented her from revealing her son before the court.',
        learnMore_te: 'కర్ణుడు తన కొడుకేనని తెలిసినా లోకనిందకు భయపడి కుంతి ఆ నిజాన్ని బహిర్గతం చేయలేకపోయింది.',
        learnMore_hi: 'कुन्ती सत्य जानती थीं किंतु लोक-लाज के भय से राजसभा में कर्ण को अपना पुत्र स्वीकार न कर सकीं।',
        xpReward: 20
      }
    ]
  },

  // Level 19
  {
    levelNumber: 19,
    partNumber: 2,
    title: 'Guru Dakshina: The Fall of Drupada',
    title_te: 'గురుదక్షిణ: ద్రుపదుడి పరాజయం',
    title_hi: 'गुरुदक्षिणा: राजा द्रुपद का पराभव',
    subtitle: 'Capturing the King of Panchala',
    subtitle_te: 'పాంచాల రాజు బంధనం & రాజ్యం విభజన',
    subtitle_hi: 'पांचाल नरेश का मान-मर्दन',
    questions: [
      {
        id: 'q19-1',
        type: 'mcq',
        prompt: 'What sole Guru Dakshina did Dronacharya request from his disciples upon completing their education?',
        prompt_te: 'విద్య పూర్తయిన తర్వాత ద్రోణాచార్యుడు తన శిష్యుల వద్ద నుండి కోరిన ఏకైక గురుదక్షిణ ఏమిటి?',
        prompt_hi: 'शिक्षा पूर्ण होने पर द्रोणाचार्य ने अपने शिष्यों से एकमात्र गुरुदक्षिणा क्या मांगी थी?',
        options: [
          'Defeat King Drupada of Panchala and bring him captive to his feet',
          'A golden chariot studded with rubies',
          'One hundred thousand cows',
          'Build a marble temple'
        ],
        options_te: [
          'పాంచాల రాజు ద్రుపదుడిని యుద్ధంలో బంధించి తన పాదాల వద్ద నిలబెట్టడం',
          'రత్నాలు పొదిగిన బంగారు రథం',
          'లక్ష ఆవులు',
          'పాలరాతి ఆలయాన్ని నిర్మించడం'
        ],
        options_hi: [
          'पांचाल नरेश द्रुपद को युद्ध में बंदी बनाकर उनके चरणों में प्रस्तुत करना',
          'रत्नजड़ित स्वर्ण रथ',
          'एक लाख दुधारू गायें',
          'भव्य गुरुकुल आश्रम का निर्माण'
        ],
        correctIndex: 0,
        learnMore: 'Drupada had earlier insulted Drona’s poverty, stating that friendship is possible only between equals; Drona wanted to humble his haughtiness.',
        learnMore_te: 'పూర్వం ద్రుపదుడు పేదవాడైన ద్రోణుడిని అవమానించినందుకు ప్రతీకారంగా ద్రోణుడు ఈ దక్షిణను కోరాడు.',
        learnMore_hi: 'द्रुपद ने निर्धनता का उपहास उड़ाते हुए कहा था कि "मित्रता केवल समान स्तर वालों में होती है"; द्रोण उसी का उत्तर देना चाहते थे।',
        xpReward: 10
      },
      {
        id: 'q19-2',
        type: 'true_false',
        prompt: 'Duryodhana and the Kauravas attacked Drupada first, but were routed and forced to retreat by the fierce Panchala army.',
        prompt_te: 'మొదట దాడి చేసిన దుర్యోధనుడు మరియు కౌరవులు ద్రుపదుడి సైన్యం చేతిలో చిత్తుగా ఓడిపోయి వెనక్కి తగ్గారు.',
        prompt_hi: 'दुर्योधन और कौरवों ने द्रुपद पर पहले आक्रमण किया, किंतु पांचाल सेना ने उन्हें बुरी तरह खदेड़ दिया।',
        correctAnswer: true,
        learnMore: 'Arjuna and the Pandavas then entered the battlefield, routed Drupada’s army, and captured the king alive.',
        learnMore_te: 'ఆ తర్వాత అర్జునుడు రంగంలోకి దిగి ద్రుపదుడి సైన్యాన్ని చిత్తు చేసి అతడిని సజీవంగా బంధించాడు.',
        learnMore_hi: 'तत्पश्चात अर्जुन और भीम ने पांचाल सेना को परास्त कर राजा द्रुपद को जीवित बंदी बना लिया।',
        xpReward: 10
      },
      {
        id: 'q19-3',
        type: 'riddle',
        prompt: 'Humiliated by Drona dividing my kingdom in half and giving me only Southern Panchala, I performed a great sacrificial yajna for a son to slay Drona. Who am I?',
        prompt_te: 'సగం రాజ్యం కోల్పోయి అవమానంతో రగిలిపోయి, ద్రోణుడిని సంహరించే కుమారుడి కోసం పుత్రకామేష్టి యాగం చేసిన పాంచాల రాజును నేను. నేను ఎవరిని?',
        prompt_hi: 'आधा राज्य छिन जाने से अपमानित होकर मैंने द्रोण के वध हेतु पुत्र प्राप्ति के लिए विशाल यज्ञ करवाया। मैं कौन हूँ?',
        hint: 'Father of Draupadi and Dhrishtadyumna.',
        hint_te: 'ద్రౌపది మరియు ధృష్టద్యుమ్నుడి తండ్రి.',
        hint_hi: 'द्रौपदी और धृष्टद्युम्न के पिता।',
        answer: 'King Drupada (Yagnasena)',
        answer_te: 'ద్రుపద మహారాజు (యజ్ఞసేనుడు)',
        answer_hi: 'राजा द्रुपद (यज्ञसेन)',
        options: ['King Drupada (Yagnasena)', 'King Virata', 'King Jarasandha', 'King Salva'],
        options_te: ['ద్రుపద మహారాజు (యజ్ఞసేనుడు)', 'విరాట మహారాజు', 'జరాసంధుడు', 'సాల్వ మహారాజు'],
        options_hi: ['राजा द्रुपद (यज्ञसेन)', 'राजा विराट', 'जरासंध', 'राजा शाल्व'],
        learnMore: 'From Drupada’s sacred sacrificial fire arose Dhrishtadyumna (destined to slay Drona) and Draupadi.',
        learnMore_te: 'ద్రుపదుడి యాగగుండం నుండే ద్రోణుడిని సంహరించే ధృష్టద్యుమ్నుడు మరియు ద్రౌపది జన్మించారు.',
        learnMore_hi: 'द्रुपद के यज्ञ की ज्वालाओं से धृष्टद्युम्न और द्रौपदी का प्राकट्य हुआ।',
        xpReward: 20
      }
    ]
  },

  // Level 20
  {
    levelNumber: 20,
    partNumber: 2,
    title: 'Yuvaraja Yudhishthira',
    title_te: 'యువరాజు యుధిష్ఠిరుడు',
    title_hi: 'युवराज युधिष्ठिर',
    subtitle: 'Coronation & Seeds of Malice',
    subtitle_te: 'పట్టాభిషేకం & దుర్యోధనుడి అసూయ',
    subtitle_hi: 'राज्याभिषेक और षड्यंत्र का बीज',
    questions: [
      {
        id: 'q20-1',
        type: 'mcq',
        prompt: 'Why did King Dhritarashtra and the Kuru elders appoint Yudhishthira as the Crown Prince (Yuvaraja) of Hastinapur?',
        prompt_te: 'ధృతరాష్ట్రుడు మరియు కురు వృద్ధులు యుధిష్ఠిరుడిని హస్తినాపుర యువరాజుగా ఎందుకు పట్టాభిషేకం చేశారు?',
        prompt_hi: 'धृतराष्ट्र और कुरु सभा ने युधिष्ठिर को हस्तिनापुर का युवराज क्यों घोषित किया था?',
        options: [
          'He was the eldest prince, righteous, beloved by the citizens, and endowed with supreme virtues',
          'Duryodhana declined the position',
          'Sage Vyasa demanded it by royal decree',
          'He won a game of dice'
        ],
        options_te: [
          'అతడు పెద్దవాడు, ధర్మపరుడు, ప్రజలందరి ఆదరాభిమానాలు పొందిన సద్గుణ సంపన్నుడు',
          'దుర్యోధనుడు పదవిని వద్దనుకున్నాడు',
          'వ్యాస మహర్షి ఆదేశించాడు',
          'పాచికల ఆటలో గెలిచాడు'
        ],
        options_hi: [
          'वे ज्येष्ठ थे, धर्मनिष्ठ थे, प्रजा के अत्यंत प्रिय थे और सर्वगुण संपन्न थे',
          'दुर्योधन ने पद त्याग दिया था',
          'वेदव्यास का कड़ा आदेश था',
          'उन्होंने द्यूत में इसे जीता था'
        ],
        correctIndex: 0,
        learnMore: 'Yudhishthira’s coronation was celebrated with unbounded joy across the kingdom, intensifying Duryodhana and Shakuni’s conspiracy.',
        learnMore_te: 'యుధిష్ఠిరుడి పట్టాభిషేకం ప్రజల్లో ఎనలేని ఉత్సాహాన్ని నింపింది; ఇది దుర్యోధనుడి ఈర్ష్యను మరింత పెంచింది.',
        learnMore_hi: 'युधिष्ठिर के युवराज बनने से हस्तिनापुर की जनता हर्षित हुई, जिससे दुर्योधन की ईर्ष्या की ज्वाला और भड़क उठी।',
        xpReward: 10
      },
      {
        id: 'q20-2',
        type: 'true_false',
        prompt: 'Prince Shakuni arrived from Gandhara and became the evil mastermind directing Duryodhana’s destructive schemes.',
        prompt_te: 'గాంధారం నుండి వచ్చిన శకుని, దుర్యోధనుడి దుష్ట కుతంత్రాలకు సూత్రధారిగా మారాడు.',
        prompt_hi: 'गांधार नरेश शकुनि ने दुर्योधन के मन में पाण्डवों के प्रति विष घोलकर विनाशकारी षड्यंत्रों की रूपरेखा बनाई।',
        correctAnswer: true,
        learnMore: 'Shakuni vowed to bring ruin to the Kuru house by exploiting Duryodhana’s jealousy and Dhritarashtra’s blind paternal infatuation.',
        learnMore_te: 'దుర్యోధనుడి అసూయను, ధృతరాష్ట్రుడి పుత్రమోహాన్ని ఆసరాగా చేసుకుని శకుని కురువంశ నాశనానికి పథకం వేశాడు.',
        learnMore_hi: 'शकुनि ने धृतराष्ट्र के पुत्र-मोह का लाभ उठाकर पाण्डवों को नष्ट करने के षड्यंत्र रचने शुरू किए।',
        xpReward: 10
      },
      {
        id: 'q20-3',
        type: 'riddle',
        prompt: 'Master of Astras and father of Ashwatthama, I guided the Kuru princes from naive children to fearsome warriors. Who am I?',
        prompt_te: 'సమస్త దివ్యాస్త్రాలకు నిలయం, అశ్వత్థామ తండ్రి; కురు రాకుమారులను మహా యోధులుగా తీర్చిదిద్దిన గురువును నేను. నేను ఎవరిని?',
        prompt_hi: 'समस्त दिव्यास्त्रों के ज्ञाता और अश्वत्थामा के पिता, जिन्होंने पाण्डवों और कौरवों को महारथी बनाया। मैं कौन हूँ?',
        hint: 'Royal Preceptor of Hastinapur.',
        hint_te: 'హస్తినాపుర రాజగురువు.',
        hint_hi: 'हस्तिनापुर के राजगुरु।',
        answer: 'Guru Dronacharya',
        answer_te: 'గురు ద్రోణాచార్యుడు',
        answer_hi: 'गुरु द्रोणाचार्य',
        options: ['Guru Dronacharya', 'Kripacharya', 'Parashurama', 'Sage Vyasa'],
        options_te: ['గురు ద్రోణాచార్యుడు', 'కృపాచార్యుడు', 'పరశురాముడు', 'వేదవ్యాసుడు'],
        options_hi: ['गुरु द्रोणाचार्य', 'कृपाचार्य', 'परशुराम', 'महर्षि वेदव्यास'],
        learnMore: 'Completing Part 2 unlocks Guru Dronacharya and his legendary wallpaper in your gallery!',
        learnMore_te: 'పార్ట్ 2 పూర్తి చేయడంతో గురు ద్రోణాచార్యుల వాల్‌పేపర్ అన్‌లాక్ అవుతుంది!',
        learnMore_hi: 'भाग 2 पूर्ण होने पर गुरु द्रोणाचार्य का भव्य वॉलपेपर आपकी गैलरी में अनलॉक होता है!',
        xpReward: 20
      }
    ]
  }
];
