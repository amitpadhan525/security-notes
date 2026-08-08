# Cybersecurity Notes & CTF Writeups 🛡️

<p align="center">
  <img src="https://img.shields.io/badge/Writeups%20%26%20Notes-75%2B%20Completed-blueviolet?style=for-the-badge&logo=markdown" alt="Writeups Count" />
  <img src="https://img.shields.io/badge/OS-Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="OS Linux" />
  <img src="https://img.shields.io/badge/Platforms-OTW%20%7C%20THM%20%7C%20HTB-red?style=for-the-badge&logo=target" alt="Platforms" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License MIT" />
</p>

<p align="center">
  <a href="https://tryhackme.com/p/amitpadhan525">
    <img src="https://img.shields.io/badge/TryHackMe-amitpadhan525-212C42?style=for-the-badge&logo=tryhackme" alt="TryHackMe Profile" />
  </a>
  <a href="https://profile.hackthebox.com/profile/019c3941-83d7-70be-9be8-8f006c7a93f9">
    <img src="https://img.shields.io/badge/HackTheBox-amitpadhan525-9FEF00?style=for-the-badge&logo=hackthebox&logoColor=black" alt="HackTheBox Profile" />
  </a>
</p>

---

Welcome to my personal cybersecurity repository! This space serves as a central hub documenting my hands-on learning journey across **OverTheWire**, **TryHackMe**, and **HackTheBox**. It includes step-by-step CTF writeups, machine penetration testing notes, core networking fundamentals, and Linux security cheat sheets.

---

## 📌 Table of Contents

