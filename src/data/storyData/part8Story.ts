import { StoryPart } from '../../types/game';

export const PART_8_STORY: StoryPart = {
  partNumber: 8,
  title: 'The Holy Battlefield & Bhagavad Gita',
  title_te: 'కురుక్షేత్ర రణరంగం & శ్రీమద్భగవద్గీత',
  title_hi: 'कुरुक्षेत्र युद्धारम्भ और श्रीमद्भगवद्गीता',
  sanskritTitle: 'श्रीमद्भगवद्गीता भीष्मशरशय्या च',
  summary: 'The roaring conches of Kurukshetra, Arjuna’s despair, Lord Krishna’s timeless song of wisdom (Bhagavad Gita), the cosmic battlefield revelation, and the fall of Grandsire Bhishma onto the bed of arrows.',
  summary_te: 'కురుక్షేత్రంలో శంఖారావం, యుద్ధరంగాన అర్జునుని విషాద యోగం, శ్రీకృష్ణుని దివ్య గీతోపదేశం, విశ్వరూప దర్శనం, పది రోజుల భీష్ముని ప్రతాపం, మరియు అంపశయ్యపై కురువృద్ధుని పతనం.',
  summary_hi: 'कुरुक्षेत्र में शंखनाद, अर्जुन का विषाद, भगवान श्रीकृष्ण का अमर गीता-उपदेश, समरभूमि में विश्वरूप, पितामह भीष्म का दस दिन का महापराक्रम और शरशय्या पर शयन।',
  characterRewardId: 'arjuna',

  charactersInPart: [
    {
      id: 'arjuna_gita',
      name: 'Arjuna (Partha / Savyasachin)',
      name_te: 'అర్జునుడు (పార్థుడు / సవ్యసాచి)',
      name_hi: 'अर्जुन (पार्थ / सव्यसाची)',
      title: 'Disciple of the Divine & Hero of the Gita',
      title_te: 'గీతా శ్రోత & గాండీవధారి',
      title_hi: 'गीता के अधिकारी श्रोता एवं महाधनुर्धर',
      relationship: 'Friend and devotee of Krishna; third Pandava',
      relationship_te: 'శ్రీకృష్ణుని ఆత్మసఖుడు; గీతోపదేశం పొందిన వీరుడు',
      relationship_hi: 'श्रीकृष्ण के अनन्य सखा; जिन्होंने मोह त्यागकर युद्ध किया',
      intro: 'Overcome by agonizing grief seeing kin and gurus across the line, he laid down his bow until enlightened by Krishna.',
      intro_te: 'బంధువులను, గురువులను చంపలేక ధనుస్సును వదిలేసి, కృష్ణుని గీతోపదేశంతో జ్ఞానోదయమై గాండీవాన్ని సంధించిన మహావీరుడు.',
      intro_hi: 'स्वजनों के मोह में गांडीव रखकर बैठ गए, किंतु गीता-ज्ञान पाकर निष्काम कर्म हेतु तत्पर हुए।',
      avatarUrl: '/assets/wallpapers/arjuna.jpg',
      role: 'hero'
    },
    {
      id: 'krishna_sarathi',
      name: 'Lord Sri Krishna (Parthasarathi)',
      name_te: 'శ్రీకృష్ణ పరమాత్మ (పార్థసారథి)',
      name_hi: 'भगवान श्रीकृष्ण (पार्थसारथी)',
      title: 'The Eternal Preceptor & Divine Charioteer',
      title_te: 'జగద్గురువు & రథసారథి',
      title_hi: 'जगद्गुरु एवं दिव्य सारथी',
      relationship: 'Charioteer to Arjuna; Speaker of the Bhagavad Gita',
      relationship_te: 'అర్జునుని రథసారథి; భగవద్గీతను ఉపదేశించిన పరబ్రహ్మ',
      relationship_hi: 'अर्जुन के रथ के सारथी; भगवद्गीता के अमर वक्ता',
      intro: 'Held the reins of white horses, dispelled the darkness of delusion, and steered righteous human action toward cosmic truth.',
      intro_te: 'తెల్లని గుర్రాల పగ్గాలు పట్టి, మోహంలో మునిగిన అర్జునుడికి గీతామృతాన్ని అందించి ధర్మ రక్షణకు నడిపించిన జగద్గురువు.',
      intro_hi: 'चार श्वेत घोड़ों की रास थामकर अर्जुन के अज्ञान को मिटाने वाले और निष्काम कर्मयोग का मार्ग दिखाने वाले।',
      avatarUrl: '/assets/wallpapers/krishna.jpg',
      role: 'mentor'
    },
    {
      id: 'bhishma_commander',
      name: 'Grandsire Bhishma',
      name_te: 'భీష్మ పితామహుడు',
      name_hi: 'भीष्म पितामह',
      title: 'Supreme Commander of the Kaurava Host',
      title_te: 'కౌరవ సైన్యాధ్యక్షుడు & అంపశయ్య యోధుడు',
      title_hi: 'कौरव सेनापति एवं शरशय्या पर लेटे महापितामह',
      relationship: 'Supreme Patriarch; commanded the army for the first ten days',
      relationship_te: 'కురువంశ పితామహుడు; మొదటి పది రోజుల యుద్ధానికి సర్వసైన్యాధ్యక్షుడు',
      relationship_hi: 'कुरुवंश के पितामह; प्रथम दस दिन के अजेय सेनापति',
      intro: 'Fought with the ferocity of a blazing sun, slaughtering ten thousand warriors daily until struck down on a bed of arrows.',
      intro_te: 'ప్రతిరోజూ పదివేల మంది వీరులను సంహరిస్తూ ప్రళయకాల సూర్యుడిలా పోరాడి, చివరకు అంపశయ్యపై ఒరిగిన అజేయ వీరుడు.',
      intro_hi: 'प्रतिदिन दस सहस्र सैनिकों का संहार करने वाले महायोद्धा, जो शिखंडी के आगे अस्त्र त्यागकर शरशय्या पर सोए।',
      avatarUrl: '/assets/wallpapers/bhishma.jpg',
      role: 'elder'
    },
    {
      id: 'yudhishthira_blessed',
      name: 'King Yudhishthira (Dharmaraja)',
      name_te: 'ధర్మరాజు',
      name_hi: 'धर्मराज युधिष्ठिर',
      title: 'Emperor of Unflinching Dharma',
      title_te: 'ధర్మ స్వరూపుడు',
      title_hi: 'विनम्रता और धर्म के अवतार',
      relationship: 'Commander-in-Chief of the righteous alliance; eldest Pandava',
      relationship_te: 'పాండవాగ్రజుడు; యుద్ధానికి ముందు పెద్దల ఆశీర్వాదం తీసుకున్న వినయమూర్తి',
      relationship_hi: 'पांडव ज्येष्ठ; जिन्होंने युद्ध से पूर्व शत्रुपक्ष के बड़ों का आशीर्वाद लिया',
      intro: 'Walked barefoot without armor into the enemy ranks before the battle to seek blessings from Bhishma, Drona, and Kripa.',
      intro_te: 'యుద్ధం మొదలయ్యే ముందు నిరాయుధుడిగా నడిచి వెళ్ళి భీష్మ, ద్రోణ, కృపాచార్యుల పాదాలకు నమస్కరించి విజయీభవ ఆశీస్సులు పొందిన వినయశీలి.',
      intro_hi: 'शस्त्र और कवच उतारकर अकेले कौरव सेना में जाकर भीष्म और द्रोण के चरण छूकर विजय का आशीर्वाद पाने वाले।',
      avatarUrl: '/assets/wallpapers/yudhishthira.jpg',
      role: 'hero'
    },
    {
      id: 'shikhandi_warrior',
      name: 'Shikhandi (Prince of Panchala)',
      name_te: 'శిఖండి (పాంచాల రాకుమారుడు)',
      name_hi: 'शिखंडी (पांचाल राजकुमार)',
      title: 'Reborn Avenger of Princess Amba',
      title_te: 'అంబా పునర్జన్మ & భీష్మ పతన సాధనం',
      title_hi: 'अंबा का पुनर्जन्म एवं भीष्म के पतन का निमित्त',
      relationship: 'Son of King Drupada; brother of Draupadi and Dhrishtadyumna',
      relationship_te: 'ద్రుపద మహారాజు కుమారుడు; ద్రౌపది సోదరుడు',
      relationship_hi: 'द्रुपद के पुत्र और द्रौपदी के भाई',
      intro: 'Placed before Arjuna\'s chariot on Day 10, causing Bhishma to lower his divine bow due to his sacred vow.',
      intro_te: 'పదవ రోజు అర్జునుని రథం ముందు నిలబడగా, స్త్రీ రూపంలో జన్మించిన వ్యక్తిపై ఆయుధం పట్టనన్న నియమంతో భీష్ముడు విల్లు దించాడు.',
      intro_hi: 'दसवें दिन अर्जुन के आगे खड़े होकर जिन्होंने भीष्म को धनुष नीचे रखने पर विवश किया।',
      avatarUrl: '/assets/wallpapers/draupadi.jpg',
      role: 'hero'
    },
    {
      id: 'sanjaya_seer',
      name: 'Sanjaya (The Seer of Truth)',
      name_te: 'సంజయుడు',
      name_hi: 'संजय',
      title: 'Royal Scribe & Possessor of Divya Drishti',
      title_te: 'దివ్య దృష్టి సంపన్నుడు & సత్య వక్త',
      title_hi: 'दिव्य दृष्टि प्राप्त सत्यवादी सारथी',
      relationship: 'Charioteer and counselor to King Dhritarashtra',
      relationship_te: 'ధృతరాష్ట్రునికి యుద్ధాన్ని కళ్ళకు కట్టినట్లు వివరించిన జ్ఞాని',
      relationship_hi: 'धृतराष्ट्र को कुरुक्षेत्र का आंखों देखा हाल सुनाने वाले',
      intro: 'Blessed with cosmic vision by Sage Vyasa to witness and recount every arrow, conversation, and thought of the war.',
      intro_te: 'వ్యాస మహర్షి ప్రసాదించిన దివ్య దృష్టితో హస్తినాపురంలో కూర్చునే కురుక్షేత్ర రణరంగాన్ని వర్ణించిన విజ్ఞాని.',
      intro_hi: 'महर्षि वेदव्यास के वरदान से राजमहल में बैठकर समरभूमि की एक-एक घटना का सजीव वर्णन करने वाले।',
      avatarUrl: '/assets/wallpapers/sanatana-dharma.jpg',
      role: 'mentor'
    }
  ],

  familyTree: {
    title: 'The Kurukshetra Deployment: Commanders & Divinities',
    title_te: 'కురుక్షేత్ర వ్యూహం & సేనాధిపతులు',
    title_hi: 'कुरुक्षेत्र का व्यूह और सेनापति',
    description: 'The supreme military structure of the 18-day battle, led by Grandsire Bhishma and guided by Sri Krishna.',
    description_te: 'భీష్ముని నేతృత్వంలోని కౌరవ సైన్యం మరియు కృష్ణుని మార్గదర్శకత్వంలోని పాండవ సైన్యాల నిర్మాణం.',
    description_hi: 'कुरुक्षेत्र के महासमर में दोनों सेनाओं के प्रमुख महारथियों और सेनापतियों का विन्यास।',
    nodes: [
      { id: 'bhishma_t8', name: 'Grandsire Bhishma', name_te: 'భీష్ముడు', name_hi: 'भीष्म पितामह', clan: 'Kuru', generation: 1, isKeyCharacter: true, role: 'Supreme Commander (Days 1–10)' },
      { id: 'krishna_t8', name: 'Sri Krishna', name_te: 'శ్రీకృష్ణుడు', name_hi: 'पार्थसारथी कृष्ण', clan: 'Yadava', generation: 3, isKeyCharacter: true, role: 'Cosmic Charioteer & Teacher' },
      { id: 'arjuna_t8', name: 'Arjuna', name_te: 'అర్జునుడు', name_hi: 'गांडीवधारी अर्जुन', clan: 'Pandava', generation: 3, isKeyCharacter: true, role: 'Foremost Archer' },
      { id: 'yudhisthira_t8', name: 'Yudhishthira', name_te: 'ధర్మరాజు', name_hi: 'युधिष्ठिर', clan: 'Pandava', generation: 3, role: 'Sovereign of Dharma' },
      { id: 'dhrishtadyumna_t8', name: 'Dhrishtadyumna', name_te: 'దృష్టద్యుమ్నుడు', name_hi: 'धृष्टद्युम्न', clan: 'Panchala', generation: 3, role: 'Pandava Commander-in-Chief' },
      { id: 'shikhandi_t8', name: 'Shikhandi', name_te: 'శిఖండి', name_hi: 'शिखंडी', clan: 'Panchala', generation: 3, role: 'Shield against Bhishma' },
      { id: 'drona_t8', name: 'Guru Drona', name_te: 'ద్రోణాచార్యుడు', name_hi: 'द्रोणाचार्य', clan: 'Kuru', generation: 2, role: 'Master of Astras' },
      { id: 'karna_t8', name: 'Karna', name_te: 'కర్ణుడు', name_hi: 'कर्ण', clan: 'Kaurava', generation: 3, role: 'Sitting out until Bhishma falls' }
    ],
    links: [
      { from: 'krishna_t8', to: 'arjuna_t8', relationship: 'mentor_of', label: 'Parthasarathi & Charioteer' },
      { from: 'arjuna_t8', to: 'bhishma_t8', relationship: 'rivalry', label: 'Pierced with Arrows' },
      { from: 'shikhandi_t8', to: 'arjuna_t8', relationship: 'alliance', label: 'Rode on Chariot Front' },
      { from: 'dhrishtadyumna_t8', to: 'yudhisthira_t8', relationship: 'alliance', label: 'Field General' },
      { from: 'karna_t8', to: 'bhishma_t8', relationship: 'rivalry', label: 'Refused to fight under Bhishma' }
    ]
  },

  illustratedPages: [
    {
      pageNumber: 1,
      title: 'The Field of Destiny: The Conches Sound at Kurukshetra',
      title_te: 'కురుక్షేత్ర శంఖారావం & రెండు మహా సైన్యాలు',
      title_hi: 'कुरुक्षेत्र का शंखनाद और दो विशाल सेनाएं',
      sceneTag: 'Dharmakshetra Kurukshetra at Dawn',
      sceneTag_te: 'ధర్మక్షేత్రమైన కురుక్షేత్ర రణభూమి',
      sceneTag_hi: 'धर्मक्षेत्र कुरुक्षेत्र का विस्तीर्ण मैदान',
      hookLine: 'Conch shells roared like colliding thunderclouds as four million warriors raised their weapons.',
      hookLine_te: 'ముల్లోకాలు దద్దరిల్లేలా మోగిన శంఖాలు; ఎదురెదురుగా నిలబడిన పద్దెనిమిది అక్షౌహిణుల మహాసైన్యాలు.',
      hookLine_hi: 'पाञ्चजन्य और देवदत्त शंखों के भयानक घोष से आकाश और पृथ्वी थरथराने लगे।',
      paragraphs: [
        'On the sacred plain of Dharmakshetra Kurukshetra, eighteen Akshauhinis stood deployed in colossal formations. The golden chariot of Arjuna, gleaming like the morning sun and bearing the banner of Lord Hanuman, rolled forward drawn by four milk-white celestial stallions.',
        'Grandsire Bhishma blew his colossal conch shell, sounding like the roar of a celestial lion. Instantly, drums, cymbals, horns, and cow-horns crashed together in an ear-splitting clamor.',
        'In answer, Lord Krishna blew His divine conch Paanchajanya; Arjuna blew the gift of the gods, Devadatta; Bhima blew the monstrous Paundra; Yudhishthira blew Anantavijaya; Nakula and Sahadeva blew Sughosha and Manipushpaka. That tumultuous sonic blast shook both heaven and earth, rending the hearts of the Kauravas.'
      ],
      paragraphs_te: [
        'ధర్మక్షేత్రమైన కురుక్షేత్రంలో పద్దెనిమిది అక్షౌహిణుల సైన్యాలు మొహరించాయి. హనుమధ్వజం రెపరెపలాడుతుండగా, నాలుగు తెల్లని గుర్రాలు పూన్చిన దివ్య రథంపై శ్రీకృష్ణార్జునులు ముందుకు కదిలారు.',
        'కౌరవ సైన్యానికి నాయకత్వం వహిస్తున్న భీష్మ పితామహుడు సింహగర్జన చేస్తూ తన దివ్య శంఖాన్ని పూరించాడు. రణభేరులు, దుందుభులు మ్రోగాయి.',
        'దానికి సమాధానంగా శ్రీకృష్ణుడు పాంచజన్యాన్ని, అర్జునుడు దేవదత్తాన్ని, భీముడు పౌండ్రాన్ని, ధర్మరాజు అనంతవిజయాన్ని పూరించారు. ఆ శంఖారావాల భీకర ధ్వనికి భూమ్యాకాశాలు కంపించాయి, కౌరవుల గుండెల్లో దడ పుట్టింది.'
      ],
      paragraphs_hi: [
        'धर्मक्षेत्र कुरुक्षेत्र के विस्तीर्ण मैदान में 18 अक्षौहिणी सेनाएं आमने-सामने डटी थीं। कपिध्वज रथ पर सवार होकर श्रीकृष्ण और अर्जुन रणभूमि के मध्य पहुँचे।',
        'कौरव सेनापति भीष्म पितामह ने सिंहगर्जना करते हुए अपना शंख फूंका। इसके साथ ही नगाड़े, भेरी और शृंग एक साथ बज उठे।',
        'उत्तर में भगवान श्रीकृष्ण ने अपना दिव्य पाञ्चजन्य शंख बजाया, अर्जुन ने देवदत्त और भीमसेन ने पौण्ड्र शंख फूंका। उस भयानक तुमुल घोष ने आकाश और धरती को गुंजा दिया और धृतराष्ट्र के पुत्रों के हृदय विदीर्ण कर दिए।'
      ],
      dialogueQuote: '"Blow thy celestial shell, Janardana; let the three worlds know that righteousness has arrived to claim its due!"',
      dialogueQuote_te: '"శంఖాన్ని పూరించు కృష్ణా! అధర్మంపై ధర్మం ప్రతీకారం తీర్చుకోవడానికి వచ్చిందని ముల్లోకాలకూ చాటిచెప్పు!"',
      dialogueQuote_hi: '"पाञ्चजन्य फूंको माधव! तीनों लोकों को विदित हो जाए कि धर्म अपना अधिकार लेने समर में उतर चुका है!"',
      speaker: 'Arjuna before the conch blowing',
      speaker_te: 'శంఖం పూరిస్తూ అర్జునుడు',
      speaker_hi: 'शंखनाद से पूर्व अर्जुन का आह्वान',
      imageUrl: '/assets/wallpapers/arjuna.jpg',
      imageCaption: 'Sri Krishna blowing the Paanchajanya and Arjuna blowing the Devadatta conch at dawn.',
      imageCaption_te: 'కురుక్షేత్ర ఉదయాన పాంచజన్యం, దేవదత్త శంఖాలను పూరిస్తున్న శ్రీకృష్ణార్జునులు.',
      imageCaption_hi: 'समरभूमि में पाञ्चजन्य और देवदत्त शंख फूंकते पार्थसारथी श्रीकृष्ण और धनुर्धर अर्जुन।'
    },
    {
      pageNumber: 2,
      title: 'Yudhishthira’s Humility: Seeking the Blessings of the Elders',
      title_te: 'ధర్మరాజు వినయం & శత్రు సేనలో పెద్దల ఆశీర్వాదం',
      title_hi: 'धर्मराज की विनम्रता और शत्रुपक्ष से आशीर्वाद',
      sceneTag: 'No-Man’s Land Between the Armies',
      sceneTag_te: 'ఇరు సైన్యాల మధ్య ఖాళీ స్థలం',
      sceneTag_hi: 'दोनों सेनाओं के बीच का क्षेत्र',
      hookLine: 'Dropping armor and weapons, the King walked barefoot to touch the feet of those he was about to fight.',
      hookLine_te: 'ఆయుధాలను వదిలేసి, ఒంటరిగా నడుచుకుంటూ వెళ్ళి శత్రు సైన్యంలోని గురువుల కాళ్ళకు నమస్కరించిన ధర్మరాజు.',
      hookLine_hi: 'कवच और अस्त्र उतारकर अकेले पैदल चलकर भीष्म और द्रोण के चरण छूने पहुँचे धर्मराज युधिष्ठिर।',
      paragraphs: [
        'Just as arrows were notched to bows, Emperor Yudhishthira did something that astonished both hosts. He took off his golden armor, laid down his weapons, stepped down from his royal chariot, and began walking barefoot toward the Kaurava battle lines with folded hands.',
        'Arjuna, Bhima, Nakula, Sahadeva, and Krishna hurried behind him in alarm: "Brother, what are you doing? Why do you enter the lion’s den unarmed?" But Yudhishthira walked straight to Grandsire Bhishma’s chariot and fell at his feet: "Grandfather, permit us to fight. Bless us with victory!"',
        'Tears flooded Bhishma’s eyes: "Noble child! Had you not sought my blessings, I would have cursed you to defeat. Though my body is bound to the throne of Dhritarashtra by salt, my soul and prayers are forever with you. Fight, for where there is Dharma, there is victory!" In the same way, Yudhishthira touched the feet of Guru Drona, Kripacharya, and King Shalya, winning their tearful blessings of victory before firing a single arrow.'
      ],
      paragraphs_te: [
        'యుద్ధం ప్రారంభమయ్యే చివరి క్షణంలో ధర్మరాజు తన కవచాన్ని, ఆయుధాలను రథంపై ఉంచి, ఒంటరిగా కాలినడకన కౌరవ సైన్యం వైపు నడవడం చూసి అందరూ నిశ్చేష్టులయ్యారు.',
        'అర్జునుడు, భీముడు కంగారుగా పరుగున వచ్చారు: "అన్నా! ఏంటిది? నిరాయుధుడిగా శత్రువుల వైపు ఎందుకు వెళ్తున్నావు?" కానీ ధర్మరాజు నేరుగా భీష్ముని రథం వద్దకు వెళ్ళి ఆయన పాదాలపై పడ్డాడు: "పితామహా! మీతో యుద్ధం చేయడానికి అనుమతించండి, మమ్మల్ని ఆశీర్వదించండి!"',
        'భీష్ముని కళ్ళల్లో నీళ్ళు తిరిగాయి: "నాయనా! నీవు నా ఆశీర్వాదం తీసుకోకపోయి ఉంటే నేను నిన్ను శపించేవాడిని. నా శరీరం కౌరవుల ఉప్పు తిని వారి పక్షాన ఉన్నా, నా ఆత్మ ఎల్లప్పుడూ మీ వైపే ఉంటుంది. విజయం మీదే, ఎందుకంటే ఎక్కడ ధర్మం ఉంటుందో అక్కడే విజయం ఉంటుంది!" అలాగే ద్రోణ, కృప, శల్యుల ఆశీస్సులు కూడా తీసుకుని ధర్మరాజు తిరిగి వచ్చాడు.'
      ],
      paragraphs_hi: [
        'युद्ध आरंभ होने ही वाला था कि युधिष्ठिर ने अपना कवच और धनुष रथ पर रख दिया और नंगे पैर दोनों हाथ जोड़कर कौरव सेना की ओर चल पड़े।',
        'अर्जुन और भीम घबराकर दौड़े: "भ्राता! यह क्या कर रहे हैं?" किंतु युधिष्ठिर सीधे भीष्म के रथ के पास पहुँचे और उनके चरणों में गिर पड़े: "पितामह! हमें युद्ध की अनुमति दीजिए और विजय का आशीर्वाद दीजिए!"',
        'भीष्म की आँखें भर आईं: "वत्स! यदि तुम आशीर्वाद न लेते, तो मैं तुम्हें पराजय का शाप देता। मेरा शरीर कौरवों के अन्न से बंधा है, किंतु मेरा आशीर्वाद तुम्हारे साथ है। जहाँ धर्म है, वहाँ विजय निश्चित है!" इसी प्रकार युधिष्ठिर ने द्रोणाचार्य, कृपाचार्य और शल्य के चरण छूकर विजय का वरदान प्राप्त किया।'
      ],
      dialogueQuote: '"Yato Dharmas Tato Jayah — Where there is righteousness, there alone is victory!"',
      dialogueQuote_te: '"యతో ధర్మస్తతో జయః — ఎక్కడ ధర్మం ఉంటుందో అక్కడ తప్పక విజయం లభిస్తుంది!"',
      dialogueQuote_hi: '"यतो धर्मस्ततो जयः — जहाँ धर्म है, वहीं विजय है!"',
      speaker: 'Grandsire Bhishma blessing Yudhishthira',
      speaker_te: 'ధర్మరాజును ఆశీర్వదిస్తూ భీష్ముడు',
      speaker_hi: 'भीष्म पितामह का युधिष्ठिर को विजय-आशीर्वाद',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'King Yudhishthira touching the lotus feet of Grandsire Bhishma between the two armies.',
      imageCaption_te: 'ఇరు సైన్యాల మధ్య భీష్ముని పాదాలకు నమస్కరిస్తున్న ధర్మరాజు.',
      imageCaption_hi: 'दोनों सेनाओं के मध्य पितामह भीष्म के चरण स्पर्श करते धर्मराज युधिष्ठिर।'
    },
    {
      pageNumber: 3,
      title: 'The Despondency of Arjuna: Gandiva Falls',
      title_te: 'అర్జున విషాద యోగం: జారిపడిన గాండీవం',
      title_hi: 'अर्जुन विषाद योग और गांडीव का छूटना',
      sceneTag: 'Center of the Battlefield Between Both Armies',
      sceneTag_te: 'ఇరు సైన్యాల సరిహద్దు మధ్య రథం',
      sceneTag_hi: 'कुरुक्षेत्र का मध्य भाग',
      hookLine: 'Stationed between the armies, the sight of grandfathers, uncles, and friends melted the warrior\'s iron resolve.',
      hookLine_te: 'కళ్ళముందున్న గురువులను, తాతలను, అన్నదమ్ములను చూసి కన్నీరు కారుస్తూ విల్లును జారవిడిచిన అర్జునుడు.',
      hookLine_hi: 'सामने पितामह, गुरु और भाइयों को देखकर महाधनुर्धर का गांडीव हाथ से छूटकर गिर पड़ा।',
      paragraphs: [
        'Arjuna said to Krishna: "O Achyuta, drive my chariot into the space between the two hosts, so that I may behold those who stand eager to fight for evil Duryodhana."',
        'Krishna parked the chariot directly opposite Bhishma and Drona. Gazing upon both sides, Arjuna saw grandfathers, fathers, teachers, maternal uncles, brothers, sons, grandsons, and lifelong companions. A terrifying wave of sorrow engulfed his soul.',
        'His limbs trembled, his mouth went dry, goosebumps rose on his flesh, and a burning fever consumed his skin. The mighty Gandiva slipped from his limp fingers. Collapsing backward onto the chariot seat, Arjuna wept: "O Krishna, I desire neither victory, nor kingdom, nor pleasures! How can happiness come from slaying our own kinsmen? Even if they kill me unarmed, it were better than this sin!"'
      ],
      paragraphs_te: [
        'అర్జునుడు కృష్ణుడితో: "కృష్ణా! నా రథాన్ని ఇరు సైన్యాల మధ్యలో నిలుపు; అధర్మపరుడైన దుర్యోధనుని కోసం నాతో పోరాడటానికి వచ్చిన వారెవరో నేను చూడాలి" అన్నాడు.',
        'కృష్ణుడు రథాన్ని సరిగ్గా భీష్మ, ద్రోణుల ఎదురుగా నిలిపాడు. అటువైపు చూసిన అర్జునునికి తాతలు, గురువులు, మేనమామలు, అన్నదమ్ములు, చిన్ననాటి మిత్రులు కనిపించారు. అతని మనసు తీవ్ర విషాదంలో మునిగిపోయింది.',
        'శరీరం వణికింది, గొంతు ఎండిపోయింది, చర్మం మండిపోయింది. చేతిలోని గాండీవ ధనుస్సు జారి కిందపడింది. రథంలో కూలబడి కన్నీరు కారుస్తూ: "కృష్ణా! స్వజనులను చంపి పొందే రాజ్యం నాకొద్దు, విజయమూ వద్దు! నన్ను వారు చంపినా సరే, నేను మాత్రం వీరిపై బాణాలు వేయలేను!" అని విలపించాడు.'
      ],
      paragraphs_hi: [
        'अर्जुन ने कहा: "हे अच्युत! मेरे रथ को दोनों सेनाओं के बीच में खड़ा कीजिए, ताकि मैं देख सकूँ कि दुर्योधन का साथ देने कौन-कौन आया है।"',
        'श्रीकृष्ण ने रथ को ठीक भीष्म और द्रोण के सामने खड़ा कर दिया। दोनों ओर दृष्टि डालते ही अर्जुन को अपने ही पितामह, गुरु, चाचा, भाई, पुत्र और सखा दिखाई दिए। उनका हृदय मोह और शोक से भर गया।',
        'अर्जुन के अंग शिथिल हो गए, मुख सूख गया और शरीर में कंपन होने लगा। उनके हाथों से दिव्य गांडीव छूटकर गिर पड़ा। रथ के पिछले भाग में बैठकर रोते हुए अर्जुन बोले: "हे कृष्ण! मुझे न विजय चाहिए, न राज्य और न सुख! अपने ही स्वजनों का वध करके हमें कौन सा सुख मिलेगा? वे मुझे मार भी दें, तो भी मैं उन पर प्रहार नहीं करूँगा!"'
      ],
      dialogueQuote: '"My limbs fail, my skin burns, and my bow Gandiva slips from my hand; I see no good in this slaughter."',
      dialogueQuote_te: '"నా అవయవాలు చచ్చుబడిపోతున్నాయి, చర్మం మండుతోంది, గాండీవం జారిపోతోంది; స్వజన సంహారంలో నాకు ఏ శ్రేయస్సూ కనిపించడం లేదు."',
      dialogueQuote_hi: '"मेरे हाथ कांप रहे हैं, गांडीव छूट रहा है और मेरा मन भ्रमित हो रहा है; स्वजनों के संहार में मुझे कोई कल्याण नहीं दिखता।"',
      speaker: 'Arjuna collapsing in despair',
      speaker_te: 'రథంలో కుప్పకూలుతూ అర్జునుడు',
      speaker_hi: 'विषादमग्न अर्जुन का विलाप',
      imageUrl: '/assets/wallpapers/arjuna.jpg',
      imageCaption: 'Arjuna sitting dejected on his chariot with his golden bow fallen, attended by Lord Krishna.',
      imageCaption_te: 'రథంపై గాండీవాన్ని జారవిడిచి విషాదంలో కూర్చున్న అర్జునుడు.',
      imageCaption_hi: 'रथ पर गांडीव रखकर शोकमग्न बैठे अर्जुन और उन्हें देखते भगवान श्रीकृष्ण।'
    },
    {
      pageNumber: 4,
      title: 'The Song of God: The Immortal Soul & Karma Yoga',
      title_te: 'గీతామృతం: ఆత్మ నిత్యత్వము & నిష్కామ కర్మయోగం',
      title_hi: 'श्रीमद्भगवद्गीता: अमर आत्मा और निष्काम कर्मयोग',
      sceneTag: 'Golden Chariot Between the Armies',
      sceneTag_te: 'కురుక్షేత్ర రణరంగంలో గీతోపదేశం',
      sceneTag_hi: 'समरभूमि में ज्ञान की अमर गंगा',
      hookLine: '"Weapons cannot pierce the Soul, fire cannot burn it; perform thy righteous duty without attachment."',
      hookLine_te: '"ఆత్మను ఆయుధాలు ఛేదించలేవు, అగ్ని కాల్చలేదు; ఫలాపేక్ష లేకుండా నీ కర్తవ్యాన్ని నిర్వహించు."',
      hookLine_hi: '"नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः; फल की चिंता त्यागकर केवल अपना कर्तव्य करो।"',
      paragraphs: [
        'Beholding his beloved friend drowned in delusion, Lord Sri Krishna smiled gently and spoke the supreme nectar of the Bhagavad Gita across eighteen glorious chapters.',
        '"Why dost thou grieve for that which is not worthy of grief, Partha? The wise mourn neither for the living nor for the dead. As a person discards worn-out garments and puts on new ones, so does the eternal Soul cast off worn-out bodies and enter new ones."',
        '"Weapons cannot cleave the Soul; fire cannot burn it; water cannot drown it; wind cannot dry it. It is eternal, all-pervading, and immutable! Thou hast a right only to perform righteous action, never to the fruits thereof (Karmanye Vadhikaraste Ma Phaleshu Kadachana). Arise, O Bharata! Shake off this petty faint-heartedness and fight as a warrior of Dharma!"'
      ],
      paragraphs_te: [
        'మోహంలో మునిగిన అర్జునుడిని చూసి శ్రీకృష్ణ పరమాత్మ చిరునవ్వుతో పద్దెనిమిది అధ్యాయాల దివ్య భగవద్గీతామృతాన్ని ఉపదేశించాడు.',
        '"శోకించకూడని వారి కోసం ఎందుకు శోకిస్తున్నావు పార్థా? పండితులు జీవించిన వారి కోసంగాని, మరణించిన వారి కోసంగాని బాధపడరు. మనుషులు పాతబడిన బట్టలను తీసేసి కొత్తవి ధరించినట్లే, ఆత్మ జీర్ణమైన శరీరాలను వదిలి కొత్త శరీరాలను ధరిస్తుంది."',
        '"ఆత్మను ఆయుధాలు నరకలేవు, అగ్ని కాల్చలేదు, నీరు తడపలేదు, గాలి ఆర్పలేదు. ఆత్మ నిత్యమైనది, శాశ్వతమైనది! నీ కర్తవ్యాన్ని ఆచరించడంలోనే నీకు అధికారం ఉంది, ఫలితంపై కాదు (కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన). లే అర్జునా! ఈ పిరికితనాన్ని వదిలి ధర్మ యుద్ధం చెయ్యి!" అని ప్రబోధించాడు.'
      ],
      paragraphs_hi: [
        'सखा अर्जुन को मोह में फंसा देखकर भगवान श्रीकृष्ण ने मंद मुस्कान के साथ अठारह अध्यायों में श्रीमद्भगवद्गीता का अमर उपदेश दिया।',
        '"हे पार्थ! तुम उनके लिए शोक करते हो जो शोक के योग्य नहीं हैं। ज्ञानी पुरुष न तो जीवितों के लिए रोते हैं और न मृतकों के लिए। जैसे मनुष्य पुराने वस्त्र त्यागकर नए वस्त्र धारण करता है, वैसे ही यह जीवात्मा पुराने शरीरों को छोड़कर नए शरीरों को प्राप्त होती है।"',
        '"आत्मा को न शस्त्र काट सकते हैं, न अग्नि जला सकती है, न जल भिगो सकता है और न वायु सुखा सकती है। यह अमर और सनातन है! कर्म पर ही तुम्हारा अधिकार है, उसके फलों पर कभी नहीं (कर्मण्येवाधिकारस्ते मा फलेषु कदाचन)। उठो धनंजय! इस हृदय की दुर्बलता को त्यागो और धर्मयुद्ध के लिए खड़े हो जाओ!"'
      ],
      dialogueQuote: '"Karmanye Vadhikaraste Ma Phaleshu Kadachana — Thy right is to work alone, never to its fruits."',
      dialogueQuote_te: '"కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన — కర్మ చేయడంలోనే నీకు అధికారం ఉంది, ఫలితాలపై కాదు."',
      dialogueQuote_hi: '"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन — तुम्हारा अधिकार केवल कर्म करने में है, उसके फल में कभी नहीं।"',
      speaker: 'Lord Sri Krishna in the Bhagavad Gita',
      speaker_te: 'శ్రీకృష్ణుని దివ్య గీతా బోధన',
      speaker_hi: 'भगवान श्रीकृष्ण का अमर गीता-उपदेश',
      imageUrl: '/assets/wallpapers/krishna.jpg',
      imageCaption: 'Lord Krishna delivering the immortal Bhagavad Gita to kneeling Arjuna on the chariot.',
      imageCaption_te: 'రథంపై మోకరిల్లిన అర్జునునికి భగవద్గీతను ఉపదేశిస్తున్న శ్రీకృష్ణ పరమాత్మ.',
      imageCaption_hi: 'युद्धक्षेत्र में अर्जुन को गीता का अमर संदेश देते जगद्गुरु श्रीकृष्ण।'
    },
    {
      pageNumber: 5,
      title: 'The Cosmic Form: Vishwaroopa on the Battlefield',
      title_te: 'రణరంగంలో విశ్వరూప దర్శనం: మోహం తొలగిన పార్థుడు',
      title_hi: 'समरभूमि में विराट रूप और अर्जुन का संशय-नाश',
      sceneTag: 'Across Time and Space at Kurukshetra',
      sceneTag_te: 'దేశకాలాలను దాటిన విశ్వరూప దర్శనం',
      sceneTag_hi: 'काल के चक्र में ब्रह्मांड का दर्शन',
      hookLine: 'He saw time itself devouring armies: "I am Time, destroyer of worlds, arrived to consume all."',
      hookLine_te: '"నేనే కాలమును, లోకాలను సంహరించే మృత్యువును; నీవు కేవలం నిమిత్తమాత్రుడివి మాత్రమే!"',
      hookLine_hi: '"कालोऽस्मि लोकक्षयकृत्प्रवृद्धो — मैं लोकों का नाश करने वाला महाकाल हूँ, तुम केवल निमित्त बनो!"',
      paragraphs: [
        'To dispel the final lingering doubt of Arjuna’s mortal intellect, Lord Krishna bestowed upon him divine spiritual vision (Divya Chakshu) and revealed His terrifying, boundless Universal Form (Vishwaroopa).',
        'Arjuna looked up and saw millions of blazing faces, thousands of celestial eyes, and countless arms wielding divine astras. The brilliance rivaled a thousand suns bursting into the sky at once! Within Krishna\'s cosmic body, Arjuna saw the entire universe—the suns, stars, gods, and all mortal realms.',
        'Horrified, Arjuna saw Grandsire Bhishma, Drona, Karna, and the sons of Dhritarashtra rushing headlong into Krishna\'s flaming mouths, their heads crushed between His razor fangs! The Lord spoke with cosmic vibration: "I am mighty Time (Kala), the shatterer of the worlds. Even without thee, all these warriors arrayed in enemy ranks shall cease to be. Therefore arise, win glory, and conquer thy foes; they have already been slain by Me—be thou merely the instrument, O Savyasachin!"'
      ],
      paragraphs_te: [
        'అర్జునుని అజ్ఞానాన్ని పూర్తిగా పటాపంచలు చేయడానికి శ్రీకృష్ణుడు దివ్య దృష్టిని ప్రసాదించి తన అనంత విశ్వరూపాన్ని చూపించాడు.',
        'వేలాది దివ్య ముఖాలు, అసంఖ్యాకమైన కళ్ళు, సకల ఆయుధాలు ధరించిన వేలాది చేతులు కనిపించాయి. ఒకేసారి వేయి సూర్యులు ఆకాశంలో ఉదయించినంత తేజస్సుతో ఆ రూపం వెలిగిపోయింది.',
        'ఆ విశ్వరూప ముఖాల్లోని అగ్నిజ్వాలల దంతాల మధ్య భీష్మ, ద్రోణ, కర్ణ, దుర్యోధనాదులంతా ఇప్పటికే నలిగిపోతూ కనిపించారు. భగవంతుడు గర్జించాడు: "నేనే లోకాలను నశింపజేసే కాలస్వరూపుడను! నీవు యుద్ధం చేయకపోయినా వీరంతా ఇప్పటికే నా చేత సంహరింపబడ్డారు. నీవు కేవలం నిమిత్తమాత్రుడివి (నిమిత్తమాత్రం భవ సవ్యసాచిన్) మాత్రమే!" అర్జునుడు భయభక్తులతో నమస్కరించి తన గాండీవాన్ని చేతబట్టాడు.'
      ],
      paragraphs_hi: [
        'अर्जुन के संशय का समूल नाश करने हेतु श्रीकृष्ण ने उन्हें दिव्य चक्षु प्रदान कर अपना विराट विश्वरूप दिखाया।',
        'अर्जुन ने देखा कि प्रभु के सहस्रों मुख, नेत्र और भुजाएं हैं। एक साथ हजारों सूर्यों का तेज आकाश में प्रज्वलित हो उठा था। उनके विराट शरीर में संपूर्ण ब्रह्मांड, ग्रह और नक्षत्र घूम रहे थे।',
        'भयभीत होकर अर्जुन ने देखा कि भीष्म, द्रोण, कर्ण और कौरव योद्धा काल रूपी श्रीकृष्ण के दाढ़ों में पतंगों की भांति भस्म हो रहे हैं। प्रभु ने कहा: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो — मैं लोकों का नाश करने वाला महाकाल हूँ। तुम्हारे लड़े बिना भी ये सब नहीं बचेंगे। ये सब मेरे द्वारा पहले ही मारे जा चुके हैं, तुम केवल निमित्त मात्र बन जाओ, हे सव्यसाची!" अर्जुन का मोह नष्ट हो गया और वे गांडीव उठाकर युद्ध हेतु सन्नद्ध हुए।'
      ],
      dialogueQuote: '"Nimitta-matram Bhava Savyasachin — Be thou merely the external instrument, O ambidextrous archer!"',
      dialogueQuote_te: '"నిమిత్తమాత్రం భవ సవ్యసాచిన్ — నా సంకల్పం నెరవేరడానికి నీవు కేవలం పనిముట్టువి మాత్రమే కా!"',
      dialogueQuote_hi: '"निमित्तमात्रं भव सव्यसाचिन् — हे अर्जुन! तुम तो केवल निमित्त मात्र बन जाओ, कार्य मैंने पहले ही कर दिया है!"',
      speaker: 'Lord Krishna in Vishwaroopa',
      speaker_te: 'విశ్వరూపంలో పరమాత్ముని వాక్కు',
      speaker_hi: 'विराटरूप में भगवान का आदेश',
      imageUrl: '/assets/wallpapers/krishna.jpg',
      imageCaption: 'The dazzling cosmic Vishwaroopa radiating across the sky of Kurukshetra before awestruck Arjuna.',
      imageCaption_te: 'కురుక్షేత్ర ఆకాశంలో వెలిగిపోతున్న శ్రీకృష్ణుని అద్భుత విశ్వరూపం.',
      imageCaption_hi: 'कुरुक्षेत्र के गगन में दैदीप्यमान भगवान श्रीकृष्ण का विराट विश्वरूप।'
    },
    {
      pageNumber: 6,
      title: 'Ten Days of Fury: The Rampage of Bhishma',
      title_te: 'పది రోజుల భీకర సమరం & భీష్ముని ప్రతాపం',
      title_hi: 'दस दिन का महातांडव और भीष्म का पराक्रम',
      sceneTag: 'Battlefield of Kurukshetra',
      sceneTag_te: 'కురుక్షేత్ర మహా రణరంగం',
      sceneTag_hi: 'कुरुक्षेत्र की रक्त-रंजित भूमि',
      hookLine: 'Like a forest fire sweeping dry bamboo, the Grandsire cut down ten thousand warriors every day.',
      hookLine_te: 'ఎండు వెదురు పొదలను దహించే దావాగ్నిలా ప్రతిరోజూ పదివేల మంది పాండవ సైనికులను మట్టికరిపించిన పితామహుడు.',
      hookLine_hi: 'दावाग्नि की भांति प्रतिदिन पांडवों की सेना का संहार करते अजेय भीष्म पितामह।',
      paragraphs: [
        'The war erupted with unbridled fury. For nine solid days, the ninety-year-old Grandsire Bhishma swept across the battlefield like a hurricane of death. Driving an eight-wheeled white chariot, his white beard flowing, he fired arrows so rapidly that spectators saw only a solid golden wheel of fire.',
        'Whole divisions of Panchalas, Matsyas, and Chedis dissolved before his shafts. Pandava warriors fled whenever his banner appeared. Ten thousand infantry and a thousand charioteers fell beneath his arrows each afternoon.',
        'Arjuna, forced to fight his beloved grandfather, fired counter-arrows with reluctant gentleness, careful not to strike mortal wounds. Duryodhana sneered at Bhishma each evening, accusing him of showing favoritism to the Pandavas. Goaded by these insults, on the ninth day Bhishma swore an oath: "Tomorrow I shall either annihilate the five Pandavas, or force Krishna to break His sacred vow of remaining unarmed!"'
      ],
      paragraphs_te: [
        'యుద్ధం భయంకరంగా ప్రారంభమైంది. మొదటి తొమ్మిది రోజుల పాటు భీష్మ పితామహుడు కురుక్షేత్రంలో మృత్యుదేవతలా విలయతాండవం చేశాడు. తెల్లని గడ్డం గాలిలో రెపరెపలాడుతుండగా, నిమిషానికి వేలాది బాణాలను సంధించాడు.',
        'పాంచాల, మత్స్య సైన్యాలు ఆయన ధనుస్సు ముందు పిట్టల్లా రాలిపోయాయి. ప్రతిరోజూ పదివేల మంది సైనికులు భీష్ముని బాణాలకు నేలకూలారు. పాండవుల సైన్యం భయంతో పరుగులు తీసింది.',
        'అర్జునుడు తాతపై మనసు చంపుకోలేక మెతకగా బాణాలు వేయడం చూసి, దుర్యోధనుడు భీష్ముడిని అవమానించాడు. ఆ మాటలకు నొచ్చుకున్న భీష్ముడు: "రేపటి యుద్ధంలో పాండవులనైనా చంపుతాను, లేదా ఆయుధం పట్టనన్న కృష్ణుడి చేతైనా ఆయుధం పట్టిస్తాను!" అని భీషణ ప్రతిజ్ఞ చేశాడు.'
      ],
      paragraphs_hi: [
        'युद्ध का भीषण आरंभ हुआ। प्रथम नौ दिनों तक नव्वे वर्ष के वृद्ध भीष्म पितामह ने ऐसा तांडव किया कि पांडवों की सेना में हाहाकार मच गया। उनका बाण-वर्षा का वेग ऐसा था मानो आकाश में अग्नि का पहिया घूम रहा हो।',
        'प्रतिदिन दस सहस्र सैनिक भीष्म के बाणों से यमलोक सिधारते थे। पांचाल और मत्स्य सेना उनके रथ के सामने टिक नहीं पाती थी।',
        'अर्जुन अपने पितामह पर प्राणघातक प्रहार करने से बच रहे थे। शाम को दुर्योधन ने भीष्म पर पांडवों से मिले होने का ताना मारा। क्रुद्ध होकर भीष्म ने प्रतिज्ञा की: "कल या तो मैं पांडवों का अंत कर दूँगा, या फिर कृष्ण को अपनी प्रतिज्ञा तोड़कर शस्त्र उठाने पर विवश कर दूँगा!"'
      ],
      dialogueQuote: '"Tomorrow the world shall see: either the Pandavas fall, or Vasudeva breaks His holy vow!"',
      dialogueQuote_te: '"రేపు లోకం చూస్తుంది: పాండవులైనా నేలకొరుగుతారు, లేదా ఆ కృష్ణుడైనా ఆయుధం పడతాడు!"',
      dialogueQuote_hi: '"कल संसार देखेगा: या तो पांडव समाप्त होंगे या वासुदेव को शस्त्र उठाना ही पड़ेगा!"',
      speaker: 'Bhishma’s vow on the 9th night',
      speaker_te: 'తొమ్మిదో రోజు రాత్రి భీష్ముని శపథం',
      speaker_hi: 'नवें दिन की संध्या पर भीष्म की प्रतिज्ञा',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'Grandsire Bhishma with his silver bow wreaking devastation across the Pandava ranks.',
      imageCaption_te: 'కురుక్షేత్రంలో పాండవ సైన్యాన్ని గడగడలాడిస్తున్న భీష్మ పితామహుడు.',
      imageCaption_hi: 'समरभूमि में भीषण बाणवर्षा करते कौरव सेनापति भीष्म पितामह।'
    },
    {
      pageNumber: 7,
      title: 'The Leap of the Charioteer: Krishna and the Broken Wheel',
      title_te: 'రథచక్రంతో కృష్ణుని దూకుడు & భీష్ముని పరవశం',
      title_hi: 'रथ का पहिया लेकर दौड़े श्रीकृष्ण',
      sceneTag: 'Dust Storm of Kurukshetra Battle',
      sceneTag_te: 'కురుక్షేత్ర రణరంగ ధూళి',
      sceneTag_hi: 'कुरुक्षेत्र का घमासान युद्ध',
      hookLine: 'Leaping from the chariot with a heavy wooden wheel raised like a discus, the Lord charged at Bhishma.',
      hookLine_te: 'తన శపథాన్ని పక్కనపెట్టి, విరిగిపడిన రథచక్రాన్ని సుదర్శన చక్రంలా చేతబట్టి భీష్ముని వైపు దూసుకెళ్ళిన కృష్ణుడు.',
      hookLine_hi: 'अपनी प्रतिज्ञा भूलकर, टूटे रथ का पहिया उठाकर काल की भांति भीष्म की ओर दौड़े वासुदेव।',
      paragraphs: [
        'On the tenth morning, Bhishma fought with superhuman ferocity. His arrows shredded Arjuna\'s armor and wounded the white stallions. Seeing Arjuna still hesitating to strike the death blow, Lord Krishna’s eyes flared with divine fury.',
        'Dropping the chariot reins, the Lord leaped down into the churning dust. Snatching up a broken wooden chariot wheel from the blood-soaked earth, He spun it above His head like the Sudarshana Chakra and charged directly at Bhishma!',
        'His yellow silk scarf fluttered in the gale, and the earth trembled under His stomping feet. Beholding God charging to slay him, Bhishma dropped his bow, threw open his chest, and joined his hands in ecstatic tears: "Come, Lord of the Universe! Slay me today, and liberate my soul into eternity!" Horrified that Krishna was breaking His vow, Arjuna chased after the Lord, caught Him by the feet, and dragged Him back: "Stop, Keshava! Do not break your oath; by my sons and truth, I swear I shall fell Bhishma today!"'
      ],
      paragraphs_te: [
        'పదవ రోజు భీష్ముని ధాటికి అర్జునుని కవచం చీలిపోయింది, గుర్రాలు గాయపడ్డాయి. అర్జునుడు ఇంకా తాతపై దయ చూపిస్తుండటం చూసి శ్రీకృష్ణునికి కోపం వచ్చింది.',
        'కృష్ణుడు పగ్గాలను వదిలేసి రథంపై నుండి దూకాడు. నేలపై పడివున్న ఒక విరిగిన రథచక్రాన్ని సుదర్శన చక్రంలా చేతబట్టి భీష్ముని సంహరించడానికి ప్రళయకాల యముడిలా పరుగుతీశాడు!',
        'సాక్షాత్తూ భగవంతుడే తనను చంపడానికి రావడం చూసిన భీష్ముడు ఆనంద బాష్పాలతో విల్లు దించి రెండు చేతులూ జోడించాడు: "రా ప్రభూ! నీ చేతుల్లో మరణించడం కంటే నాకు కావలసిన మోక్షం ఏముంది!" అర్జునుడు పరుగున వచ్చి కృష్ణుని పాదాలు పట్టుకుని వెనక్కి లాగాడు: "కృష్ణా! ఆగు! నీ శపథాన్ని భంగం కానివ్వను, ఈరోజే భీష్ముడిని నేలకూలుస్తానని శపథం చేస్తున్నాను!"'
      ],
      paragraphs_hi: [
        'दसवें दिन भीष्म ने विकराल रूप धारण कर लिया। अर्जुन के रथ के घोड़े घायल हो गए। अर्जुन को अभी भी हिचकिचाते देखकर श्रीकृष्ण को क्रोध आ गया।',
        'प्रभु ने घोड़ों की रास छोड़ दी और रथ से कूद पड़े। रणभूमि में पड़े एक टूटे रथ के पहिए को सुदर्शन चक्र की तरह उठाकर वे भीष्म की ओर झपटे!',
        'भगवान को अपनी ओर आते देखकर भीष्म ने धनुष रख दिया और हाथ जोड़कर बोले: "आइए गोविंद! आपके कर-कमलों से मृत्यु पाकर मैं धन्य हो जाऊँगा!" यह देखकर अर्जुन दौड़े और श्रीकृष्ण के चरण पकड़कर पीछे खींचा: "रुकिए माधव! अपनी प्रतिज्ञा मत तोड़िए। मैं शपथ लेता हूँ कि आज ही भीष्म को धराशायी कर दूँगा!"'
      ],
      dialogueQuote: '"Strike me, O Govinda! To fall by Thy divine hand is the highest liberation in creation!"',
      dialogueQuote_te: '"నన్ను సంహరించు కృష్ణా! నీ దివ్య హస్తాల చేతిలో మరణించడం కంటే పరమపదం ఏముంటుంది!"',
      dialogueQuote_hi: '"प्रहार कीजिए गोविंद! आपके हाथों मोक्ष पाना मेरे जीवन का सबसे बड़ा सौभाग्य होगा!"',
      speaker: 'Bhishma welcoming Krishna’s charge',
      speaker_te: 'కృష్ణుని చూసి పులకించిన భీష్ముడు',
      speaker_hi: 'भीष्म का श्रीकृष्ण के चरणों में समर्पण',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'Lord Krishna charging toward Bhishma with a raised chariot wheel while Arjuna clings to His feet.',
      imageCaption_te: 'రథచక్రాన్ని ఎత్తి పరుగుతీస్తున్న శ్రీకృష్ణుడు; పాదాలను పట్టుకుని ఆపుతున్న అర్జునుడు.',
      imageCaption_hi: 'रथ का पहिया लेकर भीष्म की ओर दौड़ते श्रीकृष्ण और उनके चरण पकड़ते अर्जुन।'
    },
    {
      pageNumber: 8,
      title: 'Day Ten: Shikhandi’s Shield & The Bed of Arrows',
      title_te: 'పదవ రోజు: శిఖండి రక్షణ & అంపశయ్యపై భీష్ముడు',
      title_hi: 'दसवां दिन: शिखंडी की ओट और भीष्म की शरशय्या',
      sceneTag: 'Sunset at Kurukshetra',
      sceneTag_te: 'కురుక్షేత్రంలో సూర్యాస్తమయ వేళ',
      sceneTag_hi: 'कुरुक्षेत्र का सूर्यास्त',
      hookLine: 'Pierced by so many arrows that not two fingers of flesh were untouched, he rested without touching the earth.',
      hookLine_te: 'శరీరంలో అంగుళం ఖాళీ లేకుండా వేలాది బాణాలు దిగబడి, నేలను తాకకుండా అంపశయ్యపై ఒరిగిన పితామహుడు.',
      hookLine_hi: 'शरीर पर कोई ऐसा अंग न बचा जहाँ तीर न लगा हो; भूमि को छुए बिना तीरों की शय्या पर टिके पितामह।',
      paragraphs: [
        'That evening, Yudhishthira and Arjuna visited Bhishma’s tent in secret to ask how he could be defeated. The noble Grandsire himself revealed his secret: "Place Shikhandi before Arjuna. Because Shikhandi was born a woman in a past birth, I shall never loose an arrow against him. Behind Shikhandi, let Arjuna shoot me down!"',
        'On the tenth afternoon, Arjuna placed Prince Shikhandi directly on the front of his chariot. Seeing Shikhandi, Bhishma smiled peacefully and lowered his celestial bow.',
        'From behind Shikhandi, weeping bitter tears, Arjuna released a tempest of hundred upon hundreds of razor-sharp steel arrows. Shafts pierced Bhishma\'s breastplate, arms, thighs, and neck. At sunset, the mighty Grandsire collapsed backward from his chariot—yet his body never touched the mud of the battlefield. It rested suspended upon the dense bed of thousands of interlocking arrow shafts! The sun sank in mourning as both Kauravas and Pandavas laid down their arms and gathered in tears around the fallen patriarch.'
      ],
      paragraphs_te: [
        'ఆ రాత్రి పాండవులు రహస్యంగా భీష్ముని గుడారానికి వెళ్ళి, తమను తాము ఎలా కాపాడుకోవాలని అడగ్గా, భీష్ముడే స్వయంగా తన పతన రహస్యాన్ని చెప్పాడు: "శిఖండిని అర్జునుని ముందు ఉంచండి. పూర్వజన్మలో స్త్రీగా పుట్టిన శిఖండిపై నేను ఆయుధం పట్టను. అతని వెనుక నుండి అర్జునుడు నన్ను నేలకూల్చాలి."',
        'పదవ రోజు అర్జునుడు శిఖండిని రథం ముందు నిలిపాడు. శిఖండిని చూసిన భీష్ముడు ప్రశాంతంగా చిరునవ్వు నవ్వి తన ధనుస్సును దించేశాడు.',
        'కన్నీటితో అర్జునుడు వందలాది బాణాలను సంధించాడు. ఆ బాణాలు భీష్ముని రొమ్మును, మెడను, తొడలను ఛేదించాయి. సూర్యాస్తమయ వేళ భీష్ముడు రథం నుండి వెనక్కి ఒరిగాడు; కానీ ఆయన శరీరం నేలను తాకలేదు. దిగబడిన బాణాల అల్లికపై అంపశయ్యగా నిలిచింది. ఇరు పక్షాల వీరులూ ఆయుధాలను పక్కనబెట్టి పితామహుని చుట్టూ చేరి కన్నీరు మున్నీరయ్యారు.'
      ],
      paragraphs_hi: [
        'उस रात पांडवों ने भीष्म के शिविर में जाकर स्वयं उनसे पूछा कि उन्हें कैसे परास्त किया जाए। भीष्म ने स्वयं युक्ति बताई: "शिखंडी को अर्जुन के आगे कर दो। वह पूर्वजन्म में स्त्री था, अतः मैं उस पर शस्त्र नहीं उठाऊँगा। उसकी ओट से अर्जुन मुझ पर बाण चलाए।"',
        'दसवें दिन अर्जुन ने शिखंडी को रथ के आगे रखा। शिखंडी को देखकर भीष्म ने मुस्कराकर अपने धनुष को नीचे कर दिया।',
        'शिखंडी के पीछे से रोते हुए अर्जुन ने बाणों की ऐसी झड़ी लगाई कि भीष्म का कोई अंग बाणों से अछूता न रहा। सूर्यास्त के समय भीष्म रथ से नीचे गिरे—किंतु उनका शरीर धरती पर नहीं लगा, तीरों की नोकों पर ही शरशय्या बन गई। दोनों सेनाओं के योद्धा हथियार रखकर रोते हुए पितामह के चारों ओर एकत्र हो गए।'
      ],
      dialogueQuote: '"These arrows that burn my soul belong not to Shikhandi; they bite with the divine fire of Arjuna!"',
      dialogueQuote_te: '"నా గుండెను చీల్చుతున్న ఈ బాణాలు శిఖండివి కావు; ఇవి గాండీవధారి అర్జునుని బాణాలే!"',
      dialogueQuote_hi: '"ये बाण शिखंडी के नहीं हैं; ये मेरे प्रिय अर्जुन के गांडीव की अग्नि से तपे हुए तीखे बाण हैं!"',
      speaker: 'Bhishma resting on the Bed of Arrows',
      speaker_te: 'అంపశయ్యపై భీష్ముని చివరి మాటలు',
      speaker_hi: 'शरशय्या पर लेटे भीष्म पितामह के उद्गार',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'Grandsire Bhishma resting peacefully on the bed of arrows as warriors of both sides bow in weeping reverence.',
      imageCaption_te: 'కురుక్షేత్రంలో అంపశయ్యపై ఒరిగిన భీష్మునికి నమస్కరిస్తున్న ఇరు పక్షాల వీరులు.',
      imageCaption_hi: 'शरशय्या पर विश्राम करते भीष्म पितामह और नतमस्तक होते दोनों सेनाओं के महारथी।'
    }
  ],

  partSummary: {
    majorEvents: [
      'The conches of the two massive armies roar at dawn on Dharmakshetra Kurukshetra',
      'King Yudhishthira walks barefoot and unarmed into enemy lines to receive blessings from Bhishma and Drona',
      'Arjuna falls into despondency (Vishada Yoga) seeing family and teachers, dropping his Gandiva bow',
      'Lord Sri Krishna delivers the supreme nectar of the Bhagavad Gita across eighteen chapters',
      'Krishna reveals the immortal nature of the Atman, Karma Yoga, and His terrifying cosmic Vishwaroopa',
      'Grandsire Bhishma rampages for nine days, killing ten thousand Pandava soldiers daily',
      'Krishna charges at Bhishma with a raised wooden chariot wheel, testing Arjuna’s resolve',
      'Day Ten: Shikhandi is placed in front of Arjuna\'s chariot; Bhishma lowers his celestial bow',
      'Arjuna fells Bhishma with hundreds of arrows; the Grandsire rests upon the historic Bed of Arrows'
    ],
    majorEvents_te: [
      'కురుక్షేత్ర రణరంగంలో శంఖాల భీకర గర్జనతో యుద్ధం ప్రారంభం',
      'ధర్మరాజు నిరాయుధుడిగా వెళ్ళి భీష్మ, ద్రోణుల పాదాలకు నమస్కరించి విజయాశీస్సులు పొందడం',
      'బంధువులపై బాణాలు వేయలేక గాండీవాన్ని జారవిడిచి రథంలో కూలబడిన అర్జునుడు',
      'శ్రీకృష్ణ పరమాత్మ అష్టాదశ అధ్యాయాల భగవద్గీతామృతాన్ని ఉపదేశించడం',
      'ఆత్మ అమరత్వాన్ని, నిష్కామ కర్మయోగాన్ని బోధించి, విశ్వరూపాన్ని చూపించిన కృష్ణుడు',
      'తొమ్మిది రోజుల పాటు భీష్ముని అజేయ విలయతాండవం',
      'భీష్ముని సంహరించడానికి రథచక్రాన్ని ఎత్తి దూసుకెళ్ళిన శ్రీకృష్ణుడు',
      'పదవ రోజు శిఖండి రక్షణతో భీష్మునిపై బాణాలు సంధించిన అర్జునుడు',
      'నేలను తాకకుండా అంపశయ్యపై ఒరిగిన భీష్మ పితామహుడు'
    ],
    majorEvents_hi: [
      'कुरुक्षेत्र के मैदान में दोनों सेनाओं का महाशंखनाद',
      'युधिष्ठिर द्वारा नंगे पैर जाकर भीष्म और द्रोण से विजय का आशीर्वाद प्राप्त करना',
      'स्वजनों के मोह में अर्जुन का गांडीव छोड़कर विषादमग्न होना',
      'भगवान श्रीकृष्ण द्वारा 18 अध्यायों में श्रीमद्भगवद्गीता का अमर उपदेश',
      'आत्मा की अमरता, निष्काम कर्म और विराट विश्वरूप का दर्शन',
      'नौ दिनों तक पितामह भीष्म का संहारक पराक्रम',
      'भीष्म पर प्रहार हेतु श्रीकृष्ण का रथ का पहिया उठाकर दौड़ना',
      'दसवें दिन शिखंडी की ओट में अर्जुन द्वारा भीष्म पर बाणवर्षा',
      'पितामह भीष्म का रथ से गिरकर तीरों की शरशय्या पर शयन'
    ],
    importantCharacters: [
      'Arjuna - Enlightened warrior who overcame personal sentiment to uphold cosmic duty',
      'Lord Sri Krishna - The cosmic guru who spoke the Bhagavad Gita and guided righteousness to triumph',
      'Grandsire Bhishma - Unconquerable patriarch whose adherence to duty brought immortal glory on the bed of arrows',
      'King Yudhishthira - Master of humility whose virtue extracted victory blessings from enemy commanders',
      'Shikhandi - The instrument of destiny enabling the fall of the invincible grandsire'
    ],
    importantCharacters_te: [
      'అర్జునుడు - గీతా జ్ఞానంతో కర్తవ్యానికి సిద్ధపడిన మహావీరుడు',
      'శ్రీకృష్ణుడు - పార్థసారథి, జగద్గురువు',
      'భీష్మ పితామహుడు - అంపశయ్యపై ఒరిగిన అజేయ సేనాపతి',
      'ధర్మరాజు - వినయంతో శత్రువుల నుండి కూడా ఆశీర్వాదం పొందిన సత్యశీలుడు',
      'శిఖండి - భీష్మ పతనానికి సాధనమైన యోధుడు'
    ],
    importantCharacters_hi: [
      'अर्जुन - गीता का ज्ञान पाकर मोहमुक्त हुए गांडीवधारी',
      'भगवान श्रीकृष्ण - पार्थसारथी एवं परम जगद्गुरु',
      'भीष्म पितामह - शरशय्या पर शयन करने वाले महायोद्धा',
      'युधिष्ठिर - धर्म और विनम्रता की प्रतिमूर्ति',
      'शिखंडी - भीष्म के पतन का निमित्त बने राजकुमार'
    ],
    importantRelationships: [
      'Krishna & Arjuna: Guru and disciple, Lord and instrument ("Nimitta-matram Bhava")',
      'Bhishma & Arjuna: The tragic love between grandfather and grandson forced into mortal combat by fate',
      'Yudhishthira & Elders: The transcendent power of humility over military pride'
    ],
    importantRelationships_te: [
      'శ్రీకృష్ణుడు & అర్జునుడు: గురుశిష్యుల సంబంధం, భగవంతుడు మరియు నిమిత్తమాత్రుని అనుబంధం',
      'భీష్ముడు & అర్జునుడు: విధి నిర్ణయించిన పోరాటంలో నలిగిపోయిన ప్రేమానురాగాలు',
      'ధర్మరాజు & పెద్దలు: అహంకారాన్ని జయించే వినయశీలత యొక్క గొప్పతనం'
    ],
    importantRelationships_hi: [
      'श्रीकृष्ण और अर्जुन - गुरु-शिष्य और नर-नारायण का पावन संबंध',
      'भीष्म और अर्जुन - कर्तव्य की वेदी पर पितामह और पौत्र का कारुणिक युद्ध',
      'युधिष्ठिर और भीष्म-द्रोण - विनम्रता से शत्रुओं का भी हृदय जीतना'
    ],
    majorDecisions: [
      'Arjuna submitting his intellectual crisis to Krishna as an earnest student',
      'Krishna choosing to reveal the transcendent reality of Atman and cosmic Time',
      'Bhishma voluntarily disclosing the method of his own defeat to protect the Pandavas',
      'Arjuna placing Shikhandi on his chariot to overcome his vow-bound grandfather'
    ],
    majorDecisions_te: [
      'తన సందేహాలను కృష్ణునికి విన్నవించి శిష్యుడిగా శరణువేడిన అర్జునుని వివేకం',
      'ఆత్మ నిత్యత్వాన్ని, కాలస్వరూపాన్ని బోధించిన శ్రీకృష్ణుని గీతోపదేశం',
      'పాండవులను కాపాడటానికి తన పతన రహస్యాన్ని తానే చెప్పిన భీష్ముని త్యాగం',
      'శిఖండిని రథం ముందు ఉంచి భీష్మునిపై బాణాలు వేయాలన్న నిర్ణయం'
    ],
    majorDecisions_hi: [
      'श्रीकृष्ण के चरणों में शिष्य बनकर मार्गदर्शन मांगना',
      'गीता के माध्यम से मानव जाति को कर्मयोग का अमर संदेश देना',
      'भीष्म द्वारा स्वयं अपने वध की युक्ति पांडवों को बताना',
      'शिखंडी की ओट लेकर पितामह को शरशय्या पर सुलाने का निर्णय'
    ],
    consequences: [
      'The Bhagavad Gita is permanently gifted to all future generations of humanity',
      'The greatest shield of the Kaurava empire is immobilized for the remainder of the war',
      'The mantle of Kaurava supreme command passes to Guru Dronacharya'
    ],
    consequences_te: [
      'సమస్త మానవాళికి మార్గదర్శకంగా నిలిచిన పవిత్ర భగవద్గీత ఆవిర్భావం',
      'కౌరవుల అతిపెద్ద రక్షణ కవచమైన భీష్ముడు యుద్ధం నుండి నిష్క్రమించడం',
      'కౌరవ సేనాధిపత్యం గురు ద్రోణాచార్యుని చేతుల్లోకి వెళ్ళడం'
    ],
    consequences_hi: [
      'मानव जाति को जीवन का शाश्वत दर्शन देने वाली श्रीमद्भगवद्गीता का प्राकट्य',
      'कौरवों का सबसे बड़ा रक्षा-स्तंभ भीष्म शरशय्या पर लेटे',
      'कौरव सेना का सेनापतित्व गुरु द्रोणाचार्य के हाथों में आना'
    ]
  },

  slides: [
    {
      slideNumber: 1,
      title: 'The Song of Eternity',
      title_te: 'శ్రీమద్భగవద్గీత',
      title_hi: 'श्रीमद्भगवद्गीता का संदेश',
      content: 'Lord Krishna reveals the immortality of the soul and the path of selfless duty (Karma Yoga) to dispirited Arjuna.',
      content_te: 'కృష్ణుడు ఆత్మ అమరత్వాన్ని, నిష్కామ కర్మయోగాన్ని అర్జునునికి ఉపదేశించి మోహాన్ని తొలగించాడు.',
      content_hi: 'श्रीकृष्ण ने मोहग्रस्त अर्जुन को आत्मा की अमरता और निष्काम कर्मयोग का मार्ग दिखाकर युद्ध हेतु प्रेरित किया।',
      moralLesson: 'Focus entirely on righteous duty without anxious attachment to success or failure.',
      moralLesson_te: 'ఫలితాలపై ఆశ లేకుండా కేవలం నీ ధర్మబద్ధమైన కర్తవ్యాన్ని నిర్వహించు.',
      moralLesson_hi: 'सफलता-विफलता की चिंता किए बिना केवल अपने पावन कर्तव्य का पालन करो।'
    },
    {
      slideNumber: 2,
      title: 'The Instrument of Destiny',
      title_te: 'నిమిత్తమాత్రుడు',
      title_hi: 'काल का निमित्त',
      content: 'In the cosmic Vishwaroopa, Arjuna sees that time has already claimed the unrighteous; he must simply act as the instrument.',
      content_te: 'విశ్వరూపంలో శత్రువులంతా ముందే సంహరింపబడ్డారని చూసిన అర్జునుడు, తాను దైవ సంకల్పానికి ఒక పనిముట్టు మాత్రమేనని గ్రహించాడు.',
      content_hi: 'विश्वरूप में अर्जुन ने देखा कि अधर्मियों का काल आ चुका है, उन्हें केवल ईश्वर का निमित्त बनना है।',
      moralLesson: 'Humility arises when one recognizes that cosmic law governs all outcomes; we are merely instruments of Dharma.',
      moralLesson_te: 'దైవ సంకల్పం ముందు మనం కేవలం నిమిత్తమాత్రులమని గుర్తించడమే నిజమైన జ్ఞానం.',
      moralLesson_hi: 'यह सृष्टि परमात्मा के विधान से चलती है, मनुष्य तो केवल धर्म का एक उपकरण है।'
    },
    {
      slideNumber: 3,
      title: 'The Bed of Arrows',
      title_te: 'భీష్ముని అంపశయ్య',
      title_hi: 'भीष्म की शरशय्या',
      content: 'Grandsire Bhishma falls on the 10th day, resting on thousands of arrows without touching the earth until the auspicious sun.',
      content_te: 'పదవ రోజున వేలాది బాణాలు గుచ్చుకోగా నేలను తాకకుండా అంపశయ్యపై ఒరిగాడు భీష్మ పితామహుడు.',
      content_hi: 'दसवें दिन भीष्म पितामह तीरों की शय्या पर विश्राम पाकर उत्तरायण सूर्य की प्रतीक्षा करने लगे।',
      moralLesson: 'Even the greatest titan bound to an unjust cause must eventually yield to the inexorable march of righteousness.',
      moralLesson_te: 'ఎంతటి మహావీరుడైనా అధర్మం వైపు నిలబడితే ధర్మం ముందు ఓడిపోక తప్పదు.',
      moralLesson_hi: 'अधर्म का साथ देने वाला चाहे कितना भी महान क्यों न हो, उसका पतन सुनिश्चित होता है।'
    }
  ]
};
