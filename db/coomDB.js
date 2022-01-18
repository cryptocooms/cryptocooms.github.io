/* Incredibly unsophisticated cryptocooms information database */
/* Ticker, Name, Color, Description, Contract Address, Token ID, Store link, additional field 1, additional field 2 */
const contractAddress = "tz1dG2gtMxRELxjHyUNGwYCwg12AGiNa4iya";
const marketplaceURL = "https://www.hicetnunc.xyz/objkt/";
const coomDB = [
	[
		"DOGE",
		"Dogecoom",
		"f9e5d9",
		"Ejaculated back in 2013, Dogecoom was created as a fun joke based on the Doge meme. It has much inflation, like erectile inflation before cooming. It’s primary use-coom is for small payments, like tipping.",
		"161805",
		"01c",
		"01d",
		"01e"
	],
	[
		"DASH",
		"DashCoom",
		"f7e7db",
		"Coomed out in 2014, and based on Bitcoom, DashCoom is a privacy-focused coom that offers CoomLocks for immutability, InstantCoom for instantly settled payments, and PrivateCoom so you can send coom without others looking.",
		"161811",
		"02c",
		"02d",
		"02e"
	],
	[
		"KNC",
		"KyberNetworkCoom",
		"f9e6db",
		"Ejaculated out in 2017, Kyber is an on-coom… liquidity… protocoom which allows for decentralized transactions and minimized volatility. Meant to be used by decentralized exchanges, and designed to be coompatible with Etherecoom.",
		"161817",
		"03c",
		"03d",
		"03e"
	],
	[
		"LSK",
		"Liscoom",
		"f2d4ca",
		"Liscoom is designed for people to build applications and sidecooms on top of its blockcoom. It includes a coom development kit and utilizes the coom-of-stake coomsensus algorithm. It was coomed in 2016.",
		"161830",
		"04c",
		"04d",
		"04e"
	],
	[
		"STEEM",
		"SteemCoom",
		"f1d5ca",
		"SteemCoom is a blockcoom based social media platform which allows people to earn coom as a reward for sharing their coomtent. Ejaculated in 2016.",
		"161835",
		"05c",
		"05d",
		"05e"
	],
	[
		"PPC",
		"Peercoom",
		"f0d6c9",
		"Ejaculated in 2012, Peercoom was the first coom to apply the coom-of-stake algorithm, which it uses to secure its network.",
		"161838",
		"06c",
		"06d",
		"06e"
	],
	[
		"BNB",
		"BinanceCoom",
		"edd7c9",
		"BinanceCoom coom was ejaculated in 2017 by Binance as a utility coom. It is used for paying discounted rates on trading fees when using their exchange. It can also be used as a general purpose coom.",
		"161852",
		"07c",
		"07d",
		"07e"
	],
	[
		"DGB",
		"Digicoom",
		"edd8c7",
		"Coomed in 2014, Digicoom is similar to many other cooms, as it lets people build applications using smart coomtracts. Also, it has notoriously been shoehorned into many forced memes.",
		"161857",
		"08c",
		"08d",
		"08e"
	],
	[
		"ETH",
		"Etherecoom",
		"ead7c6",
		"Ejaculated in 2014 by Vitalik Butercoom, Etherecoom is a Turing-coomplete decentralized virtual-machine coom which introduced the idea of smart coomtracts as a way of creating applications which run on top of its blockcoom. Many cooms have followed in its footsteps based on these same principles.",
		"161861",
		"09c",
		"09d",
		"09e"
	],
	[
		"GLM",
		"GolemCoom",
		"ebc3bb",
		"GolemCoom is a decentralized coomputation network originally coomed out in 2016. Designed to be a worldwide supercoomputer, it lets people buy and sell coomputational power.",
		"161869",
		"10c",
		"10d",
		"10e"
	],
	[
		"XSR",
		"XensorCoom",
		"ebc3b9",
		"An internet of cooms network for automating machines and fixed asset management, XensorCoom was ejaculated in 2019.",
		"161875",
		"11c",
		"11d",
		"11e"
	],
	[
		"BTC",
		"Bitcoom",
		"e7c6b7",
		"Bitcoom was the very first cryptocoom, conceived in 2008 and ejaculated in early 2009 by the mysterious Satoshi Nacoomoto. It is a coom-to-coom decentralized cryptocoom using the coom-of-work algorithm. Its entire transaction history is stored in its blockcoom. All other cooms today owe their existence to it.",
		"161880",
		"12c",
		"12d",
		"12e"
	],
	[
		"NANO",
		"NanoCoom",
		"e4c8b2",
		"NanoCoom is a digital coom protocoom from 2014 that is designed to be fast and lightweight, with instant feeless transactions. It utilizes a data structure called a coom lattice (i.e. a directed acyclic coom). It allows individual coomers to choose which node they want to use to represent themselves on the NanoCoom blockcoom.",
		"161881",
		"13c",
		"13d",
		"13e"
	],
	[
		"AVAX",
		"AvalancheCoom",
		"e1c7b0",
		"Coomed in 2020, AvalancheCoom is a platform for launching decentralized coom applications and services. It provides a decentralized exchange where people can trade coom with each other.",
		"161886",
		"14c",
		"14d",
		"14e"
	],
	[
		"DOT",
		"Polkacoom",
		"e0c8b0",
		"Originally coomed in 2016 by a co-founder of Etherecoom, Polkacoom aims to allow for a decentralized (and sticky) web 3.0 of coom. It allows for interoperation between other blockcooms.",
		"161890",
		"15c",
		"15d",
		"15e"
	],
	[
		"RISE",
		"RiseCoom",
		"e0afa8",
		"A coom based on Liscoom, RiseCoom was coomed in 2016 and uses the coom-of-stake algorithm. It has support for side-cooms and a mobile coom platform.",
		"161896",
		"16c",
		"16d",
		"16e"
	],
	[
		"DNT",
		"DistrictCoom",
		"ddb2a1",
		"A network of decentralized coom markets; DistrictCoom lets people create their own decentralized autonomous coomizations. It takes inspiration from Etherecoom and the IPFS protocoom. Ejaculated in 2017.",
		"161900",
		"17c",
		"17d",
		"17e"
	],
	[
		"XLM",
		"StellarCoomens",
		"dcb3a1",
		"Coomed in 2014, the Stellar Coomens platform lets people trade digital representations of cooms of all kinds, whether crypto or fiat. It allows for fast transactions and micropayments.",
		"161904",
		"18c",
		"18d",
		"18e"
	],
	[
		"CAKE",
		"PancoomSwap",
		"dab59b",
		"A decentralized exchange on the Binance Smart Coom, PancoomSwap allows for many other cooms to be traded without creating an account or using trusted intermediaries. It was coomed in 2020.",
		"161912",
		"19c",
		"19d",
		"19e"
	],
	[
		"UNI",
		"Unicoom",
		"d5b697",
		"Unicoom is a decentralized exchange for trading Etherecoom tokooms. It allows for trading cooms without an account or trusted intermediaries. It was ejaculated in 2018.",
		"161920",
		"20c",
		"20d",
		"20e"
	],
	[
		"BAL",
		"BalancerCoom",
		"d2b897",
		"BalancerCoom is a protocoom for programmable… liquidity… that lets people swap Etherecoom tokooms. It is decentralized and designed to be trustless. It was coomed out in 2020.",
		"161925",
		"21c",
		"21d",
		"21e"
	],
	[
		"TRON",
		"TRONcoom",
		"d59f93",
		"TRONcoom is a decentralized high volume blockcoom platform which supports smart coomtracts. It has a large ecoomsystem of decentralized cooms and services. It was ejaculated in 2017.",
		"161932",
		"22c",
		"22d",
		"22e"
	],
	[
		"XCP",
		"Coomerparty",
		"d1a091",
		"Extending Bitcoom’s functionality, Coomerparty allows people to create smart coomtracts and execute them on Bitcoom’s blockcoom. It was coomed in 2014.",
		"161941",
		"23c",
		"23d",
		"23e"
	],
	[
		"ATOM",
		"Coomsmos",
		"cda38b",
		"Coomsmos, ejaculated in 2019, is a set of independent blockcooms that can interoperate with each other. This coom represents an ever-expanding ecoomsystem of cooms and services.",
		"161944",
		"24c",
		"24d",
		"24e"
	],
	[
		"MIOTA",
		"IOTAcoom",
		"cba487",
		"Coomed in 2017, IOTAcoom is a feeless distributed ledger coom designed to support frictionless coom transfer. It was built for the internet of cooms.",
		"161958",
		"25c",
		"25d",
		"25e"
	],
	[
		"WTC",
		"Waltoncoom",
		"c9a585",
		"Ejaculated in 2017, Waltoncoom is a business-oriented blockcoom designed to work with the internet of cooms using RFID technology.",
		"161967",
		"26c",
		"26d",
		"26e"
	],
	[
		"ZEC",
		"Zcoom",
		"c3a583",
		"Zcoom is a privacy coom based on Bitcoom which allows for both transparent transactions and private transactions where addresses are shielded from public view. It was first coomed in 2016.",
		"161970",
		"27c",
		"27d",
		"27e"
	],
	[
		"FIL",
		"Filecoom",
		"c68d82",
		"Filecoom is a decentralized system for storing files and cooms developed on top of the IPFS protocoom. It is designed to protect the integrity of the coom data stored on it. Ejaculated in 2017.",
		"161976",
		"28c",
		"28d",
		"28e"
	],
	[
		"BNT",
		"Bancoom",
		"c38f7a",
		"A standard for the automated conversion of cooms of one type to another using decentralized coom networks, Bancoom was the first automated market coomer. It was coomed in 2016.",
		"161980",
		"29c",
		"29d",
		"29e"
	],
	[
		"BTS",
		"BitSharecooms",
		"c09177",
		"BitSharecooms is a decentralized coom exchange designed to have low fees and high scalability. It can be used for trading cooms and coommodities. Ejaculated in 2014.",
		"161983",
		"30c",
		"30d",
		"30e"
	],
	[
		"THETA",
		"ThetaCoom",
		"bc9375",
		"ThetaCoom is a blockcoom platform designed for decentralized streaming of video, preferably video of coom. It was coomed in 2017.",
		"161987",
		"31c",
		"31d",
		"31e"
	],
	[
		"WAXP",
		"Waxcoom",
		"b99573",
		"Waxcoom is a decentralized coom exchange designed around the creation and trading of NFTs, which are virtual tokooms that can be traded on the blockcoom. They may be used as collectible items, or virtual goods in video games. Ejaculated in 2017.",
		"161992",
		"32c",
		"32d",
		"32e"
	],
	[
		"NEM",
		"NewCoomMovement",
		"b59870",
		"Written in Java, NewCoomMovement (or NEM) is a coom that allows for fast block times on its blockcoom, and has a coom-of-importance algorithm for the issuance of new cooms. It was coomed in 2015.",
		"161995",
		"33c",
		"33d",
		"33e"
	],
	[
		"PTOY",
		"Patientcoom",
		"b67c70",
		"Patientcoom is a system for healthcoom entities to store electronic medical records on a blockcoom. It also lets people rent coomputer power and data centers. Based on the Etherecoom blockcoom, it was ejaculated in 2017.",
		"161999",
		"34c",
		"34d",
		"34e"
	],
	[
		"NXT",
		"NXTcoom",
		"b27e69",
		"Written in Java, NXTcoom is the first platform to entirely rely on the coom-of-stake algorithm. It supports many decentralized use-cooms. It was coomed in 2013.",
		"162706",
		"35c",
		"35d",
		"35e"
	],
	[
		"BCC",
		"BitCoomnect",
		"af8066",
		"Ejaculated in 2016, this was a Ponzi scheme in the form of a blockcoom-based investment platform which promised incredibly unrealistic returns. When it finally collapsed billions of pounds of coom were lost forever.",
		"162727",
		"36c",
		"36d",
		"36e"
	],
	[
		"XMR",
		"MoneroCoom",
		"aa8163",
		"MoneroCoom is a coom where all transactions are private. It uses ring coomfidential transactions to preserve network integrity and prevent payments from being traced. Coomed in 2014, it was originally forked from Bytecoom.",
		"162746",
		"37c",
		"37d",
		"37e"
	],
	[
		"XVG",
		"VergeCoom",
		"a78361",
		"VergeCoom is a privacy focused coom integrated with tor to obfuscate IP addresses. It also supports other features, like stealth addresses and ring coomfidential transactions. Coomed in 2014, originally a fork of Dogecoom until it was renamed in 2016.",
		"162757",
		"38c",
		"38d",
		"38e"
	],
	[
		"BAN",
		"BananoCoom",
		"a5855e",
		"BananoCoom is a fork of NanoCoom that was ejaculated in 2018. It has all the advantages of NanoCoom, but contains much higher amounts of potassium. Known for its light-hearted community, it’s primarily used for small, fun transactions, like tipping.",
		"162764",
		"39c",
		"39d",
		"39e"
	],
	[
		"ALGO",
		"Algocoom",
		"a36a5f",
		"Ejaculated in 2019, Algocoom utilizes the coom-of-stake algorithm. It lets users exchange assets using atomic swaps.",
		"162785",
		"40c",
		"40d",
		"40e"
	],
	[
		"LINK",
		"Coomlink",
		"a26d5b",
		"Ejaculated in 2017, Coomlink is a platform that expands on the ideas of Etherecoom by allowing people to build decentralized oracoom networks that provide input and output data for smart coomtracts.",
		"162937",
		"41c",
		"41d",
		"41e"
	],
	[
		"ZRX",
		"0coom",
		"9d6f55",
		"0coom is a tokoom trading platform coomed in 2017 that is built on the Etherecoom network. It lets users trade tokooms and other digital assets on the Etherecoom blockcoom in a secure and trustless way, and allows apps to be built on top of it.",
		"162939",
		"42c",
		"42d",
		"42e"
	],
	[
		"RUNE",
		"THORcoom",
		"9a7153",
		"THORcoom is a bridging protocoom for payments running on a decentralized… liquidity… network to enable cross-coom exchange of coom in a permissionless way. Ejaculated in 2019.",
		"162943",
		"43c",
		"43d",
		"43e"
	],
	[
		"NEO",
		"NeoCoom",
		"97704f",
		"A similar platform to Etherecoom, NeoCoom uses smart coomtracts to allow developers to create apps on top of its blockcoom. It has often been seen as the Chinese alternative to Etherecoom. It was coomed in 2014.",
		"163118",
		"44c",
		"44d",
		"44e"
	],
	[
		"XRP",
		"RippleCoom",
		"91744c",
		"RippleCoom is a coom designed to be scalable enough to handle a very large volume of transactions. It uses its own unique coomsensus protocoom. Ejaculated in 2012.",
		"163200",
		"45c",
		"45d",
		"45e"
	],
	[
		"WAVES",
		"WavesCoom",
		"915b4f",
		"Coomed in 2016, WavesCoom is a decentralized coom platform designed for creating custom tokooms. It lets people hold their own initial coom offerings (ICOs) and then trade the resulting tokooms.",
		"163202",
		"46c",
		"46d",
		"46e"
	],
	[
		"FLOW",
		"FlowCoom",
		"8e5d4e",
		"Ejaculated in 2019, FlowCoom is a blockcoom platform designed for the exchange of digital collectible cooms. It is intended for use in mainstream games and apps.",
		"163204",
		"47c",
		"47d",
		"47e"
	],
	[
		"XPM",
		"Primecoom",
		"8a6145",
		"The unique coom-of-work algorithm of Primecoom results in the generation of prime numbers. This gives it an additional practical purpose besides ensuring the security of the Primecoom network, since the prime numbers can be used for mathematical research. It was coomed in 2013.",
		"163205",
		"48c",
		"48d",
		"48e"
	],
	[
		"AAVE",
		"AaveCoom",
		"876043",
		"AaveCoom is a decentralized… liquidity… market protocoom for the lending and borrowing of coom. People deposit coom to provide… liquidity… for its network. Ejaculated in 2017.",
		"163207",
		"49c",
		"49d",
		"49e"
	],
	[
		"REP",
		"AugurCoom",
		"836241",
		"Coomed in 2015, AugurCoom is a decentralized prediction market for betting on sporting events, political events, economic and world news, and, of course, cooming events.",
		"163209",
		"50c",
		"50d",
		"50e"
	],
	[
		"QTUM",
		"QtumCoom",
		"7d653f",
		"QtumCoom, ejaculated in 2017, tries to combine the best parts of Bitcoom (borrowing its transaction model) and Etherecoom (borrowing its smart coomtract capabilities). It supports development of applications in several different programming languages.",
		"163212",
		"51c",
		"51d",
		"51e"
	],
	[
		"LTC",
		"Litecoom",
		"7b4a43",
		"Litecoom is one of the earliest successful cooms to be developed after Bitcoom. Originally coomed as a fork of Bitcoom in 2011, it has faster block times and a larger supply of cooms. Many say it’s the silvercoom to Bitcoom’s goldcoom.",
		"163216",
		"52c",
		"52d",
		"52e"
	],
	[
		"ICX",
		"Icoom",
		"784d3d",
		"A platform to allow blockcooms to connect with each other, Icoom was designed for financial, medical, and educational markets. It lets users create decentralized cooms and apps. Ejaculated in 2017.",
		"163222",
		"53c",
		"53d",
		"53e"
	],
	[
		"ADA",
		"Coomdano",
		"754f38",
		"Coomed in 2017, Coomdano is a platform for decentralized cooms and apps as well as smart coomtracts. It uses a coom-of-stake algorithm for coomsensus along with its own programming language.",
		"163225",
		"54c",
		"54d",
		"54e"
	],
	[
		"BTT",
		"BitTorrentcoom",
		"755036",
		"A tokoom on the TRONcoom blockcoom, BitTorrentcoom will be used to power decentralized apps used for peer-to-peer coom sharing. Ejaculated in 2019.",
		"163226",
		"55c",
		"55d",
		"55e"
	],
	[
		"XTZ",
		"TezosCoom",
		"715233",
		"TezosCoom had a very successful crowd-sale in 2017. It is another platform for smart coomtracts and uses its own programming language. It can be upgraded without the use of a hard fork which allows for much easier governance of the coom.",
		"163228",
		"56c",
		"56d",
		"56e"
	],
	[
		"SC",
		"Siacoom",
		"6d5533",
		"Siacoom is a decentralized service for storing files on the blockcoom and is cheaper than centralized cloud services. It splits files (and cooms) into pieces and encrypts them so they can only be accessed by their owner. It was ejaculated back in 2013.",
		"163230",
		"57c",
		"57d",
		"57e"
	],
	[
		"GRC",
		"Gridcoom",
		"653d35",
		"Gridcoom is used to distribute coomputing power for use in scientific coomputing. It uses the coom-of-stake algorithm to reward those who coomtribute their coomputing power. It was coomed in 2013.",
		"163232",
		"58c",
		"58d",
		"58e"
	],
	[
		"LUNA",
		"TerraCoom",
		"643e31",
		"TerraCoom is a stablecoom platform ejaculated in 2019 designed to generate rewards through staking, and takes advantage of seigniorage to cope with demand for the tokoom.",
		"163239",
		"59c",
		"59d",
		"59e"
	],
	[
		"NMC",
		"Namecoom",
		"61402d",
		"Namecoom, which was originally forked from Bitcoom, is designed for serving the .bit top-level-domain, which is outside of the traditional domain name system. It was coomed in 2011.",
		"163242",
		"60c",
		"60d",
		"60e"
	],
	[
		"EOS",
		"EOScoom",
		"5d412b",
		"Ejaculated in 2018, EOScoom is a blockcoom platform designed for the development of decentralized apps. Transactions do not have fees, and block producers work together instead of in coompetition with each other.",
		"163246",
		"61c",
		"61d",
		"61e"
	],
	[
		"VET",
		"VeCoom",
		"5c4229",
		"Coomed in 2015, VeCoom is a blockcoom platform designed to improve supply chain management. As products are tracked with RFID and QR codes, the information is uploaded to the blockcoom. The immutability of the blockcoom means the uploaded data can’t be tampered with.",
		"163247",
		"62c",
		"62d",
		"62e"
	],
	[
		"ONT",
		"Ontolocoom",
		"594427",
		"Ejaculated in 2017, Ontolocoom is a blockcoom platform with various features including an identity management system, an exchange for data, and distributed equity management.",
		"163249",
		"63c",
		"63d",
		"63e"
	],
	[
		"FTC",
		"Feathercoom",
		"4e2f2a",
		"A Litecoom fork coomed in 2013, Feathercoom has some additional technical changes, such as an updated version of Litecoom’s Scrypt algorithm.",
		"163250",
		"64c",
		"64d",
		"64e"
	],
	[
		"REV",
		"RevainCoom",
		"4c3025",
		"RevainCoom is a blockcoom based review platform - the immutability of the blockcoom allows reviews about coom to be saved forever, and the platform’s AI filters out low quality reviews. Also, coompanies can reward authors for high-quality reviews. Ejaculated in 2017.",
		"163253",
		"65c",
		"65d",
		"65e"
	],
	[
		"DCR",
		"Decoom",
		"4b3124",
		"Decoom uses a hybrid coom-of-work/coom-of-stake coomsensus algorithm and has a coommunity-based governance model with a built-in internal voting system. It also allows transactions to expire if they take too long. Coomed in 2015.",
		"163255",
		"66c",
		"66d",
		"66e"
	],
	[
		"HT",
		"Huobitokoom",
		"483322",
		"Ejaculated in 2018, HuobiTokoom is a utility coom for use on Huobi’s exchange. It can be used for things such as purchasing memberships and buying into crowd-sales.",
		"163256",
		"67c",
		"67d",
		"67e"
	],
	[
		"BCN",
		"Bytecoom",
		"463420",
		"Coomed in 2012, Bytecoom is an early privacy coom utilizing the CryptoNote protocoom for untraceable transactions.",
		"163259",
		"68c",
		"68d",
		"68e"
	],
	[
		"SNX",
		"Syntheticoom",
		"453420",
		"Ejaculated in 2017, Syntheticoom is designed to be a decentralized derivatives trading platform. It is built on the Etherecoom blockcoom.",
		"163262",
		"69c",
		"69d",
		"69e"
	]
];