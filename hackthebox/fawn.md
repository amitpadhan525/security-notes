# Fawn - HackTheBox Writeup 🦌

## 🚩 Room Information
- **Platform:** [HackTheBox](https://app.hackthebox.com/)
- **Track:** Starting Point - Tier 0
- **Difficulty:** Very Easy
- **Category:** Network Services / Anonymous FTP
- **Status:** ✅ Completed

---

## 🎓 Learning Objectives
- Enumerating file transfer services (**FTP**).
- Identifying misconfigured anonymous authentication on `vsftpd`.
- Downloading remote files via the FTP interactive shell (`get`).

---

## 🧠 Knowledge Required
- Basic FTP command syntax (`ls`, `get`, `bye`).
- Port scanning with `nmap`.

---

## 🔍 Step-by-Step Walkthrough

### 1. Port Enumeration
Scan the target host for open ports:
```bash
nmap -sV -sC <TARGET_IP>
```
* **Discovered Open Port:** `21/tcp` running `vsftpd 3.0.3`.
* **Nmap Script Output:** `ftp-anon: Anonymous FTP login allowed`.

### 2. Service Exploitation
Connect to the target using the command-line FTP client:
```bash
ftp <TARGET_IP>
```
- **Name:** `anonymous`
- **Password:** *(Leave blank or hit Enter)*

### 3. File Retrieval
List available files in the current working directory:
```ftp
ftp> ls
```
Output displays `flag.txt`. Download the flag to the local machine:
```ftp
ftp> get flag.txt
ftp> bye
```

Read the flag locally:
```bash
cat flag.txt
```

---

## 🛡️ Remediation & Key Takeaways
- **Disable Anonymous Logins:** Configure FTP servers (e.g., in `/etc/vsftpd.conf`) with `anonymous_enable=NO`.
- **Restrict File Permissions:** Ensure sensitive business or system files are not stored in publicly readable FTP directories.

---
*Based on HackTheBox content. Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
