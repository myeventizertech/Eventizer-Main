let customStyles = {
    menu: (provided) => ({
      ...provided,
      color: "#141414",
    }),
  }

let theme = (theme) => ({
    ...theme,
    borderRadius: "8px",

    colors: {
      ...theme.colors,
      primary: "#ef0d5e",
      primary25: "hotpink",
    },
  })



  export {customStyles,theme}