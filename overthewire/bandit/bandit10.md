# Bandit Level 10 → Level 11

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit10.html)
- **Difficulty:** Beginner
- **Category:** Linux / Encoding / Base64

---

## 🎯 Goal
The password is stored in `data.txt`, which contains **Base64 encoded** data. You need to decode it to get the actual password.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit10`                         |
| Password | *(password from Level 9)*          |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit10@bandit.labs.overthewire.org -p 2220
```

### Step 2: View the file
```bash
cat data.txt
```
**Output:**
```
VGhlIHBhc3N3b3JkIGlzIDZ6UGV6aUxkUjJSS2MzMzRoT1RQdlRGcTUzNVVLNg==
```
> This looks like Base64 — a common sign is the trailing `==` padding and only alphanumeric characters plus `+`, `/`.

### Step 3: Decode the Base64 data
```bash
base64 -d data.txt
```
OR using a pipe:
```bash
cat data.txt | base64 -d
```

**Output:**
```
The password is <password_here>
```

**Output:** The password for Level 11 is displayed.

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| Base64 | An encoding scheme that represents binary data using 64 printable characters |
| `base64 -d` | Decode Base64 encoded content |
| `base64` (no flags) | Encode content to Base64 |
| Encoding vs Encryption | Encoding is reversible without a key; encryption requires a key |

---

## 💡 What is Base64?
> Base64 encodes binary data into ASCII text using a 64-character alphabet (A–Z, a–z, 0–9, +, /). It is commonly used to transmit binary data over text-based channels (like email or JSON). It is **not encryption** — anyone can decode it without a key.

**Signs of Base64:**
- Contains only: `A-Z`, `a-z`, `0-9`, `+`, `/`
- Often ends with `=` or `==` (padding)
- Length is always a multiple of 4

---

## 📝 Quick Reference
```bash
# Encode a string to Base64
echo "hello world" | base64
# Output: aGVsbG8gd29ybGQK

# Decode Base64
echo "aGVsbG8gd29ybGQK" | base64 -d
# Output: hello world

# Decode a file
base64 -d data.txt
```

---

## 📝 Notes
- Base64 is commonly used in: JWT tokens, email attachments (MIME), HTTP Basic Auth headers, and CTF challenges.
- Don't confuse Base64 with encryption — it provides zero security on its own.
- Related encodings: Base32 (uses A–Z + 2–7), Base58 (used in Bitcoin addresses).

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit11` | `dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
