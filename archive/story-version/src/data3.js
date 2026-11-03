// Story data, part 3: the five endings.
Object.assign(window.SS.nodes, {

end_stay: { id: 'end_stay', end: true, title: 'You stay', kind: 'You were allowed to stay', text: [
  'You gather your papers. They include your agreement papers and a statement from a farmer who knows you. You apply for a certificate of exemption. A government officer looks at your papers.',
  { if: { cont: 'yes' }, t: 'The officer sees that you have lived in Queensland continuously since 1884. That means you meet the rule about continuous residence since 31 December 1886.' },
  { if: { cont: 'no' }, t: 'You went home in 1887, so the rule about continuous residence does not help you. But you own your block of land, and owners of freehold land are one of the exempt groups.' },
  { if: { land: 'yes', cont: 'yes' }, t: 'You also own your block of land, which the officer notes.' },
  'The certificate is granted. It is a printed paper with your name. It protects you, but it does not protect the people who do not get one.',
  { if: { abo: 'partner' }, t: 'She is still in the district. Her life is still controlled by the law of 1897, and you both still have to deal with the Protector. You stay in the district where her family lives.' },
  'In 1907 and 1908 many of your friends and neighbours are put on ships. Some of them have lived in Queensland for more than twenty years.',
  'You stay in a country where the laws, and many people, treat you as an outsider. You work, you go to church, and you meet others on Sundays. The community continues.'
 ],
 summary: 'This ending shows the people who were allowed to stay. The official number was 1,654. Research suggests that about 2,500 Pacific Islanders actually remained. Around 7,500 were forced to leave. QUASSIC says that today’s Australian South Sea Islander population is largely descended from time-expired labourers and ticket-holders who stayed.',
 real: [
  { t: 'The Pacific Island Labourers Act 1901 and its 1906 amendment led to the issue of certificates of exemption. One General Certificate of Exemption, issued to an Islander known as Calleyho, is dated 4 May 1907.', src: ['peo'] },
  { t: 'The official number of Islanders allowed to remain was 1,654. Patricia Mercer’s research suggests that about 2,500 remained, so almost 1,000 avoided deportation.', src: ['moore2000', 'naaSSI'] },
  { t: 'Today the descendants of Pacific Islanders brought to Australia are a distinct cultural group, called the Australian South Sea Islander community. Many have shared South Sea Islander and Aboriginal heritage. In 2000 the Queensland Government recognised South Sea Islanders as a distinct cultural group and acknowledged the discrimination and injustice they had experienced.', src: ['naaSSI', 'nma'] }
 ],
 teacher: { about: 'This ending is available to people who lived continuously in Queensland since before the end of 1886, or who owned land. The certificate scene and the officer’s questions are invented. The categories are real.', ask: ['Which exemption groups let Harry stay in this ending?', 'Why does the story say the certificate “does not protect the people who do not get one”?'], answers: ['Continuous residence since 31 December 1886, or owning freehold land.', 'Because many other people who had also lived in Queensland for years were deported. Students should name the group that did not qualify in this story, and discuss whether the rules were fair.'] }
},

end_deport: { id: 'end_deport', end: true, title: 'The ship', kind: 'You were deported', text: [
  'You gather your papers and apply. The officer asks where you lived on 31 December 1886 and whether you have lived in Australia continuously since then. You tell him that you were in Queensland then, but that you went home in 1887 and came back in 1889. He says that this means you have not lived here continuously.',
  'You have no land. You have no child at a state school and no marriage that counts.',
  { if: { abo: 'partner' }, t: 'You tell him about her. The officer writes it down. He says that it does not stop the order.' },
  'Your application is refused. In 1907 you are put on a ship with other men, women and children. You are about forty. You have lived in Queensland for most of your adult life.',
  'The ship lands you somewhere in the islands. It may not be the place where you grew up, because the Act did not say that people must be taken to their home villages.',
  'Your village has changed. Some of your family have died. Some of the land is used by others. You speak English and Pidgin well, and your clothes and habits are not the same as those of the people around you.',
  { if: { abo: 'partner' }, t: 'You and she are on different sides of the sea. You do not know if you will see each other again.' }
 ],
 summary: 'This ending shows the people who were deported. Deportations began in late 1906 and continued until mid-1908. The National Archives says about 7,500 people were forced to leave. One research paper says that estimates of those deported range from 4,500 to 7,000, including children. Some were separated from partners and children who stayed.',
 real: [
  { t: 'The final deportation began in late 1906 and continued until mid-1908. It took longer than the government had planned. The Pacific Island Branch of the Queensland Immigration Department closed on 31 July 1908.', src: ['naaPILA', 'moore2000'] },
  { t: 'The Act did not say that people had to be returned to their home villages. Governments planned to arrange work in the Solomon Islands, Fiji and the New Hebrides, or return to mission stations. The National Archives holds records about the consequences of returning people to the wrong island, and about Islanders who had married into the Aboriginal community.', src: ['moore2000', 'naaSSI'] },
  { t: 'McNeill and Marmo write that Islander men who lived with or had married Aboriginal or Torres Strait Islander women were deported anyway in some cases. They write that 17 of the people deported would otherwise have met the criteria to stay, but had married Aboriginal or Torres Strait Islander people.', src: ['mcneill'] },
  { t: 'Some people deported in 1906 to 1908 had arrived in Australia at such a young age that they had no memory of their home country.', src: ['nma'] }
 ],
 teacher: { about: 'This ending shows a person who is refused because of an earlier decision to go home. Whether to go home in 1887 seemed a free choice at the time. The story does not say that Harry did anything wrong. The law set rules that he could not have known.', ask: ['Why was Harry refused?', 'What does the paragraph about the Aboriginal woman show?'], answers: ['He had left Queensland in 1887, so he did not meet the continuous-residence rule. He had no land, no child at school and no qualifying marriage.', 'That the law did not treat a marriage to an Aboriginal woman as a reason to stay, and that deportation could split families. This is supported by the National Archives and by the 2023 research paper.'] }
},

end_early: { id: 'end_early', end: true, title: 'On your own passage', kind: 'You chose to leave', text: [
  { if: { left: 'early' }, t: 'In 1902 you decide to go. You take your savings and pay for a passage. You sell what you cannot carry.' },
  { if: { left: 'late' }, t: 'It is 1906. You decide to leave on your own passage rather than wait for an order. You take your savings and pay your fare. You sell what you cannot carry.' },
  { if: { abo: 'partner' }, t: 'You talk with her about it. She says that she will stay in her own country. You each make your own decision. You leave knowing that you may not meet again.' },
  'Your ship goes to the islands. You choose when you pack and what you take. Many other people did not have that choice.',
  'You arrive after many years in Queensland. Your village has changed. You are glad to be there, and you also miss what you built in Queensland.'
 ],
 summary: 'This ending shows people who left by their own decision. The 1901 Act limited new arrivals, ended licences and made staying harder, so many Islanders left before the deportations. In 1901, 839 Islanders returned to their islands. They still lost the homes and lives they had made in Queensland.',
 real: [
  { t: 'The Act was meant to remove Pacific Islanders by limiting new arrivals and encouraging people to leave before the deportations began.', src: ['naaPILA', 'moore2000'] },
  { t: 'In 1901, 839 Islanders returned to the islands and 1,678 arrived. At the end of 1904, after recruiting ended, there were still 7,879 Islanders in Queensland.', src: ['moore2000'] },
  { t: 'The 1902 petition argued that some home islands had become German possessions and that tribal lands had been sold, so families might not welcome people back. In 1903 the British Resident Commissioner in the New Hebrides warned that, unless returning labourers wanted plantation work, Australia would have to supervise their return to their villages or buy land for new villages.', src: ['moore2000'] }
 ],
 teacher: { about: 'This ending is a choice to leave. It does not say that leaving was better or worse. Many people had little real choice.', ask: ['How is leaving early different from being deported?', 'Why might leaving early still be called a result of the Act?'], answers: ['The person decides when and how to go, and may keep savings and goods. A deported person is ordered to go.', 'Because the Act was designed to push people to leave by ending licences and limiting entry. The choice was made under pressure.'] }
},

end_home: { id: 'end_home', end: true, title: 'Home', kind: 'You went home in 1887', text: [
  'You stay at home in 1889. You work, and you tell your family what Queensland was like.',
  'Years later you hear that the new Australian Commonwealth has passed a law to send most Islanders home. It does not apply to you.',
  'From 1906 to 1908 people who stayed in Queensland come back to the islands on government ships. Some have lived in Queensland for twenty years or more. Some do not find a welcome in the villages they left.',
  { if: { help: 'asked' }, t: 'You think about the man in the next hut and the hospital. You do not know if he is alive.' },
  { if: { help: 'stayed' }, t: 'You think about the man in the next hut and the nights you sat with him. You do not know if he is alive.' },
  { if: { help: 'silent' }, t: 'You think about the man in the next hut. You do not know if he is alive.' },
  { if: { abo: 'contact' }, t: 'You also think about the creek and the people who fished there. You do not know what happened to them.' }
 ],
 summary: 'This ending shows the outcome that the labour system was designed for: a three-year agreement followed by a return home. Records show that the number of Islanders who died in Queensland between 1868 and 1906 was equal to about 24 per cent of the number of contracts. Going home early meant avoiding the 1901 law, but it did not undo the harm done to people who were taken or deceived, or to the communities they left.',
 real: [
  { t: 'The labour trade was designed as a circular migration. Most first-indenture labourers were meant to serve three years and go home. Many re-engaged, in Queensland or after returning to the islands.', src: ['quassic6', 'moore2000'] },
  { t: 'More than 14,564 Islander labourers died in Queensland between 1868 and 1906. This is about 24 per cent of the number of indenture contracts.', src: ['quassic6'] },
  { t: 'The Queensland State Archives holds records of recruitment, agreements, employment, health, deportation and the Islanders who remained, for 1867 to 1948.', src: ['qsa'] }
 ],
 teacher: { about: 'This ending is the “ordinary” path in the story. It is short on purpose, because the person who goes home does not appear in most of the Queensland records.', ask: ['Why is this a short ending?', 'What do the records not tell us about people who went home?'], answers: ['Because the person left the Queensland records when he left, and the story does not invent what happened at home.', 'What their lives were like at home, what they thought of the trade, and what happened to their villages. Most records were written by officials and employers.'] }
},

end_hide: { id: 'end_hide', end: true, title: 'Hiding', kind: 'You avoided deportation', text: [
  'You do not apply. You leave the plantation district and live quietly on the edge of a town. You take small jobs.',
  { if: { abo: 'partner' }, t: 'She says she cannot hide you, and she does not want trouble brought to her family. You accept her decision.' },
  'You have no certificate. You cannot sign a work agreement in your own name, and you cannot ask an official for help. You change where you sleep.',
  'In 1907 and 1908 officers come to Islander settlements with lists. You are not found. You do not know how long that will last.',
  'Years pass. The law stays in force. You do not know whether you are safe or whether someone will report you.'
 ],
 summary: 'This ending shows people who avoided deportation by hiding. No one knows exactly how many. One researcher’s estimate, cited in a 2023 paper, is that about 900 people hid in the bush. The official number allowed to remain was 1,654, but research suggests that about 2,500 stayed. Harry’s path is an invented example. No record tells his story.',
 real: [
  { t: 'An estimated 900 people hid in the bush to avoid deportation. This estimate is from a 2019 magazine article by Alex McKinnon, cited in a research paper.', src: ['mcneill'] },
  { t: 'The official number of Islanders allowed to remain was 1,654. Patricia Mercer’s research suggests the actual number remaining was around 2,500, which suggests that almost 1,000 avoided deportation.', src: ['moore2000', 'naaSSI'] },
  { t: 'Under the Act, a person who was suspected of being a Pacific Islander had to prove that they were not.', src: ['naaPILA'] }
 ],
 teacher: { about: 'This ending is based on an estimate, not on a named person’s story. It is included because historians have worked out that many people were not caught.', ask: ['How do historians know that people hid?', 'Why is this ending labelled “invented”?'], answers: ['They compare the official number allowed to stay (1,654) with the number who seem to have remained (about 2,500), and some sources report an estimate of 900 hiding.', 'Because no known record tells the story of one person hiding in this way. The details are made up to match the estimate.'] }
}

});
