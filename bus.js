// bus.js
module.exports = {
    additionalIntents: [

        

        {
            regex: /^(?=.*\b(regular)\b)(?=.*\b(bus|transport)\b)|\/RegularBus/i,
            files: [
              {
                type: "photo",
                text: "Regular Bus Schedule",
                postLink: "https://t.me/botresourcefordev/24",
              },
            ],
            groupmention: true,
          },
          {
            regex: /^(?=.*\b(fri|friday)\b)(?=.*\b(bus|transport)\b)|\/FridayBus/i,
            files: [
              {
                type: "photo",
                text: "Friday Bus Schedule",
                postLink: "https://t.me/botresourcefordev/312",
              },
            ],
            groupmention: true,
          },

          { regex: /^(?=.*\b(bus|transport|gari)\b)/i, type: 'text', text:'Which bus schedule do you want?\n /RegularBus\n /FridayBus', groupmention:true, },
    ],
};




