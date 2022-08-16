"""
Argument adalah value yang masuk saat kita memangil function, sedangkan
Parameter adalah  variabel yang kita buat saat awal membuat function

__init__() adalah constructor  digunakan untuk menerima argument

refrensicode ini https://www.youtube.com/watch?v=6F0T4IEzke4&list=PLZS-MHyEIRo7ab0-EveSvf4CLdyOECMm0&index=6
"""
class char:


    def __init__(self, name, hp, atk, speed): # Parameter
        self.name   = name
        self.hp     = hp
        self.atk    = atk
        self.speed  = speed

    def skill01(self, arg):
        print(f'{self.name} menyerang {arg.name} dengan atk {self.atk}, dan speed {self.speed}')
        arg.attacked(self) # Mengirim informasi self.name ke class musuh

    def attacked(self, arg):
        self.hp -= arg.atk + (arg.speed / 2)
        print(f'{self.name} berhasil diserang oleh {arg.name}, sisah nyawa {self.name} adalah: {self.hp}')

class player(char):


    def skill02(self, arg):
        print(f'{self.name} menyerang menggunakan Blade of chaos dengan atk {self.atk + 10}, dan speed {self.speed}')
        self.atk = 20
        arg.attacked(self)
        self.atk = 10

class enemy(char):


    pass


kratos = player('kratos', 100, 10, 5)
zeus = enemy('Zeus', 250, 20, 2)


while True:

    kratos.skill01(zeus)
    zeus.skill01(kratos)

    if kratos.hp <= 0:
        print('\n ====================================== Kratos END ===============')
        break
    elif zeus.hp <= 0:
        print('\n ======================================= Zeus END ================')
        break

    kratos.skill02(zeus)
    print('\n')
