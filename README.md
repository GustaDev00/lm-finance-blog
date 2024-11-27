This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Step 1: Set Up Environment Variables

Create a `.env.production` file in the root of your project and add your production token and domain:

```env
NEXT_PUBLIC_API_TOKEN=your_api_token
NEXT_PUBLIC_DOMAIN=your_production_domain
```

### Step 2: Update Theme Colors

Open the theme configuration file (e.g., `theme.js` or `styles/theme.js`) and update the primary color, text colors, and description colors as needed:

```javascript
const theme = {
  colors: {
    primary: '#yourPrimaryColor',
    text: '#yourTextColor',
    description: '#yourDescriptionColor',
    // Add other color updates here
  },
  // Other theme configurations
};

export default theme;
```

### Step 3: Update Logo

Replace the existing logo in the `public/imgs` directory with your new logo. Ensure the new logo has the same filename as the old one. Then, check the logo's appearance on both desktop and mobile to ensure it displays correctly and is appropriately sized.