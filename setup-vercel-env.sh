#!/bin/bash
# Vercel Environment Variables Setup Script

echo "Setting up Vercel environment variables..."

# Set NEXTAUTH_URL
vercel env add NEXTAUTH_URL production
echo "https://shophub-roan-mu.vercel.app" | vercel env add NEXTAUTH_URL production

# Set NEXTAUTH_SECRET
vercel env add NEXTAUTH_SECRET production
echo "CxzDjm8WxUkOi8mfp2sg30mec9OyYHBq4czAki2N/1s=" | vercel env add NEXTAUTH_SECRET production

# Set GOOGLE_CLIENT_ID
vercel env add GOOGLE_CLIENT_ID production
echo "917552975364-dfdf7ol5moallers68hss95e9ldqd18p.apps.googleusercontent.com" | vercel env add GOOGLE_CLIENT_ID production

# Set GOOGLE_CLIENT_SECRET
vercel env add GOOGLE_CLIENT_SECRET production
echo "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" | vercel env add GOOGLE_CLIENT_SECRET production

# Set NEXT_PUBLIC_APP_URL
vercel env add NEXT_PUBLIC_APP_URL production
echo "https://shophub-roan-mu.vercel.app" | vercel env add NEXT_PUBLIC_APP_URL production

echo "✅ All environment variables added!"
echo "Now run: vercel --prod"

