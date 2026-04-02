# Bandit Level 5 → Level 6

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit5.html)
- **Difficulty:** Beginner
- **Category:** Linux / `find` Command

---

## 🎯 Goal
The password is hidden somewhere under the `inhere/` directory. The file has the following specific properties:
- Human-readable (ASCII text)
- Exactly **1033 bytes** in size
- **Not executable**

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit5`                          |
| Password | *(password from Level 4)*          |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit5@bandit.labs.overthewire.org -p 2220
```

### Step 2: List the `inhere` directory
```bash
ls inhere/
```
**Output:** Multiple subdirectories like `maybehere00`, `maybehere01`, ... `maybehere19`

### Step 3: Use `find` with all three filters
```bash
find inhere/ -type f -size 1033c ! -executable
```

**Explanation of flags:**
| Flag | Meaning |
|------|---------|
| `-type f` | Only look at regular files (not directories) |
| `-size 1033c` | Size is exactly 1033 **bytes** (`c` = bytes) |
| `! -executable` | The file is NOT executable |

**Output:**
```
inhere/maybehere07/.file2
```

### Step 4: Read the file
```bash
cat inhere/maybehere07/.file2
```

**Output:** The password for Level 6 is printed.

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| `find` | Powerful file search tool with many filter options |
| `-type f` | Filter for regular files only |
| `-size Nc` | Filter by exact size in bytes |
| `! -executable` | Negate a condition (NOT executable) |
| `-readable` | Filter for human-readable files (optional addition) |

---

## 💡 Key Insight
> The `find` command is one of the most powerful tools in Linux. Unlike `ls`, it can recursively search directories and filter by dozens of file attributes — size, type, permissions, owner, date modified, and more.

---

## 📝 Notes
- Size units in `find`: `c` = bytes, `k` = kilobytes, `M` = megabytes, `G` = gigabytes
- `! -executable` is equivalent to `-not -executable`
- You can also pipe `find` output to `xargs cat` to read matching files directly:
```bash
find inhere/ -type f -size 1033c ! -executable | xargs cat
```

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit6`  | `HWasnPhtq9AVKe0dmk45nxy20cvUa6EG` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
