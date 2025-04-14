A bot in Telegram is a program that can react to chat-related events and manage messages.
1.	First, create a new Telegram bot in BotFather (https://t.me/BotFather ) and save the API key. 
2.	Locate the server.js file. Paste the API key into the bot's program text. Inside the file, replace the YOUR_API_KEY with the key you received when you registered your bot.
3.	Install the latest version of node js from https://nodejs.org/en/download official website  and then check if the node -v and npm -v commands work in terminal of your machine.
4.	Download all the necessary bot dependencies using the npm install command. To do this, go to the terminal, cd to folder with the bot. Run npm install. After that, the node_modules folder will appear in the project folder
5.	Run the bot with the command node server.js in the bot folder.
6.	If there are no errors, the bot has started successfully. Try writing something to the bot or to a group in which the bot resides. The result will be instantly sent to Kafka at localhost:9092. You will see messages in console telling that there were errors if Kafka server is unavailable. 
