
# Vanilla Node TS Podcast API

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)   ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)   ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) 

## Overview

This is a study project built with **vanilla Node.js** and **TypeScript** that simulates a video podcast platform, similar to a simplified Netflix experience. The app organizes podcast episodes into categories like Health, Fitness, Mindset, and Humor to make browsing easy and intuitive.

The main goal was to develop a backend API from scratch without using any frameworks, applying a layered architecture that includes controllers, services, repositories, and models. This approach helped deepen understanding of core backend concepts and clean code practices.

---

## Features

- List podcast episodes grouped by categories  
- Filter episodes by podcast channel name  
- Expose a RESTful API returning JSON data  
- Clear separation of concerns with multiple layers (controllers, services, repositories, models, utils)  
- No use of frameworks—only native Node.js modules and TypeScript  

---

## Technologies Used

- [Node.js](https://nodejs.org/)  
  Used as the runtime environment to build and run the server-side logic using native HTTP modules without frameworks.

- [TypeScript](https://www.typescriptlang.org/)  
  Adds static typing to JavaScript, improving code safety, readability, and developer experience.

- [tsx](https://github.com/esbuild-kit/tsx)  
  Enables direct execution of TypeScript files (like `ts-node`), making development and testing faster without compilation steps.

- [tsup](https://tsup.egoist.dev/)  
  A fast bundler used to compile and bundle TypeScript code for production with zero-config and great performance.

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
  The base language behind TypeScript. Understanding its core is essential when working with vanilla Node.js.

- [@types/node](https://www.npmjs.com/package/@types/node)  
  Provides type definitions for Node.js built-in modules, allowing TypeScript to understand Node-specific globals like `http`, `fs`, etc.

Claro! Aqui está o tópico **"How to Use and Start"** em formato textual, numerado e claro:

---

## How to Use?

1. **Clone the repository**
   Run `git clone https://github.com/your-username/vanilla-node-ts-podcast-api.git`

2. **Install the dependencies**
   Use `npm install` to install all required packages.

3. **Start the development server with hot reload**
   Run `npm run start:watch` to launch the server and automatically reload on file changes.

4. **Or start the development server without hot reload**
   Use `npm run start:dev` to start the server for a single run without watching for changes.

---

## API Endpoints

| Method | Endpoint             | Description                               |
| ------ | -------------------- | ----------------------------------------- |
| GET    | `/episodes`          | Retrieve all podcast episodes by category |
| GET    | `/episodes?channel=` | Filter episodes by podcast channel name   |

---

## Why Vanilla Node.js and TypeScript?

This project serves as a practical exercise to master backend development fundamentals by working directly with Node.js native modules and TypeScript. Without relying on frameworks, it emphasizes:

* Handling HTTP requests and responses at a low level
* Writing strongly-typed code for better reliability
* Implementing a clean, layered architecture
* Following best practices for maintainable and readable code

