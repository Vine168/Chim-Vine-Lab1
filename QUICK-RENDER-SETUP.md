# 🎯 Quick Render Setup Checklist

## ✅ Follow These Steps in Order:

### 1️⃣ Sign Up on Render (2 minutes)

- [ ] Go to https://dashboard.render.com/register
- [ ] Sign up with GitHub (easiest option)
- [ ] Authorize Render to access GitHub

### 2️⃣ Create Web Service (3 minutes)

- [ ] Click "New +" → "Web Service"
- [ ] Connect repository: `Vine168/Chim-Vine-Lab1`
- [ ] Fill in settings:
  ```
  Name: chim-vine-lab1 (or your choice)
  Branch: main
  Build Command: yarn install
  Start Command: yarn start
  Instance Type: Free
  ```
- [ ] Click "Create Web Service"

### 3️⃣ Wait for First Deployment (3-5 minutes)

- [ ] Watch the build logs
- [ ] Wait for "Your service is live 🎉"
- [ ] Copy your app URL (e.g., https://chim-vine-lab1.onrender.com)
- [ ] Visit URL to verify app is running

### 4️⃣ Get Deploy Hook (1 minute)

- [ ] In Render dashboard, go to your service
- [ ] Click "Settings" (left sidebar)
- [ ] Scroll to "Deploy Hook"
- [ ] Click "Create Deploy Hook"
- [ ] Copy the webhook URL
  ```
  https://api.render.com/deploy/srv-xxxxx?key=yyyyy
  ```

### 5️⃣ Add to GitHub Secrets (2 minutes)

- [ ] Go to https://github.com/Vine168/Chim-Vine-Lab1
- [ ] Click "Settings" → "Secrets and variables" → "Actions"
- [ ] Click "New repository secret"
- [ ] Name: `RENDER_DEPLOY_HOOK`
- [ ] Value: (paste webhook URL)
- [ ] Click "Add secret"

### 6️⃣ Push Changes (1 minute)

- [ ] Already done! Workflow is updated
- [ ] Just run:
  ```bash
  git add .
  git commit -m "Enable Render auto-deployment"
  git push
  ```

### 7️⃣ Verify Auto-Deployment (2 minutes)

- [ ] Go to GitHub Actions tab
- [ ] Watch workflow run
- [ ] See deploy job trigger
- [ ] Check Render dashboard for new deployment
- [ ] Visit your app URL

---

## 🎉 You're Done!

**What happens now:**

- Every push to `main` triggers CI/CD
- Tests run automatically
- If tests pass → Deploys to Render
- App updates automatically!

---

## 📱 Your App URLs

**GitHub Repo:**
https://github.com/Vine168/Chim-Vine-Lab1

**GitHub Actions:**
https://github.com/Vine168/Chim-Vine-Lab1/actions

**Render Dashboard:**
https://dashboard.render.com

**Your Live App:**
https://[your-service-name].onrender.com

(Replace with your actual Render URL)

---

## 🆘 Troubleshooting

### App won't start?

Check Render logs:

1. Go to Render dashboard
2. Click on your service
3. Check "Logs" tab
4. Look for errors

### Deploy hook not working?

1. Verify secret name is exactly: `RENDER_DEPLOY_HOOK`
2. Check GitHub Actions logs for errors
3. Make sure webhook URL is complete

### First deployment slow?

- Free tier can take 3-5 minutes
- Subsequent deployments are faster
- This is normal!

### App URL not working?

- Wait a few minutes after deployment
- Check Render status (should be "Live")
- Try opening in incognito/private mode

---

## 💡 Pro Tips

1. **Monitor Deployments:**

   - Watch both GitHub Actions and Render logs
   - Render shows real-time deployment progress

2. **Free Tier Limits:**

   - Apps sleep after 15 min of inactivity
   - First request after sleep takes ~30 seconds
   - Upgrade to paid plan for always-on

3. **Environment Variables:**

   - Add in Render dashboard → Settings → Environment
   - Automatic redeploy when changed

4. **Custom Domain:**
   - Available on paid plans
   - Set up in Render → Settings → Custom Domain

---

## 📚 Need More Help?

See detailed guide: `RENDER-DEPLOYMENT-STEPS.md`

Render Docs: https://render.com/docs

GitHub Actions Docs: https://docs.github.com/actions
