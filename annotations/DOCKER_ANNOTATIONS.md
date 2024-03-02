## download docker
the way that worked for me was :
> Install Docker Desktop Recommended approach to install Docker Desktop on Ubuntu:
>
>Download latest [DEB package.](https://desktop.docker.com/linux/main/amd64/135262/docker-desktop-4.27.0-amd64.deb?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-linux-amd64&_gl=1*178u9tg*_ga*MTgwNTU2NzI3MC4xNzA2NzA0ODQ1*_ga_XJWPQMJYHQ*MTcwNjcxMDA5Ny4zLjEuMTcwNjcxMjA3Mi41Ni4wLjA)


- than run:
```
sudo apt-get update
sudo apt-get install ./docker-desktop-<version>-<arch>.deb
```

- launch:
```
systemctl --user start docker-desktop
```

## If you want to run docker as non-root user then you need to add it to the docker group.


### Create the docker group if it does not exist

```
sudo groupadd docker
```

### Add your user to the docker group.

```
sudo usermod -aG docker $USER
```

### Log in to the new docker group (to avoid having to log out / log in again; but if not enough, try to reboot):

```
newgrp docker
```

### Check if docker can be run without root

```
docker run hello-world

```

### Reboot if still got error

```
reboot
```
# i got some troubleshhot when i was running my docker container

I was getting this error bellow; 
```
Error response from daemon: driver failed programming external connectivity on endpoint easy-php-setup-adminer-1 (98c0ddf788b9acc5520617174ca7854ccddc1b85f77d41cca13a212e0379cf39): Bind for 0.0.0.0:8001 failed: port is already allocated
```
the port 8001 was already allocated because a have ran a container abbafy before the easy-setup-php container and i got this conflit.
what i did was:

### 1. Identify the Process Using the Port
You can use the lsof command to identify which process is using the port 8001. Open a terminal and run:
```
sudo lsof -i :8001
```

### 2. Stop the Conflicting Process:
I stoped the process using port 8001 for the reason it was not critical

```
sudo kill -9 <PID>
```
*-9 option, as it forcefully kills the process.*

### 3. Check for Docker Container or Service Remnants:
than i just ran the *docker compose down* (is the configured command to stop the running container).
```
docker compose down
```

## to have sure i didn't have nothing more left from those containers i found these steps:

## 4. Check for Docker Container Remnants:
Use the following command to list all running containers:
```
docker ps
```

If you see any containers still running, stop them using:
```
docker stop <container_id>
```
Replace <container_id> with the actual container ID.

### 5. Check for Orphaned Docker Networks:
It's possible that there are orphaned Docker networks that might be causing conflicts. You can list all Docker networks using:
```
docker network ls
```
If you find any networks associated with the previous containers, you can remove them using:

```
docker network rm <network_id>
```
Replace <network_id> with the actual network ID.

after all this process a could run my container again :p.

### 5. reset your docker service
> !! only if necessary when your docker container still got an error on your local host

```
sudo service docker restart
```
