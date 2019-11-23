# Python3 code to calculate the maximum 
# distance between any city and its nearest station 

# Function to calculate the maximum 
# distance between any city and its nearest station 
def findMaxDistance(numOfCities, station): 
	
	# Initialize boolean list 
	hasStation = [False] * numOfCities 
	# Assign True to cities containing station 
	for city in station: 
		hasStation[city] = True
		
	dist, maxDist = 0, min(station) 

	for city in range(numOfCities): 
		if hasStation[city] == True: 
			maxDist = max((dist + 1) // 2, maxDist) 
			dist = 0
			
		else: 
			dist += 1
			
	return max(maxDist, dist) 
	
numOfCities = 6
station = [3, 1] 
print("Max Distance:", findMaxDistance(numOfCities, station)) 
