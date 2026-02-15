# Brute Force
class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        new_arr = []
        zeros_arr = []
        for i in nums:
            if i != 0:
                new_arr.append(i)
            else:
                zeros_arr.append(i)

        new_arr.extend(zeros_arr)
        
        nums[:] = new_arr
        

# Two Pointers  
class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        non_zero = 0
        for i in range(0, len(nums)):
            if nums[i] != 0:
                nums[non_zero] = nums[i]
                if i != non_zero:
                    nums[i] = 0
                non_zero+=1
                

            
                
                
                
        