Notification worker service - Microservice
===========================
Responsible to listen new notifications sent by the [Notification ETL service microservice](https://github.com/IsmaelTerreno/notification-etl-service) through RabbitMQ and send them to the Decaf API notification service.

# Tutorial videos for the project:

- [Part 1 - Microservice Design Explanation 🎥 ](https://www.loom.com/share/2cc4d31f67934be1bd0268d18885249d?sid=7890692c-2001-4642-afa3-4dc6f732aab1)
- [Part 2 - How to run the Microservices with Docker 🎥 ](https://www.loom.com/share/2cc4d31f67934be1bd0268d18885249d?sid=7890692c-2001-4642-afa3-4dc6f732aab1)
- [Part 3 - How to test the Microservices and use the monitoring tools 🎥 ](https://www.loom.com/share/2cc4d31f67934be1bd0268d18885249d?sid=7890692c-2001-4642-afa3-4dc6f732aab1)

## How to run the project with Docker

### Prerequisites

- Docker

### Requirements

#### 1) Run the following command to start the project and download image dependencies with docker-compose:

To start the microservice Docker services, run the following command:

```bash
cd docker && docker-compose -f docker-compose-microservice.yml up -d
```

## Planned Architecture:

![planned-architecture.png](planned-architecture.png)

PLEASE! Navigate through
the [following public link to access the planned architecture](https://s.icepanel.io/uYg8sIP5nHttWN/9CSh) for
the Stellar Notification microservice system. Where you can see and interact with the architecture diagram, also there
is a visual workflow to see the interaction on the bottom left you will see an "Import users from Decaf and transaction from Stellar to notify users" flow to see interaction animations.


This implementation is based on the coding task mentioned in the related project [Notification ETL service microservice](https://github.com/IsmaelTerreno/notification-etl-service) for more deep details
