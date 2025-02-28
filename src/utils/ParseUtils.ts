export function parseLocation(location: any) {
  if (typeof location === "string") location = JSON.parse(location);
  if (typeof location === "string" && !isNaN(Number(location)))
    return { connect: { id: Number(location) } };
  if (typeof location === "object" && location.address) {
    const { address, country, city, longitude, latitude } = location;
    if (!address || !country || !city)
      throw { message: "Missing required location fields" };
    return {
      create: {
        address,
        country,
        city,
        longitude: Number(longitude),
        latitude: Number(latitude),
      },
    };
  }
  throw { message: "Invalid location data" };
}

export function parseLocationUpdate(location: any) {
  if (typeof location === "string") location = JSON.parse(location);
  if (typeof location === "string" && !isNaN(Number(location)))
    return { connect: { id: Number(location) } };
  if (typeof location === "object" && location.address) {
    const { address, country, city, longitude, latitude } = location;
    if (!address || !country || !city)
      throw { message: "Missing required location fields" };
    return {
      update: {
        address,
        country,
        city,
        longitude: Number(longitude),
        latitude: Number(latitude),
      },
    };
  }
  throw { message: "Invalid location data" };
}

export function parseFacilities(facilities: any) {
  if (!facilities) return [];
  let arr;
  if (typeof facilities === "string") {
    try {
      arr = JSON.parse(facilities);
    } catch {
      arr = facilities.split(",");
    }
  } else if (Array.isArray(facilities)) {
    arr = facilities;
  }
  return Array.isArray(arr) && arr.length
    ? arr.map((f) => f.toString().trim().toUpperCase())
    : [];
}

export function parseSeasonalPrices(seasonal: any) {
  if (!seasonal) return [];
  try {
    const parsed = JSON.parse(seasonal);
    return parsed.map((sp: any) => ({
      ...sp,
      dates: sp.dates || [],
    }));
  } catch {
    return [];
  }
}

export function parseUnavailable(unavailable: any) {
  if (!unavailable) return [];
  try {
    return JSON.parse(unavailable);
  } catch {
    return [];
  }
}
