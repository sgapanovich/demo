const airportCityCodes: Record<string, string> = {
  ATL: "Atlanta",
  LAX: "Los Angeles",
  ORD: "Chicago",
  DFW: "Dallas",
  DEN: "Denver",
  JFK: "New York",
  SFO: "San Francisco",
  SEA: "Seattle",
  LAS: "Las Vegas",
  MCO: "Orlando",
  MIA: "Miami",
  CLT: "Charlotte",
  EWR: "Newark",
  PHX: "Phoenix",
  IAH: "Houston",
  BOS: "Boston",
  MSP: "Minneapolis",
  FLL: "Fort Lauderdale",
  DTW: "Detroit",
  PHL: "Philadelphia",
  LGA: "New York",
  BWI: "Baltimore",
  SLC: "Salt Lake City",
  DCA: "Washington",
  IAD: "Washington",
  MDW: "Chicago",
  HNL: "Honolulu",
  SAN: "San Diego",
  TPA: "Tampa",
  PDX: "Portland",
  STL: "St. Louis",
  BNA: "Nashville",
  AUS: "Austin",
  MCI: "Kansas City",
  RDU: "Raleigh",
  SJC: "San Jose",
  SMF: "Sacramento",
  OAK: "Oakland",
  MSY: "New Orleans",
  MKE: "Milwaukee",
};

/**
 * Returns the city name for a given airport code.
 * @param code - The IATA airport code (e.g. "ORD", "JFK", "MIA")
 * @returns The city name, or undefined if the code is not recognized
 */
export function airportCityCode(code: string): string | undefined {
  if (!code) return undefined;
  return airportCityCodes[code.toUpperCase()];
}
