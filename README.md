# Docusaurus Boilerplate Code

## Description

This is the Boilerplate Code to create a static website to publish notes, blogs etc. It uses markdown files to generate website content.

## Tech Stack
![Image Alt](https://skillicons.dev/icons?i=md)

## How it looks?

## Features

- Converts markdown files into static website.

## How to run the project?

/ Start the docker container using the `docker-compose.yml` file.
/ Initiate the interactive terminal of the docker container.
/ Run the command, `npm run start`.
/ The website is hosted on port 3000 from inside the container. The port 3000 of the container is mapped to port 3000 of the local machine. Hence, you can check the website from your local machine.
/ Add files inside `docs/` directory and it will be on the website automatically.
/ Any code change will also be stored in the `pwd` since the volume of `/website` directory inside the container is mapped to `pwd` of the local machine.

## Author
[Dev Shah](https://github.com/busycaesar)
