const serviceCategories = [
  { id: 'electrical', title: 'Electrical', slug: 'electrical', description: 'Lighting, wiring and power issues fixed by certified pros.', icon: 'Zap', featured: true },
  { id: 'plumbing', title: 'Plumbing', slug: 'plumbing', description: 'Pipe leaks, taps and drainage specialists near you.', icon: 'Droplets', featured: true },
  { id: 'ac-hvac', title: 'AC & HVAC', slug: 'ac-hvac', description: 'Cooling, heating and ventilation support for homes and shops.', icon: 'Wind', featured: true },
  { id: 'cleaning', title: 'Home Cleaning', slug: 'home-cleaning', description: 'Deep cleaning, move-in cleaning and recurring housekeeping.', icon: 'Sparkles', featured: true },
  { id: 'computer-repair', title: 'Computer Repair', slug: 'computer-repair', description: 'Software, hardware and setup support for devices.', icon: 'MonitorSmartphone', featured: false },
  { id: 'mobile-repair', title: 'Mobile Repair', slug: 'mobile-repair', description: 'Cracked screens, battery issues and software fixes.', icon: 'Smartphone', featured: false },
  { id: 'car-repair', title: 'Car Repair', slug: 'car-repair', description: 'Mechanical repair and diagnostics for daily drivers.', icon: 'Car', featured: false },
  { id: 'appliance-repair', title: 'Appliance Repair', slug: 'appliance-repair', description: 'Repair and maintenance for household appliances.', icon: 'Wrench', featured: false },
  { id: 'painting', title: 'Painting', slug: 'painting', description: 'Interior and exterior finishing with careful prep work.', icon: 'Paintbrush', featured: false },
  { id: 'carpentry', title: 'Carpentry', slug: 'carpentry', description: 'Furniture repair, cabinetry and custom woodwork.', icon: 'Hammer', featured: false },
  { id: 'tutoring', title: 'Tutoring', slug: 'tutoring', description: 'Academic support and subject-specific learning sessions.', icon: 'BookOpen', featured: false },
  { id: 'moving', title: 'Moving', slug: 'moving', description: 'Packing, hauling and relocation support for homes and offices.', icon: 'Truck', featured: false },
  { id: 'gardening', title: 'Gardening', slug: 'gardening', description: 'Lawn care, pruning and outdoor transformations.', icon: 'Leaf', featured: false },
  { id: 'photography', title: 'Photography', slug: 'photography', description: 'Professional shoots for products, events and portraits.', icon: 'Camera', featured: false },
  { id: 'other-services', title: 'Other Services', slug: 'other-services', description: 'Any local job that needs a trusted specialist.', icon: 'BriefcaseBusiness', featured: false },
];

const demoUsers = [
  { id: 'u1', name: 'Demo Customer', email: 'customer@fixflow.com', password: 'Customer123!', role: 'customer', city: 'Islamabad' },
  { id: 'u2', name: 'Ali Cooling Services', email: 'provider@fixflow.com', password: 'Provider123!', role: 'provider', city: 'Islamabad' },
  { id: 'u3', name: 'FixFlow Admin', email: 'admin@fixflow.com', password: 'Admin123!', role: 'admin', city: 'Islamabad' },
];

const demoProviders = [
  {
    id: 'p1',
    name: 'Ali Cooling Services',
    profession: 'AC & HVAC Specialist',
    category: 'AC & HVAC',
    city: 'Islamabad',
    serviceAreas: ['F-6', 'F-7', 'G-6', 'G-7'],
    rating: 4.8,
    reviewsCount: 127,
    completedJobs: 420,
    responseRate: 0.96,
    responseTime: '12 min',
    availableToday: true,
    priceRange: 'Rs. 2,000+',
    skills: ['AC & HVAC', 'Electrical', 'Maintenance'],
    verified: true,
  },
  {
    id: 'p2',
    name: 'Karachi Electric Works',
    profession: 'Electrical Technician',
    category: 'Electrical',
    city: 'Karachi',
    serviceAreas: ['Clifton', 'Gulshan', 'Defence'],
    rating: 4.7,
    reviewsCount: 94,
    completedJobs: 310,
    responseRate: 0.92,
    responseTime: '20 min',
    availableToday: true,
    priceRange: 'Rs. 1,500+',
    skills: ['Electrical', 'Wiring', 'Lighting'],
    verified: true,
  },
  {
    id: 'p3',
    name: 'Lahore Plumbing Co.',
    profession: 'Plumbing Expert',
    category: 'Plumbing',
    city: 'Lahore',
    serviceAreas: ['Gulberg', 'Model Town', 'Johar Town'],
    rating: 4.9,
    reviewsCount: 210,
    completedJobs: 560,
    responseRate: 0.97,
    responseTime: '10 min',
    availableToday: true,
    priceRange: 'Rs. 1,800+',
    skills: ['Plumbing', 'Drainage', 'Water systems'],
    verified: true,
  },
  {
    id: 'p4',
    name: 'Rawalpindi Computer Care',
    profession: 'Computer Repair Specialist',
    category: 'Computer Repair',
    city: 'Rawalpindi',
    serviceAreas: ['Westridge', 'Bani', 'Satellite Town'],
    rating: 4.6,
    reviewsCount: 82,
    completedJobs: 260,
    responseRate: 0.88,
    responseTime: '25 min',
    availableToday: true,
    priceRange: 'Rs. 1,200+',
    skills: ['Computer Repair', 'IT Setup', 'Laptop Service'],
    verified: false,
  },
];

