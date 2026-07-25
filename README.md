# Security Notes & CTF Writeups 🛡️

Welcome to my personal cybersecurity repository. This space is dedicated to documenting my learning journey, CTF (Capture The Flag) writeups, and security fundamental notes across platforms like **OverTheWire**, **TryHackMe**, and **HackTheBox**.

---

## 📂 Repository Structure

The repository is organized into directories representing different platforms and topics:

```text
.
├── hackthebox/             # HackTheBox machine writeups & Starting Point walkthroughs
├── overthewire/
│   └── bandit/             # OverTheWire Bandit wargame level solutions (0 to 15)
└── tryhackme/              # TryHackMe room writeups & security concept notes
```

---

## 🎮 OverTheWire - Bandit

**Bandit** is a Linux-focused wargame by [OverTheWire](https://overthewire.org/wargames/bandit/), perfect for learning the command line and basic Linux security.

* **Levels Documented:** 0 to 15
* **Key Skills Covered:** SSH, finding files, decoding base64, ROT13, sorting/filtering data, port scanning, SSL/TLS connections.
* **Writeups Path:** [`overthewire/bandit/`](file:///home/amit/github/security-notes/overthewire/bandit)

| Level | Goal Summary | Key Commands | Link |
|:---:|---|---|---|
| **0 → 1** | Read home directory password file | `ssh`, `ls`, `cat` | [Bandit 0](file:///home/amit/github/security-notes/overthewire/bandit/bandit0.md) |
| **1 → 2** | Read password from dashed filename `-` | `cat ./-` | [Bandit 1](file:///home/amit/github/security-notes/overthewire/bandit/bandit1.md) |
| **2 → 3** | Read password from file with spaces in name | `cat "spaces in this filename"` | [Bandit 2](file:///home/amit/github/security-notes/overthewire/bandit/bandit2.md) |
| **3 → 4** | Find hidden files in inhere directory | `ls -la` | [Bandit 3](file:///home/amit/github/security-notes/overthewire/bandit/bandit3.md) |
| **4 → 5** | Find human-readable file | `file` | [Bandit 4](file:///home/amit/github/security-notes/overthewire/bandit/bandit4.md) |
| **5 → 6** | Search files by size and properties | `find` | [Bandit 5](file:///home/amit/github/security-notes/overthewire/bandit/bandit5.md) |
| **6 → 7** | Find file owned by user and group | `find / -user bandit7 -group bandit6` | [Bandit 6](file:///home/amit/github/security-notes/overthewire/bandit/bandit6.md) |
| **7 → 8** | Find line in a file next to a specific word | `grep` | [Bandit 7](file:///home/amit/github/security-notes/overthewire/bandit/bandit7.md) |
| **8 → 9** | Find unique line in a file | `sort`, `uniq -u` | [Bandit 8](file:///home/amit/github/security-notes/overthewire/bandit/bandit8.md) |
| **9 → 10** | Find human-readable string in binary file | `strings` | [Bandit 9](file:///home/amit/github/security-notes/overthewire/bandit/bandit9.md) |
| **10 → 11** | Decode Base64 encoded file | `base64` | [Bandit 10](file:///home/amit/github/security-notes/overthewire/bandit/bandit10.md) |
| **11 → 12** | Decode ROT13 cipher | `tr` | [Bandit 11](file:///home/amit/github/security-notes/overthewire/bandit/bandit11.md) |
| **12 → 13** | Reverse multiple compressions (gzip/bzip2/tar) | `xxd`, `gzip`, `bzip2`, `tar` | [Bandit 12](file:///home/amit/github/security-notes/overthewire/bandit/bandit12.md) |
| **13 → 14** | Submit private SSH key to get next password | `ssh -i` | [Bandit 13](file:///home/amit/github/security-notes/overthewire/bandit/bandit13.md) |
| **14 → 15** | Send password to local port 30000 | `nc` (netcat) | [Bandit 14](file:///home/amit/github/security-notes/overthewire/bandit/bandit14.md) |
| **15 → 16** | Send password to local SSL port 30001 | `openssl s_client` | [Bandit 15](file:///home/amit/github/security-notes/overthewire/bandit/bandit15.md) |

---

## 🚩 TryHackMe

[TryHackMe](https://tryhackme.com/) is a hands-on cybersecurity platform. This directory contains writeups for completed rooms, study templates, and cheat-sheets on security principles.

* **Detailed Writeups Index:** [`tryhackme/README.md`](file:///home/amit/github/security-notes/tryhackme/README.md)
* **Writeups Path:** [`tryhackme/`](file:///home/amit/github/security-notes/tryhackme)

### 🏆 Featured Walkthroughs
* **[Pickle Rick](file:///home/amit/github/security-notes/tryhackme/picklerick.md)** - A fun Rick and Morty themed web exploitation room covering dirb/gobuster, web directory traversal, and command injection.
* **[RootMe](file:///home/amit/github/security-notes/tryhackme/r00tme.md)** - A web exploitation and privilege escalation room involving file upload bypass (PHP bypass) and SUID file exploitation.
* **[Basic Pentesting](file:///home/amit/github/security-notes/tryhackme/basicpentestingjt.md)** - A basic pentesting room covering port enumeration, web scanning, brute-forcing credentials, and SSH key cracking.

### 📚 Fundamentals Covered
* **Networking:** [Intro to Networking](file:///home/amit/github/security-notes/tryhackme/introductorynetworking.md), [OSI Model](file:///home/amit/github/security-notes/tryhackme/osimodel.md), [DNS in Detail](file:///home/amit/github/security-notes/tryhackme/dnsindetail.md), [HTTP in Detail](file:///home/amit/github/security-notes/tryhackme/httpindetail.md), [Packets & Frames](file:///home/amit/github/security-notes/tryhackme/packetsandframes.md).
* **Linux & Windows:** [Linux CLI Basics](file:///home/amit/github/security-notes/tryhackme/linuxclibasics.md), [Linux Fundamentals](file:///home/amit/github/security-notes/tryhackme/linuxfundamentalspart1.md), [Windows Basics](file:///home/amit/github/security-notes/tryhackme/windowsbasics.md).
* **Tools:** [Nmap (Network Mapping)](file:///home/amit/github/security-notes/tryhackme/nmap.md), [Nmap Host Discovery](file:///home/amit/github/security-notes/tryhackme/nmaplivehostdiscovery.md), [OpenVPN](file:///home/amit/github/security-notes/tryhackme/openvpn.md).
* **Concepts:** [Cyber Kill Chain](file:///home/amit/github/security-notes/tryhackme/cyberkillchain.md), [Unified Kill Chain](file:///home/amit/github/security-notes/tryhackme/unifiedkillchain.md), [Pyramid of Pain](file:///home/amit/github/security-notes/tryhackme/pyramidofpain.md), [CIA Triad](file:///home/amit/github/security-notes/tryhackme/theciatriad.md).

---

## 📦 HackTheBox

[HackTheBox](https://app.hackthebox.com/) provides hands-on cybersecurity labs and vulnerable virtual machines.

* **HTB Profile:** [Amit Padhan on HackTheBox](https://profile.hackthebox.com/profile/019c3941-83d7-70be-9be8-8f006c7a93f9)
* **Detailed Writeups Index:** [`hackthebox/README.md`](file:///home/amit/github/security-notes/hackthebox/README.md)
* **Writeups Path:** [`hackthebox/`](file:///home/amit/github/security-notes/hackthebox)

### 🏆 Completed Starting Point (Tier 0) Rooms
| Room Name | Focus / Vulnerability | Protocol / Service | Writeup Link |
|-----------|-----------------------|-------------------|--------------|
| **Meow** | Unauthenticated Root Login | Port 23 (Telnet) | [Meow](file:///home/amit/github/security-notes/hackthebox/meow.md) |
| **Fawn** | Anonymous File Transfer Access | Port 21 (FTP / vsftpd) | [Fawn](file:///home/amit/github/security-notes/hackthebox/fawn.md) |
| **Dancing** | SMB Guest Share Enumeration | Port 445 (SMB / smbclient) | [Dancing](file:///home/amit/github/security-notes/hackthebox/dancing.md) |
| **Appointment** | Web SQL Injection Bypass | Port 80 (HTTP / SQLi) | [Appointment](file:///home/amit/github/security-notes/hackthebox/appointment.md) |
| **Sequel** | Remote Database Access | Port 3306 (MariaDB / MySQL) | [Sequel](file:///home/amit/github/security-notes/hackthebox/sequel.md) |

---

## ⚙️ How to Use This Repository

Feel free to browse through the directories:
1. Use markdown-supported editors/viewers (like GitHub, VS Code, or Obsidian) to view notes with proper syntax highlighting.
2. Follow the step-by-step guides for CTFs or refer to the cheat-sheets for conceptual review.

*Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
