import { Level } from '../../types/game';

export const PART_3_LEVELS: Level[] = [
  // Level 21
  {
    levelNumber: 21,
    partNumber: 3,
    title: 'The Conspiracy of Varnavata',
    title_te: 'వారణావత కుట్ర',
    title_hi: 'वारणावत का षड्यंत्र',
    subtitle: 'Purochana & The Combustible Palace',
    subtitle_te: 'పురోచనుడు & లక్కమేడ నిర్మాణం',
    subtitle_hi: 'पुरोचन और लाक्षागृह का निर्माण',
    questions: [
      {
        id: 'q21-1',
        type: 'mcq',
        prompt: 'Which royal architect and minister was appointed by Duryodhana to build the inflammable House of Lac (Lakshagriha) at Varnavata?',
        prompt_te: 'వారణావతంలో లక్క, నెయ్యి, లత్తుకలతో మండే లక్కమేడను నిర్మించిన దుర్యోధనుడి అనుచరుడు ఎవరు?',
        prompt_hi: 'वारणावत में लाक्षागृह (लाख का महल) बनाने के लिए दुर्योधन ने किस दुष्ट मंत्री और शिल्पी को भेजा था?',
        options: ['Purochana', 'Maya Danava', 'Vishwakarma', 'Kichaka'],
        options_te: ['పురోచనుడు', 'మయదానవుడు', 'విశ్వకర్మ', 'కీచకుడు'],
        options_hi: ['पुरोचन', 'मय दानव', 'विश्वकर्मा', 'कीचक'],
        correctIndex: 0,
        learnMore: 'Purochana built the palace with lac, resin, hemp, and clarified butter, intending to burn the Pandavas alive while they slept.',
        learnMore_te: 'పాండవులను నిద్రలోనే సజీవ దహనం చేయాలనే దుష్ట సంకల్పంతో పురోచనుడు అత్యంత మండే పదార్థాలతో భవనాన్ని నిర్మించాడు.',
        learnMore_hi: 'पुरोचन ने लाख, सन, राल और घी जैसी अत्यंत ज्वलनशील वस्तुओं से महल तैयार किया था।',
        xpReward: 10
      },
      {
        id: 'q21-2',
        type: 'true_false',
        prompt: 'Dhritarashtra sent the Pandavas and Kunti to Varnavata under the pretext of attending the grand festival of Lord Shiva (Pashupati).',
        prompt_te: 'వారణావతంలో జరిగే శివోత్సవాన్ని తిలకించాలనే నెపంతో ధృతరాష్ట్రుడు పాండవులను మరియు కుంతిని అక్కడికి పంపాడు.',
        prompt_hi: 'धृतराष्ट्र ने पाण्डवों और कुन्ती को वारणावत के शिव मेले में भाग लेने के बहाने हस्तिनापुर से विदा किया था।',
        correctAnswer: true,
        learnMore: 'Dhritarashtra feigned goodwill while privately yielding to Duryodhana and Shakuni’s murderous conspiracy.',
        learnMore_te: 'ధృతరాష్ట్రుడు బయటికి మంచిగా నటిస్తూనే అంతర్గతంగా దుర్యోధనుడి కుట్రకు మౌనంగా సహకరించాడు.',
        learnMore_hi: 'धृतराष्ट्र ने पाण्डवों के प्रति प्रेम का ढोंग किया, किंतु अंतर्मन में वे पुत्र दुर्योधन के षड्यंत्र से अनभिज्ञ नहीं थे।',
        xpReward: 10
      },
      {
        id: 'q21-3',
        type: 'riddle',
        prompt: 'As the Pandavas left Hastinapur, I spoke to Yudhishthira in the cryptic Mlechha dialect, warning that a forest fire burns not the creature that hides in an underground burrow. Who am I?',
        prompt_te: 'పాండవులు బయలుదేరేటప్పుడు, అడవి మంటల నుండి భూగర్భంలో దాక్కునే జీవి తప్పించుకోగలదని మ్లేచ్ఛ భాషలో సంకేతాలు ఇచ్చిన విజ్ఞానిని నేను. నేను ఎవరిని?',
        prompt_hi: 'वारणावत प्रस्थान के समय युधिष्ठिर को म्लेच्छ भाषा में सावधान किया कि दावानल बिल में रहने वाले चूहे को नहीं जला सकता। मैं कौन हूँ?',
        hint: 'The righteous prime minister of Hastinapur.',
        hint_te: 'హస్తినాపుర ధర్మమూర్తి.',
        hint_hi: 'धर्म के अवतार हस्तिनापुर के महामंत्री।',
        answer: 'Mahatma Vidura',
        answer_te: 'మహాత్మా విదురుడు',
        answer_hi: 'महात्मा विदुर',
        options: ['Mahatma Vidura', 'Bhishma Pitamaha', 'Guru Drona', 'Sanjaya'],
        options_te: ['మహాత్మా విదురుడు', 'భీష్మ పితామహుడు', 'గురు ద్రోణుడు', 'సంజయుడు'],
        options_hi: ['महात्मा विदुर', 'भीष्म पितामह', 'गुरु द्रोण', 'संजय'],
        learnMore: 'Yudhishthira grasped Vidura’s covert hint instantly and prepared a subterranean defense.',
        learnMore_te: 'విదురుడి రహస్య సందేశాన్ని యుధిష్ఠిరుడు వెంటనే గ్రహించి తగిన విధంగా ఉపాయాన్ని ఆలోచించాడు.',
        learnMore_hi: 'युधिष्ठिर ने विदुर के सांकेतिक शब्दों को समझकर तुरंत सतर्कता बरतने का निश्चय किया।',
        xpReward: 20
      }
    ]
  },

  // Level 22
  {
    levelNumber: 22,
    partNumber: 3,
    title: 'The Inferno & Midnight Escape',
    title_te: 'లక్కమేడ దహనం & తప్పించుకోవటం',
    title_hi: 'लाक्षागृह दहन और गुप्त पलायन',
    subtitle: 'The Miner’s Tunnel & Forest Shadows',
    subtitle_te: 'ఖనకుని సొరంగం & అరణ్య ప్రవేశం',
    subtitle_hi: 'खनक की सुरंग और निशाचर वन',
    questions: [
      {
        id: 'q22-1',
        type: 'mcq',
        prompt: 'Who sent a trusted underground miner (Khanaka) to secretly dig an escape tunnel beneath the House of Lac for the Pandavas?',
        prompt_te: 'పాండవుల రక్షణ కోసం లక్కమేడ క్రింద రహస్య సొరంగాన్ని తవ్వడానికి ఒక నమ్మకమైన ఖనకుడిని (గని కార్మికుడిని) పంపినవారు ఎవరు?',
        prompt_hi: 'लाक्षागृह के भीतर गुप्त सुरंग खोदने के लिए एक कुशल खनक (सुरंग निर्माता) को किसने भेजा था?',
        options: ['Mahatma Vidura', 'Bhishma Pitamaha', 'King Drupada', 'Lord Krishna'],
        options_te: ['మహాత్మా విదురుడు', 'భీష్మ పితామహుడు', 'ద్రుపద మహారాజు', 'శ్రీకృష్ణుడు'],
        options_hi: ['महात्मा विदुर', 'भीष्म पितामह', 'राजा द्रुपद', 'श्रीकृष्ण'],
        correctIndex: 0,
        learnMore: 'Vidura sent the miner with a secret token, enabling the Pandavas to dig a subterranean pathway leading deep into the dense wilderness.',
        learnMore_te: 'విదురుడు పంపిన రహస్య సంకేతంతో ఖనకుడు లక్కమేడ నుండి దట్టమైన అడవిలోకి ఒక సొరంగాన్ని తవ్వాడు.',
        learnMore_hi: 'विदुर द्वारा भेजे गए गुप्त खनक ने महल से वन तक निकलने वाली एक लंबी गुप्त सुरंग तैयार की।',
        xpReward: 10
      },
      {
        id: 'q22-2',
        type: 'true_false',
        prompt: 'The Pandavas set fire to the palace themselves before escaping, trapping the treacherous Purochana in his own inferno.',
        prompt_te: 'పురోచనుడు నిప్పు పెట్టకముందే పాండవులే లక్కమేడకు నిప్పు పెట్టి సొరంగం ద్వారా తప్పించుకున్నారు.',
        prompt_hi: 'पाण्डवों ने पुरोचन द्वारा आग लगाने से पूर्व ही महल में अग्नि लगा दी और पुरोचन उसी में जलकर भस्म हो गया।',
        correctAnswer: true,
        learnMore: 'Bhima set fire to Purochana’s quarters and the outer gates, ensuring the conspirator could not escape his own deceitful trap.',
        learnMore_te: 'పురోచనుడి గదికి, గుమ్మాలకు భీముడు నిప్పంటించి శత్రువును తన పన్నాగంలోనే అంతం చేశాడు.',
        learnMore_hi: 'भीम ने पुरोचन के शयनकक्ष में आग लगाकर उसे उसी के षड्यंत्र का शिकार बना दिया।',
        xpReward: 10
      },
      {
        id: 'q22-3',
        type: 'riddle',
        prompt: 'Carrying my exhausted mother Kunti on my back and four weary brothers on my colossal arms, I sprinted tirelessly through the dark midnight jungle. Who am I?',
        prompt_te: 'తల్లి కుంతిని వీపుపై, నలుగురు సోదరులను తన బలమైన చేతులపై ఎత్తుకుని రాత్రికి రాత్రే అడవి గుండా పరుగుతీసిన మహాబలుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'माता कुन्ती को कंधे पर और चारों थके हुए भाइयों को अपनी बाहों में उठाकर घोर वन में तीव्र गति से दौड़ने वाला वीर। मैं कौन हूँ?',
        hint: 'The son of Vayu, famed for his colossal mace.',
        hint_te: 'వాయుపుత్రుడు, గదాధారి.',
        hint_hi: 'पवनपुत्र, महाबली पाण्डव।',
        answer: 'Bhima (Vrikodara)',
        answer_te: 'భీముడు (వృకోదరుడు)',
        answer_hi: 'भीम (वृकोदर)',
        options: ['Bhima (Vrikodara)', 'Arjuna', 'Ghatotkacha', 'Yudhishthira'],
        options_te: ['భీముడు (వృకోదరుడు)', 'అర్జునుడు', 'ఘటోత్కచుడు', 'యుధిష్ఠిరుడు'],
        options_hi: ['भीम (वृकोदर)', 'अर्जुन', 'घटोत्कच', 'युधिष्ठिर'],
        learnMore: 'Bhima carried his entire family miles into the dense forests of the south, keeping them safe from Kuru pursuers.',
        learnMore_te: 'భీముడు తన కుటుంబాన్ని ఒంటిచేత్తో మోస్తూ వేలమంది శత్రువులు వెంటాడలేని సుదూర అరణ్యానికి చేర్చాడు.',
        learnMore_hi: 'भीम के असीम पराक्रम ने समूचे परिवार को रातभर में सुरक्षित हिडिम्ब वन तक पहुंचा दिया।',
        xpReward: 20
      }
    ]
  },

  // Level 23
  {
    levelNumber: 23,
    partNumber: 3,
    title: 'The Slaying of Hidimba',
    title_te: 'హిడింబాసుర వధ',
    title_hi: 'हिडिम्ब वध और घटोत्कच जन्म',
    subtitle: 'Marriage of Bhima & Birth of Ghatotkacha',
    subtitle_te: 'భీముడు-హిడింబి వివాహం & ఘటోత్కచుని జననం',
    subtitle_hi: 'भीम-हिडिम्बा विवाह और मायावी घटोत्कच',
    questions: [
      {
        id: 'q23-1',
        type: 'mcq',
        prompt: 'Who fell in love with Bhima upon seeing his handsome, noble countenance sleeping under the Shal tree?',
        prompt_te: 'సాల వృక్షం కింద నిద్రిస్తున్న భీముడి తేజస్సును, సుందర రూపాన్ని చూసి ప్రేమలో పడిన రాక్షసి ఎవరు?',
        prompt_hi: 'शाल वृक्ष के नीचे सो रहे भीम के अलौकिक रूप को देखकर उन पर कौन सी राक्षसी मोहित हो गई थी?',
        options: ['Hidimbi', 'Tadaka', 'Surpanakha', 'Simhika'],
        options_te: ['హిడింబి', 'తాటక', 'శూర్పణఖ', 'సింహిక'],
        options_hi: ['हिडिम्बा', 'ताड़का', 'शूर्पणखा', 'सिंहिका'],
        correctIndex: 0,
        learnMore: 'Hidimbi transformed into a radiant, beautiful woman and warned Bhima that her man-eating brother Hidimba was approaching.',
        learnMore_te: 'హిడింబి ఒక దివ్య సుందరిగా మారి, తన అన్న అయిన హిడింబాసురుడు దాడి చేయడానికి వస్తున్నాడని భీముడిని హెచ్చరించింది.',
        learnMore_hi: 'हिडिम्बा ने एक सुंदरी का रूप धारण किया और भीम को अपने नरभक्षी भाई हिडिम्ब के आगमन की चेतावनी दी।',
        xpReward: 10
      },
      {
        id: 'q23-2',
        type: 'true_false',
        prompt: 'Bhima broke demon Hidimba’s spine across his knee in a titanic midnight wrestling match.',
        prompt_te: 'భీముడు హిడింబాసురుడి నడుమును తన మోకాలిపై విరిచి భీకరంగా సంహరించాడు.',
        prompt_hi: 'भीम ने भयानक कुश्ती में राक्षस हिडिम्ब की रीढ़ अपनी जंघा पर रखकर तोड़ दी और उसका वध कर दिया।',
        correctAnswer: true,
        learnMore: 'Bhima wrestled the roaring demon away from his sleeping mother and brothers, destroying him completely.',
        learnMore_te: 'నిద్రిస్తున్న తల్లి, సోదరులకు భంగం కలగకుండా భీముడు హిడింబుడిని దూరంగా లాగి అంతం చేశాడు.',
        learnMore_hi: 'भीम ने हिडिम्ब को दूर ले जाकर परास्त किया ताकि सो रहे परिजनों की नींद में कोई बाधा न आए।',
        xpReward: 10
      },
      {
        id: 'q23-3',
        type: 'riddle',
        prompt: 'Born with a head shaped like a round cooking pot (Ghata) and hair smooth as arrow feathers, I possessed supreme magical aerial powers. Who am I?',
        prompt_te: 'కుండ వంటి గుండ్రటి తల కలిగి, ఆకాశంలో మాయాయుద్ధం చేయగల అద్భుత శక్తులు గల భీమ-హిడింబిల కుమారుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'घड़े (घट) के समान सिर होने के कारण मुझे यह नाम मिला; मैं मायावी युद्धकला का अद्वितीय महारथी था। मैं कौन हूँ?',
        hint: 'He played a decisive role on the 14th night of the Kurukshetra war.',
        hint_te: 'కురుక్షేత్ర రాత్రి యుద్ధంలో కర్ణుడి శక్తి ఆయుధాన్ని ఎదుర్కొన్న వీరుడు.',
        hint_hi: 'कुरुक्षेत्र के रात्रि-युद्ध में जिसने कर्ण को अपनी अमोध शक्ति चलाने पर विवश किया।',
        answer: 'Ghatotkacha',
        answer_te: 'ఘటోత్కచుడు',
        answer_hi: 'घटोत्कच',
        options: ['Ghatotkacha', 'Barbarika', 'Abhimanyu', 'Iravan'],
        options_te: ['ఘటోత్కచుడు', 'బర్బరీకుడు', 'అభిమన్యుడు', 'ఇరావంతుడు'],
        options_hi: ['घटोत्कच', 'बर्बरीक', 'अभिमन्यु', 'इरावान्'],
        learnMore: 'Ghatotkacha bowed to his father and promised to appear before the Pandavas whenever they summoned him in their hour of need.',
        learnMore_te: 'పాండవులు ఎప్పుడు పిలిచినా సహాయం చేయడానికి వస్తానని వాగ్దానం చేసి ఘటోత్కచుడు తల్లితో వెళ్ళాడు.',
        learnMore_hi: 'घटोत्कच ने पाण्डवों को वचन दिया कि जब भी विपत्ति में वे स्मरण करेंगे, वह तुरंत सेवा में उपस्थित होगा।',
        xpReward: 20
      }
    ]
  },

  // Level 24
  {
    levelNumber: 24,
    partNumber: 3,
    title: 'The Demon of Ekachakra',
    title_te: 'ఏకచక్రపుర బకాసుర వధ',
    title_hi: 'एकचक्र नगरी और बकासुर वध',
    subtitle: 'The Cartload of Food & Brahmin Gratitude',
    subtitle_te: 'బండి నిండా అన్నం & బ్రాహ్మణ కుటుంబ రక్షణ',
    subtitle_hi: 'गाड़ी भर भोजन और ब्राह्मण की रक्षा',
    questions: [
      {
        id: 'q24-1',
        type: 'mcq',
        prompt: 'In the town of Ekachakra, what daily tribute did the demon Bakasura demand from each household in turn?',
        prompt_te: 'ఏకచక్ర నగరంలో బకాసురుడు ప్రతి ఇంటి నుండి వంతులవారీగా కోరే రోజువారీ ఆహారం ఏమిటి?',
        prompt_hi: 'एकचक्र नगरी में बकासुर प्रत्येक घर से बारी-बारी से प्रतिदिन क्या मांगता था?',
        options: [
          'A cartload of cooked rice, two buffaloes, and the person who drove the cart',
          'One thousand gold coins and a cow',
          'Five bushels of wheat and a horse',
          'A basket of jewels'
        ],
        options_te: [
          'బండి నిండా అన్నం, రెండు దున్నపోతులు మరియు బండి తోలే మనిషి',
          'వెయ్యి బంగారు నాణాలు మరియు ఒక ఆవు',
          'ఐదు బస్తాల గోధుమలు మరియు గుర్రం',
          'రత్నాల బుట్ట'
        ],
        options_hi: [
          'गाड़ी भर अन्न, दो भैंसे और गाड़ी लेकर आने वाला एक मनुष्य',
          'हजार स्वर्ण मुद्राएं और गाय',
          'पांच बोरी गेहूं और घोड़ा',
          'रत्नों की पेटी'
        ],
        correctIndex: 0,
        learnMore: 'Bakasura lived in a cave near Ekachakra, devouring the cart’s contents, the animals, and the driver.',
        learnMore_te: 'బకాసురుడు అన్నాన్ని, దున్నపోతులను మరియు బండి తోలిన మనిషిని కూడా కసితీరా తినేసేవాడు.',
        learnMore_hi: 'बकासुर गुफा में रहता था और भोजन के साथ-साथ पशुओं और लाने वाले व्यक्ति को भी खा जाता था।',
        xpReward: 10
      },
      {
        id: 'q24-2',
        type: 'true_false',
        prompt: 'When Bhima reached the forest with the cart, he sat down and calmly ate all the food himself in front of the enraged demon.',
        prompt_te: 'అడవికి చేరుకున్న భీముడు కోపంతో రగిలిపోతున్న రాక్షసుడి ముందే కూర్చుని బండిలోని ఆహారమంతా తానే ఆరగించాడు.',
        prompt_hi: 'जंगल में पहुंचकर भीम ने बकासुर के सामने ही निश्चिंत होकर गाड़ी का सारा भोजन स्वयं खाना शुरू कर दिया।',
        correctAnswer: true,
        learnMore: 'Bhima casually ignored Bakasura’s roars, finishing the last grains before challenging and crushing the demon.',
        learnMore_te: 'బకాసురుడి అరుపులను పట్టించుకోకుండా చివరి మెతుకు వరకు తిన్న తర్వాత భీముడు అతడితో ద్వంద్వ యుద్ధం చేసి సంహరించాడు.',
        learnMore_hi: 'भीम ने बकासुर की दहाड़ पर ध्यान दिए बिना पहले तृप्त होकर भोजन किया, फिर उसका वध किया।',
        xpReward: 10
      },
      {
        id: 'q24-3',
        type: 'riddle',
        prompt: 'Hearing our Brahmin host family weeping because their turn had come, I commanded my strongest son to go as their substitute. Who am I?',
        prompt_te: 'మాకు ఆశ్రయమిచ్చిన బ్రాహ్మణ కుటుంబం ఏడవడం చూసి, వారి బదులుగా నా బలవంతుడైన కుమారుడిని బకాసురుడి వద్దకు పంపిన తల్లిని నేను. నేను ఎవరిని?',
        prompt_hi: 'आश्रयदाता ब्राह्मण परिवार को रोता देखकर मैंने अपने सबसे बलवान पुत्र को उनके स्थान पर भेजने का आदेश दिया। मैं कौन हूँ?',
        hint: 'Mother of the Pandavas.',
        hint_te: 'పాండవుల తల్లి.',
        hint_hi: 'पाण्डवों की जननी।',
        answer: 'Mother Kunti',
        answer_te: 'కుంతీ దేవి',
        answer_hi: 'माता कुन्ती',
        options: ['Mother Kunti', 'Gandhari', 'Satyavati', 'Hidimbi'],
        options_te: ['కుంతీ దేవి', 'గాంధారి దేవి', 'సత్యవతి దేవి', 'హిడింబి'],
        options_hi: ['माता कुन्ती', 'गांधारी', 'सत्यवती', 'हिडिम्बा'],
        learnMore: 'Kunti knew Bhima’s invincible might and wanted to fulfill their sacred duty of gratitude (Kritajnata) to their hosts.',
        learnMore_te: 'ఆశ్రయమిచ్చిన వారి పట్ల కృతజ్ఞత చూపడం ధర్మమని కుంతి తన కుమారుడి ప్రాణాలపై పూర్తి నమ్మకంతో పంపింది.',
        learnMore_hi: 'कुन्ती को भीम के बल पर पूर्ण विश्वास था और वे उपकार का बदला कृतज्ञता से चुकाना चाहती थीं।',
        xpReward: 20
      }
    ]
  },

  // Level 25
  {
    levelNumber: 25,
    partNumber: 3,
    title: 'The Fire-Born Queen',
    title_te: 'అగ్నిపుత్రి ద్రౌపది జననం',
    title_hi: 'अग्निसुता द्रौपदी का प्राकट्य',
    subtitle: 'King Drupada’s Yajna & The Prophecy',
    subtitle_te: 'ద్రుపదుడి పుత్రకామేష్టి & దివ్య ఆకాశవాణి',
    subtitle_hi: 'द्रुपद का यज्ञ और दिव्य भविष्यवाणी',
    questions: [
      {
        id: 'q25-1',
        type: 'mcq',
        prompt: 'Which two revered sages conducted the grand sacrificial Yajna for King Drupada of Panchala?',
        prompt_te: 'ద్రుపద మహారాజు కోసం పుత్రకామేష్టి యజ్ఞాన్ని నిర్వహించిన ఇద్దరు ప్రసిద్ధ ఋషులు ఎవరు?',
        prompt_hi: 'राजा द्रुपद के लिए पुत्रकामेष्टि यज्ञ का अनुष्ठान किन दो महान ऋषियों ने संपन्न करवाया था?',
        options: [
          'Sages Yaja and Upayaja',
          'Sages Vashishta and Vishwamitra',
          'Sages Dhaumya and Brihaspati',
          'Sages Agastya and Lopamudra'
        ],
        options_te: [
          'యాజుడు మరియు ఉపయాజుడు',
          'వశిష్ఠుడు మరియు విశ్వామిత్రుడు',
          'ధౌమ్యుడు మరియు బృహస్పతి',
          'అగస్త్యుడు మరియు లోపాముద్ర'
        ],
        options_hi: [
          'ऋषि याज और उपयाज',
          'महर्षि वशिष्ठ और विश्वामित्र',
          'ऋषि धौम्य और बृहस्पति',
          'महर्षि अगस्त्य और लोपामुद्रा'
        ],
        correctIndex: 0,
        learnMore: 'From the sacrificial altar emerged first the armor-clad prince Dhrishtadyumna, and then the lotus-eyed, dark-complexioned Draupadi (Krishnaa).',
        learnMore_te: 'యజ్ఞగుండం నుండి మొదట కవచధారి అయిన ధృష్టద్యుమ్నుడు, ఆ తర్వాత నీలవర్ణ శోభితయైన ద్రౌపది ఉద్భవించారు.',
        learnMore_hi: 'यज्ञकुण्ड से पहले कवच-कुंडल धारी धृष्टद्युम्न और उसके बाद श्यामवर्णा परम सुंदरी द्रौपदी का प्राकट्य हुआ।',
        xpReward: 10
      },
      {
        id: 'q25-2',
        type: 'true_false',
        prompt: 'A divine celestial voice echoed from the sacrificial flames declaring that Draupadi would lead to the destruction of the unrighteous Kshatriyas.',
        prompt_te: 'అధర్మపరులైన క్షత్రియుల నాశనానికి మరియు ధర్మ సంస్థాపనకు ఈమె కారణమవుతుందని యజ్ఞ అగ్ని నుండి ఆకాశవాణి పలికింది.',
        prompt_hi: 'यज्ञवेदी से आकाशवाणी हुई थी कि यह राजकुमारी अधर्मी क्षत्रियों के विनाश और धर्म स्थापना का कारण बनेगी।',
        correctAnswer: true,
        learnMore: 'The voice proclaimed: "This incomparable dark maiden shall be the foremost of all women, fulfilling the divine will of the gods."',
        learnMore_te: 'ఈ సుందరి సమస్త స్త్రీలలో ఉత్తమురాలై, దేవతల కార్యాన్ని నెరవేరుస్తుందని ఆకాశవాణి ప్రకటించింది.',
        learnMore_hi: 'आकाशवाणी ने कहा कि यह नीलकमल के समान सुगंधित कन्या कौरवों के संहार और पांडवों के कल्याण का मार्ग प्रशस्त करेगी।',
        xpReward: 10
      },
      {
        id: 'q25-3',
        type: 'riddle',
        prompt: 'Rising fully-armored from the sacred sacrificial altar with sword and bow in hand, I was destined from birth to bring the end of Guru Dronacharya. Who am I?',
        prompt_te: 'యజ్ఞగుండం నుండి చేతిలో ఖడ్గం, ధనుస్సుతో ఆయుధసమేతంగా జన్మించి, ద్రోణాచార్యుడి మరణానికి కారణమైన వీరుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'यज्ञ की ज्वालाओं से अस्त्र-शस्त्र और कवच सहित उत्पन्न हुआ, जिसका जन्म ही द्रोणाचार्य के वध के उद्देश्य से हुआ था। मैं कौन हूँ?',
        hint: 'Prince of Panchala and brother of Draupadi.',
        hint_te: 'పాంచాల యువరాజు, ద్రౌపది సోదరుడు.',
        hint_hi: 'द्रौपदी के भ्राता और पाण्डव सेनापति।',
        answer: 'Dhrishtadyumna',
        answer_te: 'ధృష్టద్యుమ్నుడు',
        answer_hi: 'धृष्टद्युम्न',
        options: ['Dhrishtadyumna', 'Shikhandi', 'Satyaki', 'Abhimanyu'],
        options_te: ['ధృష్టద్యుమ్నుడు', 'శిఖండి', 'సాత్యకి', 'అభిమన్యుడు'],
        options_hi: ['धृष्टद्युम्न', 'शिखंडी', 'सात्यकि', 'अभिमन्यु'],
        learnMore: 'Dhrishtadyumna later served as the supreme Commander-in-Chief of the seven Pandava Akshauhini divisions at Kurukshetra.',
        learnMore_te: 'కురుక్షేత్రంలో పాండవ సైన్యానికి సర్వ సైన్యాధ్యక్షుడిగా ధృష్టద్యుమ్నుడు నాయకత్వం వహించాడు.',
        learnMore_hi: 'धृष्टद्युम्न कुरुक्षेत्र युद्ध में पाण्डवों की सात अक्षौहिणी सेना के प्रधान सेनापति बने।',
        xpReward: 20
      }
    ]
  },

  // Level 26
  {
    levelNumber: 26,
    partNumber: 3,
    title: 'The Challenge of the Fish',
    title_te: 'మత్స్య యంత్ర సవాలు',
    title_hi: 'मत्स्य-वेध की चुनौती',
    subtitle: 'The Matsya-Yantra in Kampilya',
    subtitle_te: 'కాంపిల్య నగరంలో అసాధ్యమైన పరీక్ష',
    subtitle_hi: 'काम्पिल्य में घूमता चक्र और तेल का पात्र',
    questions: [
      {
        id: 'q26-1',
        type: 'mcq',
        prompt: 'What impossible challenge did King Drupada construct for Princess Draupadi’s Swayamvara?',
        prompt_te: 'ద్రౌపది స్వయంవరం కోసం ద్రుపద మహారాజు ఏర్పాటు చేసిన అసాధ్యమైన పరీక్ష ఏమిటి?',
        prompt_hi: 'द्रौपदी स्वयंवर के लिए राजा द्रुपद ने क्या कठिन शर्त रखी थी?',
        options: [
          'String a gigantic steel bow and shoot five arrows through a revolving wheel into the eye of a golden fish, looking only at its reflection in water below',
          'Defeat ten champions in a mace duel',
          'Tame a wild celestial stallion',
          'Solve three cosmological riddles'
        ],
        options_te: [
          'భారీ ఉక్కు ధనుస్సును ఎక్కుపెట్టి, క్రింద నూనెలో ప్రతిబింబాన్ని చూస్తూ, తిరుగుతున్న చక్రం గుండా ఐదు బాణాలతో చేప కన్నును కొట్టడం',
          'గదాయుద్ధంలో పదిమంది వీరులను ఓడించడం',
          'దివ్యమైన గుర్రాన్ని లొంగదీసుకోవడం',
          'మూడు తత్వ ప్రశ్నలకు సమాధానం చెప్పడం'
        ],
        options_hi: [
          'विशाल लोहे के धनुष पर प्रत्यंचा चढ़ाकर, नीचे जल/तेल में प्रतिबिंब देखते हुए घूमते चक्र के पार स्वर्ण मत्स्य की आंख का वेधन करना',
          'मल्लविद्या में दस योद्धाओं को पछाड़ना',
          'मदमस्त हाथी को वश में करना',
          'वेदों के तीन गूढ़ प्रश्नों के उत्तर देना'
        ],
        correctIndex: 0,
        learnMore: 'Drupada designed this test deliberately so that only Arjuna—the greatest archer on earth—could successfully accomplish it.',
        learnMore_te: 'అర్జునుడు తప్ప లోకంలో మరెవరూ ఈ ఘనకార్యాన్ని సాధించలేరని తెలిసే ద్రుపదుడు ఈ పరీక్షను ఏర్పాటు చేశాడు.',
        learnMore_hi: 'द्रुपद ने यह परीक्षा विशेष रूप से अर्जुन के लिए रची थी, क्योंकि वे गुप्त रूप से अर्जुन को ही दामाद बनाना चाहते थे।',
        xpReward: 10
      },
      {
        id: 'q26-2',
        type: 'true_false',
        prompt: 'The Pandavas traveled to Kampilya disguised in ascetic Brahmin garb, keeping their true identity completely hidden.',
        prompt_te: 'పాండవులు బ్రాహ్మణ వేషధారణలో కాంపిల్య నగరానికి చేరుకుని తమ అసలు గుర్తింపును గోప్యంగా ఉంచారు.',
        prompt_hi: 'पाण्डव संन्यासी ब्राह्मणों का भेष धारण कर काम्पिल्य पहुंचे और किसी को अपना वास्तविक परिचय नहीं दिया।',
        correctAnswer: true,
        learnMore: 'They sat among the quiet Brahmins in the amphitheater, observing kings and emperors boasting of their prowess.',
        learnMore_te: 'హంసతూలికా తల్పాలపై కూర్చున్న రాజుల మధ్య కాకుండా, నిరాడంబరంగా బ్రాహ్మణుల వరుసలో కూర్చున్నారు.',
        learnMore_hi: 'वे राजमंच के स्थान पर साधारण ब्राह्मणों के बीच बैठे और राजाओं के अहंकार को देखते रहे।',
        xpReward: 10
      },
      {
        id: 'q26-3',
        type: 'riddle',
        prompt: 'Present in the assembly alongside my brother Balarama, I smiled knowingly as I recognized the five disguised brothers sitting among the Brahmins. Who am I?',
        prompt_te: 'బలరాముడి పక్కన కూర్చుని, బ్రాహ్మణుల మధ్య మారువేషంలో ఉన్న పాండవులను చూసి చిరునవ్వు నవ్వి గుర్తుపట్టిన జగన్నాథుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'बलराम संग सभा में उपस्थित होकर ब्राह्मण वेश में बैठे पांचों भाइयों को देखते ही पहचान लिया और मंद-मंद मुस्काए। मैं कौन हूँ?',
        hint: 'The Lord of Dvaraka and Yadava leader.',
        hint_te: 'ద్వారకాధీశుడు, యాదవ శ్రేష్ఠుడు.',
        hint_hi: 'द्वारकाधीश, वासुदेव।',
        answer: 'Lord Krishna',
        answer_te: 'భగవాన్ శ్రీకృష్ణుడు',
        answer_hi: 'भगवान श्रीकृष्ण',
        options: ['Lord Krishna', 'Balarama', 'Satyaki', 'Kritavarma'],
        options_te: ['భగవాన్ శ్రీకృష్ణుడు', 'బలరాముడు', 'సాత్యకి', 'కృతవర్మ'],
        options_hi: ['भगवान श्रीकृष्ण', 'बलराम', 'सात्यकि', 'कृतवर्मा'],
        learnMore: 'Krishna nudged Balarama and whispered that the fire had preserved the sons of Pandu, and righteousness was about to triumph.',
        learnMore_te: 'పాండవులు సజీవంగా ఉన్నారని, త్వరలోనే ధర్మం గెలవబోతోందని శ్రీకృష్ణుడు బలరాముడికి సూచించాడు.',
        learnMore_hi: 'श्रीकृष्ण ने बलराम को संकेत किया कि पाण्डव लाक्षागृह की अग्नि से जीवित बच निकले हैं।',
        xpReward: 20
      }
    ]
  },

  // Level 27
  {
    levelNumber: 27,
    partNumber: 3,
    title: 'The Great Archery Contest',
    title_te: 'స్వయంవర రంగంలో విల్లు',
    title_hi: 'धनुष-यज्ञ और पराक्रम की परीक्षा',
    subtitle: 'Fall of the Proud Kings & Karna’s Turn',
    subtitle_te: 'గర్వించిన రాజుల పతనం & కర్ణుడి రాక',
    subtitle_hi: 'अहंकारी राजाओं की विफलता',
    questions: [
      {
        id: 'q27-1',
        type: 'mcq',
        prompt: 'What happened when mighty rulers like Duryodhana, Shalya, and Jarasandha attempted to string the heavy steel bow?',
        prompt_te: 'దుర్యోధనుడు, శల్యుడు, జరాసంధుడు వంటి మహా రాజులు ఉక్కు ధనుస్సును ఎక్కుపెట్టడానికి ప్రయత్నించినప్పుడు ఏమి జరిగింది?',
        prompt_hi: 'जब दुर्योधन, शाल्व, जरासंध जैसे बलशाली राजाओं ने धनुष उठाने का प्रयास किया, तब क्या हुआ?',
        options: [
          'The bow snapped back powerfully, tossing them to the ground and dislodging their crowns in humiliation',
          'The bow shattered into pieces',
          'They refused to touch the weapon',
          'The string was stolen'
        ],
        options_te: [
          'విల్లు ఎదురుతన్ని వారిని నేలపాలు చేసింది, వారి కిరీటాలు రాలిపోయి తీవ్ర అవమానం పాలయ్యారు',
          'ధనుస్సు ముక్కలైంది',
          'వారు ధనుస్సును తాకడానికి నిరాకరించారు',
          'నారిని ఎవరో దొంగిలించారు'
        ],
        options_hi: [
          'धनुष की प्रत्यंचा ने झटका देकर उन्हें दूर फेंक दिया और उनके मुकुट गिर पड़े',
          'धनुष टूटकर बिखर गया',
          'वे धनुष छूने से पीछे हट गए',
          'धनुष की डोरी गायब थी'
        ],
        correctIndex: 0,
        learnMore: 'The colossal bow was so taut that king after king was flung across the arena amid gasps and laughter from the spectators.',
        learnMore_te: 'ఆ మహాధనుస్సు బిగువుకు రాజులంతా బొక్కబోర్లా పడి సభలో నవ్వులపాలయ్యారు.',
        learnMore_hi: 'धनुष इतना भारी और कठोर था कि बड़े-बड़े शूरवीर उसे तनिक भी हिला न सके और लज्जित हुए।',
        xpReward: 10
      },
      {
        id: 'q27-2',
        type: 'true_false',
        prompt: 'When all monarchs failed, a young Brahmin youth (Arjuna in disguise) stood up from the crowd and sought permission to try the bow.',
        prompt_te: 'రాజులందరూ విఫలమైన తర్వాత, బ్రాహ్మణుల వరుస నుండి లేచిన ఒక యువకుడు (మారువేషంలో ఉన్న అర్జునుడు) విల్లును ఎక్కుపెట్టడానికి అనుమతి కోరాడు.',
        prompt_hi: 'समस्त राजाओं के विफल होने पर ब्राह्मणों के बीच से एक तेजस्वी युवक (वेशधारी अर्जुन) उठा और उसने धनुष उठाने की अनुमति मांगी।',
        correctAnswer: true,
        learnMore: 'While some Brahmins worried he would make their caste look foolish, others marveled at his broad chest and lion-like stride.',
        learnMore_te: 'కొందరు బ్రాహ్మణులు అనుమానించినప్పటికీ, అతడి రాజసం మరియు సింహపు నడకను చూసి ఆశ్చర్యపోయారు.',
        learnMore_hi: 'ब्राह्मणों में कानाफूसी होने लगी कि जो काम राजा न कर सके, वह यह सुकुमार ब्राह्मण कैसे करेगा, किंतु अर्जुन अडिग रहे।',
        xpReward: 10
      },
      {
        id: 'q27-3',
        type: 'riddle',
        prompt: 'Walking around the bow in sacred Pradakshina, I prayed to Lord Shiva and Krishna, lifted the bow as effortlessly as a lotus stalk, and strung it in the blink of an eye. Who am I?',
        prompt_te: 'ధనుస్సు చుట్టూ ప్రదక్షిణ చేసి, శివుడికి, కృష్ణుడికి నమస్కరించి, తామర కాడలా సులభంగా విల్లును ఎత్తి నారిని బిగించిన వీరుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'धनुष की परिक्रमा कर भगवान शिव और कृष्ण का स्मरण किया, और कमल की डंडी के समान सहजता से उसे उठाकर क्षणभर में प्रत्यंचा चढ़ा दी। मैं कौन हूँ?',
        hint: 'The third Pandava disguised as a Brahmin.',
        hint_te: 'విప్రవేషంలో ఉన్న గాండీవధారి.',
        hint_hi: 'ब्राह्मण वेशधारी पार्थ।',
        answer: 'Arjuna (Savyasachi)',
        answer_te: 'అర్జునుడు (సవ్యసాచి)',
        answer_hi: 'अर्जुन (सव्यसाची)',
        options: ['Arjuna (Savyasachi)', 'Bhima', 'Karna', 'Dhrishtadyumna'],
        options_te: ['అర్జునుడు (సవ్యసాచి)', 'భీముడు', 'కర్ణుడు', 'ధృష్టద్యుమ్నుడు'],
        options_hi: ['अर्जुन (सव्यसाची)', 'भीम', 'कर्ण', 'धृष्टद्युम्न'],
        learnMore: 'Arjuna’s effortless grace silenced the murmuring crowd, filling King Drupada’s heart with sudden hope.',
        learnMore_te: 'అర్జునుడి సునాయాస విన్యాసం సభలోని సందేహాలన్నింటినీ పటాపంచలు చేసింది.',
        learnMore_hi: 'अर्जुन की इस फुर्ती और तेज को देखकर राजा द्रुपद के मन में आशा की किरण जाग उठी।',
        xpReward: 20
      }
    ]
  },

  // Level 28
  {
    levelNumber: 28,
    partNumber: 3,
    title: 'Piercing the Golden Fish',
    title_te: 'మత్స్య యంత్ర భేదనం',
    title_hi: 'मत्स्य-वेधन और विजयमाला',
    subtitle: 'The Garland of Draupadi',
    subtitle_te: 'ద్రౌపది పూలమాల & విజయోత్సవం',
    subtitle_hi: 'वरमाला और स्वर्णिम विजय',
    questions: [
      {
        id: 'q28-1',
        type: 'mcq',
        prompt: 'Looking only into the oil vessel on the ground, how many arrows did Arjuna fire through the whirling wheel to strike down the fish target?',
        prompt_te: 'క్రింద ఉన్న నూనె పాత్రలో ప్రతిబింబాన్ని చూస్తూ, తిరుగుతున్న చక్రం గుండా అర్జునుడు ఎన్ని బాణాలు వేసి మత్స్యాన్ని నేలకూల్చాడు?',
        prompt_hi: 'नीचे तेल के पात्र में देखते हुए अर्जुन ने घूमते चक्र के पार कितने बाण मारकर स्वर्ण मछली को नीचे गिराया?',
        options: ['Five golden arrows in a single heartbeat', 'One single flaming arrow', 'Ten silver arrows', 'Three swift arrows'],
        options_te: ['ఒకే ఊపిరిలో ఐదు బంగారు బాణాలు', 'ఒకే ఒక్క అగ్ని బాణం', 'పది వెండి బాణాలు', 'మూడు వాడియైన బాణాలు'],
        options_hi: ['एक ही क्षण में पांच स्वर्णिम बाण', 'एक अकेला अग्निबाण', 'दस चांदी के तीर', 'तीन तीव्र बाण'],
        correctIndex: 0,
        learnMore: 'Arjuna’s five arrows flew in blinding succession, piercing the fish’s eye dead center and bringing it tumbling to the earth.',
        learnMore_te: 'అర్జునుడు సంధించిన ఐదు బాణాలు తిరుగుతున్న చక్రాన్ని ఛేదించి సరిగ్గా చేప కన్నును తాకి దానిని నేలకూల్చాయి.',
        learnMore_hi: 'अर्जुन के पांचों बाण बिजली की गति से घूर्णन करते चक्र के भीतर से निकले और मछली की आंख को भेद दिया।',
        xpReward: 10
      },
      {
        id: 'q28-2',
        type: 'true_false',
        prompt: 'Princess Draupadi stepped forward with a radiant smile and placed the white lotus garland around the neck of the victorious young Brahmin.',
        prompt_te: 'రాకుమారి ద్రౌపది సంతోషంతో ముందుకు వచ్చి విజేత అయిన బ్రాహ్మణ యువకుడి (అర్జునుడి) మెడలో పూలమాలను వేసింది.',
        prompt_hi: 'राजकुमारी द्रौपदी ने आगे बढ़कर मंद मुस्कान के साथ विजयी ब्राह्मण युवक (अर्जुन) के गले में वरमाला डाल दी।',
        correctAnswer: true,
        learnMore: 'Draupadi recognized nobility and unmatched skill in the youth, happily accepting him as her wedded lord.',
        learnMore_te: 'ద్రౌపది ఆయన పరాక్రమాన్ని చూసి సంపూర్ణ హృదయంతో తన భర్తగా అంగీకరించింది.',
        learnMore_hi: 'द्रौपदी ने हर्षित मन से अर्जुन का वरण किया और पूरी सभा में शंख और दुंदुभि बज उठे।',
        xpReward: 10
      },
      {
        id: 'q28-3',
        type: 'riddle',
        prompt: 'From the sacred sacrificial fire I came, with radiant dark beauty, fragrance of blue lotuses, and unyielding dignity that protected righteousness. Who am I?',
        prompt_te: 'యజ్ఞగుండం నుండి జన్మించి, నల్లకలువ తావులతో, ఆత్మగౌరవానికి మరియు ధర్మానికి ప్రతీకగా నిలిచిన అగ్నిపుత్రిని నేను. నేను ఎవరిని?',
        prompt_hi: 'यज्ञकुण्ड से उत्पन्न, नीलकमल जैसी सुगंध वाली और स्वाभिमान व धर्म की साक्षात प्रतिमूर्ति। मैं कौन हूँ?',
        hint: 'Daughter of Drupada and Queen of the Pandavas.',
        hint_te: 'పాంచాలి, పాండవ రాణి.',
        hint_hi: 'पांचाली, द्रुपदकन्या।',
        answer: 'Draupadi (Yajnaseni)',
        answer_te: 'ద్రౌపది (యాజ్ఞసేని)',
        answer_hi: 'द्रौपदी (याज्ञसेनी)',
        options: ['Draupadi (Yajnaseni)', 'Subhadra', 'Uttara', 'Chitrangada'],
        options_te: ['ద్రౌపది (యాజ్ఞసేని)', 'సుభద్ర', 'ఉత్తర', 'చిత్రాంగద'],
        options_hi: ['द्रौपदी (याज्ञसेनी)', 'सुभद्रा', 'उत्तरा', 'चित्रांगदा'],
        learnMore: 'Draupadi’s wedding marked the resurrection of the Pandavas on the political landscape of Aryavarta.',
        learnMore_te: 'ద్రౌపది వివాహంతో పాండవులు తిరిగి సగౌరవంగా లోకానికి తమ ఉనికిని చాటారు.',
        learnMore_hi: 'द्रौपदी स्वयंवर के साथ ही पाण्डव पुनः आर्यावर्त के राजनीतिक पटल पर अजेय शक्ति बनकर उभरे।',
        xpReward: 20
      }
    ]
  },

  // Level 29
  {
    levelNumber: 29,
    partNumber: 3,
    title: 'The Battle with the Kings',
    title_te: 'రాజుల ఆగ్రహం & పోరాటం',
    title_hi: 'राजाओं का रोष और युद्ध',
    subtitle: 'Bhima’s Tree & Arjuna vs Karna',
    subtitle_te: 'భీముడి చెట్టు ఆయుధం & కర్ణ-అర్జున ద్వంద్వం',
    subtitle_hi: 'वृक्ष-धारी भीम और कर्ण-अर्जुन का सामना',
    questions: [
      {
        id: 'q29-1',
        type: 'mcq',
        prompt: 'Why did the humiliated kings and monarchs attack King Drupada and the Pandavas immediately after the Swayamvara?',
        prompt_te: 'స్వయంవరం ముగిసిన వెంటనే అవమానంతో రగిలిపోయిన రాజులు ద్రుపదుడిపై, పాండవులపై ఎందుకు దాడి చేశారు?',
        prompt_hi: 'स्वयंवर के तुरंत बाद क्रोधित राजाओं ने द्रुपद और पाण्डवों पर आक्रमण क्यों कर दिया था?',
        options: [
          'They felt insulted that a Kshatriya maiden had been given to a humble Brahmin instead of royalty',
          'They wanted to take the steel bow',
          'Drupada refused to give them gifts',
          'They thought the fish target was a fake'
        ],
        options_te: [
          'రాజకుమార్తెను రాజులకు కాకుండా ఒక పేద బ్రాహ్మణుడికి ఇవ్వడం క్షత్రియులకు అవమానమని భావించి',
          'ఉక్కు ధనుస్సును దొంగిలించడానికి',
          'ద్రుపదుడు బహుమతులు ఇవ్వనందుకు',
          'చేప బొమ్మ నకిలీదని భావించి'
        ],
        options_hi: [
          'वे क्षत्रिय होकर एक साधारण ब्राह्मण को राजकुमारी दिए जाने से अपमानित महसूस कर रहे थे',
          'वे उस लोहे के धनुष को छीनना चाहते थे',
          'द्रुपद ने उन्हें विदाई उपहार नहीं दिए थे',
          'उन्हें लगा कि स्वयंवर की शर्त में छल हुआ है'
        ],
        correctIndex: 0,
        learnMore: 'The kings cried that Swayamvaras are reserved for Kshatriyas, and threatened to slay Drupada and burn Draupadi.',
        learnMore_te: 'స్వయంవరం క్షత్రియులకే పరిమితమని, బ్రాహ్మణుడికి కన్యనీయడం తగదని రాజులు యుద్ధానికి దిగారు.',
        learnMore_hi: 'राजाओं ने हुंकार भरी कि स्वयंवर क्षत्रियों का अधिकार है और द्रुपद ने उनका अनादर किया है।',
        xpReward: 10
      },
      {
        id: 'q29-2',
        type: 'true_false',
        prompt: 'Bhima uprooted a gigantic tree with bare hands, stripped its branches, and held back King Shalya and the charging hordes.',
        prompt_te: 'భీముడు ఒంటిచేత్తో ఒక పెద్ద వృక్షాన్ని పెకలించి, దానితో శల్యుడిని మరియు రాజ సైన్యాలను నిలువరించాడు.',
        prompt_hi: 'भीम ने अपनी नग्न भुजाओं से एक विशाल वृक्ष उखाड़ लिया और उसकी टहनियां झाड़कर राजा शल्य और सेना को रोक दिया।',
        correctAnswer: true,
        learnMore: 'Witnessing Bhima brandish a massive tree trunk like a lightweight club terrified the attacking kings.',
        learnMore_te: 'భీముడు భారీ వృక్షాన్ని గదలా తిప్పడం చూసి దాడికి వచ్చిన రాజులు భయకంపితులయ్యారు.',
        learnMore_hi: 'भीम को साक्षात यमराज की भांति वृक्ष घुमाते देखकर शल्य और अन्य राजा पीछे हटने को विवश हो गए।',
        xpReward: 10
      },
      {
        id: 'q29-3',
        type: 'riddle',
        prompt: 'Duelling with the unknown Brahmin archer who countered every one of my celestial shafts with ease, I stepped back in wonder and asked if he was Parashurama or Indra in disguise. Who am I?',
        prompt_te: 'బ్రాహ్మణ యువకుడితో ద్వంద్వ యుద్ధం చేస్తూ, తన ప్రతి బాణాన్ని అవలీలగా తిప్పికొడుతుంటే ఆశ్చర్యపోయి అతడు పరశురాముడా లేక ఇంద్రుడా అని అడిగిన మహావీరుడిని నేను. నేను ఎవరిని?',
        prompt_hi: 'उस अज्ञात ब्राह्मण के अचूक बाणों को देखकर चकित रह गया और पूछा कि "क्या तुम साक्षात परशुराम हो या इंद्र?" मैं कौन हूँ?',
        hint: 'The King of Anga and master of the Vijaya bow.',
        hint_te: 'అంగరాజ్యాధిపతి, దానవీరుడు.',
        hint_hi: 'अंगराज, सूर्यपुत्र।',
        answer: 'Karna (Radheya)',
        answer_te: 'కర్ణుడు (రాధేయుడు)',
        answer_hi: 'कर्ण (राधेय)',
        options: ['Karna (Radheya)', 'Shalya', 'Duryodhana', 'Drona'],
        options_te: ['కర్ణుడు (రాధేయుడు)', 'శల్యుడు', 'దుర్యోధనుడు', 'ద్రోణుడు'],
        options_hi: ['कर्ण (राधेय)', 'शल्य', 'दुर्योधन', 'द्रोण'],
        learnMore: 'Arjuna replied simply: "I am neither Indra nor Parashurama; I am merely a Brahmin versed in weaponry." Karna withdrew respectfully.',
        learnMore_te: 'కర్ణుడు ఆ బ్రాహ్మణుడి ధనుర్విద్యా నైపుణ్యానికి ముగ్ధుడై గౌరవంతో యుద్ధం విరమించాడు.',
        learnMore_hi: 'कर्ण ने उस ब्राह्मण के अद्भूत कौशल की प्रशंसा की और युद्ध समाप्त कर दिया।',
        xpReward: 20
      }
    ]
  },

  // Level 30
  {
    levelNumber: 30,
    partNumber: 3,
    title: 'The Fivefold Sacred Union',
    title_te: 'ధర్మబద్ధమైన పంచభర్తృత్వం',
    title_hi: 'पंचपाण्डव और द्रौपदी का परिणय',
    subtitle: 'Mother Kunti’s Words & Vyasa’s Sanction',
    subtitle_te: 'కుంతీదేవి వాక్కు & వ్యాసుడి దివ్య వివరణ',
    subtitle_hi: 'माता कुन्ती का वचन और वेदव्यास का विधान',
    questions: [
      {
        id: 'q30-1',
        type: 'mcq',
        prompt: 'What did Mother Kunti say from inside the potter’s hut when the sons announced they had brought home a great alms (Bhiksha)?',
        prompt_te: 'మేము గొప్ప భిక్ష తెచ్చామని కుమారులు చెప్పినప్పుడు, చూడకుండానే గుడిసె లోపలి నుండి కుంతీదేవి ఏమని పలికింది?',
        prompt_hi: 'जब कुम्हार की कुटिया के बाहर से पुत्रों ने कहा कि "माता, हम आज बड़ी भिक्षा लाए हैं", तब कुन्ती ने बिना देखे क्या उत्तर दिया?',
        options: [
          '"Enjoy and share whatever you have brought equally among all five brothers."',
          '"Keep it in the royal treasury."',
          '"Give it to the poor Brahmins."',
          '"Show it to King Drupada first."'
        ],
        options_te: [
          '"మీరు తెచ్చినదానిని ఐదుగురు సోదరులు సమానంగా పంచుకోండి."',
          '"దానిని రాజభాండాగారంలో ఉంచండి."',
          '"పేద బ్రాహ్మణులకు దానం చేయండి."',
          '"ముందుగా ద్రుపద మహారాజుకు చూపించండి."'
        ],
        options_hi: [
          '"जो भी लाए हो, पांचों भाई मिलकर उसका समान उपभोग करो।"',
          '"उसे राजकोष में जमा करा दो।"',
          '"दरिद्रों में बांट दो।"',
          '"पहले द्रुपद को दिखाओ।"'
        ],
        correctIndex: 0,
        learnMore: 'Kunti was horrified when she turned and saw Princess Draupadi, but in the Kuru lineage, a mother’s utterance could never be rendered untrue.',
        learnMore_te: 'ద్రౌపదిని చూడగానే కుంతి బాధపడినప్పటికీ, తల్లి పలికిన మాట అసత్యం కారాదని ధర్మరాజు నిర్ణయించాడు.',
        learnMore_hi: 'द्रौपदी को देखकर कुन्ती पश्चाताप से भर गईं, किंतु उनके मुख से निकला वचन धर्मतः टाला नहीं जा सकता था।',
        xpReward: 10
      },
      {
        id: 'q30-2',
        type: 'true_false',
        prompt: 'Sage Vyasa arrived in Kampilya and revealed to King Drupada the past-life austerities of Draupadi, proving the fivefold marriage was divinely ordained.',
        prompt_te: 'వ్యాస మహర్షి స్వయంగా విచ్చేసి, ద్రౌపది పూర్వజన్మ తపస్సు గురించి ద్రుపదుడికి వివరించి ఈ వివాహం దైవనిర్ణయమని ఒప్పించాడు.',
        prompt_hi: 'महर्षि वेदव्यास ने द्रुपद को द्रौपदी के पूर्वजन्म की तपस्या का रहस्य बताकर सिद्ध किया कि यह विवाह पूर्व-नियोजित दैवीय विधान है।',
        correctAnswer: true,
        learnMore: 'In her prior birth, Draupadi had asked Lord Shiva five times for a virtuous husband; Shiva granted five husbands, each possessing supreme virtues.',
        learnMore_te: 'పూర్వజన్మలో శివుడిని ఐదుసార్లు పతిని ప్రసాదించమని కోరిన ఫలితంగానే ఈ జన్మలో ఐదుగురు పాండవులు ఆమెకు భర్తలయ్యారు.',
        learnMore_hi: 'पूर्वजन्म में द्रौपदी ने शिवजी से पांच बार "सर्वगुण संपन्न पति" मांगा था, जिसके कारण उन्हें पांचों पाण्डव प्राप्त हुए।',
        xpReward: 10
      },
      {
        id: 'q30-3',
        type: 'riddle',
        prompt: 'Pillar of resilience and dignity, born from the sacrificial flames to stand beside righteousness through exile and war. Who am I?',
        prompt_te: 'అవమానాలను ఎదుర్కొని ధర్మానికి అండగా నిలిచి, యజ్ఞకుండం నుండి ఉద్భవించిన వీరనారిని నేను. నేను ఎవరిని?',
        prompt_hi: 'यज्ञकुण्ड से उत्पन्न, जिसने चीरहरण से लेकर महाभारत युद्ध तक स्वाभिमान और धर्म का ध्वज थामे रखा। मैं कौन हूँ?',
        hint: 'Completing Part 3 unlocks her legendary wallpaper in your gallery!',
        hint_te: 'పార్ట్ 3 పూర్తవడంతో ఈమె వాల్‌పేపర్ అన్‌లాక్ అవుతుంది.',
        hint_hi: 'भाग 3 पूर्ण करने पर इनका भव्य वॉलपेपर अनलॉक होता है।',
        answer: 'Queen Draupadi',
        answer_te: 'ద్రౌపది దేవి',
        answer_hi: 'महारानी द्रौपदी',
        options: ['Queen Draupadi', 'Queen Kunti', 'Gandhari', 'Subhadra'],
        options_te: ['ద్రౌపది దేవి', 'కుంతీ దేవి', 'గాంధారి దేవి', 'సుభద్ర'],
        options_hi: ['महारानी द्रौपदी', 'माता कुन्ती', 'गांधारी', 'सुभद्रा'],
        learnMore: 'With the royal wedding celebrated with immense grandeur, the Pandavas forged an invincible alliance with the mighty Panchalas.',
        learnMore_te: 'ఈ వివాహంతో పాండవులు మరియు పాంచాల రాజ్యం మధ్య అజేయమైన మైత్రి ఏర్పడింది.',
        learnMore_hi: 'इस विवाह के साथ ही पाण्डवों को पांचाल जैसे शक्तिशाली राज्य का अटूट समर्थन प्राप्त हो गया।',
        xpReward: 20
      }
    ]
  }
];
