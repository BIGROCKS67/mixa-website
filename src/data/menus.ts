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
            name: "Whipped Feta",
            description: "Hot honey · crispy chickpeas · oregano oil · charred flatbread",
            price: "8.5",
            dietary: "vegetarian", allergens: ['D', 'G'],
          },
          {
            name: "Crispy Rice Tuna",
            description: "Yellowfin tuna · soy yolk emulsion · chilli crunch · pickled cucumber",
            price: "9.5",
            allergens: ['F', 'E', 'G', 'SO', 'S'],
          },
          {
            name: "Crispy Fried Olives",
            description: "Whipped feta · hot honey · pistachio dukka · charred lemon · mint oil",
            price: "7",
            dietary: "vegan", allergens: ['D', 'N', 'S'],
          },
          {
            name: "Lamb Kofta Scotch Egg",
            description: "Soft yolk · harissa mayo · mint salt",
            price: "8.5",
            allergens: ['G', 'E', 'M'],
          },
          {
            name: "Burnt Corn Ribs",
            description: "Chipotle butter · lime crema · pecorino",
            price: "7",
            dietary: "vegetarian", allergens: ['D'],
          },
        ],
      },
      {
        id: "small-plates",
        title: "Small Plates",
        items: [
          {
            name: "Miso Aubergine",
            description: "Black garlic tahini · pomegranate · crispy shallots",
            price: "9",
            dietary: "vegan", allergens: ['S', 'SO'],
          },
          {
            name: "Spanakopita Cigars",
            description: "Whipped feta · hot honey · pistachio dukka",
            price: "9.5",
            dietary: "vegetarian", allergens: ['D', 'G', 'N', 'S'],
          },
          {
            name: "Honey-Fired Halloumi",
            description: "Burnt orange · pistachio dukka · mint oil",
            price: "9.5",
            dietary: "vegetarian", allergens: ['D', 'N', 'S'],
          },
          {
            name: "Charred Gigantes",
            description: "Smoked tomato butter · whipped feta · burnt pepper salsa",
            price: "9",
            dietary: "vegetarian", allergens: ['D'],
          },
          {
            name: "Charcoal Chicken Thighs",
            description: "Toum · sumac onions · smoked yoghurt",
            price: "8.5",
            allergens: ['D', 'E'],
          },
          {
            name: "Seared Scallops",
            description: "Curried cauliflower purée · nduja butter · crispy capers",
            price: "12.5",
            allergens: ['D', 'SF'],
          },
          {
            name: "Crispy Pork Belly",
            description: "Korean glaze · apple kimchi · sesame crackling",
            price: "9",
            allergens: ['S', 'SO', 'G'],
          },
          {
            name: "Grilled Octopus",
            description: "Confit potatoes · saffron aioli · chorizo crumb",
            price: "13",
            allergens: ['D', 'E', 'G'],
          },
          {
            name: "Wild Mushroom Flatbread",
            description: "Truffle labneh · thyme honey · aged parmesan",
            price: "14",
            dietary: "vegetarian", allergens: ['D'],
          },
          {
            name: "Short Rib Shawarma",
            description: "12-hour beef short rib · tahini · pickled chilli · grilled pita",
            price: "15",
            allergens: ['G', 'S'],
          },
          {
            name: "Crispy Prawn Toast",
            description: "Bonito mayo · chilli crunch · pickled cucumber · lime",
            price: "10",
            allergens: ['G', 'E', 'SF', 'F'],
          },
          {
            name: "Gochujang Lamb Belly",
            description: "Sticky glaze · peanut crunch · lime",
            price: "12.5",
            allergens: ['N', 'S', 'G', 'SO'],
          },
          {
            name: "Burrata & Tomato Carpaccio",
            description: "Mixed heritage tomatoes · burrata · aged balsamic",
            price: "10.5",
            dietary: "vegetarian", allergens: ['D', 'SU'],
          },
        ],
      },
      {
        id: "sides",
        title: "Sides",
        items: [
          {
            name: "Greek Salad",
            description: "Tomato · cucumber · red onion · olives · feta · oregano · extra virgin olive oil",
            price: "8",
            dietary: "vegetarian", allergens: ['D', 'G'],
          },
          {
            name: "Crispy Patatas Bravas",
            description: "Harissa brava sauce · whipped garlic",
            price: "6",
            dietary: "vegan",
          },
          {
            name: "Burnt Broccoli",
            description: "Tahini · chilli crunch · sesame",
            price: "6",
            dietary: "vegetarian", allergens: ['D'],
          },
          {
            name: "Skin-on Fries",
            description: "Sea salt",
            price: "5",
            dietary: "vegan",
          },
          {
            name: "Sweet Potato Fries",
            description: "Sea salt",
            price: "5",
            dietary: "vegetarian", allergens: ['E'],
          },
        ],
      },
      {
        id: "dips",
        title: "Dips",
        note: "All dips served with charred flatbreads · £6.50 each",
        items: [
          {
            name: "Tzatziki",
            description: "Yoghurt · cucumber · olive oil · vinegar · garlic · mint",
            dietary: "vegetarian", allergens: ['D'],
          },
          {
            name: "Houmous",
            description: "Chickpeas · tahini · olive oil · mixed herbs · garlic",
            dietary: "vegan", allergens: ['S'],
          },
          {
            name: "Taramasalata",
            description: "Smoked cod roe · potato · onion · olive oil · lemon",
            allergens: ['F'],
          },
          {
            name: "Melintzanosalata",
            description: "Roasted aubergine · vinegar · parsley · garlic · olive oil",
            dietary: "vegan",
          },
          {
            name: "Tyrokafteri",
            description: "Spicy whipped feta dip",
            dietary: "vegetarian", allergens: ['D'],
          },
          {
            name: "Chilli Sauce",
            description: "Tomato · red onion · green peppers · thyme · olive oil · garlic · spring onion · red chilli",
            dietary: "vegan",
          },
        ],
      },
      {
        id: "fire-feast",
        title: "MIXA Fire Feast",
        note: "Serves 2 guests. Our chefs work hard to bring you a different sharer board influenced by flavours from around the world. Check our blackboard for today's MIXA fire feast.",
        items: [{ name: "MIXA Fire Feast", price: "65" }],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    sections: [
      {
        id: "desserts-list",
        title: "Desserts",
        items: [
          {
            name: "Galaktoboureko",
            description: "Vanilla custard · orange honey syrup · whipped mascarpone",
            price: "8.5",
            dietary: "vegetarian", allergens: ['D', 'E', 'G', 'N'],
          },
          {
            name: "Baklava",
            description: "Layered filo pastry · walnuts · pistachios · orange honey syrup · fig & honey ice cream",
            price: "8.5",
            dietary: "vegetarian", allergens: ['D', 'G', 'N', 'E'],
          },
          {
            name: "Malted Milk & Irish Cream Torte",
            description: "Irish cream ganache · burnt white chocolate · espresso caramel",
            price: "8.5",
            dietary: "vegetarian", allergens: ['D', 'E'],
          },
          {
            name: "Basque Cheesecake",
            description: "Sour cherry compote",
            price: "8.5",
            dietary: "vegetarian", allergens: ['D', 'E', 'G'],
          },
          {
            name: "Ice Cream",
            description: "Vanilla · chocolate · strawberry · salted caramel · fig & honey · vegan vanilla · vegan coconut & pineapple",
            price: "6",
            dietary: "vegetarian", allergens: ['D', 'E'],
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
        id: "spirits",
        title: "Spirits",
        note: "25ml · 50ml",
        items: [
          { name: "Bombay Sapphire", price: "5.20 · 8.20" },
          { name: "Bombay Sapphire Lemon", price: "5.20 · 8.20" },
          { name: "Smirnoff", price: "5.00 · 8.00" },
          { name: "Grey Goose", price: "6.25 · 9.25" },
          { name: "Captain Morgan Spiced Rum", price: "5.20 · 8.20" },
          { name: "Captain Morgan Dark Rum", price: "5.20 · 8.20" },
          { name: "Malibu", price: "5.20 · 8.20" },
          { name: "Bacardi", price: "5.20 · 8.20" },
          { name: "Disaronno", price: "5.20 · 8.20" },
          { name: "Tequila Gold", price: "6.00" },
          { name: "Jack Daniels", price: "5.20 · 8.20" },
          { name: "Jameson", price: "5.20 · 8.20" },
          { name: "Metaxa", price: "5.50 · 5.50" },
          { name: "Ouzo", price: "5.50 · 5.50" },
        ],
      },
      {
        id: "soft-drinks",
        title: "Soft Drinks",
        items: [
          { name: "Coke / Diet Coke / Victorian Lemonade", price: "3.50" },
          { name: "Loux Orange / Cherry / Lemon", price: "3.00" },
          { name: "Fruit Shoots", price: "3.00" },
          { name: "Fever Tree Tonic", price: "3.50" },
          { name: "Orange / Apple Juice (half pint)", price: "2.20" },
          { name: "Sparkling / Still Water 300ml", price: "3.00" },
          { name: "Sparkling / Still Water 750ml", price: "5.00" },
        ],
      },
      {
        id: "beer",
        title: "Bottled Beer & Cider",
        items: [
          { name: "Mythos / Keo / Mahou / Victoria Malaga", price: "5.25" },
          { name: "Rekorderlig", price: "7.00" },
          { name: "Thatchers Gold", price: "5.50" },
        ],
      },
      {
        id: "alcohol-free",
        title: "Alcohol Free",
        items: [
          { name: "Peroni Nastro Azzurro 0.0%", price: "4.50" },
          { name: "Thatchers Zero", price: "4.50" },
          { name: "Guinness Zero", price: "5.00" },
          { name: "Tanqueray Gin 0.0%", price: "4.50" },
        ],
      },
    ],
  },
];

export const featuredDishes = [
  {
    name: "Whipped Feta",
    description: "Hot honey · crispy chickpeas · oregano oil · charred flatbread",
    price: "8.50",
    image: photos.whippedFetaPita,
  },
  {
    name: "Lamb Kofta Scotch Egg",
    description: "Soft yolk · harissa mayo · mint salt",
    price: "8.50",
    image: photos.scotchEgg,
  },
  {
    name: "MIXA Fire Feast",
    description: "A rotating sharer board of world flavours — check our blackboard",
    price: "65.00",
    image: photos.heroSharingSpread,
  },
  {
    name: "Baklava",
    description: "Layered filo pastry · walnuts · pistachios · orange honey syrup · fig & honey ice cream",
    price: "8.50",
    image: photos.baklavaDessert,
  },
];

export const categoryHighlights = [
  {
    title: "Small Plates",
    description:
      "World flavours on one table — sharing plates built around seasonal produce and carefully sourced ingredients. From whipped feta and scotch eggs to fire feast sharers, every dish is prepared in-house.",
    href: "/menu#food",
    image: photos.sharingPlatesWine,
  },
  {
    title: "Wine",
    description:
      "A considered wine list designed to complement the food. Classic favourites alongside bottles for curious drinkers looking to broaden their horizons.",
    href: "/menu#wine",
    image: photos.wineSharingTable,
  },
  {
    title: "Cocktails",
    description:
      "Classic cocktails and a focused drinks menu. Terrace seating, live music nights and everything you need for a relaxed evening in Winchester.",
    href: "/menu#drinks",
    image: photos.wineProseccoTable,
  },
];