
int ledPin = D2;
int inputSensor = D5;
int pirState = LOW;
int valueSensor = 0;
int inputPot = A0;
int valuePot = 0;

#include "ThingSpeak.h"
#include <ESP8266WiFi.h>

char ssid[] = "Linda";          //  your network SSID (name) 
char pass[] = "***";   // your network password
int status = WL_IDLE_STATUS;
WiFiClient  client;

unsigned long myChannelNumber = 106583;
const char * myWriteAPIKey = "EZGGXKFWCPY1UM9F";

void setup() {
 
  pinMode(ledPin, OUTPUT);
  pinMode(inputSensor, INPUT);
  pinMode(inputPot, INPUT);
  
  Serial.begin(9600);
 
  ThingSpeak.begin(client);
}

void loop() {
  valueSensor = digitalRead(inputSensor); // read input
  if (valueSensor == 1) { // input HIGH
      digitalWrite(ledPin, HIGH); // LED ON
      if (pirState == LOW) {
      
          // we have just turned on
          Serial.println("Motion Detected!!");
          
          // We only want to print on the output change, not state
          pirState = HIGH;
      }
  } else {
  
      digitalWrite(ledPin, LOW); // turn LED OFF
      if (pirState == HIGH){
      
      // we have just turned of
      Serial.println("Motion ended!");
      
      // We only want to print on the output change, not state
      pirState = LOW;
      }
  }
  
  valuePot = analogRead(inputPot);
  Serial.println(valuePot);

  // Write to ThingSpeak.
  delay(15000);
  ThingSpeak.writeField(myChannelNumber, 1, valueSensor, myWriteAPIKey);
  delay(15000); // ThingSpeak will only accept updates every 15 seconds.
  ThingSpeak.writeField(myChannelNumber, 2, valuePot, myWriteAPIKey);
}
