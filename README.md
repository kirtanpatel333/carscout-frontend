# CarScout Frontend

CarScout Frontend is the React single-page app for the CarScout marketplace. It serves buyers, sellers, and admins with a role-aware UI, shared layouts, and a service-driven API layer.

## Stack

- React 19
- Vite 7
- React Router
- Tailwind CSS
- Material UI
- Axios
- Framer Motion

## Features

- Buyer discovery, car details, compare views, wishlist, booking, and purchase flows
- Seller listing and management screens
- Admin dashboards and moderation views
- Notification context and reusable hooks
- Responsive layouts for desktop and mobile

## Project Structure

```text
src/
  components/
    admin/
    buyer/
    customer/
    notifications/
    seller/
  config/
  context/
  hooks/
  layouts/
  pages/
  routes/
  services/
  utils/
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Configuration

- API base URL and client-side defaults are defined in `src/config/appConfig.js`.
- The frontend currently points to the local backend during development.
- Update the API URL before deploying to Vercel.

## Notes

- Keep API calls inside `src/services`.
- Preserve role-based navigation and route guards.
- Run the production build before shipping UI changes.
