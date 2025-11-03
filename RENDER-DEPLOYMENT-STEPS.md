# 🚀 Step-by-Step Render Deployment Guide

## Prerequisites
- ✅ GitHub repository: `Vine168/Chim-Vine-Lab1`
- ✅ Code pushed to GitHub
- ✅ Node.js application ready

---

## Part 1: Manual Deployment on Render

### Step 1: Create Render Account
1. Go to https://dashboard.render.com/register
2. Click **"Sign Up with GitHub"** (recommended) or use email
3. Authorize Render to access your GitHub account
4. Complete the registration

### Step 2: Create New Web Service
1. Once logged in, click the **"New +"** button (top right)
2. Select **"Web Service"**
3. You'll see "Create a new Web Service" page

### Step 3: Connect Your Repository
1. If you signed up with GitHub:
   - You'll see your repositories listed
   - Find and click **"Connect"** next to `Chim-Vine-Lab1`
   
2. If you used email signup:
   - Click **"Connect GitHub"**
   - Authorize Render
   - Select `Chim-Vine-Lab1` repository

### Step 4: Configure Your Web Service

Fill in the following settings:

**Name:**
```
chim-vine-lab1
```
(or any unique name you prefer)

**Region:**
```
Oregon (US West)
```
(or choose the closest to you)

**Branch:**
```
main
```

**Root Directory:**
```
(leave blank)
```

**Runtime:**
```
Node
```
(Render should auto-detect this)

**Build Command:**
```
yarn install
```

**Start Command:**
```
yarn start
```

**Instance Type:**
```
Free
```
(Free tier is perfect for learning!)

### Step 5: Environment Variables (Optional)
For now, we don't need any. Click **"Create Web Service"**

### Step 6: Wait for Deployment
1. Render will start building your app
2. You'll see logs in real-time:
   ```
   ==> Cloning from https://github.com/Vine168/Chim-Vine-Lab1...
   ==> Downloading cache...
   ==> Running build command 'yarn install'...
   ==> Starting service with 'yarn start'...
   ```
3. Wait 2-5 minutes for first deployment
4. When you see **"Your service is live 🎉"**, it's deployed!

### Step 7: Test Your Deployed App
1. Find your app URL (looks like: `https://chim-vine-lab1.onrender.com`)
2. Click on it or copy it
3. Visit the URL in your browser
4. You should see: **"Hello, CI/CD! Workflow Test"**

✅ **Manual deployment complete!**

---

## Part 2: Automated Deployment with GitHub Actions

Now let's set up automatic deployment whenever you push to `main`.

### Step 8: Get Deploy Hook from Render

1. In Render dashboard, go to your service
2. Click **"Settings"** (left sidebar)
3. Scroll down to **"Deploy Hook"** section
4. Click **"Create Deploy Hook"**
5. Copy the webhook URL (looks like):
   ```
   https://api.render.com/deploy/srv-xxxxxxxxxxxxx?key=yyyyyyyyyyyyyyy
   ```
6. **Keep this URL safe!** (Don't share it publicly)

### Step 9: Add Deploy Hook to GitHub Secrets

1. Go to your GitHub repository: https://github.com/Vine168/Chim-Vine-Lab1
2. Click **"Settings"** tab
3. In left sidebar, click **"Secrets and variables"** → **"Actions"**
4. Click **"New repository secret"** button
5. Fill in:
   - **Name:** `RENDER_DEPLOY_HOOK`
   - **Secret:** (paste the webhook URL you copied)
6. Click **"Add secret"**

### Step 10: Update GitHub Actions Workflow

The workflow file needs to be updated to use the deploy hook.

I'll update it now...

✅ **Done!** The workflow has been updated to automatically deploy to Render.

### Step 11: Test Automated Deployment

Let's make a small change and push to test:

1. Open terminal in your project
2. Make a small change (example provided below)
3. Commit and push

### Step 12: Verify Deployment

1. Go to GitHub Actions: https://github.com/Vine168/Chim-Vine-Lab1/actions
2. Watch the workflow run
3. The deploy job should trigger after tests pass
4. Check Render dashboard for new deployment
5. Visit your app URL to see changes

---

## Part 3: Quick Test

Let's test the deployment now!
