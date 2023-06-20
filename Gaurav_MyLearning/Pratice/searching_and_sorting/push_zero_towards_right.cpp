/* we have to push all the zeroes towards right
 *ip: 1,0,5,3,5,0,0,2
op: 1,5,3,5,2,0,0
*/
#include<stdio.h>
#include<iostream>
using namespace std;
int main()
{
    int arr[10]={1,2,0,5,0,2,6,0,7,6};
    int temp[10];
    int j=0;
    for(int i=0; i<10; i++)
    {
        cout<< arr[i];
    }
    for(int i=0; i<10; i++)
        if(arr[i]!=0)
        { 
            temp[j]=arr[i];
            j++;
        }
    for(int k=j+1; k<10; k++)
    {
        temp[k]=0;
    }
    cout<<"\n array after operation=";
    
    for(int i=0; i<10; i++)
    {
        cout<< temp[i]<<"\t";
    }



    return 0;
}
