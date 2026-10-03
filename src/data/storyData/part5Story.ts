import { StoryPart } from '../../types/game';

export const PART_5_STORY: StoryPart = {
  partNumber: 5,
  title: 'The Game of Dice & The Disrobing',
  title_te: 'ద్యూత క్రీడ & ద్రౌపదీ వస్త్రాపహరణం',
  title_hi: 'द्यूत क्रीड़ा और द्रौपदी चीरहरण',
  sanskritTitle: 'द्यूतक्रीडा द्रौपदीवस्त्रापहरणञ्च',
  summary: 'The catastrophic game of loaded dice, Shakuni’s deceit, the staking of an empress, the cowardly silence of the Kuru elders, the infinite grace of Lord Govinda, and the fiery vows of doom.',
  summary_te: 'శకుని మాయా జూదం, ధర్మరాజు సర్వస్వాన్ని ఒడ్డడం, నిండు సభలో ద్రౌపదీ పరాభవం, పెద్దల పిరికి మౌనం, శ్రీకృష్ణుని అక్షయ వస్త్ర కరుణ, మరియు భీముని రౌద్ర శపథాలు.',
  summary_hi: 'शकुनि के कपटी पासे, युधिष्ठिर द्वारा सर्वस्व हारना, भरी सभा में द्रौपदी का अपमान, भीष्म-द्रोण का मौन, श्रीकृष्ण का दिव्य चीर-अवतार और भीम की भीषण प्रतिज्ञाएँ।',
  characterRewardId: 'karna',

  charactersInPart: [
    {
      id: 'draupadi_sabha',
      name: 'Empress Draupadi',
      name_te: 'మహారాణి ద్రౌపది',
      name_hi: 'महारानी द्रौपदी',
      title: 'Lioness of Dharma & Embodiment of Righteousness',
      title_te: 'ధర్మ స్వరూపిణి & సభా న్యాయమూర్తి',
      title_hi: 'धर्म की साक्षात प्रतिमूर्ति',
      relationship: 'Empress of Indraprastha; dragged into court while menstruating in single garment',
      relationship_te: 'ఇంద్రప్రస్థ సామ్రాజ్ఞి; ఏకవస్త్రంతో సభలోకి ఈడ్వబడిన దేవి',
      relationship_hi: 'इंद्रप्रस्थ की सम्राज्ञी; एकवस्त्रा अवस्था में भरी सभा में अपमानित',
      intro: 'Interrogated the entire Kuru assembly on constitutional law and surrendered completely to Krishna when human hope died.',
      intro_te: 'సమస్త కురుసభను న్యాయ ధర్మాలపై ప్రశ్నించి, ఆఖరి క్షణంలో శ్రీకృష్ణునికి శరణాగతి చేసిన మహాసాధ్వి.',
      intro_hi: 'जिन्होंने कुरुसभा के दिग्गजों को धर्म की कसौटी पर निरुत्तर किया और अनन्य भाव से गोविंद को पुकारा।',
      avatarUrl: '/assets/wallpapers/draupadi.jpg',
      role: 'queen'
    },
    {
      id: 'shakuni_dice',
      name: 'Shakuni (King of Gandhara)',
      name_te: 'శకుని (గాంధార రాజు)',
      name_hi: 'शकुनि (गांधार नरेश)',
      title: 'Master of Illusions & Poisonous Dice',
      title_te: 'మాయాజూద నిపుణుడు & కుట్రల రూపకర్త',
      title_hi: 'कपट पांसों के महाधूर्त जादूगर',
      relationship: 'Maternal uncle of Duryodhana; brother of Gandhari',
      relationship_te: 'దుర్యోధనుని మేనమామ; గాంధారి సోదరుడు',
      relationship_hi: 'दुर्योधन के मामा; गांधारी के भाई',
      intro: 'Crafted loaded dice from the bones of his ancestors that obeyed his telepathic will with unerring fatality.',
      intro_te: 'తండ్రి అస్థికలతో చేసిన పాచికలతో తాను కోరుకున్న సంఖ్యను పడేలా చేసిన మాయావి.',
      intro_hi: 'अपने संकल्प से चलने वाले मायावी पांसों द्वारा युधिष्ठिर को जाल में फंसाने वाला कुटिल सूत्रधार।',
      avatarUrl: '/assets/wallpapers/sanatana-dharma.jpg',
      role: 'adversary'
    },
    {
      id: 'dushasana',
      name: 'Prince Dushasana',
      name_te: 'దుశ్శాసనుడు',
      name_hi: 'दुःशासन',
      title: 'Second Kaurava Prince & Ruthless Executioner',
      title_te: 'కౌరవ ద్వితీయుడు & దుర్మార్గుడు',
      title_hi: 'कौरव भ्राता एवं दुराचारी',
      relationship: 'Younger brother of Duryodhana; perpetrator of the disrobing',
      relationship_te: 'దుర్యోధనుని తమ్ముడు; ద్రౌపది కొప్పు పట్టుకుని ఈడ్చిన పాపాత్ముడు',
      relationship_hi: 'दुर्योधन का छोटा भाई; द्रौपदी के केश खींचने वाला पापी',
      intro: 'Dragged the weeping Empress of Indraprastha by her hair and attempted to strip her bare in open court.',
      intro_te: 'ద్రౌపది జుట్టు పట్టుకుని సభలోకి ఈడ్చి, ఆమె చీరను లాగి వివస్త్రను చేయబోయిన రాక్షసుడు.',
      intro_hi: 'सभा में द्रौपदी के केश पकड़कर घसीटने और चीरहरण का दुस्साहस करने वाला अधर्मी।',
      avatarUrl: '/assets/wallpapers/karna.jpg',
      role: 'adversary'
    },
    {
      id: 'bhishma_silent',
      name: 'Grandsire Bhishma',
      name_te: 'భీష్మ పితామహుడు',
      name_hi: 'भीष्म पितामह',
      title: 'Supreme Elder Bound by Royal Salt',
      title_te: 'రాజ్యాధికారానికి కట్టుబడిన కురువృద్ధుడు',
      title_hi: 'राजसिंहासन और प्रतिज्ञा से बँधे पितामह',
      relationship: 'Patriarch of the Kuru clan; looked down in silence during the crime',
      relationship_te: 'కురు వంశ పెద్ద; అధర్మం జరుగుతున్నా తలదించుకున్న పితామహుడు',
      relationship_hi: 'कुरुश्रेष्ठ; अधर्म के समय असहाय होकर मौन रहने वाले',
      intro: 'Wept silently, admitting that Dharma is subtle and that he was powerless against the king’s formal authority.',
      intro_te: '"ధర్మం అతి సూక్ష్మమైనది" అంటూ సింహాసనానికి దాసుడై కన్నీరు కార్చిన దురదృష్ట వీరుడు.',
      intro_hi: '"धर्म की गति अत्यंत सूक्ष्म है" कहकर राजा की आज्ञा के आगे विवश होकर सिर झुकाने वाले महायोद्धा।',
      avatarUrl: '/assets/wallpapers/bhishma.jpg',
      role: 'elder'
    },
    {
      id: 'bhima_vow',
      name: 'Bhima (Vrikodara)',
      name_te: 'భీమసేనుడు',
      name_hi: 'भीमसेन',
      title: 'Avenger of the Kuru Sabha',
      title_te: 'రౌద్ర భీముడు & ప్రళయ సంహర్త',
      title_hi: 'प्रतिशोध के साक्षात महाकाल',
      relationship: 'Second Pandava; took the immortal oaths of annihilation',
      relationship_te: 'ద్రౌపది అవమానానికి రగిలిపోయి భయంకర శపథాలు చేసిన యోధుడు',
      relationship_hi: 'द्रौपदी के अपमान पर कुरुवंश के विनाश की प्रतिज्ञा लेने वाले',
      intro: 'Swore to tear open Dushasana’s chest to drink his warm blood and smash Duryodhana’s thigh with his mace.',
      intro_te: 'దుశ్శాసనుని రొమ్ము చీల్చి రక్తం తాగుతానని, దుర్యోధనుని తొడలు విరగ్గొడతానని ప్రళయ గర్జన చేశాడు.',
      intro_hi: 'दुःशासन की छाती फाड़कर रक्त पीने और दुर्योधन की जंघा गदा से तोड़ने की अमर प्रतिज्ञा की।',
      avatarUrl: '/assets/wallpapers/bhima.jpg',
      role: 'hero'
    },
    {
      id: 'krishna_unseen',
      name: 'Lord Sri Krishna (Dvarakanath)',
      name_te: 'శ్రీకృష్ణ పరమాత్మ (గోవిందుడు)',
      name_hi: 'भगवान श्रीकृष्ण (द्वारकानाथ)',
      title: 'The Savior of the Helpless & Giver of Endless Cloth',
      title_te: 'దీనజన రక్షకుడు & అక్షయ వస్త్ర ప్రదాత',
      title_hi: 'दीनबंधु एवं अक्षय चीरदाता',
      relationship: 'Called from afar by Draupadi’s desperate surrender',
      relationship_te: 'ద్రౌపది ఆర్తనాదాన్ని విని అదృశ్యంగా రక్షించిన దేవుడు',
      relationship_hi: 'द्रौपदी की अनन्य पुकार सुनकर अदृश्य रूप से लाज बचाने वाले प्रभु',
      intro: 'Though physically miles away in Dvaraka, He manifested as infinite yards of glowing silk to protect her honor.',
      intro_te: 'ద్వారకలో ఉన్నప్పటికీ, ద్రౌపది అనన్య శరణాగతికి స్పందించి అంతులేని వస్త్రాలను ప్రసాదించిన కరుణానిధి.',
      intro_hi: 'हजारों योजन दूर रहकर भी द्रौपदी के आर्तनाद पर अखंड चीर बनकर उसकी मर्यादा की रक्षा की।',
      avatarUrl: '/assets/wallpapers/krishna.jpg',
      role: 'mentor'
    }
  ],

  familyTree: {
    title: 'The Fractured Court of Hastinapur',
    title_te: 'హస్తినాపుర నిండు సభ & విభజన రేఖలు',
    title_hi: 'हस्तिनापुर की विभाजित राजसभा',
    description: 'The moral fracture between the perpetrators of adharma and the silent elders during the dice tragedy.',
    description_te: 'ద్యూత క్రీడలో ధర్మం ఓడిపోయి అధర్మం విలయతాండవం చేసిన హస్తినాపుర సభ.',
    description_hi: 'द्यूत सभा में अधर्म का अट्टहास और धर्म की रक्षा में खड़े निःसहाय पात्र।',
    nodes: [
      { id: 'dhritarashtra_t5', name: 'Dhritarashtra', name_te: 'ధృతరాష్ట్రుడు', name_hi: 'धृतराष्ट्र', clan: 'Kuru', generation: 2, role: 'Blind Emperor complicit in sin' },
      { id: 'bhishma_t5', name: 'Bhishma', name_te: 'భీష్ముడు', name_hi: 'भीष्म', clan: 'Kuru', generation: 1, role: 'Silent Elder' },
      { id: 'drona_t5', name: 'Drona', name_te: 'ద్రోణుడు', name_hi: 'द्रोणाचार्य', clan: 'Kuru', generation: 2, role: 'Royal Preceptor' },
      { id: 'vidura_t5', name: 'Vidura', name_te: 'విదురుడు', name_hi: 'विदुर', clan: 'Kuru', generation: 2, role: 'Only voice screaming against adharma' },
      { id: 'duryodhana_t5', name: 'Duryodhana', name_te: 'దుర్యోధనుడు', name_hi: 'दुर्योधन', clan: 'Kaurava', generation: 3, role: 'Plotter of the game' },
      { id: 'shakuni_t5', name: 'Shakuni', name_te: 'శకుని', name_hi: 'शकुनि', clan: 'Kaurava', generation: 2, role: 'Dice master' },
      { id: 'dushasana_t5', name: 'Dushasana', name_te: 'దుశ్శాసనుడు', name_hi: 'दुःशासन', clan: 'Kaurava', generation: 3, role: 'Perpetrator of assault' },
      { id: 'karna_t5', name: 'Karna', name_te: 'కర్ణుడు', name_hi: 'कर्ण', clan: 'Kaurava', generation: 3, role: 'Ally endorsing the humiliation' },
      { id: 'yudhishthira_t5', name: 'Yudhishthira', name_te: 'ధర్మరాజు', name_hi: 'युधिष्ठिर', clan: 'Pandava', generation: 3, role: 'Addicted & trapped player' },
      { id: 'bhima_t5', name: 'Bhima', name_te: 'భీముడు', name_hi: 'भीम', clan: 'Pandava', generation: 3, role: 'Roaring avenger' },
      { id: 'draupadi_t5', name: 'Draupadi', name_te: 'ద్రౌపది', name_hi: 'द्रौपदी', clan: 'Pandava', generation: 3, isKeyCharacter: true, role: 'Humiliated Empress saved by Krishna' }
    ],
    links: [
      { from: 'shakuni_t5', to: 'duryodhana_t5', relationship: 'mentor_of', label: 'Plotter & Instigator' },
      { from: 'duryodhana_t5', to: 'dushasana_t5', relationship: 'brother_of', label: 'Ordered the assault' },
      { from: 'yudhishthira_t5', to: 'draupadi_t5', relationship: 'married_to', label: 'Unlawfully Staked Consort' },
      { from: 'dushasana_t5', to: 'draupadi_t5', relationship: 'rivalry', label: 'Molester of Honor' },
      { from: 'bhima_t5', to: 'dushasana_t5', relationship: 'rivalry', label: 'Vowed to Drink Blood' }
    ]
  },

  illustratedPages: [
    {
      pageNumber: 1,
      title: 'The Poison of Jealousy & The Fatal Invitation',
      title_te: 'ఈర్ష్య విషం & మాయాజూద ఆహ్వానం',
      title_hi: 'ईर्ष्या की ज्वाला और द्यूत का निमंत्रण',
      sceneTag: 'Palace Chambers of Hastinapur',
      sceneTag_te: 'హస్తినాపుర అంతఃపురం',
      sceneTag_hi: 'हस्तिनापुर का राजमहल',
      hookLine: 'Unable to sleep or eat after witnessing Indraprastha’s splendor, Duryodhana chose deceit over war.',
      hookLine_te: 'ఇంద్రప్రస్థ వైభవాన్ని చూసి నిద్రపట్టని దుర్యోధనుడు; శకునితో కలిసి పన్నిన పాచికల వల.',
      hookLine_hi: 'पांडवों के ऐश्वर्य से जलते दुर्योधन को शकुनि ने पांसों के कपट-जाल का मार्ग दिखाया।',
      paragraphs: [
        'Returning to Hastinapur, Prince Duryodhana sank into a wasting fever of jealousy. "Uncle," he wept to Shakuni, "I have seen the kings of the world bowing to Yudhishthira like servants. I cannot bear to live while they prosper! Either give me victory, or I shall cast myself into the flames!"',
        'Uncle Shakuni smiled slyly: "O Suyodhana, Arjuna cannot be conquered in battle, nor Bhima subdued with maces. But Yudhishthira has one fatal weakness: he loves the game of dice, yet possesses no skill in rolling them! Invite him to a friendly game. I shall play on your behalf with my charmed dice, and win his entire empire without shedding a single drop of blood."',
        'Dhritarashtra, terrified by Duryodhana’s threats of suicide, overruled Mahatma Vidura’s desperate protests. He sent Vidura himself to Indraprastha bearing the formal imperial invitation: a royal challenge that a Kshatriya king could not honorably refuse.'
      ],
      paragraphs_te: [
        'హస్తినాపురానికి తిరిగొచ్చిన దుర్యోధనుడు తిండీ నిద్ర మానేసి ఈర్ష్యతో కృశించిపోయాడు. "మామా! ధర్మరాజు పాదాల వద్ద ప్రపంచ రాజులంతా బానిసల్లా నిలబడటం చూశాను. వారి వైభవాన్ని చూస్తూ నేను బతకలేను, చనిపోతాను!" అని విలపించాడు.',
        'శకుని కుటిలంగా నవ్వి: "నాయనా! అర్జునుడిని యుద్ధంలో గాని, భీముడిని గదతో గాని గెలవలేవు. కానీ ధర్మరాజుకు జూదమంటే పిచ్చి, ఆడటం మాత్రం రాదు. అతన్ని ఆహ్వానించు, నా మాయా పాచికలతో రక్తం చిందించకుండా అతని రాజ్యాన్ని నీ పాదాల వద్ద ఉంచుతాను" అన్నాడు.',
        'కొడుకు బెదిరింపులకు లొంగిపోయిన ధృతరాష్ట్రుడు విదురుని వారింపులను లెక్కచేయక, పాండవులను జూదానికి పిలవడానికి స్వయంగా విదురుడినే పంపాడు. క్షత్రియ ధర్మం ప్రకారం వచ్చిన ఆహ్వానాన్ని ధర్మరాజు తిరస్కరించలేకపోయాడు.'
      ],
      paragraphs_hi: [
        'इंद्रप्रस्थ का वैभव देखकर दुर्योधन ईर्ष्या की आग में जल रहा था। उसने शकुनि से कहा: "मामा! युधिष्ठिर की उस समृद्धि को देखकर मैं जीवित नहीं रह सकता। मुझे युद्ध की आज्ञा दो या मैं प्राण त्याग दूँगा।"',
        'शकुनि ने कुटिलता से कहा: "भांजे! पांडवों को अस्त्रों से नहीं जीता जा सकता। किंतु युधिष्ठिर को द्यूत (जुआ) का व्यसन है और वह खेलना नहीं जानता। तुम उसे बुलाओ, मैं अपने पांसों से बिना एक बूँद खून बहाए उसका संपूर्ण राज्य तुम्हें दिलवा दूँगा।"',
        'पुत्रमोह में अंधे धृतराष्ट्र ने विदुर के कड़े विरोध को ठुकराकर पांडवों को द्यूत-क्रीड़ा का औपचारिक निमंत्रण भेज दिया, जिसे क्षत्रिय मर्यादावश युधिष्ठिर अस्वीकार न कर सके।'
      ],
      dialogueQuote: '"The dice are my bow, the board is my chariot, and the dots on the ivory are my fatal arrows."',
      dialogueQuote_te: '"నా పాచికలే బాణాలు, జూదపు బల్లయే నా రథం; క్షణాల్లో సామ్రాజ్యాన్ని పడగొడతాను."',
      dialogueQuote_hi: '"पांसे ही मेरे बाण हैं और चौपड़ की बिसात ही मेरा रथ; एक बाण चलाए बिना पूरा साम्राज्य तुम्हारे चरणों में होगा।"',
      speaker: 'Shakuni tempting Duryodhana',
      speaker_te: 'దుర్యోధనునికి ఉత్సాహం నూరుతున్న శకుని',
      speaker_hi: 'शकुनि का कुटिल आश्वासन',
      imageUrl: '/assets/wallpapers/sanatana-dharma.jpg',
      imageCaption: 'Shakuni whispering the venomous scheme of loaded dice into Duryodhana\'s ear.',
      imageCaption_te: 'దుర్యోధనుని చెవిలో మాయాజూదపు పన్నాగం నూరుతున్న శకుని.',
      imageCaption_hi: 'दुर्योधन के कान में द्यूत के षड्यंत्र का विष घोलते कपटी शकुनि।'
    },
    {
      pageNumber: 2,
      title: 'The Hall of Ruin: Staking the Empire',
      title_te: 'సర్వస్వాన్ని కబళించిన మాయా పాచికలు',
      title_hi: 'चौपड़ की बाजी और साम्राज्य का दांव',
      sceneTag: 'Imperial Gaming Hall of Hastinapur',
      sceneTag_te: 'హస్తినాపుర ద్యూత సభ',
      sceneTag_hi: 'हस्तिनापुर की द्यूत सभा',
      hookLine: 'Roll after roll, Shakuni called the winning score before the ivory touched the velvet.',
      hookLine_te: 'పాచికలు దొర్లిన ప్రతిసారీ శకుని అరుపు: "గెలిచాను!"... నిశ్చేష్టులైన పెద్దలు.',
      hookLine_hi: 'पांसे फेंकते ही शकुनि की गूंज: "यह जीता!"... और युधिष्ठिर का विवेक शून्य होता गया।',
      paragraphs: [
        'The game began under golden chandeliers. King Yudhishthira protested when Duryodhana announced that his uncle Shakuni would cast the dice on his behalf: "To have a proxy play is contrary to the code of fair gaming!" But provoked by Shakuni’s taunts of cowardice, the Emperor sat at the board.',
        'With every roll, Shakuni’s magical dice responded to his unspoken will. Yudhishthira staked chests of pearls, thousands of horses, herds of elephants, chariots of gold, granaries, and vast armies—and lost every wager within minutes.',
        'Mahatma Vidura rose, pleading with tears: "O King Dhritarashtra! Abandon this wicked son of yours before he burns the entire Kuru dynasty to cinders! Stop this madness!" But Duryodhana insulted Vidura as an ungrateful snake, and the blind king remained silent. Stunned by loss and gripped by intoxication, Yudhishthira kept rolling.'
      ],
      paragraphs_te: [
        'ద్యూత సభ ప్రారంభమైంది. తన బదులు శకుని పాచికలు వేస్తాడని దుర్యోధనుడు చెప్పినప్పుడు ధర్మరాజు అభ్యంతరం చెప్పాడు. కానీ శకుని చేసిన ఎత్తిపొడుపులకు లొంగి ఆటకు సిద్ధమయ్యాడు.',
        'శకుని పాచికలు వేయడమే ఆలస్యం... అనుకున్న సంఖ్య పడేది. ధర్మరాజు వజ్రాలు, రథాలు, గజ సైన్యం, రాజ్య భాండాగారాలు, చివరకు తన సమస్త సామ్రాజ్యాన్నీ ఒకదాని తర్వాత ఒకటి పందెంగా పెట్టి క్షణాల్లో ఓడిపోయాడు.',
        'విదురుడు లేచి కన్నీటితో వేడుకున్నాడు: "ధృతరాష్ట్రా! ఈ కులాంగారుడైన దుర్యోధనుడిని విడిచిపెట్టు, లేదంటే కురువంశం సర్వనాశనం అవుతుంది!" కానీ దుర్యోధనుడు విదురుడిని తిట్టిపోశాడు, ధృతరాష్ట్రుడు మౌనం వహించాడు.'
      ],
      paragraphs_hi: [
        'खेल आरंभ हुआ। युधिष्ठिर ने विरोध किया कि दुर्योधन के स्थान पर शकुनि का खेलना अनुचित है, किंतु शकुनि के व्यंग्य से उत्तेजित होकर वे बैठ गए।',
        'शकुनि के मायावी पांसे उसकी उंगलियों के इशारे पर नाच रहे थे। युधिष्ठिर ने हीरे, जवाहरात, हाथी, घोड़े, सेना और अपना संपूर्ण साम्राज्य दांव पर लगाया और सब हार गए।',
        'महात्मा विदुर ने रोते हुए धृतराष्ट्र से कहा: "राजन! इस कुलघाती दुर्योधन को त्याग दो, अन्यथा यह संपूर्ण कुल को भस्म कर देगा!" किंतु दुर्योधन ने विदुर को अपमानित किया और अंधे राजा ने आँखें मूंदे रखीं।'
      ],
      dialogueQuote: '"Look, Yudhishthira! The dice fall as I command. Lo, I have won this stake as well!"',
      dialogueQuote_te: '"చూడు ధర్మరాజా! నా పాచికలు నేను చెప్పినట్లే వింటాయి. ఇదిగో ఈ పందెం కూడా నాదే!"',
      dialogueQuote_hi: '"देख युधिष्ठिर! पांसा वही गिरा जो मैंने चाहा। ले, यह दांव भी मैंने जीत लिया!"',
      speaker: 'Shakuni mocking Yudhishthira at the board',
      speaker_te: 'విజయోన్మాదంతో శకుని',
      speaker_hi: 'शकुनि का अहंकार भरा अट्टहास',
      imageUrl: '/assets/wallpapers/yudhishthira.jpg',
      imageCaption: 'The tragic Emperor Yudhishthira staring in disbelief at the loaded dice on the gambling cloth.',
      imageCaption_te: 'పాచికల వైపు దిక్కుతోచక చూస్తున్న ధర్మరాజు.',
      imageCaption_hi: 'चौपड़ पर सब कुछ गंवाते शोकमग्न धर्मराज युधिष्ठिर।'
    },
    {
      pageNumber: 3,
      title: 'Brothers as Slaves & Staking the Queen',
      title_te: 'సోదరుల బానిసత్వం & ద్రౌపది పందెం',
      title_hi: 'भाइयों की दासता और द्रौपदी का दांव',
      sceneTag: 'Center of the Sabha',
      sceneTag_te: 'హస్తినాపుర నిండు సభ',
      sceneTag_hi: 'द्यूत सभा का मध्य',
      hookLine: 'Having lost his lands, the mad spiral led him to stake his brothers, his own body, and his queen.',
      hookLine_te: 'రాజ్యం పోయింది, తమ్ములు బానిసలయ్యారు, తానూ ఓడిపోయాడు; చివరకు ద్రౌపదినీ పందెంగా పెట్టాడు.',
      hookLine_hi: 'जब धन और राज्य समाप्त हुआ, तो युधिष्ठिर ने भाइयों, स्वयं को और अंत में महारानी द्रौपदी को दांव पर लगा दिया।',
      paragraphs: [
        'With the empire gone, Shakuni leaned over with venomous affection: "You still possess your handsome brothers, King. Stake Nakula!" In terrifying delirium, Yudhishthira staked Nakula, then Sahadeva, then Arjuna, and finally Bhima. One by one, all four unconquerable warriors became bonded slaves to Duryodhana.',
        '"You still have yourself, King!" coaxed Shakuni. Yudhishthira placed himself on the board—and lost his own freedom. He was now a propertyless slave.',
        'Then Shakuni cast his ultimate hook: "You still have one jewel left, dearest nephew: Princess Draupadi of Panchala! Stake her, and with one roll of fortune, you can win back your brothers, your kingdom, and your freedom!" Spurred by blind frenzy, Yudhishthira uttered the fatal words: "I stake Draupadi!" The dice clattered: "Won!" roared Shakuni.'
      ],
      paragraphs_te: [
        'రాజ్యం అంతా పోయాక శకుని నవ్వుతూ: "నీ తమ్ములు ఇంకా మిగిలే ఉన్నారు కదా రాజా! నకులుడిని పందెంగా పెట్టు" అన్నాడు. మతిభ్రమించిన ధర్మరాజు నకులుడిని, సహదేవుడిని, అర్జునుడిని, భీముడిని పందెంగా పెట్టి ఓడిపోయాడు. నలుగురు మహావీరులు బానిసలయ్యారు.',
        '"నిన్ను నువ్వు పందెంగా పెట్టుకో" అన్నాడు శకుని. ధర్మరాజు తనను తాను పందెంగా పెట్టి తన స్వేచ్ఛను కూడా కోల్పోయి బానిసయ్యాడు.',
        'అప్పుడు శకుని చిరునవ్వుతో: "ఇంకా నీ వద్ద సాటిలేని రత్నం ఉంది... ద్రౌపది! ఆమెను పందెంగా పెట్టు, గెలిస్తే సమస్తాన్నీ తిరిగి పొందవచ్చు" అని రెచ్చగొట్టాడు. ధర్మరాజు విచక్షణ కోల్పోయి "ద్రౌపదిని ఒడ్డుతున్నాను" అన్నాడు. శకుని పాచికలు వేసి "గెలిచాను!" అని అరిచాడు.'
      ],
      paragraphs_hi: [
        'साम्राज्य समाप्त होने पर शकुनि ने उकसाया: "राजन! तुम्हारे पास अभी तुम्हारे भाई हैं। नकुल को दांव पर लगाओ!" मोहग्रस्त युधिष्ठिर ने नकुल, सहदेव, अर्जुन और भीम को दांव पर लगा दिया। चारों अजेय वीर कौरवों के दास बन गए।',
        'फिर युधिष्ठिर ने स्वयं को दांव पर लगाया और अपनी स्वतंत्रता भी हार बैठे। वे अब एक अधिकारविहीन दास थे।',
        'तब शकुनि ने अपना अंतिम पांसा फेंका: "तुम्हारे पास अभी पांचाल राजकुमारी द्रौपदी है! उसे दांव पर लगाओ और अपना सब कुछ पुनः जीत लो!" युधिष्ठिर के मुख से शब्द निकल गए: "मैं द्रौपदी को दांव पर रखता हूँ!" पांसे गिरे और शकुनि चीखा: "यह भी मैंने जीत लिया!"'
      ],
      dialogueQuote: '"Fie upon this! Fie! The heavens are falling!"',
      dialogueQuote_te: '"ఛీ ఛీ! ఎంత ఘోరం జరిగిపోయింది! ధర్మం నేలమట్టమైంది!"',
      dialogueQuote_hi: '"धिक्कार है! तीनों लोक कांप उठे! धर्म का सर्वनाश हो गया!"',
      speaker: 'Elders gasping in horror',
      speaker_te: 'హాహాకారాలు చేస్తున్న సభికులు',
      speaker_hi: 'सभासदों का भयभीत क्रंदन',
      imageUrl: '/assets/wallpapers/draupadi.jpg',
      imageCaption: 'The assembly freezing in horror as Yudhishthira stakes Empress Draupadi.',
      imageCaption_te: 'ధర్మరాజు ద్రౌపదిని పందెంగా పెట్టగానే నిర్ఘాంతపోయిన కురు సభ.',
      imageCaption_hi: 'द्रौपदी को दांव पर लगते देख सन्न रह गई संपूर्ण हस्तिनापुर सभा।'
    },
    {
      pageNumber: 4,
      title: 'Dragged by the Hair: The Crime of Dushasana',
      title_te: 'కేశాకర్షణ & దుశ్శాసనుని క్రౌర్యం',
      title_hi: 'केश-कर्षण और दुःशासन की बर्बरता',
      sceneTag: 'Queen’s Inner Chambers & Hallway to Sabha',
      sceneTag_te: 'రాణివాసం & సభా ద్వారం',
      sceneTag_hi: 'अंतःपुर और सभा का गलियारा',
      hookLine: 'Clad in a single cloth of mourning, the Empress was dragged through the corridors by her hair.',
      hookLine_te: 'ఏకవస్త్రంతో ఉన్న సామ్రాజ్ఞి కొప్పు పట్టుకుని ఈడ్చుకొచ్చిన రాక్షస ప్రవర్తన.',
      hookLine_hi: 'एकवस्त्रा अवस्था में रजस्वला महारानी को केश पकड़कर गलियारों से घसीटता लाया दुराचारी।',
      paragraphs: [
        'Duryodhana turned to his younger brother with eyes burning in lust and triumph: "Go, Dushasana! Bring our newly won slave-woman Draupadi to sweep the court before her masters!"',
        'Dushasana barged into the Queen’s inner chambers. Draupadi, observing the sacred ritual seclusion of her menstrual period and clad in a single unstitched garment, backed away in terror: "Do not touch me, prince! I am in my period, unfit to enter the royal assembly!"',
        'Laughing like a ghoul, Dushasana lunged forward and grabbed Draupadi’s long, fragrant, dark hair in his iron fist. Dragging her down the corridors while she wept and pleaded, he hauled her into the midst of the roaring, leering assembly of men.'
      ],
      paragraphs_te: [
        'విజయ గర్వంతో ఊగిపోతున్న దుర్యోధనుడు దుశ్శాసనుడితో: "వెళ్ళు! మన కొత్త దాసి ద్రౌపదిని ఇక్కడికి ఈడ్చుకురా, సభను శుభ్రం చేయనీ!" అని ఆజ్ఞాపించాడు.',
        'దుశ్శాసనుడు అంతఃపురంలోకి చొరబడ్డాడు. ద్రౌపది రజస్వలయై ఏకవస్త్రంతో ఉండటంతో భయపడి: "నన్ను ముట్టుకోకు! నేను సభకు వచ్చే స్థితిలో లేను" అని వేడుకుంది.',
        'రాక్షసుడిలా నవ్వుతూ దుశ్శాసనుడు ఆమె పొడవైన కురులను బలంగా పట్టుకుని, మెట్లపై ఈడ్చుకుంటూ సభ మధ్యలోకి తెచ్చి పడేశాడు.'
      ],
      paragraphs_hi: [
        'दुर्योधन ने गरजकर कहा: "जाओ दुःशासन! हमारी नई दासी द्रौपदी को यहाँ घसीट लाओ!"',
        'दुःशासन रनिवास में घुस गया। द्रौपदी उस समय रजस्वला थीं और एक ही वस्त्र पहने हुए थीं। उन्होंने कहा: "ठहरो दुःशासन! मैं इस अवस्था में सभा में जाने योग्य नहीं हूँ।"',
        'किंतु निर्दयी दुःशासन ने उनके लंबे रेशमी केश पकड़ लिए और रोती-बिलखती महारानी को गलियारों से घसीटते हुए भरी सभा के बीच लाकर पटक दिया।'
      ],
      dialogueQuote: '"Unrighteous wretch! How dare you lay hands upon an empress in her private sanctuary?"',
      dialogueQuote_te: '"దుర్మార్గుడా! అంతఃపురంలో ఉన్న సామ్రాజ్ఞిపై చేయి వేయడానికి నీకు ఎంతటి తెగింపు?"',
      dialogueQuote_hi: '"अधर्मी पापी! एक कुलवधू और महारानी के केश छूने का दुस्साहస तुझे कैसे हुआ?"',
      speaker: 'Draupadi screaming at Dushasana',
      speaker_te: 'దుశ్శాసనునిపై మండిపడుతున్న ద్రౌపది',
      speaker_hi: 'द्रौपदी का गर्जना भरा आक्रोश',
      imageUrl: '/assets/wallpapers/draupadi.jpg',
      imageCaption: 'Empress Draupadi standing violated yet regal in the center of the assembly hall.',
      imageCaption_te: 'సభ మధ్యలో అవమాన భారంతో నిలబడిన ద్రౌపదీ దేవి.',
      imageCaption_hi: 'भरी सभा में केश खींचे जाने पर भी आत्मसम्मान से दमकती महारानी द्रौपदी।'
    },
    {
      pageNumber: 5,
      title: 'The Great Question & The Silence of the Elders',
      title_te: 'ధర్మ సందేహం & పెద్దల పిరికి మౌనం',
      title_hi: 'धर्म का प्रश्न और गुरुजनों का मौन',
      sceneTag: 'Before the Throne of Hastinapur',
      sceneTag_te: 'కురు సింహాసనం ఎదుట',
      sceneTag_hi: 'कुरु राजसिंहासन के सम्मुख',
      hookLine: '"Did he who lost himself first have any lawful right to stake his wife?"',
      hookLine_te: '"తన్ను తాను ఓడిపోయిన బానిసకు తన భార్యను పందెం పెట్టే అధికారం ఎక్కడిది?"',
      hookLine_hi: '"जो स्वयं दांव पर हारकर दास बन चुका था, क्या उसे मुझे दांव पर लगाने का अधिकार था?"',
      paragraphs: [
        'Standing alone before the gathered kings, tears of humiliation burning her cheeks, Draupadi cast a piercing gaze upon Bhishma, Drona, and Kripa. Her voice rang like a temple bell through the hall: "I ask of this august assembly a question of Law! Did King Yudhishthira stake me before or after he lost himself?"',
        '"If he had already lost his own person, he was a slave without property! How can a slave stake another free human being?" The logic was unassailable. Scholars and commoners in the assembly gasped in agreement.',
        'Grandsire Bhishma bowed his head, tortured by helplessness: "O blessed princess, the ways of Dharma are profound and subtle. The king who is master of the house declared you staked, yet he who has lost himself is master of nothing. Because of the complexity of the law, I cannot answer thee!"'
      ],
      paragraphs_te: [
        'సభలో నిలబడి కన్నీరు కారుస్తూ ద్రౌపది భీష్మ, ద్రోణ, కృపాచార్యులను చూసి సూటిగా ప్రశ్నించింది: "ఈ మహాసభకు నేను ఒక ధర్మ సందేహాన్ని అడుగుతున్నాను! ధర్మరాజు తన్ను తాను ఓడిపోక ముందా, లేక ఓడిపోయిన తర్వాత నన్ను పందెంగా పెట్టాడా?"',
        '"ఒకవేళ తన్ను తాను ముందుగానే ఓడిపోయి ఉంటే, అతను బానిస. బానిసకు ఏ వస్తువుపైనా అధికారం ఉండదు. అలాంటప్పుడు నన్ను పందెంగా పెట్టే అధికారం అతనికి ఎక్కడిది?" అని నిలదీసింది.',
        'భీష్ముడు తలదించుకుని: "అమ్మా! ధర్మం యొక్క గతి అతి సూక్ష్మమైనది. ఇంటి యజమానిగా ధర్మరాజు నిన్ను పందెం పెట్టాడు, కానీ బానిసగా అతనికి అధికారం లేదు. ఈ చిక్కుముడిని నేను విప్పలేకపోతున్నాను" అని నిస్సహాయత వ్యక్తం చేశాడు.'
      ],
      paragraphs_hi: [
        'द्रौपदी ने भीष्म, द्रोण और कृप की ओर देखकर सिंहनी की तरह पूछा: "हे कुरुश्रेष्ठो! मैं इस सभा से धर्म का एक न्यायसंगत प्रश्न पूछती हूँ! युधिष्ठिर ने मुझे स्वयं को हारने से पहले दांव पर लगाया था या बाद में?"',
        '"यदि वे पहले ही हारकर स्वयं दास बन चुके थे, तो एक दास का किसी अन्य स्वतंत्र व्यक्ति पर क्या अधिकार रह जाता है?" यह सुनकर पूरी सभा में सन्नाटा छा गया।',
        'भीष्म पितामह ने कांपते हुए सिर झुका लिया: "कल्याणी! धर्म की गति अत्यंत सूक्ष्म है। स्वामी होने के नाते युधिष्ठिर ने दांव लगाया, किंतु दास होने पर उनका कोई अधिकार नहीं बचता। इस सूक्ष्म भेद के कारण मैं उत्तर देने में असमर्थ हूँ!"'
      ],
      dialogueQuote: '"Righteousness that cannot protect a helpless woman in the assembly of her elders is no righteousness at all!"',
      dialogueQuote_te: '"పెద్దల సభలో ఒక అబలను కాపాడలేని ధర్మం అసలు ధర్మమే కాదు!"',
      dialogueQuote_hi: '"जिस सभा में बड़े-बुजुर्गों के सामने एक कुलवधू की रक्षा न हो सके, वह सभा अधर्म की गर्त है!"',
      speaker: 'Draupadi indicting the Kuru Sabha',
      speaker_te: 'కురు సభను నిలదీస్తున్న ద్రౌపది',
      speaker_hi: 'द्रौपदी का ऐतिहासिक प्रश्न',
      imageUrl: '/assets/wallpapers/bhishma.jpg',
      imageCaption: 'Bhishma Pitamaha looking down in deep sorrow, unable to counter Draupadi’s moral query.',
      imageCaption_te: 'ద్రౌపది ప్రశ్నకు సమాధానం చెప్పలేక తలదించుకున్న భీష్మ పితామహుడు.',
      imageCaption_hi: 'द्रौपदी के धर्म-संकट पर सिर झुकाए विवश और शोकमग्न पितामह भीष्म।'
    },
    {
      pageNumber: 6,
      title: 'The Miracle of Akshaya Vastra: The Grace of Govinda',
      title_te: 'అక్షయ వస్త్ర ప్రదానం & శ్రీకృష్ణుని కరుణ',
      title_hi: 'अक्षय चीर का चमत्कार और गोविंद की कृपा',
      sceneTag: 'Center of the Assembly Floor',
      sceneTag_te: 'నిండు సభ మధ్యలో',
      sceneTag_hi: 'कुरु सभा का केंद्र',
      hookLine: 'When she lifted both hands to the sky in total surrender, the fabric became endless.',
      hookLine_te: 'రెండు చేతులూ పైకెత్తి శ్రీకృష్ణునికి శరణాగతి చేయగా, అనంతంగా పెరిగిపోయిన చీరల ప్రవాహం.',
      hookLine_hi: 'जब दोनों हाथ उठाकर गोविंद को पुकारा, तो साड़ी अंतहीन रेशमी पर्वत बन गई।',
      paragraphs: [
        'Duryodhana slapped his exposed left thigh in front of Draupadi, inviting her to sit upon his lap. Karna mocked her, calling her a courtesan who served five masters. Then Duryodhana gave the monstrous command: "Strip the garments from these Pandava slaves, and disrobe this woman before the entire assembly!"',
        'The Pandavas cast off their upper garments in humiliation. Dushasana strode forward, gripped the edge of Draupadi’s single sari, and began pulling with brutal force. With one hand she held her cloth, turning desperately to her husbands, then to the elders—none moved.',
        'Realizing no mortal on earth could save her, Draupadi let go of the fabric completely. Raising both hands high toward heaven, tears streaming from her eyes, she cried with all her soul: "O Govinda! O Dwarkadhish! O Beloved of the Gopis! Protector of the universe, save me, for I drown in an ocean of shame!"',
        'At that supreme surrender, an invisible miracle ignited. As fast as Dushasana unwound the silk, fresh fabric emerged from the void in radiant saffron, crimson, green, and gold. Yards turned into hundreds of yards, then miles! A massive mountain of shimmering cloth piled onto the floor. Dushasana, drenched in sweat and gasping for breath, collapsed to the marble floor in utter exhaustion, while Draupadi remained fully clothed and untouched.'
      ],
      paragraphs_te: [
        'దుర్యోధనుడు తన ఎడమ తొడను చరుస్తూ వచ్చి తన ఒడిలో కూర్చోమని సైగ చేశాడు. కర్ణుడు పరిహసించాడు. దుర్యోధనుడు ఆజ్ఞాపించాడు: "ఈ పాండవుల వస్త్రాలను తీసేయండి, ఆ ద్రౌపది చీరను లాగి నగ్నంగా చేయండి!"',
        'దుశ్శాసనుడు ముందుకు వచ్చి ద్రౌపది చీర కొంగు పట్టుకుని లాగడం మొదలుపెట్టాడు. ఒక చేత్తో చీరను పట్టుకుని భర్తలను, పెద్దలను చూసింది; ఎవరూ కదలలేదు.',
        'ఈ భూమిపై తనను రక్షించేవారు ఎవరూ లేరని గ్రహించిన ద్రౌపది, రెండు చేతులనూ పైకెత్తి ఆకాశం వైపు చూస్తూ: "హా గోవిందా! ద్వారకావాసా! కృష్ణా! అనాథ రక్షకా! నన్ను కాపాడు!" అని గుండెలు పగిలేలా రోదించింది.',
        'ఆ క్షణంలో అద్భుతం జరిగింది. దుశ్శాసనుడు లాగుతున్న కొద్దీ రంగురంగుల పట్టుచీరలు అనంతంగా పుట్టుకొచ్చాయి. వందల మీటర్లు... వేల మీటర్లు... సభలో ఒక పెద్ద బట్టల కొండే ఏర్పడింది. దుశ్శాసనుడు అలసిపోయి, చేతులు నొప్పులు పుట్టి కిందపడిపోయాడు. ద్రౌపది నిండు వస్త్రాలతో సురక్షితంగా నిలబడింది.'
      ],
      paragraphs_hi: [
        'दुर्योधन ने अपनी नंगी जंघा ठोककर द्रौपदी को उस पर बैठने का संकेत किया। कर्ण ने उसे दासी कहा। फिर दुर्योधन ने आदेश दिया: "द्रौपदी के वस्त्र उतारकर इसे सभा में नग्न करो!"',
        'दुःशासन आगे बढ़ा और द्रौपदी की साड़ी खींचने लगा। द्रौपदी ने एक हाथ से वस्त्र थामा और बड़ों की ओर देखा, किंतु कोई आगे न आया।',
        'अंत में मानवी सहायता से निराश होकर द्रौपदी ने साड़ी छोड़ दी और दोनों हाथ ऊपर उठाकर पुकारा: "हे गोविंद! हे द्वारकानाथ! हे दीनानाथ! मेरी लाज बचाओ!"',
        'उसी क्षण अलौकिक चमत्कार हुआ। दुःशासन जितना खींचता, उतनी ही नई साड़ी निकलती आती। देखते ही देखते रेशमी साड़ियों का एक विशाल पर्वत लग गया। दुःशासन पसीने से लथपथ होकर गिर पड़ा, किंतु द्रौपदी का चीर कभी समाप्त नहीं हुआ।'
      ],
      dialogueQuote: '"O Lord of Dvaraka! When the world abandons me, be Thou my shelter in this ocean of sin!"',
      dialogueQuote_te: '"ద్వారకాధీశా! లోకమంతా నన్ను వదిలేసిన వేళ, ఈ పాప సముద్రంలో నీవే నాకు దిక్కు!"',
      dialogueQuote_hi: '"हे गोविंद! जब संसार ने मुख मोड़ लिया, तब केवल तुम्हारा नाम ही मेरी मर्यादा की ढाल है!"',
      speaker: 'Draupadi’s Prayer of Total Surrender',
      speaker_te: 'ద్రౌపది అనన్య శరణాగతి ప్రార్థన',
      speaker_hi: 'द्रौपदी का अनन्य शरणागति आर्तनाद',
      imageUrl: '/assets/wallpapers/draupadi.jpg',
      imageCaption: 'The endless mountain of celestial silk flowing from Sri Krishna’s grace, protecting Draupadi.',
      imageCaption_te: 'శ్రీకృష్ణుని కరుణతో అనంతంగా ప్రవహించిన అక్షయ వస్త్రాలు.',
      imageCaption_hi: 'भगवान श्रीकृष्ण की कृपा से अखंड चीर-अवतार का दिव्य दृश्य।'
    },
    {
      pageNumber: 7,
      title: 'The Thunder of Vrikodara: The Terrible Oaths',
      title_te: 'భీమసేనుని రౌద్ర శపథాలు',
      title_hi: 'भीमसेन का महाक्रोध और भयानक प्रतिज्ञाएँ',
      sceneTag: 'Shaken Assembly Hall',
      sceneTag_te: 'దద్దరిల్లిన హస్తినాపుర సభ',
      sceneTag_hi: 'कांपती हुई हस्तिनापुर की राजसभा',
      hookLine: 'Tearing through his bonds of patience, Bhima roared promises of gore that froze every heart.',
      hookLine_te: 'రౌద్రతాండవం చేసిన భీముడు; సభలోని ప్రతి ఒక్కరి గుండెల్లో వణుకు పుట్టించిన శపథాలు.',
      hookLine_hi: 'भीमसेन ने सिंह की तरह गरजकर ऐसी प्रतिज्ञाएँ लीं जिनसे संपूर्ण कुरुवंश की नींव हिल गई।',
      paragraphs: [
        'Witnessing the monstrous attempt on Draupadi, Bhima could restrain himself no longer. His eyes turned red as molten copper, smoke seemed to curl from his nostrils, and the veins in his arms bulged like iron pythons.',
        'Leaping onto a marble bench, he roared an oath that made warriors cover their ears: "Hear me, assembled kings and ancestors! If I do not tear open the chest of this vile Dushasana on the battlefield and drink his warm heart\'s blood, may I never enter the realms of my forefathers!"',
        'Turning his gaze of fire upon Duryodhana, Bhima pointed his trembling finger: "And as for you, who shamelessly showed your thigh to Panchali—in great battle, I shall shatter that very thigh with my mace and crush your head under my heel!" Draupadi then untied her long hair, vowing it would never be braided until washed in Dushasana\'s blood.'
      ],
      paragraphs_te: [
        'ఈ ఘోరాన్ని చూసిన భీముడు ఇక సహించలేకపోయాడు. కళ్ళు ఎర్రబడ్డాయి, దవడలు అదిరాయి, భీకరమైన రౌద్ర రూపం దాల్చాడు.',
        'సభ దద్దరిల్లేలా గర్జించాడు: "ఓ రాక్షస కులస్తులారా! వినండి! రేపు యుద్ధరంగంలో ఈ పాపాత్ముడైన దుశ్శాసనుని రొమ్ము చీల్చి అతని గుండె నెత్తురు తాగకపోతే నా పేరు భీముడే కాదు! నా పూర్వీకుల లోకాలకు వెళ్ళే అర్హత నాకు దక్కకుండా పోవుగాక!"',
        'తరువాత దుర్యోధనుని వైపు చూసి: "ద్రౌపదికి తొడ చూపించిన నీ తొడలను నా గదతో పగలగొట్టి నీ తలమీద తన్నకపోతే నేను వాయుపుత్రుడినే కాదు!" అని శపథం చేశాడు. దుశ్శాసనుని రక్తంతో కడిగేవరకు తన కొప్పు ముడవనని ద్రౌపది శపథం చేసింది.'
      ],
      paragraphs_hi: [
        'यह घोर अन्याय देखकर भीमसेन का संयम टूट गया। उनकी आँखें अंगारों की भांति लाल हो गईं और भुजाएँ फड़कने लगीं।',
        'भीम ने पूरी सभा को हिलाते हुए गर्जना की: "सुनो सभासदों! यदि मैं समरभूमि में इस दुष्ट दुःशासन की छाती फाड़कर उसका गरम रक्त न पीऊँ, तो मुझे पूर्वजों के लोक में स्थान न मिले!"',
        'फिर दुर्योधन की ओर मुड़कर कहा: "और तू, जिसने भरी सभा में पांचाली को जंघा दिखाई—युद्ध में तेरी वही जंघा अपनी गदा से तोड़कर तेरे सिर को पैरों तले न रौंदूँ, तो मेरा नाम भीम नहीं!" द्रौपदी ने भी प्रतिज्ञा की कि जब तक दुःशासन के रक्त से अपने केश नहीं धोएंगी, तब तक केश नहीं बांधेंगी।'
      ],
      dialogueQuote: '"I shall rip open Dushasana’s chest in battle and drink his blood; I shall break Duryodhana’s thigh into splinters!"',
      dialogueQuote_te: '"దుశ్శాసనుని రొమ్ము చీల్చి రక్తం తాగుతాను; దుర్యోధనుని తొడను నూరు ముక్కలుగా విరగ్గొడతాను!"',
      dialogueQuote_hi: '"मैं युद्ध में दुःशासन का सीना चीरकर लहू पीऊँगा और दुर्योधन की जंघा चकनाचूर कर दूँगा!"',
      speaker: 'Bhima’s Roar of Retribution',
      speaker_te: 'భీముని ప్రళయ శపథం',
      speaker_hi: 'भीमसेन का भीषण प्रतिशोध संकल्प',
      imageUrl: '/assets/wallpapers/bhima.jpg',
      imageCaption: 'The enraged Bhima making his immortal vows of retribution before the assembled court.',
      imageCaption_te: 'సభలో భయంకర ప్రతీకార శపథాలు చేస్తున్న భీమసేనుడు.',
      imageCaption_hi: 'भरी सभा में कुरुवंश के विनाश की प्रतिज्ञा लेते महाबली भीम।'
    },
    {
      pageNumber: 8,
      title: 'The Bad Omens & The Twelve Years Exile',
      title_te: 'దుశ్శకునాలు & పన్నెండేళ్ళ వనవాసం',
      title_hi: 'अपशकुन और बारह वर्ष का वनवास',
      sceneTag: 'Gates of Hastinapur',
      sceneTag_te: 'హస్తినాపుర వెలుపల & అరణ్య ప్రవేశం',
      sceneTag_hi: 'हस्तिनापुर का मुख्य द्वार और वन-गमन',
      hookLine: 'Jackals howled in the royal sanctuary, forcing a brief reprieve before the second roll banished them for thirteen years.',
      hookLine_te: 'రాజభవనంలో నక్కల కూతలు, గాడిదల అరుపులు; రెండోసారి జూదంలో ఓడిపోయి అడవుల పాలైన పాండవులు.',
      hookLine_hi: 'अग्निशाला में गीदड़ रोने लगे; भयभीत धृतराष्ट्र ने वरदान दिए, किंतु दूसरी बाजी में 13 वर्ष का वनवास मिला।',
      paragraphs: [
        'At that horrifying moment, fearful omens exploded across Hastinapur: jackals wailed inside the sacred sacrificial chambers, donkeys brayed on rooftops, and black meteors streaked across the daylight sky. Queen Gandhari and Mahatma Vidura rushed to Dhritarashtra: "The destruction of your sons is here! Pacify Draupadi before all is lost!"',
        'Terrified of divine wrath, Dhritarashtra granted Draupadi three boons. With her first boon, she freed Yudhishthira from slavery; with her second, she freed Bhima, Arjuna, Nakula, and Sahadeva with their celestial weapons. Refusing a third boon, she declared: "A Kshatriya woman asks only for what dharma permits; my husbands will recover the rest by their own might!"',
        'Duryodhana, terrified of their freedom, convinced Dhritarashtra to summon Yudhishthira for one final roll: the loser would spend twelve years in the deep forest and a thirteenth year incognito; if discovered in the thirteenth year, another twelve years in exile. Shakuni rolled his deceitful dice again. Defeated, the Pandavas clad themselves in deerskins and marched into the dark forest, with the destruction of the Kurus etched into the scrolls of fate.'
      ],
      paragraphs_te: [
        'వెంటనే హస్తినాపురంలో భయంకరమైన అపశకునాలు మొదలయ్యాయి. అగ్నిహోత్ర గృహంలో నక్కలు ఊళవేశాయి, గాడిదలు అరిచాయి, ఆకాశం నుండి ఉల్కలు రాలాయి. గాంధారి, విదురుడు పరుగున వచ్చి ధృతరాష్ట్రుడిని హెచ్చరించారు.',
        'భయపడిపోయిన ధృతరాష్ట్రుడు ద్రౌపదికి మూడు వరాలు ఇచ్చాడు. మొదటి వరంతో ధర్మరాజును, రెండో వరంతో మిగిలిన నలుగురు సోదరులను వారి ఆయుధాలతో సహా దాస్యం నుండి విముక్తులను చేసింది ద్రౌపది. మూడో వరాన్ని తిరస్కరిస్తూ: "నా భర్తలు తమ బాహుబలంతో తిరిగి రాజ్యాన్ని సాధించుకుంటారు" అంది.',
        'పాండవులు స్వేచ్ఛ పొందడం చూసి ఓర్వలేని దుర్యోధనుడు ధృతరాష్ట్రుడిని ఒప్పించి మళ్ళీ చివరి జూదానికి పిలిపించాడు. ఓడినవారు 12 ఏళ్ళు వనవాసం, 1 సంవత్సరం అజ్ఞాతవాసం చేయాలి. శకుని మళ్ళీ పాచికలు వేసి గెలిచాడు. పాండవులు నారచీరలు ధరించి అడవుల బాట పట్టారు.'
      ],
      paragraphs_hi: [
        'उसी क्षण भयानक अपशकुन होने लगे: अग्निशाला में सियार बोलने लगे, गधे रेंकने लगे और बिना मेघ के बिजली गिरी। गांधारी और विदुर ने धृतराष्ट्र को चेतावनी दी कि यह कुलनाश का संकेत है।',
        'भयभीत धृतराष्ट्र ने द्रौपदी को तीन वरदान मांगने को कहा। द्रौपदी ने पहले वरदान से युधिष्ठिर को और दूसरे से बाकी चारों भाइयों को अस्त्र-शस्त्र सहित दासता से मुक्त करा लिया। तीसरा वरदान यह कहकर अस्वीकार कर दिया कि क्षत्राणी केवल मर्यादा में मांगती है, बाकी मेरे पति अपने पराक्रम से अर्जित करेंगे।',
        'दुर्योधन ने फिर पिता को बहकाकर अंतिम द्यूत की बाजी रखवाई: 12 वर्ष का वनवास और 1 वर्ष का अज्ञातवास। शकुनि ने फिर छल से पांसे जीते। पांडव मृगचर्म धारण कर हस्तिनापुर छोड़कर वन की ओर प्रस्थान कर गए।'
      ],
      dialogueQuote: '"In the fourteenth year, we shall return—not to play with dice, but to cast the arrows of death upon this hall!"',
      dialogueQuote_te: '"పద్నాలుగో ఏట మేము తిరిగి వస్తాము—పాచికలాడటానికి కాదు, ఈ సభపై మృత్యు బాణాలు సంధించడానికి!"',
      dialogueQuote_hi: '"चौदहवें वर्ष हम लौटेंगे—पांसे फेंकने नहीं, अपितु तुम्हारे पापों का समूल नाश करने!"',
      speaker: 'Arjuna’s vow as the Pandavas departed',
      speaker_te: 'నిష్క్రమిస్తూ అర్జునుని హెచ్చరిక',
      speaker_hi: 'हस्तिनापुर छोड़ते हुए अर्जुन की अंतिम चेतावनी',
      imageUrl: '/assets/wallpapers/draupadi.jpg',
      imageCaption: 'The five Pandavas and Draupadi clad in ascetic garments departing into the dense wilderness.',
      imageCaption_te: 'నారచీరలు ధరించి దట్టమైన అరణ్యంలోకి బయలుదేరిన పాండవులు, ద్రౌపది.',
      imageCaption_hi: 'मृगचर्म धारण कर वनवास हेतु हस्तिनापुर से प्रस्थान करते पांडव और द्रौपदी।'
    }
  ],

  partSummary: {
    majorEvents: [
      'Duryodhana is consumed by jealousy after the Rajasuya and schemes with Shakuni',
      'The formal invitation to a friendly dice match in Hastinapur',
      'Yudhishthira stakes his wealth, treasures, and army against Shakuni\'s loaded dice',
      'Staking and losing his four brothers, himself, and Empress Draupadi',
      'Dushasana drags the menstruating Draupadi by her hair into the public sabha',
      'Draupadi interrogates the assembly on whether a pawned slave could stake his wife',
      'Dushasana attempts to disrobe Draupadi; Krishna manifests as the infinite Akshaya Vastra',
      'Bhima roars terrible vows to drink Dushasana\'s heart blood and smash Duryodhana\'s thighs',
      'Terrified by bad omens, Dhritarashtra grants Draupadi boons that liberate the Pandavas',
      'The second game of dice: Pandavas are exiled for twelve years plus one year incognito'
    ],
    majorEvents_te: [
      'ఇంద్రప్రస్థ వైభవాన్ని చూసి ఈర్ష్యతో రగిలిన దుర్యోధనుడు, శకునితో కుట్ర',
      'హస్తినాపురంలో మాయా జూదానికి పిలుపు',
      'ధర్మరాజు తన సంపదను, రాజ్యాన్ని, తమ్ముళ్ళను, తన్ను తాను, చివరకు ద్రౌపదిని పందెంగా పెట్టి ఓడిపోవడం',
      'ఏకవస్త్రంతో ఉన్న ద్రౌపదిని కొప్పు పట్టుకుని సభలోకి ఈడ్చుకొచ్చిన దుశ్శాసనుడు',
      'సభలో ద్రౌపది వేసిన ధర్మ సందేహం & పెద్దల నిస్సహాయ మౌనం',
      'దుశ్శాసనుని వస్త్రాపహరణ ప్రయత్నం & శ్రీకృష్ణుని అక్షయ వస్త్ర కరుణ',
      'దుశ్శాసనుని రొమ్ము చీల్చి రక్తం తాగుతానని, దుర్యోధనుని తొడలు విరగ్గొడతానని భీముని శపథాలు',
      'దుశ్శకునాలతో భయపడిన ధృతరాష్ట్రుడు ద్రౌపది వరాల ద్వారా పాండవులను విడిపించడం',
      'రెండోసారి జూదం & 12 ఏళ్ళ వనవాసం, 1 ఏడు అజ్ఞాతవాసానికి బయలుదేరిన పాండవులు'
    ],
    majorEvents_hi: [
      'राजसूय के वैभव से ईर्ष्यालु दुर्योधन और शकुनि का षड्यंत्र',
      'हस्तिनापुर में द्यूत-क्रीड़ा का औपचारिक निमंत्रण',
      'शकुनि के कपटी पांसों से युधिष्ठिर द्वारा सब कुछ हारना',
      'चारों भाइयों, स्वयं को और महारानी द्रौपदी को दांव पर लगाना',
      'दुःशासन द्वारा रजस्वला द्रौपदी के केश खींचकर भरी सभा में लाना',
      'द्रौपदी का भीष्म-द्रोण से धर्म का तीखा प्रश्न और बड़ों का मौन',
      'चीरहरण का प्रयास और श्रीकृष्ण द्वारा अखंड चीर प्रदान कर मर्यादा रक्षा',
      'भीम द्वारा दुःशासन की छाती चीरने और दुर्योधन की जंघा तोड़ने की भीषण प्रतिज्ञाएँ',
      'अपशकुनों से डरकर धृतराष्ट्र का वरदान देना और पांडवों की मुक्ति',
      'पुनः द्यूत और 12 वर्ष वनवास तथा 1 वर्ष अज्ञातवास का दंड'
    ],
    importantCharacters: [
      'Draupadi - Indomitable empress who challenged the moral authority of the Kuru dynasty',
      'Lord Sri Krishna - The unseen savior who answered the call of unreserved faith',
      'Bhima - Fierce avenger whose oaths sealed the fate of the Kaurava leaders',
      'Shakuni - Master of psychological warfare and loaded ivory dice',
      'Yudhishthira - Righteous king whose tragic addiction to gambling brought cataclysm',
      'Bhishma - Tragic patriarch crippled by obedience to the throne'
    ],
    importantCharacters_te: [
      'ద్రౌపది - కురు సభను నిలదీసిన ధర్మ సామ్రాజ్ఞి',
      'శ్రీకృష్ణుడు - అక్షయ వస్త్ర ప్రదాత, దీనరక్షకుడు',
      'భీమసేనుడు - రౌద్ర శపథాలు చేసిన ప్రళయ మూర్తి',
      'శకుని - కపట జూదగాడు',
      'ధర్మరాజు - వ్యసనంతో సర్వస్వాన్నీ కోల్పోయిన విషాద చక్రవర్తి',
      'భీష్ముడు - సింహాసనానికి బందీ అయిన పితామహుడు'
    ],
    importantCharacters_hi: [
      'द्रौपदी - आत्मसम्मान और धर्म की साक्षात विद्रोहिणी',
      'भगवान श्रीकृष्ण - अखंड चीरदाता और एकमात्र रक्षक',
      'भीमसेन - कुरुवंश के विनाश की प्रतिज्ञा लेने वाले महाबली',
      'शकुनि - कपटी पांसों का मायावी',
      'युधिष्ठिर - द्यूत व्यसन में फंसे धर्मराज',
      'भीष्म - राजसिंहासन के बंधनों में जकड़े मूक पितामह'
    ],
    importantRelationships: [
      'Draupadi & Sri Krishna: The supreme ideal of unconditional surrender (Sharanagati) and divine rescue',
      'Bhima & Kauravas: The unquenchable thirst for blood vengeance that will culminate at Kurukshetra',
      'Kuru Elders & The Throne: The moral failure of prioritizing institutional loyalty over ethical duty'
    ],
    importantRelationships_te: [
      'ద్రౌపది & శ్రీకృష్ణుడు: భక్తి, సంపూర్ణ శరణాగతి మరియు దైవ రక్షణల పరాకాష్ట',
      'భీముడు & కౌరవులు: కురుక్షేత్రంలో తీరబోయే రక్త ప్రతీకార బంధం',
      'కురు వృద్ధులు & సింహాసనం: ధర్మాన్ని విడిచి అధికారానికి దాసోహమవడం వల్ల వచ్చిన పతనం'
    ],
    importantRelationships_hi: [
      'द्रौपदी और श्रीकृष्ण - अनन्य शरणागति और गोविंद की कृपा',
      'भीम और कौरव - प्रतिशोध की वह ज्वाला जो कुरुक्षेत्र में भड़की',
      'भीष्म और राजसिंहासन - धर्म से ऊपर राज्य की निष्ठा रखने का दुष्परिणाम'
    ],
    majorDecisions: [
      'Yudhishthira accepting the challenge to roll dice despite knowing the odds',
      'Staking Draupadi when all wealth and freedom were lost',
      'Draupadi appealing to Krishna only after giving up all physical and human resistance',
      'Bhima taking irrevocable sacred oaths in the presence of the gods'
    ],
    majorDecisions_te: [
      'క్షత్రియ మర్యాద పేరుతో జూదానికి అంగీకరించిన ధర్మరాజు తప్పిదం',
      'తనకు అధికారం లేకపోయినా ద్రౌపదిని పందెంగా పెట్టడం',
      'మానవ ప్రయత్నాలన్నీ విఫలమయ్యాక భగవంతునికి సంపూర్ణ శరణాగతి చేసిన ద్రౌపది భక్తి',
      'సభ సాక్షిగా రౌద్ర శపథాలు చేసిన భీమసేనుని సంకల్పం'
    ],
    majorDecisions_hi: [
      'द्यूत के निमंत्रण को मर्यादा मानकर स्वीकार करना',
      'विवेक खोकर महारानी द्रौपदी को दांव पर लगाना',
      'संसार से निराश होकर श्रीकृष्ण के चरणों में अनन्य समर्पण',
      'भरी सभा में भीम द्वारा कुरुवंश के विनाश की प्रतिज्ञा'
    ],
    consequences: [
      'The destruction of the Kaurava dynasty becomes karmically unavoidable',
      'The Pandavas spend thirteen grueling years preparing their spirit and arsenal for the ultimate war',
      'The golden glory of Hastinapur is forever tainted by the crime against Draupadi'
    ],
    consequences_te: [
      'కౌరవ వంశ సంహారం అనివార్యంగా లిఖించబడటం',
      'పాండవులు పదమూడేళ్ళ పాటు అస్త్రాలను, తపశ్శక్తిని సమకూర్చుకోవడం',
      'హస్తినాపుర సామ్రాజ్య పతనానికి ద్యూత సభ నాంది కావడం'
    ],
    consequences_hi: [
      'कौरवों के समूल विनाश की नियति का निश्चित होना',
      'पांडवों का 13 वर्ष तक तप, अस्त्र-संग्रह और शक्ति-संचय करना',
      'हस्तिनापुर के वैभव पर कुलवधू के अपमान का अमिट कलंक'
    ]
  },

  slides: [
    {
      slideNumber: 1,
      title: 'The Sinister Game',
      title_te: 'మాయాజూద విలయం',
      title_hi: 'द्यूत का विनाशकारी खेल',
      content: 'Shakuni uses loaded dice to strip Yudhishthira of his kingdom, wealth, brothers, and freedom.',
      content_te: 'శకుని మాయా పాచికలతో ధర్మరాజు తన రాజ్యం, సంపద, సోదరులు, స్వేచ్ఛను కోల్పోయాడు.',
      content_hi: 'शकुनि के कपटी पांसों ने युधिष्ठिर का राज्य, धन, भाई और स्वतंत्रता सब छीन लिया।',
      moralLesson: 'Gambling and greed cloud the sharpest intellect, dragging even virtuous men into total ruin.',
      moralLesson_te: 'జూదం మరియు వ్యసనం ఎంతటి జ్ఞానుల వివేకాన్నైనా నాశనం చేసి సర్వనాశనానికి దారితీస్తాయి.',
      moralLesson_hi: 'जुआ और व्यसन विवेकवान मनुष्य की बुद्धि भी हर लेते हैं और सर्वनाश लाते हैं।'
    },
    {
      slideNumber: 2,
      title: 'The Grace of Govinda',
      title_te: 'గోవిందుని అక్షయ కరుణ',
      title_hi: 'गोविंद की अखंड कृपा',
      content: 'When Dushasana tries to strip Draupadi, her pure prayer to Krishna turns her sari into an endless mountain of cloth.',
      content_te: 'దుశ్శాసనుడు ద్రౌపదిని వివస్త్రను చేయబోగా, శ్రీకృష్ణునికి చేసిన ప్రార్థనతో చీర అంతులేకుండా పెరిగిపోయింది.',
      content_hi: 'द्रौपदी के अनन्य पुकार पर श्रीकृष्ण ने अखंड चीर प्रदान कर उसकी मर्यादा की रक्षा की।',
      moralLesson: 'When human power fails and the world abandons the righteous, complete surrender to God is the ultimate shield.',
      moralLesson_te: 'లోకమంతా వదిలేసిన వేళ భగవంతునికి చేసే సంపూర్ణ శరణాగతే అసలైన రక్ష.',
      moralLesson_hi: 'जब संसार साथ छोड़ दे, तब परमात्मा की अनन्य शरण ही सबसे बड़ा संबल होती है।'
    },
    {
      slideNumber: 3,
      title: 'The Oath of Justice',
      title_te: 'ధర్మ ప్రతీకార శపథం',
      title_hi: 'न्याय की भीषण प्रतिज्ञा',
      content: 'Bhima vows to drink Dushasana\'s blood and break Duryodhana\'s thigh, ensuring that adharma will be pulverized.',
      content_te: 'దుశ్శాసనుని రక్తం తాగి, దుర్యోధనుని తొడలు విరగ్గొడతానని భీముడు చేసిన శపథం ధర్మ పునరుద్ధరణకు సంకేతం.',
      content_hi: 'भीम ने दुःशासन की छाती चीरने और दुर्योधन की जंघा तोड़ने की प्रतिज्ञा कर अधर्म के अंत की नींव रखी।',
      moralLesson: 'Silence in the face of injustice invites devastation; justice delayed is vengeance amplified.',
      moralLesson_te: 'అన్యాయం జరుగుతున్నప్పుడు మౌనం వహిస్తే సర్వనాశనం తప్పదు; ధర్మ రక్షణకు ప్రతీకారం అనివార్యం.',
      moralLesson_hi: 'अन्याय पर मौन रहने वालों का विनाश निश्चित होता है; अधर्म का दंड कभी नहीं टलता।'
    }
  ]
};
