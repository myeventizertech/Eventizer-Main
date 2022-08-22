let commonIntvalue = {
  overTimePricePerDay:"",
  overTimePricePerHour:"",
  // ph,ch,dj,mk,md only for this

  pricePerHour: "",
  pricePerDay: "",

  deliveryTime: "",
  minPerson: "",

  // for all
  customOptionFields: [],

  //  phptograpyhy only
  editedPhoto: "",
  printedCopy: "",
  // cinematograpy only
  trailerDuration: "",

  // decoration
  decorationImage: undefined,
  decorationPrice: "",

  // priting press
  pricePerPiece: "",
  quality: "",

};

let initalValue = {
  packageName: "",
  packageDetails: "",
  packageImage: [],
  // dj,dr,ch
  packageDemoLink: "",

  // gift items
  itemPricing: "",

  //brand-promoter
  pricePerHour: "",
  pricePerDay: "",

  // ph,ch,dj,mk,md ,dr ,prt  only for this

  basic: {
    ...commonIntvalue,
  },
  standard: {
    ...commonIntvalue,
  },
  premium: {
    ...commonIntvalue,
  },

  // ph,ch,dj,mk,md ,br,br nly for this

  // overtimePricePerDay: "",
  // overtimePricePerHour: "",
};

export default initalValue;
