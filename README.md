
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
- [TypeScript](https://www.typescriptlang.org/)  
- [tsx](https://github.com/esbuild-kit/tsx)  
- [tsup](https://tsup.egoist.dev/)  
- [@types/node](https://www.npmjs.com/package/@types/node) — Node.js type definitions for TypeScript  

---

## How to Use and Start

1. Clone the repository  
```bash
git clone https://github.com/your-username/vanilla-node-ts-podcast-api.git
cd vanilla-node-ts-podcast-api
````

2. Install dependencies

```bash
npm install
```

3. Start the development server with hot reload

```bash
npm run start:watch
```

4. Or start the development server (single run)

```bash
npm run start:dev
```

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

