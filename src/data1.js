// Story data, part 1: title, sources, and the first scenes (1884 to 1887).
window.SS = {
title: 'The Sugar Story',
subtitle: 'A choose-your-path story set in the Mackay district, Queensland, from 1884 to 1907',

sources: {
  quassic1: { t: 'QUASSIC (Queensland United Australian South Sea Islander Council). Historical Information Sheet No 1: Defining Slavery, Indenture, and Blackbirding.', u: 'https://www.quassic.org.au/no-1-defining-slavery-indenture-and-blackbirding', short: 'QUASSIC sheet 1' },
  quassic6: { t: 'QUASSIC. Historical Information Sheet No 6: Mortality and Pacific Islander Migrants in Colonial Queensland.', u: 'https://www.quassic.org.au/no-6-mortality-and-pacific-islander-migrants-in-colonial-queensland', short: 'QUASSIC sheet 6' },
  quassic7: { t: 'QUASSIC. Historical Information Sheet No 7: Incidents of Abuse of Pacific Islanders during the Recruiting Process to Queensland.', u: 'https://www.quassic.org.au/no-7-incidents-of-abuse-of-pacific-islanders-during-the-recruiting-process-to-queensland', short: 'QUASSIC sheet 7' },
  naaSSI: { t: 'National Archives of Australia. Fact sheet: South Sea Islanders.', u: 'https://www.naa.gov.au/help-your-research/fact-sheets/south-sea-islanders', short: 'NAA fact sheet' },
  naaPILA: { t: 'National Archives of Australia. Pacific Island Labourers Act 1901 (learning resource).', u: 'https://www.naa.gov.au/students-and-teachers/learning-resources/learning-resource-themes/society-and-culture/migration-and-multiculturalism/pacific-island-labourers-act-1901', short: 'NAA, Pacific Island Labourers Act 1901' },
  peo: { t: 'Parliamentary Education Office. Pacific Islanders Labourers Act 1901 (with a General Certificate of Exemption dated 4 May 1907).', u: 'http://peo.gov.au/understand-our-parliament/history-of-parliament/history-milestones/australian-parliament-history-timeline/events/pacific-islanders-labourers-act-1901', short: 'Parliamentary Education Office' },
  qsa: { t: 'Queensland State Archives. Australian South Sea Islanders (collection guide and indexes, 1867–1948).', u: 'https://www.qld.gov.au/recreation/arts/heritage/archives/collection/assi', short: 'Queensland State Archives' },
  docdem: { t: 'Museum of Australian Democracy, Documenting Democracy. Pacific Island Labourers Act Amendment Act 1884 (Qld). Original held by Queensland State Archives, SRS 1296/1/17.', u: 'https://www.foundingdocs.gov.au/item-sdid-53.html', short: 'Documenting Democracy, 1884 Act' },
  nma: { t: 'National Museum of Australia. Defining Moments: Islander labourers.', u: 'https://www.nma.gov.au/defining-moments/resources/islander-labourers', short: 'National Museum of Australia' },
  slq: { t: 'State Library of Queensland, John Oxley Library blog (2013). A White Australia (a review of the 1901 booklet “A White Australia: the Kanaka Labor Question”).', u: 'https://www.slq.qld.gov.au/blog/white-australia', short: 'State Library of Queensland blog' },
  moore2000: { t: 'Moore, C. (2000). “Good-bye, Queensland, good-bye, White Australia; Good-bye Christians”: Australia’s South Sea Islander Community and Deportation, 1901–1908. The New Federalist, 4, 22–29.', u: 'https://www.multiculturalaustralia.edu.au/doc/moore_ssi_deport.pdf', short: 'Moore (2000)' },
  moore2015: { t: 'Moore, C. (2015). The Pacific Islanders’ Fund and the Misappropriation of the Wages of Deceased Pacific Islanders by the Queensland Government. Australian Journal of Politics and History, 61(1), 1–18.', u: 'https://www.assipj.com.au/southsea/wp-content/uploads/misappropriation-of-wages.pdf', short: 'Moore (2015)' },
  uq: { t: 'University of Queensland. Unskilled labour migration into Queensland (Research Week 2010 paper on the Polynesian Labourers Act 1868 (Qld)).', u: 'https://law.uq.edu.au/files/4284/Slavery-or-Salvation-Research-Week-2010.pdf', short: 'University of Queensland paper' },
  trove1885: { t: 'The Labour Trade. Newspaper report of 6 May 1885 on the voyage of the Hopeful, via Trove (National Library of Australia), article 174162604.', u: 'http://trove.nla.gov.au/newspaper/rendition/nla.news-article174162604.txt', short: 'Trove, The Labour Trade, 6 May 1885' },
  mackayCouncil: { t: 'Mackay Regional Council (2008). Mackay history lift-out: “A new port in Queensland” and “Sugar boom”.', u: 'https://www.mackay.qld.gov.au/__data/assets/pdf_file/0005/19490/library_12_page_lift-out.pdf', short: 'Mackay Regional Council history lift-out' },
  mackayTimeline: { t: 'Mackay Family History and Historical Society. Mackay Timeline: a chronological history of Mackay events.', u: 'http://mackayhistory.org/research/timeline/timeline.html', short: 'Mackay history timeline' },
  alexandra: { t: 'Mackay history research. Alexandra Sugar Mill, 1868–1884.', u: 'http://www.mackayhistory.org/research/sugar_mills/alexandra.html', short: 'Alexandra Sugar Mill, Mackay history' },
  pioneerMill: { t: 'Mackay history research. Pioneer Sugar Mill, 1867–1882 (John Spiller planted the first cane in the district on 1 June 1865).', u: 'https://mackayhistory.org/research/sugar_mills/pioneer.html', short: 'Pioneer Plantation, Mackay history' },
  sarina: { t: 'Queensland Government. Aboriginal and Torres Strait Islander community histories: Sarina (covers the Mackay district).', u: 'https://www.qld.gov.au/firstnations/cultural-awareness-heritage-arts/community-histories/community-histories-s-t/community-histories-sarina', short: 'Queensland Government, Sarina community history' },
  yarrabah: { t: 'Queensland Government. Aboriginal and Torres Strait Islander community histories: Yarrabah (covers the Cairns district).', u: 'https://www.qld.gov.au/firstnations/cultural-awareness-heritage-arts/community-histories/community-histories-u-y/community-histories-yarrabah', short: 'Queensland Government, Yarrabah community history' },
  senate: { t: 'Parliament of Australia, Senate Legal and Constitutional References Committee (2006). Unfinished business: Indigenous stolen wages, Chapter 2: Life under the protection Acts.', u: 'https://www.aph.gov.au/parliamentary_business/committees/senate/legal_and_constitutional_affairs/completed_inquiries/2004-07/stolen_wages/report/c02', short: 'Senate stolen wages report, ch. 2' },
  mcneill: { t: 'McNeill, H. and Marmo, M. (2023). Past–present differential inclusion: Australia’s targeted deportation of Pacific Islanders, 1901 to 2021. International Journal for Crime, Justice and Social Democracy, 12(1), 42–56.', u: 'https://doi.org/10.5204/ijcjsd.2743', short: 'McNeill and Marmo (2023)' },
  wall: { t: 'Queensland Heritage Register, entry 602230: South Sea Islander Wall, Mon Repos, Bundaberg Region (listed 1 October 2001).', u: 'https://apps.des.qld.gov.au/heritage-register/detail/?id=602230', short: 'Queensland Heritage Register 602230' },
  jcu: { t: 'James Cook University Library Archives. Pioneer Sugar Mill Archive (Burdekin district).', u: 'https://libserver.jcu.edu.au/specials/Archives/pioneer.html', short: 'JCU Library, Pioneer Sugar Mill Archive' },
  hambledon: { t: 'Canetrains wiki. Hambledon Mill (Edmonton, near Cairns). Cites the Australian Dictionary of Biography entry for Thomas Swallow.', u: 'https://canetrains.net/wiki/Hambledon_Mill', short: 'Canetrains, Hambledon Mill' },
  caneQld: { t: 'Canetrains wiki. Queensland (history of the sugar industry, including the Sugar Works Guarantee Act 1893).', u: 'https://canetrains.net/wiki/Queensland', short: 'Canetrains, Queensland' },
  bundabergCouncil: { t: 'Bundaberg Regional Council. Acknowledgement of Country (Taribelang Bunda, Gooreng Gooreng, Gurang and Bailai Peoples).', u: 'https://www.ourbundabergregion.com.au/acknowledgement-of-country', short: 'Bundaberg Regional Council' },
  photoBundaberg: { t: 'Photograph: South Sea Islanders on the deck of a ship arriving at Bundaberg, 1895 (R. J. Cottell, from Pugh’s Almanac 1895, p. 149). State Library of Queensland negative 16954, via Wikimedia Commons (public domain).', u: 'https://commons.wikimedia.org/wiki/File:StateLibQld_1_50564_South_Sea_Islanders_on_the_deck_of_a_ship_arriving_at_Bundaberg,_1895.jpg', short: 'Photograph, Bundaberg 1895' },
  photoHambledon: { t: 'Photograph: South Sea Islander workers hoeing weeds on a sugar cane plantation at Hambledon, Queensland, about 1891. State Library of Queensland (photographer unidentified; no known copyright restrictions), via Wikimedia Commons.', u: 'https://commons.wikimedia.org/wiki/File:Australian_South_Sea_Islander_workers_hoeing_weeds_on_a_sugar_cane_plantation_in_Hambledon,_Queensland,_ca._1891_(9205456322).jpg', short: 'Photograph, Hambledon about 1891' }
},

nodes: {

how: { id: 'how', title: 'Before the ship', set: { cont: 'yes', land: 'no', abo: 'no', trade: 'goods', voice: 'none', join: 'chose', eng: 'no', hut: 'given', left: 'late' }, text: [
  'This story is set in 1884. You are about seventeen years old. You live in a village on an island in the New Hebrides. Today the New Hebrides are part of the country of Vanuatu. The story does not name your island or your language. People from many islands and many language groups were part of this history, and one story cannot speak for all of them.',
  'Ships from Queensland come to the islands to recruit young people for plantation work. The work is for three years. A white captain and a white recruiter run each ship, and a Government Agent travels on board as well. A ship is now anchored near your village.',
  'How do you come to be on board?'
 ],
 choices: [
  { label: 'You choose to go. Young men from near your village went on a ship and came home with goods. You want to earn goods too.', to: 'ship', set: { join: 'chose' } },
  { label: 'You are told a story. A man tells you that the work will last one or two moons. You do not know that it will last three years.', to: 'ship', set: { join: 'told' } },
  { label: 'You are taken. Men pull you into a boat. You did not agree to go.', to: 'ship', set: { join: 'taken' } }
 ],
 real: [
  { t: 'The Queensland Government has records of 62,475 indenture contracts for Pacific Islanders between 1863 and 1904. Many men signed more than once, so there were probably about 50,000 individual people. About 95 per cent were adolescent or young adult males. Only about 5 per cent were women.', src: ['quassic1'] },
  { t: 'QUASSIC says historians estimate that about 10 to 15 per cent of recruits were kidnapped as the law defined it. It says most kidnapping happened in the first ten or so years in any area, and that some continued until the 1890s. It also says that many young men joined freely, sometimes more than once. It adds that the whole process took people from their communities and bound them with legal contracts they did not understand.', src: ['quassic1'] },
  { t: 'A newspaper report of 6 May 1885 on the voyage of the Hopeful describes men pulled on board and told that they were to go and work in a white man’s country “for one or two moons”.', src: ['trove1885'] },
  { t: 'There were 870 labour-recruiting voyages between Queensland and the Pacific Islands from 1863 to 1904.', src: ['quassic7'] }
 ],
 teacher: { about: 'Students meet the three ways the records describe people coming into the labour trade. The story does not say that one way was typical. The real history panel gives the estimates.', ask: ['Why does the story give three different ways of joining instead of one?', 'Why does the story not name Harry’s island or language?'], answers: ['Because the records show a range, from free choice to kidnapping, and historians disagree about the proportions. One story cannot show them all, so the reader sees each in turn.', 'Because the labour trade drew on about 80 islands and hundreds of languages. Naming one would claim to speak for that community, and the author does not have that right.'] }
},

ship: { id: 'ship', title: 'The voyage', text: [
  'The ship is crowded. Men and boys from several islands are on board, and some speak languages you do not know. The ship is at sea for many days.',
  { if: { join: 'chose' }, t: 'You are afraid, but you chose to come. You listen while the other men talk about what they hope to buy with their pay.' },
  { if: { join: 'told' }, t: 'Someone tells you the ship is going to Queensland. You ask when the ship will bring you home. No one gives you an answer that you understand.' },
  { if: { join: 'taken' }, t: 'You do not know where the ship is going. You try to talk to the other men, and some of them are afraid too.' },
  'The Government Agent is a white man who has a book. The law says he must check that the people on the ship came willingly and that the ship follows the rules. He speaks to you through an interpreter. In this story the interpreter is an islander who works for the ship. What do you say?'
 ],
 choices: [
  { label: 'Tell him the truth: you were told one or two moons, and you did not know it was three years.', to: 'landing', set: { voice: 'truth' }, if: { join: 'told' } },
  { label: 'Tell him the truth: you were taken, and you did not agree to come.', to: 'landing', set: { voice: 'truth' }, if: { join: 'taken' } },
  { label: 'Say that you chose to come.', to: 'landing', set: { voice: 'said' } },
  { label: 'Ask him how long the work will last.', to: 'landing', set: { voice: 'asked' } },
  { label: 'Say nothing.', to: 'landing', set: { voice: 'none' } }
 ],
 real: [
  { t: 'The Polynesian Labourers Act 1868 was the first Queensland Act made for the labour trade. It required employers to apply for approval, banned recruiters from kidnapping, set minimum standards for the voyage and set agreements of three years.', src: ['uq', 'moore2015'] },
  { t: 'The Pacific Island Labourers Act 1880 replaced the 1868 Act. It made forced recruiting illegal and required inspectors, called Government Agents, on the ships. The National Museum of Australia says that agents were not always careful and some could be bribed by the crew.', src: ['nma', 'moore2015'] },
  { t: 'In 1871 the Government Agent on the Jason tried to stop abuses. The captain had him handcuffed and chained to a ring-bolt for more than three weeks.', src: ['quassic7'] },
  { t: 'The 1884 voyages of the Hopeful went to islands east of New Guinea. The crew were tried in Brisbane in late 1884. A Royal Commission said the cruise was “one long record of deceit, cruel treachery, deliberate kidnapping and cold-blooded murder”. The men were found guilty. The death sentences were later commuted (reduced).', src: ['quassic7'] }
 ],
 teacher: { about: 'The Government Agent is a real office. The conversation in this scene is invented. The scene shows that a rule can exist without protecting every person.', ask: ['What was a Government Agent supposed to do?', 'Why might a person on the ship not tell the agent the truth?'], answers: ['Check that recruits came willingly and that the ship followed the rules for the voyage.', 'Fear of the crew, not understanding the questions, an interpreter who works for the ship, or believing that nothing would change. The story does not say which of these applies. Students can give reasons.'] }
},

landing: { id: 'landing', title: 'Mackay, 1884', text: [
  { if: { voice: 'truth' }, t: 'The Government Agent writes in his book. You do not know what he writes. The ship does not turn back.' },
  { if: { voice: 'said' }, t: 'The Government Agent writes in his book. The ship goes on.' },
  { if: { voice: 'asked' }, t: 'The Government Agent says that the work will last three years. Now you know how long it is. The ship goes on.' },
  { if: { voice: 'none' }, t: 'The Government Agent goes on to the next person. The ship goes on.' },
  'The ship arrives at the port of Mackay. A doctor looks at the new arrivals. Then you are walked with a group to a plantation on the Pioneer River.',
  'The overseer reads a list. The name beside yours is not your name. He calls you Harry. That is the name you will be called here.',
  'Your agreement is for three years. You will be paid £6 a year, paid in two parts, and given rations, clothes and a hut. You make a mark on a paper. It is not in your language, and you cannot read it.',
  'The overseer shows you the huts. You can ask to share a hut with people from your own area, or you can take the hut that you are given.'
 ],
 choices: [
  { label: 'Ask to share a hut with people from your own area.', to: 'work', set: { hut: 'own' } },
  { label: 'Take the hut you are given.', to: 'work', set: { hut: 'given' } }
 ],
 real: [
  { t: 'Pastoralists settled the Mackay district from 1862. John Spiller planted the first sugar cane in the district on 1 June 1865. About 70 Pacific Islanders arrived on the ship Prima Donna on 13 May 1867 to start work as indentured labourers on plantations around Mackay.', src: ['pioneerMill', 'mackayTimeline'] },
  { t: 'The Alexandra mill began crushing on 15 September 1868. By 1875, 23 sugar mills had been built in the district, before a cane disease damaged the crop. A second boom from 1879 to 1884 added 12 more mills.', src: ['alexandra', 'mackayCouncil'] },
  { t: 'The 1884 Amendment Act limited newly arrived labourers to field work in tropical agriculture. They could not work in sugar mills, the pastoral industry or the maritime industry.', src: ['docdem'] },
  { t: 'The standard agreement was for three years, at £6 a year, with rations, clothing, basic accommodation, medical care and a return passage.', src: ['slq', 'moore2015'] },
  { t: 'The words “Kanaka” and “blackbirding” appear in the records and in books. “Kanaka” is now an offensive word, and the story does not use it.', src: ['quassic1'] }
 ],
 teacher: { about: 'The new name, the mark on the paper and the hut choice are invented. The wage, term and rations are real. This scene is a good place to ask what informed consent means.', ask: ['What does Harry not know when he makes his mark?', 'Why did the planters want a three-year agreement?'], answers: ['He cannot read the paper and does not know what it says. He may not know how long he will be away.', 'It gave a fixed supply of labour at a fixed low wage, and the law required return passage at the end. Students may also mention that the system was designed as circular migration.'] }
},

work: { id: 'work', title: 'The first months', text: [
  'You start work clearing land and planting cane. The land is cleared by hand. Later you hoe weeds, strip dead leaves from the cane and cut ripe cane with a cane knife. The cut cane goes to the mill on carts.',
  { if: { hut: 'own' }, t: 'You share a hut with people from your own area. At night you can talk in your own language.' },
  { if: { hut: 'given' }, t: 'You share a hut with men from three different islands. You learn a few words of each other’s languages. You also learn English words used on the plantation.' },
  'There are very few women on the plantation. Most of the workers are men and boys. The work is hard and the days are long. When the wet season comes, you work in the rain.',
  'The overseer and the cart drivers speak English. You can start to learn their words, or you can keep mostly to your own language.'
 ],
 choices: [
  { label: 'Learn English words from the overseer and the cart drivers.', to: 'sick', set: { eng: 'yes' } },
  { label: 'Keep mostly to your own language and learn English more slowly.', to: 'sick', set: { eng: 'no' } }
 ],
 real: [
  { t: 'The work in the cane fields included land clearing, holing, planting, weeding, trashing (stripping dead leaves), cutting, ratooning (growing a new crop from the old roots) and carting cane. Islanders worked barefoot in wet, hot fields.', src: ['slq'] },
  { t: 'The hundreds of languages of Melanesia made it hard for islanders from different places to talk. Between 1880 and 1900 a Pidgin English developed on the plantations and became a common language. Later it helped Islanders act together.', src: ['moore2000'] },
  { t: 'Only about 5 per cent of indentured Pacific Islanders were women, so most plantation workforces were almost all male.', src: ['quassic1'] }
 ],
 teacher: { about: 'This scene gives a plain picture of the work. Harry’s English choice leads to a small difference later, when he hears about the 1901 law.', ask: ['What are the steps of growing and cutting cane in the scene?', 'Why did a common language matter later?'], answers: ['Clearing, holing, planting, weeding, trashing, cutting and carting.', 'It let people from many islands talk with each other and with officials, so they could organise petitions and meetings.'] }
},

sick: { id: 'sick', title: 'Sickness', text: [
  'In your second month a man in the next hut begins to cough and shake. He comes from another island and he is also a new arrival. He has a fever. Men on the plantation say that new arrivals fall ill more often than men who have been here longer.',
  'The overseer tells him to keep working. What do you do?'
 ],
 choices: [
  { label: 'Ask the overseer to send him to the hospital.', to: 'wages', set: { help: 'asked' } },
  { label: 'Stay with him at night and share your water and food.', to: 'wages', set: { help: 'stayed' } },
  { label: 'Say nothing. You are afraid of being punished.', to: 'wages', set: { help: 'silent' } }
 ],
 real: [
  { t: 'Government records show that more than 14,564 Islander labourers died in Queensland between 1868 and 1906. The real figure is probably closer to 15,000. That is about 24 per cent of the total number of indenture contracts. The main killers were tuberculosis, pneumonia, bronchitis, pleurisy, dysentery, measles and chicken pox.', src: ['quassic6'] },
  { t: 'The death rate in the first year of an indenture was about 81 per 1,000. The death rate for Europeans of all ages in Queensland was about 15 per 1,000. The death rate for Islanders in Queensland reached its highest point in 1884 at 147 per 1,000.', src: ['quassic6'] },
  { t: 'New arrivals suffered most. QUASSIC says that the longer an Islander lived in Queensland, the better the chance of a normal life span. It says that exposure to new diseases was the main cause of death, and that employers and the government can be blamed for keeping the system going for forty years after the death rate was known.', src: ['quassic6'] },
  { t: 'The Queensland Government set up the Pacific Islanders’ Fund in 1885. It held the unpaid wages of Islanders who died. Clive Moore found that the government seldom returned the full wages to the families of the dead, and used the money for other costs of the labour trade.', src: ['moore2015'] }
 ],
 teacher: { about: 'The man in the next hut is invented. The death rates are real. The story does not say that kindness or speaking up changed who lived, because the records do not show that.', ask: ['Why does the story give the same outcome whatever Harry chooses?', 'What do the numbers 81, 15 and 147 per 1,000 tell us?'], answers: ['Because disease was the main cause of death, and one person’s choice did not change the death rate. The choice changes what Harry does and how he feels.', 'Islanders in their first year died at more than five times the rate of Europeans. In 1884 the death rate across all Islanders in Queensland was the highest it ever reached.'] }
},

wages: { id: 'wages', title: 'Pay and goods', text: [
  { if: { help: 'asked' }, t: 'The overseer sends the sick man to the hospital after two days. You do not see him for three weeks. He comes back thinner, and he is alive.' },
  { if: { help: 'stayed' }, t: 'The sick man gets better slowly in the hut. You are tired for several days because you slept little. Then you catch a cough yourself, and it passes after a week.' },
  { if: { help: 'silent' }, t: 'The sick man falls down at work. The overseer sends him to the hospital. He is away for weeks and then he comes back. You wish you had spoken sooner.' },
  'Over that year several men on the plantation die of fever, chest illness and dysentery. This is not rare. No one tells you where they are buried.',
  'At the end of six months you are paid for the first time. The pay for six months is £3. Some of it is in cash and some of it is in goods from the plantation store. What do you do with it?'
 ],
 choices: [
  { label: 'Buy goods, such as cloth, a knife and tobacco, to take home one day.', to: 'creek', set: { trade: 'goods' } },
  { label: 'Save as much as you can in an account.', to: 'creek', set: { trade: 'saved' } }
 ],
 real: [
  { t: 'The standard pay for a first-indenture labourer was £6 a year from the 1860s. After 1880 it was paid every six months. It did not change for about forty years, while wages in the general workforce rose. Moore writes that it is a myth that Islanders were not paid, but the pay was far lower than the pay of European workers, and many Islanders received only part of their pay in cash.', src: ['moore2015'] },
  { t: 'Not every person was paid. The activist Faith Bandler said that her father and his relatives were paid nothing. She said she thought of it as a form of slavery.', src: ['nma'] },
  { t: 'QUASSIC explains that, in law, indenture was not the same as slavery. Slavery was a lifelong legal status. Indenture was a contract for a set time. But it also says that Australian South Sea Islanders call themselves the descendants of slaves, and that a deep sense of injustice cannot be answered by only denying that they were slaves.', src: ['quassic1'] }
 ],
 teacher: { about: 'The sick man’s recovery and the grave detail are invented. The pay rate and the six-monthly payment are real. The scene gives students the numbers needed to compare pay and risk.', ask: ['How much did Harry earn in a year?', 'Why does the story tell both what the law said and what Faith Bandler said?'], answers: ['£6. The scene says £3 for six months.', 'The law described a contract. Faith Bandler described what happened in her family. Students should see that the law and people’s experience can differ and that both are evidence.'] }
},

creek: { id: 'creek', title: 'The creek', text: [
  'On a Sunday you walk to the creek at the edge of the plantation. An Aboriginal man is fishing downstream. He is about your age or a little older. He sees you. Neither of you speaks.',
  'This is Aboriginal country. In this district it includes the country of the Yuibera people. Settlers took up land here in the 1860s, and there was fighting and killing in the 1860s and 1870s. The man at the creek knows this history and so do his family. You do not know it yet.',
  'The overseer has told you that the Aboriginal people from the creek cannot be trusted. What do you do?'
 ],
 choices: [
  { label: 'Nod to him and wait to see if he wants to speak.', to: 'contract_end', set: { abo: 'contact' } },
  { label: 'Walk away and say nothing to anyone.', to: 'contract_end', set: { abo: 'no' } },
  { label: 'Tell the overseer that you saw a man at the creek.', to: 'contract_end', set: { abo: 'told' } }
 ],
 real: [
  { t: 'Aboriginal people resisted the settlers who took their land. Widespread frontier violence happened across the Mackay district in the 1860s and 1870s. Native Police barracks were built at Marlborough in 1866 and at Bloomsbury, just north of Mackay, in 1868. The Queensland Government history says that the Native Police were important in crushing Aboriginal resistance.', src: ['sarina'] },
  { t: 'In 1871 the government set aside 14,080 acres near Cape Palmerstone and Homebush as an Aboriginal reserve. The area was reduced to 10,000 acres by 1878. In 1879 funding was cut, the school closed and 90 per cent of the reserve was opened for settlement. The residents had to move away. Some Aboriginal men had been hired out to local employers as labourers while the reserve operated.', src: ['sarina'] },
  { t: 'The people whose country includes the Mackay district have strong connections to it today. The Queensland Government history names the Yuibera, Wiri, Barada Barna Kabalbara and Yetimarla, Birri-Gubba and Kungalburra peoples for the nearby Sarina area.', src: ['sarina'] }
 ],
 teacher: { about: 'The man at the creek is invented. He is not given a name, nation or customs, and he does not exist to explain things to Harry. He is fishing and has his own purposes. The scene links the two histories that are told in this story.', ask: ['Why does the story not give the Aboriginal man a name or a speech about his culture?', 'What are the possible results of telling the overseer?'], answers: ['Because inventing a nation, name or customs would be wrong without community advice. He is there as a person with his own business, not as a guide.', 'Harry has no way to know what the overseer will do. In the story, the Aboriginal camp is moved on. Students can say why Harry might feel pressure to tell, and what that cost to others.'] }
},

contract_end: { id: 'contract_end', title: 'The end of the agreement', text: [
  { if: { abo: 'contact' }, t: 'The man at the creek nods back. He asks you a few words in English. You find that you each know some English and some words of the plantation Pidgin. He says he is there to fish, and he goes on fishing. Over the next two years you see him and some of his family at the creek on some Sundays. You hear that people from his family cut cane on farms upriver in some seasons. He and the people he knows have been moved off much of this land. You do not become close friends, but you start to know each other.' },
  { if: { abo: 'no' }, t: 'You walk on. You do not know whether the man at the creek watches you go. You see him again at the creek once or twice, and each time you nod and each time he nods back.' },
  { if: { abo: 'told' }, t: 'The overseer says that the Aboriginal people are on the plantation’s land without permission and that he will deal with it. A few weeks later the camp near the creek has been moved on. You do not know how or where to. No one tells you, and you do not ask.' },
  'It is 1887. Your three years are over. You are about twenty years old. The law says that the planter must pay for your passage home if you ask. You can also sign a new agreement and stay in Queensland.',
  { if: { trade: 'goods' }, t: 'You have goods from the store that you could take home.' },
  { if: { trade: 'saved' }, t: 'You have savings in an account.' },
  'Many men stay on a second agreement. Many go home. You have to decide.'
 ],
 choices: [
  { label: 'Take the passage home.', to: 'home' },
  { label: 'Sign a new agreement and stay in Queensland.', to: 'central' }
 ],
 real: [
  { t: 'The 1884 Amendment Act sorted Islanders into three groups. First-indenture labourers were limited to field work in tropical agriculture. Time-expired labourers, who had finished one agreement, were also limited in some cases, but others could work anywhere in the colony. “Ticket-holders”, who had arrived before 1 September 1879, were bound only by the ordinary laws of Queensland.', src: ['docdem'] },
  { t: 'Many people re-engaged without leaving Queensland. Moore writes that they became skilled in choosing employers and negotiating wages. By 1895 time-expired Islanders were 65 per cent of the Melanesians in the Mackay district.', src: ['moore2000', 'quassic6'] },
  { t: 'Most people on a first agreement were meant to serve three years and go home. The labour trade was a circular migration, not designed for settling in Queensland.', src: ['quassic6'] }
 ],
 teacher: { about: 'The decision here sets up the rest of the story. A person who stays in Queensland and a person who goes home will later be treated very differently by the 1901 law.', ask: ['What are the two options for Harry in 1887?', 'What was a “ticket-holder”?'], answers: ['Take the return passage, or sign a new agreement and stay.', 'An Islander who had arrived in Queensland before 1 September 1879. They were not bound by the special restrictions on Islander labour.'] }
},

home: { id: 'home', title: 'Home', text: [
  'You go home on a ship that carries people back to their islands. The ship lands you at your own island.',
  { if: { trade: 'goods' }, t: 'You bring cloth, a knife and other goods. Your family and neighbours welcome you and ask many questions about Queensland. Some of the goods are shared out.' },
  { if: { trade: 'saved' }, t: 'You bring the money you saved. Before the ship leaves you spend some of it on goods. Your family and neighbours welcome you and ask many questions about Queensland.' },
  'Life at home has changed. Ships have come more often. Some young people have gone to Queensland, and some have gone to Fiji and Samoa. You are not the same as when you left, and some people see you differently.',
  'Two years pass. In 1889 a recruiting ship comes again. A recruiter you do not know says that Queensland will pay wages again. Some of your friends talk about going. What do you do?'
 ],
 choices: [
  { label: 'Stay at home.', to: 'end_home' },
  { label: 'Sign again and go back to Queensland.', to: 'return', set: { cont: 'no' } }
 ],
 real: [
  { t: 'Re-enlistments from the islands began in the 1860s. In 1897, 230 of 934 recruits (24.6 per cent) had already served an indenture. By the 1890s about one-quarter of new arrivals had worked in Queensland, Fiji or Samoa.', src: ['quassic6', 'moore2000'] },
  { t: 'Recruiting for Queensland came mainly from the New Hebrides and the Solomon Islands. Around 80 islands in all were part of the trade, including islands that are now part of Vanuatu, Solomon Islands, New Caledonia, Fiji, Kiribati and Papua New Guinea.', src: ['nma'] },
  { t: 'The 1880 Act put a bond on ship owners so that they delivered passengers and their property back to the correct island at the end of their agreements.', src: ['moore2015'] }
 ],
 teacher: { about: 'Going home and then going back is a real pattern. The story uses it to show how a gap in residence can affect later law.', ask: ['Why might a person choose to go back to Queensland after going home?', 'What does “circular migration” mean?'], answers: ['To earn goods or money again, to see friends, or because of pressure or changes at home. The records do not give one reason.', 'Moving to work somewhere for a time and then returning home, repeatedly.'] }
},

return: { id: 'return', title: 'Back in Queensland', text: [
  'You sign in 1889 and sail again to Queensland. The agreement is for three years. You are placed on a plantation near Mackay.',
  'The talk among the planters is about the law. In 1885 Parliament passed a law to stop recruiting after 1890. Many planters and politicians want it changed. People on the plantation say that the ships may stop coming.',
  'When your agreement ends in 1892, you will need to decide what to do next. For now you work through the years on the plantation.'
 ],
 choices: [
  { label: 'Work out the agreement on the plantation.', to: 'central' }
 ],
 real: [
  { t: 'In 1885 Queensland passed a law meant to end recruiting. In 1892 Parliament repealed it and the labour trade continued until 1904. A Royal Commission said that sugar could not be grown at a profit for export “without the employment for hand work in the field of a class of labor cheaper and more suitable for the work than white labor”.', src: ['slq', 'moore2000'] },
  { t: 'Sources describe the 1885 to 1892 changes in different ways. The National Museum of Australia says that a ban in 1891 was postponed. The story only says what the State Library of Queensland blog says.', src: ['nma', 'slq'] }
 ],
 teacher: { about: 'This is a short scene that moves Harry from 1889 to the 1890s. It shows that the question of whether the labour trade should continue was a political debate at the time.', ask: ['Why did planters want the law to be changed?', 'Who was not asked about the law?'], answers: ['They said sugar could not be grown at a profit without cheaper labour than white labour.', 'The Islanders themselves. The people in the story and in the records had no vote in colonial Parliament.'] }
}

}
};
