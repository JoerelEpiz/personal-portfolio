export type OfficeType =
  | "regional"
  | "provincial"
  | "city-office"
  | "city-station"
  | "municipal"
  | "emergency"

export type PoliceOffice = {
  id: string
  name: string
  type: OfficeType
  province?: string
  municipality?: string
  parentOfficeId?: string
  searchAliases?: string[]
  contacts: {
    landline?: string
    mobile?: string
    /** Verified number enrolled in Viber Business; used only when published. */
    viber?: string
    /** Verified WhatsApp-enabled number in local or international format. */
    whatsapp?: string
  }
  emergency?: boolean
  verified: boolean
  contactVerified: boolean
  sourceUrl: string
}

export const pnpRosterSource =
  "https://itms.pnp.gov.ph/wp-content/uploads/2025/04/PRO-8.pdf"

export const emergencySource =
  "https://pia.gov.ph/news/visayas/ev/pnp-launches-safe-eastern-visayas-dial-911-in-e-samar/"

export const regionalHotlineSource =
  "https://alangalangleyte.gov.ph/police-regional-office-8-steps-up-emergency-response-through-s-a-f-e-eastern-visayas-dial-911/"

type RosterStation = {
  name: string
  municipality: string
  type?: "city" | "municipal"
  contacts?: PoliceOffice["contacts"]
  contactVerified?: boolean
  sourceUrl?: string
}

type ProvinceRoster = {
  province: string
  stations: RosterStation[]
}

function station(
  name: string,
  municipality = name,
  type: RosterStation["type"] = "municipal",
  verification: Pick<RosterStation, "contacts" | "contactVerified" | "sourceUrl"> = {},
): RosterStation {
  return { name, municipality, type, ...verification }
}

const provincialRoster: ProvinceRoster[] = [
  {
    province: "Biliran",
    stations: [
      station("Almeria","Almeria", "municipal", {
        contacts: {
          //landline: "053-570-0000",
          mobile: "+639940939130",
        },
        contactVerified: true,
        sourceUrl: "https://your-official-source.com", 
      }), 

      station("Biliran"), 
      station("Cabucgayan"),
      station("Caibiran"), 
      station("Culaba"), 
      station("Kawayan"),
      station("Maripipi"), 
      station("Naval"),
    ],
  },
  {
    province: "Eastern Samar",
    stations: [
      station("Arteche"), station("Balangiga"), station("Balangkayan"),
      station("Borongan", "Borongan", "city"), station("Can-avid"),
      station("Dolores"), station("General MacArthur", "General MacArthur"),
      station("Giporlos"), station("Guiuan"), station("Hernani"),
      station("Jipapad"), station("Lawaan"), station("Llorente"),
      station("Maslog"), station("Maydolong"), station("Mercedes"),
      station("Oras"), station("Quinapondan"), station("Salcedo"),
      station("San Julian"), station("San Policarpo"), station("Sulat"),
      station("Taft"),
    ],
  },
  {
    province: "Leyte",
    stations: [
      station("Abuyog"), station("Alang-Alang"), station("Albuera"),
      station("Babatngon"), station("Barugo"), station("Bato"),
      station("Baybay", "Baybay", "city"), station("Burauen"),
      station("Calubian"), station("Capoocan"), station("Carigara"),
      station("Dagami"), station("Dulag"), station("Hilongos"),
      station("Hindang"), station("Inopacan"), station("Isabel"),
      station("Jaro"), station("Javier"), station("Julita"),
      station("Kananga"), station("La Paz"), station("Leyte"),
      station("MacArthur"), station("Mahaplag"), station("Matag-ob"),
      station("Matalom"), station("Mayorga"), station("Merida"),
      station("Palo"), station("Palompon"), station("Pastrana"),
      station("San Isidro"), station("San Miguel"), station("Santa Fe"),
      station("Tabango"), station("Tabon-Tabon", "Tabontabon"), station("Tanauan"),
      station("Tolosa"), station("Tunga"), station("Villaba"),
    ],
  },
  {
    province: "Northern Samar",
    stations: [
      station("Allen"), station("Biri"), station("Bobon"), station("Capul"),
      station("Catarman"), station("Catubig"), station("Gamay"),
      station("Laoang"), station("Lapinig"), station("Las Navas"),
      station("Lavezares"), station("Lope de Vega"), station("Mapanas"),
      station("Mondragon"), station("Palapag"), station("Pambujan"),
      station("Rosario"), station("San Antonio"), station("San Isidro"),
      station("San Jose"), station("San Roque"), station("San Vicente"),
      station("Silvino Lobos"), station("Victoria"),
    ],
  },
  {
    province: "Samar",
    stations: [
      station("Almagro"), station("Basey"),
      station("Calbayog", "Calbayog", "city"), station("Calbiga"),
      station("Catbalogan", "Catbalogan", "city"), station("Daram"),
      station("Gandara"), station("Hinabangan"), station("Jiabong"),
      station("Marabut"), station("Matuguinao"), station("Motiong"),
      station("Pagsanghan"), station("Pinabacdao"), station("San Jorge"),
      station("San Jose de Buan"), station("San Sebastian"),
      station("Santa Margarita"), station("Santa Rita"),
      station("Santo Niño"), station("Tagapul-an"), station("Talalora"),
      station("Tarangnan"), station("Villareal"),
      station("Wright Paranas", "Paranas"),
      station("Zumarraga"),
    ],
  },
  {
    province: "Southern Leyte",
    stations: [
      station("Anahawan"), station("Bontoc"), station("Hinunangan"),
      station("Hinundayan"), station("Libagon"), station("Liloan"),
      station("Limasawa"), station("Maasin", "Maasin", "city"),
      station("Macrohon"), station("Malitbog"), station("Padre Burgos"),
      station("Pintuyan"), station("San Francisco"), station("San Juan"),
      station("San Ricardo"), station("Silago"), station("Sogod"),
      station("Saint Bernard"), station("Tomas Oppus"),
    ],
  },
]

