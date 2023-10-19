// other_regex.js
module.exports = {
  additionalIntents: [








    {
      regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(mid|midterm)\b)(?=.*\b(question|questions)\b)|\/1stMidQn/i,
      files: [
        { type: 'document', text: '📄 1', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_SP22.pdf' },
        { type: 'document', text: '📄 2', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_Aut22.pdf' },
      ],
      groupmention: true, // Check if this should be set to true or false based on your intended behavior.
    },

    {
      regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(final|finalterm)\b)(?=.*\b(question|questions)\b)|\/1stFinalQn/i,
      files: [
        { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Final_Aut22.pdf' },
        { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Final_SP22.pdf' },
      ],
    },



    {
      regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut22|autm22|autumn22)\b)/i,
      files: [

        { type: 'document', text: '1st Mid Autumn22 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_Aut22.pdf' },
      ],
    },


    {
      regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring22|spring22|sp22)\b)/i,
      files: [
        { type: 'document', text: '1st Mid Spring22 Question', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_SP22.pdf' },
      ],
    },











    //1st Semester Final Question
    {
      regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(|aut22|aut22|au22|Autumn22)\b)/i,
      files: [
        { type: 'document', text: '1st Final Autumn22 Question', postLink: 'http://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Final_Aut22.pdf' },
      ],
    },



    {
      regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring22|spring22|sp22)\b)/i,
      files: [
        { type: 'document', text: '1st Final Spring22 Question', postLink: 'https://rakibpro.com/iiucbotResources/Questions/1st/1st_Final_SP22.' },
      ],
    },




    //1st Semester All Previous Year Question
    {
      regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(question|questions)\b)(?=.*\b(all|midfinal|every)\b)|\/1st_allQn/i,
      files: [
        { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_Aut22.pdf' },
        { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Final_SP22.pdf' },
        { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_SP22.pdf' },
        { type: 'document', text: '📄', postLink: 'https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_Aut22.pdf' },
      ],
    },





  ],
};
