Notification worker service - Microservice
===========================
Responsible to listen new notifications sent by the [Notification ETL service microservice](https://github.com/IsmaelTerreno/notification-etl-service) through RabbitMQ and send them to the Decaf API notification service.

## Planned Architecture:

![planned-architecture.png](planned-architecture.png)

PLEASE! Navigate through
the [following public link to access the planned architecture](https://s.icepanel.io/uYg8sIP5nHttWN/9CSh) for
the Stellar Notification microservice system. Where you can see and interact with the architecture diagram, also there
is a visual workflow to see the interaction on the bottom left you will see an "Import users from Decaf and transaction from Stellar to notify users" flow to see interaction animations.


This implementation is based on the coding task mentioned in the related project [Notification ETL service microservice](https://github.com/IsmaelTerreno/notification-etl-service) for more deep details
