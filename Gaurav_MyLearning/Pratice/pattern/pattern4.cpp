/*pattern to be printed 
 1
 23
 345
 4567
 56789
*/


#include<iostream>
using namespace std;

int main()
{
    int counter =0;
    for(int i=1; i<=5; i++)
    {   counter=i;
        for(int j=1; j<=i; j++)
        {
            
            cout<<counter;
            counter++;
        } 
      cout<<"\n";
    } 
  return 0;
}


