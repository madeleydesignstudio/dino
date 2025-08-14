# Payload CMS Integration Testing Guide

## 🚀 Quick Start Testing

### Step 1: Start Development Server
```bash
bun run dev
```

### Step 2: Test Status
Open browser and visit:
```
http://localhost:3000/api/status
```

Expected response:
```json
{
  "success": true,
  "message": "Payload CMS is running successfully",
  "collections": {
    "users": 0,
    "media": 0,
    "company": 0
  }
}
```

### Step 3: Test Company Page
Visit:
```
http://localhost:3000/company
```

You should see:
- Setup instructions if no data exists
- "🌱 Seed Sample Data" button

### Step 4: Seed Initial Data
Click the "🌱 Seed Sample Data" button or visit:
```
http://localhost:3000/api/seed
```

This will create sample company data.

### Step 5: Access Admin Panel
Visit:
```
http://localhost:3000/admin
```

1. Create your first admin user
2. Navigate to "Company" collection
3. You should see the seeded data
4. Click to edit and customize content

## 🔧 Troubleshooting Common Issues

### Issue 1: Environment Variables Missing
**Error**: `Missing required environment variables`

**Solution**: Ensure `.env.local` contains:
```env
PAYLOAD_SECRET=your-32-character-secret-here
DATABASE_URI=postgresql://username:password@localhost:5432/dino_db
RESEND_API_KEY=re_your-api-key
LOOPS_API_KEY=your-loops-key
```

### Issue 2: Database Connection Failed
**Error**: `connection failed` or `ECONNREFUSED`

**Solutions**:
1. Start PostgreSQL: `brew services start postgresql` (macOS)
2. Create database: `createdb dino_db`
3. Check connection string in `.env.local`

### Issue 3: "Slate to Lexical" Error
**Error**: `tried to pass data from old Slate editor`

**Solutions**:
1. Clear existing data: Visit `/admin` → Company → Delete existing entries
2. Re-seed data: `POST http://localhost:3000/api/seed`
3. Or manually create new company entry in admin

### Issue 4: TypeScript Errors
**Error**: Type errors in company page

**Solutions**:
1. Regenerate types: `bunx payload generate:types`
2. Restart dev server: `bun run dev`
3. Check imports in `src/app/(frontend)/company/page.tsx`

### Issue 5: Admin Panel Not Loading
**Error**: 404 or blank page at `/admin`

**Solutions**:
1. Check console for JavaScript errors
2. Verify Payload config in `src/payload.config.ts`
3. Ensure all dependencies installed: `bun install`

### Issue 6: Seed Button Not Working
**Error**: Form submission fails

**Solutions**:
1. Check browser network tab for errors
2. Test API directly: `curl -X POST http://localhost:3000/api/seed`
3. Check server logs in terminal

## 📋 Testing Checklist

### Basic Functionality
- [ ] Development server starts without errors
- [ ] `/api/status` returns success response
- [ ] `/company` page loads with setup instructions
- [ ] Seed data button works
- [ ] `/admin` loads and allows user creation
- [ ] Company collection visible in admin
- [ ] Can edit company data in admin
- [ ] Changes reflect on `/company` page immediately

### Content Management
- [ ] Can edit title and subtitle
- [ ] Rich text editor works for description
- [ ] Can add/edit statistics
- [ ] Can add/edit company values
- [ ] Can add/edit team members
- [ ] Can upload and assign hero images
- [ ] Can upload team member photos

### Data Persistence
- [ ] Content saves without errors
- [ ] Page refresh preserves changes
- [ ] Database contains correct data structure
- [ ] Media uploads work correctly

## 🎯 Success Criteria

When everything is working correctly:

1. **Company page shows dynamic content** instead of setup instructions
2. **Admin panel is accessible** and user-friendly
3. **Content changes appear immediately** on the website
4. **No console errors** in browser or terminal
5. **All CRUD operations work** (Create, Read, Update, Delete)

## 🔄 Reset and Restart

If you need to start fresh:

### Complete Reset
```bash
# Stop server
pkill -f "bun run dev"

# Clear database (optional)
dropdb dino_db
createdb dino_db

# Restart
bun run dev
```

### Soft Reset
```bash
# Just clear company data
# Visit /admin → Company → Delete all entries
# Then re-seed with button or API call
```

## 📞 Getting Help

### Check These First
1. **Browser Console**: F12 → Console tab for JavaScript errors
2. **Network Tab**: F12 → Network tab for failed API calls
3. **Terminal Output**: Server logs for backend errors
4. **Database Logs**: PostgreSQL logs for connection issues

### Useful Commands
```bash
# Check PostgreSQL status
brew services list | grep postgresql

# Test database connection
psql -d dino_db -c "SELECT NOW();"

# View server logs
bun run dev --verbose

# Check environment variables
env | grep -E "(PAYLOAD|DATABASE)"
```

## 🎉 What Success Looks Like

Once everything is working:

- **Dynamic company page** with editable content
- **Professional admin interface** for content management
- **Real-time content updates** without deployments
- **Type-safe development** with full TypeScript support
- **Scalable foundation** for adding more collections

Your CMS transformation is complete! 🚀