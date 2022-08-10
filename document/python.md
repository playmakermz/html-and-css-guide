# Introduction python

# Introduction

salah satu tujuan dari guido dalam mebuat bahasa python adalah bahasa yang bisa dengan mudah dibaca.

Kositensi sangatlah penting. Kosistensi didalam project sangat penting.

## *Code layout*

### Indentation

Gunakan 4 space untuk setiap level indent

```
# Correct:

# Aligned with opening delimiter.
foo = long_function_name(var_one, var_two,
                         var_three, var_four)

# Add 4 spaces (an extra level of indentation) to distinguish arguments from the rest.
def long_function_name(
        var_one, var_two, var_three,
        var_four):
    print(var_one)

# Hanging indents should add a level.
foo = long_function_name(
    var_one, var_two,
    var_three, var_four)

# Or / optional

# Hanging indents *may* be indented to other than 4 spaces.
foo = long_function_name(
  var_one, var_two,
  var_three, var_four)

# No extra indentation.
if (this_is_one_thing and
    that_is_another_thing):
    do_something()

# Add a comment, which will provide some distinction in editors
# supporting syntax highlighting.
if (this_is_one_thing and
    that_is_another_thing):
    # Since both conditions are true, we can frobnicate.
    do_something()

# Add some extra indentation on the conditional continuation line.
if (this_is_one_thing
        and that_is_another_thing):
    do_something()

my_list = [
    1, 2, 3,
    4, 5, 6,
]
result = some_function_that_takes_arguments(
    'a', 'b', 'c',
    'd', 'e', 'f',
)

```

### Tabs or spaces?

- spaces lebih disarankan untuk digunakan untuk melakukan indentasi
- Jika sudah memakai tabs, maka selanjutnya juga harus memakai tabs

python tidak memperbolehkan untuk menggunakan tabs dan space bersamaan

### Maximum line lenght

ini adalah aturan komunitas

- Untuk penulisan code adalah 79 characters / kata
- untuk docs / commenct adalah 72 kata

Backslashes masih bisa digunakan untuk membuat kelanjutan code. Dan jangan lupa untuk menambahkan indent pada baris tersebut

```
with open('/path/to/some/file/you/want/to/read') as file_1, \\
     open('/path/to/some/file/being/written', 'w') as file_2:
    file_2.write(file_1.read())

```

## Penempatan Break setelah atau sebelum operator?

```
# Wrong:
# operators sit far away from their operands
income = (gross_wages +
          taxable_interest +
          (dividends - qualified_dividends) -
          ira_deduction -
          student_loan_interest)

# Correct:
# easy to match operators with operands
income = (gross_wages
          + taxable_interest
          + (dividends - qualified_dividends)
          - ira_deduction
          - student_loan_interest)

```

## Penempatan blank line

beri jarak untuk function dan class yaitu 2 blank line

dan method yang berada didalam class beri jarak 1 blank line

## Source file encoding

code didalam python secara default memakai UTF-8, dan jangan dirubah kecuali untuk testing

### Import harus memiliki baris yang terpisah

```
## Betul
import os
import sys

## Salah
import os, sys

## kalau seperti ini boleh, ambil dua object dari satu tempat
from subprocess import Popen, PIPE

```

Imports should be grouped in the following order:

1. Standard library imports.
2. Related third party imports.
3. Local application/library specific imports.

You should put a blank line between each group of imports.

- Absolute imports are recommended,

```
# contoh 1
import mypkg.sibling
from mypkg import sibling
from mypkg.sibling import example

## Contoh 2

from . import sibling
from .sibling import example

```

- Disaat import class, dari module yang memiliki class

```
from myclass import MyClass
from foo.bar.yourclass import YourClass

```

## Pengunaan space untuk menata code

