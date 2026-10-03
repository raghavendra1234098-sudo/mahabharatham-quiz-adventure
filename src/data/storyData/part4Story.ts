import { StoryPart } from '../../types/game';

export const PART_4_STORY: StoryPart = {
  partNumber: 4,
  title: 'Indraprastha & The Rajasuya Yajna',
  title_te: 'ఇంద్రప్రస్థ వైభవం & రాజసూయ యాగం',
  title_hi: 'इंद्रप्रस्थ का निर्माण और राजसूय यज्ञ',
  sanskritTitle: 'इन्द्रप्रस्थनिर्माणं राजसूययज्ञश्च',
  summary: 'Transforming the arid wasteland of Khandavaprastha into celestial Indraprastha, the burning of Khandava, the conquest of four directions, the supreme Rajasuya sacrifice, and the fateful laughter in the palace of illusions.',
  summary_te: 'ఎడారి లాంటి ఖాండవప్రస్థాన్ని దైవ నగరం ఇంద్రప్రస్థంగా మార్చడం, గాండీవం పొందడం, దిగ్విజయ యాత్ర, రాజసూయ యాగం, శిశుపాల వధ, మరియు మాయాసభలో దుర్యోధనుని అవమానం.',
  summary_hi: 'खंडहर खांडवप्रस्थ को स्वर्गसमान इंद्रप्रस्थ में बदलना, गांडीव प्राप्ति, चारों दिशाओं की विजय, राजसूय यज्ञ में शिशुपाल वध और मयसभा में दुर्योधन का अपमान।',
  characterRewardId: 'yudhishthira',

  charactersInPart: [
    {
      id: 'yudhishthira_emperor',
      name: 'Emperor Yudhishthira (Dharmaraja)',
      name_te: 'ధర్మరాజు (యుధిష్ఠిర చక్రవర్తి)',
      name_hi: 'महाराज युधिष्ठिर (धर्मराज)',
      title: 'Lord of Indraprastha & Sovereign of the Earth',
      title_te: 'ఇంద్రప్రస్థ చక్రవర్తి & సత్యసంధుడు',
      title_hi: 'इंद्रप्रस्थ के चक्रवर्ती सम्राट',
      relationship: 'Eldest Pandava; Sovereign performing the Rajasuya sacrifice',
      relationship_te: 'పాండవాగ్రజుడు; రాజసూయ యాగాన్ని నిర్వహించిన సార్వభౌముడు',
      relationship_hi: 'पांडव ज्येष्ठ; राजसूय यज्ञ के मुख्य यजमान',
      intro: 'Governed Indraprastha with such flawless virtue that neither famine, sickness, nor premature death touched his realm.',
      intro_te: 'ధర్మబద్ధమైన పాలనతో కరవు, వ్యాధులు లేని స్వర్గతుల్య రాజ్యాన్ని సృష్టించిన సత్య శీలుడు.',
      intro_hi: 'जिनके धर्मपरायण शासन में प्रजा रोग, शोक और अकाल से सर्वथा मुक्त थी।',
      avatarUrl: '/assets/wallpapers/yudhishthira.jpg',
      role: 'hero'
    },
    {
      id: 'krishna_emperor',
      name: 'Sri Krishna (Vasudeva)',
      name_te: 'శ్రీకృష్ణ పరమాత్మ',
      name_hi: 'भगवान श्रीकृष्ण',
      title: 'Lord of Dvaraka & Supreme Master of the Sudarshana',
      title_te: 'ద్వారకాధీశుడు & సుదర్శనధారి',
      title_hi: 'सुदर्शन चक्रधारी द्वारकाधीश',
      relationship: 'Guide of the Pandavas; recipient of the Agrapuja (Foremost Honor)',
      relationship_te: 'పాండవుల ప్రాణసఖుడు; అగ్రపూజను స్వీకరించిన పరమాత్ముడు',
      relationship_hi: 'पांडवों के परम मार्गदर्शक; राजसूय में अग्रपूजा के अधिकारी',
      intro: 'Assisted in burning Khandava, orchestrated the downfall of tyrant Jarasandha, and ended Shishupala’s reign of insults.',
      intro_te: 'జరాసంధ వధకు వ్యూహం రచించి, రాజసూయ యాగంలో అగ్రపూజలందుకుని, శిశుపాలుని వధించిన లీలామానుష విగ్రహుడు.',
      intro_hi: 'जरासंध के वध की योजना बनाने वाले और सौ अपराध क्षमा कर शिशुपाल का उद्धार करने वाले प्रभु।',
      avatarUrl: '/assets/wallpapers/krishna.jpg',
      role: 'mentor'
    },
    {
      id: 'arjuna_gandiva',
      name: 'Arjuna (Gandivadhavi)',
      name_te: 'అర్జునుడు (గాండీవధారి)',
      name_hi: 'अर्जुन (गांडीवधारी)',
      title: 'Conqueror of the Northern Realms & Friend of Agni',
      title_te: 'ఉత్తర దిగ్విజేత & గాండీవ ధనుర్ధారి',
      title_hi: 'गांडीवधारी एवं उत्तर दिशा के विजेता',
      relationship: 'Third Pandava; wielder of Gandiva bow given by Varuna and Agni',
      relationship_te: 'వరుణ, అగ్ని దేవుళ్ళ నుండి గాండీవాన్ని పొందిన మహావీరుడు',
      relationship_hi: 'अग्निदेव से गांडीव धनुष प्राप्त करने वाले महाधनुर्धर',
      intro: 'Helped Agni consume Khandava forest and conquered the wealthy kingdoms of the north for the Rajasuya treasury.',
      intro_te: 'ఖాండవ వనాన్ని అగ్నిదేవునికి సమర్పించి గాండీవాన్ని పొంది, ఉత్తర రాజ్యాలను జయించిన వీరుడు.',
      intro_hi: 'खांडव वन दहन में अग्निदेव को तृप्त कर देव-धनुष प्राप्त किया और उत्तर की समस्त संपदा जीती।',
      avatarUrl: '/assets/wallpapers/arjuna.jpg',
      role: 'hero'
    },
    {
      id: 'maya_danava',
      name: 'Maya Danava',
      name_te: 'మయ దానవుడు',
      name_hi: 'मय दानव',
      title: 'Architect of the Asuras & Creator of Wonders',
      title_te: 'రాక్షస శిల్పి & మాయాసభా నిర్మాత',
      title_hi: 'असुरों के दिव्य शिल्पी',
      relationship: 'Saved by Arjuna from Khandava fire; built the legendary Maya Sabha in gratitude',
      relationship_te: 'ఖాండవ దహనంలో అర్జునుని చేత రక్షింపబడి, కృతజ్ఞతగా ఇంద్రప్రస్థ మాయాసభను నిర్మించిన శిల్పి',
      relationship_hi: 'अर्जुन द्वारा जीवनदान पाकर अनुपम मयसभा का निर्माण करने वाले विश्वकर्मा तुल्य शिल्पी',
      intro: 'Created a divine palace where marble floors looked like lakes, crystal waters looked like land, and jewels danced.',
      intro_te: 'నీటిని చూస్తే నేలలా, నేలను చూస్తే నీటిలా భ్రమ కలిగించే అద్భుత మాయాసభను సృష్టించిన ప్రతిభాశాలి.',
      intro_hi: 'जल को स्थल और स्थल को जल की भांति दिखाने वाली अद्भुत मायावी सभा का निर्माण किया।',
      avatarUrl: '/assets/wallpapers/sanatana-dharma.jpg',
      role: 'mentor'
    },
    {
      id: 'shishupala',
      name: 'King Shishupala',
      name_te: 'శిశుపాలుడు',
      name_hi: 'शिशुपाल',
      title: 'King of Chedi',
      title_te: 'చేది దేశాధిపతి',
      title_hi: 'चेदि नरेश',
      relationship: 'Cousin of Krishna; furious rival who opposed Krishna’s primary worship',
      relationship_te: 'శ్రీకృష్ణుని మేనత్త కుమారుడు; అహంకారంతో కృష్ణుడిని దూషించిన రాజు',
      relationship_hi: 'श्रीकृष्ण के बुआ का पुत्र; अकारण द्वेष रखने वाला अहंकारी राजा',
      intro: 'Born with four arms and three eyes, granted 100 pardons by Krishna, until his venomous tongue crossed the limit.',
      intro_te: 'పుట్టుకతో వికృత రూపం కలిగి కృష్ణుని స్పర్శతో మామూలు మనిషిగా మారి, నూరు తప్పుల వరం పొందిన అహంకారి.',
      intro_hi: 'सौ अपराधों की क्षमा पाकर भी जिसने राजसूय में प्रभु का अपमान कर अपने विनाश को आमंत्रित किया।',
      avatarUrl: '/assets/wallpapers/karna.jpg',
      role: 'adversary'
    },
    {
      id: 'duryodhana_envy',
      name: 'Prince Duryodhana',
      name_te: 'దుర్యోధనుడు',
      name_hi: 'दुर्योधन',
      title: 'Crown Prince of Hastinapur',
      title_te: 'హస్తినాపుర యువరాజు',
      title_hi: 'हस्तिनापुर का युवराज',
      relationship: 'First cousin of Pandavas; consumed by hatred upon witnessing Indraprastha’s grandeur',
      relationship_te: 'పాండవుల దాయాది; ఇంద్రప్రస్థ వైభవాన్ని చూసి ఈర్ష్యతో రగిలిపోయినవాడు',
      relationship_hi: 'पांडवों के वैभव और मयसभा की सुंदरता से भयंकर ईर्ष्या करने वाला प्रतिद्वंद्वी',
      intro: 'Fell into a crystal pool mistaking it for solid ground, sparking laughter that led to the dice game conspiracy.',
      intro_te: 'స్పటిక నీటి కొలనులో జారిపడి, ఆ అవమానంతో పాండవులపై పగ తీర్చుకోవాలని నిశ్చయించుకున్నాడు.',
      intro_hi: 'स्फटिक के जलकुंड में गिरकर हंसी का पात्र बनने पर जिसने पांडवों के सर्वनाश की प्रतिज्ञा ली।',
      avatarUrl: '/assets/wallpapers/bhishma.jpg',
      role: 'adversary'
    }
  ],

  familyTree: {
    title: 'The Empire of Indraprastha & Royal Alliances',
    title_te: 'ఇంద్రప్రస్థ సామ్రాజ్యం & బంధుత్వాలు',
    title_hi: 'इंद्रप्रस्थ साम्राज्य और राजसूय संबंध',
    description: 'The expansion of the Pandava authority across Bharata-Varsha, supported by the Yadavas and celestial boons.',
    description_te: 'యాదవుల అండతో మరియు దిగ్విజయ యాత్రలతో విస్తరించిన పాండవ సామ్రాజ్యం.',
    description_hi: 'भगवान कृष्ण की कृपा और चारों भाइयों के पुरुषार्थ से स्थापित हुआ चक्रवर्ती साम्राज्य।',
    nodes: [
      { id: 'yudhishthira_t4', name: 'Emperor Yudhishthira', name_te: 'ధర్మరాజు', name_hi: 'सम्राट युधिष्ठिर', clan: 'Pandava', generation: 3, isKeyCharacter: true, role: 'Universal Monarch (Samrat)' },
      { id: 'bhima_t4', name: 'Bhima', name_te: 'భీముడు', name_hi: 'भीमसेन', clan: 'Pandava', generation: 3, role: 'Conqueror of East & Slayer of Jarasandha' },
      { id: 'arjuna_t4', name: 'Arjuna', name_te: 'అర్జునుడు', name_hi: 'गांडीवधारी अर्जुन', clan: 'Pandava', generation: 3, isKeyCharacter: true, role: 'Conqueror of North & Khandava Hero' },
      { id: 'nakula_t4', name: 'Nakula', name_te: 'నకులుడు', name_hi: 'नकुल', clan: 'Pandava', generation: 3, role: 'Conqueror of West' },
      { id: 'sahadeva_t4', name: 'Sahadeva', name_te: 'సహదేవుడు', name_hi: 'सहदेव', clan: 'Pandava', generation: 3, role: 'Conqueror of South' },
      { id: 'krishna_t4', name: 'Sri Krishna', name_te: 'శ్రీకృష్ణుడు', name_hi: 'श्रीकृष्ण', clan: 'Yadava', generation: 3, isKeyCharacter: true, role: 'Sudarshana Bearer & Agrapuja Deity' },
      { id: 'shishupala_t4', name: 'Shishupala', name_te: 'శిశుపాలుడు', name_hi: 'शिशुपाल', clan: 'Kuru', generation: 3, role: 'King of Chedi & Cousin of Krishna' },
      { id: 'maya_t4', name: 'Maya Danava', name_te: 'మయ శిల్పి', name_hi: 'मय दानव', clan: 'Sage / Celestial', generation: 2, role: 'Architect of Maya Sabha' }
    ],
    links: [
      { from: 'yudhishthira_t4', to: 'arjuna_t4', relationship: 'brother_of', label: 'Brothers' },
      { from: 'yudhishthira_t4', to: 'bhima_t4', relationship: 'brother_of', label: 'Brothers' },
      { from: 'krishna_t4', to: 'arjuna_t4', relationship: 'alliance', label: 'Inseparable Comrades' },
      { from: 'maya_t4', to: 'arjuna_t4', relationship: 'alliance', label: 'Grateful Builder' },
      { from: 'krishna_t4', to: 'shishupala_t4', relationship: 'rivalry', label: 'Cousins & Mortal Rivals' }
    ]
  },

  illustratedPages: [
    {
      pageNumber: 1,
      title: 'The Division of the Realm & Khandavaprastha',
      title_te: 'రాజ్య విభజన & ఖాండవప్రస్థం',
      title_hi: 'राज्य का विभाजन और खंडहर खांडवप्रस्थ',
      sceneTag: 'Assembly Hall of Hastinapur',
      sceneTag_te: 'హస్తినాపుర మహాసభ',
      sceneTag_hi: 'हस्तिनापुर की राजसभा',
      hookLine: 'To avoid war, the kingdom was split: the fertile plains to the Kauravas, a haunted desert to the Pandavas.',
      hookLine_te: 'యుద్ధాన్ని నివారించడానికి రాజ్యాన్ని విభజించారు: పచ్చని భూమి కౌరవులకు, ఎండిన అడవి పాండవులకు.',
      hookLine_hi: 'हस्तिनापुर दुर्योधन को मिला और पांडवों के हिस्से आया वीरान, बंजर खांडवप्रस्थ।',
      paragraphs: [
        'Following Draupadi’s marriage, King Dhritarashtra and Grandsire Bhishma realized that war was imminent unless the kingdom was partitioned. Bhishma summoned the court and proposed granting half the empire to the Pandavas.',
        'Duryodhana raged, but Dhritarashtra offered Yudhishthira the ancient territory of Khandavaprastha—a barren, snake-infested wilderness that had fallen into ruins centuries ago.',
        'With unfaltering grace and dignity, Yudhishthira accepted the wilderness without bitterness. With Lord Krishna and Mother Kunti by their side, the five brothers marched to the desolate frontier to build their destiny from bare dust.'
      ],
      paragraphs_te: [
        'ద్రౌపదీ స్వయంవరం తర్వాత పాండవులు హస్తినాపురానికి తిరిగి వచ్చారు. యుద్ధం జరగకుండా ఉండటానికి భీష్ముడు రాజ్యాన్ని రెండు భాగాలుగా విభజించాలని నిర్ణయించాడు.',
        'దుర్యోధనుడు వ్యతిరేకించినా, ధృతరాష్ట్రుడు పాండవులకు పూర్వకాలంలో రాజధానిగా ఉండి ప్రస్తుతం ఎడారిగా, సర్పాలతో నిండిన ఖాండవప్రస్థాన్ని ఇచ్చాడు.',
        'ధర్మరాజు ఎలాంటి ద్వేషం లేకుండా చిరునవ్వుతో ఆ నిర్ణయాన్ని స్వీకరించాడు. శ్రీకృష్ణుని ఆశీస్సులతో, తల్లి కుంతితో కలిసి పాండవులు ఎడారిని నందనవనంగా మార్చే సంకల్పంతో బయలుదేరారు.'
      ],
      paragraphs_hi: [
        'द्रौपदी के विवाह उपरांत पांडव हस्तिनापुर लौटे। गृहयुद्ध टालने हेतु पितामह भीष्म ने कुरु राज्य के दो भाग करने का परामर्श दिया।',
        'धृतराष्ट्र ने पांडवों को खांडवप्रस्थ का सूखा, बीहड़ और नागों से भरा भूभाग दे दिया, जबकि विकसित और समृद्ध हस्तिनापुर दुर्योधन के पास रहा।',
        'धर्मराज युधिष्ठिर ने बिना किसी रोष के इस निर्णय को शिरोधार्य किया। श्रीकृष्ण और माता कुंती के साथ पांडव उस वीराने को अपनी कर्मभूमि बनाने निकल पड़े।'
      ],
      dialogueQuote: '"A virtuous king does not depend on the fertility of the soil; his righteousness makes the barren earth bloom."',
      dialogueQuote_te: '"ధర్మవర్తనుడైన రాజు భూమిపై ఆధారపడడు; అతని ధర్మమే ఎడారిని కూడా పూలతోటగా మారుస్తుంది."',
      dialogueQuote_hi: '"राजा भूमि से महान नहीं होता, अपितु राजा के धर्म और पुरुषार्थ से बंजर भूमि भी स्वर्ग बन जाती है।"',
      speaker: 'Bhishma’s counsel to Dhritarashtra',
      speaker_te: 'ధృతరాష్ట్రునితో భీష్ముడు',
      speaker_hi: 'भीष्म का धृतराष्ट्र को वचन',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'The Pandavas surveying the barren plains of Khandavaprastha alongside Lord Krishna.',
      imageCaption_te: 'శ్రీకృష్ణునితో కలిసి ఖాండవప్రస్థ భూమిని పరిశీలిస్తున్న పాండవులు.',
      imageCaption_hi: 'श्रीकृष्ण के साथ खांडवप्रस्थ की बंजर भूमि पर संकल्प लेते पंच पांडव।'
    },
    {
      pageNumber: 2,
      title: 'The Burning of Khandava & The Gift of Gandiva',
      title_te: 'ఖాండవ దహనం & గాండీవ ప్రాప్తి',
      title_hi: 'खांडव वन दहन और गांडीव धनुष की प्राप्ति',
      sceneTag: 'Khandava Forest & Celestial Skies',
      sceneTag_te: 'ఖాండవ వనం & ఆకాశంలో ఇంద్రుని యుద్ధం',
      sceneTag_hi: 'खांडव वन और देवराज इंद्र का युद्ध',
      hookLine: 'To satiate the hunger of Agni, Arjuna held back the torrents of heaven and received the greatest bow in creation.',
      hookLine_te: 'అగ్నిదేవుని ఆకలిని తీర్చడానికి ఇంద్రుని వర్షాన్ని నిలువరించి గాండీవాన్ని పొందిన అర్జునుడు.',
      hookLine_hi: 'अग्निदेव की तृप्ति हेतु इंद्र के मेघों को तीरों की छत से रोककर अर्जुन ने गांडीव प्राप्त किया।',
      paragraphs: [
        'Lord Agni, suffering from severe indigestion, approached Krishna and Arjuna in the guise of a Brahmin, begging to consume the wild medicinal trees of Khandava forest. But whenever Agni flared, Indra, king of gods, unleashed torrential thunderclouds to protect his friend Takshaka the serpent king.',
        'To enable Krishna and Arjuna to battle the devas, Agni summoned Varuna, god of oceans. Varuna gifted Arjuna the supreme divine bow—Gandiva, fashioned by Brahma—along with two inexhaustible quivers of arrows and a celestial chariot bearing the monkey flag of Hanuman. To Krishna, Agni bestowed the fiery Sudarshana Chakra.',
        'With Gandiva singing, Arjuna wove an impenetrable roof of interlocking arrows across the sky, preventing a single drop of rain from touching the blazing forest. Indra, marveling at his mortal son’s martial magnificence, ceased fighting and showered boons upon Arjuna.'
      ],
      paragraphs_te: [
        'అజీర్తితో బాధపడుతున్న అగ్నిదేవుడు బ్రాహ్మణ రూపంలో వచ్చి ఖాండవ వనాన్ని ఆహారంగా కోరాడు. కానీ అక్కడ నివసించే తక్షకుడిని కాపాడటానికి ఇంద్రుడు భారీ వర్షం కురిపించేవాడు.',
        'అర్జునునికి సహాయంగా అగ్నిదేవుడు వరుణుని ప్రార్థించి బ్రహ్మ నిర్మితమైన దివ్య గాండీవ ధనుస్సును, అక్షయ తూణీరాలను, హనుమధ్వజ రథాన్ని ఇప్పించాడు. శ్రీకృష్ణునికి సుదర్శన చక్రాన్ని సమర్పించాడు.',
        'అర్జునుడు తన బాణాలతో ఆకాశంలో ఒక అద్భుతమైన గొడుగును నిర్మించి వర్షపు చుక్క కూడా కింద పడకుండా అగ్నిని రక్షించాడు. తన కుమారుని వీరత్వానికి ముగ్ధుడైన ఇంద్రుడు అనేక దివ్యాస్త్రాలను ప్రసాదించాడు.'
      ],
      paragraphs_hi: [
        'अग्निदेव ने अपनी क्षुधा शांत करने हेतु कृष्ण और अर्जुन से खांडव वन जलाने की प्रार्थना की। किंतु इंद्र अपने सखा तक्षक नाग की रक्षा हेतु मूसलाधार वर्षा करने लगते थे।',
        'अर्जुन की सहायता हेतु अग्निदेव ने वरुण देव से प्रार्थना कर ब्रह्मा द्वारा निर्मित दिव्य गांडीव धनुष, अक्षय तरकश और कपिध्वज रथ प्रदान किया। श्रीकृष्ण को सुदर्शन चक्र प्राप्त हुआ।',
        'अर्जुन ने आकाश में बाणों का ऐसा घना जाल बना दिया कि वर्षा की एक बूँद भी वन तक न पहुँच सकी। इंद्र ने अपने पुत्र अर्जुन के इस अद्भुत पराक्रम को देखकर युद्ध रोक दिया और वरदान दिए।'
      ],
      dialogueQuote: '"This Gandiva shall never crack, these quivers shall never empty, and your arrows shall conquer the cosmos."',
      dialogueQuote_te: '"ఈ గాండీవం ఎన్నడూ విరిగిపోదు, ఈ అమ్ములపొదిలోని బాణాలు ఎన్నడూ తరగవు; నీవు ముల్లోకాలను జయిస్తావు."',
      dialogueQuote_hi: '"यह गांडीव कभी विफल नहीं होगा, ये तरकश कभी रिक्त नहीं होंगे, और तुम्हारा पराक्रम युगों तक गाया जाएगा।"',
      speaker: 'Lord Agni presenting Gandiva to Arjuna',
      speaker_te: 'అర్జునునికి గాండీవాన్ని ఇస్తూ అగ్నిదేవుడు',
      speaker_hi: 'अग्निदेव द्वारा अर्जुन को गांडीव समर्पण',
      imageUrl: '/assets/wallpapers/arjuna.jpg',
      imageCaption: 'Arjuna standing resplendent on his chariot, firing the golden Gandiva into the night sky.',
      imageCaption_te: 'హనుమధ్వజ రథంపై గాండీవాన్ని ధరించి మెరుస్తున్న అర్జునుడు.',
      imageCaption_hi: 'कपिध्वज रथ पर सवार होकर गांडीव की टंकार करते अद्वितीय धनुर्धर अर्जुन।'
    },
    {
      pageNumber: 3,
      title: 'Maya Sabha: The Wonder Palace of Indraprastha',
      title_te: 'మయసభ నిర్మాణం & ఇంద్రప్రస్థ స్వర్గం',
      title_hi: 'मयसभा का निर्माण और इंद्रप्रस्थ की दिव्यता',
      sceneTag: 'Indraprastha Imperial Grounds',
      sceneTag_te: 'ఇంద్రప్రస్థ రాజధాని & మాయాసభ',
      sceneTag_hi: 'इंद्रप्रस्थ का भव्य मयमहल',
      hookLine: 'Spared from the flames, the architect of demons built a palace that outshone heaven itself.',
      hookLine_te: 'అగ్ని నుండి ప్రాణాలు దక్కించుకున్న మయశిల్పి ఇంద్రుని అమరావతిని తలదన్నే మాయాసభను నిర్మించాడు.',
      hookLine_hi: 'जीवनदान के बदले मय दानव ने एक ऐसा महल खड़ा किया जिसने स्वर्ग के वैभव को भी मात दे दी।',
      paragraphs: [
        'Amidst the Khandava flames, Arjuna had saved the life of Maya Danava, the legendary architect of the Asuras. Overcome with gratitude, Maya knelt before Arjuna: "O Partha, ask of me any favor, for a Danava never forgets a benefactor!"',
        'At Krishna’s suggestion, Maya Danava built an incomparable assembly hall for Emperor Yudhishthira: the "Maya Sabha." Gathering celestial gems from Mount Kailash and Bindu Sarovar, Maya raised a colossal wonder covering ten thousand square cubits.',
        'The palace was a marvel of optical illusions. Floors crafted of crystal looked like deep water with swimming fish, while genuine pools filled with lotus blossoms appeared as polished dry stone. Golden trees with mechanical singing birds adorned courtyards of pure sapphire.'
      ],
      paragraphs_te: [
        'ఖాండవ దహనంలో మంటల్లో చిక్కుకున్న మయదానవుడిని అర్జునుడు కాపాడాడు. ఆ కృతజ్ఞతతో మయుడు: "పార్థా! నాకు ప్రాణదానం చేశావు, నీ రుణం తీర్చుకోనివ్వు" అని వేడుకున్నాడు.',
        'శ్రీకృష్ణుని సూచన మేరకు, మయదానవుడు ధర్మరాజు కోసం భూమిపై ఎక్కడా లేని అద్భుతమైన "మాయాసభ"ను నిర్మించాడు. కైలాస పర్వతాల నుండి తెచ్చిన రత్నాలతో ఆ సభను అలంకరించాడు.',
        'ఆ సభలోని నేలలు నీరులాగా, అసలైన కొలనులు పాలరాతి నేలలాగా భ్రమ కలిగించేవి. రత్నాల పక్షులు కిలకిలారావాలు చేసేవి. ఇంద్రప్రస్థం సాక్షాత్తూ అమరావతిని తలపించింది.'
      ],
      paragraphs_hi: [
        'खांडव दहन में अर्जुन ने मय दानव की जान बचाई थी। मय ने हाथ जोड़कर कहा: "हे धनंजय! आपने मुझे जीवनदान दिया है, मैं आपके लिए क्या सेवा करूँ?"',
        'श्रीकृष्ण के कहने पर मय दानव ने युधिष्ठिर के लिए एक अलौकिक राजसभा \'मयसभा\' का निर्माण किया। उसने बिंदु सरोवर से दुर्लभ मणियाँ और रत्न लाकर महल सजाया।',
        'वह महल भ्रम और सौंदर्य का चरम था। जहाँ स्फटिक का फर्श था, वह अथाह जल दिखता था; और जहाँ असली जलकुंड था, वह संगमरमर का सूखा फर्श प्रतीत होता था।'
      ],
      dialogueQuote: '"Neither in the realms of mortals nor in the mansions of the gods does a court exist that matches the glory of Maya Sabha."',
      dialogueQuote_te: '"మానవలోకంలో గాని, దేవలోకంలో గాని ఈ మాయాసభకు సాటివచ్చే భవనం మరొకటి లేదు."',
      dialogueQuote_hi: '"न देवलोक में और न मृत्युलोक में, मयसभा जैसा चमत्कारी राजमहल कहीं दूसरा नहीं है।"',
      speaker: 'Maya Danava presenting the palace',
      speaker_te: 'మాయాసభను అప్పగిస్తూ మయదానవుడు',
      speaker_hi: 'मय दानव द्वारा सभा का लोकार्पण',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'The glowing pillars and mirror-like courtyards of the legendary Maya Sabha in Indraprastha.',
      imageCaption_te: 'ఇంద్రప్రస్థంలో వెలిగిపోతున్న అద్భుత మాయాసభ దృశ్యం.',
      imageCaption_hi: 'इंद्रप्रस्थ में निर्मित चमत्कारी और दिव्य मयसभा का अलौकिक दृश्य।'
    },
    {
      pageNumber: 4,
      title: 'The Fall of Jarasandha & Digvijaya Conquest',
      title_te: 'జరాసంధ వధ & దిగ్విజయ యాత్ర',
      title_hi: 'जरासंध का वध और चारों दिशाओं की विजय',
      sceneTag: 'Arena of Magadha & Frontiers of Aryavarta',
      sceneTag_te: 'మగధ సామ్రాజ్యం & నాలుగు దిక్కుల విజయాలు',
      sceneTag_hi: 'मगध का अखाड़ा और दिग्विजय अभियान',
      hookLine: 'A tyrant torn in two by Bhima’s hands unlocked the path to the imperial throne.',
      hookLine_te: 'భీముని చేతిలో రెండుగా చీల్చబడిన జరాసంధుడు; దిగ్విజయంతో ఖజానా నింపిన తమ్ములు.',
      hookLine_hi: 'भीमसेन द्वारा जरासंध को चीरकर दो फाड़ करने से चक्रवर्ती पद का मार्ग निष्कंटक हुआ।',
      paragraphs: [
        'Sage Narada visited Indraprastha and revealed that King Pandu in the heavens yearned for Yudhishthira to perform the Rajasuya Yajna—the sacrifice that establishes an emperor as Chakravartin. But Krishna cautioned: "No Rajasuya is valid while Jarasandha of Magadha holds eighty-six kings captive to sacrifice them to Lord Shiva."',
        'Krishna, Bhima, and Arjuna entered Magadha disguised as Brahmins. Bhima challenged Jarasandha to a wrestling duel that raged uninterrupted for fourteen days. Finally, guided by Krishna snapping a blade of grass in two and tossing the halves in opposite directions, Bhima split Jarasandha’s body lengthwise and hurled the halves oppositely, preventing them from fusing together.',
        'With Jarasandha slain and all captive kings liberated, the four Pandavas rode in four directions: Arjuna conquered the north, Bhima the east, Sahadeva the south, and Nakula the west. They returned with endless mountains of gold, jewels, elephants, and tributes.'
      ],
      paragraphs_te: [
        'నారద మహర్షి వచ్చి పాండురాజు ఆశీస్సులతో రాజసూయ యాగం చేయమని ధర్మరాజుకు సూచించాడు. కానీ మగధ రాజు జరాసంధుడు ఎనభై ఆరుగురు రాజులను బంధించి బలి ఇవ్వడానికి సిద్ధంగా ఉన్నంతవరకు యాగం సాధ్యం కాదని కృష్ణుడు చెప్పాడు.',
        'కృష్ణ, భీమ, అర్జునులు బ్రాహ్మణ వేషాల్లో మగధ చేరి జరాసంధుడిని మల్లయుద్ధానికి ఆహ్వానించారు. పద్నాలుగు రోజుల పాటు భీముడు పోరాడాడు. చివరకు శ్రీకృష్ణుడు ఒక గడ్డిపరకను రెండుగా చీల్చి విరుద్ధ దిశల్లో పడేసి సంకేతం ఇవ్వగా, భీముడు జరాసంధుని శరీరాన్ని రెండుగా చీల్చి చంపేశాడు.',
        'అనంతరం నలుగురు తమ్ములు నాలుగు దిక్కులకు వెళ్ళి దిగ్విజయ యాత్ర చేసి అపారమైన సంపదలను, రాజుల విధేయతను సాధించి తెచ్చారు.'
      ],
      paragraphs_hi: [
        'देवर्षि नारद ने युधिष्ठिर को राजसूय यज्ञ करने की प्रेरणा दी। किंतु श्रीकृष्ण ने बताया कि जब तक मगध का अत्याचारी जरासंध जीवित है और बंदी राजाओं को मुक्त नहीं किया जाता, तब तक यह संभव नहीं।',
        'विप्र वेष में कृष्ण, भीम और अर्जुन मगध पहुँचे। भीम और जरासंध के बीच चौदह दिनों तक भीषण मल्ल-युद्ध चला। अंत में श्रीकृष्ण ने तिनके को चीरकर उलटी दिशा में फेंकने का संकेत किया, और भीम ने जरासंध को बीच से चीरकर दोनों टुकड़े विपरीत दिशाओं में फेंक दिए।',
        'इसके पश्चात चारों भाइयों ने दिग्विजय किया: अर्जुन ने उत्तर, भीम ने पूर्व, सहदेव ने दक्षिण और नकुल ने पश्चिम जीतकर स्वर्ण, हाथी और मणियों के अंबार लगा दिए।'
      ],
      dialogueQuote: '"Split the stalk and cast the pieces across each other, Bhima; what was united in birth cannot reconnect when reversed."',
      dialogueQuote_te: '"భీమా! ఆ దేహాన్ని రెండుగా చీల్చి విరుద్ధ దిశల్లో విసిరివేయి; అప్పుడు అవి తిరిగి అతుక్కోలేవు."',
      dialogueQuote_hi: '"भीम! इसके दोनों भागों को विपरीत दिशा में फेंक दो, जिससे यह पुनः जुड़ न सके।"',
      speaker: 'Sri Krishna’s silent gesture to Bhima',
      speaker_te: 'శ్రీకృష్ణుని గడ్డిపరక సంకేతం',
      speaker_hi: 'श्रीकृष्ण का मल्ल-युद्ध में गुप्त संकेत',
      imageUrl: '/assets/wallpapers/bhima.jpg',
      imageCaption: 'Mighty Bhima triumphing over Jarasandha in the wrestling arena of Magadha.',
      imageCaption_te: 'మగధ మల్లరంగంలో జరాసంధుడిని చీల్చి సంహరించిన భీమసేనుడు.',
      imageCaption_hi: 'मगध के अखाड़े में जरासंध का अंत करते महाबली भीमसेन।'
    },
    {
      pageNumber: 5,
      title: 'The Rajasuya Sacrifice & The Foremost Honor',
      title_te: 'రాజసూయ యాగం & శ్రీకృష్ణునికి అగ్రపూజ',
      title_hi: 'राजसूय यज्ञ और श्रीकृष्ण की अग्रपूजा',
      sceneTag: 'Sacrificial Pavilion of Indraprastha',
      sceneTag_te: 'ఇంద్రప్రస్థ యాగశాల',
      sceneTag_hi: 'इंद्रप्रस्थ का विशाल यज्ञ मंडप',
      hookLine: 'When the emperor asked whom to honor above all beings, Bhishma’s answer ignited fury.',
      hookLine_te: 'సభలో అగ్రపూజ ఎవరికి చేయాలని ధర్మరాజు అడిగినప్పుడు, భీష్ముడు శ్రీకృష్ణుని పేరును ప్రకటించాడు.',
      hookLine_hi: 'सम्राट ने पूछा कि सर्वश्रेष्ठ पूजा का अधिकारी कौन है, और पितामह भीष्म ने वासुदेव का नाम लिया।',
      paragraphs: [
        'Kings, rishis, scholars, and sages from all corners of the globe assembled in Indraprastha. King Dhritarashtra, Bhishma, Drona, Kripa, and the Kauravas arrived to assist in the rituals, mesmerized by the empire’s opulence.',
        'At the conclusion of the holy rites, Emperor Yudhishthira asked Grandsire Bhishma: "Grandfather, to whom should we offer the Agrapuja—the first, most sacred honor of this sacrifice?"',
        'Without a second’s hesitation, Bhishma rose: "Offer it to Sri Krishna of Dvaraka! For He is the origin and the dissolution of all worlds. Among kings He is supreme in valour, among rishis supreme in wisdom, and in His soul dwells the cosmic Dharma itself."'
      ],
      paragraphs_te: [
        'ప్రపంచం నలుమూలల నుండి రాజులు, మహర్షులు, విద్వాంసులు ఇంద్రప్రస్థానికి విచ్చేశారు. ధృతరాష్ట్రుడు, భీష్ముడు, ద్రోణుడు, దుర్యోధనాదులు కూడా యాగ నిర్వహణలో పాలుపంచుకున్నారు.',
        'యాగ పరిసమాప్తి సమయంలో ధర్మరాజు భీష్ముడిని సంప్రదించాడు: "పితామహా! ఈ మహాసభలో అందరికంటే ముందుగా అగ్రపూజ ఎవరికి సమర్పించాలి?"',
        'భీష్ముడు నిస్సందేహంగా సమాధానమిచ్చాడు: "శ్రీకృష్ణ పరమాత్మకు అగ్రపూజ చేయండి! ఆయన సమస్త లోకాలకు సృష్టికర్త, జ్ఞానంలో మహర్షి, బలంలో అజేయుడు, సాక్షాత్తూ ధర్మ స్వరూపుడు."'
      ],
      paragraphs_hi: [
        'संसार के सभी राजा, ऋषि-मुनि और विद्वान इंद्रप्रस्थ में पधारे। धृतराष्ट्र, भीष्म, द्रोण और दुर्योधन भी यज्ञ की व्यवस्था संभालने आए।',
        'यज्ञ के अंत में सम्राट युधिष्ठिर ने पितामह भीष्म से पूछा: "पितामह! इस विशाल सभा में सर्वप्रथम अग्रपूजा का अधिकारी कौन है?"',
        'भीष्म ने दृढ़ स्वर में कहा: "द्वारकाधीश श्रीकृष्ण ही इस पूजा के एकमात्र अधिकारी हैं! वे ही इस सृष्टि के मूल कारण हैं, ज्ञानियों में श्रेष्ठ और धर्म के परम अधिष्ठाता हैं।"'
      ],
      dialogueQuote: '"Krishna is the soul of the universe; he who honors Krishna honors all creation."',
      dialogueQuote_te: '"శ్రీకృష్ణుడే ఈ విశ్వానికి ఆత్మ; కృష్ణుడిని పూజిస్తే సమస్త విశ్వాన్ని పూజించినట్లే."',
      dialogueQuote_hi: '"श्रीकृष्ण ही संपूर्ण जगत की आत्मा हैं; उनका सम्मान समस्त सृष्टि का सम्मान है।"',
      speaker: 'Bhishma Pitamaha in the Rajasuya Assembly',
      speaker_te: 'యాగసభలో భీష్ముని ప్రకటన',
      speaker_hi: 'राजसूय सभा में भीष्म पितामह का निर्णय',
      imageUrl: '/assets/wallpapers/krishna.jpg',
      imageCaption: 'Emperor Yudhishthira washing the lotus feet of Sri Krishna for the supreme Agrapuja.',
      imageCaption_te: 'శ్రీకృష్ణుని పాదాలను కడిగి అగ్రపూజను సమర్పిస్తున్న ధర్మరాజు.',
      imageCaption_hi: 'परमात्मा श्रीकृष्ण के चरण पखारकर अग्रपूजा समर्पित करते सम्राट युधिष्ठिर।'
    },
    {
      pageNumber: 6,
      title: 'The Wrath of Shishupala & The Hundred Sins',
      title_te: 'శిశుపాలుని ఆగ్రహం & నూరు తప్పుల పరిమితి',
      title_hi: 'शिशुपाल का विषवमन और सौ अपराधों की सीमा',
      sceneTag: 'Sacrificial Assembly Hall',
      sceneTag_te: 'యాగసభలో రగడ',
      sceneTag_hi: 'यज्ञ मंडप में कलह',
      hookLine: 'As Sahadeva washed Krishna\'s feet, a venomous voice shouted curses that stunned the hall.',
      hookLine_te: 'శ్రీకృష్ణుడికి పూజ జరుగుతుండగా, విషపు మాటలతో సభను స్తంభింపజేసిన శిశుపాలుడు.',
      hookLine_hi: 'पूजा आरंभ होते ही शिशुपाल क्रोध से थरथराते हुए श्रीकृष्ण को गालियाँ देने लगा।',
      paragraphs: [
        'Before the water could dry on Krishna’s lotus feet, King Shishupala of Chedi leaped from his golden throne, his eyes burning with rage. He denounced Bhishma, mocked Yudhishthira, and poured vile curses upon Krishna.',
        '"How can this cowherd, this slayer of women, this unkinged wanderer receive the foremost honor over crowned monarchs?" shouted Shishupala. Bhima lunged forward in fury to crush him, but Bhishma held Bhima back, revealing the divine prophecy of Shishupala\'s destiny.',
        'Krishna sat serenely smiling as Shishupala unleashed one blistering insult after another. Decades earlier, Krishna had promised Shishupala’s mother that he would forgive her son one hundred offenses. Calmly, the Lord counted each venomous word.'
      ],
      paragraphs_te: [
        'సహదేవుడు కృష్ణుని పాదాలు కడుగుతుండగా, చేది రాజు శిశుపాలుడు సింహాసనంపై నుండి లేచి అరిచాడు. భీష్ముడిని, ధర్మరాజును దూషిస్తూ, కృష్ణునిపై నిందల వర్షం కురిపించాడు.',
        '"రాజులు కాని ఒక గొల్లవాడికి, స్త్రీలను చంపిన వాడికి అగ్రపూజ చేస్తారా?" అని గద్దించాడు. ఆగ్రహంతో ఊగిపోయిన భీముడిని భీష్ముడు ఆపి, శిశుపాలుని పూర్వజన్మ రహస్యాన్ని గుర్తుచేశాడు.',
        'శ్రీకృష్ణుడు ప్రశాంతంగా చిరునవ్వు నవ్వుతూ కూర్చున్నాడు. శిశుపాలుని తల్లికి ఇచ్చిన మాట ప్రకారం నూరు తప్పులను లెక్కపెడుతూ మౌనంగా ఉన్నాడు.'
      ],
      paragraphs_hi: [
        'चेदि नरेश शिशुपाल अपने आसन से कूद पड़ा। उसने भीष्म को धिक्कारा, युधिष्ठिर का उपहास उड़ाया और श्रीकृष्ण पर अपशब्दों की बौछार कर दी।',
        '"क्या यह ग्वाला, राजाओं के मुकुटों से ऊपर बैठने योग्य है?" भीमसेन उसे मारने दौड़े, किंतु भीष्म ने उन्हें रोक लिया।',
        'भगवान कृष्ण शांत मुस्कान के साथ बैठे रहे। उन्होंने शिशुपाल की माता को वचन दिया था कि वे उसके सौ अपराध क्षमा करेंगे। प्रभु एक-एक कर उसके कटु वचनों को गिनते रहे।'
      ],
      dialogueQuote: '"Utter thy venom freely, cousin; but remember, thy mother’s shield protects thee only until the hundredth stroke."',
      dialogueQuote_te: '"మాట్లాడుకో శిశుపాలా! నీ నోటి తప్పులను నూరు దాకా మాత్రమే నీ తల్లి రక్షణ కాపాడగలదు."',
      dialogueQuote_hi: '"बोल लो शिशुपाल! तुम्हारी माता का दिया वचन केवल सौ अपराधों तक ही तुम्हारी रक्षा कर सकता है।"',
      speaker: 'Sri Krishna’s gentle warning',
      speaker_te: 'శ్రీకృష్ణుని శాంత హెచ్చరిక',
      speaker_hi: 'श्रीकृष्ण की सौम्य किंतु गंभीर चेतावनी',
      imageUrl: '/assets/wallpapers/krishna.jpg',
      imageCaption: 'The serene Lord Krishna observing the screaming Shishupala with cosmic patience.',
      imageCaption_te: 'కోపంతో ఊగిపోతున్న శిశుపాలుడిని చిరునవ్వుతో గమనిస్తున్న శ్రీకృష్ణుడు.',
      imageCaption_hi: 'गरजते हुए शिशुपाल को परम शांति से देखते जगदीश्वर श्रीकृष्ण।'
    },
    {
      pageNumber: 7,
      title: 'The Blazing Sudarshana & The Slaying of Shishupala',
      title_te: 'సుదర్శన చక్ర ప్రయోగం & శిశుపాల వధ',
      title_hi: 'सुदर्शन चक्र का संधान और शिशुपाल का अंत',
      sceneTag: 'Court of Indraprastha',
      sceneTag_te: 'ఇంద్రప్రస్థ సభా ప్రాంగణం',
      sceneTag_hi: 'इंद्रप्रस्थ का महाद्वार',
      hookLine: 'The hundredth insult fell from his lips; the disc of blazing sun severed the tyrant’s head.',
      hookLine_te: 'నూరు తప్పులు పూర్తయ్యాయి; క్షణంలో దూసుకెళ్లిన సుదర్శన చక్రం శిశుపాలుని తలను నరికేసింది.',
      hookLine_hi: 'सौवां अपराध होते ही प्रभु की उंगली से छूटा सुदर्शन चक्र, और शिशुपाल का मस्तक धड़ से अलग हो गया।',
      paragraphs: [
        '"Ninety-nine... one hundred!" counted the Lord. As Shishupala screamed his one hundred and first insult, drawing his sword to attack, Krishna simply raised His index finger.',
        'With a high celestial whine, the Sudarshana Chakra materialized—whirling like a thousand suns, trailing ribbons of incandescent fire. Slicing through the air with unimaginable speed, the disc severed Shishupala’s neck cleanly.',
        'A blinding beam of pure golden light emerged from the fallen monarch’s body, rose into the sky, circled three times, and dissolved peacefully into the lotus feet of Sri Krishna. The assembly prostrated in trembling adoration, and the Rajasuya was completed in divine glory.'
      ],
      paragraphs_te: [
        'నూరు తప్పులు ముగిసి నూట ఒకటవ నింద రాగానే, కృష్ణుడు తన చూపుడు వేలును పైకెత్తాడు. అప్పటివరకు దాగి ఉన్న సుదర్శన చక్రం వెలుగుల ప్రవాహంతో ప్రత్యక్షమైంది.',
        'వేలాది సూర్యుల తేజస్సుతో తిరుగుతున్న సుదర్శన చక్రం క్షణంలో దూసుకెళ్ళి శిశుపాలుని శిరస్సును ఖండించింది. ఆ రక్తం కిందపడకముందే చక్రం తిరిగి కృష్ణుని చేతికి చేరింది.',
        'శిశుపాలుని దేహం నుండి ఒక దివ్య జ్యోతి బయటకు వచ్చి, సభను చుట్టి, శ్రీకృష్ణుని పాదపద్మాల్లో ఐక్యమైంది. యాగం నిర్విఘ్నంగా పూర్తయింది, ధర్మరాజు చక్రవర్తిగా అభిషిక్తుడయ్యాడు.'
      ],
      paragraphs_hi: [
        '"सौ पूर्ण हुए!" श्रीकृष्ण ने कहा। जैसे ही शिशुपाल ने तलवार खींचकर एक सौ एकवाँ अपशब्द कहा, प्रभु की तर्जनी पर सुदर्शन चक्र प्रज्वलित हो उठा।',
        'हजारों सूर्यों के समान धधकते हुए सुदर्शन ने एक ही क्षण में शिशुपाल का सिर काट दिया।',
        'उसके मृत शरीर से एक दिव्य ज्योति निकली, जिसने सभा की परिक्रमा की और भगवान श्रीकृष्ण के चरणों में समा गई। धर्मराज का राजसूय यज्ञ पूर्ण हुआ और वे चक्रवर्ती सम्राट बने।'
      ],
      dialogueQuote: '"The vessel of thy sins is broken; return now to the eternal abode whence thou fell."',
      dialogueQuote_te: '"నీ పాపాల కుండ నిండిపోయింది; నీవు ఎక్కడి నుండి వచ్చావో అక్కడికే చేరుకో."',
      dialogueQuote_hi: '"तुम्हारे पापों का घड़ा भर चुका है; अब अपने वास्तविक धाम को लौट जाओ।"',
      speaker: 'Sri Krishna upon the liberation of Shishupala',
      speaker_te: 'శిశుపాలుని ముక్తి సమయంలో శ్రీకృష్ణుడు',
      speaker_hi: 'शिशुपाल के उद्धार पर श्रीकृष्ण के वचन',
      imageUrl: '/assets/wallpapers/krishna.jpg',
      imageCaption: 'The Sudarshana Chakra hovering in golden light above the assembly of kings.',
      imageCaption_te: 'సభలో వెలిగిపోతున్న సుదర్శన చక్రం మరియు నమస్కరిస్తున్న రాజులు.',
      imageCaption_hi: 'दिव्य सुदर्शन चक्र का तेज और नतमस्तक होते समस्त राजा-महाराजा।'
    },
    {
      pageNumber: 8,
      title: 'The Hall of Illusions: Duryodhana’s Humiliation',
      title_te: 'మాయాసభలో భ్రమ & దుర్యోధనుని అవమానం',
      title_hi: 'मयसभा का भ्रम और दुर्योधन का अपमान',
      sceneTag: 'Crystal Courtyard of the Maya Sabha',
      sceneTag_te: 'మాయాసభలోని స్పటిక కొలను',
      sceneTag_hi: 'मयसभा का स्फटिक कुंड',
      hookLine: 'Lifting his royal robes to cross dry marble, he plunged into deep water while laughter echoed.',
      hookLine_te: 'స్పటిక నేలను నీరనుకుని బట్టలు పైకెత్తాడు, నీటిని నేల అనుకుని నవ్వులపాలయ్యాడు.',
      hookLine_hi: 'सूखे फर्श पर धोती उठाकर चले और जलकुंड को जमीन समझकर छपाक से गिर पड़े।',
      paragraphs: [
        'After the kings departed, Duryodhana remained behind to explore the wonders of the Maya Sabha. Filled with jealousy at Yudhishthira’s infinite wealth, his senses became hopelessly confused by Maya’s architectural sorcery.',
        'Coming upon a floor of pure polished crystal that looked like deep water, Duryodhana carefully lifted his embroidered royal robes to keep them dry—only to discover dry stone. Later, arriving at a crystal pool whose water was so clear it resembled solid marble, he stepped boldly forward and plunged headlong into the cold water!',
        'Soaked and sputtering, servants rushed forward to offer him fresh silk garments. From a golden balcony above, attendants and royal maidens burst into laughter. Humiliated to his marrow, Duryodhana swore a venomous oath: he would not rest until he stripped the Pandavas of every gem, crown, and smile.'
      ],
      paragraphs_te: [
        'యాగం ముగిసిన తర్వాత దుర్యోధనుడు మాయాసభలోని వింతలను చూడటానికి అక్కడే ఉన్నాడు. పాండవుల వైభవాన్ని చూసి లోలోపల కుళ్ళిపోతున్న అతనికి ఆ భవనం తీవ్ర భ్రమలను కలిగించింది.',
        'నీరులా మెరుస్తున్న పాలరాతి నేలను చూసి తడవకుండా బట్టలను పైకెత్తాడు; నిజానికి అక్కడ చుక్క నీరు లేదు. తరువాత స్పటికంలా పారదర్శకంగా ఉన్న అసలైన నీటి కొలనును నేల అనుకుని కాలువేసి దభీమని నీళ్ళలో పడిపోయాడు.',
        'తడిసిపోయిన దుర్యోధనుడిని చూసి పై అంతస్తు నుండి దాసీలు, ద్రౌపది నవ్వారు. ఆ నవ్వు దుర్యోధనుని గుండెల్లో బాకులా గుచ్చుకుంది. పాండవుల సర్వస్వాన్నీ నాశనం చేస్తానని ప్రతినబూని హస్తినాపురానికి తిరుగుముఖం పట్టాడు.'
      ],
      paragraphs_hi: [
        'यज्ञ के पश्चात दुर्योधन मयसभा का भ्रमण करने रुका। पांडवों के अकूत धन-वैभव को देखकर उसकी आँखें ईर्ष्या से जल रही थीं। मय दानव की माया ने उसे पूरी तरह भ्रमित कर दिया।',
        'जहाँ स्फटिक का सूखा फर्श था, उसे जल समझकर उसने अपनी धोती ऊपर उठा ली। आगे जाकर जहाँ वास्तव में गहरा जलकुंड था, उसे सूखा फर्श समझकर वह छपाक से गहरे पानी में गिर पड़ा!',
        'भीगे हुए दुर्योधन को देखकर दासियाँ और ऊपर झरोखे में खड़े लोग हँस पड़े। यह हंसी दुर्योधन के हृदय में विषबुझे तीर की तरह धँस गई। उसने पांडवों से सब कुछ छीन लेने की भयंकर प्रतिज्ञा कर ली।'
      ],
      dialogueQuote: '"Let them laugh today; I shall turn their palace of wonders into a desert of weeping!"',
      dialogueQuote_te: '"ఈరోజు నవ్వండి; మీ నవ్వులను రక్తపు కన్నీళ్ళుగా మార్చకపోతే నా పేరు దుర్యోధనుడే కాదు!"',
      dialogueQuote_hi: '"आज तुम हँस लो; तुम्हारी इस हंसी का मूल्य मैं तुम्हारे संपूर्ण विनाश से चुकाऊँगा!"',
      speaker: 'Duryodhana’s parting curse',
      speaker_te: 'హస్తినాపురానికి వెళ్తూ దుర్యోధనుని శపథం',
      speaker_hi: 'हस्तिनापुर लौटते हुए दुर्योधन का भीषण संकल्प',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'Duryodhana walking out of the Maya Sabha, burning with incurable vengeful malice.',
      imageCaption_te: 'మాయాసభ నుండి ప్రతీకార జ్వాలలతో నిష్క్రమిస్తున్న దుర్యోధనుడు.',
      imageCaption_hi: 'अपमान और प्रतिशोध की ज्वाला में जलता हुआ मयसभा से निकलता दुर्योधन।'
    }
  ],

  partSummary: {
    majorEvents: [
      'Partition of the Kuru kingdom: Pandavas receive the wasteland of Khandavaprastha',
      'Arjuna and Krishna assist Agni in consuming Khandava forest; Arjuna receives Gandiva and Krishna receives Sudarshana',
      'Maya Danava constructs the breathtaking, illusion-filled Maya Sabha palace in Indraprastha',
      'Bhima slays tyrant Jarasandha in Magadha with Krishna\'s guidance, freeing eighty-six captive kings',
      'The four Pandavas conquer the four cardinal directions during the Digvijaya campaigns',
      'Performance of the Rajasuya Yajna and bestowing of the Agrapuja on Lord Sri Krishna',
      'Shishupala crosses the boundary of one hundred insults and is beheaded by the Sudarshana Chakra',
      'Duryodhana is deceived by the optical illusions of the Maya Sabha and humiliated by the pool plunge'
    ],
    majorEvents_te: [
      'కురు రాజ్య విభజన: పాండవులకు ఖాండవప్రస్థ అడవి దక్కడం',
      'ఖాండవ దహనంలో అగ్నిదేవుని అనుగ్రహం, గాండీవం మరియు సుదర్శన చక్ర ప్రాప్తి',
      'మయదానవుడు ఇంద్రప్రస్థంలో నిర్మించిన అద్భుత మాయాసభ',
      'మగధలో జరాసంధుడిని చీల్చి చంపిన భీమసేనుడు; బందీ రాజులకు విముక్తి',
      'నాలుగు దిక్కులను జయించిన పాండవుల దిగ్విజయ యాత్ర',
      'వైభవంగా రాజసూయ యాగం & శ్రీకృష్ణునికి అగ్రపూజ',
      'నూరు తప్పులు దాటిన శిశుపాలుడిని సుదర్శన చక్రంతో సంహరించిన శ్రీకృష్ణుడు',
      'మాయాసభలో భ్రమపడి కొలనులో పడిపోయిన దుర్యోధనుని అవమానం'
    ],
    majorEvents_hi: [
      'कुरु राज्य का बंटवारा: पांडवों को खांडवप्रस्थ की बंजर भूमि मिलना',
      'खांडव दहन द्वारा अर्जुन को गांडीव और श्रीकृष्ण को सुदर्शन की प्राप्ति',
      'मय दानव द्वारा इंद्रप्रस्थ में चमत्कारी मयसभा का निर्माण',
      'मगध में जरासंध का वध और 86 राजाओं की मुक्ति',
      'चारों पांडवों का ऐतिहासिक दिग्विजय अभियान',
      'राजसूय यज्ञ का आयोजन और श्रीकृष्ण की अग्रपूजा',
      'सौ अपराधों के उपरांत सुदर्शन चक्र द्वारा शिशुपाल का वध',
      'मयसभा के जलकुंड में दुर्योधन का गिरना और प्रतिशोध का संकल्प'
    ],
    importantCharacters: [
      'Emperor Yudhishthira - The righteous monarch who achieved Chakravartin status',
      'Sri Krishna - Supreme orchestrator who rid the world of tyrants and protected Dharma',
      'Arjuna - Wielder of Gandiva who secured peace during the sacrifice',
      'Bhima - Titan who crushed Jarasandha and led the eastern conquest',
      'Maya Danava - Master architect whose artistic illusion provoked historical turning points',
      'Duryodhana - Cousin whose jealousy was turned into an uncontrollable fire'
    ],
    importantCharacters_te: [
      'ధర్మరాజు - సార్వభౌముడిగా నిలిచిన చక్రవర్తి',
      'శ్రీకృష్ణుడు - అగ్రపూజనీయుడు, అధర్మాన్ని కూల్చిన పరమాత్మ',
      'అర్జునుడు - గాండీవధారి, ఖాండవ వీరుడు',
      'భీముడు - జరాసంధ సంహర్త',
      'దుర్యోధనుడు - అసూయతో రగిలిపోయిన కౌరవ జ్యేష్ఠుడు'
    ],
    importantCharacters_hi: [
      'सम्राट युधिष्ठिर - चक्रवर्ती धर्मराज',
      'श्रीकृष्ण - अग्रपूजा के अधिकारी एवं सुदर्शनधारी',
      'अर्जुन - गांडीवधारी वीर',
      'भीम - जरासंध का अंत करने वाले महाबली',
      'दुर्योधन - ईर्ष्या और अपमान की आग में जलने वाला कौरव'
    ],
    importantRelationships: [
      'Pandavas & Krishna: The divine relationship between human righteousness and divine grace',
      'Kauravas & Pandavas: Irrevocable shift from sibling rivalry to mortal enmity',
      'Krishna & Shishupala: The boundary of divine tolerance and karmic retribution'
    ],
    importantRelationships_te: [
      'పాండవులు & శ్రీకృష్ణుడు: మానవ ధర్మానికి దైవశక్తి తోడైన అద్భుత బంధం',
      'కౌరవులు & పాండవులు: అసూయతో మొదలై శాశ్వత శత్రుత్వంగా మారిన సంబంధం',
      'కృష్ణుడు & శిశుపాలుడు: ఓర్పు నశించినప్పుడు దైవ న్యాయం ఎలా ఉంటుందో తెలిపే ఉదాహరణ'
    ],
    importantRelationships_hi: [
      'पांडव और श्रीकृष्ण - धर्म और परमात्मा का अटूट संबंध',
      'कौरव और पांडव - ईर्ष्या से उपजा विनाशकारी द्वेष',
      'श्रीकृष्ण और शिशुपाल - क्षमा की सीमा और कर्मफल'
    ],
    majorDecisions: [
      'Yudhishthira accepting the barren wilderness of Khandavaprastha without rebellion',
      'Bhima choosing to duel Jarasandha without weapons to uphold Kshatriya code',
      'Bhishma nominating Krishna for the foremost Agrapuja before all kings',
      'Krishna honoring his pledge to Shishupala’s mother until the 100th offense'
    ],
    majorDecisions_te: [
      'ఎలాంటి గొడవ లేకుండా ఖాండవప్రస్థాన్ని అంగీకరించిన ధర్మరాజు వివేకం',
      'జరాసంధుడిని చంపి బందీ రాజులను కాపాడాలన్న కృష్ణుని సంకల్పం',
      'శ్రీకృష్ణునికి అగ్రపూజను ప్రతిపాదించిన భీష్ముని దూరదృష్టి',
      'తల్లికిచ్చిన మాటను నిలబెట్టుకుంటూ నూరు తప్పుల వరకు వేచిచూసిన కృష్ణుని సహనం'
    ],
    majorDecisions_hi: [
      'बंजर भूमि खांडवप्रस्थ को सहज स्वीकार करना',
      'बंदी राजाओं को मुक्त कराने हेतु जरासंध से द्वंद्व का निर्णय',
      'राजसूय में श्रीकृष्ण की अग्रपूजा का ऐतिहासिक निर्णय',
      'सौ अपराधों तक क्षमा का वचन निभाना'
    ],
    consequences: [
      'Indraprastha becomes the glittering cultural and military capital of the world',
      'Duryodhana’s wounded ego and jealousy lead directly to the conspiracy of the loaded dice',
      'The cosmic balance shifts decisively toward the Pandavas under Krishna’s aegis'
    ],
    consequences_te: [
      'ఇంద్రప్రస్థం ప్రపంచానికే దివ్య రాజధానిగా వెలుగొందడం',
      'అవమానంతో రగిలిన దుర్యోధనుడు జూద క్రీడకు కుట్ర పన్నడం',
      'భారత యుద్ధానికి నాంది పలికిన మాయాసభ సంఘటన'
    ],
    consequences_hi: [
      'इंद्रप्रस्थ का विश्व की सबसे वैभवशाली राजधानी बनना',
      'दुर्योधन के अपमान से द्यूत-क्रीड़ा (जुआ) के षड्यंत्र का जन्म',
      'महाभारत के महायुद्ध की पृष्ठभूमि का तैयार होना'
    ]
  },

  slides: [
    {
      slideNumber: 1,
      title: 'Khandavaprastha to Indraprastha',
      title_te: 'ఖాండవప్రస్థం నుండి ఇంద్రప్రస్థం',
      title_hi: 'खांडवप्रस्थ से इंद्रप्रस्थ',
      content: 'Given a barren desert, the Pandavas build the most magnificent celestial city in the world through pure dedication.',
      content_te: 'ఎడారిని పొందినా, తమ శ్రమ మరియు ధర్మంతో ఇంద్రప్రస్థమనే స్వర్గాన్ని నిర్మించిన పాండవులు.',
      content_hi: 'बंजर भूमि को भी अपने पुरुषार्थ और धर्म से विश्व का सबसे सुंदर नगर इंद्रप्रस्थ बना दिया।',
      moralLesson: 'Circumstances do not define greatness; righteous effort turns a wasteland into a kingdom.',
      moralLesson_te: 'పరిస్థితులు ముఖ్యం కాదు; ధర్మబద్ధమైన ప్రయత్నం ఎడారిని కూడా నందనవనంగా మారుస్తుంది.',
      moralLesson_hi: 'परिस्थितियाँ नहीं, मनुष्य का संकल्प और कर्म ही उसके भाग्य का निर्माण करते हैं।'
    },
    {
      slideNumber: 2,
      title: 'The Divine Weapons',
      title_te: 'దివ్యాస్త్రాల ప్రాప్తి',
      title_hi: 'दिव्य अस्त्रों की प्राप्ति',
      content: 'Assisting Agni at Khandava grants Arjuna the celestial Gandiva bow and Krishna the blazing Sudarshana Chakra.',
      content_te: 'ఖాండవ దహనంలో సహాయపడి అర్జునుడు గాండీవాన్ని, కృష్ణుడు సుదర్శన చక్రాన్ని పొందారు.',
      content_hi: 'खांडव दहन में सहायता कर अर्जुन ने गांडीव और श्रीकृष्ण ने सुदर्शन चक्र प्राप्त किया।',
      moralLesson: 'Selfless support to the cosmic order invites divine blessings and invincible strength.',
      moralLesson_te: 'ప్రకృతి ధర్మానికి తోడ్పడితే దైవం అజేయమైన శక్తులను ప్రసాదిస్తుంది.',
      moralLesson_hi: 'संसार और धर्म के हित में किया गया कार्य कभी व्यर्थ नहीं जाता।'
    },
    {
      slideNumber: 3,
      title: 'The Limits of Tolerance',
      title_te: 'ఓర్పు యొక్క హద్దు',
      title_hi: 'सहनशीलता की सीमा',
      content: 'Krishna tolerates one hundred insults from Shishupala, but strikes when the boundary of virtue is crossed.',
      content_te: 'కృష్ణుడు నూరు తప్పుల వరకు క్షమించాడు, కానీ హద్దు దాటగానే సుదర్శన చక్రంతో సంహరించాడు.',
      content_hi: 'श्रीकृष्ण ने सौ गालियाँ सहन कीं, किंतु मर्यादा का उल्लंघन होते ही सुदर्शन से न्याय किया।',
      moralLesson: 'Patience is a sacred virtue, but righteousness must act when injustice exceeds all bounds.',
      moralLesson_te: 'ఓర్పు గొప్ప గుణమే, కానీ అధర్మం హద్దులు దాటినప్పుడు దండన తప్పదు.',
      moralLesson_hi: 'धैर्य महान गुण है, किंतु अधर्म जब सीमा पार करे तो उसका अंत अनिवार्य हो जाता है।'
    }
  ]
};
