import { StoryPart } from '../../types/game';

export const PART_1_STORY: StoryPart = {
  partNumber: 1,
  title: 'Origins & The Sacred Vow',
  title_te: 'ఆదిపర్వం - గంగా శంతనులు & భీష్మ ప్రతిజ్ఞ',
  title_hi: 'आदिपर्व - गंगा-शांतनु और भीष्म की भीषण प्रतिज्ञा',
  sanskritTitle: 'आदिपर्व - भीष्म प्रतिज्ञा',
  summary: 'From the celestial banks of the holy Ganga to the golden court of Hastinapur, witness King Shantanu’s divine love, Devavrata’s unparalleled martial training, and the awe-inspiring oath that shook the heavens.',
  summary_te: 'పవిత్ర గంగా తీరం నుండి హస్తినాపుర స్వర్ణ సింహాసనం వరకు: శంతనుని దివ్య ప్రేమ, దేవవ్రతుని అద్భుత విద్యాభ్యాసం, మరియు ముల్లోకాలను కదిలించిన భీష్ముని భీకర శపథం.',
  summary_hi: 'पवित्र गंगा के तट से हस्तिनापुर के राजसिंहासन तक: शांतनु का दैवीय प्रेम, देवव्रत का अद्वितीय पराक्रम और तीनों लोकों को कंपित करने वाली भीष्म की भीषण प्रतिज्ञा।',
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
      { id: 'vidura', name: 'Vidura', name_te: 'విదురుడు', name_hi: 'विदुर', role: 'Prime Minister of Dharma', role_te: 'ధర్మనీతి మంత్రి', role_hi: 'धर्मनीतिज्ञ महामंत्री', clan: 'Kuru', generation: 3, isKeyCharacter: true }
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

  // Detailed Illustrated Story Pages
  illustratedPages: [
    {
      pageNumber: 1,
      title: 'The King and the Celestial River',
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
      dialogueQuote: '"The instant you ask \'Why?\', my lord, that very moment shall be our final farewell."',
      dialogueQuote_te: '"నాథా! నీవు \'ఎందుకు?\' అని ప్రశ్నించిన క్షణమే మన దాంపత్యానికి చివరి క్షణం అవుతుంది."',
      dialogueQuote_hi: '"जिस क्षण आपने मुझसे पूछा कि \'यह क्यों किया?\', उसी क्षण हमारा साथ सदा के लिए छूट जाएगा।"',
      speaker: 'Goddess Ganga to Shantanu',
      speaker_te: 'శంతనునితో గంగాదేవి',
      speaker_hi: 'शांतनु से गंगा जी के वचन',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'Goddess Ganga by the swirling sacred waters with the newborn Vasu child.',
      imageCaption_te: 'పవిత్ర గంగా తీరంలో దివ్య శిశువుతో గంగాదేవి.',
      imageCaption_hi: 'पवित्र गंगा तट पर नवजात शिशु के साथ देवी गंगा।'
    },
    {
      pageNumber: 2,
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
        '"मैंने सात वसुओं को तत्काल शापमुक्त कर दिया। यह आठवाँ वसु \'द्यौ\' है, जिसे दीर्घकाल तक पृथ्वी पर रहकर अपना कर्म भोगना है। मैं इसे स्वर्ग ले जाकर देव-विद्याओं में निपुण कर आपको सौंप दूँगी।"'
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
      imageCaption_hi: 'शिशु देवव्रत को लेकर आकाश मार्ग से प्रस्थान करतीं देवी गंगा।'
    },
    {
      pageNumber: 3,
      title: 'The Return of the Crown Prince',
      title_te: 'యువరాజుగా దేవవ్రతుని పునరాగమనం',
      title_hi: 'देवव्रत की घर वापसी और युवराज पद',
      sceneTag: 'Hastinapur & Banks of Ganga',
      sceneTag_te: 'గంగా తీరాన శంతనుని అద్భుత దర్శనం',
      sceneTag_hi: 'गंगा तट पर अद्भुत दृश्य',
      hookLine: 'Trained by sages and gods, the young prince stopped the river itself with a dam of arrows.',
      hookLine_te: 'తన బాణాలతో గంగా ప్రవాహాన్నే నిలువరించిన అద్భుత ధనుర్ధారి.',
      hookLine_hi: 'बाणों के बांध से गंगा के प्रचंड प्रवाह को रोक देने वाला अद्वितीय धनुर्धर।',
      paragraphs: [
        'Sixteen years drifted by. King Shantanu, living in melancholic solitude, returned to the riverbank. To his amazement, he observed that the raging torrent of Ganga had ceased flowing, dammed completely by an intricate canopy of sharp celestial arrows.',
        'Behind the dam stood a handsome youth of divine bearing, golden bow in hand. Before Shantanu could fathom the miracle, Goddess Ganga materialized beside the young warrior.',
        '"Behold your son, O King," smiled Ganga. "He is Devavrata. He has mastered the sacred Vedas from Sage Vashishta, statecraft from Shukracharya and Brihaspati, and the celestial art of archery from Lord Parashurama Himself. Take him home to Hastinapur; there is none like him on earth."'
      ],
      paragraphs_te: [
        'పదహారేళ్ళ తర్వాత శంతనుడు గంగా తీరాన తిరుగుతుండగా, గంగానది ఉధృత ప్రవాహం బాణాల వంతెనతో ఆగిపోవడం చూసి ఆశ్చర్యపోయాడు.',
        'ఒక దివ్య తేజోవంతుడైన యువకుడు విల్లు పట్టుకుని నిలబడి ఉన్నాడు. వెంటనే గంగాదేవి ప్రత్యక్షమై ఆ యువకుడిని శంతనునికి పరిచయం చేసింది.',
        '"రాజా! ఇతడే నీ కుమారుడు దేవవ్రతుడు. వశిష్టుని వద్ద వేదాలు, బృహస్పతి వద్ద రాజనీతి, సాక్షాత్తూ పరశురాముని వద్ద ధనుర్విద్యను అభ్యసించాడు. ఇతనిని హస్తినాపురానికి తీసుకెళ్ళి పట్టాభిషేకం చేయి" అని గంగాదేవి అప్పగించింది.'
      ],
      paragraphs_hi: [
        'सोलह वर्ष बीत गए। एक दिन शांतनु ने देखा कि गंगा का प्रचंड वेग एक तीरों के अभेद्य बाँध से रुक गया है।',
        'वहाँ हाथ में दिव्य धनुष लिए एक तेजस्वी नवयुवक खड़ा था। तभी देवी गंगा प्रकट हुईं और बोलीं: "महाराज! यह आपका पुत्र देवव्रत है।"',
        '"इसने महर्षि वशिष्ठ से वेद, बृहस्पति और शुक्राचार्य से नीतिशास्त्र, तथा भगवान परशुराम से दिव्यास्त्रों का संधान सीखा है। अब इसे स्वीकार कर हस्तिनापुर ले जाइए।"'
      ],
      dialogueQuote: '"He has mastered the Vedas and the Astras; Parashurama himself proclaimed him unconquerable."',
      dialogueQuote_te: '"ఇతను సమస్త శాస్త్రాలను, అస్త్రాలను సాధించాడు; పరశురాముడే ఇతనిని అజేయుడని కొనియాడాడు."',
      dialogueQuote_hi: '"इसने समस्त शास्त्र और दिव्यास्त्र सीख लिए हैं; स्वयं परशुराम ने इसे अपराजेय घोषित किया है।"',
      speaker: 'Goddess Ganga presenting Devavrata',
      speaker_te: 'కుమారుడిని అప్పగిస్తూ గంగాదేవి',
      speaker_hi: 'देवव्रत को सौंपते हुए गंगा माता',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'Young Devavrata with his golden bow, welcomed by his ecstatic father King Shantanu.',
      imageCaption_te: 'తండ్రి శంతనుడిని కలుసుకున్న యువ దేవవ్రతుడు.',
      imageCaption_hi: 'पिता शांतनु से मिलते तेजस्वी युवराज देवव्रत।'
    },
    {
      pageNumber: 4,
      title: 'The Fisher Chief’s Impossible Demand',
      title_te: 'దాశరాజు కఠిన నిబంధన & శంతనుని వేదన',
      title_hi: 'दाशराज की कठिन शर्त और शांतनु का संताप',
      sceneTag: 'Yamuna Banks & The Royal Chamber',
      sceneTag_te: 'యమునా తీరంలో దాశరాజు షరతు',
      sceneTag_hi: 'यमुना तट और राजभवन का मौन',
      hookLine: 'A father’s unvoiced sorrow weighed heavier than the crown of Hastinapur.',
      hookLine_te: 'కొడుకు హక్కును లాక్కోలేక కుంగిపోయిన చక్రవర్తి శంతనుడు.',
      hookLine_hi: 'पुत्र के अधिकारों को न छीन पाने की विवशता में घुटते महाराज शांतनु।',
      paragraphs: [
        'Four glorious years followed. Devavrata was anointed Crown Prince, and his justice brought immense prosperity. But one afternoon along the Yamuna, Shantanu encountered Satyavati (Matsyagandha), daughter of the fisherman chieftain Dusharaj, whose skin radiated the scent of fresh lotuses.',
        'Captivated by her grace, Shantanu formally asked the chieftain for her hand. But Dusharaj was calculating: "O King, I will give you my daughter on only one condition: the son born of Satyavati’s womb must inherit the throne of Hastinapur, not Prince Devavrata."',
        'Shantanu was horrified. To disinherit Devavrata—his saintly, peerless firstborn who had committed no wrong—was unrighteous and unthinkable. Heavy-hearted and sick with grief, the king returned to the palace in total silence, wasting away in sorrow.'
      ],
      paragraphs_te: [
        'దేవవ్రతుడు యువరాజు అయ్యాక రాజ్యం సుభిక్షంగా సాగింది. కొన్నేళ్ళ తర్వాత యమునా తీరాన సత్యవతి అనే జాలరి కన్యను చూసి శంతనుడు మోహించాడు. ఆమె తండ్రి దాశరాజు వద్దకు వెళ్ళి వివాహం ప్రతిపాదించాడు.',
        'కానీ దాశరాజు కఠినమైన షరతు పెట్టాడు: "రాజా! నా కుమార్తెకు పుట్టే కొడుకే హస్తినాపుర చక్రవర్తి కావాలి. దేవవ్రతుడికి రాజ్యం రాకూడదు."',
        'ఈ మాట విని శంతనుడు నిశ్చేష్టుడయ్యాడు. ఎటువంటి తప్పూ చేయని తన ధర్మవంతుడైన కొడుకు దేవవ్రతునికి అన్యాయం చేయడం అధర్మమని భావించి, వివాహాన్ని వదులుకుని మనోవేదనతో శయ్యపై ఒరిగిపోయాడు.'
      ],
      paragraphs_hi: [
        'चार वर्ष सुख से बीते। देवव्रत युवराज बने। एक दिन यमुना तट पर शांतनु को कस्तूरी जैसी सुगंध वाली धीवर-कन्या सत्यवती दिखाई दी। शांतनु उसके रूप पर मुग्ध हो गए।',
        'जब उन्होंने उसके पिता दाशराज से विवाह की बात की, तो दाशराज ने शर्त रखी: "मेरी कन्या से उत्पन्न पुत्र ही हस्तिनापुर का राजा बनेगा, देवव्रत नहीं।"',
        'शांतनु धर्मसंकट में पड़ गए। सर्वगुण संपन्न निष्पाप देवव्रत के अधिकारों का हनन करना उन्हें घोर अधर्म लगा। वे बिना कुछ कहे भारी मन से महल लौट आए और शोक में घुलने लगे।'
      ],
      dialogueQuote: '"How can I cast aside Devavrata, whose virtues illuminate all Aryavarta? I cannot commit this adharma."',
      dialogueQuote_te: '"సకల గుణ సంపన్నుడైన దేవవ్రతుడికి అన్యాయం చేసి నేను ఈ అధర్మానికి ఒడిగట్టలేను."',
      dialogueQuote_hi: '"जिस देवव्रत के सद्गुणों से संपूर्ण आर्यावर्त प्रकाशित है, उसके साथ मैं यह अन्याय कभी नहीं कर सकता।"',
      speaker: 'King Shantanu’s inner sorrow',
      speaker_te: 'శంతనుని అంతర్మథనం',
      speaker_hi: 'शांतनु का आंतरिक विलाप',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'King Shantanu lost in deep sorrow within the quiet halls of Hastinapur.',
      imageCaption_te: 'హస్తినాపుర అంతఃపురంలో దిగులుగా కూర్చున్న శంతన మహారాజు.',
      imageCaption_hi: 'राजभवन में चिंताग्रस्त और मौन बैठे महाराज शांतनु।'
    },
    {
      pageNumber: 5,
      title: 'The Terrible Vow — The Birth of Bhishma',
      title_te: 'భీష్మ ప్రతిజ్ఞ — ఆకాశం కంపించిన మహా శపథం',
      title_hi: 'भीष्म प्रतिज्ञा — वह शपथ जिसने इतिहास बदल दिया',
      sceneTag: 'Dusharaj’s Fishermen Settlement',
      sceneTag_te: 'దాశరాజు ఎదుట దేవవ్రతుని శపథం',
      sceneTag_hi: 'दाशराज के समक्ष महाप्रतिज्ञा',
      hookLine: 'He renounced both kingdom and progeny, earning the eternal name Bhishma.',
      hookLine_te: 'రాజ్యాన్ని, సంసార సుఖాన్ని త్యజించి "భీష్ముడు"గా మారిన త్యాగమూర్తి.',
      hookLine_hi: 'पिता के सुख के लिए राज्य और वैवाहिक जीवन दोनों को सदा के लिए त्यागने वाले महापुरुष।',
      paragraphs: [
        'Noticing his father’s declining health and silent torment, Devavrata questioned the royal minister and learned the truth. Without telling Shantanu, the noble prince rode directly to the chieftain’s river settlement.',
        'Before the assembly, Devavrata pledged: "I renounce my claim to the Kuru throne! Satyavati’s son shall be king!" But the shrewd chieftain probed further: "You are truthful, Prince, but what if your future sons claim their father’s kingdom? What will protect my daughter’s lineage then?"',
        'Hearing this doubt, Devavrata raised his right hand toward heaven and took an oath of supreme self-abnegation: "Listen, O Earth, Waters, Gods, and Sages! From this day forth, I embrace lifelong celibacy (Akhanda Brahmacharya). I shall father no sons, nor hold any woman’s hand. Even if the stars fall, my vow of chastity shall remain unshakable!"'
      ],
      paragraphs_te: [
        'తండ్రి క్షీణిస్తున్న ఆరోగ్యాన్ని చూసి మంత్రి ద్వారా అసలు విషయం తెలుసుకున్న దేవవ్రతుడు, ఎవరికీ చెప్పకుండా నేరుగా దాశరాజు వద్దకు వెళ్ళాడు.',
        'దేవవ్రతుడు: "నేను రాజ్యాన్ని త్యజిస్తున్నాను, సత్యవతి కొడుకే చక్రవర్తి అవుతాడు" అని ప్రకటించాడు. కానీ దాశరాజు: "నీవు మాట నిలబెట్టుకోవచ్చు, కానీ భవిష్యత్తులో నీకు పుట్టే కొడుకులు రాజ్యాన్ని కోరితే నా మనవళ్ల గతి ఏమిటి?" అని ప్రశ్నించాడు.',
        'ఆ మాట విన్న దేవవ్రతుడు ఆకాశం వైపు చేయి ఎత్తి పరమ భీకరమైన ప్రతిజ్ఞ చేశాడు: "సమస్త సృష్టి సాక్షిగా వినండి! నేను ఆజన్మాంతం బ్రహ్మచర్యాన్ని పాటిస్తాను! వివాహం చేసుకోను, పిల్లల్ని కనను! నా తండ్రి సింహాసనాన్ని రక్షిస్తూ నిరంతరం దాసుడిగా సేవ చేస్తాను!"'
      ],
      paragraphs_hi: [
        'पिता के संताप का कारण जानकर देवव्रत स्वयं दाशराज के पास पहुँचे। उन्होंने घोषणा की: "सत्यवती का पुत्र ही राजा बनेगा, मैं अपना अधिकार त्यागता हूँ।"',
        'दाशराज ने शंका की: "युवराज! आप धर्मात्मा हैं, पर यदि आपकी संतानों ने कल मेरे नातियों से राज्य छीन लिया तो?"',
        'यह सुनकर देवव्रत ने आकाश की ओर हाथ उठाकर वह प्रतिज्ञा ली जिसने काल की गति बदल दी: "समस्त देवता और दिशाएँ साक्षी रहें! मैं आज से आजीवन ब्रह्मचर्य का पालन करूँगा। मैं कभी विवाह नहीं करूँगा, ताकि कोई संतान उत्पन्न ही न हो!"'
      ],
      dialogueQuote: '"Earth may lose its scent, fire its heat, the sun its light, but I shall never break this vow!"',
      dialogueQuote_te: '"భూమి తన గంధాన్ని, అగ్ని తన వేడిని, సూర్యుడు తన కాంతిని కోల్పోయినా... నా ప్రతిజ్ఞను ఎప్పటికీ వీడను!"',
      dialogueQuote_hi: '"पृथ्वी अपनी गंध छोड़ दे, अग्नि अपनी ऊष्मा और सूर्य अपना तेज, किंतु मैं अपनी प्रतिज्ञा से कभी विचलित नहीं होऊँगा!"',
      speaker: 'Devavrata taking the Terrible Vow',
      speaker_te: 'భీకర శపథం చేస్తున్న దేవవ్రతుడు',
      speaker_hi: 'भीष्म प्रतिज्ञा लेते हुए देवव्रत',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'Celestial flowers showering upon Devavrata as the gods roar: "Bhishma! Bhishma!"',
      imageCaption_te: 'దేవతలు పూలవాన కురిపిస్తూ "భీష్మా! భీష్మా!" అని జయజయధ్వానాలు చేశారు.',
      imageCaption_hi: 'देवताओं द्वारा पुष्प-वर्षा और "भीष्म! भीष्म!" के जयघोष से गूंजता आकाश।'
    },
    {
      pageNumber: 6,
      title: 'The Boon of Iccha-Mrityu & Passing of Shantanu',
      title_te: 'ఇచ్ఛామృత్యు వరం & కురు వంశ సంక్షోభం',
      title_hi: 'इच्छा-मृत्यु का वरदान और शांतनु का महाप्रयाण',
      sceneTag: 'Hastinapur Royal Hall',
      sceneTag_te: 'హస్తినాపుర రాజసభ',
      sceneTag_hi: 'हस्तिनापुर का राजदरबार',
      hookLine: 'A father’s gratitude granted power over death itself; yet tragedy soon knocked on the palace doors.',
      hookLine_te: 'తండ్రి ప్రసాదించిన మృత్యుంజయుని వరం; కానీ విధి విచిత్రమైన మలుపు తిరిగింది.',
      hookLine_hi: 'मृत्यु पर विजय का अलौकिक वरदान, परंतु कुरुवंश पर मंडराते संकट के बादल।',
      paragraphs: [
        'Devavrata escorting Queen Satyavati returned to Hastinapur. When King Shantanu learned of the terrifying sacrifice his son had made, he wept and embraced Devavrata, blessing him with Iccha-Mrityu (the power to choose the exact time and circumstance of his own death; death could not touch him without his willing consent).',
        'From Queen Satyavati, Shantanu had two sons: Chitrangada and Vichitravirya. Years later, after Shantanu passed away, the elder prince Chitrangada, known for fierce vanity, was killed in a three-year duel with a Gandharva king of the same name.',
        'Bhishma then crowned young Vichitravirya, guarding the kingdom with resolute devotion. But the royal bloodline stood fragile, hung upon the life of a single prince.'
      ],
      paragraphs_te: [
        'దేవవ్రతుడు సత్యవతిని స్వయంగా హస్తినాపురానికి తీసుకువచ్చాడు. తన కొడుకు చేసిన అపూర్వ త్యాగానికి శంతనుడు కన్నీటితో హత్తుకుని "ఇచ్ఛామృత్యువు" (తన అనుమతి లేనిదే మృత్యువు కూడా తాకలేని వరం) ప్రసాదించాడు.',
        'సత్యవతి-శంతనులకు చిత్రాంగదుడు, విచిత్రవీర్యుడు జన్మించారు. శంతనుని మరణానంతరం చిత్రాంగదుడు ఒక గంధర్వుని చేతిలో మరణించాడు.',
        'అనంతరం భీష్ముడు చిన్నవాడైన విచిత్రవీర్యునికి పట్టాభిషేకం చేసి, సర్వశక్తులా రాజ్య రక్షణ భారాన్ని తన భుజాలపై మోశాడు.'
      ],
      paragraphs_hi: [
        'सत्यवती को लेकर देवव्रत हस्तिनापुर लौटे। पुत्र के इस आत्मोत्सर्ग को देखकर शांतनु रो पड़े और उन्होंने भीष्म को "इच्छा-मृत्यु" का अमोघ वरदान दिया कि मृत्यु भी उनकी आज्ञा के बिना उनके पास नहीं आ सकेगी।',
        'सत्यवती से दो पुत्र हुए: चित्रांगद और विचित्रवीर्य। शांतनु के देहावसान के बाद चित्रांगद एक गंधर्व से युद्ध में मारे गए।',
        'भीष्म ने छोटे भाई विचित्रवीर्य का राज्याभिषेक किया और वे निष्काम भाव से राज्य की रक्षा करने लगे। किंतु कुरुवंश की डोर अत्यंत दुर्बल हो चुकी थी।'
      ],
      dialogueQuote: '"O Bhishma, death itself shall wait outside your threshold until you call it."',
      dialogueQuote_te: '"కుమారా భీష్మా! నీవు పిలిచేంతవరకు సాక్షాత్తూ మృత్యువు కూడా నీ గుమ్మం వద్ద వేచి ఉండాల్సిందే."',
      dialogueQuote_hi: '"हे भीष्म! जब तक तुम्हारी इच्छा न होगी, साक्षात् काल भी तुम्हारा स्पर्श नहीं कर सकेगा।"',
      speaker: 'King Shantanu granting Iccha-Mrityu',
      speaker_te: 'ఇచ్ఛామృత్యు వరం ఇస్తున్న శంతనుడు',
      speaker_hi: 'शांतनु द्वारा इच्छा-मृत्यु का वरदान',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'King Shantanu laying hands of blessing on the bowed head of heroic Bhishma.',
      imageCaption_te: 'భీష్ముని శిరస్సుపై చేతులుంచి ఆశీర్వదిస్తున్న శంతన మహారాజు.',
      imageCaption_hi: 'भीष्म के मस्तक पर हाथ रखकर वरदान देते महाराज शांतनु।'
    },
    {
      pageNumber: 7,
      title: 'The Swayamvara of Kashi & Princess Amba',
      title_te: 'కాశీ కన్యల స్వయంవరం & అంబ శాపం',
      title_hi: 'काशी की राजकुमारियों का स्वयंवर और अंबा का प्रतिशोध',
      sceneTag: 'Kashi Kingdom & Royal Court',
      sceneTag_te: 'కాశీ నగర స్వయంవర వేదిక',
      sceneTag_hi: 'काशी का स्वयंवर मंडप',
      hookLine: 'An act of brotherly duty planted the seed of Bhishma’s eventual doom.',
      hookLine_te: 'తమ్ముని కోసం తెచ్చిన సంబంధం; భీష్ముని అంతానికి కారణమైన అంబ నిప్పు రవ్వ.',
      hookLine_hi: 'भाई के विवाह के लिए उठाया गया कदम, जो भविष्य में भीष्म के पतन का कारण बना।',
      paragraphs: [
        'To ensure brides for young Vichitravirya, Bhishma entered the Swayamvara assembly of the King of Kashi. Defeating the assembly of kings single-handedly, he took the three princesses: Amba, Ambika, and Ambalika back to Hastinapur.',
        'Before the marriage ceremony, eldest princess Amba spoke in tears: "O Bhishma, in my heart I had already chosen King Salva as my lord, and he accepted me. It is against Dharma to wed me to another."',
        'Bhishma immediately released Amba with honorable escort. But King Salva rejected her, declaring he could not accept a woman captured by another warrior. When Amba returned and asked Bhishma to marry her, he was bound by his oath of celibacy. Heartbroken and humiliated, Amba swore severe penance to destroy Bhishma in a future life, leading to her eventual rebirth as Shikhandi.'
      ],
      paragraphs_te: [
        'విచిత్రవీర్యుని వివాహం కోసం కాశీ రాజు నిర్వహించిన స్వయంవరానికి వెళ్ళిన భీష్ముడు, అక్కడి రాజులందరినీ ఒంటిచేత్తో ఓడించి అంబ, అంబిక, అంబాలికలను హస్తినాపురానికి తీసుకువచ్చాడు.',
        'కానీ పెద్ద కుమార్తె అంబ: "నేను మనసులో సాల్వ మహారాజును భర్తగా వరించాను" అని చెప్పగా, ధర్మబద్ధంగా భీష్ముడు ఆమెను సాల్వ రాజు వద్దకు పంపించాడు. కానీ పరాభవం పొందిన సాల్వ రాజు ఆమెను తిరస్కరించాడు.',
        'తిరిగి వచ్చిన అంబను వివాహం చేసుకోమని కోరగా, బ్రహ్మచర్య ప్రతిజ్ఞ వల్ల భీష్ముడు నిరాకరించాడు. దీంతో రగిలిపోయిన అంబ భీష్ముని నాశనానికి కంకణం కట్టుకుని ఘోర తపస్సు చేసి, పరమశివుని వరంతో శిఖండిగా పునర్జన్మ ఎత్తింది.'
      ],
      paragraphs_hi: [
        'विचित्रवीर्य के विवाह हेतु भीष्म ने काशीराज की तीन कन्याओं—अंबा, अंबिका और अंबालिका का स्वयंवर में समस्त राजाओं को हराकर हरण किया।',
        'हस्तिनापुर आकर अंबा ने कहा कि वह मन ही मन राजा शाल्व को अपना पति मान चुकी है। भीष्म ने धर्मानुसार उसे शाल्व के पास भेज दिया, किंतु पराजित शाल्व ने अंबा को स्वीकार नहीं किया।',
        'जब अंबा ने भीष्म से विवाह की प्रार्थना की, तो भीष्म ने अपनी प्रतिज्ञा का स्मरण कराकर मना कर दिया। अपमानित अंबा ने भीष्म के वध की प्रतिज्ञा ली और बाद में "शिखंडी" के रूप में पुनर्जन्म लिया।'
      ],
      dialogueQuote: '"Even if Parashurama commands me or Indra strikes, my vow of celibacy cannot be broken."',
      dialogueQuote_te: '"సాక్షాత్తూ నా గురువు పరశురాముడు ఆజ్ఞాపించినా, దేవేంద్రుడే ఎదురొచ్చినా నా ప్రతిజ్ఞను విడనాడలేను."',
      dialogueQuote_hi: '"स्वयं मेरे गुरु परशुराम भी कहें, तो भी मैं अपनी प्रतिज्ञा से एक पग भी पीछे नहीं हटूंगा।"',
      speaker: 'Bhishma standing firm by his vow',
      speaker_te: 'ప్రతిజ్ఞపై అచంచలంగా నిలిచిన భీష్ముడు',
      speaker_hi: 'भीष्म का अटल उत्तर',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'Princess Amba confronting Bhishma in the court before departing for intense penance.',
      imageCaption_te: 'కోపంతో భీష్ముని వైపు చూస్తూ శాపవాక్కులు పలుకుతున్న అంబ.',
      imageCaption_hi: 'राजसभा में भीष्म से अपने अधिकारों और प्रतिशोध की बात करती राजकुमारी अंबा।'
    },
    {
      pageNumber: 8,
      title: 'Vyasa’s Niyoga & The Three Royal Heirs',
      title_te: 'వ్యాస మహర్షి నియోగ ధర్మం & ముగ్గురు రాకుమారులు',
      title_hi: 'महर्षि व्यास का आगमन और धृतराष्ट्र, पाण्डु, विदुर का जन्म',
      sceneTag: 'Hastinapur Inner Chambers',
      sceneTag_te: 'హస్తినాపుర అంతఃపురం',
      sceneTag_hi: 'हस्तिनापुर का अंतःपुर',
      hookLine: 'When extinction loomed over the Kuru dynasty, Sage Vyasa restored the lineage through sacred Niyoga.',
      hookLine_te: 'కురువంశం అంతరించిపోయే క్షణంలో వ్యాస మహర్షి అనుగ్రహంతో చిగురించిన రాజవంశం.',
      hookLine_hi: 'जब कुरुवंश का दीपक बुझने की कगार पर था, तब महर्षि व्यास ने वंश को नवजीवन दिया।',
      paragraphs: [
        'Vichitravirya married Ambika and Ambalika, but before an heir could be conceived, he fell fatally ill and died childless. Queen Mother Satyavati, desperate to preserve the royal seed, begged Bhishma to marry the widows. Bhishma steadfastly refused: "Mother, I would rather see the universe dissolve than break my oath!"',
        'In desperation, Satyavati revealed her secret firstborn son: Sage Krishna Dwaipayana Vyasa, born from Sage Parashara before her royal wedding. Vyasa was summoned to perform the ancient sacred rite of Niyoga with the queens.',
        'When Vyasa entered with his blazing ascetic aura and matted hair, Ambika shut her eyes in fear—her son Dhritarashtra was born blind. Ambalika turned pale with terror—her son Pandu was born pale. The wise maidservant greeted the sage with reverence—her son Vidura was born endowed with supreme virtue and wisdom. As Dhritarashtra was blind, Pandu was crowned King of Hastinapur!'
      ],
      paragraphs_te: [
        'విచిత్రవీర్యుడు అంబిక, అంబాలికలను వివాహం చేసుకున్న కొన్నాళ్ళకే సంతానం కలగకుండానే అకాల మరణం చెందాడు. కురువంశం అంతరించిపోతుండటంతో సత్యవతి భీష్ముడిని వివాహం చేసుకోమంది. కానీ భీష్ముడు తన శపథాన్ని వీడనని ఖరాఖండిగా చెప్పాడు.',
        'అప్పుడు సత్యవతి తన పూర్వపుత్రుడైన వేదవ్యాస మహర్షిని స్మరించింది. వ్యాసుడు తల్లి కోరికపై నియోగ ధర్మం ద్వారా వంశాన్ని నిలపడానికి అంగీకరించాడు.',
        'వ్యాసుని తేజస్సును చూసి అంబిక కళ్ళు మూసుకోవడంతో ఆమెకు ధృతరాష్ట్రుడు గుడ్డివాడిగా జన్మించాడు; అంబాలిక భయంతో పాలిపోవడంతో పాండురాజు తెల్లటి శరీరంతో పుట్టాడు; పరిచారిక భక్తితో నమస్కరించడంతో విదురుడు పరమ ధర్మజ్ఞానిగా జన్మించాడు. అంధుడైనందున ధృతరాష్ట్రునికి బదులుగా పాండురాజుకు పట్టాభిషేకం జరిగింది.'
      ],
      paragraphs_hi: [
        'विचित्रवीर्य की निःसंतान मृत्यु हो गई। वंश रक्षा के लिए व्याकुल सत्यवती ने भीष्म से रानियों से विवाह का आग्रह किया, किंतु भीष्म ने अपने संकल्प को अटल रखा।',
        'तब सत्यवती ने अपने पहले पुत्र महर्षि वेदव्यास को बुलाया और प्राचीन नियोग धर्म से वंश चलाने की प्रार्थना की।',
        'व्यास जी के तपोमय तेज को देखकर अंबिका ने आँखें बंद कर लीं—जिससे नेत्रहीन धृतराष्ट्र का जन्म हुआ। अंबालिका भय से पीली पड़ गई—जिससे पांडु दुर्बल व श्वेत वर्ण जन्मे। दासी ने भक्तिभाव से सेवा की—जिससे धर्मस्वरूप विदुर जन्मे। नेत्रहीन होने के कारण धृतराष्ट्र के स्थान पर पांडु का राज्याभिषेक हुआ।'
      ],
      dialogueQuote: '"The throne cannot sit empty; from the womb of virtue must spring the future emperors of Bharatavarsha."',
      dialogueQuote_te: '"కురు సింహాసనం ఖాళీగా ఉండకూడదు; సనాతన ధర్మ రక్షణకై పుణ్యపురుషులు జన్మించితీరాలి."',
      dialogueQuote_hi: '"कुरु सिंहासन सूना नहीं रह सकता; धर्म की रक्षा हेतु भारतवर्ष के भविष्य का जन्म अवश्यंभावी है।"',
      speaker: 'Sage Vyasa blessing the dynasty',
      speaker_te: 'కురువంశాన్ని ఆశీర్వదిస్తున్న వ్యాస మహర్షి',
      speaker_hi: 'महर्षि व्यास का मंगल आशीर्वाद',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'Sage Vyasa conferring divine blessings for the continuation of the Kuru dynasty.',
      imageCaption_te: 'కురువంశ పునరుజ్జీవనానికి ఆశీర్వదిస్తున్న వేదవ్యాస మహర్షి.',
      imageCaption_hi: 'कुरुवंश के पुनरुत्थान हेतु आशीर्वाद देते महर्षि वेदव्यास।'
    }
  ],

  // Story Summary ("What You Learned")
  partSummary: {
    majorEvents: [
      'Goddess Ganga marries King Shantanu on the condition of absolute non-interference, liberating the first seven Vasus.',
      'Shantanu breaks his silence to save the eighth child, revealing Ganga’s divine identity; she departs with Devavrata for celestial education.',
      'Devavrata returns after 16 years as an unbeatable master of Vedas, statecraft, and Astras.',
      'Shantanu falls in love with Satyavati, but the fisherman chief demands her future sons inherit the crown.',
      'Devavrata takes the Terrible Vow of lifelong celibacy and throne renunciation, earning the name Bhishma and the boon of Iccha-Mrityu.',
      'Vichitravirya dies childless; Sage Vyasa is summoned via Niyoga, fathering Dhritarashtra, Pandu, and Vidura.'
    ],
    majorEvents_te: [
      'గంగాదేవి శంతనుడిని షరతుతో వివాహం చేసుకుని, ఏడుగురు వసువులకు శాపవిముక్తి కలిగించింది.',
      'ఎనిమిదవ బిడ్డను కాపాడటానికి శంతనుడు మౌనాన్ని వీడటంతో, గంగాదేవి బాలుడితో సహా స్వర్గానికి వెళ్ళింది.',
      '16 ఏళ్ళ తర్వాత దేవవ్రతుడు సమస్త అస్త్రశాస్త్రాలలో నిష్ణాతుడై హస్తినాపురానికి తిరిగి వచ్చాడు.',
      'సత్యవతిని శంతనుడు ప్రేమించగా, దాశరాజు తన మనవడికే రాజ్యం కావాలని షరతు పెట్టాడు.',
      'దేవవ్రతుడు ఆజన్మ బ్రహ్మచర్య, రాజ్య త్యాగ శపథాలు చేసి "భీష్ముడు"గా మారి, ఇచ్ఛామృత్యు వరం పొందాడు.',
      'విచిత్రవీర్యుని మరణానంతరం వ్యాసుని నియోగం ద్వారా ధృతరాష్ట్రుడు, పాండురాజు, విదురులు జన్మించారు.'
    ],
    majorEvents_hi: [
      'देवी गंगा ने शांतनु से विवाह कर सात वसुओं को नदी में विसर्जित कर शापमुक्त किया।',
      'आठवें बालक के समय शांतनु ने मौन तोड़ा; गंगा बालक देवव्रत को लेकर देवलोक चली गईं।',
      '१६ वर्ष बाद देवव्रत सभी शास्त्रों और दिव्यास्त्रों में पारंगत होकर हस्तिनापुर लौटे।',
      'शांतनु का सत्यवती से प्रेम हुआ, किंतु दाशराज ने सत्यवती के पुत्र को ही राजा बनाने की शर्त रखी।',
      'देवव्रत ने आजीवन ब्रह्मचर्य और राज्य त्याग की "भीष्म प्रतिज्ञा" ली और इच्छा-मृत्यु का वरदान पाया।',
      'विचित्रवीर्य की मृत्यु के उपरांत महर्षि व्यास द्वारा नियोग से धृतराष्ट्र, पांडु और विदुर का जन्म हुआ।'
    ],
    importantCharacters: [
      'King Shantanu (Noble emperor of the Lunar Dynasty)',
      'Goddess Ganga (Celestial river maiden and divine mother of Bhishma)',
      'Devavrata / Bhishma (Pillar of truth, celibate protector of Hastinapur)',
      'Queen Satyavati (Queen mother whose ambitions shaped royal succession)',
      'Sage Vyasa (Compiler of Vedas and spiritual father of the Kuru princes)'
    ],
    importantCharacters_te: [
      'శంతన మహారాజు (చంద్రవంశపు పవిత్ర చక్రవర్తి)',
      'గంగాదేవి (సురనది, భీష్ముని దివ్య జనని)',
      'దేవవ్రతుడు / భీష్మ పితామహుడు (అచంచల ప్రతిజ్ఞాశీలి, కురువంశ రక్షకుడు)',
      'సత్యవతి దేవి (హస్తినాపుర రాజమాత)',
      'వేదవ్యాస మహర్షి (మహాభారత కర్త, కురువంశ దాత)'
    ],
    importantCharacters_hi: [
      'महाराज शांतनु (चंद्रवंश के धर्मपरायण सम्राट)',
      'माता गंगा (भीष्म की दिव्य माता और देवनदी)',
      'देवव्रत / भीष्म (प्रतिज्ञा और त्याग के अमर प्रतीक)',
      'राजमाता सत्यवती (जिनकी शर्तों से कुरुवंश की दिशा बदली)',
      'महर्षि वेदव्यास (वेदों के संकलनकर्ता और पांडु-धृतराष्ट्र के पिता)'
    ],
    importantRelationships: [
      'Shantanu & Ganga → Parents of Devavrata (Bhishma)',
      'Shantanu & Satyavati → Parents of Chitrangada and Vichitravirya',
      'Sage Parashara & Satyavati → Parents of Sage Vyasa',
      'Sage Vyasa & Royal Widows → Fathers of Dhritarashtra (blind), Pandu (pale), and Vidura (wise)'
    ],
    importantRelationships_te: [
      'శంతనుడు & గంగ → దేవవ్రతుని (భీష్ముని) తల్లిదండ్రులు',
      'శంతనుడు & సత్యవతి → చిత్రాంగద, విచిత్రవీర్యుల తల్లిదండ్రులు',
      'పరాశర మహర్షి & సత్యవతి → వేదవ్యాస మహర్షి తల్లిదండ్రులు',
      'వ్యాస మహర్షి & రాణులు → ధృతరాష్ట్రుడు, పాండురాజు, విదురుల జననం'
    ],
    importantRelationships_hi: [
      'शांतनु और गंगा → भीष्म के माता-पिता',
      'शांतनु और सत्यवती → चित्रांगद और विचित्रवीर्य के माता-पिता',
      'पराशर और सत्यवती → महर्षि वेदव्यास के माता-पिता',
      'महर्षि व्यास और रानियाँ → धृतराष्ट्र, पांडु और विदुर के जनक'
    ],
    majorDecisions: [
      'Shantanu’s promise of non-interference to Ganga, and his decision to break it to protect his eighth child.',
      'Devavrata’s voluntary renunciation of the crown and his unbreakable vow of celibacy for his father’s happiness.',
      'Bhishma’s decision to honor Amba’s love for Salva, and his refusal to marry her due to his vow.',
      'Satyavati’s summoning of Sage Vyasa for the Niyoga ritual to save the Kuru throne from extinction.'
    ],
    majorDecisions_te: [
      'గంగాదేవికి ఇచ్చిన మాటను పక్కనపెట్టి ఎనిమిదవ బిడ్డ ప్రాణాలను కాపాడాలని శంతనుడు తీసుకున్న నిర్ణయం.',
      'తండ్రి సుఖం కోసం దేవవ్రతుడు చేసిన రాజ్య త్యాగం మరియు ఆజన్మ బ్రహ్మచర్య శపథం.',
      'అంబ మనసును గౌరవించి సాల్వ రాజు వద్దకు పంపడం, ప్రతిజ్ఞ కారణంగా ఆమెను వివాహం చేసుకోకపోవడం.',
      'వంశ రక్షణ కోసం సత్యవతి వేదవ్యాసుని పిలిపించి నియోగ ప్రక్రియ జరిపించడం.'
    ],
    majorDecisions_hi: [
      'शांतनु द्वारा आठवें बालक के प्राण बचाने के लिए गंगा से किया वचन तोड़ना।',
      'पिता के सुख हेतु देवव्रत का राज्याधिकार और वैवाहिक सुख का पूर्ण त्याग।',
      'भीष्म द्वारा अंबा को शाल्व के पास भेजना और अपनी प्रतिज्ञा पर दृढ़ रहना।',
      'सत्यवती द्वारा वंश रक्षा हेतु महर्षि व्यास को बुलाकर नियोग संपन्न कराना।'
    ],
    consequences: [
      'Devavrata becomes Bhishma, blessed with Iccha-Mrityu, remaining bound to protect the throne for generations.',
      'Princess Amba vows revenge, setting the stage for her rebirth as Shikhandi on Day 10 of Kurukshetra.',
      'Pandu becomes King instead of the sightless Dhritarashtra, laying the seed of lifelong envy in Dhritarashtra’s heart.',
      'The split between Pandu’s line (Pandavas) and Dhritarashtra’s line (Kauravas) is set into motion.'
    ],
    consequences_te: [
      'దేవవ్రతుడు భీష్ముడిగా మారి, ఇచ్ఛామృత్యు వరం పొంది తరతరాలుగా సింహాసనానికి రక్షకుడిగా నిలిచాడు.',
      'అంబ శపథం వల్ల భవిష్యత్తులో కురుక్షేత్ర 10వ రోజున శిఖండి ద్వారా భీష్మ పతనానికి బీజం పడింది.',
      'ధృతరాష్ట్రుడు అంధుడు కావడంతో పాండురాజు రాజు అయ్యాడు; ఇది ధృతరాష్ట్రునిలో అసూయ బీజాన్ని నాటింది.',
      'పాండవులు మరియు కౌరవుల మధ్య భవిష్యత్తు మహాయుద్ధానికి మూలకారణాలు ఇక్కడే ప్రారంభమయ్యాయి.'
    ],
    consequences_hi: [
      'भीष्म इच्छा-मृत्यु के वरदान के साथ कुरु सिंहासन के आजीवन रक्षक बन गए।',
      'अंबा के प्रतिशोध ने महाभारत के १०वें दिन शिखंडी के रूप में भीष्म के पतन का मार्ग प्रशस्त किया।',
      'धृतराष्ट्र के नेत्रहीन होने से पांडु राजा बने, जिससे हस्तिनापुर में ईर्ष्या के बीज पड़े।',
      'पांडवों और कौरवों के मध्य भविष्य के महाविनाशकारी संघर्ष की पृष्ठभूमि तैयार हुई।'
    ]
  },

  slides: [
    {
      title: 'The King and the River Goddess',
      content: 'King Shantanu met the divine Ganga and wed under an oath of silence. Ganga drowned seven sons to free cursed Vasus, but Shantanu saved the eighth: Devavrata.',
      narrationQuote: '"A promise bound by silence, a son forged by divine knowledge."',
      imagePrompt: 'King Shantanu and divine goddess Ganga by the holy swirling sacred river',
      visualTheme: 'celestial-river'
    },
    {
      title: 'The Terrible Vow of Devavrata',
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
