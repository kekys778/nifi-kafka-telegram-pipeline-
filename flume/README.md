Archiving messages in S3

This step requires configuring a new Flume data flow so that messages are sent to the S3 bucket. As a result, you will be able to send data along this route :

Telegram -> Kafka -> Flume -> S3

Message data are sent to the archive as files.
New files should be closed (rolled) if there are more than 20 messages or if 30 minutes have passed. Files should be stored in compressed form.

To create a  view in ClickHouse on top of S3 bucket to view the messages use this as an example:

```
CREATE VIEW message_s3 AS  
SELECT * FROM s3(
    'link to s3 bucket',  
    '#YOUR Access Key ID',  
    '#YOUR secret key',  
    'JSONEachRow'
);

select * from message_s3_group3;
```

If successful, the view will show the accumulated messages.
