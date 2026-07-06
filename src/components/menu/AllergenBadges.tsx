import { cn } from "@/lib/utils";
import { allergenLabelMap } from "@/data/allergens";

type AllergenBadgesProps = {
  dietary?: "vegetarian" | "vegan";
  allergens?: string[];
  className?: string;
};

function Badge({
  code,
  variant = "allergen",
}: {
  code: string;
  variant?: "dietary" | "allergen";
}) {
  const label = allergenLabelMap[code] ?? code;

  return (
    <span
      title={label}
      className={cn(
        "inline-flex min-w-[1.75rem] items-center justify-center rounded-sm px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide",
        variant === "dietary"
          ? "bg-oregano/12 text-oregano ring-1 ring-oregano/20"
          : "bg-pepper/5 text-pepper/70 ring-1 ring-pepper/10"
      )}
    >
      {code}
    </span>
  );
}

export function AllergenBadges({ dietary, allergens, className }: AllergenBadgesProps) {
  if (!dietary && (!allergens || allergens.length === 0)) return null;

  return (
    <div className={cn("mt-3 flex flex-wrap items-center gap-1.5", className)}>
      {dietary === "vegetarian" && <Badge code="V" variant="dietary" />}
      {dietary === "vegan" && <Badge code="VG" variant="dietary" />}
      {allergens?.map((code) => (
        <Badge key={code} code={code} variant="allergen" />
      ))}
    </div>
  );
}

export function AllergenKey() {
  return (
    <div className="mt-6 rounded-sm border border-pepper/8 bg-white p-5 sm:p-6">
      <p className="font-title mb-5 text-[11px] text-oregano">Allergen Information</p>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
        <div className="min-w-[140px]">
          <p className="font-title mb-3 text-[10px] text-pepper/50">Dietary</p>
          <div className="space-y-2">
            {[
              { code: "V", label: "Vegetarian" },
              { code: "VG", label: "Vegan" },
            ].map((item) => (
              <div key={item.code} className="flex items-center gap-3 text-sm">
                <Badge code={item.code} variant="dietary" />
                <span className="font-body text-pepper/70">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <p className="font-title mb-3 text-[10px] text-pepper/50">Allergens</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
            {[
              ["C", "Celery"],
              ["D", "Dairy"],
              ["E", "Egg"],
              ["F", "Fish"],
              ["G", "Gluten"],
              ["M", "Mustard"],
              ["N", "Nuts"],
              ["S", "Sesame"],
              ["SF", "Shellfish"],
              ["SO", "Soy"],
              ["SU", "Sulphites"],
            ].map(([code, label]) => (
              <div key={code} className="flex items-center gap-2.5 text-sm">
                <Badge code={code} />
                <span className="font-body text-pepper/70">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
