# Tender Automator

> **Transform raw tender PDFs/URLs into supervisor-ready summaries + compliance checklists with page-level traceability, full audit trails, and reviewer approval workflows.**

A complete, production-ready tender automation system built with Next.js 15, TypeScript, and PostgreSQL. Deployed on Vercel with comprehensive document processing, field extraction, and approval workflows.

## 🚀 Features

- **Document Processing**: Upload and process PDF/DOCX tender documents
- **AI Field Extraction**: Extract 5 core fields (scope, eligibility, evaluation criteria, submission mechanics, deadlines) with confidence scoring
- **Citation Tracking**: Page-level traceability for every extracted piece of information
- **Template Engine**: Handlebars-powered summary and checklist generation
- **YAML Pipeline System**: Configurable document processing workflows
- **Approval Workflow**: Multi-role approval system with audit trails
- **Real-time Processing**: Live pipeline execution with detailed logging
- **Role-based Access**: ANALYST, REVIEWER, and ADMIN roles with appropriate permissions

## 🏗️ Architecture

### Core Technologies
- **Frontend**: Next.js 15 with App Router, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL with 11 core entities
- **Storage**: Vercel Blob for document storage
- **Authentication**: NextAuth with email magic links
- **Deployment**: Vercel with optimized configuration

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Vercel account (for blob storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Safatreza/Tenders-automator.git
   cd Tenders-automator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Configure the following variables:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/tender_automator"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret-key"
   BLOB_READ_WRITE_TOKEN="vercel_blob_rw_token_here"
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 🧪 Testing

### System Validation
```bash
npm run validate:system
```

### Comprehensive Test Suite
```bash
npm run test:scenarios
```

### Type Checking and Linting
```bash
npm run validate
```

## 👥 Demo Users

- **Admin**: `admin@demo.com` - Full system access
- **Reviewer**: `reviewer@demo.com` - Review and approve tenders
- **Analyst**: `analyst@demo.com` - Create and manage tenders

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── ingest/            # File upload & URL ingestion
│   ├── tenders/           # Tender management
│   ├── runs/              # Pipeline monitoring
│   └── settings/          # System configuration
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Navigation & layout
│   └── tender/           # Tender-specific components
├── lib/                   # Core business logic
│   ├── auth.ts           # NextAuth configuration
│   ├── storage/          # S3/MinIO file storage
│   ├── parsers/          # PDF/DOCX parsing
│   ├── extractors/       # Field extraction engine
│   ├── pipeline/         # BullMQ pipeline system
│   └── templates/        # Handlebars template engine
└── types/                # TypeScript type definitions
```

## 🔧 Core Features

### Document Processing Pipeline
- **PDF/DOCX Parsing**: Extract text and metadata
- **Field Extraction**: Extract 5 MVP fields with mandatory citations
- **Summary Generation**: Create structured summaries using templates
- **Checklist Validation**: Verify compliance requirements

### Field Extraction (MVP)
1. **Scope**: Project scope and deliverables
2. **Eligibility**: Vendor qualification criteria
3. **Evaluation Criteria**: How proposals will be assessed
4. **Submission Mechanics**: How to submit proposals
5. **Deadline Submission**: Key dates and timelines

### Authentication & Authorization
- **NextAuth**: Magic link email authentication
- **Role-based Access**: ANALYST, REVIEWER, ADMIN roles
- **Audit Trail**: Complete activity logging

### Storage & Infrastructure
- **File Storage**: S3/MinIO with SHA-256 deduplication
- **Database**: PostgreSQL with Prisma ORM
- **Background Jobs**: BullMQ + Redis for pipeline processing
- **Templates**: Handlebars for customizable outputs

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js with email provider
- **File Storage**: S3/MinIO
- **Background Jobs**: BullMQ + Redis
- **Document Processing**: pdf-parse, mammoth
- **Validation**: Zod schemas
- **Templates**: Handlebars

## 📋 Development Commands

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Database
npx prisma studio       # Open database browser
npx prisma db push      # Push schema changes
npx prisma db seed      # Seed demo data
npx prisma generate     # Generate Prisma client

# Code Quality
npm run lint           # ESLint
npm run type-check     # TypeScript checking
```

## 🔒 Security Features

- **Citation Enforcement**: All extracted fields must have citations
- **File Deduplication**: SHA-256 hash verification
- **Role-based Permissions**: Granular access control
- **Audit Trail**: Complete activity logging
- **Input Validation**: Zod schema validation
- **Secure File Upload**: Type and size validation

## 🎯 Demo Scenarios

### 1. Document Upload Flow
1. Navigate to `/ingest`
2. Upload PDF/DOCX files or enter URLs
3. Select pipeline (`phase1-mvp`)
4. Monitor processing in `/runs`
5. Review results in `/tenders`

### 2. Approval Workflow
1. Analyst uploads and processes documents
2. System extracts fields and generates summaries
3. Reviewer checks compliance and citations
4. Reviewer approves/rejects tender
5. Audit trail tracks all actions

### 3. Template Customization
1. Admin accesses `/settings`
2. Edit summary/checklist templates
3. Configure pipeline steps
4. Test with new documents

## 🚢 Deployment

### Vercel Deployment
```bash
# Build and deploy to Vercel
vercel --prod

# Environment variables required:
# - DATABASE_URL
# - NEXTAUTH_SECRET
# - NEXTAUTH_URL
# - S3_* variables
# - REDIS_URL
```

### Docker Deployment
```bash
# Build Docker image
docker build -t tender-automator .

# Run with docker-compose
docker-compose up -d
```

## 📊 Monitoring & Logging

- **Pipeline Runs**: Real-time status in `/runs`
- **Audit Logs**: Complete activity history
- **Error Tracking**: Detailed error messages with citations
- **Performance Metrics**: Processing times and success rates

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: https://github.com/Safatreza/Tenders-automator/issues
- **Documentation**: See `/docs` directory for detailed guides
- **Demo**: https://tender-automator.vercel.app

---

**Built with ❤️ for government procurement transparency**
