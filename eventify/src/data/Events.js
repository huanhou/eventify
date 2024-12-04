const events = [
  {
    id: 1,
    name: "Music Festival",
    date: "2023-12-05",
    location: "New York, USA",
    image: "/music.jpg",
    description:
      "Join us for an exciting music festival with live performances.",
    category: "Music",
    isFree: false,
    tags: ["Live Music", "Festival", "Concert"],
    organizer: "Music Mania Co.",
    attendees: 200,
    ticketOptions: [
      { type: "Regular", price: 50 },
      { type: "VIP", price: 100 },
    ],
  },
  {
    id: 2,
    name: "Tech Conference",
    date: "2024-01-15",
    location: "San Francisco, USA",
    image: "tech.jpg",
    description: "Discover the latest trends and innovations in technology.",
    category: "Tech",
    isFree: false,
    tags: ["Technology", "Innovation", "Conference"],
    organizer: "TechWorld Inc.",
    attendees: 150,
    ticketOptions: [
      { type: "Standard", price: 80 },
      { type: "Premium", price: 150 },
    ],
  },
  {
    id: 3,
    name: "Art Exhibition",
    date: "2024-02-10",
    location: "Los Angeles, USA",
    image: "art.jpg",
    description: "Explore the world of modern art and creativity.",
    category: "Art",
    isFree: true,
    tags: ["Art", "Exhibition", "Creativity"],
    organizer: "Art Hub",
    attendees: 300,
    ticketOptions: [],
  },
  {
    id: 4,
    name: "Food Carnival",
    date: "2024-03-20",
    location: "Chicago, USA",
    image: "food.jpg",
    description: "Indulge in culinary delights from around the world.",
    category: "Food",
    isFree: true,
    tags: ["Food", "Carnival", "Cuisine"],
    organizer: "Taste Buds Inc.",
    attendees: 400,
    ticketOptions: [],
  },
  {
    id: 5,
    name: "Startup Meetup",
    date: "2024-04-25",
    location: "Austin, USA",
    image: "business.jpg",
    description: "Connect with industry leaders and entrepreneurs.",
    category: "Business",
    isFree: false,
    tags: ["Startup", "Business", "Networking"],
    organizer: "Startup Society",
    attendees: 100,
    ticketOptions: [
      { type: "General Admission", price: 40 },
      { type: "VIP", price: 80 },
    ],
  },
  {
    id: 6,
    name: "Book Fair",
    date: "2024-05-15",
    location: "Seattle, USA",
    image: "books.jpg",
    description: "Discover books from various genres and meet authors.",
    category: "Books",
    isFree: true,
    tags: ["Books", "Literature", "Authors"],
    organizer: "Readology",
    attendees: 250,
    ticketOptions: [],
  },
  {
    id: 7,
    name: "Yoga Retreat",
    date: "2024-06-10",
    location: "Denver, USA",
    image: "business.jpg",
    description: "Relax and rejuvenate with yoga and meditation sessions.",
    category: "Health",
    isFree: false,
    tags: ["Yoga", "Wellness", "Health"],
    organizer: "Zen Retreats",
    attendees: 150,
    ticketOptions: [
      { type: "Standard", price: 60 },
      { type: "Full Experience", price: 120 },
    ],
  },
  {
    id: 8,
    name: "Gaming Tournament",
    date: "2024-08-20",
    location: "Las Vegas, USA",
    image: "tech.jpg",
    description: "Compete or watch top gamers battle it out.",
    category: "Gaming",
    isFree: false,
    tags: ["Gaming", "Competition", "E-Sports"],
    organizer: "Gamer's Arena",
    attendees: 500,
    ticketOptions: [
      { type: "Spectator", price: 20 },
      { type: "Participant", price: 80 },
    ],
  },
  {
    id: 9,
    name: "Charity Gala",
    date: "2024-09-30",
    location: "Boston, USA",
    image: "business.jpg",
    description: "Support a cause and enjoy an elegant evening.",
    category: "Charity",
    isFree: false,
    tags: ["Charity", "Gala", "Fundraiser"],
    organizer: "Helping Hands",
    attendees: 120,
    ticketOptions: [
      { type: "Standard", price: 100 },
      { type: "Table for 10", price: 1000 },
    ],
  },
  {
    id: 10,
    name: "Film Screening",
    date: "2024-10-15",
    location: "Hollywood, USA",
    image: "business.jpg",
    description: "Experience exclusive screenings of award-winning films.",
    category: "Entertainment",
    isFree: false,
    tags: ["Films", "Movies", "Screening"],
    organizer: "Hollywood Studios",
    attendees: 180,
    ticketOptions: [
      { type: "General Admission", price: 20 },
      { type: "VIP", price: 50 },
    ],
  },
  {
    id: 11,
    name: "Dance Workshop",
    date: "2024-11-05",
    location: "Atlanta, USA",
    image: "business.jpg",
    description: "Learn the art of dance from professionals.",
    category: "Performing Arts",
    isFree: true,
    tags: ["Dance", "Workshop", "Performing Arts"],
    organizer: "Dance Academy",
    attendees: 80,
    ticketOptions: [],
  },
  {
    id: 12,
    name: "Photography Expo",
    date: "2024-11-20",
    location: "Portland, USA",
    image: "tech.jpg",
    description: "Showcase and discover stunning photography exhibits.",
    category: "Art",
    isFree: true,
    tags: ["Photography", "Expo", "Art"],
    organizer: "PhotoHub",
    attendees: 200,
    ticketOptions: [],
  },
  {
    id: 13,
    name: "Marathon",
    date: "2024-12-10",
    location: "Dallas, USA",
    image: "tech.jpg",
    description: "Run for health and charity in this annual marathon.",
    category: "Health",
    isFree: false,
    tags: ["Marathon", "Health", "Sports"],
    organizer: "FitLife",
    attendees: 300,
    ticketOptions: [
      { type: "Standard", price: 30 },
      { type: "Premium", price: 60 },
    ],
  },
  {
    id: 14,
    name: "Music Workshop",
    date: "2025-01-05",
    location: "Nashville, USA",
    image: "music.jpg",
    description: "Learn musical instruments and techniques.",
    category: "Music",
    isFree: false,
    tags: ["Music", "Workshop", "Learning"],
    organizer: "Music Masters",
    attendees: 50,
    ticketOptions: [
      { type: "Standard", price: 50 },
      { type: "VIP", price: 100 },
    ],
  },
  {
    id: 15,
    name: "Science Fair",
    date: "2025-03-20",
    location: "Houston, USA",
    image: "tech.jpg",
    description: "Explore scientific innovations and projects.",
    category: "Education",
    isFree: true,
    tags: ["Science", "Fair", "Education"],
    organizer: "Innovators Club",
    attendees: 400,
    ticketOptions: [],
  },
  {
    id: 16,
    name: "Tech Summit 2024",
    date: "2024-12-05",
    location: "San Francisco, USA",
    image: "tech.jpg",
    description: "Dive into the latest tech innovations and trends.",
    category: "Tech",
    isFree: false,
    tags: ["Technology", "Conference", "Networking"],
    organizer: "TechWorld Group",
    attendees: 800,
    ticketOptions: [
      { type: "Standard", price: 150 },
      { type: "VIP", price: 300 },
    ],
  },
  {
    id: 17,
    name: "Jazz Night",
    date: "2024-12-06",
    location: "New Orleans, USA",
    image: "music.jpg",
    description: "Enjoy an evening of soulful jazz performances.",
    category: "Music",
    isFree: true,
    tags: ["Jazz", "Concert", "Live Music"],
    organizer: "Jazz Enthusiasts",
    attendees: 500,
    ticketOptions: [],
  },
  {
    id: 18,
    name: "Art & Design Expo",
    date: "2024-12-09",
    location: "Los Angeles, USA",
    image: "art.jpg",
    description: "Discover stunning art and innovative designs.",
    category: "Art",
    isFree: false,
    tags: ["Art", "Design", "Creativity"],
    organizer: "LA Art Collective",
    attendees: 300,
    ticketOptions: [
      { type: "General Admission", price: 20 },
      { type: "VIP", price: 50 },
    ],
  },
  {
    id: 19,
    name: "Food Fest 2024",
    date: "2024-12-07",
    location: "Miami, USA",
    image: "food.jpg",
    description: "Taste the best culinary creations from around the world.",
    category: "Food",
    isFree: true,
    tags: ["Food", "Culinary", "Festival"],
    organizer: "Global Foodies",
    attendees: 1000,
    ticketOptions: [],
  },
  {
    id: 20,
    name: "Startup Bootcamp",
    date: "2024-12-10",
    location: "Austin, USA",
    image: "business.jpg",
    description: "Learn to launch and scale your startup.",
    category: "Business",
    isFree: false,
    tags: ["Startup", "Business", "Workshop"],
    organizer: "Innovators League",
    attendees: 150,
    ticketOptions: [
      { type: "Standard", price: 100 },
      { type: "VIP", price: 200 },
    ],
  },
  {
    id: 21,
    name: "Bookworm Meetup",
    date: "2024-12-05",
    location: "Boston, USA",
    image: "books.jpg",
    description: "Connect with fellow book lovers and discuss your favorites.",
    category: "Books",
    isFree: true,
    tags: ["Books", "Meetup", "Readers"],
    organizer: "Boston Readers Club",
    attendees: 200,
    ticketOptions: [],
  },
  {
    id: 22,
    name: "Live Classical Concert",
    date: "2024-12-08",
    location: "Seattle, USA",
    image: "music.jpg",
    description: "Experience the beauty of classical music live.",
    category: "Music",
    isFree: false,
    tags: ["Classical", "Concert", "Orchestra"],
    organizer: "Seattle Symphony",
    attendees: 400,
    ticketOptions: [
      { type: "Standard", price: 30 },
      { type: "Premium", price: 60 },
    ],
  },
  {
    id: 23,
    name: "AI Innovations Conference",
    date: "2024-12-06",
    location: "Silicon Valley, USA",
    image: "tech.jpg",
    description: "Explore the future of AI and machine learning.",
    category: "Tech",
    isFree: true,
    tags: ["AI", "Conference", "Innovation"],
    organizer: "AI Global",
    attendees: 700,
    ticketOptions: [],
  },
  {
    id: 24,
    name: "Street Art Tour",
    date: "2024-12-09",
    location: "Portland, USA",
    image: "art.jpg",
    description: "Discover vibrant street art and meet local artists.",
    category: "Art",
    isFree: false,
    tags: ["Street Art", "Tour", "Artists"],
    organizer: "Portland Art Scene",
    attendees: 150,
    ticketOptions: [
      { type: "Standard", price: 10 },
      { type: "VIP Tour", price: 30 },
    ],
  },
  {
    id: 25,
    name: "BBQ Bonanza",
    date: "2024-12-10",
    location: "Dallas, USA",
    image: "food.jpg",
    description: "Savor the best BBQ dishes in town.",
    category: "Food",
    isFree: true,
    tags: ["BBQ", "Food", "Festival"],
    organizer: "Dallas Foodies",
    attendees: 600,
    ticketOptions: [],
  },
  {
    id: 26,
    name: "Women in Business Conference",
    date: "2024-12-07",
    location: "Philadelphia, USA",
    image: "business.jpg",
    description:
      "Empowering women entrepreneurs through networking and workshops.",
    category: "Business",
    isFree: false,
    tags: ["Business", "Women", "Networking"],
    organizer: "Women in Biz",
    attendees: 350,
    ticketOptions: [
      { type: "Standard", price: 120 },
      { type: "VIP", price: 200 },
    ],
  },
  {
    id: 27,
    name: "Young Authors Workshop",
    date: "2024-12-08",
    location: "Hollywood, USA",
    image: "books.jpg",
    description: "Learn to craft compelling stories and publish your work.",
    category: "Books",
    isFree: true,
    tags: ["Writing", "Workshop", "Authors"],
    organizer: "Young Writers Academy",
    attendees: 120,
    ticketOptions: [],
  },
  {
    id: 28,
    name: "Retro Music Festival",
    date: "2024-12-06",
    location: "Las Vegas, USA",
    image: "music.jpg",
    description: "Dance to the greatest hits of the 80s and 90s.",
    category: "Music",
    isFree: false,
    tags: ["Retro", "Festival", "Music"],
    organizer: "Vegas Vibes",
    attendees: 900,
    ticketOptions: [
      { type: "General Admission", price: 50 },
      { type: "VIP", price: 100 },
    ],
  },
  {
    id: 29,
    name: "Tech for Good Hackathon",
    date: "2024-12-09",
    location: "Phoenix, USA",
    image: "tech.jpg",
    description: "Build solutions that address real-world problems.",
    category: "Tech",
    isFree: true,
    tags: ["Hackathon", "Tech", "Innovation"],
    organizer: "Tech Impact",
    attendees: 450,
    ticketOptions: [],
  },
  {
    id: 30,
    name: "Art in the Park",
    date: "2024-12-10",
    location: "Denver, USA",
    image: "art.jpg",
    description: "Enjoy art exhibits and workshops in the park.",
    category: "Art",
    isFree: true,
    tags: ["Art", "Outdoor", "Exhibition"],
    organizer: "Denver Art Society",
    attendees: 250,
    ticketOptions: [],
  },
];

export default events;
