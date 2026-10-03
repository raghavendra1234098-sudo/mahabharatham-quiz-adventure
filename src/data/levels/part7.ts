import { Level } from '../../types/game';

export const PART_7_LEVELS: Level[] = [
  // Level 61
  {
    levelNumber: 61,
    partNumber: 7,
    title: 'The Unmasking & Royal Wedding',
    title_te: 'గుర్తింపు ప్రకటన & ఉత్తర-అభిమన్యుల వివాహం',
    title_hi: 'पहचान का प्रकटीकरण और उत्तरा-परिणय',
    subtitle: 'The 13th Year Expired & Princess Uttara',
    subtitle_te: 'ముగిసిన అజ్ఞాతవాసం & శుభకార్యం',
    subtitle_hi: 'अज्ञातवास की पूर्णता और विराट की कृतज्ञता',
    questions: [
      {
        id: 'q61-1',
        type: 'mcq',
        prompt: 'Why did Arjuna politely decline King Virata’s offer to marry Princess Uttara himself, proposing instead that she wed his son Abhimanyu?',
        prompt_te: 'విరాట రాజు తన కుమార్తె ఉత్తరను వివాహం చేసుకోమని అర్జునుడిని కోరినప్పుడు, అర్జునుడు ఎందుకు నిరాకరించి తన కుమారుడైన అభిమన్యుడితో వివాహం చేయించాడు?',
        prompt_hi: 'राजा विराट द्वारा अपनी पुत्री उत्तरा का विवाह स्वयं अर्जुन से करने के प्रस्ताव को अर्जुन ने अस्वीकार कर अभिमन्यु से कराने का निर्णय क्यों लिया?',
        options: [
          'Because he had taught her dance as a preceptor, viewing her purely with the sacred affection of a father for his daughter',
          'He was already too old',
          'He wanted to return to Hastinapur immediately',
          'Princess Uttara refused to marry him'
        ],
        options_te: [
          'ఆమెకు నాట్యం నేర్పిన గురువుగా ఆమెను తన సొంత కూతురితో సమానంగా భావించినందువల్ల',
          'అర్జునుడికి వయసు పైబడింది',
          'వెంటనే హస్తినాపురానికి వెళ్ళాలనుకున్నాడు',
          'ఉత్తర అర్జునుడిని తిరస్కరించింది'
        ],
        options_hi: [
          'क्योंकि उन्होंने उत्तरा को नृत्य सिखाया था और गुरु होने के नाते वे उसे अपनी पुत्री के समान मानते थे',
          'अर्जुन अब विवाह नहीं करना चाहते थे',
          'वे तुरंत इंद्रप्रस्थ लौटना चाहते थे',
          'उत्तरा ने अर्जुन से विवाह करने से मना कर दिया था'
        ],
        correctIndex: 0,
        learnMore: 'Arjuna said: "I lived with her in privacy; marrying her might cause people to gossip. As my daughter-in-law, all doubts will be dispelled."',
        learnMore_te: 'గురు-శిష్యుల పవిత్ర బంధంపై ఎవరూ వేలెత్తి చూపకూడదని అర్జునుడు ఆమెను తన కోడలిగా స్వీకరించాడు.',
        learnMore_hi: 'अर्जुन ने मर्यादा की रक्षा करते हुए कहा कि गुरु-शिष्या का संबंध पिता-पुत्री तुल्य होता है, अतः उत्तरा उनकी पुत्रवधू बनेगी।',
        xpReward: 10
      },
      {
        id: 'q61-2',
        type: 'true_false',
        prompt: 'The wedding of Princess Uttara and heroic Abhimanyu in Upaplavya brought together the kings of Panchala, Matsya, Chedi, and the Yadavas of Dvaraka.',
        prompt_te: 'ఉపప్లావ్యంలో జరిగిన ఉత్తర-అభిమన్యుల వివాహం పాంచాల, మత్స్య, చేది మరియు ద్వారక యాదవుల మహా కూటమికి వేదికగా నిలిచింది.',
        prompt_hi: 'उपप्लव्य में संपन्न हुए उत्तरा और अभिमन्यु के विवाह ने पांचाल, मत्स्य, चेदि और द्वारका के यादवों को एक शक्तिशाली महासंघ में बांध दिया।',
        correctAnswer: true,
        learnMore: 'Kings and princes showered gold and blessings upon young Abhimanyu and Uttara, setting the stage for future royal succession.',
        learnMore_te: 'ఈ దంపతులకు పుట్టబోయే పరీక్షిత్తే భవిష్యత్తులో కురు సామ్రాజ్యానికి చక్రవర్తి కాబోతున్నాడు.',
        learnMore_hi: 'इसी दिव्य युगल के पुत्र परीक्षित भविष्य में महाभारत युद्ध के उपरांत भारतवर्ष के चक्रवर्ती सम्राट बने।',
        xpReward: 10
      },
      {
        id: 'q61-3',
        type: 'riddle',
        prompt: 'The daughter of King Virata and Queen Sudeshna, who became the beloved bride of Abhimanyu and mother of Emperor Parikshit. Who am I?',
        prompt_te: 'విరాట రాజు కుమార్తె, వీర అభిమన్యుడి భార్య మరియు పరీక్షిన్మహారాజుకు జన్మనిచ్చిన రాకుమారిని నేను. నేను ఎవరిని?',
        prompt_hi: 'राजा विराट की पुत्री, वीर अभिमन्यु की धर्मपत्नी और कुरु वंश के अंतिम दीपक परीक्षित की माता। मैं कौन हूँ?',
        hint: 'Princess of the Matsyas.',
        hint_te: 'మత్స్య దేశపు రాజకుమారి.',
        hint_hi: 'मत्स्य राजकुमारी।',
        answer: 'Princess Uttara',
        answer_te: 'ఉత్తరా రాకుమారి',
        answer_hi: 'राजकुमारी उत्तरा',
        options: ['Princess Uttara', 'Princess Subhadra', 'Princess Draupadi', 'Princess Chitrangada'],
        options_te: ['ఉత్తరా రాకుమారి', 'సుభద్రా దేవి', 'ద్రౌపది దేవి', 'చిత్రాంగద'],
        options_hi: ['राजकुमारी उत्तरा', 'सुभद्रा', 'द्रौपदी', 'चित्रांगदा'],
        learnMore: 'Princess Uttara bore her immense tragedies during the Kurukshetra war with pure devotion and courage.',
        learnMore_te: 'యుద్ధంలో అభిమన్యుడిని కోల్పోయినా, ఉత్తర తన గర్భంలోని బిడ్డను శ్రీకృష్ణుడి అనుగ్రహంతో కాపాడుకుంది.',
        learnMore_hi: 'उत्तरा ने युद्ध के घोर संकट में श्रीकृष्ण की कृपा से अपने गर्भस्थ शिशु की रक्षा की।',
        xpReward: 20
      }
    ]
  },

  // Level 62
  {
    levelNumber: 62,
    partNumber: 7,
    title: 'The Choice in Dvaraka',
    title_te: 'ద్వారకలో ఎంపిక: సైన్యమా? కృష్ణుడా?',
    title_hi: 'द्वारका में चुनाव: सेना या निहत्थे कृष्ण',
    subtitle: 'Narayani Sena vs The Unarmed Lord',
    subtitle_te: 'నారాయణీ సేన వర్సెస్ నిరాయుధ పరమాత్ముడు',
    subtitle_hi: 'दुर्योधन का अहंकार और अर्जुन का समर्पण',
    questions: [
      {
        id: 'q62-1',
        type: 'mcq',
        prompt: 'When both arrived in Dvaraka seeking Krishna’s alliance, where did proud Duryodhana and humble Arjuna choose to sit while Krishna slept?',
        prompt_te: 'శ్రీకృష్ణుడి సహాయం కోరి ద్వారకకు వచ్చినప్పుడు, ఆయన నిద్రిస్తుండగా దుర్యోధనుడు మరియు అర్జునుడు ఎక్కడ కూర్చున్నారు?',
        prompt_hi: 'द्वारका में श्रीकृष्ण जब विश्राम कर रहे थे, तब अहंकारी दुर्योधन और विनम्र अर्जुन कहां-कहां बैठे?',
        options: [
          'Duryodhana sat haughtily at Krishna’s head, while Arjuna stood with folded hands at Krishna’s lotus feet',
          'Both sat on golden thrones beside the couch',
          'Arjuna sat outside the palace',
          'Duryodhana slept beside Krishna'
        ],
        options_te: [
          'దుర్యోధనుడు గర్వంతో కృష్ణుడి తలవైపు కూర్చోగా, అర్జునుడు చేతులు జోడించి ఆయన పాదాల వద్ద నిలబడ్డాడు',
          'ఇద్దరూ బంగారు సింహాసనాలపై కూర్చున్నారు',
          'అర్జునుడు అంతఃపురం బయటే ఉండిపోయాడు',
          'దుర్యోధనుడు కృష్ణుడి పక్కనే పడుకున్నాడు'
        ],
        options_hi: [
          'दुर्योधन अहंकारवश सिरहाने रखे ऊंचे आसन पर बैठ गया, जबकि अर्जुन हाथ जोड़कर प्रभु के चरण कमलों के पास खड़े रहे',
          'दोनों ने बगल में रखे आसनों पर स्थान लिया',
          'अर्जुन महल के बाहर खड़े रहे',
          'दुर्योधन भी कृष्ण के साथ सो गया'
        ],
        correctIndex: 0,
        learnMore: 'Waking, Krishna’s eyes naturally opened upon Arjuna at His feet first; though Duryodhana argued he arrived first, Krishna granted Arjuna the first choice as the younger and first-seen.',
        learnMore_te: 'కళ్ళు తెరవగానే కృష్ణుడి దృష్టి పాదాల వద్ద ఉన్న అర్జునుడిపై పడింది; మొదట చూసినందువల్ల అర్జునుడికే మొదటి ఎంపిక అవకాశం ఇచ్చాడు.',
        learnMore_hi: 'नेत्र खुलते ही श्रीकृष्ण की दृष्टि चरणों में खड़े अर्जुन पर पड़ी; पहले देखने के कारण उन्होंने अर्जुन को पहला अवसर दिया।',
        xpReward: 10
      },
      {
        id: 'q62-2',
        type: 'true_false',
        prompt: 'Duryodhana eagerly selected the million-strong invincible Narayani Sena army, while Arjuna with tears of devotion chose an unarmed Lord Krishna alone.',
        prompt_te: 'దుర్యోధనుడు లక్షలాదిమందితో కూడిన నారాయణీ సేనను కోరుకోగా, అర్జునుడు ఆయుధం పట్టని శ్రీకృష్ణుడిని మాత్రమే భక్తితో ఎంచుకున్నాడు.',
        prompt_hi: 'दुर्योधन ने हर्षित होकर अजेय नारायणी सेना को चुना, जबकि अर्जुन ने अश्रुपूर्ण नेत्रों से केवल निहत्थे श्रीकृष्ण का वरण किया।',
        correctAnswer: true,
        learnMore: 'Arjuna said: "Lord, with You beside me holding the reins, victory is already sealed. Let him take the armies of the world."',
        learnMore_te: '"మీరు నా రథసారథిగా ఉంటే చాలు, సమస్త లోకాలను జయించగలను" అని అర్జునుడు కృష్ణుడిని వేడుకున్నాడు.',
        learnMore_hi: 'अर्जुन ने कहा: "प्रभु! मुझे सेना की नहीं, आपकी आवश्यकता है; आप केवल मेरे रथ की बागडोर संभाल लें।"',
        xpReward: 10
      },
      {
        id: 'q62-3',
        type: 'riddle',
        prompt: 'The million-strong fearless warrior army of Dvaraka gifted by Krishna to Duryodhana, capable of battling like raging lions. What army was this?',
        prompt_te: 'దుర్యోధనుడికి ఇవ్వబడిన ద్వారక యొక్క పది లక్షల అజేయ మహా సైన్యం ఏది?',
        prompt_hi: 'श्रीकृष्ण द्वारा दुर्योधन को सौंपी गई दस लाख अजेय और निष्ठावान योद्धाओं की सेना। वह कौन सी सेना थी?',
        hint: 'Named after Narayana.',
        hint_te: 'నారాయణీ సేన.',
        hint_hi: 'नारायणी सेना।',
        answer: 'The Narayani Sena',
        answer_te: 'నారాయణీ సేన',
        answer_hi: 'नारायणी सेना',
        options: ['The Narayani Sena', 'The Akshauhini of Magadha', 'The Gandhara Cavalry', 'The Panchala Guard'],
        options_te: ['నారాయణీ సేన', 'మగధ అక్షౌహిణి', 'గాంధార అశ్వదళం', 'పాంచాల రక్షకదళం'],
        options_hi: ['नारायणी सेना', 'मगध की सेना', 'गांधार अश्वारोही', 'पांचाल रक्षक'],
        learnMore: 'Duryodhana left Dvaraka boasting that he had outsmarted Arjuna, not realizing that where Krishna stands, victory is certain.',
        learnMore_te: 'శ్రీకృష్ణుడిని వదిలేసి సైన్యాన్ని తీసుకుని దుర్యోధనుడు తన అజ్ఞానాన్ని చాటుకున్నాడు.',
        learnMore_hi: 'दुर्योधन सेना पाकर फूला न समाया, किंतु वह भूल गया कि "यतो कृष्णस्ततो जयः" (जहां कृष्ण हैं, वहीं विजय है)।',
        xpReward: 20
      }
    ]
  },

  // Level 63
  {
    levelNumber: 63,
    partNumber: 7,
    title: 'Mobilizing the Armies of Aryavarta',
    title_te: 'ఆర్యావర్త సైన్య సమీకరణ',
    title_hi: 'अक्षौहिणी सेनाओं का एकत्रीकरण',
    subtitle: 'Seven Divisions vs Eleven Divisions',
    subtitle_te: 'పాండవుల 7 అక్షౌహిణులు vs కౌరవుల 11 అక్షౌహిణులు',
    subtitle_hi: 'पाण्डवों की ७ और कौरवों की ११ अक्षौहिणी',
    questions: [
      {
        id: 'q63-1',
        type: 'mcq',
        prompt: 'How many Akshauhini military divisions did the Pandavas and Kauravas gather respectively for the Great War?',
        prompt_te: 'కురుక్షేత్ర మహాసంగ్రామానికి పాండవులు మరియు కౌరవులు వరుసగా ఎన్ని అక్షౌహిణుల సైన్యాన్ని సమకూర్చారు?',
        prompt_hi: 'कुरुक्षेत्र महायुद्ध हेतु पाण्डवों और कौरवों ने क्रमशः कितनी-कितनी अक्षौहिणी सेनाएं एकत्रित की थीं?',
        options: [
          'Pandavas: 7 Akshauhinis | Kauravas: 11 Akshauhinis (Total 18 Akshauhinis)',
          'Pandavas: 10 | Kauravas: 10',
          'Pandavas: 5 | Kauravas: 15',
          'Pandavas: 9 | Kauravas: 9'
        ],
        options_te: [
          'పాండవులు: 7 అక్షౌహిణులు | కౌరవులు: 11 అక్షౌహిణులు (మొత్తం 18 అక్షౌహిణులు)',
          'పాండవులు: 10 | కౌరవులు: 10',
          'పాండవులు: 5 | కౌరవులు: 15',
          'పాండవులు: 9 | కౌరవులు: 9'
        ],
        options_hi: [
          'पाण्डव: ७ अक्षौहिणी | कौरव: ११ अक्षौहिणी (कुल १८ अक्षौहिणी सेना)',
          'पाण्डव: १० | कौरव: १०',
          'पाण्डव: ५ | कौरव: १५',
          'पाण्डव: ९ | कौरव: ९'
        ],
        correctIndex: 0,
        learnMore: 'An Akshauhini division consisted of 21,870 chariots, 21,870 war elephants, 65,610 cavalry horses, and 109,350 foot infantry.',
        learnMore_te: 'ఒక అక్షౌహిణిలో 21,870 రథాలు, 21,870 ఏనుగులు, 65,610 గుర్రాలు మరియు 1,09,350 మంది పదాతి సైనికులు ఉంటారు.',
        learnMore_hi: 'एक अक्षौहिणी में २१,८७० रथ, २१,८७० हाथी, ६५,६१० अश्व और १,०९,३५० पैदल सैनिक होते थे।',
        xpReward: 10
      },
      {
        id: 'q63-2',
        type: 'true_false',
        prompt: 'King Shalya of Madra (maternal uncle of Nakula and Sahadeva) was tricked by Duryodhana’s lavish hospitality into joining the Kaurava side.',
        prompt_te: 'నకుల-సహదేవుల మేనమామ అయిన మద్రరాజు శల్యుడికి మార్గమధ్యంలో ఘన సత్కారాలు చేసి మోసంతో దుర్యోధనుడు తన పక్షాన చేర్చుకున్నాడు.',
        prompt_hi: 'नकुल-सहदेव के सगे मामा मद्रराज शल्य को मार्ग में छलपूर्वक भव्य आतिथ्य देकर दुर्योधन ने अपनी ओर मिला लिया।',
        correctAnswer: true,
        learnMore: 'Bound by his promise to the host who served him, Shalya fought for Duryodhana, but promised Yudhishthira he would demoralize Karna as his charioteer.',
        learnMore_te: 'మాట ఇచ్చినందుకు కౌరవుల తరఫున పోరాడినా, కర్ణుడికి సారథిగా ఉండి అతని ఆత్మవిశ్వాసాన్ని దెబ్బతీస్తానని శల్యుడు ధర్మరాజుకు మాట ఇచ్చాడు.',
        learnMore_hi: 'वचनबद्ध होकर शल्य ने कौरवों का साथ दिया, किंतु युधिष्ठिर को वचन दिया कि वे सारथी बनकर कर्ण का तेज क्षीण करेंगे।',
        xpReward: 10
      },
      {
        id: 'q63-3',
        type: 'riddle',
        prompt: 'Ruler of Pragjyotisha who brought an Akshauhini of ferocious mountain warriors and the colossal elephant Supratika to aid Duryodhana. Who am I?',
        prompt_te: 'సుప్రతీకమనే మహా గజంతో, అపార సైన్యంతో వచ్చి కౌరవుల పక్షాన పోరాడిన ప్రాగ్జ్యోతిషపుర వృద్ధ రాజును నేను. నేను ఎవరిని?',
        prompt_hi: 'सुप्रतीक नामक विशाल युद्ध-गज पर सवार होकर कौरव पक्ष से लड़ने वाले प्राग्ज्योतिषपुर के प्रतापी राजा। मैं कौन हूँ?',
        hint: 'Master of the divine Vaishnavastra.',
        hint_te: 'వైష్ణవాస్త్ర సంపన్నుడు.',
        hint_hi: 'वैष्णवास्त्र के स्वामी राजा।',
        answer: 'King Bhagadatta',
        answer_te: 'భగదత్తుడు',
        answer_hi: 'राजा भगदत्त',
        options: ['King Bhagadatta', 'King Shalya', 'Jayadratha', 'Susharma'],
        options_te: ['భగదత్తుడు', 'శల్య మహారాజు', 'జయద్రథుడు', 'సుశర్మ'],
        options_hi: ['राजा भगदत्त', 'राजा शल्य', 'जयद्रथ', 'सुशर्मा'],
        learnMore: 'Bhagadatta was an ancient friend of King Pandu whose divine elephant struck terror into Pandava ranks on Day 12.',
        learnMore_te: 'భగదత్తుడి ఏనుగు దాడికి పాండవ సైన్యం కకావికలమైంది.',
        learnMore_hi: 'भगदत्त के हाथी सुप्रतीक के आक्रमण से पाण्डव सेना में हाहाकार मच गया था।',
        xpReward: 20
      }
    ]
  },

  // Level 64
  {
    levelNumber: 64,
    partNumber: 7,
    title: 'The Neutral Champions',
    title_te: 'తటస్థ వీరులు: బలరాముడు & రుక్మి',
    title_hi: 'तटस्थ शूरवीर: बलराम और रुक्मी',
    subtitle: 'Pilgrimage of Saraswati & The Arrogant Prince',
    subtitle_te: 'సరస్వతీ నదీ తీర్థయాత్ర & తిరస్కరించబడిన గర్వం',
    subtitle_hi: 'सरस्वती तीर्थयात्रा और रुक्मी का तिरस्कार',
    questions: [
      {
        id: 'q64-1',
        type: 'mcq',
        prompt: 'Why did Lord Balarama refuse to participate in the Kurukshetra war, departing instead on a 42-day holy pilgrimage along the Saraswati river?',
        prompt_te: 'కురుక్షేత్ర యుద్ధంలో పాల్గొనడానికి నిరాకరించి, సరస్వతీ నది తీరంలో 42 రోజుల తీర్థయాత్రకు బలరాముడు ఎందుకు వెళ్ళాడు?',
        prompt_hi: 'बलराम जी ने कुरुक्षेत्र युद्ध में किसी भी पक्ष से लड़ने से इनकार कर ४२ दिनों की सरस्वती तीर्थयात्रा पर जाने का निर्णय क्यों लिया?',
        options: [
          'Because he loved both Bhima and Duryodhana equally as his dear mace disciples and could not bear to see brothers slaughtering brothers',
          'He was injured in wrestling',
          'Krishna commanded him to stay away',
          'He had lost his celestial plow'
        ],
        options_te: [
          'భీముడు, దుర్యోధనుడు ఇద్దరూ తన ప్రియ గదా శిష్యులైనందున, సోదరులు ఒకరినొకరు చంపుకోవడం చూడలేక',
          'కుస్తీలో గాయపడ్డాడు',
          'కృష్ణుడు వెళ్ళవద్దని ఆజ్ఞాపించాడు',
          'తన నాగలి ఆయుధాన్ని పోగొట్టుకున్నాడు'
        ],
        options_hi: [
          'क्योंकि भीम और दुर्योधन दोनों उनके प्रिय गदा-शिष्य थे और वे कुल का संहार अपनी आंखों से नहीं देखना चाहते थे',
          'वे अस्वस्थ थे',
          'श्रीकृष्ण ने उन्हें निष्कासित किया था',
          'उनका हल खो गया था'
        ],
        correctIndex: 0,
        learnMore: 'Balarama stated: "I cannot witness the mutual slaughter of the Kurus; may victory belong to righteousness." He remained neutral throughout.',
        learnMore_te: 'కురువంశం అంతరించిపోతుంటే తాను ఏ పక్షం వహించలేనని బలరాముడు తటస్థంగా ఉండిపోయాడు.',
        learnMore_hi: 'बलराम ने कहा कि दोनों मेरे लिए समान हैं, अतः मैं तटस्थ रहकर तीर्थाटन करूंगा।',
        xpReward: 10
      },
      {
        id: 'q64-2',
        type: 'true_false',
        prompt: 'Prince Rukmi of Vidarbha was rejected by both Arjuna and Duryodhana because of his insufferable arrogance and boastful conditions.',
        prompt_te: 'విదర్భ రాజకుమారుడు రుక్మి అహంకారంతో మాట్లాడినందున, అర్జునుడు మరియు దుర్యోధనుడు ఇద్దరూ అతని సహాయాన్ని తిరస్కరించారు.',
        prompt_hi: 'विदर्भ के राजकुमार रुक्मी को उसके असहनीय अहंकार और डींग हांकने के कारण अर्जुन और दुर्योधन दोनों ने अपनी सेना में लेने से मना कर दिया।',
        correctAnswer: true,
        learnMore: 'Rukmi boasted he could win the war single-handedly for whichever side needed his charity; both leaders told him they did not require arrogant pride.',
        learnMore_te: 'తాను ఒక్కడే యుద్ధాన్ని గెలిపించగలనని ప్రగల్భాలు పలికిన రుక్మిని ఇరు పక్షాలు అవమానించి వెనక్కి పంపాయి.',
        learnMore_hi: 'रुक्मी ने अहंकार में कहा कि "मैं जिसे चाहूं जिता सकता हूँ", जिससे रुष्ट होकर दोनों पक्षों ने उसे ठुकरा दिया।',
        xpReward: 10
      },
      {
        id: 'q64-3',
        type: 'riddle',
        prompt: 'Wielder of the mighty celestial plow (Hala) and pestle (Musala), elder brother of Krishna and eternal teacher of the heavy mace. Who am I?',
        prompt_te: 'హలాయుధుడు, ముసలధారి; శ్రీకృష్ణుడి అన్నయ్య మరియు గదాయుద్ధంలో ఆదిగురువును నేను. నేను ఎవరిని?',
        prompt_hi: 'हल और मूसल धारण करने वाले, श्रीकृष्ण के अग्रज और गदा-युद्ध के परम गुरु। मैं कौन हूँ?',
        hint: 'Incarnation of Lord Sheshanaga.',
        hint_te: 'ఆదిశేషుడి అవతారం.',
        hint_hi: 'शेषनाग के अवतार।',
        answer: 'Lord Balarama (Haldhar)',
        answer_te: 'భగవాన్ బలరాముడు (హలధరుడు)',
        answer_hi: 'भगवान बलराम (हलधर)',
        options: ['Lord Balarama (Haldhar)', 'Lord Krishna', 'Satyaki', 'Kritavarma'],
        options_te: ['భగవాన్ బలరాముడు (హలధరుడు)', 'శ్రీకృష్ణుడు', 'సాత్యకి', 'కృతవర్మ'],
        options_hi: ['भगवान बलराम (हलधर)', 'श्रीकृष्ण', 'सात्यकि', 'कृतवर्मा'],
        learnMore: 'Balarama returned to Kurukshetra on the 18th day just in time to witness the final mace duel between his two prized students.',
        learnMore_te: '18వ రోజున భీమ-దుర్యోధనుల గదాయుద్ధాన్ని తిలకించడానికి బలరాముడు తిరిగి కురుక్షేత్రానికి చేరుకున్నాడు.',
        learnMore_hi: 'बलराम ठीक १८वें दिन लौटे ताकि भीम और दुर्योधन के अंतिम गदा-युद्ध के साक्षी बन सकें।',
        xpReward: 20
      }
    ]
  },

  // Level 65
  {
    levelNumber: 65,
    partNumber: 7,
    title: 'Sanjaya’s Embassy to Upaplavya',
    title_te: 'ఉపప్లావ్యానికి సంజయుడి రాయబారం',
    title_hi: 'संजय का शांति संदेश',
    subtitle: 'Dhritarashtra’s Hypocrisy & Yudhishthira’s Firmness',
    subtitle_te: 'ధృతరాష్ట్రుడి కపట నీతి & ధర్మరాజు స్థిరత్వం',
    subtitle_hi: 'धृतराष्ट्र का छल और धर्मराज का उत्तर',
    questions: [
      {
        id: 'q65-1',
        type: 'mcq',
        prompt: 'What hypocritical diplomatic message did King Dhritarashtra send through his trusted charioteer Sanjaya to the Pandavas at Upaplavya?',
        prompt_te: 'ఉపప్లావ్యంలో ఉన్న పాండవుల వద్దకు సంజయుడి ద్వారా ధృతరాష్ట్రుడు పంపిన కపట సందేశం ఏమిటి?',
        prompt_hi: 'धृतराष्ट्र ने संजय के माध्यम से पाण्डवों को क्या पाखंडपूर्ण शांति संदेश भेजा था?',
        options: [
          'Preaching asceticism and non-violence to Yudhishthira, advising him to live on alms rather than fight his cousins, without offering an inch of their kingdom back',
          'Offering half the kingdom with apologies',
          'Surrendering Hastinapur unconditionally',
          'Challenging the Pandavas to a chariot race'
        ],
        options_te: [
          'రాజ్యంలో ఒక్క అంగుళం కూడా ఇవ్వకుండా, యుద్ధం పాపమని, పాండవులు భిక్షాటన చేస్తూ బతకడం ఉత్తమమని శాంతి ప్రబోధం చేయడం',
          'క్షమాపణలు చెబుతూ సగం రాజ్యాన్ని ఇవ్వడం',
          'హస్తినాపురాన్ని బేషరతుగా అప్పగించడం',
          'రథాల పోటీకి సవాలు విసరడం'
        ],
        options_hi: [
          'एक इंच भूमि दिए बिना युधिष्ठिर को अहिंसा का उपदेश देना कि "भाइयों से लड़ने से अच्छा है कि भिक्षा मांगकर जी लो"',
          'आधा राज्य लौटाने की घोषणा',
          'बिना शर्त समर्पण',
          'रथ दौड़ की प्रतियोगिता का प्रस्ताव'
        ],
        correctIndex: 0,
        learnMore: 'Dhritarashtra wanted peace on terms that kept all stolen wealth with Duryodhana while expecting the Pandavas to practice saintly pacifism.',
        learnMore_te: 'దొంగిలించిన సంపదనంతా తామే ఉంచుకుని, పాండవులను సన్యాసులుగా జీవించమని ధృతరాష్ట్రుడు సలహా ఇచ్చాడు.',
        learnMore_hi: 'धृतराष्ट्र का उद्देश्य था कि दुर्योधन का अधिकार भी बना रहे और पाण्डव साधु बनकर वन में ही रहें।',
        xpReward: 10
      },
      {
        id: 'q65-2',
        type: 'true_false',
        prompt: 'Yudhishthira replied to Sanjaya: "We desire peace, but we are ready for war. Give us our rightful share of the realm, or meet us on the battlefield."',
        prompt_te: 'మేము శాంతిని కోరుకుంటున్నాం, కానీ యుద్ధానికి కూడా సిద్ధమే; మా న్యాయమైన వాటాను ఇవ్వండి లేదా యుద్ధభూమిలో ఎదుర్కోండి అని యుధిష్ఠిరుడు స్పష్టం చేశాడు.',
        prompt_hi: 'युधिष्ठिर ने संजय को उत्तर दिया: "हम शांति चाहते हैं किंतु युद्ध से भयभीत नहीं हैं; हमें हमारा न्यायोचित राज्य लौटा दो अथवा युद्ध करो।"',
        correctAnswer: true,
        learnMore: 'Yudhishthira showed that Kshatriya Dharma demands fighting for justice when righteous negotiation is mocked by thieves.',
        learnMore_te: 'ధర్మబద్ధమైన హక్కుల కోసం పోరాడటం క్షత్రియుడి కర్తవ్యమని ధర్మరాజు నిరూపించాడు.',
        learnMore_hi: 'युधिष्ठिर ने स्पष्ट किया कि न्यायोचित अधिकार के लिए युद्ध करना कायरतापूर्ण शांति से कहीं श्रेष्ठ है।',
        xpReward: 10
      },
      {
        id: 'q65-3',
        type: 'riddle',
        prompt: 'The devoted charioteer and counselor of Dhritarashtra, blessed later by Sage Vyasa with divine cosmic vision (Divya Drishti) to report the war. Who am I?',
        prompt_te: 'ధృతరాష్ట్రుడి ప్రియ సారథి, వ్యాస మహర్షి అనుగ్రహంతో దివ్యదృష్టిని పొంది యుద్ధ దృశ్యాలను కళ్ళకు కట్టినట్లు వివరించిన విజ్ఞానిని నేను. నేను ఎవరిని?',
        prompt_hi: 'धृतराष्ट्र के सारथी और परम हितैषी, जिन्हें वेदव्यास ने महाभारत युद्ध का सजीव विवरण सुनाने हेतु दिव्य दृष्टि दी। मैं कौन हूँ?',
        hint: 'Narrator of the Bhagavad Gita.',
        hint_te: 'భగవద్గీతను ధృతరాష్ట్రుడికి వినిపించినవాడు.',
        hint_hi: 'गीता का पहला श्रोता और वक्ता।',
        answer: 'Sanjaya (Gavalgana)',
        answer_te: 'సంజయుడు',
        answer_hi: 'संजय (गावलगणि)',
        options: ['Sanjaya (Gavalgana)', 'Vidura', 'Sumantra', 'Kripa'],
        options_te: ['సంజయుడు', 'విదురుడు', 'సుమంత్రుడు', 'కృపాచార్యుడు'],
        options_hi: ['संजय (गावलगणि)', 'विदुर', 'सुमंत', 'कृपाचार्य'],
        learnMore: 'Sanjaya bluntly warned Dhritarashtra that Arjuna’s arrows and Krishna’s intellect would incinerate the entire Kaurava host.',
        learnMore_te: 'శ్రీకృష్ణార్జునుల ముందు కౌరవ సైన్యం బూడిద కావడం ఖాయమని సంజయుడు ధృతరాష్ట్రుడికి నిక్కచ్చిగా చెప్పాడు.',
        learnMore_hi: 'संजय ने लौटकर धृतराष्ट्र को चेतावनी दी कि कृष्ण और अर्जुन के समक्ष कौरव सेना का विनाश निश्चित है।',
        xpReward: 20
      }
    ]
  },

  // Level 66
  {
    levelNumber: 66,
    partNumber: 7,
    title: 'The Envoy of Peace: Shanti-Doota',
    title_te: 'శాంతిదూత శ్రీకృష్ణుడు',
    title_hi: 'शांतिदूत श्रीकृष्ण का हस्तिनापुर आगमन',
    subtitle: 'Rejecting Duryodhana’s Feast & Vidura’s Simple Greens',
    subtitle_te: 'దుర్యోధనుడి విందు తిరస్కరణ & విదురుడి ఇంట ఆతిథ్యం',
    subtitle_hi: 'दुर्योधन के छप्पन भोग का त्याग और विदुर के शाक-भाजी',
    questions: [
      {
        id: 'q66-1',
        type: 'mcq',
        prompt: 'Why did Lord Krishna travel in person to Hastinapur as a peace ambassador despite knowing war was virtually inevitable?',
        prompt_te: 'యుద్ధం ఖాయమని తెలిసినప్పటికీ శ్రీకృష్ణుడు స్వయంగా హస్తినాపురానికి శాంతిదూతగా ఎందుకు వెళ్ళాడు?',
        prompt_hi: 'युद्ध की अनिवार्यता जानते हुए भी भगवान श्रीकृष्ण स्वयं हस्तिनापुर शांतिदूत बनकर क्यों पधारे?',
        options: [
          'To leave no stone unturned for peace, so future generations could never accuse the Pandavas of plunging Aryavarta into bloodshed',
          'To spy on Kaurava weapon stores',
          'To attend Duryodhana’s royal feast',
          'To crown himself king of Hastinapur'
        ],
        options_te: [
          'శాంతి స్థాపనకు అన్ని ప్రయత్నాలు చేశామని లోకానికి చూపించడానికి, పాండవులపై రక్తపాత నింద పడకుండా ఉండటానికి',
          'కౌరవుల ఆయుధాలను గూఢచర్యం చేయడానికి',
          'దుర్యోధనుడి విందును ఆరగించడానికి',
          'హస్తినాపుర సింహాసనాన్ని తానే చేపట్టడానికి'
        ],
        options_hi: [
          'शांति का अंतिम प्रयास करने ताकि इतिहास कभी पाण्डवों पर निरपराधों के संहार का लांछन न लगा सके',
          'कौरवों के शस्त्रागार की जासूसी करने',
          'दुर्योधन के भोज का आनंद लेने',
          'हस्तिनापुर की गद्दी हथियाने'
        ],
        correctIndex: 0,
        learnMore: 'Krishna stated: "I go to Hastinapur to deliver the Kuru race from the jaws of death, and fulfill My eternal duty to Dharma."',
        learnMore_te: 'కురువంశాన్ని మృత్యువు కోరల నుండి కాపాడటానికి తన వంతు ధర్మాన్ని నెరవేరుస్తున్నానని కృష్ణుడు చెప్పాడు.',
        learnMore_hi: 'श्रीकृष्ण ने कहा: "मैं हस्तिनापुर जाकर विनाश को टालने का अंतिम यत्न करूंगा ताकि संसार में धर्म की मर्यादा रहे।"',
        xpReward: 10
      },
      {
        id: 'q66-2',
        type: 'true_false',
        prompt: 'Krishna rejected Duryodhana’s extravagant royal banquet, famously stating: "One partakes of another’s food either when one loves the host, or when one is starving; you possess no love for Me, nor am I starving."',
        prompt_te: '"ప్రేమ ఉన్నచోట లేదా ఆకలితో అలమటించేటప్పుడు మాత్రమే ఒకరి ఇంట్లో భోజనం చేస్తారు; నీకు నాపై ప్రేమ లేదు, నాకు ఆకలి లేదు" అని కృష్ణుడు దుర్యోధనుడి విందును తిరస్కరించాడు.',
        prompt_hi: 'श्रीकृष्ण ने दुर्योधन के ५६ भोग ठुकराते हुए कहा: "भोजन या तो प्रेम से किया जाता है या भूख में; न तुम्हारे हृदय में मेरे प्रति प्रेम है, न मैं भूखा हूँ।"',
        correctAnswer: true,
        learnMore: 'Krishna chose instead to stay at Mahatma Vidura’s humble cottage, dining joyfully on simple green leaves (Shaaka) served with pure devotion.',
        learnMore_te: 'శ్రీకృష్ణుడు విదురుడి చిన్న గుడిసెకు వెళ్లి, ఆయన భక్తితో సమర్పించిన ఆకుకూరలను అమృతంలా ఆరగించాడు.',
        learnMore_hi: 'प्रभु ने विदुर जी के घर जाकर प्रेमपूर्वक उनके द्वारा परोसा गया सादा शाक-भाजी ग्रहण किया।',
        xpReward: 10
      },
      {
        id: 'q66-3',
        type: 'riddle',
        prompt: 'So lost in transcendental ecstasy upon seeing Lord Krishna at her door, I accidentally peeled bananas and fed Him the banana skins instead of the fruit, which He ate with relish! Who am I?',
        prompt_te: 'కృష్ణుడి దర్శన పరవశంలో అరటిపండు తొక్కలు తీసి, పండును పారేసి తొక్కలను భగవంతుడికి తినిపించిన పరమ భక్తురాలు ఎవరు?',
        prompt_hi: 'श्रीकृष्ण के साक्षात दर्शन से भाव-विभोर होकर फल फेंककर केले के छिलके ही प्रभु को खिलाने वाली विदुराणी। मैं कौन हूँ?',
        hint: 'The pious wife of Mahatma Vidura.',
        hint_te: 'విదురుడి ధర్మపత్ని (సులభ).',
        hint_hi: 'महात्मा विदुर की धर्मपत्नी।',
        answer: 'Vidurani (Sulabha)',
        answer_te: 'విదురాని (సులభ)',
        answer_hi: 'विदुराणी (सुलभा)',
        options: ['Vidurani (Sulabha)', 'Kunti', 'Gandhari', 'Draupadi'],
        options_te: ['విదురాని (సులభ)', 'కుంతీ దేవి', 'గాంధారి దేవి', 'ద్రౌపది దేవి'],
        options_hi: ['विदुराणी (सुलभा)', 'माता कुन्ती', 'गांधारी', 'द्रौपदी'],
        learnMore: 'Lord Krishna accepts whatever is offered with pure love: "Patram Pushpam Phalam Toyam Yo Me Bhaktya Prayacchati."',
        learnMore_te: 'భక్తితో సమర్పించిన ఆకునైనా, పువ్వునైనా, పండైనా భగవంతుడు పరమానందంతో స్వీకరిస్తాడు.',
        learnMore_hi: 'प्रभु भाव के भूखे हैं; प्रेमपूर्वक दिए गए छिलके भी उनके लिए अमृत बन जाते हैं।',
        xpReward: 20
      }
    ]
  },

  // Level 67
  {
    levelNumber: 67,
    partNumber: 7,
    title: 'The Offer of Five Villages',
    title_te: 'ఐదు గ్రామాల ప్రతిపాదన',
    title_hi: 'केवल पांच गांवों की मांग',
    subtitle: 'Needlepoint of Soil Refused',
    subtitle_te: 'సూది మోపనంత భూమి కూడా ఇవ్వనన్న దురహంకారం',
    subtitle_hi: 'सुई की नोक बराबर भूमि भी नहीं दूंगा',
    questions: [
      {
        id: 'q67-1',
        type: 'mcq',
        prompt: 'What minimalist compromise did Lord Krishna propose to the Kuru assembly to avert the slaughter of eighteen Akshauhinis of warriors?',
        prompt_te: 'కోట్లాదిమంది సైనికుల ప్రాణాలను కాపాడటానికి శ్రీకృష్ణుడు కౌరవ సభలో ప్రతిపాదించిన అతి చిన్న రాజీ ఏమిటి?',
        prompt_hi: 'लाखों योद्धाओं के संहार को टालने के लिए श्रीकृष्ण ने राजसभा में समझौते हेतु न्यूनतम क्या मांग रखी थी?',
        options: [
          'Grant the five Pandava brothers just five small villages to rule in peace',
          'Surrender half the golden treasury',
          'Banish Shakuni to Gandhara',
          'Make Karna the prime minister'
        ],
        options_te: [
          'ఐదుగురు పాండవ సోదరులకు కేవలం ఐదు చిన్న గ్రామాలను ఇచ్చి శాంతిని కాపాడటం',
          'సగం బంగారు ఖజానాను అప్పగించడం',
          'శకునిని గాంధారానికి పంపించివేయడం',
          'కర్ణుడిని ప్రధానమంత్రిగా చేయడం'
        ],
        options_hi: [
          'पांचों पाण्डव भाइयों को केवल पांच छोटे गांव दे दिए जाएं ताकि वे निर्वाह कर सकें',
          'आधा राजकोष दे दिया जाए',
          'शकुनि को निष्कासित किया जाए',
          'कर्ण को प्रधानमंत्री बनाया जाए'
        ],
        correctIndex: 0,
        learnMore: 'Krishna requested five historic towns: Indraprastha, Paniprastha (Panipat), Sonaprastha (Sonipat), Tilaprastha (Tilpat), and Vrikaprastha (Baghpat).',
        learnMore_te: 'ఇంద్రప్రస్థం, పాణిప్రస్థం, సోనప్రస్థం, తిలప్రస్థం, వృకప్రస్థం అనే ఐదు ఊళ్లను మాత్రమే కృష్ణుడు కోరాడు.',
        learnMore_hi: 'श्रीकृष्ण ने इंद्रप्रस्थ, पानीपत, सोनीपत, तिलपत और बागपत—ये पांच गांव देने का प्रस्ताव रखा।',
        xpReward: 10
      },
      {
        id: 'q67-2',
        type: 'true_false',
        prompt: 'Duryodhana sneered at Krishna: "Without war, I shall not yield to the Pandavas even as much earth as can be pierced by the point of a sharp needle!"',
        prompt_te: '"యుద్ధం లేకుండా సూది మొన మోపినంత భూమిని కూడా పాండవులకు ఇవ్వను!" అని దుర్యోధనుడు సభలో గర్జించాడు.',
        prompt_hi: 'दुर्योधन ने अहंकार से कहा: "बिना युद्ध के मैं पाण्डवों को तीक्ष्ण सुई की नोक के बराबर भी भूमि नहीं दूंगा!"',
        correctAnswer: true,
        learnMore: 'With this blind, arrogant declaration, Duryodhana sealed the doom of himself, his hundred brothers, and the warrior caste of Aryavarta.',
        learnMore_te: 'ఈ అహంకారపు ప్రకటనతో దుర్యోధనుడు తన వినాశనానికి తానే ద్వారాలు తెరుచుకున్నాడు.',
        learnMore_hi: 'दुर्योधन के इस हठ ने शांति की समस्त आशाओं को समाप्त कर महाविनाश का मार्ग खोल दिया।',
        xpReward: 10
      },
      {
        id: 'q67-3',
        type: 'riddle',
        prompt: 'The historic village demanded as one of the five towns, famed today as the battlefield of three great epoch-making conflicts. What town was it?',
        prompt_te: 'కృష్ణుడు కోరిన ఐదు గ్రామాలలో ఒకటైన ప్రసిద్ధ చారిత్రక ప్రదేశం ఏది?',
        prompt_hi: 'पाण्डवों के लिए मांगे गए पांच गांवों में से एक, जो आज भी भारत के ऐतिहासिक नगर के रूप में विख्यात है। वह कौन सा था?',
        hint: 'Modern Panipat.',
        hint_te: 'పాణిప్రస్థం (పానిపట్).',
        hint_hi: 'पाणिप्रस्थ (पानीपत)।',
        answer: 'Paniprastha (Panipat)',
        answer_te: 'పాణిప్రస్థం (పానిపట్)',
        answer_hi: 'पाणिप्रस्थ (पानीपत)',
        options: ['Paniprastha (Panipat)', 'Mathura', 'Varanasi', 'Ayodhya'],
        options_te: ['పాణిప్రస్థం (పానిపట్)', 'మధుర', 'వారణాసి', 'అయోధ్య'],
        options_hi: ['पाणिप्रस्थ (पानीपत)', 'मथुरा', 'वाराणसी', 'अयोध्या'],
        learnMore: 'Yudhishthira had said: "Give us five villages, and we shall lay down our bows." Duryodhana’s denial made righteous war inescapable.',
        learnMore_te: 'ఐదు గ్రామాలు ఇస్తే విల్లంబులు పక్కన పెడతామని ధర్మరాజు చెప్పినా, దుర్యోధనుడి గర్వం వినాశనాన్ని కోరి తెచ్చుకుంది.',
        learnMore_hi: 'पाण्डव पांच गांवों पर संतुष्ट होने को तैयार थे, किंतु दुर्योधन के मद ने धर्मयुद्ध को अनिवार्य बना दिया।',
        xpReward: 20
      }
    ]
  },

  // Level 68
  {
    levelNumber: 68,
    partNumber: 7,
    title: 'The Conspiracy to Bind God',
    title_te: 'కృష్ణుడిని బంధించే కుట్ర',
    title_hi: 'भगवान को बांधने का षड्यंत्र',
    subtitle: 'Duryodhana’s Folly & The Chains of Arrogance',
    subtitle_te: 'దుర్యోధనుడి వెర్రి పన్నాగం & సంకెళ్ళు',
    subtitle_hi: 'अहंकार की जंजीरें और अनंत का उपहास',
    questions: [
      {
        id: 'q68-1',
        type: 'mcq',
        prompt: 'What outrageous crime did Duryodhana, Shakuni, and Dushasana conspire to commit inside the royal assembly against the peace envoy Krishna?',
        prompt_te: 'శాంతిదూతగా వచ్చిన శ్రీకృష్ణుడిపై సభలోనే ఏ ఘోర నేరానికి పాల్పడాలని దుర్యోధనుడు, శకుని, దుశ్శాసనులు కుట్ర పన్నారు?',
        prompt_hi: 'शांतिदूत बनकर आए श्रीकृष्ण के विरुद्ध दुर्योधन, शकुनि और दुःशासन ने राजसभा में क्या कुकृत्य करने का षड्यंत्र रचा?',
        options: [
          'To seize and chain Krishna in iron shackles, holding Him as a hostage to paralyze the Pandavas',
          'To poison His drinking water',
          'To steal His chariot horses',
          'To challenge Him to a dice match'
        ],
        options_te: [
          'శ్రీకృష్ణుడిని ఇనుప సంకెళ్లతో బంధించి, బందీగా చేసుకుని పాండవులను నిర్వీర్యం చేయాలని',
          'ఆయన తాగే నీటిలో విషం కలపాలని',
          'ఆయన రథపు గుర్రాలను దొంగిలించాలని',
          'ఆయనను జూదానికి ఆహ్వానించాలని'
        ],
        options_hi: [
          'श्रीकृष्ण को लोहे की जंजीरों में बांधकर बंदी बना लेना ताकि पाण्डव शक्तिहीन हो जाएं',
          'उनके जल में विष मिलाना',
          'उनके रथ के घोड़े चुराना',
          'उन्हें द्यूत खेलने की चुनौती देना'
        ],
        correctIndex: 0,
        learnMore: 'Violating the universal diplomatic immunity of ambassadors, Duryodhana ordered guards to lock the palace gates and bring iron chains.',
        learnMore_te: 'రాయబారులకు ఉండే దౌత్య రక్షణను సైతం ఉల్లంఘించి కృష్ణుడిని బంధించాలని సైనికులను ఆజ్ఞాపించాడు.',
        learnMore_hi: 'दूत के विशेषाधिकारों का हनन करते हुए दुर्योधन ने द्वार बंद करवाकर लोहे की बेड़ियां मंगवा लीं।',
        xpReward: 10
      },
      {
        id: 'q68-2',
        type: 'true_false',
        prompt: 'Mahatma Vidura openly mocked Duryodhana’s idiocy: "You fool, you seek to capture with chains the fire of all creation, in whom all worlds and galaxies reside!"',
        prompt_te: '"సమస్త విశ్వాన్ని తనలో నింపుకున్న పరమాత్ముడిని సంకెళ్లతో బంధించాలనుకుంటున్న నీ మూర్ఖత్వానికి అంతం లేదా!" అని విదురుడు దుర్యోధనుడిని నిలదీశాడు.',
        prompt_hi: 'विदुर ने दुर्योधन को ललकारते हुए कहा: "मूर्ख! तू उस अनंत ईश्वर को जंजीरों में बांधना चाहता है जिसमें समूचा ब्रह्मांड समाया हुआ है!"',
        correctAnswer: true,
        learnMore: 'Vidura warned that attempting to arrest Krishna is like trying to catch blazing fire with bare hands or tie the wind in a bundle.',
        learnMore_te: 'గాలిని బంధించాలనుకోవడం, మండే అగ్నిని చేతులతో పట్టుకోవాలనుకోవడం ఎంత అవివేకమో కృష్ణుడిని బంధించాలనుకోవడం కూడా అంతేనని హెచ్చరించాడు.',
        learnMore_hi: 'विदुर ने चेतावनी दी कि वायु को मुट्ठी में बांधना संभव है, किंतु सर्वव्यापी परमात्मा को कोई बंदी नहीं बना सकता।',
        xpReward: 10
      },
      {
        id: 'q68-3',
        type: 'riddle',
        prompt: 'Hearing Duryodhana’s foolish order to bring chains, I laughed a cosmic laugh that shook the marble pillars of the court. Who am I?',
        prompt_te: 'నన్ను సంకెళ్లతో బంధించాలన్న దుర్యోధనుడి మాటలు విని, సభా భవనమే దద్దరిల్లేలా అట్టహాసం చేసిన పరమాత్ముడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'बांधने का आदेश सुनकर जिसकी दिव्य हंसी से राजमहल के खंभे कांप उठे। मैं कौन हूँ?',
        hint: 'The Lord of the Universe.',
        hint_te: 'జగన్నాథుడు.',
        hint_hi: 'जगदीश्वर श्रीकृष्ण।',
        answer: 'Lord Krishna (Keshava)',
        answer_te: 'భగవాన్ శ్రీకృష్ణుడు',
        answer_hi: 'भगवान श्रीकृष्ण (केशव)',
        options: ['Lord Krishna (Keshava)', 'Bhishma', 'Drona', 'Vidura'],
        options_te: ['భగవాన్ శ్రీకృష్ణుడు', 'భీష్ముడు', 'ద్రోణుడు', 'విదురుడు'],
        options_hi: ['भगवान श्रीकृष्ण (केशव)', 'भीष्म', 'द्रोण', 'विदुर'],
        learnMore: 'Krishna smiled: "Duryodhana, you think I am alone here? Behold the universe within Me!"',
        learnMore_te: '"నేను ఒక్కడినే ఉన్నానని భ్రమపడుతున్నావా దుర్యోధనా? నాలో ఉన్న సకల లోకాలను చూడు!" అంటూ కృష్ణుడు విశ్వరూపాన్ని ప్రకటించాడు.',
        learnMore_hi: 'श्रीकृष्ण ने हंसकर कहा: "दुर्योधन! तू मुझे अकेला समझकर बांधना चाहता है? देख, सब मुझमें ही हैं!"',
        xpReward: 20
      }
    ]
  },

  // Level 69
  {
    levelNumber: 69,
    partNumber: 7,
    title: 'The Cosmic Vishwaroopa in Court',
    title_te: 'కౌరవ సభలో శ్రీకృష్ణుడి విశ్వరూపం',
    title_hi: 'कुरु सभा में विराट विश्वरूप दर्शन',
    subtitle: 'Blazing Like Ten Thousand Suns',
    subtitle_te: 'కోటి సూర్యుల దివ్య కాంతి & ధృతరాష్ట్రుడి దివ్యదృష్టి',
    subtitle_hi: 'अनंत मुख, अनंत नेत्र और दिव्य प्रकाश',
    questions: [
      {
        id: 'q69-1',
        type: 'mcq',
        prompt: 'What awe-inspiring cosmic manifestation took place inside the Hastinapur assembly hall when Krishna revealed His Vishwaroopa?',
        prompt_te: 'హస్తినాపుర సభలో శ్రీకృష్ణుడు తన విశ్వరూపాన్ని ప్రదర్శించినప్పుడు ఎలాంటి దివ్య దృశ్యం ఆవిష్కృతమైంది?',
        prompt_hi: 'जब श्रीकृष्ण ने हस्तिनापुर की राजसभा में अपना विराट विश्वरूप प्रकट किया, तब क्या अद्भुत दृश्य उपस्थित हुआ?',
        options: [
          'His form expanded endlessly, blazing with the radiance of thousand suns, housing Brahma on His chest, Rudras in His limbs, and all gods, planets, and galaxies within His cosmic frame',
          'He summoned a thunderstorm',
          'He turned into an eagle and flew away',
          'The palace floor dissolved into ocean'
        ],
        options_te: [
          'వేల సూర్యుల తేజస్సుతో వెలుగుతూ, వక్షస్థలంలో బ్రహ్మ, అవయవాలలో రుద్రులు, సకల దేవతలు, గ్రహాలు, నక్షత్రాలు ఆయన దేహంలో ప్రకాశించాయి',
          'ఉరుములు మెరుపులతో కూడిన వర్షం కురిపించాడు',
          'గరుడ పక్షిగా మారి ఎగిరిపోయాడు',
          'భవనం నేల సముద్రంగా మారింది'
        ],
        options_hi: [
          'उनका शरीर अनंत रूप से विस्तारित हुआ, करोड़ों सूर्यों का प्रकाश फैल गया, वक्ष पर ब्रह्मा, अंगों में एकादश रुद्र और रोम-रोम में ब्रह्मांड घूमने लगे',
          'तेज आंधी चलने लगी',
          'वे पक्षी बनकर उड़ गए',
          'महल का फर्श जलमग्न हो गया'
        ],
        correctIndex: 0,
        learnMore: 'From Krishna’s eyes, nose, and ears poured lightning and sparks of fire; the guards dropped their chains and prostrated in terror.',
        learnMore_te: 'కృష్ణుడి నేత్రాల నుండి అగ్నిజ్వాలలు, దివ్యాయుధాలు వెలువడటంతో సైనికులు సంకెళ్ళను పారేసి భయంతో సాష్టాంగపడ్డారు.',
        learnMore_hi: 'प्रभु के मुख से प्रलयंकारी अग्नि निकलने लगी; सैनिक जंजीरें फेंककर भय से कांपते हुए भूमि पर गिर पड़े।',
        xpReward: 10
      },
      {
        id: 'q69-2',
        type: 'true_false',
        prompt: 'Blind King Dhritarashtra was granted temporary divine sight by Lord Krishna, saw the terrifying cosmic form, and prayed: "O Lord, take back my sight, for after seeing You, I wish to see nothing else in this world!"',
        prompt_te: 'ధృతరాష్ట్రుడికి తాత్కాలికంగా దివ్యదృష్టి లభించి విశ్వరూపాన్ని దర్శించాక, "నిన్ను చూసిన తర్వాత ఈ ప్రపంచంలో మరేదీ చూడాలని లేదు, నా చూపును తీసివేయండి" అని ప్రార్థించాడు.',
        prompt_hi: 'नेत्रहीन धृतराष्ट्र को श्रीकृष्ण ने क्षणिक दिव्य दृष्टि दी, और विश्वरूप देखकर धृतराष्ट्र ने प्रार्थना की: "प्रभु! अब मुझे पुनः अंधा कर दें, आपको देखने के बाद मैं संसार की कोई वस्तु नहीं देखना चाहता!"',
        correctAnswer: true,
        learnMore: 'Dhritarashtra recognized the Supreme Divinity, but upon losing the vision, his habitual infatuation with Duryodhana reclaimed his heart.',
        learnMore_te: 'ధృతరాష్ట్రుడు భగవంతుడిని గుర్తించినప్పటికీ, దృష్టి పోగానే మళ్ళీ పాత పుత్రమోహంలోనే కూరుకుపోయాడు.',
        learnMore_hi: 'धृतराष्ट्र ने हाथ जोड़कर क्षमा मांगी, किंतु दृष्टि जाते ही पुनः पुत्र-मोह के वशीभूत हो गए।',
        xpReward: 10
      },
      {
        id: 'q69-3',
        type: 'riddle',
        prompt: 'Only three noble souls in the entire court possessed the pure spiritual vision to behold the full majesty of the Vishwaroopa without fear: Vidura, Bhishma, and Drona. Who was the Lord who revealed it?',
        prompt_te: 'సభలో భయం లేకుండా భక్తితో విశ్వరూపాన్ని దర్శించిన భీష్మ, ద్రోణ, విదురుల హృదయాలలో వెలిగిన జగన్నాథుడైన పరమాత్ముడు ఎవరు?',
        prompt_hi: 'कुरु सभा में भीष्म, द्रोण और विदुर को अपनी कृपा से निर्भय विश्वरूप का दर्शन कराने वाले योगेश्वर कौन थे?',
        hint: 'The eighth avatar of Lord Vishnu.',
        hint_te: 'భగవాన్ శ్రీకృష్ణుడు.',
        hint_hi: 'भगवान वासुदेव।',
        answer: 'Lord Krishna (Parthasarathy)',
        answer_te: 'భగవాన్ శ్రీకృష్ణుడు',
        answer_hi: 'भगवान श्रीकृष्ण',
        options: ['Lord Krishna (Parthasarathy)', 'Lord Shiva', 'Lord Brahma', 'Sage Narada'],
        options_te: ['భగవాన్ శ్రీకృష్ణుడు', 'పరమశివుడు', 'బ్రహ్మదేవుడు', 'నారద మహర్షి'],
        options_hi: ['भगवान श्रीकृष्ण', 'भगवान शिव', 'ब्रह्माजी', 'देवर्षि नारद'],
        learnMore: 'Withdrawing His cosmic form, Krishna strode out of the assembly, signaling that the hour of peace had expired and destiny would now speak through arrows.',
        learnMore_te: 'విశ్వరూపాన్ని ఉపసంహరించుకుని సభ నుండి నిష్క్రమించిన కృష్ణుడు, శాంతి సమయం ముగిసిందని, ఇక బాణాలే తీర్పు చెబుతాయని హెచ్చరించాడు.',
        learnMore_hi: 'विश्वरूप समेटकर श्रीकृष्ण सभा से बाहर निकल आए; यह संकेत था कि अब शांति के प्रयास समाप्त हो चुके हैं।',
        xpReward: 20
      }
    ]
  },

  // Level 70
  {
    levelNumber: 70,
    partNumber: 7,
    title: 'The Secret Parley with Karna',
    title_te: 'కర్ణుడితో కృష్ణుడి రహస్య సంభాషణ',
    title_hi: 'कर्ण और कृष्ण का गुप्त संवाद',
    subtitle: 'Firstborn of Kunti & The Unbreakable Loyalty',
    subtitle_te: 'కుంతీ జ్యేష్ఠపుత్రుడి రహస్యం & స్నేహ ధర్మం',
    subtitle_hi: 'सम्राट बनने का प्रस्ताव और मित्रता की निष्ठा',
    questions: [
      {
        id: 'q70-1',
        type: 'mcq',
        prompt: 'Riding together in His golden chariot outside Hastinapur, what stunning secret of birth did Lord Krishna reveal to Karna?',
        prompt_te: 'హస్తినాపురం వెలుపల రథంలో ప్రయాణిస్తూ, కర్ణుడి పుట్టుకకు సంబంధించిన ఏ గొప్ప రహస్యాన్ని శ్రీకృష్ణుడు వెల్లడించాడు?',
        prompt_hi: 'हस्तिनापुर की सीमा पर अपने रथ में बैठाकर श्रीकृष्ण ने कर्ण को उनके जन्म का कौन सा गोपनीय रहस्य बताया?',
        options: [
          'That Karna was Queen Kunti’s firstborn son fathered by the Sun God Surya, making him the legitimate eldest Pandava and rightful Emperor of Aryavarta',
          'That Karna was born in Dvaraka',
          'That Duryodhana planned to betray him',
          'That Parashurama had forgiven his curse'
        ],
        options_te: [
          'కర్ణుడు సూర్యభగవానుడి అనుగ్రహంతో కుంతీదేవికి జన్మించిన ప్రథమ పుత్రుడని, అతడే ధర్మబద్ధమైన చక్రవర్తి కావాలని',
          'కర్ణుడు ద్వారకలో పుట్టాడని',
          'దుర్యోధనుడు అతడికి ద్రోహం చేయబోతున్నాడని',
          'పరశురాముడు తన శాపాన్ని వెనక్కి తీసుకున్నాడని'
        ],
        options_hi: [
          'कि कर्ण सूर्यदेव के अंश से कुन्ती के सबसे बड़े पुत्र हैं, और वही पाण्डवों के ज्येष्ठ भ्राता व आर्यावर्त के वास्तविक सम्राट हैं',
          'कि कर्ण का जन्म द्वारका में हुआ था',
          'कि दुर्योधन उनके साथ विश्वासघात करने वाला है',
          'कि परशुराम ने अपना शाप वापस ले लिया है'
        ],
        correctIndex: 0,
        learnMore: 'Krishna offered: "Come with Me; Yudhishthira will hold your white umbrella, Bhima will hold your royal fan, Draupadi will be your queen, and you shall rule the world!"',
        learnMore_te: '"మాతో వచ్చేయ్! యుధిష్ఠిరుడు నీకు చామరం పడతాడు, భీమార్జునులు నీ పాదాలు సేవిస్తారు, నీవే జగత్తును పాలించు" అని కృష్ణుడు ప్రలోభపెట్టాడు.',
        learnMore_hi: 'श्रीकृष्ण ने कहा: "पाण्डव तुम्हारे चरणों में झुकेंगे, द्रौपदी तुम्हारी पटरानी बनेगी और समूची पृथ्वी पर तुम्हारा शासन होगा।"',
        xpReward: 10
      },
      {
        id: 'q70-2',
        type: 'true_false',
        prompt: 'Karna wept with deep emotion, but steadfastly refused the imperial crown, choosing loyalty to Duryodhana who had stood by him when the world mocked him as a charioteer’s son.',
        prompt_te: 'కర్ణుడు భావోద్వేగంతో కన్నీరు కార్చినప్పటికీ, తనను ఆదరించిన దుర్యోధనుడికి ద్రోహం చేయలేనని రాజ్య సింహాసనాన్ని నిస్సంకోచంగా తిరస్కరించాడు.',
        prompt_hi: 'कर्ण ने भावुक होकर आंसू बहाए, किंतु दुर्योधन के प्रति मित्रता और कृतज्ञता के कारण सम्राट बनने का प्रस्ताव ठुकरा दिया।',
        correctAnswer: true,
        learnMore: 'Karna said: "Duryodhana trusts me alone for this war. I cannot betray the friend who gave me honor, kingdom, and brotherhood when all rejected me."',
        learnMore_te: 'లోకమంతా తనను సూతపుత్రుడని అవమానించినప్పుడు గౌరవాన్నిచ్చిన మిత్రుడిని విడిచిపెట్టలేనని కర్ణుడు తేల్చిచెప్పాడు.',
        learnMore_hi: 'कर्ण ने कहा: "जिस दुर्योधन के बल पर युद्ध हो रहा है, मैं उसके साथ दगा करके तीनों लोकों का राज्य भी स्वीकार नहीं कर सकता।"',
        xpReward: 10
      },
      {
        id: 'q70-3',
        type: 'riddle',
        prompt: 'The Divine Avatar, friend of Arjuna and supreme protector of cosmic Dharma, whose presence turns even the most desperate struggle into righteous victory. Who am I?',
        prompt_te: 'అర్జునుడి ప్రియసఖుడు, జగద్రక్షకుడు; ఎక్కడ నిలిస్తే అక్కడ విజయం నిలుస్తుందో ఆ సచ్చిదానంద పరమాత్ముడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'अर्जुन के सारथी, गीता के उपदेशक और धर्म के परम संरक्षक, जिनकी उपस्थिति ही विजय की निश्चित गारंटी है। मैं कौन हूँ?',
        hint: 'Completing Part 7 unlocks Lord Krishna’s wallpaper in your gallery!',
        hint_te: 'పార్ట్ 7 పూర్తి చేయడంతో శ్రీకృష్ణుడి వాల్‌పేపర్ అన్‌లాక్ అవుతుంది.',
        hint_hi: 'भाग 7 पूर्ण करने पर भगवान श्रीकृष्ण का भव्य वॉलपेपर अनलॉक होता है।',
        answer: 'Lord Krishna (Parthasarathy)',
        answer_te: 'భగవాన్ శ్రీకృష్ణుడు (పార్థసారథి)',
        answer_hi: 'भगवान श्रीकृष्ण (पार्थसारथि)',
        options: [
          'Lord Krishna (Parthasarathy)',
          'Balarama',
          'Arjuna',
          'Bhishma'
        ],
        options_te: [
          'భగవాన్ శ్రీకృష్ణుడు (పార్థసారథి)',
          'బలరాముడు',
          'అర్జునుడు',
          'భీష్ముడు'
        ],
        options_hi: [
          'भगवान श्रीकृष्ण (पार्थसारथि)',
          'बलराम',
          'अर्जुन',
          'भीष्म'
        ],
        learnMore: 'The peace mission concluded: all diplomatic doors were shut, and the drums of Kurukshetra began to roll.',
        learnMore_te: 'శాంతి రాయబారం ముగిసింది; కురుక్షేత్ర రణభేరి మోగడానికి రంగం సిద్ధమైంది.',
        learnMore_hi: 'शांति के सब मार्ग बंद हो गए और कुरुक्षेत्र के धर्मक्षेत्र में युद्ध के नगाड़े गूंज उठे।',
        xpReward: 20
      }
    ]
  }
];
