"use client"

import { useMemo, useState } from "react"
import {
  Building2,
  ChevronDown,
  ExternalLink,
  MapPin,
  Phone,
  Search,
  ShieldAlert,
} from "lucide-react"
import { FaViber, FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  directoryOffices,
  emergencySource,
  pnpRosterSource,
  provinces,
  regionalHotlineSource,
  type PoliceOffice,
} from "@/src/data/pro8-directory"

const officeTypeLabels: Record<PoliceOffice["type"], string> = {
  regional: "Regional office",
  provincial: "Provincial office",
  "city-office": "City police office",
  "city-station": "City police station",
  municipal: "Municipal police station",
  emergency: "Emergency hotline",
}

function toPhilippineInternationalNumber(value: string) {
  const digits = value.replace(/\D/g, "")

  if (digits.startsWith("00")) return digits.slice(2)
  if (digits.startsWith("63")) return digits
  if (digits.startsWith("0")) return `63${digits.slice(1)}`

  return `63${digits}`
}

function phoneHref(value: string) {
  return `tel:${value.replace(/[^\d+]/g, "")}`
}

function officeSearchText(office: PoliceOffice) {
  const values = [
    office.name,
    ...(office.searchAliases ?? []),
    office.province,
    office.municipality,
    office.contacts.landline,
    office.contacts.mobile,
    office.contacts.viber,
    office.contacts.whatsapp,
  ].filter((value): value is string => Boolean(value))
  const phoneVariants = values
    .filter((value) => /[+\d() -]{7,}/.test(value))
    .flatMap((number) => {
      const digits = number.replace(/\D/g, "")
      return digits.startsWith("63") ? [digits, `0${digits.slice(2)}`] : [digits]
    })

  return [...values, ...phoneVariants].join(" ").toLocaleLowerCase()
}

function hasContactMethod(office: PoliceOffice) {
  return Object.values(office.contacts).some(Boolean)
}

