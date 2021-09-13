class Assignment2():
    age = 0

    def __init__(self,age):
        self.age = age

    def tellBirthYear(self, currentYear):
        print("Your birth year is ", currentYear - self.age)

    def listAnniversaries(self, n):
        myList = []
        i = 1
        
        while (i < self.age):
            if(i % n == 0):
                myList.append(i)
            i = i + 1
        return myList
    
    def modifyAge(self, n):
        newAge = ""
        for i,val in enumerate(n):
            if((i+1)%3==0):
                newAge += val.upper()
            elif((i+1)%4==0):
                newAge += val.lower()
            elif((i+1)%5==0):
                newAge += " "
            else:
                newAge +=val
        return newAge

    def checkGoodString(self, string):
        if(len(string)>=8):
            if string[0].islower():
                for i in string:
                    if i in "0123456789":
                        return True
        return False


