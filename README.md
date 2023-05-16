# ankasa-backend

Backend application for ankasa.

## Tech Stack
- Node JS
- Express JS
- PostgreSQL

## Packages
- "argon2": "^0.30.3"
- "body-parser": "^1.20.2"
- "cors": "^2.8.5"
- "dotenv": "^16.0.3"
- "express": "^4.18.2"
- "jsonwebtoken": "^9.0.0"
- "pg": "^8.9.0"
- "uuid": "^9.0.0"

## Features
- CRUD
- Authentication / User Login
- Authorization

## Env Variables
- DB_USER
- DB_HOST
- DB_NAME
- DB_PASS
- DB_PORT
- JWT_KEY

## API References

### Register User

> POST /users/register

Request Body:
| Key | Value |
| ----------- | ----------- |
| fullname | user full name |
| email | user email |
| password | password |
| confirm_password | confirm password |

### Login

> POST /users/login

Request Body:
| Key | Value |
| ----------- | ----------- |
| email | user email |
| password | user password |

### Get User by ID

> GET /users/:id

### Update User Data

> PUT /users/:id

Authorization:
| Key | Value |
| ----------- | ----------- |
| bearer token | user token |

Request Body:
| Key | Value |
| ----------- | ----------- |
| fullname | user fullname |
| email | user email |
| password | user password |
| phone | user phone number |
| city | user city |
| country | user country |

### Get All Ticket

> GET /ticket

### Get Ticket by ID

> GET /ticet/:id

### Insert Booking

> POST /booking

Authorization:
| Key | Value |
| ----------- | ----------- |
| bearer token | user token |

Request Body:
| Key | Value |
| ----------- | ----------- |
| ticket_id | ticket id |
| subtotal | ticket price |

### Get Booking by ID

> GET /booking/:id

Authorization:
| Key | Value |
| ----------- | ----------- |
| bearer token | user token |

### Get User's Booking

> GET /booking/mybooking

Authorization:
| Key | Value |
| ----------- | ----------- |
| bearer token | user token |

### Update Book Status

> PUT /booking/:id

Authorization:
| Key | Value |
| ----------- | ----------- |
| bearer token | user token |
