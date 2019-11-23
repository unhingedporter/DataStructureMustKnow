# Python program to check whether two strings are 
# anagrams of each other 

# function to check whether two strings are anagram 
# of each other 
def areAnagram(str1, str2): 
	# Get lengths of both strings 
	n1 = len(str1) 
	n2 = len(str2) 

	# If lenght of both strings is not same, then 
	# they cannot be anagram 
	if n1 != n2: 
		return 0

	# Sort both strings 
	str1 = sorted(str1) 
	str2 = sorted(str2) 

	# Compare sorted strings 
	for i in range(0, n1): 
		if str1[i] != str2[i]: 
			return 0

	return 1


# Driver program to test the above function 
str1 = "test"
str2 = "ttew"
if areAnagram(str1, str2): 
	print ("The two strings are anagram of each other") 
else: 
	print ("The two strings are not anagram of each other") 

# This code is contributed by Bhavya Jain 


##################################################################################

# Python program to check if two strings are anagrams of 
# each other 
NO_OF_CHARS = 256

# Function to check whether two strings are anagram of 
# each other 
def areAnagram(str1, str2): 

	# Create two count arrays and initialize all values as 0 
	count1 = [0] * NO_OF_CHARS 
	count2 = [0] * NO_OF_CHARS 

	# For each character in input strings, increment count 
	# in the corresponding count array 
	for i in str1: 
		count1[ord(i)]+= 1

	for i in str2: 
		count2[ord(i)]+= 1

	# If both strings are of different length. Removing this 
	# condition will make the program fail for strings like 
	# "aaca" and "aca" 
	if len(str1) != len(str2): 
		return 0

	# Compare count arrays 
	for i in xrange(NO_OF_CHARS): 
		if count1[i] != count2[i]: 
			return 0

	return 1

# Driver program to test the above functions 
str1 = "geeksforgeeks"
str2 = "forgeeksgeeks"
if areAnagram(str1, str2): 
	print "The two strings are anagram of each other"
else: 
	print "The two strings are not anagram of each other"

# This code is contributed by Bhavya Jain 
