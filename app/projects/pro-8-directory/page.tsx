import type { Metadata } from "next"

import { PoliceDirectory } from "@/src/components/police-directory"

export const metadata: Metadata = {
  title: "PRO-8 Police Station Directory | Joerel Epiz",
  description:
    "Search police offices and stations in Police Regional Office 8, Eastern Visayas. Contact numbers are included only when published by a government source.",
}

export default function Pro8DirectoryPage() {
  return <PoliceDirectory />
}
