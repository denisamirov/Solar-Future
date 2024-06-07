#define SerialTxControl 2
#define Relay 8                     //Подключено реле
#define RS485Transmit HIGH
#define RS485Receive LOW

char buffer[100];
byte state = 0;

unsigned long ping_next, t;
unsigned int ping_to = 500;

void setup(void) {
    Serial.begin(9600);
    pinMode(13, OUTPUT);
    pinMode(Relay, OUTPUT);                         
    pinMode(SerialTxControl, OUTPUT);
    digitalWrite(SerialTxControl, RS485Receive);
}
 
void loop(void) {
    int i=0;
    if (Serial.available()) {
        delay(15);

        while (Serial.available()) {
            buffer[i++] = Serial.read();
        }

        if (i>0) {
            buffer[i++]='\0';
            checker(buffer);

            if (!strcmp(buffer, "pong")) {
                digitalWrite(13, state);
                state = !state;
            }

        }
    }
}

// Отправить сообщение на физический интерфейс RS-485
void sendInPort() {
  ping_next = t + ping_to;
  digitalWrite(SerialTxControl, RS485Transmit);
  Serial.print("ping"); 
  delay(10);
  digitalWrite(SerialTxControl, RS485Receive);
}

// Вывести значение с аналогового входа
void getAnalog(int numb) {
  Serial.println("Напряжение - " + String(numb));               // Отладочный вывод
  sendInPort();                                                 // Отправка на физический интерфейс сообщения
}

// Изменить состояние сигнала
void changePin(int pinNumber, int action) {
  if (String(action) == "0") {
    digitalWrite(pinNumber, LOW);
  }
  if (String(action) == "1") {
    Serial.println("Включили " + String(pinNumber));
    digitalWrite(pinNumber, HIGH);
  }
}

// Проверка
void checker(String buffer) {
  Serial.println(buffer.substring(0,1));
  Serial.println(buffer.substring(2,3).toInt());
  Serial.println(buffer.substring(4,6).toInt());

  if ( buffer.substring(0,1) == "A" ) {
    int x = buffer.substring(0,1).toInt();
    getAnalog(x);
  }

  if ( buffer.substring(0,1) == "D" ) {
    changePin(buffer.substring(2,3).toInt(), buffer.substring(4,6).toInt());
  }
}



