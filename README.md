# CoinChef | Budget Tracker REST API

## Table of contents

- [Links](#links)
- [Overview](#overview)
- [Features](#features)
- [Features To Implement](#features-to-implement)
- [Built with](#built-with)
- [To run the app on Local Server](#to-run-the-app-on-local-server)
- [Author](#author)

## Links

- [Live API URL](https://api-coinchef.cyclic.cloud/)
- [Postman Documentation](https://documenter.getpostman.com/view/26849144/2s9Y5SWRGR)

## Overview

- This is a Budget Tracker REST API. It contains endpoints for Authentication, Users, Expense/Income Records and Budget Planning. This API can be used be develop Frontend for a budget tracker application.

### Features

- REST API Architecture.
- CRUD Operations - Users, Records, Budget planning
- Users are authorized using JSON Web Token.
- Filter, Sort, Pagination, Aggregation operations can be performed on Income and Expense records.
- Expense categories can be compared with the Budget planned and expense done on those categories on specified date.
- This API can be used to develop Frontend for a budget tracker application.

### Features To Implement

- Update Budget planning.
- Add Subscription tracking.
- Add Google OAuth.
- Upload documents

## Built with

- NodeJS
- Express
- MongoDB

## To run the app on Local Server

- Must have NodeJs and MongoDB installed.
- Install all needed npm dependencies with `npm install`.
- Save the following environmental variables in a config.env file.

  - NODE_ENV(`development`)
  - DATABASE (MongoDB)
  - DATABASE_PASSWORD
  - JWT_SECRET
  - JWT_EXPIRES_IN (`30d`)
  - JWT_COOKIE_EXPIRES_IN (`30`)

    **TESTING**

  - EMAIL_USERNAME
  - EMAIL_PASSWORD
  - EMAIL_HOST
  - EMAIL_PORT

    **PRODUCTION**

  - BREVO_USERNAME
  - BREVO_PASSWORD
  - BREVO_HOST
  - BREVO_PORT

- "npm start:dev"
- Server should run on [http://localhost:3000/](http://localhost:3000/).

## Author

Geoffrey
