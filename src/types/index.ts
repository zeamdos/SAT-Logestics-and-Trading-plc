export type Language = 'en' | 'am' | 'ar' | 'zh';

export type NavItem = 'home' | 'about' | 'services' | 'projects' | 'contact';

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
    quoteBtn: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
    stat4Label: string;
    stat4Value: string;
  };
  about: {
    sectionTag: string;
    headline: string;
    overview: string;
    missionTag: string;
    missionHeadline: string;
    missionItems: string[];
    purposeTag: string;
    purposeHeadline: string;
    purposeFoundedNote: string;
    purposeMission: string;
    principlesTag: string;
    principlesHeadline: string;
    principles: { title: string; desc: string }[];
    capabilityTag: string;
    capabilityHeadline: string;
    capabilities: { title: string; desc: string }[];
    projectsTag: string;
    projectsHeadline: string;
    projectsDesc: string;
    projectsList: string[];
    activePartnersTag: string;
    customersTag: string;
    customersHeadline: string;
    customersSubheadline: string;
  };
  projects: {
    sectionTag: string;
    headline: string;
    subheadline: string;
    intro: string;
    experienceTag: string;
    experienceHeadline: string;
    experiencePoints: string[];
    coverageTag: string;
    coverageHeadline: string;
    coverageDesc: string;
    locations: string[];
    items: {
      title: string;
      sector: string;
      scope: string;
      cargo: string;
      description: string;
      highlights: string[];
    }[];
    partnersTag: string;
    partnersHeadline: string;
    partnersDesc: string;
    partners: string[];
  };
  services: {
    sectionTag: string;
    headline: string;
    subheadline: string;
    items: {
      id: string;
      code: string;
      title: string;
      subtitle: string;
      description: string;
      specs: string[];
      kpi: string;
      includesTitle?: string;
      idealFor?: string[];
    }[];
    processTag?: string;
    processHeadline?: string;
    processSteps?: { title: string; desc: string }[];
    capabilitiesTag?: string;
    capabilitiesHeadline?: string;
    capabilityCards?: { title: string; desc: string; points: string[] }[];
  };
  contact: {
    sectionTag: string;
    headline: string;
    subheadline: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      cargoTypeLabel: string;
      cargoTypes: string[];
      volumeLabel: string;
      volumePlaceholder: string;
      originDestLabel: string;
      originDestPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successMsg: string;
    };
    location: {
      buildingTitle: string;
      buildingName: string;
      addressLine1: string;
      addressLine2: string;
      coordinates: string;
      hoursTitle: string;
      hours: string;
      phoneTitle: string;
      phone: string;
      emailTitle: string;
      email: string;
      mapNotice: string;
    };
  };
  footer: {
    tagline: string;
    registration: string;
    licensing: string;
    copyright: string;
    backToTop: string;
  };
}
