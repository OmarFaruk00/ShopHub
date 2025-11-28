# Vercel Environment Variables Setup Script for PowerShell

Write-Host "Setting up Vercel environment variables..." -ForegroundColor Green

# Check if vercel CLI is installed
if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Vercel CLI not found. Please install it first:" -ForegroundColor Red
    Write-Host "npm install -g vercel" -ForegroundColor Yellow
    exit 1
}

Write-Host "`nAdding environment variables to Vercel..." -ForegroundColor Cyan

# Set NEXTAUTH_URL
Write-Host "`n1. Adding NEXTAUTH_URL..." -ForegroundColor Yellow
"https://shophub-roan-mu.vercel.app" | vercel env add NEXTAUTH_URL production
"https://shophub-roan-mu.vercel.app" | vercel env add NEXTAUTH_URL preview
"https://shophub-roan-mu.vercel.app" | vercel env add NEXTAUTH_URL development

# Set NEXTAUTH_SECRET
Write-Host "`n2. Adding NEXTAUTH_SECRET..." -ForegroundColor Yellow
"CxzDjm8WxUkOi8mfp2sg30mec9OyYHBq4czAki2N/1s=" | vercel env add NEXTAUTH_SECRET production
"CxzDjm8WxUkOi8mfp2sg30mec9OyYHBq4czAki2N/1s=" | vercel env add NEXTAUTH_SECRET preview
"CxzDjm8WxUkOi8mfp2sg30mec9OyYHBq4czAki2N/1s=" | vercel env add NEXTAUTH_SECRET development

# Set GOOGLE_CLIENT_ID
Write-Host "`n3. Adding GOOGLE_CLIENT_ID..." -ForegroundColor Yellow
"917552975364-dfdf7ol5moallers68hss95e9ldqd18p.apps.googleusercontent.com" | vercel env add GOOGLE_CLIENT_ID production
"917552975364-dfdf7ol5moallers68hss95e9ldqd18p.apps.googleusercontent.com" | vercel env add GOOGLE_CLIENT_ID preview
"917552975364-dfdf7ol5moallers68hss95e9ldqd18p.apps.googleusercontent.com" | vercel env add GOOGLE_CLIENT_ID development

# Set GOOGLE_CLIENT_SECRET
Write-Host "`n4. Adding GOOGLE_CLIENT_SECRET..." -ForegroundColor Yellow
"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" | vercel env add GOOGLE_CLIENT_SECRET production
"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" | vercel env add GOOGLE_CLIENT_SECRET preview
"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" | vercel env add GOOGLE_CLIENT_SECRET development

# Set NEXT_PUBLIC_APP_URL
Write-Host "`n5. Adding NEXT_PUBLIC_APP_URL..." -ForegroundColor Yellow
"https://shophub-roan-mu.vercel.app" | vercel env add NEXT_PUBLIC_APP_URL production
"https://shophub-roan-mu.vercel.app" | vercel env add NEXT_PUBLIC_APP_URL preview
"https://shophub-roan-mu.vercel.app" | vercel env add NEXT_PUBLIC_APP_URL development

Write-Host "`n✅ All environment variables added!" -ForegroundColor Green
Write-Host "`nNow redeploy your project:" -ForegroundColor Cyan
Write-Host "vercel --prod" -ForegroundColor Yellow

