/*
  WriteVoltage
  
  Reads an analog voltage from pin 0, and writes it to a channel on ThingSpeak every 20 seconds.
  
  ThingSpeak ( https://www.thingspeak.com ) is a free IoT service for prototyping
  systems that collect, analyze, and react to their environments.
  
  Copyright 2015, The MathWorks, Inc.
  
  Documentation for the ThingSpeak Communication Library for Arduino is in the extras/documentation folder where the library was installed.
  See the accompaning licence file for licensing information.
*/

int ledPin = D2;
int inputSensor = D5;
int pirState = LOW;
int valueSensor = 0;
int inputPot = A0;
int valuePot = 0;

#ifdef SPARK
	#include "ThingSpeak/ThingSpeak.h"
#else
	#include "ThingSpeak.h"
#endif

/// ***********************************************************************************************************
// This example selects the correct library to use based on the board selected under the Tools menu in the IDE.
// Yun, Wired Ethernet shield, wi-fi shield, esp8266, and Spark are all supported.
// With Uno and Mega, the default is that you're using a wired ethernet shield (http://www.arduino.cc/en/Main/ArduinoEthernetShield)
// If you're using a wi-fi shield (http://www.arduino.cc/en/Main/ArduinoWiFiShield), uncomment the line below
// ***********************************************************************************************************
//#define USE_WIFI_SHIELD
#ifdef ARDUINO_ARCH_AVR

  #ifdef ARDUINO_AVR_YUN
    #include "YunClient.h"
    YunClient client;
  #else

    #ifdef USE_WIFI_SHIELD
      #include <SPI.h>
      // ESP8266 USERS -- YOU MUST COMMENT OUT THE LINE BELOW.  There's a bug in the Arduino IDE that causes it to not respect #ifdef when it comes to #includes
      // If you get "multiple definition of `WiFi'" -- comment out the line below.
      //#include <WiFi.h>
      char ssid[] = "Linda";          //  your network SSID (name) 
      char pass[] = "***";   // your network password
      int status = WL_IDLE_STATUS;
      WiFiClient  client;
    #else
      // Use wired ethernet shield
      #include <SPI.h>
      #include <Ethernet.h>
      byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
      EthernetClient client;
    #endif
  #endif
  // On Arduino:  0 - 1023 maps to 0 - 5 volts
  #define VOLTAGE_MAX 5.0
  #define VOLTAGE_MAXCOUNTS 1023.0
#endif

#ifdef ARDUINO_ARCH_ESP8266
  #include <ESP8266WiFi.h>
  char ssid[] = "Linda";          //  your network SSID (name) 
  char pass[] = "***";   // your network password
  int status = WL_IDLE_STATUS;
  WiFiClient  client;
  // On ESP8266:  0 - 1023 maps to 0 - 1 volts
  #define VOLTAGE_MAX 1.0
  #define VOLTAGE_MAXCOUNTS 1023.0
#endif

#ifdef SPARK
    TCPClient client;
    // On Particle: 0 - 4095 maps to 0 - 3.3 volts
    #define VOLTAGE_MAX 3.3
    #define VOLTAGE_MAXCOUNTS 4095.0
#endif

/*
  *****************************************************************************************
  **** Visit https://www.thingspeak.com to sign up for a free account and create
  **** a channel.  The video tutorial http://community.thingspeak.com/tutorials/thingspeak-channels/ 
  **** has more information. You need to change this to your channel, and your write API key
  **** IF YOU SHARE YOUR CODE WITH OTHERS, MAKE SURE YOU REMOVE YOUR WRITE API KEY!!
  *****************************************************************************************/
unsigned long myChannelNumber = 106583;
const char * myWriteAPIKey = "EZGGXKFWCPY1UM9F";

void setup() {
  #if defined(ARDUINO_ARCH_AVR) || defined(ARDUINO_ARCH_ESP8266)
    #ifdef ARDUINO_AVR_YUN
      Bridge.begin();
    #else
      #if defined(USE_WIFI_SHIELD) || defined(ARDUINO_ARCH_ESP8266)
        WiFi.begin(ssid, pass);
      #else
        Ethernet.begin(mac);
      #endif
    #endif
  #endif

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

  // Write to ThingSpeak. There are up to 8 fields in a channel, allowing you to store up to 8 different
  // pieces of information in a channel.  Here, we write to field 1.
  ThingSpeak.writeField(myChannelNumber, 1, valueSensor, myWriteAPIKey);
  
  delay(20000); // ThingSpeak will only accept updates every 15 seconds.
  ThingSpeak.writeField(myChannelNumber, 2, valuePot, myWriteAPIKey);
}
