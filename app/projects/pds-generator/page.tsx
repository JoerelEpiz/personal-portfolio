
"use client"

import React from "react"

// Reusable form field with compact styling matching the official PDS.
// Auto-growing multiline field with Arial 10px text.
function Field({
  placeholder = "",
  className = "",
}: {
  placeholder?: string
  className?: string
}) {
  return (
    <div className={`relative min-w-0 ${className}`}>
      <textarea
        placeholder={placeholder}
        rows={1}
        onChange={(e) => {
          // Automatically increase the field height when text wraps.
          e.currentTarget.style.height = "auto"
          e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`
        }}
        className="block min-h-5 w-full resize-none overflow-hidden bg-white px-1 font-[Arial,sans-serif] text-[10px] leading-tight outline-none"
      />
    </div>
  )
}

// Reusable gray section heading.
function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-y border-black bg-[#999999] px-1 py-0.5 text-[10px] font-bold italic text-white">
      {children}
    </div>
  )
}

// Reusable label supporting proper left or centered text alignment.
// Labels use consistent Arial 10px and expand vertically when text wraps.
function Label({
  children,
  className = "",
  align = "left",
}: {
  children: React.ReactNode
  className?: string
  align?: "left" | "center"
}) {
  return (
    <div
      className={`flex min-h-5 items-center ${
        align === "center" ? "justify-center text-center" : "justify-start"
      } border-black bg-gray-200 px-1 font-[Arial,sans-serif] text-[10px] leading-tight ${className}`}
    >
      {children}
    </div>
  )
}

const educationRows = [
  "ELEMENTARY",
  "SECONDARY",
  "VOCATIONAL / TRADE COURSE",
  "COLLEGE",
  "GRADUATE STUDIES",
]

const formGridClass =
  "grid grid-cols-[2.54%_9.92%_4.67%_14.75%_4.84%_4.34%_7.87%_7.13%_7.30%_6.025%_6.025%_8.93%_7.30%_8.36%] text-[8px]"

export default function PersonalDataSheet() {
  return (
    <main className="min-h-screen bg-[#eeeeee] px-2 py-4 sm:px-6 sm:py-6 print:bg-white print:p-0">
      <div className="mx-auto w-full overflow-x-auto pb-1 print:overflow-visible print:pb-0">
      <div className="mx-auto w-full min-w-[720px] max-w-[850px] bg-white p-2 shadow-lg sm:p-3 print:max-w-none print:min-w-0 print:p-0 print:shadow-none">
        <div className="w-full border border-black print:border-0 font-[Arial,sans-serif] text-black">

          {/* Document heading */}
          <header className="relative border-b border-black px-1 pt-1">
            <div className="absolute left-1 top-0.5 text-[9px] font-bold italic leading-none">
              CS Form No. 21
              <div className="text-[7px] font-normal">Revised 2026</div>
            </div>

            <h1 className="pt-2 text-center text-[20px] font-normal leading-tight">
              PERSONAL DATA SHEET
            </h1>

            <div className="mt-3 text-[8px] leading-[1.35]">
              <p className="font-bold italic">
                WARNING: Any misrepresentation made in the Personal Data Sheet
                and the Work Experience Sheet shall cause the filing of
                administrative/criminal cases against the person concerned.
              </p>
              <p className="font-bold italic">
                READ THE ATTACHED GUIDE TO FILLING OUT THE PERSONAL DATA SHEET
                (PDS) BEFORE ACCOMPLISHING THE PDS FORM.
              </p>
              <p>
                Tick appropriate boxes (✓) and use separate sheet if necessary.
                Indicate N/A if not applicable. DO NOT ABBREVIATE.
              </p>
            </div>
          </header>

          {/* I. Personal Information */}
          <Section>I. PERSONAL INFORMATION</Section>

          {/* Let each grid row adapt to the height of its tallest cell. */}
          <div className={formGridClass}>
            <Label className="col-span-1">1.</Label>
            <Label className="col-span-2">SURNAME</Label>
            <Field className="col-span-11 border-b border-l border-black" />

            <Label className="col-span-1">2.</Label>
            <Label className="col-span-2">FIRST NAME</Label>
            <Field className="col-span-8 border-l border-black" />
            <Label className="col-span-2 border-x">NAME EXTENSION (JR., SR.)</Label>
            <Field className="col-span-1" />

            <Label className="col-span-1 border-b"> </Label>
            <Label className="col-span-2 border-b">MIDDLE NAME</Label>
            <Field className="col-span-11 border-y border-l border-black" />

            <Label className="col-span-1 border-b ">3.</Label>
            <Label className="col-span-2 border-b ">DATE OF BIRTH<br />(dd/mm/yyyy)</Label>
            <Field className="col-span-3 border-b border-x border-black" />
            <Label className="col-span-3 border-r">16. CITIZENSHIP</Label>
            <Field className="col-span-5 " />
            
            <Label className="col-span-1 border-b">4.</Label>
            <Label className="col-span-2 border-b">PLACE OF BIRTH</Label>
            <Field className="col-span-3 border-b border-x border-black" />
            <Label className="col-span-3 border-r" align="center">
              If holder of dual citizenship,
            </Label>
            <div className="col-span-5 border-b border-black text-center">
              Pls. indicate country:
            </div>

            <Label className="col-span-1 border-b">5.</Label>
            <Label className="col-span-2 border-b">SEX AT BIRTH</Label>
            <Field className="col-span-3 border-b border-x border-black" />
            <Label className="col-span-3 border-b border-r" align="center">
              please indicate the details.
            </Label>
            <Field className="col-span-5 border-b border-black"/>

            <Label className=" col-span-1 border-b">6.</Label>
            <Label className=" col-span-2 border-b">CIVIL STATUS</Label>
            <Field className=" col-span-3 border-b border-x border-black" />
            <Label className=" col-span-2">17. RESIDENTIAL ADDRESS</Label>
            {/* 20px input + 8px description = 28px total. */}
            <div className="col-span-3 flex  flex-col">
              <Field className="shrink-0 border-b border-x border-black" />
              <div className="flex h-2 shrink-0 items-center justify-center border-b border-x italic border-black text-[6px] leading-none bg-gray-200">House/Block/Lot No.</div>
              <Field className="shrink-0 border-b border-x border-black" />
              <div className="flex h-2 shrink-0 items-center justify-center border-b border-x italic border-black text-[6px] leading-none bg-gray-200">Subdivision/Village</div>
            </div>
            {/* Street address field. */}
            <div className="col-span-3 flex  flex-col">
              <Field className="shrink-0 border-b border-black" />
              <div className="flex h-2 shrink-0 items-center justify-center border-b italic border-black text-[6px] leading-none bg-gray-200">Street</div>
              <Field className="shrink-0 border-b border-black" />
              <div className="flex h-2 shrink-0 items-center justify-center border-b italic border-black text-[6px] leading-none bg-gray-200">Barangay</div>
            </div>
            
            

            <Label className="col-span-1 border-b">7.</Label>
            <Label className="col-span-2 border-b">HEIGHT (m)</Label>
            <Field className="col-span-3 border-b border-x border-black" />
            <Label className="col-span-2">{""}</Label>
            {/* 20px input + 8px description = 28px total. */}
            <div className="col-span-3 flex min-h-7 flex-col">
              <Field className="shrink-0 border-b border-x border-black" />
              <div className="flex h-2 shrink-0 items-center justify-center border-b border-x italic border-black text-[6px] leading-none bg-gray-200">City/Municipality</div>
            </div>
            {/* Street address field. */}
            <div className="col-span-3 flex h-7 flex-col">
              <Field className="shrink-0 border-b border-black" />
              <div className="flex h-2 shrink-0 items-center justify-center border-b italic border-black text-[6px] leading-none bg-gray-200">Province</div>
            </div>

            <Label className="col-span-1 border-b">8.</Label>
            <Label className="col-span-2 border-b">WEIGHT (kg)</Label>
            <Field className="col-span-3 border-b border-x border-black" />
            <Label className="col-span-2 border-b">ZIPE CODE</Label>
            <Field className="col-span-6 border-b border-l border-black" />

            <Label className="col-span-1 border-b">9.</Label>
            <Label className="col-span-2 border-b">BLOOD TYPE</Label>
            <Field className="col-span-3 border-b border-x border-black" />
            <Label className="col-span-2">18. PERMANENT ADDRESS</Label>
            {/* 20px input + 8px description = 28px total. */}
            <div className="col-span-3 flex min-h-7 flex-col">
              <Field className="shrink-0 border-b border-x border-black" />
              <div className="flex h-2 shrink-0 items-center justify-center border-b border-x italic border-black text-[6px] leading-none bg-gray-200">House/Block/Lot No.</div>
            </div>
            {/* Street address field. */}
            <div className="col-span-3 flex h-7 flex-col">
              <Field className="shrink-0 border-b border-black" />
              <div className="flex h-2 shrink-0 items-center justify-center border-b italic border-black text-[6px] leading-none bg-gray-200">Street</div>
            </div>

            <Label className="col-span-1 border-b">10.</Label>
            <Label className="col-span-2 border-b">UMID ID NO.</Label>
            <Field className="col-span-3 border-b border-x border-black" />
            <Label className="col-span-2">{""}</Label>
            {/* 20px input + 8px description = 28px total. */}
            <div className="col-span-3 flex min-h-7 flex-col">
              <Field className="shrink-0 border-b border-x border-black" />
              <div className="flex h-2 shrink-0 items-center justify-center border-b border-x italic border-black text-[6px] leading-none bg-gray-200">Subdivision/Village</div>
            </div>
            {/* Street address field. */}
            <div className="col-span-3 flex h-7 flex-col">
              <Field className="shrink-0 border-b border-black" />
              <div className="flex h-2 shrink-0 items-center justify-center border-b italic border-black text-[6px] leading-none bg-gray-200">Barangay</div>
            </div>

            <Label className="col-span-1 border-b">11.</Label>
            <Label className="col-span-2 border-b">PAG-IBIG ID NO.</Label>
            <Field className="col-span-3 border-b border-x border-black" />
            <Label className="col-span-2">{""}</Label>
            {/* 20px input + 8px description = 28px total. */}
            <div className="col-span-3 flex min-h-7 flex-col">
              <Field className="shrink-0 border-b border-x border-black" />
              <div className="flex h-2 shrink-0 items-center justify-center border-b border-x italic border-black text-[6px] leading-none bg-gray-200">City/Municipality</div>
            </div>
            {/* Street address field. */}
            <div className="col-span-3 flex h-7 flex-col">
              <Field className="shrink-0 border-b border-black" />
              <div className="flex h-2 shrink-0 items-center justify-center border-b italic border-black text-[6px] leading-none bg-gray-200">Province</div>
            </div>

            <Label className="col-span-1 border-b">12.</Label>
            <Label className="col-span-2 border-b">PHILHEALTH NO.</Label>
            <Field className="col-span-3 border-b border-x border-black" />
            <Label className="col-span-2 border-b">ZIP CODE</Label>
            <Field className="col-span-6 border-b border-l border-black" />

            <Label className="col-span-1 border-b">13.</Label>
            <Label className="col-span-2 border-b">PhilSys Card Number (PCN)</Label>
            <Field className="col-span-3 border-b border-x border-black" />
            <Label className="col-span-2 border-b">19. TELEPHONE NO.</Label>
            <Field className="col-span-6 border-b border-l border-black" />

            <Label className="col-span-1 border-b">14.</Label>
            <Label className="col-span-2 border-b">TIN NO.</Label>
            <Field className="col-span-3 border-b border-x border-black" />
            <Label className="col-span-2 border-b">20. MOBILE NO.</Label>
            <Field className="col-span-6 border-b border-l border-black" />

            <Label className="col-span-1 border-b">15.</Label>
            <Label className="col-span-2 border-b">AGENCY EMPLOYEE NO.</Label>
            <Field className="col-span-3 border-b border-x border-black" />
            <Label className="col-span-2 border-b">21. E-MAIL ADDRESS (if any)</Label>
            <Field className="col-span-6 border-b border-l border-black" />            
          </div>

          {/* II. Family Background */}
          <Section>II. FAMILY BACKGROUND</Section>

          <div className={formGridClass}>
            <Label className="col-span-1">22.</Label>
            <Label className="col-span-2">SPOUSE&apos;S SURNAME</Label>
            <Field className="col-span-5 border-b border-x border-black" />
            <Label className="col-span-4 border-b">23. NAME OF CHILDREN (Write full name and list all)</Label>
            <Label className="col-span-2 border-b border-l" align="center">DATE OF BIRTH (dd/mm/yyyy)</Label>

            <Label className="col-span-1 border-b">{""}</Label>
            <Label className="col-span-2 border-b">FIRST NAME</Label>
            <Field className="col-span-3 border-b border-x border-black" />
            <Label className="col-span-1 border-b">NAME EXTN. (JR., SR)</Label>
            <Field className="col-span-1 border-b border-x border-black" />
            <Field className="col-span-4 border-b border-black" />
            <Field className="col-span-2 border-b border-l border-black" />

            <Label className="col-span-1 border-b">{""}</Label>
            <Label className="col-span-2 border-b">MIDDLE NAME</Label>
            <Field className="col-span-5 border-b border-x border-black" />
            <Field className="col-span-4 border-b border-black" />
            <Field className="col-span-2 border-b border-l border-black" />

            <Label className="col-span-1 border-b">{""}</Label>
            <Label className="col-span-2 border-b">OCCUPATION</Label>
            <Field className="col-span-5 border-b border-x border-black" />
            <Field className="col-span-4 border-b border-black" />
            <Field className="col-span-2 border-b border-l border-black" />

            <Label className="col-span-1 border-b">{""}</Label>
            <Label className="col-span-2 border-b">EMPLOYER/ BUSINESS NAME</Label>
            <Field className="col-span-5 border-b border-x border-black" />
            <Field className="col-span-4 border-b border-black" />
            <Field className="col-span-2 border-b border-l border-black" />

            <Label className="col-span-1 border-b">{""}</Label>
            <Label className="col-span-2 border-b">BUSINESS ADDRESS</Label>
            <Field className="col-span-5 border-b border-x border-black" />
            <Field className="col-span-4 border-b border-black" />
            <Field className="col-span-2 border-b border-l border-black" />

            <Label className="col-span-1 border-b">{""}</Label>
            <Label className="col-span-2 border-b">TELEPHONE NO.</Label>
            <Field className="col-span-5 border-b border-x border-black" />
            <Field className="col-span-4 border-b border-black" />
            <Field className="col-span-2 border-b border-l border-black" />

            <div className="bg-gray-200 col-span-8 border-b border-black text-center text-[8px] font-bold italic text-red-600 border-r">
              (Continue on sheet C1 if necessary)
            </div>
            <Field className="col-span-4 border-b border-black" />
            <Field className="col-span-2 border-b border-l border-black" />

            <Label className="col-span-1">24.</Label>
            <Label className="col-span-2">FATHER&apos;S SURNAME</Label>
            <Field className="col-span-5 border-b border-x border-black" />
            <Field className="col-span-4 border-b border-black" />
            <Field className="col-span-2 border-b border-l border-black" />

            <Label className="col-span-1">{""}</Label>
            <Label className="col-span-2">FIRST NAME</Label>
            <Field className="col-span-5 border-b border-x border-black" />
            <Field className="col-span-4 border-b border-black" />
            <Field className="col-span-2 border-b border-l border-black" />

            <Label className="col-span-1 border-b">{""}</Label> 
            <Label className="col-span-2 border-b">MIDDLE NAME</Label>
            <Field className="col-span-5 border-b border-x border-black" />
            <Field className="col-span-4 border-b border-black" />
            <Field className="col-span-2 border-b border-l border-black" />

            <Label className="col-span-1">25.</Label>
            <Label className="col-span-7 border-r">MOTHER&apos;S MAIDEN NAME</Label>
            <Field className="col-span-4 border-black" />
            <Field className="col-span-2 border-l border-black" />

            <Label className="col-span-1">{""}</Label>
            <Label className="col-span-2">SURNAME</Label>
            <Field className="col-span-5 border-y border-x border-black" />
            <Field className="col-span-4 border-y border-black" />
            <Field className="col-span-2 border-y border-l border-black" />

            <Label className="col-span-1">{""}</Label>
            <Label className="col-span-2">FIRST NAME</Label>
            <Field className="col-span-5 border-b border-x border-black" />
            <Field className="col-span-4 border-b border-black" />
            <Field className="col-span-2 border-b border-l border-black" />

            <Label className="col-span-1 border-b">{""}</Label>
            <Label className="col-span-2 border-b">MIDDLE NAME</Label>
            <Field className="col-span-5 border-b border-x border-black" />
             <div className="bg-gray-200 col-span-6 border-b border-black text-center text-[8px] font-bold italic text-red-600">
            (Continue on sheet C1 if necessary)</div>
          </div>

          

          {/* III. Educational Background */}
          <Section>III. EDUCATIONAL BACKGROUND</Section>

          <div className={formGridClass}>
            <Label className="col-span-1 bg-gray-200 border-b">
              26.
            </Label>
            <Label className="col-span-2 bg-gray-200 border-r border-b border-black text-center font-bold">
              LEVEL
            </Label>
            <Label className="col-span-3 border-r border-b border-black p-1 text-center" align="center">
              NAME OF SCHOOL<br />
              (Write in full)
            </Label>
            <Label className="col-span-3 border-r border-b border-black p-1 text-center" align="center">
              BASIC EDUCATION/DEGREE/COURSE<br />
              (Write in full)
            </Label>
            {/* Period of attendance: title on top, equal-width From and To cells at the bottom. */}
            <div className="col-span-2 flex flex-col border-r border-b border-black text-center">
              <div className="flex flex-1 items-center justify-center px-0.5 text-[7px] font-normal leading-tight">
                PERIOD OF ATTENDANCE (yyyy)
              </div>

              {/* Equal-width bottom columns separated by a vertical border. */}
              <div className="grid grid-cols-2 border-t border-black text-[7px] leading-none">
                <div className="flex h-4 items-center justify-center border- border-black">
                  From
                </div>

                <div className="flex h-4 items-center justify-center border-l border-black">
                  To
                </div>
              </div>
            </div>
            <Label className="col-span-1 border-r border-b border-black text-center">
              HIGHEST LEVEL / UNITS EARNED<br />
              (if not graduated)
            </Label>
            <Label className="col-span-1 border-b border-r border-black text-center">
              YEAR GRADUATED
            </Label>
            <Label className="col-span-1 border-b border-black text-center">
              SCHOLARSHIP/ ACADEMIC HONORS RECEIVED
            </Label>

            {educationRows.map((level) => (
              <React.Fragment key={level}>
                <div className="flex col-span-3 items-center justify-center border-r border-b border-black px-1 text-center">
                  {level}
                </div>
                <Field className="col-span-3 border-r border-b border-black" />
                <Field className="col-span-3 border-r border-b border-black" />
                <Field className="col-span-1 border-r border-b border-black" />
                <Field className="col-span-1 border-r border-b border-black" />
                <Field className="col-span-1 border-r border-b border-black" />
                <Field className="col-span-1 border-r border-b border-black" />
                <Field className="col-span-1 border-b border-black" />
              </React.Fragment>
            ))}
          </div>

          <div className="bg-gray-200 col-span-8 border-b border-black text-center text-[8px] font-bold italic text-red-600">
            (Continue on sheet C8 if necessary)
          </div>

          {/* Signature and date footer */}
          <div className="grid grid-cols-[17.13%_46.23%_12.05%_24.59%] border-b border-black">
            <div className="flex items-center justify-center border-r border-black py-3 text-[10px] font-bold italic">
              SIGNATURE
            </div>
            <div className="flex items-end justify-center border-r border-black pb-1 text-[7px] text-red-600">
              (e-signature/digital certificate)
            </div>
            <div className="flex items-center justify-center border-r border-black text-[10px] font-bold italic">
              DATE
            </div>
            <Field />
          </div>

          {/* Document page information */}
          <div className="flex justify-end text-[7px] italic">
            CS FORM 212 (Revised 2026), Page 1 of 4
          </div>
        </div>
      </div>

      {/* Print controls are hidden when printing. */}
      </div>
      <div className="mx-auto mt-4 flex w-full max-w-[850px] justify-end print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded bg-black px-5 py-2 text-sm text-white hover:bg-neutral-700"
        >
          Print Personal Data Sheet
        </button>
      </div>

      <style jsx global>{`
        @media print {
          /* Set the physical paper size to A4 portrait */
          @page {
            size: 210mm 297mm;
            margin: 8mm;
          }

          html,
          body {
            width: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }

          /* Remove browser screen spacing */
          main {
            width: 100% !important;
            min-height: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
          }

          /* Make the document fit the printable A4 width */
          main > div {
            width: 100% !important;
            max-width: none !important;
            min-width: 0 !important;
            overflow: visible !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Remove decorative shadows */
          * {
            box-shadow: none !important;
          }

          /* Keep form fields white with black text */
          textarea,
          input,
          select {
            background: white !important;
            color: black !important;
            appearance: none !important;
            -webkit-appearance: none !important;
          }

          /* Ensure the document background is white */
          .bg-gray-200,
          .bg-white {
            background-color: white !important;
          }

          /* Prevent content from being clipped */
          .overflow-x-auto {
            overflow: visible !important;
          }
        }
      `}</style>
    </main>
  )
}
