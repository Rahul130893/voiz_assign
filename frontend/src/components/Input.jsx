import CreatableSelect from "react-select/creatable";

export const Input = () => {
  const options = [
    { value: "India", label: "India", color: "orange" },
    { value: "Nepal", label: "Nepal", color: "green" },

    { value: "Bhutan", label: "BHutan", color: "yellow" },
    { value: "Tibat", label: "Tibat", color: "gray" },
    { value: "SriLanka", label: "SriLanka", color: "blue" },
    { value: "Iran", label: "Iran", color: "pink" },
    { value: "Mayanmar", label: "Mayanmar", color: "red" },
  ];

    const colorStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "white" }),
        option: (styles, {data}) => {
            return {...styles, color: data.color}
        },
        multiValue: (styles, {data}) => {
            return {
                ...styles,
                backgroundColor: data.color,
                color:"white"
            }
        },

        multiValueLabel: (styles, { data }) => {
            return {...styles, color: "white"}
        },

        multiValueRemove: (styles, { data }) => {
            return {
                ...styles, color: "white", cursor: "pointer", ":hover": {
                color: "white"
            }}
        }
    }
    
    
    
  const handleChange = (selectedOption) => {
    console.log(selectedOption);
  };
  const loadOptions = (searchValue, cb) => {
    setTimeout(() => {
      const filterdOptions = options.filter((option) => {
        return option.label.toLowerCase().includes(searchValue.toLowerCase());
      });
      cb(filterdOptions);
    }, 2000);
  };


    
  return (
    <CreatableSelect
      className="select"
      loadOptions={loadOptions}
      isMulti
      defaultOptions
          onChange={handleChange}
        
      styles={colorStyles}
    />
  );
};
