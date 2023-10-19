module.exports = {
    additionalIntents: [
   
    
    //  ######
    // ##    ##
    //      ##
    //    ##
    // #########


    //2nd Semester Mid Question
    {
        regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut22|autm22|autumn22)\b)/i,
        files: [
          { type: 'document', text: '2nd Mid Autumn22 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_Aut22.pdf' },
        ],
      },
  
  
  
      {
        regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring22|spring22|sp22)\b)/i,
        files: [
          { type: 'document', text: '2nd Mid Spring22 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_SP22.pdf' },
        ],
      },
  
  
  
      {
        regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring23|spring23|sp23)\b)/i,
        files: [
          { type: 'document', text: '2nd Mid Spring23 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_SP23.pdf' },
        ],
      },
  
  
  
      {
        regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(mid|midterm)\b)(?=.*\b(question|questions)\b)|\/2ndMidQn/i,
        files: [
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_Aut22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_SP22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_SP23.pdf' },
        ],
        groupmention: true,
      },
  
      //2nd Semester Final Question
      {
        regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut22|autm22|autumn22)\b)/i,
        files: [
          { type: 'document', text: '2nd Final Autumn22 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_Aut22.pdf' },
        ],
      },
  
      {
        regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring22|sp22)\b)/i,
        files: [
          { type: 'document', text: '2nd Final Spring22 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_SP22.pdf' },
        ],
  
      },
  
      {
        regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring23|spring23|sp23)\b)/i,
        files: [
          {
            type: 'document', text: '2nd Final Spring23 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_SP23.pdf'
          },
        ],
      },
  
      {
        regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(final|finalterm)\b)(?=.*\b(question|questions)\b)|\/2ndFinalQn/i,
        files: [
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_Aut22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_SP22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_SP23.pdf' },
        ],
      },
  
  
  
      //2nd Semester All Question
      {
        regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(question|questions)\b)(?=.*\b(all|midfinal|every)\b)|\/2nd_allQn/i,
        files: [
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_Aut22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_SP22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_SP23.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_Aut22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_SP22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_SP23.pdf' },
        ],
      },
  

      


  ],
};
