# Meow - HackTheBox Writeup 🐱

- **Platform:** HackTheBox (Starting Point - Tier 0)
- **Target OS:** Linux
- **Vulnerability:** Unauthenticated Telnet Root Login

---

## 📌 Reconnaissance

I started by running an Nmap service scan on the target IP:

```bash
nmap -sV <TARGET_IP>
```

### Scan Results:
- `23/tcp open telnet Linux telnetd`

Only port 23 (Telnet) was open. Telnet is a legacy unencrypted protocol that passes credentials in plaintext.

---

## ⚡ Exploitation

I connected to the service using the `telnet` client:

```bash
telnet <TARGET_IP>
```

When prompted for login, I tried `root` with no password:
- **Login:** `root`
- **Password:** *(press Enter)*

Access was immediately granted as root.

---

## 🚩 Flag Capture

Once logged in as root:

```bash
ls -la
cat flag.txt
```

---

## 💡 Notes & Takeaways
- Never leave Telnet exposed to a network, especially with default/blank root passwords.
- Replace Telnet with SSH for encrypted remote administration.
