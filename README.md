# SimpleWebApp README
Okay, lets create a simple web application with use of the following...

## Tools
Bootstrap(Themes), HTML, CSS, Javascript, LightBox
Node.js(Javascript Server-side Runtime Enviroment), NPM(Package Management) {Morgan + Nodemon}
Express(Web Server), MySql(DB), Sequelize(ORM)
Mocha, Chai, Sinon

for our efforts we'll use...

### "Agile" as our software development approach
By outlinning our Features, Spike User Stories, Enabler User Stories and User Stories throughout our PI (Project Increment).
Note - It is important that Dependencies with other teams be identified in our planning process, since this app is simple we are the only team. Additionally keep in mind that an "Epic" has "Features" and can span accross various PIs, A "Feature" is implemented/delivered within its respective PI timeframe and finally, a PI has five "Sprints" which contain the "Features" and their respective child items (Spikes, User Story, Non-Deliverables etc).

Epic: Create person app
```
*001 Feature - Setup/configure or stack/infrastructure
  *002 Spike User Story - Design/deploy our local stack
  *003 Enabler User Story - Install NPM, install nodemon
  *004 Enabler User Story - Install morgan, install express
  *005 Enabler User Story - Setup git repository
  *006 User Story - Implement simple "Hello World" page
```
```
*007 Feature - Implementation of web application front-end
  *008 Spike User Story - Design the page objects styling and navigation
  *009 Enabler User Story - Install Bootcamp
  *010 User Story - Create and style crud pages
  *011 User Story - Implement/configure header menu buttons navigation logic/routing
```
```
*012 Feature - Implementation of CRUD operations
  *013 Spike User Story - Research CRUD implementation approach in Express, NodeJs and JSON
  *014 User Story - Implement GET
  *015 User Story - Implement POST
  *016 User Story - Implement Confirmation/alerts with Lightbox
  *017 User Story - Implement PUT
  *018 User Story - Implement DELETE
```
```
*019 Feature - Implementation of CRUD operations by MySql DB
  *020 Spike User Story - MySql ERD model design, perform normalization if necessary
  *021 Spike User Story - Research Heroku setup/deployments
  *022 Enabler User Story - Setup Heroku
  *023 Enabler User Story - Setup/deploy MySql DB
  *024 User Story - Implement SELECT query
  *025 User Story - Implement INSERT query
  *026 User Story - Implement PUT query
  *027 User Story - Implement DELETE query

```
```
*028 Feature - Pivot CRUD operations from MySql to Sequelize ORM
  *029 Spike User Story - Research Sequelize implementation process
  *030 User Story - Translate SELECT query into Sequelize ORM implementation
  *031 User Story - Translate INSERT query into Sequelize ORM implementation
  *032 User Story - Translate UPDATE query into Sequelize ORM implementation
  *033 User Story - Translate DELETE query into Sequelize ORM implementation
```
Moving along lets begin...

### Planning our Sprints
To secure short term delivery by estimating Sprint capacity/load/userstory points. Sprints on average last one to two weeks. For this app, we'll be winging it (2-3 day Sprints?). User story points increment in a fibonacci sequence.

```
Legend: id - itemType - name - points
```
Sprint 1 
* 002 - Spike User Story - Design/deploy our local stack - 1
* 003 - Enabler User Story - Install NPM, install nodemon - 1 
* 004 - Enabler User Story - Install morgan, install express - 1
* 005 - Enabler User Story - Setup git repository - 1
* 008 - Spike User Story - Design the page objects styling and navigation - 1
* 009 - Enabler User Story - Install Bootcamp - 1
* Capacity: 10 / Load: 6 / [scrum board](https://scrumy.com/SimpleWebApp_Sprint1 "Sprint 1 scrum board")

Sprint 2 
* 006 - User Story - Implement simple "Hello World" page - 1
* 010 - User Story - Create and style crud pages - 1
* 011 - User Story - Implement/configure header menu buttons navigation logic/routing - 1
* 013 - Spike User Story - Research CRUD implementation approach in Express, NodeJs and JSON - 1
* 014 - User Story - Implement GET - 1
* 015 - User Story - Implement POST - 1
* 016 - User Story - Implement Confirmation/alerts with Lightbox - 1
* 001 - Feature - Setup/configure or stack/infrastructure
* 007 - Feature - Implementation of web application front-end
* Capacity: 10 / Load: 7 / [scrum board](https://scrumy.com/SimpleWebApp_Sprint2 "Sprint 2 scrum board")

Sprint 3
* 017 - User Story - Implement PUT - 1
* 018 - User Story - Implement DELETE - 1
* 012 - Feature - Implementation of CRUD operations
* 020 - Spike User Story - MySql ERD model design, perform normalization if necessary - 1
* 021 - Spike User Story - Research Heroku setup/deployments - 1
* 022 - Enabler User Story - Setup Heroku - 2
* 019 - Feature - Implementation of CRUD operations by MySql DB
* Capacity: 10 / Load: 6 / [scrum board](https://scrumy.com/SimpleWebApp_Sprint3 "Sprint 3 scrum board")

Sprint 4 
* 024 - User Story - Implement SELECT query - 1
* 025 - User Story - Implement INSERT query - 1
* 026 - User Story - Implement PUT query - 1
* 027 - User Story - Implement DELETE query - 1
* 023 - Enabler User Story - Setup/deploy MySql DB - 2
* Capacity: 10 / Load: 6 / [scrum board](https://scrumy.com/SimpleWebApp_Sprint4 "Sprint 4 scrum board")

Sprint 5
* 029 - Spike User Story - Research Sequelize implementation process - 2
* 030 - User Story - Translate SELECT query into Sequelize ORM implementation - 1
* 031 - User Story - Translate INSERT query into Sequelize ORM implementation - 1
* 032 - User Story - Translate UPDATE query into Sequelize ORM implementation - 1
* 033 - User Story - Translate DELETE query into Sequelize ORM implementation - 1
* 028 - Feature - Convert CRUD operations from MySql to Sequelize ORM
* Capacity: 10 / Load: 6 / [scrum board](https://scrumy.com/SimpleWebApp_Sprint5 "Sprint 5 scrum board")

...more on the way.

### Authors
Pedro Garboza
