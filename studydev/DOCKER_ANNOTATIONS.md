## download docker
the way that worked was :
Install Docker Desktop
Recommended approach to install Docker Desktop on Ubuntu:

- Download latest DEB package.(https://desktop.docker.com/linux/main/amd64/135262/docker-desktop-4.27.0-amd64.deb?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-linux-amd64&_gl=1*178u9tg*_ga*MTgwNTU2NzI3MC4xNzA2NzA0ODQ1*_ga_XJWPQMJYHQ*MTcwNjcxMDA5Ny4zLjEuMTcwNjcxMjA3Mi41Ni4wLjA.)


- runnig:
sudo apt-get update
sudo apt-get install ./docker-desktop-<version>-<arch>.deb

- launch:
systemctl --user start docker-desktop

- If you want to run docker as non-root user then you need to add it to the docker group.

Create the docker group if it does not exist
$ sudo groupadd docker
Add your user to the docker group.
$ sudo usermod -aG docker $USER
Log in to the new docker group (to avoid having to log out / log in again; but if not enough, try to reboot):
$ newgrp docker
Check if docker can be run without root
$ docker run hello-world
Reboot if still got error

$ reboot