```
# Correct:
spam(ham[1], {eggs: 2})
# Wrong:
spam( ham[ 1 ], { eggs: 2 } )

# Correct:
foo = (0,)
# Wrong:
bar = (0, )

# Correct:
if x == 4: print(x, y); x, y = y, x
# Wrong:
if x == 4 : print(x , y) ; x , y = y , x

# Correct:
spam(1)
# Wrong:
spam (1)

# Correct:
ham[1:9], ham[1:9:3], ham[:9:3], ham[1::3], ham[1:9:]
ham[lower:upper], ham[lower:upper:], ham[lower::step]
ham[lower+ffset : upper+offset]
ham[: upper_fn(x) : step_fn(x)], ham[:: step_fn(x)]
ham[lower + offset : upper + offset]
# Wrong:
ham[lower + offset:upper + offset]
ham[1: 9], ham[1 :9], ham[1:9 :3]
ham[lower : : upper]
ham[ : upper]

# Correct:
dct['key'] = lst[index]
# Wrong:
dct ['key'] = lst [index]

# Correct:
x = 1
y = 2
long_variable = 3
# Wrong:
x             = 1
y             = 2
long_variable = 3

# Correct:
i = i + 1
submitted += 1
x = x*2 - 1
hypot2 = x*x + y*y
c = (a+b) * (a-b)
# Wrong:
i=i+1
submitted +=1
x = x * 2 - 1
hypot2 = x * x + y * y
c = (a + b) * (a - b)

# Correct:
def munge(input: AnyStr): ...
def munge() -> PosInt: ...
# Wrong:
def munge(input:AnyStr): ...
def munge()->PosInt: ...

# Correct:
def complex(real, imag=0.0):
    return magic(r=real, i=imag)
# Wrong:
def complex(real, imag = 0.0):
    return magic(r = real, i = imag)

# Correct:
def munge(sep: AnyStr = None): ...
def munge(input: AnyStr, sep: AnyStr = None, limit=1000): ...
# Wrong:
def munge(input: AnyStr=None): ...
def munge(input: AnyStr, limit = 1000): ...

# Correct:
if foo == 'blah':
    do_blah_thing()
do_one()
do_two()
do_three()
# Rather not:

# Wrong:
if foo == 'blah': do_blah_thing()
do_one(); do_two(); do_three()

# Wrong:
if foo == 'blah': do_blah_thing()
for x in lst: total += x
while t < 10: t = delay()
# Definitely not:

# Wrong:
if foo == 'blah': do_blah_thing()
else: do_non_blah_thing()

try: something()
finally: cleanup()

do_one(); do_two(); do_three(long, argument,
                             list, like, this)

if foo == 'blah': one(); two(); three()

```

## When to use trailing commas

trailling commas biasaanya itu opsional, akan tetapi mungkin saja anda butuhkan jika ingin melakukan updata data tersebut.

```
# Correct:
FILES = ('setup.cfg',)
# Wrong:
FILES = 'setup.cfg',

# Wrong:
FILES = ['setup.cfg', 'tox.ini',]
initialize(FILES, error=True,)

```

`x **=** x **+** **1**                 *# Increment x*`

But sometimes, this is useful:

`x **=** x **+** **1**                 *# Compensate for border*`

