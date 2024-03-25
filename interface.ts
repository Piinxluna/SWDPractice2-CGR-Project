interface CampgroundCard {
  id: string
  picture: string
  name: string
  province: string
  amount: number
  website: string
  googlemap: string
  tel: string
  facilities: string[]
}

// campground --------------------------------------------------------
interface CampgroundItem {
  _id: string
  name: string
  tel: string
  address: {
    houseNumber: string
    lane: string
    road: string
    subDistrict: string
    district: string
    province: string
    postalCode: string
    link: string
  }
  website: string
  pictures: string[]
  facilities: string[]
  tentForRent: boolean
  amount: number
}

interface CampgroundsJson {
  // get many
  success: boolean
  count: number
  pagination: {
    next: {
      page: number
      limit: number
    }
  }
  data: CampgroundItem[]
}

interface CampgroundJson {
  // get one
  success: boolean
  data: CampgroundItem
}

// campground site --------------------------------------------------------

interface CampgroundSiteItem {
  _id: string
  campground: string
  zone: string
  number: number
  size: {
    swidth: number
    slength: number
    _id: string
  }
}

interface CampgroundSitesJson {
  // for many
  success: boolean
  campground: CampgroundItem
  sites: CampgroundSiteItem[]
  pagination: {
    next: {
      page: number
      limit: number
    }
  }
}

interface CampgroundSiteJson {
  // for one
  success: boolean
  campground: CampgroundItem
  site: CampgroundSiteItem
}

// reserves --------------------------------------------------------

interface BookedReservesItem {
  _id: string
  campground: CampgroundItem
  site: CampgroundSiteItem
  startDate: Date
}

interface BookedReservesJson {
  success: boolean
  count: number
  pagination: {
    next: {
      page: number
      limit: number
    }
  }
  data: BookedReservesItem[]
}
