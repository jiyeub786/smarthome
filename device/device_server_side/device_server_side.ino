#include <SoftwareSerial.h>

int hc_Rx = 8;
int hc_Tx = 9;

SoftwareSerial hcSerial(hc_Rx,hc_Tx);

char input; 
char output;

void setup() {
   hcSerial.begin(19200);
 Serial.begin(9600,SERIAL_8N1);
}

void loop() {
// server -> device
  if(Serial.available()>0)
  {
    output=Serial.read();
    hcSerial.print(output,DEC);
    hcSerial.flush();
 
  } 
 
//device -> server

if(hcSerial.available()>0)
  {
    input =hcSerial.read();
    Serial.println(input,DEC);
    Serial.flush();
   }


  
  
}
