# Vercel Deployment Guide

## Vercel e Deploy Korar Step-by-Step Guide

### Prerequisites

1. **GitHub Account** (required for Vercel)
2. **Vercel Account** - https://vercel.com/signup
3. **Project GitHub e push kora** (optional but recommended)

---

## Method 1: Vercel CLI (Recommended)

### Step 1: Vercel CLI Install Korun

```bash
npm install -g vercel
```

### Step 2: Vercel e Login Korun

```bash
vercel login
```

Browser e login korun.

### Step 3: Project Deploy Korun

```bash
vercel
```

Eta run korle:
- Project name confirm korbe
- Environment variables setup korbe
- Deploy start korbe

### Step 4: Environment Variables Add Korun

Vercel Dashboard e jaan:
1. Project select korun
2. Settings → Environment Variables
3. Ei variables add korun:

```env
NEXTAUTH_URL=https://your-project.vercel.app
NEXTAUTH_SECRET=your-secret-key-here
NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app/api
NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
```

**Important:** Production e strong secret key use korun!

### Step 5: Redeploy Korun

Environment variables add korar por:

```bash
vercel --prod
```

---

## Method 2: Vercel Dashboard (Easier)

### Step 1: GitHub e Project Push Korun

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### Step 2: Vercel Dashboard e Jaan

1. https://vercel.com/dashboard e jaan
2. "Add New..." → "Project" click korun
3. GitHub repository select korun
4. "Import" click korun

### Step 3: Project Configuration

Vercel automatically detect korbe:
- **Framework Preset:** Next.js ✅
- **Root Directory:** `./` ✅
- **Build Command:** `npm run build` ✅
- **Output Directory:** `.next` ✅

### Step 4: Environment Variables Add Korun

"Environment Variables" section e:

| Name | Value |
|------|-------|
| `NEXTAUTH_URL` | `https://your-project.vercel.app` |
| `NEXTAUTH_SECRET` | `your-strong-secret-key` |
| `NEXT_PUBLIC_API_URL` | `https://your-backend.vercel.app/api` |
| `NEXT_PUBLIC_APP_URL` | `https://your-project.vercel.app` |

**Note:** Deploy korar por actual URL paben, then update korun.

### Step 5: Deploy Korun

"Deploy" button click korun. 2-3 minute wait korun.

---

## Backend Deployment (Express.js)

### Option 1: Vercel Serverless Functions (Recommended)

Express.js server ke Vercel serverless functions e convert korte hobe.

**Create `api/` folder in root:**

```bash
mkdir api
```

**Move server code to `api/index.js`:**

Server code ke Vercel-compatible format e convert korte hobe.

### Option 2: Separate Backend Hosting

**Alternatives:**
- **Railway** - https://railway.app (Free tier available)
- **Render** - https://render.com (Free tier available)
- **Heroku** - https://heroku.com (Paid)
- **DigitalOcean** - https://digitalocean.com

**Railway e Deploy (Easiest):**

1. Railway account create korun
2. "New Project" → "Deploy from GitHub"
3. Repository select korun
4. Root directory: `server/`
5. Start command: `node index.js`
6. Environment variables add korun
7. Deploy korun

---

## Important Configuration

### 1. `vercel.json` File Create Korun

Root directory te `vercel.json` file create korun:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### 2. Update Environment Variables

Production e:

```env
NEXTAUTH_URL=https://your-actual-vercel-url.vercel.app
NEXTAUTH_SECRET=generate-strong-secret-here
NEXT_PUBLIC_API_URL=https://your-backend-url/api
NEXT_PUBLIC_APP_URL=https://your-actual-vercel-url.vercel.app
```

### 3. Google OAuth (If Using)

Google Cloud Console e:
1. Authorized redirect URI add korun:
   ```
   https://your-project.vercel.app/api/auth/callback/google
   ```
2. Update `.env.local` with production URLs

---

## Deployment Checklist

### Before Deploying:

- [ ] `.env.local` file check korchi (local development er jonno)
- [ ] `package.json` e all dependencies ache
- [ ] Build successfully hoy (`npm run build`)
- [ ] No TypeScript errors
- [ ] Git repository ready (if using GitHub)

### During Deployment:

- [ ] Vercel account create korchi
- [ ] Project import korchi
- [ ] Environment variables add korchi
- [ ] Build successful hoy
- [ ] Deploy complete hoy

### After Deployment:

- [ ] Website open hoy
- [ ] Login page kaj korche
- [ ] Protected routes kaj korche
- [ ] API calls kaj korche
- [ ] All pages load hochhe

---

## Quick Deploy Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (first time)
vercel

# Deploy to production
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs
```

---

## Troubleshooting

### Problem: Build Failed
**Solution:**
- Check build logs in Vercel dashboard
- Ensure all dependencies in `package.json`
- Check TypeScript errors locally first

### Problem: Environment Variables Not Working
**Solution:**
- Redeploy after adding variables
- Check variable names (case-sensitive)
- Verify values are correct

### Problem: API Not Working
**Solution:**
- Check `NEXT_PUBLIC_API_URL` is correct
- Ensure backend is deployed and accessible
- Check CORS settings in backend

### Problem: Authentication Not Working
**Solution:**
- Verify `NEXTAUTH_URL` matches actual Vercel URL
- Check `NEXTAUTH_SECRET` is set
- Redeploy after adding secrets

---

## Production URLs

Deploy korar por ei URLs paben:

- **Frontend:** `https://your-project.vercel.app`
- **Backend API:** `https://your-backend.vercel.app/api`

Eta copy kore environment variables e add korun.

---

## Free Tier Limits

Vercel Free Tier:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Serverless functions
- ✅ Automatic HTTPS
- ✅ Custom domains

---

## Next Steps After Deployment

1. ✅ Custom domain add korun (optional)
2. ✅ Google Analytics add korun (optional)
3. ✅ Monitor performance
4. ✅ Set up automatic deployments from GitHub

---

## Support

Jodi kono problem hoy:
- Vercel Docs: https://vercel.com/docs
- Vercel Discord: https://vercel.com/discord
- Check build logs in Vercel dashboard

**Good luck with your deployment! 🚀**

