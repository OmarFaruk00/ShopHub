# ✅ FINAL SETUP CHECKLIST - Google OAuth Fix

## 🎯 Production URL:
**https://shophub.vercel.app**

---

## ✅ 1. Vercel Environment Variables (VERIFY/UPDATE)

Vercel Dashboard → Settings → Environment Variables

### Required Variables (5টি):

| Variable Name | Correct Value | Check |
|--------------|---------------|-------|
| `NEXTAUTH_URL` | `https://shophub.vercel.app` | ⬜ |
| `NEXTAUTH_SECRET` | `CxzDjm8WxUkOi8mfp2sg30mec9OyYHBq4czAki2N/1s=` | ⬜ |
| `GOOGLE_CLIENT_ID` | `917552975364-dfdf7ol5moallers68hss95e9ldqd18p.apps.googleusercontent.com` | ⬜ |
| `GOOGLE_CLIENT_SECRET` | `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` | ⬜ |
| `NEXT_PUBLIC_APP_URL` | `https://shophub.vercel.app` | ⬜ |

### ⚠️ IMPORTANT:
- সব variables-এর Environment: **Production, Preview, Development** সব select করুন
- `NEXTAUTH_URL` এবং `NEXT_PUBLIC_APP_URL` = `https://shophub.vercel.app` হতে হবে (NOT localhost)

---

## ✅ 2. Google Console Redirect URIs (VERIFIED ✓)

Google Cloud Console → Clients → ShopHub Web Client

### Authorized Redirect URIs:
- ✅ `http://localhost:3000/api/auth/callback/google` (Local)
- ✅ `https://shophub.vercel.app/api/auth/callback/google` (Production)

**Status: ✅ CORRECT - No changes needed**

---

## ✅ 3. Code Configuration (VERIFIED ✓)

- ✅ NextAuth configuration updated
- ✅ Google OAuth provider configured
- ✅ Authorization parameters added
- ✅ Build successful

**Status: ✅ CORRECT - No changes needed**

---

## 🔄 4. Final Steps:

### Step 1: Vercel Variables Update
1. Vercel Dashboard → Settings → Environment Variables
2. `NEXTAUTH_URL` edit করুন → Value: `https://shophub.vercel.app`
3. `NEXT_PUBLIC_APP_URL` check করুন → Value: `https://shophub.vercel.app`
4. যদি missing থাকে → "Add Another" → যোগ করুন
5. **Save** করুন

### Step 2: Redeploy
1. Deployments → Latest deployment
2. "..." menu → **Redeploy**
3. 2-3 মিনিট অপেক্ষা করুন

### Step 3: Test
1. `https://shophub.vercel.app/login` এ যান
2. "Continue with Google" বাটন test করুন
3. Google login test করুন

---

## 🐛 Troubleshooting:

### যদি Google OAuth কাজ না করে:

1. **Browser Console Check (F12):**
   - Error message দেখুন
   - Network tab check করুন

2. **Vercel Logs Check:**
   - Deployments → Latest → Logs
   - Error দেখুন

3. **Common Issues:**
   - `NEXTAUTH_URL` = `http://localhost:3000` → Update করুন
   - `NEXT_PUBLIC_APP_URL` missing → যোগ করুন
   - Google Console redirect URI mismatch → Check করুন

---

## ✅ Final Checklist:

- [ ] Vercel-এ 5টি environment variables আছে
- [ ] `NEXTAUTH_URL` = `https://shophub.vercel.app`
- [ ] `NEXT_PUBLIC_APP_URL` = `https://shophub.vercel.app`
- [ ] Google Console redirect URI = `https://shophub.vercel.app/api/auth/callback/google`
- [ ] Redeploy করেছি
- [ ] Test করেছি

---

## 📝 Quick Reference:

**Production URL:** `https://shophub.vercel.app`
**Local URL:** `http://localhost:3000`
**Google Client ID:** `917552975364-dfdf7ol5moallers68hss95e9ldqd18p.apps.googleusercontent.com`

---

**Last Updated:** 2025-11-28
**Status:** Ready for Production

