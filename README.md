#!/bin/bash

# ================================================
# DeviceZone — GitHub Push Script
# ================================================
# Ye script aapke project ko GitHub par push karegi
# Run karo: bash push_to_github.sh
# ================================================

REPO_URL="https://github.com/Ahsan-Mudassar/DeviceZone-E-commerce-website.git"
BRANCH="main"

echo ""
echo "🚀 DeviceZone — GitHub Push Script"
echo "===================================="

# Check karo ke git installed hai
if ! command -v git &> /dev/null; then
    echo "❌ Git installed nahi hai. Pehle git install karo: https://git-scm.com"
    exit 1
fi

# Check karo ke hum sahi folder me hain (package.json hona chahiye)
if [ ! -f "package.json" ]; then
    echo "❌ Error: Is script ko apne project ke ROOT folder me rakho aur chalao."
    echo "   (Jahan package.json hai usi folder me)"
    exit 1
fi

echo "📁 Project folder: $(pwd)"
echo ""

# Git init agar nahi hai
if [ ! -d ".git" ]; then
    echo "⚙️  Git initializing..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Remote set karo
if git remote get-url origin &> /dev/null; then
    echo "🔗 Remote already set, updating..."
    git remote set-url origin $REPO_URL
else
    echo "🔗 Remote add kar raha hoon..."
    git remote add origin $REPO_URL
fi
echo "✅ Remote: $REPO_URL"

# .gitignore check
if [ ! -f ".gitignore" ]; then
    echo ""
    echo "📝 .gitignore bana raha hoon..."
    cat > .gitignore << 'GITIGNORE'
node_modules/
dist/
dist-ssr/
build/
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
logs/
*.log
.vscode/
.idea/
.DS_Store
Thumbs.db
.vite/
*.local
GITIGNORE
    echo "✅ .gitignore ready"
fi

# Sab files stage karo
echo ""
echo "📦 Files stage kar raha hoon..."
git add .
echo "✅ Files staged"

# Commit karo
echo ""
echo "💾 Commit kar raha hoon..."
git commit -m "feat: DeviceZone e-commerce app — initial commit

- Responsive Navbar with hamburger menu
- Hero, About, Products, Cart pages
- CartContext with localStorage persistence
- Category filter & product search
- Professional Footer with social links
- Fully responsive (mobile, tablet, desktop)"

echo "✅ Commit done"

# Branch set karo
git branch -M $BRANCH

# Push karo
echo ""
echo "⬆️  GitHub par push kar raha hoon..."
echo "   (GitHub username & password/token mangega)"
echo ""
git push -u origin $BRANCH

# Result check
if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 SUCCESS! Repo push ho gaya!"
    echo "🌐 Dekho: https://github.com/Ahsan-Mudassar/DeviceZone-E-commerce-website"
    echo ""
else
    echo ""
    echo "❌ Push fail hua. Neeche common fixes dekho:"
    echo ""
    echo "🔑 FIX 1 — Personal Access Token banao:"
    echo "   1. GitHub.com → Settings → Developer Settings"
    echo "   2. Personal Access Tokens → Tokens (classic)"
    echo "   3. Generate new token → 'repo' scope select karo"
    echo "   4. Token copy karo"
    echo "   5. Password ki jagah YE TOKEN paste karo"
    echo ""
    echo "🔑 FIX 2 — SSH use karo:"
    echo "   git remote set-url origin git@github.com:Ahsan-Mudassar/DeviceZone-E-commerce-website.git"
    echo "   git push -u origin main"
fi
