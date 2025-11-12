<div align="center">
  <img src="https://media.topfinanzas.com/images/kardtrust/kardtrust-logo-clear.png" alt="BudgetBee Logo" width="300">
  
  # BudgetBee - Next.js Project

[![GitHub Repository](https://img.shields.io/badge/GitHub-kardtrust-blue?logo=github)](https://github.com/juanjaragavi/budgetbee-next-next)

</div>

This is a Next.js 15+ project for BudgetBee, a financial services comparison
website for the United States market. It includes a blog, credit card comparison
tools, personal loan guides, and comprehensive financial services information.

## Repository

- **GitHub**:
  [https://github.com/juanjaragavi/budgetbee-next-next](https://github.com/juanjaragavi/budgetbee-next-next)
- **Website**: [https://budgetbeepro.com](https://budgetbeepro.com)

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/UI
- **Analytics**: Google Tag Manager + AdZep
- **Forms**: React Hook Form + Zod validation

## Getting Started

### Development

```bash
npm run dev      # Start development server on port 3007
npm run build    # Production build
npm run start    # Start production server on port 3007
npm run lint     # Run ESLint
npm run format   # Format all files with Prettier
npm run format:check # Check formatting without making changes
npm run format:md # Format all Markdown files
npm run format:md:check # Check Markdown formatting
```

### Environment Setup

1. Copy `.env.example` to `.env.local` (development) or `.env.production`
   (production)
2. Populate with actual API keys and values
3. Never commit sensitive files to the repository
4. On the server, environment files are stored in `/opt/app/` with strict
   permissions

**Required Environment Variables:**

- `GOOGLE_SERVICE_ACCOUNT_EMAIL` - Google Sheets integration
- `GOOGLE_PRIVATE_KEY` - Google Sheets authentication
- `GOOGLE_SHEET_ID` - Target spreadsheet
- `SENDGRID_API_KEY` - Email service
- `KIT_API_KEY` - Newsletter subscription service

## Deployment

Production deployment using PM2:

```bash
pm2 start ecosystem.config.js --env production
```

Or use the automated deployment script on the server:

```bash
sudo bash ./scripts/deploy_update.sh
```

## API Key Management

All API keys and sensitive information are managed through environment variables
and should never be hardcoded in the application code.

## Code Quality & Formatting

### Prettier Configuration

The project uses Prettier 3.6.2 with strict formatting rules for all files,
especially Markdown files. All Markdown files are formatted with:

- **Line Width**: 80 characters
- **Prose Wrap**: Always wrap at line width
- **Indentation**: 2 spaces
- **Line Endings**: LF (Unix-style)

See `docs/PRETTIER_MARKDOWN_RULES.md` for complete documentation.

### Running Prettier

```bash
# Format all files
npm run format

# Check formatting without changing files
npm run format:check

# Format only Markdown files
npm run format:md

# Check Markdown files only
npm run format:md:check
```

### Editor Configuration

VS Code settings are configured in `.vscode/settings.json` to:

- Format on save
- Use Prettier as default formatter
- Show 80-character ruler for Markdown
- Apply project Prettier configuration

Install the Prettier VS Code extension for automatic formatting.
