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


//set brodcast message to all user with command /brodcast by admin username with "rakiburrahaman"





// Define the intents
const intents = [

    {
        regex: /^(?=.*\b(6th|sixth|6)\b)(?=.*\b(Mid|mid)\b)(?=.*\b(question)\b)(?=.*\b(16|17|18)\b)/i,
        files: [
          {type:'document',text:'6th MId (16-18)',postLink:'https://t.me/botresourcefordev/100'},
        ],
        groupmention: true,
      },
  {
        regex: /^(?=.*\b(6th|sixth|6)\b)(?=.*\b(Final|final)\b)(?=.*\b(question)\b)(?=.*\b(17|18|19)\b)/i,
        files: [
          {type:'document',text:'6th Final (17-19)',postLink:'https://t.me/botresourcefordev/99'},
        ],
        groupmention: true,
      },
  {
        regex: /^(?=.*\b(5th|fifth|5)\b)(?=.*\b(Mid|mid)\b)(?=.*\b(question)\b)(?=.*\b(14|15|16|17)\b)/i,
        files: [
          {type:'document',text:'5th Mid (14-17)',postLink:'https://t.me/botresourcefordev/98'},
        ],
        groupmention: true,
      },
  {
        regex: /^(?=.*\b(3rd|third|3)\b)(?=.*\b(Final|final)\b)(?=.*\b(question)\b)(?=.*\b(sp 17|spring 17|spring17)\b)/i,
        files: [
          {type:'document',text:'3rd Final sp 17',postLink:'https://t.me/botresourcefordev/97'},
        ],
        groupmention: true,
      },
  
  ...otherRegex.additionalIntents,
  ...human_regex.additionalIntents,
  ...iiucprev.additionalIntents,
];

// Replace with your bot token
// Replace with your bot token
const token = process.env.telegrame_token;

const bot = new TelegramBot(token, { polling: true });




// Use body-parser middleware to parse incoming JSON
app.use(bodyParser.json());






//send file from telegram link to all user with command /brodcastimage by admin username with "rakiburrahaman" 





// ...

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text || '';
    const chatType = msg.chat.type;
    const from = msg.from.id;
    const firstName = msg.from.first_name;
    const username = msg.from.username || firstName;
    const botUsername = 'iiucbot'; // Replace with your bot's username
    const userId = msg.from.id;
  
    const userData = {
      userId,
      firstName,
      username,
    };
  
    // Add this data to your Google Sheets spreadsheet
  
    // get users data on start command
  
    if (messageText === '/start') {
      // greet the user with a welcome message with emoji
      bot.sendMessage(chatId, `Welcome to IIUC Bot, ${username}!🎉🤖`, { parse_mode: 'Markdown' });
    }
  
    // Process the incoming message here
  
    let recognizedIntent = false;
    let closestMatch = null; // Track the closest matching intent
    let missingWords = null; // Track the missing words
  
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
      } else {
        // Calculate the missing words for this intent
        const wordsInRegex = intent.regex.source.split('\\b');
        const missing = wordsInRegex.filter((word) => word && !messageText.toLowerCase().includes(word.toLowerCase()));
  
        // Update closestMatch and missingWords if this intent is closer
        if (!closestMatch || missing.length < missingWords.length) {
          closestMatch = intent;
          missingWords = missing;
        }
      }
    }
  
    // If no matching intent is found, suggest the closest match and missing words
    if (!recognizedIntent && !messageText.startsWith('/')) {
      if (chatType === 'private' && closestMatch && missingWords.length > 0) {
        const missingWordsString = missingWords.join(', ');
        bot.sendMessage(
          chatId,
          `You are missing ${missingWordsString} from the most closely matched regex:\n${closestMatch.regex.source}`,
          { parse_mode: 'Markdown' }
        );
      } else if (chatType === 'group' && messageText.includes('@iiucbot')) {
        bot.sendMessage(chatId, "Sorry man! I don't have this data right now, but I'll learn it soon! 🤖@iiucbothelp");
      }
    }
  
    // Check for user existence and add to Google Sheets if necessary
    const existingUsers = await getFromGoogleSheets();
    const userExists = existingUsers.some(
      (user) => user.userId === userId || user.username === username || user.firstName === firstName || user.chatId === userId
    );
  
    if (!userExists) {
      await addToGoogleSheets(userData);
    }
  });
  
  // ...
  









