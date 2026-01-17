# CA Monk - Blog Application Assignment

Welcome to the CA Monk Blog Application! This is a modern, responsive React application featuring state management, theming, and UI component integration.

## Features

The CA Monk Blog Application includes the following features:

### 1. Responsive Design
- Fully responsive layout for mobile, tablet, and desktop screens  
- Blog list and blog detail views adapt seamlessly to different screen sizes  
- Implemented using Tailwind CSS responsive utilities  

### 2. Dark & Light Theme
- Toggle between dark and light mode for better accessibility and user comfort  
- Theme preference is maintained across pages  
- Smooth theme transitions using Tailwind CSS and custom theming  

### 3. Blog Management
- **View All Blogs:** Displays all blogs with category, title, and short description  
- **View Blog Details:** Click on a blog to view full content along with the cover image  
- **Create a New Blog:** Form to create a new blog with automatic update of the blog list  

### 4. State Management & Data Fetching
- Uses **TanStack Query** for efficient server state management  
- Built-in caching and automatic query invalidation after blog creation  
- Handles loading states using skeletons and error states with user-friendly messages  

### 5. UI Components
- Built using **shadcn/ui** components for consistency and reusability  
- Components include `Card`, `Button`, `Input`, and more  
- Clean, modern, and minimal UI design  

### 6. User Experience Enhancements
- Smooth loading indicators for better feedback  
- Proper error handling with meaningful messages  
- Optimized layout and typography for improved readability  
andling
-Easy-to-read typography and spacing
-Dark/light theme improves accessibility and reduces eye strain

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server (Backend API)**
   ```bash
   npm run server
   ```
   The API will run on `http://localhost:3001`

4. **Start the Development Server (in a new terminal)**
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173`


