# Cloudflare DNS Setup for iarmministries.org

## Current Vercel Configuration

Your Vercel dashboard shows these DNS records that need to be added in Cloudflare:

### Domain 1: iarmministries.org (Root Domain)
- **Type:** A
- **Name:** @
- **Value:** `216.198.79.1`
- **Proxy:** OFF (Gray Cloud - DNS Only)

### Domain 2: www.iarmministries.org (WWW Subdomain)
- **Type:** CNAME
- **Name:** www
- **Target:** `8efec8be5d88fe85.vercel-dns-017.com.`
- **Proxy:** OFF (Gray Cloud - DNS Only)

---

## Step-by-Step Instructions

### 1. Log into Cloudflare
- Go to: https://dash.cloudflare.com
- Select your domain: **iarmministries.org**

### 2. Navigate to DNS Settings
- Click **DNS** in the left sidebar
- Click **Records** tab

### 3. Add Root Domain (A Record)

1. Click **Add record**
2. Configure:
   - **Type:** Select `A`
   - **Name:** Enter `@` (or leave blank, or enter your root domain)
   - **IPv4 address:** `216.198.79.1`
   - **Proxy status:** Click the cloud icon to make it **GRAY** (DNS only)
     - ⚠️ **IMPORTANT:** Must be gray, not orange!
   - **TTL:** Auto
3. Click **Save**

### 4. Add WWW Subdomain (CNAME Record)

1. Click **Add record** again
2. Configure:
   - **Type:** Select `CNAME`
   - **Name:** Enter `www`
   - **Target:** `8efec8be5d88fe85.vercel-dns-017.com.`
     - ⚠️ **IMPORTANT:** Include the trailing dot (.) at the end!
   - **Proxy status:** Click the cloud icon to make it **GRAY** (DNS only)
     - ⚠️ **IMPORTANT:** Must be gray, not orange!
   - **TTL:** Auto
3. Click **Save**

### 5. Verify Records

Your Cloudflare DNS should now show:
```
Type    Name    Content                              Proxy
A       @       216.198.79.1                        DNS only (gray)
CNAME   www     8efec8be5d88fe85.vercel-dns-017.com. DNS only (gray)
```

### 6. Wait for DNS Propagation

- DNS changes usually take **5-15 minutes** with Cloudflare
- Can take up to 48 hours in rare cases

### 7. Verify in Vercel

1. Go back to Vercel dashboard
2. Go to: Settings → Domains
3. Click **Refresh** button next to each domain
4. Status should change from "Invalid Configuration" to "Valid" ✅

---

## Common Issues & Fixes

### Issue: Still showing "Invalid Configuration" after 15 minutes

**Check:**
1. ✅ Proxy is OFF (gray cloud) for both records
2. ✅ A record value is exactly: `216.198.79.1`
3. ✅ CNAME target is exactly: `8efec8be5d88fe85.vercel-dns-017.com.` (with trailing dot)
4. ✅ No conflicting records (delete any old A/CNAME records for @ or www)

**Solution:**
- Delete the records and re-add them
- Wait another 15 minutes
- Click "Refresh" in Vercel

### Issue: Cloudflare shows "Already exists" error

**Solution:**
- Check if you already have A or CNAME records for @ or www
- Delete the old ones first, then add the new Vercel records

### Issue: Site loads but shows Cloudflare error page

**Solution:**
- Make sure proxy is OFF (gray cloud)
- Cloudflare proxy (orange cloud) can interfere with Vercel

---

## SSL/TLS Settings (Optional but Recommended)

1. In Cloudflare, go to **SSL/TLS**
2. Set encryption mode to: **Full (strict)**
3. This ensures secure connection between Cloudflare and Vercel

---

## After Setup is Complete

Once both domains show "Valid" in Vercel:

1. ✅ Your site will be accessible at:
   - `https://iarmministries.org`
   - `https://www.iarmministries.org`

2. ✅ Vercel automatically provides SSL certificates (free)

3. ✅ Both domains will redirect properly

---

## Quick Checklist

- [ ] A record added: @ → 216.198.79.1 (gray cloud)
- [ ] CNAME record added: www → 8efec8be5d88fe85.vercel-dns-017.com. (gray cloud)
- [ ] Both records have proxy OFF (gray, not orange)
- [ ] Waited 15 minutes for DNS propagation
- [ ] Clicked "Refresh" in Vercel dashboard
- [ ] Both domains show "Valid" in Vercel
- [ ] Site loads at https://iarmministries.org

---

**Need help?** Check DNS propagation status at: https://dnschecker.org

