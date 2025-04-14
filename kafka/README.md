Configuring Kafka

If you're using a virtual machine, follow these steps:

Go to the NiFi interface and back up the project by adding all the objects to the NiFi template. Save the template as an XML file.

Stop NiFi. 
```cd /opt/dockerfiles/nifi
sudo docker compose -f docker-compose.yml down
```

Next, use the command to run NiFi, Kafka, and Zookeeper in the same docker compose app:
sudo docker compose -f nifi_kafka.yml up -d
If kafka doesn't work after rebooting, try this command again.

Check the health of NiFi and the availability of Kafka inside the VM.

Shut down the virtual machine, and then configure port mapping so that port 9092 of the virtual machine is available to the primary operating system (host). In this case, you will be able to run the bot outside the virtual machine. Add the port forwarding rule: 9092(host port):9092(VM port).

Start the virtual machine. If you have a bot running on your main operating system, messages will now start being sent to Kafka inside VM. Try creating a Kafka console consumer and make sure that messages are sent to both topics. To test it, add several messages to a group in which the bot was added and set reactions to these messages.

If you add a bot to a group and make it an administrator, it will start sending all messages to the following Kafka topics at localhost:9092:
•	tg-msg contains messages
•	tg-msg-react contains reactions to messages in a private chat with the bot and in groups in which the bot has admin permissions
