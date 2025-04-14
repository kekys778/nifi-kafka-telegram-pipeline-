# Distributed Telegram Data Pipeline with Kafka, NiFi, Flume and ClickHouse

🎯 This project implements a full ETL pipeline using a Telegram bot as a data source and storing data in S3 and ClickHouse via Kafka, Flume and NiFi.

## 📌 Features

- Collect messages and reactions from Telegram via custom bot
- Stream messages to Kafka topics
- Use NiFi to process and route data to ClickHouse
- Archive messages to S3 with Flume
- Analyze the data using SQL queries in ClickHouse

## 🔧 Tech Stack

- Node.js (Telegram bot)
- Kafka & Zookeeper
- Apache NiFi
- Apache Flume
- ClickHouse
- S3 bucket
- Docker (VM setup)

## 📂 Project Structure

- `bot/` – Telegram bot source code
- `nifi/` – NiFi dataflow configuration and templates
- `flume/` – Flume config to stream to S3
- `clickhouse/` – DDL and SQL analysis queries

## 🚀 Getting Started

1. **Set up Kafka and NiFi with Docker**
2. **Run Telegram bot from `/bot`**
3. **Configure Flume and NiFi pipelines**
4. **View data in ClickHouse and analyze with queries**

See detailed instructions in each subfolder.

