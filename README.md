Traffic Recorder
=======================

A tool written in Node.js to save all http(s) request data on disk.

How to use
-----------------
0. install nodeJS ,then
``sudo npm install -g trafficrecorder``

0. start recorder by ``tr <dir>`` or ``trafficrecorder <dir>``, here **dir** is the folder you want to save your file 

0. set proxy to **http://127.0.0.1:8001**

0. all http(s) traffic through this proxy will be saved

Sample Result
------------------
--TODO--

Others
------------------
This tool is a developed on [anyproxy](https://github.com/alibaba/anyproxy). To use https features, you should trust a root CA generated by anyproxy. Instruction can be found here [anyproxy](https://github.com/alibaba/anyproxy).


