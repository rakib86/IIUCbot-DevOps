// other_regex.js
module.exports = {
    additionalIntents: [



        //Notes

    { regex: /1stNotes/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /1stMidNotes - 1st Mid Notes\n /1stFinalNotes - 1st Final Notes', },
    { regex: /2ndNotes/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /2ndMidNotes - 2nd Mid Notes\n /2ndFinalNotes - 2nd Final Notes', },
    { regex: /3rdNotes/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /3rdMidNotes - 3rd Mid Notes\n /3rdFinalNotes - 3rd Final Notes', },
    { regex: /4thNotes/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /4thMidNotes - 4th Mid Notes\n /4thFinalNotes - 4th Final Notes', },
    { regex: /5thNotes/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /5thMidNotes - 5th Mid Notes\n /5thFinalNotes - 5th Final Notes', },
    { regex: /6thNotes/i, type: 'text', text: 'I dont got the notes right now, soon i will add it.If you got any notes please send it on this group. Thank you https://t.me/+Fx6j4mqFhPUzYTk1', },
    { regex: /7thNotes/i, type: 'text', text: 'I dont got the notes right now, soon i will add it.If you got any notes please send it on this group. Thank you https://t.me/+Fx6j4mqFhPUzYTk1', },
    { regex: /8thNotes/i, type: 'text', text: 'I dont got the notes right now, soon i will add it.If you got any notes please send it on this group. Thank you https://t.me/+Fx6j4mqFhPUzYTk1', },

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

        {

            regex: /^(?=.*\b(2nd|second|2)\b)(?=.*\b(mid)\b)(?=.*\b(note|notes|sheet|classnotes)\b)|\/2ndMidNotes/i,

            files: [

                { type: 'document', text: '2nd Mid Notes', postLink: 'https://t.me/botresourcefordev/220' },
                { type: 'document', text: '2nd Mid Notes', postLink: 'https://t.me/botresourcefordev/221' },
                { type: 'document', text: '2nd Mid Notes', postLink: 'https://t.me/botresourcefordev/222' },
                { type: 'document', text: '2nd Mid Notes', postLink: 'https://t.me/botresourcefordev/223' },
                { type: 'document', text: '2nd Mid Notes', postLink: 'https://t.me/botresourcefordev/224' },
                { type: 'document', text: '2nd Mid Notes', postLink: 'https://t.me/botresourcefordev/225' },
                { type: 'document', text: '2nd Mid Notes', postLink: 'https://t.me/botresourcefordev/226' },
                { type: 'document', text: '2nd Mid Notes', postLink: 'https://t.me/botresourcefordev/227' },
                { type: 'document', text: '2nd Mid Notes', postLink: 'https://t.me/botresourcefordev/228' },
                { type: 'document', text: '2nd Mid Notes', postLink: 'https://t.me/botresourcefordev/229' },
                { type: 'document', text: '2nd Mid Notes', postLink: 'https://t.me/botresourcefordev/230' },
                { type: 'document', text: '2nd Mid Notes', postLink: 'https://t.me/botresourcefordev/231' },
                { type: 'document', text: '2nd Mid Notes', postLink: 'https://t.me/botresourcefordev/232' },


            ],
            groupmention: true,
        },


        {
            regex: /^(?=.*\b(2nd|second|2)\b)(?=.*\b(final)\b)(?=.*\b(note|notes|sheet|classnotes)\b)|\/2ndFinalNotes/i,

            files: [


                { type: 'document', text: '2nd Final Notes', postLink: 'https://t.me/botresourcefordev/238' },
                { type: 'document', text: '2nd Final Notes', postLink: 'https://t.me/botresourcefordev/239' },
                { type: 'document', text: '2nd Final Notes', postLink: 'https://t.me/botresourcefordev/240' },
                { type: 'document', text: '2nd Final Notes', postLink: 'https://t.me/botresourcefordev/240' },
                { type: 'document', text: '2nd Final Notes', postLink: 'https://t.me/botresourcefordev/241' },
                { type: 'document', text: '2nd Final Notes', postLink: 'https://t.me/botresourcefordev/242' },
                { type: 'document', text: '2nd Final Notes', postLink: 'https://t.me/botresourcefordev/243' },
                { type: 'document', text: '2nd Final Notes', postLink: 'https://t.me/botresourcefordev/244' },
                { type: 'document', text: '2nd Final Notes', postLink: 'https://t.me/botresourcefordev/245' },
                { type: 'document', text: '2nd Final Notes', postLink: 'https://t.me/botresourcefordev/246' },
                { type: 'document', text: '2nd Final Notes', postLink: 'https://t.me/botresourcefordev/247' },



            ],
            groupmention: true,
        },

        {
            regex: /^(?=.*\b(3rd|third|3)\b)(?=.*\b(mid)\b)(?=.*\b(note|notes|sheet|classnotes)\b)|\/3rdMidNotes/i,

            files: [

                { type: 'document', text: '3rd Mid Notes', postLink: 'https://t.me/botresourcefordev/249' },
                { type: 'document', text: '3rd Mid Notes', postLink: 'https://t.me/botresourcefordev/250' },
                { type: 'document', text: '3rd Mid Notes', postLink: 'https://t.me/botresourcefordev/251' },
                { type: 'document', text: '3rd Mid Notes', postLink: 'https://t.me/botresourcefordev/256' },
                { type: 'document', text: '3rd Mid Notes', postLink: 'https://t.me/botresourcefordev/257' },
                { type: 'document', text: '3rd Mid Notes', postLink: 'https://t.me/botresourcefordev/252' },
                { type: 'document', text: '3rd Mid Notes', postLink: 'https://t.me/botresourcefordev/253' },
                { type: 'document', text: '3rd Mid Notes', postLink: 'https://t.me/botresourcefordev/254' },
                { type: 'document', text: '3rd Mid Notes', postLink: 'https://t.me/botresourcefordev/255' },
                { type: 'document', text: '3rd Mid Notes', postLink: 'https://t.me/botresourcefordev/258' },

            ],
            groupmention: true,
        },

        {
            regex: /^(?=.*\b(3rd|third|3)\b)(?=.*\b(final)\b)(?=.*\b(note|notes|sheet|classnotes)\b)|\/3rdFinalNotes/i,

            files: [

                // 260 to 280

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/260' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/261' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/262' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/263' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/264' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/265' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/266' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/267' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/268' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/269' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/270' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/271' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/272' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/273' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/274' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/275' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/276' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/277' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/278' },

                { type: 'document', text: '3rd Final Notes', postLink: 'https://t.me/botresourcefordev/279' },

                { type: 'document', text: '3rd Final Question Solve', postLink: 'https://t.me/botresourcefordev/280' },

            ],
            groupmention: true,
        },


        {

            regex: /^(?=.*\b(4th|fourth|4)\b)(?=.*\b(mid)\b)(?=.*\b(note|notes|sheet|classnotes)\b)|\/4thMidNotes/i,

            files: [

                { type: 'document', text: '4th Mid Notes', postLink: 'https://t.me/botresourcefordev/282' },

                { type: 'document', text: '4th Mid Notes', postLink: 'https://t.me/botresourcefordev/283' },

                { type: 'document', text: '4th Mid Notes', postLink: 'https://t.me/botresourcefordev/284' },

                { type: 'document', text: '4th Mid Notes', postLink: 'https://t.me/botresourcefordev/285' },

                { type: 'document', text: '4th Mid Notes', postLink: 'https://t.me/botresourcefordev/286' },

                { type: 'document', text: '4th Mid Notes', postLink: 'https://t.me/botresourcefordev/287' },

                { type: 'document', text: '4th Mid Notes', postLink: 'https://t.me/botresourcefordev/288' },

                { type: 'document', text: '4th Mid Notes', postLink: 'https://t.me/botresourcefordev/289' },

                { type: 'document', text: '4th Mid Notes', postLink: 'https://t.me/botresourcefordev/290' },

                { type: 'document', text: '4th Mid Notes', postLink: 'https://t.me/botresourcefordev/291' },

            
            ],
            groupmention: true,

        },


        {

            regex: /^(?=.*\b(4th|fourth|4)\b)(?=.*\b(final)\b)(?=.*\b(note|notes|sheet|classnotes)\b)|\/4thFinalNotes/i,

            files: [


                { type: 'document', text: '4th Final Notes', postLink: 'https://t.me/botresourcefordev/293' },


                { type: 'document', text: '4th Final Notes', postLink: 'https://t.me/botresourcefordev/294' },


                { type: 'document', text: '4th Final Notes', postLink: 'https://t.me/botresourcefordev/295' },


                { type: 'document', text: '4th Final Notes', postLink: 'https://t.me/botresourcefordev/296' },


                { type: 'document', text: '4th Final Notes', postLink: 'https://t.me/botresourcefordev/297' },

                
                { type: 'document', text: '4th Final Notes', postLink: 'https://t.me/botresourcefordev/311' },
            ],

            groupmention: true,



        },


        {
            regex: /^(?=.*\b(5th|fifth|5)\b)(?=.*\b(mid)\b)(?=.*\b(note|notes|sheet|classnotes)\b)|\/5thMidNotes/i,

            files:[

                { type: 'document', text: '5th Mid Notes', postLink: 'https://t.me/botresourcefordev/299' },

                { type: 'document', text: '5th Mid Notes', postLink: 'https://t.me/botresourcefordev/300' },

                { type: 'document', text: '5th Mid Notes', postLink: 'https://t.me/botresourcefordev/301' },

                { type: 'document', text: '5th Mid Notes', postLink: 'https://t.me/botresourcefordev/302' },
            ],
            groupmention: true,
        },


        {

            regex: /^(?=.*\b(5th|fifth|5)\b)(?=.*\b(final)\b)(?=.*\b(note|notes|sheet|classnotes)\b)|\/5thFinalNotes/i,

            files:[

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
