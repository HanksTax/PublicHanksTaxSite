# Hanks Tax Service - Frontend/Backend Integration Contracts

## Overview
This document outlines the integration plan for converting the current frontend-only implementation to a full-stack application with backend API support.

## Current Mock Data Usage
The frontend currently uses mock data from `/app/frontend/src/data/mockData.js` for:

### Services Data
- Service cards (Maximize Refunds, Don't Stress Over Filing, Simplify Your Taxes)
- Service features and descriptions
- Service icons and gradients

### Testimonials
- Customer reviews and ratings
- Customer names and locations
- Star ratings display

### Business Information
- Office locations and hours
- Contact information
- Statistics (years of experience, clients served)
- Why Choose Us reasons

## API Contracts

### 1. Contact/Lead Submission API
**Endpoint:** `POST /api/contacts`
**Purpose:** Capture potential client inquiries

**Request Body:**
```json
{
  "name": "string",
  "email": "string", 
  "phone": "string",
  "message": "string",
  "service_interest": "string",
  "source": "website"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact submitted successfully",
  "contact_id": "uuid"
}
```

### 2. Services Information API
**Endpoint:** `GET /api/services`
**Purpose:** Retrieve service offerings

**Response:**
```json
{
  "services": [
    {
      "id": "uuid",
      "title": "string",
      "description": "string", 
      "features": ["string"],
      "icon": "string",
      "active": true
    }
  ]
}
```

### 3. Testimonials API
**Endpoint:** `GET /api/testimonials`
**Purpose:** Retrieve client testimonials

**Response:**
```json
{
  "testimonials": [
    {
      "id": "uuid",
      "name": "string",
      "location": "string", 
      "review": "string",
      "rating": 5,
      "featured": true,
      "date_created": "datetime"
    }
  ]
}
```

### 4. Business Info API
**Endpoint:** `GET /api/business-info`
**Purpose:** Retrieve business details

**Response:**
```json
{
  "company_name": "Hanks Tax Service",
  "phone": "(808) 853-1170",
  "offices": [
    {
      "name": "string",
      "address": "string",
      "status": "open|closed",
      "hours": "string"
    }
  ],
  "stats": {
    "years_experience": 38,
    "clients_served": "5000+",
    "satisfaction_rate": "99.8%"
  }
}
```

## Backend Implementation Plan

### Database Models
1. **Contact** - Store lead inquiries
2. **Service** - Manage service offerings  
3. **Testimonial** - Manage customer reviews
4. **BusinessInfo** - Store company information

### Key Features to Implement
1. Contact form submission with email notifications
2. Admin panel for managing testimonials and services
3. Analytics for tracking website inquiries
4. Email integration for automated responses

## Frontend Integration Changes
1. Replace `mockData.js` imports with API calls
2. Add loading states for API requests
3. Implement error handling for failed requests
4. Add form validation and submission handling
5. Create admin interface for content management

## Post-Integration Testing
1. Test all API endpoints
2. Verify form submissions work correctly  
3. Check responsive design still functions
4. Validate error handling scenarios
5. Test admin functionality