/* pattern to be printed
    *
   **
  ***
 ****
 */
#include <iostream>
using namespace std;
int main()
{
    for(int i=1; i<=4; i++)
    {
        for(int j=i; j<=i; j++)
        {
            for(int k=1; k<= 4-i; k++)
            {
                cout<<" ";
            }
            for(int l=1; l<=i; l++)
            {
                cout<<"*";
            }
            
        }
        cout<<"\n";
    }
    return 0;
}

