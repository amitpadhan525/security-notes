# Bandit Level 3 → Level 4

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit3.html)
- **Difficulty:** Beginner
- **Category:** Linux / Hidden Files

---

## 🎯 Goal
The password is stored in a **hidden file** inside the `inhere` directory. In Linux, files starting with a `.` (dot) are hidden and not shown by a regular `ls`.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit3`                          |
| Password | *(password from Level 2)*          |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit3@bandit.labs.overthewire.org -p 2220
```

### Step 2: List files in the home directory
```bash
ls
```
**Output:**
```
inhere
```

### Step 3: Navigate into the `inhere` directory
```bash
cd inhere
```

### Step 4: Try listing files normally (and see it fail)
```bash
ls
```
> ⚠️ Output is empty — the file is hidden.

### Step 5: List ALL files including hidden ones
```bash
ls -la
```
OR:
```bash
ls -a
```
**Output:**
```
.  ..  .hidden
```

### Step 6: Read the hidden file
```bash
cat .hidden
```

**Output:** The password for Level 4 is printed.

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| Hidden files | Files/directories starting with `.` are hidden in Linux |
| `ls -a` | Show **all** files, including hidden ones |
| `ls -l` | Show files in **long format** (permissions, owner, size, date) |
| `ls -la` | Combine both: long format + hidden files |
| `cd` | Change directory |

---

## 💡 Key Insight
> In Linux, any file or directory whose name begins with a `.` (dot) is considered **hidden**. This is a convention, not a security feature — anyone with read permissions can still access these files. Use `ls -a` to reveal them.

---

## 📝 Notes
- The `.` and `..` entries you see in `ls -a` represent the current directory and the parent directory respectively.
- Common hidden files you'll encounter: `.bashrc`, `.bash_history`, `.ssh/`, `.config/`
- To find hidden files recursively: `find . -name ".*"`

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit4`  | `2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
