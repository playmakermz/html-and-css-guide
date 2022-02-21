abc = 10

for i in 1..10
  puts "ini adalah nomor ke #{i}"
  if i == 5
    puts " ========= ini adalah angka 5"
    puts " instruksi selanjutnnya akan terlewati"
    # next digunakan untuk membuat loop kembali ke instruksi pertama loop
    next
  end

  puts "ini adalah bagian yang akan terlewati #{i}"
end


