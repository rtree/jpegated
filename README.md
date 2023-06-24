
A project repository for ETHGlobal Waterloo (2023)
https://twitter.com/rtree

## Polygon Prize Eligibility



## How to demo

1)Check IP of windows and WSL windows: 10.30.3.251 <-----External accessble IP WSL : 172.25.60.92 <-----Ubuntu IP

2)[Windows] Port forward netsh.exe interface portproxy add v4tov4 listenaddress=* listenport=3000 connectaddress=172.25.60.92 connectport=3000

3)[Windows] Open firewall 3000 port

4)[WSL] Make cert for npm using WINDOWS IP

5)[WSL] npm start HTTPS=true SSL_CRT_FILE=cert.pem SSL_KEY_FILE=key.pem npm start

*)DEBUG from PC chrome://inspect/#devices

Access https://10.30.3.251:3000 from Mobile.



