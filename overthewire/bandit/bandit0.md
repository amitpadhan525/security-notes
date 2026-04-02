# Bandit Level 0 → Level 1

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit0.html)
- **Difficulty:** Beginner
- **Category:** Linux / SSH

---

## 🎯 Goal
Log into the Bandit server using SSH and read the password from a file called `readme` in the home directory.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit0`                          |
| Password | `bandit0`                          |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
```
- Type `yes` when asked about the host fingerprint.
- Enter password: `bandit0`

### Step 2: List files in the home directory
```bash
ls
```
**Output:**
```
readme
```

### Step 3: Read the file
```bash
cat readme
```
**Output:** The password for Level 1 is printed.

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| `ssh` | Securely connect to a remote machine |
| `-p 2220` | Specify non-default SSH port |
| `ls` | List directory contents |
| `cat` | Display file contents |

---

## 📝 Notes
- SSH (Secure Shell) is the standard way to remotely access Linux servers.
- The default SSH port is 22; Bandit uses 2220 instead.
- `cat` reads and prints the entire contents of a file to the terminal.

---

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit1`  | `ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
