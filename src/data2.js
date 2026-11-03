// Story data, part 2: the 1890s and the 1901 law.
Object.assign(window.SS.nodes, {

central: { id: 'central', title: 'The central mill', text: [
  { if: { cont: 'yes' }, t: 'You stayed in Queensland and signed new agreements. You have lived in the Mackay district since 1884, and you have worked for more than one employer.' },
  { if: { cont: 'no' }, t: 'You came back in 1889. By now you know the district and you know how to bargain for your pay.' },
  'It is the 1890s. The plantation system is changing. Mills are now built to crush cane from many small farms, not only from one large plantation. The Queensland Government lends money to groups of farmers to build them.',
  'Most of the new farmers are white families who want to work their own land. Parliament and many voters want the sugar industry to use white labour in the future. In 1896 a regulation says that a time-expired Islander must either return home within a month of an agreement ending or sign a new agreement.',
  { if: { abo: 'contact' }, t: 'You still see people from the creek family now and then. A woman from that family works on the farm next to yours. You have known her for years.' },
  'You earn wages. You can save toward a small block of land, or you can keep working for wages and not buy land. Some Islanders have bought land.'
 ],
 choices: [
  { label: 'Save to buy a small block of land near the mill.', to: 'protector', set: { land: 'yes' }, if: { abo: 'contact' } },
  { label: 'Keep working for wages and do not buy land.', to: 'protector', set: { land: 'no' }, if: { abo: 'contact' } },
  { label: 'Save to buy a small block of land near the mill.', to: 'law1901', set: { land: 'yes' }, if: { abo: 'no' } },
  { label: 'Keep working for wages and do not buy land.', to: 'law1901', set: { land: 'no' }, if: { abo: 'no' } },
  { label: 'Save to buy a small block of land near the mill.', to: 'law1901', set: { land: 'yes' }, if: { abo: 'told' } },
  { label: 'Keep working for wages and do not buy land.', to: 'law1901', set: { land: 'no' }, if: { abo: 'told' } }
 ],
 real: [
  { t: 'The first government-supported central mills in the Mackay district opened at North Eton in 1888 and at Racecourse in 1889. After that, the plantation system declined faster. The Sugar Works Guarantee Act 1893 allowed the Queensland Government to lend money for central mills. Farmers formed companies and mortgaged their land to secure the loans.', src: ['mackayCouncil', 'caneQld'] },
  { t: 'Moore writes that Queensland aimed for a new structure of small farms owned by white Australians, using their families as labour and supplying co-operative central mills paid for at first from the Treasury. Islander labour was by then no longer cheap, and Islanders were no longer short-contract servants.', src: ['moore2000'] },
  { t: 'In 1896 Queensland made a regulation that every time-expired Islander must, within one month after an agreement ended, either return to the islands or sign a new agreement with an employer.', src: ['moore2000'] },
  { t: 'Many Islanders had bank accounts, possessions or property by the 1890s. The ticket-holders and the Islanders who re-engaged made up 40 to 60 per cent of the Islander population from the mid-1880s.', src: ['moore2000'] },
  { t: 'Sugar grew in other districts too. At Bundaberg the South Sea Islander Wall at Mon Repos was built about 1884, probably by Islander labour, to clear stony land for cane. It is about 1,580 metres long and is listed on the Queensland Heritage Register. In the Burdekin, the Pioneer partnership began in 1883 and had five plantations and a mill by 1884. Low rainfall was a problem, and the partners started irrigation schemes. Near Cairns, the Hambledon mill began crushing in 1883, and in 1888 it employed 176 South Sea Islanders, 29 Chinese, 6 Javanese and 32 Europeans.', src: ['wall', 'jcu', 'hambledon'] },
  { t: 'Each sugar district is on Aboriginal country. For example, Bundaberg Regional Council acknowledges the Taribelang Bunda, Gooreng Gooreng, Gurang and Bailai Peoples as Traditional Owners. The Queensland Government history of the Cairns area records that Native Police “dispersals” killed many Yidindji and Djabugay people, and that Yarrabah mission was founded in 1892, where Aboriginal people and some South Sea Islanders were relocated by government.', src: ['bundabergCouncil', 'yarrabah'] }
 ],
 teacher: { about: 'This scene covers the shift from plantations to central mills and the first signs of the white-labour policy. The paragraph about a woman from the creek family appears only if Harry spoke with the man at the creek.', ask: ['Who was the new system of small farms and central mills designed for?', 'How does the real panel connect other districts to Mackay?'], answers: ['White farming families, with loans from the government. The system was designed to need less Islander labour.', 'The same pattern of plantations, Islander labour and Aboriginal dispossession appears at Bundaberg, the Burdekin and Cairns, with local differences.'] }
},

protector: { id: 'protector', title: 'The Protector', text: [
  'By 1897 you know the woman from the creek family well. You and she decide to live together. It is her decision as much as yours. Her family knows you.',
  'That year the Queensland Parliament passes a new law about Aboriginal people. In every district there is a Protector, who is often a police officer. He can say where Aboriginal people live and work, and he can send them to a reserve or a mission. An employer must have a permit to employ an Aboriginal worker.',
  'One morning the Protector comes to the farm. He asks her name and who she lives with. He says that he may send her to a reserve. What do you do?'
 ],
 choices: [
  { label: 'Ask her what she wants to do, and follow what she decides.', to: 'law1901', set: { abo: 'partner', prot: 'asked' } },
  { label: 'Speak to the Protector yourself and say that she is your wife.', to: 'law1901', set: { abo: 'partner', prot: 'spoke' } },
  { label: 'Say nothing. You are afraid of attracting attention.', to: 'law1901', set: { abo: 'partner', prot: 'silent' } }
 ],
 real: [
  { t: 'In 1897 Queensland passed the Aboriginals Protection and Restriction of the Sale of Opium Act. Under it and later Acts, local Protectors controlled Aboriginal labour and savings, and could remove people to reserves and missions. An Aboriginal worker could only be employed under a permit from a Protector, and an employer had to make an agreement of no more than 12 months.', src: ['senate', 'sarina'] },
  { t: 'From 1898 to 1967 there were 72 documented removals of Aboriginal people from the Mackay district. Most were removed to Yarrabah, Barambah (now Cherbourg), Woorabinda and Palm Island.', src: ['sarina'] },
  { t: 'In 1901 the Act was amended to set a minimum wage for Aboriginal workers under permit. For most workers it was five shillings, which the Senate committee says was less than one-eighth of the white wage. From 1904 wages could be paid directly to the Protector.', src: ['senate'] }
 ],
 teacher: { about: 'The woman and the Protector’s visit are invented. The law is real. The three choices show three levels of respect for her right to decide. The story does not say what the Protector did, because no record is known of this case.', ask: ['Which of Harry’s three choices gives the woman the most say?', 'How did the 1897 Act affect Aboriginal people’s work and wages?'], answers: ['Asking her what she wants and following what she decides. The other two choices leave Harry speaking for her or leaving her to face the Protector alone.', 'Permits were needed to employ them, a Protector could remove them, and wages and savings could be controlled by the Protector. The Senate committee says controls like these lasted for more than 85 years.'] }
},

law1901: { id: 'law1901', title: 'A new law', text: [
  { if: { prot: 'asked' }, t: 'Years ago the Protector asked her questions, and she answered them herself. She said that she wanted to stay near her family and her country. He wrote it down. For now she stays, and she keeps working under a permit.' },
  { if: { prot: 'spoke' }, t: 'Years ago, when you spoke to the Protector, he looked at you and then spoke to her. He asked her the same questions again. He wrote in his book and left. For now she stays, and she keeps working under a permit.' },
  { if: { prot: 'silent' }, t: 'Years ago she answered the Protector’s questions herself. She told you later that it would have helped to have you stand beside her. For now she stays, and she keeps working under a permit.' },
  'In 1901 the Australian colonies join to form the Commonwealth of Australia. The new Parliament passes laws to make a “White Australia”. One of them is the Pacific Island Labourers Act. The Governor-General agrees to it on 17 December 1901.',
  'The Act says that no new labourers can be licensed after 31 March 1904. It says that from the end of 1906 the government can deport Pacific Islanders. The only people who are exempt are those who came to Queensland before 1 September 1879, people who work in ships’ crews, and people who are given a certificate of exemption.',
  { if: { eng: 'yes' }, t: 'You can read the news in English. You read it twice and then explain it to a friend.' },
  { if: { eng: 'no' }, t: 'A friend who reads English tells you what the news says. You ask him to say it again.' },
  { if: { abo: 'partner' }, t: 'You think about her and her family. You do not know what the Act will mean for the two of you.' },
  'There are about 10,000 Pacific Islanders in Queensland and northern New South Wales. In November 1901 some Islanders in Mackay start the Pacific Islanders’ Association. Its purpose is to oppose deportation. What do you do?'
 ],
 choices: [
  { label: 'Join the Association and add your name to petitions.', to: 'petition', set: { joined: 'yes' } },
  { label: 'Do not join. Keep working and saving.', to: 'petition', set: { joined: 'no' } },
  { label: 'Decide to leave before the deadline, using your savings for a passage.', to: 'end_early', set: { left: 'early' } }
 ],
 real: [
  { t: 'The Pacific Island Labourers Act 1901 was one of the first laws passed by the new Commonwealth Parliament. It was part of a package that made up the White Australia policy, with the Immigration Restriction Act 1901. Assent was given on 17 December 1901.', src: ['naaPILA', 'moore2000'] },
  { t: 'Under the Act, labourers could enter under licence until 31 March 1904, in limited numbers. In 1902 entry was limited to three-quarters of the number who had left in 1901. In 1903 it was limited to half of the 1902 departures. No labour agreements were valid after the end of 1906, and after that date any person suspected of being a Pacific Islander had to prove that they were not.', src: ['naaPILA'] },
  { t: 'About 10,000 Pacific Islanders lived in Queensland and northern New South Wales when the Act passed. About 700 were ticket-holders who were exempt. In 1901, 839 Islanders returned to the islands and another 1,678 arrived.', src: ['moore2000', 'naaPILA'] },
  { t: 'The Pacific Islanders’ Association was formed in Mackay in November 1901. In August 1902 the Colonial Office received a petition to King Edward VII from about 3,000 Islanders. About 1,800 of the signatures were collected by Fanny Nicol, a missionary at Bundaberg. The King was advised to refuse it, but it embarrassed the Australian Government.', src: ['moore2000'] },
  { t: 'Queensland’s Premier, Robert Philp, wrote in November 1901 that deporting people who had come as legal immigrants would cause “great inhumanity and injustice”.', src: ['moore2000'] }
 ],
 teacher: { about: 'This scene gives the first law, the rules and the first choice about the deadline. A student who chooses to leave early reaches an ending now.', ask: ['What did the Act say about the end of 1906?', 'Why might someone decide to leave before the deadline?'], answers: ['No agreements would be valid after 1906, and after that the government could deport Pacific Islanders who were not exempt.', 'To keep control of when and how they went, to avoid being sent to the wrong place, or because they believed they could not win. Students can give other reasons.'] }
},

petition: { id: 'petition', title: 'The Association and the Royal Commission', text: [
  'Years pass. Recruiting ends in 1904. At the end of 1904 there are still 7,879 Islanders in Queensland, with the largest groups at Bundaberg, Mackay and Ingham. You are about thirty-seven.',
  { if: { joined: 'yes' }, t: 'You go to the Association’s meetings in Mackay. Members come from different islands, and they do not always agree about what to do. You listen, and you add your name to the petitions.' },
  { if: { joined: 'no' }, t: 'You hear about the Association’s meetings from people at work and at church, but you do not go. You are saving money and you want to keep your job.' },
  'In April 1906 a Queensland Royal Commission collects evidence about what the Act will do to the sugar industry and to Islanders. A delegation from the Association gives it a petition in Mackay. The Commission reports on 30 June. On 12 October 1906 an amendment to the Act becomes law. It adds new groups who are allowed to stay.',
  'The groups are: people who have lived in Australia continuously since 31 December 1886; people who are aged or infirm; people whose children go to state schools; owners of freehold land; people married before October 1906 to a partner from a different island; and people who can show that their lives would be in danger if they went home.',
  'The Prime Minister, Alfred Deakin, says that the new groups can stay. He says the order to deport everyone else will not be cancelled.',
  { if: { cont: 'no' }, t: 'You think about 1887 and 1888, when you were on your island. You were in Queensland on 31 December 1886, but you have not lived here continuously since then.' },
  'Now you must decide.'
 ],
 choices: [
  { label: 'Collect your papers and apply for a certificate of exemption.', to: 'end_stay', if: { cont: 'yes' } },
  { label: 'Collect your papers and apply for a certificate of exemption.', to: 'end_stay', if: { cont: 'no', land: 'yes' } },
  { label: 'Collect your papers and apply for a certificate of exemption.', to: 'end_deport', if: { cont: 'no', land: 'no' } },
  { label: 'Leave on your own passage rather than wait for an order.', to: 'end_early', set: { left: 'late' } },
  { label: 'Do not apply. Leave the district quietly and hide.', to: 'end_hide', if: { cont: 'no', land: 'no' } }
 ],
 real: [
  { t: 'A Queensland Royal Commission reported on 30 June 1906. It advised that more groups should be exempt from deportation. It found that some 4,000 to 4,500 Islanders were liable for deportation. On 7 August 1906 Deakin accepted most of the recommendations, and the amendment received assent on 12 October 1906.', src: ['moore2000'] },
  { t: 'The new exemption groups were Islanders who had lived continuously in Australia since 31 December 1886, the aged and infirm, those with children educated in state schools, owners of freehold land, those married before October 1906 to a partner not from their own island, and those who could show that their lives would be in danger if returned home. Sources give slightly different dates for the marriage cut-off.', src: ['moore2000', 'mcneill'] },
  { t: 'In 1906 the Pacific Islanders’ Association met regularly in Mackay, hired a solicitor, set by-laws and formed branches at Proserpine and Bowen. Henry Tongoa and Alick Mallicoola travelled to Melbourne and arrived on 13 September 1906. They met Prime Minister Deakin on 17 September and 1 October and gave him a petition from 427 members. Deakin said that the deportation provision would not be reversed.', src: ['moore2000'] },
  { t: 'The Association was not united. Rockhampton Islanders saw themselves as separate from the Mackay group, and New Hebrideans and Solomon Islanders often did not work together. Moore says that the Islanders’ leaders were able to work in both Melanesian and Australian society.', src: ['moore2000'] },
  { t: 'To encourage the change to white labour, the Commonwealth paid about £1 to £2 a ton of sugar to cane farmers and millers who used only white labour. In 1902 this was an excise and a rebate. In 1903 it became an excise and a bounty, and the bounty rose to £3 in 1905. By 1905, 78 per cent of farmers and labour in the sugar industry were white, and by 1911 it was 94 per cent.', src: ['moore2000', 'mcneill'] }
 ],
 teacher: { about: 'This scene shows the Islanders’ campaign, the Royal Commission and the amendment. The choices that Harry has depend on how he lived: whether he stayed continuously, bought land, or left.', ask: ['Why does the 1886 date matter in the story?', 'What does the Association’s work show about Pacific Islanders at the time?'], answers: ['Harry was in Queensland on 31 December 1886 but he went home in 1887, so he cannot show continuous residence. A person who stayed can.', 'That they organised petitions, hired a solicitor, met a Prime Minister and wrote to London. They were not passive. Students should also note that the campaign did not reverse the deportation order.'] }
}

});
