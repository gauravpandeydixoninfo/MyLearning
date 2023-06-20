// In this code rotation of array element is there
#include<iostream>
using namespace std;
int main()
{
    int arr[5]={1,5,4,5,0};
    cout<<"\nvalue of array=";
    for(int i=0; i<5; i++)
    {
        cout<<arr[i]<<"\t";
    }
    for(int l=0; l<5; l++)
    {
    int temp=arr[0];
    for(int i=0; i<4; i++)
    {
        arr[i]=arr[i+1];
    }
    arr[4]=temp;
    cout<<"\nArray after"<<l+1<<" rotaton is=";
    for(int i=0; i<5; i++)
    {
        cout<<arr[i]<<"\t";
    }
    }
    return 0;
}
