module.exports = {
    additionalIntents: [
    // ######
    //      ##
    //  ######
    //      ##
    // ######


    //3rd Semester Mid Question
    {
        regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut22|autm22|autumn22)\b)/i,
        files: [
          { type: 'document', text: '3rd Mid Autumn22 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_Aut22.pdf' },
        ],
      },
  
  
      {
        regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring22|spring 22|sp22)\b)/i,
        files: [
          { type: 'document', text: '3rd Mid Spring22 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_SP22.pdf' },
        ],
      },
  
      {
        regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring23|spring 23|sp23)\b)/i,
        files: [
          { type: 'document', text: '3rd Mid Spring23 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_SP23.pdf' },
        ],
      },
  
  
      {
        regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(mid|midterm)\b)(?=.*\b(question|questions)\b)|\/3rdMidQn/i,
        files: [
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_Aut22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_SP22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_SP23.pdf' },
        ],
      },
  
  
      //3rd Semester Final Question
      {
        regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut22|autm22|autumn22)\b)/i,
        files: [
          { type: 'document', text: '3rd Final Autumn22 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_Aut22.pdf' },
        ],
      },
  
      {
        regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring22|sp22)\b)/i,
        files: [
          { type: 'document', text: '3rd Final Spring22 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_SP22.pdf' },
        ],
      },
  
      {
        regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring23|sp23)\b)/i,
        files: [
          { type: 'document', text: '3rd Final Spring23 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_SP23.pdf' },
        ],
      },
  
      {
        regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(final|finalterm)\b)(?=.*\b(question|questions)\b)|\/3rdFinalQn/i,
        files: [
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_Aut22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_SP22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_SP23.pdf' },
        ],
      },
  
      //3rd Semester All Question
      {
        regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(question|questions)\b)(?=.*\b(all|midfinal|every)\b)|\/3rd_allQn/i,
        files: [
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_Aut22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_SP22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_SP23.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_Aut22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_SP22.pdf' },
          { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_SP23.pdf' },
        ],
      },
  

    ],
};