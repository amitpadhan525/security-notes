# TryHackMe - OpenVPN Setup & Guide 🔌

My personal guide for setting up and maintaining a stable connection to the TryHackMe network using OpenVPN on Linux.

---

## 📥 1. Download Your Configuration File

1. Go to the [TryHackMe Access Page](https://tryhackme.com/access).
2. Select your closest VPN location server (e.g., EU-Free, US-East, etc.).
3. Click **Download My Configuration File** to get your `<username>.ovpn` file.

---

## 🛠️ 2. Package Installation

If `openvpn` is not installed on your Linux system:

```bash
# Debian / Ubuntu / Kali / Parrot
sudo apt update && sudo apt install openvpn net-tools -y

# Arch Linux / Manjaro
sudo pacman -S openvpn net-tools
```

---

## 🚀 3. Connecting to TryHackMe

Open a terminal in the folder containing your `.ovpn` file and run:

```bash
sudo openvpn amitpadhan525.ovpn
```

### Expected Terminal Output:
```text
[+] Opening tun interface...
[+] Initialization Sequence Completed
```

> **Note:** Keep this terminal session open while working on rooms. Closing it will drop your VPN connection.

---

## 🌐 4. Verifying the Connection

Open a new terminal tab and check your assigned `tun0` IP address:

```bash
ip a show dev tun0
```

You should see an IP in the `10.13.x.x` or `10.x.x.x` range.

Test reachability to the THM internal gateway:
```bash
ping -c 4 10.10.10.10
```

If you receive replies, you are connected and ready to hack!

---

## 💡 Quick Troubleshooting Notes

- **Permission Error:** OpenVPN needs `sudo` to configure network interfaces.
- **Port Blocked:** If UDP fails on strict networks, switch your VPN configuration on the THM website to **TCP (Port 443)** and re-download the `.ovpn` file.
- **Reset Interface:** If the connection drops or hangs, kill any running openvpn instances:
  ```bash
  sudo killall openvpn
  ```
