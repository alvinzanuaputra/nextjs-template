from socket import *
import socket
import threading
import logging
import time
import sys
from datetime import datetime
class ProcessTheClient(threading.Thread):
        def __init__(self,connection,address):
                self.connection = connection
                self.address = address
                threading.Thread.__init__(self)

        def run(self):
                while True:
                        data = self.connection.recv(32)
                        balas=data.decode()
                        quit_check = 0
                        if data:
                                print(data)
                                req_data = data.decode()
                                if (req_data.startswith("TIME") and req_data.endswith("\r\n")):
                                        now = datetime.now()
                                        #jam = now.strftime("%d %m %y %H:%M:%S\r\n")
                                        #print(jam)
                                        balas= now.strftime("JAM %d %m %y %H:%M:%S\r\n")
                                        self.connection.sendall(balas.encode())
                                elif(req_data.startswith("QUIT") and req_data.endswith("\r\n")):
                                        quit_check = 1
                                        self.connection.close()
                                        break
                                else:
                                        self.connection.sendall(balas.encode())

                        else:
                                break
		self.connection.close()

class Server(threading.Thread):
        def __init__(self):
                self.the_clients = []
                self.my_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                threading.Thread.__init__(self)

        def run(self):
                self.my_socket.bind(('0.0.0.0',45000))
                self.my_socket.listen(1)
                while True:
                        self.connection, self.client_address = self.my_socket.accept()
                        logging.warning(f"connection from {self.client_address}")

                        clt = ProcessTheClient(self.connection, self.client_address)
                        clt.start()
                        self.the_clients.append(clt)


def main():
        svr = Server()
        svr.start()

if __name__=="__main__":
        main()
