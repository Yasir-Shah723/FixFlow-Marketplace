const scoreMatch = (provider, request) => {
  const categoryWeight = 30;
  const skillWeight = 20;
  const locationWeight = 20;
  const availabilityWeight = 10;
  const ratingWeight = 10;
  const jobsWeight = 5;
  const responseWeight = 5;

  const skillMatch = provider.skills?.includes(request.category) ? 1 : 0.6;
  const categoryMatch = provider.category === request.category ? 1 : 0.5;
  const locationMatch = provider.serviceAreas?.includes(request.location) || provider.city === request.location ? 1 : 0.7;
  const availabilityMatch = provider.availableToday ? 1 : 0.65;
  const ratingScore = (provider.rating || 4.3) / 5;
  const jobsScore = Math.min((provider.completedJobs || 0) / 200, 1);
  const responseScore = (provider.responseRate || 0.88) / 1;

  const total =
    categoryWeight * categoryMatch +
    skillWeight * skillMatch +
    locationWeight * locationMatch +
    availabilityWeight * availabilityMatch +
    ratingWeight * ratingScore +
    jobsWeight * jobsScore +
    responseWeight * responseScore;

  return Math.min(Math.max(Math.round(total), 50), 98);
};

const calculateProviderMatchScores = (providers = [], request = {}) => {
  return providers
    .map((provider) => ({
      ...provider,
      matchScore: scoreMatch(provider, request),
      reasons: [
        provider.category === request.category ? 'Matching service category' : 'Category near match',
        provider.serviceAreas?.includes(request.location) || provider.city === request.location ? 'Service area overlap' : 'Area match is approximate',
        provider.availableToday ? 'Available today' : 'Availability pending',
        `${provider.rating || 4.5} avg rating`,
      ],
    }))
    .sort((a, b) => b.matchScore - a.matchScore);
};

module.exports = { calculateProviderMatchScores };
