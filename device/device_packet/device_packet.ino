
typedef struct {
unsigned char m_start;
unsigned char m_length;
const char *m_msg;
unsigned char m_end;
}message;

void check(char *data){
char *msg=data;
char msg1[100];
if(strstr(msg,"11"))
{
  Serial.println("find!!");





if(strstr(msg,"255"))
{}



}
  
}

char song[]="255";
const unsigned char SEND_ST1= 0x11;
const unsigned char SEND_ST2= 0x22;
const unsigned char SEND_DEST= 0x44;
const unsigned char SEND_DATA= 'g';
const unsigned char SEND_END= 0xff;

void setup() {
Serial.begin(9600);


} 
void loop() {


message *msg;

msg->m_start=SEND_ST1;
msg->m_end=SEND_END;
msg->m_length=strlen(song);   
msg->m_msg=song;

Serial.println(song[0]);
Serial.println(song[1]);

check(song);
delay(10);
}


void snedDATA(){

Serial.print(  (unsigned char) SEND_ST1) ;
Serial.print( (unsigned char) SEND_ST2);
Serial.print(  (unsigned char)SEND_DEST);
Serial.print( (char) SEND_DATA);
Serial.print( (unsigned char)SEND_END);
delay(1000);
}

