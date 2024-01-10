# React JS Wedding Invitation

## Description

This repository contains a digital wedding invitation system built with a React frontend and a Node.js backend using Express. The data is stored in a MongoDB non-relational database. The project facilitates the creation and management of wedding invitations through a user-friendly interface. React handles the frontend interactions, while Express manages server-side operations. MongoDB provides flexible and scalable storage for guest lists and event details.

## Usage

### Prerequisites

- Node.js (v20.10.0)
- Vite.js (v5.0.4)
- React.js (v18.2.0)

### Frontend Setup

1. Clone the Repository:
   ```bash
   git clone https://github.com/FedeCasper/wedding-invitation.git
2. Navigate to the project directory: 
   ```bash
   cd wedding-invitation
3. Navigate to the backend directory: 
   ```bash
   cd frontend
4. Install dependencies: 
   ```bash
   npm install 


### Installation

1. Open a new terminal and navigate to the frontend directory
2. Start the frontend: 
   ```bash
   npm run dev
5. Open your browser and visit `http://localhost:3000`

### Project Structure

- `/back`: Backend source code
- `/frontend`: Frontend source code
- `/manager`: Admin source code

### Usage

The application comprises two primary sections. The first is the Welcome Section, serving as a static example page to provide a brief introduction. The second is the Dashboard Section, where users can seamlessly perform script management tasks. This includes creating, modifying, and deleting scripts using CRUD operations. Additionally, users can track script versions, gaining insights into changes over time. The Dashboard further offers a text-based search filter for efficient script retrieval based on content. 

### Database

This project uses MongoDB Atlas as its database. Ensure you have an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and follow these steps:

1. Create a cluster in MongoDB Atlas.
2. Configure your cluster's security by allowing access from any IP address (0.0.0.0/0) or adjust it according to your security needs.
3. Create a database user with the necessary permissions.
4. Get the MongoDB Atlas connection string. It should have a format similar to: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database_name>?retryWrites=true&w=majority`

### Known Issues

 - None

### Contact

For any questions or issues, feel free to reach out at 
```bash
   federicorouyere@gmail.com
```


