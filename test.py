lis = [i**2 for i in range(10)]
print(lis)

score = int(input("What is your maths score, from 0-100? "))

if  70 <= score <= 100:
    print("Guy, yu sabi book, \n You have grade A")
elif 50 <= score <= 69:
    print("grade b")
elif score >= 50:
    print("grade c")
else:
    print("you no sabi book")
    
