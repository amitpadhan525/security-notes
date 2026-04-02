# Bandit Level 13 → Level 14

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit13.html)
- **Difficulty:** Beginner
- **Category:** Linux / SSH / Private Key Authentication

---

## 🎯 Goal
Instead of a direct password, you are given an **SSH private key** (`sshkey.private`). Use this key to SSH into the `bandit14` account on localhost. The password for Level 14 can then be read from `/etc/bandit_pass/bandit14`.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit13`                         |
| Password | *(password from Level 12)*         |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit13@bandit.labs.overthewire.org -p 2220
```

### Step 2: List files in the home directory
```bash
ls
```
**Output:**
```
sshkey.private
```

### Step 3: View the private key (optional — to understand what it looks like)
```bash
cat sshkey.private
```
**Output:**
```
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA04zt...
...
-----END RSA PRIVATE KEY-----
```

### Step 4: Use the private key to SSH into bandit14 on localhost
```bash
ssh -i sshkey.private bandit14@localhost -p 2220
```
> Accept the fingerprint by typing `yes` if prompted.

### Step 5: You are now logged in as bandit14. Read the password.
```bash
cat /etc/bandit_pass/bandit14
```

**Output:** The password for Level 14 is printed.

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| SSH key-based auth | Log in without a password using a cryptographic key pair |
| `-i keyfile` | Tell SSH which private key file to use |
| Private key | The secret part of an SSH key pair (never share this!) |
| Public key | The non-secret part stored in `~/.ssh/authorized_keys` on the server |
| `localhost` | Refers to the current machine (127.0.0.1) |
| `/etc/bandit_pass/` | Directory storing passwords for each Bandit level |

---

## 💡 How SSH Key Authentication Works

```
┌──────────────┐       SSH Handshake        ┌──────────────────┐
│  Your machine │ ─────────────────────────► │   Remote server  │
│  (private key)│                            │  (public key in  │
│               │ ◄───────────────────────── │  authorized_keys)│
└──────────────┘    Verified! Access granted └──────────────────┘
```

1. Server sends a random challenge encrypted with your **public key**
2. Only your **private key** can decrypt it
3. If decryption succeeds → you're authenticated — no password needed

---

## 📝 Common SSH Key Commands
```bash
# Generate a new SSH key pair
ssh-keygen -t rsa -b 4096

# Copy your public key to a remote server
ssh-copy-id user@server

# Connect using a specific key
ssh -i ~/.ssh/id_rsa user@server

# Fix permission issues with private key
chmod 600 sshkey.private
```

---

## 📝 Notes
- SSH private keys must have permissions `600` (readable only by owner).
  Use `chmod 600 sshkey.private` if SSH complains about permissions.
- The `authorized_keys` file on the server holds the matching public key.
- Key-based auth is far more secure than password auth.

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit14` | `MU4VWeTyJk8ROof1qqmcBPaLh7lDCPvS` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
