# Vercel Environment Variables

এই variables গুলো Vercel Dashboard-এ যোগ করুন:

## Required Environment Variables:

1. **NEXTAUTH_URL**
   - Value: `https://shophub.vercel.app` (বা deploy হওয়ার পর actual URL)
   - Environment: Production, Preview, Development

2. **NEXTAUTH_SECRET**
   - Value: `CxzDjm8WxUkOi8mfp2sg30mec9OyYHBq4czAki2N/1s=`
   - Environment: Production, Preview, Development

3. **NEXT_PUBLIC_API_URL**
   - Value: `http://localhost:5000/api` (local development এর জন্য)
   - বা আপনার backend URL (যদি deployed থাকে)
   - Environment: Production, Preview, Development

4. **NEXT_PUBLIC_APP_URL**
   - Value: `https://shophub.vercel.app` (বা deploy হওয়ার পর actual URL)
   - Environment: Production, Preview, Development

5. **SERVER_PORT** (optional)
   - Value: `5000`
   - Environment: Production, Preview, Development

## Important Notes:

- Deploy হওয়ার পর Vercel আপনাকে একটি URL দেবে (যেমন: `https://shophub-xyz123.vercel.app`)
- তখন `NEXTAUTH_URL` এবং `NEXT_PUBLIC_APP_URL` এ সেই actual URL দিয়ে update করুন
- তারপর "Redeploy" করুন