const cityRoster: Array<{
  city: "Ormoc" | "Tacloban"
  officeId: "pro8-ocpo" | "pro8-tcpo"
  stations: RosterStation[]
}> = [
  {
    city: "Ormoc",
    officeId: "pro8-ocpo",
    stations: [
      station("Police Station 1 — Barangay Cogon", "Ormoc City", "city"),
      station("Police Station 2 — Barangay Cagbuhangin", "Ormoc City", "city"),
      station("Police Station 3 — Barangay Liloan", "Ormoc City", "city"),
      station("Police Station 4 — Barangay Linao", "Ormoc City", "city"),
      station("Police Station 5 — Barangay Dolores", "Ormoc City", "city"),
      station("Police Station 6 — Barangay Ipil", "Ormoc City", "city"),
    ],
  },
  {
    city: "Tacloban",
    officeId: "pro8-tcpo",
    stations: [
      station("Police Station 1", "Tacloban City", "city"),
      station("Police Station 2", "Tacloban City", "city"),
      station("Police Station 3", "Tacloban City", "city"),
    ],
  },
]

function slug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const provincialStations: PoliceOffice[] = provincialRoster.flatMap(
  ({ province, stations }) =>
    stations.map(
      ({
        name,
        municipality,
        type = "municipal",
        contacts = {},
        contactVerified = false,
        sourceUrl = pnpRosterSource,
      }) => ({
      id: `${slug(province)}-${slug(name)}`,
      name: `${name} Police Station`,
        type: type === "city" ? "city-station" : "municipal",
      province,
      municipality,
      parentOfficeId: `pro8-${slug(province)}-ppo`,
      contacts,
      verified: true,
      contactVerified,
      sourceUrl,
    }),
    ),
)

const cityStations: PoliceOffice[] = cityRoster.flatMap(({ city, officeId, stations }) =>
  stations.map(
    ({
      name,
      municipality,
      contacts = {},
      contactVerified = false,
      sourceUrl = pnpRosterSource,
    }, index) => ({
    id: `${slug(city)}-ps-${index + 1}`,
    name,
    type: "city-station" as const,
    province: "Leyte",
    municipality,
    parentOfficeId: officeId,
    contacts,
    verified: true,
    contactVerified,
    sourceUrl,
  }),
  ),
)

export const directoryOffices: PoliceOffice[] = [
  {
    id: "pro8-emergency-911",
    name: "911 Emergency Hotline",
    type: "emergency",
    province: "Eastern Visayas",
    contacts: { landline: "911" },
    emergency: true,
    verified: true,
    contactVerified: true,
    sourceUrl: emergencySource,
  },
  {
    id: "pro8-public-assistance",
    name: "Police Regional Office 8 — Public Assistance Hotline",
    type: "regional",
    province: "Leyte",
    municipality: "Palo",
    contacts: { mobile: "+639628616907" },
    verified: true,
    contactVerified: true,
    sourceUrl: regionalHotlineSource,
  },
  ...["Biliran", "Eastern Samar", "Leyte", "Northern Samar", "Samar", "Southern Leyte"].map(
    (province) => ({
      id: `pro8-${slug(province)}-ppo`,
      name: `${province} Police Provincial Office`,
      type: "provincial" as const,
      province,
      searchAliases: [`${province} PPO`],
      contacts: {},
      verified: true,
      contactVerified: false,
      sourceUrl: pnpRosterSource,
    }),
  ),
  {
    id: "pro8-ocpo",
    name: "Ormoc City Police Office (OCPO)",
    type: "city-office",
    province: "Leyte",
    municipality: "Ormoc City",
    searchAliases: ["OCPO"],
    contacts: {},
    verified: true,
    contactVerified: false,
    sourceUrl: pnpRosterSource,
  },
  {
    id: "pro8-tcpo",
    name: "Tacloban City Police Office (TCPO)",
    type: "city-office",
    province: "Leyte",
    municipality: "Tacloban City",
    searchAliases: ["TCPO"],
    contacts: {},
    verified: true,
    contactVerified: false,
    sourceUrl: pnpRosterSource,
  },
  ...provincialStations,
  ...cityStations,
]

export const provinces = [
  "Biliran",
  "Eastern Samar",
  "Leyte",
  "Northern Samar",
  "Samar",
  "Southern Leyte",
] as const
