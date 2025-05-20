# Portfolio with JSON Server

This project uses JSON Server to provide a mock API for the portfolio data. This allows you to separate your data from your UI components, making your code more maintainable and easier to update.

## Setting Up JSON Server

### Prerequisites

- Node.js installed on your machine
- npm (comes with Node.js)

### Installation

1. Install JSON Server globally:

\`\`\`bash
npm install -g json-server
\`\`\`

2. Start the JSON Server:

\`\`\`bash
json-server --watch db.json --port 3001
\`\`\`

Alternatively, you can use the provided setup script:

\`\`\`bash
node setup-json-server.js
\`\`\`

### Accessing the API

Once the server is running, your API will be available at:

- http://localhost:3001

You can access different endpoints like:

- http://localhost:3001/profile
- http://localhost:3001/about
- http://localhost:3001/education
- http://localhost:3001/experience
- http://localhost:3001/skills
- http://localhost:3001/projects
- http://localhost:3001/blog
- http://localhost:3001/contact

## API Structure

The API is structured according to the sections of your portfolio:

- `/profile`: Basic information about you
- `/about`: Detailed information about your background
- `/education`: Your educational background
- `/experience`: Your work experience
- `/skills`: Your technical skills and technologies
- `/projects`: Your portfolio projects
- `/blog`: Your blog posts
- `/contact`: Your contact information

## Fallback Data

The application includes a fallback mechanism that uses static data when the JSON server is not available. This ensures your portfolio works even in environments where the API cannot be accessed, such as:

- Preview deployments
- Production environments without the JSON server
- When there are network issues

The fallback data is stored in `lib/staticData.ts` and matches the structure of the JSON server data.

## Modifying Data

To update your portfolio data, you can:

1. Edit the `db.json` file if you're using the JSON server locally
2. Edit the `lib/staticData.ts` file to update the fallback data

## Using with Next.js

In your Next.js application, you can fetch data from the JSON Server using the API utility functions in `lib/api.ts`. These functions handle the fetching logic and error handling for you.

Example:

\`\`\`typescript
import { getProjects } from '@/lib/api';

// In a React component
useEffect(() => {
  async function loadData() {
    try {
      const projects = await getProjects();
      // Use the projects data
    } catch (error) {
      // Handle error
    }
  }
  
  loadData();
}, []);
\`\`\`

## Production Deployment

For production, you would typically replace the JSON Server with a real backend API. However, you can also deploy JSON Server to a hosting service if you want to keep using it as your data source.
