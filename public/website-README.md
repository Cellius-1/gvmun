# GVMUN Website

A modern, responsive website for the Global Virtual Model United Nations (GVMUN) organization.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design inspired by contemporary web standards
- **Interactive Elements**: Countdown timer, smooth scrolling, hover effects
- **Contact Form**: Functional contact form with validation
- **Team Section**: Showcase team members with photos and roles
- **Partners Section**: Display partner organizations
- **Social Media Integration**: Links to social media accounts

## File Structure

```
gvmun/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
│   ├── team/           # Team member photos
│   ├── partners/       # Partner organization logos
│   ├── gvmun-logo.png  # Main GVMUN logo
│   └── mun-simulation.jpg # About section image
└── README.md           # This file
```

## Setup Instructions

1. **Add Images**: Place your images in the appropriate folders:
   - GVMUN logo: `assets/gvmun-logo.png`
   - Team photos: `assets/team/[name].jpg`
   - Partner logos: `assets/partners/[partner-name].png`
   - About section image: `assets/mun-simulation.jpg`

2. **Customize Content**: 
   - Edit `index.html` to update text content, links, and structure
   - Modify `styles.css` to change colors, fonts, and styling
   - Update `script.js` to adjust the countdown date and functionality

3. **Configure Countdown**: 
   - In `script.js`, find the line `const targetDate = new Date('2025-10-15T00:00:00');`
   - Update the date to match your actual conference date

4. **Update Links**: Replace placeholder links (`href="#"`) with actual URLs for:
   - Social media accounts
   - WhatsApp group
   - Newsletter and memo links
   - Partner websites

## Customization

### Colors
The website uses a blue and purple gradient theme. To change colors, update the CSS variables in `styles.css`:
- Primary blue: `#2563eb`
- Gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Background: `#f8fafc`

### Fonts
The website uses Inter font from Google Fonts. To change the font, update the Google Fonts link in `index.html` and the font-family in `styles.css`.

### Layout
The website is built with CSS Grid and Flexbox for responsive design. Key sections include:
- Hero section with countdown
- Statistics
- About/What is Model UN
- Highlights (6 key features)
- Team members
- Partners
- Contact form

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- Font Awesome (for icons)
- Google Fonts (Inter font)
- No JavaScript frameworks required

## Hosting

This is a static website that can be hosted on:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting service

## Contact Form

The contact form currently shows an alert message. For production use, you'll need to:
1. Set up a backend service to handle form submissions
2. Update the form submission handler in `script.js`
3. Consider using services like Formspree, Netlify Forms, or EmailJS

## Performance

The website includes several performance optimizations:
- Lazy loading for images
- Debounced scroll events
- CSS animations for smooth interactions
- Optimized images and assets

## Accessibility

The website includes basic accessibility features:
- Semantic HTML structure
- Keyboard navigation support
- Alt text for images (add when uploading actual images)
- Proper heading hierarchy

## Future Enhancements

Consider adding:
- Blog/news section
- Event registration system
- Member dashboard
- Multi-language support
- Advanced animations
- CMS integration

## License

This project is open source and available under the MIT License.
