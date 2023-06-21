
//Display date of the day

module.exports.getDate = () => {

  const today = new Date();

  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

 return today.toLocaleDateString("en-US", options); //prints the current date  
};

//Display only day of the week
module.exports.getDay = () => {

    const today = new Date();
  
    const options = {
      weekday: "long"  
    };
  
    return today.toLocaleDateString("en-US", options); //prints the current date
  };
 