# How to Deploy to Vercel

This project is configured to run as a **Vite (React)** frontend with **Vercel Serverless Functions** for the backend API.

## Prerequisites

1.  **GitHub Account**: Ensure your project is pushed to a GitHub repository.
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com).
3.  **MongoDB Database**: You need a MongoDB connection string (URI).

## Step-by-Step Deployment Guide

### 1. Push to GitHub
If you haven't already, commit your changes and push them to GitHub.
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Import Project in Vercel
1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Find your repository in the list and click **"Import"**.

### 3. Configure Project
Vercel should automatically detect that this is a **Vite** project.

*   **Framework Preset**: `Vite`
*   **Root Directory**: `./` (default)
*   **Build Command**: `npm run build` (default)
*   **Output Directory**: `dist` (default)

### 4. Environment Variables (Critical!)
Expand the **"Environment Variables"** section. You must add the following variable so your contact form works:

*   **Key**: `MONGO_URI`
*   **Value**: `your_mongodb_connection_string_here`
    *   *Example*: `mongodb+srv://user:password@cluster.mongodb.net/my-database?retryWrites=true&w=majority`

> **Note**: You do not need `PORT` or `MONGO_URL` (unless your code uses that specific name, but `api/contact.js` uses `MONGO_URI`).

### 5. Deploy
Click **"Deploy"**.

Vercel will:
1.  Install dependencies.
2.  Build your React app (Vite).
3.  Deploy your `api/` folder as Serverless Functions.

## Verification
Once deployed, you will get a URL (e.g., `https://your-project.vercel.app`).

1.  **Check the Page**: The white page error should be gone.
2.  **Test Contact Form**: Fill out the contact form. It should successfully send data to your MongoDB.
    *   If it fails, check the **Logs** tab in Vercel for that deployment to see any server-side errors.

## Troubleshooting
*   **404 on Refresh**: If you refresh a page and get a 404, ensure `vercel.json` has the rewrite rules (I have already added these).
*   **Chatbase Error**: If you see Chatbase errors, make sure you have uncommented the script in `index.html` and added your real `chatbotId`.
