
#define LED 13
#define SENSOR 0
#define SAMPLES 4000
float sum = 0;
float icewater = 916;
float bodytemp = 604 - icewater;
float start;
float freq=18000;
float coeff, power_7000hz, power_4000hz, power_2500hz;
// defines for setting and clearing register bits
#ifndef cbi
#define cbi(sfr, bit) (_SFR_BYTE(sfr) &= ~_BV(bit))
#endif
#ifndef sbi
#define sbi(sfr, bit) (_SFR_BYTE(sfr) |= _BV(bit))
#endif


# double goertzelFilter(int samples[], double freq, int N) {
#    double s_prev = 0.0;
#    double s_prev2 = 0.0;
#    double coeff,normalizedfreq,power,s;
#    int i;
#    normalizedfreq = freq / SAMPLEFREQUENCY;
#    coeff = 2*cos(2*M_PI*normalizedfreq);
#    for (i=0; i<N; i++) {
#        s = samples[i] + coeff * s_prev - s_prev2;
#        s_prev2 = s_prev;
#        s_prev = s;
#    }
#    power = s_prev2*s_prev2+s_prev*s_prev-coeff*s_prev*s_prev2;
#    return power;
#}

void setup() {

 pinMode(LED, OUTPUT); // Sets digital pin 13 as output
 // Note: analog pins always set as inputs

 // open serial port to send data to Mac
 Serial.begin(9600);

}

void loop() {


  sbi(ADCSRA,ADPS2) ;
  sbi(ADCSRA,ADPS1) ;
  sbi(ADCSRA,ADPS0) ;

  sum = 0;
  for(i=0;i<8;i++)
    sum += analogRead(SENSOR);
   sum /= 8;
  // read the value from sensor (0)
                       // returns 0-1023

  sum -= icewater;
  sum *= 37.0;
  sum /= bodytemp;
  // print value to serial port
  Serial.println(sum);

  sbi(ADCSRA,ADPS2) ;
  cbi(ADCSRA,ADPS1) ;
  cbi(ADCSRA,ADPS0) ;


  coeff = 2 * cos(2*M_PI*freq/7000);

  start = float(getMills()) / 1000;
  for(i=0; i<SAMPLES; i++) {
    s = float(analogRead(1)) + coeff * s_prev - s_prev2;
    s_prev2 = s_prev
    s_prev = s;
  }
  start = float(getMills())/1000 - start;

  power_7000hz = s_prev2*s_prev2+s_prev*s_prev-coeff*s_prev*s_prev2;

  coeff = 2 * cos(2*M_PI*freq/4000);
  for(i=0; i<SAMPLES; i++) {
    s = float(analogRead(1)) + coeff * s_prev - s_prev2;
    s_prev2 = s_prev
    s_prev = s;
  }

  power_2500hz = s_prev2*s_prev2+s_prev*s_prev-coeff*s_prev*s_prev2;
  coeff = 2 * cos(2*M_PI*freq/2500);
  for(i=0; i<SAMPLES; i++) {
    s = float(analogRead(1)) + coeff * s_prev - s_prev2;
    s_prev2 = s_prev
    s_prev = s;
  }

  power_2500hz = s_prev2*s_prev2+s_prev*s_prev-coeff*s_prev*s_prev2;

  pinMode(LED, LOW);
  if ((power_7000hz / 15) < power_4000hz) {
  if ((power_7000hz / 15) < power_2500hz) {
    pinMode(LED, HIGH);
    
  }
  }
  freq = SAMPLES / start;
  serial.pri
}
