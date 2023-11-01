// inputHandler.js

module.exports = {
    getFolderPath: function (userInput) {
      userInput = userInput.toLowerCase();


      if (userInput.includes('1st') && userInput.includes('mid') && userInput.includes('question')) {
        return '1st/Prev-All-Question/Mid-Yearly-Questions';
      }else if (userInput.includes('1st') && userInput.includes('final') && userInput.includes('question')) {
        return '1st/Prev-All-Question/Final-Yearly-Questions';
      }else if (userInput.includes('1st') && userInput.includes('mid')) {
        return '1st/Mid';
      }else if (userInput.includes('1st') && userInput.includes('final')) {
        return '1st/Final';
      }else if (userInput.includes('2nd') && userInput.includes('mid') && userInput.includes('question')) {
        return '2nd/Prev-All-Question/Mid-Yearly-Questions';
      }else if (userInput.includes('2nd') && userInput.includes('final') && userInput.includes('question')) {
        return '2nd/Prev-All-Question/Final-Yearly-Questions';
      }else if (userInput.includes('2nd') && userInput.includes('mid')) {
        return '2nd/Mid';
      }else if (userInput.includes('2nd') && userInput.includes('final')) {
        return '2nd/Final';
      }else if (userInput.includes('3rd') && userInput.includes('mid') && userInput.includes('question')) {
        return '3rd/Prev-All-Question/Mid-Yearly-Questions';
      }else if (userInput.includes('3rd') && userInput.includes('final') && userInput.includes('question')) {
        return '3rd/Prev-All-Question/Final-Yearly-Questions';
      }else if (userInput.includes('3rd') && userInput.includes('mid')) {
        return '3rd/Mid';
      }else if (userInput.includes('3rd') && userInput.includes('final')) {
        return '3rd/Final';
      }else if (userInput.includes('4th') && userInput.includes('mid') && userInput.includes('question')) {
        return '4th/Prev-All-Question/Mid-Yearly-Questions';
      }else if (userInput.includes('4th') && userInput.includes('final') && userInput.includes('question')) {
        return '4th/Prev-All-Question/Final-Yearly-Questions';
      }else if (userInput.includes('4th') && userInput.includes('mid')) {
        return '4th/Mid';
      }else if (userInput.includes('4th') && userInput.includes('final')) {
        return '4th/Final';
      }else if (userInput.includes('5th') && userInput.includes('mid') && userInput.includes('question')) {
        return '5th/Prev-All-Question/Mid-Yearly-Questions';
      }else if (userInput.includes('5th') && userInput.includes('final') && userInput.includes('question')) {
        return '5th/Prev-All-Question/Final-Yearly-Questions';
      }else if (userInput.includes('5th') && userInput.includes('mid')) {
        return '5th/Mid';
      }else if (userInput.includes('5th') && userInput.includes('final')) {
        return '5th/Final';
      }else if (userInput.includes('6th') && userInput.includes('mid') && userInput.includes('question')) {
        return '6th/Prev-All-Question/Mid-Yearly-Questions';
      }else if (userInput.includes('6th') && userInput.includes('final') && userInput.includes('question')) {
        return '6th/Prev-All-Question/Final-Yearly-Questions';
      }else if (userInput.includes('6th') && userInput.includes('mid')) {
        return '6th/Mid';
      }else if (userInput.includes('6th') && userInput.includes('final')) {
        return '6th/Final';
      }else if (userInput.includes('7th') && userInput.includes('mid') && userInput.includes('question')) {
        return '7th/Prev-All-Question/Mid-Yearly-Questions';
      }else if (userInput.includes('7th') && userInput.includes('final') && userInput.includes('question')) {
        return '7th/Prev-All-Question/Final-Yearly-Questions';
      }else if (userInput.includes('7th') && userInput.includes('mid')) {
        return '7th/Mid';
      }else if (userInput.includes('7th') && userInput.includes('final')) {
        return '7th/Final';
      }else if (userInput.includes('8th') && userInput.includes('mid') && userInput.includes('question')) {
        return '8th/Prev-All-Question/Mid-Yearly-Questions';
      }else if (userInput.includes('8th') && userInput.includes('final') && userInput.includes('question')) {
        return '8th/Prev-All-Question/Final-Yearly-Questions';
      }else if (userInput.includes('8th') && userInput.includes('mid')) {
        return '8th/Mid';
      }else if (userInput.includes('8th') && userInput.includes('final')) {
        return '8th/Final';
      }else {
        return ''; // Default or no match
      }
    
    },
  };
  // if (userInput.includes('1st') && userInput.includes('mid')) {
  //   return '1st/mid';
  // } else if (userInput.includes('other_condition')) {
  //   return 'other/path';
  // } else {
  //   return ''; // Default or no match
  // }