# MIGA Dienstleistungen GmbH - Corporate Website

Modern, static corporate website built with Astro, Tailwind CSS, and Decap CMS.

## 🚀 Features

- **Static Site Generation** with Astro for 90+ Lighthouse performance
- **Tailwind CSS** for modern, responsive design
- **Decap CMS** for easy content management
- **Netlify Forms** for contact form submissions
- **GDPR-compliant** with OpenStreetMap integration
- **SEO-optimized** with meta tags and semantic HTML
- **Zero runtime JavaScript** (except minimal interactions)

## � Prerequisites

- Node.js 20 or higher
- npm or yarn
- Git
- GitHub account
- Netlify account (free tier)

## 🛠️ Local Development

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment to Netlify

### 1. Create GitHub Repository

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create repository on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/miga-website.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

### 3. Enable Netlify Identity

1. In your Netlify site dashboard, go to **Site settings** → **Identity**
2. Click **Enable Identity**
3. Under **Registration preferences**, select **Invite only**
4. Under **External providers**, you can optionally enable Google, GitHub, etc.
5. Under **Services** → **Git Gateway**, click **Enable Git Gateway**

### 4. Invite Admin User

1. Go to **Identity** tab in your Netlify dashboard
2. Click **Invite users**
3. Enter the email address for the admin user
4. The user will receive an invitation email
5. Click the link in the email to set up the account

### 5. Access CMS

Once deployed, access the CMS at:
```
https://your-site-name.netlify.app/admin
```

Login with the credentials you set up via the invitation email.

## 📝 Content Management

### Editing Content

1. Navigate to `/admin` on your deployed site
2. Login with your Netlify Identity credentials
3. Edit pages and services through the visual editor
4. Click **Publish** to save changes
5. Changes will be committed to your GitHub repository
6. Netlify will automatically rebuild and deploy the site

### Content Structure

- **Seiten (Pages)**: Edit homepage, about, and contact page content
- **Leistungen (Services)**: Manage service categories and items

## 🎨 Customization

### Colors

Edit `tailwind.config.mjs` to customize the color scheme:

```javascript
colors: {
  primary: { ... },  // Blue accent
  accent: { ... },   // Orange accent
  dark: { ... },     // Dark grays
}
```

### Fonts

The site uses Inter font from Google Fonts. To change:

1. Edit `src/styles/global.css`
2. Update the `@import` URL
3. Update `fontFamily` in `tailwind.config.mjs`

## 📱 Pages

- **/** - Homepage with hero and service previews
- **/leistungen** - All 9 service categories
- **/uber-uns** - About page
- **/kontakt** - Contact page with form and map
- **/impressum** - Legal notice
- **/datenschutz** - Privacy policy
- **/admin** - CMS admin panel

## 🔒 GDPR Compliance

- No Google Analytics or tracking
- OpenStreetMap instead of Google Maps
- Netlify Forms with explicit consent
- Comprehensive privacy policy
- Cookie-free (except Netlify Identity)

## 📊 Performance

Target metrics:
- **Performance**: 90+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

Run Lighthouse audit:
```bash
npm run build
npm run preview
# Open Chrome DevTools → Lighthouse
```

## 🐛 Troubleshooting

### CMS Login Issues

1. Ensure Netlify Identity is enabled
2. Ensure Git Gateway is enabled
3. Check that you've accepted the invitation email
4. Clear browser cache and try again

### Build Failures

1. Check Node.js version (should be 20+)
2. Delete `node_modules` and `package-lock.json`
3. Run `npm install` again
4. Check Netlify build logs for specific errors

### Contact Form Not Working

1. Ensure form has `data-netlify="true"` attribute
2. Ensure form has `name` attribute
3. Check Netlify Forms dashboard for submissions
4. Verify honeypot field is present

## 📞 Support

For questions or issues, contact:

**MIGA Dienstleistungen GmbH**  
Mobil: 0664 25 28 150  
E-Mail: miga2017@gmx.at

## 📄 License

© 2026 MIGA Dienstleistungen GmbH. All rights reserved.
