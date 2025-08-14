# Debug 500 Error - Company Creation Issue

## 🚨 Current Issue
Getting 500 Internal Server Error when trying to create company data through Payload admin panel.

**Error Details:**
- URL: `http://localhost:3000/api/company?depth=0&fallback-locale=null`
- Method: POST
- Content-Type: `multipart/form-data`
- Status: 500 Internal Server Error

## 🔍 Debugging Steps

### Step 1: Check Server Logs
Look at your terminal where `bun run dev` is running for detailed error messages. Common errors include:
```
Error: ValidationError: Path `description` is required
Error: Cannot read properties of undefined
Error: Rich text validation failed
```

### Step 2: Test Debug API Routes

#### A. Test Collection Access
```bash
curl http://localhost:3000/api/debug-company
```
Expected: Success response with collection info

#### B. Test Minimal Creation
```bash
curl -X POST http://localhost:3000/api/debug-company
```
Expected: Success response with created company

#### C. Clean Up Test Data
```bash
curl -X DELETE http://localhost:3000/api/debug-company
```

### Step 3: Test Simplified Collection
1. Go to admin panel: `http://localhost:3000/admin`
2. Look for "Company Simple" collection
3. Try creating an entry there
4. If it works, the issue is with the main Company collection

### Step 4: Check Database Connection
```bash
# Test PostgreSQL connection
psql -d dino_db -c "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
```

## 🛠 Common Fixes

### Fix 1: Rich Text Field Issues
**Problem**: Lexical editor validation errors
**Solution**: Make rich text field optional temporarily
```typescript
{
  name: 'description',
  type: 'richText',
  required: false, // Changed from true
}
```

### Fix 2: Array Field Default Values
**Problem**: Invalid default values in array fields
**Solution**: Remove defaultValue from array fields
```typescript
{
  name: 'stats',
  type: 'array',
  fields: [...],
  // Remove defaultValue completely
}
```

### Fix 3: Database Schema Issues
**Problem**: Database table doesn't exist or has wrong schema
**Solution**: Drop and recreate tables
```bash
# Connect to database
psql -d dino_db

# Drop payload tables (CAUTION: This deletes all data)
DROP TABLE IF EXISTS company CASCADE;
DROP TABLE IF EXISTS "payload-migrations" CASCADE;
DROP TABLE IF EXISTS "payload-preferences" CASCADE;

# Exit and restart server
\q
bun run dev
```

### Fix 4: Environment Issues
**Problem**: Missing or invalid environment variables
**Solution**: Check `.env.local` file
```env
PAYLOAD_SECRET=your-32-character-secret-here
DATABASE_URI=postgresql://username:password@localhost:5432/dino_db
RESEND_API_KEY=re_your-api-key
LOOPS_API_KEY=your-loops-key
```

## 🔧 Step-by-Step Resolution

### Option A: Quick Fix (Recommended)
1. **Simplify the Company collection**:
   - Make `description` field optional
   - Remove all `defaultValue` properties
   - Remove `required: true` from array sub-fields

2. **Test with minimal data**:
   ```bash
   curl -X POST http://localhost:3000/api/debug-company
   ```

3. **Try admin panel again**:
   - Go to `/admin`
   - Try creating company with just title and subtitle
   - Add other fields gradually

### Option B: Clean Slate
1. **Backup existing data** (if any)
2. **Reset database**:
   ```bash
   dropdb dino_db
   createdb dino_db
   ```
3. **Restart server**: `bun run dev`
4. **Create admin user again**
5. **Test with simplified collection first**

### Option C: Debug Mode
1. **Add console.log to collection**:
   ```typescript
   // In Company.ts
   hooks: {
     beforeCreate: [
       ({ data }) => {
         console.log('Creating company with data:', JSON.stringify(data, null, 2))
         return data
       }
     ]
   }
   ```

2. **Watch server logs while creating**

## 📋 Diagnostic Checklist

- [ ] Server starts without errors (`bun run dev`)
- [ ] Database connection works (`/api/status`)
- [ ] Admin panel loads (`/admin`)
- [ ] Can create user account
- [ ] Collections visible in admin sidebar
- [ ] Debug API routes work (`/api/debug-company`)
- [ ] Simplified collection works (`company-simple`)
- [ ] Server logs show specific error details

## 🎯 Expected Behavior

**When Working Correctly:**
1. Admin form submits without errors
2. Success message appears
3. New company entry visible in collection list
4. Data appears on frontend (`/company`)

## 📞 If Still Stuck

### Check These Logs:
1. **Browser Console** (F12 → Console)
2. **Network Tab** (F12 → Network → Look for failed requests)
3. **Server Terminal** (Where `bun run dev` is running)
4. **PostgreSQL Logs** (If applicable)

### Useful Commands:
```bash
# Restart everything
pkill -f "bun run dev"
bun run dev

# Check database tables
psql -d dino_db -c "\dt"

# View recent logs
tail -f /path/to/postgresql/logs

# Test payload directly
bunx payload --help
```

### Alternative Testing:
```javascript
// Test in browser console on admin page
fetch('/api/company', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Test Company',
    subtitle: 'Test'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error)
```

## 🏆 Success Indicators

Once fixed, you should see:
- ✅ No 500 errors in admin panel
- ✅ Company entries create successfully
- ✅ Data appears on `/company` page
- ✅ Rich text editor works (if using)
- ✅ File uploads work (if using)

---

**Remember**: The most common cause is rich text field validation. Start with making all fields optional, then add requirements back gradually.