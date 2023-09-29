require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const otherRegex = require('./other_regex.js');
const human_regex = require('./human_regex.js');
const iiucprev = require('./iiucbot_v1.js');
// require('./button')(bot);                                   //when button are ready then remove this comment
const app = express();
 // Set the port for your web server

const GOOGLE_SEARCH_API_KEY = process.env.google_api_key;
const GOOGLE_SEARCH_ENGINE_ID = process.env.google_id;















const { google } = require('googleapis');
const sheets = google.sheets('v4');

// Load your service account key JSON file
const credentials = require('./iiucbotdata.json');

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});



// Function to add user data to Google Sheets
async function addToGoogleSheets(userData) {
  const authClient = await auth.getClient();

  // Specify the Google Sheets spreadsheet ID and range where you want to add data
  const spreadsheetId = '1gGt_6mtTmIoIjERtiDBb5Im4gb2R7ohRRIf3OrWRuQY';
  const range = 'Sheet1'; // Change to the name of your sheet

  const sheets = google.sheets({ version: 'v4', auth: authClient });

  try {
    // Prepare the values to be inserted
    const values = [[
      userData.userId,
      userData.firstName,
      userData.username,
    ]];

    // Use the Sheets API to append the values to the spreadsheet
    const request = {
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource: {
        values,
      },
    };

    const response = await sheets.spreadsheets.values.append(request);
    console.log('Data added successfully:', response.data);
  } catch (error) {
    console.error('Error adding data to Google Sheets:', error);
  }
}




// Function to get user data from Google Sheets

async function getFromGoogleSheets() {
  try {
    const authClient = await auth.getClient();

    // Specify the Google Sheets spreadsheet ID and range from which to fetch data
    const spreadsheetId = '1gGt_6mtTmIoIjERtiDBb5Im4gb2R7ohRRIf3OrWRuQY';
    const range = 'Sheet1'; // Change to the name of your sheet

    const sheets = google.sheets({ version: 'v4', auth: authClient });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const values = response.data.values;

    if (!values || values.length === 0) {
      console.log('No data found in the spreadsheet.');
      return [];
    }

    // Assuming your Google Sheets has columns like [User ID, First Name, Username]
    const userData = values.map((row) => ({
      userId: row[0],        // Assuming user ID is in the first column
      firstName: row[1],     // Assuming first name is in the second column
      username: row[2],      // Assuming username is in the third column
    }));

    return userData;
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    return [];
  }
}

// brodcast message to all user
async function sendBroadcastMessage(bot, message) {
  const userData = await getFromGoogleSheets();

  for (const user of userData) {
    const chatId = user.userId;
    bot.sendMessage(chatId, message);
  }
}


//set brodcast message to all user with command /brodcast by admin username with "rakiburrahaman"








// Define the intents
const intents = [
  {
    regex: /^(?=.*\b(bus)\b)/i,
    files: [
      { type: 'photo', text: 'Bus Schedule', postLink: 'https://t.me/botresourcefordev/24' },
      { type: 'document', text: 'Normal PDF file', postLink: 'https://t.me/botresourcefordev/9' },
    ],
    groupmention: true,
  },
  ...otherRegex.additionalIntents,
  ...human_regex.additionalIntents,
  ...iiucprev.additionalIntents,
];

// Replace with your bot token
const token = process.env.telegrame_token;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Set up Express middleware
app.use(bodyParser.json());

// This sets up the URL for receiving updates

// Include other files here



