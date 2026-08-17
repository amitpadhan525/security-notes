# Agent Sudo — TryHackMe Walkthrough

A structured write-up covering reconnaissance, steganography, hash cracking, and privilege escalation for the **Agent Sudo** room on TryHackMe.

---

## 1. Machine Details & Overview
* **Target OS:** Linux
* **Difficulty:** Easy
* **Platform:** TryHackMe

---

## 2. Reconnaissance & Enumeration

### Nmap Port Scan
```bash
nmap -sC -sV -oN nmap_scan.txt <TARGET_IP>