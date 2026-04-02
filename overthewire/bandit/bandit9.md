# Bandit Level 9 → Level 10

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit9.html)
- **Difficulty:** Beginner
- **Category:** Linux / Binary Files / `strings`

---

## 🎯 Goal
The password is stored in `data.txt` which is a **binary file** containing mostly non-printable data. The password is one of the few human-readable strings, preceded by several `=` characters.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit9`                          |
| Password | *(password from Level 8)*          |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit9@bandit.labs.overthewire.org -p 2220
```

### Step 2: Check the file type
```bash
file data.txt
```
**Output:**
```
data.txt: data
```
> This confirms the file is binary, not plain text.

### Step 3: Try to `cat` it (to see the problem)
```bash
cat data.txt
```
> ⚠️ Garbled/binary output — mostly unreadable characters.

### Step 4: Extract readable strings from the binary
```bash
strings data.txt
```
**Output:** Many short human-readable fragments extracted from the binary.

### Step 5: Filter for lines with `=` signs
```bash
strings data.txt | grep "=="
```
**Output:**
```
========== the
========== password
========== is
========== <password_here>
```

**Output:** The password for Level 10 is the string after the `=` signs.

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| `strings` | Extract printable character sequences from any file (including binaries) |
| Binary files | Files with non-printable/non-text data — cannot be read directly with `cat` |
| `grep` with pipe | Chain `strings` and `grep` to narrow down results |
| `file` | Always check file type before assuming it's text |

---

## 💡 Key Insight
> `strings` scans any file (text or binary) and extracts sequences of printable characters that are at least 4 characters long (by default). It's extremely useful in reverse engineering and CTFs to find embedded text inside executables or data files.

---

## 📝 Useful `strings` Flags
| Flag | Meaning |
|------|---------|
| `-n 6` | Minimum string length of 6 characters |
| `-a` | Scan the entire file (default in newer versions) |
| `-t x` | Show offset of each string in hex |
| `-e b` | Scan for big-endian 16-bit strings (for Unicode) |

---

## 📝 Notes
- `strings` is commonly used in malware analysis to find embedded URLs, IPs, or commands.
- The default minimum length for a string is 4 printable characters.
- You can also do: `strings -n 10 data.txt | grep "=="` to only get longer strings.

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit10` | `FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
