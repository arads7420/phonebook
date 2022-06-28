# Phone Book
An application that allows you to add, view, update and delete your phone contacts.

## How To Run
- Clone the Repository:
```
mkdir phonebook
cd phonebook
git clone https://github.com/arads7420/phonebook.git
```
- Create `server/.env` and specify a PORT and your MongoDB Atlas URI:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.2e2ed.mongodb.net/<database_name>?retryWrites=true&w=majority
PORT=5000
```

- Start the Server:
```
cd server
npm install
npm run server
```

- Start the Frontend Server:
```
cd client
npm install
npm start
```


## Screenshots

- View Contacts:

![Web capture_28-6-2022_23335_localhost](https://user-images.githubusercontent.com/55148309/176246930-0fa7c43b-7ef9-4d97-87f7-f1031a4c7ccf.jpeg)

- Add a Contact:

![Web capture_28-6-2022_23335_localhost](https://user-images.githubusercontent.com/55148309/176249431-8e478ffb-7616-417c-9ea5-967509c334eb.jpeg)

- Update a Contact:

![Web capture_28-6-2022_23335_localhost](https://user-images.githubusercontent.com/55148309/176249605-7ce4fc53-824f-4155-abc8-dc2414963b46.jpeg)
