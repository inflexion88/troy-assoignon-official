# Resend Email Setup Instructions

## Step 1: Create Resend Account (2 minutes)

1. Visit: **https://resend.com/signup**
2. Sign up with your email (free account)
3. Verify your email address
4. Log in to your Resend dashboard

## Step 2: Get Your API Key

1. In the Resend dashboard, click **"API Keys"** in the left sidebar
2. Click **"Create API Key"**
3. Give it a name: `Contact Form Production`
4. Select permissions: **"Sending access"** (default)
5. Click **"Create"**
6. **COPY THE API KEY** - you'll need it for Step 3
   - It looks like: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - ⚠️ **Save it somewhere safe** - you can only see it once!

## Step 3: Add API Key to Vercel

### Option A: Vercel Dashboard (Easiest)

1. Go to: **https://vercel.com/dashboard**
2. Select your project: **clean-website**
3. Click **"Settings"** tab
4. Click **"Environment Variables"** in the left sidebar
5. Click **"Add New"**
6. Fill in:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Paste your API key from Step 2
   - **Environment:** Select **"Production"**, **"Preview"**, and **"Development"**
7. Click **"Save"**

### Option B: Vercel CLI (Command Line)

```bash
vercel env add RESEND_API_KEY
# When prompted:
# - Select all environments (Production, Preview, Development)
# - Paste your API key when prompted
```

## Step 4: Redeploy

After adding the environment variable, you MUST redeploy for it to take effect:

### Via Vercel Dashboard:
1. Go to your project dashboard
2. Click **"Deployments"** tab
3. Click the **"..."** menu on the latest deployment
4. Click **"Redeploy"**

### Via CLI:
```bash
vercel --prod
```

## Step 5: Test It!

1. Visit your contact form: **https://troyassoignon.com/contact.html**
2. Fill out all fields and submit
3. Check your email inbox at **positioningiq@gmail.com**
4. You should receive:
   - ✅ Notification email with the form submission
   - ✅ Auto-response sent to the user

## Troubleshooting

### "Email service not configured" error
- **Problem:** RESEND_API_KEY environment variable not set
- **Fix:** Complete Step 3 above and redeploy

### Emails not arriving
- **Check:** Resend dashboard → "Emails" to see if they were sent
- **Check:** Spam/junk folder
- **Check:** Verify positioningiq@gmail.com is the correct email

### API Key invalid
- **Problem:** Wrong API key or not copied correctly
- **Fix:** Generate a new API key in Resend dashboard and update Vercel

## Optional: Use Your Own Domain

By default, emails come from `onboarding@resend.dev`. To use your own domain:

1. In Resend dashboard, click **"Domains"**
2. Click **"Add Domain"**
3. Enter **troyassoignon.com**
4. Add the DNS records shown to your domain
5. Wait for verification (usually a few minutes)
6. Update `/api/contact.js`:
   ```javascript
   from: 'Contact Form <contact@troyassoignon.com>'
   ```

## Free Tier Limits

- **100 emails per day**
- **3,000 emails per month**

This is more than enough for a contact form!

## Support

- **Resend Docs:** https://resend.com/docs
- **Vercel Environment Variables:** https://vercel.com/docs/environment-variables

---

**That's it!** Your contact form will now send emails reliably through your own serverless function. No more broken third-party services! 🎉
