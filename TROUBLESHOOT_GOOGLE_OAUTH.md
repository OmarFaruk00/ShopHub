# 🔴 Google OAuth Not Working - Troubleshooting Guide

## 🐛 Problem:
"Continue with Google" button কাজ করছে না

## ✅ Step-by-Step Fix:

### Step 1: Vercel Environment Variables Check

Vercel Dashboard → Settings → Environment Variables

**এই 5টি variables অবশ্যই থাকতে হবে:**

1. **NEXTAUTH_URL**
   - Value: `https://shophub.vercel.app` (NOT localhost)
   - Environment: Production, Preview, Development

2. **NEXTAUTH_SECRET**
   - Value: `CxzDjm8WxUkOi8mfp2sg30mec9OyYHBq4czAki2N/1s=`
   - Environment: Production, Preview, Development

3. **GOOGLE_CLIENT_ID**
   - Value: `917552975364-dfdf7ol5moallers68hss95e9ldqd18p.apps.googleusercontent.com`
   - Environment: Production, Preview, Development

4. **GOOGLE_CLIENT_SECRET**
   - Value: `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`
   - Environment: Production, Preview, Development

5. **NEXT_PUBLIC_APP_URL**
   - Value: `https://shophub.vercel.app` (NOT localhost)
   - Environment: Production, Preview, Development

### Step 2: Google Console Redirect URI Check

Google Cloud Console → Clients → ShopHub Web Client

**Authorized redirect URIs:**
- ✅ `http://localhost:3000/api/auth/callback/google`
- ✅ `https://shophub.vercel.app/api/auth/callback/google`

### Step 3: Browser Console Check

1. `https://shophub.vercel.app/login` এ যান
2. F12 press করুন (Browser Console খুলবে)
3. "Continue with Google" button click করুন
4. Console-এ error message দেখুন
5. Error message copy করে আমাকে জানান

### Step 4: Vercel Logs Check

1. Vercel Dashboard → Deployments → Latest deployment
2. "Logs" tab-এ যান
3. Error logs দেখুন
4. Error message copy করুন

### Step 5: Common Fixes

#### Fix 1: NEXTAUTH_URL Update
- যদি `NEXTAUTH_URL` = `http://localhost:3000` হয়
- Edit করুন → `https://shophub.vercel.app`
- Save করুন
- Redeploy করুন

#### Fix 2: Missing NEXT_PUBLIC_APP_URL
- যদি `NEXT_PUBLIC_APP_URL` missing থাকে
- "Add Another" → Key: `NEXT_PUBLIC_APP_URL`, Value: `https://shophub.vercel.app`
- Save করুন
- Redeploy করুন

#### Fix 3: Google Console Redirect URI
- Google Console-এ check করুন
- `https://shophub.vercel.app/api/auth/callback/google` আছে কিনা
- যদি না থাকে → যোগ করুন
- Save করুন

### Step 6: Redeploy

1. Vercel Dashboard → Deployments
2. Latest deployment → "..." → "Redeploy"
3. 2-3 মিনিট অপেক্ষা করুন
4. Test করুন

## 🔍 Debugging Steps:

### Check 1: Environment Variables
```bash
# Vercel-এ এই variables আছে কিনা verify করুন
NEXTAUTH_URL=https://shophub.vercel.app
GOOGLE_CLIENT_ID=917552975364-dfdf7ol5moallers68hss95e9ldqd18p.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
NEXT_PUBLIC_APP_URL=https://shophub.vercel.app
```

### Check 2: Browser Console Error
- F12 → Console tab
- "Continue with Google" click করুন
- Error message দেখুন

### Check 3: Network Tab
- F12 → Network tab
- "Continue with Google" click করুন
- Failed requests দেখুন

## 📝 Error Messages & Solutions:

### Error: "redirect_uri_mismatch"
**Solution:** Google Console-এ redirect URI check করুন

### Error: "Invalid client"
**Solution:** Vercel-এ `GOOGLE_CLIENT_ID` এবং `GOOGLE_CLIENT_SECRET` check করুন

### Error: "NEXTAUTH_URL is missing"
**Solution:** Vercel-এ `NEXTAUTH_URL` variable যোগ করুন

### Button doesn't respond
**Solution:** Browser console check করুন, JavaScript error দেখুন

## ✅ Quick Fix Checklist:

- [ ] Vercel-এ 5টি environment variables আছে
- [ ] `NEXTAUTH_URL` = `https://shophub.vercel.app` (NOT localhost)
- [ ] `NEXT_PUBLIC_APP_URL` = `https://shophub.vercel.app` (NOT localhost)
- [ ] Google Console redirect URI = `https://shophub.vercel.app/api/auth/callback/google`
- [ ] Redeploy করেছি
- [ ] Browser console-এ error check করেছি
- [ ] Vercel logs check করেছি

## 🆘 যদি এখনও কাজ না করে:

1. Browser console-এ exact error message জানান
2. Vercel logs-এ error message জানান
3. Screenshot share করুন (যদি সম্ভব)

