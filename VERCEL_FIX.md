# Vercel Production Fix - Google OAuth

## 🔴 Critical: Vercel Environment Variables

Vercel Dashboard → Settings → Environment Variables এ এই variables **অবশ্যই** যোগ করতে হবে:

### Required Variables:

1. **NEXTAUTH_URL**
   - Value: `https://shophub-roan-mu.vercel.app`
   - Environment: Production, Preview, Development (সব select করুন)

2. **NEXTAUTH_SECRET**
   - Value: আপনার NEXTAUTH_SECRET (strong random string)
   - Environment: Production, Preview, Development (সব select করুন)

3. **GOOGLE_CLIENT_ID**
   - Value: আপনার Google Client ID (Google Console থেকে)
   - Environment: Production, Preview, Development (সব select করুন)

4. **GOOGLE_CLIENT_SECRET**
   - Value: আপনার Google Client Secret (Google Console থেকে)
   - Environment: Production, Preview, Development (সব select করুন)

5. **NEXT_PUBLIC_APP_URL**
   - Value: `https://shophub-roan-mu.vercel.app`
   - Environment: Production, Preview, Development (সব select করুন)

6. **NEXT_PUBLIC_API_URL**
   - Value: `http://localhost:5000/api` (local) বা আপনার backend URL
   - Environment: Production, Preview, Development (সব select করুন)

## ✅ Google Console Check:

1. Google Cloud Console → Clients → ShopHub Web Client
2. "Authorized redirect URIs" section-এ check করুন:
   - ✅ `http://localhost:3000/api/auth/callback/google`
   - ✅ `https://shophub-roan-mu.vercel.app/api/auth/callback/google`

## 🔄 After Adding Variables:

1. **Redeploy** করুন (Deployments → Latest → Redeploy)
2. 2-3 মিনিট অপেক্ষা করুন
3. Test করুন: `https://shophub-roan-mu.vercel.app/login`

## 🐛 Troubleshooting:

### Error: "redirect_uri_mismatch"
- Google Console-এ redirect URI check করুন
- Exact URL match করতে হবে

### Error: "Invalid client"
- Vercel-এ `GOOGLE_CLIENT_ID` এবং `GOOGLE_CLIENT_SECRET` check করুন
- Redeploy করুন

### Button doesn't work
- Browser console (F12) check করুন
- Vercel logs check করুন
- Environment variables সব set আছে কিনা verify করুন

## 📝 Quick Checklist:

- [ ] Vercel-এ 6টি environment variables যোগ করেছি
- [ ] Google Console-এ production redirect URI যোগ করেছি
- [ ] Redeploy করেছি
- [ ] Test করেছি

