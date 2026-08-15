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
    url: "/manus-storage/biolab-equipment-004-centrifuge_fbe32a11.jpg",
    alt: "Sovutiladigan laboratoriya sentrifugasining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-005": {
    url: "/manus-storage/biolab-equipment-005-spectrophotometer_36cdbca1.jpg",
    alt: "Mikrohajmli UV-Vis spektrofotometrning laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-006": {
    url: "/manus-storage/biolab-equipment-006_e65be8bf.jpg",
    alt: "Gaz xromatografining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-007": {
    url: "/manus-storage/biolab-equipment-007_d34f02cc.jpg",
    alt: "HPLC tizimining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-008": {
    url: "/manus-storage/biolab-equipment-008_65e5a6e2.jpg",
    alt: "LC-MS/MS platformasining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-009": {
    url: "/manus-storage/biolab-equipment-009_e48e0c0e.jpg",
    alt: "Gel elektroforez tizimining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-010": {
    url: "/manus-storage/biolab-equipment-010_648a939a.jpg",
    alt: "Western blot tasvirlash tizimining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-011": {
    url: "/manus-storage/biolab-equipment-011_39c033de.jpg",
    alt: "Mikroplanshet o‘quvchining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-012": {
    url: "/manus-storage/biolab-equipment-012_4fd3421a.jpg",
    alt: "Lyuminometrning laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-013": {
    url: "/manus-storage/biolab-equipment-013_f72d33b5.jpg",
    alt: "Flotsitometrning laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-014": {
    url: "/manus-storage/biolab-equipment-014_a061ff9c.jpg",
    alt: "Konfokalli mikroskopning laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-015": {
    url: "/manus-storage/biolab-equipment-015_7e8182bc.jpg",
    alt: "Teskari faza mikroskopining laboratoriya-realistik ko‘rinishi",
    sourceType: "ai-representative",
  },
  "BIO-016": {
    url: "/manus-storage/biolab-equipment-016-heracell-vios-160i_9f02791f.jpg",
    alt: "Thermo Scientific Heracell VIOS 160i CO2 inkubatorining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-017": {
    url: "/manus-storage/biolab-equipment-017-tsx-ult-freezer_142dbb35.jpg",
    alt: "Thermo Scientific TSX ultra-past haroratli muzlatgichining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-018": {
    url: "/manus-storage/biolab-equipment-018-martin-christ-lyophilizer_e7aefb85.png",
    alt: "Martin Christ Alpha 1-2 turidagi laboratoriya lyofilizatorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-019": {
    url: "/manus-storage/biolab-equipment-019-ultrasonic-homogenizer_20769d42.webp",
    alt: "Ultratovushli gomogenizatorning mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-020": {
    url: "/manus-storage/biolab-equipment-020-ika-hotplate-stirrer_33cff833.jpg",
    alt: "IKA C-MAG HS 7 turidagi magnit aralashtirgichning mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-021": {
    url: "/manus-storage/biolab-equipment-021-mettler-toledo-s470_7b3993d3.jpg",
    alt: "Mettler Toledo SevenExcellence S470 pH-metrining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-022": {
    url: "/manus-storage/biolab-equipment-022-sartorius-entris-ii_3d3a959b.jpg",
    alt: "Sartorius Entris II BCE64i-1S analitik tarozisining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-023": {
    url: "/manus-storage/biolab-equipment-023-memmert-in260_256aab95.png",
    alt: "Memmert IN260 laboratoriya termostatining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-024": {
    url: "/manus-storage/biolab-equipment-024-liquid-nitrogen-dewar_0e4d38fc.webp",
    alt: "Suyuq azot uchun kriogen Dewar idishining mahsulot rasmi; konfiguratsiya namuna sifatida berilgan",
    sourceType: "official",
  },
  "BIO-025": {
    url: "/manus-storage/biolab-equipment-025-eppendorf-minispin_ab6c73cb.jpg",
    alt: "Eppendorf MiniSpin plus mikrosentrifugasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-026": {
    url: "/manus-storage/biolab-equipment-026-vortex-genie-2_8c5a1553.png",
    alt: "Scientific Industries Vortex-Genie 2 vorteks aralashtirgichining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-027": {
    url: "/manus-storage/biolab-equipment-027-eppendorf-repeater-m4_3fb8349d.jpg",
    alt: "Eppendorf Repeater M4 dispenserli pipetkasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-028": {
    url: "/manus-storage/biolab-equipment-028-sartorius-picus2-8-channel_db8b87af.jpg",
    alt: "Sartorius Picus2 sakkiz kanalli elektron pipetkasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-029": {
    url: "/manus-storage/biolab-equipment-029-applied-biosystems-veriti-96_8fb70090.jpg",
    alt: "Applied Biosystems Veriti 96 termotsiklerining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-030": {
    url: "/manus-storage/biolab-equipment-030-roche-lightcycler-480-ii_b367b9bf.jpg",
    alt: "Roche LightCycler 480 Instrument II qPCR qurilmasining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-031": {
    url: "/manus-storage/biolab-equipment-031-agilent-2100-bioanalyzer_96d2b0a4.jpg",
    alt: "Agilent 2100 Bioanalyzer tizimining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-032": {
    url: "/manus-storage/biolab-equipment-032-illumina-miseq_079f2cd5.png",
    alt: "Illumina MiSeq DNK sekvenatorining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-033": {
    url: "/manus-storage/biolab-equipment-033-roche-cobas-e801_3d9ba30e.jpg",
    alt: "Roche cobas e 801 xemiluminessent tahlilchi modulining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-034": {
    url: "/manus-storage/biolab-equipment-034-perkinelmer-pinaacle-900t_c17e7b39.jpg",
    alt: "PerkinElmer PinAAcle 900T atom-absorbsion spektrometrining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-035": {
    url: "/manus-storage/biolab-equipment-035-agilent-7900-icpms_c88c73ad.webp",
    alt: "Agilent 7900 ICP-MS tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-036": {
    url: "/manus-storage/biolab-equipment-036-mettler-toledo-v30s_fd50b9c3.png",
    alt: "Mettler Toledo V30S Karl Fischer titratorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-037": {
    url: "/manus-storage/biolab-equipment-037-brookfield-dv2t_23c746f0.jpg",
    alt: "Brookfield DV2T raqamli viskozimetrining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-038": {
    url: "/manus-storage/biolab-equipment-038-refractometer-clean_92feb5e0.jpg",
    alt: "MISCO Palm Abbe Digital refraktometrining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-039": {
    url: "/manus-storage/biolab-equipment-039-nikon-eclipse-ti2e_2bbe3761.jpg",
    alt: "Nikon ECLIPSE Ti2-E lyuminestsent mikroskopining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-040": {
    url: "/manus-storage/biolab-equipment-040-jeol-jsm-it800_383333b0.jpg",
    alt: "JEOL JSM-IT800 skanerlovchi elektron mikroskopining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-041": {
    url: "/manus-storage/biolab-equipment-041-millipore-stericup_251d6625.jpg",
    alt: "MilliporeSigma Stericup Quick Release steril vakuumli filtrlash tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-042": {
    url: "/manus-storage/biolab-equipment-042-eppendorf-innova-44r_f56e51b4.jpg",
    alt: "Eppendorf Innova 44R inkubator shakerining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-043": {
    url: "/manus-storage/biolab-equipment-043-bioreactor-clean_d6a5099c.webp",
    alt: "Sartorius BIOSTAT B bioreaktorining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-044": {
    url: "/manus-storage/biolab-equipment-044-hach-dr3900_4058249b.jpg",
    alt: "Hach DR3900 laboratoriya VIS spektrofotometrining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-045": {
    url: "/manus-storage/biolab-equipment-045-microplate-washer-clean_ab2daad0.jpg",
    alt: "BioTek ELx50 mikroplanshet yuvgichining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-046": {
    url: "/manus-storage/biolab-equipment-046-vaisala-gmp252_59a821e4.jpg",
    alt: "Vaisala GMP252 CO2 probining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-047": {
    url: "/manus-storage/biolab-equipment-047-harvard-phd-ultra_9309223b.jpg",
    alt: "Harvard Apparatus PHD ULTRA shpritsli nasosining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-048": {
    url: "/manus-storage/biolab-equipment-048-watson-marlow-630di_bc4bfa26.jpg",
    alt: "Watson-Marlow 630Di peristaltik nasosining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-049": {
    url: "/manus-storage/biolab-equipment-049-biorad-gel-doc-xr_06b3ea5c.jpg",
    alt: "Bio-Rad Gel Doc XR gel hujjatlashtirish tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-050": {
    url: "/manus-storage/biolab-equipment-050-supelco-spme-fiber_1393a698.jpg",
    alt: "Supelco SPME Fiber Assembly namuna olish moslamasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-051": {
    url: "/manus-storage/biolab-equipment-051-milliq-iq7000_42b05dba.jpg",
    alt: "Milli-Q IQ 7000 laboratoriya suvni tozalash tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-052": {
    url: "/manus-storage/biolab-equipment-052-thermomixer-clean_07a02632.jpg",
    alt: "Eppendorf ThermoMixer C qurilmasining qo‘lsiz mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-053": {
    url: "/manus-storage/biolab-equipment-053-waters-oasis-hlb-3cc_cd895406.jpg",
    alt: "Waters Oasis HLB 3 cc SPE cartridge mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-054": {
    url: "/manus-storage/biolab-equipment-054-biorad-mini-protean-tetra_30964f28.jpg",
    alt: "Bio-Rad Mini-PROTEAN Tetra SDS-PAGE tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-055": {
    url: "/manus-storage/biolab-equipment-055-ief-system-clean_72a1fa8d.jpg",
    alt: "Izoelektrik fokuslash kamerasining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-056": {
    url: "/manus-storage/biolab-equipment-056-cytiva-akta-pure-25_928ba797.jpg",
    alt: "Cytiva ÄKTA pure 25 FPLC tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-057": {
    url: "/manus-storage/biolab-equipment-057-amersham-imagequant-800_cca34369.jpg",
    alt: "Amersham ImageQuant 800 xemiluminessent deteksiya tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-058": {
    url: "/manus-storage/biolab-equipment-058-bruker-avance-neo-400-clean_1b49a0dd.jpg",
    alt: "Bruker AVANCE NEO 400 MHz NMR tizimining studio mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-059": {
    url: "/manus-storage/biolab-equipment-059-bruker-alpha-ii_0346b7a2.jpeg",
    alt: "Bruker ALPHA II FTIR spektrometrining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-060": {
    url: "/manus-storage/biolab-equipment-060-renishaw-invia-raman_f06e07d4.jpg",
    alt: "Renishaw inVia Raman mikroskopining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-061": {
    url: "/manus-storage/biolab-equipment-061-microtome-clean_4f16db67.jpg",
    alt: "Leica RM2255 mikroto‘mining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-062": {
    url: "/manus-storage/biolab-equipment-062-leica-cm3050s_97c289f8.jpg",
    alt: "Leica CM3050 S kriostatining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-063": {
    url: "/manus-storage/biolab-equipment-063-leica-bond-iii_c7f529e6.jpg",
    alt: "Leica BOND-III avtomatik immuno-xistokimyo stantsiyasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-064": {
    url: "/manus-storage/biolab-equipment-064-staining-system-clean_aa010bbd.jpg",
    alt: "Sakura Tissue-Tek Prisma Plus qurilmasining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-065": {
    url: "/manus-storage/biolab-equipment-065-eppendorf-transferman-4r_69bf8f0f.webp",
    alt: "Eppendorf TransferMan 4r mikroinjeksiya tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-066": {
    url: "/manus-storage/biolab-equipment-066-biorad-gene-pulser-xcell_9c4a7474.jpg",
    alt: "Bio-Rad Gene Pulser Xcell elektroporatsiya tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-067": {
    url: "/manus-storage/biolab-equipment-067-cellink-bio-x6_58762db5.jpg",
    alt: "CELLINK BIO X6 bioprinterining rasmiy mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-068": {
    url: "/manus-storage/biolab-equipment-068-buchi-nano-spray-dryer-b90_13b61fbc.jpg",
    alt: "BÜCHI Nano Spray Dryer B-90 HP mikro-kapsulalash qurilmasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-069": {
    url: "/manus-storage/biolab-equipment-069-malvern-zetasizer-ultra_ccfb19ba.png",
    alt: "Malvern Panalytical Zetasizer Ultra DLS tahlilchisining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-070": {
    url: "/manus-storage/biolab-equipment-070-sd-biosensor-standard-f_c812c16b.jpg",
    alt: "SD Biosensor STANDARD F lateral flow o‘quvchi tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-071": {
    url: "/manus-storage/biolab-equipment-071-bruker-microflex-lt-sh_1afc8d27.jpg",
    alt: "Bruker MALDI Biotyper Microflex LT/SH massa spektrometrining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-072": {
    url: "/manus-storage/biolab-equipment-072-impedimed-sfb7_59a4e0a9.png",
    alt: "ImpediMed SFB7 bioimpedans tahlilchisining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-073": {
    url: "/manus-storage/biolab-equipment-073-ta-dsc-250_6354d603.jpg",
    alt: "TA Instruments DSC 250 termal tahlil qurilmasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-074": {
    url: "/manus-storage/biolab-equipment-074-buchi-r300_aa3fb74c.jpg",
    alt: "BÜCHI Rotavapor R-300 rotary evaporatorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-075": {
    url: "/manus-storage/biolab-equipment-075-elmasonic-s60h_415f36b0.jpg",
    alt: "Elmasonic S60H ultratovushli vanna-sonikatorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-076": {
    url: "/manus-storage/biolab-equipment-076-mediaclave-clean_34909a88.png",
    alt: "INTEGRA MEDIACLAVE 30 muhit tayyorlash stantsiyasining sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-077": {
    url: "/manus-storage/biolab-equipment-077-interscience-scan-500_9d51d0c1.jpg",
    alt: "Interscience Scan 500 koloniya sanagichining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-078": {
    url: "/manus-storage/biolab-equipment-078-seward-stomacher-400_2b3a77f3.webp",
    alt: "Seward Stomacher 400 Circulator qopchali homogenizatorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-079": {
    url: "/manus-storage/biolab-equipment-079-spectramax-i3x-clean_0e39f54e.webp",
    alt: "Molecular Devices SpectraMax i3x qurilmasining sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-080": {
    url: "/manus-storage/biolab-equipment-080-pa800-plus-clean_f02661e9.png",
    alt: "Beckman Coulter PA 800 Plus tizimining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-081": {
    url: "/manus-storage/biolab-equipment-081-biacore-t200-clean_e075203d.jpg",
    alt: "Cytiva Biacore T200 SPR biosensorining sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-082": {
    url: "/manus-storage/biolab-equipment-082-fluidigm-biomark-hd_162b9245.png",
    alt: "Fluidigm Biomark HD mikrofluidik chip tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-083": {
    url: "/manus-storage/biolab-equipment-083-mettler-inpro-6800i_82dab9e8.jpg",
    alt: "Mettler Toledo InPro 6800i erigan kislorod sensorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-084": {
    url: "/manus-storage/biolab-equipment-084-planer-kryo-560-clean_a2650d7f.jpg",
    alt: "Planer Kryo 560-16 kriokonservatsiya tizimining sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-085": {
    url: "/manus-storage/biolab-equipment-085-ta-tga-550_205802fd.png",
    alt: "TA Instruments TGA 550 termogravimetrik tahlilchisining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-086": {
    url: "/manus-storage/biolab-equipment-086-metrohm-910-pstat-mini_09839aa7.jpg",
    alt: "Metrohm 910 PSTAT mini elektrokimyoviy analizatorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-087": {
    url: "/manus-storage/biolab-equipment-087-hamilton-star_2b681a0b.jpg",
    alt: "Hamilton STAR kombinatorial kimyo liquid handler robotining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-088": {
    url: "/manus-storage/biolab-equipment-088-hach-dr6000_80ba056a.jpg",
    alt: "Hach DR6000 suv sifati spektrofotometrining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-089": {
    url: "/manus-storage/biolab-equipment-089-metrohm-mira-m3_94c9117a.jpg",
    alt: "Metrohm Mira M-3 qo‘l Raman spektrometrining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-090": {
    url: "/manus-storage/biolab-equipment-090-biomerieux-vitek2-xl_eafbe9aa.png",
    alt: "bioMérieux VITEK 2 XL antibiotik sezuvchanlik tahlilchisining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-091": {
    url: "/manus-storage/biolab-equipment-091-biorad-qx200-ddpcr_318e3d94.jpg",
    alt: "Bio-Rad QX200 Droplet Digital PCR tizimining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-092": {
    url: "/manus-storage/biolab-equipment-092-crispr-cas9-clean_754f7705.jpg",
    alt: "IDT Alt-R CRISPR-Cas9 reagent tizimining neytral fondagi mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-093": {
    url: "/manus-storage/biolab-equipment-093-lonza-4d-nucleofector-x_e88886eb.jpg",
    alt: "Lonza 4D-Nucleofector X Unit elektroporatorining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-094": {
    url: "/manus-storage/biolab-equipment-094-tc20-cell-counter-clean_20f9047a.jpg",
    alt: "Bio-Rad TC20 avtomatik hujayra sanagichining oq fondagi sof mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-095": {
    url: "/manus-storage/biolab-equipment-095-chromatography-system-clean_27fd4708.jpg",
    alt: "Bio-Rad NGC xromatografiya tizimining oq fondagi mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-096": {
    url: "/manus-storage/biolab-equipment-096-gradient-master-clean_ffe7205f.jpeg",
    alt: "BioComp Gradient Master 108 mikserining oq fondagi mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-097": {
    url: "/manus-storage/biolab-equipment-097-beckman-optima-xpn90_f193a539.jpg",
    alt: "Beckman Coulter Optima XPN-90 preparativ ultrasentrifugasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-098": {
    url: "/manus-storage/biolab-equipment-098-lenovo-thinkstation-p620_a632ce01.png",
    alt: "Lenovo ThinkStation P620 bioinformatik ish stantsiyasining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-099": {
    url: "/manus-storage/biolab-equipment-099-human-liver-s9-kit_9ff600c1.jpg",
    alt: "Inson jigari S9 fraksiyasi asosidagi ksenobiotik metabolizm to‘plamining mahsulot rasmi",
    sourceType: "official",
  },
  "BIO-100": {
    url: "/manus-storage/biolab-equipment-100-cdc-biofilm-reactor_98d627ad.webp",
    alt: "BioSurface Technologies CDC biofilm reaktorining mahsulot rasmi",
    sourceType: "official",
  },
};
