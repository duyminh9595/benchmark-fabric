aus-org: 34.151.86.206
docker swarm join --token SWMTKN-1-6542fnsbni6345y88cxolh0d48a7w9h1v5q9xri9wd0z1r1p9l-4y5rab5z7rp6gn9a72yulz9i9 130.211.113.30:2377  --advertise-addr 34.151.86.206
cohuong-org : 35.192.101.108
docker swarm join --token SWMTKN-1-6542fnsbni6345y88cxolh0d48a7w9h1v5q9xri9wd0z1r1p9l-4y5rab5z7rp6gn9a72yulz9i9 130.211.113.30:2377  --advertise-addr 35.192.101.108
eu - org : 34.140.196.82
docker swarm join --token SWMTKN-1-6542fnsbni6345y88cxolh0d48a7w9h1v5q9xri9wd0z1r1p9l-4y5rab5z7rp6gn9a72yulz9i9 130.211.113.30:2377  --advertise-addr 34.140.196.82
jp-org : 34.85.123.204
docker swarm join --token SWMTKN-1-6542fnsbni6345y88cxolh0d48a7w9h1v5q9xri9wd0z1r1p9l-4y5rab5z7rp6gn9a72yulz9i9 130.211.113.30:2377  --advertise-addr 34.85.123.204
sing-org : 34.87.92.12
docker swarm join --token SWMTKN-1-6542fnsbni6345y88cxolh0d48a7w9h1v5q9xri9wd0z1r1p9l-4y5rab5z7rp6gn9a72yulz9i9 130.211.113.30:2377  --advertise-addr 34.87.92.12
thayson-org : 130.211.113.30

us-org : 34.133.136.255
docker swarm join --token SWMTKN-1-6542fnsbni6345y88cxolh0d48a7w9h1v5q9xri9wd0z1r1p9l-4y5rab5z7rp6gn9a72yulz9i9 130.211.113.30:2377  --advertise-addr 34.133.136.255

docker swarm init --advertise-addr 130.211.113.30

docker swarm join --token SWMTKN-1-6542fnsbni6345y88cxolh0d48a7w9h1v5q9xri9wd0z1r1p9l-4y5rab5z7rp6gn9a72yulz9i9 130.211.113.30:2377  --advertise-addr 34.151.86.206

docker network create --attachable --driver overlay artifacts_thesis

extra_hosts:
      - "orderer.thesis.com:130.211.113.30"
      - "orderer2.thesis.com:130.211.113.30"
      - "orderer3.thesis.com:130.211.113.30"
      - "peer0.thayson.thesis.com:130.211.113.30"
      - "peer1.thayson.thesis.com:130.211.113.30"
      - "peer0.cohuong.thesis.com:35.192.101.108"
      - "peer1.cohuong.thesis.com:35.192.101.108"
      - "peer0.nodeaus.thesis.com:34.151.86.206"
      - "peer1.nodeaus.thesis.com:34.151.86.206"
      - "peer0.nodeeu.thesis.com:34.140.196.82"
      - "peer1.nodeeu.thesis.com:34.140.196.82"
      - "peer0.nodejapan.thesis.com:34.85.123.204"
      - "peer1.nodejapan.thesis.com:34.85.123.204"
      - "peer0.nodesing.thesis.com:34.87.92.12"
      - "peer1.nodesing.thesis.com:34.87.92.12"
      - "peer0.nodeus.thesis.com:34.133.136.255"
      - "peer1.nodeus.thesis.com:34.133.136.255"


aus-org: 34.151.86.206
docker swarm join --token SWMTKN-1-6542fnsbni6345y88cxolh0d48a7w9h1v5q9xri9wd0z1r1p9l-4y5rab5z7rp6gn9a72yulz9i9 130.211.113.30:2377  --advertise-addr 34.151.86.206

eu - org : 34.140.196.82
docker swarm join --token SWMTKN-1-6542fnsbni6345y88cxolh0d48a7w9h1v5q9xri9wd0z1r1p9l-4y5rab5z7rp6gn9a72yulz9i9 130.211.113.30:2377  --advertise-addr 34.140.196.82

sing-org : 34.87.92.12
docker swarm join --token SWMTKN-1-6542fnsbni6345y88cxolh0d48a7w9h1v5q9xri9wd0z1r1p9l-4y5rab5z7rp6gn9a72yulz9i9 130.211.113.30:2377  --advertise-addr 34.87.92.12

us-org : 34.133.136.255
docker swarm join --token SWMTKN-1-6542fnsbni6345y88cxolh0d48a7w9h1v5q9xri9wd0z1r1p9l-4y5rab5z7rp6gn9a72yulz9i9 130.211.113.30:2377  --advertise-addr 34.133.136.255