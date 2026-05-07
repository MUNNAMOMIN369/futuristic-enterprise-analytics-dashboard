# Deployment Guide

## Vercel Deployment

This project is optimized for deployment on **Vercel**, the frontend platform built by the creators of Next.js.

### Automatic Deployment (Recommended)

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Select this repository (`futuristic-enterprise-analytics-dashboard`)

2. **Configure Project**:
   - Framework: Vite (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

3. **Add Environment Variables** (if needed):
   - Go to Project Settings → Environment Variables
   - Add any variables you defined in `.env.example`

4. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy your project
   - Your site will be live at `<project>.vercel.app`

### Manual Deployment

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Production Deployment**:
```bash
vercel --prod
```

### Continuous Deployment

Every push to the `main` branch will automatically trigger a new deployment on Vercel.

- Pushes to other branches create preview deployments
- Pull requests automatically generate preview URLs
- Merge to `main` for production deployment

### Environment Variables on Vercel

1. Go to your project in Vercel dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables for different environments:
   - **Production**: Variables for production environment
   - **Preview**: Variables for preview deployments
   - **Development**: Variables for local development

### Build Optimization

The `vercel.json` configuration includes:
- **Output Directory**: `dist/` (Vite build output)
- **Build Command**: `npm run build`
- **Caching**: Configured for optimal performance
- **Headers**: Cache control headers for static assets

### Troubleshooting

#### Build Fails

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Run `npm run build` locally to test

#### Environment Variables Not Loading

1. Verify variables are added to Vercel project settings
2. Use `VITE_` prefix for client-side variables in Vite
3. Restart the deployment after adding variables

#### Static Assets Not Loading

1. Ensure build completes successfully
2. Check that output directory is set to `dist`
3. Verify file paths use absolute paths from `src/`

### Performance Optimization

- ✅ Automatic minification
- ✅ Image optimization
- ✅ Code splitting with Vite
- ✅ Static asset caching
- ✅ Gzip compression

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Analytics & Monitoring

Vercel provides built-in analytics:
- Real-time metrics
- Performance insights
- Error tracking
- Custom events (with Vercel Analytics)

### Rollback

To rollback to a previous deployment:
1. Go to Deployments tab
2. Find the desired deployment
3. Click "Promote to Production"

---

For more information, visit the [Vercel Documentation](https://vercel.com/docs).
