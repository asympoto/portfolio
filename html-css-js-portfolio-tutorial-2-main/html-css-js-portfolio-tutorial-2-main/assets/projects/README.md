# Projects Management Guide

## How to Add Your Projects

### Step 1: Add Project Images
Store your project images (PNG, JPG, etc.) in this folder (`assets/projects/`).

**Example file names:**
- `project-1.png`
- `project-2.png`
- `portfolio-site.jpg`
- `ecommerce-app.png`

### Step 2: Update projects.json
Edit the `assets/projects.json` file to add your projects.

**Format:**
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Tech stack and brief description",
      "image": "./assets/projects/project-1.png",
      "githubLink": "https://github.com/yourprofile/project-repo",
      "liveLink": "https://project-deployed-link.com"
    }
  ]
}
```

### Example:
```json
{
  "projects": [
    {
      "id": 1,
      "title": "E-Commerce Platform",
      "description": "React, Node.js, MongoDB, Stripe, AWS",
      "image": "./assets/projects/ecommerce.png",
      "githubLink": "https://github.com/asympoto/ecommerce",
      "liveLink": "https://ecommerce-app.com"
    },
    {
      "id": 2,
      "title": "Real-Time Chat Application",
      "description": "React, Socket.io, Node.js, PostgreSQL",
      "image": "./assets/projects/chat-app.png",
      "githubLink": "https://github.com/asympoto/chat-app",
      "liveLink": "https://chat-app-live.com"
    },
    {
      "id": 3,
      "title": "Data Analytics Dashboard",
      "description": "React, D3.js, Python, Django, PostgreSQL",
      "image": "./assets/projects/dashboard.png",
      "githubLink": "https://github.com/asympoto/analytics-dashboard",
      "liveLink": "https://analytics-dashboard.com"
    }
  ]
}
```

### Fields to Update:
- **id**: Unique identifier for the project
- **title**: Project name/title
- **description**: Tech stack and brief description
- **image**: Path to the project screenshot/thumbnail
- **githubLink**: GitHub repository URL
- **liveLink**: Live deployed project URL (or "#" if not available)

## How It Works
1. All projects are stored in `assets/projects.json`
2. Project images go in the `assets/projects/` folder
3. When the page loads, it reads the JSON file
4. All projects are automatically displayed in the Projects section
5. Users can click "Github" to see the code and "Live Demo" to visit the deployed site

## Tips
- Keep project screenshots consistent in size and format
- Use PNG for better quality, or JPG for smaller file sizes
- Update image dimensions to 400x300px for best appearance
- Make sure GitHub and live links are correct
- Add projects in the order you want them displayed
- You can add as many projects as you want - they'll all display!
