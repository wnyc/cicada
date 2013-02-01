import urllib
import serial
import sys

print "Using %s" % sys.argv[1]
arduino = serial.Serial(sys.argv[1], 9600)

while True:
    data = arduino.readline().split(':')
    print data
    temp = data[0]
    high = data[1]
    low = data[2]
    params = urllib.urlencode({'temp': temp, '7000': high, '4000':0, '2500': low})
    f = urllib.urlopen("http://192.168.1.12:8000/readings/listen/", params)
    print f.read()