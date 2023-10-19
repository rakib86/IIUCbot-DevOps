// other_regex.js
module.exports = {
  additionalIntents: [



      //Notes

      {
          regex: /^(?=.*\b(1st|first|1)\b)(?=.*\b(mid)\b)(?=.*\b(note|notes|sheet|classnotes)\b)|\/1stMidNotes/i,
          files: [
              { type: 'document', text: '1st Mid Notes', postLink: 'https://t.me/botresourcefordev/209' },
              { type: 'document', text: '1st Mid Notes', postLink: 'https://t.me/botresourcefordev/210' },
              { type: 'document', text: '1st Mid Notes', postLink: 'https://t.me/botresourcefordev/211' },
              { type: 'document', text: '1st Mid Notes', postLink: 'https://t.me/botresourcefordev/212' },
              { type: 'document', text: '1st Mid Notes', postLink: 'https://t.me/botresourcefordev/213' },


          ],
          groupmention: true,
      },

      {
          regex: /^(?=.*\b(1st|first|1)\b)(?=.*\b(final)\b)(?=.*\b(note|notes|sheet|classnotes)\b)|\/1stFinalNotes/i,
          files: [
              { type: 'document', text: '1st Final Notes', postLink: 'https://t.me/botresourcefordev/215' },
              { type: 'document', text: '1st Final Notes', postLink: 'https://t.me/botresourcefordev/216' },
              { type: 'document', text: '1st Final Notes', postLink: 'https://t.me/botresourcefordev/217' },
              { type: 'document', text: '1st Final Notes', postLink: 'https://t.me/botresourcefordev/218' },

          ],
          groupmention: true,
      },

      



    



  ],
};
