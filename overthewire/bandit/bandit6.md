# Bandit Level 6 → Level 7

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit6.html)
- **Difficulty:** Beginner
- **Category:** Linux / `find` on Entire Filesystem

---

## 🎯 Goal
The password is stored **somewhere on the server** (not just the home directory). The file has these properties:
- Owned by **user** `bandit7`
- Owned by **group** `bandit6`
- Exactly **33 bytes** in size

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit6`                          |
| Password | *(password from Level 5)*          |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit6@bandit.labs.overthewire.org -p 2220
```

### Step 2: Search the entire filesystem
```bash
find / -user bandit7 -group bandit6 -size 33c 2>/dev/null
```

**Explanation of flags:**
| Flag | Meaning |
|------|---------|
| `/` | Start searching from the root — the entire filesystem |
| `-user bandit7` | File is owned by user `bandit7` |
| `-group bandit6` | File belongs to group `bandit6` |
| `-size 33c` | File is exactly 33 bytes |
| `2>/dev/null` | Suppress "Permission denied" error messages |

**Output:**
```
/var/lib/dpkg/info/bandit7.password
```

### Step 3: Read the file
```bash
cat /var/lib/dpkg/info/bandit7.password
```

**Output:** The password for Level 7 is printed.

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| `find /` | Search the entire filesystem (from root) |
| `-user` | Filter files by owning user |
| `-group` | Filter files by owning group |
| `2>/dev/null` | Redirect stderr (standard error) to null — suppress errors |
| File ownership | Every Linux file has an associated user and group owner |

---

## 💡 Key Insight
> When running `find /` as a non-root user, you'll get thousands of "Permission denied" messages for directories you can't access. Redirecting stderr to `/dev/null` (`2>/dev/null`) cleans up the output so you only see actual results.

---

## 📝 Understanding Redirections
| Redirect | Meaning |
|----------|---------|
| `>` or `1>` | Redirect **stdout** (standard output) |
| `2>` | Redirect **stderr** (standard error) |
| `2>/dev/null` | Throw away all error messages |
| `&>` | Redirect both stdout and stderr |

---

## 📝 Notes
- `/dev/null` is a special device that discards everything written to it.
- Understanding file ownership is critical in Linux privilege escalation.
- You can also add `-readable` to only show files you can read.

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit7`  | `morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