//location share to all user with command /brodcastlocation by admin username with "rakiburrahaman" . 1. ask for schedule time in keyboard(9.05am or 11.50am) 2. ask for route(BOT-IIUC or DAT-IIUC) 3. ask for bus number(user choise) 4. ask for live location
bot.onText(/\/broadcastlocation/, (msg) => {
  const chatId = msg.chat.id;
  const senderUsername = msg.from.username;

  if (senderUsername === 'rakiburrahaman') {
    bot.sendMessage(chatId, 'Please select a schedule:', {
      reply_markup: {
        keyboard: [['9:05 AM', '11:50 AM']],
        one_time_keyboard: true,
      },
    });

    // Listen for the user's choice of schedule
    bot.onText(/9:05 AM|11:50 AM/, (msg) => {
      const schedule = msg.text;
      const userId = msg.from.id;

      bot.sendMessage(chatId, 'Please select a route:', {
        reply_markup: {
          keyboard: [['BOT-IIUC', 'BHA-IIUC', 'DDD-IIUC']],
          one_time_keyboard: true,
        },
      });

      // Listen for the user's choice of route
      bot.onText(/BOT-IIUC|BHA-IIUC|DDD-IIUC/, (msg) => {
        const route = msg.text;

        bot.sendMessage(chatId, 'Please enter the bus number (e.g., 123):');

        // Listen for the user's input of the bus number
        bot.onText(/\d+/, async (msg) => {
          const busNumber = msg.text;
          const liveLocationMessage = await bot.sendMessage(
            chatId,
            'Please share your live location for broadcasting:'
          );

          // Listen for the user's live location
          bot.on('location', async (msg) => {
            const location = msg.location;
            const caption = `Schedule: ${schedule}\nRoute: ${route}\nBus Number: ${busNumber}`;

            // Send the broadcasted location with the compiled information to all users
            sendBroadcastLocation(bot, userId, location, caption);

            // Remove the temporary message with the "Share your live location" instruction
            bot.deleteMessage(chatId, liveLocationMessage.message_id);
          });
        });
      });
    });
  } else {
    bot.sendMessage(chatId, 'You are not authorized to use this command.');
  }
});

// Function to send a broadcast location
async function sendBroadcastLocation(bot, userId, location, caption) {
  const userData = await getFromGoogleSheets();

  for (const user of userData) {
    if (caption) {
      bot.sendMessage(user.userId, caption); // Send the caption as a text message
    }
    bot.sendLocation(user.userId, location.latitude, location.longitude);
  }
}
// Rest of your bot code











bot.onText(/\/broadcast (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const message = match[1];
  const from = msg.from.username;
  if (from === 'rakiburrahaman') {
    await sendBroadcastMessage(bot, message);
    bot.sendMessage(chatId, 'Message sent to all users.');
  } else {
    bot.sendMessage(chatId, 'You are not authorized to use this command.');
  }
});


bot.onText(/\/broadcastimg/, (msg) => {
  const chatId = msg.chat.id;
  const senderUsername = msg.from.username;

  if (senderUsername === 'rakiburrahaman') {
    bot.sendMessage(chatId, 'Please send the image you want to broadcast with a caption.');
    
    // Listen for the image upload
    bot.on('photo', async (msg) => {
      // Store the image information temporarily
      const fileId = msg.photo[0].file_id;
      const caption = msg.caption || ''; // Get the caption (if provided)
      
      // Broadcast the image with the specified caption to all users
      sendBroadcastImage(bot, chatId, fileId, caption);
    });
  } else {
    bot.sendMessage(chatId, 'You are not authorized to use this command.');
  }
});


// Broadcast PDF file to all user with command /brodcastpdf by admin username with "rakiburrahaman"

bot.onText(/\/broadcastpdf/, (msg) => {
  const chatId = msg.chat.id;
  const senderUsername = msg.from.username;

  if (senderUsername === 'rakiburrahaman') {
    bot.sendMessage(chatId, 'Please send the PDF file you want to broadcast with a caption.');

    // Listen for the PDF file upload
    bot.on('document', async (msg) => {
      // Store the PDF file information temporarily
      const fileId = msg.document.file_id;
      const caption = msg.caption || ''; // Get the caption (if provided)

      // Broadcast the PDF file with the specified caption to all users
      sendBroadcastDocument(bot, chatId, fileId, caption);
    });
  } else {
    bot.sendMessage(chatId, 'You are not authorized to use this command.');
  }
});

// Broadcast video file to all user with command /brodcastvideo by admin username with "rakiburrahaman"

