# NextAuth.js Setup - Step by Step Guide

## ✅ Ki Ki Already Setup Ache:

1. ✅ NextAuth.js code already ache (`app/api/auth/[...nextauth]/route.ts`)
2. ✅ Login/Register pages ready
3. ✅ Session Provider setup ache
4. ✅ Protected routes middleware ready
5. ✅ Dependencies installed

## 🔧 Apnar Korte Hobe (3 Steps):

### Step 1: `.env.local` File Create Korun

Project root directory te `.env.local` file create korun:

**Windows PowerShell:**
```powershell
New-Item -Path .env.local -ItemType File
```

**Or manually:**
- Root folder e `.env.local` naam e ekta file create korun
- File e ei content add korun:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production
```

### Step 2: Secret Key Generate Korun

**Option 1: Online Tool (Easiest)**
- https://generate-secret.vercel.app/32 e jaan
- Copy korun generated key
- `.env.local` file e paste korun

**Option 2: Command Line**
```bash
# Windows PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Final `.env.local` file example:**
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=AbCdEfGhIjKlMnOpQrStUvWxYz1234567890AbCdEfGhIjKlMnOpQr=
```

### Step 3: Server Start Korun

```bash
npm run dev
```

Eta frontend (port 3000) ar backend (port 5000) dui tai start korbe.

## 🧪 Test Korun:

1. Browser e jaan: `http://localhost:3000/login`
2. Kono email/password diye login korun (e.g., `test@example.com` / `test123`)
3. Automatically account create hobe
4. Home page e redirect hobe
5. Navbar e apnar name/email dekhabe

## 📝 Optional: Google OAuth (Jodi Chai)

Jodi Google login add korte chan:

1. `.env.local` file e add korun:
```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

2. Google Cloud Console theke credentials nite hobe (optional - without eo kaj korbe)

## ✅ Checklist:

- [ ] `.env.local` file create korchi
- [ ] `NEXTAUTH_URL` add korchi
- [ ] `NEXTAUTH_SECRET` add korchi (32+ character)
- [ ] `npm run dev` run korchi
- [ ] Login page test korchi

## 🚨 Common Issues:

**Problem:** "NEXTAUTH_SECRET is missing"
**Solution:** `.env.local` file e `NEXTAUTH_SECRET` add korun

**Problem:** Login korle error ashe
**Solution:** Server restart korun (`Ctrl+C` then `npm run dev`)

**Problem:** Session persist hoy na
**Solution:** Browser cookies enable korun

## 🎉 Done!

Eto korlei NextAuth.js authentication ready! 🚀

