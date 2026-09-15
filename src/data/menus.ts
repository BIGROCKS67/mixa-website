import type { MenuItem, MenuSection, MenuTab } from "@/data/allergens";
import { photos } from "@/data/photos";

export type { MenuItem, MenuSection, MenuTab };

export const menuTabs: MenuTab[] = [
  {
    id: "food",
    label: "Food",
    sections: [
      {
        id: "snacks",
        title: "Snacks & Small Bites",
        items: [
          {
            name: "Beef Fat Hash Brown",
            description: "Truffle mayo · parmesan snow · chives",
            price: "8.5",
            allergens: ["E", "D", "MU", "SU", "G", "F"],
          },
          {
            name: "Croquettes",
            description: "Nduja & manchego croquettes · roast garlic mayo · hot honey",
            price: "8.5",
            allergens: ["D", "E", "G", "MU", "SU"],
          },
          {
            name: "Gunpowder Potatoes",
            description: "Curry leaf · mustard seed & lime yoghurt",
            price: "7.5",
            dietary: "vegetarian",
            allergens: ["D", "S", "SU", "MU"],
          },
          {
            name: "Roast Pepper Houmus",
            description: "Roasted red pepper houmus · pico de gallo · charred flatbread",
            price: "7",
            dietary: "vegan",
            allergens: ["SO", "G"],
          },
          {
            name: "Crispy Fried Olives",
            description: "Whipped feta · hot honey · pistachio dukkah",
            price: "7",
            dietary: "vegetarian",
            allergens: ["D", "N", "S"],
          },
        ],
      },
      {
        id: "small-plates",
        title: "Small Plates",
        items: [
          {
            name: "Duck Bao Bun",
            description: "Cherry hoisin · cucumber pickle · sesame",
            price: "12",
            allergens: ["G", "S", "SO", "SU"],
          },
          {
            name: "Chicken Thigh",
            description: "Black garlic · soy & honey glaze · sesame slaw",
            price: "9",
            allergens: ["SO", "S"],
          },
          {
            name: "Miso Mushroom",
            description: "Wild mushroom · whipped feta · crispy onions",
            price: "8.5",
            dietary: "vegetarian",
            allergens: ["D", "SO", "G", "S"],
          },
          {
            name: "Pork Vindaloo",
            description: "Vindaloo glaze · pickled carrot · yoghurt rice",
            price: "9.5",
            allergens: ["D", "SU"],
          },
          {
            name: "Bavette Steak",
            description: "Weeping tiger dressing · smoked onion purée · crispy onions",
            price: "12.5",
            allergens: ["F", "SO", "S", "D", "SU"],
          },
          {
            name: "Charred Monkfish",
            description: "Tandoori butter · burnt lime yoghurt",
            price: "12.5",
            allergens: ["F", "D"],
          },
          {
            name: "Garlic Prawns",
            description: "Fermented chilli · lemon · sourdough",
            price: "11",
            allergens: ["SF", "D", "G"],
          },
          {
            name: "Halloumi Fries",
            description: "Za'atar · lime yoghurt · hot honey",
            price: "8",
            dietary: "vegetarian",
            allergens: ["D", "S"],
          },
          {
            name: "Venison Kofta",
            description: "Blackberry harissa · smoked yoghurt · pistachio dukkah",
            price: "9.5",
            allergens: ["D", "S", "N"],
          },
          {
            name: "Smoked Ox Cheek Doughnut",
            description: "Truffle aioli · beef dripping jus",
            price: "11",
            allergens: ["C", "SU", "F", "G", "E", "D"],
          },
          {
            name: "Roast Squash",
            description: "Vadouvan butter · whipped feta · hazelnut dukkah",
            price: "8",
            dietary: "vegetarian",
            allergens: ["D"],
          },
          {
            name: "Korean Fried Cauliflower",
            description: "Gochujang glaze · miso ranch",
            price: "8",
            dietary: "vegetarian",
            allergens: ["G", "E", "D", "SO", "MU"],
          },
          {
            name: "Aubergine Katsu",
            description: "Katsu curry sauce · pickled red onions · sesame",
            price: "9",
            dietary: "vegetarian",
            allergens: ["G", "E", "S", "SO"],
          },
          {
            name: "Coal Leeks",
            description: "Black garlic butter · hazelnut pangratto · whipped feta",
            price: "9",
            dietary: "vegetarian",
            allergens: ["D", "SO", "MU", "SU", "N", "G"],
          },
          {
            name: "Lamb Cigar",
            description: "Harissa · preserved lemon yoghurt",
            price: "10",
            allergens: ["G", "D"],
          },
        ],
      },
      {
        id: "sides",
        title: "Sides",
        items: [
          {
            name: "Crispy Patatas Bravas",
            description: "Harissa brava sauce · whipped garlic",
            price: "6",
          },
          {
            name: "Greek Salad",
            description: "Cucumber · tomato · red onion · olives · feta",
            price: "8",
            dietary: "vegetarian",
            allergens: ["D"],
          },
          {
            name: "Fries",
            description: "Skin-on fries · sea salt",
            price: "5",
            dietary: "vegan",
          },
          {
            name: "Sweet Potato Fries",
            description: "Sweet potato fries · sea salt",
            price: "5",
            dietary: "vegan",
          },
        ],
      },
    ],
  },
  {
    id: "roasts",
    label: "Roasts",
    sections: [
      {
        id: "roasts-list",
        title: "Roasts",
        note: "All served with roast potatoes, maple & harissa carrots, charred hispi cabbage, braised red cabbage, roast squash, coal leeks, Yorkshire pudding, black garlic & red wine jus. Allergens: D, E, G, SU.",
        items: [
          {
            name: "Black Garlic Glazed Pork Ribeye",
            price: "26",
          },
          {
            name: "Lemon & Thyme Chicken",
            price: "24",
          },
          {
            name: "Rosemary & Garlic Beef Sirloin",
            price: "28",
          },
          {
            name: "Mushroom, Cranberry & Brie Wellington",
            price: "24",
            dietary: "vegetarian",
            allergens: ["D", "G", "C"],
          },
        ],
      },
    ],
  },
  {
    id: "cheeses",
    label: "Cheeses",
    sections: [
      {
        id: "cheeses-list",
        title: "Cheeses",
        note: "All of our cheeses are hand selected by our friends at The Winchester Cheese Stall.",
        items: [
          {
            name: "Taleggio",
            description:
              "Soft Italian washed-rind cheese — rich and creamy with a buttery, slightly fruity tang and a savoury earthy finish",
          },
          {
            name: "Heckfield",
            description:
              "Hampshire-made soft cheese — luxuriously creamy and buttery with delicate earthy notes and a gentle umami finish",
          },
          {
            name: "Spendwood Ewe",
            description:
              "A firm ewe's milk cheese from Berkshire — rich and nutty with a smooth, buttery texture and a long, savoury finish",
          },
          {
            name: "9-Month Manchego",
            description:
              "Aged Spanish ewe's milk cheese — firm and buttery with rich nutty notes, gentle sweetness and a lingering savoury finish",
          },
          {
            name: "Colston Bassett Stilton",
            description:
              "Traditional English blue — rich, creamy and beautifully balanced with mellow spice, savoury depth and a long buttery finish",
          },
          {
            name: "Baron Bigod",
            description:
              "Suffolk-made Brie-style cheese — luxuriously creamy and buttery with earthy umami notes and a rich, lingering finish",
          },
          {
            name: "Keen's Cheddar",
            description:
              "Traditional Somerset farmhouse cheddar — rich and full bodied with a firm, crumbly texture, deep savoury notes and a lingering tang",
          },
        ],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    sections: [
      {
        id: "hot-drinks",
        title: "Hot Drinks",
        items: [
          { name: "Latte", price: "4.50" },
          { name: "Cappuccino", price: "4.50" },
          { name: "Americano", price: "4.50" },
          { name: "Flat White", price: "4.50" },
          { name: "Espresso (single or double)", price: "2.50 / 4.00" },
          { name: "Tea", price: "3.50" },
          { name: "Matcha", price: "5.50" },
        ],
      },
      {
        id: "after-dinner",
        title: "After-Dinner Drinks",
        items: [
          { name: "Negroni", price: "10" },
          { name: "Espresso Martini", price: "12" },
          { name: "Port", price: "6" },
          { name: "Limoncello Spritz", price: "12" },
          { name: "Limoncello", price: "4.50" },
          { name: "Baileys", price: "6" },
        ],
      },
      {
        id: "desserts-list",
        title: "Desserts",
        items: [
          {
            name: "Cheese Board",
            description: "Your choice of 5 cheeses · artisan crackers · house made pickles · grapes",
            price: "12",
            allergens: ["G", "D", "MU", "SU", "N"],
          },
          {
            name: "Embers",
            description: "Chocolate fondant · sour cherry · chocolate soil · honeycomb",
            price: "8.50",
            allergens: ["D", "G", "E", "SO"],
          },
          {
            name: "Affogato",
            description: "Add a shot £2 · Bailey's · Kahlúa · Frangelico · Disaronno",
            price: "6",
            allergens: ["D", "E"],
          },
          {
            name: "Ice Cream",
            description:
              "3 scoops — vanilla · chocolate · strawberry · salted caramel · fig & honey · vegan pineapple & coconut",
            price: "6",
            allergens: ["D", "E"],
          },
        ],
      },
    ],
  },
  {
    id: "wine",
    label: "Wine",
    sections: [
      {
        id: "white",
        title: "White",
        note: "Prices: 125ml · 175ml · 250ml · Bottle",
        items: [
          {
            name: "Amoranza Verdejo 11.0%",
            description: "Delicately fragrant with hints of green apple and fennel",
            price: "5.80 · 6.80 · 8.30 · 24.50",
          },
          {
            name: "Pinot Grigio 10.5%",
            description: "Gentle floral and citrus aromas, with hints of orchard fruits and lightly honeyed notes",
            price: "5.80 · 6.80 · 8.30 · 24.50",
          },
          {
            name: "Kir Yianni Paranga 13.0%",
            description: "Refined aromas of jasmine, white peach and apricot",
            price: "8.00 · 9.60 · 11.20 · 32.00",
          },
          {
            name: "Sauvignon Blanc 11.4%",
            description: "Exudes aromas of peach, white flowers and vanilla pod",
            price: "8.00 · 9.60 · 11.20 · 32.00",
          },
        ],
      },
      {
        id: "red",
        title: "Red",
        note: "Prices: 125ml · 175ml · 250ml · Bottle",
        items: [
          {
            name: "Amoranza Tempranillo 11.5%",
            description: "Sweet damson and soft plum fruit, red berries notes",
            price: "5.80 · 6.80 · 8.30 · 24.50",
          },
          {
            name: "Malbec 12.5%",
            description: "Intense notes of plum, damson and dark chocolate",
            price: "6.40 · 7.80 · 9.20 · 26.00",
          },
          {
            name: "Kir Yianni Paranga 13.5%",
            description: "Notes of red forest fruits, cherry, sweet spices and pepper",
            price: "8.00 · 9.60 · 11.20 · 32.00",
          },
          {
            name: "Riviera Pinot Noir",
            description: "Strong notes of strawberries, raspberries and red currants",
            price: "8.00 · 9.60 · 11.20 · 32.00",
          },
        ],
      },
      {
        id: "rose",
        title: "Rosé",
        note: "Prices: 125ml · 175ml · 250ml · Bottle",
        items: [
          {
            name: "Amoranza Garnacha 12.0%",
            description: "Fresh and juicy fruit notes",
            price: "5.80 · 6.80 · 8.30 · 24.50",
          },
          {
            name: "#Lou 12.5%",
            description: "Exotic notes of guava and peach with a hint of honey",
            price: "7.60 · 8.60 · 10.20 · 30.00",
          },
        ],
      },
      {
        id: "sparkling",
        title: "Sparkling",
        note: "Prices: Glass · Bottle",
        items: [
          {
            name: "Mano Di Flori Prosecco",
            description: "Light, crisp and refreshing flavours of green apple, acacia blossom and apricot",
            price: "7.50 · 28",
          },
        ],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    sections: [
      {
        id: "cocktails",
        title: "Cocktails",
        items: [
          {
            name: "Rose and Cucumber Cooler",
            description: "Rosé · cucumber · citrus",
            price: "12.00",
          },
          {
            name: "Apple and Honey Margarita",
            description: "Tequila · apple · honey · lime",
            price: "12.00",
          },
          {
            name: "Flavoured Mojito",
            description: "Fresh · fruity · minty — ask for this week's flavour",
            price: "10.00",
          },
          {
            name: "St-Germain Spritz",
            description: "Elderflower · citrus · bubbles",
            price: "10.00",
          },
          {
            name: "Sangria",
            description: "Red wine · fresh fruit · citrus",
            price: "10.00",
          },
          {
            name: "Limoncello Spritz",
            description: "Limoncello · elderflower · mint · prosecco",
            price: "12.00",
          },
          {
            name: "Aperol Spritz",
            description: "Aperol · prosecco · soda · orange",
            price: "10.00",
          },
        ],
      },
      {
        id: "spirits",
        title: "Spirits",
        note: "25ml · 50ml",
        items: [
          { name: "Grey Goose Vodka", price: "6.25 · 11.25" },
          { name: "Smirnoff Vodka", price: "5.00 · 9.20" },
          { name: "Bombay Sapphire", price: "5.20 · 9.20" },
          { name: "Bombay Sapphire Lemon", price: "5.20 · 9.20" },
          { name: "Bacardi White Rum", price: "5.20 · 9.20" },
          { name: "Bacardi Spiced Rum", price: "5.20 · 9.20" },
          { name: "Malibu", price: "5.20 · 9.20" },
          { name: "Disaronno", price: "5.20 · 9.20" },
          { name: "Jack Daniels", price: "5.20 · 9.20" },
          { name: "Patron Silver", price: "6.25 · 11.25" },
          { name: "Tequila Gold", price: "6.25 · 11.25" },
        ],
      },
      {
        id: "soft-drinks",
        title: "Soft Drinks",
        items: [
          { name: "Coke (330ml)", price: "3.50" },
          { name: "Diet Coke (330ml)", price: "3.50" },
          { name: "Appletiser (275ml)", price: "4.00" },
          { name: "Victorian Lemonade (275ml)", price: "4.00" },
          { name: "Ginger Beer (275ml)", price: "4.00" },
          { name: "J20 (330ml)", price: "3.50" },
          { name: "Loux (lemon or orange)", price: "3.00" },
          { name: "Orange Juice (half pint)", price: "2.50" },
          { name: "Apple Juice (half pint)", price: "2.50" },
          { name: "Fruit Shoot (275ml)", price: "3.00" },
          { name: "Tonic Water (200ml)", price: "3.00" },
          { name: "Still Water (300ml / 700ml)", price: "3.00 / 5.00" },
          { name: "Sparkling Water (300ml / 700ml)", price: "3.00 / 5.00" },
        ],
      },
      {
        id: "beer",
        title: "Bottled Beer & Cider",
        items: [
          { name: "Estrella 4.6% (330ml)", price: "5.25" },
          { name: "Asahi 5% (330ml)", price: "5.25" },
          { name: "Mahou 4.8% (330ml)", price: "5.25" },
          { name: "San Miguel 5% (330ml)", price: "5.25" },
          { name: "Bravo Zulu Pilsner 4.4% — Powder Monkey Brewery (440ml)", price: "5.50" },
          { name: "Drop Anchor Pale Ale 4.6% — Powder Monkey Brewery (440ml)", price: "5.50" },
          { name: "Thatchers Gold 4.8% (500ml)", price: "5.50" },
          {
            name: "Rekorderlig 3.4% (500ml)",
            description: "Strawberry & lime · passionfruit · wild berries",
            price: "7.00",
          },
        ],
      },
      {
        id: "alcohol-free",
        title: "Non-Alcoholic",
        items: [
          { name: "Peroni Nastro Azzurro 0.0% (330ml)", price: "4.50" },
          { name: "Thatchers Zero (500ml)", price: "4.50" },
          { name: "Guinness Zero (538ml)", price: "5.00" },
          { name: "Tanqueray Gin 0.0% (25ml)", price: "4.50" },
        ],
      },
    ],
  },
];

export const featuredDishes = [
  {
    name: "Duck Bao Bun",
    description: "Cherry hoisin · cucumber pickle · sesame",
    price: "12.00",
    image: photos.sharingPlatesWine,
  },
  {
    name: "Bavette Steak",
    description: "Weeping tiger dressing · smoked onion purée · crispy onions",
    price: "12.50",
    image: photos.kitchenPassPlating,
  },
  {
    name: "Garlic Prawns",
    description: "Fermented chilli · lemon · sourdough",
    price: "11.00",
    image: photos.heroSharingSpread,
  },
  {
    name: "Embers",
    description: "Chocolate fondant · sour cherry · chocolate soil · honeycomb",
    price: "8.50",
    image: photos.dessertsKitchen,
  },
];

export const categoryHighlights = [
  {
    title: "Small Plates",
    description:
      "World flavours on one table — sharing plates built around seasonal produce and carefully sourced ingredients.",
    href: "/menu#food",
    image: photos.sharingPlatesWine,
  },
  {
    title: "Roasts",
    description:
      "Sunday roasts with all the trimmings — pork ribeye, beef sirloin, lemon & thyme chicken, or a mushroom & brie wellington.",
    href: "/menu#roasts",
    image: photos.interiorDiningKitchen,
  },
  {
    title: "Cocktails",
    description:
      "Classic cocktails and a focused drinks menu. Terrace seating, live music nights and everything you need for a relaxed evening in Winchester.",
    href: "/menu#drinks",
    image: photos.wineProseccoTable,
  },
];
