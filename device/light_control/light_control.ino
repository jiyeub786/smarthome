#include <SoftwareSerial.h>

int hc_Rx = 12;                  //통신모듈 Tx - 아두이노 Rx
int hc_Tx = 13;                  //통신모듈 Rx - 아두이노 tx
int movingsensor = A5;                 //인체감지센서(현관)
int loca_SW = 11;                       //로커스위치를
int OUTDOOR = 2;                        //현관
int LIV = 3;                            //거실
int BATH = 4;                           //화장실    
int KITCH = 5;                          //부엌

int Btn_OUTDOOR = 6;              //현관 오프라인 스위치
int Btn_LIV = 7;                  //거실 오프라인 스위치
int Btn_BATH = 8;                 //화장실 오프라인 스위치
int Btn_KITCH = 9;                //부엌 오프라인 스위치

int Led_state[4] = {0};           //LED상태 값 1 => 켜짐,0 => 꺼짐  현관,거실,화장실,부엌
long temp_time = 0;                //동작감지용 시간 변수
long loop_timer = 0;               //30초마다 상태 전송을 위한 타이머
String inputString;               //전송받은 데이터 저장 문자열

/////////////////// 문자열 비교용 변수
const String cmd_outdoor_ON ="A041";
const String cmd_outdoor_OFF ="A040";
const String cmd_living_ON="A031";
const String cmd_living_OFF="A030";
const String cmd_bath_ON="A011";
const String cmd_bath_OFF="A010";
const String cmd_kitch_ON="A021";
const String cmd_kitch_OFF="A020";
const String cmd_all_ON="A101";
const String cmd_all_OFF="A100";
////////////////////////////////////////////////

SoftwareSerial hcSerial(hc_Rx,hc_Tx);  
 
void Moving_ISR();                     //인체감지센서 동작시 수행
void hcSerial_communication();         // 앱 동작 LED제어
void Led_ctr_sw();                     //스위치 동작 LED제어

void setup() {
  loop_timer = millis();
  pinMode(movingsensor,INPUT);         //인체감지센서를 입력으로 설정
  pinMode(OUTDOOR,OUTPUT);             //led를 출력으로 설정
  pinMode(LIV,OUTPUT);
  pinMode(BATH,OUTPUT);
  pinMode(KITCH,OUTPUT);
  
  pinMode(Btn_LIV,INPUT);              //버튼을 입력으로 설정
  pinMode(Btn_OUTDOOR,INPUT);
  pinMode(Btn_BATH,INPUT);
  pinMode(Btn_KITCH,INPUT);
  
  digitalWrite(OUTDOOR,LOW);
  digitalWrite(LIV,LOW);
  digitalWrite(BATH,LOW);
  digitalWrite(KITCH,LOW);
  
  
  pinMode(loca_SW,INPUT);              //loca_SW를 입력으로 설정
  hcSerial.begin(19200);
}

void loop() {
  if(digitalRead(loca_SW)==HIGH)                      //로커스위치의 상태가 1일떄(로커스위치가 ON으로 되어있을 때) 
  {
   Moving_ISR();                                    //Moving_ISR이라는 함수를 불러온다.
 }
   Led_ctr_sw();                                     //오프라인(스위치) LED 동작 함수
   hcSerial_communication();                         //hc-11 통신 부분 함수

/*   if(millis()-loop_timer >= 30000){                 //30초마다 상태 전송 1 => 켜짐,0 => 꺼짐  현관,거실,화장실,부엌
     hcSerial.print("LED");
     hcSerial.print(Led_state[0]);
     hcSerial.print("/");
     hcSerial.print(Led_state[1]);
     hcSerial.print("/");
     hcSerial.print(Led_state[2]);
     hcSerial.print("/");
     hcSerial.print(Led_state[3]);
     loop_timer = millis();
   }*/
}