function OfficeCard({
  office,
  onSelect,
}: {
  office: PoliceOffice
  onSelect: (office: PoliceOffice) => void
}) {
  const isEmergency = office.type === "emergency"

  return (
    <button
      type="button"
      onClick={() => onSelect(office)}
      className={`group flex min-h-24 w-full items-center gap-4 rounded-xl border bg-white px-4 py-4 text-left shadow-sm transition hover:border-neutral-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:px-5 ${
        isEmergency ? "border-red-200" : "border-neutral-200"
      }`}
      aria-label={`View contact options for ${office.name}`}
    >
      <span
        className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
          isEmergency
            ? "bg-red-50 text-red-700"
            : "bg-neutral-100 text-neutral-700"
        }`}
        aria-hidden="true"
      >
        {isEmergency ? <ShieldAlert size={20} /> : <Building2 size={20} />}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
          {officeTypeLabels[office.type]}
        </span>
        <span className="mt-1 block font-semibold leading-snug text-neutral-950">
          {office.name}
        </span>
        {(office.municipality || office.province) && (
          <span className="mt-1 flex items-center gap-1.5 text-sm text-neutral-600">
            <MapPin size={14} aria-hidden="true" />
            {[office.municipality, office.province]
              .filter(Boolean)
              .join(", ")}
          </span>
        )}
      </span>

      <span className="shrink-0 text-right">
        {office.contacts.landline || office.contacts.mobile ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-800">
            <Phone size={15} aria-hidden="true" />
            {office.contacts.landline ?? office.contacts.mobile}
          </span>
        ) : (
          <span className="hidden text-xs text-neutral-500 sm:block">
            {hasContactMethod(office) ? "View contacts" : "Number not listed"}
          </span>
        )}
      </span>
    </button>
  )
}

function OfficeHierarchyGroup({
  office,
  stations,
  forceOpen,
  onSelect,
}: {
  office: PoliceOffice
  stations: PoliceOffice[]
  forceOpen: boolean
  onSelect: (office: PoliceOffice) => void
}) {
  return (
    <details
      open={forceOpen || undefined}
      className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
    >
      <summary className="flex min-h-14 cursor-pointer list-none items-center gap-3 px-4 py-3 marker:hidden focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-neutral-900 sm:px-5 [&::-webkit-details-marker]:hidden">
        <Building2 size={19} className="shrink-0 text-neutral-500" aria-hidden="true" />
        <span className="min-w-0 flex-1 font-semibold leading-snug text-neutral-950">
          {office.name}
        </span>
        <span className="shrink-0 text-xs text-neutral-500 sm:text-sm">
          {stations.length} {stations.length === 1 ? "station" : "stations"}
        </span>
        <ChevronDown
          size={18}
          className="shrink-0 text-neutral-500 transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="border-t border-neutral-200 bg-neutral-50/70 p-3 sm:p-4">
        <button
          type="button"
          onClick={() => onSelect(office)}
          className="mb-3 flex min-h-11 w-full items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-white px-4 text-left text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          aria-label={`View contact options for ${office.name}`}
        >
          <span>{officeTypeLabels[office.type]} contact details</span>
          <span className="text-xs font-normal text-neutral-500">
            {office.contacts.landline ?? office.contacts.mobile ?? "Number not listed"}
          </span>
        </button>
        {stations.length > 0 ? (
          <div className="space-y-2.5 border-l-2 border-neutral-200 pl-3 sm:pl-4">
            {stations.map((child) => (
              <OfficeCard key={child.id} office={child} onSelect={onSelect} />
            ))}
          </div>
        ) : (
          <p className="rounded-lg border border-dashed border-neutral-300 bg-white px-4 py-5 text-center text-sm text-neutral-600">
            No matching stations found under this office.
          </p>
        )}
      </div>
    </details>
  )
}

function ContactDialog({
  office,
  onClose,
}: {
  office: PoliceOffice | null
  onClose: () => void
}) {
  return (
    <Dialog open={Boolean(office)} onOpenChange={(open) => !open && onClose()}>
      {office && (
        <DialogContent className="max-w-md gap-5 rounded-2xl border border-neutral-200 bg-white p-5 text-neutral-950 shadow-xl sm:p-6">
          <DialogHeader className="pr-8">
            <DialogTitle className="text-lg font-bold leading-snug">
              {office.emergency
                ? "How would you like to contact 911?"
                : `Contact ${office.name}`}
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed text-neutral-600">
              {office.emergency
                ? "For emergencies in Eastern Visayas, call 911. This emergency number is for calls only; messaging apps are not listed as supported."
                : hasContactMethod(office)
                  ? "Choose a published contact method below."
                  : "No verified phone or messaging contact is currently listed for this office."}
            </DialogDescription>
          </DialogHeader>

          {office.emergency && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-800">
              Emergency line · Calls only · Do not use for routine inquiries
            </p>
          )}

          <div className="grid gap-2.5">
            {office.contacts.viber && (
              <a
                href={`https://viber.me/${toPhilippineInternationalNumber(
                  office.contacts.viber,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center gap-3 rounded-lg border border-neutral-200 px-4 font-medium transition hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <FaViber size={20} className="text-[#7360f2]" aria-hidden="true" />
                Viber
              </a>
            )}

            {office.contacts.whatsapp && (
              <a
                href={`https://wa.me/${toPhilippineInternationalNumber(
                  office.contacts.whatsapp,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center gap-3 rounded-lg border border-neutral-200 px-4 font-medium transition hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <FaWhatsapp size={20} className="text-[#25d366]" aria-hidden="true" />
                WhatsApp
                <ExternalLink size={15} className="ml-auto" aria-hidden="true" />
              </a>
            )}

            {office.contacts.landline && (
              <a
                href={phoneHref(office.contacts.landline)}
                className={`flex min-h-12 items-center gap-3 rounded-lg px-4 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ${
                  office.emergency
                    ? "bg-red-700 text-white hover:bg-red-800"
                    : "border border-neutral-200 hover:bg-neutral-50"
                }`}
              >
                <Phone size={19} aria-hidden="true" />
                {office.emergency ? "Call emergency services" : "Call office"}
                <span className="ml-auto tabular-nums">
                  {office.contacts.landline}
                </span>
              </a>
            )}

            {office.contacts.mobile && (
              <a
                href={phoneHref(office.contacts.mobile)}
                className="flex min-h-12 items-center gap-3 rounded-lg border border-neutral-200 px-4 font-medium transition hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                <Phone size={19} aria-hidden="true" />
                Call mobile hotline
                <span className="ml-auto tabular-nums">
                  {office.contacts.mobile}
                </span>
              </a>
            )}
          </div>

          {(office.contacts.viber || office.contacts.whatsapp) && (
            <p className="text-xs leading-relaxed text-neutral-600">
              If a messaging app does not open, {office.contacts.landline || office.contacts.mobile
                ? "use the phone option below"
                : "consult the linked government source for another contact method"}.
            </p>
          )}

          {office.sourceUrl && (
            <a
              href={office.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-500 underline underline-offset-4 hover:text-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              View source and verify details
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          )}
        </DialogContent>
      )}
    </Dialog>
  )
}

export function PoliceDirectory() {
  const [query, setQuery] = useState("")
  const [selectedProvince, setSelectedProvince] = useState("all")
  const [selectedOffice, setSelectedOffice] = useState<PoliceOffice | null>(null)

  const normalizedQuery = query.trim().toLocaleLowerCase()
  const searchMatches = useMemo(
    () =>
      directoryOffices.filter((office) =>
        officeSearchText(office).includes(normalizedQuery),
      ),
    [normalizedQuery],
  )

  const topOffices = searchMatches.filter(
    (office) => office.type === "emergency" || office.type === "regional",
  )
  const matchingIds = new Set(searchMatches.map((office) => office.id))
  const provincialParents = directoryOffices.filter(
    (office) => office.type === "provincial",
  )
  const cityParents = directoryOffices.filter(
    (office) => office.type === "city-office",
  )
  const provincialStations = directoryOffices.filter(
    (office) =>
      office.type === "municipal" || office.type === "city-station",
  )
  const cityStations = directoryOffices.filter(
    (office) => office.type === "city-station" && Boolean(office.parentOfficeId),
  )

  const filteredTopOffices =
    selectedProvince === "all"
      ? topOffices
      : topOffices.filter(
          (office) =>
            office.type === "emergency" ||
            office.province === selectedProvince,
        )

  const provincialGroups = provincialParents
    .filter(
      (office) =>
        selectedProvince === "all" || office.province === selectedProvince,
    )
    .map((office) => {
      const parentMatches = matchingIds.has(office.id)
      const children = provincialStations.filter(
        (station) =>
          station.province === office.province &&
          station.parentOfficeId === office.id &&
          (parentMatches || matchingIds.has(station.id)),
      )

      return { office, children, visible: parentMatches || children.length > 0 }
    })
    .filter((group) => group.visible)

  const cityGroups = cityParents
    .filter(
      (office) =>
        selectedProvince === "all" || office.province === selectedProvince,
    )
    .map((office) => {
      const parentMatches = matchingIds.has(office.id)
      const children = cityStations.filter(
        (station) =>
          station.parentOfficeId === office.id &&
          (parentMatches || matchingIds.has(station.id)),
      )

      return { office, children, visible: parentMatches || children.length > 0 }
    })
    .filter((group) => group.visible)

  const shownOffices = [
    ...filteredTopOffices,
    ...provincialGroups.flatMap(({ office, children }) => [office, ...children]),
    ...cityGroups.flatMap(({ office, children }) => [office, ...children]),
  ]
  const shownCount = new Set(shownOffices.map((office) => office.id)).size

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
        <Link
          href="/"
          className="mb-6 inline-flex min-h-10 items-center gap-2 rounded-full px-3 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <span aria-hidden="true">←</span>
          Back to portfolio
        </Link>
        <header className="text-center">
          <p className="text-xs font-bold tracking-[0.18em] text-neutral-600 sm:text-sm">
            PHILIPPINE NATIONAL POLICE
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            POLICE REGIONAL OFFICE 8
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Eastern Visayas · Police station directory
          </p>
        </header>

        <div className="mt-8 grid gap-3 sm:grid-cols-[minmax(0,1fr)_220px]">
          <label className="relative block">
            <span className="sr-only">Search police offices</span>
            <Search
              size={19}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search office, province, town, or number"
              className="h-12 w-full rounded-full border border-neutral-300 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-neutral-500 focus:border-neutral-700 focus:ring-2 focus:ring-neutral-900/10"
            />
          </label>

          <label className="sr-only" htmlFor="province-filter">
            Filter by province
          </label>
          <select
            id="province-filter"
            value={selectedProvince}
            onChange={(event) => setSelectedProvince(event.target.value)}
            className="h-12 w-full rounded-full border border-neutral-300 bg-white px-4 text-sm outline-none focus:border-neutral-700 focus:ring-2 focus:ring-neutral-900/10"
          >
            <option value="all">All provinces</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>

        <p className="mt-4 text-sm text-neutral-600" aria-live="polite">
          {shownCount} {shownCount === 1 ? "listing" : "listings"}
          {normalizedQuery ? ` matching “${query.trim()}”` : " in the directory"}
        </p>

        <section aria-labelledby="emergency-heading" className="mt-6">
          <h2
            id="emergency-heading"
            className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-neutral-500"
          >
            Emergency and regional contacts
          </h2>
          <div className="grid gap-3">
            {filteredTopOffices.map((office) => (
              <OfficeCard
                key={office.id}
                office={office}
                onSelect={setSelectedOffice}
              />
            ))}
          </div>
        </section>

        <section aria-labelledby="provincial-heading" className="mt-8">
          <h2
            id="provincial-heading"
            className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-neutral-500"
          >
            Provincial Police Offices
          </h2>
          <div className="space-y-3">
            {provincialGroups.map(({ office, children }) => (
              <OfficeHierarchyGroup
                key={office.id}
                office={office}
                stations={children}
                forceOpen={Boolean(normalizedQuery || selectedProvince !== "all")}
                onSelect={setSelectedOffice}
              />
            ))}
          </div>
        </section>

        <section aria-labelledby="city-heading" className="mt-8">
          <h2
            id="city-heading"
            className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-neutral-500"
          >
            City Police Offices
          </h2>
          <div className="space-y-3">
            {cityGroups.map(({ office, children }) => (
              <OfficeHierarchyGroup
                key={office.id}
                office={office}
                stations={children}
                forceOpen={Boolean(normalizedQuery || selectedProvince !== "all")}
                onSelect={setSelectedOffice}
              />
            ))}
          </div>
        </section>

        {shownCount === 0 && (
          <div className="mt-8 rounded-xl border border-dashed border-neutral-300 px-5 py-10 text-center">
            <Search size={22} className="mx-auto text-neutral-400" aria-hidden="true" />
            <h2 className="mt-3 font-semibold">No offices found</h2>
            <p className="mt-1 text-sm text-neutral-600">
              Try another office name, province, municipality, or contact number.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("")
                setSelectedProvince("all")
              }}
              className="mt-4 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Clear search and filters
            </button>
          </div>
        )}

        <footer className="mt-10 border-t border-neutral-200 pt-5 text-xs leading-relaxed text-neutral-500">
          <p>
            Station and office names follow the PNP PRO-8 roster published in
            April 2025 and may have changed. Phone numbers appear only when
            published by a government source; verify them with the linked source
            before relying on them.
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
            <a
              href={pnpRosterSource}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-neutral-800"
            >
              PNP station roster <ExternalLink size={12} aria-hidden="true" />
            </a>
            <a
              href={emergencySource}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-neutral-800"
            >
              911 source <ExternalLink size={12} aria-hidden="true" />
            </a>
            <a
              href={regionalHotlineSource}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-neutral-800"
            >
              Regional hotline source <ExternalLink size={12} aria-hidden="true" />
            </a>
          </div>
        </footer>
      </div>

      <ContactDialog
        office={selectedOffice}
        onClose={() => setSelectedOffice(null)}
      />
    </main>
  )
}
