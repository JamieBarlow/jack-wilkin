<div align="center">
  <h1>Website for client: JFW Counselling :closed_book:</h1>
  <strong>By Jamie Barlow</strong>
</div>

## Purpose / Background :bulb:

A website for Jack Wilkin to advertise his counselling services, either face to face in Oxford or online. The site was launched on 02/10/25.

Jack would like to portray that he is a qualified, BACP-proved counsellor with an integrative approach, combining different therapeutic approaches to best suit the individual. He is also experienced at offering support for neurodivergent individuals and those identifying as LGBTQ+.

He would like the website design to be clear, informative and meet accessibility standards for dyslexic / screen reader users, and so expect this to be factored into the design. He would like potential clients to be able to easily get in touch via sign up form.

The client was introduced via my usual onboarding process:
- One-to-one meet followed by requirements gathering and exploration of potential solutions for the client;
- Project brief/proposal and contract;
- Intake questionnaire, shared dashboard for tracking project milestones, inspiration bank, content guidelines & brand assets, tasks due (e.g. signup to domain and other services/integrations)


## Project scope and features :heavy_check_mark:

- Full Site Design: A responsive, user-centered design comprising 3-5 pages, designed and presented in Figma with opportunity for feedback and revision;
- Content modelling and management via CMS integration (Contentful), with copy and media provided and updated by Jack, showcasing his brand and services;
- Sign up / contact capture with Airtable integration for contact management, and automated email notification;
- Pre-launch testing across devices and browsers to ensure responsive design and resolve any technical issues.
- Ongoing Support: Initial handover training provided, along with ongoing maintenance, performance optimisation and technical support.
  

## Technologies :floppy_disk:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Headless CMS (Contentful)
- Light CRM integration (Airtable)
- Map integration (Leaflet)

## Development Challenges and Lessons :wrench:

- Learned the value of setting up Next.js API routes for cleaner data handling patterns (e.g. integrating Airtable) for clear separation of component and controller logic;
- Developed a clearer understanding of Next.js client vs. server components and the tradeoffs between server-side rendering (SSR) and static site generation (SSG). To address the need for fresh CMS content, I initially disabled caching (`revalidate = 0`) and leaned on SSR, with a roadmap to move towards Incremental Static Regeneration (ISR) for faster delivery, improved cacheability, and stronger SEO. 
- Developed a stronger understanding of content modelling and data fetching in a headless CMS + Next.js environment, including how to structure content for flexibility and scalability.  

Some of the upcoming features and improvements (listed below) needed to be pushed to post-launch, since the closure of local services necessitated launching the site as early as possible. Priority was therefore initially placed on MVP features - core design and functionality such as: testing responsiveness across devices, 

## Post-launch roadmap :hourglass:

Planned enhancements post-launch include:  

- Client-customisable contact form (integrated with existing Airtable DB) using Airtable form build and API;
- SEO optimisation;
- Further image optimisation;
- Incremental Static Regeneration (ISR) for more efficient CMS content updates.  
- Improved data fetching patterns;
- Page transition and sidebar UX refinements;
