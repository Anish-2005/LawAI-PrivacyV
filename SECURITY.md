# 🔐 Security Configuration Guide

## ⚠️ CRITICAL: Secure Your Environment Variables

GitGuardian has detected exposed database credentials in your repository. This guide will help you fix these security issues.

## 🚨 Immediate Actions Required

### 1. **Change Your Database Password IMMEDIATELY**
```bash
# Log into your Railway/Database provider
# Change the password for user: postgres
# Update your production environment variables
```

### 2. **Generate a New Django Secret Key**
```python
# Run this in Python to generate a new secret key
from django.core.management.utils import get_random_secret_key
print(get_random_secret_key())
```

### 3. **Set Environment Variables in Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Set environment variables (replace with your actual values)
vercel env add SECRET_KEY
vercel env add DB_NAME  
vercel env add DB_USER
vercel env add DB_PASSWORD
vercel env add DB_HOST
vercel env add DB_PORT
vercel env add ALLOWED_HOSTS
vercel env add CORS_ALLOWED_ORIGINS
```

## 🔧 Environment Variables Setup

### Production (Vercel)
Set these in your Vercel dashboard under Settings > Environment Variables:

```bash
SECRET_KEY=your-new-secret-key-here
DEBUG=False
DB_NAME=railway
DB_USER=postgres  
DB_PASSWORD=your-new-password-here
DB_HOST=junction.proxy.rlwy.net
DB_PORT=11448
ALLOWED_HOSTS=your-app.vercel.app,your-domain.com
CORS_ALLOWED_ORIGINS=https://your-frontend.vercel.app
```

### Local Development
Create a `.env` file in the Backend directory (DO NOT commit this file):

```bash
# Copy .env.example to .env and fill in values
cp .env.example .env

# Edit .env with your local database credentials
SECRET_KEY=your-local-secret-key
DEBUG=True
DB_NAME=lawai_local
DB_USER=postgres
DB_PASSWORD=your-local-password
DB_HOST=localhost
DB_PORT=5432
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

## 📁 Files Changed for Security

### ✅ Fixed Files:
- `Backend/Project_Backend/settings.py` - Moved sensitive data to environment variables
- `Backend/vercel.json` - Added environment variable references
- `Backend/.env.example` - Created template for local development
- `.gitignore` - Added to ignore sensitive files

### ❌ Never Commit These Files:
- `.env` - Contains actual secrets
- `local_settings.py` - Local overrides
- `secrets.json` - Any secrets file
- `credentials.json` - Database credentials

## 🛡️ Security Best Practices

### 1. **Database Security**
```bash
# Rotate database credentials regularly
# Use strong passwords (16+ characters)
# Limit database access to specific IPs
# Enable SSL connections
```

### 2. **Django Security**
```python
# In production, always set:
DEBUG = False
ALLOWED_HOSTS = ['your-domain.com']  # Specific domains only
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
```

### 3. **API Security**
```python
# Implement rate limiting
# Use CORS properly
# Validate all inputs
# Log security events
```

## 🔄 Deployment Checklist

### Before Deploying:
- [ ] Changed database password
- [ ] Generated new Django secret key
- [ ] Set all environment variables in Vercel
- [ ] Verified `.env` is in `.gitignore`
- [ ] Tested with `DEBUG=False`
- [ ] Checked CORS settings
- [ ] Verified ALLOWED_HOSTS

### After Deployment:
- [ ] Test all API endpoints
- [ ] Verify environment variables are loaded
- [ ] Check logs for any errors
- [ ] Run security scan
- [ ] Monitor for any issues

## 🆘 Emergency Response

If credentials are still exposed:

1. **Immediately change all passwords**
2. **Rotate API keys and tokens**
3. **Check access logs for unauthorized access**
4. **Update all environment variables**
5. **Force-push cleaned history if needed**

## 📞 Support

For security issues:
- Check Django Security Documentation: https://docs.djangoproject.com/en/5.0/topics/security/
- Vercel Environment Variables: https://vercel.com/docs/concepts/projects/environment-variables
- Railway Database Security: https://docs.railway.app/deploy/databases

## ⚡ Quick Fix Commands

```bash
# 1. Add .env to gitignore (if not already done)
echo ".env" >> .gitignore

# 2. Remove .env from git if accidentally committed
git rm --cached .env
git commit -m "Remove .env file from tracking"

# 3. Generate new secret key
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"

# 4. Deploy with new variables
vercel --prod
```

---

**Remember**: Security is not a one-time setup. Regularly review and update your security configurations!
