
A full-stack project with separate `Backend` and `Frontend` folders.

## Overview

- `Backend` is an Express API server using MongoDB via Mongoose.
- `Frontend` is a React app built with Vite and React Router.
- The app aims to support creating image posts and showing a feed.

## Backend

### What it contains

- `server.js` — starts the Express app on port `3000`.
- `src/app.js` — defines API routes:
  - `POST /create-post` — uploads an image to ImageKit and saves a post record.
  - `GET /fetch` — retrieves saved posts from MongoDB.
- `src/db/db.js` — connects to MongoDB using `process.env.DB_URL`.
- `src/models/post.model.js` — defines a post schema with `image_Url` and `caption`.
- `src/services/storage.services.js` — uploads image buffers to ImageKit using `IMAGEKIT_PRIVATE_KEY`.

### Dependencies

- `express`
- `mongoose`
- `multer`
- `dotenv`
- `@imagekit/nodejs`

### Environment variables

Create a `.env` file in `Backend/` with:

```env
DB_URL=<your-mongodb-connection-string>
IMAGEKIT_PRIVATE_KEY=<your-imagekit-private-key>
```

### Run backend

```bash
cd Backend
npm install
node server.js
```

## Frontend

### What it contains

- `Frontend/src/App.jsx` — configures React Router with routes for:
  - `/create-post`
  - `/feed`
- `Frontend/src/pages/CreatePost.jsx` — UI for submitting an image and caption.
- `Frontend/src/pages/feed.jsx` — mock feed component rendering a static sample post.
- `Frontend/src/main.jsx` — mounts the React app.

### Dependencies

- `react`
- `react-dom`
- `react-router-dom`
- `vite`

### Run frontend

```bash
cd Frontend
npm install
npm run dev
```

## Notes and Current Status

- The backend supports image upload and post creation.
- The frontend currently displays the page UI, but does not yet call the backend API.
- The feed page uses a hard-coded sample post instead of fetching live data.

## Suggested Next Steps

- Add API integration in `Frontend/src/pages/CreatePost.jsx` for `POST /create-post`.
- Update `Frontend/src/pages/feed.jsx` to fetch posts from `GET /fetch`.
- Add error handling and loading states.
- Add authentication if needed.

## Project Structure

```
Backend/
  package.json
  server.js
  src/
    app.js
    db/db.js
    models/post.model.js
    services/storage.services.js
Frontend/
  package.json
  vite.config.js
  src/
    App.jsx
    main.jsx
    pages/
      CreatePost.jsx
      feed.jsx
```
