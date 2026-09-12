// Single source of truth for Twin Roots Psychotherapy.
// Every page, component, and schema reads from here.

export const brand = {
  name: "Twin Roots Psychotherapy",
  shortName: "Twin Roots",
  domain: "twinrootspsychotherapy.com",
  tagline: "Rooted care for the season of becoming a parent.",
  // Heather's line, for the footer only. brand.tagline stays descriptive
  // because it doubles as the Open Graph description.
  footerTagline:
    "Why Twin Roots Psychotherapy? Because someone needs to help untangle the roots.",
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
    portalLabel: "Get in Touch",
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Approach", href: "/approach" },
    { label: "Resources", href: "/resources" },
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
      imagePos: "object-top",
      imageAlt: "A mother holding and feeding her newborn on a couch",
      body:
        "Support for the overwhelm, intrusive thoughts, and heaviness that can follow birth. You are not broken, and you are not alone.",
    },
    {
      icon: "seedling",
      title: "Pregnancy & Prenatal Support",
      image: "/services/prenatal.jpg",
      imagePos: "object-top",
      imageAlt: "A pregnant woman talking with a therapist",
      body:
        "Care for the worries, changes, and big feelings that come with carrying and preparing for a baby.",
    },
    {
      icon: "heart",
      title: "NICU Parents",
      image: "/services/nicu.jpg",
      imagePos: "object-center",
      imageAlt: "A newborn resting in a NICU bed",
      body:
        "A place to process the fear and helplessness of the NICU, held by someone who has lived it.",
    },
    {
      icon: "bloom",
      title: "Pregnancy & Infant Loss",
      image: "/services/loss.jpg",
      imagePos: "object-center",
      imageAlt: "Cupped hands holding a soft light",
      body:
        "Compassionate space for bereaved parents to grieve, remember, and slowly find footing again.",
    },
    {
      icon: "twins",
      title: "Parents of Multiples",
      image: "/services/multiples.jpg",
      imagePos: "object-center",
      imageAlt: "A mother holding her newborn twins",
      body:
        "The unique load of twins and multiples is real. Support built around the reality of more than one.",
    },
    {
      icon: "growth",
      title: "Individual Therapy",
      image: "/services/individual.jpg",
      imagePos: "object-top",
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

  // Clinical modalities, in Heather's own words. Illustrations are hers too.
  modalities: [
    {
      slug: "humanistic",
      title: "Humanistic / Person-Centered Therapy",
      image: "/approach/humanistic.jpg",
      imageAlt:
        "Two women in armchairs assembling a heart-shaped puzzle that reads: your story matters, your strengths matter, you are enough, a more authentic you",
      paragraphs: [
        "At the heart of my practice is the belief that you already possess strengths and insight that can help you grow. My role is not to tell you who you should be or how you should live your life.",
        "Instead, I strive to create a genuine, accepting, and nonjudgmental space where you can safely explore your thoughts, emotions, relationships, and experiences. Through empathy, authenticity, and connection, we work together to deepen your self-awareness and help you make choices that feel more aligned with who you are and who you want to become.",
      ],
    },
    {
      slug: "motivational-interviewing",
      title: "Motivational Interviewing",
      image: "/approach/motivational-interviewing.jpg",
      imageAlt:
        "A woman climbing steps labeled explore, clarify, find your own reasons, and take action, toward a brighter you",
      paragraphs: [
        "Sometimes you know something in your life could change, but you are not quite sure whether you are ready. That is okay. Therapy does not have to begin with having all the answers or even knowing exactly what you want to change.",
        "Using Motivational Interviewing, I help you explore uncertainty without judgment or pressure. Together, we can look at what matters most to you, what might be holding you back, and what change could look like when you are ready. You remain in control of your choices while I help you discover your own reasons and motivation for moving forward.",
      ],
    },
    {
      slug: "cbt",
      title: "Cognitive Behavioral Therapy (CBT)",
      image: "/approach/cbt.jpg",
      imageAlt:
        "Two women in session with a diagram linking thoughts, feelings, and behaviors in a cycle",
      paragraphs: [
        "Pregnancy, postpartum, and parenthood can bring emotions you never expected. Anxiety, sadness, guilt, intrusive thoughts, or feeling like you are somehow not doing this right can become overwhelming.",
        "Using CBT, we explore connections between your thoughts, emotions, and behaviors. Together, we identify patterns that may be contributing to distress and develop healthier, more compassionate ways of responding. My goal is to help you navigate this season with practical coping skills, greater self-awareness, and more confidence in yourself.",
      ],
    },
    {
      slug: "erp",
      title: "Exposure and Response Prevention (ERP) for OCD",
      image: "/approach/erp.jpg",
      imageAlt:
        "A woman standing calmly with her palms out, holding back storm clouds of anxious what-if thoughts",
      paragraphs: [
        "OCD can leave you feeling stuck in a cycle of intrusive thoughts, anxiety, and behaviors meant to provide relief. ERP helps you gradually face those uncomfortable thoughts, feelings, or situations while learning to respond differently instead of relying on compulsions.",
        "We move at a pace that feels manageable while building your confidence in handling uncertainty and discomfort. My goal is not to eliminate every unwanted thought. Instead, we work toward helping you feel less controlled by OCD so you can focus more fully on what matters in your life.",
      ],
    },
  ],

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

  // Insurance accepted. Add a plan by adding a line here; the pills render from this.
  // Insurance routes through two booking platforms. Anthem, Blue Shield and
  // Cigna are on BOTH, and Octave reimburses better, so those are listed ONLY
  // under Octave to steer people there first. Tricare is on neither and stays
  // direct with Heather.
  insurance: {
    heading: "Insurance accepted",
    lead:
      "Find your plan below and book directly. Coverage varies, so benefits are verified before your first session.",
    groups: [
      {
        id: "octave",
        title: "Book through Octave",
        url: "https://www.findoctave.com/therapist/1013239730/heather-st-jean-garcia?state=california",
        ctaLabel: "Schedule on Octave",
        plans: [
          { name: "Anthem Blue Cross of California" },
          { name: "Blue Shield of California" },
          { name: "Cigna Healthcare / Evernorth" },
          { name: "Centivo" },
          { name: "Out-of-State BlueCard PPO" },
        ],
      },
      {
        id: "headway",
        title: "Book through Headway",
        url: "https://care.headway.co/providers/heather-st-jean-garcia",
        ctaLabel: "Schedule on Headway",
        plans: [
          { name: "Aetna" },
          { name: "Carelon Behavioral Health", note: "serves Scripps Health Plan" },
          { name: "Health Net" },
        ],
        selfPay: {
          label: "Self-pay rate",
          rate: "$175",
          unit: "per session",
        },
      },
    ],
    direct: {
      plans: [{ name: "Tricare Select PPO", note: "with superbill" }],
      note: "Tricare is billed directly with me rather than through a platform. Send a note and we will get you started.",
    },
    footnote:
      "Not on this list? Ask about a superbill you can submit to your plan for out-of-network reimbursement.",
  },

  // Books & resources. Plain Amazon links, no affiliate tags: Heather earns
  // author royalties either way, and a clinician's site taking commission on
  // what she recommends is a decision she has not made yet. Other people's
  // books (with affiliate links) come later, and will need an FTC disclosure.
  resources: {
    heading: "Books & Resources",
    lead: "Things I have helped make, and things I point people toward.",
    leadSecondLine: "More coming as I add to this page.",
    // Written from scratch, not adapted from Well-Mamas' version. Covers the
    // same required ground (commission, clinical independence, no obligation,
    // who to ask) in her own first-person voice. Accurate today: nothing here
    // is an affiliate link yet, and she co-wrote one of the two books.
    disclosure: {
      heading: "About these links",
      paragraphs: [
        {
          title: "What I earn",
          body:
            "The I AM Alphabet is a book I co-wrote, so I earn author royalties when a copy sells. If I ever add books by other people to this page, some of those links may be affiliate links, meaning I could earn a small commission when you buy through them. In either case the price you pay is exactly the same.",
        },
        {
          title: "Why that does not change what I recommend",
          body:
            "Anything I point you toward is here because I think it might genuinely help. I do not choose what to recommend based on what it pays, and I would take something down if it stopped being useful regardless of what it earned.",
        },
        {
          title: "You are never expected to buy anything",
          body:
            "None of this is part of treatment. Borrow it from the library, get it secondhand, or skip it entirely. Nothing about our work together depends on it.",
        },
      ],
      contactLead: "Questions about any of this are welcome. Email me at",
    },
    books: [
      {
        slug: "iam-alphabet",
        title: "The I AM Alphabet",
        subtitle: "Positive Affirmations from A to Z",
        image: "/books/iam-alphabet.jpg",
        byline: "Heather Garcia, Carlos Garcia Jr., Arif Setiadi, Jessica Milton",
        blurb:
          "A picture book that walks children through the alphabet one affirmation at a time, so the words they learn about themselves are kind ones.",
        links: [
          { label: "Amazon paperback", url: "https://www.amazon.com/dp/1735916617" },
          {
            label: "Hardcover on Lulu",
            url: "https://www.lulu.com/shop/heather-garcia-and-carlos-garcia-jr-and-arif-setiadi-and-jessica-milton/the-i-am-alphabet/hardcover/product-v7kmp5.html",
          },
        ],
      },
      {
        slug: "iam-coloring",
        title: "The I AM Alphabet Coloring Book",
        subtitle: "Positive Affirmations from A to Z",
        image: "/books/iam-coloring.jpg",
        byline: "Los Garcia",
        blurb:
          "The companion coloring book. Same affirmations, with room for a child to sit with each one and make it theirs.",
        links: [
          { label: "Amazon paperback", url: "https://www.amazon.com/dp/1735916633" },
        ],
      },
    ],
  },

  // Reassurance strip
  trust: [
    "Licensed Marriage & Family Therapist #53811",
    "Telehealth in CA + in-person in La Mesa",
    "Perinatal mental health focus",
    "Lived experience with the NICU & PPD",
  ],
} as const;
