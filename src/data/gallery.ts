import { photos } from "./photos";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: "food" | "restaurant" | "wine" | "atmosphere";
};

/** All 19 client ⭐ photos in use across gallery */
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: photos.heroSharingSpread,
    alt: "Eight small plates shared on a wooden table — octopus, scotch egg, pork belly and more",
    category: "food",
  },
  {
    id: "2",
    src: photos.interiorDiningKitchen,
    alt: "MIXA dining room with open kitchen, wooden MIXA letters and oregano-green panelling",
    category: "restaurant",
  },
  {
    id: "3",
    src: photos.wineSharingTable,
    alt: "Small plates with red and white wine on the table",
    category: "wine",
  },
  {
    id: "4",
    src: photos.scotchEgg,
    alt: "Scotch egg with jammy yolk, watercress and harissa mayo on a black plate",
    category: "food",
  },
  {
    id: "5",
    src: photos.exteriorStorefront,
    alt: "MIXA storefront on St George's Street, Winchester",
    category: "atmosphere",
  },
  {
    id: "6",
    src: photos.whippedFetaPita,
    alt: "Whipped feta with roasted chickpeas, honey and charred pita bread",
    category: "food",
  },
  {
    id: "7",
    src: photos.mushroomFlatbreadKitchen,
    alt: "Chef holding mushroom flatbread from the open kitchen",
    category: "restaurant",
  },
  {
    id: "8",
    src: photos.dessertWineEvening,
    alt: "Chocolate mousse and baklava with red and white wine in the evening",
    category: "wine",
  },
  {
    id: "9",
    src: photos.interiorWindowSeating,
    alt: "Window seating overlooking St George's Street with wine glasses set",
    category: "atmosphere",
  },
  {
    id: "10",
    src: photos.halloumiSharing,
    alt: "Grilled halloumi with mushroom flatbread and red wine",
    category: "food",
  },
  {
    id: "11",
    src: photos.kitchenPassPlating,
    alt: "Chefs plating octopus, tartare and pork belly at the kitchen pass",
    category: "restaurant",
  },
  {
    id: "12",
    src: photos.wineProseccoTable,
    alt: "Prosecco and red wine with halloumi and greens",
    category: "wine",
  },
  {
    id: "13",
    src: photos.baklavaDessert,
    alt: "Baklava with vanilla ice cream and honey syrup",
    category: "food",
  },
  {
    id: "14",
    src: photos.radicchioWineLunch,
    alt: "Charred radicchio and mushroom flatbread with white wine at lunch",
    category: "food",
  },
  {
    id: "15",
    src: photos.dessertsKitchen,
    alt: "Cheesecake, chocolate mousse and galaktoboureko at the pass",
    category: "food",
  },
  {
    id: "16",
    src: photos.sharingPlatesWine,
    alt: "Mezze spread with wine by the window at MIXA",
    category: "food",
  },
  {
    id: "17",
    src: photos.brandSignage,
    alt: "MIXA brand board — Terrace, Cocktails, Wine, Music",
    category: "atmosphere",
  },
  {
    id: "18",
    src: photos.tableSettingGreen,
    alt: "Table settings with green napkins and wine glasses",
    category: "atmosphere",
  },
  {
    id: "19",
    src: photos.kitchenCroquettePass,
    alt: "Croquette and scotch egg at the MIXA kitchen pass",
    category: "restaurant",
  },
];

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "restaurant", label: "Restaurant" },
  { id: "wine", label: "Wine" },
  { id: "atmosphere", label: "Atmosphere" },
] as const;
