puts "enter words"
text = gets.chomp()

puts "redact word"
redact = gets.chomp()

words = text.split(" ")

words.each do |word|
    if word == redact
        print "REDACTED "
    else    
        print word + " "
    end
end
