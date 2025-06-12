const keyMap = {
  travelplan: 'travelPlan',
  budget: 'budget',
  duration: 'duration',
  hoteloptions: 'hotels',
  location: 'location',
  itinerary: 'itinerary',
  day1: 'day1',
  day2: 'day2',
  day3: 'day3',
  place: 'places',
  travellers: 'travelers',
};

const normalizeKeysDeep = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(normalizeKeysDeep);
  }

  if (obj !== null && typeof obj === 'object') {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const lowerKey = key.toLowerCase();
      const mappedKey = keyMap[lowerKey] || lowerKey;

      acc[mappedKey] = normalizeKeysDeep(value);
      return acc;
    }, {});
  }

  return obj;
};

export default normalizeKeysDeep;
