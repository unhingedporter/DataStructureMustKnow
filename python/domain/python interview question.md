### Tricky interview questions

   #####  is None vs == None
    -      None is a singleton object (there only ever exists one None).
        
           is checks to see if the object is the same object, while == just checks if they are equivalent.
           use is None as a general rule.
    
            class Foo:
                def __eq__(self,other):
                    return True
            foo=Foo()
            
            print(foo==None)
            # True
            
            print(foo is None)
            # False
   
   ##### List vs Tuple
    - LIST	TUPLES                             
    Lists are mutable i.e they can be edited.   |	Tuples are immutable (tuples are lists which can’t be edited).
    Lists are slower than tuples.               |	Tuples are faster than list.
    Syntax: list_1 = [09, ‘Game of throne’ , 99]        |	Syntax: tup_1 = (09, ‘Game of throne’ , 99)
    
   #### What are the key features of Python?
        
*    Python is an interpreted language. That means that, unlike languages like C and its variants, Python does not need to be compiled before it is run. Other interpreted languages include PHP and Ruby.
*    Python is dynamically typed, this means that you don’t need to state the types of variables when you declare them or anything like that. You can do things like x=111 and then x="I'm a string" without error
*    Python is well suited to object orientated programming in that it allows the definition of classes along with composition and inheritance. Python does not have access specifiers (like C++’s public, private).

   #### pep 8
*   PEP stands for Python Enhancement Proposal. It is a set of rules that specify how to format Python code for maximum readability.

   ####  memory managed in Python
* Need more details on this       
    * Memory management in python is managed by Python private heap space. All Python objects and data structures are located in a private heap. The programmer does not have access to this private heap. The python interpreter takes care of this instead.
    * The allocation of heap space for Python objects is done by Python’s memory manager. The core API gives access to some tools for the programmer to code.
    * Python also has an inbuilt garbage collector, which recycles all the unused memory and so that it can be made available to the heap space.

   #### Python Path
*  It is an environment variable which is used when a module is imported. Whenever a module is imported, PYTHONPATH is also looked up to check for the presence of the imported modules in various directories. The interpreter uses it to determine which module to load.
    
   #### Diff between array and list in python
*   Arrays and lists, in Python, have the same way of storing data. But, arrays can hold only a single data type elements whereas lists can hold any data type elements.

   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       
   #### 
*       