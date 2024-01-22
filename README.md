## Next.js App Admin Dashboard 


## Description
This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


### Created by John Wanjema 1/22/2024

## Setup and installations

### Prerequisites

1. [Node Js](https://nodejs.org/en/)
1. [React](https://react.dev//)
2. [Next Js](https://nextjs.org//)
3. [MySQl](https://www.mysql.com/)


### Clone the Repo and rename it to suit your needs.

```bash
git clone https://github.com/johnwanjema/next-dashboard
```

### Initialize git and add the remote repository

```bash
git init
```

```bash
git remote add origin <your-repository-url>
```

### Setting up environment variables

Copy content in  `.env.example` to a `.env` file:

```
cp .env.example .env
```

Create database and set up  your `.env` 

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=<database name>
DB_USERNAME=<userName>
DB_PASSWORD=<password>
```

## Build Setup

``` bash

npm install
```

## Run the app

### Generate application key
```bash

openssl rand -base64 
```
Add the app key to .env 

### Seed the database
```bash

npm run seed
```

### Start Application
```bash

npm run dev
```

### Access the application at localhost:3000

Open [localhost:3000](http://localhost:3000/)

## Bugs

Create an issue mentioning the bug you have found.

### Known bugs

- N/A

## Support and contact details

Contact [John Wanjema](jonwanjema@gmail.com) for further help/support.