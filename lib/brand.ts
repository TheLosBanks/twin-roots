// Single source of truth for Twin Roots Psychotherapy.
// Every page, component, and schema reads from here.

export const brand = {
  name: "Twin Roots Psychotherapy",
  shortName: "Twin Roots",
  domain: "twinrootspsychotherapy.com",
  tagline: "Rooted care for the season of becoming a parent.",
  therapist: {
    name: "Dr. Heather St. Jean-Garcia",
    credentials: "Psy.D., LMFT",
    license: "CA LMFT #53811",
    title: "Licensed Marriage & Family Therapist",
  },
  location: {
    city: "San Diego, CA",
    serves: "Telehealth for clients across California",
  },
  contact: {
    email: "hello@twinrootspsychotherapy.com",
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
      body:
        "Support for the overwhelm, intrusive thoughts, and heaviness that can follow birth. You are not broken, and you are not alone.",
    },
    {
      icon: "seedling",
      title: "Pregnancy & Prenatal Support",
      body:
        "Care for the worries, changes, and big feelings that come with carrying and preparing for a baby.",
    },
    {
      icon: "heart",
      title: "NICU Parents",
      body:
        "A place to process the fear and helplessness of the NICU, held by someone who has lived it.",
    },
    {
      icon: "bloom",
      title: "Pregnancy & Infant Loss",
      body:
        "Compassionate space for bereaved parents to grieve, remember, and slowly find footing again.",
    },
    {
      icon: "twins",
      title: "Parents of Multiples",
      body:
        "The unique load of twins and multiples is real. Support built around the reality of more than one.",
    },
    {
      icon: "growth",
      title: "Individual Therapy",
      body:
        "Beyond the perinatal season, ongoing support for anxiety, life transitions, and reconnecting with yourself.",
    },
  ],

  // Approach / philosophy
  approach: {
    heading: "Care that starts with being understood.",
    lead:
      "Heather's work is shaped by her own story: a mother of twins who spent time in the NICU, and a survivor of postpartum depression. She knows this terrain from the inside.",
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
      "Heather is a licensed Marriage and Family Therapist (Psy.D., LMFT #53811) based in San Diego, offering telehealth to clients across California.",
      "Her passion for perinatal mental health is deeply personal. As a mother of twins who spent time in the NICU, and as a survivor of postpartum depression, she understands how isolating and frightening this season can feel, and how much it helps to be truly understood.",
      "She considers her office a safe space for NICU and bereaved parents, and is honored to walk alongside individuals through pregnancy, postpartum, loss, and the ongoing work of caring for themselves while caring for others.",
      "While perinatal mental health is the heart of her practice, Heather also welcomes clients seeking support with anxiety, life transitions, and individual growth.",
    ],
  },

  // Reassurance strip
  trust: [
    "Licensed Psy.D., LMFT",
    "Telehealth across California",
    "Perinatal mental health focus",
    "Lived experience with the NICU & PPD",
  ],
} as const;
