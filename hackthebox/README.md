# HackTheBox Writeups 📦

My notes and writeups for HackTheBox (HTB) machines and Starting Point challenges.

- **HTB Profile:** [Amit Padhan](https://profile.hackthebox.com/profile/019c3941-83d7-70be-9be8-8f006c7a93f9)
- **Lab Setup:** [OpenVPN Setup & Usage Guide](./openvpn.md)

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

## 📌 Starting Point Tier 0 Notes

Tier 0 covers core service enumeration and basic misconfigurations:
- **Telnet & FTP:** Exposed plaintext protocols and anonymous logins.
- **SMB Shares:** Guest access and share enumeration.
- **Web SQL Injection:** Bypassing authentication with SQL logic errors.
- **Database Services:** Unauthenticated remote access to MySQL / MariaDB.
