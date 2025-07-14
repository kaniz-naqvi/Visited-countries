## API Endpoints Documentation – Visited Countries Project

**Base URL:** `http://localhost:3000`  
_Replace with your deployed server URL when live._

---

### POST `/api/auth/sign-up`

**Description:** Register a new user.

**Request**

```json
{
  "name": "Kaniz",
  "password": "1245#vbl",
  "email": "kaniz78@gail.com"
}
```

**Response**

```json
{
  "message": "User added successfully",
  "authenticated": true,
  "user": {
    "id": 12,
    "user_name": "Kaniz",
    "email": "kaniz78@gail.com",
    "password": "$2b$07$..."
  }
}
```

---

### POST `/api/auth/login`

**Description:** Login with email and password.

**Request**

```json
{
  "password": "1245#vbl",
  "email": "kaniz78@gail.com"
}
```

**Response**

```json
{
  "message": "success",
  "authenticated": true,
  "user": {
    "id": 3,
    "email": "kaniz78@gail.com",
    "user_name": "Kaniz",
    "visited_countries": ["KP", "PK", "IR"]
  }
}
```

---

### GET `/api/auth/logout`

**Description:** Logs out the user.  
**Note:** Requires valid authentication cookie.

---

### GET `/api/auth/me`

**Description:** Get details of the authenticated user.  
**Note:** Requires valid authentication cookie.

**Response**

```json
{
  "message": "Authenticated",
  "authenticated": true,
  "user": {
    "id": 5,
    "user_name": "Kaniz",
    "visited_countries": ["IR", "IQ"]
  }
}
```

---

### POST `/api/visited`

**Description:** Add a new visited country for the authenticated user.  
**Note:** Requires valid authentication cookie.

**Request**

```json
{
  "country_name": "Iran"
}
```

---

### GET `/api/visited`

**Description:** Get all visited countries for the authenticated user.  
**Note:** Requires valid authentication cookie.

**Response**

```json
{
  "message": "Visited countries fetched successfully",
  "user_id": "3",
  "countries": ["KP", "PK", "IR"]
}
```
