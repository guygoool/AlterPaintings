# Grandpa's Painting Portfolio

A beautiful, responsive website to showcase your grandpa's professional painting collection.

## 🎨 Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern UI** - Clean, professional design with warm color palette
- **Gallery with Filtering** - Browse paintings by category (portraits, landscapes)
- **Individual Painting Pages** - Detailed view for each artwork
- **Contact Form** - For inquiries and commission requests
- **Easy Content Management** - Simple JSON file for painting data

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
AlterPaintings/
├── src/
│   ├── app/                  # Pages (Next.js App Router)
│   │   ├── page.js           # Homepage
│   │   ├── gallery/          # Gallery pages
│   │   ├── about/            # About page
│   │   └── contact/          # Contact page
│   ├── components/           # Reusable components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── PaintingCard.js
│   └── data/
│       └── paintings.json    # Painting data
├── public/
│   └── images/              # Put real painting images here
├── package.json
└── README.md
```

## 🖼️ Adding Real Paintings

### Step 1: Add Images
1. Place your grandpa's painting images in the `public/images/` folder
2. Use descriptive filenames (e.g., `portrait-tennis-player.jpg`)

### Step 2: Update Painting Data
Edit `src/data/paintings.json` to add/modify paintings:

```json
{
  "paintings": [
    {
      "id": 1,
      "title": "Your Painting Title",
      "description": "Description of the painting",
      "medium": "Oil on Canvas",
      "dimensions": "24\" x 18\"",
      "year": "2023",
      "image": "/images/your-image.jpg",
      "category": "portraits"
    }
  ]
}
```

### Step 3: Update Artist Information
- Edit `src/app/about/page.js` to customize the biography
- Replace the artist photo placeholder
- Update the site title in `src/app/layout.js`

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- `warm-beige`: Background color
- `soft-brown`: Secondary text and hover states
- `deep-brown`: Primary text and buttons
- `art-gold`: Accent color

### Content
- **Site Title**: Update in `src/components/Navbar.js` and `src/app/layout.js`
- **Homepage Hero**: Edit `src/app/page.js`
- **About Page**: Customize `src/app/about/page.js`
- **Contact Info**: Update `src/app/contact/page.js`

## 📱 Pages Included

1. **Homepage** - Hero section, featured works, call-to-action
2. **Gallery** - All paintings with category filtering
3. **Individual Painting Pages** - Detailed view for each artwork
4. **About** - Artist biography and information
5. **Contact** - Contact form and commission details

## 🔧 Technical Details

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Images**: Next.js Image optimization
- **Responsive**: Mobile-first design
- **Performance**: Optimized for fast loading

## 📞 Support

The website includes:
- Contact form for inquiries
- Commission information
- Purchase details
- Professional presentation of artwork

Perfect for showcasing a professional artist's portfolio and attracting potential buyers or commission clients! 