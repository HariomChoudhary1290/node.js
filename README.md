# Secure CI/CD Pipeline - Node.js

## Project Overview

This project demonstrates a Secure CI/CD Pipeline using Node.js, Docker, GitHub Actions, GitLeaks, Semgrep, NPM Audit, and Trivy.

## Technology Stack

* Node.js
* Express.js
* Docker
* GitHub Actions
* GitLeaks
* Semgrep
* NPM Audit
* Trivy
* Nginx Reverse Proxy
* MongoDB

## Security Scans

### GitLeaks

Scans source code for exposed secrets and credentials.

### Semgrep

Performs Static Application Security Testing (SAST) and Infrastructure as Code scanning.

### NPM Audit

Scans project dependencies for known vulnerabilities.

### Trivy

Scans Docker images for security vulnerabilities.

## CI/CD Flow

1. Developer pushes code to GitHub Repository
2. GitHub Actions pipeline triggers
3. GitLeaks scan runs
4. Semgrep scan runs
5. NPM Audit runs
6. Docker image is built
7. Trivy image scan runs
8. Reports are generated
9. Docker image is pushed to Private Registry
10. Production server pulls Docker image
11. Nginx forwards requests to Node.js container
12. Node.js application communicates with MongoDB
13. Users access the application

## Application Endpoint

http://localhost:3000

## Author

Hariom Choudhary
