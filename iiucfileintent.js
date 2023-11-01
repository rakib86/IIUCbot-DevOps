// iiucfileintent.js

module.exports = {
    getFolderPath: function (userInput) {
      userInput = userInput.toLowerCase();
  
      if (userInput.includes('4th') && userInput.includes('question')) {
        return '4th/question';
      } else if (userInput.includes('other_condition')) {
        return 'other/path';
      } else {
        return ''; // Default or no match
      }
    },
  };
  