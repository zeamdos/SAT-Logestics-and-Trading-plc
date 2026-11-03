import { TranslationSchema, Language } from '@/types';

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: 'Overview',
      services: 'Services',
      executive: 'Leadership',
      corridor: 'Corridor',
      contact: 'Contact',
      quoteBtn: 'Get a Quote'
    },
    hero: {
      badge: 'Horn of Africa Multimodal Logistics',
      headlinePart1: 'SAT LOGISTICS',
      headlinePart2: '& TRADING PLC',
      tagline: 'End-to-end supply chain solutions and commercial equipment trading connecting the Port of Djibouti to central Ethiopia.',
      ctaPrimary: 'Request Dispatch',
      ctaSecondary: 'View Services',
      stat1Label: 'Transit Time',
      stat1Value: '36-48h',
      stat2Label: 'Customs SLA',
      stat2Value: '99.4%',
      stat3Label: 'Fleet Capacity',
      stat3Value: '120+',
      stat4Label: 'Primary Corridor',
      stat4Value: 'DJI ➔ ADD',
      corridorStatus: 'Djibouti-Addis Axis: Operational',
      hubBadge: 'HQ: Addis Ababa // Reg: ETH-LOG-4482'
    },
    executive: {
      sectionTag: 'LEADERSHIP',
      headline: 'Executive Leadership.',
      subheadline: 'Led by international supply chain expertise and proven multimodal field execution.',
      name: 'Samuel Ayalew',
      title: 'Co-Founder & CEO',
      credentialBadge: 'MA in Logistics & Supply Chain Management',
      quote: '“Precision logistics is the economic conduit of the Horn of Africa.”',
      bioParagraph1: 'Holding a Master’s degree in Logistics & Supply Chain Management, Samuel Ayalew brings over a decade of high-level freight coordination and corridor management.',
      bioParagraph2: 'He directs SAT’s integrated customs clearance and multimodal haulage connecting the Port of Djibouti directly to Mojo Dry Port and Addis Ababa.',
      metricTitle1: 'Supply Chain Strategy',
      metricDesc1: 'Specialized in dry port integration and corridor optimization.',
      metricTitle2: 'Corridor Delivery',
      metricDesc2: 'Sub-48h customs clearance protocol and live fleet tracking.',
      governanceBadge: 'Licensed Operator // Ethiopian Maritime Authority'
    },
    services: {
      sectionTag: 'SERVICES',
      headline: 'Core Services.',
      subheadline: 'Four specialized verticals engineered for speed and compliance.',
      items: [
        {
          id: 'customs-clearance',
          code: '01',
          title: 'Customs Clearance',
          subtitle: 'AEO Accredited & ASYCUDA Declaration',
          description: 'Rapid electronic customs release across Addis Ababa Airport Cargo, Mojo Dry Port, and Djibouti border stations.',
          specs: [
            'ASYCUDA World Electronic Declarations',
            'Tariff Classification & Duty Valuation',
            'Transit Guarantee Bonds & LC Compliance'
          ],
          kpi: '24-36h Average Release'
        },
        {
          id: 'freight-forwarding',
          code: '02',
          title: 'Freight Forwarding',
          subtitle: 'Djibouti to Addis Ababa Corridor',
          description: 'Synchronized sea, rail, and highway freight routing from Doraleh Container Terminal to central dry ports.',
          specs: [
            'Port Representation at Doraleh (DCT & DMP)',
            'Ethio-Djibouti Railway (EDR) Integration',
            'FCL & LCL Container Consolidation'
          ],
          kpi: '99.4% On-Time Delivery'
        },
        {
          id: 'fleet-coordination',
          code: '03',
          title: 'Cross-Border Fleet',
          subtitle: 'Heavy Haulage & Lowbed Transport',
          description: 'GPS-monitored fleet of flatbeds, lowbeds up to 120 tons, and reefers operating across the Galafi corridor.',
          specs: [
            '24/7 Real-Time Telematics & Satellite Tracking',
            'Heavy Machinery Lowbeds (Up to 120T)',
            'Dedicated Border Convoy Protocol'
          ],
          kpi: '100% Monitored Haulage'
        },
        {
          id: 'machinery-trading',
          code: '04',
          title: 'Machinery Import Trading',
          subtitle: 'Commercial Equipment Sourcing',
          description: 'Turnkey commercial procurement and import facilitation of industrial plant machinery, tooling, and spare assemblies.',
          specs: [
            'Factory-Direct Global Sourcing',
            'Turnkey Import Licensing & Forex Coordination',
            'Factory Doorstep Commissioning Delivery'
          ],
          kpi: 'Turnkey Import Delivery'
        }
      ]
    },
    corridor: {
      sectionTag: 'TRADE CORRIDOR',
      headline: 'Djibouti – Addis Axis.',
      subheadline: 'The 900+ km multimodal lifeline connecting Red Sea maritime shipping to central Ethiopia.',
      stops: [
        {
          code: '01',
          name: 'Port of Djibouti (Doraleh)',
          type: 'Deep-Sea Terminal',
          transitTime: 'Day 00',
          desc: 'Vessel discharge, bill of lading validation, and transit manifest processing.'
        },
        {
          code: '02',
          name: 'Galafi / Dewele Border',
          type: 'Customs Inspection',
          transitTime: 'Day 01',
          desc: 'Escort handover, electronic seal verification, and transit clearance.'
        },
        {
          code: '03',
          name: 'Mojo Dry Port Hub',
          type: 'Intermodal Depot',
          transitTime: 'Day 02',
          desc: 'Container stacking, rail-to-truck transshipment, and bonded storage.'
        },
        {
          code: '04',
          name: 'Addis Ababa (Kality)',
          type: 'Consignee Delivery',
          transitTime: 'Day 02-03',
          desc: 'Final customs release, duty settlement, and direct factory delivery.'
        }
      ]
    },
    contact: {
      sectionTag: 'CONTACT',
      headline: 'Cargo Dispatch & Inquiries.',
      subheadline: 'Direct channel to our logistics team in Addis Ababa. Inquiries answered within 2 hours.',
      form: {
        nameLabel: 'Full Name',
        namePlaceholder: 'e.g., Daniel Haile',
        companyLabel: 'Company Name',
        companyPlaceholder: 'e.g., Ethiopian Manufacturing Group',
        phoneLabel: 'Phone Number',
        phonePlaceholder: '+251 91 234 5678',
        emailLabel: 'Email Address',
        emailPlaceholder: 'logistics@company.com',
        cargoTypeLabel: 'Service Category',
        cargoTypes: [
          'Freight Forwarding (Djibouti to Addis)',
          'Customs Clearance & Declaration',
          'Heavy Machinery Transport (Lowbed)',
          'Tooling & Equipment Import Trading',
          'Cross-Border Fleet Charter'
        ],
        volumeLabel: 'Estimated Volume / Weight',
        volumePlaceholder: 'e.g., 2 x 40ft HC or 30 Tons',
        originDestLabel: 'Origin & Inland Destination',
        originDestPlaceholder: 'e.g., Shanghai ➔ Djibouti ➔ Mojo',
        messageLabel: 'Cargo Notes',
        messagePlaceholder: 'Special handling requirements or schedule...',
        submitBtn: 'Submit Request',
        submittingBtn: 'Submitting...',
        successMsg: 'Request registered. Reference ID: SAT-'
      },
      location: {
        buildingTitle: 'Headquarters',
        buildingName: 'Fetele Building',
        addressLine1: 'Wolo Sefer, Kirkos Sub-City',
        addressLine2: 'Addis Ababa, Ethiopia',
        coordinates: '09°00′05″N 38°46′02″E',
        hoursTitle: 'Operating Hours',
        hours: 'Mon – Sat: 08:00 – 18:30 (EAT) // Operations: 24/7',
        phoneTitle: 'Direct Desk',
        phone: '+251 11 667 4421 / +251 91 123 4567',
        emailTitle: 'Email',
        email: 'operations@satlogistics-et.com',
        mapNotice: 'Fetele Building, Wolo Sefer, Addis Ababa'
      }
    },
    footer: {
      tagline: 'Multimodal freight forwarding, customs clearance, and industrial equipment trading across East Africa.',
      registration: 'SAT Logistics and Trading PLC — Reg. No. ETH-LOG-4482',
      licensing: 'Authorized by the Ethiopian Maritime Authority.',
      copyright: '© 2026 SAT Logistics and Trading PLC.',
      backToTop: 'Back to Top'
    }
  },

  am: {
    nav: {
      home: 'አጠቃላይ',
      services: 'አገልግሎቶች',
      executive: 'አመራር',
      corridor: 'ኮሪደር',
      contact: 'ግንኙነት',
      quoteBtn: 'ጥያቄ ያቅርቡ'
    },
    hero: {
      badge: 'የአፍሪካ ቀንድ መልቲሞዳል ሎጂስቲክስ',
      headlinePart1: 'ኤስኤቲ ሎጂስቲክስ',
      headlinePart2: 'እና ንግድ ኃ/የተ/የግ/ማ',
      tagline: 'የጅቡቲ ወደብን ከማዕከላዊ ኢትዮጵያ ጋር የሚያገናኝ አስተማማኝ የአቅርቦት ሰንሰለት እና የኢንዱስትሪ ማሽነሪዎች ንግድ።',
      ctaPrimary: 'የጭነት አገልግሎት ይጠይቁ',
      ctaSecondary: 'አገልግሎቶችን ይመልከቱ',
      stat1Label: 'የኮሪደር ጊዜ',
      stat1Value: '36-48 ሰዓት',
      stat2Label: 'የጉምሩክ ክሊራንስ',
      stat2Value: '99.4%',
      stat3Label: 'የተሽከርካሪ ብዛት',
      stat3Value: '120+',
      stat4Label: 'ዋናው መስመር',
      stat4Value: 'ጅቡቲ ➔ አዲስ አበባ',
      corridorStatus: 'የጅቡቲ-አዲስ አበባ መስመር: በተሟላ ዝግጁነት ላይ',
      hubBadge: 'ዋና መ/ቤት: አዲስ አበባ // ምዝገባ: ETH-LOG-4482'
    },
    executive: {
      sectionTag: 'አመራር',
      headline: 'የስራ አመራር።',
      subheadline: 'በአለም አቀፍ የአቅርቦት ሰንሰለት ጥልቅ እውቀት እና በምስራቅ አፍሪካ መልቲሞዳል ትራንስፖርት ልምድ የተመሰረተ።',
      name: 'ሳሙኤል አያሌው',
      title: 'ተባባሪ መስራች እና ዋና ስራ አስፈፃሚ (CEO)',
      credentialBadge: 'MA in Logistics & Supply Chain Management',
      quote: '“በአፍሪካ ቀንድ ሎጂስቲክስ ማለት አስተማማኝ ፍጥነትና ሙሉ ግልፅነትን የሚጠይቅ የኢኮኖሚ ደምስር ነው።”',
      bioParagraph1: 'በሎጂስቲክስ እና አቅርቦት ሰንሰለት አስተዳደር የማስተርስ ዲግሪ (MA) ያላቸው ሲሆን፣ በከፍተኛ የጭነት አስተባባሪነት ከአስር ዓመታት በላይ ሰርተዋል።',
      bioParagraph2: 'ኤስኤቲ የጅቡቲ ወደብን ከሞጆ ደረቅ ወደብ እና አዲስ አበባ ተርሚናሎች ጋር የሚያገናኝ የተቀናጀ የጉምሩክና የመልቲሞዳል ትራንስፖርት ስራዎችን ይመራሉ።',
      metricTitle1: 'የአቅርቦት ሰንሰለት ስትራቴጂ',
      metricDesc1: 'በደረቅ ወደብ ትስስር እና የኮሪደር ማቀላጠፍ ላይ ያተኮረ።',
      metricTitle2: 'የኮሪደር ቅልጥፍና',
      metricDesc2: 'ከ48 ሰዓት በታች የሆነ የጉምሩክ ክሊራንስ እና የሳተላይት ክትትል።',
      governanceBadge: 'ፈቃድ ያለው ኦፕሬተር // የኢትዮጵያ ባህር ትራንስፖርትና ሎጂስቲክስ'
    },
    services: {
      sectionTag: 'አገልግሎቶች',
      headline: 'ዋና ዋና አገልግሎቶች።',
      subheadline: 'ለፍጥነትና ለህግ ተገዢነት የተዘጋጁ አራት መሰረታዊ የሎጂስቲክስ ዘርፎች።',
      items: [
        {
          id: 'customs-clearance',
          code: '01',
          title: 'የጉምሩክ ክሊራንስ',
          subtitle: 'ፈጣን የኤሲኩዳ (ASYCUDA) ዲክላራሲዮን',
          description: 'በአዲስ አበባ ኤርፖርት ካርጎ፣ በሞጆ ደረቅ ወደብ እና በጅቡቲ ድንበር ጣቢያዎች ፈጣን የጉምሩክ ሂደቶች።',
          specs: [
            'የቅድመ-መምጫ ASYCUDA World ዲክላራሲዮን',
            'ትክክለኛ የታሪፍ እና የጉምሩክ ቀረጥ ምደባ',
            'የትራንዚት ዋስትና ቦንድ እና የኤልሲ (LC) ሰነዶች ማሟላት'
          ],
          kpi: 'አማካይ 24-36 ሰዓታት'
        },
        {
          id: 'freight-forwarding',
          code: '02',
          title: 'የጭነት አስተላላፊነት',
          subtitle: 'የጅቡቲ - አዲስ አበባ መልቲሞዳል መስመር',
          description: 'የጅቡቲ ወደብን (ዶራሌ ተርሚናል) ከሞጆ ደረቅ ወደብ እና አዲስ አበባ ቃሊቲ ተርሚናል ጋር የሚያገናኝ የተቀናጀ የጭነት አገልግሎት።',
          specs: [
            'በዶራሌ ተርሚናሎች ቋሚ ተወካዮች',
            'ከኢትዮ-ጅቡቲ ምድር ባቡር (EDR) ጋር የተቀናጀ ስራ',
            'ሙሉ ኮንቴይነር (FCL) እና የጋራ ኮንቴይነር (LCL)'
          ],
          kpi: '99.4% በሰዓቱ የማድረስ ምጣኔ'
        },
        {
          id: 'fleet-coordination',
          code: '03',
          title: 'አገር አቋራጭ ተሽከርካሪዎች',
          subtitle: 'ከባድ ማሽነሪ ጫኝ እና ፍላትቤድ',
          description: 'በ24/7 የሳተላይት ጂፒኤስ የታገዙ ከባድ ጫኝ ተሽከርካሪዎች፣ ፍላትቤድ እና እስከ 120 ቶን የሚጭኑ ሎውቤዶች።',
          specs: [
            'በጂፒኤስ የታገዘ የቅጽበት ጭነት ክትትል',
            'እስከ 120 ቶን የሚጭኑ ልዩ የሎውቤድ ተሽከርካሪዎች',
            'አስተማማኝ የድንበር ማቋረጫ ፕሮቶኮል'
          ],
          kpi: '100% የሳተላይት ክትትል'
        },
        {
          id: 'machinery-trading',
          code: '04',
          title: 'የማሽነሪዎች ንግድ',
          subtitle: 'የኢንዱስትሪ እቃዎች ግዥ እና አስመጪነት',
          description: 'የፋብሪካ ማሽነሪዎችን፣ የኮንስትራክሽን እቃዎችን እና መለዋወጫዎችን ከአለም አቀፍ አምራቾች በቀጥታ ማስመጣት።',
          specs: [
            'ቀጥታ ከአምራች ፋብሪካዎች ግዥ መፈፀም',
            'የውጭ ምንዛሬ እና የንግድ ፈቃድ ማመቻቸት',
            'እስከ ፋብሪካ ደጃፍ ድረስ የማድረስ ስራ'
          ],
          kpi: 'የተሟላ የማስረከብ ዋስትና'
        }
      ]
    },
    corridor: {
      sectionTag: 'ኮሪደር',
      headline: 'የጅቡቲ - አዲስ አበባ መስመር።',
      subheadline: 'የቀይ ባህርን የባህር መስመር ከማዕከላዊ ኢትዮጵያ ጋር የሚያገናኘው ከ900 ኪ.ሜ በላይ ርዝመት ያለው የትራንስፖርት መስመር።',
      stops: [
        {
          code: '01',
          name: 'የጅቡቲ ወደብ (ዶራሌ)',
          type: 'የባህር በር',
          transitTime: 'ቀን 00',
          desc: 'ከመርከብ ማውረድ እና የትራንዚት ሰነዶች ማስተናገድ።'
        },
        {
          code: '02',
          name: 'የገላፊ / ደወሌ ድንበር',
          type: 'የጉምሩክ ፍተሻ',
          transitTime: 'ቀን 01',
          desc: 'የተሽከርካሪዎች ርክክብ እና የኤሌክትሮኒክስ ማህተም ፍተሻ።'
        },
        {
          code: '03',
          name: 'የሞጆ ደረቅ ወደብ',
          type: 'የጭነት ማዕከል',
          transitTime: 'ቀን 02',
          desc: 'የኮንቴይነር ክምችት እና ከባቡር ወደ መኪና ማዛወር።'
        },
        {
          code: '04',
          name: 'አዲስ አበባ (ቃሊቲ)',
          type: 'የመጨረሻ መዳረሻ',
          transitTime: 'ቀን 02-03',
          desc: 'የመጨረሻ የጉምሩክ ክሊራንስ እና ጭነቱን ለፋብሪካዎች ማስረከብ።'
        }
      ]
    },
    contact: {
      sectionTag: 'ግንኙነት',
      headline: 'የጭነት ጥያቄ እና ግንኙነት።',
      subheadline: 'በአዲስ አበባ ከሚገኘው የሎጂስቲክስ ቡድናችን ጋር ይገናኙ። ጥያቄዎ በ2 ሰዓታት ውስጥ ምላሽ ያገኛል።',
      form: {
        nameLabel: 'ሙሉ ስም',
        namePlaceholder: 'ምሳሌ፡ ዳንኤል ኃይሌ',
        companyLabel: 'የድርጅት ስም',
        companyPlaceholder: 'ምሳሌ፡ የኢትዮጵያ ማኑፋክቸሪንግ',
        phoneLabel: 'ስልክ ቁጥር',
        phonePlaceholder: '+251 91 234 5678',
        emailLabel: 'ኢሜይል',
        emailPlaceholder: 'logistics@company.com',
        cargoTypeLabel: 'የአገልግሎት አይነት',
        cargoTypes: [
          'የጅቡቲ - አዲስ አበባ የጭነት አስተላላፊነት',
          'የጉምሩክ ክሊራንስ',
          'የከባድ ማሽነሪዎች ማጓጓዝ (ሎውቤድ)',
          'የኢንዱስትሪ ማሽነሪዎች ንግድ',
          'የአገር አቋራጭ ተሽከርካሪ ኪራይ'
        ],
        volumeLabel: 'የጭነቱ መጠን / ቶን',
        volumePlaceholder: 'ምሳሌ፡ 2 ባለ 40ft ኮንቴይነሮች',
        originDestLabel: 'መነሻ እና መድረሻ',
        originDestPlaceholder: 'ምሳሌ፡ ሻንጋይ ➔ ጅቡቲ ➔ ሞጆ',
        messageLabel: 'ተጨማሪ ማብራሪያ',
        messagePlaceholder: 'ስለ ጭነቱ ሁኔታ ይጥቀሱ...',
        submitBtn: 'ጥያቄውን ይላኩ',
        submittingBtn: 'በመላክ ላይ...',
        successMsg: 'ጥያቄዎ ተመዝግቧል! የመለያ ቁጥር፡ SAT-'
      },
      location: {
        buildingTitle: 'ዋና ቢሮ',
        buildingName: 'ፈተለ ህንፃ (Fetele Building)',
        addressLine1: 'ወሎ ሰፈር፣ ቂርቆስ ክፍለ ከተማ',
        addressLine2: 'አዲስ አበባ፣ ኢትዮጵያ',
        coordinates: '09°00′05″N 38°46′02″E',
        hoursTitle: 'የስራ ሰዓታት',
        hours: 'ሰኞ – ቅዳሜ: 08:00 – 18:30 (EAT) // ኦፕሬሽን: 24/7',
        phoneTitle: 'ስልክ',
        phone: '+251 11 667 4421 / +251 91 123 4567',
        emailTitle: 'ኢሜይል',
        email: 'operations@satlogistics-et.com',
        mapNotice: 'ፈተለ ህንፃ፣ ወሎ ሰፈር፣ አዲስ አበባ'
      }
    },
    footer: {
      tagline: 'አስተማማኝ የጭነት አስተላላፊነት፣ የጉምሩክ ክሊራንስ እና የማሽነሪዎች ንግድ።',
      registration: 'ኤስኤቲ ሎጂስቲክስ እና ንግድ ኃ/የተ/የግ/ማ — ምዝገባ: ETH-LOG-4482',
      licensing: 'በኢትዮጵያ ባህር ትራንስፖርትና ሎጂስቲክስ እውቅና የተሰጠው።',
      copyright: '© 2026 ኤስኤቲ ሎጂስቲክስ እና ንግድ ኃ/የተ/የግ/ማ።',
      backToTop: 'ወደ ላይ'
    }
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      executive: 'الإدارة',
      corridor: 'الممر',
      contact: 'اتصل بنا',
      quoteBtn: 'طلب عرض سعر'
    },
    hero: {
      badge: 'اللوجستيات المتعددة الوسائط في القرن الأفريقي',
      headlinePart1: 'شركة إس إيه تي',
      headlinePart2: 'للخدمات اللوجستية والتجارة ش.ذ.م.م',
      tagline: 'حلول سلاسل التوريد المتكاملة وتجارة المعدات الصناعية التي تربط ميناء جيبوتي بوسط إثيوبيا.',
      ctaPrimary: 'طلب شحن فوري',
      ctaSecondary: 'استعراض الخدمات',
      stat1Label: 'مدة العبور',
      stat1Value: '36-48 ساعة',
      stat2Label: 'التخليص الجمركي',
      stat2Value: '99.4%',
      stat3Label: 'سعة الأسطول',
      stat3Value: '+120 شاحنة',
      stat4Label: 'الممر الرئيسي',
      stat4Value: 'جيبوتي ➔ أديس أبابا',
      corridorStatus: 'محور جيبوتي - أديس أبابا: يعمل بكفاءة',
      hubBadge: 'المقر: أديس أبابا // سجل: ETH-LOG-4482'
    },
    executive: {
      sectionTag: 'الإدارة',
      headline: 'القيادة التنفيذية.',
      subheadline: 'بقيادة تستند إلى خبرة أكاديمية وميدانية في سلاسل الإمداد والنقل متعدد الوسائط.',
      name: 'صامويل أياليو',
      title: 'الشريك المؤسس والرئيس التنفيذي',
      credentialBadge: 'ماجستير في إدارة الخدمات اللوجستية وسلاسل الإمداد (MA)',
      quote: '«الخدمات اللوجستية الدقيقة هي الشريان الاقتصادي للقرن الأفريقي.»',
      bioParagraph1: 'حائز على ماجستير في إدارة الخدمات اللوجستية وسلاسل الإمداد، ويمتلك أكثر من عقد من الخبرة في إدارة الممرات التجارية.',
      bioParagraph2: 'يدير منظومة النقل المتعدد الوسائط والتخليص الجمركي التي تربط ميناء جيبوتي بميناء موجو الجاف وأديس أبابا.',
      metricTitle1: 'استراتيجية الإمداد',
      metricDesc1: 'تكامل الموانئ الجافة وتحسين مسارات الشحن.',
      metricTitle2: 'كفاءة الممر',
      metricDesc2: 'تخليص جمركي في أقل من 48 ساعة وتتبع مباشر.',
      governanceBadge: 'مشغل مرخص // هيئة النقل البحري الإثيوبية'
    },
    services: {
      sectionTag: 'الخدمات',
      headline: 'الخدمات الرئيسية.',
      subheadline: 'أربعة قطاعات تشغيلية مصممة للسرعة والامتثال الكامل.',
      items: [
        {
          id: 'customs-clearance',
          code: '01',
          title: 'التخليص الجمركي',
          subtitle: 'تصريح إلكتروني معتمد وفق أسيكودا',
          description: 'إفراج جمركي سريع عبر مطار أديس أبابا، وميناء موجو الجاف، ومحطات الحدود في جيبوتي.',
          specs: [
            'إقرارات مسبقة عبر ASYCUDA World',
            'تصنيف التعريفة الجمركية والرسوم',
            'إدارة خطابات الضمان والاعتمادات'
          ],
          kpi: '24-36 ساعة متوسط الإفراج'
        },
        {
          id: 'freight-forwarding',
          code: '02',
          title: 'شحن وتوجيه البضائع',
          subtitle: 'ممر جيبوتي إلى أديس أبابا',
          description: 'خدمات متكاملة تربط محطات ميناء جيبوتي (دوراليه) بالموانئ الجافة في موجو وأديس أبابا.',
          specs: [
            'تمثيل دائم في موانئ دوراليه (DCT & DMP)',
            'تكامل كامل مع قطار إثيوبيا - جيبوتي السريع',
            'شحن الحاويات الكاملة (FCL) والجزئية (LCL)'
          ],
          kpi: '99.4% التزام بالمواعيد'
        },
        {
          id: 'fleet-coordination',
          code: '03',
          title: 'الأسطول العابر للحدود',
          subtitle: 'نقل ثقيل وشاحنات منخفضة',
          description: 'أسطول شاحنات مجهزة بتتبع GPS يشمل الشاحنات المسطحة والمنخفضة حتى 120 طناً والمبردة.',
          specs: [
            'تتبع ومراقبة مباشرة بالأقمار الصناعية 24/7',
            'ناقلات منخفضة للمعدات الثقيلة حتى 120 طناً',
            'بروتوكول أمني وإشراف حدودي متكامل'
          ],
          kpi: '100% شحن مراقب'
        },
        {
          id: 'machinery-trading',
          code: '04',
          title: 'تجارة الآلات والمعدات',
          subtitle: 'توريد مباشر للآلات الصناعية',
          description: 'توريد الآلات الصناعية وخطوط الإنتاج ومعدات البناء مباشرة من المصانع العالمية.',
          specs: [
            'توريد مباشر من كبرى المصانع العالمية',
            'تسهيلات تمويل الاستيراد والتراخيص',
            'تسليم موقعي مع الإشراف اللوجستي'
          ],
          kpi: 'حلول استيراد متكاملة'
        }
      ]
    },
    corridor: {
      sectionTag: 'الممر التجاري',
      headline: 'محور جيبوتي – أديس أبابا.',
      subheadline: 'الشريان الحيوي بطول يتجاوز 900 كم يربط البحر الأحمر بوسط إثيوبيا.',
      stops: [
        {
          code: '01',
          name: 'ميناء جيبوتي (دوراليه)',
          type: 'البوابة البحرية',
          transitTime: 'اليوم 00',
          desc: 'تفريغ السفن وتصديق بوالص الشحن وإصدار بيانات الترانزيت.'
        },
        {
          code: '02',
          name: 'منفذ جلافي / ديويلي',
          type: 'التفتيش الجمركي',
          transitTime: 'اليوم 01',
          desc: 'تسليم الشحنات وفحص الأختام الإلكترونية وتدقيق الضمانات.'
        },
        {
          code: '03',
          name: 'ميناء موجو الجاف',
          type: 'المحطة الداخلية',
          transitTime: 'اليوم 02',
          desc: 'ترتيب الحاويات والنقل بين القطارات والشاحنات والتخزين.'
        },
        {
          code: '04',
          name: 'أديس أبابا (كاليتي)',
          type: 'وجهة التسليم',
          transitTime: 'اليوم 02-03',
          desc: 'التخليص النهائي وسداد الرسوم والتسليم للمصانع مباشرة.'
        }
      ]
    },
    contact: {
      sectionTag: 'اتصل بنا',
      headline: 'طلب الشحن والاستفسار.',
      subheadline: 'قناة مباشرة مع مكتب العمليات في أديس أبابا. نرد خلال ساعتين.',
      form: {
        nameLabel: 'الاسم الكامل',
        namePlaceholder: 'مثال: أحمد حسن',
        companyLabel: 'اسم الشركة',
        companyPlaceholder: 'مثال: المجموعة الإثيوبية للصناعات',
        phoneLabel: 'رقم الهاتف',
        phonePlaceholder: '+251 91 234 5678',
        emailLabel: 'البريد الإلكتروني',
        emailPlaceholder: 'logistics@company.com',
        cargoTypeLabel: 'نوع الخدمة',
        cargoTypes: [
          'شحن جيبوتي - أديس أبابا',
          'تخليص جمركي شامل',
          'نقل معدات ثقيلة (Lowbed)',
          'استيراد الآلات الصناعية',
          'استئجار أسطول شاحنات'
        ],
        volumeLabel: 'حجم الشحنة / الوزن',
        volumePlaceholder: 'مثال: حاويتان 40 قدم أو 30 طناً',
        originDestLabel: 'المنشأ والوجهة',
        originDestPlaceholder: 'مثال: شنغهاي ➔ جيبوتي ➔ موجو',
        messageLabel: 'ملاحظات إضافية',
        messagePlaceholder: 'أي متطلبات مناولة خاصة...',
        submitBtn: 'إرسال الطلب',
        submittingBtn: 'جاري الإرسال...',
        successMsg: 'تم تسجيل الطلب بنجاح! رقم المرجع: SAT-'
      },
      location: {
        buildingTitle: 'المقر الرئيسي',
        buildingName: 'مبنى فيتيلي (Fetele Building)',
        addressLine1: 'وولو سيفر، كيركوس',
        addressLine2: 'أديس أبابا، إثيوبيا',
        coordinates: '09°00′05″N 38°46′02″E',
        hoursTitle: 'ساعات العمل',
        hours: 'الإثنين – السبت: 08:00 – 18:30 (EAT) // العمليات: 24/7',
        phoneTitle: 'الهاتف',
        phone: '+251 11 667 4421 / +251 91 123 4567',
        emailTitle: 'البريد',
        email: 'operations@satlogistics-et.com',
        mapNotice: 'مبنى فيتيلي، وولو سيفر، أديس أبابا'
      }
    },
    footer: {
      tagline: 'شحن بضائع فائق الدقة، امتثال جمركي كامل، وتجارة آلات صناعية.',
      registration: 'شركة إس إيه تي للخدمات اللوجستية والتجارة — سجل: ETH-LOG-4482',
      licensing: 'مرخصة من هيئة النقل البحري الإثيوبية.',
      copyright: '© 2026 شركة إس إيه تي للخدمات اللوجستية والتجارة ش.ذ.م.م.',
      backToTop: 'العودة للأعلى'
    }
  },

  zh: {
    nav: {
      home: '概览',
      services: '服务',
      executive: '领导层',
      corridor: '走廊',
      contact: '联络',
      quoteBtn: '获取报价'
    },
    hero: {
      badge: '非洲之角多式联运物流运营商',
      headlinePart1: 'SAT 物流',
      headlinePart2: '& 贸易有限公司',
      tagline: '连接吉布提深水港至埃塞俄比亚腹地的端到端供应链与成套工业设备贸易。',
      ctaPrimary: '提交调度需求',
      ctaSecondary: '查看核心业务',
      stat1Label: '全程时效',
      stat1Value: '36-48h',
      stat2Label: '清关达标率',
      stat2Value: '99.4%',
      stat3Label: '车队规模',
      stat3Value: '120+',
      stat4Label: '核心走廊',
      stat4Value: '吉布提 ➔ 亚的斯',
      corridorStatus: '吉布提—亚的斯走廊：高效运营中',
      hubBadge: '总部：亚的斯亚贝巴 // 注册号：ETH-LOG-4482'
    },
    executive: {
      sectionTag: '管理层',
      headline: '领导团队。',
      subheadline: '由国际供应链管理学术造诣与东非多式联运实战经验引领。',
      name: 'Samuel Ayalew (萨缪尔·阿亚勒)',
      title: '联合创始人兼首席执行官 (CEO)',
      credentialBadge: '物流与供应链管理专业文学硕士 (MA in Logistics & Supply Chain Management)',
      quote: '“高精度物流是非洲之角经济繁荣的生命线。”',
      bioParagraph1: '拥有物流与供应链管理文学硕士学位，在东非跨境贸易走廊与货运调度领域深耕逾十年。',
      bioParagraph2: '统筹 SAT 覆盖吉布提港、莫乔无水港及亚的斯亚贝巴的全程报关与海铁公多式联运。',
      metricTitle1: '供应链战略',
      metricDesc1: '专注内陆无水港集成与全程货运优化。',
      metricTitle2: '时效管控',
      metricDesc2: '48小时内通关放行与全程北斗/GPS卫星监控。',
      governanceBadge: '埃塞俄比亚海事局认证一级物流商'
    },
    services: {
      sectionTag: '服务矩阵',
      headline: '核心业务。',
      subheadline: '四大专业垂直业务，保障高效通关与快速交付。',
      items: [
        {
          id: 'customs-clearance',
          code: '01',
          title: '海关清关与报关',
          subtitle: 'AEO 认证与 ASYCUDA 极速申报',
          description: '覆盖亚的斯亚贝巴机场货站、莫乔无水港及吉布提边境口岸的快速通关网络。',
          specs: [
            'ASYCUDA World 到港前电子申报',
            '税则归类与关税估价合规优化',
            '转关保证金与信用证单证合规'
          ],
          kpi: '平均 24-36h 放行'
        },
        {
          id: 'freight-forwarding',
          code: '02',
          title: '多式联运货运代理',
          subtitle: '吉布提至亚的斯亚贝巴核心走廊',
          description: '从吉布提港多拉莱集装箱码头直达内陆核心无水港的海、铁、公一体化运输。',
          specs: [
            '多拉莱码头常驻专业驻港团队',
            '亚吉电气化铁路 (EDR) 海铁联运集成',
            '整箱 (FCL) 与拼箱 (LCL) 保税转运'
          ],
          kpi: '99.4% 准时送达'
        },
        {
          id: 'fleet-coordination',
          code: '03',
          title: '跨境重卡车队调度',
          subtitle: '重特大件特种车与卫星监控',
          description: '专业调度平板车、承重可达120吨的低平板特种车及冷藏车，全天候在途监控。',
          specs: [
            '24/7 全天候 GPS/北斗卫星定位',
            '120吨承重级大件设备低平板车',
            '边境口岸快速过境调度保障'
          ],
          kpi: '100% 全程监控'
        },
        {
          id: 'machinery-trading',
          code: '04',
          title: '工业机械贸易代理',
          subtitle: '生产设备全球源头直采',
          description: '为工业园区提供生产线机械、工程建筑设备及关键模具的直采与交钥匙进口。',
          specs: [
            '全球源头制造厂家直供渠道',
            '进出口许可证代办与外汇清算协助',
            '现场点对点交付就位保障'
          ],
          kpi: '交钥匙交付'
        }
      ]
    },
    corridor: {
      sectionTag: '物流走廊',
      headline: '吉布提 – 亚的斯大动脉。',
      subheadline: '全长900余公里、连接红海海运与埃塞俄比亚腹地的核心走廊。',
      stops: [
        {
          code: '01',
          name: '吉布提港 (多拉莱)',
          type: '深水海运大门',
          transitTime: '第 00 天',
          desc: '船舶卸载、提单换单与过境舱单录入。'
        },
        {
          code: '02',
          name: '加拉菲 / 德韦莱口岸',
          type: '双边边境查验',
          transitTime: '第 01 天',
          desc: '车队边境交接、电子封条核验与转关查验。'
        },
        {
          code: '03',
          name: '莫乔 (Mojo) 无水港',
          type: '内陆铁公联运枢纽',
          transitTime: '第 02 天',
          desc: '集装箱堆垛、火车到卡车换装与保税仓储。'
        },
        {
          code: '04',
          name: '亚的斯亚贝巴 (卡利蒂)',
          type: '终端交付中心',
          transitTime: '第 02-03 天',
          desc: '海关放行、税费结算并送达工厂车间。'
        }
      ]
    },
    contact: {
      sectionTag: '业务联络',
      headline: '业务咨询与调度需求。',
      subheadline: '直接对接亚的斯亚贝巴调度团队，所有咨询在2小时内响应。',
      form: {
        nameLabel: '联系人姓名',
        namePlaceholder: '例如：王经理',
        companyLabel: '公司名称',
        companyPlaceholder: '例如：中埃工业投资集团',
        phoneLabel: '电话号码',
        phonePlaceholder: '+251 91 234 5678',
        emailLabel: '电子邮箱',
        emailPlaceholder: 'logistics@company.com',
        cargoTypeLabel: '业务类型',
        cargoTypes: [
          '吉布提至亚的斯货运代理',
          '海关报关与清关服务',
          '重型工程机械运输 (低平板)',
          '工业成套模具及设备贸易代理',
          '跨境重卡专线包车'
        ],
        volumeLabel: '预估货量 / 吨数',
        volumePlaceholder: '例如：2 x 40尺高柜 或 30吨',
        originDestLabel: '始发地与目的地',
        originDestPlaceholder: '例如：上海 ➔ 吉布提 ➔ 莫乔',
        messageLabel: '货运备注',
        messagePlaceholder: '特殊装卸要求或交运期限...',
        submitBtn: '提交需求',
        submittingBtn: '提交中...',
        successMsg: '需求已受理！追踪编号：SAT-'
      },
      location: {
        buildingTitle: '公司总部',
        buildingName: 'Fetele Building (费特勒大厦)',
        addressLine1: 'Wolo Sefer, Kirkos Sub-City',
        addressLine2: 'Addis Ababa, Ethiopia (亚的斯亚贝巴)',
        coordinates: '09°00′05″N 38°46′02″E',
        hoursTitle: '工作时间',
        hours: '周一至周六：08:00 – 18:30 (东三区) // 车队监控：24/7',
        phoneTitle: '电话',
        phone: '+251 11 667 4421 / +251 91 123 4567',
        emailTitle: '邮箱',
        email: 'operations@satlogistics-et.com',
        mapNotice: 'Fetele Building, Wolo Sefer, Addis Ababa'
      }
    },
    footer: {
      tagline: '深耕东非的国际多式联运货代、海关清关与重型工业设备贸易服务商。',
      registration: 'SAT 物流与贸易有限公司 — 注册号：ETH-LOG-4482',
      licensing: '经埃塞俄比亚海事局正式核准设立。',
      copyright: '© 2026 SAT Logistics and Trading PLC.',
      backToTop: '返回顶部'
    }
  }
};
