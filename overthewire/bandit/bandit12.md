# Bandit Level 12 → Level 13

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit12.html)
- **Difficulty:** Intermediate
- **Category:** Linux / Compression / Hexdump

---

## 🎯 Goal
`data.txt` is a **hexdump** of a file that has been **repeatedly compressed** multiple times using different compression formats (gzip, bzip2, tar). You need to reverse the hexdump and then peel back each layer of compression to reach the final password.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit12`                         |
| Password | *(password from Level 11)*         |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit12@bandit.labs.overthewire.org -p 2220
```

### Step 2: Create a working directory in `/tmp`
```bash
mkdir /tmp/bandit12work
cp data.txt /tmp/bandit12work/
cd /tmp/bandit12work/
```
> The home directory may be read-only, so always use `/tmp` for working files.

### Step 3: Reverse the hexdump to binary
```bash
xxd -r data.txt > data.bin
file data.bin
```
**Output:** Something like `gzip compressed data` or `bzip2 compressed data`

---

### Step 4: Decompress Layer by Layer

Repeat this cycle: **`file` → rename with correct extension → decompress**

#### If `file` says `gzip compressed data`:
```bash
mv data.bin data.gz
gunzip data.gz        # produces: data
mv data data.bin
file data.bin
```

#### If `file` says `bzip2 compressed data`:
```bash
mv data.bin data.bz2
bunzip2 data.bz2      # produces: data
mv data data.bin
file data.bin
```

#### If `file` says `POSIX tar archive`:
```bash
mv data.bin data.tar
tar -xf data.tar      # extracts: data5.bin or similar
file data5.bin
```
> Then continue with the new extracted file.

### Step 5: Keep repeating until you get ASCII text
```bash
file data.bin
# When it says: ASCII text — you're done!
cat data.bin
```

**Output:** `The password is <password_here>`

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| `xxd` | Create a hexdump or reverse one (with `-r`) |
| `xxd -r` | Reverse a hexdump back to binary |
| `file` | Identify file type by magic bytes |
| `gunzip` | Decompress gzip (`.gz`) files |
| `bunzip2` | Decompress bzip2 (`.bz2`) files |
| `tar -xf` | Extract tar archives |
| Compression layers | Files can be compressed multiple times with different tools |

---

## 💡 Key Insight
> Every compressed file format starts with specific **magic bytes** — a short signature that identifies the format. The `file` command reads these bytes to tell you what type of file it is, regardless of the file extension. This is why you can rename files freely and still decompress correctly as long as you provide the right extension.

---

## 📝 Magic Bytes Reference
| Format | Magic Bytes (hex) | Command to decompress |
|--------|-------------------|-----------------------|
| gzip | `1f 8b` | `gunzip file.gz` |
| bzip2 | `42 5a 68` (`BZh`) | `bunzip2 file.bz2` |
| tar | `75 73 74 61 72` | `tar -xf file.tar` |
| zip | `50 4b 03 04` (`PK`) | `unzip file.zip` |

---

## 📝 Complete One-liner Approach (Advanced)
You can also loop through decompression automatically with a script, but the manual step-by-step approach teaches you more about each format.

```bash
# Check hex signature manually
xxd data.bin | head -3
```

---

## 📝 Notes
- `tar` often wraps other compressed formats — `tar.gz` = tar + gzip, `tar.bz2` = tar + bzip2.
- You may need to repeat the cycle 6–8 times for this level.
- Use `ls -la` after each step to see what was extracted.

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit13` | `FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
