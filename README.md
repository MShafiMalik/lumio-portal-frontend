# Lumio Portal Frontend

## Description

Lumio Portal Frontend is a React application built with Vite.js to provide a user interface for tracking the total value transferred from Layer 1 (L1) to Layer 2 (L2) using a bridge on L1. It interacts with the Lumio Portal Backend API to fetch and display data.

## Installation

### Prerequisites

- Node.js

### Installation Steps

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies.

   ```shell
   npm install
   ```
3. Setup env
   ```shell
   cp .env.example .env
   ```
   follow .env.example for env example
4. Start the development server.

   ```shell
   npm run dev
   ```

## Usage

- Once the development server is running, you can access the Lumio Portal frontend at `http://localhost:5173`.
- The frontend interacts with the Lumio Portal Backend API to retrieve and display data about total value transferred from a wallet and the total number of transfers.

## Features

Provides an overview of total value transferred and total number of transfers.

## Technologies Used

- Vite.js
- React
- Axios (for API requests)
- Tailwind CSS (for styling)
