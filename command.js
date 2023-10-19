

module.exports = {
    additionalIntents: [

        
    { regex: /^(?=.*\b(question|questions|ques|prevQn)\b)/i, type: 'text', text: 'Great! Let me know which semester question you needed. You can try asking more accurately or use these commands: /1stQn /2ndQn /3rdQn /4thQn /5thQn /6thQn /7thQn /8thQn.', groupmention: true },

    { regex: /^(?=.*\b(notes|note|nots|handbook|classnote)\b)/i, type: 'text', text: 'Great! Let me know which semester notes you needed. You can try asking more accurately or use these commands: /1stNotes /2ndNotes /3rdNotes /4thNotes /5thNotes /6thNotes /7thNotes /8thNotes.', groupmention: true },

 

        




        //Questions Commands

        { regex: /1stQn/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /1stMidQn - 1st Mid Prev Question\n /1stFinalQn - 1st Final Prev Question', },
        { regex: /2ndQn/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /2ndMidQn - 2nd Mid Prev Question\n /2ndFinalQn - 2nd Final Prev Question', },
        { regex: /3rdQn/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /3rdMidQn - 3rd Mid Prev Question\n /3rdFinalQn - 3rd Final Prev Question', },
        { regex: /4thQn/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /4thMidQn - 4th Mid Prev Question\n /4thFinalQn - 4th Final Prev Question', },
        { regex: /5thQn/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /5thMidQn - 5th Mid Prev Question\n /5thFinalQn - 5th Final Prev Question', },
        { regex: /6thQn/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /6thMidQn - 6th Mid Prev Question\n /6thFinalQn - 6th Final Prev Question', },
        { regex: /7thQn/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /7thMidQn - 7th Mid Prev Question\n /7thFinalQn - 7th Final Prev Question', },
        { regex: /8thQn/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /8thMidQn - 8th Mid Prev Question\n /8thFinalQn - 8th Final Prev Question', },


        //Notes Commands

        { regex: /1stNotes/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /1stMidNotes - 1st Mid Notes\n /1stFinalNotes - 1st Final Notes', },
        { regex: /2ndNotes/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /2ndMidNotes - 2nd Mid Notes\n /2ndFinalNotes - 2nd Final Notes', },
        { regex: /3rdNotes/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /3rdMidNotes - 3rd Mid Notes\n /3rdFinalNotes - 3rd Final Notes', },
        { regex: /4thNotes/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /4thMidNotes - 4th Mid Notes\n /4thFinalNotes - 4th Final Notes', },
        { regex: /5thNotes/i, type: 'text', text: 'Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /5thMidNotes - 5th Mid Notes\n /5thFinalNotes - 5th Final Notes', },
        { regex: /6thNotes/i, type: 'text', text: 'I dont got the notes right now, soon i will add it.If you got any notes please send it on this group. Thank you https://t.me/+Fx6j4mqFhPUzYTk1', },
        { regex: /7thNotes/i, type: 'text', text: 'I dont got the notes right now, soon i will add it.If you got any notes please send it on this group. Thank you https://t.me/+Fx6j4mqFhPUzYTk1', },
        { regex: /8thNotes/i, type: 'text', text: 'I dont got the notes right now, soon i will add it.If you got any notes please send it on this group. Thank you https://t.me/+Fx6j4mqFhPUzYTk1', },
    
        { regex: /1st/i, type: 'text', text: 'Hello , I have some contents from 1st semester:\n /1stQn - Prev Questions\n /1stNotes - Notes', groupmention: true },
        { regex: /2nd/i, type: 'text', text: 'Hello , I have some contents from 2nd semester:\n /2ndQn - Prev Questions\n /2ndNotes - Notes', groupmention: true },
        { regex: /3rd/i, type: 'text', text: 'Hello , I have some contents from 3rd semester:\n /3rdQn - Prev Questions\n /3rdNotes - Notes', groupmention: true },
        { regex: /4th/i, type: 'text', text: 'Hello , I have some contents from 4th semester:\n /4thQn - Prev Questions\n /4thNotes - Notes', groupmention: true },
        { regex: /5th/i, type: 'text', text: 'Hello , I have some contents from 5th semester:\n /5thQn - Prev Questions\n /5thNotes - Notes', groupmention: true },
        { regex: /6th/i, type: 'text', text: 'Hello , I have some contents from 6th semester:\n /6thQn - Prev Questions\n /6thNotes - Notes', groupmention: true },
        { regex: /7th/i, type: 'text', text: 'Hello , I have some contents from 7th semester:\n /7thQn - Prev Questions\n /7thNotes - Notes', groupmention: true },
        { regex: /8th/i, type: 'text', text: 'Hello , I have some contents from 8th semester:\n /8thQn - Prev Questions\n /8thNotes - Notes', groupmention: true },


    ],
};