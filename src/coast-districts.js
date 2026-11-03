// The districts for the "Up the coast" page. Each fact has a source key from src/sources.js or src/coast-sources.js.
// year = the first year in which the sources document sugar cane being planted or a sugar plantation or mill there.
// lat and lon are the position of the main town, used only to place the dot on the simple outline map.
window.INFO = window.INFO || {};
window.INFO.coast = window.INFO.coast || {};
window.INFO.coast.districts = [
{ id: 'moreton', name: 'Moreton Bay: Ormiston and Cleveland', short: 'Moreton Bay', year: 1862, lat: -27.53, lon: 153.27,
  note: 'Louis Hope plants cane at Ormiston in 1862. His mill makes the first commercially milled sugar in Queensland in September 1864.',
  country: 'Quandamooka Country (the Koobenpul clan at Cleveland)',
  image: 'ormiston',
  first: [
    { p: [
      'The Queensland Heritage Register says that in the early 1860s Louis Hope tried cotton and then sugar cane at Ormiston, near Cleveland. By late 1862 the estate had 8 hectares of cane. In 1864 he built Queensland’s first sugar crushing mill, supplied by Cook and Co. of Glasgow, and the first commercially milled sugar in Queensland was made there in September 1864. In 1865 it was the largest sugar plantation in Queensland.',
      'The Australian Dictionary of Biography says the mill made about 3 tonnes of sugar and 762 kilograms of molasses in 1864. It also says Hope supplied cane plants for John Buhot’s experiments and for growers in the Oxley district. A heritage register entry for the Maryborough mill says that in 1862 Buhot, who came from Barbados, made sugar granules from cane grown in the Brisbane Botanical Gardens.',
      'By 1869 the mill was also working as a central crushing mill. It bought cane from smaller growers and kept half of the product. The Light Railway Research Society says the mill closed in 1874 after management problems.'
    ], src: ['qhrOrmiston', 'adbHope', 'wpCentralMill', 'lrrsa'] },
    { p: ['The same society says that Claudius Whish and his partner Trevillian used Islander labour at their sugar plantation at Caboolture in 1865. It says there were about 2,000 acres of cane in the Brisbane district by 1867, and six sugar mills in Queensland.'], src: ['lrrsa'] }
  ],
  central: [
    { p: ['The sources used here do not name a central mill built under the Sugar Works Guarantee Act 1893 in this district. The nearest one that they document is at Nambour (see Maroochy and Nambour).'], src: [] }
  ],
  ssi: [
    { p: ['The Queensland Heritage Register says Hope employed South Pacific Islanders in his canefields from September 1867. The Australian Dictionary of Biography says Islander labour was used from 1865. The Light Railway Research Society says Hope began using Islander labour in 1867.',
          'The same society says that, after the Don Juan arrived in 1863, others soon recruited Pacific Islanders for cotton and sugar plantations at Cleveland, Caboolture and Maryborough.'], src: ['qhrOrmiston', 'adbHope', 'lrrsa'] }
  ],
  country_text: [
    { p: ['Wikipedia says Cleveland is the traditional territory of the Koobenpul clan of the Quandamooka. Redland City Council says Quandamooka people have lived in the area for tens of thousands of years, and that more than 5,000 Aboriginal people lived in what is now Redland City when Europeans first arrived in the 1820s.',
          'The Moreton Bay Foundation says the Quandamooka people were dispossessed of their Country through the colonial process. On 4 July 2011 the Federal Court recognised their native title over land and waters on and around North Stradbroke Island and some other islands in Moreton Bay.',
          'The sources used here do not describe how Hope’s plantation affected Quandamooka people. That is a gap in this resource.'], src: ['wpCleveland', 'redlandQuandamooka', 'mbfQuandamooka'] }
  ],
  people: 'Louis Hope, John Buhot, Claudius Whish.',
  flags: [
    'Sources differ on the first mill: the memorial plaque at Ormiston says it was built in 1863, and the Queensland Heritage Register and the Australian Dictionary of Biography say 1864.',
    'Sources differ on when Hope began using Islander labour: 1865 (Australian Dictionary of Biography) or 1867 (Queensland Heritage Register and the Light Railway Research Society).'
  ],
  srcAll: ['monumentPioneers']
},
{ id: 'logan', name: 'Logan and Albert rivers', short: 'Logan and Albert', year: 1865, lat: -27.70, lon: 153.15,
  note: 'Islanders arrive for Robert Towns’s cotton plantation in 1863. Cane is planted at Beenleigh in the mid-1860s and mills follow from 1869.',
  country: 'Yugambeh Country (Quandamooka Country reaches the Logan River)',
  first: [
    { p: [
      'On 14 August 1863 the schooner Don Juan reached Moreton Island with 67 Pacific Islander men. They walked to Robert Towns’s cotton plantation, Townsvale, on the Logan River. Logan City Council gives 73 for the first shipment.',
      'Logan City Council says sugar became the main industry between 1866 and 1874, and that many mills were built along the river. It says William Fryar had a sugar lease from 1865, and that in 1867 Louis Hope sent his manager John McDonald to encourage farmers to plant sugar and send it to his mill. By 1869 James Strachan and William Fryar had built the first sugar mill on the river at Loganholme, which Logan City Council dates to July 1869.'
    ], src: ['moore2015', 'naaSSI', 'loganVeresdale', 'loganEarly', 'loganholme'] },
    { p: [
      'Beenleigh was the plantation of John Davy and Francis Gooding, who were brothers-in-law. Logan City Council says they settled there in 1864. Wikipedia, following the heritage register, says land between the Albert and Logan rivers was planted with cane in 1865, that they had 55 acres of cane by 1869 and were building a mill, and that the mill was working by 1870.',
      'The Sugar and Coffee Regulations of 1864 let people lease 320 to 1,280 acres for three years with an option to buy. Thirty-nine leases were granted in the first months, and ten were in the Logan area. By 1876 a gazetteer described Beenleigh as serving an area with nine sugar mills and two distilleries within six kilometres.',
      'At Pimpama, farmers tried cotton in the 1860s and then sugar. By December 1876 the main Pimpama plantations had stopped growing sugar and turned to cattle or arrowroot, although some smaller farms kept growing it.'
    ], src: ['loganBeenleigh', 'wpBeenleighRum', 'wpPimpama'] }
  ],
  central: [
    { p: ['The sources used here do not name a central mill built under the 1893 Act in this district. The industry here declined after the flood of January 1887 and the drought of 1888. Logan City Council says there were 40 sugar mills in the region in 1885 and only 9 in 1888. Farmers turned to dairying.'], src: ['loganholme'] }
  ],
  ssi: [
    { p: ['Logan City Council says Towns hoped to build a community of Islanders on his property, but could not persuade married men to come. The estate grew into a community of European and Islander workers, with a cotton gin, a sawmill and a small hospital. It says the contracts for the first group gave ten shillings a month, with food and housing and the right to be taken home.',
          'Logan City Council also says Louis Hope and many Logan River farmers used Islander labour.'], src: ['loganVeresdale', 'loganholme'] }
  ],
  country_text: [
    { p: ['The Yugambeh Museum says the area near Brisbane was closed to settlement by a 50-mile exclusion zone for 18 years, and was opened on 10 February 1842. It says intense colonisation in the 1850s and 1860s led to violence and a large fall in the population. It estimates that Yugambeh clans were reduced by about 90 per cent by 1900, and that modern Yugambeh people trace their descent from about 30 ancestors born between about 1820 and 1860.',
          'Wikipedia says the first mission in the new colony of Queensland, Bethesda, was started at Beenleigh in 1866 and closed in 1881. It says many Yugambeh people stayed on their Country and worked on farms and in mills, including sugar and arrowroot mills, and that the 1897 Act led to many removals to missions and reserves.'], src: ['yugambeh', 'wpYugambeh'] }
  ],
  people: 'Robert Towns, Louis Hope, John McDonald, William Fryar, James Strachan, John Davy, Francis Gooding.',
  flags: [
    'Sources differ on the number of men on the Don Juan: 67 (Clive Moore and the National Archives of Australia) or 73 (Logan City Council).',
    'Sources differ on how many mills the Logan district had: the Logan City Council page for Loganholme says 40 sugar mills in 1885 and 9 in 1888, and the Beenleigh Rum Distillery article (via Wikipedia) says about 40 in 1885, 18 in 1888 and 9 in 1900.',
    'Sources differ on when Davy and Gooding began: settled in 1864 (Logan City Council) or planted cane in 1865 (heritage register, via Wikipedia). Logan City Council calls the Loganholme mill of 1869 the first sugar mill on the river, but the heritage register says a still was being built at another plantation in 1868.'
  ]
},
{ id: 'maryborough', name: 'Maryborough and the Mary River', short: 'Maryborough', year: 1865, lat: -25.54, lon: 152.70,
  note: 'The Maryborough Sugar Company forms in August 1865. The Central Mill at Yengarie is built in 1866 and the Mary Smith brings 84 Islanders in November 1867.',
  country: 'Butchulla (Batjala) and Gubbi Gubbi (Kabi Kabi) Country',
  first: [
    { p: [
      'The heritage register says John Eaton was growing an experimental cane crop at Maryborough when John Buhot visited in October 1864 and gave a lecture on growing sugar. Eaton and others formed the Maryborough Sugar Company in August 1865 and bought 400 acres at Tinana. The first crop was crushed by simple methods and made a coarse yellow sugar.',
      'Two timber millers, Frederick Gladwell and Robert Greathead, built the Central Mill at Yengarie to crush cane from many farms. Tenders were called in July 1866. An accident in October 1866 delayed crushing until February 1867. The mill closed in November 1867 for money reasons, and the register says a shortage of workers caused by the Gympie gold rush added to its troubles. The plant was sold in December 1867 to John Meiklejohn, who added a rum still in July 1868. William Gibson bought it in 1869 or 1870, and by 1877 it was only a juice mill sending juice to Yengarie.',
      'At Yengarie, Robert Tooth and Robert Cran ran a meat extract works. In 1867 Cran let contracts for clearing and planting cane. The first sugar was boiled in open pans in October 1868. From 1871 Yengarie worked as a refinery. By 1883, 28 small mills were sending juice to it. It closed in 1899.'
    ], src: ['wpCentralMill', 'qhrYengarie'] }
  ],
  central: [
    { p: ['By 1892 much of the land along the Mary River was no longer growing sugar, and the flood of 1893 damaged plantations and the Yengarie refinery. Cran died insolvent on 16 December 1894 and the Queensland National Bank took over his assets.',
          'Canetrains says the Maryborough Sugar Factory at Tinana was formed in 1894 to be a modern central mill. It was incorporated as The Maryborough Sugar Factory Limited in 1915 and closed in 2020. The sources read do not say whether it was funded under the 1893 Act.'], src: ['qhrYengarie', 'ctMaryborough'] }
  ],
  ssi: [
    { p: ['Wikipedia says the first shipment of Islanders to Maryborough was 84 men on the schooner Mary Smith, owned by Robert Greathead, in November 1867. Twenty-two were engaged by the Maryborough Sugar Company. Concerns were raised at the time about whether the men understood their contracts, because there was no interpreter, and it was alleged that the captain sold them for £9 a head.',
          'The heritage register says Melanesian indentured labourers worked in the Yengarie refinery and on its plantations. The register for Sunnyside, at Bundaberg, says Islanders who worked at Bundaberg first arrived through Maryborough.'], src: ['wpMaryborough', 'qhrYengarie', 'wpSunnyside'] }
  ],
  country_text: [
    { p: ['Wikipedia names the Gubbi Gubbi (Kabi Kabi) and Batjala (Butchulla) as the original inhabitants of the Maryborough region. It says that Aboriginal people resisted settlers on the Mary River from the 1840s, that Native Police entered the area from November 1850, and that by the late 1860s Aboriginal resistance had been defeated and survivors lived in poverty on the edges of the town.',
          'It also says that many people were moved by force to a camp on K’gari in the 1890s and later sent to Yarrabah. This is Wikipedia’s summary, and this resource has not checked it against the original records.'], src: ['wpMaryborough'] }
  ],
  people: 'Edgar Aldridge, John Eaton, John Buhot, Frederick Gladwell, Robert Greathead, John Meiklejohn, Robert Tooth, Robert Cran.',
  flags: [
    'Sources differ on the first experimental crop: Edgar Aldridge, who Wikipedia says grew a successful experimental crop in 1859, or John Eaton, who the heritage register says was growing an experimental crop in 1864.',
    'Sources differ on the Central Mill: built in 1866 with the first crush in February 1867 (heritage register), or built in 1867 (Wikipedia). They also differ on Yengarie: set up by Tooth and Cran in 1867 (Central Mill register entry), first sugar boiled in October 1868 (Yengarie register entry), or set up in 1869 (Wikipedia).'
  ]
},
{ id: 'mackay', name: 'Mackay', short: 'Mackay', year: 1865, lat: -21.15, lon: 149.18,
  note: 'John Spiller plants the first cane on 1 June 1865. About 70 Islanders arrive in May 1867 and the Alexandra mill crushes from 15 September 1868.',
  country: 'Yuibera (Yuwibara) Country',
  image: 'mill',
  first: [
    { p: [
      'John Spiller planted the first sugar cane in the Mackay district on 1 June 1865. The heritage register for the Richmond Mill says it is thought that sugar was first planted in the valley in 1865 on the Pioneer Plantation. Thomas Henry Fitzgerald planted a small plot of cane in River Street in late 1865 and more at his plantation, Alexandra.',
      'John Ewen Davidson, who had worked in the West Indies sugar industry, became Fitzgerald’s partner in 1867. The mill site was chosen on 26 July 1867, the first machinery arrived on 20 March 1868 and the mill first crushed on 15 September 1868. That season it made 230 tons of sugar. In 1869 it made 255 tons of sugar and 7,000 gallons of rum. The Alexandra mill closed in 1884, when the new Palms mill took over its crushing.',
      'The Light Railway Research Society says Mackay had sixteen mills and 4,927 acres of cane in 1874. Mackay Regional Council says there were 23 mills by 1875. Rust disease damaged the cane in the 1870s and cane production doubled once it was under control in the early 1880s.'
    ], src: ['pioneerMill', 'gsmFitzgerald', 'alexandra', 'wpRichmond', 'lrrsa', 'mackayCouncil'] },
    { p: ['The Richmond Mill, built in 1881 by John McBryde and Hector McKenzie Finlayson, had no plantation of its own and crushed cane from nearby farms. The heritage register calls it the first central mill in the district and says it was the only central mill north of Bundaberg for a short time.'], src: ['wpRichmond'] }
  ],
  central: [
    { p: [
      'In 1885 a group of farmers near Eton asked Premier Samuel Griffith for farmer-controlled central mills. In 1886 W. O. Hodgkinson recommended mills at Racecourse and North Eton, with government loans. The North Eton company was registered on 14 October 1886. Premier Griffith opened the mill on 1 January 1888, and it first crushed in August 1888. The Racecourse mill was completed in 1889 after the government advanced £21,999 and seventeen shareholders mortgaged their land.',
      'Under the Sugar Works Guarantee Act 1893 the Marian Central Mill Company was formed in 1894 with a government guarantee of £32,000, and the new mill crushed in 1895. The Light Railway Research Society says that in 1891 CSR decided to cut up its Homebush estate into farm-sized blocks, and that by 1900 five farmer-controlled mills made more sugar than the seven remaining plantation mills.'
    ], src: ['lrrsa', 'ctNorthEton', 'ctRacecourse', 'ctMarian'] }
  ],
  ssi: [
    { p: ['About 70 Pacific Islanders arrived on the Prima Donna in May 1867 to work on plantations around Mackay. Wikipedia says that by the mid-1880s over one third of the 6,000 people in the Mackay region were Islander labourers. By 1895 time-expired Islanders were 65 per cent of the Melanesians in the Mackay district, and the Pacific Islanders’ Association was formed in Mackay in November 1901.',
          'Wikipedia also says Mackay is regarded as the centre of South Sea Islander culture in Australia, with the largest population in the country.'], src: ['pioneerMill', 'mackayTimeline', 'moore2000', 'wpMackay'] }
  ],
  country_text: [
    { p: ['The Queensland Government history names the Yuibera, Wiri, Barada Barna Kabalbara and Yetimarla, Birri-Gubba and Kungalburra peoples for the nearby Sarina area. Wikipedia names the Yuibera (Yuwibara) as the traditional owners of the Mackay area, and says the Yuwibara were granted native title over 6,450 square kilometres on 25 February 2020.',
          'The Queensland Government history says that widespread frontier violence happened across the Mackay district in the 1860s and 1870s, and that the Native Police were important in crushing Aboriginal resistance. Wikipedia says the Native Police detachment under Robert Arthur Johnstone began patrolling the area in 1867. An Aboriginal reserve was set aside in 1871. From 1898 to 1967 there were 72 documented removals of Aboriginal people from the Mackay district.'], src: ['sarina', 'wpMackay'] }
  ],
  people: 'John Spiller, Thomas Henry Fitzgerald, John Ewen Davidson, John McBryde, Hector McKenzie Finlayson, W. O. Hodgkinson, Samuel Griffith.',
  flags: [
    'Sources differ on whether Alexandra was the first mill. The Light Railway Research Society says commercial sugar production at Mackay began when Fitzgerald and Davidson built it in 1868. A Mackay history page, which could be read here only as a search-result extract, calls it the second mill in the district to start crushing. This resource therefore says only that Alexandra began crushing on 15 September 1868, and does not call it the first.',
    'Sources differ on the number of mills: 16 in 1874 (Light Railway Research Society), 23 in 1875 (Mackay Regional Council), 26 mills in the mid-1880s (Wikipedia) and 28 plantation mills and two central mills in 1885 (Light Railway Research Society).',
    'Sources differ on the day the Prima Donna arrived: 13 May 1867 (Mackay history) or 12 May 1867 (Wikipedia).',
    'Sources call different mills the “first central mill”. The register says the Richmond Mill of 1881 was the first central mill in the district. Other sources call North Eton of 1888 the first government-supported one.'
  ]
},
{ id: 'bowen', name: 'Bowen', short: 'Bowen', year: 1865, lat: -20.01, lon: 148.24,
  note: 'The Bowen Sugar Company is floated in 1865 and makes sugar and rum in 1868, but the venture fails.',
  country: 'Birri, Jangga, Juru, Gia and Ngaro peoples',
  first: [
    { p: ['The Light Railway Research Society says that early in 1865 J. F. Kelsey, a sugar planter from Mauritius, floated the Bowen Sugar Company to set up a large estate at Bowen. The estate made about 30 tons of sugar and 3,729 gallons of rum in 1868, but the society says the climate was unsuitable and the venture failed.'], src: ['lrrsa'] }
  ],
  central: [
    { p: ['The sources used here do not describe a central mill at Bowen.'], src: [] }
  ],
  ssi: [
    { p: ['Wikipedia, following the heritage register for Sunnyside, says a group of Islanders was landed at Bowen in 1865 to work for pastoralists. The Queensland Government says an immigration port was set up at Bowen in 1866 because sugar plantations relied on Pacific Island labour.',
          'It says many Pacific Islanders married Aboriginal and Torres Strait Islander people and stayed in Bowen. Under the 1897 Act, Aboriginal people married to Pacific Islanders were exempt from forced removal, but this changed in 1934 when the law was amended.'], src: ['wpSunnyside', 'qldBowen'] }
  ],
  country_text: [
    { p: ['The Queensland Government says the Birri, Jangga, Juru, Gia and Ngaro peoples identify strongly with the Bowen region. Bowen was proclaimed on 10 April 1861, and a permanent Native Police barracks was built in 1862. It says frontier violence intensified during the 1860s and that the Kelsey Aboriginal Reserve was set up in 1878 after an Aboriginal camp was cleared for a park.'], src: ['qldBowen'] }
  ],
  people: 'J. F. Kelsey.',
  flags: ['The Bowen Sugar Company is described only in the Light Railway Research Society article among the sources read. Its dates and figures have not been checked against another source.']
},
{ id: 'maroochy', name: 'Maroochy and Nambour', short: 'Nambour', year: 1867, lat: -26.63, lon: 152.96,
  note: 'A local history says cane was planted at Bli Bli as early as 1867. The Moreton Central Mill company forms in 1894 under the 1893 Act and the mill crushes from 1897.',
  country: 'Gubbi Gubbi (Kabi Kabi) Country',
  first: [
    { p: ['A Nambour local history says the first cane in the Maroochy district was planted at Bli Bli as early as 1867. Wikipedia says William Clark experimented with cane at Bli Bli in the 1860s, and that in 1869 a group of Quakers planted cane near the Mooloolah River and built a crushing mill, but gave up after severe floods in the 1870s. It says Joseph Chapman Dixon built a mill at Buderim in 1876 and that the Buderim Mountain Sugar Mill was set up in 1881. Both mills had failed by the end of the 1880s.'], src: ['starfield', 'wpMoretonMill'] }
  ],
  central: [
    { p: ['Under the 1893 Act farmers formed a company, applied for a loan from the Treasury, and mortgaged their land through a bank. The deeds were held by the government, and the loan had to be repaid within fifteen years. A meeting of 120 people on 19 August 1894 decided to form the Moreton Central Sugar Mill Company, and Wikipedia says the company was formed in December 1894. The mill was built at Nambour and its estimated cost was £36,000.',
          'The local history says the mill finally closed down in 2003.'], src: ['starfield', 'wpMoretonMill'] }
  ],
  ssi: [
    { p: ['The sources read do not document Islander labour in the Maroochy district. This is a gap in this resource.'], src: [] }
  ],
  country_text: [
    { p: ['Wikipedia’s Nambour article says that in 1862 Tom Petrie went into Petrie’s Creek with 25 Turrbal and Kabi Kabi men to cut cedar. The sources read do not describe in enough detail how sugar affected Kabi Kabi people here. This is a gap in this resource.'], src: ['wpNambour'] }
  ],
  people: 'William Clark, Joseph Chapman Dixon, John Currie, George L. Bury.',
  flags: ['The local history site and Wikipedia give slightly different accounts of when the Moreton Central company was formed: a public meeting on 19 August 1894, and the company in December 1894. They are not necessarily in conflict.']
},
{ id: 'herbert', name: 'The Herbert River and Ingham', short: 'Herbert River', year: 1870, lat: -18.62, lon: 146.17,
  note: 'Gairloch, Bemerside and Macknade begin in the early 1870s. CSR’s Victoria Mill crushes from 1883, and CSR cuts up its estates from 1892.',
  country: 'Warrgamay, Nywaigi and Bandjin (Biyaygiri) Country',
  first: [
    { p: [
      'The Light Railway Research Society says cane growing on the Herbert River developed between 1869 and 1872. Wikipedia says Maurice O’Connell is regarded as the first to plant cane there, that James Mackenzie began the Gairloch plantation in 1870, and that the first local mill was built at Gairloch in 1872. It says the Bemerside and Macknade mills opened the next year.',
      'A researcher’s blog says the brothers Arthur and Frank Neame chose 1,280 acres in May 1871 and named it Macknade. It says the mill first crushed in 1873 and made 140 tons of sugar from 70 acres. By 1875 there were 210 acres of cane. The sugar was stored at Dungeness, at the mouth of the river, and carried south by steamer.',
      'In 1881 the Queensland Parliament passed the Colonial Sugar Refining Company’s Act, which let CSR buy land in the district. CSR’s Victoria Mill first crushed in 1883. About £240,000 was spent on its plantation, mill and railways in 1883 to 1885, and the estate started with about 17 miles of railway and four locomotives.'
    ], src: ['lrrsa', 'wpIngham', 'herbBlog', 'ctMacknade', 'ctVictoria'] }
  ],
  central: [
    { p: [
      'The Herbert River Farmers’ Association was formed in 1882, and Frank Neame was an early president. In 1884 CSR offered seven-year agreements to small growers of the lower Herbert, and in 1892 it began to divide the Victoria Estate among independent farmers. The Light Railway Research Society says that by the turn of the century most cane in the Herbert district was grown by independent farmers on 160-acre selections.',
      'CSR bought Macknade in 1896 (Canetrains) or 1897 (the Light Railway Research Society) and divided the estate. Italian settlers leased land from the Neames and later from CSR. The sources read do not name a mill in this district built under the 1893 Act.'
    ], src: ['ctVictoria', 'ctMacknade', 'lrrsa', 'herbBlog'] }
  ],
  ssi: [
    { p: [
      'Wikipedia says most of the early labour on the Herbert plantations was done by Islanders, who worked three years for £6 a year, paid at the end of the contract and often in goods instead of money. It says the death rate at Victoria Plantation in 1884 was up to 15 per cent.',
      'The blog says that Arthur Neame wrote that there were nearly 150 Islanders at Macknade. Wikipedia says the 1885 Royal Commission found that Islanders brought for Alfred Cowley’s Hamleigh Plantation were recruited in a way that was “cruelly deceptive and altogether illegal”, and that many were kidnapped or murdered on a recruiting voyage for CSR’s Victoria Plantation. The Wikipedia article does not name the ship.'
    ], src: ['wpIngham', 'herbBlog', 'quassic7'] }
  ],
  country_text: [
    { p: [
      'The researcher’s blog says Macknade was founded on the traditional lands of the Warrgamay, Nywaigi and Bandjin (Biyaygiri) peoples, and lists the dispersal of the Aboriginal owners from the land as one of the results of the Neames’ plantation.',
      'The Queensland Government says the Girringun Aboriginal Corporation represents nine tribal groups of the Hinchinbrook and Cassowary Coast area. A Native Police camp was set up on the Herbert River in 1870, and frontier violence happened across the Cardwell district from the mid-1860s to the early 1880s. It says that in 1874 a missionary searched for three weeks and could not find one Aboriginal person living on Hinchinbrook Island, and that before he arrived Native Police had greatly reduced the Island’s Aboriginal population.'
    ], src: ['herbBlog', 'qldHinch'] }
  ],
  people: 'Maurice O’Connell, James Mackenzie, Ferrand Haig, Henry Miles, Arthur Neame, Frank Neame, Edwin Waller, Alfred Cowley.',
  flags: [
    'Sources differ on when Macknade first crushed: 1873 (the blog, and Wilmar’s research for the mill’s 150th anniversary, as reported by Canetrains) or 1874 (the Light Railway Research Society, a Nambour history and a plaque at the mill from 1964).',
    'Sources differ on when CSR bought Macknade: 1896 (Canetrains) or 1897 (the Light Railway Research Society).'
  ]
},
{ id: 'bundaberg', name: 'Bundaberg', short: 'Bundaberg', year: 1870, lat: -24.87, lon: 152.35,
  note: 'Cane is first grown at Rubyanna in 1870 and the first mill is built at Millbank in 1872. Millaquin, Fairymead and Bingera follow in the 1880s.',
  country: 'Taribelang Bunda, Gooreng Gooreng, Gurang and Bailai Country',
  image: 'bingera',
  first: [
    { p: [
      'Wikipedia says experimental cane was first grown at John Charlton Thompson’s property Rubyanna in 1870, and that Richard Palmer built the first sugar mill at his Millbank plantation in 1872. The sugar industry grew from the Sugar and Coffee Regulations of 1864.',
      'Robert Cran and his brothers, who ran the Yengarie refinery, built the Millaquin refinery at East Bundaberg. Construction began in 1880 and it began work in 1882. Many small juice mills on nearby plantations pumped juice to it through pipes or sent it by punt. Canetrains says sixteen juice mills were built to supply it between 1881 and 1885, and the Sunnyside register entry says 24 were set up between 1882 and 1884.',
      'Arthur and Horace Young began work at Fairymead in 1880. Their first major crop was harvested in 1883, and in 1884 they began to refine their own sugar. The Gibson and Howes families bought land at Bingera in 1883 and the mill crushed from 1885. By 1889 they controlled about 2,658 acres and employed 98 European workers, 8 Chinese workers and about 200 South Sea Islanders. The Sunnyside register entry says Bundaberg went from the second largest sugar region in Queensland to the largest by 1900.'
    ], src: ['wpBundaberg', 'wpFairymead', 'ctFairymead', 'ctMillaquin', 'ctBingera', 'wpSunnyside'] }
  ],
  central: [
    { p: ['Millaquin’s money problems after the depression and floods of the 1890s led to the Queensland National Bank taking control in 1896. In 1911 the bank formed the Millaquin Sugar Company. By 1928 Millaquin had been converted into a raw sugar mill that crushed cane directly. The sources read do not name a Bundaberg mill built under the 1893 Act. The Isis Central Mill, to the south-west, was founded in 1896 (see Isis and Childers).'], src: ['ctMillaquin', 'wpIsis'] }
  ],
  ssi: [
    { p: [
      'Wikipedia says the first large shipload of Islanders to the Burnett River came in January 1872 on the Petrel, and that allegations of kidnapping and wounding were made about its recruiting. The Sunnyside register entry says Islanders at Bundaberg first arrived through Maryborough, and that the first direct shipment to Bundaberg was in May 1879, on the Lucy and Adelaide, with 81 men and 7 women.',
      'Wikipedia says the Young brothers owned the recruiting vessels Lochiel and May, and that the Cran family and Frederic Buss were the main investors in the Helena. It says Islander workers at Bundaberg often died from overwork, poor housing, poor food, bad water and a lack of medical care, and that the fine for an owner whose neglect caused a death did not exceed £10.',
      'The heritage register entry for Sunnyside plantation, on Windermere Road, records an area of 29 burials in three rows and a dry-rubble wall along the road. It says Edward Turner, a stonemason, probably directed the building of the wall. The South Sea Islander Wall at Mon Repos, built about 1884, is also heritage listed. Fanny Nicol, a missionary at Bundaberg, collected about 1,800 signatures for the 1902 petition to King Edward VII.'
    ], src: ['wpBundaberg', 'wpSunnyside', 'wall', 'moore2000'] }
  ],
  country_text: [
    { p: [
      'Bundaberg Regional Council names the Taribelang Bunda, Gooreng Gooreng, Gurang and Bailai peoples. Wikipedia says native title was determined for the four groups on 28 November 2017.',
      'Wikipedia says British pastoral occupation began in 1848 at Tirroan, that violence in 1849 and 1850 was followed by reprisals in which Aboriginal people were killed, and that timber companies began to log the Woongarra Scrub, a rainforest where most of the canefields now grow, in 1867.'
    ], src: ['bundabergCouncil', 'wpBundaberg'] }
  ],
  people: 'John Charlton Thompson, Richard Palmer, Robert Cran, Henry, Arthur, Horace and Ernest Young, William and Angus Gibson, Edward Turner, Fanny Nicol.',
  flags: [
    'Sources differ on when Islanders first arrived at Bundaberg: January 1872 on the Petrel (Wikipedia’s Bundaberg article) or by way of Maryborough, with the first direct shipment in May 1879 (Sunnyside register entry).',
    'Sources differ on Millaquin’s start: established in 1881 (Sunnyside register entry), or built from 1880 and working in 1882 (Canetrains and Wikipedia).'
  ]
},
{ id: 'burdekin', name: 'The Burdekin: Ayr and Home Hill', short: 'Burdekin', year: 1879, lat: -19.57, lon: 147.40,
  note: 'Large-scale cane starts at Airdmillan in 1879 or at Pioneer and Kalamia in 1882. Pioneer and Kalamia crush from 1884, and Inkerman follows in 1913.',
  country: 'Juru (Yuru) Country, with Biri-language peoples',
  first: [
    { p: [
      'Wikipedia says large-scale cane growing began in the Burdekin in 1879, when Robert William Graham and Archibald Campbell MacMillan formed the Burdekin Delta Sugar Company. Their plantation was Airdmillan and its mill was built in 1883. Canetrains says John Spiller and Henry Brandon had begun the Pioneer plantation by 1882, and that Charles and John Young began the Kalamia plantation in 1882.',
      'In May 1883 the Drysdale family led a group that bought Pioneer. Its mill first produced sugar on 5 August 1884, and Kalamia’s mill began crushing in 1884. George Drysdale brought in irrigation, and his brother John Drysdale developed a multiple-spear pumping method that drew groundwater from shallow layers under the Burdekin Delta. Canetrains says the method became widely used in the district.'
    ], src: ['wpAyr', 'ctPioneer', 'ctKalamia', 'jcu'] }
  ],
  central: [
    { p: [
      'Wikipedia says the Inkerman Downs estate was taken back by the government in August 1910 and divided into farming blocks, and that the first town blocks of Home Hill were sold in December 1912. Canetrains says the Inkerman Mill was completed in 1913, and that Pioneer Sugar Mills Limited was formed on 25 September 1914 to run both Pioneer and Inkerman. The Light Railway Research Society says new mills were built at Babinda, South Johnstone and Inkerman in 1914 to 1915.',
      'In 1891 about 320 Italian men arrived at Townsville, brought for the Burdekin and Herbert planters, and met opposition from other workers. The society says that this, and the planters’ lack of support, ended Premier Griffith’s opposition to Islander recruiting, so that recruiting began again in 1892.'
    ], src: ['wpHomeHill', 'ctInkerman', 'lrrsa'] }
  ],
  ssi: [
    { p: [
      'Wikipedia says 532 Islanders were brought to Airdmillan and that 128, or 24 per cent, had died by 1885. It says the death rate at Kalamia and Pioneer was 14 per cent and at Seaforth 26 per cent, and that many deaths were in the first year after the Islanders arrived. Islander labour in the district ended in the early 1900s.',
      'Wikipedia also says Annie Dennis started the Burdekin Community Church in 1926 as a Pentecostal mission for South Sea Islanders.'
    ], src: ['wpAyr'] }
  ],
  country_text: [
    { p: [
      'Wikipedia says the Yuru (Juru) language area covers the Shire of Burdekin, including Home Hill, and that the Biri language area includes Bowen, Ayr, Collinsville and Nebo. The Queensland Government’s Bowen history lists the Federal Court case Prior on behalf of the Juru (Cape Upstart) People v State of Queensland (No 2) [2011] FCA 819.',
      'Wikipedia says the area was opened to pastoral leases in 1861, that armed settlers and Native Police began to force Aboriginal people off the land from about 1862, and that the survivor James Morrill recorded a massacre of a Burdekin River group. It says Morrill proposed that the coast north of the river be kept as a reserve, but the authorities ignored him.'
    ], src: ['wpAyr', 'wpHomeHill', 'qldBowen'] }
  ],
  people: 'Robert William Graham, Archibald Campbell MacMillan, John Spiller, Henry Brandon, George Drysdale, John Drysdale, Charles Young, John Young, Annie Dennis.',
  flags: [
    'Sources differ on when large-scale sugar began: 1879 (Wikipedia, for Airdmillan) or 1882 (Canetrains, for Pioneer and Kalamia). The Airdmillan mill is dated 1883.',
    'Sources differ on when Inkerman Mill opened: completed in 1913 (Canetrains) or established in 1914 (Wikipedia, and the Light Railway Research Society’s “1914 to 1915”).',
    'The sources do not say whether the John Spiller of the Burdekin was the same man who planted the first cane at Mackay in 1865.'
  ]
},
{ id: 'johnstone', name: 'The Johnstone River and Innisfail (with Babinda)', short: 'Johnstone River', year: 1880, lat: -17.52, lon: 146.03,
  note: 'Thomas Henry Fitzgerald selects land in 1880. The Mourilyan mill crushes from 1884 and CSR’s Goondi mill from 1885. Babinda and South Johnstone come in 1915 and 1916.',
  country: 'Mamu Country (the wider Cassowary Coast includes many other Girringun peoples)',
  image: 'goondi',
  first: [
    { p: [
      'Thomas Henry Fitzgerald, who had built the Alexandra mill at Mackay, surveyed the Johnstone River and took out land there in 1880, and the Genealogical Society of Mackay says clearing began on 15 June 1880. Wikipedia says he arrived in 1879 with large numbers of Islander workers and a smaller number of Irish workers, and set up Innisfail Estate. The society says his first crushing was not a great success. He left in June 1885, and the settlement he called Geraldton was renamed Innisfail in 1910.',
      'CSR entered the district in 1882 and bought about 5,000 acres for the Goondi estate. Goondi Mill first crushed in 1885 using part of the machinery of CSR’s old Southgate mill on the Clarence River in New South Wales. The Mourilyan Sugar Company was formed in 1882, built a tramway from Mourilyan Harbour in 1883 and first crushed in 1884.'
    ], src: ['gsmFitzgerald', 'wpInnisfail', 'ctGoondi', 'ctMourilyan'] }
  ],
  central: [
    { p: [
      'A Queensland Royal Commission in 1911 looked at new central mills, and Babinda and South Johnstone were chosen under the Sugar Works Act 1911. Babinda began crushing as a government mill on 15 December 1915, and South Johnstone in 1916 with about 100 growers. The population of Babinda went from 195 in 1911 to about 980 in 1921.',
      'Growers took over Babinda in 1924 and South Johnstone in 1927. Goondi closed in 1986 and its cane was shared between Babinda and Mourilyan. Cyclone Larry damaged Mourilyan in March 2006 and it did not reopen. The Light Railway Research Society says that estates on the Herbert and Johnstone rivers were also cut into farm blocks after CSR cut up Homebush in 1891.'
    ], src: ['ctBabinda', 'ctSouthJohnstone', 'ctGoondi', 'ctMourilyan', 'lrrsa'] }
  ],
  ssi: [
    { p: [
      'Canetrains says CSR recruited Pacific Island labourers for Goondi from the early 1880s, and that CSR records include a lot of material about them. Wikipedia’s Innisfail article says that, among the settlers who came from 1889, Islanders outnumbered the Anglo-Celtic group, and that there were also Aboriginal and Torres Strait workers, Chinese growers and French and German settlers. That is a single-source statement.'
    ], src: ['ctGoondi', 'wpInnisfail'] }
  ],
  country_text: [
    { p: [
      'Wikipedia says that before European settlement the Innisfail area was occupied by five separate societies of the Mamu people. It says that in 1872 Sub-Inspector Robert Arthur Johnstone of the Native Police came to look for survivors of the wreck of the Maria and to punish Aboriginal people thought to have killed some of the crew. The settlement at the junction of the two Johnstone rivers was set up on 5 October 1873 by George Elphinstone Dalrymple’s expedition.',
      'The Queensland Government says the Girringun Aboriginal Corporation represents nine groups, including the Djiru, Girramay, Gulngay, Jirrbal and Warrgamay, and that frontier violence happened across the district from the mid-1860s to the early 1880s.'
    ], src: ['wpInnisfail', 'qldHinch'] }
  ],
  people: 'Thomas Henry Fitzgerald, Robert Arthur Johnstone, George Elphinstone Dalrymple, Philip Henry Nind, Charles Edward Adams.',
  flags: [
    'Sources differ on when Fitzgerald arrived: 1879 (Wikipedia) or took out land in 1880 with clearing from 15 June 1880 (Genealogical Society of Mackay).',
    'The names of the Aboriginal peoples differ between sources. Wikipedia names the Mamu for Innisfail. The Queensland Government lists nine groups for the wider area. The spellings and boundaries should be checked with the peoples concerned.'
  ]
},
{ id: 'cairns', name: 'Cairns and Edmonton (Hambledon)', short: 'Cairns', year: 1881, lat: -17.02, lon: 145.74,
  note: 'Thomas Swallow starts the Hambledon plantation in 1881 and its mill first crushes on 6 August 1883. The Mulgrave Central Mill crushes from 1896 under the 1893 Act.',
  country: 'Yidinji Country (Gimuy Walubara Yidinji at Cairns; Gunggandji at Cape Grafton)',
  image: 'hambledon',
  first: [
    { p: [
      'Canetrains says Thomas Swallow, a Melbourne businessman, began the Hambledon plantation near Cairns in 1881 and that local sources record the first crush on 6 August 1883. Raw sugar went by a horse-drawn tramway to Swallow’s Wharf on Trinity Inlet. Falling sugar prices after 1884 left the estate heavily in debt by 1888, Richard Ash Kingsford bought it in 1890, and CSR bought it in 1897 for about £60,000.',
      'Wikipedia says that in 1882 a Chinese businessman, Andrew Leon, built the first sugar mill in the Cairns area, named Pioneer Mill, and set up the Hap Wah Plantation on 612 acres. It also says a few Chinese men were trying crops, including sugar, soon after Cairns was founded.'
    ], src: ['hambledon', 'wpGordonvale', 'wpCairns'] }
  ],
  central: [
    { p: [
      'The Mulgrave Central Mill Company was formed after the Sugar Works Guarantee Act 1893. Canetrains says 44 local farmers mortgaged their properties to secure a £44,000 government advance, the company was registered in 1895, and A. and W. Smith of Glasgow built the mill in 1896 for £26,850. In its first season, from October 1896 to March 1897, it crushed 13,000 tons of cane to make 1,351 tons of sugar. The Cairns Divisional Board’s tramway reached the mill in 1897.',
      'Hambledon closed in October 1991, mainly because cane land was lost to housing. Its cane went to Mulgrave.'
    ], src: ['ctMulgrave', 'hambledon'] }
  ],
  ssi: [
    { p: [
      'In 1888 Hambledon employed 176 South Sea Islanders, 29 Chinese, 6 Javanese and 32 Europeans. Chinese workers did much of the land clearing and Islanders did much of the field work. In 1892 the government moved Aboriginal people and some South Sea Islanders to Yarrabah, in the Cairns district.'
    ], src: ['hambledon', 'yarrabah'] }
  ],
  country_text: [
    { p: [
      'Wikipedia says the Cairns area was inhabited by the Gimuy Walubara Yidinji people, who still claim their native title rights, and that Edmonton and Gordonvale are on Yidinji country. The Queensland Government says Yarrabah was founded on the land of the Gunggandji people at Mission Bay.',
      'In 1873 the government sent George Dalrymple on a land expedition, accompanied by the Native Police, along the north-east coast. The Queensland Government says Dalrymple reported to Parliament that “the whole of the valuable agricultural coast country is free from vested interests injurious to its rapid development, and is now open to public selection”. The same history says the Native Police fired on Gunggandji people who tried to resist at Bessie Point in 1873, after the killing of four fishermen on Green Island.'
    ], src: ['wpCairns', 'wpEdmonton', 'wpGordonvale', 'yarrabah'] }
  ],
  people: 'Thomas Swallow, Richard Ash Kingsford, Andrew Leon, George Elphinstone Dalrymple.',
  flags: [
    'Sources differ on Hambledon: the plantation began in 1881 (Canetrains) or was selected in 1883 (Wikipedia’s Edmonton article).',
    'Sources differ on the first mill in the Cairns area. Wikipedia says Andrew Leon’s Pioneer Mill of 1882. Canetrains says Hambledon’s mill first crushed in 1883.'
  ]
},
{ id: 'proserpine', name: 'Proserpine', short: 'Proserpine', year: 1882, lat: -20.40, lon: 148.58,
  note: 'The Crystal Brook Sugar Company is registered in 1882. The Proserpine Central Mill crushes from 1897 and the government runs it from 1900.',
  country: 'Gia Country',
  first: [
    { p: ['Canetrains says the Crystal Brook Sugar Company was registered in 1882 and set up the Glen Isla plantation, of about 3,000 acres on the Proserpine River, with its own small mill. It says the plantation relied heavily on South Sea Islander and Chinese labour. Canetrains says the company collapsed in 1885 when world sugar prices fell. Wikipedia says the plantation closed in 1893 and smaller farms replaced it.'], src: ['ctProserpine', 'wpProserpine'] }
  ],
  central: [
    { p: [
      'The Proserpine Central Mill Company was registered in 1894 under the Sugar Works Guarantee Act 1893 and the mill first crushed in 1897. In its first season it crushed 10,919 tons of cane in 99 days from 39 suppliers. The mill struggled with debt. The government took over its management in 1900 and foreclosed in 1904, running it through the Bureau of Central Sugar Mills. Growers bought it in 1931 and formed a co-operative.'
    ], src: ['ctProserpine', 'lrrsa'] }
  ],
  ssi: [
    { p: ['Canetrains says Islanders and Chinese workers did much of the work at Crystal Brook. The sources read do not say more about Islander communities at Proserpine.'], src: ['ctProserpine'] }
  ],
  country_text: [
    { p: ['Wikipedia says the Gia people are the traditional custodians of the Proserpine area. The Queensland Government’s Bowen history says Lutherans ran the Marie Yamba mission at Proserpine from 1899 to 1902, and that some Aboriginal families from Bowen may have lived there. The sources read do not describe in more detail how sugar affected Gia people. This is a gap in this resource.'], src: ['wpProserpine', 'qldBowen'] }
  ],
  people: 'The Crystal Brook Sugar Company directors are not named in the sources read.',
  flags: ['Sources differ on when the Crystal Brook plantation ended: the company collapsed in 1885 (Canetrains) or the plantation closed in 1893 (Wikipedia).']
},
{ id: 'mossman', name: 'Mossman and Port Douglas', short: 'Mossman', year: 1883, lat: -16.46, lon: 145.37,
  note: 'The Brie Brie mill is built in 1883 and crushes from 1884 to 1888. The Mossman Central Mill first crushes on 23 August 1897.',
  country: 'Eastern Kuku Yalanji Country',
  image: 'mossman',
  first: [
    { p: [
      'The Douglas Shire Historical Society says Dan Hart, thought to be the first non-Indigenous settler in Mossman, had grown sugar in Jamaica. A small mill worth £9,000 was built on the Brie Brie estate in 1883 by Mrs Harriet Parker, a Melbourne investor, and first crushed in 1884. A fall in sugar prices closed it in 1888. In 1895 Thomas Crawford and the Muntz brothers took over the estate, and they bought it in 1896.'
    ], src: ['douglasSugar'] }
  ],
  central: [
    { p: [
      'In 1893 farmers met at the Masonic Hall in Port Douglas to form the Mossman River Central Mill League. The Mossman Central Mill Company was registered on 4 December 1894, work began on 27 April 1896, and the machinery came from Glasgow on the ship Westfield in September 1896. The mill first crushed on 23 August 1897, using cane from Annie Rose’s property, Bonnie Doon. There were 33 original suppliers, and the first season ended on 14 February 1898 with 27,905 tons of cane processed to make 2,965 tons of sugar.',
      'The tramway to the wharf at Port Douglas opened on 1 August 1900. The mill’s final crush was in November 2023, and in 2024 the companies that ran it were in liquidation.'
    ], src: ['douglasSugar', 'ctMossman'] }
  ],
  ssi: [
    { p: [
      'The Douglas Shire Historical Society says there were 200 Islanders cutting cane at the start of the first season, as well as Chinese workers. It says George Low Choy grew cane and supplied labour from 1885 to 1904, and that a law passed in 1901 by the mill stopped Chinese people from holding shares and cut the price paid for Chinese-grown cane by two shillings. Japanese workers at the mill went on strike in February 1900. The society says there are doubts that the mill would have started without Chinese farmers taking the risk of growing cane.'
    ], src: ['douglasSugar'] }
  ],
  country_text: [
    { p: [
      'The Queensland Government says the Eastern Kuku Yalanji people are recognised as the Traditional Owners of the Mossman Gorge area. It says cedar was cut from the Mossman and Daintree valleys in the 1870s, that Native Police were sent after clashes, and that by 1882 the cedar was nearly gone and the land was being cleared to grow cane.',
      'It quotes a letter of 1889 from Mossman River selector Daniel Hart to the Premier, saying that since Europeans had taken all the land the Aboriginal people were being driven to starvation. It says there were 113 documented removals from the Mossman Gorge area after the 1897 Act. A reserve was set aside at Mossman Gorge in 1916, on 64 acres given by a cane farmer, Jack Johnston.'
    ], src: ['qldMossman'] }
  ],
  people: 'Dan Hart, Harriet Parker, Thomas Crawford, George Muntz, J. D. Johnston, Annie Rose, George Low Choy, Jack Johnston.',
  flags: ['The Mossman Gorge history and the Douglas Shire Historical Society describe the first sugar in different terms: the Queensland Government says cane was being planted by 1882, and the society says sugar was first grown in the 1880s and that the mill of 1883 was the first. These do not clearly conflict.']
},
{ id: 'isis', name: 'Isis and Childers', short: 'Isis', year: 1896, lat: -25.24, lon: 152.27,
  note: 'The Isis Central Mill is founded in 1896 as a company owned by the farmers who supply it with cane.',
  country: 'Kabi Kabi (Dundabarra) Country',
  first: [
    { p: ['Wikipedia says Europeans first arrived around Childers in the 1850s and pastoralists followed. It says the town was established in 1885 and the railway to Childers opened in 1887.'], src: ['wpChilders'] }
  ],
  central: [
    { p: ['Wikipedia says the Isis Central Sugar Mill was founded in 1896 as a company limited by guarantee, owned by the farmers who supply it. It says the mill had its largest season in 2012, with 1,505,400 tonnes of cane. Canetrains says Isis also crushes the cane from the former Maryborough district since the Maryborough mill closed in 2020. The sources read do not say whether the Isis company used the Sugar Works Guarantee Act 1893.'], src: ['wpIsis', 'ctMaryborough'] }
  ],
  ssi: [
    { p: ['The sources read do not document Islander communities at Isis. This is a gap in this resource.'], src: [] }
  ],
  country_text: [
    { p: ['Wikipedia says the Childers area is traditionally inhabited by the Dundabarra group, part of the Kabi Kabi nations, and that their descendants still live in the region. The sources read do not describe how sugar affected them. This is a gap in this resource.'], src: ['wpChilders'] }
  ],
  people: 'No individual people are named in the sources read.',
  flags: ['Wikipedia’s Isis article says the mill was founded as an alternative to mills run by CSR. This has not been checked against another source.']
},
{ id: 'sarina', name: 'Sarina (Plane Creek)', short: 'Sarina', year: 1896, lat: -21.43, lon: 149.22,
  note: 'The Plane Creek Central Mill Company is registered in 1893, joins the 1893 Act in 1894 and the mill first crushes on 4 November 1896.',
  country: 'Yuibera, Wiri, Barada Barna Kabalbara and Yetimarla, Birri-Gubba and Kungalburra peoples',
  first: [
    { p: ['Canetrains says Henry Bell and Edmund Atherton began the Plane Creek pastoral run in 1864, and that the Atherton and Bell families became closely involved in the district’s sugar industry.'], src: ['ctPlaneCreek'] }
  ],
  central: [
    { p: [
      'The Plane Creek Central Mill Company was registered in late 1893 and brought under the Sugar Works Guarantee Act 1893 in 1894. About 28,000 acres of the shareholders’ land was mortgaged to secure a £65,000 government loan. Walkers Limited of Maryborough supplied the machinery. The mill first crushed on 4 November 1896, processing 3,579 tonnes of cane in its first season. A 610 mm tramway ran about 15 miles to a wharf at Louisa Creek. The government loan was fully repaid in the 1920–21 season. The railway reached Sarina in 1913.',
      'The Light Railway Research Society names Sarina among the districts opened to cane by the 1893 Act.'
    ], src: ['ctPlaneCreek', 'lrrsa'] }
  ],
  ssi: [
    { p: ['The Queensland Government’s Sarina history covers the Mackay district, which is described under Mackay. It does not describe Islander communities at Plane Creek separately.'], src: ['sarina'] }
  ],
  country_text: [
    { p: ['The Queensland Government history names the Yuibera, Wiri, Barada Barna Kabalbara and Yetimarla, Birri-Gubba and Kungalburra peoples for the Sarina area. Native Police barracks were built at Marlborough in 1866 and at Bloomsbury in 1868. In 1871 the government set aside 14,080 acres near Cape Palmerstone and Homebush as an Aboriginal reserve. It was reduced to 10,000 acres by 1878, and in 1879 90 per cent of it was opened for settlement.'], src: ['sarina'] }
  ],
  people: 'Henry Bell, Edmund Atherton.',
  flags: []
},
{ id: 'tully', name: 'Tully', short: 'Tully', year: 1925, lat: -17.93, lon: 145.93,
  note: 'The Tully River is opened to sugar in the 1880s. The Queensland Government builds the Tully mill under the Sugar Works Act 1922, and it first crushes in November 1925.',
  country: 'Girringun Country (Djiru, Girramay, Jirrbal and others)',
  first: [
    { p: ['The Queensland Government says the Tully River was opened up for sugar production and Chinese banana farms in the 1880s. Canetrains says the Tully Sugar Works Area was proclaimed on 19 June 1923, and Walkers Limited of Maryborough got the building contract in August 1923. The trial crushing season began on 5 November 1925 and made 3,946 tonnes of raw sugar from 32,075 tonnes of cane.'], src: ['qldHinch', 'ctTully'] }
  ],
  central: [
    { p: ['Tully was the last Queensland Government-built mill. It was approved under the Sugar Works Act 1922. In its first full season, 1926 to 1927, 256 growers supplied it, including 74 returned-soldier settlers. In 1927 it was the first Australian mill to crush more than 200,000 tonnes of cane in one season. Growers took over the mill in 1931.'], src: ['ctTully'] }
  ],
  ssi: [
    { p: ['The Tully mill was built more than 20 years after Queensland’s labour trade ended in 1904. The sources read do not describe Islander labour at Tully.'], src: ['ctTully'] }
  ],
  country_text: [
    { p: [
      'The Queensland Government says the Girringun Aboriginal Corporation represents nine groups whose lands run from Maria Creek, north of Tully, south along the coast, and lists the Djiru, Girramay and Jirrbal among them. The sources read do not name a single group for the town of Tully, and spellings differ.',
      'It says a reserve was set aside on the Tully River in 1886 but was not used as intended. In 1913 a reserve was approved at Hull River, east of Tully, and between 1914 and 1918, 465 Aboriginal people were removed there, with large numbers taken from the Cardwell, Clump Point, Murray and Tully River areas. A cyclone on 10 March 1918 killed the superintendent, his daughter and 12 Aboriginal residents, and the survivors were moved to Palm Island.'
    ], src: ['qldHinch'] }
  ],
  people: 'The sources read do not name individuals for the early Tully sugar story.',
  flags: ['The year given on the map for Tully is 1925, when the mill first crushed. The Queensland Government says sugar production began on the Tully River in the 1880s, so the map date is the date of the mill and not the first cane.']
}
];
