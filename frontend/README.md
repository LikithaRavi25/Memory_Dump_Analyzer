# Memory Dump Analyzer

## Overview

Memory Dump Analyzer is a digital forensics application developed to analyze memory dump files and identify suspicious system activities. The project integrates the Volatility Framework with a Node.js backend, React frontend, and MongoDB Atlas database to automate memory forensic investigations.

The application enables users to upload memory dump files, extract system information, analyze running processes, detect hidden processes, calculate risk scores, and store analysis results for future investigation.

# Features

- Memory Dump Upload

- System Information Analysis

- Process Analysis

- Hidden Process Detection

- Risk Score Calculation

- MongoDB Atlas Integration

- React Dashboard

- Volatility Framework Integration

# Technology Stack

## Frontend

* React.js
* Axios
* CSS

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Digital Forensics

* Volatility 3 Framework
* WinPmem



# Modules

## 1. Memory Dump Upload

Allows users to upload memory dump files for forensic analysis.


## 2. System Information Analysis

Uses:

windows.info

Extracts:

* Kernel Information
* Architecture
* Memory Details
* Operating System Information


## 3. Process Analysis

Uses:

windows.pslist

Extracts:

* Active Processes
* Process IDs
* Parent Process IDs
* Creation Times


## 4. Hidden Process Detection

Uses:

windows.psscan

Compares process structures in memory and identifies hidden or suspicious processes.


## 5. Risk Scoring Engine

Detects suspicious processes such as:

* cmd.exe
* powershell.exe
* wmic.exe
* regsvr32.exe
* rundll32.exe

Calculates a risk score based on suspicious findings.


## 6. MongoDB Storage

Stores:

* Filename
* Active Processes
* Hidden Processes
* Risk Score
* Suspicious Processes
* Analysis Timestamp

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

```bash
cd memory-dump-analyzer
```


## Backend Setup

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create .env file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
node server.js
```


## Frontend Setup

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm start
```


# API Endpoints

## Upload Memory Dump

```http
POST /api/upload
```


## Process Analysis

```http
GET /api/analyze/:fileName
```

## System Information

```http
GET /api/system/:fileName
```

## Hidden Process Detection

```http
GET /api/hidden/:fileName
```

## Command Line Analysis

```http
GET /api/cmdline/:fileName
```

# Sample Output

```json
{
  "activeProcesses": 198,
  "scannedProcesses": 221,
  "riskScore": 10,
  "suspiciousProcesses": [
    {
      "name": "cmd.exe"
    }
  ]
}
```

# Results

The application successfully:

* Uploads memory dump files.
* Analyzes system information.
* Extracts active processes.
* Detects hidden processes.
* Calculates risk scores.
* Stores reports in MongoDB Atlas.

# Future Enhancements

* Malware Detection
* PDF Report Generation
* Real-Time Memory Monitoring
* Cloud Deployment
* Machine Learning Based Threat Detection
* Automated Incident Response

# Applications

* Digital Forensics
* Cybersecurity Investigations
* Incident Response
* Malware Analysis
* Security Auditing
* Memory Analysis Research

# Conclusion

The Memory Dump Analyzer provides an automated solution for memory forensic investigations. By integrating Volatility, React, Node.js, and MongoDB Atlas, the system simplifies the process of analyzing memory dumps, detecting suspicious activities, and supporting cybersecurity investigations.
