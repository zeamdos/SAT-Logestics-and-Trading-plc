import { TranslationSchema, Language } from '@/types';

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: 'Overview',
      about: 'About Us',
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
    about: {
      sectionTag: 'ABOUT US',
      headline: 'Who We Are.',
      overview: 'SAT Logistics and Trading PLC is a transportation and logistics provider in Ethiopia and beyond. Our company provides services including international freight forwarding, customs clearance, and project cargo transport.',
      missionTag: 'OUR MISSION',
      missionHeadline: 'Core Mission & Target Industries.',
      missionItems: [
        'SAT Logistics and Trading PLC offers comprehensive solutions for a wide range of industries, including but not limited to manufacturing, energy production, data mining cargo, industry parks, solar companies, wing energy farms, retail, garment industry, and special heavy project cargo handling.',
        'In addition to freight forwarding we give logistics consultancy services to streamline supply chains and enhance our customer\'s satisfaction.',
        'Our purpose is to effectively support the goals of private companies, manufacturers and governmental institutions in improving logistics capacity access, lower freight tariffs and improving service quality.'
      ],
      purposeTag: 'OUR PURPOSE',
      purposeHeadline: 'Purpose & Capacity.',
      purposeFoundedNote: 'Founded in 2023, SAT Logistics and Trading PLC is dedicated to providing specialized transportation and customs clearance services to ensure seamless movement of goods, from point of origin to final destination.',
      purposeMission: 'Our mission is to provide comprehensive logistics solutions that meet the diverse international logistics needs of our clients.',
      principlesTag: 'OPERATING PRINCIPALS',
      principlesHeadline: 'Our Principles.',
      principles: [
        {
          title: 'Partnering with Stakeholders',
          desc: 'We position ourselves as trusted allies, prioritizing simplicity, dependability, and a client-first mindset in every collaboration.'
        },
        {
          title: 'Empowering Our Workforce',
          desc: 'Success is built on unity. We foster teamwork, encourage cooperation, and provide strong support systems for our employees.'
        },
        {
          title: 'Driven by Excellence',
          desc: 'Our operations are anchored to national and world-class standards, ensuring efficiency, consistency, and speed across all services.'
        },
        {
          title: 'Future-Oriented',
          desc: 'Progressive attitudes and growth-focused strategies allow us to continuously evolve and serve our clients better.'
        },
        {
          title: 'Commitment to Sustainability',
          desc: 'We uphold ethical practices and compliance, integrating advanced environmental safeguards into our operations.'
        }
      ],
      capabilityTag: 'TEAM CAPABILITY',
      capabilityHeadline: 'Our Team\'s Capability.',
      capabilities: [
        {
          title: 'Local Expertise',
          desc: 'Profound understanding of Ethiopia\'s transport regulations, policies, and infrastructure.'
        },
        {
          title: 'Seamless Coordination',
          desc: 'Experience in pre-forwarding processes, ensuring efficient customs clearance and document handling.'
        },
        {
          title: 'Strong Partnerships',
          desc: 'Collaborations with Ethiopian customs authorities, shipping lines, and freight forwarders.'
        },
        {
          title: 'Client-Centric Approach',
          desc: 'Customized solutions to meet your logistics needs — from first mile to last mile.'
        }
      ],
      projectsTag: 'DELIVERED PROJECTS',
      projectsHeadline: 'Proven Track Record.',
      projectsDesc: 'Our company has played a significant role in the transportation of capital goods for some of Ethiopia\'s most notable infrastructure projects.',
      projectsList: [
        'Grand Ethiopian Renaissance Dam (GERD)',
        'Ethiopian Airlines — Aircraft Ground Support Cargo',
        'Power Generation — Gilgel Gibe Complex',
        'Industry Parks: Hawassa, Dukem, Adama, Arerti, Tulufa, Debrebirhan',
        'Ethiopian Electric Power & Ethiopian Electric Utility',
        'Ministry of Finance — Capital Equipment Logistics'
      ],
      customersTag: 'OUR CUSTOMERS',
      customersHeadline: 'International Partners.',
      customersSubheadline: 'We have worked with leading global companies across energy, construction, steel, and infrastructure.'
    },
    executive: {
      sectionTag: 'LEADERSHIP',
      headline: 'Executive Leadership.',
      subheadline: 'Founded in 2023, dedicated to providing specialized transportation and customs clearance services.',
      name: 'Samuel Ayalew',
      title: 'General Manager',
      credentialBadge: 'Leading Logistics Professional',
      quote: '"We make your cargo transport simple."',
      bioParagraph1: 'Holding a Master\'s degree in Logistics & Supply Chain Management, Samuel Ayalew brings over a decade of high-level freight coordination and corridor management.',
      bioParagraph2: 'He directs SAT\'s integrated customs clearance and multimodal haulage connecting the Port of Djibouti directly to Mojo Dry Port and Addis Ababa.',
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
        phonePlaceholder: '+251 93 299 9977',
        emailLabel: 'Email Address',
        emailPlaceholder: 'logistics@company.com',
        cargoTypeLabel: 'Service Category',
        cargoTypes: [
          'Freight Transportation',
          'Customs Clearance',
          'Last-Mile Delivery',
          'Heavy Machinery Transport',
          'Project Cargo Handling'
        ],
        volumeLabel: 'Estimated Volume / Weight',
        volumePlaceholder: 'e.g., 2 x 40ft HC or 30 Tons',
        originDestLabel: 'Origin & Inland Destination',
        originDestPlaceholder: 'e.g., Shanghai ➔ Djibouti ➔ Addis Ababa',
        messageLabel: 'Cargo Notes',
        messagePlaceholder: 'Special handling requirements or schedule...',
        submitBtn: 'Submit Request',
        submittingBtn: 'Submitting...',
        successMsg: 'Request registered. Reference ID: SAT-'
      },
      location: {
        buildingTitle: 'Headquarters',
        buildingName: 'Fetele Building',
        addressLine1: 'Gorgorios Square, 3rd Floor',
        addressLine2: 'Addis Ababa, Ethiopia',
        coordinates: '09°00′05″N 38°46′02″E',
        hoursTitle: 'Operating Hours',
        hours: 'Mon – Sat: 08:00 – 18:30 (EAT) // Operations: 24/7',
        phoneTitle: 'Direct Desk',
        phone: '+251 93 299 9977 / +251 93 237 3839',
        emailTitle: 'Email',
        email: 'satlogistics0001@gmail.com',
        mapNotice: 'Fetele Building, Gorgorios Square, Addis Ababa'
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
      about: 'ስለ እኛ',
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
    about: {
      sectionTag: 'ስለ እኛ',
      headline: 'እነማን ነን።',
      overview: 'ኤስኤቲ ሎጂስቲክስ እና ንግድ ኃ/የተ/የግ/ማ በኢትዮጵያ እና ከዚያ ባሻገር የጭነት ትራንስፖርት እና ሎጂስቲክስ አገልግሎት ሰጪ ድርጅት ነው።',
      missionTag: 'ተልዕኮ',
      missionHeadline: 'ዋና ተልዕኮ እና ኢላማ ኢንዱስትሪዎች።',
      missionItems: [
        'ኤስኤቲ ለሰፊ ኢንዱስትሪዎች ሁሉን አቀፍ መፍትሄ ይሰጣል — ምርት፣ ኃይል ማምረት፣ ፀሐይ ኃይል፣ ቀላል ኢንዱስትሪ፣ የልብስ ኢንዱስትሪ እና ልዩ ፕሮጀክት ጭነቶችን ጨምሮ።',
        'ከጭነት አስተላላፊነት ባሻገር የሎጂስቲክስ ምክር አገልግሎት ሰጥተን የደንበኞቻችንን አቅርቦት ሰንሰለት እናሻሽላለን።',
        'ዓላማችን የግሉን ዘርፍ፣ አምራቾችን እና የመንግስት ተቋማትን የሎጂስቲክስ አቅም ማሳደግ ነው።'
      ],
      purposeTag: 'ዓላማ',
      purposeHeadline: 'ዓላማ እና አቅም።',
      purposeFoundedNote: 'ኤስኤቲ ሎጂስቲክስ እና ንግድ ኃ/የተ/የግ/ማ በ2023 ዓ.ም ተመስርቶ ለተሸቀጣሸቀጣ ዕቃዎች ያልተቋረጠ እንቅስቃሴ ሲሰጥ ቆይቷል።',
      purposeMission: 'ተልዕኮአችን ለደንበኞቻችን ዓለም አቀፍ ሎጂስቲክስ ፍላጎቶችን ሁሉ የሚያሟሉ ሁሉን አቀፍ አገልግሎቶችን መስጠት ነው።',
      principlesTag: 'ዋና ደንቦቻችን',
      principlesHeadline: 'መርሆዎቻችን።',
      principles: [
        { title: 'ከባለድርሻዎች ጋር መተባበር', desc: 'ታማኝ አጋሮች ሆነን፣ ቀላልነትን፣ አስተማማኝነትን እና ደንበኛ ማዕከል አስተሳሰብን ቅድሚያ እንሰጣለን።' },
        { title: 'ሰራተኞቻችንን ማብቃት', desc: 'ስኬት የሚገነባው በአንድነት ነው። ቡድን ስራን እናበረታታለን፣ ትብብርን እናሳድጋለን።' },
        { title: 'በብቃት መሰረት ስራ', desc: 'ስራዎቻችን ብሔራዊ እና ዓለም አቀፍ ደረጃዎችን መሰረት ያደርጋሉ።' },
        { title: 'ወደፊት ማየት', desc: 'ወደፊት ተኮር አስተሳሰብ እና ዕድገት ተኮር ስልቶች አገልግሎቶቻችንን ያሻሽላሉ።' },
        { title: 'ዘለቄታዊ ቁርጠኝነት', desc: 'ሥነ-ምግባራዊ ተግባር እና ህጋዊ ተገዢነትን አንቀበልም፣ የአካባቢ ጥበቃ ደህንነትን እናዋህዳለን።' }
      ],
      capabilityTag: 'የቡድን አቅም',
      capabilityHeadline: 'የቡድናችን አቅም።',
      capabilities: [
        { title: 'የአካባቢ እውቀት', desc: 'የኢትዮጵያ የትራንስፖርት ደንቦች፣ ፖሊሲዎች እና መሠረተ ልማት ጥልቅ ግንዛቤ።' },
        { title: 'ያልተቋረጠ ቅንጅት', desc: 'ቅድሚያ-ጭነት ሂደቶች ልምድ፣ ፈጣን ጉምሩክ ሰነዶች ማስተናገድ።' },
        { title: 'ጠንካራ አጋርነት', desc: 'ከጉምሩክ ባለስልጣናት፣ የጭነት ወኪሎች እና አጓጓዦች ጋር ትብብር።' },
        { title: 'ደንበኛ ማዕከል አቀራረብ', desc: 'ለእያንዳንዱ ደንበኛ ፍላጎት የሚስማማ ሎጂስቲክስ መፍትሄ።' }
      ],
      projectsTag: 'ያስረከብናቸው ፕሮጀክቶች',
      projectsHeadline: 'ተፈጻሚ ፕሮጀክቶች።',
      projectsDesc: 'ኩባንያችን የኢትዮጵያ ታላላቅ መሠረተ ልማት ፕሮጀክቶች ካፒታል እቃዎች ትራንስፖርት ላይ ትልቅ ሚና ተጫውቷል።',
      projectsList: [
        'ታላቁ የኢትዮጵያ ሬኔሳንስ ግድብ (ጉባ GERD)',
        'የኢትዮጵያ አየር መንገድ — ካርጎ',
        'ኃይል ማምረቻ — ጊልጌ ጊቤ',
        'የኢንዱስትሪ ፓርኮች: ሀዋሳ፣ ዱከም፣ አዳማ',
        'የኢትዮጵያ ኤሌክትሪክ ኃይልና አገልግሎት',
        'የፋይናንስ ሚኒስቴር — ካፒታል ዕቃዎች'
      ],
      customersTag: 'ደንበኞቻችን',
      customersHeadline: 'ዓለም አቀፍ አጋሮቻችን።',
      customersSubheadline: 'በኃይል፣ ግንባታ፣ ብረት እና ኢንፍራስትራክቸር ዘርፍ ከሚሰሩ ታዋቂ ዓለም አቀፍ ኩባንያዎች ጋር ሰርተናል።'
    },
    executive: {
      sectionTag: 'አመራር',
      headline: 'የስራ አመራር።',
      subheadline: 'በአለም አቀፍ የአቅርቦት ሰንሰለት ጥልቅ እውቀት እና በምስራቅ አፍሪካ መልቲሞዳል ትራንስፖርት ልምድ የተመሰረተ።',
      name: 'ሳሙኤል አያሌው',
      title: 'ዋና ስራ አስፈፃሚ',
      credentialBadge: 'Leading Logistics Professional',
      quote: '"የጭነት ትራንስፖርትዎን ቀላል እናደርጋለን።"',
      bioParagraph1: 'በሎጂስቲክስ እና አቅርቦት ሰንሰለት አስተዳደር የማስተርስ ዲግሪ ያላቸው ሲሆን፣ ከአስር ዓመታት በላይ ሰርተዋል።',
      bioParagraph2: 'ኤስኤቲ የጅቡቲ ወደብን ከሞጆ ደረቅ ወደብ እና አዲስ አበባ ጋር የሚያገናኝ የተቀናጀ ስራዎችን ይመራሉ።',
      metricTitle1: 'የአቅርቦት ሰንሰለት ስትራቴጂ',
      metricDesc1: 'በደረቅ ወደብ ትስስር እና ኮሪደር ማቀላጠፍ ላይ ያተኮረ።',
      metricTitle2: 'የኮሪደር ቅልጥፍና',
      metricDesc2: 'ከ48 ሰዓት በታች የሆነ ጉምሩክ ክሊራንስ።',
      governanceBadge: 'ፈቃድ ያለው ኦፕሬተር // የኢትዮጵያ ባህር ትራንስፖርት'
    },
    services: {
      sectionTag: 'አገልግሎቶች',
      headline: 'ዋና ዋና አገልግሎቶች።',
      subheadline: 'ለፍጥነትና ለህግ ተገዢነት የተዘጋጁ አራት መሰረታዊ ዘርፎች።',
      items: [
        { id: 'customs-clearance', code: '01', title: 'የጉምሩክ ክሊራንስ', subtitle: 'ፈጣን ASYCUDA ዲክላራሲዮን', description: 'በሞጆ ደረቅ ወደብ እና ጅቡቲ ድንበር ፈጣን ጉምሩክ ሂደቶች።', specs: ['ASYCUDA World ዲክላራሲዮን', 'ታሪፍ ምደባ', 'ትራንዚት ቦንድ'], kpi: '24-36 ሰዓታት' },
        { id: 'freight-forwarding', code: '02', title: 'የጭነት አስተላላፊነት', subtitle: 'ጅቡቲ - አዲስ አበባ', description: 'ከዶራሌ ተርሚናል እስከ ማዕከላዊ ደረቅ ወደቦች።', specs: ['DCT & DMP ተወካዮች', 'EDR ምድር ባቡር', 'FCL & LCL'], kpi: '99.4% ምጣኔ' },
        { id: 'fleet-coordination', code: '03', title: 'አገር አቋራጭ ተሽከርካሪዎች', subtitle: 'ከባድ ማሽነሪ ጫኝ', description: 'GPS የታገዘ ፍላትቤድ እና ሎውቤድ ተሽከርካሪዎች።', specs: ['24/7 ጂፒኤስ ክትትል', 'እስከ 120T ሎውቤድ', 'ድንበር ፕሮቶኮል'], kpi: '100% ክትትል' },
        { id: 'machinery-trading', code: '04', title: 'የማሽነሪዎች ንግድ', subtitle: 'ኢንዱስትሪ እቃዎች አስመጪነት', description: 'ከዓለም አቀፍ አምራቾች ቀጥታ ማስመጣት።', specs: ['ፋብሪካ ቀጥታ ግዥ', 'የውጭ ምንዛሬ ማቀናጀት', 'እስከ ፋብሪካ ደጃፍ'], kpi: 'የተሟላ ዋስትና' }
      ]
    },
    corridor: {
      sectionTag: 'ኮሪደር',
      headline: 'የጅቡቲ - አዲስ አበባ መስመር።',
      subheadline: 'ከ900 ኪ.ሜ በላይ ርዝመት ያለው የትራንስፖርት መስመር።',
      stops: [
        { code: '01', name: 'የጅቡቲ ወደብ (ዶራሌ)', type: 'የባህር በር', transitTime: 'ቀን 00', desc: 'ከመርከብ ማውረድ እና ሰነዶች ማስተናገድ።' },
        { code: '02', name: 'የገላፊ / ደወሌ ድንበር', type: 'የጉምሩክ ፍተሻ', transitTime: 'ቀን 01', desc: 'የተሽከርካሪዎች ርክክብ እና ፍተሻ።' },
        { code: '03', name: 'የሞጆ ደረቅ ወደብ', type: 'የጭነት ማዕከል', transitTime: 'ቀን 02', desc: 'ኮንቴይነር ክምችት እና ማዛወር።' },
        { code: '04', name: 'አዲስ አበባ (ቃሊቲ)', type: 'የመጨረሻ መዳረሻ', transitTime: 'ቀን 02-03', desc: 'የመጨረሻ ጉምሩክ እና ማስረከብ።' }
      ]
    },
    contact: {
      sectionTag: 'ግንኙነት',
      headline: 'የጭነት ጥያቄ።',
      subheadline: 'በ2 ሰዓታት ውስጥ ምላሽ ያገኛሉ።',
      form: {
        nameLabel: 'ሙሉ ስም', namePlaceholder: 'ምሳሌ፡ ዳንኤል ኃይሌ',
        companyLabel: 'የድርጅት ስም', companyPlaceholder: 'ምሳሌ፡ ኢትዮጵያ ማኑፋክቸሪንግ',
        phoneLabel: 'ስልክ ቁጥር', phonePlaceholder: '+251 91 234 5678',
        emailLabel: 'ኢሜይል', emailPlaceholder: 'logistics@company.com',
        cargoTypeLabel: 'የአገልግሎት አይነት',
        cargoTypes: ['ፍሬይት ትራንስፖርቴሽን', 'ጉምሩክ ክሊራንስ', 'ሎጂስቲክስ ማድረስ', 'ከባድ ማሽነሪ ማጓጓዝ', 'ፕሮጀክት ጭነት'],
        volumeLabel: 'የጭነቱ መጠን', volumePlaceholder: 'ምሳሌ፡ 2 x 40ft',
        originDestLabel: 'መነሻ እና መድረሻ', originDestPlaceholder: 'ምሳሌ፡ ሻንጋይ ➔ ጅቡቲ ➔ ሞጆ',
        messageLabel: 'ተጨማሪ ማብራሪያ', messagePlaceholder: 'ስለ ጭነቱ ሁኔታ ይጥቀሱ...',
        submitBtn: 'ጥያቄውን ይላኩ', submittingBtn: 'በመላክ ላይ...', successMsg: 'ጥያቄዎ ተመዝግቧል! SAT-'
      },
      location: {
        buildingTitle: 'ዋና ቢሮ', buildingName: 'ፈተለ ህንፃ',
        addressLine1: 'ወሎ ሰፈር', addressLine2: 'አዲስ አበባ፣ ኢትዮጵያ',
        coordinates: '09°00′05″N 38°46′02″E',
        hoursTitle: 'የስራ ሰዓታት', hours: 'ሰኞ – ቅዳሜ: 08:00 – 18:30',
        phoneTitle: 'ስልክ', phone: '+251 93 299 9977',
        emailTitle: 'ኢሜይል', email: 'satlogistics0001@gmail.com',
        mapNotice: 'ፈተለ ህንፃ፣ ወሎ ሰፈር'
      }
    },
    footer: {
      tagline: 'አስተማማኝ የጭነት አስተላላፊነት እና የጉምሩክ ክሊራንስ።',
      registration: 'ኤስኤቲ ሎጂስቲክስ — ምዝገባ: ETH-LOG-4482',
      licensing: 'በኢትዮጵያ ባህር ትራንስፖርት እውቅና የተሰጠው።',
      copyright: '© 2026 ኤስኤቲ ሎጂስቲክስ እና ንግድ ኃ/የተ/የግ/ማ።',
      backToTop: 'ወደ ላይ'
    }
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      executive: 'الإدارة',
      corridor: 'الممر',
      contact: 'اتصل بنا',
      quoteBtn: 'طلب عرض سعر'
    },
    hero: {
      badge: 'اللوجستيات المتعددة الوسائط في القرن الأفريقي',
      headlinePart1: 'شركة SAT',
      headlinePart2: 'للخدمات اللوجستية والتجارة',
      tagline: 'حلول متكاملة لسلسلة التوريد تربط ميناء جيبوتي بوسط إثيوبيا.',
      ctaPrimary: 'طلب شحن',
      ctaSecondary: 'عرض الخدمات',
      stat1Label: 'وقت العبور',
      stat1Value: '36-48 ساعة',
      stat2Label: 'الجمارك',
      stat2Value: '99.4%',
      stat3Label: 'الأسطول',
      stat3Value: '120+',
      stat4Label: 'الممر الرئيسي',
      stat4Value: 'جيبوتي ➔ أديس',
      corridorStatus: 'محور جيبوتي-أديس أبابا: تشغيلي',
      hubBadge: 'المقر: أديس أبابا // رقم التسجيل: ETH-LOG-4482'
    },
    about: {
      sectionTag: 'من نحن',
      headline: 'هويتنا.',
      overview: 'شركة SAT للخدمات اللوجستية والتجارة هي مزود لخدمات النقل واللوجستيات في إثيوبيا وما وراءها.',
      missionTag: 'مهمتنا',
      missionHeadline: 'المهمة الأساسية والصناعات المستهدفة.',
      missionItems: [
        'تقدم SAT حلولاً شاملة لطيف واسع من الصناعات بما فيها التصنيع، والطاقة، والمناطق الصناعية، والطاقة الشمسية، والبضائع الثقيلة.',
        'بالإضافة إلى الشحن، نقدم خدمات استشارية لوجستية لتحسين سلاسل التوريد.',
        'هدفنا دعم الشركات الخاصة والمؤسسات الحكومية في تحسين الوصول اللوجستي وخفض التعريفات.'
      ],
      purposeTag: 'غرضنا',
      purposeHeadline: 'الغرض والطاقة.',
      purposeFoundedNote: 'تأسست عام 2023، وتلتزم بتقديم خدمات نقل وتخليص جمركي متخصصة.',
      purposeMission: 'مهمتنا تقديم حلول لوجستية شاملة تلبي الاحتياجات الدولية المتنوعة لعملائنا.',
      principlesTag: 'مبادئ التشغيل',
      principlesHeadline: 'مبادئنا.',
      principles: [
        { title: 'الشراكة مع أصحاب المصلحة', desc: 'نضع أنفسنا كحلفاء موثوقين نولي البساطة والاعتمادية أولوية قصوى.' },
        { title: 'تمكين موظفينا', desc: 'النجاح مبني على الوحدة، نعزز العمل الجماعي والتعاون.' },
        { title: 'الدافع نحو التميز', desc: 'عملياتنا مرتكزة على المعايير الوطنية والدولية.' },
        { title: 'التوجه نحو المستقبل', desc: 'مواقف تقدمية وتركيز على النمو المستمر.' },
        { title: 'الالتزام بالاستدامة', desc: 'نمارس العمل الأخلاقي وندمج ضمانات بيئية متقدمة.' }
      ],
      capabilityTag: 'قدرات الفريق',
      capabilityHeadline: 'قدرات فريقنا.',
      capabilities: [
        { title: 'الخبرة المحلية', desc: 'فهم عميق للوائح النقل والسياسات والبنية التحتية الإثيوبية.' },
        { title: 'التنسيق السلس', desc: 'خبرة في عمليات ما قبل الشحن وإدارة الوثائق الجمركية.' },
        { title: 'شراكات قوية', desc: 'تعاون مع سلطات الجمارك وخطوط الشحن والوكلاء.' },
        { title: 'نهج يركز على العميل', desc: 'حلول مخصصة لتلبية احتياجاتك اللوجستية.' }
      ],
      projectsTag: 'المشاريع المنجزة',
      projectsHeadline: 'سجل حافل.',
      projectsDesc: 'أدّت شركتنا دوراً محورياً في نقل البضائع الرأسمالية لبعض أبرز مشاريع البنية التحتية في إثيوبيا.',
      projectsList: [
        'سد النهضة الإثيوبي الكبير (GERD)',
        'الخطوط الجوية الإثيوبية — شحن البضائع',
        'توليد الطاقة — مجمع جيلجيل جيبي',
        'المناطق الصناعية: هاواسا، دوكيم، أداما',
        'الطاقة الكهربائية الإثيوبية',
        'وزارة المالية — لوجستيات المعدات الرأسمالية'
      ],
      customersTag: 'عملاؤنا',
      customersHeadline: 'الشركاء الدوليون.',
      customersSubheadline: 'عملنا مع كبرى الشركات العالمية في قطاعات الطاقة والبناء والصلب والبنية التحتية.'
    },
    executive: {
      sectionTag: 'الإدارة',
      headline: 'قيادة تنفيذية.',
      subheadline: 'تأسست عام 2023 لتقديم خدمات نقل وتخليص جمركي متخصصة.',
      name: 'صموئيل أيالو',
      title: 'المدير العام',
      credentialBadge: 'متخصص لوجستي رائد',
      quote: '"نجعل شحن بضائعك أمراً بسيطاً."',
      bioParagraph1: 'يحمل درجة الماجستير في اللوجستيات وإدارة سلاسل التوريد مع خبرة تزيد عن عقد.',
      bioParagraph2: 'يقود عمليات التخليص الجمركي المتكامل والنقل المتعدد الوسائط من ميناء جيبوتي.',
      metricTitle1: 'استراتيجية سلسلة التوريد',
      metricDesc1: 'متخصص في تكامل الموانئ الجافة وتحسين الممرات.',
      metricTitle2: 'تسليم الممر',
      metricDesc2: 'بروتوكول تخليص جمركي في أقل من 48 ساعة.',
      governanceBadge: 'مشغل مرخص // هيئة الملاحة الإثيوبية'
    },
    services: {
      sectionTag: 'الخدمات',
      headline: 'الخدمات الأساسية.',
      subheadline: 'أربعة قطاعات متخصصة مصممة للسرعة والامتثال.',
      items: [
        { id: 'customs-clearance', code: '01', title: 'التخليص الجمركي', subtitle: 'إقرارات ASYCUDA المعتمدة', description: 'إفراج جمركي إلكتروني سريع عبر محطات الحدود.', specs: ['إقرارات ASYCUDA World', 'تصنيف التعريفة والتقييم', 'سندات ضمان العبور'], kpi: 'متوسط 24-36 ساعة' },
        { id: 'freight-forwarding', code: '02', title: 'الشحن والتخليص', subtitle: 'ممر جيبوتي-أديس أبابا', description: 'توجيه شحن متزامن بحراً وسكة حديداً وطريقاً.', specs: ['تمثيل في دورالية (DCT & DMP)', 'تكامل سكة حديد إثيو-جيبوتي', 'تجميع حاويات FCL & LCL'], kpi: '99.4% تسليم في الوقت' },
        { id: 'fleet-coordination', code: '03', title: 'أسطول عابر للحدود', subtitle: 'نقل بضائع ثقيلة', description: 'أسطول مراقب بالـGPS من منصات وناقلات ثقيلة.', specs: ['تتبع فوري 24/7', 'ناقلات حتى 120 طن', 'بروتوكول قافلة الحدود'], kpi: '100% نقل مراقب' },
        { id: 'machinery-trading', code: '04', title: 'استيراد الآلات', subtitle: 'مصدر المعدات التجارية', description: 'شراء متكامل واستيراد الآلات الصناعية والأجزاء.', specs: ['مصادر مباشرة من المصنع', 'تنسيق تراخيص الاستيراد والعملة', 'تسليم حتى باب المصنع'], kpi: 'تسليم متكامل' }
      ]
    },
    corridor: {
      sectionTag: 'الممر التجاري',
      headline: 'محور جيبوتي - أديس.',
      subheadline: 'الشريان اللوجستي الممتد 900+ كم الذي يربط الشحن البحري في البحر الأحمر بوسط إثيوبيا.',
      stops: [
        { code: '01', name: 'ميناء جيبوتي (دورالية)', type: 'محطة بحرية', transitTime: 'اليوم 00', desc: 'تفريغ السفن ومعالجة بوالص الشحن.' },
        { code: '02', name: 'حدود غالافي / ديويلي', type: 'تفتيش جمركي', transitTime: 'اليوم 01', desc: 'تسليم الحراسة والتحقق الإلكتروني.' },
        { code: '03', name: 'ميناء موجو الجاف', type: 'مستودع تبادل', transitTime: 'اليوم 02', desc: 'تكديس الحاويات والشحن من سكة حديد إلى شاحنات.' },
        { code: '04', name: 'أديس أبابا (قاليتي)', type: 'تسليم للمستلم', transitTime: 'اليوم 02-03', desc: 'الإفراج الجمركي النهائي والتسليم للمصنع.' }
      ]
    },
    contact: {
      sectionTag: 'اتصل بنا',
      headline: 'استفسارات الشحن.',
      subheadline: 'قناة مباشرة لفريقنا في أديس أبابا. ردود خلال ساعتين.',
      form: {
        nameLabel: 'الاسم الكامل', namePlaceholder: 'مثال: أحمد محمد',
        companyLabel: 'اسم الشركة', companyPlaceholder: 'مثال: مجموعة التصنيع الإثيوبية',
        phoneLabel: 'رقم الهاتف', phonePlaceholder: '+251 93 299 9977',
        emailLabel: 'البريد الإلكتروني', emailPlaceholder: 'logistics@company.com',
        cargoTypeLabel: 'فئة الخدمة',
        cargoTypes: ['نقل البضائع', 'التخليص الجمركي', 'التسليم للمنزل', 'نقل الآلات الثقيلة', 'مناولة البضائع الخاصة'],
        volumeLabel: 'الحجم / الوزن المقدر', volumePlaceholder: 'مثال: حاويتان 40 قدم',
        originDestLabel: 'المصدر والوجهة', originDestPlaceholder: 'مثال: شنغهاي ➔ جيبوتي ➔ أديس أبابا',
        messageLabel: 'ملاحظات الشحن', messagePlaceholder: 'متطلبات خاصة...',
        submitBtn: 'إرسال الطلب', submittingBtn: 'جارٍ الإرسال...', successMsg: 'تم تسجيل طلبك. رقم المرجع: SAT-'
      },
      location: {
        buildingTitle: 'المقر الرئيسي', buildingName: 'مبنى فيتيلي',
        addressLine1: 'ميدان غورغوريوس، الطابق الثالث', addressLine2: 'أديس أبابا، إثيوبيا',
        coordinates: '09°00′05″N 38°46′02″E',
        hoursTitle: 'ساعات العمل', hours: 'الاثنين – السبت: 08:00 – 18:30',
        phoneTitle: 'الهاتف المباشر', phone: '+251 93 299 9977',
        emailTitle: 'البريد الإلكتروني', email: 'satlogistics0001@gmail.com',
        mapNotice: 'مبنى فيتيلي، ميدان غورغوريوس، أديس أبابا'
      }
    },
    footer: {
      tagline: 'شحن متعدد الوسائط وتخليص جمركي وتداول معدات صناعية عبر شرق أفريقيا.',
      registration: 'شركة SAT للخدمات اللوجستية والتجارة — رقم التسجيل: ETH-LOG-4482',
      licensing: 'مرخصة من هيئة الملاحة الإثيوبية.',
      copyright: '© 2026 شركة SAT للخدمات اللوجستية والتجارة.',
      backToTop: 'العودة للأعلى'
    }
  },

  zh: {
    nav: {
      home: '概览',
      about: '关于我们',
      services: '服务',
      executive: '领导层',
      corridor: '走廊',
      contact: '联系我们',
      quoteBtn: '获取报价'
    },
    hero: {
      badge: '非洲之角多式联运物流',
      headlinePart1: 'SAT 物流',
      headlinePart2: '贸易有限公司',
      tagline: '连接吉布提港与埃塞俄比亚中部的端到端供应链解决方案。',
      ctaPrimary: '申请调度',
      ctaSecondary: '查看服务',
      stat1Label: '运输时间',
      stat1Value: '36-48小时',
      stat2Label: '清关成功率',
      stat2Value: '99.4%',
      stat3Label: '车队规模',
      stat3Value: '120+',
      stat4Label: '主要走廊',
      stat4Value: '吉布提 ➔ 亚的',
      corridorStatus: '吉布提-亚的斯轴线：运营中',
      hubBadge: '总部：亚的斯亚贝巴 // 注册: ETH-LOG-4482'
    },
    about: {
      sectionTag: '关于我们',
      headline: '我们是谁。',
      overview: 'SAT物流贸易有限公司是埃塞俄比亚及周边地区的运输和物流服务提供商，提供国际货运代理、清关和项目货物运输服务。',
      missionTag: '我们的使命',
      missionHeadline: '核心使命与目标行业。',
      missionItems: [
        'SAT为制造业、能源生产、工业园区、太阳能、零售、服装行业和特殊重型项目货物提供全面解决方案。',
        '除货运代理外，我们还提供物流咨询服务，以优化客户的供应链。',
        '我们的目标是有效支持私营企业、制造商和政府机构改善物流能力、降低运费并提高服务质量。'
      ],
      purposeTag: '我们的宗旨',
      purposeHeadline: '宗旨与能力。',
      purposeFoundedNote: 'SAT物流贸易有限公司成立于2023年，致力于提供专业的运输和清关服务，确保货物从起点到终点的无缝移动。',
      purposeMission: '我们的使命是提供全面的物流解决方案，满足客户多样化的国际物流需求。',
      principlesTag: '运营原则',
      principlesHeadline: '我们的原则。',
      principles: [
        { title: '与利益相关者合作', desc: '我们以值得信赖的盟友定位自己，优先考虑简单性、可靠性和以客户为中心的理念。' },
        { title: '赋能我们的员工', desc: '成功建立在团结之上，我们促进团队合作并提供强大的员工支持体系。' },
        { title: '以卓越为驱动', desc: '我们的运营以国内外标准为基准，确保所有服务的效率、一致性和速度。' },
        { title: '面向未来', desc: '积极进取的态度和以增长为导向的战略使我们不断进化，更好地服务客户。' },
        { title: '对可持续性的承诺', desc: '我们坚持道德实践和合规，将先进的环境保障措施融入运营。' }
      ],
      capabilityTag: '团队能力',
      capabilityHeadline: '我们团队的能力。',
      capabilities: [
        { title: '本地专业知识', desc: '对埃塞俄比亚运输法规、政策和基础设施的深刻理解。' },
        { title: '无缝协调', desc: '丰富的前期运输流程经验，确保高效的清关和文件处理。' },
        { title: '强大的合作伙伴关系', desc: '与埃塞俄比亚海关当局、航运公司和货运代理的合作。' },
        { title: '以客户为中心的方式', desc: '量身定制的解决方案，满足您的物流需求。' }
      ],
      projectsTag: '已交付项目',
      projectsHeadline: '成熟的业绩记录。',
      projectsDesc: '我们公司在埃塞俄比亚最重要的基础设施项目货物运输中发挥了重要作用。',
      projectsList: [
        '埃塞俄比亚复兴大坝 (GERD)',
        '埃塞俄比亚航空 — 货运',
        '发电 — 吉尔吉尔基贝综合体',
        '工业园区：哈瓦萨、杜肯、阿达玛',
        '埃塞俄比亚电力',
        '财政部 — 资本设备物流'
      ],
      customersTag: '我们的客户',
      customersHeadline: '国际合作伙伴。',
      customersSubheadline: '我们与能源、建设、钢铁和基础设施领域的全球领先企业合作。'
    },
    executive: {
      sectionTag: '领导层',
      headline: '执行领导层。',
      subheadline: '成立于2023年，致力于提供专业的运输和清关服务。',
      name: '萨穆埃尔·阿亚列夫',
      title: '总经理',
      credentialBadge: '领先物流专业人士',
      quote: '"我们让您的货物运输变得简单。"',
      bioParagraph1: '拥有物流与供应链管理硕士学位，具有十年以上高级货运协调和走廊管理经验。',
      bioParagraph2: '他负责SAT的综合清关和多式联运业务，连接吉布提港与莫约干港和亚的斯亚贝巴。',
      metricTitle1: '供应链战略',
      metricDesc1: '专注于干港一体化和走廊优化。',
      metricTitle2: '走廊交付',
      metricDesc2: '48小时内清关协议和实时车队跟踪。',
      governanceBadge: '持牌运营商 // 埃塞俄比亚海事局'
    },
    services: {
      sectionTag: '服务',
      headline: '核心服务。',
      subheadline: '四个专业垂直领域，专为速度和合规性而设计。',
      items: [
        { id: 'customs-clearance', code: '01', title: '清关服务', subtitle: 'AEO认证 & ASYCUDA申报', description: '快速电子清关，覆盖亚的斯亚贝巴机场货运站、莫约干港和吉布提边境。', specs: ['ASYCUDA World电子申报', '关税分类与估价', '过境担保债券与信用证合规'], kpi: '平均24-36小时放行' },
        { id: 'freight-forwarding', code: '02', title: '货运代理', subtitle: '吉布提至亚的斯亚贝巴走廊', description: '从多哈莱集装箱码头到中部干港的海陆铁协同货运。', specs: ['多哈莱港口代理(DCT & DMP)', '埃吉铁路(EDR)整合', 'FCL & LCL集装箱拼箱'], kpi: '99.4%准时交货率' },
        { id: 'fleet-coordination', code: '03', title: '跨境车队', subtitle: '重型运输与低床运输', description: 'GPS监控的平板车、低床车（最高120吨）和冷藏车车队。', specs: ['24/7实时远程信息处理', '重型机械低床(最高120吨)', '专用边境护送协议'], kpi: '100%全程监控' },
        { id: 'machinery-trading', code: '04', title: '机械进口贸易', subtitle: '商业设备采购', description: '工业设备的一站式商业采购和进口便利化。', specs: ['工厂直接全球采购', '进口许可证和外汇协调', '工厂门到门交货'], kpi: '一站式进口交货' }
      ]
    },
    corridor: {
      sectionTag: '贸易走廊',
      headline: '吉布提 – 亚的斯轴线。',
      subheadline: '连接红海海运与埃塞俄比亚中部的900+公里多式联运生命线。',
      stops: [
        { code: '01', name: '吉布提港（多哈莱）', type: '深水码头', transitTime: '第0天', desc: '船舶卸货、提单验证和过境舱单处理。' },
        { code: '02', name: '加拉菲/德韦勒边境', type: '海关检查', transitTime: '第1天', desc: '护送交接、电子封签验证和过境清关。' },
        { code: '03', name: '莫约干港枢纽', type: '联运仓库', transitTime: '第2天', desc: '集装箱堆放、铁路转卡车和保税仓储。' },
        { code: '04', name: '亚的斯亚贝巴（卡利提）', type: '收货人交付', transitTime: '第2-3天', desc: '最终清关、缴税和工厂直送。' }
      ]
    },
    contact: {
      sectionTag: '联系我们',
      headline: '货物调度与查询。',
      subheadline: '直接联系我们在亚的斯亚贝巴的物流团队。查询将在2小时内答复。',
      form: {
        nameLabel: '全名', namePlaceholder: '例：张伟',
        companyLabel: '公司名称', companyPlaceholder: '例：埃塞俄比亚制造集团',
        phoneLabel: '电话号码', phonePlaceholder: '+251 93 299 9977',
        emailLabel: '电子邮件', emailPlaceholder: 'logistics@company.com',
        cargoTypeLabel: '服务类别',
        cargoTypes: ['货运运输', '清关服务', '最后一公里配送', '重型机械运输', '项目货物处理'],
        volumeLabel: '预计体积/重量', volumePlaceholder: '例：2个40英尺高柜或30吨',
        originDestLabel: '起运地和目的地', originDestPlaceholder: '例：上海 ➔ 吉布提 ➔ 亚的斯亚贝巴',
        messageLabel: '货物备注', messagePlaceholder: '特殊处理要求或时间表...',
        submitBtn: '提交请求', submittingBtn: '提交中...', successMsg: '请求已登记。参考编号：SAT-'
      },
      location: {
        buildingTitle: '总部', buildingName: '费特莱大厦',
        addressLine1: '戈尔戈里奥斯广场，3楼', addressLine2: '亚的斯亚贝巴，埃塞俄比亚',
        coordinates: '09°00′05″N 38°46′02″E',
        hoursTitle: '营业时间', hours: '周一至周六：08:00 – 18:30 (EAT) // 运营：24/7',
        phoneTitle: '直线电话', phone: '+251 93 299 9977',
        emailTitle: '电子邮件', email: 'satlogistics0001@gmail.com',
        mapNotice: '费特莱大厦，戈尔戈里奥斯广场，亚的斯亚贝巴'
      }
    },
    footer: {
      tagline: '覆盖东非的多式联运货运代理、清关和工业设备贸易。',
      registration: 'SAT物流贸易有限公司 — 注册号: ETH-LOG-4482',
      licensing: '经埃塞俄比亚海事局授权。',
      copyright: '© 2026 SAT物流贸易有限公司。',
      backToTop: '返回顶部'
    }
  }
};
