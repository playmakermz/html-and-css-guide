from os import listdir
from os.path import isfile, join
import os
from PIL import Image

man_input = input('destination folder name: : ')
nama_pdf = input('name for this pdf: ')
main = listdir(r'{}'.format(man_input))
data = []

print(main)
for i in sorted(main):
    print('>> item i',i)
    image = Image.open(r'{}/{}'.format(man_input,str(i)))
    im = image.convert('RGB')
    data.append(im)

im.save(r'{}.pdf'.format(nama_pdf), save_all=True, append_images=data)
