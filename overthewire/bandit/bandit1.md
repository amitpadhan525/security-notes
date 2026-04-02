# Bandit Level 1 → Level 2

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit1.html)
- **Difficulty:** Beginner
- **Category:** Linux / Special Filenames

---

## 🎯 Goal
The password is stored in a file called `-` in the home directory. The challenge is that `-` is a special character in Linux (it means standard input), so a simple `cat -` won't work.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit1`                          |
| Password | *(password from Level 0)*          |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit1@bandit.labs.overthewire.org -p 2220
```

### Step 2: List files in the home directory
```bash
ls
```
**Output:**
```
-
```

### Step 3: Try reading the file (and see it fail)
```bash
cat -
```
> ⚠️ This hangs and waits for standard input — because `-` means stdin. Press `Ctrl+C` to cancel.

### Step 4: Read the file using its path
```bash
cat ./-
```
OR use input redirection:
```bash
cat < -
```

**Output:** The password for Level 2 is printed.

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| `-` (dash) | Reserved character meaning standard input (stdin) in most Unix commands |
| `./` prefix | Forces the shell to treat the argument as a file path, not a flag |
| `cat ./-` | Read a file literally named `-` |
| Input redirection `<` | Alternative way to supply file with dash name |

---

## 💡 Key Insight
> In Linux, when you pass `-` as an argument to most commands, it means "read from standard input." To work around this, prefix the filename with `./` to explicitly reference it as a file in the current directory.

---

## 📝 Notes
- This pattern applies to any command: `less ./-`, `head ./-`, etc.
- You can also use the full path: `cat /home/bandit1/-`

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit2`  | `263JGJPfgU6LtdEvgfWU1XP5yac29mFx` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
