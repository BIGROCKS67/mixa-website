export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  dietary?: "vegetarian" | "vegan";
  allergens?: string[];
};

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export type MenuTab = {
  id: string;
  label: string;
  sections: MenuSection[];
};

export type AllergenCode = {
  code: string;
  label: string;
};

export const dietaryLegend: AllergenCode[] = [
  { code: "V", label: "Vegetarian" },
  { code: "VG", label: "Vegan" },
];

export const allergenLegend: AllergenCode[] = [
  { code: "C", label: "Celery" },
  { code: "D", label: "Dairy" },
  { code: "E", label: "Egg" },
  { code: "F", label: "Fish" },
  { code: "G", label: "Gluten" },
  { code: "M", label: "Mustard" },
  { code: "N", label: "Nuts" },
  { code: "S", label: "Sesame" },
  { code: "SF", label: "Shellfish" },
  { code: "SO", label: "Soy" },
  { code: "SU", label: "Sulphites" },
];

export const allergenLabelMap = Object.fromEntries(
  [...dietaryLegend, ...allergenLegend].map((item) => [item.code, item.label])
) as Record<string, string>;
