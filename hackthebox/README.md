# HackTheBox Writeups 📦

Welcome to my collection of HackTheBox (HTB) room writeups and challenge documentation. Below is a structured log of completed machines, starting point tiers, and penetration testing walkthroughs.

- **HTB Profile:** [Amit Padhan on HackTheBox](https://profile.hackthebox.com/profile/019c3941-83d7-70be-9be8-8f006c7a93f9)

---

## 🏆 Completed Rooms (Starting Point - Tier 0)

| Room Name | Category / Vector | Target Service / Tech | Status | Link |
|-----------|-------------------|-----------------------|--------|------|
| **Meow** | Telnet Authentication | Port 23 (Telnet / Root access) | ✅ Completed | [Meow](./meow.md) |
| **Fawn** | Anonymous FTP | Port 21 (FTP / vsftpd) | ✅ Completed | [Fawn](./fawn.md) |
| **Dancing** | SMB Share Enumeration | Port 445 (SMB / smbclient) | ✅ Completed | [Dancing](./dancing.md) |
| **Appointment** | Web SQL Injection | Port 80 (HTTP / SQLi Login Bypass) | ✅ Completed | [Appointment](./appointment.md) |
| **Sequel** | MariaDB/MySQL Access | Port 3306 (MySQL / Root Remote Access) | ✅ Completed | [Sequel](./sequel.md) |

---

## 🎓 Starting Point Tier 0 Overview

Tier 0 introduces fundamental network protocol analysis, basic service enumeration, and essential misconfiguration exploitation:
- **Telnet & FTP:** Unencrypted protocols, default accounts, and anonymous access.
- **SMB Shares:** Network drive enumeration without credentials using null sessions.
- **Web SQL Injection:** Bypassing web authentication mechanisms via raw SQL logic errors.
- **Database Services:** Interacting directly with exposed database management systems.

---
*Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
