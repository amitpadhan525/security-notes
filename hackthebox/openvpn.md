# HackTheBox - OpenVPN Setup & Guide 📦

Personal guide for connecting to HackTheBox lab networks (Starting Point & Main Labs) using OpenVPN.

---

## 📥 1. Getting the VPN Pack

1. Log in to [HackTheBox](https://app.hackthebox.com/).
2. Click **Connect to HTB** (top right) and choose your target lab:
   - **Starting Point** (for Starting Point machines)
   - **Labs** (for regular machines/challenges)
3. Select your protocol preference (**UDP 1337** or **TCP 443**) and download your `.ovpn` configuration file.

---

## 🚀 2. Connecting via Terminal

Navigate to where the `.ovpn` file was saved and launch OpenVPN with `sudo`:

```bash
sudo openvpn starting_point_amitpadhan525.ovpn
```

Wait until you see:
```text
Initialization Sequence Completed
```

Leave this terminal running in the background.

---

## 🔎 3. Verifying Connection

Open a new terminal tab to check the virtual network interface `tun0`:

```bash
ip a show dev tun0
```

You'll see an assigned IP like `10.10.14.x`. 

To verify connectivity to a target machine once spawned:
```bash
ping -c 4 <TARGET_IP>
```

---

## 🛠️ Handy Fixes & Commands

- **Switching to TCP:** If your network blocks UDP 1337, download the TCP 443 pack from the HTB portal.
- **Kill Stuck VPN Sessions:**
  ```bash
  sudo killall openvpn
  ```
- **Check Active Routing:**
  ```bash
  ip route | grep tun0
  ```
