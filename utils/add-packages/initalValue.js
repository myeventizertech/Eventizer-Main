let commonIntvalue = {
  //Image for all,
  packageImage:[],
  
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
    packageImage:[],
    packageName: "",
    packageDetails: "",
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
      package:"basic"
    },
    standard: {
      ...commonIntvalue,
      package:"standard"
    },
    premium: {
      ...commonIntvalue,
      package:"premium"
    },
  
    // ph,ch,dj,mk,md ,br,br nly for this
  
    // overtimePricePerDay: "",
    // overtimePricePerHour: "",
  };
  
  export default initalValue;