void Moving_ISR(){                                   //Moving_ISR 함수 선언
  if(digitalRead(movingsensor)== HIGH)                //인체감지 센서 동작시 3초간 LED 켜짐
  {
    digitalWrite(OUTDOOR,HIGH);
    temp_time = millis();
  }
  if(millis()-temp_time >= 3000){
      digitalWrite(OUTDOOR,LOW);
  }
}
  
  
void Led_ctr_sw(){
  if(digitalRead(Btn_OUTDOOR)==HIGH){        //현관 스위치 온
    if(Led_state[0] == 0){
      ledON(OUTDOOR);
      Led_state[0] = 1;
      hcSerial.print("A041!");
      delay(300);
    }
    else{
      ledOFF(OUTDOOR);                      //현관 스위치 오프
      Led_state[0] = 0;
      hcSerial.print("A040!");
      delay(300);
    }
  }    
  if(digitalRead(Btn_LIV)==HIGH){          //거실 스위치 온
    if(Led_state[1] == 0){
      ledON(LIV);
      Led_state[1] = 1;
      hcSerial.print("A031!");
      delay(300);
    }
    else{
      ledOFF(LIV);                        //거실 스위치 오프
      Led_state[1] = 0;
      hcSerial.print("A030!");
      delay(300);
    }
  }
  if(digitalRead(Btn_BATH)==HIGH){        //욕실 스위치 온
    if(Led_state[2] == 0){
      ledON(BATH);
      Led_state[2] = 1;
      hcSerial.print("A011!");
      delay(300);
    }
    else{
      ledOFF(BATH);                      //욕실 스위치 오프
      Led_state[2] = 0;
      hcSerial.print("A010!");;
      delay(300);
    }
  }
  if(digitalRead(Btn_KITCH)==HIGH){      //주방 스위치 온
    if(Led_state[3] == 0){
      ledON(KITCH);
      Led_state[3] = 1;
      hcSerial.print("A021!");
      delay(300);
    }
    else{
      ledOFF(KITCH);                    //주방 스위치 오프
      Led_state[3] = 0;
      
      hcSerial.print("A020!");
      delay(300);
    }
  }
}
void hcSerial_communication(){    // 앱 동작 LED제어

  if(hcSerial.available())
  {
    char data = (char)hcSerial.read();
    
    inputString += data;
     
    if(inputString.equals(cmd_outdoor_ON))    //웹 동작 현관 LED 온
    { inputString ="";
      ledON(OUTDOOR);
      Led_state[0] = 1;
      hcSerial.print("A041!");
      
      
    }
    if(inputString.equals(cmd_living_ON))    //웹 동작 거실 LED 온
    { inputString ="";
      ledON(LIV);
      Led_state[1] = 1;
      hcSerial.print("A031!");
      
    }
    if(inputString.equals(cmd_bath_ON))      //웹 동작 욕실 LED 온
    { inputString ="";
      ledON(BATH);
      Led_state[2] = 1;
      hcSerial.print("A011!");
    }
    if(inputString.equals(cmd_kitch_ON))      //웹 동작 주방 LED 온
    { inputString ="";
      ledON(KITCH);
      Led_state[3] = 1;
      hcSerial.print("A021!");
    }
    if(inputString.equals(cmd_outdoor_OFF))    //웹 동작 현관 LED 오프
    { inputString ="";
      ledOFF(OUTDOOR);
      Led_state[0] = 0;
      hcSerial.print("A040!");
    }
    if(inputString.equals(cmd_living_OFF))    //웹 동작 거실 LED 오프
    { inputString ="";
      ledOFF(LIV);
      Led_state[1] = 0;
           hcSerial.print("A030!");
    } 
    if(inputString.equals(cmd_bath_OFF))    //웹 동작 욕실 LED 오프
    { inputString ="";
      ledOFF(BATH);
      Led_state[2] = 0;
      hcSerial.print("A010!");
    }
    if(inputString.equals(cmd_kitch_OFF))    //웹 동작 주방 LED 오프
    { inputString ="";
      ledOFF(KITCH);
      Led_state[3] = 0;
      hcSerial.print("A020!");
    }
    if(inputString.equals(cmd_all_ON))       //웹 동작 전체 LED 온
    { inputString ="";
      ledON(OUTDOOR);
      ledON(LIV);
      ledON(BATH);
      ledON(KITCH);
      Led_state[0] = 1;
      Led_state[1] = 1;
      Led_state[2] = 1;
      Led_state[3] = 1;
      hcSerial.print("A101!");
    }
    if(inputString.equals(cmd_all_OFF))    //웹 동작 전체 LED 오프
    { inputString ="";
      ledOFF(OUTDOOR);
      ledOFF(LIV);
      ledOFF(BATH);
      ledOFF(KITCH);
      Led_state[0] = 0;
      Led_state[1] = 0;
      Led_state[2] = 0;
      Led_state[3] = 0;
      hcSerial.print("A100!");
    }
  }
  else
  inputString ="";

}

void ledON(int pin){
  digitalWrite(pin,HIGH);
  delay(10);
}

void ledOFF(int pin){
  digitalWrite(pin,LOW);
  delay(10);
}
