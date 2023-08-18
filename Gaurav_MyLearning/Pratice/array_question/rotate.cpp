#include<iostream>
#include<stdio.h>
using namespace std;
void rotate(int arr[], int size)
{
    int temp= arr[size-1];
    //cout<<"\n value of last element="<<temp;
    //cout<<"\n Entered in rotate function";
    for(int i=size-1; i>=1; i--)
    {
      //  cout<<arr[i];
        //int temp1=arr[i];
        arr[i]=arr[i-1];
    }
    arr[0]= temp;
}

void array_print(int arr[], int size)
{
    for(int i=0; i<size; i++)
    {
        cout<< arr[i]<<"\n";
    }
}
//using namespace std;
int main()
{
int size;
cout<<"\n Enter the size of array=";
cin>> size;
int arr[size];
cout<<"\n Enter the array element=";
for(int i=0; i<size; i++)
{
    cin>>arr[i];
}
cout<<"\n Entered array=";
array_print(arr, size);
cout<<"\n array after rotating=";
//cout<<"\n value of size="<<size;
rotate(arr, size);
array_print(arr, size);
cout<<"\n array after rotating=";
rotate(arr, size);
array_print(arr, size);
    return 0;
}