const demoServices = [
  { id: 's1', title: 'AC Gas Recharge', category: 'AC & HVAC', price: 2500, providerId: 'p1', city: 'Islamabad' },
  { id: 's2', title: 'Home Electrical Wiring', category: 'Electrical', price: 1800, providerId: 'p2', city: 'Karachi' },
  { id: 's3', title: 'Leak Detection and Pipe Fix', category: 'Plumbing', price: 2200, providerId: 'p3', city: 'Lahore' },
  { id: 's4', title: 'Laptop Screen Replacement', category: 'Computer Repair', price: 1600, providerId: 'p4', city: 'Rawalpindi' },
];

const demoRequests = [
  {
    id: 'r1',
    customer: 'u1',
    category: 'AC & HVAC',
    specificService: 'AC not cooling properly',
    problemDescription: 'The AC is running but not cooling the bedroom enough. Need inspection and possible gas refill.',
    preferredDate: '2026-10-02',
    preferredTime: '10:00 AM',
    location: 'F-7',
    budgetRange: 'Rs. 2500 - 5000',
    urgency: 'Soon',
    images: [],
    status: 'MATCHING',
    matchScore: 94,
  },
  {
    id: 'r2',
    customer: 'u1',
    category: 'Electrical',
    specificService: 'Switchboard issue',
    problemDescription: 'Two sockets stopped working and the main breaker trips on one circuit.',
    preferredDate: '2026-10-03',
    preferredTime: '02:30 PM',
    location: 'Islamabad',
    budgetRange: 'Rs. 2000 - 4000',
    urgency: 'Normal',
    images: [],
    status: 'QUOTES_RECEIVED',
    matchScore: 88,
  },
];

const demoQuotes = [
  {
    id: 'q1',
    requestId: 'r1',
    providerId: 'p1',
    providerName: 'Ali Cooling Services',
    estimatedPrice: 3200,
    estimatedDuration: '2 hours',
    message: 'We can inspect the condenser, gas pressure, and replace any issue.',
    includedServices: ['Diagnostics', 'Gas top-up', 'Testing'],
    additionalCharges: 0,
    validUntil: '2026-10-01T18:00:00.000Z',
    status: 'PENDING',
  },
];

const demoBookings = [
  {
    id: 'b1',
    customer: 'u1',
    provider: 'p1',
    service: 'AC Gas Recharge',
    date: '2026-10-02',
    time: '10:00 AM',
    location: 'F-7, Islamabad',
    price: 3200,
    status: 'UPCOMING',
  },
];

const demoNotifications = [
  { id: 'n1', userId: 'u1', title: 'Service request received', message: 'Your AC service request has been submitted successfully.', read: false, type: 'info' },
  { id: 'n2', userId: 'u1', title: 'Quote received', message: 'Ali Cooling Services sent you a quote for your AC issue.', read: false, type: 'quote' },
  { id: 'n3', userId: 'u1', title: 'Booking reminder', message: 'Your AC service is scheduled for tomorrow at 10:00 AM.', read: true, type: 'reminder' },
];

const demoReviews = [
  {
    id: 'rv1',
    providerId: 'p1',
    customerId: 'u1',
    rating: 4.9,
    comment: 'Prompt, professional and very thorough with the AC issue.',
  },
];

module.exports = {
  serviceCategories,
  demoUsers,
  demoProviders,
  demoServices,
  demoRequests,
  demoQuotes,
  demoBookings,
  demoNotifications,
  demoReviews,
};
