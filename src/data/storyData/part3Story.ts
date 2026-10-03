import { StoryPart } from '../../types/game';

export const PART_3_STORY: StoryPart = {
  partNumber: 3,
  title: 'The House of Lac & Draupadi’s Swayamvara',
  title_te: 'లాక్షాగృహ దహనం & ద్రౌపదీ స్వయంవరం',
  title_hi: 'लाक्षागृह षड्यंत्र और द्रौपदी का स्वयंवर',
  sanskritTitle: 'लाक्षागृहदहनं द्रौपदीस्वयंवरश्च',
  summary: 'The sinister trap of the lac palace in Varnavata, the daring tunnel escape, Bhima’s defeat of demons, and the grand contest in Panchala where disguised Arjuna strings the mighty celestial bow.',
  summary_te: 'వారణావతంలో లక్క ఇంటి కుట్ర, నేలమాళిగ ద్వారా అద్భుత తప్పించుకోలు, ఏకచక్రపురంలో బకాసుర వధ, మరియు పాంచాల దేశంలో మత్స్యయంత్ర ఛేదనతో ద్రౌపది వరించడం.',
  summary_hi: 'वारणावत में लाक्षागृह का भयानक षड्यंत्र, सुरंग से गुप्त पलायन, बकासुर का वध और पांचाल में मत्स्य-यंत्र भेदकर अर्जुन द्वारा द्रौपदी का वरण।',
  characterRewardId: 'draupadi',

  charactersInPart: [
    {
      id: 'draupadi',
      name: 'Draupadi (Panchali / Yagnaseni)',
      name_te: 'ద్రౌపది (పాంచాలి / యజ్ఞసేని)',
      name_hi: 'द्रौपदी (पांचाली / यज्ञसेनी)',
      title: 'Daughter of the Sacred Fire & Empress of Dharma',
      title_te: 'యజ్ఞకుండం నుండి ఉద్భవించిన ధర్మ సామ్రాజ్ఞి',
      title_hi: 'यज्ञवेदी से प्रादुर्भूत वीरांगना एवं सम्राज्ञी',
      relationship: 'Daughter of King Drupada; Sister of Dhrishtadyumna; Bride of the Pandavas',
      relationship_te: 'ద్రుపద మహారాజు పుత్రిక; దృష్టద్యుమ్నుని సోదరి; పాండవుల ధర్మపత్ని',
      relationship_hi: 'महाराज द्रुपद की कन्या; धृष्टद्युम्न की बहिन; पांडवों की पटरानी',
      intro: 'Born full-grown from the sacrificial altar to avenge Drupada and restore righteous balance across Aryavarta.',
      intro_te: 'కురు వంశాంతానికి, ధర్మ రక్షణకు యజ్ఞ వేదిక నుండి ఉద్భవించిన దివ్య తేజోమూర్తి.',
      intro_hi: 'कुरुवंश के अन्यायी शासन का अंत करने हेतु यज्ञ की ज्वालाओं से जन्मी अद्वितीय सुंदरी और धर्मपरायणा नारी।',
      avatarUrl: '/assets/wallpapers/draupadi.jpg',
      role: 'queen'
    },
    {
      id: 'arjuna_brahmin',
      name: 'Arjuna (in Brahmin Disguise)',
      name_te: 'అర్జునుడు (బ్రాహ్మణ వేషంలో)',
      name_hi: 'अर्जुन (विप्र वेष में)',
      title: 'The Hidden Archer of Panchala',
      title_te: 'మత్స్యయంత్ర విజేత',
      title_hi: 'मत्स्य-यंत्र भेदी गुप्त धनुर्धर',
      relationship: 'Third Pandava, son of Kunti & Indra; victor of the Swayamvara',
      relationship_te: 'కుంతీ పుత్రుడు, స్వయంవర విజేత',
      relationship_hi: 'कुंतीपुत्र, स्वयंवर के एकमात्र विजेता',
      intro: 'Living in anonymity as a beggar priest, he stepped forward to accomplish what monarchs and kings failed.',
      intro_te: 'రహస్య జీవితం గడుపుతూ, ఎందరో మహారాజులు చేయలేని మత్స్యయంత్ర లక్ష్యాన్ని ఛేదించిన ధీరుడు.',
      intro_hi: 'साधु वेष में रहकर भी जिसने राजा-महाराजाओं के सम्मुख गांडीवधारी का अलौकिक पराक्रम सिद्ध किया।',
      avatarUrl: '/assets/wallpapers/arjuna.jpg',
      role: 'hero'
    },
    {
      id: 'bhima',
      name: 'Bhima (Vrikodara)',
      name_te: 'భీమసేనుడు (వృకోదరుడు)',
      name_hi: 'भीमसेन (वृकोदर)',
      title: 'Shield of the Pandavas & Slayer of Demons',
      title_te: 'పాండవ సంరక్షకుడు & రాక్షస సంహర్త',
      title_hi: 'पांडवों के रक्षक और दानवसंहारक',
      relationship: 'Second Pandava, son of Vayu; brother of Yudhishthira, Arjuna, Nakula, and Sahadeva',
      relationship_te: 'వాయు పుత్రుడు; పాండవుల రక్షకుడు',
      relationship_hi: 'वायुपुत्र; पांडवों की महाशक्ति',
      intro: 'Carried his mother and four brothers on his shoulders through the burning forest and crushed Bakasura.',
      intro_te: 'మండే అడవిలో తల్లిని నలుగురు సోదరులను భుజాలపై మోసి కాపాడిన అజేయ బాహుబలుడు.',
      intro_hi: 'जलते लाक्षागृह से पूरे परिवार को भुजाओं पर उठाकर ले जाने वाले और बकासुर का संहार करने वाले महाबली।',
      avatarUrl: '/assets/wallpapers/bhima.jpg',
      role: 'hero'
    },
    {
      id: 'drupada',
      name: 'King Drupada (Yagnasena)',
      name_te: 'ద్రుపద మహారాజు',
      name_hi: 'महाराज द्रुपद',
      title: 'King of Panchala',
      title_te: 'పాంచాల దేశాధిపతి',
      title_hi: 'पांचाल नरेश',
      relationship: 'Father of Draupadi, Dhrishtadyumna, and Shikhandi; former friend turned rival of Drona',
      relationship_te: 'ద్రౌపది, దృష్టద్యుమ్నుల తండ్రి; ద్రోణుని పూర్వ మిత్రుడు',
      relationship_hi: 'द्रौपदी और धृष्टद्युम्न के पिता; द्रोण के बालसखा और प्रतिद्वंद्वी',
      intro: 'Conducted a grand Putrakameshti sacrifice to obtain a son to kill Drona and a daughter worthy of Arjuna.',
      intro_te: 'ద్రోణునిపై ప్రతీకారం తీర్చుకునే కుమారుడిని, అర్జునుడిని వివాహమాడే పుత్రికను కోరుతూ యజ్ఞం చేసిన రాజు.',
      intro_hi: 'द्रोण से पराजय के बाद अर्जुन को जामाता बनाने हेतु यज्ञ कराने वाले स्वाभिमानी राजा।',
      avatarUrl: '/assets/wallpapers/sanatana-dharma.jpg',
      role: 'elder'
    },
    {
      id: 'vidura',
      name: 'Mahatma Vidura',
      name_te: 'విదుర మహాత్ముడు',
      name_hi: 'महात्मा विदुर',
      title: 'Prime Minister of Hastinapur & Incarnation of Dharma',
      title_te: 'హస్తినాపుర మహా మంత్రి & ధర్మ స్వరూపుడు',
      title_hi: 'हस्तिनापुर के महामंत्री एवं धर्म के अवतार',
      relationship: 'Half-brother of Dhritarashtra and Pandu; wise uncle and guardian angel of the Pandavas',
      relationship_te: 'ధృతరాష్ట్ర, పాండురాజుల సోదరుడు; పాండవుల శ్రేయోభిలాషి',
      relationship_hi: 'धृतराष्ट्र और पाण्डु के भ्राता; पांडवों के सच्चे मार्गदर्शक',
      intro: 'Whispered coded warnings in Mleccha dialect to Yudhishthira, saving the Pandavas from being burned alive.',
      intro_te: 'మ్లేచ్ఛ భాషలో నిగూఢ సంకేతాలతో హెచ్చరించి పాండవులను లాక్షాగృహ అగ్ని నుండి కాపాడిన విజ్ఞాని.',
      intro_hi: 'म्लेच्छ भाषा में गुप्त संकेत देकर लाक्षागृह की आग से पांडवों के प्राण बचाने वाले परम ज्ञानी।',
      avatarUrl: '/assets/wallpapers/yudhishthira.jpg',
      role: 'mentor'
    },
    {
      id: 'krishna_yadava',
      name: 'Lord Sri Krishna',
      name_te: 'శ్రీకృష్ణ భగవానుడు',
      name_hi: 'भगवान श्रीकृष्ण',
      title: 'Ruler of Dvaraka & Supreme Orchestrator of Cosmic Order',
      title_te: 'ద్వారకాధీశుడు & జగన్నాటక సూత్రధారి',
      title_hi: 'द्वारकाधीश एवं युगावतार',
      relationship: 'Cousin of the Pandavas (son of Vasudeva, brother of Kunti); closest soulmate of Arjuna',
      relationship_te: 'కుంతి మేనల్లుడు; పాండవుల ఆప్తమిత్రుడు',
      relationship_hi: 'कुंती के भतीजे; पांडवों के सखा और मार्गदर्शक',
      intro: 'Instantly recognized the disguised Pandavas in the tournament arena and pacified the rioting kings.',
      intro_te: 'బ్రాహ్మణ వేషాల్లో ఉన్న పాండవులను క్షణంలో గుర్తించి, కలహాన్ని శాంతింపజేసిన కరుణామయుడు.',
      intro_hi: 'साधु वेष में छिपे पांडवों को एक दृष्टि में पहचानकर स्वयंवर में धर्म की स्थापना करने वाले सर्वज्ञ।',
      avatarUrl: '/assets/wallpapers/krishna.jpg',
      role: 'mentor'
    }
  ],

  familyTree: {
    title: 'Alliances & The Lineage of Panchala',
    title_te: 'పాంచాల వంశం & పాండవుల బంధుత్వాలు',
    title_hi: 'पांचाल वंश और पांडवों का महासंबंध',
    description: 'The sacrificial emergence of the Panchala royal family, forging the ultimate martial alliance with the sons of Pandu.',
    description_te: 'యజ్ఞ సంభూతులైన పాంచాల రాజకుటుంబం మరియు పాండవుల పవిత్ర సంబంధాల చిత్రం.',
    description_hi: 'यज्ञवेदी से जन्मे पांचाल राजकुल और पांडवों के बीच स्थापित हुआ ऐतिहासिक और अजेय गठबंधन।',
    nodes: [
      { id: 'drupada_tree', name: 'King Drupada', name_te: 'ద్రుపదుడు', name_hi: 'राजा द्रुपद', clan: 'Panchala', generation: 2, role: 'King of Panchala', avatarUrl: '/assets/wallpapers/sanatana-dharma.jpg' },
      { id: 'dhrishtadyumna_tree', name: 'Dhrishtadyumna', name_te: 'దృష్టద్యుమ్నుడు', name_hi: 'धृष्टद्युम्न', clan: 'Panchala', generation: 3, role: 'Prince born of Fire, destined to slay Drona', avatarUrl: '/assets/wallpapers/arjuna.jpg' },
      { id: 'draupadi_tree', name: 'Draupadi', name_te: 'ద్రౌపది', name_hi: 'द्रौपदी', clan: 'Panchala', generation: 3, isKeyCharacter: true, role: 'Sacred fire-born maiden, Empress of Indraprastha', avatarUrl: '/assets/wallpapers/draupadi.jpg' },
      { id: 'shikhandi_tree', name: 'Shikhandi', name_te: 'శిఖండి', name_hi: 'शिखंडी', clan: 'Panchala', generation: 3, role: 'Rebirth of Princess Amba, instrument of Bhishma\'s fall', avatarUrl: '/assets/wallpapers/bhishma.jpg' },
      { id: 'kunti_tree', name: 'Mother Kunti', name_te: 'కుంతీదేవి', name_hi: 'माता कुंती', clan: 'Pandava', generation: 2, role: 'Queen Mother of Pandavas', avatarUrl: '/assets/wallpapers/draupadi.jpg' },
      { id: 'yudhisthira_tree', name: 'Yudhishthira', name_te: 'ధర్మరాజు', name_hi: 'युधिष्ठिर', clan: 'Pandava', generation: 3, isKeyCharacter: true, role: 'Eldest Pandava', avatarUrl: '/assets/wallpapers/yudhishthira.jpg' },
      { id: 'bhima_tree', name: 'Bhima', name_te: 'భీమసేనుడు', name_hi: 'भीम', clan: 'Pandava', generation: 3, role: 'Second Pandava', avatarUrl: '/assets/wallpapers/bhima.jpg' },
      { id: 'arjuna_tree', name: 'Arjuna', name_te: 'అర్జునుడు', name_hi: 'अर्जुन', clan: 'Pandava', generation: 3, isKeyCharacter: true, role: 'Winner of Matsya Yantra', avatarUrl: '/assets/wallpapers/arjuna.jpg' },
      { id: 'nakula_tree', name: 'Nakula', name_te: 'నకులుడు', name_hi: 'नकुल', clan: 'Pandava', generation: 3, role: 'Fourth Pandava', avatarUrl: '/assets/wallpapers/yudhishthira.jpg' },
      { id: 'sahadeva_tree', name: 'Sahadeva', name_te: 'సహదేవుడు', name_hi: 'सहदेव', clan: 'Pandava', generation: 3, role: 'Fifth Pandava', avatarUrl: '/assets/wallpapers/yudhishthira.jpg' },
      { id: 'krishna_tree', name: 'Sri Krishna', name_te: 'శ్రీకృష్ణుడు', name_hi: 'श्रीकृष्ण', clan: 'Yadava', generation: 3, isKeyCharacter: true, role: 'Supreme guide and cousin', avatarUrl: '/assets/wallpapers/krishna.jpg' }
    ],
    links: [
      { from: 'drupada_tree', to: 'dhrishtadyumna_tree', relationship: 'parent_of', label: 'Father of' },
      { from: 'drupada_tree', to: 'draupadi_tree', relationship: 'parent_of', label: 'Father of' },
      { from: 'drupada_tree', to: 'shikhandi_tree', relationship: 'parent_of', label: 'Father of' },
      { from: 'kunti_tree', to: 'yudhisthira_tree', relationship: 'parent_of', label: 'Mother of' },
      { from: 'kunti_tree', to: 'bhima_tree', relationship: 'parent_of', label: 'Mother of' },
      { from: 'kunti_tree', to: 'arjuna_tree', relationship: 'parent_of', label: 'Mother of' },
      { from: 'arjuna_tree', to: 'draupadi_tree', relationship: 'married_to', label: 'Won in Swayamvara' },
      { from: 'draupadi_tree', to: 'yudhisthira_tree', relationship: 'married_to', label: 'Married by decree' },
      { from: 'krishna_tree', to: 'arjuna_tree', relationship: 'alliance', label: 'Divine Soulmate & Ally' }
    ]
  },

  illustratedPages: [
    {
      pageNumber: 1,
      title: 'The Venomous Festival of Varnavata',
      title_te: 'వారణావత కుట్ర & లక్క ఇల్లు',
      title_hi: 'वारणावत का निमंत्रण और लाक्षागृह',
      sceneTag: 'Hastinapur Palace Court',
      sceneTag_te: 'హస్తినాపుర రాజసభ',
      sceneTag_hi: 'हस्तिनापुर की राजसभा',
      hookLine: 'Under the pretense of royal devotion, a palace made of combustible death was erected.',
      hookLine_te: 'శివ భక్తి ముసుగులో నిర్మించిన మృత్యు మందిరం: లాక్షాగృహం.',
      hookLine_hi: 'धर्म और उत्सव के नाम पर रची गई जीवित जला देने की घिनौनी साजिश।',
      paragraphs: [
        'Following the grand tournament, Yudhishthira was formally installed as Crown Prince of Hastinapur. His immense wisdom and humility won the hearts of the citizens, fueling Duryodhana’s torment to an unbearable blaze. Shakuni and Duryodhana concocted a lethal scheme.',
        'They persuaded King Dhritarashtra to dispatch the Pandavas and Kunti to the town of Varnavata for the sacred festival of Lord Shiva. Dhritarashtra, weakened by excessive fatherly affection, consented.',
        'At Varnavata, Duryodhana’s royal architect, Purochana, had constructed a breathtaking palace named "Shiva Bhavan." But beneath its gleaming plastered walls lay dried lacquer, hemp, clarified butter, fat, and flammable resin—designed to turn into an inescapable cremation ground at a single spark.'
      ],
      paragraphs_te: [
        'యువరాజుగా పట్టాభిషేకం పొందిన ధర్మరాజు ప్రజల అభిమానాన్ని చూరగొన్నాడు. ఇది చూసి దుర్యోధనుని అసూయ కట్టలు తెంచుకుంది. శకునితో కలిసి ఒక ఘోరమైన పథకం వేశాడు.',
        'వారణావతంలో జరుగుతున్న శివ ఉత్సవాలకు పాండవులను, కుంతీదేవిని పంపవలసిందిగా ధృతరాష్ట్రుడిపై ఒత్తిడి తెచ్చారు. పుత్రవ్యామోహంతో రాజు దానికి అంగీకరించాడు.',
        'అక్కడ పురోచనుడనే శిల్పి చేత లక్క, నెయ్యి, మైనం, రెంజిన్ వంటి సులభంగా మండే పదార్థాలతో అత్యంత అందమైన భవనాన్ని నిర్మింపజేశారు. ఒక్క నిప్పురవ్వ తగిలితే ఆ భవనం క్షణాల్లో బూడిదయ్యేలా ఏర్పాటు చేశారు.'
      ],
      paragraphs_hi: [
        'युधिष्ठिर की बढ़ती लोकप्रियता और युवराज पद को देखकर दुर्योधन की ईर्ष्या पराकाष्ठा पर पहुँच गई। शकुनि के साथ मिलकर उसने एक घातक षड्यंत्र रचा।',
        'धृतराष्ट्र को विवश कर पांडवों और माता कुंती को वारणावत में शिव-उत्सव के बहाने भेज दिया गया।',
        'वारणावत में दुर्योधन के विश्वासपात्र पुरोचन ने \'शिव-भवन\' नामक महल बनाया था। उस महल की दीवारें लाख, मोम, घी और राल जैसी अत्यंत ज्वलनशील वस्तुओं से तैयार की गई थीं, जिससे एक ही चिंगारी में सब भस्म हो जाए।'
      ],
      dialogueQuote: '"Go forth with joy to Varnavata, dear nephews; celebrate the festival and enjoy the serene beauty of the city."',
      dialogueQuote_te: '"వారణావతానికి సంతోషంగా వెళ్ళి శివారాధన చేసుకుని రండి నాయనలారా!"',
      dialogueQuote_hi: '"जाओ पुत्रों! वारणावत में जाकर महादेव की पूजा करो और कुछ समय सुख से व्यतीत करो।"',
      speaker: 'Dhritarashtra to the Pandavas',
      speaker_te: 'పాండవులతో ధృతరాష్ట్రుడు',
      speaker_hi: 'धृतराष्ट्र द्वारा पांडवों की विदाई',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'The Pandavas taking leave of the elders in Hastinapur before setting off for Varnavata.',
      imageCaption_te: 'వారణావతానికి బయలుదేరుతూ పెద్దల ఆశీర్వాదం తీసుకుంటున్న పాండవులు.',
      imageCaption_hi: 'वारणावत प्रस्थान से पूर्व हस्तिनापुर के बड़ों का आशीर्वाद लेते पांडव।'
    },
    {
      pageNumber: 2,
      title: 'Vidura’s Cryptic Whisper & The Secret Tunnel',
      title_te: 'విదురుని నిగూఢ హెచ్చరిక & రహస్య సొరంగం',
      title_hi: 'विदुर की म्लेच्छ वाणी और गुप्त सुरंग',
      sceneTag: 'Outskirts of Hastinapur & Varnavata Mansion',
      sceneTag_te: 'హస్తినాపుర పొలిమేరలు & లక్క ఇల్లు',
      sceneTag_hi: 'नगर का द्वार और वारणावत का लाक्षागृह',
      hookLine: 'A coded greeting in an unknown tongue revealed the blazing doom that awaited.',
      hookLine_te: 'మ్లేచ్ఛ భాషలో విదురుడు పంపిన నిగూఢ సందేశం వారి ప్రాణాలను నిలబెట్టింది.',
      hookLine_hi: 'विदुर के गुप्त संकेतों ने उस भयानक अग्नि-कुंड से जीवन का मार्ग दिखाया।',
      paragraphs: [
        'As the Pandavas mounted their chariots, Mahatma Vidura walked alongside Yudhishthira and spoke softly in the obscure Mleccha dialect: "He who knows the weapon that consumes without burning metal, he who knows that fire burns forests yet rats find sanctuary in underground burrows—he alone escapes death."',
        'Yudhishthira nodded, deciphering every syllable. Arriving at Varnavata, Bhima inspected the palace walls and smelled the faint odor of boiling animal fat and dry resin beneath the fragrant sandalwood paste.',
        'Soon, an engineer trusted by Vidura arrived in secret with mining tools. In the dead of night, beneath the inner bedchambers of Kunti and the five brothers, he carved a wide subterranean tunnel extending miles beyond the palace into the thick dark forest.'
      ],
      paragraphs_te: [
        'పాండవులు రథం ఎక్కుతుండగా, విదురుడు ధర్మరాజు చెవిలో మ్లేచ్ఛ భాషలో ఇలా చెప్పాడు: "మంటల్లో కాలని అగ్నిని తెలిసినవాడు, అడవి కాలుతున్నప్పుడు ఎలుక భూమి లోపలి రంధ్రాల్లో దాక్కుని బతికినట్లుగా తప్పించుకోగల వివేకి మాత్రమే ప్రాణాలు నిలుపుకోగలడు."',
        'ధర్మరాజు ఆ నిగూఢ భావాన్ని అర్థం చేసుకున్నాడు. వారణావతం చేరిన వెంటనే భీముడు గోడలను వాసన చూసి నెయ్యి, లక్క, మైనం విషయాన్ని పసిగట్టాడు.',
        'విదురుడు పంపిన నమ్మకమైన సొరంగ నిపుణుడు రహస్యంగా వచ్చి, కుంతి, పాండవుల గదుల క్రింద నుండి దట్టమైన అడవి వరకు ఒక పొడవైన నేలమాళిగను తవ్వాడు.'
      ],
      paragraphs_hi: [
        'हस्तिनापुर से विदा होते समय विदुर ने युधिष्ठिर से म्लेच्छ भाषा में कहा: "जो व्यक्ति उस अस्त्र को पहचानता है जो लोहे को नहीं पर देह को जलाता है, और जो यह जानता है कि दावाग्नि से बिल में रहने वाले जीव बच जाते हैं, वही जीवन पाता है।"',
        'युधिष्ठिर सारा मर्म समझ गए। लाक्षागृह पहुँचकर भीम ने दीवारों की गंध से जान लिया कि यह मोम और चर्बी का जलता हुआ यमलोक है।',
        'विदुर द्वारा गुप्त रूप से भेजे गए एक खनिक (सुरंग खोदने वाले) ने रात के अंधेरे में महल के फर्श से लेकर घने वन तक कई मील लंबी गुप्त सुरंग खोद दी।'
      ],
      dialogueQuote: '"The fire that reduces all to ashes cannot touch the dweller of the earth\'s womb."',
      dialogueQuote_te: '"సమస్తాన్నీ భస్మం చేసే దావాగ్ని భూగర్భంలో దాగున్న ప్రాణిని తాకలేదు."',
      dialogueQuote_hi: '"जो धरती की कोख में शरण लेता है, उसे वन की दावाग्नि भी छू नहीं सकती।"',
      speaker: 'Vidura’s Cryptic Proverb to Yudhishthira',
      speaker_te: 'ధర్మరాజుతో విదురుని రహస్య సంకేతం',
      speaker_hi: 'विदुर द्वारा युधिष्ठिर को गुप्त चेतावनी',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'The mining expert excavating the escape tunnel beneath the chamber of the Pandavas.',
      imageCaption_te: 'పాండవుల ప్రాణాలను కాపాడే రహస్య నేలమాళిగను తవ్వుతున్న నిపుణుడు.',
      imageCaption_hi: 'महल के नीचे चुपचाप जीवनदायिनी सुरंग का निर्माण करते खनिक।'
    },
    {
      pageNumber: 3,
      title: 'The Midnight Conflagration & Forest Flight',
      title_te: 'అర్ధరాత్రి అగ్నిప్రళయం & అరణ్య ప్రయాణం',
      title_hi: 'मध्यरात्रि का अग्निकांड और वन में पलायन',
      sceneTag: 'Burning Shiva Bhavan at Varnavata',
      sceneTag_te: 'భీకరంగా మండుతున్న లాక్షాగృహం',
      sceneTag_hi: 'जलती हुई लपटों में घिरा लाक्षागृह',
      hookLine: 'Turning the hunter into the hunted, Bhima torched the trap and led his kin into freedom.',
      hookLine_te: 'కుట్రదారులను వారి ఊబిలోనే ముంచి, కుటుంబ సమేతంగా అడవిలోకి దూసుకెళ్ళిన భీముడు.',
      hookLine_hi: 'दुष्ट पुरोचन के महल को उसी की ज्वाला में भस्म कर भीम ने अपने परिवार को मुक्त किया।',
      paragraphs: [
        'After one year of feigned ignorance, Yudhishthira learned that Purochana intended to burn the mansion that very night. Acting first, Bhima set fire to Purochana’s quarters and sealed the outer gates.',
        'Within minutes, the lac walls erupted into towering pillars of red fury. Smoke choked the sky as the entire palace collapsed into a sea of fire. Purochana perished in his own wicked creation.',
        'Meanwhile, the Pandavas descended into the subterranean tunnel. Emerging miles away in the chilling night air of the dense forest, Bhima placed his exhausted mother Kunti on his back, took Nakula and Sahadeva on his hips, and led Yudhishthira and Arjuna through the thorny wilderness.'
      ],
      paragraphs_te: [
        'సంవత్సరం పాటు ఏమీ తెలియనట్లు నటించిన పాండవులు, ఆ రాత్రి పురోచనుడు నిప్పంటించబోతున్నాడని తెలుసుకున్నారు. ఎదురు దాడి చేస్తూ భీముడే మొదట పురోచనుని గదికి నిప్పంటించాడు.',
        'క్షణాల్లో లక్క ఇల్లు భయంకరమైన అగ్నిగుండంగా మారింది. ఆ మంటల్లో పురోచనుడు మాడి మసైపోయాడు. హస్తినాపుర ప్రజలు పాండవులు మరణించారని దుఃఖంలో మునిగిపోయారు.',
        'పాండవులు మాత్రం సొరంగ మార్గం ద్వారా క్షేమంగా దట్టమైన అడవిలోకి చేరారు. అలసిపోయిన తల్లి కుంతిని భుజాలపై మోస్తూ, నకుల సహదేవులను చంకనెత్తుకుని భీముడు ముందుకు సాగాడు.'
      ],
      paragraphs_hi: [
        'जब युधिष्ठिर को ज्ञात हुआ कि पुरोचन आज की रात ही आग लगाने वाला है, तो भीमसेन ने स्वयं पुरोचन के कक्ष में अग्नि लगा दी और द्वार बंद कर दिए।',
        'देखते ही देखते पूरा लाक्षागृह भयंकर लपटों का नरक बन गया। पुरोचन अपने ही बिछाए जाल में जलकर राख हो गया। संसार ने समझा कि पांडव जल मरे।',
        'किंतु पांडव सुरंग के मार्ग से वन में निकल चुके थे। थककर चूर माता कुंती को कंधे पर बिठाकर और नकुल-सहदेव को गोद में उठाकर महाबली भीम वन की ओर बढ़ चले।'
      ],
      dialogueQuote: '"Hastinapur must believe we are ashes; our safety lies in the silence of our supposed death."',
      dialogueQuote_te: '"మనం చనిపోయామని హస్తినాపురం నమ్మాలి; అప్పుడే మనకు రక్షణ దక్కుతుంది."',
      dialogueQuote_hi: '"संसार को यही विश्वास रहे कि हम भस्म हो गए; हमारी सुरक्षा हमारे मौन में ही है।"',
      speaker: 'Yudhishthira to his brothers',
      speaker_te: 'సోదరులతో ధర్మరాజు',
      speaker_hi: 'युधिष्ठिर का भाइयों को निर्देश',
      imageUrl: '/assets/wallpapers/bhima.jpg',
      imageCaption: 'Mighty Bhima carrying Kunti and his younger brothers through the dark Primeval forest.',
      imageCaption_te: 'దట్టమైన చీకటి అడవిలో కుంతీదేవిని, తమ్ముళ్ళను మోస్తున్న మహాబలశాలి భీమసేనుడు.',
      imageCaption_hi: 'घने अंधकारमय वन में पूरे परिवार को अपने विशाल कंधों पर उठाए महाबली भीम।'
    },
    {
      pageNumber: 4,
      title: 'The Monster of Ekachakra: The Fall of Bakasura',
      title_te: 'ఏకచక్రపుర రక్షణ & బకాసుర సంహారం',
      title_hi: 'एकचक्रा नगरी और बकासुर का वध',
      sceneTag: 'The Village of Ekachakra',
      sceneTag_te: 'ఏకచక్రపురం',
      sceneTag_hi: 'एकचक्रा नगरी का वन',
      hookLine: 'A single cart of food, a weeping Brahmin household, and the mace of justice.',
      hookLine_te: 'ఒక బ్రాహ్మణ కుటుంబ కన్నీరు తుడుస్తూ, రాక్షస సంహారానికి కదిలిన వృకోదరుడు.',
      hookLine_hi: 'एक विप्र परिवार का विलाप सुनकर दानव के संहार हेतु चल पड़े भीमसेन।',
      paragraphs: [
        'Disguised as poor mendicant Brahmins, the Pandavas took shelter in the peaceful town of Ekachakra, staying in the humble dwelling of a virtuous Brahmin family. Each day the brothers begged for alms and split their meager food.',
        'One morning, terrible weeping echoed through the house. The town was subjugated by a ferocious Asura named Bakasura, who demanded a weekly tribute: a cartload of rice, two buffaloes, and the human driver who brought the cart, whom he would devour whole. That day, it was their host’s turn to send a family member.',
        'Hearing this, Mother Kunti stepped forward: "Do not weep, noble Brahmin. I have five sons; one of them, endowed with supernatural strength, shall take the cart of food today!" Bhima happily took the cart, devoured the food right before the demon’s glaring eyes, and shattered the beast’s spine in a ferocious bare-handed duel.'
      ],
      paragraphs_te: [
        'పాండవులు బ్రాహ్మణ వేషాల్లో ఏకచక్రపురంలో ఒక పేద బ్రాహ్మణుని ఇంట్లో ఆశ్రయం పొందారు. బిక్షాటన చేస్తూ కాలం గడుపుతున్నారు.',
        'ఒకరోజు ఆ ఇంట్లో తీవ్ర రోదనలు వినిపించాయి. ఆ ఊరిని బకాసురుడనే రాక్షసుడు పీడిస్తున్నాడు. ప్రతివారం ఒక బండి నిండా అన్నం, రెండు దున్నపోతులు, వాటిని తోలే ఒక మనిషిని ఆహారంగా తీసుకుంటాడు. ఆ వారం ఆ ఇంటి వంతు వచ్చింది.',
        'ఇది విన్న కుంతీదేవి: "విప్రోత్తమా! బాధపడకు, నా కుమారుడు భీముడు ఆ బండిని తోలుకెళ్తాడు" అని పంపింది. భీముడు అక్కడికి వెళ్ళి రాక్షసుడి కళ్లముందే ఆహారాన్ని ఆరగించి, ద్వంద్వ యుద్ధంలో బకాసురుడి నడుము విరిచి చంపేశాడు.'
      ],
      paragraphs_hi: [
        'ब्राह्मण वेष में पांडव एकचक्रा नगरी के एक निर्धन ब्राह्मण के घर में अतिथि बनकर रहने लगे। भिक्षाटन ही उनका जीवन निर्वाह था।',
        'एक दिन घर से रोने की आवाज आई। उस नगर पर बकासुर नामक नरभक्षी राक्षस का आतंक था। हर सप्ताह उसे एक गाड़ी अन्न, दो भैंसे और गाड़ीवान को भोजन के रूप में भेजा जाता था। उस दिन उस विप्र परिवार की बारी थी।',
        'माता कुंती ने कहा: "हे विप्र! रोइए मत, मेरे पाँच पुत्र हैं; मेरा बलशाली पुत्र भीम वह गाड़ी लेकर जाएगा।" भीम ने जाकर बकासुर के सामने ही सारा भोजन खा लिया और महायुद्ध में उसकी रीढ़ तोड़कर उसका अंत कर दिया।'
      ],
      dialogueQuote: '"Mother, I shall break this demon like a dry stick and rid these innocent villagers of their living nightmare."',
      dialogueQuote_te: '"అమ్మా! ఎండు కర్రను విరిచినట్లు ఆ రాక్షసుడిని మట్టికరిపించి ఈ ప్రజల భయాన్ని పోగొడతాను."',
      dialogueQuote_hi: '"माता! मैं इस दुष्ट असुर को तिनके की तरह तोड़कर इन निर्दोष ग्रामीणों को अभयदान दूँगा।"',
      speaker: 'Bhima to Mother Kunti',
      speaker_te: 'కుంతీదేవితో భీముడు',
      speaker_hi: 'माता कुंती से भीम के गर्वीले शब्द',
      imageUrl: '/assets/wallpapers/bhima.jpg',
      imageCaption: 'Bhima laughing in triumph after liberating the town of Ekachakra from Bakasura.',
      imageCaption_te: 'బకాసురుడిని సంహరించి ఏకచక్రపుర ప్రజలను కాపాడిన భీమసేనుడు.',
      imageCaption_hi: 'बकासुर का वध कर एकचक्रा वासियों को भयमुक्त करते महाबली भीम।'
    },
    {
      pageNumber: 5,
      title: 'The Challenge of Panchala: The Matsya Yantra',
      title_te: 'పాంచాల స్వయంవరం & మత్స్యయంత్ర సవాలు',
      title_hi: 'पांचाल का स्वयंवर और मत्स्य-यंत्र की चुनौती',
      sceneTag: 'Royal Arena of King Drupada in Kampilya',
      sceneTag_te: 'కాంపిల్య నగరంలోని స్వయంవర వేదిక',
      sceneTag_hi: 'कांपिल्य नगरी की भव्य स्वयंवर सभा',
      hookLine: 'A rotating fish, a mirror of water, and a colossal bow that bent for no mortal.',
      hookLine_te: 'తిరిగే మత్స్యయంత్రం, కింద నీటి ప్రతిబింబం, మరియు శివధనువులాంటి భారీ ధనుస్సు.',
      hookLine_hi: 'घूमता हुआ मत्स्य-यंत्र, जल का दर्पण और एक ऐसा धनुष जिसे दिग्गज योद्धा भी न हिला सके।',
      paragraphs: [
        'Word reached Ekachakra of a stupendous event: King Drupada had announced the Swayamvara of his peerless daughter, Draupadi, in the capital of Kampilya. Guided by Sage Vyasa, the disguised Pandavas traveled toward the Panchala realm.',
        'The arena was surrounded by golden pavilions filled with arrogant kings, princes, and warriors from across the earth: Duryodhana, Karna, Shalya, Jarasandha, and Shishupala. At the center stood a colossal celestial bow, five steel arrows, and overhead, a rapidly spinning mechanical fish (Matsya Yantra).',
        'Prince Dhrishtadyumna proclaimed the contest: "He who can lift and string this colossal bow, gaze downward only at the reflection of the fish in the pool of oil below, and pierce the golden eye of the spinning fish with a single arrow—he shall win my sister Draupadi!"'
      ],
      paragraphs_te: [
        'ద్రుపద మహారాజు తన కుమార్తె ద్రౌపదికి స్వయంవరం ప్రకటించాడని వ్యాస మహర్షి ద్వారా తెలుసుకున్న పాండవులు బ్రాహ్మణ వేషాల్లో కాంపిల్య నగరానికి చేరుకున్నారు.',
        'వేదికపై దుర్యోధనుడు, కర్ణుడు, శల్యుడు, జరాసంధుడు వంటి ఎందరో మహావీరులు కూర్చుని ఉన్నారు. మధ్యలో ఒక బరువైన దివ్య ధనుస్సు, ఐదు బాణాలు, పైన వేగంగా తిరుగుతున్న మత్స్యయంత్రం ఉన్నాయి.',
        'దృష్టద్యుమ్నుడు సవాలును ప్రకటించాడు: "ఈ ధనుస్సును ఎక్కుపెట్టి, కింద నూనె పాత్రలోని ప్రతిబింబాన్ని చూస్తూ, పైన తిరుగుతున్న చేప కంటిని కొట్టిన వీరుడిని నా సోదరి ద్రౌపది వరిస్తుంది!"'
      ],
      paragraphs_hi: [
        'पांडवों को सूचना मिली कि पांचाल नरेश द्रुपद अपनी रूपवती पुत्री द्रौपदी का स्वयंवर कर रहे हैं। व्यास मुनि की प्रेरणा से वे कांपिल्य पहुँचे।',
        'सभा में दुर्योधन, कर्ण, शल्य, जरासंध जैसे संसार के प्रतापी राजा एकत्र थे। मध्य में एक विशाल धनुष रखा था और आकाश में घूमता हुआ एक यांत्रिक मत्स्य-यंत्र था।',
        'धृष्टद्युम्न ने उद्घोषणा की: "जो वीर इस धनुष पर प्रत्यंचा चढ़ाकर, नीचे तेल के कुंड में केवल उसकी परछाई देखकर ऊपर घूमती मछली की आँख को एक ही बाण से वेध देगा, वही मेरी बहिन द्रौपदी का वरण करेगा!"'
      ],
      dialogueQuote: '"Neither high birth nor royal crown grants victory today; only supreme mastery of archery shall claim the hand of Panchali."',
      dialogueQuote_te: '"ఇక్కడ కులం గాని, కిరీటాలు గాని గెలవలేవు; అసమాన ధనుర్విద్య మాత్రమే ద్రౌపదిని దక్కించుకోగలదు."',
      dialogueQuote_hi: '"यहाँ राजमुकुट काम नहीं आएँगे; केवल अचूक संधान करने वाला महाधनुर्धर ही द्रौपदी का वरण करेगा।"',
      speaker: 'Prince Dhrishtadyumna’s Proclamation',
      speaker_te: 'దృష్టద్యుమ్నుని ప్రకటన',
      speaker_hi: 'धृष्टद्युम्न की राजसभा में घोषणा',
      imageUrl: '/assets/wallpapers/draupadi.jpg',
      imageCaption: 'Princess Draupadi holding the golden marriage garland, observing the assembly of kings.',
      imageCaption_te: 'స్వయంవర వేదికపై వరమాల ధరించి నిలబడిన పాంచాల రాకుమారి ద్రౌపది.',
      imageCaption_hi: 'वरमाला हाथ में लिए स्वयंवर सभा में उपस्थित रूपवती राजकुमारी द्रौपदी।'
    },
    {
      pageNumber: 6,
      title: 'The Humiliation of Kings & The Brahmin\'s Step',
      title_te: 'రాజుల పరాభవం & బ్రాహ్మణుని అడుగులు',
      title_hi: 'नरेशों की विफलता और विप्र का आगमन',
      sceneTag: 'Center of the Swayamvara Arena',
      sceneTag_te: 'మత్స్యయంత్ర పరీక్షా వేదిక',
      sceneTag_hi: 'स्वयंवर का रंगमंच',
      hookLine: 'One by one, proud kings were thrown to the floor by the bowstring, until a quiet ascetic stepped forth.',
      hookLine_te: 'అహంకారంతో వచ్చిన రాజులంతా ధనుస్సును ఎత్తలేక కుప్పకూలారు; అప్పుడు ఒక యువ బ్రాహ్మణుడు ముందుకు కదిలాడు.',
      hookLine_hi: 'बड़े-बड़े अहंकारी शूरवीर धनुष की प्रत्यंचा भी न चढ़ा सके, तभी साधु वेष में एक युवक आगे बढ़ा।',
      paragraphs: [
        'One after another, legendary monarchs stepped forth. King Jarasandha, King Shalya, and Duryodhana strove with all their might, yet could not even lift the bow an inch from the ground; several were thrown violently backward when the bow snapped violently back into place.',
        'Silence swept the hall. Was there not a single warrior on earth capable of winning Draupadi? In the spectator gallery, sitting quietly among humble scholars, young Arjuna stood up with calm majesty.',
        'Murmurs rippled through the Brahmins: "Sit down, young boy! When mighty kings clad in armor could not lift it, you will only bring shame upon our priestly order!" But Arjuna bowed humbly to the gods, stepped into the dust of the arena, and approached the sacred bow.'
      ],
      paragraphs_te: [
        'జరాసంధుడు, శల్యుడు, దుర్యోధనుడు వంటి వీరులంతా ఆ ధనుస్సును ఎత్తలేక అవమానంతో వెనుదిరిగారు. కొందరు ధనుస్సు విసరికొట్టడంతో కిందపడి దెబ్బలు తిన్నారు.',
        'మొత్తం సభ నిశ్శబ్దమైపోయింది. భూమిపై ద్రౌపదిని గెలిచే వీరుడే లేడా అని ద్రుపదుడు ఆవేదన చెందాడు. అప్పుడు బ్రాహ్మణుల వరుసలో కూర్చున్న అర్జునుడు ప్రశాంతంగా లేచి నిలబడ్డాడు.',
        '"ఆగు నాయనా! ఆయుధాలు ధరించిన రాజులే చేయలేని పనిని నీవు చేయబోయి నవ్వులపాలు కాకు" అని కొందరు బ్రాహ్మణులు వారించారు. కానీ అర్జునుడు వినమ్రంగా దేవతలను స్మరిస్తూ వేదికపైకి అడుగుపెట్టాడు.'
      ],
      paragraphs_hi: [
        'एक के बाद एक प्रतापी राजा आगे आए। जरासंध, शल्य और दुर्योधन जैसे महारथी उस धनुष को हिला तक न सके। कई राजा तो धनुष की झंकार से सभा में गिर पड़े।',
        'द्रुपद नरेश निराश हो गए कि क्या कोई भी वीर नहीं बचा? तभी विप्रों की पंक्ति में बैठा एक तेजस्वी युवक शांत भाव से उठ खड़ा हुआ।',
        'ब्राह्मणों ने कहा: "वत्स! बैठ जाओ, जब बड़े-बड़े राजा नहीं कर सके, तो तुम उपहास के पात्र बनोगे।" किंतु अर्जुन ने देवताओं और गुरुओं को प्रणाम कर निर्भीक होकर धनुष की ओर कदम बढ़ा दिए।'
      ],
      dialogueQuote: '"Let not the assembly despair; if the warrior caste has failed, righteousness can still triumph."',
      dialogueQuote_te: '"క్షత్రియులు విఫలమైనంత మాత్రాన నిరాశ చెందకండి; ధర్మం ఎప్పుడూ విజయం సాధిస్తుంది."',
      dialogueQuote_hi: '"यदि क्षत्रिय पराक्रम चूक गया, तो ब्राह्मण का तपोबल इस लक्ष्य को अवश्य साधेगा।"',
      speaker: 'Arjuna walking to the bow',
      speaker_te: 'వేదికపైకి వెళ్తూ అర్జునుడు',
      speaker_hi: 'धनुष की ओर बढ़ते हुए अर्जुन के विचार',
      imageUrl: '/assets/wallpapers/arjuna.jpg',
      imageCaption: 'Disguised Arjuna lifting the gigantic bow with effortless, divine grace.',
      imageCaption_te: 'సునాయాసంగా భారీ ధనుస్సును పైకెత్తుతున్న బ్రాహ్మణ వేషధారి అర్జునుడు.',
      imageCaption_hi: 'लीलामात्र से विशाल धनुष को उठाकर प्रत्यंचा चढ़ाते तेजस्वी विप्र अर्जुन।'
    },
    {
      pageNumber: 7,
      title: 'The Arrow of Destiny: The Eye is Pierced',
      title_te: 'లక్ష్య ఛేదన & మంగళహారతి',
      title_hi: 'मत्स्य-वेध और स्वयंवर विजय',
      sceneTag: 'The Oil Pool at Kampilya',
      sceneTag_te: 'నూనె పాత్ర & తిరుగుతున్న మత్స్యయంత్రం',
      sceneTag_hi: 'कांपिल्य का रंगमंच और तेल का कुंड',
      hookLine: 'Looking down into shimmering oil, the arrow soared upward and struck true.',
      hookLine_te: 'నూనెలోని ప్రతిబింబాన్ని చూస్తూ వదిలిన బాణం ఆకాశంలోని మత్స్యయంత్రాన్ని ఛేదించింది.',
      hookLine_hi: 'नीचे तेल में परछाई देखकर ऊपर छोड़ा गया अचूक बाण सीधे मछली की आँख में जा लगा।',
      paragraphs: [
        'Arjuna circled the bow three times with folded hands, lifted it as effortlessly as a child lifts a plaything, and strung the bowcord in a single fluid motion. A resonant twang boomed through the hall, shaking the very rafters.',
        'Notching five golden arrows, Arjuna knelt beside the pool of dark oil. Ignoring the roaring crowd, his mind condensed into a diamond point of pure concentration. Gazing solely at the mirrored reflection of the spinning fish, he released the bowstring.',
        'The arrow sliced upward like a streak of lightning. With a sharp metallic crack, the revolving fish was struck directly through the eye and plummeted to the marble floor. Celestial flowers showered from heaven, and Draupadi, her heart overflowing with awe and joy, placed the fragrant white garland around the disguised hero’s neck.'
      ],
      paragraphs_te: [
        'అర్జునుడు ధనుస్సుకు ప్రదక్షిణ చేసి, పూలదండలా ఎత్తి అలవోకగా నారి తొడిగాడు. ఆ వింటి నారి ధ్వని సభను దద్దరిల్లజేసింది.',
        'ఐదు బాణాలను తీసుకుని, కింద నూనె పాత్రలోని ప్రతిబింబాన్ని ఏకాగ్రతతో గమనిస్తూ బాణాన్ని పైకి వదిలాడు. మెరుపులా దూసుకెళ్ళిన ఆ బాణం తిరుగుతున్న చేప కంటిని ఛేదించింది.',
        'ఆకాశం నుండి పూలవాన కురిసింది. మొత్తం సభ జయజయధ్వానాలు చేసింది. ఆనందంతో పులకించిన ద్రౌపది అర్జునుని మెడలో వరమాల వేసింది.'
      ],
      paragraphs_hi: [
        'अर्जुन ने धनुष को प्रणाम किया और उसे एक ही क्षण में उठाकर प्रत्यंचा चढ़ा दी। उसकी भीषण टंकार से पूरी सभा गूंज उठी।',
        'अर्जुन ने नीचे तेल के कुंड में घूमती मछली की परछाई पर ध्यान केंद्रित किया। उनका मन संपूर्ण ब्रह्मांड से हटकर केवल उस एक बिंदु पर स्थिर हो गया। और उन्होंने तीर छोड़ दिया।',
        'बिजली की गति से छूटा बाण सीधे मछली की आँख को भेदता हुआ पार निकल गया और मछली नीचे आ गिरी। आकाश से पुष्पवृष्टि होने लगी और मुग्ध द्रौपदी ने विप्र अर्जुन के गले में वरमाला डाल दी।'
      ],
      dialogueQuote: '"The eye of the fish is pierced! The maiden of Panchala belongs to this incomparable youth!"',
      dialogueQuote_te: '"మత్స్యయంత్రం ఛేదించబడింది! ద్రౌపది ఈ అజేయ వీరునికి దక్కింది!"',
      dialogueQuote_hi: '"मत्स्य-वेध पूर्ण हुआ! पांचाल की राजकुमारी इस दिव्य युवा की हुई!"',
      speaker: 'Dhrishtadyumna to the cheering crowd',
      speaker_te: 'ప్రజలతో దృష్టద్యుమ్నుడు',
      speaker_hi: 'धृष्टद्युम्न का हर्षोल्लास',
      imageUrl: '/assets/wallpapers/arjuna.jpg',
      imageCaption: 'The golden arrow piercing the eye of the revolving fish as flowers rain upon the arena.',
      imageCaption_te: 'మత్స్యయంత్రం కంటిని ఛేదించిన బాణం, ద్రౌపది వరణం.',
      imageCaption_hi: 'मत्स्य-यंत्र भेदकर विजय प्राप्त करने का अलौकिक दृश्य।'
    },
    {
      pageNumber: 8,
      title: 'The Battle of the Arena & The Decree of Mother Kunti',
      title_te: 'సభా ప్రాంగణ యుద్ధం & కుంతీదేవి ఆదేశం',
      title_hi: 'सभा में युद्ध और माता कुंती का अनजाने में आदेश',
      sceneTag: 'Potter’s Cottage on the Outskirts of Kampilya',
      sceneTag_te: 'కుమ్మరి ఇల్లు & పాండవుల సత్యం',
      sceneTag_hi: 'कुम्हार की कुटिया और पांचों पांडवों का विवाह',
      hookLine: 'Jealous monarchs drew swords in fury, while a mother’s innocent words altered destiny forever.',
      hookLine_te: 'రాజుల దాడిని తిప్పికొట్టిన భీమార్జునులు; మరియు మాతృ వాక్య పరిపాలనతో ఒక్కటైన ద్రౌపది.',
      hookLine_hi: 'क्रुद्ध राजाओं को श्रीकृष्ण ने रोका; और माता के एक वाक्य ने द्रौपदी को पाँचों पांडवों की रानी बना दिया।',
      paragraphs: [
        'Outraged that a mere Brahmin had won the princess, Duryodhana, Karna, and other kings drew their swords to kill Drupada and seize Draupadi. Bhima uprooted an entire massive tree like an elephant, while Arjuna stood with the great bow, repelling Karna in a dazzling clash of arrows.',
        'Sri Krishna and Balarama stepped into the arena, smiling knowingly: "Righteousness was observed, O Kings; she was won lawfully. Do not invite ruin by fighting dharma!" Persuaded by Krishna’s authority, the humiliated kings retreated.',
        'Arjuna and Bhima led Draupadi to the humble potter’s hut where Kunti was waiting. Calling out from the doorway, they joyfully exclaimed: "Mother, behold the precious alms we have brought today!" Without turning around, preoccupied in worship, Kunti replied: "Whatever you have obtained, my dear sons, share it equally among all five of you." Thus, by a mother\'s inviolable word and the cosmic design of destiny, Draupadi became the common consort of the five Pandava brothers.'
      ],
      paragraphs_te: [
        'ఒక బ్రాహ్మణుడు ద్రౌపదిని గెలవడం చూసి ఓర్వలేని రాజులు యుద్ధానికి దిగారు. భీముడు ఒక భారీ వృక్షాన్ని పెకలించి పోరాడగా, అర్జునుడు కర్ణుని బాణాలను తిప్పికొట్టాడు. శ్రీకృష్ణుడు జోక్యం చేసుకుని ధర్మాన్ని గౌరవించమని రాజులను వెనక్కి పంపాడు.',
        'భీమార్జునులు ద్రౌపదిని తీసుకుని కుమ్మరి ఇంటిలో ఉన్న తల్లి కుంతి వద్దకు వచ్చారు. "అమ్మా! ఈరోజు మేము ఒక విశిష్టమైన భిక్ష తెచ్చాము" అని ద్వారం వద్ద నుండి చెప్పారు.',
        'పూజలో ఉన్న కుంతీదేవి వెనుదిరిగి చూడకుండా: "నాయనలారా! తెచ్చినదానిని మీ ఐదుగురూ సమానంగా పంచుకోండి" అని ఆదేశించింది. తల్లి మాటను జవదాటలేని పాండవులు, విధి లిఖితం ప్రకారం ద్రౌపదిని ఐదుగురూ ధర్మపత్నిగా స్వీకరించారు.'
      ],
      paragraphs_hi: [
        'एक ब्राह्मण द्वारा स्वयंवर जीतने पर क्रुद्ध होकर दुर्योधन और कर्ण आदि राजाओं ने आक्रमण कर दिया। भीम ने एक विशाल वृक्ष उखाड़कर और अर्जुन ने गांडीव के समान धनुष से सबको रोक दिया। भगवान कृष्ण ने बीच में आकर सभी राजाओं को शांत किया।',
        'अर्जुन और भीम द्रौपदी को लेकर कुम्हार की कुटिया में पहुँचे जहाँ माता कुंती प्रतीक्षा कर रही थीं। द्वार से ही उन्होंने पुकारा: "माता! देखिए, आज हम कैसी अनूठी भिक्षा लेकर आए हैं!"',
        'पूजा में लीन माता कुंती ने बिना देखे ही कह दिया: "पुत्रों! जो भी लाए हो, उसे आपस में पाँचों भाई बाँट लो।" माता का वचन कभी असत्य नहीं हो सकता था; और पूर्वजन्म के वरदान अनुसार द्रौपदी पांचों पांडवों की महारानी बनीं।'
      ],
      dialogueQuote: '"Whatever you have brought, my dear sons, divide it equally among all five brothers."',
      dialogueQuote_te: '"నాయనలారా! మీరు తెచ్చిన దానిని మీ ఐదుగురూ సమానంగా పంచుకోండి."',
      dialogueQuote_hi: '"पुत्रों! जो कुछ भी लाए हो, उसे पाँचों भाई आपस में बाँटकर उपभोग करो।"',
      speaker: 'Mother Kunti’s unalterable command',
      speaker_te: 'కుంతీదేవి అప్రయత్న ఆదేశం',
      speaker_hi: 'माता कुंती का अटल वचन',
      imageUrl: '/assets/wallpapers/draupadi.jpg',
      imageCaption: 'The five Pandavas united with Draupadi under the blessings of Mother Kunti and Lord Krishna.',
      imageCaption_te: 'తల్లి కుంతి, శ్రీకృష్ణుని ఆశీస్సులతో ద్రౌపదితో ఏకమైన పంచ పాండవులు.',
      imageCaption_hi: 'माता कुंती और भगवान श्रीकृष्ण के आशीर्वाद से द्रौपदी और पंच पांडवों का पावन मिलन।'
    }
  ],

  partSummary: {
    majorEvents: [
      'Duryodhana and Shakuni plot the death of Pandavas in the lac palace at Varnavata',
      'Mahatma Vidura sends a cryptic warning in Mleccha dialect and a miner to dig an escape tunnel',
      'Bhima sets fire to Purochana’s quarters and leads his family through the underground tunnel',
      'Slaying of the man-eating demon Bakasura in Ekachakra by Bhima',
      'King Drupada organizes the grand Matsya Yantra Swayamvara for Draupadi',
      'Arjuna in Brahmin disguise strings the celestial bow and pierces the eye of the spinning fish',
      'Mother Kunti’s unintentional decree binds Draupadi to all five Pandava brothers'
    ],
    majorEvents_te: [
      'వారణావతంలో లక్క ఇల్లు నిర్మించి పాండవులను సజీవ దహనం చేయాలని దుర్యోధన శకునుల కుట్ర',
      'విదురుని నిగూఢ హెచ్చరిక, రహస్య సొరంగం ద్వారా పాండవుల క్షేమ విముక్తి',
      'ఏకచక్రపురంలో క్రూర రాక్షసుడైన బకాసురుడిని వధించిన భీమసేనుడు',
      'కాంపిల్య నగరంలో ద్రౌపదీ స్వయంవరం & మత్స్యయంత్ర సవాలు',
      'బ్రాహ్మణ వేషంలో ఉన్న అర్జునుడు ధనుస్సునెక్కుపెట్టి చేప కంటిని ఛేదించడం',
      'కుంతీదేవి మాట ప్రకారం ద్రౌపది ఐదుగురు పాండవులకు పత్నిగా మారడం'
    ],
    majorEvents_hi: [
      'वारणावत में लाक्षागृह षड्यंत्र द्वारा पांडवों को जीवित जलाने की विफल योजना',
      'विदुर की गुप्त चेतावनी और सुरंग द्वारा पांडवों का प्राण-बचाव',
      'एकचक्रा नगरी में महाबली भीम द्वारा बकासुर का संहार',
      'कांपिल्य में द्रौपदी स्वयंवर और अभेद्य मत्स्य-यंत्र की चुनौती',
      'विप्र वेष में अर्जुन द्वारा धनुष पर प्रत्यंचा चढ़ाकर मछली की आँख भेदना',
      'माता कुंती के वचन से द्रौपदी का पांचों पांडवों के साथ विवाह'
    ],
    importantCharacters: [
      'Draupadi - Fire-born princess who becomes the common spouse of the Pandavas',
      'Arjuna - Disguised archer who accomplishes the impossible feat of the Matsya Yantra',
      'Bhima - Titan who carries his family through the inferno and slays Bakasura',
      'Mother Kunti - Unyielding matriarch whose word shapes destiny',
      'King Drupada - Proud monarch who finds his dream son-in-law',
      'Lord Krishna - Divine witness who recognizes his cousins and preserves peace in the arena'
    ],
    importantCharacters_te: [
      'ద్రౌపది - యజ్ఞకుండ సంభూతురాలు, పంచపాండవుల సామ్రాజ్ఞి',
      'అర్జునుడు - మత్స్యయంత్ర విజేత, అసమాన ధనుర్ధారి',
      'భీముడు - పాండవ రక్షకుడు, బకాసుర సంహర్త',
      'కుంతీదేవి - పాండవుల మాతృమూర్తి',
      'శ్రీకృష్ణుడు - ధర్మ రక్షకుడు, సర్వజ్ఞుడు'
    ],
    importantCharacters_hi: [
      'द्रौपदी - यज्ञवेदी से जन्मी पटरानी',
      'अर्जुन - मत्स्य-यंत्र भेदक अद्वितीय धनुर्धर',
      'भीम - लाक्षागृह से प्राणदाता और दानवसंहारक',
      'माता कुंती - पावन मातृशक्ति',
      'श्रीकृष्ण - पांडवों के संरक्षक और मार्गदर्शक'
    ],
    importantRelationships: [
      'Pandavas & Panchala Kingdom: From enemies to the most powerful military alliance in Aryavarta',
      'Arjuna & Draupadi: Bond of supreme martial excellence and mutual respect',
      'Krishna & Arjuna: Eternal brotherhood (Nara-Narayana) reaffirmed in the public sphere'
    ],
    importantRelationships_te: [
      'పాండవులు & పాంచాల రాజ్యం: వివాహ బంధంతో ఏర్పడిన అజేయ మైత్రి',
      'అర్జునుడు & ద్రౌపది: అసమాన ధనుర్విద్యతో ఏర్పడిన పవిత్ర అనుబంధం',
      'శ్రీకృష్ణుడు & పాండవులు: భగవంతుని అండతో బలపడిన ధర్మ బలం'
    ],
    importantRelationships_hi: [
      'पांडव और पांचाल - विवाह के माध्यम से बना आर्यावर्त का सबसे शक्तिशाली गठबंधन',
      'अर्जुन और द्रौपदी - पराक्रम और निष्ठा का संगम',
      'श्रीकृष्ण और पांडव - नर-नारायण का अटूट संबंध'
    ],
    majorDecisions: [
      'Yudhishthira heeding Vidura’s covert warning and remaining in hiding after the fire',
      'Bhima volunteering to face Bakasura in place of the Brahmin host',
      'Arjuna stepping forward into the arena despite royal mockery',
      'The Pandavas upholding Mother Kunti’s unintentional word without question'
    ],
    majorDecisions_te: [
      'విదురుని హెచ్చరికను పాటించి బతికి ఉన్నట్లు ఎవరికీ తెలియకుండా రహస్యంగా ఉండటం',
      'ఆశ్రయమిచ్చిన బ్రాహ్మణుడి కోసం బకాసురుడిపై పోరాటానికి వెళ్లిన భీముని త్యాగబుద్ధి',
      'రాజుల పరిహాసాన్ని లెక్కచేయక మత్స్యయంత్ర లక్ష్యానికి సిద్ధపడిన అర్జునుని సాహసం',
      'కుంతీదేవి మాటను శిరసావహించి ధర్మాన్ని పాటించడం'
    ],
    majorDecisions_hi: [
      'लाक्षागृह से निकलकर जीवित होने का भेद छिपाकर गुप्त रहना',
      'ब्राह्मण परिवार की रक्षा हेतु भीम का बकासुर से युद्ध का निर्णय',
      'राजनैतिक उपहास की परवाह न कर अर्जुन का स्वयंवर में धनुष उठाना',
      'माता के वचनों को ब्रह्मवाक्य मानकर उसका पालन करना'
    ],
    consequences: [
      'The Kauravas are shocked to discover the Pandavas are alive and backed by Panchala power',
      'Hastinapur is forced to recall the Pandavas and negotiate a partition of the kingdom',
      'Draupadi’s marriage lays the cornerstone for the restoration of Dharma'
    ],
    consequences_te: [
      'పాండవులు బతికే ఉన్నారని, పాంచాల బలంతో తిరిగొచ్చారని తెలిసి కౌరవుల్లో గుబులు',
      'హస్తినాపుర పెద్దలు పాండవులను పిలిపించి రాజ్యాన్ని పంపకం చేయాల్సిన అనివార్యత',
      'కురు సామ్రాజ్య భవితవ్యాన్ని మార్చిన ద్రౌపదీ పాండవుల వివాహం'
    ],
    consequences_hi: [
      'पांडवों के जीवित होने और पांचाल से गठबंधन से दुर्योधन का भयभीत होना',
      'हस्तिनापुर द्वारा पांडवों को वापस बुलाकर राज्य विभाजन पर विवश होना',
      'द्रौपदी का आगमन भविष्य के महाविनाश और धर्म की पुनःस्थापना का बीज बना'
    ]
  },

  slides: [
    {
      slideNumber: 1,
      title: 'The Varnavata Conspiracy',
      title_te: 'వారణావత కుట్ర',
      title_hi: 'वारणावत का षड्यंत्र',
      content: 'Duryodhana and Shakuni plot to burn the Pandavas alive in a palace made of flammable lac, hemp, and ghee in Varnavata.',
      content_te: 'వారణావతంలో లక్క, నేయ్యి, మైనంతో నిర్మించిన ఇంట్లో పాండవులను సజీవ దహనం చేయాలని దుర్యోధన శకునుల పథకం.',
      content_hi: 'दुर्योधन और शकुनि ने वारणावत में मोम और लाख के महल में पांडवों को जीवित जलाने का षड्यंत्र रचा।',
      moralLesson: 'Evil plots may be deeply laid, but divine wisdom and alertness pierce through all treachery.',
      moralLesson_te: 'దుష్ట పన్నాగాలెంత లోతుగా ఉన్నా, జాగరూకత మరియు ధర్మం ముందు అవి వీగిపోతాయి.',
      moralLesson_hi: 'षड्यंत्र चाहे जितना गहरा हो, धर्म और विवेक के आगे टिक नहीं सकता।'
    },
    {
      slideNumber: 2,
      title: 'Escape Through the Earth',
      title_te: 'సొరంగ మార్గం ద్వారా విముక్తి',
      title_hi: 'सुरंग से गुप्त पलायन',
      content: 'Alerted by Vidura’s coded message, the Pandavas escape through an underground tunnel while the palace burns down.',
      content_te: 'విదురుని హెచ్చరికతో నిర్మించిన నేలమాళిగ ద్వారా పాండవులు తప్పించుకున్నారు; భవనం కాలి బూడిదైంది.',
      content_hi: 'विदुर के गुप्त संदेश से सावधान पांडव सुरंग मार्ग से सुरक्षित निकल गए, जबकि लाक्षागृह भस्म हो गया।',
      moralLesson: 'True allies act in quiet wisdom to protect righteousness without ostentation.',
      moralLesson_te: 'నిజమైన మిత్రులు ఆడంబరం లేకుండా వివేకంతో ధర్మాన్ని కాపాడతారు.',
      moralLesson_hi: 'सच्चा हितैषी विपत्ति के समय मौन रहकर भी प्राणों की रक्षा करता है।'
    },
    {
      slideNumber: 3,
      title: 'The Matsya Yantra',
      title_te: 'మత్స్యయంత్ర విజయము',
      title_hi: 'मत्स्य-यंत्र का भेदन',
      content: 'Disguised as a Brahmin, Arjuna strings the unyielding bow and shoots the eye of the revolving fish, winning Draupadi.',
      content_te: 'బ్రాహ్మణ వేషంలో ఉన్న అర్జునుడు ధనుస్సును ఎక్కుపెట్టి, మత్స్యయంత్రాన్ని ఛేదించి ద్రౌపదిని వరించాడు.',
      content_hi: 'विप्र वेष में अर्जुन ने असंभव धनुष को साधकर घूमती मछली की आँख वेध दी और द्रौपदी को जीत लिया।',
      moralLesson: 'Unbroken concentration and humble discipline conquer challenges that pride and arrogance cannot budge.',
      moralLesson_te: 'ఏకాగ్రత మరియు వినయం ముందు అహంకారం తలవంచక తప్పదు.',
      moralLesson_hi: 'एकाग्रता और विनम्रता के सम्मुख संसार की बड़ी से बड़ी शक्ति भी नतमस्तक होती है।'
    }
  ]
};
