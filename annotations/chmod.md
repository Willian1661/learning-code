## File Permissions in Linux

### To change permissions of a file or directory
chmod <operation> <file/dir>        

### Granting read permission to a file.
chmod +r sample.sh
### Granting write permission to a file
chmod +y sanple.sh
### Granting execute permission to a file.
chmod +*" sample.sh

### Revoking write permission from a file
chmod -r sample.sh
### Revoking read permission from a file
chmod -w sample.txt
### Revoking execute permission from a file.
chmod -x sample.txt

### Revoking read permission from directory recursively.
sudo chmod -R -r directory