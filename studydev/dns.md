## What is DNS?
The Domain Name System (DNS) is the **phonebook of the Internet**. Humans access information online through _domain names_, like:
*nytimes.com or espn.com.* Web browsers interact through **Internet Protocol (IP) addresses**. 
>DNS translates domain names to **IP addresses** so browsers can load Internet resources.

Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).

**MORE INFORMATION : https://www.cloudflare.com/learning/dns/what-is-dns/**

## How does DNS work?
The process of DNS resolutioN convertS a hostname *(such as www.example.com)* into a **computer-friendly IP address (such as 192.168.1.1)**. An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - **like a street address** is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.

In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.

## The 8 steps in a DNS lookup:
**1.** A user types ‘example.com’ into a web browser and the query travels into the Internet and is received by a DNS recursive resolver.

**2.** The resolver then queries a DNS root nameserver (.).

**3.** The root server then responds to the resolver with the address of a Top Level Domain (TLD) DNS server (such as .com or .net), which stores the information for its domains. When searching for example.com, our request is pointed toward the .com TLD.

**4.** The resolver then makes a request to the .com TLD.

**5.** The TLD server then responds with the IP address of the domain’s nameserver, example.com.

**6.** Lastly, the recursive resolver sends a query to the domain’s nameserver.

**7.**The IP address for example.com is then returned to the resolver from the nameserver.

**8.**The DNS resolver then responds to the web browser with the IP address of the domain requested initially.

>Once the 8 steps of the DNS lookup have returned the IP address for example.com, the browser is able to make the request for the web page:

**9.**The browser makes a HTTP request to the IP address.

**10.** The server at that IP returns the webpage to be rendered in the browser (step 10).