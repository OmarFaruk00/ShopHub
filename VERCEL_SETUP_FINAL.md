# 🔧 Vercel Production Fix - Step by Step

## ⚠️ IMPORTANT: Vercel Environment Variables যোগ করুন

### Step 1: Vercel Dashboard-এ যান
1. https://vercel.com/dashboard
2. "shophub" project select করুন
3. **Settings** → **Environment Variables** ক্লিক করুন

### Step 2: এই 5টি Variables যোগ করুন

#### Variable 1: NEXTAUTH_URL
- **Name:** `NEXTAUTH_URL`
- **Value:** `https://shophub-roan-mu.vercel.app`
- **Environment:** ✅ Production, ✅ Preview, ✅ Development (সব select করুন)
- **Save** করুন

#### Variable 2: NEXTAUTH_SECRET
- **Name:** `NEXTAUTH_SECRET`
- **Value:** `CxzDjm8WxUkOi8mfp2sg30mec9OyYHBq4czAki2N/1s=`
- **Environment:** ✅ Production, ✅ Preview, ✅ Development (সব select করুন)
- **Save** করুন

#### Variable 3: GOOGLE_CLIENT_ID
- **Name:** `GOOGLE_CLIENT_ID`
- **Value:** আপনার Google Client ID (Google Console থেকে)
- **Environment:** ✅ Production, ✅ Preview, ✅ Development (সব select করুন)
- **Save** করুন

#### Variable 4: GOOGLE_CLIENT_SECRET
- **Name:** `GOOGLE_CLIENT_SECRET`
- **Value:** আপনার Google Client Secret (Google Console থেকে)
- **Environment:** ✅ Production, ✅ Preview, ✅ Development (সব select করুন)
- **Save** করুন

#### Variable 5: NEXT_PUBLIC_APP_URL
- **Name:** `NEXT_PUBLIC_APP_URL`
- **Value:** `https://shophub-roan-mu.vercel.app`
- **Environment:** ✅ Production, ✅ Preview, ✅ Development (সব select করুন)
- **Save** করুন

### Step 3: Redeploy করুন
1. **Deployments** tab-এ যান
2. Latest deployment-এ **"..."** menu → **"Redeploy"** ক্লিক করুন
3. 2-3 মিনিট অপেক্ষা করুন

### Step 4: Test করুন
1. `https://shophub-roan-mu.vercel.app/login` এ যান
2. **"Continue with Google"** বাটন test করুন

## ✅ Checklist:
- [ ] Vercel-এ 5টি environment variables যোগ করেছি
- [ ] Google Console-এ redirect URI যোগ করেছি
- [ ] Redeploy করেছি
- [ ] Test করেছি

## 🐛 যদি কাজ না করে:
1. Browser Console (F12) check করুন
2. Vercel Logs check করুন
3. সব variables সঠিক আছে কিনা verify করুন

