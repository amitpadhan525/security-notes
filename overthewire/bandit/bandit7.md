# Bandit Level 7 → Level 8

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit7.html)
- **Difficulty:** Beginner
- **Category:** Linux / `grep`

---

## 🎯 Goal
The password is stored in the file `data.txt` next to the word **millionth**. The file contains thousands of lines — you need to search for the specific keyword.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit7`                          |
| Password | *(password from Level 6)*          |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit7@bandit.labs.overthewire.org -p 2220
```

### Step 2: Check the file
```bash
ls
wc -l data.txt     # see how many lines it has
```
**Output:** `data.txt` has thousands of lines.

### Step 3: Search for the keyword "millionth"
```bash
grep "millionth" data.txt
```

**Output:**
```
millionth       <password_here>
```

**Output:** The line with the word `millionth` and the password for Level 8.

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| `grep` | Search for lines matching a pattern in a file |
| `grep "pattern" file` | Basic grep usage |
| `wc -l` | Count the number of lines in a file |
| Pattern matching | Grep uses patterns (by default: basic regex) |

---

## 💡 Key Insight
> `grep` is one of the most frequently used commands in Linux. It searches through text line by line and prints lines that match a given pattern. It can search single files, multiple files, or entire directories recursively.

---

## 📝 Useful `grep` Flags
| Flag | Meaning |
|------|---------|
| `-i` | Case-insensitive search |
| `-n` | Show line numbers |
| `-r` | Recursive search through directories |
| `-v` | Invert match (show lines that do NOT match) |
| `-c` | Count matching lines |
| `-l` | Show only filenames with matches |

---

## 📝 Notes
- Without flags, `grep` is case-sensitive: `grep "millionth"` won't match `Millionth`.
- `grep -i "millionth"` would handle any case variation.
- You can also pipe to grep: `cat data.txt | grep "millionth"`

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit8`  | `dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
