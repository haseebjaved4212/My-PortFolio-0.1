# Haseeb Javed — Portfolio

Modern developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **Motion**, and **Web3Forms**.


## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Web3Forms Environment Variable:**
   Open `.env` (or create `.env.local` from `.env.example`) and add your Web3Forms Access Key from [https://web3forms.com/](https://web3forms.com/):
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying to Vercel / GitHub

1. Push the project files to your GitHub repository.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Under **Settings → Environment Variables** in Vercel, add:
   - **Key:** `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - **Value:** Your Web3Forms Access Key
4. Click **Deploy**.
