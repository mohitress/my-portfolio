# 🧭 Step-by-Step Hands-on Git & GitHub Tutorial

Welcome to your practical guide for mastering Git and GitHub!
Follow each mission below in order. By the end of this guide, you will have your own website live on the internet hosted for free on GitHub!

---

## 📌 Phase 1: Install Git on Windows

Before we can use Git commands, Git must be installed on your computer:

1. Go to the official Git download page: **[https://git-scm.com/download/win](https://git-scm.com/download/win)**
2. Click **"Click here to download"** to get the 64-bit Git for Windows Setup.
3. Run the downloaded installer (`.exe`).
4. Click **Next** through the setup (the default options are recommended!).
5. Once installation finishes, restart your terminal or PowerShell window.
6. Verify it works by opening PowerShell and running:
   ```powershell
   git --version
   ```
   *(You should see something like `git version 2.x.x`)*

---

## 📌 Phase 2: First-Time Git Configuration

Tell Git who you are so your commits are tagged with your name:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

*(You only have to do this once on your computer!)*

---

## 📌 Phase 3: Initialize Your Local Repository

Now navigate into your project folder and turn it into a Git repository.

1. Open PowerShell and navigate to this folder:
   ```powershell
   cd C:\Users\asus\.gemini\antigravity\scratch\my-portfolio
   cd C:\Users\asus\Desktop\my-portfolio
   ```
2. Initialize the Git repository:
   ```powershell
   git init
   ```
   *Git has now created a hidden `.git` folder that tracks all history!*

3. Check the repository status:
   ```powershell
   git status
   ```
   *You will see untracked files listed in red: `index.html`, `style.css`, `script.js`, `README.md`, etc.*

---

## 📌 Phase 4: Make Your Very First Commit

A "commit" is a saved checkpoint (snapshot) of your project at a specific point in time.

1. Stage all the files to be committed:
   ```powershell
   git add .
   ```
2. Check the status again:
   ```powershell
   git status
   ```
   *The files are now green! They are "staged" and ready to be saved.*

3. Save the snapshot with a descriptive message:
   ```powershell
   git commit -m "feat: initial commit of personal developer portfolio"
   ```

4. View your commit history:
   ```powershell
   git log --oneline
   ```
   *You'll see your first commit with a unique hash code!*

---

## 📌 Phase 5: Practice Modifying Code and Committing

1. Open `index.html` in your editor.
2. Find line 28 where it says:
   ```html
   <h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
   ```
3. Replace `"Your Name"` with your actual name or nickname! Save the file.
4. In your terminal, inspect what changed:
   ```powershell
   git diff
   ```
   *Git will show you the exact line you changed in green (+).*
5. Stage and commit your change:
   ```powershell
   git add index.html
   git commit -m "chore: personalize portfolio with my name"
   ```

---

## 📌 Phase 6: Practice Branching (Safe Experimentation)

Branches let you work on new features without breaking your main code.

1. Create and switch to a new branch named `feature/contact-update`:
   ```powershell
   git checkout -b feature/contact-update
   ```
2. Open `index.html` and scroll to the footer. Update the email link to your actual email address.
3. Commit the change on this branch:
   ```powershell
   git add index.html
   git commit -m "feat: update contact email in footer"
   ```
4. Switch back to your main branch:
   ```powershell
   git checkout main
   ```
   *(Notice your email reverted back to placeholder!)*
5. Merge your feature branch into `main`:
   ```powershell
   git merge feature/contact-update
   ```
   *(Now your changes are safely merged into main!)*

---

## 📌 Phase 7: Host on GitHub

Now let's store your code in the cloud on GitHub!

1. Go to **[https://github.com](https://github.com)** and sign in (or create a free account).
2. In the top-right corner, click the **`+`** icon and select **New repository**.
3. Repository settings:
   - **Repository name:** `my-portfolio`
   - **Description:** `My personal portfolio website built with HTML, CSS, and JS`
   - **Public / Private:** Select **Public**
   - ⚠️ **Important:** Do NOT check "Add a README file", ".gitignore", or "License" (we already created them locally!).
4. Click **Create repository**.

5. On the page that appears, GitHub will give you commands under **"…or push an existing repository from the command line"**. Run them in your terminal:
   ```powershell
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/my-portfolio.git
   git push -u origin main
   ```
   *(Replace `<YOUR-USERNAME>` with your actual GitHub username).*
   *(If prompted, log in with your GitHub credentials in the browser popup).*

6. Refresh your GitHub repository page in the browser — you will see all your files and commit history!

---

## 📌 Phase 8: Publish Live on the Web (GitHub Pages)

GitHub allows you to host static HTML/CSS/JS websites for free:

1. In your GitHub repository, click on **Settings** (tab near the top right).
2. In the left sidebar, click on **Pages**.
3. Under **Branch**, select `main` from the dropdown and leave folder as `/(root)`.
4. Click **Save**.
5. Wait about 1-2 minutes, then refresh the page.
6. GitHub will display:
   > *"Your site is live at `https://<YOUR-USERNAME>.github.io/my-portfolio/`"*

Congratulations! You are now using Git for version control, hosting code on GitHub, and your personal portfolio is live on the internet for anyone to see!

