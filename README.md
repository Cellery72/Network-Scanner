# Home Network Profiler
---------------------------

### Description

Home Network Profiler (HNP) is a program I am creating to track the connected devices on my LAN at home. This repository will serve not only as a way of storing the code I write, but also to document what I want to get out of this project, or what the problem exactly is that I'm trying to solve. My goal is to influence and help others who may be looking at going through the exact process or something similar. 


### My Goal and the Problem to Solve

Recently I've built a NAS (Network-attached storage) to host my plex library, personal owncloud installation and a few other trivial usages. With the added IP addresses coming from the FreeNAS box coupled with the plentiful devices in my home already, at any given time I have anywhere from 7-15 devices connected to the network.. less than ideal to keep track of/manage various static and dynamic IP and MAC addresses currently assigned. My ISP in this case is Rogers and they provide a relatively straight forward GUI in regards to accessing or managing your LAN settings. Simply type in the IP address of your gateway into the URL bar at the top of a browser and sign in with default credentials to customize your settings.

The following section contains what I call 'Psedu Steps' or in other words, my fictious process on how I percieve this whole series of events will take place.

##### Psedu Steps
1. First thing is to identify the IP address of (and navigate to) your Gateway in order to log into the web GUI provided by your ISP.
2. Log in with the default credentials or custom credentials if you have set some.
3. Once logged in, navigate to the tab or page containing the list of connected devices. If you are lucky you should be able to find a nicely formatted list of data pertaining to the currently connected devices on the LAN.
 **ex:** Mine happens to be under the 'Security' tab and the 'Device Filter' subtab. 

4. With the list in front of you, identify what the trigger is that causes either the refersh or update process to occur. 
 **ex:** Mine has a clearly labeled 'Refresh' button beside the 'Connected Devices' heading.

5. With the trigger clearly identified it's time to find out what the actual request looks like that gets us our data..
 **ex:** In my case, once authenticated (ie. already have a cookie) simply sending a GET request to the URL '192.168.0.1/data/getConnectInfo.asp' returned an array of objects representing the connected devices. 

6. Now that we have identified what the request looks like that gets us the data we are looking for, we can write a simple script using any language or tools you like. Preferably what this script will do is:
a) send an initial request to authenticate to the gateway (192.168.0.1 in my case) 
b) send a subsequent request to return the data of the connected devices.
c) manipulate the data to suit your needs, perhaps to keep track of online vs. offline, 2.4ghz vs. 5ghz, IPV4 vs. IPV6 etc.
d) store the data in a database of your choice
 **ex:** I personally will use [Node.js](https://nodejs.org/en/), [Cheerio](https://github.com/cheeriojs/cheerio) and [Request](https://www.npmjs.com/package/request).

7. That's pretty much it.. at this point that's all the steps I can think of, eventually we will add in more steps of creating a GUI to accurately articulate the online/offline devices in realtime, however that's not a priority at this time.

### Summary

While I've provided a high level overview of the general process I plan to take, a lot of learning will be done over the course of this project and I will attempt to document as much of it as possible in hopes that it will educate or prove meaningful for atleast one other human. I look forward to starting this project and creating a great application for personal use!


## Questions or Comments?
If you have questions or would like to contact me about this project you can send me an email at justin_ellery@hotmail.ca
