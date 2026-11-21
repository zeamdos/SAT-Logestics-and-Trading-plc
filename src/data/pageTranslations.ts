import { Language } from '@/types';

export interface AboutPageContent {
  badge: string;
  heroTitle: string;
  heroTitleSub: string;
  heroTagline: string;
  leadershipTag: string;
  foundedTitle: string;
  managerRole: string;
  bio1: string;
  bio2: string;
  qualificationsTag: string;
  degreeLabel: string;
  degreeValue: string;
  degreeField: string;
  competencyLabel: string;
  competencyValue: string;
  competencyField: string;
  addressText: string;
  linkedinText: string;
  capabilityTag: string;
  capabilityTitle: string;
  capabilityDesc: string;
  capabilities: {
    tag: string;
    title: string;
    desc: string;
    highlight: string;
  }[];
  overviewTag: string;
  overviewTitle: string;
  overviewDesc: string;
  mandateLabel: string;
  mandateText: string;
  missionTag: string;
  missionTitle: string;
  missionPoints: string[];
  principlesTag: string;
  principlesTitle: string;
  principles: {
    title: string;
    desc: string;
  }[];
  processTag: string;
  processTitle: string;
  steps: {
    num: string;
    title: string;
    items: string[];
  }[];
}

export interface ServicesPageContent {
  badge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroTagline: string;
  mainServices: {
    num: string;
    title: string;
    desc: string;
    sub: string;
  }[];
  portSectionTag: string;
  portHeadline: string;
  bullet1: string;
  bullet2: string;
  portHandlingTitle: string;
  portHandlingItems: string[];
  customsTitle: string;
  customsItems: string[];
  specialCargoTag: string;
  specialCargoTitle: string;
  specialCargoDesc: string;
  specialCargoCta: string;
}

export interface ProjectsPageContent {
  badge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroTagline: string;
  sectionTag: string;
  headline: string;
  intro: string;
  categories: {
    all: string;
    energy: string;
    infrastructure: string;
    parks: string;
    special: string;
  };
  projects: {
    id: string;
    categoryKey: 'ENERGY & POWER' | 'NATIONAL INFRASTRUCTURE' | 'INDUSTRIAL PARKS' | 'SPECIAL CARGO';
    title: string;
    location: string;
    client: string;
    cargo: string;
    desc: string;
    image: string;
    stats: string;
    tags: string[];
  }[];
  expertiseTag: string;
  expertiseTitle: string;
  expertiseDesc: string;
  parksTitle: string;
  parksSub: string;
  parks: {
    name: string;
    type: string;
    region: string;
  }[];
  clientsTag: string;
  clientNames: string[];
  equipmentTitle: string;
  equipmentSub: string;
  equipment: {
    name: string;
    detail: string;
  }[];
  locationsTag: string;
  locationsTitle: string;
  locationsDesc: string;
  hubBadge: string;
  locationList: string[];
  experienceQuote1: string;
  experienceQuote2: string;
  deliveredBadge: string;
}

export interface ContactPageContent {
  badge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroTagline: string;
  formTitle: string;
  formDesc: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  serviceLabel: string;
  serviceOptions: string[];
  originDestLabel: string;
  originDestPlaceholder: string;
  volumeLabel: string;
  volumePlaceholder: string;
  detailsLabel: string;
  detailsPlaceholder: string;
  submitBtn: string;
  submittingBtn: string;
  successTitle: string;
  successDesc: string;
  dispatchRefLabel: string;
  copyRefBtn: string;
  copiedBtn: string;
  sendAnotherBtn: string;
  callDirectBtn: string;
  sidebarTitle: string;
  sidebarOfficeLabel: string;
  sidebarOfficeValue: string;
  sidebarPhoneLabel: string;
  sidebarEmailLabel: string;
  sidebarHoursLabel: string;
  sidebarHoursValue: string;
  directGmLabel: string;
}

export const pageTranslations: Record<
  Language,
  {
    about: AboutPageContent;
    services: ServicesPageContent;
    projects: ProjectsPageContent;
    contact: ContactPageContent;
  }
