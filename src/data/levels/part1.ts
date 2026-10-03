import { Level } from '../../types/game';

export const PART_1_LEVELS: Level[] = [
  // Level 1
  {
    levelNumber: 1,
    partNumber: 1,
    title: 'The Divine Vows',
    title_te: 'దివ్య ప్రతిజ్ఞలు',
    title_hi: 'दिव्य प्रतिज्ञाएं',
    subtitle: 'King Shantanu and Ganga',
    subtitle_te: 'శంతనుడు మరియు గంగాదేవి',
    subtitle_hi: 'राजा शांतनु और गंगा',
    questions: [
      {
        id: 'q1-1',
        type: 'mcq',
        prompt: 'Who was the first wife of King Shantanu who gave birth to Devavrata (Bhishma)?',
        prompt_te: 'దేవవ్రతుడికి (భీష్ముడికి) జన్మనిచ్చిన శంతనుడి మొదటి భార్య ఎవరు?',
        prompt_hi: 'देवव्रत (भीष्म) को जन्म देने वाली राजा शांतनु की पहली पत्नी कौन थीं?',
        options: ['Satyavati', 'River Goddess Ganga', 'Kunti', 'Madri'],
        options_te: ['సత్యవతి', 'గంగాదేవి', 'కుంతి', 'మాద్రి'],
        options_hi: ['सत्यवती', 'गंगा देवी', 'कुन्ती', 'माद्री'],
        correctIndex: 1,
        learnMore: 'Ganga married Shantanu on the condition that he would never question her deeds. Their eighth child was Devavrata, who later became Bhishma.',
        learnMore_te: 'శంతనుడు తన పనులను ఎన్నడూ ప్రశ్నించకూడదనే షరతుతో గంగాదేవిని వివాహం చేసుకున్నాడు. వారి ఎనిమిదవ కుమారుడే భీష్ముడు.',
        learnMore_hi: 'गंगा ने शांतनु से इस शर्त पर विवाह किया था कि वे कभी उनके कार्यों पर प्रश्न नहीं उठाएंगे। उनकी आठवीं संतान देवव्रत (भीष्म) थे।',
        xpReward: 10
      },
      {
        id: 'q1-2',
        type: 'true_false',
        prompt: 'King Shantanu was prohibited from asking Ganga about her actions as a condition of their marriage.',
        prompt_te: 'శంతనుడు తన భార్య గంగాదేవి పనులను ఎన్నడూ ప్రశ్నించకూడదనే షరతుతో వివాహం జరిగింది.',
        prompt_hi: 'शांतनु और गंगा के विवाह की शर्त थी कि राजा कभी भी गंगा के किसी कार्य पर प्रश्न नहीं उठाएंगे।',
        correctAnswer: true,
        learnMore: 'When Shantanu broke his vow on the birth of the eighth child, Ganga revealed her divine purpose and departed with the infant.',
        learnMore_te: 'ఎనిమిదవ బిడ్డ పుట్టినప్పుడు శంతనుడు తన వాగ్దానాన్ని అతిక్రమించి మాట్లాడటంతో గంగాదేవి బాలుడితో సహా నిష్క్రమించింది.',
        learnMore_hi: 'आठवें पुत्र के जन्म पर शांतनु ने अपना मौन तोड़ा, जिसके बाद गंगा शिशु को लेकर अंतर्धान हो गईं।',
        xpReward: 10
      },
      {
        id: 'q1-3',
        type: 'riddle',
        prompt: 'I was born of holy Ganga and King Shantanu, saved from the river to become the greatest protector of the Kuru dynasty. Who am I?',
        prompt_te: 'నేను పవిత్ర గంగాదేవి మరియు శంతనుడి కుమారుడిని, కురు సామ్రాజ్యానికి మహోన్నత రక్షకుడిగా నిలిచాను. నేను ఎవరిని?',
        prompt_hi: 'मैं गंगा और शांतनु का आठवां पुत्र हूँ, जिसे नदी में प्रवाहित होने से बचाकर कुरुवंश का महान रक्षक बनाया गया। मैं कौन हूँ?',
        hint: 'He is revered across Aryavarta as Pitamaha.',
        hint_te: 'పాండవులు మరియు కౌరవులకు పితామహుడు.',
        hint_hi: 'कौरवों और पांडवों के आदरणीय पितामह।',
        answer: 'Devavrata (Bhishma)',
        answer_te: 'దేవవ్రతుడు (భీష్ముడు)',
        answer_hi: 'देवव्रत (भीष्म)',
        options: ['Devavrata (Bhishma)', 'Vidura', 'Pandu', 'Dhritarashtra'],
        options_te: ['దేవవ్రతుడు (భీష్ముడు)', 'విదురుడు', 'పాండురాజు', 'ధృతరాష్ట్రుడు'],
        options_hi: ['देवव्रत (भीष्म)', 'विदुर', 'पाण्डु', 'धृतराष्ट्र'],
        learnMore: 'Devavrata received celestial knowledge and mastery over weapons before returning to his father as Crown Prince.',
        learnMore_te: 'దేవవ్రతుడు మహర్షుల వద్ద సమస్త శాస్త్రాలు, దివ్యాస్త్రాలను అభ్యసించి యువరాజుగా హస్తినాపురానికి తిరిగి వచ్చాడు.',
        learnMore_hi: 'देवव्रत ने महर्षियों से समस्त शास्त्र और अस्त्र-शस्त्र सीखकर हस्तिनापुर के युवराज पद को सुशोभित किया।',
        xpReward: 20
      }
    ]
  },

  // Level 2
  {
    levelNumber: 2,
    partNumber: 1,
    title: 'The Eight Vasus',
    title_te: 'అష్ట వసువులు',
    title_hi: 'अष्ट वसु',
    subtitle: 'Curse and Celestial Training',
    subtitle_te: 'శాపం మరియు దివ్య శిక్షణ',
    subtitle_hi: 'शाप और दिव्य प्रशिक्षण',
    questions: [
      {
        id: 'q2-1',
        type: 'mcq',
        prompt: 'Which revered sage cursed the Eight Vasus to take birth in the mortal world for stealing the divine cow Nandini?',
        prompt_te: 'నందిని అనే కామధేనువును దొంగిలించినందుకు అష్ట వసువులను భూలోకంలో జన్మించమని శపించిన మహర్షి ఎవరు?',
        prompt_hi: 'नन्दिनी कामधेनु का हरण करने के कारण अष्ट वसुओं को मृत्युलोक में जन्म लेने का शाप किस महर्षि ने दिया था?',
        options: ['Sage Vashishta', 'Sage Vishwamitra', 'Sage Durvasa', 'Sage Bharadwaja'],
        options_te: ['వశిష్ఠ మహర్షి', 'విశ్వామిత్ర మహర్షి', 'దుర్వాస మహర్షి', 'భరద్వాజ మహర్షి'],
        options_hi: ['महर्षि वशिष्ठ', 'महर्षि विश्वामित्र', 'महर्षि दुर्वासा', 'महर्षि भारद्वाज'],
        correctIndex: 0,
        learnMore: 'Sage Vashishta cursed the Vasus, but lessened the curse so that seven would die right after birth, while Dyu (Bhishma) would live a long, noble life.',
        learnMore_te: 'వశిష్ఠ మహర్షి శాపం వల్ల ఏడుగురు వసువులు పుట్టగానే మోక్షం పొందగా, ద్యు అనే వసువు భీష్ముడిగా సుదీర్ఘకాలం జీవించాల్సి వచ్చింది.',
        learnMore_hi: 'महर्षि वशिष्ठ ने शाप में छूट दी कि सात वसु जन्म लेते ही मुक्त होंगे, जबकि द्यु (भीष्म) को लंबा जीवन जीना पड़ेगा।',
        xpReward: 10
      },
      {
        id: 'q2-2',
        type: 'true_false',
        prompt: 'Devavrata mastered the art of celestial weaponry directly under Bhagavan Parashurama.',
        prompt_te: 'దేవవ్రతుడు దివ్యాస్త్ర విద్యలను భగవాన్ పరశురాముడి వద్ద ప్రత్యక్షంగా నేర్చుకున్నాడు.',
        prompt_hi: 'देवव्रत ने दिव्यास्त्रों और युद्धकला की शिक्षा सीधे भगवान परशुराम से प्राप्त की थी।',
        correctAnswer: true,
        learnMore: 'Parashurama accepted Devavrata as his disciple and bestowed upon him all celestial weapons, recognizing his supreme caliber.',
        learnMore_te: 'పరశురాముడు దేవవ్రతుడి అసాధారణ ప్రతిభను గుర్తించి తన ప్రియశిష్యుడిగా చేర్చుకుని సమస్త దివ్యాస్త్రాలను ఉపదేశించాడు.',
        learnMore_hi: 'परशुराम ने देवव्रत की अदम्य एकाग्रता और निष्ठा देखकर उन्हें अपना शिष्य बनाया और अस्त्रविद्या में पारंगत किया।',
        xpReward: 10
      },
      {
        id: 'q2-3',
        type: 'riddle',
        prompt: 'I taught young Devavrata the sacred Vedas and divine scriptures before he learned archery from Parashurama. Who am I?',
        prompt_te: 'పరశురాముడి వద్ద ధనుర్విద్య నేర్చుకోవడానికి ముందే యువ దేవవ్రతుడికి వేదాలు, వేదాంగాలను ఉపదేశించిన గురువును నేను. నేను ఎవరిని?',
        prompt_hi: 'परशुराम से धनुर्विद्या सीखने से पूर्व मैंने देवव्रत को वेदों और नीतिशास्त्रों की शिक्षा दी थी। मैं कौन हूँ?',
        hint: 'The legendary royal preceptor of the Solar dynasty.',
        hint_te: 'సూర్యవంశ మరియు బ్రహ్మర్షి.',
        hint_hi: 'इक्ष्वाकु वंश के कुलगुरु ब्रह्मर्षि।',
        answer: 'Sage Vashishta',
        answer_te: 'వశిష్ఠ మహర్షి',
        answer_hi: 'महर्षि वशिष्ठ',
        options: ['Sage Vashishta', 'Sage Valmiki', 'Sage Agastya', 'Sage Brihaspati'],
        options_te: ['వశిష్ఠ మహర్షి', 'వాల్మీకి మహర్షి', 'అగస్త్య మహర్షి', 'బృహస్పతి'],
        options_hi: ['महर्षि वशिष्ठ', 'महर्षि वाल्मीकि', 'महर्षि अगस्त्य', 'देवगुरु बृहस्पति'],
        learnMore: 'Ganga ensured her son received the highest spiritual foundation from Vashishta and military mastery from Parashurama.',
        learnMore_te: 'గంగాదేవి తన కుమారుడికి వశిష్ఠుడి ద్వారా ఆధ్యాత్మిక జ్ఞానాన్ని, పరశురాముడి ద్వారా యుద్ధ విద్యలను సమకూర్చింది.',
        learnMore_hi: 'गंगा ने अपने पुत्र को वशिष्ठ से आध्यात्मिक ज्ञान और परशुराम से अस्त्रविद्या दिलवाकर सर्वगुण संपन्न बनाया।',
        xpReward: 20
      }
    ]
  },

  // Level 3
  {
    levelNumber: 3,
    partNumber: 1,
    title: 'The Terrible Oath',
    title_te: 'భీష్మ ప్రతిజ్ఞ',
    title_hi: 'भीष्म प्रतिज्ञा',
    subtitle: 'From Devavrata to Bhishma',
    subtitle_te: 'దేవవ్రతుడి నుండి భీష్ముడి వరకు',
    subtitle_hi: 'देवव्रत से भीष्म बनने की गाथा',
    questions: [
      {
        id: 'q3-1',
        type: 'mcq',
        prompt: 'What did the fisherman chieftain Dasharaja demand before permitting Satyavati to marry King Shantanu?',
        prompt_te: 'శంతనుడితో సత్యవతి వివాహానికి దాశరాజు పెట్టిన కఠినమైన షరతు ఏమిటి?',
        prompt_hi: 'धीवरराज दाशराज ने सत्यवती का विवाह राजा शांतनु से करने हेतु क्या शर्त रखी थी?',
        options: [
          'A mountain of gold',
          'Satyavati’s sons must inherit the throne',
          'Shantanu must live in the forest',
          'Hastinapur must be expanded'
        ],
        options_te: [
          'బంగారు నిధి ఇవ్వాలి',
          'సత్యవతికి పుట్టే కుమారులే రాజ్యానికి రాజులు కావాలి',
          'శంతనుడు అడవిలో నివసించాలి',
          'హస్తినాపురాన్ని విస్తరించాలి'
        ],
        options_hi: [
          'अपार स्वर्ण संपदा',
          'सत्यवती की कोख से जन्मे पुत्र ही सिंहासन पर बैठें',
          'शांतनु वन में वास करें',
          'हस्तिनापुर की सीमा का विस्तार'
        ],
        correctIndex: 1,
        learnMore: 'Dasharaja wanted his daughter’s progeny to rule Hastinapur, which caused great despondency to King Shantanu until Devavrata intervened.',
        learnMore_te: 'తన కూతురి సంతానమే హస్తినాపురానికి రాజులు కావాలనే దాశరాజు షరతు శంతనుడిని తీవ్ర విచారంలో ముంచెత్తింది.',
        learnMore_hi: 'दाशराज की इस शर्त से शांतनु अत्यंत दुखी हो गए क्योंकि वे देवव्रत का हक नहीं छीनना चाहते थे।',
        xpReward: 10
      },
      {
        id: 'q3-2',
        type: 'true_false',
        prompt: 'In Sanskrit, the title "Bhishma" literally signifies "He of the terrible, unshakeable oath".',
        prompt_te: 'సంస్కృతంలో "భీష్మ" అంటే భయంకరమైన, అచంచలమైన ప్రతిజ్ఞ చేసినవాడు అని అర్థం.',
        prompt_hi: 'संस्कृत में "भीष्म" का शाब्दिक अर्थ "भयंकर / कठोर प्रतिज्ञा करने वाला" होता है।',
        correctAnswer: true,
        learnMore: 'When Devavrata renounced the throne and took a lifelong vow of celibacy, celestials showered flowers and named him Bhishma.',
        learnMore_te: 'రాజ్యత్యాగం మరియు ఆజన్మాంత బ్రహ్మచర్య ప్రతిజ్ఞ చేయడంతో దేవతలు ఆకాశం నుండి పూలవాన కురిపించి "భీష్ముడు" అని పిలిచారు.',
        learnMore_hi: 'देवव्रत के इस त्याग को देखकर देवताओं ने पुष्पवर्षा की और उनका नाम "भीष्म" रखा।',
        xpReward: 10
      },
      {
        id: 'q3-3',
        type: 'riddle',
        prompt: 'Overwhelmed by my son’s supreme filial sacrifice, I granted him the boon of Iccha-Mrityu (the power to choose his time of death). Who am I?',
        prompt_te: 'నా కుమారుడి నిస్వార్థమైన త్యాగానికి చలించిపోయి, అతనికి "ఇచ్ఛామృత్యువు" (స్వచ్ఛంద మరణం) వరాన్ని ప్రసాదించిన తండ్రిని నేను. నేను ఎవరిని?',
        prompt_hi: 'पुत्र के महान त्याग से अभिभूत होकर मैंने उसे इच्छामृत्यु (अपनी इच्छा से मृत्यु का वरण करने) का वरदान दिया। मैं कौन हूँ?',
        hint: 'The great ruler of the Lunar Dynasty and husband of Ganga and Satyavati.',
        hint_te: 'చంద్రవంశ మహారాజు, గంగ మరియు సత్యవతి భర్త.',
        hint_hi: 'चंद्रवंश के प्रतापी राजा तथा गंगा व सत्यवती के पति।',
        answer: 'King Shantanu',
        answer_te: 'శంతన మహారాజు',
        answer_hi: 'राजा शांतनु',
        options: ['King Shantanu', 'King Bharat', 'King Pandu', 'King Dhritarashtra'],
        options_te: ['శంతన మహారాజు', 'భరత మహారాజు', 'పాండురాజు', 'ధృతరాష్ట్రుడు'],
        options_hi: ['राजा शांतनु', 'राजा भरत', 'राजा पाण्डु', 'राजा धृतराष्ट्र'],
        learnMore: 'Shantanu declared that death would not approach Bhishma unless he himself permitted it.',
        learnMore_te: 'భీష్ముడు స్వయంగా అనుభవించేంత వరకు మృత్యువు అతనిని తాకలేదని శంతనుడు వరం ఇచ్చాడు.',
        learnMore_hi: 'शांतनु ने वरदान दिया कि जब तक भीष्म स्वयं मृत्यु की आज्ञा नहीं देंगे, काल भी उनके निकट नहीं आ सकेगा।',
        xpReward: 20
      }
    ]
  },

  // Level 4
  {
    levelNumber: 4,
    partNumber: 1,
    title: 'The Sons of Satyavati',
    title_te: 'సత్యవతి కుమారులు',
    title_hi: 'सत्यवती के पुत्र',
    subtitle: 'Chitrangada and Vichitravirya',
    subtitle_te: 'చిత్రాంగదుడు మరియు విచిత్రవీర్యుడు',
    subtitle_hi: 'चित्रांगद और विचित्रवीर्य',
    questions: [
      {
        id: 'q4-1',
        type: 'mcq',
        prompt: 'Which two sons were born to King Shantanu and Queen Satyavati?',
        prompt_te: 'శంతన మహారాజు మరియు రాణి సత్యవతి దంపతులకు జన్మించిన ఇద్దరు కుమారులు ఎవరు?',
        prompt_hi: 'राजा शांतनु और महारानी सत्यवती से कौन से दो पुत्र उत्पन्न हुए थे?',
        options: [
          'Chitrangada and Vichitravirya',
          'Dhritarashtra and Pandu',
          'Bhishma and Vidura',
          'Kripa and Drona'
        ],
        options_te: [
          'చిత్రాంగదుడు మరియు విచిత్రవీర్యుడు',
          'ధృతరాష్ట్రుడు మరియు పాండురాజు',
          'భీష్ముడు మరియు విదురుడు',
          'కృపాచార్యుడు మరియు ద్రోణుడు'
        ],
        options_hi: [
          'चित्रांगद और विचित्रवीर्य',
          'धृतराष्ट्र और पाण्डु',
          'भीष्म और विदुर',
          'कृपाचार्य और द्रोणाचार्य'
        ],
        correctIndex: 0,
        learnMore: 'Chitrangada was brave but proud; Vichitravirya was crowned king after Chitrangada fell in battle against a Gandharva.',
        learnMore_te: 'చిత్రాంగదుడు గంధర్వుడితో యుద్ధంలో మరణించగా, తమ్ముడైన విచిత్రవీర్యుడికి భీష్ముడు పట్టాభిషేకం చేశాడు.',
        learnMore_hi: 'चित्रांगद की गंधर्व युद्ध में मृत्यु के पश्चात छोटे भाई विचित्रवीर्य को भीष्म ने राजगद्दी पर बैठाया।',
        xpReward: 10
      },
      {
        id: 'q4-2',
        type: 'true_false',
        prompt: 'Prince Chitrangada fell in combat against a powerful Gandharva king who shared his name.',
        prompt_te: 'రాజకుమారుడు చిత్రాంగదుడు తన పేరే ఉన్న ఒక బలమైన గంధర్వ రాజుతో పోరాడి మరణించాడు.',
        prompt_hi: 'राजकुमार चित्रांगद अपने ही नाम वाले एक शक्तिशाली गंधर्व नरेश के साथ युद्ध करते हुए मारे गए थे।',
        correctAnswer: true,
        learnMore: 'The clash between King Chitrangada and the Gandharva Chitrangada lasted three years on the banks of Saraswati.',
        learnMore_te: 'సరస్వతీ నది తీరంలో జరిగిన ఈ భీకర పోరాటం మూడేళ్లపాటు కొనసాగింది.',
        learnMore_hi: 'कुरुक्षेत्र में सरस्वती नदी के तट पर दोनों चित्रांगदों के बीच तीन वर्षों तक भयानक युद्ध हुआ था।',
        xpReward: 10
      },
      {
        id: 'q4-3',
        type: 'riddle',
        prompt: 'I was crowned King of Hastinapur by Bhishma, and my two queens were Princess Ambika and Ambalika. Who am I?',
        prompt_te: 'భీష్ముడి చేత హస్తినాపురానికి రాజుగా చేయబడ్డాను, అంబిక మరియు అంబాలికలు నా భార్యలు. నేను ఎవరిని?',
        prompt_hi: 'भीष्म ने मुझे हस्तिनापुर का राजा बनाया और काशी की राजकुमारियां अम्बिका व अम्बालिका मेरी रानियां बनीं। मैं कौन हूँ?',
        hint: 'He died young without leaving any offspring.',
        hint_te: 'సంతానం కలగకముందే అనారోగ్యంతో మరణించిన రాజు.',
        hint_hi: 'संतानहीन अवस्था में अल्पायु में मृत्यु को प्राप्त होने वाले शांतनु-पुत्र।',
        answer: 'Vichitravirya',
        answer_te: 'విచిత్రవీర్యుడు',
        answer_hi: 'विचित्रवीर्य',
        options: ['Vichitravirya', 'Chitrangada', 'Devavrata', 'Parikshit'],
        options_te: ['విచిత్రవీర్యుడు', 'చిత్రాంగదుడు', 'దేవవ్రతుడు', 'పరీక్షిత్తు'],
        options_hi: ['विचित्रवीर्य', 'चित्रांगद', 'देवव्रत', 'परीक्षित'],
        learnMore: 'Vichitravirya’s untimely death created a succession crisis that led Satyavati to summon Sage Vyasa.',
        learnMore_te: 'విచిత్రవీర్యుడి అకాల మరణం హస్తినాపురంలో వారసత్వ సంక్షోభాన్ని సృష్టించింది.',
        learnMore_hi: 'विचित्रवीर्य के असामयिक निधन ने हस्तिनापुर में वंश संकट उत्पन्न कर दिया, जिसके बाद वेदव्यास को बुलाया गया।',
        xpReward: 20
      }
    ]
  },

  // Level 5
  {
    levelNumber: 5,
    partNumber: 1,
    title: 'The Vow of Princess Amba',
    title_te: 'అంబా ప్రతిజ్ఞ',
    title_hi: 'राजकुमारी अम्बा का प्रण',
    subtitle: 'Rejection, Austerity and Rebirth',
    subtitle_te: 'తిరస్కరణ, తపస్సు మరియు పునర్జన్మ',
    subtitle_hi: 'तिरस्कार, घोर तपस्या और पुनर्जन्म',
    questions: [
      {
        id: 'q5-1',
        type: 'mcq',
        prompt: 'Who abducted the three princesses of Kashi (Amba, Ambika, and Ambalika) from their Swayamvara on behalf of Vichitravirya?',
        prompt_te: 'విచిత్రవీర్యుడి కొరకు కాశీరాజు కుమార్తెలు అంబ, అంబిక, అంబాలికలను స్వయంవరం నుండి తెచ్చిన వీరుడు ఎవరు?',
        prompt_hi: 'विचित्रवीर्य के लिए काशी की तीन राजकुमारियों (अम्बा, अम्बिका, अम्बालिका) का स्वयंवर से हरण किसने किया था?',
        options: ['Bhishma', 'Parashurama', 'King Shantanu', 'Dronacharya'],
        options_te: ['భీష్ముడు', 'పరశురాముడు', 'శంతన మహారాజు', 'ద్రోణాచార్యుడు'],
        options_hi: ['भीष्म', 'परशुराम', 'राजा शांतनु', 'द्रोणाचार्य'],
        correctIndex: 0,
        learnMore: 'Bhishma defeated all assembled kings single-handedly to secure brides for the throne of Hastinapur.',
        learnMore_te: 'భీష్ముడు స్వయంవరానికి వచ్చిన రాజులందరినీ ఒంటిచేత్తో ఓడించి ముగ్గురు రాకుమార్తెలను రథంపై హస్తినాపురానికి తెచ్చాడు.',
        learnMore_hi: 'भीष्म ने स्वयंवर में उपस्थित समस्त राजाओं को अकेले पराजित कर हस्तिनापुर के लिए वधुओं को प्राप्त किया।',
        xpReward: 10
      },
      {
        id: 'q5-2',
        type: 'true_false',
        prompt: 'Princess Amba was rejected by King Salva because she had been won in combat by Bhishma.',
        prompt_te: 'భీష్ముడి చేత గెలవబడినందున సాల్వ మహారాజు అంబను తన భార్యగా స్వీకరించడానికి నిరాకరించాడు.',
        prompt_hi: 'शाल्व नरेश ने अम्बा को अपनी पत्नी स्वीकार करने से मना कर दिया क्योंकि भीष्म ने उसे युद्ध में जीत लिया था।',
        correctAnswer: true,
        learnMore: 'Bound by Kshatriya honor, Salva refused to accept a bride carried away by another warrior, leaving Amba distraught.',
        learnMore_te: 'పరాయి యోధుడు జయించి తీసుకువెళ్లిన స్త్రీని క్షత్రియ ధర్మం ప్రకారం స్వీకరించలేనని సాల్వరాజు చెప్పాడు.',
        learnMore_hi: 'क्षत्रिय मर्यादा का हवाला देकर शाल्व ने अम्बा का परित्याग कर दिया, जिससे अम्बा अत्यंत व्यथित हो गईं।',
        xpReward: 10
      },
      {
        id: 'q5-3',
        type: 'riddle',
        prompt: 'After immense penance to Lord Shiva to defeat Bhishma, I was reborn as the child of King Drupada to fulfill my destined role. Who am I?',
        prompt_te: 'భీష్ముడిని అంతం చేయడానికి శివుడి కోసం ఘోర తపస్సు చేసి, ద్రుపద మహారాజుకు సంతానంగా పునర్జన్మ ఎత్తినదాన్ని నేను. నేను ఎవరిని?',
        prompt_hi: 'भीष्म के वध हेतु भगवान शिव की घोर तपस्या करने के पश्चात मैंने राजा द्रुपद के घर जन्म लिया। मैं कौन हूँ?',
        hint: 'Bhishma would never raise weapons against this warrior.',
        hint_te: 'ఈ యోధుడిపై భీష్ముడు ఎన్నడూ ఆయుధం ఎత్తడు.',
        hint_hi: 'इस योद्धा के समक्ष भीष्म अपने अस्त्र त्याग देते हैं।',
        answer: 'Shikhandi (Amba)',
        answer_te: 'శిఖండి (అంబ)',
        answer_hi: 'शिखंडी (अम्बा)',
        options: ['Shikhandi (Amba)', 'Dhrishtadyumna', 'Satyaki', 'Uttara'],
        options_te: ['శిఖండి (అంబ)', 'ధృష్టద్యుమ్నుడు', 'సాత్యకి', 'ఉత్తరుడు'],
        options_hi: ['शिखंडी (अम्बा)', 'धृष्टद्युम्न', 'सात्यकि', 'उत्तर'],
        learnMore: 'Shikhandi became the shield behind whom Arjuna stood on Day 10 of Kurukshetra to bring down Grandsire Bhishma.',
        learnMore_te: 'కురుక్షేత్ర యుద్ధంలో 10వ రోజున అర్జునుడు శిఖండిని ముందుంచి భీష్ముడిపై బాణాల వర్షం కురిపించాడు.',
        learnMore_hi: 'कुरुक्षेत्र युद्ध के दसवें दिन अर्जुन ने शिखंडी की ओट लेकर ही पितामह भीष्म को शरशैया पर लिटाया था।',
        xpReward: 20
      }
    ]
  },

  // Level 6
  {
    levelNumber: 6,
    partNumber: 1,
    title: 'Sage Vyasa & The Sacred Lineage',
    title_te: 'వేదవ్యాస మహర్షి & వంశ సంరక్షణ',
    title_hi: 'महर्षि वेदव्यास और वंश विस्तार',
    subtitle: 'Birth of Dhritarashtra, Pandu and Vidura',
    subtitle_te: 'ధృతరాష్ట్రుడు, పాండురాజు మరియు విదురుల జననం',
    subtitle_hi: 'धृतराष्ट्र, पाण्डु और विदुर का प्राकट्य',
    questions: [
      {
        id: 'q6-1',
        type: 'mcq',
        prompt: 'Who was summoned by Queen Mother Satyavati to continue the Kuru royal lineage through Niyoga?',
        prompt_te: 'కురు వంశాన్ని నిలబెట్టడానికి రాణి సత్యవతి ఎవరిని ఆహ్వానించింది?',
        prompt_hi: 'कुरु वंश को आगे बढ़ाने हेतु राजमाता सत्यवती ने किस महर्षि को आमंत्रित किया था?',
        options: [
          'Sage Krishna Dwaipayana Vyasa',
          'Sage Parashurama',
          'Sage Narada',
          'Sage Gautama'
        ],
        options_te: [
          'కృష్ణ ద్వైపాయన వేదవ్యాస మహర్షి',
          'పరశురామ మహర్షి',
          'నారద మహర్షి',
          'గౌతమ మహర్షి'
        ],
        options_hi: [
          'महर्षि कृष्ण द्वैपायन वेदव्यास',
          'भगवान परशुराम',
          'देवर्षि नारद',
          'महर्षि गौतम'
        ],
        correctIndex: 0,
        learnMore: 'Sage Vyasa was Satyavati’s first son born to Sage Parashara before her marriage to King Shantanu.',
        learnMore_te: 'వ్యాస మహర్షి శంతనుడితో వివాహానికి ముందే పరాశర మహర్షి అనుగ్రహంతో సత్యవతికి జన్మించాడు.',
        learnMore_hi: 'वेदव्यास सत्यवती और महर्षि पराशर के तेजस्वी पुत्र थे, जिन्हें सत्यवती ने स्मरण किया।',
        xpReward: 10
      },
      {
        id: 'q6-2',
        type: 'true_false',
        prompt: 'Dhritarashtra was born blind because his mother Ambika shut her eyes in fear upon seeing Sage Vyasa’s blazing ascetic form.',
        prompt_te: 'వ్యాస మహర్షి తపోరూపాన్ని చూసి భయంతో అంబిక కళ్ళు మూసుకోవడం వలన ధృతరాష్ట్రుడు అంధుడిగా జన్మించాడు.',
        prompt_hi: 'व्यासदेव के तपोमय रूप को देखकर भयवश अम्बिका ने अपनी आंखें बंद कर ली थीं, जिसके कारण धृतराष्ट्र जन्मांध पैदा हुए।',
        correctAnswer: true,
        learnMore: 'Similarly, Ambalika turned pale with fear and gave birth to the pale-complexioned Pandu.',
        learnMore_te: 'అలాగే అంబాలిక భయంతో పాలిపోవడం వల్ల పాండురాజు పాండు రోగ లక్షణాలతో జన్మించాడు.',
        learnMore_hi: 'इसी प्रकार अम्बालिका के भयभीत होकर पीली पड़ जाने से पाण्डु का जन्म पांडुरंग (पीले वर्ण) के रूप में हुआ।',
        xpReward: 10
      },
      {
        id: 'q6-3',
        type: 'riddle',
        prompt: 'Born to a devout palace maidservant who approached Sage Vyasa with serene respect, I became the greatest beacon of Dharma and wise counselor in Hastinapur. Who am I?',
        prompt_te: 'వ్యాస మహర్షిని ప్రశాంత భక్తితో సేవించిన పరిచారికకు జన్మించి, హస్తినాపురానికి నీతి మరియు ధర్మ ప్రదాతగా మారిన మహనీయుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'महर्षि वेदव्यास का शांत भाव से स्वागत करने वाली दासी के गर्भ से उत्पन्न, नीति और धर्म का परम ज्ञाता। मैं कौन हूँ?',
        hint: 'An incarnation of Lord Dharma (Yamaraja).',
        hint_te: 'యమధర్మరాజు అంశతో జన్మించిన మహామంత్రి.',
        hint_hi: 'माण्डव्य ऋषि के शापवश धर्मराज (यम) के अवतार।',
        answer: 'Mahatma Vidura',
        answer_te: 'మహాత్మా విదురుడు',
        answer_hi: 'महात्मा विदुर',
        options: ['Mahatma Vidura', 'Sanjaya', 'Kripacharya', 'Dronacharya'],
        options_te: ['మహాత్మా విదురుడు', 'సంజయుడు', 'కృపాచార్యుడు', 'ద్రోణాచార్యుడు'],
        options_hi: ['महात्मा विदुर', 'संजय', 'कृपाचार्य', 'द्रोणाचार्य'],
        learnMore: 'Vidura served as the moral conscience of Hastinapur, always guiding Dhritarashtra toward truth and equity.',
        learnMore_te: 'విదురుడు తన ప్రసిద్ధ విదుర నీతి ద్వారా ఎల్లప్పుడూ ధర్మాన్ని, సత్యాన్ని ప్రబోధించాడు.',
        learnMore_hi: 'विदुर ने विदुर-नीति के माध्यम से धृतराष्ट्र को सदैव न्याय और धर्म का मार्ग दिखाया।',
        xpReward: 20
      }
    ]
  },

  // Level 7
  {
    levelNumber: 7,
    partNumber: 1,
    title: 'King Pandu’s Reign & Forest Curse',
    title_te: 'పాండురాజు పాలన & అరణ్య శాపం',
    title_hi: 'महाराज पाण्डु का शासन और शाप',
    subtitle: 'Conquests and Kindama’s Curse',
    subtitle_te: 'దిగ్విజయం మరియు కిందమ మహర్షి శాపం',
    subtitle_hi: 'दिग्विजय और ऋषि किंदम का शाप',
    questions: [
      {
        id: 'q7-1',
        type: 'mcq',
        prompt: 'Why was Pandu crowned King of Hastinapur rather than his elder brother Dhritarashtra?',
        prompt_te: 'పెద్దవాడైన ధృతరాష్ట్రుడిని కాదని పాండురాజుకు హస్తినాపుర సింహాసనాన్ని ఎందుకు అప్పగించారు?',
        prompt_hi: 'बड़े भाई धृतराष्ट्र के स्थान पर पाण्डु को हस्तिनापुर का राजा क्यों बनाया गया था?',
        options: [
          'Dhritarashtra was born blind',
          'Dhritarashtra wanted to meditate',
          'Pandu was older',
          'Vidura decided by drawing lots'
        ],
        options_te: [
          'ధృతరాష్ట్రుడు పుట్టుకతోనే అంధుడు కావడం వల్ల',
          'ధృతరాష్ట్రుడు తపస్సు చేయాలనుకున్నాడు',
          'పాండురాజు పెద్దవాడు',
          'విదురుడు లాటరీ ద్వారా నిర్ణయించాడు'
        ],
        options_hi: [
          'धृतराष्ट्र जन्मांध थे',
          'धृतराष्ट्र तपस्या करना चाहते थे',
          'पाण्डु आयु में बड़े थे',
          'विदुर ने लॉटरी द्वारा चुना'
        ],
        correctIndex: 0,
        learnMore: 'Ancient Vedic jurisprudence held that a ruler must be physically unimpaired to govern the realm and execute state duties.',
        learnMore_te: 'ప్రాచీన రాజధర్మం ప్రకారం శారీరక లోపాలు లేనివారే రాజ్యాన్ని పాలించడానికి అర్హులు.',
        learnMore_hi: 'प्राचीन राजधर्म के अनुसार राजा का शारीरिक रूप से सक्षम होना अनिवार्य था, इसलिए धृतराष्ट्र राजा न बन सके।',
        xpReward: 10
      },
      {
        id: 'q7-2',
        type: 'true_false',
        prompt: 'Sage Kindama cursed King Pandu that if he ever united with his wife in passion, he would meet instantaneous death.',
        prompt_te: 'కామంతో భార్యను తాకితే తక్షణమే మరణం సంభవిస్తుందని కిందమ మహర్షి పాండురాజును శపించాడు.',
        prompt_hi: 'ऋषि किंदम ने पाण्डु को शाप दिया था कि यदि वे कामभाव से अपनी पत्नी का स्पर्श करेंगे तो उनकी तत्काल मृत्यु हो जाएगी।',
        correctAnswer: true,
        learnMore: 'Pandu had mistakenly shot Kindama and his wife with arrows while they were in the form of mating deer in the forest.',
        learnMore_te: 'జింకల రూపంలో ఉన్న కిందమ దంపతులను జింకలనుకుని పాండురాజు పొరపాటున బాణంతో కొట్టాడు.',
        learnMore_hi: 'पाण्डु ने मृग रूप में विचरण कर रहे ऋषि किंदम पर अनजाने में बाण चला दिया था।',
        xpReward: 10
      },
      {
        id: 'q7-3',
        type: 'riddle',
        prompt: 'Grief-stricken by Kindama’s curse, I gave up the royal jewels, handed the regency to Dhritarashtra, and went to live in the Himalayas with my queens. Who am I?',
        prompt_te: 'కిందముడి శాపంతో కుంగిపోయి, రాజ్యాన్ని ధృతరాష్ట్రుడికి అప్పగించి భార్యలతో సహా హిమాలయాలకు వెళ్లి తపస్సు చేసిన మహారాజును నేను. నేను ఎవరిని?',
        prompt_hi: 'शाप से दुखी होकर मैंने राजपाट धृतराष्ट्र को सौंपा और दोनों रानियों संग वन में तपस्वी जीवन जीने चला गया। मैं कौन हूँ?',
        hint: 'The valiant father of the five Pandava brothers.',
        hint_te: 'పాండవుల తండ్రి.',
        hint_hi: 'पाण्डवों के पिता।',
        answer: 'King Pandu',
        answer_te: 'పాండు మహారాజు',
        answer_hi: 'महाराज पाण्डु',
        options: ['King Pandu', 'King Shantanu', 'King Parikshit', 'King Janamejaya'],
        options_te: ['పాండు మహారాజు', 'శంతన మహారాజు', 'పరీక్షిన్మహారాజు', 'జనమేజయ మహారాజు'],
        options_hi: ['महाराज पाण्डु', 'राजा शांतनु', 'राजा परीक्षित', 'राजा जनमेजय'],
        learnMore: 'Pandu lived peacefully as an ascetic on the Mount Shatashringa alongside sages and Munis.',
        learnMore_te: 'పాండురాజు శతశృంగ పర్వతంపై ఋషుల సాంగత్యంలో మునివృత్తితో జీవించాడు.',
        learnMore_hi: 'पाण्डु शतशृंग पर्वत पर तपस्वियों और ऋषियों के बीच वानप्रस्थ जीवन व्यतीत करने लगे।',
        xpReward: 20
      }
    ]
  },

  // Level 8
  {
    levelNumber: 8,
    partNumber: 1,
    title: 'Kunti’s Boons & The Elder Pandavas',
    title_te: 'కుంతి వరాలు & పెద్ద పాండవులు',
    title_hi: 'कुन्ती के वरदान और ज्येष्ठ पाण्डव',
    subtitle: 'Invocation of Dharma, Vayu and Indra',
    subtitle_te: 'యముడు, వాయువు మరియు ఇంద్రుల ఆవాహన',
    subtitle_hi: 'धर्म, वायु और इंद्र का आह्वान',
    questions: [
      {
        id: 'q8-1',
        type: 'mcq',
        prompt: 'Which short-tempered sage granted young Princess Kunti a divine mantra that allowed her to invoke any god to bear children?',
        prompt_te: 'ఏ దేవుడినైనా ఆవాహన చేసి సంతానం పొందే దివ్య మంత్రాన్ని కుంతికి ప్రసాదించిన మహర్షి ఎవరు?',
        prompt_hi: 'किस तपस्वी ऋषि ने कुन्ती की सेवा से प्रसन्न होकर उन्हें देवताओं का आह्वान करने वाला दिव्य मंत्र दिया था?',
        options: ['Sage Durvasa', 'Sage Agastya', 'Sage Narada', 'Sage Gautama'],
        options_te: ['దుర్వాస మహర్షి', 'అగస్త్య మహర్షి', 'నారద మహర్షి', 'గౌతమ మహర్షి'],
        options_hi: ['महर्षि दुर्वासा', 'महर्षि अगस्त्य', 'देवर्षि नारद', 'महर्षि गौतम'],
        correctIndex: 0,
        learnMore: 'Pleased with Kunti’s hospitality and devotion at her father Kuntibhoja’s palace, Sage Durvasa foresaw Pandu’s plight and granted her the mantra.',
        learnMore_te: 'కుంతిభోజుడి రాజభవనంలో కుంతి చేసిన నిష్కల్మషమైన సేవలకు మెచ్చి దుర్వాసుడు ఈ మహామంత్రాన్ని ఉపదేశించాడు.',
        learnMore_hi: 'कुन्तीभोज के महल में कुन्ती की निष्ठापूर्ण सेवा से संतुष्ट होकर दुर्वासा ऋषि ने यह वरदान दिया था।',
        xpReward: 10
      },
      {
        id: 'q8-2',
        type: 'true_false',
        prompt: 'Yudhishthira was born from the invocation of Lord Dharma (Yamaraja), embodying righteousness and truth.',
        prompt_te: 'ధర్మదేవత (యమధర్మరాజు) అనుగ్రహంతో జన్మించిన యుధిష్ఠిరుడు సత్యం మరియు ధర్మానికి ప్రతిరూపంగా నిలిచాడు.',
        prompt_hi: 'धर्मराज (यम) के अंश और आह्वान से जन्मे युधिष्ठिर सत्य और धर्म के साक्षात स्वरूप थे।',
        correctAnswer: true,
        learnMore: 'Because he was fathered by Lord Dharma, Yudhishthira was called Dharmaraja and was renowned for never speaking an untruth.',
        learnMore_te: 'ధర్మదేవత కుమారుడైనందువల్ల యుధిష్ఠిరుడిని ధర్మరాజు అని పిలిచారు; ఆయన ఎన్నడూ అసత్యం పలకడు.',
        learnMore_hi: 'धर्मदेव के पुत्र होने के कारण उन्हें "धर्मराज" कहा गया और वे सत्यवादिता के लिए प्रसिद्ध हुए।',
        xpReward: 10
      },
      {
        id: 'q8-3',
        type: 'riddle',
        prompt: 'Fathered by Indra, the King of Gods, I was born with celestial destiny to become the greatest wielder of bows in the three worlds. Who am I?',
        prompt_te: 'దేవేంద్రుడి అనుగ్రహంతో జన్మించి, ముల్లోకాలలోనూ సాటిలేని ధనుర్ధారిగా కీర్తి గడించిన మూడవ పాండవుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'देवराज इंद्र के आह्वान से उत्पन्न हुआ और तीनों लोकों में सर्वश्रेष्ठ धनुर्धर बनने का गौरव पाया। मैं कौन हूँ?',
        hint: 'The beloved disciple of Drona and friend of Krishna.',
        hint_te: 'గాండీవధారి, కృష్ణుడి ప్రియమిత్రుడు.',
        hint_hi: 'गांडीवधारी, कृष्ण के सखा और पार्थ।',
        answer: 'Arjuna (Partha)',
        answer_te: 'అర్జునుడు (పార్థుడు)',
        answer_hi: 'अर्जुन (पार्थ)',
        options: ['Arjuna (Partha)', 'Bhima', 'Nakula', 'Sahadeva'],
        options_te: ['అర్జునుడు (పార్థుడు)', 'భీముడు', 'నకులుడు', 'సహదేవుడు'],
        options_hi: ['अर्जुन (पार्थ)', 'भीम', 'नकुल', 'सहदेव'],
        learnMore: 'At Arjuna’s birth, a celestial voice echoed from the heavens predicting his unparalleled martial accomplishments.',
        learnMore_te: 'అర్జునుడు జన్మించినప్పుడు ఆకాశవాణి పలికి ఆయన కీర్తి దిగంతాలకు వ్యాపిస్తుందని ప్రకటించింది.',
        learnMore_hi: 'अर्जुन के जन्म पर आकाशवाणी हुई थी कि यह बालक इंद्र के समान पराक्रमी और विश्वप्रसिद्ध धनुर्धर होगा।',
        xpReward: 20
      }
    ]
  },

  // Level 9
  {
    levelNumber: 9,
    partNumber: 1,
    title: 'The Divine Twins & The Sun-Son',
    title_te: 'దివ్య కవలలు & సూర్యపుత్రుడు',
    title_hi: 'दिव्य यमज और सूर्यपुत्र कर्ण',
    subtitle: 'The Ashvins and Surya’s Firstborn',
    subtitle_te: 'అశ్విని దేవతలు మరియు కర్ణుడి రహస్య జననం',
    subtitle_hi: 'अश्विनीकुमार और कर्ण का जन्म',
    questions: [
      {
        id: 'q9-1',
        type: 'mcq',
        prompt: 'Which divine twin gods did Queen Madri invoke with Kunti’s permission to give birth to Nakula and Sahadeva?',
        prompt_te: 'నకులుడు మరియు సహదేవులకు జన్మనివ్వడానికి రాణి మాద్రి ఏ దివ్య దేవతలను ఆవాహన చేసింది?',
        prompt_hi: 'माद्री ने कुन्ती द्वारा दिए गए मंत्र से किन दिव्य जुड़वां देवताओं का आह्वान कर नकुल और सहदेव को प्राप्त किया?',
        options: [
          'The Ashvini Kumaras (Nasatya & Dasra)',
          'The Maruts',
          'The Rudras',
          'The Adityas'
        ],
        options_te: [
          'అశ్వినీ దేవతలు (నాసత్య & దస్ర)',
          'మరుత్తులు',
          'రుద్రులు',
          'ఆదిత్యులు'
        ],
        options_hi: [
          'अश्विनीकुमार (नासत्य और दस्त्र)',
          'मरुद्गण',
          'रुद्रगण',
          'आदित्यगण'
        ],
        correctIndex: 0,
        learnMore: 'The Ashvins, divine physicians of the gods, blessed Madri with Nakula (famed for handsome grace and equine mastery) and Sahadeva (famed for wisdom and astrology).',
        learnMore_te: 'దేవవైద్యులైన అశ్వినీ దేవతల అనుగ్రహంతో అద్భుత సౌందర్యవంతులైన నకుల, సహదేవులు జన్మించారు.',
        learnMore_hi: 'देव-वैद्य अश्विनीकुमारों के आशीर्वाद से नकुल (अश्वविद्या व सौंदर्य) और सहदेव (त्रिकालदर्शी व बुद्धि) का जन्म हुआ।',
        xpReward: 10
      },
      {
        id: 'q9-2',
        type: 'true_false',
        prompt: 'Kunti invoked Lord Surya out of youthful curiosity before marriage, resulting in the birth of Karna with impenetrable armor (Kavacha) and golden earrings (Kundala).',
        prompt_te: 'వివాహానికి ముందే కుతూహలంతో కుంతి సూర్యభగవానుడిని ప్రార్థించడంతో కవచకుండలాలతో కర్ణుడు జన్మించాడు.',
        prompt_hi: 'विवाह से पूर्व कौतूहलवश कुन्ती ने सूर्यदेव का आह्वान किया, जिसके फलस्वरूप कवच-कुंडल सहित कर्ण का जन्म हुआ।',
        correctAnswer: true,
        learnMore: 'Fearing societal condemnation as an unwed mother, Kunti tearfully placed baby Karna in a sealed basket and set it afloat on the Ashva river.',
        learnMore_te: 'లోకనిందకు భయపడి కన్నతల్లి కుంతి నవజాత శిశువైన కర్ణుడిని పేటికలో ఉంచి అశ్వ నదిలో వదిలివేసింది.',
        learnMore_hi: 'लोकलाज के भय से कुन्ती ने नवजात शिशु को मंजूषा (पेटी) में रखकर नदी में प्रवाहित कर दिया।',
        xpReward: 10
      },
      {
        id: 'q9-3',
        type: 'riddle',
        prompt: 'Found on the riverbanks by charioteer Adhiratha and raised lovingly by Radha, I became the greatest exemplar of charity (Danaveera). Who am I?',
        prompt_te: 'నది ఒడ్డున సారథి అధిరథుడికి దొరికి, రాధమ్మ చేతుల్లో పెరిగి, జగత్ ప్రసిద్ధ దానవీరుడిగా ఎదిగిన వాడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'अधिरथ सारथी और माता राधा ने नदी तट से उठाकर मेरा लालन-पालन किया, और मैं महादानी दानवीर कहलाया। मैं कौन हूँ?',
        hint: 'He was Kunti’s firstborn child and King of Anga.',
        hint_te: 'కుంతీ ప్రథమ పుత్రుడు, అంగరాజ్యాధిపతి.',
        hint_hi: 'कुन्ती के ज्येष्ठ पुत्र और अंगराज।',
        answer: 'Karna (Radheya)',
        answer_te: 'కర్ణుడు (రాధేయుడు)',
        answer_hi: 'कर्ण (राधेय)',
        options: ['Karna (Radheya)', 'Ekalavya', 'Satyaki', 'Ashwatthama'],
        options_te: ['కర్ణుడు (రాధేయుడు)', 'ఏకలవ్యుడు', 'సాత్యకి', 'అశ్వత్థామ'],
        options_hi: ['कर्ण (राधेय)', 'एकलव्य', 'सात्यकि', 'अश्वत्थामा'],
        learnMore: 'Karna grew up as Radheya with unrivaled generosity, never refusing anyone who approached him for charity at sunrise.',
        learnMore_te: 'కర్ణుడు సూర్యోదయ వేళ తన వద్దకు వచ్చిన ఎవరికీ కాదనకుండా దానం చేసే ఉదార స్వభావుడు.',
        learnMore_hi: 'कर्ण प्रतिदिन सूर्य पूजा के समय द्वार पर आए किसी भी याचक को खाली हाथ नहीं लौटाते थे।',
        xpReward: 20
      }
    ]
  },

  // Level 10
  {
    levelNumber: 10,
    partNumber: 1,
    title: 'Return to Hastinapur',
    title_te: 'హస్తినాపుర పునరాగమనం',
    title_hi: 'हस्तिनापुर वापसी',
    subtitle: 'Passing of Pandu and Royal Welcoming',
    subtitle_te: 'పాండురాజు నిర్యాణం మరియు ఘన స్వాగతం',
    subtitle_hi: 'पाण्डु का निर्वाण और भव्य स्वागत',
    questions: [
      {
        id: 'q10-1',
        type: 'mcq',
        prompt: 'Who accompanied Queen Kunti and the five young Pandava princes when they traveled back to Hastinapur after Pandu’s demise?',
        prompt_te: 'పాండురాజు మరణానంతరం కుంతి మరియు ఐదుగురు పాండవులను హస్తినాపురానికి తోడ్కొని వచ్చినవారు ఎవరు?',
        prompt_hi: 'महाराज पाण्डु के निधन के पश्चात कुन्ती और पांचों पाण्डव बालकों को हस्तिनापुर लेकर कौन आया था?',
        options: [
          'Venerable Rishis and ascetics of the Shatashringa mountain',
          'King Drupada of Panchala',
          'Lord Krishna of Dvaraka',
          'Shakuni of Gandhara'
        ],
        options_te: [
          'శతశృంగ పర్వత పవిత్ర ఋషులు మరియు మునులు',
          'పాంచాల రాజు ద్రుపదుడు',
          'ద్వారకాధీశుడు శ్రీకృష్ణుడు',
          'గాంధార రాజు శకుని'
        ],
        options_hi: [
          'शतशृंग पर्वत के तपस्वी महर्षि और मुनिगण',
          'पांचाल नरेश द्रुपद',
          'द्वारकाधीश श्रीकृष्ण',
          'गांधार नरेश शकुनि'
        ],
        correctIndex: 0,
        learnMore: 'The great Himalayan ascetics personally presented the boys to Bhishma, Dhritarashtra, and the assembly, verifying their divine births.',
        learnMore_te: 'హిమాలయ మునులు హస్తినాపుర సభలో పాండవుల దివ్య జననాన్ని ధ్రువీకరించి భీష్ముడికి అప్పగించారు.',
        learnMore_hi: 'ऋषियों ने हस्तिनापुर की राजसभा में जाकर धृतराष्ट्र और भीष्म को पाण्डवों के दैवीय जन्म का साक्ष्य दिया।',
        xpReward: 10
      },
      {
        id: 'q10-2',
        type: 'true_false',
        prompt: 'Queen Madri chose to ascend the funeral pyre with King Pandu, entrusting her young twin sons to Kunti’s maternal love.',
        prompt_te: 'పాండురాజుతో పాటు చితిని అధిరోహించిన రాణి మాద్రి, తన ఇద్దరు బిడ్డలను కుంతి మాతృత్వానికి అప్పగించింది.',
        prompt_hi: 'माद्री ने पाण्डु के साथ सती होने का निर्णय लिया और अपने दोनों पुत्रों को कुन्ती के वात्सल्य को सौंप दिया।',
        correctAnswer: true,
        learnMore: 'Kunti raised Nakula and Sahadeva with equal, if not greater, affection than her own biological sons.',
        learnMore_te: 'కుంతి తన సొంత బిడ్డల కన్నా ఎక్కువగా నకుల సహదేవులను అపురూపంగా చూసుకుంది.',
        learnMore_hi: 'कुन्ती ने नकुल और सहदेव का पालन-पोषण अपने सगे पुत्रों से भी अधिक प्रेम से किया।',
        xpReward: 10
      },
      {
        id: 'q10-3',
        type: 'riddle',
        prompt: 'I stood as the steadfast patriarch who embraced Kunti and the five boys, ensuring their royal initiation into the Kuru dynasty. Who am I?',
        prompt_te: 'హస్తినాపురంలో కుంతిని, ఐదుగురు పాండవులను ఆదరించి, వారికి సకల రాజభోగాలు, విద్యలు దక్కేలా చూసిన పితామహుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'कुरुवंश के कुलवृद्ध जिन्होंने कुन्ती और पाण्डवों को गले लगाया तथा उनके अधिकारों की रक्षा की। मैं कौन हूँ?',
        hint: 'He of the terrible oath and son of holy Ganga.',
        hint_te: 'గంగాపుత్రుడు మరియు భీష్మ ప్రతిజ్ఞ చేసినవాడు.',
        hint_hi: 'गंगापुत्र जिन्होंने पिता के लिए आजीवन ब्रह्मचर्य साधा।',
        answer: 'Bhishma Pitamaha',
        answer_te: 'భీష్మ పితామహుడు',
        answer_hi: 'भीष्म पितामह',
        options: ['Bhishma Pitamaha', 'Dhritarashtra', 'Vidura', 'Dronacharya'],
        options_te: ['భీష్మ పితామహుడు', 'ధృతరాష్ట్రుడు', 'విదురుడు', 'ద్రోణాచార్యుడు'],
        options_hi: ['भीष्म पितामह', 'धृतराष्ट्र', 'विदुर', 'द्रोणाचार्य'],
        learnMore: 'Bhishma performed all royal purification rites for the young Pandavas and welcomed them to the royal palace.',
        learnMore_te: 'భీష్ముడు స్వయంగా పర్యవేక్షించి పాండవులకు హస్తినాపురంలో సముచిత స్థానాన్ని కల్పించాడు.',
        learnMore_hi: 'भीष्म ने पाण्डवों का विधिवत संस्कार करवाया और उन्हें राजमहल में सम्मानपूर्वक स्थान दिलाया।',
        xpReward: 20
      }
    ]
  }
];
