# The Backend Server for the DJOKWA app

## Getting Started

### # ENV Variables

1. Create a .env file <br>
   Create a .env file in the root directory. See .env.example for variables naming!

2. Generate Public and Private keys <br />
   `Public and private key are used to generate JWT Tokens more securely`.
   You can easily generate them in here <br />
   https://app.id123.io/free-tools/key-generator/. <br />
   After that, encode both private and public keys to base64 and update .env file's variables values with the encoded public and private keys, based on .env.example variables naming!

3. Getting MongoDb URL Connection <br>
   If you are using MongoDb in you local computer, the regular url connection is `mongodb://127.0.0.1:27017/database_name`. You can change `database_name` with your project name, for example `tiktok-server`, so the url connection will be `mongodb://127.0.0.1:27017/tiktok-server`. <br />
   <br />
   But, if you are using MongoDb with Atlas, you can get the url connection from your Atlas account.
   Check out this tutorial to do so: https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369

### # Install All The Dependencies

Open up your terminal, and type <br >

`yarn`, if you are using yarn
<br />
<br />
`npm install`, if you are using npm.

## # Run the Server

Open up your terminal, and type <br >

`yarn dev`, if you are using yarn
<br />
`npm run dev`, if you are using npm.

## # Build the Server

Open up your terminal, and type <br >

`yarn build`, if you are using yarn
<br />
`npm run build`, if you are using npm.
<br>

> > > > > > > origin/dev

## Djokwa SMS-Middleware

## Getting Started

- **Perequisites: make sure you have docker & docker compose installed
  locally**
- Clone the staging branch of this repository.
- Open the project in your favourite code editor _preferrably Visual Studio
  Code_.

## Rules or Folders and Files Naming Conventions

- `Directories` with longer names should be named using
  `hyphens-to-seperate-each-word`.
- Each directory has an example of how each folder and file belonging to that directory is to be named. PLEASE FOLLOW THE SAME CONVENTION.

## Folder Structuring Explained (Most important files and folders)

Djokwa-middleware/
├── src/
│ ├── config/
│ │ └── database.ts # Database connection setup
│ ├── controllers/
│ │ └── userController.ts # Controller for user-related logic
│ ├── models/
│ │ └── userModel.ts # Database model definition
│ ├── routes/
│ │ └── userRoutes.ts # Routes related to users
│ ├── middleware/
│ │ └── authMiddleware.ts # Authentication middleware
│ ├── services/
│ │ └── userService.ts # Business logic for users
│ ├── utils/
│ │ └── logger.ts # Logger utility
│ ├── types/
│ │ └── userTypes.ts # Type definitions for user entities
│ └── index.ts # Main application entry point
├── dist/ # Compiled JavaScript files
├── node_modules/ # Node.js modules
├── .env # Environment variables
├── .gitignore # Files to ignore in Git
├── package.json # Project metadata and dependencies
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation

## How to contribute

- Make sure to pull the latest changes from `development branch` and update your branch.
- Name your branch accordingly by your task name and with `_` if it is: `composed_of_may_words`.
- Before pushing, you should format your work using the command:

```bash
    $ npm run format
```

- Add and stage your changes using the command:

```bash
    $ git add .
```

OR

```bash
    $ git add <file-name>
```

- Commit your work by running:

```bash
    $ npm run commit
```

Please follow the questionaires that follow to commit your work (please make sure to provide descriptive commit messages).

## Branch Naming Convention

- If working on a page we have `<page_name>/feature`
- If working on a component `<component_name>/feature`

## Important Note

- PLEASE DO NOT TRY COMMITTING USING `git commit -m ...` or any other equivalent processes for commiting other that the one stated above, please use whats has been described above. That way we are consistent in our work.
- Incase of any warnings or errors during committing, please ensure to clear them out. Error messages will be provided and to some extent fix suggestions.
- Always open a PR to the `development` branch not the `main` or `staging` branches.

To run the application using docker:

- At the root of the project run `docker-compose up`

## Reporting

- Please follow the follow link to provide daily reporting on what you have accomplished on your respective tasks [Github discussion reference](https://github.com/orgs/OpenTek-Startup/discussions/1)

## Project Board

- Refere to the following link for the project board and assigned tasks and issue labels. This also includes an automatic milestones tracker linked to issues [Project board reference](https://github.com/orgs/OpenTek-Startup/projects/2/views/2)
