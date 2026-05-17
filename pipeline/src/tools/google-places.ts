const NICHE_QUERIES: Record<string, string[]> = {
  hvac: ['HVAC contractor', 'air conditioning repair', 'heating repair'],
  plumbing: ['plumber', 'plumbing repair', 'drain cleaning'],
  restaurant: ['Indian restaurant', 'restaurant', 'diner'],
  medspa: ['med spa', 'medical spa', 'laser hair removal', 'botox clinic'],
}

export interface PlaceLead {
  place_id: string
  name: string
  address: string
  phone?: string
  website?: string
  rating?: number
  review_count?: number
}

export async function searchPlaces(
  niche: string,
  location: string,
  maxResults = 20
): Promise<PlaceLead[]> {
  const queries = NICHE_QUERIES[niche] || [niche]
  const results: PlaceLead[] = []
  const seen = new Set<string>()

  for (const query of queries) {
    if (results.length >= maxResults) break

    const url = new URL('https://maps.googleapis.com/maps/api/textsearch/json')
    url.searchParams.set('query', `${query} in ${location}`)
    url.searchParams.set('key', process.env.GOOGLE_PLACES_API_KEY!)

    const res = await fetch(url.toString())
    const data = await res.json() as any

    for (const place of data.results || []) {
      if (seen.has(place.place_id)) continue
      seen.add(place.place_id)

      const details = await getPlaceDetails(place.place_id)

      results.push({
        place_id: place.place_id,
        name: place.name,
        address: place.formatted_address,
        phone: details?.phone,
        website: details?.website,
        rating: place.rating,
        review_count: place.user_ratings_total,
      })

      if (results.length >= maxResults) break
    }
  }

  return results
}

async function getPlaceDetails(placeId: string) {
  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json')
  url.searchParams.set('place_id', placeId)
  url.searchParams.set('fields', 'formatted_phone_number,website')
  url.searchParams.set('key', process.env.GOOGLE_PLACES_API_KEY!)

  const res = await fetch(url.toString())
  const data = await res.json() as any

  return {
    phone: data.result?.formatted_phone_number as string | undefined,
    website: data.result?.website as string | undefined,
  }
}
