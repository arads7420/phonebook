# Phone Book
An application that allows you to add, view, update and delete your phone contacts.

## How To Run
Create an MongoDB Atlas URI connection parameter in `server/.env` with your MongoDB Atlas URI:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.2e2ed.mongodb.net/<database_name>?retryWrites=true&w=majority
PORT=5000
```

Start Server:
```
cd server
npm install
npm run server
```

Start Frontend:
```
cd client
npm install
npm start
```


## Screenshots

View Contacts

![Web capture_28-6-2022_23335_localhost](https://user-images.githubusercontent.com/55148309/176246930-0fa7c43b-7ef9-4d97-87f7-f1031a4c7ccf.jpeg)