- [📊 Platform Overview & Progress](#-platform-overview--progress)
- [📂 Repository Structure](#-repository-structure)
- [🎮 OverTheWire - Bandit Wargame](#-overthewire---bandit-wargame)
- [🚩 TryHackMe - CTFs & Notes](#-tryhackme---ctfs--notes)
- [📦 HackTheBox - Labs & Starting Point](#-hackthebox---labs--starting-point)
- [🛠️ Essential Security Tools & Setup](#️-essential-security-tools--setup)
- [⚖️ Ethical Disclaimer](#️-ethical-disclaimer)

---

## 📊 Platform Overview & Progress

| Platform | Focus Area | Status / Progress | Main Index |
| :--- | :--- | :---: | :--- |
| **OverTheWire (Bandit)** | Linux CLI, Encryption, Protocols, SSH | `16 / 16 Levels` (Levels 0–15) | [`overthewire/bandit/`](overthewire/bandit) |
| **TryHackMe** | Web Exploitation, Networking, Defensive/Offensive | `58 Rooms & Notes` | [`tryhackme/README.md`](tryhackme/README.md) |
| **HackTheBox** | Starting Point Tier 0 (Telnet, FTP, SMB, SQLi, MariaDB) | `5 / 5 Labs Completed` | [`hackthebox/README.md`](hackthebox/README.md) |

---

## 📂 Repository Structure

```text
.
├── hackthebox/             # HackTheBox machine writeups & Starting Point Tier 0 labs
│   ├── README.md           # HTB index and progress summary
│   ├── meow.md             # Telnet unauthenticated access
│   ├── fawn.md             # FTP anonymous access
│   ├── dancing.md          # SMB guest share enumeration
│   ├── appointment.md      # Web SQL Injection bypass
│   └── sequel.md           # MariaDB remote database access
├── overthewire/
│   └── bandit/             # OverTheWire Bandit wargame level solutions (Levels 0 to 15)
└── tryhackme/              # TryHackMe room writeups, CTFs & fundamentals
    ├── README.md           # Detailed THM index
    ├── picklerick.md       # Web exploitation CTF
    ├── r00tme.md           # SUID privilege escalation CTF
    └── ...                 # 55+ additional topic notes & CTF guides
```

---

## 🎮 OverTheWire - Bandit Wargame

**Bandit** is a Linux-focused wargame by [OverTheWire](https://overthewire.org/wargames/bandit/), designed to master the Linux terminal, security fundamentals, file analysis, and network communication.

* **Progress:** `[████████████████████] 100%` (Levels 0–15 Completed)
* **Key Skills Covered:** SSH authentication, file searching, Base64/ROT13 decoding, multi-stage archive extraction, Netcat & SSL/TLS socket connections.
* **Directory Path:** [`overthewire/bandit/`](overthewire/bandit)

### 📋 Bandit Level Breakdown

| Level | Goal Summary | Primary Commands / Tools | Writeup Link |
| :---: | :--- | :--- | :---: |
| **0 → 1** | SSH connection & Read home directory password | `ssh`, `ls`, `cat` | [Bandit 0](overthewire/bandit/bandit0.md) |
| **1 → 2** | Read password from dashed filename `-` | `cat ./-` | [Bandit 1](overthewire/bandit/bandit1.md) |
| **2 → 3** | Read password from file with spaces in name | `cat "spaces in this filename"` | [Bandit 2](overthewire/bandit/bandit2.md) |
| **3 → 4** | Find hidden files inside `inhere` directory | `ls -la` | [Bandit 3](overthewire/bandit/bandit3.md) |
| **4 → 5** | Locate human-readable file among binaries | `file ./*` | [Bandit 4](overthewire/bandit/bandit4.md) |
| **5 → 6** | Search files by specific size, permissions & properties | `find . -type f -size 1033c` | [Bandit 5](overthewire/bandit/bandit5.md) |
| **6 → 7** | Find file across system by user and group ownership | `find / -user bandit7 -group bandit6` | [Bandit 6](overthewire/bandit/bandit6.md) |
| **7 → 8** | Search for password line next to a target keyword | `grep "millionth"` | [Bandit 7](overthewire/bandit/bandit7.md) |
| **8 → 9** | Find unique line occurring only once in a file | `sort`, `uniq -u` | [Bandit 8](overthewire/bandit/bandit8.md) |
| **9 → 10** | Extract human-readable text strings from binary file | `strings`, `grep` | [Bandit 9](overthewire/bandit/bandit9.md) |
| **10 → 11** | Decode Base64 encoded string | `base64 -d` | [Bandit 10](overthewire/bandit/bandit10.md) |
| **11 → 12** | Decrypt ROT13 Caesar cipher | `tr 'A-Za-z' 'N-ZA-Mn-za-m'` | [Bandit 11](overthewire/bandit/bandit11.md) |
| **12 → 13** | Decompress nested archives (Hex dump, Gzip, Bzip2, Tar) | `xxd`, `gzip`, `bzip2`, `tar` | [Bandit 12](overthewire/bandit/bandit12.md) |
| **13 → 14** | Authenticate over SSH using an RSA Private Key | `ssh -i bandit14.pkey` | [Bandit 13](overthewire/bandit/bandit13.md) |
| **14 → 15** | Submit current password to local network port 30000 | `nc localhost 30000` | [Bandit 14](overthewire/bandit/bandit14.md) |
| **15 → 16** | Submit password to local SSL/TLS encrypted port 30001 | `openssl s_client -connect` | [Bandit 15](overthewire/bandit/bandit15.md) |

---

## 🚩 TryHackMe - CTFs & Notes

[TryHackMe](https://tryhackme.com/) writeups and conceptual notes covering offensive penetration testing, incident response, network protocols, and Linux administration.

* **THM Profile:** [Amit Padhan (`amitpadhan525`)](https://tryhackme.com/p/amitpadhan525)
* **Lab Setup Guide:** [OpenVPN Setup](./tryhackme/openvpn.md)
* **Directory Index:** [`tryhackme/README.md`](tryhackme/README.md)

### 🏆 Featured CTF Walkthroughs

- 🥒 **[Pickle Rick](tryhackme/picklerick.md)** - Web exploitation covering `gobuster` directory brute-forcing, web inspection, command injection, and sudo privilege escalation.
- 💀 **[RootMe](tryhackme/r00tme.md)** - Web application vulnerability scanner, PHP file extension upload bypass (`.phtml`), reverse shell, and SUID permission exploitation.
- 🎯 **[Basic Pentesting](tryhackme/basicpentestingjt.md)** - Port scanning with Nmap, SMB share enumeration, hash cracking with John the Ripper, and SSH key brute-forcing.

### 📚 Categorized Notes Index (58 Topics)

<details>
<summary><b>🔥 CTFs & Practical Challenges</b> (Click to expand)</summary>

- [Pickle Rick](tryhackme/picklerick.md) - Rick & Morty themed web CTF
- [RootMe](tryhackme/r00tme.md) - Web shell & SUID exploitation
- [Basic Pentesting](tryhackme/basicpentestingjt.md) - Enumeration & SSH cracking
- [Bounty Hacker](tryhackme/bountyhacker.md) - FTP & Hydra password attack
- [Crack the Hash](tryhackme/crackthehash.md) - Hash identification & cracking
- [CyberHeroes](tryhackme/cyberheroes.md) - Web authentication bypass
- [Hack-For-Badge: The Game](tryhackme/hfb1thegame.md) - Interactive CTF challenge
- [Lofi](tryhackme/lofi.md) - Web LFI (Local File Inclusion) vulnerability
- [Neighbour](tryhackme/neighbour.md) - IDOR (Insecure Direct Object Reference)
- [Oracle 9](tryhackme/oracle9.md) - Web challenge walkthrough
</details>

<details>
<summary><b>🌐 Networking & Protocols</b> (Click to expand)</summary>

- [Introductory Networking](tryhackme/introductorynetworking.md) - IP addressing, Subnetting & Routing
- [OSI Model](tryhackme/osimodel.md) - 7 Layers of Network Communication
- [DNS in Detail](tryhackme/dnsindetail.md) - Domain Name Resolution & Record Types
- [HTTP in Detail](tryhackme/httpindetail.md) - Request methods, headers & status codes
- [Packets & Frames](tryhackme/packetsandframes.md) - Encapsulation & Packet structure
- [Client-Server Basics](tryhackme/client-serverbasics.md) - Architecture & Sockets
- [What is Networking?](tryhackme/whatisnetworking.md) - Core networking principles
- [Networking Concepts](tryhackme/networkingconcepts.md) - Topology & Protocols
- [Intro to LAN](tryhackme/introtolan.md) - Local Area Networks & Switches
- [Extending Your Network](tryhackme/extendingyournetwork.md) - Routers, Gateways & Port Forwarding
- [OpenVPN Setup](tryhackme/openvpn.md) - Tunneling & VPN Configuration
- [Cloud Computing Fundamentals](tryhackme/cloudcomputingfundamentals.md) - Cloud models (IaaS, PaaS, SaaS)
- [Intro to Containerisation](tryhackme/introtocontainerisation.md) - Docker & Container Isolation
- [Virtualisation Basics](tryhackme/virtualisationbasics.md) - Hypervisors & VMs
</details>

<details>
<summary><b>💻 Systems, OS & Architecture</b> (Click to expand)</summary>

- [Linux Fundamentals Part 1](tryhackme/linuxfundamentalspart1.md) - Essential commands & file navigation
- [Linux CLI Basics](tryhackme/linuxclibasics.md) - Terminal command line mastery
- [Windows Basics](tryhackme/windowsbasics.md) - Windows GUI, Services & Admin tools
- [Windows CLI Basics](tryhackme/windowsclibasics.md) - PowerShell & Command Prompt
- [Operating Systems Introduction](tryhackme/operatingsystemsintroduction.md) - Kernel, Processes & Memory
- [Operating System Security](tryhackme/operatingsystemsecurity.md) - Hardening & Permissions
- [Inside a Computer System](tryhackme/insideacomputersystem.md) - Hardware, CPU & RAM
- [Computer Types & Hardware](tryhackme/computertypes.md) - System architectures
- [x86 Architecture Overview](tryhackme/x86architectureoverview.md) - Registers, Stack & Assembly intro
- [Compiled vs Interpreted](tryhackme/compiled.md) - Binary execution models
</details>

<details>
<summary><b>🛡️ Security Concepts & Cyber Frameworks</b> (Click to expand)</summary>

- [Cyber Kill Chain](tryhackme/cyberkillchain.md) - Lockheed Martin 7-stage attack framework
- [Unified Kill Chain](tryhackme/unifiedkillchain.md) - Modern tactical attack lifecycle
- [Pyramid of Pain](tryhackme/pyramidofpain.md) - Threat indicators & detection engineering
- [The CIA Triad](tryhackme/theciatriad.md) - Confidentiality, Integrity & Availability
- [Defensive Security Intro](tryhackme/defensivesecurityintro.md) - SOC, SIEM & Incident Response
- [Offensive Security Intro](tryhackme/offensivesecurityintro.md) - Penetration Testing & Ethical Hacking
- [Junior Security Analyst Intro](tryhackme/juniorsecurityanalystintro.md) - Analyst workflows & triage
- [Become a Defender](tryhackme/becomeadefender.md) - Blue Team career pathway
- [Become a Hacker](tryhackme/becomeahacker.md) - Red Team career pathway
- [Careers in Cyber](tryhackme/careersincyber.md) - Cybersecurity industry roles
- [Cryptography Concepts](tryhackme/cryptographyconcepts.md) - Symmetric & Asymmetric Encryption
</details>

<details>
<summary><b>⚙️ Tools, Scripting & Web Fundamentals</b> (Click to expand)</summary>

- [Nmap Scanning](tryhackme/nmap.md) - Port scanning flags, scripts & techniques
- [Nmap Live Host Discovery](tryhackme/nmaplivehostdiscovery.md) - ICMP, ARP & TCP host sweeps
- [How Websites Work](tryhackme/howwebsiteswork.md) - HTML, CSS, JS & Web Servers
- [Database & SQL Basics](tryhackme/databasesqlbasics.md) - SQL queries & relational databases
- [Data Encoding](tryhackme/dataencoding.md) - Hex, Base64 & URL encoding
- [Data Representation](tryhackme/datarepresentation.md) - Binary, Bytes & Data formats
- [Python Basics](tryhackme/pythonbasics.md) - Scripting fundamentals for security
- [Python Simple Demo](tryhackme/pythonsimpledemo.md) - Python automation scripts
- [Bash Scripting](tryhackme/bashscripting.md) - Shell scripting for penetration testing
- [JavaScript Simple Demo](tryhackme/javascriptsimpledemo.md) - JS client-side analysis
- [Search Skills](tryhackme/searchskills.md) - OSINT & Google Dorking methods
- [Putting It All Together](tryhackme/puttingitalltogether.md) - Methodological synthesis
</details>

---

## 📦 HackTheBox - Labs & Starting Point

[HackTheBox](https://app.hackthebox.com/) infrastructure testing and vulnerable machine walkthroughs.

* **HTB Profile:** [Amit Padhan (`amitpadhan525`)](https://profile.hackthebox.com/profile/019c3941-83d7-70be-9be8-8f006c7a93f9)
* **Lab Setup Guide:** [OpenVPN Usage Guide](hackthebox/openvpn.md)
* **Directory Index:** [`hackthebox/README.md`](hackthebox/README.md)

### 🏆 Starting Point Tier 0 Labs

Tier 0 covers fundamental service enumeration and exploiting default misconfigurations:

| Machine | Target Service | Vector / Vulnerability | Status | Writeup Link |
| :--- | :--- | :--- | :---: | :---: |
| 🐱 **Meow** | Port 23 (Telnet) | Unauthenticated root login | ✅ Completed | [Meow](hackthebox/meow.md) |
| 🦌 **Fawn** | Port 21 (FTP / `vsftpd`) | Anonymous login & file download | ✅ Completed | [Fawn](hackthebox/fawn.md) |
| 💃 **Dancing** | Port 445 (SMB / `smbclient`) | Guest share enumeration & access | ✅ Completed | [Dancing](hackthebox/dancing.md) |
| 📅 **Appointment** | Port 80 (HTTP / Apache) | Authentication bypass via SQL Injection | ✅ Completed | [Appointment](hackthebox/appointment.md) |
| 🗄️ **Sequel** | Port 3306 (MariaDB / MySQL) | Remote database connection without password | ✅ Completed | [Sequel](hackthebox/sequel.md) |

---

## 🛠️ Essential Security Tools & Setup

These writeups utilize a standard Kali Linux / Debian penetration testing toolkit. 

```bash
# Network Reconnaissance & Port Scanning
nmap -sC -sV -oA nmap/initial <TARGET_IP>

# Web Directory & File Enumeration
gobuster dir -u http://<TARGET_IP> -w /usr/share/wordlists/dirb/common.txt

# Service Banners & Socket Connections
nc -nv <TARGET_IP> <PORT>
openssl s_client -connect <TARGET_IP>:<PORT>

# SMB Share Enumeration
smbclient -L //<TARGET_IP>/ -N

# Password Hash Cracking
john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt
```

---

## ⚖️ Ethical Disclaimer

> [!IMPORTANT]
> **Educational Purpose Only:** All notes, scripts, and writeups in this repository are compiled strictly for educational purposes, authorized security research, and legal CTF competitions. Unethical or unauthorized hacking against targets without explicit prior consent is illegal. Always practice responsible disclosure and strictly test within authorized lab environments (e.g. OverTheWire, TryHackMe, HackTheBox).

---

## 👤 Author & Connect

**Amit Padhan**
* 🐙 **GitHub:** [@amitpadhan525](https://github.com/amitpadhan525)
* 🚩 **TryHackMe:** [amitpadhan525](https://tryhackme.com/p/amitpadhan525)
* 📦 **HackTheBox:** [amitpadhan525](https://profile.hackthebox.com/profile/019c3941-83d7-70be-9be8-8f006c7a93f9)

*⭐ If you find these notes helpful, feel free to star the repository!*
