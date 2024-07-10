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

const PropertyAge = [
  "Less than 1 Year",
  "1- 3 Years",
  "3- 5 Years",
  "5 - 10 Years",
  "Greater than 10 Years",
];

const PropertyBhk = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];

const bathroomsToilets = [1, 2, 3, 4, 5, "6+"];

const tenantPreference = ["Any", "Family", "Bachelor(Men)", "Bachelor(Women)"];

const availability = [
  "Immediate",
  "within 15 Days",
  "within 1 month",
  "within 2 month",
];
export {
  navLinks,
  ulpoadSteps,
  ListPropertyTabs,
  PropertyTypeFor,
  PropertyAge,
  PropertyBhk,
  bathroomsToilets,
  tenantPreference,
  availability,
};
