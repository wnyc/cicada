
// Example 07 - Blinking LED at rate of light
// AND send it to the computer

// John Keefe
// May 22, 2011

#define LED 13
#define SENSOR 0

long sum = 0;
int icewater = 916;
int bodytemp = 604 - icewater;
void setup() {
 
 pinMode(LED, OUTPUT); // Sets digital pin 13 as output
 // Note: analog pins always set as inputs
 
 // open serial port to send data to Mac
 Serial.begin(9600); 
 
}

void loop() {
  sum = 0;
  sum += analogRead(SENSOR);
  delay(100);
  sum += analogRead(SENSOR);
  delay(100);
  sum += analogRead(SENSOR);
  delay(100);
  sum += analogRead(SENSOR);
  delay(100);
  sum += analogRead(SENSOR);
  delay(100);
  sum += analogRead(SENSOR);
  delay(100);
  sum += analogRead(SENSOR);
  delay(100);
  sum += analogRead(SENSOR);
   sum /= 8; 
  // read the value from sensor (0)
                       // returns 0-1023
  
  sum -= icewater;
  sum *= 37;
  sum /= bodytemp;
  // print value to serial port
  Serial.print(sum);
  Serial.print("C, ");
  Serial.print(sum * 9 / 5 + 32);
  Serial.println("F");
}
