# 🔴 503 Error Fix - MIDDLEWARE_RUNTIME_DEPRECATED

## Problem:
Error: `503: SERVICE_UNAVAILABLE` with code `MIDDLEWARE_RUNTIME_DEPRECATED`

## ✅ Solution Applied:

### vercel.json Updated:
```json
{
  "functions": {
    "app/api/**/*.ts": {
      "runtime": "nodejs20.x"
    }
  }
}
```

## 🔄 Next Steps:

1. **Vercel will auto-deploy** from the latest commit
2. **OR Manual Redeploy:**
   - Vercel Dashboard → Deployments → Latest → Redeploy

## ✅ After Fix:

The middleware runtime error should be resolved. Test:
- `https://shophub.vercel.app/login`
- "Continue with Google" button should work

