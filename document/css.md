# CSS Introduction

Cascading Style Sheet (CSS) merupakan instruksi penulisan untuk mengatur tata letak dan penampilan document HTML. Dengan adannya Bantuan CSS sebagai pengelola tampilan dari document akan sangat mempermudah penulis menciptakan karyanya. 

Beberapa Fitur CSS:
1. Mengubah warna text maupun background
1. Mengubah ukuran gambar atau text
1. Membuat animasi atau effect
1. Mengatur penempatan object
1. Memberikan border

#### Contoh code CSS
`p { color: red; }`
- `p` CSS akan mengambil object bernama 'p' dari HTML.
- `color` membuat fungsi untuk memilih warna. jika tidak ada 'color' maka warna yang dipakai adalah default.
- `red` memilih warna merah.

Ada tiga cara untuk menghubungkan CSS kedalam document HTML:
1. Inline Style Sheet
Menulis code CSS tepat didalam object yang dituju.
Contoh `<p style='color:red;'> </p>` 
2. Embedded Style sheet
Menulis code CSS didalam TAG HEAD.
contoh:
```html
<head>
<style>
p {color: 'red';}
</style>
</head>
```
3. External CSS
Link menuju tempat penyimpanan CSS kita, ditulis didalam TAG `<head>`.
`<link href='style.css' rel='stylesheet'>`
  
## Menggenai Id
  
One cool thing about id attributes is that, like classes, you can style them using CSS.

However, an id is not reusable and should only be applied to one element. An id also has a higher specificity (importance) than a class so if both are applied to the same element and have conflicting styles, the styles of the id will be applied.

Here's an example of how you can take your element with the id attribute of cat-photo-element and give it the background color of green. In your style element:
`
#cat-photo-element {
  background-color: green;
}
`
Note that inside your style element, you always reference classes by putting a . in front of their names. You always reference ids by putting a # in front of their names.
  
## Menggenai padding
You may have already noticed this, but all HTML elements are essentially little rectangles.

Three important properties control the space that surrounds each HTML element: padding, border, and margin.

An element's padding controls the amount of space between the element's content and its border.

Here, we can see that the blue box and the red box are nested within the yellow box. Note that the red box has more padding than the blue box.

When you increase the blue box's padding, it will increase the distance (padding) between the text and the border around it.
  
```
 padding: 40px 20px 20px 40px;
  // Clockwise Notation : padding-top, padding-right, padding-bottom, and padding-left
```

## menggenai margin 
An element's margin controls the amount of space between an element's border and surrounding elements.

Here, we can see that the blue box and the red box are nested within the yellow box. Note that the red box has a bigger margin than the blue box, making it appear smaller.

When you increase the blue box's margin, it will increase the distance between its border and surrounding elements.
  
## Attribute selector
  
`
[type='radio'] {
  margin: 20px 0px 20px 0px;
}
`
 You have been adding id or class attributes to elements that you wish to specifically style. These are known as ID and class selectors. There are other CSS Selectors you can use to select custom groups of elements to style.

Let's bring out CatPhotoApp again to practice using CSS Selectors.

For this challenge, you will use the [attr=value] attribute selector to style the checkboxes in CatPhotoApp. This selector matches and styles elements with a specific attribute value. For example, the below code changes the margins of all elements with the attribute type and a corresponding value of radio:


## CSS Box Model 

Didalam Sebuah Element HTMl itu terdiri dari:
- Content - Adalah area utama dimana jika kita menuliskan suatu text, text tersbut berada didalam contetn
- Padding - Adalah area kosong yang menjadi jarak antara content dengan border / bagian tepi element 
- Border - Adalah bagian tepi dari  suatu element. Berada diantara padding dan margin 
- Margin - adalah bagian luar dari border. Yang memberi jarak antara element satu dengan yang lainnya

## Box-sizing:border-box

Pada dasarnya box model mengunakan  perhitungan nilai width x height pada element sperti berikut
```
Width = width + left padding + right padding + left border + right border

Height = height + top padding + bottom padding + top border + bottom border
```
src: https://medium.com/@elelvyra/learn-css-box-model-dan-box-sizing-6b19a367478d#:~:text=Box%20sizing%20adalah%20properti%20yang,width%20dan%20height%20suatu%20elemen.

Mari kita coba untuk membuat box model terlebih dahulu, dengan width 200 px, height 200px, padding kanan-kiri 20px, padding atas-bawah 20px, border kanan-kiri 20px, dan border atas-bawah 20px.

mari kita hitung dengan cara diatas
```
width = 200 + 10 + 10 + 10 + 10 = 240
height = 200 + 10 + 10 + 10 + 10 = 240
```
Total width adalah 240 dan juga height nya. Ada cara jika kita ingin menghasilkan 200px tersebut adalah keseluruhan dari 
width dan height, yaitu menambahkan property `box-sizing: border-box;`. **border-sizing** akan mengatur agar lebar atau tinggi dari element tersebut sesuai dengan ukuran width dan height yang sudah ada. 

Mari kita lihat ukuran total pada gambar sebelum box-sizing.

![Sebelum box sizing](../aset/box-sizing-before.png)

Jika semisal Kita menambahkan property box sizing seperti code dibawah
```
div.main {
        width: 200px;
        height: 200px;
        background-color: green;
        padding: 10px;
        border: 10px solid black; 
        box-sizing: border-box;
      }
```

hasilnya akan menjadi 

![setelah boxsizing](../aset/box-sizing-after.png)



#### Refrensi
- https://id.wikipedia.org/wiki/Cascading_Style_Sheets
- https://www.w3schools.com/css/css_howto.asp
- https://www.freecodecamp.org/