- [PEP 257](https://peps.python.org/pep-0257) describes good docstring conventions. Note that most importantly, the `"""` that ends a multiline docstring should be on a line by itself:

```
"""Return a foobang

Optional plotz says to frobnicate the bizbaz first.
"""

```

- For one liner docstrings, please keep the closing `"""` on the same line:
    
    *`"""Return an ex-parrot."""`*
    

## Penulisan comment

comment yang berbeda dengan code, bukan comment. Up to date comment jika anda melakukan perubahan.

Comment haruslah kalimat lengkap, dan dimulai dengan huruf besar. Pastikan comment tersebut bisa dibaca oleh orang yang menjadi tujuan anda

## Penamaan

The following naming styles are commonly distinguished:

- `b` (single lowercase letter)
- `B` (single uppercase letter)
- `lowercase`
- `lower_case_with_underscores`
- `UPPERCASE`
- `UPPER_CASE_WITH_UNDERSCORES`
- `CapitalizedWords` (or CapWords, or CamelCase – so named because of the bumpy look of its letters [[4]](https://peps.python.org/pep-0008/#id8)). This is also sometimes known as StudlyCaps.
    
    Note: When using acronyms in CapWords, capitalize all the letters of the acronym. Thus HTTPServerError is better than HttpServerError.
    
- `mixedCase` (differs from CapitalizedWords by initial lowercase character!)
- `Capitalized_Words_With_Underscores` (ugly!)

## Pengunaan is

```
# Correct:
if foo is not None:
# Wrong:
if not foo is None:

```

```
# Correct:
def f(x): return 2*x
# Wrong:
f = lambda x: 2*x

```

## Konsisten dalam melakukan if statement

```
# Correct:

def foo(x):
    if x >= 0:
        return math.sqrt(x)
    else:
        return None

def bar(x):
    if x < 0:
        return None
    return math.sqrt(x)
# Wrong:

def foo(x):
    if x >= 0:
        return math.sqrt(x)

def bar(x):
    if x < 0:
        return
    return math.sqrt(x)

```

## Note

<aside>
💡 Untuk istilah atau kata kunci penting

</aside>

- assert statement
- multiline if-statement
- multiple with-statement

## Refrence:

- [https://peps.python.org/pep-0008/](https://peps.python.org/pep-0008/)o

# python code guide

## Variabel

variabel adalah tempat untuk menyimpan data dengan tipe data tertentu. 

Beberapa tipe data yang ada:

- Integer
    
    Integer adalah bentuk nilai / angka. Dan memiliki jangkauan nilai 
    
    misalkan -32768 hingga 32768 
    
- Float ( nilai riil )
    
    Perbedaan antara float dan integer adalah nilai dibelakang koma. 
    
    contoh : 3.14 
    
- character
    
    “\n” adalah kata yang digunakan untuk membuat baris baru. 
    
- string
    
    harus diawali dengan “ atau ‘. string berisi kumpulan text
    
- boolean
    
    tipe data untuk menyatakan benar / salah 
    
- tipe tersetruktuk / function
    
    block code atau kumpulan kode yang dapat dipakai kapan saja 
    
# Python guide

# Data structure

## Perbedaan dari cache dan database

Kita harus mengetahui ini. Ingat pattern input - proses - output

Pada cache kau menyimpan data **output**. Jika bisa jauhi caching, karena ini tidak akan memberimu outdated data. Kau tidak perlu untuk backup data cache karena bisa dibuat lagi

Pada database data yang kau simpan adalah input. Biasaanya dimasukan oleh manusia atau data yang merepresentasikan data didunia nyata. Itu sangat penting untuk menyimpan data database, karena kau tidak bisa membuatnya lagi. Sedangkan output seperti (html, json) tidak memiliki nilai yang besar, karena kita bisa membuatnya lagi.

## Relational database

Pakailah SQL databases, karena itu bisa dipakai diberbagai kondisi.
Misalkan PostgreSQL sebagai databases, sedangankan NoSQL sebagai penyimpan cache.

Postgressql memliki dokumentasi yang bagus: [https://www.postgresql.org/docs/current/index.html](https://www.postgresql.org/docs/current/index.html)

## Cardinality

refrence:

- [https://en.wikipedia.org/wiki/Cardinality_(data_modeling)](https://en.wikipedia.org/wiki/Cardinality_(data_modeling))
- [https://github.com/guettli/programming-guidelines#2-data-structures](https://github.com/guettli/programming-guidelines#2-data-structures)

---

## Basic

Cara ini di gunakan untuk orang yang memahami atau sudah pernah bermain dengan bahasa program sebelumnya

## Literal constant

Literals pada python: Numeric, string, boolean, special (none) and Literal collection

```
var_a = 4  # Integer
var_b = 3.14  # Float
var_c = 'nama orang' # string

```

"var_a" adalah integer atau numeric literal
"var_b" adalah nilai decimal, bentuknya adalah float
"var_c" adalah string

## Kata kunci yang tidak bisa dipakai sebagai variabel

```
if, else, for, while, is, as, or, not, and, None, def, class, return, yield,pass, raise, True, False

```

## Operands

operands juga bisa disebut sebagai variabel. nama variabel tidak boleh dimulai dari angka dan python itu case sensitive

```
## Dynamically typed:

my_var = 34
my_var = "string"
my_var = [1,2,3,4]
my_var = 3.14

# Variabel bukanlah sebuah type, python is garbage collected

```

Beberapa teknik untuk menamai style:

- camel casing names ( sesuai untuk varibel )
myVar, myString
- capital camel casing names ( sesuai untuk penamaan class )
MyVar, FileData
- snake casing names ( sesuai untuk variabel atau function names )
my_var, file_data

## Operators

Operators dipakai untuk menjalankan operands atau variabel. Operator seperti arithmetic, assignment, comparison, bitwise

```
# Aritmetic operators
+, -, \\*, /, %, \\*\\*, //

# assignment operators
=, +=, -=, /*=, /=, %=, //=, \\*\\*=, &=, |=, >>=, <<=

# comparison operators
==, !=, >, <, >=, <=

# Bitwise operators
&, |, ~, <<, >>

# Logical operators
not, and, or

# Membership operators

in, not in

# Identity operators

is, not in

```

## Expressions

Expression adalah evaluasi dari python interpreter, value atau sequnce dengan melakukan operation ( aritmatik/ conditional / lambda function ). Mereka

```
# Some example

"yes" + " this
x + 6
if a==3 else 2
	a or b
	2 and 3
	lambda x:x**2

```

SRC: https://www.petanikode.com/statement-vs-expression/ 

- Statement - adalah bagian yang mengerjakan sesuatu 
- Expression - adalah bagian yang menghasilkan nilai 

Contoh statement = loop, if, declare variabel dan lain-lain 
contoh code 
```
if True: # ini adalah statement
    nilai = 2 + 3 # nilai adalah statement, dan 2 + 3 adlah expression
    print(nilai) # "print" adalah statement
```
print bisa menjadi expresssion jika dimasukan kedalam variabel. 

ada dua cara yang dapat dipakai untuk membedakan statement atau bukan.
Coba masukan command tersebut kadalam variabel. Jika bisa dimasukan ke variabel maka itu termasuk expresssion, jika tidak maka itu statement. 

contoh expression 
```
nilaiA = eval("1 + 1")
nilaiB = eval()
```

```
value = 10 
requirement = 'my apple is 10' if value < 10 else 'my apple not 10'
```

SRC: https://www.petanikode.com/statement-vs-expression/

## Python syntatic sugar

cara lain untuk menulis expression / stattements cara cepat

```
## Some examples

a = b = c = 10
# nilainya 10 semua

text = "This is text 1." \\
"This is text 2" \\
"And I can also continue here in the next line."

```

## Comments

```
# Ini adalah single comment

# ini adalah todo comment

"""
Ini adalah multiline comment / todo comment
"""

```

## Indentation

Ini dipakai Flow Control, Exception Handling, Function/Class definitions pada python, indentationError itu muncul jika teman-teman salah menggunakan indentasi

```
## Example 1

if 10 > 5:
	print('printed')

```

## three types of namespaces

- built-in
- global
- local

```
## Built-in namespace

# For example, some functions
# print(), len(), map(), range(), list(), set(), str(), etc.

## Global namespace

import time
my_var = 10

# import any module
# variabel / functions / classes

## Local namespace

def name_function():
	my_var = 10

	def name_fun():
		pass

# variabel dan function itu berada didalam local namespace

```

## Note

- [ ]  condition / if statement
- [ ]  case / exception
- [ ]  function
- [ ]  list, tuple, sets, dictionaries

## Source

- [https://docs.python.org/3/tutorial/](https://docs.python.org/3/tutorial/)
- https://github.com/huangsam/ultimate-python
- https://github.com/guettli/programming-guidelines
- [https://github.com/Anku5hk/Programmers_guide_to_Python/blob/main/book.md](https://github.com/Anku5hk/Programmers_guide_to_Python/blob/main/book.md)
- https://github.com/Asabeneh/Python-for-Everyone
- [https://roadmap.sh/python](https://roadmap.sh/python)
