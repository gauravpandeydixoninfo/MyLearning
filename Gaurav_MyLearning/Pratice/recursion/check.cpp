#include<iostream>
#include<stdio.h>
using namespace std;
void check(int arr[], int index[], int num)
{
    if(arr[0]==5)
    {
        index[0]=num;
        num+1;
    check(arr+1, index+1, num+1);
    }
    if(num!=4)
    {
    check(arr+1, index+1, num+1);
    }
}


int main()
{
   int index[5];
   int arr[5]={5,3,5,2,1};
   check(arr, index, 0);
   cout<<"\n arr in index number=";
   for(int i=0; i<5; i++)
   {
       cout<<index[i]<<"\n";
   }
   return 0;
}