bot.onText(/\/broadcastvideo/, (msg) => {
  const chatId = msg.chat.id;
  const senderUsername = msg.from.username;

  if (senderUsername === 'rakiburrahaman') {
    bot.sendMessage(chatId, 'Please send the video file you want to broadcast with a caption.');

    // Listen for the video file upload
    bot.on('video', async (msg) => {
      // Store the video file information temporarily
      const fileId = msg.video.file_id;
      const caption = msg.caption || ''; // Get the caption (if provided)

      // Broadcast the video file with the specified caption to all users
      sendBroadcastVideo(bot, chatId, fileId, caption);
    });
  } else {
    bot.sendMessage(chatId, 'You are not authorized to use this command.');
  }
});






// Function to send a broadcast image
async function sendBroadcastImage(bot, chatId, imageFileId, caption) {
  const userData = await getFromGoogleSheets();

  for (const user of userData) {
    bot.sendPhoto(user.userId, imageFileId, { caption });
  }
}

// Function to send a broadcast PDF file
async function sendBroadcastDocument(bot, chatId, documentFileId, caption) {
  const userData = await getFromGoogleSheets();

  for (const user of userData) {
    bot.sendDocument(user.userId, documentFileId, { caption });
  }
}

// Function to send a broadcast video file
async function sendBroadcastVideo(bot, chatId, videoFileId, caption) {
  const userData = await getFromGoogleSheets();

  for (const user of userData) {
    bot.sendVideo(user.userId, videoFileId, { caption });
  }
}







//wellcome user when join the group

bot.on('new_chat_members', (msg) => {
  const chatId = msg.chat.id;
  const newMembers = msg.new_chat_members;

  // Iterate through the new members and send them a welcome message
  newMembers.forEach((member) => {
    const username = member.username || member.first_name;
    bot.sendMessage(chatId, `Welcome to the group, ${username}!🎉🤖`, { parse_mode: 'Markdown' });
  });
});














//send file from telegram link to all user with command /brodcastimage by admin username with "rakiburrahaman" 






bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text || '';
  const chatType = msg.chat.type;
  const from = msg.from.id;
  const firstName = msg.from.first_name;
  const username = msg.from.username || firstName;
  const botUsername = 'test_iiucbot'; // Replace with your bot's username
  const userId = msg.from.id;



  const userData = {
    userId,
    firstName,
    username,
  };

  // Add this data to your Google Sheets spreadsheet

  //get users data on start command

  if (messageText === '/start') {
    // Check if the user already exists in Google Sheets
    const existingUsers = await getFromGoogleSheets();
    const userExists = existingUsers.some((user) => user.userId === userId || user.username === username || user.firstName === firstName || user.chatId === userId);

    if (userExists) {
      bot.sendMessage(chatId, `Hi ${username}, welcome back to IIUC Bot!`);
    } else {
      // Add the user to Google Sheets
      await addToGoogleSheets(userData);
      bot.sendMessage(
        chatId,
        `Hi ${username}, welcome to IIUC Bot! I'm here to help you with your queries. You can type /help to see what I can do.`
      );
    }
  }


  // Process the incoming message here
  
 

  if (messageText.startsWith('/rr')) {
    // Handle Google search command
    const query = messageText.replace('/rr', '').trim();
    const searchResults = await googleSearch(query);
    let recognizedIntent = true;
    if (searchResults.length > 0) {
      // Send the first search result as a response
      const firstResult = searchResults[0];
      const sendText = `Here's what I found for '${query}':\n${firstResult.title}\n${firstResult.link}`;
      bot.sendMessage(chatId, sendText, { parse_mode: 'HTML' });
    } else {
      // No search results found
      const sendText = `I couldn't find any relevant information for '${query}'.`;
      bot.sendMessage(chatId, sendText, { parse_mode: 'HTML' });
    }
  } 
  
  let recognizedIntent = false;
  // Iterate through intents and check for a match
  for (const intent of intents) {
    // Check if the message is in a group chat
    if (chatType === 'group') {
      // Check if the bot's username is mentioned or if groupmention is false and the regex matches
      if (messageText.includes(`@${botUsername}`) || !intent.groupmention) {
        if (intent.regex.test(messageText)) {
          if (intent.type === 'text') {
            // Handle text response
            const sendText = intent.text.replace('{username}', username);
            bot.sendMessage(chatId, sendText, { parse_mode: 'Markdown' });
          } else if (intent.files && intent.files.length > 0) {
            // Handle files for the matching intent sequentially
            let fileIndex = 0;

            function sendNextFile() {
              if (fileIndex < intent.files.length) {
                const file = intent.files[fileIndex];
                const sendText = file.text;
                const opts = {
                  caption: sendText,
                };

                if (file.type === 'document') {
                  bot.sendDocument(chatId, file.postLink, opts).then(() => {
                    fileIndex++;
                    sendNextFile(); // Send the next file in sequence
                  });
                } else if (file.type === 'photo') {
                  bot.sendPhoto(chatId, file.postLink, opts).then(() => {
                    fileIndex++;
                    sendNextFile(); // Send the next file in sequence
                  });
                } else if (file.type === 'video') {
                  bot.sendVideo(chatId, file.postLink, opts).then(() => {
                    fileIndex++;
                    sendNextFile(); // Send the next file in sequence
                  });
                } else if (file.type === 'audio') {
                  bot.sendAudio(chatId, file.postLink, opts).then(() => {
                    fileIndex++;
                    sendNextFile(); // Send the next file in sequence
                  });
                }
              }
            }

            sendNextFile(); // Start sending files in sequence
          }
          recognizedIntent = true;
          break; // Exit the loop after handling the first matching intent
        }
      }
    } else if (chatType === 'private' && intent.regex.test(messageText)) {
      // Handle intents in private chat without requiring mentions
      // Handle intents in both private and group chats without requiring mentions

      if (intent.type === 'text') {
        const sendText = intent.text.replace('{username}', username);
        bot.sendMessage(chatId, sendText, { parse_mode: 'Markdown' });
      } else if (intent.files && intent.files.length > 0) {
        // Handle files for the matching intent sequentially
        let fileIndex = 0;

        function sendNextFile() {
          if (fileIndex < intent.files.length) {
            const file = intent.files[fileIndex];
            const sendText = file.text;
            const opts = {
              caption: sendText,
            };

            if (file.type === 'document') {
              bot.sendDocument(chatId, file.postLink, opts).then(() => {
                fileIndex++;
                sendNextFile(); // Send the next file in sequence
              });
            } else if (file.type === 'photo') {
              bot.sendPhoto(chatId, file.postLink, opts).then(() => {
                fileIndex++;
                sendNextFile(); // Send the next file in sequence
              });
            } else if (file.type === 'video') {
              bot.sendVideo(chatId, file.postLink, opts).then(() => {
                fileIndex++;
                sendNextFile(); // Send the next file in sequence
              });
            } else if (file.type === 'audio') {
              bot.sendAudio(chatId, file.postLink, opts).then(() => {
                fileIndex++;
                sendNextFile(); // Send the next file in sequence
              });
            }
          }
        }

        sendNextFile(); // Start sending files in sequence
      }
      recognizedIntent = true;
      break; // Exit the loop after handling the first matching intent
    }

  }
  


    //if user use command /broadcast,/start then it will make the recognizedIntent true

   
  // If no matching intent is found, you can handle it here or ignore the message
    if (!recognizedIntent && !messageText.startsWith('/')) {
      if (chatType === 'private') {
        bot.sendMessage(chatId, "I'm sorry, I didn't quite catch that. If you have a specific question or need resources, please let me know 🤖@iiucbothelp");
      }
      if (chatType === 'group' && messageText.includes('@iiucbot')) {
        bot.sendMessage(chatId, "Sorry man ! I don't have this data right now, but I'll learn it soon! 🤖@iiucbothelp");
      }
    }






});







// Function to perform a Google search
async function googleSearch(query) {
  const apiUrl = 'https://www.googleapis.com/customsearch/v1';
  const params = {
    key: GOOGLE_SEARCH_API_KEY,
    cx: GOOGLE_SEARCH_ENGINE_ID,
    q: query,
    num: 1, // Number of search results to retrieve (in this case, 1)
  };

  try {
    const response = await axios.get(apiUrl, { params });
    const data = response.data;
    const results = [];

    if (data.items) {
      for (let i = 0; i < data.items.length; i++) {
        const item = data.items[i];
        results.push({
          title: item.title,
          link: item.link,
        });
      }
    }

    return results;
  } catch (error) {
    console.error('Google Search Error:', error);
    return [];
  }
}
