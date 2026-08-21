// BioLab image registry — realistik AI assets are linked to the canonical equipment id.
// 3D/2D visualizers are intentionally not used; these images provide a readable study-page header.
export type EquipmentImage = {
  url: string;
  alt: string;
  sourceType: "ai-representative" | "official";
};

export const equipmentImages: Record<string, EquipmentImage> = {
  "BIO-001": {
    url: "/images/biolab-catalog-hero_fallback.webp",
    alt: "PCR termotsiklerining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-002": {
    url: "/images/biolab-catalog-hero_fallback.webp",
    alt: "Bug‘li sterilizator — avtoklavning laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-003": {
    url: "/images/biolab-catalog-hero_fallback.webp",
    alt: "II-sinf biologik xavfsizlik shkafining laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-004": {
    url: "/images/biolab-catalog-hero_fallback.webp",
    alt: "Sovutiladigan laboratoriya sentrifugasining laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-005": {
    url: "/images/biolab-catalog-hero_fallback.webp",
    alt: "Mikrohajmli UV-Vis spektrofotometrning laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-006": {
    url: "/images/biolab-catalog-hero_fallback.webp",
    alt: "Gaz xromatografining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-007": {
    url: "/manus-storage/biolab-equipment-007-hero_66600028.webp",
    alt: "HPLC tizimining laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-008": {
    url: "/manus-storage/biolab-equipment-008_26f7dcc6.webp",
    alt: "LC-MS/MS platformasining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-009": {
    url: "/manus-storage/biolab-equipment-009-hero_17a4b3b0.webp",
    alt: "Gel elektroforez tizimining laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-010": {
    url: "/manus-storage/biolab-equipment-010_f08eb2a1.webp",
    alt: "Western blot tasvirlash tizimining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-011": {
    url: "/manus-storage/biolab-equipment-011-hero_46e35169.webp",
    alt: "Mikroplanshet o‘quvchining laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-012": {
    url: "/manus-storage/biolab-equipment-012-hero_02a3b165.webp",
    alt: "Lyuminometrning laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-013": {
    url: "/manus-storage/biolab-equipment-013-hero_8fd448d3.webp",
    alt: "Flotsitometrning laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-014": {
    url: "/manus-storage/biolab-equipment-014-hero_cba49d4b.webp",
    alt: "Konfokalli mikroskopning laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-015": {
    url: "/manus-storage/biolab-equipment-015-hero_2559a9b1.webp",
    alt: "Teskari faza mikroskopining laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-016": {
    url: "/manus-storage/biolab-equipment-016-hero_a30aa6a1.webp",
    alt: "CO2 inkubatorining laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-017": {
    url: "/manus-storage/biolab-equipment-017-hero_0d62cfcc.webp",
    alt: "Ultra-past haroratli laboratoriya muzlatgichining laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-018": {
    url: "/manus-storage/biolab-equipment-018-hero_ab9c0ff5.webp",
    alt: "Laboratoriya liyofilizatorining laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-019": {
    url: "/manus-storage/biolab-equipment-019-hero_26cdcff4.webp",
    alt: "Ultratovushli homogenizatorning laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-020": {
    url: "/manus-storage/biolab-equipment-020-hero_343e7ffe.webp",
    alt: "Qizdiruvchi plitali magnit aralashtirgichning laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-021": {
    url: "/manus-storage/biolab-equipment-021-hero_ca697f12.webp",
    alt: "pH-metrning laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-022": {
    url: "/manus-storage/biolab-equipment-022-hero_768239c8.webp",
    alt: "Analitik tarozining laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-023": {
    url: "/manus-storage/biolab-equipment-023-hero_d1a4beed.webp",
    alt: "Laboratoriya termostatining laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-024": {
    url: "/manus-storage/biolab-equipment-024-hero_1188caf3.webp",
    alt: "Suyuq azot Dewar idishining laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-025": {
    url: "/manus-storage/biolab-equipment-025-hero_a7a73916.webp",
    alt: "Mikrosentrifuganing laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-026": {
    url: "/manus-storage/biolab-equipment-026-hero_2906c43e.webp",
    alt: "Vorteks aralashtirgichning laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-027": {
    url: "/manus-storage/biolab-equipment-027-hero_0d74d20e.webp",
    alt: "Dispenserli avtomatik pipetkaning laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-028": {
    url: "/manus-storage/biolab-equipment-028-hero_70faebff.webp",
    alt: "Multikanalli pipetkaning laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-029": {
    url: "/manus-storage/biolab-equipment-029-hero_13ae1e35.webp",
    alt: "Qo‘lda PCR termotsiklerining laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-030": {
    url: "/manus-storage/biolab-equipment-030-hero_83b6e823.webp",
    alt: "Real-time PCR qurilmasining laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-031": {
    url: "/manus-storage/biolab-equipment-031-hero_2f60d58e.webp",
    alt: "Kapillyar elektroforez bioanalizatorining laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-032": {
    url: "/manus-storage/biolab-equipment-032-hero_8a0bde95.webp",
    alt: "DNK sekvenatorining laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-033": {
    url: "/manus-storage/biolab-equipment-033-hero_77dfa533.webp",
    alt: "Xemiluminessent tahlilchining laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-034": {
    url: "/manus-storage/biolab-equipment-034-perkinelmer-pinaacle-900t_8eab7f12.webp",
    alt: "PerkinElmer PinAAcle 900T atom-absorbsion spektrometrining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-035": {
    url: "/manus-storage/biolab-equipment-035-hero_500ea4ea.webp",
    alt: "ICP-MS spektrometrining laboratoriya-realistik o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-036": {
    url: "/manus-storage/biolab-equipment-036-hero_288f352f.webp",
    alt: "Karl Fischer titratorining laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
  },
  "BIO-037": {
    url: "/manus-storage/biolab-equipment-037-hero_39b34321.webp",
    alt: "Viskozimetrning laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
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
    url: "/manus-storage/biolab-equipment-040-hero_4587a574.webp",
    alt: "Skanerlovchi elektron mikroskopning laboratoriya-hero o‘quv vizuali",
    sourceType: "ai-representative",
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
