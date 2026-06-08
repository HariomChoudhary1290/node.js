# Secure Node.js DevSecOps CI/CD Pipeline

## Project Overview

This project demonstrates the implementation of a secure DevSecOps CI/CD pipeline for a Node.js application. The objective was to integrate security controls at multiple stages of the software delivery lifecycle and automate the build, scan, and deployment process.

The pipeline includes source code security scanning, dependency vulnerability assessment, container image scanning, Docker image management, private container registry integration, and GitHub Actions automation using a Self-Hosted Runner.

---

# Project Architecture

Developer
→ GitHub Repository
→ GitHub Actions Pipeline
→ GitLeaks Scan
→ Semgrep Scan
→ NPM Audit
→ Docker Build
→ Trivy Container Scan
→ Docker Image Tagging
→ Private Docker Registry
→ Deployment Environment

---

# Technologies Used

* Node.js
* Docker
* GitHub Actions
* GitLeaks
* Semgrep
* NPM Audit
* Trivy
* Azure Virtual Machine
* Private Docker Registry
* Self-Hosted GitHub Runner
* Linux

---

# CI/CD Pipeline Workflow

## 1. Source Code Checkout

The latest code is pulled from the GitHub repository whenever changes are pushed to the main branch.

## 2. GitLeaks Secret Scanning

GitLeaks scans the source code for:

* Hardcoded passwords
* API Keys
* Tokens
* Secrets
* Credentials

Purpose:

Prevent accidental secret leakage into source code repositories.

---

## 3. Semgrep Static Application Security Testing (SAST)

Semgrep performs static code analysis to identify:

* Insecure coding patterns
* Security misconfigurations
* Potential vulnerabilities
* OWASP-related issues

Purpose:

Detect security issues during development before deployment.

---

## 4. Dependency Security Scan (NPM Audit)

NPM Audit scans application dependencies for known vulnerabilities.

Purpose:

Identify vulnerable third-party packages and outdated libraries.

---

## 5. Docker Image Build

Application is containerized using Docker.

Command:

docker build -t secure-nodejs-app:v1 .

Purpose:

Create a portable and reproducible deployment artifact.

---

## 6. Trivy Container Image Scan

Trivy scans the Docker image for:

* Critical vulnerabilities
* High vulnerabilities
* Medium vulnerabilities
* OS package vulnerabilities
* Library vulnerabilities

Purpose:

Ensure only secure container images are deployed.

---

## 7. Docker Image Tagging

The image is tagged before pushing to the private registry.

Command:

docker tag secure-nodejs-app:v1 <PRIVATE_REGISTRY_IP>:5000/nodejs-app:v1

---

## 8. Docker Image Push

The image is pushed to a private Docker Registry.

Command:

docker push <PRIVATE_REGISTRY_IP>:5000/nodejs-app:v1

Purpose:

Maintain an internal repository for application images.

---

# Self-Hosted GitHub Runner

A Self-Hosted Runner was configured on the Azure Virtual Machine.

Reason:

The private Docker Registry was hosted on the same infrastructure and required direct access from the CI/CD pipeline.

Benefits:

* Faster execution
* Full infrastructure control
* Direct registry access
* Reduced external dependency

---

# Vulnerabilities Identified During Testing

## 1. Vulnerable NPM Packages

Issue:

Application dependencies contained known security vulnerabilities.

Detection Tool:

NPM Audit

Fix:

* Updated vulnerable packages
* Installed latest secure versions
* Re-ran NPM Audit to validate fixes

Result:

Dependency vulnerabilities reduced significantly.

---

## 2. Container Image Vulnerabilities

Issue:

Base Docker image contained vulnerable packages.

Detection Tool:

Trivy

Fix:

* Updated base image versions
* Removed unnecessary packages
* Rebuilt Docker image
* Re-scanned image using Trivy

Result:

Critical vulnerabilities reduced and image security improved.

---

## 3. Potential Secret Exposure

Issue:

Risk of hardcoded secrets within source code.

Detection Tool:

GitLeaks

Fix:

* Removed hardcoded secrets
* Replaced with environment variables
* Implemented secure secret handling

Result:

No exposed secrets detected after remediation.

---

# Challenges Faced and Resolutions

## Challenge 1: Docker Registry Push Failure

Issue:

GitHub Actions pipeline failed while pushing Docker images to the Private Registry.

Error:

http: server gave HTTP response to HTTPS client

Root Cause:

GitHub Hosted Runner attempted HTTPS communication while the Private Docker Registry was configured for HTTP.

Resolution:

* Investigated registry connectivity
* Verified registry accessibility using curl
* Validated Docker image push from Azure VM
* Implemented GitHub Self-Hosted Runner on Azure VM

Result:

Docker image push completed successfully.

---

## Challenge 2: Private Registry Connectivity Validation

Issue:

Needed to verify registry health and accessibility.

Resolution:

Executed:

curl http://localhost:5000/v2/

and

curl http://<REGISTRY_IP>:5000/v2/

Expected Response:

{}

Result:

Registry confirmed operational.

---

## Challenge 3: GitHub Runner Configuration

Issue:

Hosted runner could not communicate properly with internal infrastructure.

Resolution:

* Created Self-Hosted Runner
* Connected Azure VM to GitHub Actions
* Updated workflow:

runs-on: self-hosted

Result:

Pipeline execution shifted successfully to Azure VM.

---

# Security Best Practices Implemented

* Automated secret scanning
* Static code analysis
* Dependency vulnerability scanning
* Container image vulnerability scanning
* Private container registry usage
* Self-hosted execution environment
* Continuous security validation in CI/CD

---

# Future Improvements

* SonarQube Integration
* OWASP Dependency Check
* Docker Content Trust
* TLS-enabled Private Registry
* Kubernetes Deployment
* Prometheus Monitoring
* Grafana Dashboards
* Infrastructure as Code using Terraform

---

# Project Outcome

Successfully implemented a DevSecOps CI/CD pipeline with integrated security scanning, private container registry, automated Docker image management, and GitHub Actions automation using a Self-Hosted Runner.

The solution demonstrates secure software delivery practices and aligns with modern DevSecOps principles used in production environments.

---

# Created by

Hariom Choudhary

DevOps Engineer
