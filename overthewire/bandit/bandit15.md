# Bandit Level 15 → Level 16

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit15.html)
- **Difficulty:** Beginner → Intermediate
- **Category:** Linux / Networking / SSL/TLS / OpenSSL

---

## 🎯 Goal
Submit the **current level's password** (bandit15's password) to **port 30001** on `localhost` using **SSL/TLS encryption**. Plain netcat (`nc`) won't work here because the connection is encrypted — you need `openssl s_client`.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit15`                         |
| Password | *(password from Level 14)*         |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit15@bandit.labs.overthewire.org -p 2220
```

### Step 2: Get the current password (bandit15's)
```bash
cat /etc/bandit_pass/bandit15
```
Copy this password.

### Step 3: Try plain `nc` (and see it fail)
```bash
nc localhost 30001
<paste password>
```
> ⚠️ This will not work — port 30001 requires an SSL/TLS encrypted connection.

### Step 4: Connect using `openssl s_client`
```bash
openssl s_client -connect localhost:30001
```
> You'll see a large SSL handshake output, then an empty prompt.

### Step 5: Paste the bandit15 password and press Enter
```
<paste bandit15 password here>
```

**Output:**
```
Correct!
<password_for_bandit16_here>
```

**Alternative — One-liner:**
```bash
echo "<bandit15_password>" | openssl s_client -connect localhost:30001 -quiet
```
> `-quiet` suppresses the SSL handshake information.

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| SSL/TLS | Cryptographic protocols that encrypt network communication |
| `openssl s_client` | Command-line tool to connect to TLS-encrypted services |
| `-connect host:port` | Specify the remote host and port |
| `-quiet` | Suppress verbose SSL handshake output |
| Certificate verification | SSL uses certificates to verify server identity |

---

## 💡 What is SSL/TLS?

> **SSL (Secure Sockets Layer)** and its successor **TLS (Transport Layer Security)** are protocols that encrypt data sent over a network. Without TLS, data is sent in plaintext — anyone between you and the server can read it. With TLS, data is encrypted in transit.

```
Without TLS (plain nc):
Client ──── "password123" ────► Server     ← anyone can intercept this

With TLS (openssl s_client):
Client ──── "Xt93$#@!..." ────► Server     ← encrypted, unreadable in transit
```

**Common uses of TLS:**
- HTTPS websites (port 443)
- Secure email (SMTP/IMAP with TLS)
- VPNs
- Any sensitive data transfer

---

## 📝 `openssl s_client` Reference
```bash
# Basic connection
openssl s_client -connect host:port

# Suppress SSL handshake output
openssl s_client -connect host:port -quiet

# Skip certificate verification
openssl s_client -connect host:port -verify_return_error

# Specify TLS version
openssl s_client -connect host:port -tls1_2

# Check a website's certificate
openssl s_client -connect google.com:443 | openssl x509 -noout -text
```

---

## 📝 Notes
- Port 443 is the standard port for HTTPS (HTTP over TLS).
- Port 30001 in Bandit is a custom TLS service for the challenge.
- `ncat --ssl localhost 30001` (from the `nmap` package) also works as an alternative.
- The SSL handshake output you see when connecting includes: TLS version, cipher suite, certificate chain, and session info.
- For real-world use: `curl https://example.com` automatically uses TLS.

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit16` | `kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
