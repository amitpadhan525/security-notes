# Bandit Level 4 → Level 5

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit4.html)
- **Difficulty:** Beginner
- **Category:** Linux / File Types

---

## 🎯 Goal
There are 10 files in the `inhere` directory (`-file00` to `-file09`). The password is in the **only human-readable** (ASCII text) file. You need to identify which one it is without opening every file.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit4`                          |
| Password | *(password from Level 3)*          |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit4@bandit.labs.overthewire.org -p 2220
```

### Step 2: Navigate into `inhere`
```bash
cd inhere
ls
```
**Output:**
```
-file00  -file01  -file02  -file03  -file04  -file05  -file06  -file07  -file08  -file09
```

### Step 3: Use `file` to check the type of each file
```bash
file ./-file0*
```
**Output:**
```
./-file00: data
./-file01: data
./-file02: data
./-file03: data
./-file04: data
./-file05: data
./-file06: data
./-file07: ASCII text
./-file08: data
./-file09: data
```

### Step 4: Read the ASCII text file
```bash
cat ./-file07
```

**Output:** The password for Level 5 is printed.

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| `file` | Determine the type of a file (e.g., ASCII text, data, binary) |
| Globbing `*` | Wildcard matching — `./-file0*` matches all 10 files |
| `./` prefix | Needed because filenames start with `-` |
| Human-readable | A file containing plain text (ASCII or UTF-8) that you can read |

---

## 💡 Key Insight
> The `file` command reads the first few bytes (magic bytes) of a file to determine its type — it doesn't rely on the file extension. This is extremely useful in CTFs where files are often renamed or have no extension.

---

## 📝 Notes
- `data` in `file` output typically means binary/non-text content.
- `ASCII text` means the file contains plain human-readable text.
- You can also use this one-liner to find and display the ASCII file directly:
```bash
for f in ./-file0*; do echo "$f:"; file "$f"; done | grep ASCII
```

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit5`  | `4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
