import { StoryPart } from '../../types/game';

export const PART_7_STORY: StoryPart = {
  partNumber: 7,
  title: 'The Peace Mission & Choosing Alliances',
  title_te: 'శాంతి రాయబారం & విశ్వరూప సందర్శనం',
  title_hi: 'शांतिदूत श्रीकृष्ण और विश्वरूप दर्शन',
  sanskritTitle: 'शान्तिदूतः विश्वरूपदर्शनञ्च',
  summary: 'The choice between the invincible Narayani Sena and unarmed Krishna, the supreme diplomatic mission to Hastinapur, Duryodhana’s refusal to yield five needles of land, and the cosmic revelation in the court.',
  summary_te: 'ద్వారకలో సైన్య ఎంపిక, హస్తినాపురానికి శ్రీకృష్ణుని రాయబారం, విదురుని ఇంట్లో ఆతిథ్యం, ఐదు ఊళ్ళను కూడా ఇవ్వనన్న దుర్యోధనుని అహంకారం, మరియు నిండు సభలో కృష్ణుని విశ్వరూప దర్శనం.',
  summary_hi: 'द्वारका में सैन्य चयन, हस्तिनापुर में शांतिदूत बनकर पधारे श्रीकृष्ण, विदुर के घर भाजी का भोग, पांच गांव देने से भी दुर्योधन का इनकार और भरी सभा में विराट विश्वरूप का प्रकटीकरण।',
  characterRewardId: 'krishna',

  charactersInPart: [
    {
      id: 'krishna_envoy',
      name: 'Lord Sri Krishna (Shantidoot)',
      name_te: 'శ్రీకృష్ణ పరమాత్మ (శాంతిదూత)',
      name_hi: 'भगवान श्रीकृष्ण (शांतिदूत)',
      title: 'Ambassador of Peace & Master of the Cosmos',
      title_te: 'శాంతి దూత & జగద్రక్షకుడు',
      title_hi: 'परम शांतिदूत एवं जगदीश्वर',
      relationship: 'Guide of the Pandavas; divine arbiter of destiny',
      relationship_te: 'పాండవుల ప్రాణసఖుడు; రాయబారిగా వచ్చిన భగవంతుడు',
      relationship_hi: 'पांडवों के आत्मसखा; धर्म की स्थापना हेतु आए युगावतार',
      intro: 'Offered Himself unarmed to Arjuna while giving His army to Duryodhana; traveled to Hastinapur to prevent the slaughter of millions.',
      intro_te: 'నిరాయుధుడిగా తాను అర్జునుని పక్షాన నిలిచి, సర్వ సైన్యాన్ని దుర్యోధనునికి ఇచ్చి, యుద్ధాన్ని ఆపడానికి రాయబారానికి వెళ్ళిన కరుణామయుడు.',
      intro_hi: 'अकेले निहत्थे रहकर अर्जुन के सारथी बने और करोड़ों प्राणों की रक्षा हेतु स्वयं शांतिदूत बनकर हस्तिनापुर पहुँचे।',
      avatarUrl: '/assets/wallpapers/krishna.jpg',
      role: 'mentor'
    },
    {
      id: 'duryodhana_stubborn',
      name: 'Crown Prince Duryodhana',
      name_te: 'దుర్యోధనుడు',
      name_hi: 'दुर्योधन',
      title: 'Monarch of Pride & War-Monger',
      title_te: 'అహంకార చక్రవర్తి & యుద్ధ కాంక్షి',
      title_hi: 'अहंकारी कौरव राजपुत्र',
      relationship: 'Commander of eleven Akshauhini divisions; cousin of Pandavas',
      relationship_te: 'పదకొండు అక్షౌహిణుల అధిపతి; కృష్ణుడిని బంధించబోయిన అహంకారి',
      relationship_hi: 'ग्यारह अक्षौहिणी सेना का स्वामी; जिसने शांति के प्रस्ताव को ठुकराया',
      intro: 'Sneered that he would not surrender even as much ground as the sharp tip of a needle without total war.',
      intro_te: '"సూది మోపనంత నేల కూడా యుద్ధం లేకుండా ఇవ్వను" అని శాంతిని కాలరాసిన మూర్ఖుడు.',
      intro_hi: '"बिना युद्ध के सुई की नोक बराबर भूमि भी नहीं दूँगा" कहकर महाविनाश को आमंत्रित करने वाला।',
      avatarUrl: '/assets/wallpapers/karna.jpg',
      role: 'adversary'
    },
    {
      id: 'arjuna_devotee',
      name: 'Arjuna (Nara)',
      name_te: 'అర్జునుడు (నరుడు)',
      name_hi: 'अर्जुन (नर)',
      title: 'Foremost Devotee & Celestial Bowman',
      title_te: 'అనన్య భక్తుడు & ధనుర్ధారి',
      title_hi: 'परम भक्त एवं सखा',
      relationship: 'Companion of Narayana; chose unarmed Krishna over millions of warriors',
      relationship_te: 'కృష్ణుని అడుగుల వద్ద నిలబడి, అపార సైన్యం కంటే కృష్ణుడే చాలనుకున్న భక్తుడు',
      relationship_hi: 'श्रीकृष्ण के चरणों में बैठकर केवल प्रभु का सान्निध्य मांगने वाले',
      intro: 'Sat humbly at Krishna’s feet in Dvaraka, weeping tears of joy when he chose the unarmed Lord over ten lakh soldiers.',
      intro_te: 'పది లక్షల నారాయణ సైన్యం కంటే నిరాయుధుడైన కృష్ణుని సాంగత్యమే ముల్లోకాల సంపద అని నమ్మిన వీరుడు.',
      intro_hi: 'नारायणी सेना के स्थान पर केवल निःशस्त्र भगवान को चुनकर परम भक्ति का उदाहरण प्रस्तुत करने वाले।',
      avatarUrl: '/assets/wallpapers/arjuna.jpg',
      role: 'hero'
    },
    {
      id: 'vidura_host',
      name: 'Mahatma Vidura',
      name_te: 'విదుర మహాత్ముడు',
      name_hi: 'महात्मा विदुर',
      title: 'Saintly Minister of Wisdom & Devotion',
      title_te: 'భక్తి ప్రపత్తుల నిలయం & ధర్మమూర్తి',
      title_hi: 'परम भक्त एवं नीतिज्ञ',
      relationship: 'Uncle of the Pandavas; host to Lord Krishna',
      relationship_te: 'కౌరవ సభలో ధర్మాన్ని బోధించిన విజ్ఞాని; కృష్ణునికి భక్తితో ఆతిథ్యమిచ్చినవాడు',
      relationship_hi: 'हस्तिनापुर के नीतिवान मंत्री जिनके घर श्रीकृष्ण ने भोग लगाया',
      intro: 'Turned away the royal palace delicacies to offer simple green leaves (bathua) to Krishna with tearful love.',
      intro_te: 'దుర్యోధనుని పంచభక్ష్య పరమాన్నాలను కాదని, ప్రేమతో ఆకుకూరను సమర్పించి పరమాత్ముని తృప్తిపరచిన పరమ భక్తుడు.',
      intro_hi: 'दुर्योधन के छप्पन भोग ठुकराकर जिसने प्रेम से भगवान को शाक-भाजी खिलाई।',
      avatarUrl: '/assets/wallpapers/sanatana-dharma.jpg',
      role: 'mentor'
    },
    {
      id: 'karna_tragic',
      name: 'Radheya Karna (King of Anga)',
      name_te: 'కర్ణుడు (రాధేయుడు)',
      name_hi: 'कर्ण (राधेय)',
      title: 'Incomparable Donor & Tragic Loyalist',
      title_te: 'దానవీర శూర కర్ణుడు',
      title_hi: 'दानवीर एवं निष्ठावान योद्धा',
      relationship: 'Eldest son of Kunti and Surya; sworn soulmate of Duryodhana',
      relationship_te: 'కుంతీ ప్రథమ పుత్రుడు; దుర్యోధనుని ప్రాణమిత్రుడు',
      relationship_hi: 'कुंती और सूर्य के ज्येष्ठ पुत्र; दुर्योधन के अभिन्न मित्र',
      intro: 'Learned his true royal birth from Krishna and Kunti, yet chose to stand with Duryodhana out of eternal gratitude.',
      intro_te: 'తాను పాండవుల పెద్దన్ననని తెలిసినప్పటికీ, నమ్ముకున్న మిత్రుడు దుర్యోధనుడిని విడిచిపెట్టలేని ధర్మ రక్షకుడు.',
      intro_hi: 'जन्म का रहस्य जानकर भी मित्रता के धर्म को निभाने हेतु पांडवों के पक्ष में जाने से इनकार करने वाले अमर वीर।',
      avatarUrl: '/assets/wallpapers/karna.jpg',
      role: 'adversary'
    },
    {
      id: 'kunti_mother',
      name: 'Mother Kunti (Pritha)',
      name_te: 'కుంతీదేవి (పృథ)',
      name_hi: 'माता कुंती (पृथा)',
      title: 'Suffering Mother of the Bharatas',
      title_te: 'భారత మాతృమూర్తి',
      title_hi: 'पांडवों और कर्ण की जन्मदात्री',
      relationship: 'Mother of Karna, Yudhishthira, Bhima, and Arjuna',
      relationship_te: 'కర్ణుని మరియు పాండవుల తల్లి',
      relationship_hi: 'महाभारत के प्रमुख वीरों की माता',
      intro: 'Revealed her maiden secret to Karna by the sacred Ganga, obtaining his solemn promise to spare four of her sons.',
      intro_te: 'గంగా తీరాన కర్ణుని వద్దకు వెళ్ళి నిజం చెప్పి, అర్జునుడు తప్ప మిగిలిన నలుగురు కుమారులను చంపనని మాట తీసుకున్న తల్లి.',
      intro_hi: 'गंगा तट पर कर्ण से सत्य प्रकट कर चारों पांडवों के प्राणों की भिक्षा मांगने वाली विवश माता।',
      avatarUrl: '/assets/wallpapers/draupadi.jpg',
      role: 'queen'
    }
  ],

  familyTree: {
    title: 'The Great Mobilization: 18 Akshauhinis Assemble',
    title_te: 'మహా సైన్యాల సమీకరణ & రాయబార సంబంధాలు',
    title_hi: 'अठारह अक्षौहिणी सेना और शांति-वार्ता',
    description: 'The political alignments of all kingdoms of Aryavarta into seven Pandava and eleven Kaurava Akshauhinis.',
    description_te: 'కురుక్షేత్ర రణరంగానికి సిద్ధమైన 18 అక్షౌహిణుల సైన్యాలు మరియు సంబంధాలు.',
    description_hi: 'आर्यावर्त के समस्त राजाओं का दो विशाल पक्षों (7 बनाम 11 अक्षौहिणी) में विभाजन।',
    nodes: [
      { id: 'krishna_t7', name: 'Sri Krishna', name_te: 'శ్రీకృష్ణుడు', name_hi: 'श्रीकृष्ण', clan: 'Yadava', generation: 3, isKeyCharacter: true, role: 'Unarmed Charioteer' },
      { id: 'arjuna_t7', name: 'Arjuna', name_te: 'అర్జునుడు', name_hi: 'अर्जुन', clan: 'Pandava', generation: 3, role: 'Chooses Krishna' },
      { id: 'duryodhana_t7', name: 'Duryodhana', name_te: 'దుర్యోధనుడు', name_hi: 'दुर्योधन', clan: 'Kaurava', generation: 3, role: 'Chooses Narayani Sena' },
      { id: 'karna_t7', name: 'Karna', name_te: 'కర్ణుడు', name_hi: 'कर्ण', clan: 'Kaurava', generation: 3, isKeyCharacter: true, role: 'Secret eldest Pandava' },
      { id: 'kunti_t7', name: 'Mother Kunti', name_te: 'కుంతీదేవి', name_hi: 'माता कुंती', clan: 'Pandava', generation: 2, role: 'Reveals secret to Karna' },
      { id: 'vidura_t7', name: 'Vidura', name_te: 'విదురుడు', name_hi: 'विदुर', clan: 'Kuru', generation: 2, role: 'Pure Devotee Host' },
      { id: 'balarama_t7', name: 'Balarama', name_te: 'బలరాముడు', name_hi: 'बलराम', clan: 'Yadava', generation: 3, role: 'Neutral Pilgrim' }
    ],
    links: [
      { from: 'arjuna_t7', to: 'krishna_t7', relationship: 'alliance', label: 'Chose the Lord Alone' },
      { from: 'duryodhana_t7', to: 'krishna_t7', relationship: 'alliance', label: 'Took Narayani Army' },
      { from: 'kunti_t7', to: 'karna_t7', relationship: 'parent_of', label: 'Secret Mother' },
      { from: 'karna_t7', to: 'duryodhana_t7', relationship: 'alliance', label: 'Unshakeable Loyalty' },
      { from: 'krishna_t7', to: 'vidura_t7', relationship: 'alliance', label: 'Dined on Spinach' }
    ]
  },

  illustratedPages: [
    {
      pageNumber: 1,
      title: 'The Awakening in Dvaraka: Two Princes at the Bedside',
      title_te: 'ద్వారకలో కృష్ణుని ఎంపిక: పాదాల వద్ద అర్జునుడు',
      title_hi: 'द्वारका में सैन्य चयन: चरणों में पार्थ',
      sceneTag: 'Chamber of Lord Krishna in Dvaraka',
      sceneTag_te: 'ద్వారకలోని శ్రీకృష్ణుని శయన మందిరం',
      sceneTag_hi: 'द्वारका का राजमहल',
      hookLine: 'Arriving simultaneously for military aid, one prince sat at the head of the bed, the other knelt at the feet.',
      hookLine_te: 'ఒకేసారి వచ్చిన ఇద్దరు రాకుమారులు: తలవైపు కూర్చున్న అహంకారం, పాదాల వద్ద వాలిన భక్తి.',
      hookLine_hi: 'एक ही समय पहुँचे दोनों योद्धा: सिरहाने बैठा अहंकार और चरणों में झुकी अनन्य भक्ति।',
      paragraphs: [
        'With the exile concluded, both camps dispatched messengers to kings across the earth. Realizing that the invincible Yadava legions of Dvaraka would decide the war, both Prince Duryodhana and Arjuna raced in person to Dvaraka.',
        'Arriving first, Duryodhana entered Krishna’s bedchamber where the Lord was sleeping. Swollen with royal vanity, Duryodhana refused to sit in an inferior position and occupied a carved golden throne placed right by Krishna’s head.',
        'A moment later, Arjuna arrived. Without looking for a seat, the great archer folded his hands and knelt with head bowed at Krishna’s lotus feet. When Krishna opened his eyes from divine slumber, his gaze naturally fell upon Arjuna first.'
      ],
      paragraphs_te: [
        'అజ్ఞాతవాసం ముగియగానే ఇరువైపులా సైన్యాలను సమీకరించడం మొదలైంది. యాదవ సైన్యం ఎటువైపు ఉంటే వారికే విజయం దక్కుతుందని భావించి దుర్యోధనుడు, అర్జునుడు ఇద్దరూ స్వయంగా ద్వారకకు పరుగు తీశారు.',
        'ముందుగా చేరిన దుర్యోధనుడు నిద్రిస్తున్న కృష్ణుని తలవైపు ఉన్న బంగారు సింహాసనంపై గర్వంగా కూర్చున్నాడు.',
        'కొద్దిసేపటికే వచ్చిన అర్జునుడు ఎలాంటి కుర్చీని కోరుకోకుండా, కృష్ణుని పాదపద్మాల వద్ద వినయంగా చేతులు జోడించి నిలబడ్డాడు. నిద్రలేచిన కృష్ణుని కళ్ళు సహజంగానే ముందుగా పాదాల వద్ద ఉన్న అర్జునునిపై పడ్డాయి.'
      ],
      paragraphs_hi: [
        'अज्ञातवास की समाप्ति पर दोनों पक्षों ने आर्यावर्त के राजाओं से सहायता मांगनी आरंभ की। द्वारका की नारायणी सेना को निर्णायक मानकर दुर्योधन और अर्जुन दोनों स्वयं द्वारका पहुँचे।',
        'दुर्योधन पहले पहुँचा और विश्राम कर रहे श्रीकृष्ण के सिरहाने रखे एक ऊंचे स्वर्ण सिंहासन पर अहंकारपूर्वक बैठ गया।',
        'इसके बाद अर्जुन आए। उन्होंने कोई आसन नहीं लिया, अपितु दोनों हाथ जोड़कर विनीत भाव से प्रभु के चरण-कमलों के पास खड़े हो गए। नेत्र खुलते ही श्रीकृष्ण की दृष्टि सबसे पहले अर्जुन पर पड़ी।'
      ],
      dialogueQuote: '"Welcome, Partha! Welcome, Suyodhana! What brings the lords of the Kuru dynasty to Dvaraka?"',
      dialogueQuote_te: '"రండి అర్జునా! రండి దుర్యోధనా! కురువంశ వీరులు ద్వారకకు ఎందుకు వచ్చారో చెప్పండి?"',
      dialogueQuote_hi: '"स्वागत है पार्थ! स्वागत है सुयोधन! कुरुश्रेष्ठ वीरों का द्वारका आगमन किस प्रयोजन से हुआ है?"',
      speaker: 'Lord Krishna awakening from rest',
      speaker_te: 'నిద్రలేస్తూ చిరునవ్వుతో శ్రీకృష్ణుడు',
      speaker_hi: 'नेत्र खोलते हुए भगवान श्रीकृष्ण के शब्द',
      imageUrl: '/assets/wallpapers/krishna.jpg',
      imageCaption: 'Lord Krishna resting on his couch, with proud Duryodhana at his head and humble Arjuna at his feet.',
      imageCaption_te: 'తలవైపు దుర్యోధనుడు, పాదాల వద్ద అర్జునుడు ఉండగా నిద్రలేస్తున్న శ్రీకృష్ణుడు.',
      imageCaption_hi: 'भगवान श्रीकृष्ण की शय्या के सिरहाने दुर्योधन और चरणों में अर्जुन का ऐतिहासिक दृश्य।'
    },
    {
      pageNumber: 2,
      title: 'The Great Choice: The Millions or the Master',
      title_te: 'నారాయణి సైన్యమా లేక నిరాయుధుడైన కృష్ణుడా?',
      title_hi: 'नारायणी सेना या निःशस्त्र भगवान',
      sceneTag: 'Throne Room of Dvaraka',
      sceneTag_te: 'ద్వారక దర్బారు',
      sceneTag_hi: 'द्वारका का राजसभा कक्ष',
      hookLine: 'Duryodhana claimed first arrival, but Krishna chose the younger man seen first to pick.',
      hookLine_te: '"నా పది లక్షల నారాయణ సైన్యమా, లేక యుద్ధం చేయని నిరాయుధుడనైన నేనా?" అని కృష్ణుని ఆఫర్.',
      hookLine_hi: '"एक ओर मेरी अजेय नारायणी सेना और दूसरी ओर शस्त्र न उठाने वाला मैं अकेला!"',
      paragraphs: [
        'Duryodhana spoke quickly: "I arrived first, Vasudeva; by righteous tradition, your aid belongs to me!" Krishna smiled warmly: "It is true you arrived first, Suyodhana, but my eyes saw Arjuna first. Furthermore, tradition dictates the younger should choose first."',
        '"I divide my power into two parts: on one side, my invincible army of ten hundred thousand fierce Gopas known as the Narayani Sena, fully armed and equipped. On the other side stands myself alone—refusing to bear arms, refusing to strike a blow, serving merely as a companion. Choose, Arjuna!"',
        'Without a microsecond of hesitation, Arjuna bent down, touched Krishna\'s feet with tears of bliss, and said: "My Lord, let them take all the armies of heaven and earth; I choose You alone!" Duryodhana could barely conceal his gleeful laughter, thinking Arjuna a monumental fool, and rushed away with the entire colossal Yadava army.'
      ],
      paragraphs_te: [
        '"నేను ముందు వచ్చాను కనుక నీ సహాయం నాకే దక్కాలి" అని దుర్యోధనుడు అన్నాడు. కృష్ణుడు నవ్వి: "నువ్వు ముందు వచ్చినా నా కళ్ళు ముందుగా చూసింది అర్జునుడినే. పైగా వయసులో చిన్నవాడైన అర్జునుడికే మొదటి ఎంపిక అవకాశం ఉంటుంది."',
        '"ఒకవైపు పది లక్షల అజేయ నారాయణ సైన్యం ఉంటుంది; మరోవైపు ఆయుధం పట్టని, యుద్ధం చేయని నేను మాత్రమే ఉంటాను. అర్జునా! నీకు ఏది కావాలో ఎంచుకో!" అన్నాడు కృష్ణుడు.',
        'అర్జునుడు క్షణం కూడా ఆలోచించకుండా కృష్ణుని పాదాలు పట్టుకుని: "కృష్ణా! లోకంలోని సైన్యాలన్నీ వారికి వెళ్ళనీ, నాకు నీవు మాత్రమే చాలు!" అన్నాడు. దుర్యోధనుడు అర్జునుడిని వెర్రివాడనుకుని మురిసిపోతూ, పది లక్షల సైన్యాన్ని తీసుకుని హస్తినాపురానికి వెళ్ళిపోయాడు.'
      ],
      paragraphs_hi: [
        'दुर्योधन ने कहा: "मैं पहले आया हूँ, अतः सहायता पर पहला अधिकार मेरा है!" श्रीकृष्ण ने कहा: "तुम पहले आए, किंतु मैंने पहले अर्जुन को देखा। और मर्यादा यह है कि छोटे को पहले अवसर दिया जाए।"',
        '"एक ओर मेरी नारायणी सेना के दस लाख दुर्धर्ष योद्धा होंगे जो अस्त्र-शस्त्र से सुसज्जित लड़ेंगे। दूसरी ओर मैं अकेला रहूँगा—निःशस्त्र, बिना कोई बाण चलाए, केवल सारथी के रूप में। पार्थ! चुनो!"',
        'अर्जुन ने बिना एक पल गंवाए श्रीकृष्ण के चरण पकड़ लिए: "प्रभु! मुझे संसार की कोई सेना नहीं चाहिए, मुझे केवल आपका सान्निध्य चाहिए!" दुर्योधन मन ही मन अर्जुन की मूर्खता पर हँसता हुआ पूरी नारायणी सेना लेकर प्रसन्नतापूर्वक लौट गया।'
      ],
      dialogueQuote: '"What use is the army of the universe if the Lord of the universe is not beside me?"',
      dialogueQuote_te: '"జగద్రక్షకుడైన భగవంతుడే నా పక్కన లేనప్పుడు, ఈ ప్రపంచ సైన్యాలతో నాకేం పని?"',
      dialogueQuote_hi: '"जब संपूर्ण सृष्टि के स्वामी मेरे साथ हैं, तो मुझे संसार की किसी सेना की आवश्यकता नहीं!"',
      speaker: 'Arjuna choosing Lord Krishna',
      speaker_te: 'కృష్ణుడిని ఎంచుకుంటూ అర్జునుని భక్తి',
      speaker_hi: 'श्रीकृष्ण का वरण करते हुए अर्जुन के उद्गार',
      imageUrl: '/assets/wallpapers/krishna.jpg',
      imageCaption: 'Arjuna embracing Lord Krishna while Duryodhana departs smiling with the Yadava legions.',
      imageCaption_te: 'శ్రీకృష్ణుని శరణు వేడుకుంటున్న అర్జునుడు; సైన్యంతో వెళ్లిపోతున్న దుర్యోధనుడు.',
      imageCaption_hi: 'श्रीकृष्ण का पावन चरण स्पर्श करते अर्जुन और सेना लेकर विदा होता दुर्योधन।'
    },
    {
      pageNumber: 3,
      title: 'The Envoy of Peace: Krishna Walks to Hastinapur',
      title_te: 'శాంతి రాయబారిగా హస్తినాపురానికి శ్రీకృష్ణుడు',
      title_hi: 'शांतिदूत बनकर हस्तिनापुर गमन',
      sceneTag: 'High Road to Hastinapur & City Gates',
      sceneTag_te: 'హస్తినాపుర రాజమార్గం',
      sceneTag_hi: 'हस्तिनापुर का मुख्य राजमार्ग',
      hookLine: 'Before unleashing the storm of arrows, the Supreme Soul offered a final bridge of mercy.',
      hookLine_te: 'కోట్లాది మంది రక్తం చిందించే యుద్ధాన్ని నివారించడానికి స్వయంగా శాంతిదూతగా కదిలిన పరమాత్మ.',
      hookLine_hi: 'महाविनाश को टालने हेतु जगदीश्वर स्वयं चलकर आए धृतराष्ट्र की राजसभा में।',
      paragraphs: [
        'Seven Akshauhinis assembled around the Pandavas in Upaplavya; eleven Akshauhinis rallied around Duryodhana in Hastinapur. The earth groaned under the weight of iron chariots and war elephants. War was a hairsbreadth away.',
        'Yet Emperor Yudhishthira, with peace in his heart, turned to Krishna: "O Janardana, go to Hastinapur as our ambassador. Even if our rights are curtailed, avert this catastrophic bloodbath if honor permits." Draupadi held her unbraided hair and wept: "O Krishna, remember this hair dragged in court; let not peace be bought with cowardice!" Krishna assured her: "Weep not, Panchali; the wives of those who insulted thee shall soon weep over their husbands’ corpses."',
        'Mounted on his chariot driven by Daruka, Lord Krishna journeyed to Hastinapur. The entire city emptied into the streets to catch a glimpse of the dark, lotus-eyed Lord, scattering flowers and burning incense before his wheels.'
      ],
      paragraphs_te: [
        'ఉపప్లావ్యంలో పాండవుల వైపు ఏడు అక్షౌహిణులు, హస్తినాపురంలో కౌరవుల వైపు పదకొండు అక్షౌహిణుల సైన్యాలు మొహరించాయి. భూమి సైన్యాల బరువుతో కంపించింది.',
        'ధర్మరాజు కృష్ణునితో వేడుకున్నాడు: "కృష్ణా! నీవు హస్తినాపురానికి శాంతిదూతగా వెళ్ళు. మనకు కొంచెం అన్యాయం జరిగినా సరే, కోట్లాది మంది ప్రాణాలను కాపాడే ప్రయత్నం చేయి." ద్రౌపది తన విరబోసిన కురులను చూపిస్తూ: "కృష్ణా! నిండు సభలో జరిగిన అవమానాన్ని మర్చిపోకు" అని రోదించింది. "బాధపడకు ద్రౌపది, నిన్ను అవమానించిన వారి భార్యలు త్వరలోనే వితంతువులై రోదిస్తారు" అని కృష్ణుడు అభయమిచ్చాడు.',
        'హస్తినాపురానికి విచ్చేసిన శ్రీకృష్ణుడిని చూడటానికి ప్రజలంతా వీధుల్లోకి వచ్చి పూలవాన కురిపించారు.'
      ],
      paragraphs_hi: [
        'उपप्लव्य में पांडवों के पास 7 अक्षौहिणी और हस्तिनापुर में कौरवों के पास 11 अक्षौहिणी सेना एकत्र हो चुकी थी। युद्ध का नगाड़ा बजने ही वाला था।',
        'युधिष्ठिर ने हाथ जोड़कर कहा: "हे माधव! आप स्वयं हस्तिनापुर जाकर शांति का अंतिम प्रयास कीजिए। यदि कुल की मर्यादा बचे, तो हम थोड़ा समझौता भी कर लेंगे।" द्रौपदी ने अपने खुले केश दिखाकर आंसुओं से कहा: "हे गोविंद! भरी सभा के उस अपमान को मत भूलना!" प्रभु ने कहा: "धीरज रखो पांचाली! जिन्होंने तुम्हारा अपमान किया, उनकी स्त्रियाँ शीघ्र ही समरभूमि में विलाप करेंगी।"',
        'श्रीकृष्ण दारुक के रथ पर सवार होकर हस्तिनापुर पहुँचे। भगवान के दर्शन हेतु नगर की सारी प्रजा सड़कों पर उमड़ पड़ी और पुष्पवर्षा करने लगी।'
      ],
      dialogueQuote: '"I go to Hastinapur not because I doubt our victory, but so history may never say we failed to offer peace."',
      dialogueQuote_te: '"మన విజయంపై సందేహంతో కాదు నేను వెళ్తున్నది; శాంతి కోసం ప్రయత్నించలేదని చరిత్ర మనల్ని నిందించకూడదని వెళ్తున్నాను."',
      dialogueQuote_hi: '"मैं शांति का प्रस्ताव लेकर इसलिए जा रहा हूँ ताकि भविष्य यह न कहे कि हमने विनाश रोकने का प्रयास नहीं किया।"',
      speaker: 'Lord Krishna departing for Hastinapur',
      speaker_te: 'రాయబారానికి బయలుదేరుతూ శ్రీకృష్ణుడు',
      speaker_hi: 'हस्तिनापुर प्रस्थान करते हुए श्रीकृष्ण के विचार',
      imageUrl: '/assets/wallpapers/krishna.jpg',
      imageCaption: 'Lord Krishna arriving in his divine chariot at the golden archways of Hastinapur.',
      imageCaption_te: 'హస్తినాపుర రాజతోరణాల వద్దకు చేరుకున్న శ్రీకృష్ణుని రథం.',
      imageCaption_hi: 'हस्तिनापुर के भव्य सिंहद्वार पर शांतिदूत श्रीकृष्ण का पावन आगमन।'
    },
    {
      pageNumber: 4,
      title: 'The Feast of Duryodhana & The Spinach of Vidura',
      title_te: 'దుర్యోధనుని విందు తిరస్కరణ & విదురుని ఆకుకూర విందు',
      title_hi: 'दुर्योधन के छप्पन भोग और विदुर की भाजी',
      sceneTag: 'Vidura’s Humble Thatched Cottage',
      sceneTag_te: 'విదురుని పేద కుటీరం',
      sceneTag_hi: 'महात्मा विदुर की साधारण कुटिया',
      hookLine: 'Refusing palaces of gold and five-course feasts, the Lord dined on simple spinach cooked with tears of love.',
      hookLine_te: 'దుర్యోధనుని పంచభక్ష్య పరమాన్నాలను కాదని, విదురుని ఇంట్లో ప్రేమతో వండిన ఆకుకూరను ఆరగించిన భక్తవత్సలుడు.',
      hookLine_hi: 'राजमहल के छप्पन भोग ठुकराकर जिसने भक्त विदुर के घर प्रेम की सात्विक भाजी का भोग लगाया।',
      paragraphs: [
        'Duryodhana had prepared a glittering banquet with five-star royal delicacies and arranged opulent guest pavilions to seduce Krishna. Entering the court, Krishna declined every lavish gift and banquet.',
        '"Food is eaten either when there is famine and hunger, or when it is offered with pure love," Krishna spoke plainly to Duryodhana. "I am not starving, and thou hast neither love for me nor justice in thy heart. How then can I accept thy hospitality?"',
        'Turning away from the imperial palace, Krishna walked directly to the humble thatched dwelling of Mahatma Vidura. There, sitting cross-legged on a worn reed mat, the Lord of Vaikuntha relished a simple meal of boiled green bathua spinach and wild grains, served with hands trembling in ecstatic devotion.'
      ],
      paragraphs_te: [
        'శ్రీకృష్ణుడిని ఆకట్టుకోవడానికి దుర్యోధనుడు రాజభవనంలో అద్భుతమైన విందును, రత్నాలతో అలంకరించిన విడిదిని సిద్ధం చేశాడు. కానీ కృష్ణుడు వాటన్నింటినీ తిరస్కరించాడు.',
        '"దుర్యోధనా! ఆకలి ఉన్నప్పుడైనా తినాలి, లేదా ప్రేమతో పెట్టినప్పుడైనా తినాలి. నాకు ఆకలి లేదు, నీ మనసులో నాపై గాని, ధర్మంపై గాని ఎలాంటి ప్రేమ లేదు. అలాంటప్పుడు నీ విందును ఎలా స్వీకరిస్తాను?" అని తిరస్కరించాడు.',
        'రాజభవనాన్ని వదిలి విదురుని చిన్న కుటీరానికి వెళ్ళాడు. అక్కడ భక్తితో కన్నీరు కారుస్తూ విదురుడు సమర్పించిన సాదాసీదా ఆకుకూరను పరమానందంతో అమృతంలా ఆరగించాడు భగవంతుడు.'
      ],
      paragraphs_hi: [
        'दुर्योधन ने श्रीकृष्ण को अपने पक्ष में करने हेतु स्वर्ण के महलों और छप्पन प्रकार के स्वादिष्ट व्यंजनों का भव्य आयोजन किया था। किंतु भगवान ने सब कुछ अस्वीकार कर दिया।',
        'प्रभु ने स्पष्ट कहा: "दुर्योधन! मनुष्य भोजन तब करता है जब भूख हो, या जब खिलाने वाले के हृदय में निष्कपट प्रेम हो। मुझे न भूख है और न तुम्हारे मन में मेरे प्रति कोई सद्भाव। फिर मैं तुम्हारा अन्न कैसे ग्रहण करूँ?"',
        'राजमहल छोड़कर श्रीकृष्ण सीधे महात्मा विदुर की दीन कुटिया में पहुँचे। वहाँ फटी चटाई पर बैठकर प्रभु ने विदुर और विदुरानी द्वारा अश्रुपूरित नेत्रों से परोसी गई बथुए की भाजी का बड़े चाव से भोग लगाया।'
      ],
      dialogueQuote: '"Thy feasts reek of arrogance and unrighteousness; Vidura’s dry leaves are fragrant with pure devotion."',
      dialogueQuote_te: '"నీ విందు అహంకారంతో నిండివుంది; విదురుని ఆకుకూర పవిత్ర భక్తి సువాసనలను వెదజల్లుతోంది."',
      dialogueQuote_hi: '"दुर्योधन! तुम्हारे पकवानों में पाप और अहंकार की गंध है, जबकि विदुर के रूखे-सूखे साग में परम प्रेम की मिठास है।"',
      speaker: 'Sri Krishna rejecting Duryodhana’s banquet',
      speaker_te: 'దుర్యోధనునికి సమాధానమిస్తూ శ్రీకృష్ణుడు',
      speaker_hi: 'दुर्योधन का निमंत्रण ठुकराते हुए श्रीकृष्ण',
      imageUrl: '/assets/wallpapers/sanatana-dharma.jpg',
      imageCaption: 'Lord Krishna seated on a simple straw mat at Vidura’s cottage, partaking of humble food.',
      imageCaption_te: 'విదురుని కుటీరంలో సాదాసీదా ఆకుకూరను ఆరగిస్తున్న శ్రీకృష్ణ పరమాత్మ.',
      imageCaption_hi: 'विदुर की कुटिया में प्रेमपूर्वक सात्विक भोजन ग्रहण करते द्वारकाधीश श्रीकृष्ण।'
    },
    {
      pageNumber: 5,
      title: 'The Historic Assembly: The Plea for Five Villages',
      title_te: 'చారిత్రక రాజసభ & ఐదు గ్రామాల శాంతి ప్రతిపాదన',
      title_hi: 'ऐतिहासिक राजसभा और केवल पांच गांवों की मांग',
      sceneTag: 'Grand Imperial Assembly of Hastinapur',
      sceneTag_te: 'హస్తినాపుర మహాసభ',
      sceneTag_hi: 'हस्तिनापुर की भव्य राजसभा',
      hookLine: '"Grant them but five villages—one for each brother—and avert the cremation of Aryavarta."',
      hookLine_te: '"ఐదుగురు పాండవులకు కేవలం ఐదు ఊళ్ళను ఇవ్వండి, సమస్త మానవాళి నాశనాన్ని ఆపండి."',
      hookLine_hi: '"पांचों पांडवों को केवल पांच छोटे गांव दे दो और आर्यावर्त को श्मशान बनने से बचा लो।"',
      paragraphs: [
        'The next morning, Lord Krishna entered the grand assembly hall of the Kurus. Golden thrones held King Dhritarashtra, Grandsire Bhishma, Guru Drona, Kripa, Vidura, Shakuni, Karna, and the hundred Kaurava brothers. The atmosphere was charged with breathless suspense.',
        'Krishna spoke in a voice resonant like rolling thunder clouds: "O Emperor Dhritarashtra, peace lies within your grasp. The Pandavas, having endured thirteen years of forest misery, seek not revenge but reconciliation. Return their rightful half of the ancestral realm."',
        '"If half the realm seems too burdensome to your possessive heart," continued Krishna, turning gently toward Duryodhana, "grant them merely five small villages: Indiraprastha, Vrikaprastha, Jayanta, Varanavata, and any fifth. Let each brother rule a single hamlet. They shall live in contentment, and your sons shall rule the remaining vast empire in peace!"'
      ],
      paragraphs_te: [
        'మరుసటి రోజు ఉదయం శ్రీకృష్ణుడు హస్తినాపుర మహాసభలో అడుగుపెట్టాడు. ధృతరాష్ట్రుడు, భీష్ముడు, ద్రోణుడు, విదురుడు, శకుని, కర్ణుడు, దుర్యోధనాదులతో సభ కిటకిటలాడుతోంది.',
        'కృష్ణుడు గంభీర స్వరంతో పలికాడు: "ధృతరాష్ట్ర మహారాజా! శాంతి మీ చేతుల్లోనే ఉంది. పాండవులు పదమూడేళ్ళ కష్టాలను అనుభవించి కూడా ప్రతీకారం కోరుకోవడం లేదు. వారి పూర్వీకుల రాజ్యంలో వారికి దక్కాల్సిన భాగాన్ని వారికివ్వండి."',
        'ఒకవేళ సగం రాజ్యం ఇవ్వడం భారంగా అనిపిస్తే: "పాండవులైన ఐదుగురు సోదరులకు కేవలం ఐదు చిన్న గ్రామాలను ఇవ్వండి: ఇంద్రప్రస్థం, వృకప్రస్థం, జయంతం, వారణావతం మరియు మరొక ఊరు. వారు సంతృప్తిగా బతుకుతారు, మిగిలిన సమస్త రాజ్యాన్ని మీరే ఏలుకోండి!" అని కృష్ణుడు శాంతిని ప్రతిపాదించాడు.'
      ],
      paragraphs_hi: [
        'अगले दिन श्रीकृष्ण कुरु राजसभा में पधारे। धृतराष्ट्र, भीष्म, द्रोण, कृप, विदुर, कर्ण और दुर्योधन आदि सभी उपस्थित थे।',
        'श्रीकृष्ण ने मेघ के समान गंभीर स्वर में कहा: "महाराज धृतराष्ट्र! शांति आपके हाथ में है। पांडव 13 वर्ष के कष्ट भोगकर भी युद्ध नहीं, सुलह चाहते हैं। उन्हें उनके अधिकार का आधा राज्य लौटा दीजिए।"',
        'फिर दुर्योधन की ओर देखकर बोले: "यदि आधा राज्य देना संभव न हो, तो पांचों भाइयों के लिए केवल पांच छोटे गांव दे दो: इंद्रप्रस्थ, वृकप्रस्थ, जयंती, वारणावत और कोई भी पांचवां गांव। वे संतुष्ट रहेंगे और कुरुवंश महाविनाश से बच जाएगा!"'
      ],
      dialogueQuote: '"Give them five villages, O King of Kings, and preserve this glorious lineage from utter extinction."',
      dialogueQuote_te: '"కేవలం ఐదు గ్రామాలు ఇవ్వండి రాజా, కురువంశాన్ని సమూల నాశనం కాకుండా కాపాడుకోండి."',
      dialogueQuote_hi: '"केवल पांच गांव देकर, हे राजन, इस प्राचीन और प्रतापी कुल को भस्म होने से बचा लीजिए।"',
      speaker: 'Lord Krishna pleading for peace',
      speaker_te: 'శాంతి కోసం అభ్యర్థిస్తున్న శ్రీకృష్ణుడు',
      speaker_hi: 'कुरु सभा में श्रीकृष्ण की शांति अपील',
      imageUrl: '/assets/wallpapers/krishna.jpg',
      imageCaption: 'Lord Krishna standing majestically in the center of the Kuru Sabha, appealing for righteousness.',
      imageCaption_te: 'సభ మధ్యలో నిలబడి శాంతిని బోధిస్తున్న శ్రీకృష్ణ పరమాత్మ.',
      imageCaption_hi: 'हस्तिनापुर की राजसभा में शांति का संदेश देते परम पुरुषोत्तम श्रीकृष्ण।'
    },
    {
      pageNumber: 6,
      title: 'The Insolence of Duryodhana: Not a Needlepoint of Earth',
      title_te: 'దుర్యోధనుని అహంకారం: సూది మోపనంత నేల కూడా ఇవ్వను!',
      title_hi: 'दुर्योधन का दुराग्रह: सुई की नोक बराबर भूमि नहीं!',
      sceneTag: 'Throne Room Floor of Hastinapur',
      sceneTag_te: 'హస్తినాపుర సభా ప్రాంగణం',
      sceneTag_hi: 'राजसभा का दृश्य',
      hookLine: '"Without war, I shall not yield even so much earth as is pierced by the sharp point of a needle!"',
      hookLine_te: '"యుద్ధం లేకుండా సూది మొన మోపినంత భూమిని కూడా ఆ పాండవులకు ఇవ్వను!"',
      hookLine_hi: '"बिना युद्ध के मैं पांडवों को सुई की तीखी नोक के बराबर भी जमीन नहीं दूँगा!"',
      paragraphs: [
        'Bhishma, Drona, and Vidura joined their voices in desperate consensus: "Listen to the Lord, Duryodhana! Yield five villages and save our sons, our kingdom, and our souls!"',
        'Duryodhana leaped from his golden throne, his face twisted in venomous arrogance. Slapping his thigh, he sneered: "Neither out of fear of your Pandavas, nor out of reverence for your words, Krishna, will I concede anything!"',
        '"As long as breath remains in my chest, I shall not grant them five towns, nor five hamlets, nor five huts! Without war, I shall not part with even as much soil as can be pierced by the point of a needle (Suchyagram Naiva Dasyami Bina Yuddhena Keshava)!"'
      ],
      paragraphs_te: [
        'భీష్ముడు, ద్రోణుడు, విదురుడు అందరూ ముక్తకంఠంతో వేడుకున్నారు: "దుర్యోధనా! కృష్ణుని మాట విను, ఐదు ఊళ్ళిచ్చి మన పిల్లలను, రాజ్యాన్ని కాపాడు!"',
        'దుర్యోధనుడు పిచ్చెక్కినట్లు లేచి నిలబడ్డాడు. తొడ చరుస్తూ: "పాండవులంటే నాకు భయం లేదు, నీవంటే గౌరవమూ లేదు కృష్ణా!" అని అరిచాడు.',
        '"నా ప్రాణం ఉన్నంతవరకు వారికి ఐదు ఊళ్ళు కాదు కదా, ఐదు గుడిసెలు కూడా ఇవ్వను. సూది మొన మోపనంత నేల కూడా యుద్ధం లేకుండా ఆ పాండవులకు ఇచ్చే ప్రసక్తే లేదు!" అని తేల్చి చెప్పాడు.'
      ],
      paragraphs_hi: [
        'भीष्म, द्रोण और विदुर ने एक स्वर में कहा: "दुर्योधन! वासुदेव का कहना मान लो। पांच गांव देकर कुल की रक्षा कर लो!"',
        'किंतु दुर्योधन क्रोध से पागल हो उठा। उसने अपनी जंघा ठोककर कहा: "कृष्ण! न तो मुझे तुम्हारे पांडवों का भय है और न ही तुम्हारी बातों का कोई आदर!"',
        '"जब तक मुझमें प्राण हैं, मैं उन्हें पांच नगर तो क्या, पांच झोपड़ियाँ भी नहीं दूँगा। बिना युद्ध के सुई की नोक जितनी जमीन भी पांडवों को नहीं मिलेगी!"'
      ],
      dialogueQuote: '"Suchyagram Naiva Dasyami Bina Yuddhena Keshava!"',
      dialogueQuote_te: '"సూచ్యగ్రం నైవ దాస్యామి వినా యుద్ధేన కేశవ!"',
      dialogueQuote_hi: '"सूच्यग्रं नैव दास्यामि विना युद्धेन केशव!"',
      speaker: 'Duryodhana refusing five villages',
      speaker_te: 'శాంతిని కాలరాస్తున్న దుర్యోధనుడు',
      speaker_hi: 'दुर्योधन का अंतिम हठ',
      imageUrl: '/assets/wallpapers/karna.jpg',
      imageCaption: 'The arrogant Duryodhana defying Lord Krishna before the appalled assembly of elders.',
      imageCaption_te: 'పెద్దల ముందు శ్రీకృష్ణుని మాటలను ధిక్కరిస్తున్న దుర్యోధనుడు.',
      imageCaption_hi: 'भरी सभा में श्रीकृष्ण के शांति प्रस्ताव को अहंकार से ठुकराता दुर्योधन।'
    },
    {
      pageNumber: 7,
      title: 'The Attempted Capture & The Blazing Vishwaroopa',
      title_te: 'కృష్ణుని బంధించే కుట్ర & నిండు సభలో విశ్వరూప దర్శనం',
      title_hi: 'बंधन का षड्यंत्र और विराट विश्वरूप दर्शन',
      sceneTag: 'Center of the Kuru Court',
      sceneTag_te: 'కురు మహాసభ మధ్యలో',
      sceneTag_hi: 'हस्तिनापुर की राजसभा का मध्य',
      hookLine: 'He commanded iron chains to bind the Infinite, and was blinded by a million blazing suns.',
      hookLine_te: 'అనంతుడైన భగవంతుడిని సంకెళ్ళతో బంధించబోయి, వేలాది సూర్యుల విశ్వరూపాన్ని చూసి వణికిపోయిన సభ.',
      hookLine_hi: 'प्रभु को बेड़ियों में जकड़ने का आदेश दिया, और हजारों सूर्यों के समान विश्वरूप देखकर आंखें चौंधिया गईं।',
      paragraphs: [
        'Blinded by madness, Duryodhana whispered to Shakuni and Dushasana: "This Krishna is the soul and breath of the Pandavas. If we chain him and lock him in the dungeons, the Pandavas will collapse without striking a blow! Seize him!"',
        'Lord Krishna burst into laughter, a sound like ocean tides crashing upon granite cliffs: "Fool! Dost thou think I am alone here, that thou canst bind Me with petty iron links?"',
        'At that word, the Lord expanded His form. The roof of the palace vanished into infinite cosmic space. From His shoulders and chest blazed Brahma, Shiva, Indra, the twelve Adityas, and the Rudras. From His arms shot lightning bolts; from His mouth flowed raging fires and stars. On His chest walked the Pandavas, while into His flaming jaws plunged Duryodhana, Karna, and the Kaurava princes, crushed like moths! The blind Dhritarashtra was granted divine sight for a few terrified moments, weeping in awe: "O Lord, take away my sight once more; having seen Thy universal majesty, I desire to behold nothing else on earth!"'
      ],
      paragraphs_te: [
        'మతిభ్రమించిన దుర్యోధనుడు శకునికి సైగ చేశాడు: "పాండవులకు కృష్ణుడే ప్రాణం. ఇతన్ని బంధించి జైల్లో వేస్తే పాండవులు ఆటోమేటిక్‌గా లొంగిపోతారు. సైనికులారా! పట్టుకోండి!"',
        'శ్రీకృష్ణుడు నవ్వాడు. ఆ నవ్వు సముద్రాల ఘోషలా వినిపించింది: "ఓరీ మూర్ఖుడా! నేను ఒక్కడినే ఉన్నానని భ్రమపడుతున్నావా? నన్ను సంకెళ్ళతో బంధించగలవా?"',
        'ఆ క్షణంలో కృష్ణుడు తన విశ్వరూపాన్ని ప్రదర్శించాడు. సభా భవనం అదృశ్యమైంది. వేలాది సూర్యుల కాంతితో కృష్ణుని శరీరం నుండి బ్రహ్మ, శివుడు, ఇంద్రుడు, సకల దేవతలు కనిపించారు. ఆయన నోటి నుండి అగ్నిజ్వాలలు, నక్షత్రాలు వెలువడ్డాయి. ఆ నోటిలోని దంతాల మధ్య దుర్యోధన కర్ణాదులు నలిగిపోతూ కనిపించారు! ధృతరాష్ట్రునికి క్షణకాలం దివ్య దృష్టి లభించి ఆ దివ్య రూపాన్ని చూసి సాష్టాంగపడ్డాడు: "స్వామీ! ఈ రూపాన్ని చూసిన తర్వాత నాకీ కళ్ళు వద్దు, నన్ను మళ్ళీ అంధుడిని చేయి" అని వేడుకున్నాడు.'
      ],
      paragraphs_hi: [
        'पागलपन में दुर्योधन ने आदेश दिया: "कृष्ण ही पांडवों की आत्मा है। इसे जंजीरों में बांधकर बंदी बना लो, पांडव स्वतः घुटने टेक देंगे!"',
        'भगवान श्रीकृष्ण अट्टहास कर उठे: "मूर्ख! क्या तू समझता है कि मैं यहाँ अकेला हूँ और तू मुझे लोहे की बेड़ियों में बांध सकता है?"',
        'उसी क्षण प्रभु ने अपना विराट विश्वरूप प्रकट कर दिया। महल की छत विलीन हो गई। श्रीकृष्ण के श्रीअंगों से ब्रह्मा, शिव, इंद्र, सूर्य और समस्त देवता प्रज्वलित हो उठे। मुख से प्रलयंकारी अग्नि निकलने लगी। उनके दाढ़ों के बीच दुर्योधन और कौरव योद्धा पतंगों की भांति पिसते हुए दिखाई दिए! अंधे धृतराष्ट्र को क्षणभर के लिए दिव्य दृष्टि मिली; वे थर-थर कांपते हुए गिर पड़े: "हे गोविंद! इस अलौकिक रूप को देखने के बाद अब मुझे सांसारिक आँखें नहीं चाहिए, मुझे पुनः अंधा कर दीजिए!"'
      ],
      dialogueQuote: '"Can chains of mortal iron bind Him in whom galaxies and universes reside?"',
      dialogueQuote_te: '"సమస్త బ్రహ్మాండాలు ఇమిడివున్న పరమాత్ముని నీ ఇనుప సంకెళ్ళు బంధించగలవా దుర్యోధనా?"',
      dialogueQuote_hi: '"जिसके उदर में अनंत कोटि ब्रह्मांड घूमते हैं, क्या उसे लोहे की सांकलें बांध सकती हैं?"',
      speaker: 'Vidura rebuking the terrified court',
      speaker_te: 'వణికిపోతున్న సభతో విదురుడు',
      speaker_hi: 'कांपती हुई सभा को विदुर की फटकार',
      imageUrl: '/assets/wallpapers/krishna.jpg',
      imageCaption: 'The multi-armed, multi-faced cosmic Vishwaroopa of Sri Krishna illuminating the assembly hall.',
      imageCaption_te: 'హస్తినాపుర సభలో శ్రీకృష్ణుని అనంత విశ్వరూప దర్శనం.',
      imageCaption_hi: 'हस्तिनापुर की सभा में भगवान श्रीकृष्ण का दैदीप्यमान विराट विश्वरूप।'
    },
    {
      pageNumber: 8,
      title: 'The Secret by the River: Kunti and Karna',
      title_te: 'గంగా తీరాన పవిత్ర రహస్యం: కుంతి & కర్ణుడు',
      title_hi: 'गंगा तट पर माता कुंती और कर्ण का मिलन',
      sceneTag: 'Banks of the Sacred River Ganga at Sunset',
      sceneTag_te: 'సూర్యాస్తమయ వేళ పవిత్ర గంగా తీరం',
      sceneTag_hi: 'सूर्यास्त के समय गंगा का पावन तट',
      hookLine: 'A weeping mother revealed the golden armor beneath his rags, but loyalty to friendship could not be bought.',
      hookLine_te: 'తాను కుంతీ పుత్రుడనని తెలిసినా, నమ్ముకున్న దుర్యోధనుడికి నమ్మకద్రోహం చేయలేనన్న దానవీరుడు.',
      hookLine_hi: 'जन्म का रहस्य जानकर भी जिसने मित्रता की वेदी पर अपने प्राणों की आहुति देना स्वीकार किया।',
      paragraphs: [
        'Before leaving Hastinapur, Krishna rode with Karna in his chariot, revealing that Karna was Kunti\'s firstborn son fathered by Surya. Krishna offered: "Come with me, Radheya! The Pandavas will bow at your feet; Draupadi will be your queen; you shall be crowned Emperor of the earth!" But weeping, Karna refused: "Duryodhana gave me honor when the world spat upon me. I cannot betray him now; I must fight for him to the grave."',
        'The next evening, Mother Kunti visited Karna as he performed his evening prayers on the banks of Ganga. Tears flowing, she confessed the secret of his birth and begged him to cross over to his five younger brothers.',
        'Karna bowed his head upon her feet: "Mother, you abandoned me as a newborn in a basket upon the river to save your reputation. Now you come to claim me when war approaches. Yet, a beggar never leaves Karna empty-handed! I grant you this solemn vow: I shall spare Yudhishthira, Bhima, Nakula, and Sahadeva. Only between Arjuna and me shall there be mortal combat. In the end, five of your sons shall still survive!"'
      ],
      paragraphs_te: [
        'హస్తినాపురం వదిలే ముందు కృష్ణుడు కర్ణుని తన రథంపై ఎక్కించుకుని అసలు నిజం చెప్పాడు: "కర్ణా! నువ్వు కుంతి పెద్ద కొడుకువు. నాతో రా! పాండవులు నీ కాళ్ళపై పడతారు, ద్రౌపది నీకు పట్టమహిషి అవుతుంది, భూమండలానికి నువ్వే చక్రవర్తివి అవుతావు!" కర్ణుడు కన్నీటితో: "కృష్ణా! లోకమంతా నన్ను సూతపుత్రుడని ఈసడించుకున్నప్పుడు నన్ను రాజును చేసి గౌరవించిన దుర్యోధనుడికి నేను వెన్నుపోటు పొడవలేను" అన్నాడు.',
        'మరుసటి రోజు కుంతీదేవి స్వయంగా గంగా తీరంలో సూర్య నమస్కారాలు చేసుకుంటున్న కర్ణుని వద్దకు వెళ్ళి నిజం చెప్పి, పాండవులతో కలవమని వేడుకుంది.',
        'కర్ణుడు తల్లి పాదాలకు నమస్కరించి: "అమ్మా! లోకాపవాదుకు భయపడి పుట్టగానే నన్ను నదిలో విసిరివేశావు. ఇప్పుడు యుద్ధం వస్తుంటే కొడుకును అంటున్నావు. అయినా నా వద్దకు వచ్చి అడిగిన వారిని నేను రిక్తహస్తాలతో పంపను. నీకు మాట ఇస్తున్నాను: అర్జునుడితో తప్ప మిగిలిన నలుగురు తమ్ముళ్ళను నేను చంపను. ఏది ఏమైనా నీకు ఐదుగురు కొడుకులు మిగిలే ఉంటారు!" అని వరం ఇచ్చాడు.'
      ],
      paragraphs_hi: [
        'हस्तिनापुर से विदा लेते समय श्रीकृष्ण ने कर्ण को अपने रथ में बैठाकर सत्य बताया: "कर्ण! तुम कुंती के ज्येष्ठ पुत्र हो। मेरे साथ चलो! पांचों पांडव तुम्हारे चरणों में झुकेंगे और तुम चक्रवर्ती सम्राट बनोगे!" कर्ण ने रोते हुए कहा: "माधव! जब संसार ने मुझे दुत्कारा, तब दुर्योधन ने मुझे मान दिया। मैं अपने मित्र को धोखा नहीं दे सकता।"',
        'अगली शाम माता कुंती स्वयं गंगा तट पर पहुँची जहाँ कर्ण सूर्य की उपासना कर रहे थे। कुंती ने रोते हुए सत्य प्रकट किया और पांडवों के पक्ष में आने की विनती की।',
        'कर्ण ने माता के चरण स्पर्श कर कहा: "माँ! जन्म लेते ही आपने मुझे नदी में बहा दिया, और आज युद्ध के समय अधिकार जताने आई हैं। फिर भी कर्ण के द्वार से कोई खाली हाथ नहीं जाता। मैं आपको वचन देता हूँ: मैं युधिष्ठिर, भीम, नकुल और सहदेव का वध नहीं करूँगा। मेरा युद्ध केवल अर्जुन से होगा। अंत में आपके पांच पुत्र सदा जीवित रहेंगे!"'
      ],
      dialogueQuote: '"Whether Arjuna falls or I fall, Mother, five sons of Kunti shall forever remain on earth."',
      dialogueQuote_te: '"అర్జునుడు చనిపోయినా లేదా నేను చనిపోయినా, నీకు ఐదుగురు కుమారులు ఎల్లప్పుడూ బతికే ఉంటారు తల్లీ!"',
      dialogueQuote_hi: '"चाहे अर्जुन रहे या मैं, माँ! आपके पांच पुत्र संसार में सदा जीवित रहेंगे।"',
      speaker: 'Karna’s solemn promise to Mother Kunti',
      speaker_te: 'కుంతీదేవికి కర్ణుని చారిత్రక వరం',
      speaker_hi: 'माता कुंती को दानवीर कर्ण का पावन वचन',
      imageUrl: '/assets/wallpapers/karna.jpg',
      imageCaption: 'Karna taking his famous pledge before Mother Kunti on the tranquil banks of holy Ganga.',
      imageCaption_te: 'గంగా నది ఒడ్డున కుంతీదేవికి మాట ఇస్తున్న దానవీర కర్ణుడు.',
      imageCaption_hi: 'पवित्र गंगा के तट पर माता कुंती को अभयदान का वचन देते दानवीर कर्ण।'
    }
  ],

  partSummary: {
    majorEvents: [
      'Both Arjuna and Duryodhana travel to Dvaraka to secure Lord Krishna’s military support',
      'Arjuna humbly chooses unarmed Krishna as charioteer; Duryodhana joyfully takes the 1,000,000-strong Narayani Sena',
      'Yudhishthira sends Lord Sri Krishna as supreme ambassador of peace to Hastinapur',
      'Lord Krishna rejects Duryodhana\'s royal banquet and dines on simple bathua greens at Mahatma Vidura\'s cottage',
      'Krishna makes the historic compromise in the Kuru Sabha: five small villages for the five Pandavas',
      'Duryodhana arrogant refusal: "I shall not give even as much earth as can be pierced by a needle!"',
      'Duryodhana attempts to capture and chain Krishna; Krishna unleashes His colossal cosmic Vishwaroopa in open court',
      'Lord Krishna and Mother Kunti privately reveal to Karna the truth of his birth',
      'Karna pledges to Kunti that he will spare four brothers and fight only Arjuna, ensuring five sons survive'
    ],
    majorEvents_te: [
      'కృష్ణుని సహాయం కోసం ద్వారకకు వెళ్ళిన అర్జునుడు మరియు దుర్యోధనుడు',
      'అర్జునుడు నిరాయుధుడైన కృష్ణుడిని కోరుకోగా, దుర్యోధనుడు పది లక్షల నారాయణ సైన్యాన్ని తీసుకోవడం',
      'హస్తినాపురానికి శాంతిదూతగా వెళ్ళిన శ్రీకృష్ణ పరమాత్మ',
      'దుర్యోధనుని రాజభోగాలను కాదని, విదురుని ఇంట్లో ప్రేమతో వండిన ఆకుకూరను ఆరగించడం',
      'కురు సభలో కృష్ణుని శాంతి ప్రతిపాదన: ఐదుగురు పాండవులకు కేవలం ఐదు ఊళ్ళు',
      'దుర్యోధనుని తీవ్ర నిరాకరణ: "సూది మొన మోపనంత నేల కూడా ఇవ్వను!"',
      'కృష్ణుడిని బంధించాలన్న దుర్యోధనుని కుట్ర & నిండు సభలో కృష్ణుని భయంకర విశ్వరూప దర్శనం',
      'కృష్ణుడు మరియు కుంతీదేవి కర్ణునికి జన్మ రహస్యాన్ని వెల్లడించడం',
      'నలుగురు తమ్ముళ్ళను చంపనని కుంతికి కర్ణుడు చారిత్రక వరం ఇవ్వడం'
    ],
    majorEvents_hi: [
      'द्वारका में सैन्य सहायता हेतु अर्जुन और दुर्योधन का एक साथ पहुँचना',
      'अर्जुन द्वारा निःशस्त्र श्रीकृष्ण का वरण और दुर्योधन द्वारा नारायणी सेना का चयन',
      'युधिष्ठिर द्वारा श्रीकृष्ण को शांतिदूत बनाकर हस्तिनापुर भेजना',
      'दुर्योधन के छप्पन भोग ठुकराकर महात्मा विदुर के घर सात्विक भाजी का भोग',
      'कुरु राजसभा में पांच गांवों का ऐतिहासिक शांति प्रस्ताव',
      'दुर्योधन का हठ: "बिना युद्ध सुई की नोक बराबर भूमि भी नहीं दूँगा!"',
      'श्रीकृष्ण को बंदी बनाने का प्रयास और राजसभा में विराट विश्वरूप दर्शन',
      'श्रीकृष्ण और माता कुंती द्वारा कर्ण को उसके जन्म का सत्य बताना',
      'कर्ण द्वारा माता कुंती को चार भाइयों को न मारने का अभयदान'
    ],
    importantCharacters: [
      'Lord Sri Krishna - Supreme peace ambassador whose mercy exhausted every opportunity before war',
      'Arjuna - Discerning devotee whose faith chose God over worldly armies',
      'Duryodhana - Arrogant prince whose hubris sealed the total annihilation of his clan',
      'Mahatma Vidura - Pure devotee whose devotion outweighed royal gold',
      'Karna - Tragic titan who valued loyalty to friendship over the imperial crown',
      'Mother Kunti - Anguished mother seeking to salvage her sons from mutual destruction'
    ],
    importantCharacters_te: [
      'శ్రీకృష్ణుడు - శాంతిదూత, జగన్నాటక సూత్రధారి',
      'అర్జునుడు - సైన్యాన్ని కాదని దైవాన్ని ఎంచుకున్న పరమ భక్తుడు',
      'దుర్యోధనుడు - వినాశకాలే విపరీత బుద్ధి అన్నట్లు శాంతిని కాలరాసిన అహంకారి',
      'విదురుడు - నిష్కల్మష భక్తితో పరమాత్ముని మెప్పించిన జ్ఞాని',
      'కర్ణుడు - మిత్రధర్మం కోసం సామ్రాజ్యాన్ని త్యజించిన దానశూరుడు',
      'కుంతీదేవి - పుత్రుల ప్రాణాల కోసం తపించిన తల్లి'
    ],
    importantCharacters_hi: [
      'भगवान श्रीकृष्ण - शांतिदूत एवं सर्वेश्वर',
      'अर्जुन - अनन्य भक्त जिन्होंने सेना पर प्रभु को चुना',
      'दुर्योधन - अहंकार और हठ का प्रतीक',
      'महात्मा विदुर - अनन्य भक्त एवं परम ज्ञानी',
      'दानवीर कर्ण - मित्रता और निष्ठा की अमर मिसाल',
      'माता कुंती - ममता और विवशता से भरी राजमाता'
    ],
    importantRelationships: [
      'Krishna & Arjuna: True union of God and soul (Narayana and Nara) entering the battlefield as one',
      'Karna & Duryodhana: Purest ideal of worldly loyalty, defying temptation of kingship and birthright',
      'Krishna & Vidura: Demonstration that divine love values pure devotion above imperial power'
    ],
    importantRelationships_te: [
      'శ్రీకృష్ణుడు & అర్జునుడు: నరనారాయణుల ఐక్యత, భక్తి మరియు భగవంతుని అద్భుత బంధం',
      'కర్ణుడు & దుర్యోధనుడు: పదవులు, రాజ్యాధికారాల కంటే మించిన అమర మైత్రి',
      'శ్రీకృష్ణుడు & విదురుడు: ఆడంబరాల కంటే స్వచ్ఛమైన భక్తికే దైవం లొంగుతుందని చాటిన అనుబంధం'
    ],
    importantRelationships_hi: [
      'श्रीकृष्ण और अर्जुन - नर-नारायण का आध्यात्मिक संगम',
      'कर्ण और दुर्योधन - मित्रता की पराकाष्ठा जो साम्राज्य से भी बड़ी थी',
      'श्रीकृष्ण और विदुर - भक्ति और समर्पण का सर्वोच्च उदाहरण'
    ],
    majorDecisions: [
      'Arjuna choosing an unarmed Krishna rather than an invincible million-man army',
      'Krishna attempting peace in person despite knowing the inevitable outcome',
      'Duryodhana rejecting the generous concession of five tiny villages',
      'Karna refusing Krishna’s offer of the imperial throne to remain faithful to his benefactor'
    ],
    majorDecisions_te: [
      'పది లక్షల అజేయ సైన్యాన్ని వదిలి నిరాయుధుడైన కృష్ణుడిని ఎంచుకున్న అర్జునుని వివేకం',
      'యుద్ధం ఖాయమని తెలిసినా శాంతి కోసం స్వయంగా వెళ్ళిన శ్రీకృష్ణుని కరుణ',
      'కేవలం ఐదు గ్రామాలు ఇస్తే సరిపోయేదానికి సమస్తాన్ని నాశనం చేసుకున్న దుర్యోధనుని మూర్ఖత్వం',
      'సమస్త సామ్రాజ్యం వస్తానన్నా మిత్రుడిని విడిచిపెట్టని కర్ణుని నిబద్ధత'
    ],
    majorDecisions_hi: [
      'नारायणी सेना के स्थान पर निःशस्त्र भगवान को चुनना',
      'विनाश निश्चित जानकर भी शांति का अंतिम प्रयास करना',
      'मात्र पांच गांवों की न्यायपूर्ण मांग को ठुकराना',
      'सम्राट पद का प्रलोभन त्यागकर मित्रता पर अडिग रहना'
    ],
    consequences: [
      'All diplomatic channels are permanently extinguished; war becomes Dharma’s only instrument',
      'The 18 Akshauhinis march to Kurukshetra for the greatest clash of antiquity',
      'Karna enters the battle with his hands morally tied toward four Pandava brothers'
    ],
    consequences_te: [
      'రాయబారాలన్నీ ముగిసి, ధర్మ రక్షణకు యుద్ధమే ఏకైక మార్గంగా మారడం',
      'పద్దెనిమిది అక్షౌహిణుల మహాసైన్యాలు కురుక్షేత్ర రణరంగానికి కదలడం',
      'నలుగురు పాండవులను చంపనని ఇచ్చిన మాటతో కర్ణుని చేతులు నైతికంగా కట్టబడిపోవడం'
    ],
    consequences_hi: [
      'शांति के सभी द्वार बंद होकर धर्मयुद्ध का अनिवार्य होना',
      'कुरुक्षेत्र के मैदान में 18 अक्षौहिणी सेनाओं का आमने-सामने आना',
      'चार पांडवों को अभयदान देकर कर्ण का मानसिक रूप से बंध जाना'
    ]
  },

  slides: [
    {
      slideNumber: 1,
      title: 'The Divine Charioteer',
      title_te: 'దివ్య సారథి ఎంపిక',
      title_hi: 'सारथी का वरण',
      content: 'Offered the choice, Duryodhana takes the massive Narayani army, while Arjuna chooses unarmed Krishna.',
      content_te: 'దుర్యోధనుడు పది లక్షల నారాయణ సైన్యాన్ని ఎంచుకోగా, అర్జునుడు నిరాయుధుడైన శ్రీకృష్ణుని మాత్రమే కోరుకున్నాడు.',
      content_hi: 'दुर्योधन ने विशाल नारायणी सेना चुनी, जबकि अर्जुन ने केवल निःशस्त्र भगवान श्रीकृष्ण को चुना।',
      moralLesson: 'Material resources are powerless without the guiding grace and wisdom of the Divine.',
      moralLesson_te: 'భగవంతుని కృప మరియు మార్గదర్శకత్వం లేని భౌతిక సంపదలు ఎంత పెద్దవైనా వ్యర్థమే.',
      moralLesson_hi: 'ईश्वर के अनुग्रह और विवेक के बिना संसार की सबसे बड़ी शक्ति भी पराजित हो जाती है।'
    },
    {
      slideNumber: 2,
      title: 'The Rejection of Peace',
      title_te: 'శాంతి తిరస్కరణ',
      title_hi: 'शांति प्रस्ताव की विफलता',
      content: 'Krishna begs for just five small villages to save millions of lives; Duryodhana refuses even a needlepoint of earth.',
      content_te: 'కోట్లాది ప్రాణాలను కాపాడటానికి కృష్ణుడు ఐదు ఊళ్ళను కోరగా, సూది మొన మోపనంత నేల కూడా ఇవ్వనన్నాడు దుర్యోధనుడు.',
      content_hi: 'श्रीकृष्ण ने महाविनाश रोकने हेतु केवल पांच गांव मांगे; किंतु दुर्योधन ने सुई की नोक बराबर भूमि भी देने से मना कर दिया।',
      moralLesson: 'Unchecked arrogance blinds mortals to their own impending destruction.',
      moralLesson_te: 'అహంకారం కళ్ళు కప్పినప్పుడు మనుషులు తమ స్వయంకృత వినాశనాన్ని తామే ఆహ్వానించుకుంటారు.',
      moralLesson_hi: 'अहंकार और हठ मनुष्य की बुद्धि हर लेते हैं और उसे सीधे विनाश की ओर ले जाते हैं।'
    },
    {
      slideNumber: 3,
      title: 'The Universal Vision',
      title_te: 'విశ్వరూప సందర్శనం',
      title_hi: 'विराट विश्वरूप दर्शन',
      content: 'When Duryodhana tries to chain Krishna, the Lord reveals His infinite cosmic Vishwaroopa in the royal court.',
      content_te: 'కృష్ణుడిని బంధించాలనుకున్న దుర్యోధనునికి సభలో తన అనంత విశ్వరూపాన్ని ప్రదర్శించి దిగ్భ్రాంతికి గురిచేశాడు భగవంతుడు.',
      content_hi: 'जब दुर्योधन ने श्रीकृष्ण को बांधना चाहा, तो प्रभु ने सभा में अपना चराचर-व्यापक विराट रूप प्रकट कर दिया।',
      moralLesson: 'No mortal force can bind the infinite Truth; righteousness dwarfs all earthly authority.',
      moralLesson_te: 'అనంతమైన సత్యాన్ని ఏ మానవ బంధనాలు కట్టిపడేయలేవు; ధర్మం ముందు రాజ్యాధికారాలు తలవంచాల్సిందే.',
      moralLesson_hi: 'सत्य और परमात्मा को कोई सत्ता बेड़ियों में नहीं जकड़ सकती; धर्म ही सर्वोपरि है।'
    }
  ]
};
