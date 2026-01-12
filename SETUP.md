# Setup Instructions

## ⚠️ Important: Node.js Version Requirement

This project requires **Node.js version 16 or higher**. 

Your current Node.js version is **v14.21.3**, which is too old and doesn't support the modern JavaScript syntax used by Vite and other dependencies.

## How to Fix the Error

### Option 1: Update Node.js (Recommended)

1. **Download and install the latest LTS version of Node.js:**
   - Visit: https://nodejs.org/
   - Download the LTS version (v18 or v20)
   - Install it on your system

2. **Verify the installation:**
   ```powershell
   node --version
   ```
   Should show v16.x.x or higher

3. **Reinstall dependencies:**
   ```powershell
   npm install
   ```

4. **Run the development server:**
   ```powershell
   npm run dev
   ```

### Option 2: Use NVM (Node Version Manager) for Windows

If you want to manage multiple Node.js versions:

1. **Install nvm-windows:**
   - Download from: https://github.com/coreybutler/nvm-windows/releases
   - Install the `nvm-setup.exe` file

2. **Install Node.js 18:**
   ```powershell
   nvm install 18
   nvm use 18
   ```

3. **Verify:**
   ```powershell
   node --version
   ```

4. **Reinstall dependencies:**
   ```powershell
   npm install
   ```

## After Updating Node.js

Once you've updated Node.js, the error should be resolved. You can then:

1. Start the development server:
   ```powershell
   npm run dev
   ```

2. Build for production:
   ```powershell
   npm run build
   ```

## Why This Error Occurred

The `??=` (logical nullish assignment) operator was introduced in Node.js v15.0.0. Modern build tools like Vite use this syntax, which is why you're seeing the error with Node.js v14.
