// BioLab image registry — realistik AI assets are linked to the canonical equipment id.
// 3D/2D visualizers are intentionally not used; these images provide a readable study-page header.
export type EquipmentImage = {
  url: string;
  alt: string;
  sourceType: "ai-representative" | "official";
};

export const equipmentImages: Record<string, EquipmentImage> = {
  "BIO-001": {
    url: "/manus-storage/biolab-equipment-001-pcr_c5953119.jpg",
    alt: "PCR termotsiklerining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-002": {
    url: "/manus-storage/biolab-equipment-002-autoclave_fb2b1209.jpg",
    alt: "Bug‘li sterilizator — avtoklavning laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-003": {
    url: "/manus-storage/biolab-equipment-003-bsc_922ae195.jpg",
    alt: "II-sinf biologik xavfsizlik shkafining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-004": {
    url: "/manus-storage/biolab-equipment-004-centrifuge_cdc5c2ff.webp",
    alt: "Sovutiladigan laboratoriya sentrifugasining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-005": {
    url: "/manus-storage/biolab-equipment-005-spectrophotometer_0bc8b921.webp",
    alt: "Mikrohajmli UV-Vis spektrofotometrning laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-006": {
    url: "/manus-storage/biolab-equipment-006_5decbb4b.webp",
    alt: "Gaz xromatografining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-007": {
    url: "/manus-storage/biolab-equipment-007_623417f4.webp",
    alt: "HPLC tizimining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-008": {
    url: "/manus-storage/biolab-equipment-008_26f7dcc6.webp",
    alt: "LC-MS/MS platformasining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-009": {
    url: "/manus-storage/biolab-equipment-009_b27ecfc1.webp",
    alt: "Gel elektroforez tizimining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-010": {
    url: "/manus-storage/biolab-equipment-010_f08eb2a1.webp",
    alt: "Western blot tasvirlash tizimining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-011": {
    url: "/manus-storage/biolab-equipment-011_3ab8a8b2.webp",
    alt: "Mikroplanshet o‘quvchining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-012": {
    url: "/manus-storage/biolab-equipment-012_a7f96a6f.webp",
    alt: "Lyuminometrning laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-013": {
    url: "/manus-storage/biolab-equipment-013_af260068.webp",
    alt: "Flotsitometrning laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-014": {
    url: "/manus-storage/biolab-equipment-014_748d5ea5.webp",
    alt: "Konfokalli mikroskopning laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-015": {
    url: "/manus-storage/biolab-equipment-015_9aed3afb.webp",
    alt: "Teskari faza mikroskopining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-016": {
    url: "/manus-storage/biolab-equipment-016-heracell-vios-160i_767d075f.webp",
    alt: "Thermo Scientific Heracell VIOS 160i CO2 inkubatorining to‘liq mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-017": {
    url: "/manus-storage/biolab-equipment-017-tsx-ult-freezer_5cc07357.webp",
    alt: "Thermo Scientific TSX ultra-past haroratli muzlatgichining to‘liq mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-018": {
    url: "/manus-storage/biolab-equipment-018-lyophilizer-full_ac59fe9a.webp",
    alt: "To‘liq ko‘rinadigan laboratoriya lyofilizatorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-019": {
    url: "/manus-storage/biolab-equipment-019-qsonica-q125-full_11f7902f.webp",
    alt: "QSonica Q125 sonikatorining boshqaruv bloki va probasi bilan to‘liq mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-020": {
    url: "/manus-storage/biolab-equipment-020-ika-hotplate-stirrer_9a3cb916.webp",
    alt: "IKA C-MAG HS 7 turidagi magnit aralashtirgichning mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-021": {
    url: "/manus-storage/biolab-equipment-021-seven-excellence-full_78674308.webp",
    alt: "Mettler Toledo SevenExcellence S470 pH va konduktometriya stansiyasining to‘liq mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-022": {
    url: "/manus-storage/biolab-equipment-022-entris-ii-full-clean_d34d55d6.webp",
    alt: "To‘liq ko‘rinadigan Sartorius Entris II analitik tarozisining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-023": {
    url: "/manus-storage/biolab-equipment-023-memmert-in260-full_f4a1df57.webp",
    alt: "Memmert IN260 laboratoriya termostatining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-024": {
    url: "/manus-storage/biolab-equipment-024-dewar-complete-clean_992f361f.webp",
    alt: "To‘liq siluetli kriogen Dewar idishining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-025": {
    url: "/manus-storage/biolab-equipment-025-eppendorf-minispin_871f4c4b.webp",
    alt: "Eppendorf MiniSpin plus mikrosentrifugasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-026": {
    url: "/manus-storage/biolab-equipment-026-vortex-genie-full-clean_4fc2776f.webp",
    alt: "To‘liq ko‘rinadigan Scientific Industries Vortex-Genie 2 vorteks aralashtirgichining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-027": {
    url: "/manus-storage/biolab-equipment-027-repeater-m4-full-clean_7a8aef0c.webp",
    alt: "To‘liq ko‘rinadigan Eppendorf Repeater M4 dispenserli pipetkasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-028": {
    url: "/manus-storage/biolab-equipment-028-sartorius-picus2-8-channel_3e32e994.webp",
    alt: "Sartorius Picus2 sakkiz kanalli elektron pipetkasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-029": {
    url: "/manus-storage/biolab-equipment-029-veriti-full-clean_fc2f0164.webp",
    alt: "To‘liq ko‘rinadigan Applied Biosystems Veriti 96 termotsiklerining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-030": {
    url: "/manus-storage/biolab-equipment-030-roche-lightcycler-480-ii_b1f63e42.webp",
    alt: "Roche LightCycler 480 Instrument II qPCR qurilmasining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-031": {
    url: "/manus-storage/biolab-equipment-031-agilent-2100-bioanalyzer_ff1efc28.webp",
    alt: "Agilent 2100 Bioanalyzer tizimining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-032": {
    url: "/manus-storage/biolab-equipment-032-illumina-miseq_3d41885d.webp",
    alt: "Illumina MiSeq DNK sekvenatorining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-033": {
    url: "/manus-storage/biolab-equipment-033-roche-cobas-e801_2905e498.webp",
    alt: "Roche cobas e 801 xemiluminessent tahlilchi modulining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-034": {
    url: "/manus-storage/biolab-equipment-034-perkinelmer-pinaacle-900t_8eab7f12.webp",
    alt: "PerkinElmer PinAAcle 900T atom-absorbsion spektrometrining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-035": {
    url: "/manus-storage/biolab-equipment-035-agilent-7900-icpms_80aa2924.webp",
    alt: "Agilent 7900 ICP-MS tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-036": {
    url: "/manus-storage/biolab-equipment-036-mettler-toledo-v30s_c36917ff.webp",
    alt: "Mettler Toledo V30S Karl Fischer titratorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-037": {
    url: "/manus-storage/biolab-equipment-037-brookfield-dv2t_672a32f6.webp",
    alt: "Brookfield DV2T raqamli viskozimetrining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-038": {
    url: "/manus-storage/biolab-equipment-038-refractometer-clean_d08efe52.webp",
    alt: "MISCO Palm Abbe Digital refraktometrining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-039": {
    url: "/manus-storage/biolab-equipment-039-nikon-eclipse-ti2e_10c68252.webp",
    alt: "Nikon ECLIPSE Ti2-E lyuminestsent mikroskopining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-040": {
    url: "/manus-storage/biolab-equipment-040-jeol-jsm-it800_bd2e8a26.webp",
    alt: "JEOL JSM-IT800 skanerlovchi elektron mikroskopining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-041": {
    url: "/manus-storage/biolab-equipment-041-millipore-stericup_620cc907.webp",
    alt: "MilliporeSigma Stericup Quick Release steril vakuumli filtrlash tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-042": {
    url: "/manus-storage/biolab-equipment-042-eppendorf-innova-44r_0ef3b524.webp",
    alt: "Eppendorf Innova 44R inkubator shakerining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-043": {
    url: "/manus-storage/biolab-equipment-043-bioreactor-clean_2bd32d90.webp",
    alt: "Sartorius BIOSTAT B bioreaktorining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-044": {
    url: "/manus-storage/biolab-equipment-044-hach-dr3900_4dbbb437.webp",
    alt: "Hach DR3900 laboratoriya VIS spektrofotometrining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-045": {
    url: "/manus-storage/biolab-equipment-045-microplate-washer-clean_8bd8e18e.webp",
    alt: "BioTek ELx50 mikroplanshet yuvgichining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-046": {
    url: "/manus-storage/biolab-equipment-046-vaisala-gmp252_172ecc02.webp",
    alt: "Vaisala GMP252 CO2 probining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-047": {
    url: "/manus-storage/biolab-equipment-047-harvard-phd-ultra_a27e82a0.webp",
    alt: "Harvard Apparatus PHD ULTRA shpritsli nasosining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-048": {
    url: "/manus-storage/biolab-equipment-048-watson-marlow-630di_62ee7c87.webp",
    alt: "Watson-Marlow 630Di peristaltik nasosining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-049": {
    url: "/manus-storage/biolab-equipment-049-biorad-gel-doc-xr_2b9bde98.webp",
    alt: "Bio-Rad Gel Doc XR gel hujjatlashtirish tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-050": {
    url: "/manus-storage/biolab-equipment-050-supelco-spme-fiber_5d6807df.webp",
    alt: "Supelco SPME Fiber Assembly namuna olish moslamasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-051": {
    url: "/manus-storage/biolab-equipment-051-milliq-iq7000_80330bce.webp",
    alt: "Milli-Q IQ 7000 laboratoriya suvni tozalash tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-052": {
    url: "/manus-storage/biolab-equipment-052-thermomixer-clean_ac7983b5.webp",
    alt: "Eppendorf ThermoMixer C qurilmasining qo‘lsiz mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-053": {
    url: "/manus-storage/biolab-equipment-053-waters-oasis-hlb-3cc_ca26c6e8.webp",
    alt: "Waters Oasis HLB 3 cc SPE cartridge mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-054": {
    url: "/manus-storage/biolab-equipment-054-mini-protean-tetra-full_32614692.webp",
    alt: "Bio-Rad Mini-PROTEAN Tetra SDS-PAGE tizimining komplekt mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-055": {
    url: "/manus-storage/biolab-equipment-055-protean-ief-full_b58737b0.webp",
    alt: "Bio-Rad PROTEAN IEF Cell tizimining to‘liq mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-056": {
    url: "/manus-storage/biolab-equipment-056-akta-pure-full_9965285a.webp",
    alt: "Cytiva ÄKTA pure FPLC oqsil tozalash tizimining to‘liq mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-057": {
    url: "/manus-storage/biolab-equipment-057-imagequant-800-full_dfb0caf0.webp",
    alt: "Amersham ImageQuant 800 xemiluminessent deteksiya tizimining to‘liq mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-058": {
    url: "/manus-storage/biolab-equipment-058-bruker-avance-neo-400-clean_9d765794.webp",
    alt: "Bruker AVANCE NEO 400 MHz NMR tizimining studio mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-059": {
    url: "/manus-storage/biolab-equipment-059-bruker-alpha-ii_af02fa99.webp",
    alt: "Bruker ALPHA II FTIR spektrometrining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-060": {
    url: "/manus-storage/biolab-equipment-060-renishaw-invia-raman_8c478f3d.webp",
    alt: "Renishaw inVia Raman mikroskopining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-061": {
    url: "/manus-storage/biolab-equipment-061-microtome-clean_c7843c96.webp",
    alt: "Leica RM2255 mikroto‘mining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-062": {
    url: "/manus-storage/biolab-equipment-062-leica-cm3050s_43b9bec1.webp",
    alt: "Leica CM3050 S kriostatining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-063": {
    url: "/manus-storage/biolab-equipment-063-leica-bond-iii_de422b4a.webp",
    alt: "Leica BOND-III avtomatik immuno-xistokimyo stantsiyasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-064": {
    url: "/manus-storage/biolab-equipment-064-staining-system-clean_94a0b354.webp",
    alt: "Sakura Tissue-Tek Prisma Plus qurilmasining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-065": {
    url: "/manus-storage/biolab-equipment-065-eppendorf-transferman-4r_606dc638.webp",
    alt: "Eppendorf TransferMan 4r mikroinjeksiya tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-066": {
    url: "/manus-storage/biolab-equipment-066-biorad-gene-pulser-xcell_9387f2a2.webp",
    alt: "Bio-Rad Gene Pulser Xcell elektroporatsiya tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-067": {
    url: "/manus-storage/biolab-equipment-067-cellink-bio-x6_832c22ce.webp",
    alt: "CELLINK BIO X6 bioprinterining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-068": {
    url: "/manus-storage/biolab-equipment-068-buchi-nano-spray-dryer-b90_de1c5291.webp",
    alt: "BÜCHI Nano Spray Dryer B-90 HP mikro-kapsulalash qurilmasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-069": {
    url: "/manus-storage/biolab-equipment-069-malvern-zetasizer-ultra_10d2ee4c.webp",
    alt: "Malvern Panalytical Zetasizer Ultra DLS tahlilchisining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-070": {
    url: "/manus-storage/biolab-equipment-070-sd-biosensor-standard-f_47bff0c8.webp",
    alt: "SD Biosensor STANDARD F lateral flow o‘quvchi tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-071": {
    url: "/manus-storage/biolab-equipment-071-bruker-microflex-lt-sh_c52d2f45.webp",
    alt: "Bruker MALDI Biotyper Microflex LT/SH massa spektrometrining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-072": {
    url: "/manus-storage/biolab-equipment-072-impedimed-sfb7_fc6f7ca6.webp",
    alt: "ImpediMed SFB7 bioimpedans tahlilchisining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-073": {
    url: "/manus-storage/biolab-equipment-073-ta-dsc-250_e80e5693.webp",
    alt: "TA Instruments DSC 250 termal tahlil qurilmasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-074": {
    url: "/manus-storage/biolab-equipment-074-buchi-r300_f1ac6dc7.webp",
    alt: "BÜCHI Rotavapor R-300 rotary evaporatorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-075": {
    url: "/manus-storage/biolab-equipment-075-elmasonic-s60h_6dd6ca92.webp",
    alt: "Elmasonic S60H ultratovushli vanna-sonikatorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-076": {
    url: "/manus-storage/biolab-equipment-076-mediaclave-clean_1f904780.webp",
    alt: "INTEGRA MEDIACLAVE 30 muhit tayyorlash stantsiyasining sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-077": {
    url: "/manus-storage/biolab-equipment-077-interscience-scan-500_2f362cf4.webp",
    alt: "Interscience Scan 500 koloniya sanagichining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-078": {
    url: "/manus-storage/biolab-equipment-078-seward-stomacher-400_a1b95186.webp",
    alt: "Seward Stomacher 400 Circulator qopchali homogenizatorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-079": {
    url: "/manus-storage/biolab-equipment-079-spectramax-i3x-clean_acc666d0.webp",
    alt: "Molecular Devices SpectraMax i3x qurilmasining sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-080": {
    url: "/manus-storage/biolab-equipment-080-pa800-plus-clean_99c5d72f.webp",
    alt: "Beckman Coulter PA 800 Plus tizimining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-081": {
    url: "/manus-storage/biolab-equipment-081-biacore-t200-clean_fb894e70.webp",
    alt: "Cytiva Biacore T200 SPR biosensorining sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-082": {
    url: "/manus-storage/biolab-equipment-082-fluidigm-biomark-hd_143f2fb1.webp",
    alt: "Fluidigm Biomark HD mikrofluidik chip tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-083": {
    url: "/manus-storage/biolab-equipment-083-mettler-inpro-6800i_ccdbc44a.webp",
    alt: "Mettler Toledo InPro 6800i erigan kislorod sensorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-084": {
    url: "/manus-storage/biolab-equipment-084-planer-kryo-560-clean_e006e29c.webp",
    alt: "Planer Kryo 560-16 kriokonservatsiya tizimining sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-085": {
    url: "/manus-storage/biolab-equipment-085-ta-tga-550_a18149ea.webp",
    alt: "TA Instruments TGA 550 termogravimetrik tahlilchisining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-086": {
    url: "/manus-storage/biolab-equipment-086-metrohm-910-pstat-mini_b74d3a17.webp",
    alt: "Metrohm 910 PSTAT mini elektrokimyoviy analizatorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-087": {
    url: "/manus-storage/biolab-equipment-087-hamilton-star_282590ac.webp",
    alt: "Hamilton STAR kombinatorial kimyo liquid handler robotining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-088": {
    url: "/manus-storage/biolab-equipment-088-hach-dr6000_6066865a.webp",
    alt: "Hach DR6000 suv sifati spektrofotometrining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-089": {
    url: "/manus-storage/biolab-equipment-089-metrohm-mira-m3_ef15dd3f.webp",
    alt: "Metrohm Mira M-3 qo‘l Raman spektrometrining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-090": {
    url: "/manus-storage/biolab-equipment-090-biomerieux-vitek2-xl_690c4336.webp",
    alt: "bioMérieux VITEK 2 XL antibiotik sezuvchanlik tahlilchisining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-091": {
    url: "/manus-storage/biolab-equipment-091-biorad-qx200-ddpcr_84d52adb.webp",
    alt: "Bio-Rad QX200 Droplet Digital PCR tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-092": {
    url: "/manus-storage/biolab-equipment-092-biomek-i7-full_4dfc463e.webp",
    alt: "To‘liq ko‘rinadigan Beckman Coulter Biomek i7 Hybrid CRISPR workflow avtomatlashtirish ish stantsiyasi mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-093": {
    url: "/manus-storage/biolab-equipment-093-lonza-4d-nucleofector-x_b3173919.webp",
    alt: "Lonza 4D-Nucleofector X Unit elektroporatorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-094": {
    url: "/manus-storage/biolab-equipment-094-tc20-cell-counter-clean_302693b6.webp",
    alt: "Bio-Rad TC20 avtomatik hujayra sanagichining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-095": {
    url: "/manus-storage/biolab-equipment-095-chromatography-system-clean_8326f967.webp",
    alt: "Bio-Rad NGC xromatografiya tizimining oq fondagi mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-096": {
    url: "/manus-storage/biolab-equipment-096-gradient-master-full_4b6ce954.webp",
    alt: "To‘liq ko‘rinadigan BioComp Gradient Master 108 qurilmasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-097": {
    url: "/manus-storage/biolab-equipment-097-beckman-optima-xpn90_624a2ae2.webp",
    alt: "Beckman Coulter Optima XPN-90 preparativ ultrasentrifugasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-098": {
    url: "/manus-storage/biolab-equipment-098-lenovo-thinkstation-p620_f43701d2.webp",
    alt: "Lenovo ThinkStation P620 bioinformatik ish stantsiyasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-099": {
    url: "/manus-storage/biolab-equipment-099-human-liver-s9-kit_ace08a67.webp",
    alt: "Inson jigari S9 fraksiyasi asosidagi ksenobiotik metabolizm to‘plamining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-100": {
    url: "/manus-storage/biolab-equipment-100-cdc-biofilm-reactor_4a28124e.webp",
    alt: "BioSurface Technologies CDC biofilm reaktorining mahsulot rasmi",
    sourceType: "official",
  },
};
