# Vimeo Player Card

A simple, single-purpose web application that creates Twitter Player Cards for Vimeo video links. This app allows content creators to easily generate shareable URLs that display their Vimeo-hosted videos as native-looking video players in Twitter feeds.

## Features

- 🎥 **Vimeo Player Integration**: Uses Vimeo's robust embed player
- 🐦 **Twitter Card Integration**: Generates proper Twitter Player Card metadata
- 🔗 **Simple Link Generation**: Just paste your Vimeo URL and get a shareable link
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🆓 **Completely Free**: Uses Vercel's free tier and Vimeo's free hosting
- 🔄 **Stateless**: No database required, everything works via URL parameters

## How It Works

1. **Visit the Generator**: Go to `/generator` page
2. **Enter Details**: Paste your Vimeo video URL and optionally add title/description
3. **Generate Link**: Click "Generate Player Link" to get your shareable URL
4. **Share on Twitter**: Use the generated URL in your tweets for Player Card functionality

## Project Structure

```
src/
├── app/
│   ├── generator/          # Link generation page
│   ├── player/            # Main player page with Twitter Card metadata
│   │   └── embed/         # Embedded player for Twitter Card iframe
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page (redirects to external URL)
│   └── globals.css       # Global styles
└── components/
    └── VideoPlayer.tsx    # Custom video player component
```

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety
- **Deployment**: Vercel
- **Video Platform**: Vimeo

## Deployment Instructions

### Deploy to Vercel

1. **Create GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MEGA Player Card app"
   git branch -M main
   git remote add origin https://github.com/yourusername/mega-player-card.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project
   - Click "Deploy"

3. **Configure Environment Variables** (Optional):
   - In Vercel dashboard, go to your project settings
   - Add environment variable: `NEXT_PUBLIC_BASE_URL` with your Vercel app URL

### Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   ```
   http://localhost:3000/generator
   ```

## Usage Example

1. Get a Vimeo video link (e.g., `https://vimeo.com/123456789`)
2. Visit your deployed app at `/generator`
3. Paste the Vimeo URL
4. Add optional title and description
5. Click "Generate Player Link"
6. Copy the generated URL
7. Share on Twitter - it will display as a Player Card!

## Requirements Met

✅ **FR-01**: Single-page web application hosted on Vercel  
✅ **FR-02**: Landing page with form for MEGA video link input  
✅ **FR-03**: "Generate Link" button functionality  
✅ **FR-04**: Generates unique, shareable URLs with encoded parameters  
✅ **FR-05**: Dynamically renders HTML with Twitter Card meta tags  
✅ **FR-06**: Includes proper `twitter:card` and `twitter:player` meta tags  
✅ **FR-07**: Lightweight custom HTML5 video player  
✅ **FR-08**: Loads and plays videos from MEGA URLs  
✅ **FR-09**: Basic video controls (play/pause, volume, fullscreen)  
✅ **FR-10**: Dynamic Twitter meta tags based on user input  
✅ **FR-11**: Completely stateless - no database required  

## Important Notes

- **MEGA URL Compatibility**: Ensure your MEGA links are direct download links
- **CORS**: Some MEGA links may have CORS restrictions depending on the file settings
- **File Formats**: Works best with MP4 and WebM video formats
- **Free Hosting**: Uses Vercel's free tier with generous limits
- **No Data Storage**: The app doesn't store any user data or video links

## Troubleshooting

### Video Won't Load
- Verify the MEGA URL is a direct download link
- Check if the video file format is supported (MP4, WebM recommended)
- Ensure the MEGA file is publicly accessible

### Twitter Card Not Showing
- Wait a few minutes after deployment for Twitter's cache to update
- Use Twitter's [Card Validator](https://cards-dev.twitter.com/validator) to test your URL
- Ensure all required meta tags are present in the page source

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests!