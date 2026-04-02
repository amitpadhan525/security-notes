# Bandit Level 2 → Level 3

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit2.html)
- **Difficulty:** Beginner
- **Category:** Linux / Filenames with Spaces

---

## 🎯 Goal
The password is stored in a file called `spaces in this filename`. You need to handle the spaces in the filename correctly when using shell commands.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit2`                          |
| Password | *(password from Level 1)*          |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit2@bandit.labs.overthewire.org -p 2220
```

### Step 2: List files in the home directory
```bash
ls
```
**Output:**
```
spaces in this filename
```

### Step 3: Try reading the file (and see it fail)
```bash
cat spaces in this filename
```
> ⚠️ This fails — the shell treats each word as a separate argument.

### Step 4: Read the file using quotes
```bash
cat 'spaces in this filename'
```
OR with double quotes:
```bash
cat "spaces in this filename"
```
OR with backslash escaping:
```bash
cat spaces\ in\ this\ filename
```
OR using tab-completion (recommended!):
```bash
cat sp<TAB>     # press Tab to autocomplete the full name
```

**Output:** The password for Level 3 is printed.

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| Shell word splitting | Spaces separate arguments in shell commands by default |
| Single quotes `'` | Treat everything inside as a literal string (no special chars) |
| Double quotes `"` | Preserve spaces; still allows `$`, backticks, etc. |
| Backslash `\` | Escape a single special character |
| Tab completion | Shell autocompletes filenames, handling spaces automatically |

---

## 💡 Key Insight
> The Linux shell splits command arguments on spaces, tabs, and newlines. When a filename contains spaces, you must either **quote** it or **escape** the spaces, otherwise the shell treats each word as a separate argument.

---

## 📝 Notes
- Single quotes `'...'` are the safest for literal strings — nothing inside is interpreted.
- Double quotes `"..."` are useful when you also need variable expansion.
- Tab completion is the fastest and most error-free method in practice.

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit3`  | `MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
