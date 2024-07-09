const navLinks = [
  "PROPERTIES",
  "MY DASHBOARD/ACTIVITY",
  "LIST YOUR PROPERTY",
  "CONTACT US",
  "MORE",
];

const ulpoadSteps = [
  {
    para: "Add your properties ",
    bold: "Basic Details",
  },
  {
    para: "Add property",
    bold: "Location",
  },
  {
    para: "Add property ",
    bold: "Features and amenities",
  },
  {
    para: "Add property ",
    bold: "Features and amenities",
  },
  {
    para: "Add",
    bold: "Price details",
  },
  {
    para: "Add your best",
    bold: "Property Shots",
  },
];

const ListPropertyTabs = [
  {
    label: "PROPERTY DETAILS",
    value: "property",
    progressWidth: 20,
  },
  {
    label: "LOCATION DETAILS",
    value: "location",
    progressWidth: 40,
  },
  {
    label: "FEATURES & AMENITIES",
    value: "fetures",
    progressWidth: 60,
  },
  {
    label: "PRICE DETAILS",
    value: "price",
    progressWidth: 80,
  },
  {
    label: "PROPERTY IMAGES",
    value: "images",
    progressWidth: 100,
  },
];

const PropertyTypeFor = {
  CommercialProperty: [
    "Office Space",
    "Co working",
    "Restaurant /Cafe",
    "Shop/Showroom",
    "Industrial Bldg.",
    "Industrial Shed",
    "Warehouse/Godown",
  ],
  Residential: ["Flat / Apartment", "House / Villa"],
};

export { navLinks, ulpoadSteps, ListPropertyTabs, PropertyTypeFor };
