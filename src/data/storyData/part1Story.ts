import { StoryPart } from '../../types/game';

export const PART_1_STORY: StoryPart = {
  partNumber: 1,
  title: 'Origins & The Sacred Vow',
  title_te: 'ఆదిపర్వం - గంగా శంతనులు & భీష్మ ప్రతిజ్ఞ',
  title_hi: 'आदिपर्व - गंगा-शांतनु और भीष्म की भीषण प्रतिज्ञा',
  sanskritTitle: 'आदिपर्व - भीष्म प्रतिज्ञा',
  summary: 'From the celestial banks of the holy Ganga to the golden court of Hastinapur, witness the origins of the sacred lineage, King Shantanu’s divine love, Devavrata’s martial training, and the awe-inspiring oath that shook the heavens.',
  summary_te: 'పవిత్ర గంగా తీరం నుండి హస్తినాపుర స్వర్ణ సింహాసనం వరకు: వంశ మూలాలు, శంతనుని దివ్య ప్రేమ, దేవవ్రతుని అద్భుత విద్యాభ్యాసం, మరియు ముల్లోకాలను కదిలించిన భీష్ముని భీకర శపథం.',
  summary_hi: 'पवित्र गंगा के तट से हस्तिनापुर के राजसिंहासन तक: कुरुवंश की उत्पत्ति, शांतनु का दैवीय प्रेम, देवव्रत का अद्वितीय पराक्रम और तीनों लोकों को कंपित करने वाली भीष्म की भीषण प्रतिज्ञा।',
  characterRewardId: 'bhishma',

  // Characters in this part
  charactersInPart: [
    {
      id: 'shantanu',
      name: 'King Shantanu',
      name_te: 'శంతన మహారాజు',
      name_hi: 'महाराज शांतनु',
      title: 'Emperor of the Lunar Dynasty',
      title_te: 'చంద్రవంశ చక్రవర్తి',
      title_hi: 'चंद्रवंश के चक्रवर्ती सम्राट',
      relationship: 'Husband of Ganga and Satyavati; Father of Bhishma, Chitrangada, and Vichitravirya',
      relationship_te: 'గంగ మరియు సత్యవతిల భర్త; భీష్ముడు, చిత్రాంగదుడు, విచిత్రవీర్యుల తండ్రి',
      relationship_hi: 'गंगा और सत्यवती के पति; भीष्म, चित्रांगद और विचित्रवीर्य के पिता',
      intro: 'A noble, compassionate monarch whose love and longing set in motion the pivotal destinies of the Kuru dynasty.',
      intro_te: 'ప్రజానురంజకుడైన చంద్రవంశపు చక్రవర్తి. ఆయన ప్రేమ మరియు వేదన కురువంశ భవితవ్యాన్ని మార్చాయి.',
      intro_hi: 'कुरुवंश के प्रतापी राजा जिनके प्रेम और वचनों ने संपूर्ण महाभारत की नियति की आधारशिला रखी।',
      avatarUrl: '/assets/wallpapers/bhishma.jpg',
      role: 'elder'
    },
    {
      id: 'ganga',
      name: 'Goddess Ganga',
      name_te: 'గంగాదేవి',
      name_hi: 'माता गंगा',
      title: 'Celestial River Maiden & Divine Mother',
      title_te: 'స్వర్గలోక సురనది & దివ్య జనని',
      title_hi: 'देवनदी और देवव्रत की दिव्य माता',
      relationship: 'First Wife of Shantanu; Mother of Devavrata (Bhishma)',
      relationship_te: 'శంతనుని ప్రథమ భార్య; దేవవ్రతుని (భీష్ముని) తల్లి',
      relationship_hi: 'शांतनु की पहली रानी और देवव्रत की माता',
      intro: 'The sacred river incarnated as a queen to liberate the eight cursed Vasu deities through mortal birth.',
      intro_te: 'అష్టవసువులకు శాపవిముక్తి కలిగించడానికి మానవ రూపం దాల్చిన పవిత్ర గంగా భవాని.',
      intro_hi: 'अष्ट वसुओं को शापमुक्त करने के लिए मानवी रूप धारण करने वाली परम पावन देवनदी।',
      avatarUrl: '/assets/wallpapers/bhishma.jpg',
      role: 'celestial'
    },
    {
      id: 'devavrata',
      name: 'Devavrata (Bhishma)',
      name_te: 'దేవవ్రతుడు (భీష్మ పితామహుడు)',
      name_hi: 'देवव्रत (भीष्म पितामह)',
      title: 'The Great Grandsire of Eternal Vows',
      title_te: 'భీకర శపథం చేసిన అజేయ యోధుడు',
      title_hi: 'अखंड भीष्म प्रतिज्ञा के महानायक',
      relationship: 'Eighth son of Shantanu & Ganga; Crown Prince of Hastinapur',
      relationship_te: 'శంతనుడు మరియు గంగల ఎనిమిదవ కుమారుడు; హస్తినాపుర యువరాజు',
      relationship_hi: 'शांतनु और गंगा के आठवें पुत्र; हस्तिनापुर के युवराज',
      intro: 'Trained by Brihaspati, Vashishta, and Parashurama. Renounced the crown and marital joy for his father’s peace.',
      intro_te: 'వశిష్ట, పరశురామాదుల వద్ద విద్యనభ్యసించిన అసమాన వీరుడు. తండ్రి సుఖం కోసం రాజ్యాన్ని, సంసారాన్ని త్యజించాడు.',
      intro_hi: 'परशुराम और वशिष्ठ के शिष्य जिन्होंने पिता के सुख हेतु आजीवन ब्रह्मचर्य और राज्य-त्याग का अमर संकल्प लिया।',
      avatarUrl: '/assets/wallpapers/bhishma.jpg',
      role: 'hero'
    },
    {
      id: 'satyavati',
      name: 'Queen Satyavati (Matsyagandha)',
      name_te: 'సత్యవతి దేవి (మత్స్యగంధి)',
      name_hi: 'सत्यवती (मत्स्यगंधा)',
      title: 'Queen Mother of Hastinapur',
      title_te: 'హస్తినాపుర రాజమాత',
      title_hi: 'हस्तिनापुर की राजमाता',
      relationship: 'Daughter of Dusharaj; Mother of Vyasa, Chitrangada, and Vichitravirya',
      relationship_te: 'దాశరాజు కుమార్తె; వ్యాసుడు, చిత్రాంగదుడు, విచిత్రవీర్యుల తల్లి',
      relationship_hi: 'दाशराज की कन्या; वेदव्यास, चित्रांगद और विचित्रवीर्य की माता',
      intro: 'A woman of sharp intellect and royal ambition whose union with Shantanu shaped the throne’s inheritance.',
      intro_te: 'తీవ్ర సంకల్పం, వంశ రక్షణ తపన కల రాజమాత. ఈమె వల్లే కురు సింహాసనం కొత్త మలుపు తిరిగింది.',
      intro_hi: 'तीक्ष्ण बुद्धि और वंश की रक्षा हेतु निरंतर चिंतित रहने वाली दृढ़निश्चयी राजमाता।',
      avatarUrl: '/assets/wallpapers/draupadi.jpg',
      role: 'queen'
    },
    {
      id: 'vyasa',
      name: 'Sage Krishna Dwaipayana (Vyasa)',
      name_te: 'శ్రీ కృష్ణ ద్వైపాయనుడు (వేదవ్యాస మహర్షి)',
      name_hi: 'महर्षि वेदव्यास',
      title: 'Composer of the Epic & Patriarch of Lineage',
      title_te: 'మహాభారత కర్త & కురువంశ దాత',
      title_hi: 'महाभारत के रचयिता और कुरुवंश के विधाता',
      relationship: 'Son of Sage Parashara & Satyavati; Father of Dhritarashtra, Pandu, and Vidura',
      relationship_te: 'పరాశర మహర్షి మరియు సత్యవతిల కుమారుడు; ధృతరాష్ట్ర, పాండు, విదురుల తండ్రి',
      relationship_hi: 'पराशर और सत्यवती के पुत्र; धृतराष्ट्र, पाण्डु और विदुर के पिता',
      intro: 'The immortal sage who compiled the four Vedas, composed the Mahabharata, and preserved the Kuru dynasty through Niyoga.',
      intro_te: 'వేదాలను విభజించి, మహాభారతాన్ని రచించిన చిరంజీవి. కురు వంశాన్ని నిలిపిన త్రికాలజ్ఞాని.',
      intro_hi: 'वेदों के संकलनकर्ता और महाभारत के अमर रचयिता जिन्होंने कुरुवंश की रक्षा हेतु नियोग द्वारा वंश को आगे बढ़ाया।',
      avatarUrl: '/assets/wallpapers/sanatana-dharma.jpg',
      role: 'mentor'
    }
  ],

  // Interactive Family Tree for Part 1
  familyTree: {
    title: 'Genealogy of the Kuru Throne — Part 1',
    title_te: 'కురు వంశ వృక్షం — భాగం 1',
    title_hi: 'कुरुवंश की वंशावली — भाग १',
    description: 'Trace how King Shantanu’s two marriages gave rise to Devavrata (Bhishma) and later to Dhritarashtra, Pandu, and Vidura through Sage Vyasa.',
    description_te: 'శంతనుని వివాహాల ద్వారా భీష్ముడు, అనంతరం వ్యాస మహర్షి అనుగ్రహంతో ధృతరాష్ట్ర, పాండు, విదురులు ఎలా జన్మించారో చూడండి.',
    description_hi: 'शांतनु के दो विवाहों से भीष्म और फिर महर्षि व्यास द्वारा धृतराष्ट्र, पाण्डु और विदुर के जन्म का क्रम समझें।',
    nodes: [
      { id: 'shantanu', name: 'King Shantanu', name_te: 'శంతన మహారాజు', name_hi: 'महाराज शांतनु', role: 'Emperor of Hastinapur', role_te: 'చక్రవర్తి', role_hi: 'हस्तिनापुर नरेश', clan: 'Lunar Dynasty', generation: 1, isKeyCharacter: true },
      { id: 'ganga', name: 'Goddess Ganga', name_te: 'గంగాదేవి', name_hi: 'माता गंगा', role: 'First Queen', role_te: 'ప్రథమ రాణి', role_hi: 'प्रथम रानी', clan: 'Sage / Celestial', generation: 1 },
      { id: 'satyavati', name: 'Satyavati', name_te: 'సత్యవతి దేవి', name_hi: 'सत्यवती', role: 'Second Queen', role_te: 'ద్వితీయ రాణి', role_hi: 'द्वितीय रानी', clan: 'Kuru', generation: 1, isKeyCharacter: true },
      { id: 'bhishma', name: 'Devavrata (Bhishma)', name_te: 'దేవవ్రతుడు (భీష్ముడు)', name_hi: 'देवव्रत (भीष्म)', role: 'Pledged Celibate & Protector', role_te: 'సింహాసన రక్షకుడు', role_hi: 'सिंहासन रक्षक', clan: 'Kuru', generation: 2, isKeyCharacter: true },
      { id: 'chitrangada', name: 'Chitrangada', name_te: 'చిత్రాంగదుడు', name_hi: 'चित्रांगद', role: 'Elder Son of Satyavati', role_te: 'సత్యవతి పెద్ద కొడుకు', role_hi: 'सत्यवती के ज्येष्ठ पुत्र', clan: 'Kuru', generation: 2 },
      { id: 'vichitravirya', name: 'Vichitravirya', name_te: 'విచిత్రవీర్యుడు', name_hi: 'विचित्रवीर्य', role: 'Younger Son of Satyavati', role_te: 'సత్యవతి చిన్న కొడుకు', role_hi: 'सत्यवती के छोटे पुत्र', clan: 'Kuru', generation: 2 },
      { id: 'vyasa', name: 'Sage Vyasa', name_te: 'వేదవ్యాస మహర్షి', name_hi: 'महर्षि व्यास', role: 'Spiritual Patriarch', role_te: 'జ్ఞాన పితామహుడు', role_hi: 'ऋषि व कथाकार', clan: 'Sage / Celestial', generation: 2, isKeyCharacter: true },
      { id: 'dhritarashtra', name: 'Dhritarashtra', name_te: 'ధృతరాష్ట్రుడు', name_hi: 'धृतराष्ट्र', role: 'Born Sightless (Kaurava Father)', role_te: 'కౌరవుల తండ్రి', role_hi: 'कौरवों के पिता', clan: 'Kaurava', generation: 3, isKeyCharacter: true },
      { id: 'pandu', name: 'King Pandu', name_te: 'పాండురాజు', name_hi: 'महाराज पाण्डु', role: 'Crowned King (Pandava Father)', role_te: 'పాండవుల తండ్రి', role_hi: 'पांडवों के पिता', clan: 'Pandava', generation: 3, isKeyCharacter: true },
      { id: 'vidura', name: 'Vidura', name_te: 'విదురుడు', name_hi: 'విదురుడు', role: 'Prime Minister of Dharma', role_te: 'ధర్మనీతి మంత్రి', role_hi: 'धर्मनीतिज्ञ महामंत्री', clan: 'Kuru', generation: 3, isKeyCharacter: true }
    ],
    links: [
      { from: 'shantanu', to: 'ganga', relationship: 'married_to', label: '1st Marriage', label_te: 'మొదటి వివాహం', label_hi: 'प्रथम विवाह' },
      { from: 'shantanu', to: 'satyavati', relationship: 'married_to', label: '2nd Marriage', label_te: 'రెండవ వివాహం', label_hi: 'द्वितीय विवाह' },
      { from: 'shantanu', to: 'bhishma', relationship: 'parent_of', label: 'Father of Bhishma', label_te: 'భీష్ముని తండ్రి', label_hi: 'भीष्म के पिता' },
      { from: 'ganga', to: 'bhishma', relationship: 'parent_of', label: 'Mother of Bhishma', label_te: 'భీష్ముని తల్లి', label_hi: 'भीष्म की माता' },
      { from: 'shantanu', to: 'chitrangada', relationship: 'parent_of', label: 'Father', label_te: 'తండ్రి', label_hi: 'पिता' },
      { from: 'shantanu', to: 'vichitravirya', relationship: 'parent_of', label: 'Father', label_te: 'తండ్రి', label_hi: 'पिता' },
      { from: 'satyavati', to: 'vyasa', relationship: 'parent_of', label: 'Mother of Vyasa', label_te: 'వ్యాసుని తల్లి', label_hi: 'व्यास की माता' },
      { from: 'vyasa', to: 'dhritarashtra', relationship: 'parent_of', label: 'Niyoga Blessing', label_te: 'నియోగ ఆశీర్వాదం', label_hi: 'नियोग वरदान' },
      { from: 'vyasa', to: 'pandu', relationship: 'parent_of', label: 'Niyoga Blessing', label_te: 'నియోగ ఆశీర్వాదం', label_hi: 'नियोग वरदान' },
      { from: 'vyasa', to: 'vidura', relationship: 'parent_of', label: 'Niyoga Blessing', label_te: 'నియోగ ఆశీర్వాదం', label_hi: 'नियोग वरदान' }
    ]
  },

  // Detailed Illustrated Story Pages (Reference 3 & Reference 2 Compliant)
  illustratedPages: [
    {
      pageNumber: 1,
      chapterNumber: 1,
      partTitle: 'The Origins',
      partTitle_te: 'ఆది పర్వం - ఆరంభం',
      partTitle_hi: 'आदि पर्व - उत्पत्ति',
      title: 'Vishwamitra and Menaka',
      title_te: 'విశ్వామిత్రుడు మరియు మేనక',
      title_hi: 'विश्वामित्र और मेनका',
      sceneTag: 'Forest of Tapasya',
      sceneTag_te: 'తపోవనం',
      sceneTag_hi: 'तपोवन',
      hookLine: 'Long long ago, Rishi Vishwamitra was performing a great penance.',
      hookLine_te: 'పూర్వం విశ్వామిత్ర మహర్షి గొప్ప తపస్సు ప్రారంభించాడు.',
      hookLine_hi: 'प्राचीन काल में महर्षि विश्वामित्र ने घोर तपस्या आरंभ की।',
      paragraphs: [
        'Long long ago, Rishi Vishwamitra was performing a great penance. Vishwamitra was a great sage. It was said that the penance that he was doing would give him ultimate power over the kingdom of Earth and Heaven.',
        'Indra, the king of the gods was afraid that if Vishwamitra successfully completed the penance he would achieve so much power that he would be able to fight with Indra and drive him away from Heaven. So he decided to distract Vishwamitra and therefore force him to stop doing the penance.',
        'In Indra’s celestial court, there lived a very beautiful woman named Menaka. Menaka was so beautiful that anyone who gazed at her eyes would fall in love with her. Indra said to Menaka, "Rishi Vishwamitra is doing a tough penance. If he succeeds, he would be more powerful than the gods. Go to him and disturb his meditation so that the penance is left unfinished. Come back only when you have finished this task."',
        'Menaka came to Earth and went to the forest where Vishwamitra sat meditating with his eyes closed. Menaka had a beautiful voice and she was a talented dancer. She sang and danced around Vishwamitra. She made a garland out of wild flowers and put it around Vishwamitra’s neck. Vishwamitra opened his eyes and saw Menaka. He was amazed by her beauty.'
      ],
      paragraphs_te: [
        'పూర్వం విశ్వామిత్ర మహర్షి భూలోకం మరియు స్వర్గలోకాలపై అపరిమితమైన శక్తిని సాధించేందుకు కఠినమైన తపస్సు చేస్తున్నాడు.',
        'విశ్వామిత్రుడు తపస్సు పూర్తి చేస్తే తన ఇంద్రపదవి ఎక్కడ పోతుందో అని దేవరాజైన ఇంద్రుడు తీవ్రంగా భయపడ్డాడు. ఆయన తపస్సును భంగం చేయాలని నిర్ణయించుకున్నాడు.',
        'ఇంద్రుని సభలో పరమ సౌందర్యవతి అయిన మేనక అనే అప్సరస ఉండేది. ఇంద్రుడు మేనకతో: "విశ్వామిత్రుడు కఠిన తపస్సు చేస్తున్నాడు. నీవు భూలోకానికి వెళ్లి ఆయన ధ్యానాన్ని భంగపరచు" అని ఆదేశించాడు.',
        'మేనక తపోవనానికి వచ్చి విశ్వామిత్రుని చుట్టూ మధురంగా పాడుతూ నాట్యం చేసింది. అడవి పూలతో మాల అల్లి ఆయన మెడలో వేసింది. విశ్వామిత్రుడు కళ్లు తెరిచి ఆమె అద్భుత సౌందర్యాన్ని చూసి ముగ్ధుడయ్యాడు.'
      ],
      paragraphs_hi: [
        'प्राचीन काल में महर्षि विश्वामित्र घोर तपस्या कर रहे थे। मान्यता थी कि इस तपस्या से वे पृथ्वी और स्वर्ग दोनों पर अद्वितीय शक्ति प्राप्त कर लेंगे।',
        'देवराज इंद्र भयभीत हो गए कि कहीं विश्वामित्र का तप पूर्ण होने पर उनका इंद्रासन न छिन जाए। इसलिए उन्होंने विश्वामित्र के तप को भंग करने का षड्यंत्र रचा।',
        'इंद्र की राजसभा में मेनका नाम की अत्यंत सुंदर अप्सरा थी। इंद्र ने मेनका से कहा: "ऋषि विश्वामित्र की तपस्या को भंग करो, ताकि उनका ध्यान टूट जाए।"',
        'मेनका पृथ्वी पर उस वन में पहुँची जहाँ विश्वामित्र ध्यानमग्न थे। उसने मधुर गायन और मनमोहक नृत्य किया, तथा जंगली फूलों की माला ऋषि के गले में डाल दी। विश्वामित्र ने आँखें खोलीं और मेनका के रूप पर मोहित हो गए।'
      ],
      dialogueQuote: '"Go to him and disturb his meditation so that the penance is left unfinished. Come back only when you have finished this task."',
      dialogueQuote_te: '"ఆయన ధ్యానాన్ని భంగపరచి తపస్సు అసంపూర్ణంగా ముగిసేలా చేయి."',
      dialogueQuote_hi: '"जाओ और उनकी समाधि को भंग करो ताकि यह तप अधूरा रह जाए।"',
      speaker: 'Indra to Menaka',
      speaker_te: 'మేనకతో ఇంద్రుడు',
      speaker_hi: 'मेनका से इंद्र के शब्द',
      imageUrl: '/assets/storybook/vishwamitra-menaka.jpg',
      imageCaption: 'Rishi Vishwamitra deep in meditation by the mountain stream as Menaka dances.',
      imageCaption_te: 'తపోవనంలో విశ్వామిత్ర మహర్షి మరియు నర్తిస్తున్న అప్సరస మేనక.',
      imageCaption_hi: 'तपोवन में ध्यानमग्न विश्वामित्र और नृत्य करती अप्सरा मेनका।',
      moralLesson: 'Even the strongest people can be affected by emotions. True strength sometimes means controlling your mind and desires.',
      moralLesson_te: 'ఎంతటి బలవంతులైనా భావోద్వేగాలకు లోనుకావచ్చు. మనస్సును మరియు కోరికలను అదుపులో ఉంచుకోవడమే నిజమైన బలం.',
      moralLesson_hi: 'भावनाओं के प्रवाह में बड़े-बड़े ज्ञानी भी विचलित हो सकते हैं। अपने मन और इच्छाओं पर नियंत्रण रखना ही सच्ची शक्ति है।'
    },
    {
      pageNumber: 2,
      chapterNumber: 2,
      partTitle: 'The Origins',
      partTitle_te: 'ఆది పర్వం - ఆరంభం',
      partTitle_hi: 'आदि पर्व - उत्पत्ति',
      title: 'Shakuntala and Prince Bharata',
      title_te: 'శకుంతల మరియు భరత చక్రవర్తి',
      title_hi: 'शकुंतला और निर्भीक बालक भरत',
      sceneTag: 'Hermitage of Sage Kanva',
      sceneTag_te: 'కణ్వ మహర్షి ఆశ్రమం',
      sceneTag_hi: 'महर्षि कण्व का शांत आश्रम',
      hookLine: 'From the union of Vishwamitra and Menaka was born Shakuntala, whose son Bharata gave our nation its name.',
      hookLine_te: 'మన భారతదేశానికి ఆ పేరు తెచ్చిన సింహాల మిత్రుడు బాల భరతుడు.',
      hookLine_hi: 'जिस वीर बालक भरत के नाम पर हमारे देश का नाम भारतवर्ष पड़ा।',
      paragraphs: [
        'Vishwamitra married Menaka and a daughter was born to them. But realizing his penance was broken, Vishwamitra departed to resume his austerities. Menaka, bound by celestial duty, left the infant near a bush by the river, where wild birds (Shakuntas) protected the child with their wings.',
        'Rishi Kanva found the baby, named her Shakuntala after the birds that guarded her, and raised her with immense fatherly love in his peaceful ashram.',
        'Years later, King Dushyanta of Hastinapur came hunting in the forest and met Shakuntala. They wed in Gandharva marriage. In time, Shakuntala gave birth to a radiant boy named Bharata.',
        'Growing up in the deep jungle, young Bharata had no fear. He befriended lion cubs, pried open their jaws, and boldly counted their sharp teeth! Bharata grew into a legendary emperor whose righteousness and valor were so grand that the entire subcontinent came to be revered forever as Bharatavarsha.'
      ],
      paragraphs_te: [
        'విశ్వామిత్రుడు, మేనకల కలయిక వల్ల ఒక ఆడపిల్ల జన్మించింది. తపస్సు భంగమైనందుకు చింతించిన విశ్వామిత్రుడు వెళ్లిపోయాడు. మేనక ఆ పసికందును అడవిలో విడిచి స్వర్గానికి వెళ్లిపోయింది. శకుంత పక్షులు ఆ శిశువును తమ రెక్కలతో కాపాడాయి.',
        'కణ్వ మహర్షి ఆ పసికందును చూసి చేరదీసి, శకుంతల అని పేరు పెట్టి అల్లారుముద్దుగా పెంచాడు.',
        'కొన్నేళ్ళ తర్వాత హస్తినాపుర రాజు దుష్యంతుడు వేటకు వచ్చి శకుంతలను గాంధర్వ వివాహం చేసుకున్నాడు. వారి కుమారుడే భరతుడు.',
        'అడవిలో పెరిగిన బాల భరతుడు భయం అంటే ఏమిటో ఎరుగడు. సింహపు పిల్లల నోళ్లు తెరిచి వాటి పళ్లను లెక్కపెట్టేవాడు! ఈ వీర బాలుడే పెద్దవాడై మహా చక్రవర్తిగా రాజ్యాన్ని పాలించాడు. ఆయన పేరిటే మన దేశానికి "భారతదేశం" అనే పుణ్యనామం వచ్చింది.'
      ],
      paragraphs_hi: [
        'विश्वामित्र और मेनका के संयोग से एक सुलक्षणा कन्या का जन्म हुआ। तप भंग होने के पश्चाताप में विश्वामित्र चले गए और मेनका भी स्वर्ग लौट गई। शकुंत पक्षियों ने अपने पंखों से शिशु की रक्षा की।',
        'महर्षि कण्व ने उस बालिका को देखा, उसका नाम शकुंतला रखा और अपनी पुत्री के समान स्नेह से पाला।',
        'वर्षों बाद हस्तिनापुर के राजा दुष्यंत ने वन में शकुंतला से गांधर्व विवाह किया। उनसे भरत नामक महाप्रतापी पुत्र का जन्म हुआ।',
        'बालक भरत निर्भय था। वह वन में जीवित सिंहों के मुख खोलकर उनके दाँत गिनता था! यही तेजस्वी बालक आगे चलकर महान चक्रवर्ती सम्राट बना, जिसके नाम पर हमारे पावन देश का नाम "भारतवर्ष" पड़ा।'
      ],
      dialogueQuote: '"Open your mouth, O king of beasts, let me count how many teeth you have!"',
      dialogueQuote_te: '"సింహమా! నోరు తెరువు, నీకు ఎన్ని పళ్ళు ఉన్నాయో నేను లెక్కపెడతాను!"',
      dialogueQuote_hi: '"हे वनराज! मुख खोलो, मैं तुम्हारे दाँत गिनूँगा!"',
      speaker: 'Young Bharata playing with lion cubs',
      speaker_te: 'సింహాలతో ఆడుకుంటున్న బాల భరతుడు',
      speaker_hi: 'सिंह के शावकों से खेलता बालक भरत',
      imageUrl: '/assets/storybook/page_10_0_Image0.jpg',
      imageCaption: 'Young Prince Bharata fearlessly playing with lion cubs in Sage Kanva’s forest.',
      imageCaption_te: 'కణ్వాశ్రమంలో సింహపు పిల్లలతో ఆడుకుంటున్న బాల భరతుడు.',
      imageCaption_hi: 'कण्व ऋषि के तपोवन में सिंह के बच्चों के साथ खेलता निर्भीक बालक भरत।',
      moralLesson: 'Fearlessness, courage, and compassion for all living beings are the true foundations of leadership.',
      moralLesson_te: 'నిర్భయత్వం, సాహసం మరియు సమస్త ప్రాణుల పట్ల దయ నాయకత్వానికి నిజమైన మూలస్తంభాలు.',
      moralLesson_hi: 'निर्भीकता, अदम्य साहस और समस्त प्राणियों के प्रति करुणा ही सच्चे नेतृत्व की पहचान है।'
    },
    {
      pageNumber: 3,
      chapterNumber: 3,
      partTitle: 'The Origins',
      partTitle_te: 'ఆది పర్వం - ఆరంభం',
      partTitle_hi: 'आदि पर्व - उत्पत्ति',
      title: 'King Shantanu and Goddess Ganga',
      title_te: 'రాజ శంతనుడు & సురనది గంగ',
      title_hi: 'शांतनु और देवनदी गंगा का मिलन',
      sceneTag: 'The River Bank at Sunrise',
      sceneTag_te: 'సూర్యోదయ వేళ గంగా తీరం',
      sceneTag_hi: 'प्रातःकाल गंगा तट',
      hookLine: 'A divine meeting bound by an unconditional vow of silence.',
      hookLine_te: 'ఒక షరతుతో ముడిపడిన దివ్య దాంపత్య బంధం.',
      hookLine_hi: 'एक अनूठी शर्त जिसने दो लोकों को प्रेम के सूत्र में बांधा।',
      paragraphs: [
        'King Shantanu of the ancient Lunar Dynasty was roaming the fragrant riverbanks of the holy Ganga when he beheld a maiden of transcendent radiance. She moved like liquid sunlight, her garments shimmering with the purity of celestial realms.',
        'Enchanted by her grace, Shantanu offered her his hand and crown. The maiden consented, but laid down an inviolable condition: "You must never question anything I do, nor ask who I am, nor utter words of reprimand. The instant you break this promise, I shall vanish from your sight forever."',
        'Blinded by love, the king readily accepted. For seven long years they lived in joy, yet a shadow of mystery hung over the palace. Each time she gave birth to a radiant male child, she carried the newborn to the swirling waters of the river and drowned it with a serene smile.'
      ],
      paragraphs_te: [
        'చంద్రవంశపు ప్రతాపవంతుడైన శంతన మహారాజు ఒకనాడు గంగానది తీరాన విహరిస్తుండగా, సాక్షాత్తూ స్వర్గలోక కాంతలాంటి పరమ సుందరిని చూసి ముగ్ధుడయ్యాడు.',
        'ఆమెను వివాహం చేసుకోవాలని కోరగా, ఆమె ఒక కఠినమైన షరతు విధించింది: "రాజా! నేను చేసే ఏ పనినీ నీవు ఎప్పుడూ ప్రశ్నించకూడదు, నన్ను నిందించకూడదు. ఆ నియమాన్ని ఉల్లంఘించిన మరుక్షణమే నేను నిన్ను విడిచి వెళ్ళిపోతాను."',
        'ఆమె షరతుకు శంతనుడు అంగీకరించాడు. వారి దాంపత్యం సుఖంగా సాగింది. కానీ ఆమెకు బిడ్డ పుట్టినప్పుడల్లా ఆ పసికందును గంగా ప్రవాహంలో విసిరివేసేది. శంతనుడు మాట తప్పలేక గుండెల్లో వేదనను దిగమింగుకున్నాడు.'
      ],
      paragraphs_hi: [
        'चंद्रवंशी महाराज शांतनु जब गंगा के पावन तट पर विचरण कर रहे थे, तब उन्होंने अनुपम सौंदर्यमयी एक अलौकिक सुंदरी को देखा।',
        'शांतनु ने उसके सम्मुख विवाह का प्रस्ताव रखा। उस सुंदरी ने कहा: "राजन! मैं आपकी पटरानी बनूँगी, किंतु एक शर्त पर। मैं जो भी करूँ, आप कभी न तो मुझे टोकेंगे और न ही कारण पूछेंगे। जिस दिन आपने मुझे टोका, मैं आपको त्याग दूँगी।"',
        'महाराज ने शर्त स्वीकार कर ली। जब भी कोई संतान जन्म लेती, देवी गंगा उसे नदी की धारा में प्रवाहित कर देतीं। वचनों से बँधे शांतनु मौन रहकर हृदय के संताप को सहते रहे।'
      ],
      dialogueQuote: '"The instant you ask \\\'Why?\\\', my lord, that very moment shall be our final farewell."',
      dialogueQuote_te: '"నాథా! నీవు \\\'ఎందుకు?\\\' అని ప్రశ్నించిన క్షణమే మన దాంపత్యానికి చివరి క్షణం అవుతుంది."',
      dialogueQuote_hi: '"जिस क्षण आपने मुझसे पूछा कि \\\'यह क्यों किया?\\\', उसी क्षण हमारा साथ सदा के लिए छूट जाएगा।"',
      speaker: 'Goddess Ganga to Shantanu',
      speaker_te: 'శంతనునితో గంగాదేవి',
      speaker_hi: 'शांतनु से गंगा जी के वचन',
      imageUrl: '/assets/storybook/page_1_0_Image0.jpg',
      imageCaption: 'Goddess Ganga by the swirling sacred waters with the newborn Vasu child.',
      imageCaption_te: 'పవిత్ర గంగా తీరంలో దివ్య శిశువుతో గంగాదేవి.',
      imageCaption_hi: 'पवित्र गंगा तट पर नवजात शिशु के साथ देवी गंगा।',
      moralLesson: 'Unconditional promises made in emotional infatuation without understanding truth lead to profound heartaches.',
      moralLesson_te: 'పరిణామాలను ఆలోచించకుండా మోహంలో ఇచ్చే వాగ్దానాలు తీవ్రమైన ఆవేదనకు దారితీస్తాయి.',
      moralLesson_hi: 'सत्य को जाने बिना भावुकता में दिए गए वचन भविष्य में गहरे पश्चाताप का कारण बनते हैं।'
    },
    {
      pageNumber: 4,
      chapterNumber: 4,
      partTitle: 'The Origins',
      partTitle_te: 'ఆది పర్వం - ఆరంభం',
      partTitle_hi: 'आदि पर्व - उत्पत्ति',
      title: 'The Broken Vow & The Secret of the Vasus',
      title_te: 'ముగిసిన మౌనం & అష్టవసువుల శాప రహస్యం',
      title_hi: 'शांतनु का मौन भंग और अष्ट वसुओं का उद्धार',
      sceneTag: 'The River Bank on the Eighth Birth',
      sceneTag_te: 'ఎనిమిదవ కుమారుని జననం',
      sceneTag_hi: 'आठवें पुत्र का जन्म',
      hookLine: 'When paternal love overpowered a king’s promise, a cosmic mystery unraveled.',
      hookLine_te: 'పుత్ర ప్రేమ ముందు ఓడిపోయిన వాగ్దానం; వెల్లడైన దేవ రహస్యం.',
      hookLine_hi: 'पुत्र-स्नेह के आगे डिगा राजा का वचन, और खुला एक अलौकिक रहस्य।',
      paragraphs: [
        'When the eighth son was born, a boy whose beauty surpassed the morning star, Ganga prepared to drown him as before. King Shantanu could bear it no longer. Gripping her wrist, he cried: "Cruel woman! Stop this slaughter! Who are you? Why do you murder your own flesh and blood?"',
        'Ganga halted with a bittersweet smile: "You have broken your promise, my King. Now our union is ended. But know this: I am Ganga, daughter of Jahnu, and these eight sons were the eight Vasus, celestial gods cursed by Sage Vashishta for stealing the wish-fulfilling cow Kamadhenu."',
        '"By casting the first seven into my waters, I freed them instantly from the curse of mortal suffering. This eighth child, the leader Dyaus, must live a long, gloriously heroic yet sorrowful life on earth. I take him with me now to train him in the heavens; I will return him when he is a peerless warrior."'
      ],
      paragraphs_te: [
        'ఎనిమిదవ కుమారుడు జన్మించినప్పుడు కూడా ఆమె నదిలో విసరబోతుండగా, శంతనుడు ఇక సహించలేకపోయాడు. ఆమె చేయి పట్టుకుని: "ఆగు! కన్నబిడ్డలను చంపుతున్న పాషాణ హృదయురాలివి నీవు ఎవరు? ఎందుకు ఈ ఘోరం?" అని గద్దించాడు.',
        'గంగాదేవి చిరునవ్వుతో: "రాజా! నీవు నీ వాగ్దానాన్ని అతిక్రమించావు. నేను గంగాభవానిని. వీరంతా వశిష్ట మహర్షి శాపం వల్ల భూమిపై జన్మించిన అష్టవసువులు. మొదటి ఏడుగురిని నదిలో కలిపి వెంటనే శాపవిముక్తి కలిగించాను."',
        '"ఈ ఎనిమిదవ వాడే కామధేనువును దొంగిలించిన ద్యునామక వసువు. ఇతను భూమిపై చిరకాలం జీవించి వీరుడిగా ఖ్యాతి గడించాలి. ఇతనికి దైవిక విద్యలు నేర్పించి తిరిగి నీకు అప్పగిస్తాను" అని చెప్పి బాలుడితో అంతర్థానమైంది.'
      ],
      paragraphs_hi: [
        'आठवें पुत्र के जन्म पर जब गंगा उसे भी नदी में विसर्जित करने लगीं, तो शांतनु से रहा न गया। उन्होंने हाथ पकड़कर कहा: "ठहरो! तुम कैसी निर्दयी माता हो? अपने ही बालकों का वध क्यों करती हो?"',
        'गंगा ने शांत भाव से कहा: "महाराज! आपने अपना वचन तोड़ दिया, अब मेरा जाना निश्चित है। परंतु सुनिए, ये आठों बालक वास्तव में आठ वसु थे, जिन्हें महर्षि वशिष्ठ की कामधेनु चुराने के कारण मृत्युलोक का शाप मिला था।"',
        'मैंने सात वसुओं को तत्काल शापमुक्त कर दिया। यह आठवाँ वसु द्यौ है, जिसे दीर्घकाल तक पृथ्वी पर रहकर अपना कर्म भोगना है। मैं इसे स्वर्ग ले जाकर देव-विद्याओं में निपुण कर आपको सौंप दूँगी।'
      ],
      dialogueQuote: '"I freed seven from mortal agony; this eighth son, Dyaus reborn, shall stand as the greatest among men."',
      dialogueQuote_te: '"ఏడుగురికి ముక్తిని ప్రసాదించాను; ఈ ఎనిమిదవ వాడు పురుషోత్తముడిగా చరిత్రలో నిలిచిపోతాడు."',
      dialogueQuote_hi: '"सात वसुओं को मैंने शाप से मुक्त कर दिया; यह आठवाँ वसु पृथ्वी पर वीरों में शिरोमणि कहलाएगा।"',
      speaker: 'Goddess Ganga',
      speaker_te: 'గంగాదేవి',
      speaker_hi: 'देवी गंगा के अंतिम शब्द',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'Ganga holding the infant Devavrata, ascending into the celestial mist.',
      imageCaption_te: 'దేవవ్రతుడిని చేతబట్టి ఆకాశంలోకి నిష్క్రమిస్తున్న గంగాదేవి.',
      imageCaption_hi: 'शिशु देवव्रत को लेकर आकाश मार्ग से प्रस्थान करतीं देवी गंगा।',
      moralLesson: 'Compassion for innocent life is a duty higher than keeping a blind oath, yet every broken promise brings its inevitable separation.',
      moralLesson_te: 'నిర్దోషుల ప్రాణాలను కాపాడటం గుడ్డి వాగ్దానాల కంటే గొప్ప ధర్మం, కానీ ఇచ్చిన మాట తప్పడం వియోగానికి దారితీస్తుంది.',
      moralLesson_hi: 'प्राण-रक्षा का धर्म किसी भी वचन से बड़ा है, किंतु वचन-भंग का परिणाम भी अवश्य भुगतना पड़ता है।'
    },
    {
      pageNumber: 5,
      chapterNumber: 5,
      partTitle: 'The Origins',
      partTitle_te: 'ఆది పర్వం - ఆరంభం',
      partTitle_hi: 'आदि पर्व - उत्पत्ति',
      title: 'Devavrata’s Sacred Vow — The Birth of Bhishma',
      title_te: 'భీష్మ ప్రతిజ్ఞ — ఆకాశం కంపించిన మహా శపథం',
      title_hi: 'भीष्म प्रतिज्ञा — वह शपथ जिसने इतिहास बदल दिया',
      sceneTag: 'Dusharaj’s Fishermen Settlement',
      sceneTag_te: 'దాశరాజు ఎదుట దేవవ్రతుని శపథం',
      sceneTag_hi: 'दाशराज के समक्ष महाप्रतिज्ञा',
      hookLine: 'He renounced both kingdom and progeny, earning the eternal name Bhishma.',
      hookLine_te: 'రాజ్యాన్ని, సంసార సుఖాన్ని త్యజించి "భీష్ముడు"గా మారిన త్యాగమూర్తి.',
      hookLine_hi: 'पिता के सुख के लिए राज्य और वैवाहिक जीवन दोनों को सदा के लिए त्यागने वाले महापुरुष।',
      paragraphs: [
        'Noticing his father’s declining health and silent torment over his desire to marry Satyavati, Devavrata rode directly to the chieftain Dusharaj’s river settlement.',
        'Before the assembly, Devavrata pledged: "I renounce my claim to the Kuru throne! Satyavati’s son shall be king!" But the shrewd chieftain probed further: "You are truthful, Prince, but what if your future sons claim their father’s kingdom? What will protect my daughter’s lineage then?"',
        'Raising his right hand to the heavens, Devavrata took a vow that stunned gods and mortals alike: "Hear me, earth and sky! From this day forth, I embrace lifelong celibacy (Brahmacharya). Even in thought, I shall touch no woman. The throne of my fathers is forsaken forever!" Flowers showered from heaven, and celestial voices cried: "Bhishma! Bhishma! (The Awe-inspiring One!)"'
      ],
      paragraphs_te: [
        'సత్యవతి కోసం తండ్రి శంతనుడు పడుతున్న తీవ్ర మనోవేదనను గమనించిన దేవవ్రతుడు, నేరుగా దాశరాజు వద్దకు వెళ్ళాడు.',
        'సత్యవతి బిడ్డకే రాజ్యం దక్కేలా తాను సింహాసనాన్ని వదులుకుంటున్నట్లు దేవవ్రతుడు ప్రకటించాడు. కానీ దాశరాజు: "నీవు మాట తప్పువు, కానీ భవిష్యత్తులో నీకు పుట్టే కొడుకులు నా మనవళ్ల నుండి రాజ్యాన్ని లాక్కుంటే నా కుమార్తె గతి ఏమిటి?" అని ప్రశ్నించాడు.',
        'అప్పుడు దేవవ్రతుడు ఆకాశం వైపు చేతులెత్తి: "నేను ఆజన్మాంతం బ్రహ్మచర్య దీక్షను స్వీకరిస్తున్నాను! ఇకపై ఏ స్త్రీనీ వివాహం చేసుకోను. సంతానాన్ని పొందను!" అని భీకర శపథం చేశాడు. దేవతలు పూలవాన కురిపిస్తూ "భీష్ముడు! భీష్ముడు!" అని కీర్తించారు. శంతనుడు అమితానందంతో కుమారునికి "ఇచ్ఛామృత్యువు" (తనకు తోచినప్పుడే మరణం పొందే) వరం ప్రసాదించాడు.'
      ],
      paragraphs_hi: [
        'सत्यवती के विरह में पिता को घुलते देख देवव्रत ने दाशराज के सम्मुख जाकर राज्य का त्याग करने की घोषणा की।',
        'किंतु दाशराज ने संशय जताया: "राजकुमार! आप सत्यवादी हैं, परंतु यदि आपकी संतानों ने मेरे दोहते से राज्य छीना, तब क्या होगा?"',
        'तब देवव्रत ने आकाश की ओर हाथ उठाकर वह भीषण प्रतिज्ञा ली जिसने तीनों लोकों को हिला दिया: "हे संपूर्ण देवगण और पृथ्वी! मैं आजीवन अखंड ब्रह्मचर्य का पालन करूँगा। मैं कभी विवाह नहीं करूँगा।" आकाश से पुष्पवर्षा हुई और आकाशवाणी गूँज उठी: "भीष्म! भीष्म!" प्रसन्न होकर शांतनु ने उन्हें "इच्छा-मृत्यु" का वरदान दिया।'
      ],
      dialogueQuote: '"Neither kingdom nor progeny do I desire. From this day forward, Brahmacharya is my eternal vow!"',
      dialogueQuote_te: '"నాకు రాజ్యమూ వద్దు, సంతానమూ వద్దు. ఈనాటి నుండి ఆజన్మ బ్రహ్మచర్యమే నా దీక్ష!"',
      dialogueQuote_hi: '"न मुझे राज्य की अभिलाषा है, न संतान की। आज से आजीवन ब्रह्मचर्य ही मेरा शाश्वत संकल्प है!"',
      speaker: 'Devavrata taking the terrible vow',
      speaker_te: 'భీకర శపథం చేస్తున్న దేవవ్రతుడు',
      speaker_hi: 'भीषण प्रतिज्ञा लेते देवव्रत',
      imageUrl: '/assets/storybook/page_54_0_Image0.jpg',
      imageCaption: 'Devavrata taking the unbroken vow of lifelong celibacy before the assembly.',
      imageCaption_te: 'ముల్లోకాలు నివ్వెరపోయేలా భీకర ప్రతిజ్ఞ చేస్తున్న దేవవ్రతుడు.',
      imageCaption_hi: 'हाथ उठाकर अखंड भीष्म प्रतिज्ञा लेते वीर देवव्रत।'
      ,
      moralLesson: 'Supreme love and filial duty mean placing the happiness of parents above all worldly wealth, power, and personal ambition.',
      moralLesson_te: 'మాతాపితరుల ఆనందం కోసం స్వార్థాన్ని, అధికారాన్ని, సర్వసుఖాలను త్యాగం చేయడమే పరమ ధర్మం.',
      moralLesson_hi: 'माता-पिता के सुख के लिए अपने समस्त सुखों और अधिकारों का त्याग करना ही सर्वोच्च मर्यादा और धर्म है।'
    },
    {
      pageNumber: 6,
      chapterNumber: 6,
      partTitle: 'The Origins',
      partTitle_te: 'ఆది పర్వం - ఆరంభం',
      partTitle_hi: 'आदि पर्व - उत्पत्ति',
      title: 'The Princesses of Kashi & Amba’s Vow',
      title_te: 'కాశీ రాజకన్యలు & అంబా దేవి ప్రతీకార శపథం',
      title_hi: 'काशी की राजकुमारियाँ और अंबा का प्रतिशोध',
      sceneTag: 'Swayamvara Arena of Kashi',
      sceneTag_te: 'కాశీ స్వయంవర రంగస్థలం',
      sceneTag_hi: 'काशी का स्वयंवर मंडप',
      hookLine: 'A warrior’s abductive pride sowed the seed of his eventual death on Kurukshetra.',
      hookLine_te: 'కురు సింహాసన రక్షణ కోసం తెచ్చిన కన్య; రేపటి కురుక్షేత్ర భీష్మ పతనానికి నాంది.',
      hookLine_hi: 'कुरु सिंहासन की रक्षा के लिए किया गया हरण, जो कालान्तर में भीष्म की मृत्यु का कारण बना।',
      paragraphs: [
        'Shantanu and Satyavati had two sons: Chitrangada and Vichitravirya. Chitrangada fell in battle against a Gandharva, leaving the young Vichitravirya on the throne under Bhishma’s guardianship.',
        'To secure brides for the delicate king, Bhishma rode to the Swayamvara of Kashi and challenged all kings. Defeating the assembly single-handedly, he brought the three princesses—Amba, Ambika, and Ambalika—to Hastinapur.',
        'In Hastinapur, eldest princess Amba wept, revealing she had already pledged her heart to King Salva. Bhishma honorably sent her to Salva, but Salva refused to accept a woman abducted by another warrior. Rejected everywhere and broken with humiliation, Amba swore terrible penance to Lord Shiva to cause Bhishma’s death, destined to be reborn as Shikhandi.'
      ],
      paragraphs_te: [
        'శంతనుని మరణానంతరం సత్యవతి కుమారుడైన విచిత్రవీర్యునికి వివాహం జరిపించేందుకు భీష్ముడు కాశీరాజు స్వయంవరానికి వెళ్ళాడు. సమస్త రాజులను ఓడించి అంబ, అంబిక, అంబాలికలను హస్తినాపురానికి తీసుకువచ్చాడు.',
        'కానీ పెద్ద కుమార్తె అంబ తాను సాల్వ రాజును ప్రేమించానని చెప్పింది. భీష్ముడు గౌరవంతో ఆమెను సాల్వరాజు వద్దకు పంపగా, వేరొకడు అపహరించిన స్త్రీని స్వీకరించనని సాల్వరాజు తిరస్కరించాడు.',
        'అటు సాల్వరాజు తిరస్కారంతో, ఇటు భీష్ముని బ్రహ్మచర్య ప్రతిజ్ఞతో నిస్సహాయురాలైన అంబ తీవ్ర ఆగ్రహం చెందింది. భీష్ముని పతనాన్ని కోరుతూ శివుని కోసం ఘోర తపస్సు చేసింది. భవిష్యత్తులో శిఖండిగా జన్మించి భీష్ముని మరణానికి కారణమైంది.'
      ],
      paragraphs_hi: [
        'विचित्रवीर्य के विवाह हेतु भीष्म ने काशी के स्वयंवर में समस्त राजाओं को परास्त कर तीन राजकुमारियों—अंबा, अंबिका और अंबालिका का हरण किया।',
        'हस्तिनापुर आकर अंबा ने बताया कि वह मन ही मन राजा शाल्व को अपना पति मान चुकी है। भीष्म ने सम्मानपूर्वक उसे शाल्व के पास भेजा, किंतु शाल्व ने पराई भुजाओं से विजित अंबा को स्वीकार करने से मना कर दिया।',
        'अपमान की ज्वाला में जलती अंबा ने भीष्म से विवाह का आग्रह किया, पर भीष्म प्रतिज्ञाबद्ध थे। तब अंबा ने शिव की घोर तपस्या की और भीष्म के विनाश की प्रतिज्ञा ली। वही अंबा कालांतर में शिखंडी बनी।'
      ],
      dialogueQuote: '"O Grandsire! Because of your pride, I have lost my love and my honor. I live only to destroy you!"',
      dialogueQuote_te: '"ఓ భీష్మా! నీ పరాక్రమ గర్వం వల్ల నేను నా ప్రేమను, నా గౌరవాన్ని కోల్పోయాను. నిన్ను వధించడమే నా జీవిత లక్ష్యం!"',
      dialogueQuote_hi: '"हे भीष्म! तुम्हारे बल के कारण मेरा स्वाभिमान और प्रेम दोनों नष्ट हुए। मेरा पुनर्जन्म केवल तुम्हारे वध के लिए होगा!"',
      speaker: 'Princess Amba to Bhishma',
      speaker_te: 'భీష్మునితో అంబా దేవి',
      speaker_hi: 'भीष्म से अंबा के क्रोधित वचन',
      imageUrl: '/assets/wallpapers/draupadi.jpg',
      imageCaption: 'Princess Amba weeping in royal rejection, stoking the embers of future vengeance.',
      imageCaption_te: 'తీవ్ర పరాభవంతో ప్రతీకార జ్వాలలను రగిలిస్తున్న అంబా దేవి.',
      imageCaption_hi: 'अपमानित और क्रुद्ध अंबा द्वारा भीष्म के पतन का संकल्प।'
      ,
      moralLesson: 'Actions driven by royal pride that neglect individual consent inflict deep wounds that return as inexorable karma.',
      moralLesson_te: 'వ్యక్తుల అభీష్టాన్ని కాదని పరాక్రమ గర్వంతో తీసుకునే నిర్ణయాలు ఘోరమైన కర్మఫలాలుగా మారి వినాశనాన్ని తెస్తాయి.',
      moralLesson_hi: 'व्यक्ति की इच्छा और मर्यादा का अनादर करके लिया गया कोई भी निर्णय कालान्तर में विनाशकारी प्रतिशोध का रूप ले लेता है।'
    },
    {
      pageNumber: 7,
      chapterNumber: 7,
      partTitle: 'The Origins',
      partTitle_te: 'ఆది పర్వం - ఆరంభం',
      partTitle_hi: 'आदि पर्व - उत्पत्ति',
      title: 'Vyasa’s Sacred Blessing & The Three Royal Heirs',
      title_te: 'వ్యాస మహర్షి అనుగ్రహం & ముగ్గురు రాకుమారుల జననం',
      title_hi: 'महर्षि व्यास का नियोग और तीन राजकुमारों का जन्म',
      sceneTag: 'Hastinapur Inner Chambers',
      sceneTag_te: 'హస్తినాపుర అంతఃపురం',
      sceneTag_hi: 'हस्तिनापुर का राजमहल',
      hookLine: 'When the line of Shantanu stood at the brink of extinction, Sage Vyasa arrived to preserve the dynasty.',
      hookLine_te: 'కురువంశం అంతరించిపోయే విపత్తులో వేదవ్యాసుని దివ్య కృపతో నిలిచిన రాజవంశం.',
      hookLine_hi: 'जब शांतनु का वंश समाप्त होने की कगार पर था, तब महर्षि व्यास ने कुरुवंश की रक्षा की।',
      paragraphs: [
        'King Vichitravirya died young without leaving any heir. Queen Mother Satyavati, desperate to save the Bharata throne from extinction, begged Bhishma to break his vow and father children with the widowed queens. Bhishma steadfastly refused: "The sun may lose its heat, the moon its cool light, but I shall never break my vow!"',
        'In desperation, Satyavati remembered her pre-marital firstborn son, Sage Krishna Dwaipayana Vyasa. The ascetic sage appeared instantly at his mother’s wish and consented to perform the sacred practice of Niyoga.',
        'When Vyasa entered with his blazing eyes and ascetic appearance, Queen Ambika shut her eyes in fear; thus was born blind Dhritarashtra. Queen Ambalika turned pale with dread; thus was born pale Pandu. A maidservant received the sage with serene devotion; thus was born Vidura, the embodiment of wisdom and Dharma.'
      ],
      paragraphs_te: [
        'విచిత్రవీర్యుడు నిస్సంతానంగా మరణించడంతో కురువంశం అంతరించిపోయే ప్రమాదం ఏర్పడింది. సత్యవతి భీష్ముని వేడుకుంది: "నాయనా! నీ శపథాన్ని సడలించి వంశాన్ని నిలబెట్టు". కానీ భీష్ముడు: "సూర్యుడైనా చల్లబడవచ్చు, కానీ నేను నా శపథాన్ని వీడను" అని నిష్కర్షగా చెప్పాడు.',
        'దిక్కుతోచని సత్యవతి తన ప్రథమ పుత్రుడైన వేదవ్యాస మహర్షిని స్మరించింది. తల్లి పిలుపుతో ప్రత్యక్షమైన వ్యాసుడు నియోగ ధర్మం ద్వారా వంశాన్ని నిలబెట్టడానికి అంగీకరించాడు.',
        'వ్యాసుని దివ్య తేజస్సును చూసి భయంతో కళ్లు మూసుకున్న అంబికకు అంధుడైన ధృతరాష్ట్రుడు జన్మించాడు. భయంతో పాలిపోయిన అంబాలికకు బలహీనుడైన పాండురాజు జన్మించాడు. భక్తితో సేవించిన దాసికి సాక్షాత్తూ ధర్మస్వరూపుడైన విదురుడు జన్మించాడు.'
      ],
      paragraphs_hi: [
        'विचित्रवीर्य की निःसंतान मृत्यु से कुरुवंश संकट में आ गया। सत्यवती ने भीष्म से प्रतिज्ञा तोड़कर संतानोत्पत्ति का आग्रह किया, किंतु भीष्म ने स्पष्ट कहा: "सूर्य भले ही प्रकाशहीन हो जाए, किंतु मैं अपनी प्रतिज्ञा नहीं तोड़ूँगा।"',
        'तब सत्यवती ने अपने पूर्वपुत्र महर्षि वेदव्यास का स्मरण किया। माता की आज्ञा पाकर महर्षि व्यास ने नियोग विधि द्वारा वंश रक्षा स्वीकार की।',
        'व्यास के उग्र तपोमय रूप को देखकर अंबिका ने आँखें बंद कर लीं, जिससे जन्मांध धृतराष्ट्र का जन्म हुआ। अंबालिका भय से पीली पड़ गई, जिससे पांडु (पाण्डुवर्ण) का जन्म हुआ। दासी ने भक्तिभाव से महर्षि का सत्कार किया, जिससे परम ज्ञानी धर्मात्मा विदुर का जन्म हुआ।'
      ],
      dialogueQuote: '"Earth may lose its scent, fire its heat, yet my oath shall stand firm across eternity."',
      dialogueQuote_te: '"భూమి తన గంధాన్ని వీడవచ్చు, అగ్ని తన వేడిని కోల్పోవచ్చు, కానీ నా శపథం మాత్రం ఎప్పటికీ మారదు."',
      dialogueQuote_hi: '"पृथ्वी अपनी गंध छोड़ दे, अग्नि अपनी उष्णता त्याग दे, परंतु मेरी भीष्म प्रतिज्ञा कभी विचलित नहीं हो सकती।"',
      speaker: 'Bhishma to Queen Satyavati',
      speaker_te: 'సత్యవతితో భీష్ముడు',
      speaker_hi: 'सत्यवती से भीष्म के अडिग शब्द',
      imageUrl: '/assets/wallpapers/sanatana-dharma.jpg',
      imageCaption: 'Sage Vyasa bestowing divine blessings upon the dynasty in the sacred chambers.',
      imageCaption_te: 'కురువంశ రక్షణ కోసం వ్యాస మహర్షి దివ్య అనుగ్రహం.',
      imageCaption_hi: 'हस्तिनापुर में कुरुवंश के उद्धार हेतु प्रकट हुए महर्षि वेदव्यास।'
      ,
      moralLesson: 'Unwavering commitment to truth withstands all storms, and destiny always creates a righteous path to preserve righteous lineage.',
      moralLesson_te: 'నిజమైన సత్యనిష్ట ఏ విపత్తులోనూ సడలదు, ధర్మాన్ని రక్షించడానికి విధి ఎల్లప్పుడూ ఒక పవిత్ర మార్గాన్ని సృష్టిస్తుంది.',
      moralLesson_hi: 'सत्य और प्रतिज्ञा पर अडिग रहने से ही चरित्र महान बनता है, और ईश्वर धर्म की रक्षा का कोई न कोई मार्ग अवश्य निकाल लेते हैं।'
    },
    {
      pageNumber: 8,
      chapterNumber: 8,
      partTitle: 'The Origins',
      partTitle_te: 'ఆది పర్వం - ఆరంభం',
      partTitle_hi: 'आदि पर्व - उत्पत्ति',
      title: 'King Shibi & The Eternal Standard of Dharma',
      title_te: 'శిబి చక్రవర్తి & సార్వత్రిక ధర్మ పరీక్ష',
      title_hi: 'महाराज शिबि और शरणागत-रक्षा का अमर धर्म',
      sceneTag: 'Sacrificial Grounds of King Shibi',
      sceneTag_te: 'శిబి చక్రవర్తి యజ్ఞ వాటిక',
      sceneTag_hi: 'राजा शिबि की यज्ञशाला',
      hookLine: 'When gods tested mortal virtue, a king placed his own flesh on the scales of Dharma.',
      hookLine_te: 'శరణు కోరిన పావురం కోసం తన శరీరాన్నే త్రాసులో పెట్టిన శిబి చక్రవర్తి త్యాగ నిరతి.',
      hookLine_hi: 'शरणागत कपोत के प्राणों की रक्षा हेतु अपने शरीर का मांस तराजू पर चढ़ा देने वाले महाराज शिबि।',
      paragraphs: [
        'In the sacred annals of the Lunar ancestors, no king shone brighter in compassion than King Shibi. One day, a trembling white dove flew into his lap, pursued by a fierce hawk demanding its natural prey.',
        'The dove pleaded for sanctuary: "O King, I have taken refuge in you! Protect me from the claws of death!" The hawk countered: "O King, that dove is my rightful food ordained by nature. If you deprive me, my children will starve to death; where is your righteousness then?"',
        'Faced with the profound dilemma of Dharma, King Shibi offered the hawk: "I shall not surrender one who sought refuge. I will give you equal weight of my own flesh!" A balance was brought; Shibi sliced flesh from his thigh, yet the dove weighed heavier and heavier! Finally, King Shibi stepped onto the balance with his entire body. Instantly, Indra and Agni revealed their radiant divine forms, restoring the king and proclaiming his virtue immortal.'
      ],
      paragraphs_te: [
        'చంద్రవంశపు పూర్వీకులలో శిబి చక్రవర్తి దయాగుణానికి పెట్టింది పేరు. ఒకనాడు ఒక పావురం గద్ద బారి నుండి తప్పించుకుని వచ్చి శిబి ఒడిలో వాలింది. శరణు కోరిన పావురాన్ని రక్షించమని వేడుకుంది.',
        'వెంటనే గద్ద వచ్చి: "రాజా! ఆ పావురం నా ఆహారం. నీవు దానిని దాచిపెడితే నేను ఆకలితో చనిపోతాను, నా బిడ్డలు అనాథలవుతారు. ఇదేనా నీ ధర్మం?" అని ప్రశ్నించింది.',
        'శిబి చక్రవర్తి ధర్మసంకటంలో పడలేదు: "శరణన్న వారిని విడిచిపెట్టను. ఆ పావురం బరువుకు సరిపడా నా శరీర మాంసాన్ని నీకు ఇస్తాను" అని చెప్పాడు. త్రాసులో పావురాన్ని ఉంచి తన తొడ మాంసాన్ని కోసి వేయసాగాడు. ఎంత మాంసం వేసినా పావురమే బరువుగా ఉంది! చివరకు శిబి తానే స్వయంగా త్రాసులోకి ఎక్కి కూర్చున్నాడు. అగ్ని, ఇంద్రులు నిజరూపాలతో ప్రత్యక్షమై ఆయన త్యాగాన్ని కొనియాడారు.'
      ],
      paragraphs_hi: [
        'कुरुवंश के पूर्वजों में राजा शिबि शरणागत-वत्सलता के सर्वोच्च आदर्श थे। एक दिन एक भयभीत कबूतर उनकी गोद में आ गिरा, जिसके पीछे एक बाज पड़ा था।',
        'बाज ने कहा: "राजन! यह कपोत मेरा प्राकृतिक आहार है। यदि आप इसे बचाएँगे तो मेरे बच्चे भूख से मर जाएँगे; क्या यह अधर्म नहीं?"',
        'राजा शिबि ने कहा: "शरणागत की रक्षा करना मेरा परम धर्म है। इसके भार के बराबर मैं अपने शरीर का मांस तुम्हें अर्पित करूँगा।" तराजू लाया गया; शिबि ने अपनी जंघा से मांस काटकर रखा, किंतु कबूतर का पलड़ा भारी ही रहा। अंततः शिबि स्वयं तराजू में बैठ गए। तत्काल इंद्र और अग्निदेव अपने वास्तविक रूप में प्रकट हुए और राजा की अमर कीर्ति की घोषणा की।'
      ],
      dialogueQuote: '"Take my flesh, slice my body, but never shall I abandon a helpless creature that sought refuge in my lap!"',
      dialogueQuote_te: '"నా శరీరాన్నే కోసి ఇస్తాను కానీ, శరణు కోరిన ప్రాణిని మాత్రం మృత్యువుకు అప్పగించను!"',
      dialogueQuote_hi: '"मेरे शरीर का संपूर्ण मांस ले लो, किंतु अपनी शरण में आए हुए निर्बल जीव को मैं कभी नहीं छोड़ूँगा!"',
      speaker: 'King Shibi on the scales of Dharma',
      speaker_te: 'త్రాసులో కూర్చున్న శిబి చక్రవర్తి',
      speaker_hi: 'तराजू पर बैठे महाराज शिबि',
      imageUrl: '/assets/storybook/page_12_0_Image0.jpg',
      imageCaption: 'King Shibi stepping onto the scales to offer his whole body to protect the dove.',
      imageCaption_te: 'పావురం ప్రాణ రక్షణ కోసం త్రాసులోకి ఎక్కిన త్యాగశీలి శిబి చక్రవర్తి.',
      imageCaption_hi: 'कपोत की रक्षा हेतु स्वयं तराजू में बैठे त्याग के प्रतीक महाराज शिबि।'
      ,
      moralLesson: 'True Dharma is absolute self-sacrifice for the protection of the weak, innocent, and those who seek your shelter.',
      moralLesson_te: 'శరణు కోరిన అభాగ్యులను, బలహీనులను రక్షించడానికి స్వశరీరాన్నైనా త్యాగం చేయడమే పరమోన్నతమైన మానవతా ధర్మం.',
      moralLesson_hi: 'शरण में आए निर्बल और असहाय की रक्षा के लिए अपना सर्वस्व न्योछावर कर देना ही सर्वोच्च मानव धर्म है।'
    }
  ],

  // Part Summary
  partSummary: {
    majorEvents: [
      'Vishwamitra’s penance, Menaka’s dance, and the birth of Shakuntala and Prince Bharata.',
      'Shantanu meets Goddess Ganga on the riverbank and agrees to her strict conditions.',
      'Ganga drowns seven infant sons to liberate the cursed Vasus; Shantanu stops her on the eighth.',
      'Ganga reveals the cosmic mystery, departs with infant Devavrata, and returns him 16 years later.',
      'Shantanu falls in love with Satyavati; Dusharaj demands the throne for her lineage.',
      'Devavrata takes the oath of lifelong celibacy, becomes Bhishma, and earns the boon of Iccha-Mrityu.',
      'Bhishma wins the princesses of Kashi; Amba vows eternal vengeance and is reborn as Shikhandi.',
      'Sage Vyasa enters through Niyoga, fathering Dhritarashtra, Pandu, and Vidura to secure the Kuru throne.',
      'King Shibi demonstrates the ultimate ideal of Dharma by offering his own flesh for a dove.'
    ],
    majorEvents_te: [
      'విశ్వామిత్ర తపస్సు, మేనక రాక, శకుంతల మరియు భరత చక్రవర్తి జననం.',
      'గంగానది తీరాన శంతనుడు గంగాదేవిని కలుసుకోవడం, కఠిన షరతులతో వివాహం.',
      'ఏడుగురు వసువులకు గంగాదేవి విముక్తి కలిగించడం; ఎనిమిదవ బిడ్డ వద్ద శంతనుడు అడ్డుకోవడం.',
      'దేవ రహస్యం వెల్లడించి దేవవ్రతునితో గంగ వెళ్ళిపోవడం, పదహారేళ్ళ తర్వాత అజేయ ధనుర్ధారిగా తీసుకురావడం.',
      'శంతనుడు సత్యవతిని కోరుకోవడం; దాశరాజు రాజ్యాధికార షరతు విధించడం.',
      'దేవవ్రతుడు ఆజన్మ బ్రహ్మచర్య భీకర శపథం చేయడం, భీష్ముడిగా మారి ఇచ్ఛామృత్యు వరం పొందడం.',
      'కాశీ రాజకన్యల స్వయంవరం; అంబా దేవి ప్రతీకార శపథం మరియు శిఖండిగా పునర్జన్మ.',
      'వ్యాస మహర్షి నియోగం ద్వారా ధృతరాష్ట్ర, పాండు, విదురుల జననం; కురువంశ రక్షణ.',
      'పావురాన్ని కాపాడేందుకు తన మాంసాన్నే త్యాగం చేసిన శిబి చక్రవర్తి అద్భుత ధర్మ నిష్ట.'
    ],
    majorEvents_hi: [
      'विश्वामित्र की तपस्या, मेनका का नृत्य और शकुंतला व चक्रवर्ती भरत का जन्म।',
      'शांतनु और गंगा का मिलन तथा कठोर शर्तों के साथ विवाह।',
      'सात वसुओं का नदी में विसर्जन और आठवें बालक पर शांतनु द्वारा वचन-भंग।',
      'गंगा द्वारा देव-रहस्य का उद्घाटन और १६ वर्ष बाद सुशिक्षित देवव्रत की वापसी।',
      'शांतनु का सत्यवती पर मुग्ध होना और दाशराज की राज्य-प्राप्ति की शर्त।',
      'देवव्रत की भीषण प्रतिज्ञा, भीष्म नामकरण और इच्छा-मृत्यु का वरदान।',
      'काशी की राजकुमारियों का हरण, अंबा का प्रतिशोध और शिखंडी का संकल्प।',
      'महर्षि व्यास द्वारा नियोग से धृतराष्ट्र, पांडु और विदुर की उत्पत्ति।',
      'कपोत की रक्षा हेतु अपने शरीर का मांस तौलने वाले राजा शिबि की धर्म-परीक्षा।'
    ],
    importantCharacters: [
      'Sage Vishwamitra & Apsara Menaka (Parents of Shakuntala)',
      'Prince Bharata (Fearless child who gave India the name Bharatavarsha)',
      'King Shantanu (Emperor of Lunar Dynasty and father of Bhishma)',
      'Goddess Ganga (Celestial river who liberated the eight Vasus)',
      'Devavrata / Bhishma (The grand celibate warrior and guardian of Hastinapur)',
      'Queen Satyavati (Mother of Vyasa, Chitrangada, and Vichitravirya)',
      'Sage Vyasa (Author of Mahabharata and father of the three princes)',
      'Princess Amba (Reborn as Shikhandi to fulfill her vow against Bhishma)',
      'King Shibi (The eternal benchmark of compassion and Dharma)'
    ],
    importantCharacters_te: [
      'విశ్వామిత్ర మహర్షి & మేనక (శకుంతల తల్లిదండ్రులు)',
      'భరత చక్రవర్తి (సింహాల పళ్లు లెక్కపెట్టిన వీరుడు, దేశానికి పేరు తెచ్చినవాడు)',
      'శంతన మహారాజు (కురు సామ్రాజ్య అధిపతి, భీష్ముని తండ్రి)',
      'గంగాదేవి (వసువులకు విముక్తినిచ్చిన దివ్య మాత)',
      'భీష్మ పితామహుడు (ఆజన్మ బ్రహ్మచారి, అజేయ సింహాసన రక్షకుడు)',
      'సత్యవతి దేవి (హస్తినాపుర రాజమాత)',
      'వేదవ్యాస మహర్షి (మహాభారత రచయిత మరియు రాజవంశ దాత)',
      'అంబా దేవి (భీష్మునిపై ప్రతీకార శపథం చేసిన రాజకన్య)',
      'శిబి చక్రవర్తి (త్యాగానికి, ధర్మానికి నిలువెత్తు నిదర్శనం)'
    ],
    importantCharacters_hi: [
      'महर्षि विश्वामित्र और मेनका (शकुंतला के जन्मदाता)',
      'सम्राट भरत (सिंहों के दाँत गिनने वाले वीर, जिनके नाम पर भारतवर्ष पड़ा)',
      'महाराज शांतनु (हस्तिनापुर के प्रतापी राजा और भीष्म के पिता)',
      'गंगा माता (अष्ट वसुओं को मुक्ति दिलाने वाली देवनदी)',
      'भीष्म पितामह (अखंड ब्रह्मचारी, अजेय योद्धा व सिंहासन के संरक्षक)',
      'सत्यवती (हस्तिनापुर की राजमाता)',
      'महर्षि वेदव्यास (महाभारत के रचयिता व कुरुवंश के विधाता)',
      'अंबा (भीष्म से प्रतिशोध लेने वाली काशी की राजकुमारी)',
      'महाराज शिबि (शरणागत रक्षा और त्याग के परम आदर्श)'
    ],
    importantRelationships: [
      'Vishwamitra + Menaka → Parents of Shakuntala',
      'Shakuntala + King Dushyanta → Parents of Emperor Bharata',
      'Shantanu + Ganga → Parents of Devavrata (Bhishma)',
      'Shantanu + Satyavati → Parents of Chitrangada & Vichitravirya',
      'Sage Parashara + Satyavati → Parents of Sage Vyasa',
      'Sage Vyasa + Queens → Fathers of Dhritarashtra, Pandu, and Vidura'
    ],
    importantRelationships_te: [
      'విశ్వామిత్రుడు + మేనక → శకుంతల తల్లిదండ్రులు',
      'శకుంతల + దుష్యంతుడు → భరత చక్రవర్తి తల్లిదండ్రులు',
      'శంతనుడు + గంగ → దేవవ్రతుని (భీష్ముని) తల్లిదండ్రులు',
      'శంతనుడు + సత్యవతి → చిత్రాంగద, విచిత్రవీర్యుల తల్లిదండ్రులు',
      'పరాశర మహర్షి + సత్యవతి → వేదవ్యాసుని తల్లిదండ్రులు',
      'వేదవ్యాసుడు + రాణులు → ధృతరాష్ట్ర, పాండు, విదురుల తండ్రి'
    ],
    importantRelationships_hi: [
      'विश्वामित्र + मेनका → शकुंतला के माता-पिता',
      'शकुंतला + दुष्यंत → सम्राट भरत के माता-पिता',
      'शांतनु + गंगा → देवव्रत (भीष्म) के माता-पिता',
      'शांतनु + सत्यवती → चित्रांगद और विचित्रवीर्य के माता-पिता',
      'ऋषि पराशर + सत्यवती → महर्षि वेदव्यास के माता-पिता',
      'महर्षि व्यास + रानियाँ → धृतराष्ट्र, पांडु और विदुर के जनक'
    ],
    majorDecisions: [
      'Vishwamitra’s surrender to emotion and subsequent return to spiritual austerities.',
      'Shantanu’s promise of non-interference to Ganga, and breaking it to save Devavrata.',
      'Devavrata’s voluntary renunciation of the crown and his unbreakable vow of celibacy.',
      'Bhishma honoring Amba’s love for Salva, yet refusing to marry her due to his sacred vow.',
      'Satyavati summoning Sage Vyasa for the Niyoga ritual to save the Kuru throne.',
      'King Shibi offering his own flesh on the scales to honor the sanctuary of a dove.'
    ],
    majorDecisions_te: [
      'విశ్వామిత్రుడు భావోద్వేగాల నుండి మేల్కొని తిరిగి తపస్సుకు ఉపక్రమించడం.',
      'గంగాదేవికి ఇచ్చిన మాటను కాదని ఎనిమిదవ బిడ్డ ప్రాణాలను కాపాడాలని శంతనుడు నిర్ణయించుకోవడం.',
      'తండ్రి ఆనందం కోసం దేవవ్రతుడు చేసిన రాజ్య త్యాగం మరియు ఆజన్మ బ్రహ్మచర్య శపథం.',
      'అంబ మనసును గౌరవించి సాల్వ రాజు వద్దకు పంపడం, ప్రతిజ్ఞ కారణంగా ఆమెను వివాహం చేసుకోకపోవడం.',
      'వంశ రక్షణ కోసం సత్యవతి వేదవ్యాసుని పిలిపించి నియోగ ప్రక్రియ జరిపించడం.',
      'పావురం ప్రాణాల కోసం శిబి చక్రవర్తి తన స్వశరీరాన్నే సమర్పించడం.'
    ],
    majorDecisions_hi: [
      'विश्वामित्र का मोह त्यागकर पुनः तपस्या की ओर अग्रसर होना।',
      'शांतनु द्वारा आठवें बालक के प्राण बचाने के लिए गंगा से किया वचन तोड़ना।',
      'पिता के सुख हेतु देवव्रत का राज्याधिकार और वैवाहिक सुख का पूर्ण त्याग।',
      'भीष्म द्वारा अंबा को शाल्व के पास भेजना और अपनी प्रतिज्ञा पर दृढ़ रहना।',
      'सत्यवती द्वारा वंश रक्षा हेतु महर्षि व्यास को बुलाकर नियोग संपन्न कराना।',
      'राजा शिबि का शरणागत रक्षा के लिए अपने शरीर का मांस तराजू पर चढ़ा देना।'
    ],
    consequences: [
      'The sacred land is forever blessed with the glorious name Bharatavarsha.',
      'Devavrata becomes Bhishma, blessed with Iccha-Mrityu, remaining bound to the throne.',
      'Princess Amba vows revenge, setting the stage for her rebirth as Shikhandi on Day 10 of Kurukshetra.',
      'Pandu becomes King instead of sightless Dhritarashtra, sowing lifelong resentment.',
      'The split between Pandu’s line (Pandavas) and Dhritarashtra’s line (Kauravas) is set into motion.'
    ],
    consequences_te: [
      'పుణ్యభూమికి "భారతదేశం" అనే శాశ్వత నామం సిద్ధించడం.',
      'దేవవ్రతుడు భీష్ముడిగా మారి, ఇచ్ఛామృత్యు వరం పొంది సింహాసనానికి రక్షకుడిగా నిలవడం.',
      'అంబ శపథం వల్ల భవిష్యత్తులో కురుక్షేత్ర 10వ రోజున శిఖండి ద్వారా భీష్మ పతనానికి బీజం పడటం.',
      'ధృతరాష్ట్రుడు అంధుడు కావడంతో పాండురాజు రాజు కావడం, తద్వారా అసూయ బీజాలు నాటబడటం.',
      'పాండవులు మరియు కౌరవుల మధ్య భవిష్యత్తు మహాయుద్ధానికి మూలకారణాలు ఏర్పడటం.'
    ],
    consequences_hi: [
      'इस पावन धरा को "भारतवर्ष" के रूप में शाश्वत गौरव प्राप्त हुआ।',
      'भीष्म इच्छा-मृत्यु के वरदान के साथ कुरु सिंहासन के आजीवन रक्षक बन गए।',
      'अंबा के प्रतिशोध ने महाभारत के १०वें दिन शिखंडी के रूप में भीष्म के पतन का मार्ग प्रशस्त किया।',
      'धृतराष्ट्र के नेत्रहीन होने से पांडु राजा बने, जिससे ईर्ष्या के बीज पड़े।',
      'पांडवों और कौरवों के मध्य भविष्य के महाविनाशकारी संघर्ष की नींव रखी गई।'
    ]
  },

  slides: [
    {
      title: 'Vishwamitra and Menaka',
      content: 'Rishi Vishwamitra performed great penance. Indra sent Menaka to distract him. From their union was born Shakuntala, mother of Emperor Bharata.',
      narrationQuote: '"Even the strongest mind can be affected by emotion; true strength is self-mastery."',
      imagePrompt: 'Rishi Vishwamitra meditating under a grand tree as celestial Menaka approaches',
      visualTheme: 'forest-tapasya'
    },
    {
      title: 'The Sacred Vow of Devavrata',
      content: 'To allow Shantanu to marry Satyavati, Devavrata renounced the throne and took a vow of lifelong celibacy, earning the name Bhishma and Iccha-Mrityu.',
      narrationQuote: '"I shall never claim the throne, nor father any offspring."',
      imagePrompt: 'Young Devavrata taking a divine oath with golden light',
      visualTheme: 'golden-court'
    },
    {
      title: 'The Lineage of the Kurus',
      content: 'After Vichitravirya passed away, Sage Vyasa was summoned to father Dhritarashtra, Pandu, and Vidura, securing the royal line of Hastinapur.',
      narrationQuote: '"Destiny weaves its tapestry through trials and blessings across generations."',
      imagePrompt: 'Ancient palace of Hastinapur with royal thrones',
      visualTheme: 'royal-heritage'
    }
  ]
};
