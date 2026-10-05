# Al-Asim Solar World & Electro/Gas Centre ☀️

A modern, responsive business website for **Al-Asim Solar World & Electro/Gas Centre** (Rahim Yar Khan, Pakistan).

---

## 🚀 GitHub par Push aur Vercel par Deploy karne ka Tareeqa (Urdu / Roman Urdu Guide)

Is project ko GitHub par push karke Vercel par deploy karna bohot aasan hai. Neeche diye gaye steps follow karein:

### Step 1: GitHub par New Repository Banayein
1. [github.com](https://github.com) par jayein aur login karein.
2. **"New repository"** par click karein.
3. Repository ka naam rakhein (jaise `alasim-solar-world`).
4. **Public** ya **Private** choose karein aur **Create repository** par click karein.

### Step 2: Code ko Git mein Add aur Push karein
Apne computer ke terminal / VS Code mein project folder ke andar ye commands run karein:

```bash
# 1. Git initialize karein (agar pehle se nahi hai)
git init

# 2. Saari files add karein
git add .

# 3. First commit karein
git commit -m "Initial commit - Al-Asim Solar World website"

# 4. Main branch select karein
git branch -M main

# 5. Apna GitHub repository link attach karein (apna username aur repo name likhein)
git remote add origin https://github.com/<AAPKA_USERNAME>/alasim-solar-world.git

# 6. GitHub par code push karein
git push -u origin main
```

---

### Step 3: Vercel par 1-Click Deploy karein
1. [vercel.com](https://vercel.com) par jayein aur **"Continue with GitHub"** se login karein.
2. Dashboard par **"Add New..."** -> **"Project"** select karein.
3. List mein se apni GitHub repository (`alasim-solar-world`) ke saamne **"Import"** button dabayein.
4. **Project Settings**:
   - **Framework Preset**: `Vite` (Vercel automatic detect kar lega)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. **"Deploy"** button par click karein!

Aapki website 1 minute ke andar live ho jayegi aur aapko ek fast, free live domain mil jayega (jaise `alasim-solar-world.vercel.app`).

---

## 🛠️ Features Included
- **Vercel Routing**: Pre-configured `vercel.json` for SPA zero-404 redirects.
- **Fast Build**: Vite + Tailwind CSS v4 + React 19 + TypeScript.
- **WhatsApp Integration**: Direct pre-filled WhatsApp quote inquiries.
- **Solar Sizing Estimator**: Interactive calculator for home & business customers.
- **Fully Responsive**: Mobile-first design with bottom sticky WhatsApp button.
