#include<iostream>
#include<stdio.h>
using namespace std;
int main()
{
    int arr[4][4];
    int k=1;
    for(int i=1; i<=4; i++)
    {
        for(int j=1; j<=4; j++)
            {
                arr[i][j]=k;
                k++;
            }
    }

    cout<<"value of arr=";
    for(int j=1; j<=4; j++)
    {   if (j%2==1)
        {
            
            for(int i=1; i<=4; i++)
            
          {
                cout<<"\narr["<<i<<"]["<<j<<"]"<<arr[i][j];
      
            }
    }
        else
        {
            for(int i=4; i>=1;i--)
            {
                cout<<"\narr["<<i<<"]["<<j<<"]"<<arr[i][j];
            }
        }
    }


    cout<<"\n why core dump\n";
    return 0;
}

