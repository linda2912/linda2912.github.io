#include <EIoTCloudRestApi.h>
#include <EIoTCloudRestApiConfig.h>

EIoTCloudRestApi eiotcloud;

int ledPin = D2;
int inputSensor = D5;
int pirState = LOW;
int valueSensor = 0;
int inputPot = A0;
int valuePot = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(inputSensor, INPUT);
  pinMode(inputPot, INPUT);
  
  Serial.begin(9600);
  eiotcloud.begin();
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
  valuePot = valuePot / 100;
  Serial.println(valuePot);

  eiotcloud.sendParameter("5703b4e3c943a0661cf314a5/biQ2JZ8N9Ip0N6ta", valueSensor);
  eiotcloud.sendParameter("5703b4e3c943a0661cf314a5/q6THM15scqvwtwLD", valuePot);
 }

