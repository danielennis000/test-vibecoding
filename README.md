# AI Tutor Landing Page

A modern, responsive landing page for the AI Tutor iOS app built with HTML, CSS (Tailwind), and JavaScript. This project is designed to be easily deployed to GitHub Pages.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Brand Colors**: Custom color palette using your brand colors
- **Fast Loading**: Optimized for performance with CDN-based Tailwind CSS
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Local Development

### Prerequisites

- A modern web browser
- Git (for version control)
- A text editor (VS Code, Cursor, etc.)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/danielennis000/test-vibecoding.git
   cd test-vibecoding
   ```

2. **Open the project**
   - Open the project folder in your preferred code editor
   - Open `index.html` in your web browser to view the site locally

3. **Make changes**
   - Edit `index.html` for HTML structure
   - Modify Tailwind classes for styling
   - Update `script.js` for JavaScript functionality

4. **Test locally**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

## 🚀 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Push your changes to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit - AI Tutor landing page"
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub: https://github.com/danielennis000/test-vibecoding
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/(root)** folder
   - Click **Save**

3. **Access your site**
   - Your site will be available at: `https://danielennis000.github.io/test-vibecoding`
   - It may take a few minutes for the first deployment

### Method 2: Using gh-pages Branch

If you prefer to use a separate branch for deployment:

1. **Install gh-pages package** (optional)
   ```bash
   npm init -y
   npm install gh-pages --save-dev
   ```

2. **Add deployment script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d ."
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
test-vibecoding/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── instructions.txt    # Original project instructions
└── README.md          # This file
```

## 🎨 Customization

### Brand Colors

The site uses your custom brand color palette:
- Orange: `#B1591E`
- Purple: `#8A5764`
- Gold: `#DDB176`
- Teal: `#006269`
- Light Teal: `#A5C9CA`
- Dark Purple: `#634B7B`
- Light Grey: `#F0EDE9`

### Modifying Content

1. **Update text content**: Edit the HTML directly in `index.html`
2. **Change colors**: Modify the Tailwind config in the `<script>` tag
3. **Add sections**: Copy existing section structure and modify
4. **Update links**: Replace `#` placeholders with actual URLs

### Adding Features

- **Contact forms**: Add form elements and connect to a service like Formspree
- **Analytics**: Add Google Analytics or other tracking
- **Social media**: Update social media links in the footer
- **App store links**: Replace placeholder buttons with actual app store URLs

## 🔧 Troubleshooting

### Common Issues

1. **Site not loading on GitHub Pages**
   - Ensure the repository is public
   - Check that GitHub Pages is enabled in Settings
   - Verify the correct branch is selected

2. **Styles not loading**
   - Check internet connection (Tailwind CSS is loaded from CDN)
   - Verify the Tailwind CDN link is correct

3. **Images not displaying**
   - Ensure image files are in the correct directory
   - Check file paths are correct

### Performance Tips

- Images should be optimized for web (compress them)
- Consider using WebP format for better compression
- Keep JavaScript minimal for faster loading

## 📱 Mobile Optimization

The site is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly buttons and navigation
- Optimized typography for mobile screens
- Proper viewport meta tag

## 🔗 Useful Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🚀**

For questions or support, please open an issue on the GitHub repository. 