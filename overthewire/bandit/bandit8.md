# Bandit Level 8 → Level 9

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit8.html)
- **Difficulty:** Beginner
- **Category:** Linux / `sort` & `uniq`

---

## 🎯 Goal
The password is stored in `data.txt` and is the **only line that appears exactly once** — all other lines are duplicates.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit8`                          |
| Password | *(password from Level 7)*          |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit8@bandit.labs.overthewire.org -p 2220
```

### Step 2: View a sample of the file
```bash
head data.txt       # view first 10 lines
wc -l data.txt      # count total lines
```

### Step 3: Sort the file first (required for `uniq` to work)
```bash
sort data.txt | head    # preview sorted output
```
> ⚠️ `uniq` only removes **adjacent** duplicate lines. That's why we must `sort` first.

### Step 4: Find the unique line
```bash
sort data.txt | uniq -u
```

**Output:** The one line that appears only once — the password for Level 9.

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| `sort` | Sort lines of text alphabetically or numerically |
| `uniq` | Remove or report duplicate **adjacent** lines |
| `uniq -u` | Print only lines that are **unique** (appear exactly once) |
| `uniq -d` | Print only lines that are **duplicated** |
| `uniq -c` | Prefix lines with the count of how many times they appear |
| Pipe `\|` | Pass output of one command as input to the next |

---

## 💡 Key Insight
> `uniq` only works correctly on **sorted** input because it compares **consecutive** lines. If identical lines are not adjacent, `uniq` won't detect them as duplicates. Always `sort` before `uniq`.

---

## 📝 Visual Example
```
Input (unsorted):    After sort:    uniq -u output:
apple                apple
apple                apple
banana               banana          banana
cherry               cherry
cherry               cherry
```

---

## 📝 Notes
- `sort | uniq -u` is a very common pattern in CTFs and data processing.
- To count occurrences: `sort data.txt | uniq -c | sort -rn` (sorted by frequency)
- `uniq -d` shows only the duplicated lines — the opposite of `-u`.

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit9`  | `4CKMh1JI91bUIZZPXDqGanal4xvAg0JM` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
