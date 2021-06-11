# Registration_APP

## Goal
1) Complete server and database requirements - Done
2) Complete client requirements - Done
3) Endpoint Testing - In Progress
4) Host on 

## Getting started

### Install dependencies
```
npm install
```
### Start Server
``` 
npm run start-dev
```
### Data Flow
registration -> confirmation
adminReport

### Demo
Copy the following url to browser to see registration page and submit input
```
www.localhost:3000
```
Copy the following url to browser to see Admin Report
```
www.localhost:3000/adminReport
```

### Tests
```
npm run test
```

### Things to improve if given more time

1) Recreate App as a SPA
  A) Use React to optimize reusable components and easier syntax
  B) Create credential page for greater security
2) Return user ID and give personal welcome in confirmation Page
3) Run more tests using Jest/supertest
  A) Test if data is being saved/returned by DB
  B) Test empty inputs
4) Fix rendering bugs