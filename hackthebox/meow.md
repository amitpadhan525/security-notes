# Meow - HackTheBox Writeup 🐱

## 🚩 Room Information
- **Platform:** [HackTheBox](https://app.hackthebox.com/)
- **Track:** Starting Point - Tier 0
- **Difficulty:** Very Easy
- **Category:** Network Services / Telnet
- **Status:** ✅ Completed

---

## 🎓 Learning Objectives
- Understanding unencrypted network protocol risks (**Telnet**).
- Performing port enumeration with **Nmap**.
- Connecting to remote services using standard CLI clients (`telnet`).
- Identifying weak or absent credential policies on administrative accounts (`root`).

---

## 🧠 Knowledge Required
- Basic Linux terminal navigation.
- Fundamental networking concepts (IP addresses, TCP ports).
- Usage of `nmap` and `telnet`.

---

## 🔍 Step-by-Step Walkthrough

### 1. Port Enumeration
Scan the target IP address to identify active services:
```bash
nmap -sV <TARGET_IP>
```
* **Discovered Open Port:** `23/tcp` running `telnet` (Linux telnetd).

### 2. Service Analysis
Telnet is an older, unencrypted remote terminal protocol. Unlike SSH, it transmits data in plaintext and often relies on basic system account logins.

### 3. Exploitation & Access
Connect to the host over port 23:
```bash
telnet <TARGET_IP>
```
When prompted for a login username:
- **Username:** `root`
- **Password:** *(None required - press Enter)*

### 4. Retrieving the Flag
Once authenticated with root privileges:
```bash
ls -la
cat flag.txt
```

---

## 🛡️ Remediation & Key Takeaways
- **Disable Telnet:** Replace legacy Telnet services with secure, encrypted SSH (`sshd`).
- **Enforce Password Policies:** Ensure standard accounts (especially `root`) cannot authenticate without strong credentials or key-based authentication.

---
*Based on HackTheBox content. Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
