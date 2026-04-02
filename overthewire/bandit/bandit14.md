# Bandit Level 14 → Level 15

## 🚩 Challenge Info
- **Wargame:** [OverTheWire - Bandit](https://overthewire.org/wargames/bandit/bandit14.html)
- **Difficulty:** Beginner
- **Category:** Linux / Networking / Netcat

---

## 🎯 Goal
Submit the **current level's password** (bandit14's password) to **port 30000** on `localhost`. The server will respond with the password for Level 15.

---

## 🔑 Login Credentials
| Field    | Value                              |
|----------|------------------------------------|
| Host     | `bandit.labs.overthewire.org`      |
| Port     | `2220`                             |
| Username | `bandit14`                         |
| Password | *(from `/etc/bandit_pass/bandit14` — retrieved in Level 13)* |

---

## 🪜 Step-by-Step Solution

### Step 1: Connect via SSH
```bash
ssh bandit14@bandit.labs.overthewire.org -p 2220
```

### Step 2: Get the current password (bandit14's)
```bash
cat /etc/bandit_pass/bandit14
```
Copy this password.

### Step 3: Connect to port 30000 using `nc` (netcat)
```bash
nc localhost 30000
```
> The terminal will hang waiting for input — this is normal.

### Step 4: Paste/type the bandit14 password and press Enter
```
<paste bandit14 password here>
```

**Output:**
```
Correct!
<password_for_bandit15_here>
```

**Alternative — One-liner using `echo` and pipe:**
```bash
echo "<bandit14_password>" | nc localhost 30000
```

---

## 🧠 Concepts Learned
| Concept | Description |
|---------|-------------|
| `nc` (netcat) | A networking utility for reading/writing data over TCP/UDP |
| `nc host port` | Connect to a host on a specific port (TCP) |
| Port | A numbered endpoint for a network service (0–65535) |
| `localhost` / `127.0.0.1` | The loopback address — refers to the current machine |
| Piping to `nc` | Echo a string and pipe directly into a netcat connection |

---

## 💡 What is Netcat?
> **Netcat** (`nc`) is often called the "Swiss Army Knife of networking". It can:
> - Connect to TCP/UDP ports (like a basic browser or telnet)
> - Listen on a port for incoming connections
> - Transfer files
> - Create reverse shells (used in penetration testing)

---

## 📝 Common `nc` Usage
```bash
# Connect to a host:port (client mode)
nc host port

# Listen on a port (server mode)
nc -lvnp 4444

# Send a file
nc host port < file.txt

# Receive a file
nc -lvnp 4444 > received.txt

# One-liner to send data
echo "hello" | nc host port
```

---

## 📝 Notes
- Port numbers 0–1023 are "well-known" (require root to bind): SSH=22, HTTP=80, HTTPS=443.
- Ports 1024–65535 are available for non-root services.
- Port 30000 here is a custom Bandit challenge service.
- `nc -zv host port` can be used to check if a port is open (port scanning).

---

## 🔓 Password Found

| Next Level | Password |
|------------|----------|
| `bandit15` | `8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo` |

---

*OverTheWire Bandit — Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
