# Troubleshooting Guide

## Website Runs But Can't See Anything

If the website is running but you see a blank page, try these steps:

### 1. Check Browser Console

1. Open your browser's Developer Tools (F12 or Right-click → Inspect)
2. Go to the **Console** tab
3. Look for any red error messages
4. Share the error messages if you see any

### 2. Check Network Tab

1. In Developer Tools, go to the **Network** tab
2. Refresh the page (F5)
3. Check if all files are loading (especially `main.jsx`, `index.css`)
4. Look for any files with status 404 (not found)

### 3. Verify Dev Server is Running

The dev server should show a URL like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Make sure you're accessing the correct URL (usually `http://localhost:5173`)

### 4. Clear Browser Cache

1. Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
2. Select "Cached images and files"
3. Clear cache
4. Refresh the page (Ctrl+F5 for hard refresh)

### 5. Check if JavaScript is Enabled

1. In browser settings, make sure JavaScript is enabled
2. Try a different browser (Chrome, Firefox, Edge)

### 6. Verify Files Are Present

Make sure these files exist:
- `index.html` in root directory
- `src/main.jsx`
- `src/App.jsx`
- `src/index.css`
- `src/components/` folder with all component files

### 7. Reinstall Dependencies

If nothing works, try:
```powershell
# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json

# Reinstall
npm install

# Start dev server
npm run dev
```

### 8. Check Port Conflicts

If port 5173 is already in use:
```powershell
# Kill process on port 5173 (if needed)
netstat -ano | findstr :5173
# Then use the PID to kill: taskkill /PID <pid> /F

# Or use a different port
npm run dev -- --port 3000
```

### 9. Common Issues

**White/Blank Screen:**
- Check browser console for errors
- Verify Tailwind CSS is compiling
- Check if React is rendering (look for `#root` element in Elements tab)

**Dark Screen with No Content:**
- Content might be there but invisible
- Check if text color is white on dark background
- Try zooming in/out (Ctrl + Mouse Wheel)

**Styling Not Working:**
- Tailwind might not be processing
- Check if `index.css` is imported in `main.jsx`
- Verify `tailwind.config.js` is correct

### 10. Get Help

If none of these work:
1. Open browser console (F12)
2. Take a screenshot of any errors
3. Check the Network tab for failed requests
4. Share the error messages

## Quick Test

To verify React is working, you should see in the browser console:
- No red errors
- The page should have a dark navy background (#0A0E27)
- You should see "Hi, I'm Mihir Tamboli" text in white/cyan

If you see the dark background but no text, it's likely a CSS or rendering issue.
If you see a white screen, React might not be loading.
