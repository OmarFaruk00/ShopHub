# Vercel Environment Variables Check List

## ✅ যা থাকতে হবে (5টি Variables):

### 1. NEXTAUTH_URL
- **Key:** `NEXTAUTH_URL`
- **Value:** `https://shophub-roan-mu.vercel.app`
- ❌ ভুল হলে: `http://localhost:3000` বা অন্য কিছু
- ✅ ঠিক হলে: `https://shophub-roan-mu.vercel.app`

### 2. NEXTAUTH_SECRET
- **Key:** `NEXTAUTH_SECRET`
- **Value:** `CxzDjm8WxUkOi8mfp2sg30mec9OyYHBq4czAki2N/1s=`
- ❌ ভুল হলে: `your-secret-key-change-in-production` বা empty
- ✅ ঠিক হলে: `CxzDjm8WxUkOi8mfp2sg30mec9OyYHBq4czAki2N/1s=`

### 3. GOOGLE_CLIENT_ID
- **Key:** `GOOGLE_CLIENT_ID`
- **Value:** `917552975364-dfdf7ol5moallers68hss95e9ldqd18p.apps.googleusercontent.com`
- ❌ ভুল হলে: empty বা অন্য value
- ✅ ঠিক হলে: `917552975364-dfdf7ol5moallers68hss95e9ldqd18p.apps.googleusercontent.com`

### 4. GOOGLE_CLIENT_SECRET
- **Key:** `GOOGLE_CLIENT_SECRET`
- **Value:** `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`
- ❌ ভুল হলে: empty বা অন্য value
- ✅ ঠিক হলে: `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`

### 5. NEXT_PUBLIC_APP_URL
- **Key:** `NEXT_PUBLIC_APP_URL`
- **Value:** `https://shophub-roan-mu.vercel.app`
- ❌ ভুল হলে: `http://localhost:3000` বা empty
- ✅ ঠিক হলে: `https://shophub-roan-mu.vercel.app`

## 🔍 কিভাবে Check করবেন:

1. Vercel Dashboard → Settings → Environment Variables
2. প্রতিটি variable-এর Key এবং Value check করুন
3. Environment: Production, Preview, Development সব select আছে কিনা check করুন

## ⚠️ Common Mistakes:

1. **NEXTAUTH_URL** = `http://localhost:3000` (ভুল - production URL হতে হবে)
2. **NEXT_PUBLIC_APP_URL** = `http://localhost:3000` (ভুল - production URL হতে হবে)
3. **GOOGLE_CLIENT_ID** বা **GOOGLE_CLIENT_SECRET** missing
4. Environment শুধু Production select করা (Preview, Development-ও select করতে হবে)

## 🔧 যদি ভুল থাকে:

1. Variable-এ click করুন (edit icon)
2. Value update করুন
3. Save করুন
4. Redeploy করুন

## ✅ Checklist:

- [ ] NEXTAUTH_URL = `https://shophub-roan-mu.vercel.app`
- [ ] NEXTAUTH_SECRET = `CxzDjm8WxUkOi8mfp2sg30mec9OyYHBq4czAki2N/1s=`
- [ ] GOOGLE_CLIENT_ID = `917552975364-dfdf7ol5moallers68hss95e9ldqd18p.apps.googleusercontent.com`
- [ ] GOOGLE_CLIENT_SECRET = `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`
- [ ] NEXT_PUBLIC_APP_URL = `https://shophub-roan-mu.vercel.app`
- [ ] সব variables-এর Environment: Production, Preview, Development select আছে

