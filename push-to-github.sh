#!/bin/bash
cd /home/runner/workspace

# Remove the old remote
git remote remove origin 2>/dev/null || true

# Add the correct GitHub remote
git remote add origin https://github.com/nameer101280/otonex-company-website.git

# Rename branch to main if needed
git branch -M main 2>/dev/null || true

# Display status
echo "Git remotes:"
git remote -v
echo ""
echo "Current branch:"
git branch
echo ""
echo "Recent commits:"
git log --oneline -5
echo ""
echo "Ready to push! Run: git push -u origin main"
