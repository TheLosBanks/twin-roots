// Single source of truth for Twin Roots Psychotherapy.
// Every page, component, and schema reads from here.

export const brand = {
  name: "Twin Roots Psychotherapy",
  shortName: "Twin Roots",
  domain: "twinrootspsychotherapy.com",
  tagline: "Rooted care for the season of becoming a parent.",
  therapist: {
    name: "Dr. Heather St. Jean-Garcia",
    credentials: "Psy.D., LMFT #53811",
    license: "CA LMFT #53811",
    title: "Licensed Marriage & Family Therapist",
  },
  location: {
    city: "San Diego County, CA",
    serves: "Telehealth across California, and in-person in La Mesa, CA",
  },
  contact: {
    email: "heather@twinrootspsychotherapy.com",
    portalLabel: "Book a Consultation",
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Approach", href: "/approach" },
    { label: "Contact", href: "/contact" },
  ],

  // Hero
  hero: {
    eyebrow: "Perinatal & postpartum therapy",
    heading: "You do not have to carry this alone.",
    body:
      "Becoming a parent can hold joy and grief in the same breath. Twin Roots is a safe, grounded space for the pregnancy and postpartum season, for NICU and loss, and for the tender work of finding yourself again.",
  },

  // Specialties (the heart of the practice)
  specialties: [
    {
      icon: "sunrise",
      title: "Postpartum Depression & Anxiety",
      image: "/services/postpartum.jpg",
      imageAlt: "A mother holding and feeding her newborn on a couch",
      body:
        "Support for the overwhelm, intrusive thoughts, and heaviness that can follow birth. You are not broken, and you are not alone.",
    },
    {
      icon: "seedling",
      title: "Pregnancy & Prenatal Support",
      image: "/services/prenatal.jpg",
      imageAlt: "A pregnant woman talking with a therapist",
      body:
        "Care for the worries, changes, and big feelings that come with carrying and preparing for a baby.",
    },
    {
      icon: "heart",
      title: "NICU Parents",
      image: "/services/nicu.jpg",
      imageAlt: "A newborn resting in a NICU bed",
      body:
        "A place to process the fear and helplessness of the NICU, held by someone who has lived it.",
    },
    {
      icon: "bloom",
      title: "Pregnancy & Infant Loss",
      image: "/services/loss.jpg",
      imageAlt: "Cupped hands holding a soft light",
      body:
        "Compassionate space for bereaved parents to grieve, remember, and slowly find footing again.",
    },
    {
      icon: "twins",
      title: "Parents of Multiples",
      image: "/services/multiples.jpg",
      imageAlt: "A mother holding her newborn twins",
      body:
        "The unique load of twins and multiples is real. Support built around the reality of more than one.",
    },
    {
      icon: "growth",
      title: "Individual Therapy",
      image: "/services/individual.jpg",
      imageAlt: "A therapist listening to a client in session",
      body:
        "Beyond the perinatal season, ongoing support for anxiety, life transitions, and reconnecting with yourself.",
    },
  ],

  // Approach / philosophy
  approach: {
    heading: "Care that starts with being understood.",
    lead:
      "My work is shaped by my own story. I am a mother of twins who spent time in the NICU, and a survivor of postpartum depression. I know this terrain from the inside.",
    points: [
      {
        title: "Lived experience, not just training",
        body:
          "You will not have to over-explain the fear, the exhaustion, or the guilt. It is met with recognition.",
      },
      {
        title: "A safe, unhurried space",
        body:
          "No performing, no pretending you are fine. Just an honest place to set things down.",
      },
      {
        title: "Practical and compassionate",
        body:
          "Real tools for real days, paired with the warmth that makes them possible to use.",
      },
    ],
  },

  // About
  about: {
    heading: "Meet Dr. Heather St. Jean-Garcia",
    paragraphs: [
      "I am a licensed Marriage and Family Therapist (Psy.D., LMFT #53811) based in San Diego County. I offer telehealth to clients anywhere in California, and in-person sessions in La Mesa.",
      "My passion for perinatal mental health is deeply personal. As a mother of twins who spent time in the NICU, and as a survivor of postpartum depression, I understand how isolating and frightening this season can feel, and how much it helps to be truly understood.",
      "I consider my office a safe space for NICU and bereaved parents, and I am honored to walk alongside individuals through pregnancy, postpartum, loss, and the ongoing work of caring for themselves while caring for others.",
      "While perinatal mental health is the heart of my practice, I also welcome clients seeking support with anxiety, life transitions, and individual growth.",
    ],
  },

  // Reassurance strip
  trust: [
    "Licensed Psy.D., LMFT #53811",
    "Telehealth in CA + in-person in La Mesa",
    "Perinatal mental health focus",
    "Lived experience with the NICU & PPD",
  ],
} as const;
