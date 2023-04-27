/*pattern to be printed is 
      1
    1 2 1
  1 2 3 2 1
1 2 3 4 3 2 1
*/
#include <iostream>
using namespace std;

int main()
{
    int row, col;
    for( int i=1; i<=4; i++)
    {
        for(int j=i; j<=4; j++)
        {
            cout<<"  ";
        }
        for(int j=1;j<=i; j++)
        {
            cout<<" "<<j;
        }
        for(int j=i; j>1; j--)
        {
            cout<<" "<<j-1;
        }
        cout<<"\n";
    }
    return 0;
}


