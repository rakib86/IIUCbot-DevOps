module.exports = {


    additionalIntents: [

      //give me 30 regex expression to identify human quesiton and this bot sends greeting for first time

      { regex: /^(?=.*\b(hi|hello|yo|hey)\b)/i, type: 'text', text:'Hi there !🎉 how can i help you ?', groupmention:true, },
      { regex: /^(?=.*\b(how)\b)(?=.*\b(are)\b)(?=.*\b(you)\b)/i, type: 'text', text:'I am fine, thanks for asking. How can i help you ?', groupmention:true, },
      { regex: /^(?=.*\b(what)\b)(?=.*\b(is)\b)(?=.*\b(your)\b)(?=.*\b(name)\b)/i, type: 'text', text:'My name is IIUC Bot. How can I help you today?', groupmention:true, },
      { regex: /^(?=.*\b(what)\b)(?=.*\b(is)\b)(?=.*\b(your)\b)(?=.*\b(purpose)\b)/i, type: 'text', text:'I am here to help you. How can I help you today?', groupmention:true, },
      { regex: /^(?=.*\b(what)\b)(?=.*\b(is)\b)(?=.*\b(your)\b)(?=.*\b(job)\b)/i, type: 'text', text:'I am here to help you. How can I help you today?', groupmention:true, },
      




    ],
}



;