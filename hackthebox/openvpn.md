# OpenVPN Setup & Usage Guide 🔒

## 🚩 Overview
To access target machines on labs and CTF platforms like **HackTheBox** and **TryHackMe**, you must establish a secure VPN tunnel using **OpenVPN**. This grants your system a virtual IP address on the internal lab network via a dedicated network interface (usually `tun0`).

---

## 🛠️ 1. Installation

### Linux (Debian / Ubuntu / Kali / Parrot)
```bash
sudo apt update
sudo apt install openvpn net-tools -y
```

### Arch Linux / Manjaro
```bash
sudo pacman -S openvpn net-tools
```

### Fedora / RHEL
```bash
sudo dnf install openvpn net-tools
```

---

## 📥 2. Downloading Your VPN Profile

1. Log into your **HackTheBox** or **TryHackMe** account.
2. Navigate to the **Connect / Access** section.
3. Select your desired server location / laboratory type (e.g., *Starting Point*, *VIP*, or *Free Lab*).
4. Download the `.ovpn` configuration file (e.g., `htb_username.ovpn` or `starting_point_username.ovpn`).

---

## 🚀 3. Connecting via Terminal

Open a terminal window and navigate to the directory where your `.ovpn` file was downloaded:

```bash
cd ~/Downloads
```

Initiate the OpenVPN connection using `sudo`:

```bash
sudo openvpn starting_point_username.ovpn
```

### Successful Connection Output Example:
```text
Initialization Sequence Completed
```
> [!IMPORTANT]
> **Keep this terminal window open!** Closing the terminal will terminate your VPN tunnel. To disconnect gracefully, press `Ctrl + C`.

---

## 🔍 4. Verifying Connection & IP Address

Open a **new terminal tab or window** to verify your interface and connectivity.

### Check `tun0` Adapter IP:
```bash
ip a show dev tun0
```
*or using `ifconfig`:*
```bash
ifconfig tun0
```
Look for `inet` (e.g., `10.10.14.x` for HTB or `10.13.x.x` for THM).

### Ping Target Machine:
Test connectivity to the target IP address assigned by the platform:
```bash
ping -c 4 <TARGET_IP>
```

---

## 🛠️ 5. Troubleshooting & Tips

| Issue | Cause | Solution |
|-------|-------|----------|
| **Permission Denied** | OpenVPN requires root privileges to create a virtual `tun` interface. | Prepend command with `sudo`: `sudo openvpn profile.ovpn`. |
| **Connection Timeout** | Firewall / ISP blocking default UDP port. | Re-download profile choosing **TCP 443** option from the portal. |
| **`tun0` Interface Missing** | Tunnel setup failed or hung process. | Kill active OpenVPN process (`sudo killall openvpn`) and re-connect. |
| **Cannot Ping Target** | Target machine hasn't finished booting. | Wait 1–2 minutes after spawning the machine, or reset the machine instance. |

---
*Compiled by [Amit Padhan](https://github.com/amitpadhan525)*
