Notification worker service - Microservice
===========================
Responsible to listen new notifications sent by the [Notification ETL service microservice](https://github.com/IsmaelTerreno/notification-etl-service) through RabbitMQ and send them to the Decaf API notification service.

# Tutorial videos for the project:

- [Part 1 - Microservice Design Explanation 🎥 ](https://www.loom.com/share/2cc4d31f67934be1bd0268d18885249d?sid=7890692c-2001-4642-afa3-4dc6f732aab1)
- [Part 2 - How to run the Microservices with Docker 🎥 ](https://www.loom.com/share/b183445ec0284a9d9fa30c0416eb8597?sid=c7070bf8-30ba-4230-87d1-2212e4c97769)
- [Part 3 - How to test the Microservices and use the monitoring tools 🎥 ](https://www.loom.com/share/c935b9150c10404b909e42e7676c4787?sid=469becdb-f77d-43aa-8fb8-f27fea07d849)

## How to run the project with Docker

### Prerequisites

- Docker

### Requirements

#### 1) Run the following command to start the project and download image dependencies with docker-compose:

To start the microservice Docker services, run the following command:

```bash
cd docker && docker-compose -f docker-compose-microservice.yml up -d
```

#### 2) Wait for approximately 10-20 seconds for the services to start, then you will be able to access the following local services:

#### Microservice core service:

- [Notification Worker Service](http://localhost:3098/health)

## Planned Architecture:

![planned-architecture.png](planned-architecture.png)

PLEASE! Navigate through
the [following public link to access the planned architecture](https://s.icepanel.io/uYg8sIP5nHttWN/9CSh) for
the Stellar Notification microservice system. Where you can see and interact with the architecture diagram, also there
is a visual workflow to see the interaction on the bottom left you will see an "Import users from Decaf and transaction from Stellar to notify users" flow to see interaction animations.


This implementation is based on the coding task mentioned in the related project [Notification ETL service microservice](https://github.com/IsmaelTerreno/notification-etl-service) for more deep details
