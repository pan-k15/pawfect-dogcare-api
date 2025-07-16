# 🐾 DogCare Center – API

This is the backend REST API for the **DogCare Center** — a full-service pet care platform for dog owners. It supports dog management, grooming/bath appointments, snack ordering, laundry bookings, dog runs, and more.

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB
- Postman (for testing)

### Setup
```bash
git clone https://github.com/yourusername/dogcare-center-api.git
cd dogcare-center-api
npm install
npm run dev
```

- `.env` file setup:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/dogcare
JWT_SECRET=your-secret-key
```

---

## 🔐 Authentication

Authentication is required for most endpoints via JWT.

### Login
`POST /api/auth/login`

```json
{
  "username": "john123",
  "password": "password"
}
```

### Register
`POST /api/auth/register`

```json
{
  "username": "john123",
  "password": "password",
  "email": "john@example.com"
}
```

---

## 👤 Member APIs

### Create Member
`POST /api/members`

```json
{
  "userId": "userObjectId",
  "name": "John Doe",
  "fname": "John",
  "lname": "Doe",
  "dateOfBirth": "1990-05-10",
  "gender": "Male"
}
```

### Get Member by Username
`GET /api/members/user/:username`

---

## 🐶 Dog APIs

### Add Dog
`POST /api/dogs`

```json
{
  "name": "Lucky",
  "breed": "Shih Tzu",
  "age": 4,
  "weight": 5,
  "notes": "Allergic to beef",
  "userId": "userObjectId"
}
```

### Get Dogs by User
`GET /api/dogs/member/:userId`

---

## 🧺 Laundry Service

### Book Laundry
`POST /api/laundry`

```json
{
  "dogName": "Lucky",
  "items": [
    { "item": "Dog Clothes", "quantity": 2 },
    { "item": "Towel", "quantity": 1 }
  ],
  "notes": "Use hypoallergenic detergent",
  "status": "Pending",
  "paid": false,
  "totalCost": 120
}
```

---

## ✂️ Grooming & Bath

### Book Service
`POST /api/grooming`

```json
{
  "userId": "userObjectId",
  "dogId": "dogObjectId",
  "services": ["Haircut", "Basic Bath"],
  "preferredDate": "2025-07-20"
}
```

---

## 🧼 Wash & Dry

### Book Service
`POST /api/wash-dry`

```json
{
  "userId": "userObjectId",
  "dogId": "dogObjectId",
  "type": "Assisted Service",
  "preferredDate": "2025-07-22"
}
```

---

## 🏃‍♂️ Dog Run

### Book Dog Run
`POST /api/dog-run`

```json
{
  "userId": "userObjectId",
  "dogId": "dogObjectId",
  "preferredDate": "2025-07-19"
}
```

---

## 🍖 Snack Orders

### Create Snack Order
`POST /api/snacks`

```json
{
  "userId": "userObjectId",
  "dogId": "dogObjectId",
  "items": [
    { "name": "Dried Beef Strips", "quantity": 2, "unitPrice": 50 }
  ],
  "totalCost": 100
}
```

---

## ☕ Cafe Orders

### Create Cafe Order
`POST /api/cafe`

```json
{
  "userId": "userObjectId",
  "dogId": "dogObjectId",
  "items": [
    { "name": "Dogccino", "quantity": 1, "unitPrice": 50 }
  ],
  "totalCost": 50,
  "notes": "Serve chilled"
}
```

---

## 📁 Folder Structure

```
├── models/
│   ├── Dog.js
│   ├── Member.js
│   ├── User.js
│   └── ...
├── controllers/
├── routes/
├── middleware/
├── app.js
└── server.js
```

---

## 📌 Notes

- All POST endpoints require `Content-Type: application/json` and a valid `Authorization: Bearer <token>` header.
- Use [Postman Collection](#) (coming soon) for easy testing.

---

## 📬 Contact

For questions or contributions, please contact **Pan** or open an issue.
