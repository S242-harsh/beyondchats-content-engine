# BeyondChats Content Engine – Backend Assignment

## Overview
This project is a backend content engine built for BeyondChats.
It handles article scraping, storage, processing, and reference enrichment.

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- Axios
- Cheerio

## Features

### Phase 1
- Scraper logic for BeyondChats blogs
- Article storage in MongoDB
- CRUD APIs for articles

### Phase 2
- Article processing API
- Content enrichment
- Reference generation
- Article status update (original → processed)

## API Endpoints

### Get all articles
GET /api/articles

### Create article
POST /api/articles

### Process article
POST /api/articles/process/:id

## Note on Scraping
The BeyondChats blogs page is client-side rendered.
Due to this, live scraping via Cheerio is limited.
The scraping logic is implemented and APIs are verified using manually seeded data.

## How to Run
npm install  
npm run dev

## Environment Variables
MONGO_URI=your_mongodb_connection_string  
PORT=5000
