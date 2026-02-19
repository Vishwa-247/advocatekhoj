#!/bin/bash

# Navigate to project directory
cd ~/advocatekhoj || exit

# Pull latest code
echo "Pulling latest changes..."
git pull origin main

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# Restart the application
# Assuming PM2 is used for process management
if command -v pm2 &> /dev/null
then
    echo "Restarting application with PM2..."
    pm2 restart advocatekhoj || pm2 start npm --name "advocatekhoj" -- start
else
    echo "PM2 not found. Restarting with npm start in background..."
    # This is a fallback; usually PM2 or systemd is preferred
    pkill -f "next-server"
    nohup npm start > output.log 2>&1 &
fi

echo "Deployment complete!"
