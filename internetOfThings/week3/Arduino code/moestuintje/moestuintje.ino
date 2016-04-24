#include <ESP8266WiFi.h>
#include <ESP8266WiFiAP.h>
#include <ESP8266WiFiGeneric.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266WiFiScan.h>
#include <ESP8266WiFiSTA.h>
#include <ESP8266WiFiType.h>
#include <WiFiClient.h>
#include <WiFiClientSecure.h>
#include <WiFiServer.h>
#include <WiFiUdp.h>

#include <ESP8266HTTPClient.h>
char ssid[] = "*****";
char pass[] = "*****";
//int status = WL_IDLE_STATUS;
WiFiClient  client;

char* host = "www.lindavandijkdesign.nl";
String path = "/iot/eindopdracht/plant.json";
const int httpPort = 80;

int led1 = D0;
int led2 = D5;
int led3 = D6;
int led4 = D7;
int led5 = D8;
int trigPin = D1;
int echoPin = D2;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
  pinMode(led5, OUTPUT);

  Serial.begin(9600);
  WiFi.begin(ssid, pass);

  Serial.print("Connecting to ");
  Serial.println(ssid);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
}

void loop() {

  int duration, distance;
  digitalWrite(trigPin, LOW); 
  delayMicroseconds(200); 
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(1000);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = (duration/2) / 29.1;
  Serial.print ("distance ");
  Serial.println (distance);
  delay(500);
  String plant;


  HTTPClient http;

  http.begin("http://lindavandijkdesign.nl/iot/eindopdracht/output.txt"); 
  int httpCode = http.GET();        
  String payload = http.getString();

  Serial.println("Server: " + payload);

  
  if (payload == "night") {
    
    Serial.println("All lights off");
    digitalWrite(D0, LOW);
    digitalWrite(D5, LOW);
    digitalWrite(D6, LOW);
    digitalWrite(D7, LOW);
    digitalWrite(D8, LOW);
  } else {
    if (distance < 9) {
     plant = "1";
     digitalWrite(led1, HIGH); 
     Serial.println("Your plant is 1cm!");
    }  
    if (distance > 9) {       
     digitalWrite(led1, LOW);
     plant = "0";
    }
    
    if (distance < 8) {
     plant = "2";
     digitalWrite(led2, HIGH); 
     Serial.println("Your plant is 2cm!");
    }  
    if (distance > 8) {       
     digitalWrite(led2, LOW); 
    }
    
    if (distance < 7) {
     plant = "3";
     digitalWrite(led3, HIGH); 
     Serial.println("Your plant is 3cm!");
    }  
    if (distance > 7) {       
     digitalWrite(led3, LOW); 
    }
    
    if (distance < 6) {
     plant = "4";
     digitalWrite(led4, HIGH); 
     Serial.println("Your plant is 4cm!");
    }  
    if (distance > 6) {       
     digitalWrite(led4, LOW); 
    }
    
    if (distance < 5) {
     plant = "5";
     digitalWrite(led5, HIGH);
     Serial.println("Your plant is 5cm!"); 
    }  
    if (distance > 5) {       
     digitalWrite(led5, LOW); 
    }
  }

 // POST code Inspired by Leander
 // Define data
 String data;

 data = "plant="+plant;
 //check if and connect the nodeMCU to the server
 if (client.connect(host, httpPort)) {
   //make the POST headers and add the data string to it
   client.println("POST /iot/eindopdracht/index.php HTTP/1.1");
   client.println("Host: www.lindavandijkdesign.nl:80");
   client.println("Content-Type: application/x-www-form-urlencoded");
   client.println("Connection: close");
   client.print("Content-Length: ");
   client.println(data.length());
   client.println();
   client.print(data);
   client.println();
   Serial.println(data);
   Serial.println("Data send");
 } else {
   Serial.println("Something went wrong");
 }
     
  // wait .5s to reloop this loop
  delay(500);
} 





  
