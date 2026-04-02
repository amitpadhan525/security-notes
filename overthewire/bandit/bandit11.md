# Bandit Level 11 → Level 12

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit11.html)
- **Difficulty:** Beginner
- **Category:** Linux / Ciphers / ROT13

---

## 🎯 Goal
The password is stored in `data.txt` where all alphabetical characters have been rotated by **13 positions** (ROT13 cipher). You need to reverse this rotation to get the actual password.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit11`                         |
| Password | *(password from Level 10)*         |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit11@bandit.labs.overthewire.org -p 2220
```

### Step 2: View the encoded content
```bash
cat data.txt
```
**Output (example):**
```
Gur cnffjbeq vf <ROT13-encoded-password>
```
> You can see it starts with `Gur` which is ROT13 for `The`.

### Step 3: Decode using `tr` (translate command)
```bash
cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```

**Output:**
```
The password is <password_here>
```

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| ROT13 | A Caesar cipher that shifts each letter by 13 positions |
| `tr` | Translate or delete characters (character-by-character substitution) |
| Caesar cipher | A substitution cipher where each letter is shifted by N positions |
| Self-inverse cipher | Applying ROT13 twice returns the original text |

---

## 💡 What is ROT13?

> **ROT13** (Rotate by 13) is a simple letter substitution cipher that replaces each letter with the 13th letter after it in the alphabet. Since the alphabet has 26 letters, applying ROT13 twice returns the original text — it is its own inverse.

```
Plain:  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
ROT13:  N O P Q R S T U V W X Y Z A B C D E F G H I J K L M
```

**Example:**
```
ROT13("Hello") = "Uryyb"
ROT13("Uryyb") = "Hello"   ← same operation, undoes itself
```

---

## 📝 Understanding the `tr` Command
```bash
tr 'A-Za-z' 'N-ZA-Mn-za-m'
```
| Part | Meaning |
|------|---------|
| `A-Z` | Match uppercase A through Z |
| `a-z` | Match lowercase a through z |
| `N-ZA-M` | Replace with N through Z, then A through M (shift 13) |
| `n-za-m` | Same for lowercase letters |

---

## 📝 Quick Reference
```bash
# ROT13 decode (same as encode — it's its own inverse!)
echo "Uryyb" | tr 'A-Za-z' 'N-ZA-Mn-za-m'
# Output: Hello

# ROT13 specific file
cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```

---

## 📝 Notes
- ROT13 provides no real security — it's just basic obfuscation.
- It's still used on forums/spoiler text to hide content from casual readers.
- Related: ROT47 shifts all printable ASCII characters by 47 positions.
- You can also decode ROT13 online or with: `python3 -c "import codecs; print(codecs.decode('Gur cnffjbeq', 'rot_13'))"`

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit12` | `7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
