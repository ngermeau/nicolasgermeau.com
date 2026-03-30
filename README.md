# Nicolas Germeau Personal Site

A personal website built with Vite and deployed on GitHub Pages.

## Development

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment to GitHub Pages

This site is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Setup Instructions

1. **Enable GitHub Pages in your repository settings:**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment", set Source to "GitHub Actions"

2. **Push your code to the main branch:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **Wait for the deployment:**
   - Go to the "Actions" tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow run
   - Once complete, your site will be live!

### Custom Domain (Optional)

If you want to use a custom domain (like nicolasgermeau.com):

1. **Add a CNAME file:**
   - Create a file named `CNAME` in the `public` directory
   - Add your domain name to it (e.g., `nicolasgermeau.com`)

2. **Configure your DNS:**
   - For a custom domain, add an A record pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `ngermeau.github.io`

3. **Update repository settings:**
   - Go to Settings > Pages
   - Enter your custom domain in the "Custom domain" field
   - Enable "Enforce HTTPS"

### Default GitHub Pages URL

If you're not using a custom domain, your site will be available at:
```
https://ngermeau.github.io/nicolasgermeau.com/
```

If this is the case, update `vite.config.js` to include the base path:
```javascript
export default defineConfig({
  base: '/nicolasgermeau.com/',
  // ...
})
```

## Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── public/                 # Static assets
├── src/                    # Source files
│   └── main.js            # Application entry point
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies and scripts
```

## License

Private