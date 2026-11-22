import { TranslationSchema, Language } from '@/types';

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: 'Overview',
      about: 'About Us',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      quoteBtn: 'Get a Quote'
    },
    hero: {
      badge: 'Your Gateway to Seamless Logistics Solutions',
      headlinePart1: 'SAT LOGISTICS',
      headlinePart2: '& TRADING PLC',
      tagline: 'Dedicated to specialized transportation, international freight forwarding, and customs clearance ensuring the seamless movement of goods from point of origin to final destination.',
      ctaPrimary: 'Request Dispatch',
      ctaSecondary: 'View Services',
      stat1Label: 'Founded',
      stat1Value: '2023',
      stat2Label: 'Cities Served',
      stat2Value: '13+',
      stat3Label: 'International Partners',
      stat3Value: '12',
      stat4Label: 'Industry Parks',
      stat4Value: '6',
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
      activePartnersTag: 'ACTIVE PARTNERS',
      customersTag: 'OUR CUSTOMERS',
      customersHeadline: 'International Partners.',
      customersSubheadline: 'We have worked with leading global companies across energy, construction, steel, and infrastructure.'
    },
    projects: {
      sectionTag: 'PROJECTS',
      headline: 'Delivered & Supported Projects.',
      subheadline: 'Capital goods, heavy equipment, and infrastructure cargo transported with planning, coordination, and on-time delivery focus.',
      intro: 'SAT Logistics and Trading PLC has participated in the transportation of capital goods and specialized cargo for notable infrastructure, energy, aviation, utility, and industrial projects across Ethiopia. Our team supports complex movements through pre-forwarding coordination, customs/document handling, and route-to-site delivery planning.',
      experienceTag: 'PROJECT EXPERTISE',
      experienceHeadline: 'What We Handle in Projects.',
      experiencePoints: [
        'Heavy machinery, generators, bulk loads, large-scale project cables and accessories',
        'Specialized and heavy-duty equipment including self-drive vehicles',
        'Over-height and special cargo transport operations',
        'Port handling, local customs clearance, and unimodal/multimodal coordination'
      ],
      coverageTag: 'DELIVERY COVERAGE',
      coverageHeadline: 'Nationwide Reach.',
      coverageDesc: 'We have delivered to major cities, industrial destinations, and project sites across Ethiopia, adapting to regional conditions and timelines.',
      locations: [
        'Addis Ababa', 'Dire Dawa', 'Hawassa', 'Bahir Dar', 'Guba (GERD)', 'Adama',
        'Assela', 'Jimma', 'Lalibela', 'Jijiga', 'Mekelle', 'Kombolcha',
        'Dukem', 'Arerti', 'Tulufa', 'Debrebirhan'
      ],
      items: [
        {
          title: 'Grand Ethiopian Renaissance Dam (GERD)',
          sector: 'Hydropower Infrastructure',
          scope: 'Transportation of capital goods and project cargo',
          cargo: 'Heavy machinery, project materials, and specialized equipment',
          description: 'Participated in logistics movements supporting one of Ethiopia’s most significant national infrastructure projects in the Guba area.',
          highlights: ['Long-haul project coordination', 'Special/heavy cargo handling', 'Delivery to remote project destination']
        },
        {
          title: 'Ethiopian Airlines Projects',
          sector: 'Aviation & Ground Support',
          scope: 'Cargo transportation support for airline-related projects',
          cargo: 'Aircraft ground support and project-related cargo',
          description: 'Supported transport needs linked to Ethiopian Airlines projects, requiring careful handling and schedule-aware delivery.',
          highlights: ['Time-sensitive coordination', 'Secure handling practices', 'Institutional client support']
        },
        {
          title: 'Power Generation Projects (Gilgel Gibe)',
          sector: 'Energy Generation',
          scope: 'Transport of power-generation equipment and components',
          cargo: 'Generators, heavy equipment, and related accessories',
          description: 'Contributed to movements for power generation projects including Gilgel Gibe, involving specialized transport planning for heavy-duty assets.',
          highlights: ['Heavy-duty equipment transport', 'Route and delivery planning', 'Energy-sector logistics experience']
        },
        {
          title: 'Industrial Parks Logistics',
          sector: 'Manufacturing & Industrial Development',
          scope: 'Inbound transport of machinery, materials, and project cargo',
          cargo: 'Industrial machinery, bulk loads, and installation-related equipment',
          description: 'Provided transportation support connected to industrial parks including Hawassa, Dukem, Adama, Arerti, Tulufa, and Debrebirhan.',
          highlights: ['Multi-location deliveries', 'Support for industrial operations', 'Coordination with project stakeholders']
        },
        {
          title: 'Ethiopian Electric Power & Ethiopian Electric Utility',
          sector: 'Utilities & Power Infrastructure',
          scope: 'Logistics for utility equipment and infrastructure materials',
          cargo: 'Cables, accessories, electrical and heavy project equipment',
          description: 'Worked with major national utility organizations on transporting equipment and materials used in power and infrastructure operations.',
          highlights: ['Large organization collaboration', 'Project cargo reliability', 'Compliance-focused movement']
        },
        {
          title: 'Ministry of Finance & Public Sector Projects',
          sector: 'Government & Infrastructure',
          scope: 'Capital equipment and project logistics support',
          cargo: 'Capital goods, construction-related and specialized consignments',
          description: 'Supported public-sector and construction-related logistics requirements, including movements associated with the Ministry of Finance and other institutions.',
          highlights: ['Public-sector delivery experience', 'Documentation and clearance coordination', 'Deadline-conscious execution']
        }
      ],
      partnersTag: 'INTERNATIONAL EXPERIENCE',
      partnersHeadline: 'Companies & Partners Worked With.',
      partnersDesc: 'The company profile highlights collaboration experience with international and regional companies across transport, energy, steel, and infrastructure sectors.',
      partners: [
        'Development Bank of Ethiopia',
        'Segon-Marill International Movers & Logistics',
        'AO Logistics One Member PLC',
        'Bershakon Construction PLC',
        'Jorro Construction Materials Manufacturer',
        'VOITH HYDRO Shanghai Ltd.',
        'CHINA RAILWAY',
        'Zhen Zhen Iron and Steel Manufacturing PLC',
        'Chongqing Taishan Cable Co., Ltd.',
        'RONG CHANG',
        'GCL ENERGY'
      ]
    },
    services: {
      sectionTag: 'SERVICES',
      headline: 'Logistics & Trading Services.',
      subheadline: 'Structured, end-to-end solutions from port handling and clearance to inland delivery and project cargo support.',
      items: [
        {
          id: 'customs-clearance',
          code: '01',
          title: 'Customs Clearance',
          subtitle: 'Documentation, Compliance & Release',
          description: 'We manage customs documentation and regulatory compliance to reduce delays and keep cargo moving through airport, dry port, and border stations.',
          includesTitle: 'What this covers',
          specs: [
            'Import/export documentation preparation and verification',
            'Regulatory compliance and duty/tax processing support',
            'ASYCUDA declarations, tariff classification, and valuation guidance',
            'Transit coordination and release follow-up with relevant authorities'
          ],
          kpi: 'Focused on timely release',
          idealFor: ['Commercial imports', 'Project cargo', 'Time-sensitive shipments']
        },
        {
          id: 'freight-forwarding',
          code: '02',
          title: 'Freight Forwarding',
          subtitle: 'Port Handling & Multimodal Coordination',
          description: 'From port handling to inland movement, we coordinate shipments across sea, rail, and road to connect origin, port, and final destination efficiently.',
          includesTitle: 'What this covers',
          specs: [
            'Port handling support: loading/unloading coordination and cargo tracking',
            'Freight planning by road and rail based on cargo needs and schedule',
            'Coordination from Djibouti terminals to dry ports and project sites',
            'Shipment visibility and proactive issue management'
          ],
          kpi: 'Reliable corridor coordination',
          idealFor: ['FCL/LCL cargo', 'Industrial supplies', 'Cross-border consignments']
        },
        {
          id: 'fleet-coordination',
          code: '03',
          title: 'Transportation & Fleet',
          subtitle: 'Inland, Last-Mile & Heavy Haulage',
          description: 'We arrange road transport for standard, oversized, and project cargo with route planning, scheduling, and delivery support across Ethiopia.',
          includesTitle: 'What this covers',
          specs: [
            'Road transportation tailored to cargo type, volume, and destination',
            'Last-mile delivery to warehouses, sites, and distribution points',
            'Over-height and special cargo transport planning',
            'Delivery scheduling with status updates and customer support'
          ],
          kpi: 'Planned for safe delivery',
          idealFor: ['Heavy machinery', 'Infrastructure materials', 'Regional distribution']
        },
        {
          id: 'machinery-trading',
          code: '04',
          title: 'Project & Industrial Cargo Support',
          subtitle: 'Capital Goods, Machinery & Specialized Handling',
          description: 'We support transport and logistics for capital goods and specialized equipment, drawing on experience with major infrastructure and industrial projects.',
          includesTitle: 'What this covers',
          specs: [
            'Handling support for generators, bulk loads, cables, and heavy equipment',
            'Logistics planning for industry parks, energy, and construction projects',
            'Coordination for oversized/self-drive and special handling requirements',
            'Consultative support to align transport, timing, and site delivery needs'
          ],
          kpi: 'Built for complex cargo',
          idealFor: ['Energy projects', 'Manufacturing plants', 'Government & private projects']
        }
      ],
      processTag: 'HOW WE WORK',
      processHeadline: 'Order Processing & Delivery Flow.',
      processSteps: [
        {
          title: '1. Order Receipt & Planning',
          desc: 'We confirm product type, quantity, destination, timeline, and special handling needs, then select the most efficient transport mode and schedule.'
        },
        {
          title: '2. Documentation & Dispatch',
          desc: 'We prepare or verify shipping and customs documents, allocate trucks/carriers, load cargo, and share tracking and progress updates.'
        },
        {
          title: '3. Delivery & Support',
          desc: 'Goods are delivered to the agreed site or distribution point with active support for delays, damage issues, or delivery adjustments.'
        },
        {
          title: '4. Monitoring & Compliance',
          desc: 'We track performance, address bottlenecks, maintain records, and ensure activities comply with applicable local and international regulations.'
        }
      ],
      capabilitiesTag: 'OPERATIONAL STRENGTHS',
      capabilitiesHeadline: 'Port Handling, Clearance & Coverage.',
      capabilityCards: [
        {
          title: 'Port Handling & Local Clearance',
          desc: 'Integrated support at port and customs stages to keep shipments compliant and moving.',
          points: [
            'Loading/unloading coordination and cargo tracking',
            'Documentation management and regulatory compliance',
            'Duty and tax assistance for smooth clearance',
            'Solutions for unimodal and multimodal shipments'
          ]
        },
        {
          title: 'Project & Cargo Experience',
          desc: 'Proven capability moving specialized, oversized, and capital goods for demanding projects.',
          points: [
            'Heavy machinery, generators, bulk loads, and project cables',
            'Experience supporting infrastructure, power, and industrial work',
            'Over-height and special cargo transport operations',
            'Client-focused planning to reduce disruption and delays'
          ]
        },
        {
          title: 'Coverage Across Ethiopia',
          desc: 'Deliveries coordinated to major cities, project sites, and industry locations nationwide.',
          points: [
            'Addis Ababa, Dire Dawa, Hawassa, Bahir Dar, Adama, Jimma, Mekelle and more',
            'Service reach to industry parks and project destinations including Guba (GERD)',
            'Experience working across diverse regions and operating conditions',
            'Commitment to agreed timelines despite complexity or distance'
          ]
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
      projects: 'ፕሮጀክቶች',
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
      stat1Label: 'የተመሰረተው ዓመት',
      stat1Value: '2023',
      stat2Label: 'አገልግሎት የምንሰጣቸው ከተሞች',
      stat2Value: '13+',
      stat3Label: 'ዓለም አቀፍ አጋሮች',
      stat3Value: '12',
      stat4Label: 'የኢንዱስትሪ ፓርኮች',
      stat4Value: '6'
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
      activePartnersTag: 'ንቁ አጋሮች',
      customersTag: 'ደንበኞቻችን',
      customersHeadline: 'ዓለም አቀፍ አጋሮቻችን።',
      customersSubheadline: 'በኃይል፣ ግንባታ፣ ብረት እና ኢንፍራስትራክቸር ዘርፍ ከሚሰሩ ታዋቂ ዓለም አቀፍ ኩባንያዎች ጋር ሰርተናል።'
    },
    projects: {
      sectionTag: 'ፕሮጀክቶች',
      headline: 'የተሳተፉባቸው እና ያስረከቡ ፕሮጀክቶች።',
      subheadline: 'ካፒታል ዕቃዎችን፣ ከባድ ማሽነሪዎችን እና የመሠረተ ልማት ጭነቶችን በእቅድ እና ቅንጅት ማጓጓዝ።',
      intro: 'ኤስኤቲ ሎጂስቲክስ በኢትዮጵያ ውስጥ ለታወቁ የመሠረተ ልማት፣ የኃይል፣ የአቪዬሽን እና የኢንዱስትሪ ፕሮጀክቶች ካፒታል ዕቃዎችን እና ልዩ ጭነቶችን በማጓጓዝ ተሳትፏል።',
      experienceTag: 'የፕሮጀክት ልምድ',
      experienceHeadline: 'በፕሮጀክቶች የምናጓጉዛቸው።',
      experiencePoints: [
        'ከባድ ማሽነሪዎች፣ ጀነሬተሮች፣ ጅምላ ጭነቶች፣ የፕሮጀክት ኬብሎች እና መለዋወጫዎች',
        'ልዩ እና ከባድ መሳሪያዎች እንዲሁም በራሳቸው የሚንቀሳቀሱ ተሽከርካሪዎች',
        'ከፍ ያለ እና ልዩ ጭነት ማጓጓዝ',
        'የወደብ አያያዝ፣ የአካባቢ ጉምሩክ ክሊራንስ እና ባለብዙ መንገድ ቅንጅት'
      ],
      coverageTag: 'የአቅርቦት ሽፋን',
      coverageHeadline: 'በኢትዮጵያ ዙሪያ አገልግሎት።',
      coverageDesc: 'ወደ ዋና ከተሞች፣ የኢንዱስትሪ ቦታዎች እና የፕሮጀክት ጣቢያዎች አቅርበናል።',
      locations: ['አዲስ አበባ','ድሬዳዋ','ሀዋሳ','ባህር ዳር','ጉባ (GERD)','አዳማ','አሰላ','ጅማ','ላሊበላ','ጅጅጋ','መቀሌ','ኮምቦልቻ','ዱከም','አረርቲ','ጡሉፋ','ደብረ ብርሃን'],
      items: [
        { title: 'ታላቁ የኢትዮጵያ ህዳሴ ግድብ (GERD)', sector: 'የውሃ ኃይል መሠረተ ልማት', scope: 'የካፒታል ዕቃዎች እና የፕሮጀክት ጭነት ማጓጓዝ', cargo: 'ከባድ ማሽነሪዎች እና ልዩ መሳሪያዎች', description: 'በጉባ አካባቢ ለሚገኘው ታላቅ ብሔራዊ ፕሮጀክት የሎጂስቲክስ እንቅስቃሴዎችን ደግፈናል።', highlights: ['የረጅም ርቀት ቅንጅት','ከባድ/ልዩ ጭነት አያያዝ','ወደ ሩቅ ጣቢያ ማድረስ'] },
        { title: 'የኢትዮጵያ አየር መንገድ ፕሮጀክቶች', sector: 'አቪዬሽን', scope: 'ለአየር መንገድ ፕሮጀክቶች የጭነት ድጋፍ', cargo: 'የአውሮፕላን ድጋፍ እና የፕሮጀክት ጭነቶች', description: 'ጊዜ ተኮር እና ጥንቃቄ የሚጠይቁ የኢትዮጵያ አየር መንገድ ፕሮጀክት ጭነቶችን ደግፈናል።', highlights: ['ጊዜ ተኮር ቅንጅት','ደህንነቱ የተጠበቀ አያያዝ','የተቋማት ድጋፍ'] },
        { title: 'የኃይል ማመንጫ ፕሮጀክቶች (ጊልገል ጊቤ)', sector: 'ኃይል ማመንጨት', scope: 'የኃይል መሳሪያዎች ማጓጓዝ', cargo: 'ጀነሬተሮች፣ ከባድ መሳሪያዎች እና መለዋወጫዎች', description: 'ጊልገል ጊቤን ጨምሮ ለኃይል ፕሮጀክቶች የሚያስፈልጉ ከባድ እቃዎችን በማጓጓዝ ተሳትፈናል።', highlights: ['ከባድ መሳሪያ ማጓጓዝ','መንገድ እና አቅርቦት እቅድ','የኃይል ዘርፍ ልምድ'] },
        { title: 'የኢንዱስትሪ ፓርኮች ሎጂስቲክስ', sector: 'ማኑፋክቸሪንግ', scope: 'ማሽነሪዎች እና የፕሮጀክት ጭነቶች ማጓጓዝ', cargo: 'የኢንዱስትሪ ማሽነሪዎች እና ጅምላ ጭነቶች', description: 'ሀዋሳ፣ ዱከም፣ አዳማ፣ አረርቲ፣ ጡሉፋ እና ደብረ ብርሃን ጨምሮ ለኢንዱስትሪ ፓርኮች የትራንስፖርት ድጋፍ ሰጥተናል።', highlights: ['ብዙ ቦታዎች ማድረስ','የኢንዱስትሪ ድጋፍ','ከባለድርሻ አካላት ጋር ቅንጅት'] },
        { title: 'የኢትዮጵያ ኤሌክትሪክ ኃይል እና አገልግሎት', sector: 'መገልገያዎች', scope: 'የመሠረተ ልማት መሳሪያዎች ሎጂስቲክስ', cargo: 'ኬብሎች፣ መለዋወጫዎች እና ከባድ መሳሪያዎች', description: 'ከታላላቅ ብሔራዊ የመገልገያ ተቋማት ጋር በመስራት የመሠረተ ልማት መሳሪያዎችን አጓጉዘናል።', highlights: ['ከታላላቅ ተቋማት ጋር ስራ','አስተማማኝ የፕሮጀክት ጭነት','ህጋዊ ተገዢነት'] },
        { title: 'የፋይናንስ ሚኒስቴር እና የመንግስት ፕሮጀክቶች', sector: 'መንግስት እና መሠረተ ልማት', scope: 'የካፒታል ዕቃዎች ሎጂስቲክስ ድጋፍ', cargo: 'ካፒታል ዕቃዎች እና ልዩ ጭነቶች', description: 'ለመንግስት እና ለግንባታ ተያያዥ ፕሮጀክቶች የሎጂስቲክስ ድጋፍ ሰጥተናል።', highlights: ['የመንግስት ልምድ','የሰነድ እና ጉምሩክ ቅንጅት','በጊዜ ማድረስ'] }
      ],
      partnersTag: 'ዓለም አቀፍ ልምድ',
      partnersHeadline: 'ከእነሱ ጋር የሰራናቸው ኩባንያዎች።',
      partnersDesc: 'በትራንስፖርት፣ በኃይል፣ በብረት እና በመሠረተ ልማት ዘርፎች ከዓለም አቀፍ ኩባንያዎች ጋር የመስራት ልምድ አለን።',
      partners: ['Development Bank of Ethiopia','Segon-Marill International Movers & Logistics','AO Logistics One Member PLC','Bershakon Construction PLC','Jorro Construction Materials Manufacturer','VOITH HYDRO Shanghai Ltd.','CHINA RAILWAY','Zhen Zhen Iron and Steel Manufacturing PLC','Chongqing Taishan Cable Co., Ltd.','RONG CHANG','GCL ENERGY']
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
      projects: 'المشاريع',
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
      stat1Label: 'تأسست عام',
      stat1Value: '2023',
      stat2Label: 'المدن المخدومة',
      stat2Value: '13+',
      stat3Label: 'الشركاء الدوليون',
      stat3Value: '12',
      stat4Label: 'المناطق الصناعية',
      stat4Value: '6'
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
      activePartnersTag: 'الشركاء النشطون',
      customersTag: 'عملاؤنا',
      customersHeadline: 'الشركاء الدوليون.',
      customersSubheadline: 'عملنا مع كبرى الشركات العالمية في قطاعات الطاقة والبناء والصلب والبنية التحتية.'
    },
    projects: {
      sectionTag: 'المشاريع',
      headline: 'المشاريع المنفذة والمدعومة.',
      subheadline: 'نقل السلع الرأسمالية والمعدات الثقيلة وبضائع البنية التحتية مع التخطيط والتنسيق والالتزام بالمواعيد.',
      intro: 'شاركت شركة SAT للخدمات اللوجستية والتجارة في نقل السلع الرأسمالية والبضائع المتخصصة لمشاريع بارزة في مجالات البنية التحتية والطاقة والطيران والمرافق والصناعة في أنحاء إثيوبيا.',
      experienceTag: 'خبرة المشاريع',
      experienceHeadline: 'ما نتعامل معه في المشاريع.',
      experiencePoints: [
        'الآلات الثقيلة والمولدات والحمولات الكبيرة وكابلات المشاريع وملحقاتها',
        'المعدات المتخصصة والثقيلة بما في ذلك المركبات ذاتية القيادة',
        'نقل البضائع ذات الارتفاع الزائد والبضائع الخاصة',
        'مناولة الموانئ والتخليص الجمركي المحلي والتنسيق أحادي/متعدد الوسائط'
      ],
      coverageTag: 'نطاق التوصيل',
      coverageHeadline: 'تغطية على مستوى البلاد.',
      coverageDesc: 'قمنا بالتوصيل إلى المدن الرئيسية والمواقع الصناعية ومواقع المشاريع في مختلف أنحاء إثيوبيا.',
      locations: ['أديس أبابا','دير داوا','هاواسا','بحر دار','غوبا (GERD)','أداما','أسيلا','جيما','لاليبيلا','جيجيغا','مكеле','كومبولتشا','دوكيم','أريرتي','تولوفا','دبرة برهان'],
      items: [
        { title: 'سد النهضة الإثيوبي الكبير (GERD)', sector: 'البنية التحتية للطاقة الكهرومائية', scope: 'نقل السلع الرأسمالية وبضائع المشاريع', cargo: 'آلات ثقيلة ومعدات متخصصة ومواد مشروع', description: 'شاركنا في عمليات لوجستية تدعم أحد أهم المشاريع الوطنية في إثيوبيا بمنطقة غوبا.', highlights: ['تنسيق لمسافات طويلة','مناولة البضائع الثقيلة والخاصة','التسليم إلى موقع مشروع بعيد'] },
        { title: 'مشاريع الخطوط الجوية الإثيوبية', sector: 'الطيران والدعم الأرضي', scope: 'دعم نقل البضائع للمشاريع المرتبطة بالطيران', cargo: 'معدات دعم أرضي وبضائع مشاريع', description: 'دعمنا احتياجات النقل لمشاريع مرتبطة بالخطوط الجوية الإثيوبية مع متطلبات دقيقة في التوقيت والمناولة.', highlights: ['تنسيق حساس للوقت','ممارسات مناولة آمنة','دعم العملاء المؤسسيين'] },
        { title: 'مشاريع توليد الطاقة (جيلجيل جيبي)', sector: 'توليد الطاقة', scope: 'نقل معدات ومكونات توليد الطاقة', cargo: 'مولدات ومعدات ثقيلة وملحقات', description: 'ساهمنا في نقل معدات لمشاريع توليد الطاقة بما في ذلك مجمع جيلجيل جيبي.', highlights: ['نقل معدات ثقيلة','تخطيط المسارات والتسليم','خبرة في قطاع الطاقة'] },
        { title: 'لوجستيات المناطق الصناعية', sector: 'التصنيع والتنمية الصناعية', scope: 'نقل الآلات والمواد وبضائع المشاريع', cargo: 'آلات صناعية وحمولات كبيرة ومعدات تركيب', description: 'قدمنا دعماً للنقل مرتبطاً بالمناطق الصناعية مثل هاواسا ودوكيم وأداما وأريرتي وتولوفا ودبرة برهان.', highlights: ['تسليم متعدد المواقع','دعم العمليات الصناعية','تنسيق مع أصحاب المصلحة'] },
        { title: 'الطاقة الكهربائية الإثيوبية ومرفق الكهرباء', sector: 'المرافق والبنية التحتية للطاقة', scope: 'لوجستيات معدات المرافق ومواد البنية التحتية', cargo: 'كابلات وملحقات ومعدات مشاريع ثقيلة', description: 'عملنا مع مؤسسات وطنية كبرى في نقل المعدات والمواد المستخدمة في عمليات الطاقة والبنية التحتية.', highlights: ['التعاون مع مؤسسات كبيرة','موثوقية بضائع المشاريع','التزام باللوائح'] },
        { title: 'وزارة المالية والمشاريع العامة', sector: 'القطاع العام والبنية التحتية', scope: 'دعم لوجستي للمعدات الرأسمالية والمشاريع', cargo: 'سلع رأسمالية وشحنات متخصصة', description: 'دعمنا متطلبات لوجستية للقطاع العام والمشاريع الإنشائية بما في ذلك احتياجات مرتبطة بوزارة المالية.', highlights: ['خبرة في القطاع العام','تنسيق الوثائق والتخليص','تنفيذ ملتزم بالمواعيد'] }
      ],
      partnersTag: 'الخبرة الدولية',
      partnersHeadline: 'الشركات والشركاء الذين عملنا معهم.',
      partnersDesc: 'يسلط ملف الشركة الضوء على خبرة التعاون مع شركات دولية وإقليمية في قطاعات النقل والطاقة والصلب والبنية التحتية.',
      partners: ['Development Bank of Ethiopia','Segon-Marill International Movers & Logistics','AO Logistics One Member PLC','Bershakon Construction PLC','Jorro Construction Materials Manufacturer','VOITH HYDRO Shanghai Ltd.','CHINA RAILWAY','Zhen Zhen Iron and Steel Manufacturing PLC','Chongqing Taishan Cable Co., Ltd.','RONG CHANG','GCL ENERGY']
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
      projects: '项目',
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
      stat1Label: '成立于',
      stat1Value: '2023',
      stat2Label: '服务城市',
      stat2Value: '13+',
      stat3Label: '国际合作伙伴',
      stat3Value: '12',
      stat4Label: '工业园区',
      stat4Value: '6'
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
      activePartnersTag: '活跃合作伙伴',
      customersTag: '我们的客户',
      customersHeadline: '国际合作伙伴。',
      customersSubheadline: '我们与能源、建设、钢铁和基础设施领域的全球领先企业合作。'
    },
    projects: {
      sectionTag: '项目',
      headline: '已参与及交付的项目。',
      subheadline: '通过规划、协调与准时交付，运输资本货物、重型设备和基础设施项目货物。',
      intro: 'SAT物流贸易有限公司参与了埃塞俄比亚各地基础设施、能源、航空、公用事业和工业项目的资本货物及特种货物运输。',
      experienceTag: '项目经验',
      experienceHeadline: '我们在项目中处理的货物。',
      experiencePoints: [
        '重型机械、发电机、散货、大型项目电缆及配件',
        '特种及重型设备，包括自驱车辆',
        '超高及特种货物运输作业',
        '港口作业、本地清关及单式/多式联运协调'
      ],
      coverageTag: '交付覆盖',
      coverageHeadline: '覆盖埃塞俄比亚全国。',
      coverageDesc: '我们已向埃塞俄比亚主要城市、工业目的地和项目现场完成交付，并适应不同地区条件与工期要求。',
      locations: ['亚的斯亚贝巴','德雷达瓦','哈瓦萨','巴赫达尔','古巴（GERD）','阿达玛','阿塞拉','吉马','拉利贝拉','吉吉加','默克莱','孔博勒查','杜肯','阿雷尔蒂','图卢法','德布雷伯翰'],
      items: [
        { title: '埃塞俄比亚复兴大坝（GERD）', sector: '水电基础设施', scope: '资本货物与项目货物运输', cargo: '重型机械、项目材料及特种设备', description: '参与支持位于古巴地区的埃塞俄比亚重要国家基础设施项目的物流运输。', highlights: ['长途项目协调','重型/特种货物处理','偏远项目现场交付'] },
        { title: '埃塞俄比亚航空项目', sector: '航空与地面保障', scope: '航空相关项目货运支持', cargo: '飞机地面保障及项目相关货物', description: '为埃塞俄比亚航空相关项目提供运输支持，满足严格的时效与操作要求。', highlights: ['时效协调','安全装卸作业','机构客户支持'] },
        { title: '发电项目（吉尔吉尔·吉贝）', sector: '能源发电', scope: '发电设备与部件运输', cargo: '发电机、重型设备及配件', description: '参与包括吉尔吉尔·吉贝在内的发电项目重型资产运输。', highlights: ['重型设备运输','路线与交付规划','能源行业物流经验'] },
        { title: '工业园区物流', sector: '制造与工业发展', scope: '机械、材料及项目货物入场运输', cargo: '工业机械、散货及安装相关设备', description: '为哈瓦萨、杜肯、阿达玛、阿雷尔蒂、图卢法和德布雷伯翰等工业园区提供运输支持。', highlights: ['多地点交付','支持工业运营','与项目各方协调'] },
        { title: '埃塞俄比亚电力与电力公用事业', sector: '公用事业与电力基础设施', scope: '公用事业设备与基础设施材料物流', cargo: '电缆、配件及重型项目设备', description: '与国家主要公用事业机构合作，运输用于电力和基础设施运营的设备与材料。', highlights: ['与大型机构合作','项目货物可靠性','合规运输'] },
        { title: '财政部及公共部门项目', sector: '政府与基础设施', scope: '资本设备及项目物流支持', cargo: '资本货物及特种货运', description: '为公共部门及建设相关项目提供物流支持，包括与财政部相关的运输需求。', highlights: ['公共部门交付经验','文件与清关协调','按期执行'] }
      ],
      partnersTag: '国际经验',
      partnersHeadline: '合作公司与伙伴。',
      partnersDesc: '公司资料显示，我们在运输、能源、钢铁和基础设施领域与国际及区域公司有合作经验。',
      partners: ['Development Bank of Ethiopia','Segon-Marill International Movers & Logistics','AO Logistics One Member PLC','Bershakon Construction PLC','Jorro Construction Materials Manufacturer','VOITH HYDRO Shanghai Ltd.','CHINA RAILWAY','Zhen Zhen Iron and Steel Manufacturing PLC','Chongqing Taishan Cable Co., Ltd.','RONG CHANG','GCL ENERGY']
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
