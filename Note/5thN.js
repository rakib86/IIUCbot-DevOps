

module.exports = {
    additionalIntents: [
        {
            regex: /^(?=.*\b(5th|fifth|5)\b)(?=.*\b(mid)\b)(?=.*\b(note|notes|sheet|classnotes)\b)|\/5thMidNotes/i,

            files: [

                { type: 'document', text: '5th Mid Notes', postLink: 'https://t.me/botresourcefordev/299' },

                { type: 'document', text: '5th Mid Notes', postLink: 'https://t.me/botresourcefordev/300' },

                { type: 'document', text: '5th Mid Notes', postLink: 'https://t.me/botresourcefordev/301' },

                { type: 'document', text: '5th Mid Notes', postLink: 'https://t.me/botresourcefordev/302' },
            ],
            groupmention: true,
        },


        {

            regex: /^(?=.*\b(5th|fifth|5)\b)(?=.*\b(final)\b)(?=.*\b(note|notes|sheet|classnotes)\b)|\/5thFinalNotes/i,

            files: [

                { type: 'document', text: '5th Final Notes', postLink: 'https://t.me/botresourcefordev/304' },

                { type: 'document', text: '5th Final Notes', postLink: 'https://t.me/botresourcefordev/305' },

                { type: 'document', text: '5th Final Notes', postLink: 'https://t.me/botresourcefordev/306' },

                { type: 'document', text: '5th Final Notes', postLink: 'https://t.me/botresourcefordev/307' },

                { type: 'document', text: '5th Final Notes', postLink: 'https://t.me/botresourcefordev/308' },

                { type: 'document', text: '5th Final Notes', postLink: 'https://t.me/botresourcefordev/309' },

                { type: 'document', text: '5th Final Notes', postLink: 'https://t.me/botresourcefordev/310' },

            ],
            groupmention: true,
        },


    ],
};
