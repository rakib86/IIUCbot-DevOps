require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const commandlist = require('./command.js');
const botinfo = require('./botinfo.js');
const humanai = require('./humanai.js');
const firstQ = require('./Question/1stQ.js');
const secondQ = require('./Question/2ndQ.js');
const thirdQ = require('./Question/3rdQ.js');
const fourthQ = require('./Question/4thQ.js');
const fifthQ = require('./Question/5thQ.js');
const sixthQ = require('./Question/6thQ.js');
const seventhQ = require('./Question/7thQ.js');
const eighthQ = require('./Question/8thQ.js');
const firstN = require('./Note/1stN.js');
const secondN = require('./Note/2ndN.js');
const thirdN = require('./Note/3rdN.js');
const fourthN = require('./Note/4thN.js');
const fifthN = require('./Note/5thN.js');
const sixthN = require('./Note/6thN.js');
const seventhN = require('./Note/7thN.js');
const eighthN = require('./Note/8thN.js');
const bus = require('./bus.js');
const app = express();
const port = process.env.PORT || 3000; 
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
  const spreadsheetId = '1JE9_CVHt5sCwk8118ihZaF74mp6jh7jALKoQdjZdyZ8';
  const range = 'Sheet1'; // Change to the name of your sheet

  const sheets = google.sheets({ version: 'v4', auth: authClient });

  try {
    // Prepare the values to be inserted
    const values = [[
      userData.userId,
      userData.firstName,
      userData.username,
      userData.groupId,
      userData.groupTitle,
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
    const spreadsheetId = '1JE9_CVHt5sCwk8118ihZaF74mp6jh7jALKoQdjZdyZ8';
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
      groupId: row[3],       // Assuming group ID is in the fourth column
      groupTitle: row[4],    // Assuming group title is in the fifth column
    }));

    return userData;
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    return [];
  }
}

// brodcast message to all user


//set brodcast message to all user with command /brodcast by admin username with "rakiburrahaman"





// Define the intents
const intents = [
  
  ...firstQ.additionalIntents,
  ...secondQ.additionalIntents,
  ...thirdQ.additionalIntents,
  ...fourthQ.additionalIntents,
  ...fifthQ.additionalIntents,
  ...sixthQ.additionalIntents,
  ...seventhQ.additionalIntents,
  ...eighthQ.additionalIntents,
  ...firstN.additionalIntents,
  ...secondN.additionalIntents,
  ...thirdN.additionalIntents,
  ...fourthN.additionalIntents,
  ...fifthN.additionalIntents,
  ...sixthN.additionalIntents,
  ...seventhN.additionalIntents,
  ...eighthN.additionalIntents,
  ...commandlist.additionalIntents,
  ...bus.additionalIntents,
  ...botinfo.additionalIntents,
  ...humanai.additionalIntents,
  
];

// Replace with your bot token
// Replace with your bot token
const token = process.env.telegrame_token;
const bot = new TelegramBot(token, { polling: true });





//bot on command "/ask" send user to add question with command /ask and question

bot.onText(/\/ask$/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Please provide a question after the /ask command. For example: /ask What is the weather today?');
});






// Handle the /ask command
const waitingSticker = 'https://t.me/botresourcefordev/204'; // URL to the waiting sticker

bot.onText(/\/ask (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const question = match[1];

  
  if (question.includes('porn') || question.includes('sex') || question.includes('xvideos') || question.includes('fuck') || question.includes('pornhub')) {

    bot.sendMessage(chatId, 'ভাল হয়ে যাও মাসুদ😒');
    return;

  }













  



  let stickerMessage = null; // Store the sticker message

  try {
    // Send the waiting sticker and store the message object
    stickerMessage = await bot.sendSticker(chatId, waitingSticker);

    // Make a request to the Google Custom Search API
    const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: GOOGLE_SEARCH_API_KEY,
        cx: GOOGLE_SEARCH_ENGINE_ID,
        q: question,
        safe: 'active',
      },
    });

    // Extract the first search result
    const firstResult = response.data.items[0];

    if (firstResult) {
      const title = firstResult.title;
      const link = firstResult.link;
      const snippet = firstResult.snippet;

      // Send the answer and the link to the user
      await bot.sendMessage(chatId, `${snippet}\nIn the link below you will find more information about your question.`);
      await bot.sendMessage(chatId, `${title}\n\nLink: ${link}`);

      // Remove the waiting sticker after a delay (e.g., 2 seconds)
    
        if (stickerMessage) {
          await bot.deleteMessage(chatId, stickerMessage.message_id);
        }
   
    } else {
      await bot.sendMessage(chatId, 'Sorry, I couldn\'t find any information for that question.');

      // Remove the waiting sticker immediately if no answer is found
      if (stickerMessage) {
        await bot.deleteMessage(chatId, stickerMessage.message_id);
      }
    }
  } catch (error) {
    console.error('Error searching Google:', error);
    await bot.sendMessage(chatId, 'An error occurred while searching. Please try again later.');

    // Remove the waiting sticker on error
    if (stickerMessage) {
      await bot.deleteMessage(chatId, stickerMessage.message_id);
    }
  }
});


















