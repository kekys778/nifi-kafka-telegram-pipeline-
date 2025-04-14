const {Telegraf} = require('telegraf');
const {KafkaClient, Producer} = require('kafka-node');

const client = new KafkaClient({ kafkaHost:'localhost:9092' });
const producer = new Producer(client);

producer.on('ready', function () {
    console.log('Kafka producer is ready');
});

producer.on('error', function (err) {
    console.log('Kafka producer error: ' + err);
});

const bot = new Telegraf('YOUR_API_KEY');

bot.on('message', (ctx) => {
    const message = ctx.message.text;
    const chat_id = ctx.message.chat.id;
    const chat_name = 
        ( ctx.chat.first_name == undefined ? "" : ctx.chat.first_name ) 
            + ( ctx.chat.title == undefined ? "" : ctx.chat.title );
    const from = ctx.message.from.username;
    const from_id = ctx.message.from.id;
    const message_id = ctx.message.message_id;
    const sent_ts = ctx.message.date;

    producer.send([{topic:'tg-msg', messages: JSON.stringify({ message_id, message, chat_id, chat_name, from, from_id, sent_ts })}], 
        function (err, data) {
            if (err) {
                console.log('Kafka send error: ' + err);
            } else {
                console.log('Message sent to Kafka');
            }
    });
});

bot.on('message_reaction', (ctx) => {
    const added = ctx.reactions.added.list;
    const removed = ctx.reactions.removed.list;

    const chat_id = ctx.chat.id;
    const chat_name = 
        ( ctx.chat.first_name == undefined ? "" : (ctx.chat.first_name + " ") )
            + ( ctx.chat.last_name == undefined ? "" : (ctx.chat.last_name + " ") )
            + ( ctx.chat.title == undefined ? "" : ctx.chat.title );
    const from = ctx.messageReaction.user.username;
    const from_id = ctx.messageReaction.user.id;
    const message_id = ctx.messageReaction.message_id;
    const sent_ts = ctx.messageReaction.date;

    const obj1 = added.map(x=>{
        const status = 1;
        const message = x.emoji;
        return {
            topic:'tg-msg-react', 
            messages: JSON.stringify({ message_id, message, chat_id, chat_name, from, from_id, status, sent_ts })
        }
    });

    const obj2 = removed.map(x=>{
        const status = -1;
        const message = x.emoji;
        return {
            topic:'tg-msg-react', 
            messages: JSON.stringify({ message_id, message, chat_id, chat_name, from, from_id, status, sent_ts  })
        }
    });

    producer.send(obj1.concat(obj2), 
        function (err, data) {
            if (err) {
                console.log('Kafka send error: ' + err);
            } else {
                console.log('Message sent to Kafka');
            }
    });
});

bot.launch({allowedUpdates:[
    'message', 'message_reaction'
]});