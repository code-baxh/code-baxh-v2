import { MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";

/** Offices and phone numbers, shown beside both forms. */
export function ContactDetails() {
  return (
    <div className="card p-6 text-left sm:p-8">
      <h2 className="text-xl font-semibold">Offices and phone</h2>
      <ul className="mt-5 space-y-4 text-muted">
        {site.locations.map((l) => (
          <li key={l.city} className="flex gap-3">
            <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-accent-text" />
            <span>
              <span className="block text-fg">
                {l.city}, {l.country}
              </span>
              {l.role}
            </span>
          </li>
        ))}
        {[
          ["Sweden", site.contact.phoneSweden],
          ["Pakistan", site.contact.phonePakistan],
        ].map(([country, phone]) => (
          <li key={country} className="flex gap-3">
            <Phone aria-hidden className="mt-1 size-5 shrink-0 text-accent-text" />
            <span>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="block text-fg hover:text-accent-text">
                {phone}
              </a>
              {country}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
