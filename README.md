# 🏋️ SabFitZone Server

Backend API for **SabFitZone** — a fitness, wellness, beauty, gym, yoga, and hair-service booking platform.

🌐 **Live Client:** [SabFitZone](https://b9a11-client-side-54051.web.app/)
🚀 **Live Server:** [SabFitZone API](https://sabfitzone-server.vercel.app/)

---

## ✨ Features

* 🧘 Fetch Yoga, Gym, Facial, and Hair services from MongoDB.
* 🔍 Get individual service details by service ID.
* 📅 Create and manage service bookings.
* 🔐 Supports JWT cookie authentication.
* 👤 Supports Firebase-authenticated users.
* 🔄 Update booking details and booking status.
* 🗑️ Delete bookings.
* ☁️ Uses MongoDB Atlas database storage.
* 🌍 Supports local development and Firebase-hosted client requests.
* 🔒 Uses environment variables for sensitive credentials.

---

## 🛠️ Technologies Used

* ⚡ Node.js
* 🚂 Express.js
* 🍃 MongoDB Atlas
* 🔥 Firebase Authentication
* 🔑 JSON Web Token
* 🍪 Cookie Parser
* 🌐 CORS
* ⚙️ dotenv

---

## 📂 Database Collections

Database name: `fitZone`

| Collection       | Purpose                             |
| ---------------- | ----------------------------------- |
| `hairservices`   | Stores hair and hairstyle services  |
| `facialservices` | Stores facial and skincare services |
| `gymservices`    | Stores gym and fitness services     |
| `yogaServices`   | Stores yoga services                |
| `bookings`       | Stores customer booking information |

---

## 🔗 API Endpoints

| Method   | Endpoint                         | Description                         |
| -------- | -------------------------------- | ----------------------------------- |
| `GET`    | `/`                              | Check whether the server is running |
| `POST`   | `/jwt`                           | Create a JWT cookie for a user      |
| `POST`   | `/logout`                        | Clear the JWT cookie                |
| `GET`    | `/hairservices`                  | Get all hair services               |
| `GET`    | `/hairservices/:id`              | Get one hair service                |
| `GET`    | `/facialservices`                | Get all facial services             |
| `GET`    | `/facialservices/:id`            | Get one facial service              |
| `GET`    | `/gymservices`                   | Get all gym services                |
| `GET`    | `/gymservices/:id`               | Get one gym service                 |
| `GET`    | `/yogaServices`                  | Get all yoga services               |
| `GET`    | `/yogaServices/:id`              | Get one yoga service                |
| `GET`    | `/bookings?email=user@email.com` | Get user bookings                   |
| `POST`   | `/bookings`                      | Create a new booking                |
| `PUT`    | `/bookings/:id`                  | Update booking details              |
| `PATCH`  | `/bookings/:id`                  | Update booking status               |
| `DELETE` | `/bookings/:id`                  | Delete a booking                    |

---

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/tabassumsabaa/SabFitZone_server.git
```

### 2. Open the project folder

```bash
cd SabFitZone_server
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a file named `.env` in the project root and add:

```env
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
ACCESS_TOKEN_SECRET=your_long_random_jwt_secret
PORT=5000
NODE_ENV=development
```

### 5. Start the server

```bash
npm start
```

The API will run at:

```text
http://localhost:5000
```

---

## 🔐 Environment Variables

| Variable              | Description                           |
| --------------------- | ------------------------------------- |
| `DB_USER`             | MongoDB Atlas database username       |
| `DB_PASS`             | MongoDB Atlas database password       |
| `ACCESS_TOKEN_SECRET` | Secret key used for JWT               |
| `PORT`                | Server port number                    |
| `NODE_ENV`            | Development or production environment |

---

## ⚠️ Important Notes

* 🚫 Never upload your `.env` file to GitHub.
* 🔒 Never expose your MongoDB password or JWT secret.
* 💤 If service data does not load, check whether your MongoDB Atlas cluster is paused.
* ✅ Make sure the client-side URL is included in the server CORS configuration.

---

## 👩‍💻 Developer

**Sabiha Tabassum Saba**
MERN Stack Developer
E-mail: sabihatabassum0511@gmail.com
