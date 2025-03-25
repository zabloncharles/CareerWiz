#!/bin/bash

# Build the project
npm run build

# Move to the build directory
cd dist

# Create a Vercel configuration if deploying to Vercel
echo '{
  "version": 2,
  "builds": [
    {
      "src": "dist/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}' > vercel.json 