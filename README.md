# 🚀 Google reCaptcha Form Validation

## Introduction
This project demonstrates proficiency in:
- **Express.js**: Server setup
- **Webpack**: Asset bundling
- **Prisma**: Database operations
- **Jest**: Testing

## Setup

Before running the application, you need to set up your environment variables for Google reCAPTCHA.

1. Duplicate the `.env.example` file and rename it to `.env`.
2. Fill in the `RECAPTCHA_SITE_KEY` and `SECRET_KEY` with your Google reCAPTCHA site key and secret key respectively.

Your .env file should look something like this:
```dotenv
NODE_ENV=development
PORT=8080
RECAPTCHA_SITE_KEY=your-recaptcha-site-key
SECRET_KEY=your-recaptcha-secret-key
RECAPTCHA_SCORE=0.5
DATABASE_URL="file:./dev.db"
```

## Installing Dependencies
Before running the application, you need to install the necessary dependencies. You can do this by running:
```shell
npm install
```

## Running the Application
You can now run the application in development mode with:
```shell
npm run build:dev
```
To start the server, use:
```shell
npm run server
```

## Testing
To run the tests, use:
```shell
npm run test
```
