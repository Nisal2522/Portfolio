# My Portfolio (Next.js)

## 1. Run karanna (oyage computer eke)

Node.js install karala thiyenna one (https://nodejs.org, LTS version eka).

```bash
npm install
npm run dev
```

Browser eke `http://localhost:3000` open karanna.

## 2. Oyage details danna

`data/portfolio.js` file eka open karala nama, email, skills, projects wenas karanna.
Save karama browser eke auto update wenawa.

- CV eka thiyenawa nam `public/cv.pdf` widihata danna.
- Color eka wenas karanna `app/globals.css` eke `--accent` eka wenas karanna.

## 3. GitHub ekata push karanna

```bash
git init
git add .
git commit -m "My portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git
git push -u origin main
```

(Mulinma github.com eke `my-portfolio` kiyala empty repo ekak hadanna.)

## 4. Vercel eke deploy karanna

1. https://vercel.com ekata GitHub account eken sign up wenna
2. **Add New → Project** click karanna
3. `my-portfolio` repo eka **Import** karanna
4. Kisima setting ekak wenas karanna epa, **Deploy** click karanna
5. Winadi 1–2 kin `your-name.vercel.app` wage link ekak labenawa 🎉

Ita passe GitHub ekata push karana hama welema Vercel auto update wenawa.
