module.exports = function(bot) {


    bot.onText(/(DEPT)/, (msg, match) => {
        const chatId = msg.chat.id;
        const text = match[1];
    
        if (text === 'DEPT') {
            const replyMarkup = {
                keyboard: [['CSE', 'EEE', 'ETE']],
                one_time_keyboard: true
            };
    
            bot.sendMessage(chatId, 'Choose a department:', { reply_markup: replyMarkup });
        }
    });
    
    // Handle user button clicks
    bot.onText(/(CSE|EEE|ETE)/, (msg, match) => {
        const chatId = msg.chat.id;
        const text = match[1];
    
        if (text === 'CSE') {
            const cseMenuKeyboard = {
                inline_keyboard: [
                    [{ text: 'Option 1', callback_data: 'cse_option_1' }],
                    [{ text: 'Option 2', callback_data: 'cse_option_2' }],
                ]
            };
    
            bot.sendMessage(chatId, 'CSE Menu:', { reply_markup: cseMenuKeyboard });
        } else if (text === 'EEE') {
            // Handle EEE department
        } else if (text === 'ETE') {
            // Handle ETE department
        }
    });
    
    // Handle inline button clicks
    bot.on('callback_query', (query) => {
        const chatId = query.message.chat.id;
        const data = query.data;
    
        if (data === 'cse_option_1') {
            bot.sendMessage(chatId, 'You clicked CSE Option 1');
        } else if (data === 'cse_option_2') {
            bot.sendMessage(chatId, 'You clicked CSE Option 2');
        }
    });
    


}