module.exports = {
    additionalIntents: [
    
 
 // 5th Semester Mid Question
 {
    regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp22|spring22|spng22)\b)/i,
    files: [
      { type: 'document', text: '5th Mid Spring22 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Mid_SP22.pdf' },
    ],
  },

  {
    regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp23|spring23|spng23)\b)/i,
    files: [
      { type: 'document', text: '5th Mid Spring23 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Mid_SP23.pdf' },
    ],
  },

  {
    regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(mid|midterm)\b)(?=.*\b(question|questions)\b)|\/5thMidQn/i,
    files: [
      { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Mid_SP22.pdf' },
      { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Mid_SP23.pdf' },
    ],
  },

  // 5th Semester Final Question
  {
    regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp22|spring22|spng22)\b)/i,
    files: [
      { type: 'document', text: '5th Final Spring22 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Final_SP22.pdf' },
    ],
  },

  {
    regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp23|spring23|spng23)\b)/i,
    files: [
      { type: 'document', text: '5th Final Spring23 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Final_SP23.pdf' },
    ],
  },

  {
    regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(final|finalterm)\b)(?=.*\b(question|questions)\b)|\/5thFinalQn/i,
    files: [
      { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Final_SP22.pdf' },
      { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Final_SP23.pdf' },
    ],
  },

  // 5th Semester All Question
  {
    regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(question|questions)\b)(?=.*\b(all|midfinal|every)\b)|\/5th_allQn/i,
    files: [
      { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Mid_SP22.pdf' },
      { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Mid_SP23.pdf' },
      { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Final_SP22.pdf' },
      { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Final_SP23.pdf' },
    ],
  },


], 

};