// Greet the new user if someone joined the group
bot.on('new_chat_members', (msg) => {
  const chatId = msg.chat.id;
  const newMembers = msg.new_chat_members;

  // Iterate through the new members and send them a welcome message
  newMembers.forEach((member) => {
    const username = member.username || member.first_name;
    bot.sendMessage(chatId, `Welcome to the group, ${username}!🎉🤖.Use /help to know how this bot works😍🦄`, { parse_mode: 'Markdown' });
  });
});













//Broadcast Bus Location as text to all user with command /brodcastbus 




bot.onText(/\/broadcastbus (.+)/, async (msg, match) => {
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






// Handle the /broadcastgrp command
bot.onText(/^\/broadcastgrp (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const from = msg.from.username;

  // Check if the sender is the admin (rakiburrahaman)
  if (from === 'rakiburrahaman') {
    const message = match[1];

    // Retrieve data from the Google Sheet
    const existingData = await getFromGoogleSheets();

    // Filter the data to get a list of unique group chat IDs (4th column)
    const groupChatIds = Array.from(new Set(existingData.map((data) => data.groupId)));

    // Send the broadcast message to each group
    groupChatIds.forEach((groupChatId) => {
      bot.sendMessage(groupChatId, message);
    });

    bot.sendMessage(chatId, 'Broadcast sent to all groups.');
  } else {
    bot.sendMessage(chatId, 'You are not authorized to use this command.');
  }
});




bot.onText(/^\/broadcastgrpimg/, (msg) => {

  const chatId = msg.chat.id;

  const senderUsername = msg.from.username;

  // Check if the sender is the admin (rakiburrahaman)

  if (senderUsername === 'rakiburrahaman') {

    bot.sendMessage(chatId, 'Please send the image you want to broadcast with a caption.');

    // Listen for the image upload

    bot.once('photo', async (msg) => {

      // Store the image information temporarily

      const fileId = msg.photo[0].file_id;

      const caption = msg.caption || ''; // Get the caption (if provided)

      // Retrieve data from the Google Sheet

      const existingData = await getFromGoogleSheets();

      // Filter the data to get a list of unique group chat IDs (4th column)

      const groupChatIds = Array.from(new Set(existingData.map((data) => data.groupId)));

      // Send the broadcast image to each group

      groupChatIds.forEach((groupChatId) => {

        bot.sendPhoto(groupChatId, fileId, { caption });

      });

      bot.sendMessage(chatId, 'Broadcast sent to all groups.');

    });

  } else {

    bot.sendMessage(chatId, 'You are not authorized to use this command.');

  }

});






// Broadcast message to all users





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

// Function to send a broadcast message

async function sendBroadcastMessage(bot, message) {
  const userData = await getFromGoogleSheets();

  for (const user of userData) {
    bot.sendMessage(user.userId, message);
  }
}



bot.onText(/\/broadcastimg/, (msg) => {
  const chatId = msg.chat.id;
  const senderUsername = msg.from.username;

  if (senderUsername === 'rakiburrahaman') {
    bot.sendMessage(chatId, 'Please send the image you want to broadcast with a caption.');

    // Listen for the image upload
    bot.once('photo', async (msg) => {
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

// Function to send a broadcast image
async function sendBroadcastImage(bot, chatId, imageFileId, caption) {
  const userData = await getFromGoogleSheets();

  for (const user of userData) {
    bot.sendPhoto(user.userId, imageFileId, { caption });
  }
}


// BroadCast Video

bot.onText(/\/broadcastvideo/, (msg) => {
  const chatId = msg.chat.id;
  const senderUsername = msg.from.username;

  if (senderUsername === 'rakiburrahaman') {
    bot.sendMessage(chatId, 'Please send the video file you want to broadcast with a caption.');

    // Listen for the video file upload
    bot.once('video', async (msg) => {
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

// Function to send a broadcast video
async function sendBroadcastVideo(bot, chatId, videoFileId, caption) {
  const userData = await getFromGoogleSheets();

  for (const user of userData) {
    bot.sendVideo(user.userId, videoFileId, { caption });
  }
}


//Broadcast PDF

bot.onText(/\/broadcastpdf/, (msg) => {
  const chatId = msg.chat.id;
  const senderUsername = msg.from.username;

  if (senderUsername === 'rakiburrahaman') {
    bot.sendMessage(chatId, 'Please send the PDF file you want to broadcast with a caption.');

    // Listen for the PDF file upload
    bot.once('document', async (msg) => {
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

// Function to send a broadcast PDF file
async function sendBroadcastDocument(bot, chatId, documentFileId, caption) {
  const userData = await getFromGoogleSheets();

  for (const user of userData) {
    bot.sendDocument(user.userId, documentFileId, { caption });
  }
}









let dynamicUserCount = 0;
const activeUsers = new Set(); // Store active user IDs

bot.onText(/\/liveuser/, (msg) => {
  const chatId = msg.chat.id;
  const admin = msg.from.username;

  if (admin == 'rakiburrahaman') {
    bot.sendMessage(chatId, `Live User Count: ${dynamicUserCount}`);
  } else {
    bot.sendMessage(chatId, 'You are not authorized to use this command.');
  }
});




bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const chatTitle = msg.chat.title; // Get the group chat title
  const messageText = msg.text || '';
  const chatType = msg.chat.type;
  const from = msg.from.id;
  const firstName = msg.from.first_name;
  const username = msg.from.username || firstName;
  const botUsername = 'iiucbot'; // Replace with your bot's username
  const userId = msg.from.id;



  //Live User count
  if (!activeUsers.has(userId)) {
    activeUsers.add(userId);
    dynamicUserCount = activeUsers.size;
  }
  setTimeout(() => {
    activeUsers.clear();
    dynamicUserCount = 0;
  }, 600000); // 1 seconds = (1000 milliseconds)

  //


  if (chatType === 'private') {
    // Handle private chat messages
    // Collect user data and add it to Google Sheets
    const userData = {
      userId,
      firstName,
      username,
      groupId: '',        // Empty for private chats
      groupTitle: '',     // Empty for private chats
    };

    // Check if the user already exists in the Google Sheet before adding
    const existingUsers = await getFromGoogleSheets();
    const userExists = existingUsers.some((user) => user.userId === userId || user.username === username);
    if (!userExists) {
      await addToGoogleSheets(userData);
    }
  } else if (chatType === 'group') {
    // Handle group chat messages
    // Collect both user and group data and add them to Google Sheets
    const userData = {
      userId,
      firstName,
      username,
      groupId: chatId,      // Store group chat id
      groupTitle: chatTitle, // Store group chat title
    };

    // Check if the user or group already exists in the Google Sheet before adding
    const existingData = await getFromGoogleSheets();
const dataExists = existingData.some((data) => data.groupId === chatId || data.groupTitle === chatTitle);

if (!dataExists) {
  await addToGoogleSheets(userData);
}

  }




  // Add this data to your Google Sheets spreadsheet

  //get users data on start command

 // Update the /start command handler
if (messageText === '/start') {
  // Greet the user with a welcome message with emoji
  bot.sendMessage(chatId, `Welcome to IIUC Bot, ${username}!🎉🤖\nTry asking me a Question or tell me your current Semester.🥳`, { parse_mode: 'Markdown' });

  // Send three images to the user
  const imageLinks = [
    'https://t.me/botresourcefordev/312',
    'https://t.me/botresourcefordev/313',
    'https://t.me/botresourcefordev/314'
  ];

  // Loop through the image links and send each image to the user
  imageLinks.forEach(async (imageLink) => {
    try {
      // Send each image to the user
      await bot.sendPhoto(chatId, imageLink);
    } catch (error) {
      console.error('Error sending image:', error);
    }
  });
}


  // Process the incoming message here
  
 

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
        bot.sendMessage(chatId, "I'm sorry, I didn't quite catch that. If you have a specific question or need resources from internet , try /ask command.");
      }
      if (chatType === 'group' && messageText.includes('@iiucbot')) {
        bot.sendMessage(chatId, "Sorry man ! I don't have this data right now, but I'll learn it soon! you can get answer from internet by /ask command about your question.");
      }
    }

   






});