> = {
  en: {
    about: {
      badge: 'About Us',
      heroTitle: 'Who We Are',
      heroTitleSub: 'SAT Logistics & Trading PLC',
      heroTagline: 'Your Gateway to Seamless Logistics Solutions across Ethiopia and beyond.',
      leadershipTag: 'Executive Leadership',
      foundedTitle: 'Founded in 2023',
      managerRole: 'Manager / General Manager',
      bio1: 'SAT Logistics and Trading PLC was established with a dedicated focus on providing specialized transportation and customs clearance services to ensure the seamless movement of goods, from point of origin to final destination.',
      bio2: 'Under the leadership of General Manager Samuel Ayalew, SAT has established itself as a trusted partner for multinational engineering firms, national utility corporations, and industrial park manufacturers navigating Ethiopia’s complex trade corridors.',
      qualificationsTag: 'Academic & Professional Qualifications',
      degreeLabel: 'Postgraduate Degree',
      degreeValue: 'Master of Arts (MA)',
      degreeField: 'Logistics and Supply Chain Management',
      competencyLabel: 'Core Competencies',
      competencyValue: 'Cross-Border Corridor Logistics',
      competencyField: 'Multimodal Freight & Customs Clearance Architecture',
      addressText: 'Gorgorios Square, Fetele Building 3rd floor, Addis Ababa, Ethiopia',
      linkedinText: 'Connect with Samuel Ayalew on LinkedIn',
      capabilityTag: 'Operational Excellence',
      capabilityTitle: "Our Team's Capability",
      capabilityDesc: 'Our logistics team uses innovative strategies and collaborates closely with customers to anticipate issues and adapt to operational changes, ensuring seamless operations and timely deliveries with minimal disruptions.',
      capabilities: [
        {
          tag: 'CORRIDOR REGULATION',
          title: 'Local Expertise',
          desc: "Profound understanding of Ethiopia’s transport regulations, customs policies, multimodal road-to-rail corridors, and nationwide transit tariffs.",
          highlight: 'Ethio-Djibouti Corridor & Regional States'
        },
        {
          tag: 'CUSTOMS & CLEARING',
          title: 'Seamless Coordination',
          desc: 'Deep experience in pre-forwarding operations, ensuring accelerated customs clearance, manifest filing, bonded transfers, and document handling.',
          highlight: 'Dry Ports & Border Checkpoints'
        },
        {
          tag: 'RISK MANAGEMENT',
          title: 'Innovative Strategy',
          desc: 'Our logistics team collaborates closely with customers to anticipate route bottlenecks, adapt to dynamic field changes, and ensure zero disruption.',
          highlight: 'Proactive Transit Monitoring'
        },
        {
          tag: 'INSTITUTIONAL NETWORK',
          title: 'Strong Partnerships',
          desc: 'Established operational partnerships with the Ethiopian Customs Commission, Ethiopian Shipping & Logistics Services, and major carriers.',
          highlight: 'Authorities, Shipping Lines & Forwarders'
        },
        {
          tag: 'ENTERPRISE SOLUTIONS',
          title: 'Client-Centric Approach',
          desc: 'Customized logistics workflows engineered to meet unique corporate specifications, handling requirements, and strict project timelines.',
          highlight: 'Tailored Contract Logistics'
        },
        {
          tag: 'HEAVY HAULAGE',
          title: 'Project Cargo Readiness',
          desc: 'Specialized low-bed equipment, route surveying, and permit administration for over-height, out-of-gauge, and heavy-lift machinery.',
          highlight: 'Capital Goods & Infrastructure'
        }
      ],
      overviewTag: 'Company Overview',
      overviewTitle: 'Logistics Provider in Ethiopia & Beyond',
      overviewDesc: 'SAT Logistics and Trading PLC is a premier transportation and logistics provider in Ethiopia and beyond. Our company delivers end-to-end services including international freight forwarding, customs clearance, and heavy project cargo transport.',
      mandateLabel: 'Company Mandate',
      mandateText: 'To effectively support private companies, manufacturers, and governmental institutions.',
      missionTag: 'Our Mission',
      missionTitle: 'Comprehensive Industry Scope',
      missionPoints: [
        'SAT Logistics and Trading PLC offers comprehensive solutions for a wide range of industries, including manufacturing, energy production, data mining cargo, industry parks, solar companies, wind energy farms, retail, garment industry, and special heavy project cargo handling.',
        "In addition to freight forwarding, we provide strategic logistics consultancy services to streamline supply chains and enhance our customers' satisfaction.",
        'Our purpose is to effectively support the goals of private companies, manufacturers, and governmental institutions in improving logistics capacity access, lowering freight tariffs, and improving service quality.'
      ],
      principlesTag: 'Core Values',
      principlesTitle: 'Our Principles',
      principles: [
        {
          title: 'Partnering with Stakeholders',
          desc: 'We position ourselves as trusted allies, prioritizing simplicity, dependability, and a client-first mindset in every collaboration.'
        },
        {
          title: 'Empowering Our Workforce',
          desc: 'Success is built on unity — we foster teamwork, encourage active cooperation, and provide robust support systems for our employees.'
        },
        {
          title: 'Driven by Excellence',
          desc: 'Our operations are anchored to national and international standards, ensuring efficiency, consistency, and speed across all services.'
        },
        {
          title: 'Future-Oriented',
          desc: 'Progressive attitudes and growth-focused strategies, continuously adapting to modern corridor infrastructure and digital logistics.'
        },
        {
          title: 'Commitment to Sustainability',
          desc: 'We uphold ethical practices and regulatory compliance, integrating environmental safeguards into our daily transport operations.'
        }
      ],
      processTag: 'Standard Operating Procedure',
      processTitle: 'Order Processing Procedure',
      steps: [
        {
          num: '01',
          title: 'Order Receipt and Planning',
          items: [
            'We receive customer instructions and internal order details',
            'Verify order information: Product type and quantity, Delivery destination and timeframe, Special handling or transportation requirements',
            'We determine the most efficient and economical transportation mode (road, rail) and truck type',
            'We schedule delivery dates and coordinate dispatch milestones'
          ]
        },
        {
          num: '02',
          title: 'Transportation and Reporting',
          items: [
            'We select a carrier or transportation method based on our comprehensive logistics plan',
            'Prepare and authenticate necessary shipping documentation and customs clearance permits',
            'Allocate specialized trucks and trailers matched to cargo dimensions and weight',
            'Supervise professional loading of goods onto transport vehicles',
            'Share real-time tracking details with the customer with daily milestone progress reports'
          ]
        },
        {
          num: '03',
          title: 'Delivery and Customer Support',
          items: [
            'We deliver goods to the customer site or distribution center as per instruction',
            'Proactively address any issues during transit, including border delays or damaged goods protocols',
            'Allocate warehouse and bonded staging space whenever required by the client'
          ]
        },
        {
          num: '04',
          title: 'Monitoring and Compliance',
          items: [
            'Track key performance metrics and identify bottlenecks for continuous process improvement',
            'Ensure all logistics and hauling activities comply strictly with local and international regulations',
            'Conduct rigorous safety training for personnel handling heavy machinery, cables, or hazardous cargo',
            'Maintain complete, audit-ready operational and customs compliance documentation'
          ]
        }
      ]
    },
    services: {
      badge: 'Services',
      heroTitle: 'Main Services',
      heroTitleHighlight: 'Summary',
      heroTagline: 'We make your cargo transport simple, dependable, and efficient.',
      mainServices: [
        {
          num: '01',
          title: 'Freight Transportation',
          desc: 'Comprehensive services by road, tailored to meet your cargo volume and delivery timeline.',
          sub: 'Multimodal Road & Rail Transport'
        },
        {
          num: '02',
          title: 'Customs Clearance',
          desc: 'Expert handling of all customs documentation, import/export declarations, and compliance.',
          sub: 'Documentation & Regulatory Protocols'
        },
        {
          num: '03',
          title: 'Last-Mile Delivery',
          desc: 'Efficient delivery solutions that ensure your products reach their final factory or warehouse on time.',
          sub: 'Destination Staging & Fulfillment'
        }
      ],
      portSectionTag: 'Customs & Port Operations',
      portHeadline: 'Port Handling and Local Customs Clearance',
      bullet1: 'Specializing in efficient port handling and seamless local customs clearance.',
      bullet2: 'Commitment to excellence with tailored solutions for unimodal and multimodal shipments.',
      portHandlingTitle: 'Port Handling',
      portHandlingItems: [
        'Loading and Unloading at sea port terminals and dry port yards',
        'Real-time cargo tracking and bonded status monitoring'
      ],
      customsTitle: 'Local Customs Clearance',
      customsItems: [
        'Documentation Management and declaration preparation',
        'Regulatory Compliance: Expertise in local customs regulations and tariffs',
        'Duty and Tax: Professional advisory assistance for smooth release'
      ],
      specialCargoTag: 'Heavy Haulage',
      specialCargoTitle: 'Over-height and Special Cargo Transport',
      specialCargoDesc: 'Specialized transportation capacity for capital machinery, oversized industrial structures, high-voltage equipment, and project cargo moving from port terminals to inland destinations.',
      specialCargoCta: 'Inquire for Special Cargo'
    },
    projects: {
      badge: 'Projects',
      heroTitle: 'Delivered',
      heroTitleHighlight: 'Projects',
      heroTagline: "Transportation of capital goods for Ethiopia's most notable infrastructure, energy, and industrial projects.",
      sectionTag: 'Capital Goods Transportation',
      headline: 'Major National Engagements',
      intro: "Our company has played a significant role in the transportation of capital goods for some of Ethiopia's most notable infrastructure projects. Through these engagements, we have demonstrated our commitment to excellence, reliability, and contributing to Ethiopia's economic and infrastructural development.",
      categories: {
        all: 'ALL',
        energy: 'ENERGY & POWER',
        infrastructure: 'NATIONAL INFRASTRUCTURE',
        parks: 'INDUSTRIAL PARKS',
        special: 'SPECIAL CARGO'
      },
      projects: [
        {
          id: 'gerd',
          categoryKey: 'ENERGY & POWER',
          title: 'Grand Ethiopian Renaissance Dam (GERD) Project',
          location: 'Guba, Benishangul-Gumuz Region',
          client: 'National Infrastructure / Ethiopian Electric Power',
          cargo: 'Heavy Hydropower Components & Capital Machinery',
          desc: 'Multimodal transportation of vital capital machinery, civil engineering plant equipment, and specialized power generation components navigating long-haul national corridors to the dam site.',
          image: '/images/projects/gerd-dam.jpg',
          stats: 'Guba Substation & Dam Site',
          tags: ['Heavy Haulage', 'Hydro Equipment', 'National Infrastructure']
        },
        {
          id: 'ethiopian-airlines',
          categoryKey: 'NATIONAL INFRASTRUCTURE',
          title: 'Ethiopian Airlines Logistics Support Projects',
          location: 'Addis Ababa Bole International Airport & Regional Terminals',
          client: 'Ethiopian Airlines Group',
          cargo: 'Aviation Ground Equipment & Facility Capital Goods',
          desc: 'Time-critical expedited customs clearance, airside freight forwarding, and specialized overland transport of aviation ground infrastructure and facility support machinery.',
          image: '/images/projects/ethiopian-airlines-cargo.jpg',
          stats: 'Addis Ababa Hub',
          tags: ['Time-Critical', 'Customs Fast-Track', 'Aviation Logistics']
        },
        {
          id: 'gilgel-gibe',
          categoryKey: 'ENERGY & POWER',
          title: 'Gilgel Gibe Power Generation Projects',
          location: 'Oromia & Southern Regions',
          client: 'Voith Hydro Shanghai Ltd. / Power Authorities',
          cargo: 'Turbine Runners, Generators & Station Transformers',
          desc: 'Heavy-lift haulage of turbine assemblies, heavy power generators, and high-capacity electrical equipment navigating mountain switchbacks from Djibouti Port to southern hydro stations.',
          image: '/images/projects/gilgel-gibe.jpg',
          stats: 'Mountain Route Escort',
          tags: ['Voith Hydro Partner', 'Special Lowbed', 'Mountain Transit']
        },
        {
          id: 'power-transmission-cables',
          categoryKey: 'ENERGY & POWER',
          title: 'National Power Grid & Substation Projects',
          location: 'Nationwide (Hawassa, Jimma, Mekelle, Bahir Dar)',
          client: 'Ethiopian Electric Utility (EEU) & TBEA Deyang Cable Co.',
          cargo: 'High-Voltage Cable Drums, Insulators & Substation Units',
          desc: 'Synchronized overland transport and site delivery of massive high-voltage transmission cable reels and electrical substation equipment across regional power distribution grids.',
          image: '/images/projects/electric-power.jpg',
          stats: '13+ Regions Connected',
          tags: ['TBEA Partner', 'High Voltage', 'Power Grid']
        },
        {
          id: 'industrial-parks',
          categoryKey: 'INDUSTRIAL PARKS',
          title: 'National Industrial Parks Fleet Operations',
          location: 'Hawassa, Dukem, Adama, Arerti, Tulufa, Debrebirhan',
          client: 'Industrial Parks Development Corp (IPDC) & Global Tenants',
          cargo: 'Factory Machinery, Manufacturing Equipment & Containerized Freight',
          desc: 'Continuous containerized freight and factory equipment movement connecting industrial parks directly with Modjo Dry Port, Mojo Railway Terminal, and Djibouti Port.',
          image: '/images/projects/industrial-parks-corridor.jpg',
          stats: '6 Major Industrial Hubs',
          tags: ['Manufacturing', 'Container Drayage', 'Export Corridors']
        },
        {
          id: 'special-cargo',
          categoryKey: 'SPECIAL CARGO',
          title: 'Over-Height & Out-of-Gauge (OOG) Special Haulage',
          location: 'Djibouti Port to Central & Regional Ethiopia',
          client: 'Sinoma Construction, CCECC & Sinosteel',
          cargo: 'Heavy Pressure Vessels, Kiln Sections & Bridge Girders',
          desc: 'Dedicated hydraulic low-bed trailers, bridge clearance surveys, and police-escorted oversize convoy transport for out-of-gauge industrial components.',
          image: '/images/projects/project-oog-kiln.jpg',
          stats: 'Oversize Permitted Convoy',
          tags: ['OOG Specialist', 'Hydraulic Lowbed', 'Escorted Transport']
        }
      ],
      expertiseTag: 'Strategic Industry Scope',
      expertiseTitle: 'Our Expertise in Transportation',
      expertiseDesc: "We have established strong working relationships with some of the nation's largest organizations. Our portfolio includes successful collaborations with the Ethiopian Electric Utility, Ethiopian Electric Power, the Ministry of Finance, and construction companies among others.",
      parksTitle: 'Industrial Parks Operations',
      parksSub: 'Dedicated container drayage, raw material delivery, and production equipment hauling across 6 major hubs:',
      parks: [
        { name: 'Hawassa Industry Park', type: 'Textile & Garment Hub', region: 'Sidama' },
        { name: 'Dukem (Eastern Industry Zone)', type: 'Heavy Manufacturing & Assembly', region: 'Oromia' },
        { name: 'Adama Industry Park', type: 'Machinery & Agro-Processing', region: 'Oromia' },
        { name: 'Arerti Industry Park', type: 'Ceramics & Building Materials', region: 'Amhara' },
        { name: 'Tulufa Industry Zone', type: 'Industrial Manufacturing', region: 'Oromia' },
        { name: 'Debrebirhan Industry Park', type: 'Manufacturing & Export Goods', region: 'Amhara' }
      ],
      clientsTag: 'Institutional Client Collaborations:',
      clientNames: [
        'Ethiopian Electric Utility (EEU)',
        'Ethiopian Electric Power (EEP)',
        'Ministry of Finance',
        'National Construction Companies'
      ],
      equipmentTitle: 'Specialized Equipment Experience',
      equipmentSub: 'Extensive operational experience transporting specialized, heavy-duty, and out-of-gauge equipment:',
      equipment: [
        { name: 'Heavy Machinery', detail: 'Excavators, industrial cranes, earthmoving fleets, and factory production lines' },
        { name: 'Generators & Transformers', detail: 'High-capacity industrial generators, backup power units, and power substation transformers' },
        { name: 'Bulk Loads', detail: 'Construction raw materials, aggregate supplies, and containerized industrial shipments' },
        { name: 'Large-scale Project Cables & Accessories', detail: 'Heavy high-voltage transmission cable reels, insulator fittings, and grid hardware (TBEA partner)' },
        { name: 'Self-drive Commercial Vehicles', detail: 'Fleet delivery of utility trucks, heavy transit haulers, and commercial transport units' }
      ],
      locationsTag: 'Nationwide Network',
      locationsTitle: 'Location Range & Regional Experience',
      locationsDesc: 'We have successfully transported goods, materials, and heavy capital equipment to diverse regions across Ethiopia:',
      hubBadge: 'Hub / Destination',
      locationList: [
        'Hawassa', 'Dire Dawa', 'Dilla', 'Bahir Dar',
        'Guba (GERD)', 'Adama', 'Assela', 'Jimma',
        'Lalibela', 'Jijiga', 'Mekelle', 'Addis Ababa',
        'Kombolcha'
      ],
      experienceQuote1: 'Our extensive experience in logistics and transportation has allowed us to work effectively with diverse cultures and communities throughout the country.',
      experienceQuote2: 'We pride ourselves on our commitment to timely delivery, consistently completing projects within the agreed-upon deadlines, regardless of the complexity or geographical challenges involved.',
      deliveredBadge: 'Delivered'
    },
    contact: {
      badge: 'Contact Us',
      heroTitle: 'Request',
      heroTitleHighlight: 'Dispatch',
      heroTagline: 'Direct dispatch coordination with our operations desk at Gorgorios Square, Addis Ababa.',
      formTitle: 'Direct Cargo Dispatch & Quote',
      formDesc: 'Submit your shipping details below. Inquiries are directly routed to our enterprise dispatch desk at satlogistics0001@gmail.com.',
      fullNameLabel: 'Full Name *',
      fullNamePlaceholder: 'e.g., Daniel Haile',
      companyLabel: 'Company Name *',
      companyPlaceholder: 'e.g., Ethio Power Construction',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'e.g., procurement@company.com',
      phoneLabel: 'Direct Phone Number * (Required for Dispatch)',
      phonePlaceholder: '+251 93 299 9977',
      serviceLabel: 'Service Required',
      serviceOptions: [
        'International Freight Forwarding (Djibouti - Ethiopia)',
        'Customs Clearance & Port Handling',
        'Heavy & Out-of-Gauge Project Cargo Transport',
        'Industrial Park Dedicated Drayage',
        'Supply Chain & Route Logistics Consultancy'
      ],
      originDestLabel: 'Origin & Destination',
      originDestPlaceholder: 'e.g., Djibouti Port to Hawassa Industry Park',
      volumeLabel: 'Estimated Volume / Weight',
      volumePlaceholder: 'e.g., 4x 40ft Containers or 65 Tons Lowbed',
      detailsLabel: 'Cargo Specifications / Special Requirements',
      detailsPlaceholder: 'Describe equipment dimensions, delivery deadlines, or special handling needs...',
      submitBtn: 'Send Dispatch Request',
      submittingBtn: 'Routing to Dispatch Desk...',
      successTitle: 'Dispatch Request Transmitted',
      successDesc: 'Your shipment details have been registered and transmitted to the executive logistics operations desk at satlogistics0001@gmail.com.',
      dispatchRefLabel: 'Dispatch Reference ID',
      copyRefBtn: 'Copy Reference',
      copiedBtn: 'Copied!',
      sendAnotherBtn: 'Submit Another Inquiry',
      callDirectBtn: 'Call Operations Desk',
      sidebarTitle: 'Operations Headquarters',
      sidebarOfficeLabel: 'Main Office',
      sidebarOfficeValue: 'Gorgorios Square, Fetele Building 3rd floor, Addis Ababa, Ethiopia',
      sidebarPhoneLabel: 'Direct Dispatch Lines',
      sidebarEmailLabel: 'Official Corporate Email',
      sidebarHoursLabel: 'Operating Schedule',
      sidebarHoursValue: 'Monday – Saturday: 8:00 AM – 6:00 PM (Emergency 24/7 on active corridors)',
      directGmLabel: 'Executive Management'
    }
  },

  am: {
    about: {
      badge: 'ስለ እኛ',
      heroTitle: 'እኛ ማን ነን',
      heroTitleSub: 'ኤስኤቲ ሎጂስቲክስ እና ንግድ ኃ/የተ/የግ/ማ',
      heroTagline: 'በኢትዮጵያና ከዚያም ባሻገር ለተቀላጠፈ የሎጂስቲክስ መፍትሄዎች አስተማማኝ መግቢያዎ።',
      leadershipTag: 'ዋና አመራር',
      foundedTitle: 'በ2023 የተመሰረተ',
      managerRole: 'ዋና ሥራ አስኪያጅ',
      bio1: 'ኤስኤቲ ሎጂስቲክስ እና ንግድ ኃ/የተ/የግ/ማ ዕቃዎች ከመነሻቸው እስከ መጨረሻው መድረሻቸው ያለምንም እንከን እንዲጓጓዙ ለማድረግ በልዩ የትራንስፖርት እና የጉምሩክ ክሊራንስ አገልግሎቶች ላይ በማተኮር የተመሰረተ ድርጅት ነው።',
      bio2: 'በዋና ሥራ አስኪያጅ ሳሙኤል አያሌው አመራር፣ ኤስኤቲ ለዓለም አቀፍ የኮንስትራክሽን ድርጅቶች፣ ለብሔራዊ የኃይል ተቋማት እና ለኢንዱስትሪ ፓርክ ፋብሪካዎች አስተማማኝ የሎጂስቲክስ አጋር በመሆን ጸንቷል።',
      qualificationsTag: 'የትምህርት እና ሙያዊ ብቃት',
      degreeLabel: 'የድህረ ምረቃ ዲግሪ',
      degreeValue: 'ማስተርስ ዲግሪ (MA)',
      degreeField: 'በሎጂስቲክስ እና አቅርቦት ሰንሰለት አስተዳደር (Supply Chain Management)',
      competencyLabel: 'ዋና ዋና ሙያዊ ብቃቶች',
      competencyValue: 'ድንበር ተሻጋሪ የኮሪደር ሎጂስቲክስ',
      competencyField: 'መልቲሞዳል ጭነት እና የጉምሩክ አሰራር ሥርዓት',
      addressText: 'ጎርጎሪዮስ አደባባይ፣ ፈተሌ ህንፃ 3ኛ ፎቅ፣ አዲስ አበባ፣ ኢትዮጵያ',
      linkedinText: 'ሳሙኤል አያሌውን በLinkedIn ያግኙ',
      capabilityTag: 'የሥራ ልህቀት',
      capabilityTitle: 'የቡድናችን አቅም',
      capabilityDesc: 'የሎጂስቲክስ ቡድናችን የፈጠራ ስልቶችን በመጠቀም እና ከደንበኞች ጋር በቅርበት በመተባበር ችግሮችን አስቀድሞ በመገመትና ፈጣን ማስተካከያ በማድረግ ጭነቶች ያለ ምንም መስተጓጎል በሰዓቱ እንዲደርሱ ያደርጋል።',
      capabilities: [
        {
          tag: 'የኮሪደር ሕጎችና ፖሊሲዎች',
          title: 'የአገር ውስጥ ልምድና እውቀት',
          desc: 'የኢትዮጵያን የትራንስፖርት ሕጎች፣ የጉምሩክ ፖሊሲዎች፣ የመንገድ እና የባቡር መልቲሞዳል መስመሮችን በሚገባ የተረዳ ሰፊ ልምድ።',
          highlight: 'የኢትዮ-ጅቡቲ ኮሪደር እና ሁሉም ክልሎች'
        },
        {
          tag: 'ጉምሩክ እና ሰነዶች',
          title: 'የተቀላጠፈ ቅንጅት',
          desc: 'ከጉዞ በፊት ያሉ ሂደቶችን በሚገባ ማስተባበር፣ ፈጣን የጉምሩክ ክሊራንስ እና የሰነድ አያያዝን በብቃት ማከናወን።',
          highlight: 'ደረቅ ወደቦች እና የድንበር ኬላዎች'
        },
        {
          tag: 'አደጋን የመቀነስ ስልት',
          title: 'የፈጠራ ስልቶች',
          desc: 'መንገዶችን አስቀድሞ በመገምገም መዘግየቶችን ማስወገድና ያልተቋረጠ የትራንዚት እንቅስቃሴ ማረጋገጥ።',
          highlight: 'ቀጣይነት ያለው የጭነት ክትትል'
        },
        {
          tag: 'ተቋማዊ ትስስር',
          title: 'ጠንካራ አጋርነቶች',
          desc: 'ከኢትዮጵያ ጉምሩክ ኮሚሽን፣ ከኢትዮጵያ የባህር ትራንስፖርትና ሎጂስቲክስ አገልግሎት ድርጅትና ከዋና ዋና አጓጓዦች ጋር የጸና ግንኙነት።',
          highlight: 'ባለሥልጣናት፣ የመርከብ መስመሮችና አስተላላፊዎች'
        },
        {
          tag: 'ለደንበኛ ተስማሚ መፍትሔዎች',
          title: 'ደንበኛ ተኮር አሰራር',
          desc: 'የእያንዳንዱን ደንበኛ ልዩ የጭነት መጠን፣ የጊዜ ገደብና አያያዝ ፍላጎት ያማከለ የተለየ የሎጂስቲክስ ውል አሰራር።',
          highlight: 'ብጁ የኮንትራት ሎጂስቲክስ'
        },
        {
          tag: 'ከባድና ልዩ ጭነት',
          title: 'የፕሮጀክት ጭነት ዝግጁነት',
          desc: 'ልዩ የዝቅተኛ መደብ ተሳቢዎች (Lowbed)፣ የመንገድ ፈቃዶችና ለከፍተኛ ማሽነሪዎች የሚሆን የታጀበ ደህንነቱ የተጠበቀ ትራንስፖርት።',
          highlight: 'ካፒታል ዕቃዎችና የመሠረተ ልማት ማሽኖች'
        }
      ],
      overviewTag: 'የኩባንያው አጠቃላይ መግለጫ',
      overviewTitle: 'በኢትዮጵያ እና ከዚያ ባሻገር ግንባር ቀደም የሎጂስቲክስ አቅራቢ',
      overviewDesc: 'ኤስኤቲ ሎጂስቲክስ እና ንግድ ኃ/የተ/የግ/ማ በኢትዮጵያና ከዚያም ባሻገር ዓለም አቀፍ የጭነት አስተላላፊነት፣ የጉምሩክ ክሊራንስ እና የከባድ ፕሮጀክት ጭነት ትራንስፖርት አገልግሎት የሚሰጥ ግንባር ቀደም ድርጅት ነው።',
      mandateLabel: 'የኩባንያው ተልዕኮ',
      mandateText: 'የግል ኩባንያዎችን፣ አምራቾችን እና የመንግስት ተቋማትን ግቦች በብቃት መደገፍ።',
      missionTag: 'ተልዕኳችን',
      missionTitle: 'ሰፊ የኢንዱስትሪ ሽፋን',
      missionPoints: [
        'ኤስኤቲ ሎጂስቲክስ ለማኑፋክቸሪንግ፣ ለኃይል ማመንጫ፣ ለዳታ ማይኒንግ፣ ለኢንዱስትሪ ፓርኮች፣ ለፀሐይና ንፋስ ኃይል፣ ለችርቻሮ ንግድ፣ ለጨርቃጨርቅ እና ለከባድ ፕሮጀክት ጭነቶች ሁሉን አቀፍ መፍትሄ ይሰጣል።',
        'ከጭነት አስተላላፊነት በተጨማሪ የደንበኞቻችንን የአቅርቦት ሰንሰለት ለማቀላጠፍ ስልታዊ የሎጂስቲክስ የማማከር አገልግሎት እንሰጣለን።',
        'ዋና ዓላማችን የግል ኩባንያዎች፣ አምራቾች እና የመንግስት ተቋማት የተሻለ የሎጂስቲክስ አቅም፣ ዝቅተኛ የትራንስፖርት ታሪፍ እና የላቀ ጥራት እንዲያገኙ መርዳት ነው።'
      ],
      principlesTag: 'መሰረታዊ እሴቶች',
      principlesTitle: 'የምንመራባቸው መርሆዎች',
      principles: [
        {
          title: 'ከባለድርሻ አካላት ጋር መተባበር',
          desc: 'በሁሉም ስራችን ቀላልነትን፣ አስተማማኝነትን እና የደንበኛ ቅድሚያን በማስቀደም ታማኝ አጋር ሆነን እንቆማለን።'
        },
        {
          title: 'የሰራተኞችን አቅም ማጎልበት',
          desc: 'ስኬት በአንድነት ላይ የተገነባ ነው፤ የቡድን ስራን እናበረታታለን፣ ጠንካራ የድጋፍ ስርዓት እንዘረጋለን።'
        },
        {
          title: 'በልህቀት መመራት',
          desc: 'ስራዎቻችን በሀገራዊ እና ዓለም አቀፍ ደረጃዎች ላይ የተመሰረቱ በመሆናቸው ቀልጣፋ፣ ተከታታይ እና ፈጣን አገልግሎት እንሰጣለን።'
        },
        {
          title: 'ለወደፊት ዝግጁ መሆን',
          desc: 'እድገት ተኮር አመለካከቶች እና ከዘመናዊ የዲጂታል ሎጂስቲክስ አሰራሮች ጋር በየጊዜው መራመድ።'
        },
        {
          title: 'ለዘላቂነት ቁርጠኝነት',
          desc: 'ስነ-ምግባራዊ አሰራሮችን እና ህጋዊ ተገዢነትን እንጠብቃለን፤ የአካባቢ ጥበቃ እርምጃዎችን በዕለታዊ ትራንስፖርት ውስጥ እናካትታለን።'
        }
      ],
      processTag: 'መደበኛ የአሠራር ሂደት',
      processTitle: 'የትዕዛዝ አፈፃፀም ቅደም ተከተል',
      steps: [
        {
          num: '01',
          title: 'ትዕዛዝ መቀበል እና እቅድ ማውጣት',
          items: [
            'የደንበኛ መመሪያዎችን እና የውስጥ ትዕዛዝ ዝርዝሮችን መቀበል',
            'የትዕዛዝ መረጃን ማረጋገጥ፡ የምርት አይነትና መጠን፣ የመድረሻ ቦታና የጊዜ ገደብ፣ ልዩ አያያዝ ፍላጎቶች',
            'በጣም ቀልጣፋና ወጪ ቆጣቢ የሆነውን የትራንስፖርት አይነት (የመንገድ፣ የባቡር) እና የተሽከርካሪ አይነት መወሰን',
            'የማስረከቢያ ቀናትን መወሰንና የጉዞ እቅድ ማዘጋጀት'
          ]
        },
        {
          num: '02',
          title: 'ትራንስፖርት እና ሪፖርት ማቅረብ',
          items: [
            'በሎጂስቲክስ እቅዱ መሰረት ተስማሚ አጓጓዥ መምረጥ',
            'አስፈላጊ የመላኪያ ሰነዶችንና የጉምሩክ ፈቃዶችን ማዘጋጀትና ማረጋገጥ',
            'ከጭነቱ መጠንና ክብደት ጋር የሚመጣጠኑ ልዩ ተሽከርካሪዎችን መመደብ',
            'ዕቃዎች በተሽከርካሪዎች ላይ በጥንቃቄ እንዲጫኑ መቆጣጠር',
            'የቀጥታ መከታተያ መረጃዎችን እና ዕለታዊ የሂደት ሪፖርቶችን ለደንበኛው ማጋራት'
          ]
        },
        {
          num: '03',
          title: 'ማስረከብ እና የደንበኞች ድጋፍ',
          items: [
            'ዕቃዎችን በትዕዛዙ መሰረት ለደንበኛው ወይም ለማከፋፈያ ማዕከል ማስረከብ',
            'በጉዞ ወቅት የሚያጋጥሙ ማናቸውንም መዘግየቶች ወይም ችግሮች በፍጥነት መፍታት',
            'ደንበኛው ሲፈልግ የመጋዘንና የማቆያ ቦታዎችን ማዘጋጀት'
          ]
        },
        {
          num: '04',
          title: 'ክትትል እና የሕግ ተገዢነት',
          items: [
            'ዋና ዋና የአፈጻጸም መስፈርቶችን መከታተል እና ክፍተቶችን ማረም',
            'ሁሉም የትራንስፖርት ስራዎች ከአገር ውስጥና ዓለም አቀፍ ደንቦች ጋር መጣጣማቸውን ማረጋገጥ',
            'ከባድ ማሽነሪዎችን ለሚይዙ ሰራተኞች የደህንነት ስልጠና መስጠት',
            'የተሟሉ የኦዲት እና የጉምሩክ ሰነዶችን በአስተማማኝ ሁኔታ መያዝ'
          ]
        }
      ]
    },
    services: {
      badge: 'አገልግሎቶች',
      heroTitle: 'ዋና ዋና',
      heroTitleHighlight: 'አገልግሎቶች',
      heroTagline: 'የጭነት ትራንስፖርትዎን ቀላል፣ አስተማማኝ እና ቀልጣፋ እናደርጋለን።',
      mainServices: [
        {
          num: '01',
          title: 'የጭነት ትራንስፖርት',
          desc: 'ከፍላጎትዎ ጋር የተጣጣመ አጠቃላይ የመንገድ ላይ የጭነት ማጓጓዣ አገልግሎት።',
          sub: 'መልቲሞዳል የመንገድ እና የባቡር ትራንስፖርት'
        },
        {
          num: '02',
          title: 'የጉምሩክ ክሊራንስ',
          desc: 'ሁሉንም የጉምሩክ ሰነዶች እና ሕጋዊ ሂደቶች በከፍተኛ ሙያዊ ብቃት ማጠናቀቅ።',
          sub: 'የሰነድ አስተዳደርና የሕግ ተገዢነት'
        },
        {
          num: '03',
          title: 'የመጨረሻ መዳረሻ ማድረስ',
          desc: 'ምርቶችዎ በተገቢው ሰዓት የመጨረሻ መዳረሻቸው እንዲደርሱ የሚያደርጉ ቀልጣፋ መፍትሔዎች።',
          sub: 'የፋብሪካ እና መጋዘን ርክክብ'
        }
      ],
      portSectionTag: 'የወደብ እና ጉምሩክ ስራዎች',
      portHeadline: 'የወደብ አያያዝ እና የአገር ውስጥ ጉምሩክ ክሊራንስ',
      bullet1: 'በተቀላጠፈ የወደብ አያያዝ እና ፈጣን የአገር ውስጥ ጉምሩክ ክሊራንስ ላይ ልዩ ሙያ።',
      bullet2: 'ለዩኒሞዳል እና መልቲሞዳል ጭነቶች የተበጁ የላቁ የሎጂስቲክስ መፍትሄዎች ቁርጠኝነት።',
      portHandlingTitle: 'የወደብ አያያዝ',
      portHandlingItems: [
        'በወደብ ተርሚናሎች እና በደረቅ ወደብ ጊቢዎች ውስጥ መጫን እና ማውረድ',
        'የቀጥታ የጭነት ክትትል እና የቦንድድ ሁኔታ ክትትል'
      ],
      customsTitle: 'የአገር ውስጥ ጉምሩክ ክሊራንስ',
      customsItems: [
        'የሰነድ አስተዳደር እና የዲክላራሲዮን ዝግጅት',
        'የሕግ ተገዢነት፡ በአካባቢ ጉምሩክ ደንቦችና ታሪፎች ላይ የካበተ ልምድ',
        'ቀረጥ እና ታክስ፡ ለፈጣን ክሊራንስ ሙያዊ የማማከር ድጋፍ'
      ],
      specialCargoTag: 'ልዩ ከባድ ጭነት',
      specialCargoTitle: 'ከመደበኛ መጠን በላይ እና ልዩ የፕሮጀክት ጭነት ትራንስፖርት',
      specialCargoDesc: 'ለካፒታል ማሽነሪዎች፣ ግዙፍ የኢንዱስትሪ መዋቅሮች፣ ከፍተኛ ኃይል ማስተላለፊያዎች እና ከወደብ ወደ ፋብሪካዎች ለሚጓጓዙ ልዩ የፕሮጀክት ዕቃዎች አስተማማኝ የማጓጓዝ አቅም።',
      specialCargoCta: 'ለልዩ ጭነት ዋጋ ይጠይቁ'
    },
    projects: {
      badge: 'ፕሮጀክቶች',
      heroTitle: 'ያስረከብናቸው',
      heroTitleHighlight: 'ፕሮጀክቶች',
      heroTagline: 'ለኢትዮጵያ ታላላቅ የመሠረተ ልማት፣ የኃይል እና የኢንዱስትሪ ፕሮጀክቶች ካፒታል ዕቃዎችን ማጓጓዝ።',
      sectionTag: 'የካፒታል ዕቃዎች ትራንስፖርት',
      headline: 'ዋና ዋና ሀገራዊ ተሳትፎዎች',
      intro: 'ድርጅታችን ለኢትዮጵያ ታላላቅ የመሠረተ ልማት ፕሮጀክቶች የካፒታል ዕቃዎችን በማጓጓዝ ረገድ ጉልህ ሚና ተጫውቷል። በእነዚህ ተሳትፎዎች ለልህቀት፣ ለአስተማማኝነት እና ለሀገሪቱ ኢኮኖሚያዊ ልማት ያለንን ቁርጠኝነት አስመስክረናል።',
      categories: {
        all: 'ሁሉም',
        energy: 'የኃይል እና ግድብ',
        infrastructure: 'ብሔራዊ መሠረተ ልማት',
        parks: 'የኢንዱስትሪ ፓርኮች',
        special: 'ልዩ ጭነት'
      },
      projects: [
        {
          id: 'gerd',
          categoryKey: 'ENERGY & POWER',
          title: 'የታላቁ የኢትዮጵያ ህዳሴ ግድብ (GERD) ፕሮጀክት',
          location: 'ጉባ፣ ቤንሻንጉል ጉሙዝ ክልል',
          client: 'ብሔራዊ መሠረተ ልማት / የኢትዮጵያ ኤሌክትሪክ ኃይል',
          cargo: 'ከባድ የሀይድሮ ፓወር ክፍሎች እና የካፒታል ማሽነሪዎች',
          desc: 'ለአፍሪካ ትልቁ የሀይድሮ ኤሌክትሪክ ግድብ ግንባታ የሚውሉ ወሳኝ የካፒታል ማሽነሪዎችንና የኃይል ማመንጫ መሣሪያዎችን በረጅም የሀገር ውስጥ መስመሮች ወደ ጉባ በደህንነት ማጓጓዝ።',
          image: '/images/projects/gerd-dam.jpg',
          stats: 'የጉባ ማከፋፈያና የግድብ ሳይት',
          tags: ['ከባድ ጭነት', 'የሀይድሮ መሣሪያዎች', 'ብሔራዊ ፕሮጀክት']
        },
        {
          id: 'ethiopian-airlines',
          categoryKey: 'NATIONAL INFRASTRUCTURE',
          title: 'የኢትዮጵያ አየር መንገድ የሎጂስቲክስ ድጋፍ ፕሮጀክቶች',
          location: 'ቦሌ ዓለም አቀፍ አውሮፕላን ማረፊያ እና የክልል ተርሚናሎች',
          client: 'የኢትዮጵያ አየር መንገድ ግሩፕ',
          cargo: 'የአቪዬሽን ምድር ላይ ድጋፍ ሰጪ መሣሪያዎች እና የካፒታል እቃዎች',
          desc: 'ፈጣን የጉምሩክ ክሊራንስ፣ የአየር ማረፊያ ጭነት አስተላላፊነት እና የአቪዬሽን ምድር አጋዥ ማሽነሪዎችን በአስተማማኝ ሁኔታ ማድረስ።',
          image: '/images/projects/ethiopian-airlines-cargo.jpg',
          stats: 'የአዲስ አበባ ማዕከል',
          tags: ['አስቸኳይ ጭነት', 'ፈጣን ጉምሩክ', 'የአቪዬሽን ሎጂስቲክስ']
        },
        {
          id: 'gilgel-gibe',
          categoryKey: 'ENERGY & POWER',
          title: 'የግልገል ጊቤ የኃይል ማመንጫ ፕሮጀክቶች',
          location: 'ኦሮሚያ እና ደቡብ ክልሎች',
          client: 'ቮይት ሀይድሮ ሻንጋይ / የኤሌክትሪክ ባለስልጣናት',
          cargo: 'የትርባይን ሯጮች፣ ጄነሬተሮች እና ግዙፍ ትራንስፎርመሮች',
          desc: 'የትርባይን ክፍሎችን እና ከፍተኛ አቅም ያላቸውን የኤሌክትሪክ መሣሪያዎች ከተራራማ መተላለፊያዎችና አስቸጋሪ መንገዶች በልዩ ሎውቤድ ተሳቢዎች ማጓጓዝ።',
          image: '/images/projects/gilgel-gibe.jpg',
          stats: 'የተራራማ መስመር አጃቢ',
          tags: ['ቮይት ሀይድሮ አጋር', 'ልዩ ሎውቤድ', 'የተራራ ትራንዚት']
        },
        {
          id: 'power-transmission-cables',
          categoryKey: 'ENERGY & POWER',
          title: 'የብሔራዊ የኤሌክትሪክ መስመር ዝርጋታ እና ማከፋፈያ ፕሮጀክቶች',
          location: 'ሀገር አቀፍ (ሀዋሳ፣ ጅማ፣ መቀሌ፣ ባህር ዳር)',
          client: 'የኢትዮጵያ ኤሌክትሪክ አገልግሎት (EEU) እና ቲቢኢኤ (TBEA) ኬብል',
          cargo: 'ከፍተኛ የቮልቴጅ ኬብል ጥቅልሎች እና የማከፋፈያ ዕቃዎች',
          desc: 'በክልል የኃይል ማከፋፈያ ኔትወርኮች ውስጥ ግዙፍ የከፍተኛ ቮልቴጅ የኤሌክትሪክ ኬብል ጥቅልሎችን እና የትራንስፎርመር ክፍሎችን በቅንጅት ማጓጓዝ።',
          image: '/images/projects/electric-power.jpg',
          stats: '13+ ክልሎች ተገናኝተዋል',
          tags: ['ቲቢኢኤ አጋር', 'ከፍተኛ ቮልቴጅ', 'የኃይል ኔትወርክ']
        },
        {
          id: 'industrial-parks',
          categoryKey: 'INDUSTRIAL PARKS',
          title: 'የብሔራዊ ኢንዱስትሪ ፓርኮች የትራንስፖርት ስምሪት',
          location: 'ሀዋሳ፣ ዱከም፣ አዳማ፣ አረርቲ፣ ቱሉፋ፣ ደብረብርሃን',
          client: 'የኢንዱስትሪ ፓርኮች ልማት ኮርፖሬሽን (IPDC) እና አምራች ፋብሪካዎች',
          cargo: 'የፋብሪካ ማሽነሪዎች፣ የማምረቻ መሣሪያዎች እና የኮንቴነር ጭነት',
          desc: 'የኢንዱስትሪ ፓርኮችን ከሞጆ ደረቅ ወደብ፣ ከባቡር ተርሚናል እና ከጅቡቲ ወደብ ጋር በቀጥታ የሚያገናኝ የማያቋርጥ የኮንቴነር የጭነት ፍሰት።',
          image: '/images/projects/industrial-parks-corridor.jpg',
          stats: '6 ዋና ዋና የኢንዱስትሪ ማዕከላት',
          tags: ['ማኑፋክቸሪንግ', 'የኮንቴነር ትራንስፖርት', 'የወጪ ንግድ']
        },
        {
          id: 'special-cargo',
          categoryKey: 'SPECIAL CARGO',
          title: 'ከመደበኛ መጠን በላይ (OOG) የልዩ ጭነት ትራንስፖርት',
          location: 'ከጅቡቲ ወደብ ወደ መካከለኛው እና ክልል ኢትዮጵያ',
          client: 'ሲኖማ ኮንስትራክሽን፣ ሲሲኢሲሲ እና ሲኖስቲል',
          cargo: 'ግዙፍ የፋብሪካ ቦይለሮች፣ የሲሚንቶ እቶኖች እና የድልድይ ብረቶች',
          desc: 'የሃይድሮሊክ ባለብዙ አክስል ሎውቤዶች፣ የመንገድና ድልድይ ቅኝት ጥናት እና በፖሊስ ታጅቦ የሚከናወን ከመደበኛ በላይ የሆነ የጭነት ጉዞ።',
          image: '/images/projects/project-oog-kiln.jpg',
          stats: 'በፈቃድ የሚጓጓዝ ልዩ ጭነት',
          tags: ['ልዩ ባለሙያ', 'ሃይድሮሊክ ተሳቢ', 'የታጀበ ትራንስፖርት']
        }
      ],
      expertiseTag: 'ስልታዊ የኢንዱስትሪ ሽፋን',
      expertiseTitle: 'በትራንስፖርት መስክ ያለን ሰፊ ልምድ',
      expertiseDesc: 'ከሀገሪቱ ታላላቅ ተቋማት ጋር ጠንካራ የሥራ ግንኙነት ገንብተናል። ፖርትፎሊዮአችን ከኢትዮጵያ ኤሌክትሪክ አገልግሎት፣ ከኢትዮጵያ ኤሌክትሪክ ኃይል፣ ከገንዘብ ሚኒስቴር እና ከኮንስትራክሽን ድርጅቶች ጋር የተከናወኑ ስኬታማ ትብብሮችን ያካትታል።',
      parksTitle: 'የኢንዱስትሪ ፓርኮች ኦፕሬሽን',
      parksSub: 'በ6 ዋና ዋና ማዕከላት የማያቋርጥ የኮንቴነር፣ የጥሬ ዕቃ እና የማምረቻ መሣሪያዎች ማጓጓዝ፡',
      parks: [
        { name: 'የሀዋሳ ኢንዱስትሪ ፓርክ', type: 'የጨርቃጨርቅ እና አልባሳት ማዕከል', region: 'ሲዳማ' },
        { name: 'የዱከም ኢንዱስትሪ ዞን (Eastern)', type: 'ከባድ ማኑፋክቸሪንግ እና መገጣጠሚያ', region: 'ኦሮሚያ' },
        { name: 'የአዳማ ኢንዱስትሪ ፓርክ', type: 'ማሽነሪ እና የግብርና ማቀነባበሪያ', region: 'ኦሮሚያ' },
        { name: 'የአረርቲ ኢንዱስትሪ ፓርክ', type: 'ሴራሚክስ እና የግንባታ ዕቃዎች', region: 'አማራ' },
        { name: 'የቱሉፋ ኢንዱስትሪ ዞን', type: 'የኢንዱስትሪ ማምረቻ', region: 'ኦሮሚያ' },
        { name: 'የደብረብርሃን ኢንዱስትሪ ፓርክ', type: 'ምርት እና የወጪ ንግድ ዕቃዎች', region: 'አማራ' }
      ],
      clientsTag: 'ከተቋማት ጋር ያሉ ትብብሮች፡',
      clientNames: [
        'የኢትዮጵያ ኤሌክትሪክ አገልግሎት (EEU)',
        'የኢትዮጵያ ኤሌክትሪክ ኃይል (EEP)',
        'የገንዘብ ሚኒስቴር',
        'ብሔራዊ የኮንስትራክሽን ድርጅቶች'
      ],
      equipmentTitle: 'የልዩ መሣሪያዎች ልምድ',
      equipmentSub: 'ልዩ፣ ከባድ እና ከመደበኛ መጠን በላይ የሆኑ መሣሪያዎችን በማጓጓዝ ረገድ የካበተ ልምድ፡',
      equipment: [
        { name: 'ከባድ ማሽነሪዎች', detail: 'ኤክስካቫተሮች፣ ክሬኖች፣ የመሬት ቆፋሪዎች እና የፋብሪካ ማምረቻ መስመሮች' },
        { name: 'ጄነሬተሮች እና ትራንስፎርመሮች', detail: 'ከፍተኛ አቅም ያላቸው የኢንዱስትሪ ጄነሬተሮች እና የኤሌክትሪክ ማከፋፈያ ትራንስፎርመሮች' },
        { name: 'የጅምላ ጭነቶች', detail: 'የግንባታ ጥሬ ዕቃዎች፣ አጠቃላይ ጭነቶች እና በኮንቴነር የታሸጉ የኢንዱስትሪ ግብአቶች' },
        { name: 'ግዙፍ የፕሮጀክት ኬብሎች እና መለዋወጫዎች', detail: 'ከፍተኛ ቮልቴጅ ማስተላለፊያ ኬብሎች እና ተጓዳኝ መሣሪያዎች (የTBEA አጋር)' },
        { name: 'ተንቀሳቃሽ የንግድ ተሽከርካሪዎች', detail: 'አዳዲስ ከባድ መኪናዎች፣ ረጅም ተሳቢዎች እና የመጓጓዣ ክፍሎች' }
      ],
      locationsTag: 'ሀገር አቀፍ አውታረ መረብ',
      locationsTitle: 'የመዳረሻ ክልል እና ልምድ',
      locationsDesc: 'በኢትዮጵያ ዙሪያ ወደሚገኙ የተለያዩ ክልሎች እቃዎችን፣ ቁሳቁሶችን እና ከባድ የካፒታል መሣሪያዎችን በተሳካ ሁኔታ አጓጉዘናል፡',
      hubBadge: 'ማዕከል / መዳረሻ',
      locationList: [
        'ሀዋሳ', 'ድሬዳዋ', 'ዲላ', 'ባህር ዳር',
        'ጉባ (ህዳሴ ግድብ)', 'አዳማ', 'አሰላ', 'ጅማ',
        'ላሊበላ', 'ጅጅጋ', 'መቀሌ', 'አዲስ አበባ',
        'ኮምቦልቻ'
      ],
      experienceQuote1: 'በሎጂስቲክስ እና ትራንስፖርት ዘርፍ ያለን ሰፊ ልምድ ከመላው ሀገሪቱ ከተለያዩ ማህበረሰቦች ጋር በጋራ በብቃት እንድንሰራ አስችሎናል።',
      experienceQuote2: 'የመንገዱ አስቸጋሪነት ወይም የሥራው ውስብስብነት ሳይገድበን ፕሮጀክቶችን በተስማማንበት የጊዜ ገደብ ውስጥ በሰዓቱ የማጠናቀቅ ቁርጠኝነታችን ኩራታችን ነው።',
      deliveredBadge: 'ተጠናቋል'
    },
    contact: {
      badge: 'ያግኙን',
      heroTitle: 'የጭነት',
      heroTitleHighlight: 'ጥያቄ ያቅርቡ',
      heroTagline: 'በጎርጎሪዮስ አደባባይ አዲስ አበባ ከሚገኘው የሎጂስቲክስ ማዕከላችን ጋር ቀጥታ ግንኙነት ያድርጉ።',
      formTitle: 'ቀጥታ የጭነት ጥያቄ እና የዋጋ ማቅረቢያ',
      formDesc: 'የጭነት መረጃዎን ከታች ያስገቡ። ጥያቄዎች በቀጥታ ወደ ዋናው የኦፕሬሽን ዴስክ satlogistics0001@gmail.com ይተላለፋሉ።',
      fullNameLabel: 'ሙሉ ስም *',
      fullNamePlaceholder: 'ምሳሌ፡ ዳንኤል ኃይሌ',
      companyLabel: 'የድርጅት ስም *',
      companyPlaceholder: 'ምሳሌ፡ ኢትዮ ኮንስትራክሽን',
      emailLabel: 'ኢሜይል አድራሻ *',
      emailPlaceholder: 'ምሳሌ፡ procurement@company.com',
      phoneLabel: 'ቀጥታ ስልክ ቁጥር * (ግዴታ)',
      phonePlaceholder: '+251 93 299 9977',
      serviceLabel: 'የሚፈልጉት አገልግሎት',
      serviceOptions: [
        'ዓለም አቀፍ የጭነት አስተላላፊነት (ጅቡቲ - ኢትዮጵያ)',
        'የጉምሩክ ክሊራንስ እና የወደብ አያያዝ',
        'ከባድ እና ከመደበኛ መጠን በላይ የፕሮጀክት ጭነት ትራንስፖርት',
        'የኢንዱስትሪ ፓርክ የኮንቴነር ትራንስፖርት',
        'የአቅርቦት ሰንሰለት እና የመስመር ሎጂስቲክስ የማማከር አገልግሎት'
      ],
      originDestLabel: 'መነሻ እና መድረሻ',
      originDestPlaceholder: 'ምሳሌ፡ ከጅቡቲ ወደብ ወደ ሀዋሳ ኢንዱስትሪ ፓርክ',
      volumeLabel: 'የተገመተው መጠን / ክብደት',
      volumePlaceholder: 'ምሳሌ፡ 4x 40ft ኮንቴነሮች ወይም 65 ቶን ሎውቤድ',
      detailsLabel: 'የጭነት ዝርዝር መግለጫ / ልዩ መስፈርቶች',
      detailsPlaceholder: 'የመሣሪያውን ስፋት፣ የርክክብ ጊዜ ገደብ ወይም ልዩ አያያዝ ፍላጎቶችን ይግለጹ...',
      submitBtn: 'የጭነት ጥያቄ ላክ',
      submittingBtn: 'ወደ ኦፕሬሽን ዴስክ በመላክ ላይ...',
      successTitle: 'የጭነት ጥያቄዎ በተሳካ ሁኔታ ተልኳል',
      successDesc: 'የጭነት መረጃዎ ተመዝግቦ ወደ ዋናው የኦፕሬሽን ዴስክ satlogistics0001@gmail.com ተልኳል።',
      dispatchRefLabel: 'የመከታተያ መለያ ቁጥር',
      copyRefBtn: 'መለያ ቁጥር ቅዳ',
      copiedBtn: 'ተቀድቷል!',
      sendAnotherBtn: 'ሌላ ጥያቄ ላክ',
      callDirectBtn: 'በስልክ ይደውሉ',
      sidebarTitle: 'ዋና የሥራ ቢሮ',
      sidebarOfficeLabel: 'ዋና ቢሮ',
      sidebarOfficeValue: 'ጎርጎሪዮስ አደባባይ፣ ፈተሌ ህንፃ 3ኛ ፎቅ፣ አዲስ አበባ፣ ኢትዮጵያ',
      sidebarPhoneLabel: 'የቀጥታ ስልክ መስመሮች',
      sidebarEmailLabel: 'ይፋዊ የኩባንያ ኢሜይል',
      sidebarHoursLabel: 'የሥራ ሰዓት',
      sidebarHoursValue: 'ከሰኞ – ቅዳሜ፡ ከጠዋቱ 2:00 – ምሽቱ 12:00 (በኮሪደሮች ላይ ለአስቸኳይ ጊዜ 24/7)',
      directGmLabel: 'ዋና አስተዳደር'
    }
  },

  ar: {
    about: {
      badge: 'من نحن',
      heroTitle: 'من نحن',
      heroTitleSub: 'شركة SAT للخدمات اللوجستية والتجارة',
      heroTagline: 'بوابتك إلى حلول لوجستية سلسة وموثوقة عبر إثيوبيا والقرن الأفريقي وخارجها.',
      leadershipTag: 'القيادة التنفيذية',
      foundedTitle: 'تأسست في عام 2023',
      managerRole: 'المدير العام',
      bio1: 'تأسست شركة SAT للخدمات اللوجستية والتجارة مع تركيز مخصص على تقديم خدمات النقل المتخصصة والتخليص الجمركي لضمان النقل السلس للبضائع من نقطة المنشأ إلى الوجهة النهائية.',
      bio2: 'تحت قيادة المدير العام صامويل أياليو، أثبتت SAT نفسها كشريك موثوق لشركات الهندسة متعددة الجنسيات، وهيئات الطاقة الوطنية، ومصانع المناطق الصناعية في إثيوبيا.',
      qualificationsTag: 'المؤهلات الأكاديمية والمهنية',
      degreeLabel: 'شهادة الدراسات العليا',
      degreeValue: 'ماجستير في الآداب (MA)',
      degreeField: 'إدارة اللوجستيات وسلسلة التوريد (Logistics & Supply Chain Management)',
      competencyLabel: 'الكفاءات التخصصية الأساسية',
      competencyValue: 'لوجستيات الممرات العابرة للحدود',
      competencyField: 'النقل المتعدد الوسائط وهندسة التخليص الجمركي',
      addressText: 'ميدان غورغوريوس، مبنى فتيلي الطابق الثالث، أديس أبابا، إثيوبيا',
      linkedinText: 'تواصل مع صامويل أياليو عبر لينكد إن',
      capabilityTag: 'التميز التشغيلي',
      capabilityTitle: 'قدرات فريقنا',
      capabilityDesc: 'يستخدم فريقنا اللوجستي استراتيجيات مبتكرة ويتعاون بشكل وثيق مع العملاء لتوقع العقبات والتكيف مع التغييرات الميدانية، مما يضمن عمليات سلسة وتسليمات في الوقت المحدد بأقل قدر من التعطيل.',
      capabilities: [
        {
          tag: 'لوائح الممرات',
          title: 'الخبرة المحلية',
          desc: 'فهم عميق للوائح النقل وسياسات الجمارك وشبكات الطرق والسكك الحديدية متعددة الوسائط في إثيوبيا.',
          highlight: 'ممر إثيوبيا - جيبوتي والمحافظات'
        },
        {
          tag: 'الجمارك والوثائق',
          title: 'تنسيق سلس وسريع',
          desc: 'خبرة عريقة في إجراءات ما قبل الشحن، مما يضمن تخليصاً جمركياً سريعاً ومناولة دقيقة للوثائق الرسمية.',
          highlight: 'الموانئ الجافة ونقاط العبور'
        },
        {
          tag: 'إدارة المخاطر',
          title: 'استراتيجية مبتكرة',
          desc: 'يتعاون فريقنا مع العملاء لتوقع الاختناقات في مسارات النقل وتفادي التأخيرات التشغيلية.',
          highlight: 'مراقبة الشحنات على مدار الساعة'
        },
        {
          tag: 'شبكة الشركاء',
          title: 'شراكات مؤسسية قوية',
          desc: 'علاقات عمل وثيقة مع هيئة الجمارك الإثيوبية وشركة النقل البحري والخطوط الملاحية العالمية.',
          highlight: 'السلطات الحكومية ووكلاء الشحن'
        },
        {
          tag: 'حلول الشركات',
          title: 'نهج يركز على العميل',
          desc: 'حلول شحن وعقود لوجستية مخصصة لتلبية المتطلبات الفريدة لكل مؤسسة وجداول التسليم الصارمة.',
          highlight: 'خدمات تعاقدية مخصصة'
        },
        {
          tag: 'الشحنات الثقيلة',
          title: 'جاهزية بضائع المشاريع',
          desc: 'مقطورات منخفضة متخصصة (Lowbed)، ومسح المسارات وتصاريح أمنية للبضائع الفائقة الأبعاد والوزن.',
          highlight: 'السلع الرأسمالية والمعدات الثقيلة'
        }
      ],
      overviewTag: 'نظرة عامة على الشركة',
      overviewTitle: 'مزود الخدمات اللوجستية الرائد في إثيوبيا وما وراءها',
      overviewDesc: 'تعتبر شركة SAT للخدمات اللوجستية والتجارة مزوداً رائداً لخدمات النقل والخدمات اللوجستية في إثيوبيا، حيث تقدم خدمات متكاملة تشمل الشحن الدولي، التخليص الجمركي، ونقل بضائع المشاريع الكبرى.',
      mandateLabel: 'تفويض الشركة',
      mandateText: 'الدعم الفعال للشركات الخاصة والمصنعين والمؤسسات الحكومية لتحقيق أهدافها.',
      missionTag: 'مهمتنا',
      missionTitle: 'نطاق صناعي شامل',
      missionPoints: [
        'تقدم SAT حلولاً شاملة لمجموعة واسعة من القطاعات، بما في ذلك التصنيع، إنتاج الطاقة، بضائع تعدين البيانات، المناطق الصناعية، مزارع الطاقة الشمسية وطاقة الرياح، وتجارة التجزئة، وصناعة الملابس، ونقل المعدات الثقيلة.',
        'بالإضافة إلى الشحن، نقدم استشارات لوجستية استراتيجية لتحسين سلاسل التوريد ورفع مستوى رضا العملاء.',
        'هدفنا هو دعم أهداف الشركاء في تحسين القدرات اللوجستية وخفض تكاليف النقل ورفع جودة الخدمة.'
      ],
      principlesTag: 'القيم الأساسية',
      principlesTitle: 'مبادئنا التشغيلية',
      principles: [
        {
          title: 'الشراكة مع أصحاب المصلحة',
          desc: 'نضع أنفسنا كحلفاء موثوقين، ونعطي الأولوية للبساطة والاعتمادية ومصلحة العميل أولاً في كل تعاون.'
        },
        {
          title: 'تمكين القوى العاملة',
          desc: 'النجاح يبنى على الوحدة — نحن نعزز العمل الجماعي ونوفر أنظمة دعم قوية لكوادرنا.'
        },
        {
          title: 'الالتزام بالتميز',
          desc: 'عملياتنا ترتكز على المعايير الوطنية والدولية، مما يضمن الكفاءة والاتساق والسرعة في كافة الخدمات.'
        },
        {
          title: 'التوجه نحو المستقبل',
          desc: 'رؤية تقدمية واستراتيجيات موجهة نحو النمو والتكيف المستمر مع البنية التحتية واللوجستيات الرقمية.'
        },
        {
          title: 'الالتزام بالاستدامة',
          desc: 'نلتزم بالممارسات الأخلاقية والامتثال للأنظمة، مع دمج معايير حماية البيئة في عمليات النقل اليومية.'
        }
      ],
      processTag: 'إجراءات التشغيل القياسية',
      processTitle: 'إجراءات معالجة الطلبات',
      steps: [
        {
          num: '01',
          title: 'استلام الطلب والتخطيط',
          items: [
            'استلام تعليمات العميل وتفاصيل الطلب الداخلية',
            'التحقق من معلومات الطلب: نوع المنتج والكمية، وجهة التسليم والإطار الزمني، وأي متطلبات مناولة خاصة',
            'تحديد وسيلة النقل الأكثر كفاءة واقتصادية (بري، سكة حديد) ونوع الشاحنات المطلوبة',
            'جدولة تواريخ التسليم وتنسيق مراحل التحرك'
          ]
        },
        {
          num: '02',
          title: 'النقل والتقارير المرحلية',
          items: [
            'اختيار وسيلة النقل المناسبة بناءً على خطتنا اللوجستية الشاملة',
            'إعداد وتوثيق مستندات الشحن والتراخيص الجمركية اللازمة',
            'تخصيص الشاحنات والمقطورات المتوافقة مع أوزان وأبعاد البضائع',
            'الإشراف الاحترافي على تحميل البضائع على الشاحنات',
            'مشاركة تفاصيل التتبع المباشر وتقارير التحديث اليومية مع العميل'
          ]
        },
        {
          num: '03',
          title: 'التسليم وخدمة العملاء',
          items: [
            'تسليم البضائع إلى موقع العميل أو مركز التوزيع حسب التعليمات',
            'التعامل الفوري مع أي طارئ أثناء العبور وحل مشاكل التأخير',
            'توفير مساحات التخزين والمستودعات الجمركية عند الحاجة'
          ]
        },
        {
          num: '04',
          title: 'المراقبة والامتثال التنظيمي',
          items: [
            'تتبع مؤشرات الأداء الرئيسية وتحديد العقبات لتحسين الأداء المستمر',
            'ضمان امتثال كافة أنشطة الشحن للقوانين المحلية والاتفاقيات الدولية',
            'تدريب الكوادر على بروتوكولات السلامة عند التعامل مع الآلات الثقيلة أو المواد الحساسة',
            'الاحتفاظ بسجلات دقيقة وموثقة لأغراض التدقيق والتخليص'
          ]
        }
      ]
    },
    services: {
      badge: 'الخدمات',
      heroTitle: 'ملخص الخدمات',
      heroTitleHighlight: 'الرئيسية',
      heroTagline: 'نجعل نقل شحناتكم بسيطاً وموثوقاً وفعالاً.',
      mainServices: [
        {
          num: '01',
          title: 'نقل البضائع والشحن',
          desc: 'خدمات شاملة عبر الطرق البرية مصممة خصيصاً لتلبية متطلباتكم وجدولكم الزمني.',
          sub: 'نقل بري وسكك حديدية متعدد الوسائط'
        },
        {
          num: '02',
          title: 'التخليص الجمركي',
          desc: 'معالجة خبيرة لجميع وثائق الجمارك والبيانات النظامية والتوافق القانوني.',
          sub: 'إدارة الوثائق والأنظمة الجمركية'
        },
        {
          num: '03',
          title: 'التسليم النهائي (Last-Mile)',
          desc: 'حلول تسليم دقيقة تضمن وصول منتجاتكم إلى المصنع أو المستودع في الموعد المحدد.',
          sub: 'الاستلام والتسليم المباشر'
        }
      ],
      portSectionTag: 'عمليات الموانئ والجمارك',
      portHeadline: 'المناولة في الموانئ والتخليص الجمركي المحلي',
      bullet1: 'متخصصون في المناولة الفعالة في الموانئ والتخليص الجمركي المحلي السلس.',
      bullet2: 'التزام بالتميز مع حلول مخصصة للشحنات الأحادية والمتعددة الوسائط.',
      portHandlingTitle: 'المناولة في الموانئ',
      portHandlingItems: [
        'عمليات التحميل والتفريغ في محطات الموانئ البحرية وساحات الموانئ الجافة',
        'تتبع الشحنات المباشر ومراقبة الوضع الجمركي للبضائع المقيدة'
      ],
      customsTitle: 'التخليص الجمركي المحلي',
      customsItems: [
        'إدارة المستندات وإعداد الإقرارات الجمركية',
        'الامتثال التنظيمي: خبرة عميقة في قوانين وتعريفات الجمارك المحلية',
        'الرسوم والضرائب: استشارات مهنية لتسهيل الإفراج الجمركي الفوري'
      ],
      specialCargoTag: 'النقل الثقيل',
      specialCargoTitle: 'نقل الحمولات الفائقة الارتفاع والبضائع الخاصة',
      specialCargoDesc: 'قدرة نقل متخصصة للمعدات الرأسمالية، والهياكل الصناعية الضخمة، ومعدات المحطات الكهربائية، وبضائع المشاريع المنقولة من الموانئ إلى المواقع الداخلية.',
      specialCargoCta: 'استفسر عن البضائع الخاصة'
    },
    projects: {
      badge: 'المشاريع',
      heroTitle: 'المشاريع',
      heroTitleHighlight: 'المنفذة',
      heroTagline: 'نقل السلع الرأسمالية لأبرز مشاريع البنية التحتية والطاقة والصناعة في إثيوبيا.',
      sectionTag: 'نقل السلع الرأسمالية',
      headline: 'إنجازات وطنية كبرى',
      intro: 'لعبت شركتنا دوراً رئيسياً في نقل السلع الرأسمالية لبعض أبرز مشاريع البنية التحتية في إثيوبيا، مؤكدين التزامنا بالتميز والاعتمادية والمساهمة في التنمية الاقتصادية.',
      categories: {
        all: 'الكل',
        energy: 'الطاقة والتوليد',
        infrastructure: 'البنية التحتية',
        parks: 'المناطق الصناعية',
        special: 'بضائع خاصة'
      },
      projects: [
        {
          id: 'gerd',
          categoryKey: 'ENERGY & POWER',
          title: 'مشروع سد النهضة الإثيوبي الكبير (GERD)',
          location: 'قوبا، إقليم بني شنقول - قماز',
          client: 'البنية التحتية الوطنية / هيئة الطاقة الكهربائية الإثيوبية',
          cargo: 'معدات توليد الطاقة الكهرومائية والمعدات الرأسمالية',
          desc: 'النقل المتعدد الوسائط للآلات الحيوية ومعدات الهندسة المدنية ومكونات محطات التوليد عبر الممرات الوطنية الطويلة إلى موقع السد.',
          image: '/images/projects/gerd-dam.jpg',
          stats: 'موقع السد ومحطة قوبا',
          tags: ['نقل ثقيل', 'معدات هيدروليكية', 'مشروع قومي']
        },
        {
          id: 'ethiopian-airlines',
          categoryKey: 'NATIONAL INFRASTRUCTURE',
          title: 'مشاريع الدعم اللوجستي للخطوط الجوية الإثيوبية',
          location: 'مطار بولي الدولي بأديس أبابا والمحطات الإقليمية',
          client: 'مجموعة الخطوط الجوية الإثيوبية',
          cargo: 'معدات الدعم الأرضي للطائرات وبضائع المرافق الرأسمالية',
          desc: 'تخليص جمركي سريع وشحن بري للمعدات الأرضية للطيران وتجهيزات محطات الصيانة مع الالتزام التام بالجداول الزمنية الدقيقة.',
          image: '/images/projects/ethiopian-airlines-cargo.jpg',
          stats: 'مركز أديس أبابا الرئيسي',
          tags: ['شحن عاجل', 'مسار جمركي سريع', 'لوجستيات الطيران']
        },
        {
          id: 'gilgel-gibe',
          categoryKey: 'ENERGY & POWER',
          title: 'مشاريع توليد الطاقة في جيلجل جيبي',
          location: 'أوروميا والمناطق الجنوبية',
          client: 'شركة فويث هيدرو شنغهاي / سلطات الطاقة',
          cargo: 'توربينات التوليد، المولدات ومحولات المحطات الكهربائية',
          desc: 'نقل ثقيل لمكونات التوربينات والمحولات الضخمة عبر المنعطفات الجبلية الوعرة من ميناء جيبوتي إلى محطات التوليد الجنوبية.',
          image: '/images/projects/gilgel-gibe.jpg',
          stats: 'مرافقة المسارات الجبلية',
          tags: ['شريك فويث هيدرو', 'مقطورات منخفضة خاصة', 'عبور جبلي']
        },
        {
          id: 'power-transmission-cables',
          categoryKey: 'ENERGY & POWER',
          title: 'مشاريع توسعة شبكة الكهرباء والمحطات الفرعية الوطنية',
          location: 'على مستوى الدولة (حواسا، جيما، ميكيلي، بحر دار)',
          client: 'مؤسسة الكهرباء الإثيوبية (EEU) وكابلات TBEA',
          cargo: 'بكرات كابلات الجهد العالي والمحولات ومعدات الشبكة',
          desc: 'نقل وتوزيع منسق لبكرات كابلات نقل الطاقة عالية الجهد ومعدات المحطات الفرعية عبر شبكات التوزيع الإقليمية في إثيوبيا.',
          image: '/images/projects/electric-power.jpg',
          stats: 'ربط أكثر من 13 إقليماً',
          tags: ['شريك TBEA', 'جهد عالي', 'شبكة الكهرباء']
        },
        {
          id: 'industrial-parks',
          categoryKey: 'INDUSTRIAL PARKS',
          title: 'تشغيل أساطيل المناطق الصناعية الوطنية',
          location: 'حواسا، دوكيم، أداما، أريرتي، تولوفا، ديبري برهان',
          client: 'مؤسسة تطوير المناطق الصناعية (IPDC) والمصانع العالمية',
          cargo: 'آلات المصانع، معدات التصنيع والبضائع المعبأة في حاويات',
          desc: 'نقل مستمر للحاويات ومعدات المصانع يربط المناطق الصناعية بميناء مودجو الجاف ومحطة القطار وميناء جيبوتي.',
          image: '/images/projects/industrial-parks-corridor.jpg',
          stats: '6 مناطق صناعية كبرى',
          tags: ['تصنيع', 'نقل حاويات', 'ممرات تصدير']
        },
        {
          id: 'special-cargo',
          categoryKey: 'SPECIAL CARGO',
          title: 'نقل الحمولات الفائقة الأبعاد والوزن (OOG)',
          location: 'من ميناء جيبوتي إلى وسط وأقاليم إثيوبيا',
          client: 'سينوما، CCECC وسينوستيل',
          cargo: 'أوعية الضغط الثقيلة، أفران الأسمنت وروافد الجسور',
          desc: 'مقطورات هيدروليكية متعددة المحاور، ومسح هندسي للجسور وقوافل بحراسة أمنية للشحنات الخارجة عن المقاييس المعتادة.',
          image: '/images/projects/project-oog-kiln.jpg',
          stats: 'قافلة بتصاريح خاصة',
          tags: ['شحنات استثنائية', 'مقطورة هيدروليكية', 'نقل بمرافقة أمنية']
        }
      ],
      expertiseTag: 'النطاق الصناعي الاستراتيجي',
      expertiseTitle: 'خبرتنا في مجال النقل',
      expertiseDesc: 'أقمنا علاقات عمل وطيدة مع كبرى المؤسسات الوطنية، بما في ذلك مؤسسة الكهرباء الإثيوبية، وهيئة الطاقة الكهربائية، ووزارة المالية، وشركات الإنشاءات الوطنية.',
      parksTitle: 'عمليات المناطق الصناعية',
      parksSub: 'نقل متواصل للحاويات والمواد الخام ومعدات الإنتاج عبر 6 مراكز رئيسية:',
      parks: [
        { name: 'منطقة حواسا الصناعية', type: 'مركز النسيج والملابس', region: 'سيداما' },
        { name: 'منطقة دوكيم (Eastern Zone)', type: 'التصنيع الثقيل والتجميع', region: 'أوروميا' },
        { name: 'منطقة أداما الصناعية', type: 'الآلات والتصنيع الزراعي', region: 'أوروميا' },
        { name: 'منطقة أريرتي الصناعية', type: 'السيراميك ومواد البناء', region: 'أمهرة' },
        { name: 'منطقة تولوفا الصناعية', type: 'التصنيع والإنتاج الصناعي', region: 'أوروميا' },
        { name: 'منطقة ديبري برهان الصناعية', type: 'التصنيع وبضائع التصدير', region: 'أمهرة' }
      ],
      clientsTag: 'التعاون مع المؤسسات الوطنية:',
      clientNames: [
        'مؤسسة الكهرباء الإثيوبية (EEU)',
        'هيئة الطاقة الكهربائية الإثيوبية (EEP)',
        'وزارة المالية الإثيوبية',
        'شركات المقاولات والإنشاءات الوطنية'
      ],
      equipmentTitle: 'الخبرة بالمعدات التخصصية',
      equipmentSub: 'خبرة تشغيلية واسعة في نقل المعدات الثقيلة والمتخصصة والفائقة الوزن:',
      equipment: [
        { name: 'المعدات الثقيلة', detail: 'الحفارات، الرافعات الصناعية، آليات تحريك التربة وخطوط إنتاج المصانع' },
        { name: 'المولدات والمحولات الضخمة', detail: 'مولدات كهربائية صناعية عالية السعة ومحولات محطات توزيع الطاقة' },
        { name: 'الحمولات السائبة', detail: 'مواد البناء الخام، الشحنات الإنشائية، والبضائع الصناعية المعبأة' },
        { name: 'كابلات المشاريع الكبرى وملحقاتها', detail: 'بكرات كابلات نقل الجهد العالي ومعدات الشبكات الكهربائية (شريك TBEA)' },
        { name: 'المركبات التجارية المتحركة ذاتياً', detail: 'شاحنات الخدمات، شاحنات القطر الثقيل، ووحدات النقل التجاري' }
      ],
      locationsTag: 'الشبكة الوطنية الشاملة',
      locationsTitle: 'نطاق التغطية والخبرة الإقليمية',
      locationsDesc: 'قمنا بنقل البضائع والمواد والآلات الرأسمالية الثقيلة بنجاح إلى مختلف الأقاليم والمحافظات في إثيوبيا:',
      hubBadge: 'محطة / وجهة رئيسية',
      locationList: [
        'حواسا', 'ديري داوا', 'ديلا', 'بحر دار',
        'قوبا (سد النهضة)', 'أداما', 'أسيلا', 'جيما',
        'لاليبيلا', 'جيجيغا', 'ميكيلي', 'أديس أبابا',
        'كومبولتشا'
      ],
      experienceQuote1: 'أتاحت لنا خبرتنا العريقة في قطاع النقل واللوجستيات العمل بكفاءة عالية مع مختلف المجتمعات والثقافات في جميع أنحاء البلاد.',
      experienceQuote2: 'نحن فخورون بالتزامنا الصارم بالتسليم في المواعيد المحددة، وإنجاز المشاريع التعاقدية بدقة بغض النظر عن التحديات الجغرافية أو تعقيد المهام.',
      deliveredBadge: 'تم الإنجاز'
    },
    contact: {
      badge: 'اتصل بنا',
      heroTitle: 'طلب',
      heroTitleHighlight: 'ترحيل الشحنات',
      heroTagline: 'تنسيق مباشر مع مكتب العمليات في ميدان غورغوريوس، أديس أبابا.',
      formTitle: 'طلب ترحيل البضائع وعروض الأسعار المباشرة',
      formDesc: 'أدخل تفاصيل شحنتك أدناه. يتم توجيه الاستفسارات مباشرة إلى مكتب العمليات اللوجستية عبر satlogistics0001@gmail.com.',
      fullNameLabel: 'الاسم الكامل *',
      fullNamePlaceholder: 'مثال: أحمد عبد الله',
      companyLabel: 'اسم الشركة *',
      companyPlaceholder: 'مثال: شركة الإنشاءات الهندسية',
      emailLabel: 'البريد الإلكتروني *',
      emailPlaceholder: 'procurement@company.com',
      phoneLabel: 'رقم الهاتف المباشر * (مطلوب للاتصال)',
      phonePlaceholder: '+251 93 299 9977',
      serviceLabel: 'الخدمة المطلوبة',
      serviceOptions: [
        'الشحن الدولي وتوجيه البضائع (جيبوتي - إثيوبيا)',
        'التخليص الجمركي والمناولة في الموانئ',
        'نقل بضائع المشاريع الكبرى والحمولات الفائقة',
        'نقل الحاويات المخصص للمناطق الصناعية',
        'استشارات سلاسل التوريد والمسارات اللوجستية'
      ],
      originDestLabel: 'نقطة الانطلاق والوجهة',
      originDestPlaceholder: 'مثال: من ميناء جيبوتي إلى منطقة حواسا الصناعية',
      volumeLabel: 'الحجم / الوزن التقديري',
      volumePlaceholder: 'مثال: 4 حاويات 40 قدم أو مقطورة منخفضة 65 طن',
      detailsLabel: 'مواصفات الشحنة / متطلبات خاصة',
      detailsPlaceholder: 'أدخل أبعاد المعدات، مواعيد التسليم المطلوبة، أو أي متطلبات خاصة...',
      submitBtn: 'إرسال طلب الشحن',
      submittingBtn: 'جاري الإرسال إلى مكتب العمليات...',
      successTitle: 'تم إرسال طلب الشحن بنجاح',
      successDesc: 'تم تسجيل تفاصيل شحنتك بنجاح وإرسالها إلى مكتب العمليات اللوجستية التنفيذي عبر satlogistics0001@gmail.com.',
      dispatchRefLabel: 'الرقم المرجعي للشحنة',
      copyRefBtn: 'نسخ الرقم المرجعي',
      copiedBtn: 'تم النسخ!',
      sendAnotherBtn: 'تقديم طلب شحن آخر',
      callDirectBtn: 'الاتصال المباشر بمكتب العمليات',
      sidebarTitle: 'المقر التشغيلي الرئيسي',
      sidebarOfficeLabel: 'المكتب الرئيسي',
      sidebarOfficeValue: 'ميدان غورغوريوس، مبنى فتيلي الطابق الثالث، أديس أبابا، إثيوبيا',
      sidebarPhoneLabel: 'خطوط العمليات المباشرة',
      sidebarEmailLabel: 'البريد الإلكتروني الرسمي',
      sidebarHoursLabel: 'ساعات العمل الرسمية',
      sidebarHoursValue: 'الإثنين – السبت: 8:00 صباحاً – 6:00 مساءً (خدمات طوارئ 24/7 على الممرات النشطة)',
      directGmLabel: 'الإدارة التنفيذية'
    }
  },

  zh: {
    about: {
      badge: '关于我们',
      heroTitle: '我们是谁',
      heroTitleSub: 'SAT 物流与贸易有限公司',
      heroTagline: '通往埃塞俄比亚及周边地区无缝物流解决方案的卓越门户。',
      leadershipTag: '高管领导团队',
      foundedTitle: '成立于2023年',
      managerRole: '经理 / 总经理',
      bio1: 'SAT物流贸易有限公司致力于提供专业的货物运输和清关服务，确保货物从始发地到最终目的地的高效顺畅流动。',
      bio2: '在总经理塞缪尔·阿亚勒夫（Samuel Ayalew）的领导下，SAT已成为跨国工程承包商、国家公共事业集团和工业园区制造业企业穿行埃塞俄比亚贸易通道的首选物流合作伙伴。',
      qualificationsTag: '学术与专业资质',
      degreeLabel: '研究生学位',
      degreeValue: '文学硕士 (MA)',
      degreeField: '物流与供应链管理专业 (Logistics & Supply Chain Management)',
      competencyLabel: '核心专业领域',
      competencyValue: '跨境走廊综合物流',
      competencyField: '多式联运货运代理与清关合规体系架构',
      addressText: '埃塞俄比亚，亚的斯亚贝巴，戈尔戈里奥斯广场，费特勒大厦3楼',
      linkedinText: '在 LinkedIn 上联系塞缪尔·阿亚勒夫',
      capabilityTag: '运营卓越',
      capabilityTitle: '我们的团队实力',
      capabilityDesc: '我们的物流团队采用前瞻性策略，与客户紧密配合以预测路线风险并灵活应对现场变化，确保运输顺畅无阻并按时交付。',
      capabilities: [
        {
          tag: '走廊法规体系',
          title: '深厚本土经验',
          desc: '深刻理解埃塞俄比亚的交通法规、海关关税政策、公路与铁路多式联运走廊网络。',
          highlight: '埃塞-吉布提经济走廊及各大区'
        },
        {
          tag: '清关与单证协调',
          title: '高效无缝对接',
          desc: '精通前期申报流程，确保在干港与边境口岸实现极速清关、保税转运与规范单证流转。',
          highlight: '各大干港枢纽与边境关卡'
        },
        {
          tag: '主动风险防控',
          title: '创新策略与调度',
          desc: '与客户保持动态沟通，提前排查通道瓶颈，灵活调度避开延误，保障全天候平稳运转。',
          highlight: '全程主动式在途追踪监控'
        },
        {
          tag: '官方机构合作',
          title: '强大战略伙伴网络',
          desc: '与埃塞俄比亚海关总署、国家海运物流公司（ESLSE）及主要国际航运巨头建立坚实合作。',
          highlight: '政府部门、航运公司与货运同行'
        },
        {
          tag: '企业专属解决方案',
          title: '以客户为中心',
          desc: '根据各类企业的特殊货物属性、装卸标准及严苛工期，定制专属的一揽子合同物流方案。',
          highlight: '定制化大宗合同物流保障'
        },
        {
          tag: '特种大件重运',
          title: '重大项目工程运输能力',
          desc: '配备多轴重型低平板特种车队、沿途桥涵勘测队伍与警车护航编制，承运超高超宽设备。',
          highlight: '大型资本货物与基建装备'
        }
      ],
      overviewTag: '公司概况',
      overviewTitle: '埃塞俄比亚及周边地区领先的综合物流服务商',
      overviewDesc: 'SAT物流贸易有限公司是埃塞俄比亚领先的综合运输和供应链服务商，业务涵盖国际货运代理、进出口报关清关、以及大型工程项目货物特种运输。',
      mandateLabel: '公司宗旨',
      mandateText: '有效支持私营企业、跨国制造商和政府重点基础设施建设目标。',
      missionTag: '我们的使命',
      missionTitle: '覆盖广泛的工业垂直领域',
      missionPoints: [
        'SAT为制造业、能源生产、数据挖掘机柜、工业园区、光伏与风力电站、商贸零售、服装纺织及超限工程重货提供端到端物流保障。',
        '除货运代理外，我们还提供战略物流咨询服务，协助客户优化供应链并降低综合物流成本。',
        '我们的目标是助力各类企业提升物流通道保障能力、降低运输费率并提升服务质量。'
      ],
      principlesTag: '核心准则',
      principlesTitle: '我们的准则',
      principles: [
        {
          title: '与利益相关者携手共赢',
          desc: '我们将自己定位为值得信赖的盟友，在每一次合作中始终坚持极简、可靠和客户至上的服务理念。'
        },
        {
          title: '赋能优秀团队',
          desc: '成功基于团结协作 — 我们鼓励互助合作，并为全体员工提供强有力的支持保障体系。'
        },
        {
          title: '卓越品质驱动',
          desc: '各项运营严格对标国家与国际顶尖标准，确保所有物流环节的高效、稳定与快捷。'
        },
        {
          title: '面向未来发展',
          desc: '保持开拓进取的态度，紧跟数字化供应链发展步伐，不断提升现代化通道物流服务能力。'
        },
        {
          title: '坚守可持续发展',
          desc: '严格遵守商业道德与合规标准，在日常车队运营中积极融入环保与安全保障措施。'
        }
      ],
      processTag: '标准作业程序 (SOP)',
      processTitle: '订单处理与交付流程',
      steps: [
        {
          num: '01',
          title: '接单审核与方案规划',
          items: [
            '接收客户发运指令及详细货物清单',
            '核验订单关键信息：品名规格、数量体积、送达目的地、交期要求及特殊防护标准',
            '制定最具成本效益与时效优势的运输模式（公路/铁路）并指定车辆配置',
            '确定发运计划与各关键节点交货时间表'
          ]
        },
        {
          num: '02',
          title: '干线运输与在途汇报',
          items: [
            '依据物流实施方案调度优质运力与车队',
            '办理并核验全套进出口报关单证、完税凭据与通行许可',
            '根据货物尺寸与载重分配专属卡车与特种挂车',
            '现场专业监督装卸绑扎，确保防护合规',
            '为客户开放在途位置共享，每日定时推送运输进展日报'
          ]
        },
        {
          num: '03',
          title: '现场交付与客户保障',
          items: [
            '严格遵照指令将货物安全送达客户工地或指定分拨中心',
            '主动协同应对在途及通关异常，快速处理延误或货物问题',
            '根据项目进度需求协助安排中转保税仓储与露天堆场'
          ]
        },
        {
          num: '04',
          title: '全程监控与合规复盘',
          items: [
            '复核KPI关键指标，排查运营短板以实现持续优化',
            '确保各项操作完全符合埃塞俄比亚法律及国际货物运输合规标准',
            '对承运重型机械与危险货物的作业人员开展严格安全规程培训',
            '完备归档所有操作及报关单据，以备客户与官方审计核验'
          ]
        }
      ]
    },
    services: {
      badge: '服务体系',
      heroTitle: '核心业务',
      heroTitleHighlight: '概览',
      heroTagline: '让您的货物运输变得简单、可靠、高效。',
      mainServices: [
        {
          num: '01',
          title: '公路货运代理',
          desc: '覆盖全国公路网络的专业运力服务，量身定制满足您的运输规模与工期要求。',
          sub: '多式联运公路与铁路专线'
        },
        {
          num: '02',
          title: '报关清关服务',
          desc: '专家级处理全套清关报关文件、进口报关审核及法规合规手续。',
          sub: '单证规范与关务合规保障'
        },
        {
          num: '03',
          title: '最后一公里交付',
          desc: '精准高效的末端配送解决方案，确保货物准时送达工厂车间或指定堆场。',
          sub: '目的地验收与仓储交付'
        }
      ],
      portSectionTag: '港口作业与清关运营',
      portHeadline: '港口综合装卸与属地清关服务',
      bullet1: '专注提供高效的海港/干港装卸衔接与极速属地报关服务。',
      bullet2: '致力于为单一模式与多式联运货物打造量身定制的卓越物流解决方案。',
      portHandlingTitle: '港口装卸作业',
      portHandlingItems: [
        '海运码头及内陆干港货运站的高效装车与卸货作业',
        '货物实时状态监控与保税转运流程全天候跟踪'
      ],
      customsTitle: '属地高效清关',
      customsItems: [
        '单证全流程管理与电子报关单规范编制',
        '政策合规保障：深刻掌握本地海关法规与商品关税税则',
        '关税与增值税：专业协助快速核税缴税并顺利放行'
      ],
      specialCargoTag: '特种大件重运',
      specialCargoTitle: '超高及超限特殊工程货物运输',
      specialCargoDesc: '具备承运大型工业母机、超规钢结构件、变电站重型变压器及特种工程设备的综合车队运力，从海港码头安全直达内陆工程现场。',
      specialCargoCta: '咨询特种大件运输'
    },
    projects: {
      badge: '工程业绩',
      heroTitle: '重点交付',
      heroTitleHighlight: '工程项目',
      heroTagline: '承运埃塞俄比亚最瞩目的国家级基础设施、能源电站与工业园区重点工程货物。',
      sectionTag: '大型资本货物运输',
      headline: '国家重大工程参与历程',
      intro: '本公司在埃塞俄比亚多个国家标志性基础设施项目的资本货物运输中发挥了关键作用。通过这些工程的成功交付，展现了我们对卓越品质、信守承诺以及助力埃塞俄比亚经济建设的坚定决心。',
      categories: {
        all: '全部项目',
        energy: '能源与水电',
        infrastructure: '国家基础设施',
        parks: '工业园区',
        special: '特种大件'
      },
      projects: [
        {
          id: 'gerd',
          categoryKey: 'ENERGY & POWER',
          title: '埃塞俄比亚复兴大坝 (GERD) 重点工程',
          location: '本尚古勒-古穆兹州，古巴大坝现场',
          client: '国家重点基建 / 埃塞俄比亚电力公司 (EEP)',
          cargo: '重型水轮发电机部件与大型土木工程设备',
          desc: '跨越复杂内陆干线公路，将关键大型发电设备、重型施工机械安全护送至非洲最大的水电站大坝施工现场。',
          image: '/images/projects/gerd-dam.jpg',
          stats: '古巴变电站及大坝机房现场',
          tags: ['重型工程运输', '水电装备', '国家重点项目']
        },
        {
          id: 'ethiopian-airlines',
          categoryKey: 'NATIONAL INFRASTRUCTURE',
          title: '埃塞俄比亚航空保障项目物流',
          location: '亚的斯亚贝巴博莱国际机场及区域支线枢纽',
          client: '埃塞俄比亚航空集团 (Ethiopian Airlines)',
          cargo: '航站楼地面保障专用设备与机务保障机械',
          desc: '提供时效严苛的绿色通道极速清关、机坪货运代理及地面保障设备的高标准干线公路转运。',
          image: '/images/projects/ethiopian-airlines-cargo.jpg',
          stats: '亚的斯亚贝巴主航站枢纽',
          tags: ['时效特快', '清关绿色通道', '航空特种物流']
        },
        {
          id: 'gilgel-gibe',
          categoryKey: 'ENERGY & POWER',
          title: '吉尔格尔吉贝 (Gilgel Gibe) 系列水电项目',
          location: '奥罗米亚州及南部各州',
          client: '福伊特水电设备上海公司 (Voith Hydro) / 国家电力总局',
          cargo: '水轮机转轮、大型发电机组与主变压器',
          desc: '承运超限水轮机核心部件与大型电力变压器，克服山间崎岖发夹弯路况，从吉布提港直抵南部电站安装工位。',
          image: '/images/projects/gilgel-gibe.jpg',
          stats: '山区特种大件押运',
          tags: ['Voith合作方', '特种低平板车', '山区重运']
        },
        {
          id: 'power-transmission-cables',
          categoryKey: 'ENERGY & POWER',
          title: '国家电网输配电扩建与变电站工程',
          location: '全国多地（阿瓦萨、吉马、默克莱、巴赫达尔）',
          client: '埃塞俄比亚电力服务公司 (EEU) / 特变电工德阳电缆',
          cargo: '特高压电缆盘、大型瓷绝缘子与变电站成套硬件',
          desc: '为全国各区域输变电网统筹组织高压电缆盘与变电站设施的跨区域同步调度与卸车交付。',
          image: '/images/projects/electric-power.jpg',
          stats: '通达13个以上主要行政区',
          tags: ['特变电工合作', '高压电缆', '国家电网']
        },
        {
          id: 'industrial-parks',
          categoryKey: 'INDUSTRIAL PARKS',
          title: '国家重点工业园区车队专线直运',
          location: '阿瓦萨、杜凯姆、阿达玛、阿雷尔蒂、图卢法、德布雷贝尔汉',
          client: '埃塞工业园区发展公司 (IPDC) 及园区跨国企业',
          cargo: '生产线机械、重型装配装备与整箱进出口货物',
          desc: '组建全天候集装箱运输专线，将工业园区与莫约干港、铁路集装箱货运站及吉布提海运码头紧密衔接。',
          image: '/images/projects/industrial-parks-corridor.jpg',
          stats: '常态化覆盖6大国家级产业园',
          tags: ['制造业配套', '集装箱短驳', '外贸走廊']
        },
        {
          id: 'special-cargo',
          categoryKey: 'SPECIAL CARGO',
          title: '超高、超宽、超重 (OOG) 特种大件物流',
          location: '从吉布提海港至埃塞俄比亚中部及各大区工区',
          client: '中材建设 (Sinoma)、中铁建 (CCECC)、中钢集团 (Sinosteel)',
          cargo: '大型压力容器、回转窑筒体、桥梁预制钢桁架',
          desc: '采用特种液压多轴低平板挂车组合，实施桥涵荷载勘测，全程警力护航运输超限工业重货。',
          image: '/images/projects/project-oog-kiln.jpg',
          stats: '特种超限许可车队',
          tags: ['OOG专家', '液压轴线车', '警车护航']
        }
      ],
      expertiseTag: '战略业务广度',
      expertiseTitle: '专业运输实力与行业信誉',
      expertiseDesc: '我们与国内诸多大型机构建立了长期稳固的合作机制。业务案例包括与埃塞俄比亚电力服务公司、埃塞电力公司、财政部及大型建设总承包商的深入合作。',
      parksTitle: '工业园区专线运营',
      parksSub: '在全国6大重点枢纽提供不间断的集装箱、原材料与生产设备专线运输：',
      parks: [
        { name: '阿瓦萨工业园 (Hawassa)', type: '纺织与服装出口核心园区', region: '锡达马州' },
        { name: '杜凯姆东方工业园 (Dukem)', type: '重工制造、钢铁及总装园区', region: '奥罗米亚州' },
        { name: '阿达玛工业园 (Adama)', type: '机械制造与农产品深加工', region: '奥罗米亚州' },
        { name: '阿雷尔蒂工业园 (Arerti)', type: '陶瓷建材与玻璃深加工', region: '阿姆哈拉州' },
        { name: '图卢法工业园区 (Tulufa)', type: '工业制造与金属加工', region: '奥罗米亚州' },
        { name: '德布雷贝尔汉工业园 (Debrebirhan)', type: '综合制造与出口货物基地', region: '阿姆哈拉州' }
      ],
      clientsTag: '国家机构与企业合作案例：',
      clientNames: [
        '埃塞俄比亚电力服务公司 (EEU)',
        '埃塞俄比亚电力公司 (EEP)',
        '埃塞俄比亚联邦财政部',
        '国家骨干建筑工程承包集团'
      ],
      equipmentTitle: '特种设备运输经验',
      equipmentSub: '在运送大型重载、精密及非标特殊设备领域拥有广泛的实战经验：',
      equipment: [
        { name: '重型工程机械', detail: '履带式挖掘机、大型汽车吊、推土机及工厂整套生产流水线' },
        { name: '大型发电机与变压器', detail: '大容量工业应急发电机组、电网主变压器与箱式变电站' },
        { name: '大宗散装材料', detail: '建筑大宗原材料、工业集料及集装箱化散包装原料' },
        { name: '重大电网线缆及配套件', detail: '高压输电线路大直径电缆盘、复合绝缘子与金具（特变电工合作方）' },
        { name: '商用车自主驱动转运', detail: '全新工程自卸车、重卡牵引车及客运车队的批量配送' }
      ],
      locationsTag: '全国通达网络',
      locationsTitle: '服务覆盖范围与区域经验',
      locationsDesc: '我们的车队已将货物、关键工程物资和大型设备成功送达埃塞俄比亚各大重要经济区：',
      hubBadge: '货运枢纽 / 目的地',
      locationList: [
        '阿瓦萨 (Hawassa)', '德雷达瓦 (Dire Dawa)', '迪拉 (Dilla)', '巴赫达尔 (Bahir Dar)',
        '古巴 (GERD大坝)', '阿达玛 (Adama)', '阿塞拉 (Assela)', '吉马 (Jimma)',
        '拉利贝拉 (Lalibela)', '吉吉加 (Jijiga)', '默克莱 (Mekelle)', '亚的斯亚贝巴 (Addis Ababa)',
        '孔博勒查 (Kombolcha)'
      ],
      experienceQuote1: '我们在物流运输领域的深厚积累，使我们能够熟练协调埃塞俄比亚各地区不同文化与社区的通行要求。',
      experienceQuote2: '我们深以为傲的是始终恪守严谨的交付承诺，无论路况复杂或地理环境险峻，均严格按合同约定工期交付。',
      deliveredBadge: '圆满交付'
    },
    contact: {
      badge: '联系我们',
      heroTitle: '提交',
      heroTitleHighlight: '调度需求',
      heroTagline: '直接对接亚的斯亚贝巴戈尔戈里奥斯广场运营调度总台。',
      formTitle: '直接货物调度与报价申请',
      formDesc: '请在下方填写运输需求。所有信息将直接汇总并发送至调度中心官方邮箱 satlogistics0001@gmail.com。',
      fullNameLabel: '联系人姓名 *',
      fullNamePlaceholder: '例：张伟 / Daniel Haile',
      companyLabel: '公司名称 *',
      companyPlaceholder: '例：埃塞俄比亚工程建设集团',
      emailLabel: '企业邮箱 *',
      emailPlaceholder: 'procurement@company.com',
      phoneLabel: '直拨电话 * (必填，便于调度联系)',
      phonePlaceholder: '+251 93 299 9977',
      serviceLabel: '所需物流服务',
      serviceOptions: [
        '国际货运代理专线 (吉布提 - 埃塞俄比亚)',
        '进出口报关清关与港口装卸',
        '重大工程项目特种大件重运',
        '国家工业园区集装箱干线短驳',
        '供应链路径与走廊物流咨询'
      ],
      originDestLabel: '起运地与目的地',
      originDestPlaceholder: '例：吉布提海港 至 阿瓦萨工业园',
      volumeLabel: '预计货量 / 吨位',
      volumePlaceholder: '例：4个40尺高柜 或 65吨低平板特种车',
      detailsLabel: '货物规格 / 特殊运输要求',
      detailsPlaceholder: '请详细说明设备长宽高尺寸、期望交货日期或特殊装卸防护要求...',
      submitBtn: '立即发送调度请求',
      submittingBtn: '正在连接调度中心...',
      successTitle: '调度需求已成功发送',
      successDesc: '您的发运需求已成功登记并直达运营调度中心官方邮箱 satlogistics0001@gmail.com。',
      dispatchRefLabel: '调度追踪参考号',
      copyRefBtn: '复制参考号',
      copiedBtn: '已复制！',
      sendAnotherBtn: '提交新的发运咨询',
      callDirectBtn: '致电调度中心',
      sidebarTitle: '运营调度总部',
      sidebarOfficeLabel: '总部办公地址',
      sidebarOfficeValue: '埃塞俄比亚，亚的斯亚贝巴，戈尔戈里奥斯广场，费特勒大厦3楼',
      sidebarPhoneLabel: '24小时调度热线',
      sidebarEmailLabel: '公司官方业务邮箱',
      sidebarHoursLabel: '工作时间',
      sidebarHoursValue: '周一至周六：8:00 AM – 6:00 PM（重要通道提供24小时全天候应急支持）',
      directGmLabel: '管理层直线'
    }
  }
};


