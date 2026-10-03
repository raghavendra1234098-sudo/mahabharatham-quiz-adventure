import { StoryPart } from '../../types/game';

export const PART_10_STORY: StoryPart = {
  partNumber: 10,
  title: 'Victory, Restoration & The Final Ascent',
  title_te: 'ధర్మ విజయం, శాంతి పర్వం & స్వర్గారోహణం',
  title_hi: 'महाविजय, शांति-स्थापना और स्वर्गारोहण',
  sanskritTitle: 'महाप्रस्थानं धर्मविजयश्च',
  summary: 'The final mace duel of Duryodhana, the horrifying midnight massacre of the sleeping camp, the resurrection of unborn Parikshit, Bhishma’s eternal gift of the Vishnu Sahasranama, and Yudhishthira’s climb to the gates of Heaven with the faithful dog.',
  summary_te: 'ద్వైపాయన మడుగు వద్ద గదాయుద్ధంలో దుర్యోధన సంహారం, అర్ధరాత్రి శిబిర దహనం, గర్భస్థ పరీక్షిత్తుని బతికించిన శ్రీకృష్ణుడు, భీష్ముని విష్ణు సహస్రనామ స్తోత్రం, మరియు కుక్క రూపంలో వచ్చిన ధర్మదేవతతో స్వర్గారోహణం.',
  summary_hi: 'द्वैपायन सरोवर में गदायुद्ध, दुर्योधन का अंत, सौप्तिक पर्व का नरसंहार, उत्तरा के गर्भ में परीक्षित का पुनर्जीवन, भीष्म द्वारा विष्णु सहस्रनाम का उपदेश और श्वान रूपी धर्म के साथ सशरीर स्वर्गारोहण।',
  characterRewardId: 'sanatana-dharma',

  charactersInPart: [
    {
      id: 'yudhishthira_swarga',
      name: 'Emperor Yudhishthira (Dharmaraja)',
      name_te: 'ధర్మరాజు (స్వర్గారోహణ విజేత)',
      name_hi: 'धर्मराज युधिष्ठिर (सशरीर स्वर्गारोही)',
      title: 'Monarch of Truth & Walker into Heaven',
      title_te: 'సశరీర స్వర్గారోహి & సత్య చక్రవర్తి',
      title_hi: 'सत्य के चक्रवर्ती एवं सशरीर स्वर्ग जाने वाले',
      relationship: 'Eldest Pandava; ruled Hastinapur for 36 righteous years',
      relationship_te: 'పాండవాగ్రజుడు; 36 ఏళ్ళు ధర్మపాలన చేసి సశరీరంగా స్వర్గానికి వెళ్ళినవాడు',
      relationship_hi: 'पांडव ज्येष्ठ; 36 वर्ष धर्मपूर्वक राज करने के बाद स्वर्गारोहण करने वाले',
      intro: 'Refused to enter paradise if it meant abandoning a loyal street dog, proving that compassion is the highest law.',
      intro_te: 'తన వెంట వచ్చిన ఒక సామాన్య కుక్కను వదిలి స్వర్గంలోకి అడుగుపెట్టనని నిరాకరించి, సర్వభూత దయయే పరమధర్మమని చాటిన మహానుభావుడు.',
      intro_hi: 'एक निष्ठावान श्वान को छोड़कर स्वर्ग जाने से इनकार कर दया और करुणा की पराकाष्ठा स्थापित करने वाले।',
      avatarUrl: '/assets/wallpapers/yudhishthira.jpg',
      role: 'hero'
    },
    {
      id: 'bhima_mace',
      name: 'Bhima (Vrikodara)',
      name_te: 'భీమసేనుడు',
      name_hi: 'भीमसेन',
      title: 'Fulfiller of Vows & Destroyer of Duryodhana',
      title_te: 'శపథ పరిపాలకుడు & దుర్యోధన సంహర్త',
      title_hi: 'प्रतिज्ञा-पालक एवं दुर्योधन-संहारक',
      relationship: 'Second Pandava; slew all one hundred Kaurava brothers',
      relationship_te: 'కౌరవ నూర్గురు సోదరులను సంహరించి శపథాలను నెరవేర్చిన వీరుడు',
      relationship_hi: 'सौ कौरवों का संहार कर अपनी भीषण प्रतिज्ञाएं पूर्ण करने वाले',
      intro: 'Shattered Duryodhana’s thigh with his mace beside Lake Dwaipayana, fulfilling the vow made in the assembly of shame.',
      intro_te: 'ద్వైపాయన మడుగు వద్ద గదాయుద్ధంలో దుర్యోధనుని తొడలు విరగ్గొట్టి, ద్రౌపదికి జరిగిన అవమానానికి ప్రతీకారం తీర్చుకున్నాడు.',
      intro_hi: 'द्वैपायन सरोवर तट पर गदा से दुर्योधन की जंघा तोड़कर भरी सभा में किए गए अपमान का बदला लिया।',
      avatarUrl: '/assets/wallpapers/bhima.jpg',
      role: 'hero'
    },
    {
      id: 'duryodhana_final',
      name: 'King Duryodhana',
      name_te: 'దుర్యోధనుడు',
      name_hi: 'दुर्योधन',
      title: 'Fallen Emperor of the Kurus',
      title_te: 'ప్రాణాలు విడిచిన కౌరవ రాజు',
      title_hi: 'कौरवों का अंतिम राजा',
      relationship: 'Eldest son of Dhritarashtra; sole survivor of the battlefield on Day 18',
      relationship_te: 'ధృతరాష్ట్రుని పెద్ద కొడుకు; 18వ రోజు రణరంగంలో మిగిలిన ఏకైక నాయకుడు',
      relationship_hi: 'धृतराष्ट्र का ज्येष्ठ पुत्र; 18वें दिन अकेला बचा योद्धा',
      intro: 'Fought bravely to the last breath with his golden mace, refusing to bow or accept defeat even with broken thighs.',
      intro_te: 'తొడలు విరిగి నేలపై పడివున్నా తలవంచక, రాజసంతో చివరి శ్వాస వరకు పోరాడిన ధీరుడు.',
      intro_hi: 'जंघा टूटने पर भी जिसने झुकना स्वीकार नहीं किया और क्षत्रिय की भांति समरभूमि में अंतिम सांस ली।',
      avatarUrl: '/assets/wallpapers/karna.jpg',
      role: 'adversary'
    },
    {
      id: 'krishna_savior',
      name: 'Lord Sri Krishna (Paramatman)',
      name_te: 'శ్రీకృష్ణ పరమాత్మ',
      name_hi: 'भगवान श्रीकृष्ण',
      title: 'Preserver of the Lineage & Lord of Vaikuntha',
      title_te: 'వంశోద్ధారకుడు & వైకుంఠనాథుడు',
      title_hi: 'वंश-रक्षक एवं परमेश्वर',
      relationship: 'Savior of Prince Parikshit; avatar of preservation',
      relationship_te: 'ఉత్తర గర్భంలోని పరీక్షిత్తుని బతికించి ధర్మ వంశాన్ని నిలిపిన భగవంతుడు',
      relationship_hi: 'उत्तरा के गर्भ में मृत बालक परीक्षित को जीवनदान देने वाले',
      intro: 'Entered the womb of Uttara with His Sudarshana Chakra to protect the unborn Parikshit from Ashwatthama’s Brahmashira.',
      intro_te: 'అశ్వత్థామ ప్రయోగించిన బ్రహ్మశిరోనామకాస్త్రం నుండి ఉత్తర గర్భస్థ శిశువును సుదర్శన చక్రంతో కాపాడి పునర్జీవితుడిని చేశాడు.',
      intro_hi: 'अश्वत्थामा के ब्रह्मास्त्र से उत्तरा के अजन्मे शिशु की गर्भ में ही रक्षा कर पांडव वंश को बुझने से बचाया।',
      avatarUrl: '/assets/wallpapers/krishna.jpg',
      role: 'mentor'
    },
    {
      id: 'bhishma_sahasranama',
      name: 'Grandsire Bhishma (On the Arrow-Bed)',
      name_te: 'భీష్మ పితామహుడు (అంపశయ్యపై)',
      name_hi: 'भीष्म पितामह (शरशय्या पर)',
      title: 'Teacher of Humanity & Giver of the Thousand Names',
      title_te: 'విష్ణు సహస్రనామ దాత & ధర్మ ప్రబోధకుడు',
      title_hi: 'विष्णु सहस्रनाम के प्रदाता एवं धर्म-प्रवक्ता',
      relationship: 'Patriarch delivering Shanti Parva discourses',
      relationship_te: 'శాంతి, అనుశాసనిక పర్వాలలో రాజధర్మాన్ని, మోక్షధర్మాన్ని బోధించిన కురువృద్ధుడు',
      relationship_hi: 'शरशय्या से युधिष्ठिर को राजधर्म और मोक्षधर्म सिखाने वाले',
      intro: 'Delivered the sacred Vishnu Sahasranama to humanity before releasing his soul at the winter solstice (Uttarayana).',
      intro_te: 'ఉత్తరాయణ పుణ్యకాలం రాగానే విష్ణు సహస్రనామాన్ని లోకానికి ప్రసాదించి ఇచ్ఛామృత్యువుతో తనువు చాలించిన పుణ్యమూర్తి.',
      intro_hi: 'उत्तरायण सूर्य आने पर मानव जाति को अमूल्य \'विष्णु सहस्रनाम\' सौंपकर स्वेच्छा से देह त्याग किया।',
      avatarUrl: '/assets/wallpapers/bhishma.jpg',
      role: 'elder'
    },
    {
      id: 'dharma_dog',
      name: 'The Faithful Companion (Lord Dharma)',
      name_te: 'విశ్వాసమున్న శునకం (ధర్మదేవత)',
      name_hi: 'निष्ठावान श्वान (धर्मराज)',
      title: 'The Final Companion & Divine Test of Compassion',
      title_te: 'స్వర్గద్వారం వద్ద ధర్మ పరీక్ష',
      title_hi: 'अंतिम परीक्षा का रूप',
      relationship: 'Incarnation of Lord Dharma; father and final judge of Yudhishthira',
      relationship_te: 'ధర్మరాజును పరీక్షించడానికి కుక్క రూపంలో తోడువచ్చిన యమధర్మరాజు',
      relationship_hi: 'युधिष्ठिर की परीक्षा लेने हेतु श्वान रूप में साथ चलने वाले धर्मदेव',
      intro: 'Walked through blinding blizzards to the summit of Mount Meru, revealing that loyalty and love surpass even ritual piety.',
      intro_te: 'హిమాలయాల మంచు తుఫానులో చివరి వరకు తోడు నడిచి, సకల ప్రాణుల పట్ల దయయే పరమధర్మమని నిరూపించిన దేవుడు.',
      intro_hi: 'बर्फीले पहाड़ों पर अंत तक साथ रहकर यह सिद्ध किया कि एक निरीह जीव के प्रति निष्ठा स्वर्ग से भी बढ़कर है।',
      avatarUrl: '/assets/wallpapers/sanatana-dharma.jpg',
      role: 'celestial'
    }
  ],

  familyTree: {
    title: 'The Bridge of Eras: From Kurukshetra to Kali Yuga',
    title_te: 'ద్వాపర యుగం నుండి కలియుగానికి: పాండవ వంశాంకురం',
    title_hi: 'द्वापर से कलियुग तक: पांडव वंश की निरंतरता',
    description: 'The sole thread of lineage preserved through divine intervention, continuing the Lunar Dynasty into the Kali Yuga.',
    description_te: 'శ్రీకృష్ణుని కరుణతో పునర్జన్మ పొంది కలియుగంలో ధర్మాన్ని నిలిపిన పరీక్షిత్తు వంశ పటం.',
    description_hi: 'भगवान कृष्ण की कृपा से गर्भ में पुनर्जीवित होकर कलियुग में धर्म की स्थापना करने वाले कुल का विस्तार।',
    nodes: [
      { id: 'arjuna_t10', name: 'Arjuna', name_te: 'అర్జునుడు', name_hi: 'अर्जुन', clan: 'Pandava', generation: 3, role: 'Wielder of Gandiva' },
      { id: 'subhadra_t10', name: 'Subhadra', name_te: 'సుభద్ర', name_hi: 'सुभद्रा', clan: 'Yadava', generation: 3, role: 'Sister of Krishna' },
      { id: 'abhimanyu_t10', name: 'Abhimanyu', name_te: 'అభిమన్యుడు', name_hi: 'अभिमन्यु', clan: 'Pandava', generation: 4, role: 'Martyred Hero' },
      { id: 'uttara_t10', name: 'Princess Uttara', name_te: 'ఉత్తర', name_hi: 'उत्तरा', clan: 'Matsya', generation: 4, role: 'Mother of the line' },
      { id: 'parikshit_t10', name: 'Emperor Parikshit', name_te: 'పరీక్షిన్మహారాజు', name_hi: 'सम्राट परीक्षित', clan: 'Pandava', generation: 5, isKeyCharacter: true, role: 'Revived by Krishna; King of Kali Yuga' },
      { id: 'janamejaya_t10', name: 'King Janamejaya', name_te: 'జనమేజయుడు', name_hi: 'जनमेजय', clan: 'Pandava', generation: 6, role: 'Heard the Mahabharata at Snake Sacrifice' },
      { id: 'yudhishthira_t10', name: 'Emperor Yudhishthira', name_te: 'ధర్మరాజు', name_hi: 'युधिष्ठिर', clan: 'Pandava', generation: 3, isKeyCharacter: true, role: 'Ascended to Swarga' }
    ],
    links: [
      { from: 'arjuna_t10', to: 'abhimanyu_t10', relationship: 'parent_of', label: 'Father' },
      { from: 'abhimanyu_t10', to: 'parikshit_t10', relationship: 'parent_of', label: 'Father' },
      { from: 'uttara_t10', to: 'parikshit_t10', relationship: 'parent_of', label: 'Mother' },
      { from: 'parikshit_t10', to: 'janamejaya_t10', relationship: 'parent_of', label: 'Father' },
      { from: 'yudhishthira_t10', to: 'parikshit_t10', relationship: 'mentor_of', label: 'Passed the Crown' }
    ]
  },

  illustratedPages: [
    {
      pageNumber: 1,
      title: 'The Chilled Waters of Dwaipayana: Duryodhana\'s Last Stand',
      title_te: 'ద్వైపాయన మడుగు & దుర్యోధనుని చివరి దాగుడు',
      title_hi: 'द्वैपायन सरोवर और दुर्योधन का जल-स्तंभन',
      sceneTag: 'Frozen Misty Shore of Dwaipayana Lake',
      sceneTag_te: 'ద్వైపాయన సరస్సు తీరం',
      sceneTag_hi: 'द्वैपायन सरोवर का गुप्त जल',
      hookLine: 'With eleven divisions slaughtered and brothers dead, the sole survivor froze water around his broken soul.',
      hookLine_te: 'పదకొండు అక్షౌహిణుల సైన్యం నాశనమై, ఒంటరిగా మిగిలిన దుర్యోధనుడు జలస్తంభన విద్యతో మడుగులో దాక్కున్నాడు.',
      hookLine_hi: 'ग्यारह अक्षौहिणी सेना के विनाश के बाद अकेला बचा राजा जल-स्तंभन विद्या से सरोवर में छिप गया।',
      paragraphs: [
        'On the afternoon of the eighteenth day, the war had turned into a cemetery. King Shalya had fallen to Yudhishthira; Shakuni was beheaded by Sahadeva. Out of eleven massive Akshauhinis of the Kauravas, only four warriors breathed: Ashwatthama, Kripa, Kritavarma, and King Duryodhana.',
        'Wounded, bleeding, and stripped of his chariot, Duryodhana walked through the dunes of skulls to the sacred lake Dwaipayana. Using ancient Yogic "Jala-Stambhana" lore, he solidified the chilled waters and submerged himself beneath the surface to rest his battered flesh.',
        'Hunters tracking him overheard his voice and alerted the Pandavas. The five brothers and Krishna rushed to the lake. Yudhishthira stood at the water\'s edge, taunting: "Where is thy Kshatriya pride, Duryodhana? Didst thou slaughter millions only to hide like an amphibian in the mud? Come out and fight!" Goaded by these piercing words, the waters boiled and parted. Gripping his golden mace, Duryodhana stepped out like a wounded tiger.'
      ],
      paragraphs_te: [
        'పద్దెనిమిదో రోజు సాయంత్రానికి కురుక్షేత్రం శ్మశానంగా మారింది. శల్యుడిని ధర్మరాజు, శకునిని సహదేవుడు సంహరించారు. కౌరవుల పదకొండు అక్షౌహిణుల సైన్యంలో అశ్వత్థామ, కృపుడు, కృతవర్మ మరియు దుర్యోధనుడు మాత్రమే మిగిలారు.',
        'తీవ్రంగా గాయపడిన దుర్యోధనుడు ద్వైపాయన సరస్సు వద్దకు వెళ్ళి, జలస్తంభన విద్యతో నీటిని గడ్డకట్టించి మడుగు లోపల దాక్కున్నాడు.',
        'వేటగాళ్ళ ద్వారా విషయం తెలుసుకున్న పాండవులు అక్కడికి చేరుకున్నారు. ధర్మరాజు ఎత్తిపొడుపుగా మాట్లాడాడు: "దుర్యోధనా! ఇంతటి రక్తాన్ని చిందించి ఇప్పుడు నీటిలో కప్పలా దాక్కుంటావా? బయటకు వచ్చి పోరాడు!" ఆ మాటలకు రోషం కట్టలు తెంచుకోగా, నీళ్ళు ఆవిరవుతూ విడిపోయాయి. చేతిలో బంగారు గదను పట్టుకుని గాయపడిన పులిలా దుర్యోధనుడు బయటకు వచ్చాడు.'
      ],
      paragraphs_hi: [
        'अठारहवें दिन की संध्या तक कुरुक्षेत्र श्मशान बन चुका था। शल्य युधिष्ठिर के हाथों और शकुनि सहदेव के हाथों मारे गए। ग्यारह अक्षौहिणी कौरव सेना में से केवल चार बचे: अश्वत्थामा, कृप, कृतवर्मा और दुर्योधन।',
        'लहूलुहान दुर्योधन पैदल चलकर द्वैपायन सरोवर पहुँचा और अपनी जल-स्तंभन विद्या से जल को बांधकर सरोवर के भीतर छिप गया।',
        'व्याधों द्वारा सूचना मिलने पर पांडव और श्रीकृष्ण वहाँ पहुँचे। युधिष्ठिर ने ललकारा: "दुर्योधन! करोड़ों का संहार कराकर अब मेंढक की तरह जल में क्यों छिपा है? बाहर आ और क्षत्रिय की भांति युद्ध कर!" यह सुनकर पानी उबलने लगा और गदा हाथ में लिए घायल सिंह की तरह दुर्योधन जल से बाहर निकल आया।'
      ],
      dialogueQuote: '"Come forth, Duryodhana! Thou hast lived as a king; die at least as a warrior of honor!"',
      dialogueQuote_te: '"బయటకు రా దుర్యోధనా! రాజులా బతికావు, కనీసం వీరుడిలా పోరాడి మరణించు!"',
      dialogueQuote_hi: '"बाहर आ दुर्योधन! जीवन भर राजा रहा, कम से कम वीर क्षत्रिय की भांति समर में प्राण त्याग!"',
      speaker: 'Yudhishthira calling Duryodhana from the lake',
      speaker_te: 'సరస్సు ఒడ్డు నుండి ధర్మరాజు పిలుపు',
      speaker_hi: 'युधिष्ठिर द्वारा दुर्योधन को ललकार',
      imageUrl: '/assets/wallpapers/bhima.jpg',
      imageCaption: 'Duryodhana emerging with his mace from the churning waters of Lake Dwaipayana.',
      imageCaption_te: 'చేతిలో గదతో ద్వైపాయన సరస్సు నుండి బయటకు వస్తున్న దుర్యోధనుడు.',
      imageCaption_hi: 'द्वैपायन सरोवर से गदा लेकर बाहर निकलता घायल दुर्योधन।'
    },
    {
      pageNumber: 2,
      title: 'The Mace Duel of Titans: The Shattered Thigh',
      title_te: 'భీమ దుర్యోధనుల గదాయుద్ధం & తొడలు పగలగొట్టిన భీముడు',
      title_hi: 'भीम-दुर्योधन का अंतिम गदायुद्ध और जंघा-भंग',
      sceneTag: 'Sandy Shore of Lake Dwaipayana',
      sceneTag_te: 'సరస్సు తీరాన గదాయుద్ధం',
      sceneTag_hi: 'द्वैपायन सरोवर का बालू-तट',
      hookLine: 'Sparks leaped like lightning as maces clashed, until Krishna tapped his left thigh in a silent signal.',
      hookLine_te: 'గదలు తాకినప్పుడల్లా నిప్పురవ్వలు ఎగిసిపడ్డాయి; శ్రీకృష్ణుడు తొడపై చరిచిన సంకేతంతో భీముని గద విరుచుకుపడింది.',
      hookLine_hi: 'गदाओं के प्रहार से धरती कांप उठी, और श्रीकृष्ण के संकेत पर भीम ने दुर्योधन की जंघा तोड़ दी।',
      paragraphs: [
        'Lord Balarama arrived to witness the duel between his two foremost mace disciples: Bhima and Duryodhana. The duel raged with explosive violence. Maces smashed together with metallic thunder that echoed across the plains, throwing blinding showers of white sparks.',
        'Duryodhana was a peerless technician of mace maneuvers; Queen Gandhari had placed her eye-covering gaze upon his body, making it diamond-hard from head to hip. Bhima struck colossal blows, but they bounced harmlessly off Duryodhana’s torso. Duryodhana began to push Bhima back with superior footwork.',
        'Arjuna looked at Krishna: "How can Bhima defeat this invulnerable stone?" Krishna locked eyes with Bhima, raised His hand, and loudly slapped His own left thigh! Bhima instantly recalled the assembly of shame, where Duryodhana had slapped his thigh at Draupadi. As Duryodhana leaped high into the air for a downward skull-crushing strike, Bhima feinted, swung his colossal mace with the roar of a hurricane, and smashed both of Duryodhana’s thighs to splinters! Duryodhana crashed down into the red mud like a felled banyan tree, the sacred vow of retribution fulfilled.'
      ],
      paragraphs_te: [
        'తన ప్రియ శిష్యులైన భీమ దుర్యోధనుల గదాయుద్ధాన్ని చూడటానికి బలరాముడు విచ్చేశాడు. ఇద్దరి గదలు ఢీకొన్న ప్రతిసారీ పిడుగులు పడినట్లు ధ్వని వచ్చింది, నిప్పురవ్వలు ఎగిసిపడ్డాయి.',
        'గాంధారి దివ్య దృష్టి వల్ల దుర్యోధనుని శరీరం వజ్రసమానంగా మారింది. భీముడు కొడుతున్న దెబ్బలు అతని ఒంటికి తాకి వెనక్కి వస్తున్నాయి. దుర్యోధనుని పైచేయి అవుతుండటం చూసి అర్జునుడు ఆందోళన చెందాడు.',
        'శ్రీకృష్ణుడు భీముని వైపు చూస్తూ తన ఎడమ తొడపై గట్టిగా చరిచాడు. ద్రౌపదికి తొడ చూపించిన నాటి సభాపర్వ శపథాన్ని భీముడు గుర్తుచేసుకున్నాడు. దుర్యోధనుడు గాల్లోకి ఎగిరి భీముని తలపై గదతో కొట్టబోగా, భీముడు తప్పించుకుని తన గదను అడ్డంగా తిప్పి దుర్యోధనుని రెండు తొడలనూ పగలగొట్టాడు! భారీ వృక్షం కూలినట్లు దుర్యోధనుడు నేలపై పడిపోయాడు.'
      ],
      paragraphs_hi: [
        'बलराम जी अपने दोनों प्रिय शिष्यों का गदायुद्ध देखने पहुँचे। दोनों योद्धाओं की गदाएं जब टकरातीं, तो वज्रपात जैसा भयंकर नाद होता था और चिंगारियाँ निकलती थीं।',
        'माता गांधारी के वरदान से दुर्योधन का धड़ वज्र का बन चुका था। भीम के भारी प्रहार भी उस पर बेअसर हो रहे थे। दुर्योधन का पलड़ा भारी होने लगा।',
        'अर्जुन ने चिंतित होकर श्रीकृष्ण की ओर देखा। श्रीकृष्ण ने भीम को देखते हुए अपनी बाईं जंघा पर हाथ से ताल ठोक दी! भीम को भरी सभा में द्रौपदी के सम्मुख ली गई प्रतिज्ञा याद आ गई। जैसे ही दुर्योधन हवा में उछलकर वार करने आया, भीम ने नीचे से घूमकर अपनी भीषण गदा दुर्योधन की दोनों जंघाओं पर दे मारी! दुर्योधन की जंघाएं चूर-चूर हो गईं और वह कटे पेड़ की तरह धरती पर गिर पड़ा।'
      ],
      dialogueQuote: '"The vow of the Kuru assembly is fulfilled! The thigh that insulted Draupadi lies broken in the dust!"',
      dialogueQuote_te: '"కురు సభలో చేసిన శపథం నెరవేరింది! ద్రౌపదిని అవమానించిన ఆ దుష్ట తొడలు నేడు మట్టిలో విరిగిపడ్డాయి!"',
      dialogueQuote_hi: '"भरी सभा की प्रतिज्ञा आज पूर्ण हुई! जिस जंघा ने पांचाली का अपमान किया था, वह आज धूल चाट रही है!"',
      speaker: 'Bhima roaring over the fallen Duryodhana',
      speaker_te: 'రౌద్ర భీముని విజయ గర్జన',
      speaker_hi: 'भीमसेन का भीषण गर्जन',
      imageUrl: '/assets/wallpapers/bhima.jpg',
      imageCaption: 'Bhima striking the fatal blow with his mace to the thighs of Prince Duryodhana.',
      imageCaption_te: 'దుర్యోధనుని తొడలపై గదతో దాడి చేస్తున్న భీమసేనుడు.',
      imageCaption_hi: 'दुर्योधन की जंघा पर गदा का अंतिम प्रहार करते महाबली भीम।'
    },
    {
      pageNumber: 3,
      title: 'The Night of Horrors: Ashwatthama’s Sauptika Massacre',
      title_te: 'సౌప్తిక పర్వం: అశ్వత్థామ అర్ధరాత్రి నరమేధం',
      title_hi: 'सौप्तिक पर्व: अश्वत्थामा का रात्रि-नरसंहार',
      sceneTag: 'Sleeping Pandava Encampment at 2 AM',
      sceneTag_te: 'నిద్రిస్తున్న పాండవ శిబిరం',
      sceneTag_hi: 'पांडव शिविर में हाहाकार',
      hookLine: 'Watching an owl slaughter sleeping crows in a banyan tree, the vengeful brahmin murdered an army in its bed.',
      hookLine_te: 'మర్రిచెట్టుపై నిద్రిస్తున్న కాకులను చంపుతున్న గుడ్లగూబను చూసి, అర్ధరాత్రి నిద్రిస్తున్న పాండవ శిబిరాన్ని ఊచకోత కోసిన అశ్వత్థామ.',
      hookLine_hi: 'उल्लू द्वारा सोते हुए कौवों को मारते देखकर प्रेरित हुए अश्वत्थामा ने सोते हुए शिविर पर काल बनकर धावा बोला।',
      paragraphs: [
        'Finding their king dying in the mud with broken thighs, Ashwatthama, Kripa, and Kritavarma wept in bitter fury. Duryodhana anointed Ashwatthama as the final supreme commander with tears of red dust: "Avenge me, son of Drona!"',
        'Resting under a giant banyan tree in the dark, Ashwatthama watched an owl creep silently through the branches, slaughtering sleeping crows one by one. Inspired by the bird of prey, he resolved on a demonic act: slaughtering the Pandava camp in their sleep.',
        'Invoking the terrifying aspects of Lord Rudra, Ashwatthama entered the camp while Kripa and Kritavarma torched the exits. He kicked Dhrishtadyumna awake and strangled him like an animal; he decapitated Shikhandi, and butchered the five young sons of Draupadi (the Upapandavas) in their sleep, believing them to be the five Pandavas. The Pandavas and Krishna, sleeping away by the river, returned at dawn to find their beloved sons massacred and Draupadi howling in shattered agony.'
      ],
      paragraphs_te: [
        'తొడలు విరిగి చావుబతుకుల్లో ఉన్న దుర్యోధనుడిని చూసి అశ్వత్థామ ప్రతీకారంతో రగిలిపోయాడు. దుర్యోధనుడు రక్తంతో అశ్వత్థామకు సేనాపతిగా తిలకం దిద్దాడు.',
        'రాత్రి ఒక మర్రిచెట్టు కింద కూర్చున్న అశ్వత్థామ, ఒక గుడ్లగూబ నిద్రిస్తున్న కాకులను ఒక్కొక్కటిగా చంపడం చూశాడు. ఆ క్రూర పద్ధతిలోనే పాండవ శిబిరాన్ని నిద్రలోనే నాశనం చేయాలని నిర్ణయించుకున్నాడు.',
        'అర్ధరాత్రి శిబిరంలోకి చొరబడి ద్రోణుని చంపిన దృష్టద్యుమ్నుడిని నిద్రలోనే గొంతు నులిమి చంపాడు; శిఖండిని నరికేశాడు; పాండవులనుకుని ద్రౌపది ఐదుగురు ఉపపాండవులను నిద్రలోనే నరికేసి వారి తలలను తీసుకెళ్ళాడు. ఉదయాన్నే శిబిరానికి వచ్చిన పాండవులు తమ బిడ్డల మొండాలను చూసి గుండెలు బాదుకున్నారు. ద్రౌపది రోదనతో రణరంగం కంపించింది.'
      ],
      paragraphs_hi: [
        'मरणासन्न दुर्योधन को देखकर अश्वत्थामा का क्रोध सीमा पार कर गया। दुर्योधन ने लहूलुहान अवस्था में ही अश्वत्थामा को सेनापति नियुक्त किया।',
        'रात को वटवृक्ष के नीचे बैठे अश्वत्थामा ने देखा कि एक उल्लू ने सोते हुए कौवों पर हमला कर सबको मार डाला। इसी से प्रेरित होकर उसने सोते हुए पांडवों को मारने का नीच संकल्प लिया।',
        'अश्वत्थामा ने शिविर में घुसकर सबसे पहले अपने पिता के हत्यारे धृष्टद्युम्न को पैरों तले रौंदकर मार डाला; शिखंडी का वध किया और द्रोपदी के पांचों युवा पुत्रों (उपपांडवों) को पांडव समझकर सोते में ही सिर काट लिए। सुबह जब पांडव लौटे, तो अपने बालकों के कटे सिर देखकर द्रौपदी का विलाप सुनकर आकाश भी रो पड़ा।'
      ],
      dialogueQuote: '"Bring me the jewel on his forehead, or I shall starve myself to death beside the bodies of my sons!"',
      dialogueQuote_te: '"ఆ పాపాత్ముని నుదుటిపై ఉన్న మణిని తెచ్చి నా చేతిలో పెట్టకపోతే, నా బిడ్డల శవాల పక్కనే నేను ప్రాణాలు విడుస్తాను!"',
      dialogueQuote_hi: '"जब तक उस पापी के मस्तक की मणि लाकर मुझे नहीं दोगे, मैं अपने बालकों के शवों के पास प्राण त्याग दूँगी!"',
      speaker: 'Draupadi howling in grief',
      speaker_te: 'పుత్రశోకంతో ద్రౌపది ఆర్తనాదం',
      speaker_hi: 'शोकसंतप्त द्रौपदी का संकल्प',
      imageUrl: '/assets/wallpapers/draupadi.jpg',
      imageCaption: 'Empress Draupadi weeping beside the slain Upapandavas in the burned encampment.',
      imageCaption_te: 'హతమైన ఉపపాండవుల శవాల వద్ద గుండెలు పగిలేలా విలపిస్తున్న ద్రౌపదీ దేవి.',
      imageCaption_hi: 'शिविर में अपने पांचों मृत पुत्रों के शवों पर विलाप करती महारानी द्रौपदी।'
    },
    {
      pageNumber: 4,
      title: 'The Unborn Heir: Krishna Revives Prince Parikshit',
      title_te: 'గర్భస్థ శిశు రక్షణ: పరీక్షిత్తుని బతికించిన శ్రీకృష్ణుడు',
      title_hi: 'उत्तरा के गर्भ की रक्षा और परीक्षित का पुनर्जन्म',
      sceneTag: 'Hermitage of Sage Vyasa & Queen’s Chambers',
      sceneTag_te: 'వ్యాసాశ్రమం & రాణివాస మందిరం',
      sceneTag_hi: 'व्यास आश्रम और उत्तरा का कक्ष',
      hookLine: 'When the ultimate weapon was redirected to annihilate the lineage in the womb, God entered the embryo.',
      hookLine_te: 'వంశాన్నే సమూలంగా తుడిచిపెట్టడానికి గర్భంపై ప్రయోగించిన బ్రహ్మశిరోనామకాస్త్రాన్ని ఎదుర్కొని శిశువును బతికించిన భగవంతుడు.',
      hookLine_hi: 'अश्वत्थामा ने ब्रह्मास्त्र से गर्भस्थ शिशु को मारना चाहा, किंतु श्रीकृष्ण ने गर्भ में जाकर प्राण फूंक दिए।',
      paragraphs: [
        'The Pandavas cornered Ashwatthama at Sage Vyasa’s hermitage. In cowardly desperation, Ashwatthama invoked the apocalyptic Brahmashira astra. Arjuna fired his own Brahmashira in self-defense, but at Vyasa’s command, Arjuna withdrew his weapon. Ashwatthama, unable to withdraw his, redirected the blazing doom: "Let it enter the womb of Pandava women and incinerate their seed!"',
        'The fire struck Princess Uttara, widow of Abhimanyu, burning the dead stillborn fetus in her womb. Uttara ran screaming to Krishna: "O Lord, the last lamp of the Pandavas is extinguished! Revive him!"',
        'Krishna took a solemn vow: "If I have never deviated from Truth; if Dharma is my eternal home; let this child live!" Reducing His divine consciousness to the size of a thumb, Lord Krishna entered Uttara’s womb wielding the miniature golden Sudarshana Chakra, absorbing the deadly radiation of the astra. The blackened child took a breath, cried out, and came back to life! Because he had seen the Lord examining (Pariksha) him in the womb, he was named Parikshit—the future monarch who would preserve Sanatana Dharma into Kali Yuga. Ashwatthama’s gem was gouged from his forehead, and he was cursed to wander the earth alone, rotting with oozing sores for three thousand years.'
      ],
      paragraphs_te: [
        'వ్యాసాశ్రమం వద్ద అశ్వత్థామను పాండవులు చుట్టుముట్టగా, అతను బ్రహ్మశిరోనామకాస్త్రాన్ని ప్రయోగించాడు. అర్జునుడు కూడా ప్రయోగించినా పెద్దల మాటతో వెనక్కి తీసుకున్నాడు. కానీ అశ్వత్థామ ఉపసంహరించుకోలేక: "పాండవ వంశాన్ని సమూలంగా నాశనం చేయడానికి గర్భాలపై పడుగాక!" అని ఉత్తర గర్భం వైపు మళ్ళించాడు.',
        'ఆ అస్త్ర ప్రభావంతో అభిమన్యుని భార్య ఉత్తర గర్భంలోని శిశువు కాలిపోయి మృతపిండంగా మారింది. ఉత్తర ఏడుస్తూ కృష్ణుని కాళ్ళపై పడింది: "కృష్ణా! పాండవ వంశంలో మిగిలిన ఏకైక దీపం ఆరిపోయింది, బతికించు!"',
        'కృష్ణుడు సత్య ప్రమాణం చేశాడు: "నేను సత్యాన్ని, ధర్మాన్ని ఎన్నడూ వీడకపోతే ఈ బిడ్డ బతుకుగాక!" అంటూ బొటనవేలంత రూపం దాల్చి గర్భంలోకి ప్రవేశించి సుదర్శన చక్రంతో అస్త్ర తేజాన్ని హరించి ఆ బాలునికి ప్రాణం పోశాడు. గర్భంలోనే భగవంతుడిని పరీక్షించినవాడు కనుక అతనికి "పరీక్షిత్తు" అని పేరు పెట్టారు. అశ్వత్థామ నుదిటిపై ఉన్న మణిని ఊడబీకి, ఒళ్లంతా చీము కారుతూ ఒంటరిగా మూడు వేల ఏళ్ళు తిరగమని శపించారు.'
      ],
      paragraphs_hi: [
        'पांडवों ने अश्वत्थामा को घेर लिया। उसने भयभीत होकर ब्रह्मास्त्र छोड़ दिया। अर्जुन ने भी ब्रह्मास्त्र छोड़ा किंतु व्यास मुनि के कहने पर वापस ले लिया। अश्वत्थामा वापस लेना नहीं जानता था, अतः उसने कहा: "यह अस्त्र पांडवों के वंश को नष्ट करने हेतु उत्तरा के गर्भ पर गिरे!"',
        'उस महाअग्नि से अभिमन्यु की विधवा उत्तरा के गर्भ में पल रहा बालक जलकर निष्प्राण हो गया। उत्तरा रोती हुई श्रीकृष्ण के चरणों में गिर पड़ी।',
        'श्रीकृष्ण ने प्रतिज्ञा की: "यदि मैंने कभी सत्य का उल्लंघन नहीं किया, तो यह बालक पुनः जीवित हो जाए!" प्रभु ने अंगूठे के आकार का सूक्ष्म रूप धारण कर गर्भ में प्रवेश किया और सुदर्शन चक्र से ब्रह्मास्त्र के तेज को भस्म कर मृत बालक में प्राण फूंक दिए। गर्भ में भगवान की परीक्षा करने के कारण उसका नाम \'परीक्षित\' पड़ा। अश्वत्थामा की मणि छीन ली गई और उसे तीन सहस्र वर्षों तक कोढ़ से सड़ते हुए भटकने का शाप मिला।'
      ],
      dialogueQuote: '"If Truth has been my breath and Dharma my soul, let this dead child breathe again!"',
      dialogueQuote_te: '"సత్యమే నా ఊపిరి, ధర్మమే నా ఆత్మ అయినట్లయితే... ఈ మృత శిశువు తిరిగి ప్రాణం పోసుకునుగాక!"',
      dialogueQuote_hi: '"यदि सत्य मेरा जीवन और धर्म मेरी आत्मा रहा है, तो यह मृत बालक अभी जीवित हो जाए!"',
      speaker: 'Sri Krishna resurrecting Prince Parikshit',
      speaker_te: 'పరీక్షిత్తును బతికిస్తూ శ్రీకృష్ణుని సత్య శపథం',
      speaker_hi: 'श्रीकृष्ण की सत्य-प्रतिज्ञा और परीक्षित का पुनर्जीवन',
      imageUrl: '/assets/wallpapers/krishna.jpg',
      imageCaption: 'Lord Krishna placing His blessing hands over Princess Uttara, granting life to infant Parikshit.',
      imageCaption_te: 'ఉత్తరా దేవిని ఆశీర్వదించి పరీక్షిత్తుకు ప్రాణదానం చేస్తున్న శ్రీకృష్ణ పరమాత్మ.',
      imageCaption_hi: 'उत्तरा के कक्ष में शिशु परीक्षित को जीवनदान देते भगवान श्रीकृष्ण।'
    },
    {
      pageNumber: 5,
      title: 'The Crown of Tears: Yudhishthira’s Coronation',
      title_te: 'కన్నీటి సింహాసనం: ధర్మరాజు పట్టాభిషేకం',
      title_hi: 'आंसुओं का राजमुकुट और सम्राट युधिष्ठिर का राज्याभिषेक',
      sceneTag: 'Throne Room of Hastinapur',
      sceneTag_te: 'హస్తినాపుర స్వర్ణ సింహాసనం',
      sceneTag_hi: 'हस्तिनापुर की राजसभा',
      hookLine: 'Stepping over millions of funeral pyres, the Emperor wept that victory tasted identical to defeat.',
      hookLine_te: 'కోట్లాది మంది శవాల మీద నడిచి పొందిన విజయాన్ని చూసి, సింహాసనాన్ని కూడా అధిష్టించనని రోదించిన ధర్మరాజు.',
      hookLine_hi: 'लाखों चिताओं के भस्म पर खड़े होकर सम्राट ने कहा: "यह विजय पराजय से भी अधिक दुखदायी है।"',
      paragraphs: [
        'Following the tarpan rituals on the banks of holy Ganga, where Mother Kunti revealed that Karna was their eldest brother, Yudhishthira collapsed in soul-crushing despair. "We have butchered our own elder brother! I do not want this throne soaked in the blood of kin; I shall retire to the forest as an ascetic!"',
        'Lord Krishna, Sage Vyasa, and his brothers spent days counseling the grieving monarch: "Rulers are not masters of desire, Yudhishthira; you are the custodians of order. If the righteous abandon power, the wicked shall reign and devour the weak."',
        'Consenting out of duty, Yudhishthira was crowned Emperor of Hastinapur. Seated beside Empress Draupadi under white royal umbrellas, holy waters from the four oceans were poured over his head. For thirty-six peaceful years, Emperor Yudhishthira ruled with such transcendent justice that widows were protected, scholars flourished, and no subject suffered in his lands.'
      ],
      paragraphs_te: [
        'గంగా తీరాన శ్రాద్ధ కర్మలు చేస్తుండగా, కర్ణుడు తమ పెద్దన్నయ్య అని కుంతీదేవి చెప్పినప్పుడు ధర్మరాజు గుండె పగిలిపోయింది. "సొంత అన్నను చంపి పొందిన ఈ రక్తపు సింహాసనం నాకొద్దు, నేను అడవులకు వెళ్ళి తపస్సు చేసుకుంటాను!" అని విలపించాడు.',
        'శ్రీకృష్ణుడు, వ్యాస మహర్షి ఆయనకు నచ్చజెప్పారు: "ధర్మరాజా! రాజ్యం అనేది భోగం కాదు, ఒక బాధ్యత. ధర్మాత్ములు రాజ్యాన్ని వదిలేస్తే దుర్మార్గులు బలహీనులను పీడిస్తారు. ధర్మ రక్షణ కోసమే నీవు సింహాసనాన్ని అధిష్టించాలి."',
        'చివరకు కర్తవ్యానికి తలవంచి ధర్మరాజు హస్తినాపుర చక్రవర్తిగా పట్టాభిషేకం చేసుకున్నాడు. ద్రౌపదీ సమేతంగా సకల తీర్థాల జలాలతో అభిషిక్తుడయ్యాడు. ముప్పై ఆరు సంవత్సరాల పాటు ప్రజలందరూ సుఖసంతోషాలతో జీవించేలా ధర్మబద్ధమైన సుపరిపాలన అందించాడు.'
      ],
      paragraphs_hi: [
        'गंगा तट पर तर्पण के समय जब माता कुंती ने बताया कि कर्ण उनके ज्येष्ठ भ्राता थे, तो युधिष्ठिर का हृदय फट पड़ा। "हमने अपने ही सगे बड़े भाई का वध कर दिया! मुझे यह खून से सना सिंहासन नहीं चाहिए, मैं संन्यास लूँगा!"',
        'श्रीकृष्ण और महर्षि व्यास ने समझाया: "राजन! राजमुकुट भोग का साधन नहीं, धर्म की रक्षा का दायित्व है। यदि पुण्यात्मा राजा शासन छोड़ देंगे, तो प्रजा की रक्षा कौन करेगा?"',
        'विवश होकर कर्तव्य-पालन हेतु युधिष्ठिर का हस्तिनापुर के राजसिंहासन पर अभिषेक हुआ। महारानी द्रौपदी के साथ उन्होंने मुकुट धारण किया। अगले 36 वर्षों तक उन्होंने ऐसा आदर्श और न्यायपूर्ण शासन किया कि प्रजा में कभी कोई अकाल, रोग या अन्याय नहीं हुआ।'
      ],
      dialogueQuote: '"Power is a sacred burden, not a personal prize; govern so that the tears of the innocent dry forever."',
      dialogueQuote_te: '"అధికారం అనేది పవిత్రమైన బాధ్యత; అనాథల కన్నీళ్ళు తుడిచేందుకే ఆ సింహాసనం నిర్దేశించబడింది."',
      dialogueQuote_hi: '"राजपद व्यक्तिगत सुख नहीं, अपितु एक पावन दायित्व है; ऐसा शासन करो कि निर्बलों के आंसू सदा के लिए सूख जाएं।"',
      speaker: 'Sage Vyasa to Emperor Yudhishthira',
      speaker_te: 'ధర్మరాజుతో వ్యాస మహర్షి',
      speaker_hi: 'व्यास मुनि का युधिष्ठिर को उपदेश',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'The majestic coronation of Emperor Yudhishthira and Empress Draupadi in Hastinapur.',
      imageCaption_te: 'హస్తినాపురంలో ధర్మరాజు, ద్రౌపదీ దేవిల దివ్య పట్టాభిషేకం.',
      imageCaption_hi: 'हस्तिनापुर के राजसिंहासन पर सम्राट युधिष्ठिर और महारानी द्रौपदी का अभिषेक।'
    },
    {
      pageNumber: 6,
      title: 'The Grandsire’s Gift: The Vishnu Sahasranama',
      title_te: 'భీష్ముని అమర కానుక: శ్రీ విష్ణు సహస్రనామ స్తోత్రం',
      title_hi: 'पितामह भीष्म का अमर उपहार: श्रीविष्णु सहस्रनाम',
      sceneTag: 'Bed of Arrows on the Plains of Kurukshetra',
      sceneTag_te: 'కురుక్షేత్రంలోని అంపశయ్య వద్ద',
      sceneTag_hi: 'कुरुक्षेत्र में शरशय्या के निकट',
      hookLine: 'Lying for fifty-eight days on a bed of arrows, the dying patriarch handed humanity its ultimate prayer.',
      hookLine_te: 'యాభై ఎనిమిది రోజుల పాటు అంపశయ్యపై ఉండి, మానవాళికి విష్ణు సహస్రనామ స్తోత్రాన్ని ప్రసాదించిన పితామహుడు.',
      hookLine_hi: 'अठावन दिनों तक शरशय्या पर लेटे-लेटे पितामह ने संपूर्ण संसार को भगवान के एक सहस्र नामों का अमृत दिया।',
      paragraphs: [
        'Before entering his reign, Yudhishthira was taken by Sri Krishna to the battlefield where Grandsire Bhishma still lay suspended on his bed of arrows, awaiting Uttarayana. Krishna said to Bhishma: "Grandfather, your knowledge is equal to Brihaspati’s; instruct Yudhishthira before your soul departs, for with you, eternal wisdom will fade from the earth."',
        'For weeks, despite excruciating physical pain, Bhishma spoke the colossal discourses of the Shanti Parva and Anushasana Parva: the duties of kings, ethics, charity, liberation, and spiritual philosophy.',
        'Finally, Yudhishthira asked the supreme question: "Who is the one Lord in the universe? What is the supreme path of righteousness by praising whom one is liberated?" In response, with eyes shining at Lord Krishna standing before him, Bhishma sang the celestial hymn of one thousand holy names—the "Sri Vishnu Sahasranama" (Shuklambaradharam Vishnum... Vishvam Vishnur Vashatkaro...). Soon after, the sun crossed into Uttarayana; kissing Krishna’s feet in vision, Bhishma released his breath through the crown of his head and merged into the eternal Vasus.'
      ],
      paragraphs_te: [
        'ధర్మరాజును తీసుకుని శ్రీకృష్ణుడు అంపశయ్యపై ఉన్న భీష్ముని వద్దకు వెళ్ళాడు: "పితామహా! మీతో పాటు ధర్మ విజ్ఞానం అంతరించిపోకూడదు, ధర్మరాజుకు సమస్త రాజధర్మాలను బోధించండి."',
        'తీవ్రమైన శరీర బాధను భరిస్తూనే భీష్ముడు శాంతి, అనుశాసనిక పర్వాలలో రాజనీతి, దానధర్మాలు, మోక్షధర్మాలను విపులంగా బోధించాడు.',
        'ధర్మరాజు: "స్వామీ! లోకానికి ఏకైక ప్రభువు ఎవరు? ఎవరిని స్తుతిస్తే మోక్షం లభిస్తుంది?" అని అడిగాడు. భీష్ముడు ఎదురుగా నిలబడిన శ్రీకృష్ణుని చూస్తూ, పరవశంతో లోకానికి అత్యంత పవిత్రమైన "శ్రీ విష్ణు సహస్రనామ స్తోత్రాన్ని" ఉపదేశించాడు. సూర్యుడు ఉత్తరాయణంలోకి ప్రవేశించగానే, కృష్ణుని స్మరిస్తూ భీష్ముడు తన ప్రాణాలను బ్రహ్మరంధ్రం ద్వారా విడిచిపెట్టాడు.'
      ],
      paragraphs_hi: [
        'श्रीकृष्ण युधिष्ठिर को लेकर कुरुक्षेत्र में शरशय्या पर लेटे भीष्म के पास पहुँचे: "पितामह! आपके साथ ज्ञान का सूर्य अस्त न हो जाए, अतः युधिष्ठिर को धर्म का उपदेश दीजिए।"',
        'असह्य शारीरिक पीड़ा में भी भीष्म ने शांतिपर्व और अनुशासनपर्व में राजधर्म, नीति, दान और मोक्ष का ऐसा विशद उपदेश दिया जो विश्व साहित्य की अमूल्य निधि बन गया।',
        'युधिष्ठिर ने पूछा: "संसार का एकमात्र देव कौन है जिसकी स्तुति से मनुष्य सब बंधनों से मुक्त हो जाता है?" भीष्म ने सामने खड़े श्रीकृष्ण की ओर देखा और अश्रुपूर्ण नेत्रों से जगत-कल्याण हेतु \'श्रीविष्णु सहस्रनाम\' का पाठ किया। इसके पश्चात मकर संक्रांति (उत्तरायण) आते ही उन्होंने स्वेच्छा से प्राण त्याग कर मोक्ष प्राप्त किया।'
      ],
      dialogueQuote: '"Vishvam Vishnur Vashatkaro Bhuta-Bhavya-Bhavat-Prabhuh — He is the universe, the all-pervading Vishnu, Lord of past, present, and future."',
      dialogueQuote_te: '"విశ్వం విష్ణుర్వషట్కారో భూతభవ్యభవత్ప్రభుః — సమస్త విశ్వము, సర్వవ్యాపకుడు, త్రికాల ప్రభువైన శ్రీమహావిష్ణువునకు నమస్కారము."',
      dialogueQuote_hi: '"विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः — वे ही संपूर्ण विश्व हैं, सर्वव्यापी विष्णु हैं और भूत-भविष्य-वर्तमान के स्वामी हैं।"',
      speaker: 'Bhishma delivering the Vishnu Sahasranama',
      speaker_te: 'విష్ణు సహస్రనామాన్ని పఠిస్తున్న భీష్ముడు',
      speaker_hi: 'भीष्म पितामह द्वारा विष्णु सहस्रनाम का गान',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'Grandsire Bhishma chanting the Sri Vishnu Sahasranama as Lord Krishna smiles in benediction.',
      imageCaption_te: 'శ్రీకృష్ణుని సమక్షంలో విష్ణు సహస్రనామాన్ని గానం చేస్తున్న భీష్మ పితామహుడు.',
      imageCaption_hi: 'श्रीकृष्ण के चरणों में विष्णु सहस्रनाम का उपदेश देते शरशय्या पर लेटे पितामह भीष्म।'
    },
    {
      pageNumber: 7,
      title: 'The Great Pilgrimage: The Himalayan Ascent',
      title_te: 'మహాప్రస్థానం: హిమాలయాల వైపు చివరి యాత్ర',
      title_hi: 'महाप्रस्थान: हिमालय की अंतिम तीर्थयात्रा',
      sceneTag: 'Snow-Covered Slopes of Mount Meru',
      sceneTag_te: 'మంచుతో కప్పబడిన మేరు పర్వతం',
      sceneTag_hi: 'हिमालय के हिमाच्छादित शिखर',
      hookLine: 'Draped in rough tree bark, the kings of the world abandoned the earth to walk toward the stars.',
      hookLine_te: 'రాజభోగాలను విడిచి, నారచీరలు ధరించి మోక్షం కోసం హిమాలయాల ఎత్తైన శిఖరాలకు బయలుదేరిన పాండవులు.',
      hookLine_hi: 'राजपाट त्यागकर, वल्कल वस्त्र पहने पंच पांडव और द्रौपदी स्वर्गारोहण हेतु महाप्रस्थान पर निकले।',
      paragraphs: [
        'After thirty-six golden years, word reached Hastinapur that the Yadava clan had perished in fratricidal strife and Lord Sri Krishna had concluded His earthly avatar, struck by a hunter’s arrow in the forest. Hearing of Krishna\'s departure, Yudhishthira felt that the soul of the earth had departed.',
        'He crowned young Prince Parikshit as Emperor of Hastinapur, appointed Yuyutsu as guardian, and placed Subhadra in charge of the household. The five Pandava brothers and Queen Draupadi removed their golden crowns, donned coarse ascetic tree-bark garments, and began their final pilgrimage—the "Mahaprasthanika"—walking eastward, then southward, and finally northward into the icy, snowbound peaks of Mount Meru.',
        'As they walked through blizzards, a solitary, stray, scruffy dog attached itself to the party, walking faithfully alongside Yudhishthira. One by one, the travelers fell on the freezing slopes: first Draupadi, then Sahadeva, then Nakula, then Arjuna, and finally colossal Bhima. To Bhima’s dying question, Yudhishthira explained that subtle flaws of pride and partiality caused their mortal bodies to fall. Only Yudhishthira, accompanied by the shivering loyal dog, walked onward toward the heavens.'
      ],
      paragraphs_te: [
        'ముప్పై ఆరు సంవత్సరాల తర్వాత, ద్వారకలో యాదవులు కలహించుకుని నశించారని, శ్రీకృష్ణ పరమాత్మ వేటగాడి బాణం తగిలి తన అవతారాన్ని చాలించారని వార్త వచ్చింది. కృష్ణుడు లేని భూమిపై జీవించడం వ్యర్థమని పాండవులు భావించారు.',
        'పరీక్షిత్తుకు హస్తినాపుర సామ్రాజ్యాన్ని పట్టాభిషేకం చేసి, నారచీరలు ధరించి ద్రౌపదీ సమేతంగా మహాప్రస్థానానికి బయలుదేరారు. హిమాలయాల మీదుగా మేరు పర్వతానికి యాత్ర ప్రారంభించారు. ఒక విశ్వాసపాత్రమైన కుక్క వారి వెంటే నడవసాగింది.',
        'మంచు తుఫానుల్లో మొదట ద్రౌపది, తర్వాత సహదేవుడు, నకులుడు, అర్జునుడు, చివరకు భీముడు నేలకూలారు. వారిలోని చిన్నపాటి దోషాల వల్ల భౌతిక శరీరాలు రాలిపోయాయని ధర్మరాజు చెబుతూ, ఆ కుక్కతో కలిసి ముందుకు నడిచాడు.'
      ],
      paragraphs_hi: [
        'छत्तीस वर्ष बाद समाचार आया कि यदुवंश का विनाश हो गया और एक बहेलिए के तीर से भगवान श्रीकृष्ण ने अपनी लीला समेटकर परमधाम प्रस्थान किया। श्रीकृष्ण के बिना पांडवों को संपूर्ण पृथ्वी सूनी लगने लगी।',
        'युधिष्ठिर ने परीक्षित को हस्तिनापुर का राजा बनाया और पांचों भाई तथा द्रौपदी वल्कल वस्त्र धारण कर महाप्रस्थान (अंतिम यात्रा) पर निकल पड़े। वे हिमालय पार कर मेरु पर्वत की ओर बढ़े। मार्ग में एक निष्ठावान श्वान (कुत्ता) उनके पीछे-पीछे चलने लगा।',
        'बर्फीले पहाड़ों पर चलते हुए पहले द्रौपदी गिरीं, फिर सहदेव, नकुल, अर्जुन और अंत में भीमसेन गिरे। युधिष्ठिर ने बताया कि सूक्ष्म अहंकार और पक्षपात के कारण इनके शरीर गिर गए। केवल युधिष्ठिर उस श्वान के साथ अडिग होकर आगे बढ़ते रहे।'
      ],
      dialogueQuote: '"When all worldly roles conclude, only righteousness and loyalty walk through the snows into eternity."',
      dialogueQuote_te: '"లౌకిక బంధాలన్నీ ముగిశాక, మనిషి చేసిన ధర్మం మరియు నిష్కల్మష విశ్వాసమే పరలోకానికి తోడు వస్తాయి."',
      dialogueQuote_hi: '"जब संसार के सारे नाते छूट जाते हैं, तब केवल धर्म और निष्ठा ही मनुष्य के साथ अनंत यात्रा पर चलते हैं।"',
      speaker: 'Yudhishthira ascending the Himalayas',
      speaker_te: 'హిమాలయాల్లో ఒంటరిగా నడుస్తున్న ధర్మరాజు',
      speaker_hi: 'अंतिम यात्रा पर बढ़ते धर्मराज के विचार',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'King Yudhishthira and the faithful dog trekking across the pristine snow slopes of the Himalayas.',
      imageCaption_te: 'మంచుకొండల్లో నమ్మకమైన కుక్కతో కలిసి నడుస్తున్న ధర్మరాజు.',
      imageCaption_hi: 'बर्फीले हिमालय पर श्वान के साथ अकेले आगे बढ़ते धर्मराज युधिष्ठिर।'
    },
    {
      pageNumber: 8,
      title: 'The Gates of Heaven: Yato Dharmas Tato Jayah',
      title_te: 'స్వర్గ ద్వారం & యతో ధర్మస్తతో జయః',
      title_hi: 'स्वर्ग का द्वार और धर्म की अंतिम परीक्षा',
      sceneTag: 'Celestial Gates of Heaven in the Clouds',
      sceneTag_te: 'మేఘాల నడుమ స్వర్గద్వారం',
      sceneTag_hi: 'स्वर्ग का स्वर्णद्वार और इंद्र का रथ',
      hookLine: '"I shall not enter heaven if I must abandon this helpless dog that gave me all its love."',
      hookLine_te: '"నా వెంట వచ్చిన ఈ మూగ జీవాన్ని వదిలేసి నేను స్వర్గంలోకి అడుగుపెట్టను!" అని చెప్పిన ధర్మ చక్రవర్తి.',
      hookLine_hi: '"यदि इस निष्ठावान श्वान को साथ ले जाने की अनुमति नहीं, तो मुझे ऐसा स्वर्ग नहीं चाहिए!"',
      paragraphs: [
        'At the shimmering peak of Mount Meru, the clouds parted. With the blare of divine conches and showers of golden parijata blossoms, Lord Indra descended in a radiant celestial chariot: "Ascend, O righteous King! Thy virtues have won thee the rare honor of entering heaven in thy mortal body!"',
        'Yudhishthira bowed, then pointed to the shivering dog: "Let this faithful creature ascend with me, O King of Gods, for he has loved me and walked by my side when all others fell." Indra scoffed: "Heaven has no place for dogs! Abandon the beast and claim immortality!"',
        'Yudhishthira replied with unshakeable resolve: "To abandon a devotee who seeks refuge is a sin equal to the slaying of a Brahmin. I desire neither heaven nor immortality if bought by betraying this loyal soul!"',
        'At that supreme utterance, the dog transformed into a blinding vision of Lord Dharma Himself! "O worthy son," wept the deity, "thou hast passed the ultimate trial. Where there is righteousness, there is victory!" Entering the celestial chariot, Emperor Yudhishthira ascended to the eternal realms, where he was reunited with Lord Krishna, his brothers, Draupadi, and all the heroes of the epic in eternal peace. Yato Dharmas Tato Jayah—Where there is Dharma, there is Victory!'
      ],
      paragraphs_te: [
        'మేరు పర్వత శిఖరాన దివ్య రథంతో దేవేంద్రుడు ప్రత్యక్షమయ్యాడు: "ధర్మరాజా! నీ సత్యవర్తనకు మెచ్చి నిన్ను సశరీరంగా స్వర్గానికి తీసుకెళ్ళడానికి వచ్చాను, రథం ఎక్కు!" అన్నాడు.',
        'ధర్మరాజు ఆ కుక్కను చూపిస్తూ: "ఈ మూగ జీవిని కూడా నాతో రానివ్వండి, అందరూ నన్ను వదిలేసినా ఇది నన్ను నమ్ముకుని వచ్చింది" అన్నాడు. ఇంద్రుడు నవ్వి: "స్వర్గంలోకి కుక్కలకు ప్రవేశం లేదు, దాన్ని వదిలేసి రా!" అన్నాడు.',
        'ధర్మరాజు దృఢంగా చెప్పాడు: "నన్ను నమ్ముకున్న జీవిని వదిలిపెట్టడం బ్రహ్మహత్యా పాతకంతో సమానం. అలాంటి ద్రోహం చేసి నేను స్వర్గానికి రాను!"',
        'ఆ క్షణంలో ఆ కుక్క సాక్షాత్తూ యమధర్మరాజుగా మారింది! "కుమారా! నీ దయ ముల్లోకాలనూ గెలిచింది" అని ఆశీర్వదించాడు. ధర్మరాజు సశరీరంగా స్వర్గానికి చేరి శ్రీకృష్ణుడు, సోదరులు, ద్రౌపదితో కలిసి శాశ్వత శాంతిని పొందాడు. యతో ధర్మస్తతో జయః — ఎక్కడ ధర్మం ఉంటుందో అక్కడే విజయం!'
      ],
      paragraphs_hi: [
        'मेरु पर्वत के शिखर पर देवराज इंद्र अपने दिव्य रथ के साथ प्रकट हुए: "सम्राट युधिष्ठिर! आपके पुण्यों से प्रसन्न होकर स्वर्ग आपको सशरीर बुला रहा है, रथ पर बैठिए!"',
        'युधिष्ठिर ने कहा: "देवराज! इस निष्ठावान श्वान को भी साथ चलने दीजिए, क्योंकि जब सब छूट गए, तब इसने मेरा साथ नहीं छोड़ा।" इंद्र ने कहा: "स्वर्ग में कुत्तों का कोई स्थान नहीं! इसे छोड़िए और अमरता भोगिए!"',
        'युधिष्ठिर ने अडिग भाव से कहा: "शरण में आए निष्ठावान का त्याग करना ब्रह्महत्या के समान पाप है। यदि इसे त्यागना पड़े, तो मुझे ऐसे स्वर्ग का तनिक भी लोभ नहीं है!"',
        'उसी क्षण वह श्वान साक्षात धर्मदेव के रूप में प्रकट हो गया! उन्होंने कहा: "पुत्र! तुमने तीनों लोकों में दया और धर्म की सर्वोच्च परीक्षा उत्तीर्ण कर ली!" युधिष्ठिर सशरीर स्वर्ग में प्रविष्ट हुए जहाँ वे भगवान श्रीकृष्ण, अपने भाइयों और द्रौपदी के साथ दिव्य धाम में सदा के लिए प्रतिष्ठित हुए। यतो धर्मस्ततो जयः — जहाँ धर्म है, वहीं विजय है!'
      ],
      dialogueQuote: '"Yato Dharmas Tato Jayah — Where there is Righteousness, there alone is Victory!"',
      dialogueQuote_te: '"యతో ధర్మస్తతో జయః — ఎక్కడ ధర్మం ఉంటుందో అక్కడ తప్పక విజయం లభిస్తుంది!"',
      dialogueQuote_hi: '"यतो धर्मस्ततो जयः — जहाँ धर्म है, वहीं सनातन विजय है!"',
      speaker: 'Lord Dharma welcoming Emperor Yudhishthira into Heaven',
      speaker_te: 'ధర్మరాజును స్వర్గంలోకి ఆహ్వానిస్తూ ధర్మదేవత',
      speaker_hi: 'धर्मराज द्वारा युधिष्ठिर का स्वर्ग में स्वागत',
      imageUrl: '/assets/wallpapers/sanatana-dharma.jpg',
      imageCaption: 'The golden gates of heaven opening for Emperor Yudhishthira and Lord Dharma under cosmic light.',
      imageCaption_te: 'స్వర్గద్వారాల వద్ద ధర్మదేవత ఆశీస్సులతో స్వర్గారోహణ చేస్తున్న ధర్మరాజు.',
      imageCaption_hi: 'स्वर्ग के स्वर्ण-द्वारों पर धर्मदेव के साथ सशरीर प्रवेश करते धर्मराज युधिष्ठिर।'
    }
  ],

  partSummary: {
    majorEvents: [
      'Duryodhana conceals himself in chilled Lake Dwaipayana using ancient Jala-Stambhana lore',
      'The final epic mace duel: Bhima shatters Duryodhana’s thighs, fulfilling the vow of the assembly of shame',
      'Ashwatthama’s nocturnal raid (Sauptika Parva): slaughter of Dhrishtadyumna, Shikhandi, and the five Upapandavas in their sleep',
      'Ashwatthama directs the catastrophic Brahmashira astra against the womb of widowed Princess Uttara',
      'Lord Sri Krishna enters the womb with the miniature Sudarshana Chakra, resurrecting the stillborn Prince Parikshit',
      'Ashwatthama’s divine forehead gem is gouged out, and he is cursed to wander with oozing sores for three thousand years',
      'Emperor Yudhishthira is crowned in Hastinapur and rules with spotless justice for thirty-six years',
      'Grandsire Bhishma delivers the vast Shanti and Anushasana Parvas, giving humanity the Sri Vishnu Sahasranama before passing at Uttarayana',
      'The Pandavas and Draupadi embark on the Mahaprasthanika pilgrimage across the Himalayas, followed by a faithful dog',
      'Yudhishthira refuses heaven without his loyal dog; the dog reveals itself as Lord Dharma, and Yudhishthira ascends in his mortal body'
    ],
    majorEvents_te: [
      'ద్వైపాయన సరస్సులో జలస్తంభన విద్యతో దాక్కున్న దుర్యోధనుడు',
      'గదాయుద్ధంలో దుర్యోధనుని తొడలు విరగ్గొట్టి శపథాన్ని నెరవేర్చిన భీముడు',
      'సౌప్తిక పర్వంలో అశ్వత్థామ అర్ధరాత్రి నరమేధం: ఉపపాండవులు, దృష్టద్యుమ్నుల మరణం',
      'ఉత్తర గర్భంపై బ్రహ్మశిరోనామకాస్త్రాన్ని ప్రయోగించిన అశ్వత్థామ',
      'సూక్ష్మ రూపంలో గర్భంలోకి ప్రవేశించి సుదర్శన చక్రంతో పరీక్షిత్తుని బతికించిన శ్రీకృష్ణుడు',
      'అశ్వత్థామ నుదిటి మణిని తీసివేసి మూడు వేల ఏళ్ళు కుష్టురోగంతో తిరగమని శపించడం',
      'హస్తినాపుర చక్రవర్తిగా ధర్మరాజు పట్టాభిషేకం & 36 ఏళ్ళ ధర్మ పాలన',
      'అంపశయ్యపై భీష్ముని విష్ణు సహస్రనామ ప్రబోధం & ఉత్తరాయణంలో మోక్షం',
      'హిమాలయాల మీదుగా మహాప్రస్థాన యాత్ర & వెంట నడిచిన విశ్వాసంగల కుక్క',
      'కుక్కను వదిలి స్వర్గానికి రానన్న ధర్మరాజు; ధర్మదేవత నిజరూప దర్శనం & సశరీర స్వర్గారోహణం'
    ],
    majorEvents_hi: [
      'द्वैपायन सरोवर में जल-स्तंभन कर दुर्योधन का छिपना',
      'भीम-दुर्योधन का भीषण गदायुद्ध और जंघा तोड़कर प्रतिज्ञा पूर्ति',
      'अश्वत्थामा का रात्रि-आक्रमण: पांचों उपपांडवों और धृष्टद्युम्न का वध',
      'अश्वत्थामा द्वारा उत्तरा के गर्भ पर ब्रह्मास्त्र का प्रहार',
      'श्रीकृष्ण द्वारा गर्भ में प्रवेश कर मृत परीक्षित को पुनर्जीवन देना',
      'अश्वत्थामा की मणि छीनना और 3000 वर्षों तक भटकने का शाप',
      'सम्राट युधिष्ठिर का राज्याभिषेक और 36 वर्ष का रामराज्य-तुल्य शासन',
      'शरशय्या पर भीष्म द्वारा विष्णु सहस्रनाम का उपदेश और उत्तरायण में देहत्याग',
      'पांडवों का द्रौपदी सहित हिमालय की ओर महाप्रस्थान',
      'श्वान के प्रति निष्ठा के कारण युधिष्ठिर का सशरीर स्वर्गारोहण'
    ],
    importantCharacters: [
      'Emperor Yudhishthira - Unflinching champion of Dharma whose compassion granted him entry to Heaven in mortal flesh',
      'Lord Sri Krishna - Cosmic savior who protected the seed of humanity and anchored Sanatana Dharma',
      'Grandsire Bhishma - Dying patriarch whose swan song gifted the world the sacred Sri Vishnu Sahasranama',
      'Bhima - Titan of resolve whose mace fulfilled every vow of justice',
      'The Faithful Dog (Lord Dharma) - Eternal symbol that universal compassion is the apex of righteousness'
    ],
    importantCharacters_te: [
      'ధర్మరాజు - దయాగుణంతో సశరీరంగా స్వర్గానికి చేరిన సత్య చక్రవర్తి',
      'శ్రీకృష్ణుడు - వంశోద్ధారకుడు, సనాతన ధర్మ రక్షకుడు',
      'భీష్మ పితామహుడు - లోకానికి విష్ణు సహస్రనామాన్ని ప్రసాదించిన జ్ఞాని',
      'భీమసేనుడు - శపథాలన్నీ నెరవేర్చిన ప్రళయ యోధుడు',
      'ధర్మదేవత (శునకం) - మూగ జీవుల పట్ల చూపే ప్రేమయే పరమధర్మమని చాటిన దైవం'
    ],
    importantCharacters_hi: [
      'सम्राट युधिष्ठिर - दया और सत्य के बल पर सशरीर स्वर्ग जाने वाले',
      'भगवान श्रीकृष्ण - परीक्षित के प्राणदाता और सनातन धर्म के आधार',
      'भीष्म पितामह - विष्णु सहस्रनाम के अमर प्रदाता',
      'भीमसेन - प्रतिज्ञाएं पूरी करने वाले अजेय गदाधर',
      'धर्मराज (श्वान) - निष्ठा और करुणा के सर्वोच्च प्रतीक'
    ],
    importantRelationships: [
      'Yudhishthira & The Loyal Dog: The supreme culmination of ethical virtue—compassion for all living beings',
      'Krishna & Parikshit: The preservation of the spark of Dharma across the threshold of cosmic ages',
      'Bhishma & Humanity: The immortal bridge of devotion through the chanting of the Thousand Names'
    ],
    importantRelationships_te: [
      'ధర్మరాజు & శునకం: సమస్త జీవుల పట్ల చూపించే నిస్వార్థ కరుణయే పరమధర్మమని నిరూపించిన బంధం',
      'శ్రీకృష్ణుడు & పరీక్షిత్తు: యుగాంతరాల్లో కూడా ధర్మాన్ని నిలిపిన భగవత్ కృప',
      'భీష్ముడు & మానవాళి: విష్ణు సహస్రనామం ద్వారా అందించిన అమర భక్తి వారసత్వం'
    ],
    importantRelationships_hi: [
      'युधिष्ठिर और श्वान - समस्त प्राणियों के प्रति करुणा ही सच्चा धर्म है',
      'श्रीकृष्ण और परीक्षित - कलियुग में धर्म की ज्योति को अक्षुण्ण रखने वाली कृपा',
      'भीष्म और मानव जाति - विष्णु सहस्रनाम के रूप में मिला अमर भक्ति-मार्ग'
    ],
    majorDecisions: [
      'Yudhishthira accepting the painful responsibility of imperial rule rather than escaping to the forest',
      'Krishna entering the womb with the Sudarshana Chakra to resurrect unborn Parikshit',
      'Bhishma choosing the sacred moment of Uttarayana to surrender his breath after giving the Sahasranama',
      'Yudhishthira refusing heaven if it meant deserting a loyal dog in the cold snow'
    ],
    majorDecisions_te: [
      'బాధ్యత నుండి పారిపోకుండా ప్రజల కోసం రాజ్యాధికారాన్ని చేపట్టిన ధర్మరాజు వివేకం',
      'సుదర్శన చక్రంతో ఉత్తర గర్భంలోకి ప్రవేశించి పరీక్షిత్తుని బతికించిన శ్రీకృష్ణుని సంకల్పం',
      'విష్ణు సహస్రనామాన్ని లోకానికి అందించి ఉత్తరాయణంలో తనువు చాలించిన భీష్ముని నిర్ణయం',
      'నమ్ముకున్న కుక్కను వదిలేసి స్వర్గానికి వెళ్ళనన్న ధర్మరాజు నిశ్చయం'
    ],
    majorDecisions_hi: [
      'संन्यास छोड़कर प्रजा-कल्याण हेतु राजमुकुट धारण करना',
      'ब्रह्मास्त्र से परीक्षित के प्राणों की रक्षा का प्रभु का संकल्प',
      'विष्णु सहस्रनाम देकर उत्तरायण में मोक्ष प्राप्त करना',
      'एक निरीह प्राणी के लिए स्वर्ग के सुख को भी ठुकरा देना'
    ],
    consequences: [
      'Sanatana Dharma is preserved through the line of Parikshit into the Kali Yuga',
      'The Vishnu Sahasranama becomes the world’s most chanted devotional hymn across millennia',
      'The eternal maxim is immortalized for all time: "Yato Dharmas Tato Jayah" (Where there is Dharma, there is Victory)'
    ],
    consequences_te: [
      'పరీక్షిత్తు ద్వారా కలియుగంలోకి సనాతన ధర్మం విజయవంతంగా కొనసాగడం',
      'తరతరాలుగా మానవాళిని పునీతం చేస్తున్న విష్ణు సహస్రనామ స్తోత్రం లభించడం',
      '"యతో ధర్మస్తతో జయః" (ఎక్కడ ధర్మం ఉంటుందో అక్కడే విజయం) అనే సత్యం అజరామరం కావడం'
    ],
    consequences_hi: [
      'परीक्षित के माध्यम से कलियुग में सनातन धर्म की धारा का अविरल बहना',
      'विष्णु सहस्रनाम का मानव इतिहास का सबसे पावन ग्रंथ बनना',
      '"यतो धर्मस्ततो जयः" का अमर घोष सृष्टि के अंत तक गूंजते रहना'
    ]
  },

  slides: [
    {
      slideNumber: 1,
      title: 'The Spark of Tomorrow',
      title_te: 'రేపటి ధర్మ జ్యోతి',
      title_hi: 'भावी धर्म का दीपक',
      content: 'Krishna enters the womb of Princess Uttara with the Sudarshana Chakra to resurrect Prince Parikshit, preserving the lineage.',
      content_te: 'కృష్ణుడు సుదర్శన చక్రంతో ఉత్తర గర్భంలోకి ప్రవేశించి పరీక్షిత్తుని బతికించి ధర్మ వంశాన్ని నిలిపాడు.',
      content_hi: 'श्रीकृष्ण ने सुदर्शन चक्र से उत्तरा के गर्भ में परीक्षित को पुनर्जीवित कर कुल की ज्योति को बुझने से बचाया।',
      moralLesson: 'Even when adharma seeks to wipe out the future, divine grace rekindles the eternal flame of virtue.',
      moralLesson_te: 'అధర్మం భవిష్యత్తును తుడిచిపెట్టాలని చూసినా, దైవానుగ్రహం ధర్మ జ్యోతిని ఎప్పటికీ ఆరనివ్వదు.',
      moralLesson_hi: 'अधर्म चाहे जितना प्रहार करे, ईश्वर की कृपा धर्म के बीज को कभी नष्ट नहीं होने देती।'
    },
    {
      slideNumber: 2,
      title: 'The Thousand Divine Names',
      title_te: 'శ్రీ విష్ణు సహస్రనామం',
      title_hi: 'श्रीविष्णु सहस्रनाम की देन',
      content: 'From his bed of arrows, Grandsire Bhishma gifts humanity the sacred Sri Vishnu Sahasranama before entering eternity.',
      content_te: 'అంపశయ్యపై నుండి భీష్మ పితామహుడు మానవాళికి విష్ణు సహస్రనామ స్తోత్రాన్ని ప్రసాదించి ఉత్తరాయణంలో ముక్తిని పొందాడు.',
      content_hi: 'पितामह भीष्म ने शरशय्या से संसार को श्रीविष्णु सहस्रनाम का परम पावन उपहार देकर मोक्ष प्राप्त किया।',
      moralLesson: 'Devotion to the Supreme Divine is the highest purifier and the ultimate bridge across the ocean of worldly trials.',
      moralLesson_te: 'భగవద్భక్తి మాత్రమే మానవ జీవితంలోని సకల కష్టాలను దాటించి పరమశాంతిని ప్రసాదిస్తుంది.',
      moralLesson_hi: 'परमात्मा का नाम-स्मरण ही संसार के समस्त दुखों से पार पाने का सबसे सरल और श्रेष्ठ मार्ग है।'
    },
    {
      slideNumber: 3,
      title: 'The Final Test of Compassion',
      title_te: 'ధర్మ పరీక్ష & స్వర్గారోహణం',
      title_hi: 'करुणा की अंतिम परीक्षा',
      content: 'Refusing heaven without his faithful dog, Yudhishthira proves that universal compassion is the highest law: Yato Dharmas Tato Jayah.',
      content_te: 'తోడు వచ్చిన కుక్కను వదిలి స్వర్గానికి వెళ్ళనన్న ధర్మరాజు, సర్వజీవుల పట్ల దయే పరమధర్మమని చాటి సశరీరంగా స్వర్గానికి చేరాడు.',
      content_hi: 'निष्ठावान श्वान के बिना स्वर्ग त्यागने वाले युधिष्ठिर ने सिद्ध किया कि करुणा ही सर्वोच्च धर्म है: यतो धर्मस्ततो जयः।',
      moralLesson: 'Compassion for the humblest and truest creatures is the ultimate credential for the kingdom of God.',
      moralLesson_te: 'నిస్సహాయ ప్రాణుల పట్ల చూపే నిజమైన ప్రేమే భగవత్ సాక్షాత్కారానికి అసలైన అర్హత.',
      moralLesson_hi: 'दीन-हीन और निष्ठावान जीवों के प्रति करुणा ही मनुष्य को ईश्वर के धाम का सच्चा अधिकारी बनाती है।'
    }
  ]
};
