#include<iostream>
#include<stdio.h>
using namespace std;
void short_array(int arr[], int size)
{
    for(int i=0; i<size-1; i++)
    {
        for(int j=i+1; j<size; j++)
        {
            if(arr[i]>arr[j])
            {
                int temp;
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
}
void array_print(int arr[], int size)
{
    for(int i=0; i<size; i++)
    {
        cout<< arr[i]<<"\n";
    }
}
void pair_sum(int arr[], int size, int target)
{
    int lo=0;
    int hi=size-1;
    while(lo<hi)
    {
    if((arr[lo]+arr[hi])==target)
    {
        cout<<arr[lo]<<"+"<<arr[hi]<<"="<< target<<"\n";
    }
    (arr[lo]+arr[hi]>= target)? hi--:lo++;
    }
}



int main()
{
    int size;
    cout<<"\n Enter the size of array=";
    cin>>size;
    int arr[size];
    cout<<"\n Enter array element=";
    for(int i=0; i<size; i++)
    {
        cin>>arr[i];
    }
    short_array(arr, size);
    cout<<"\nArray after shorting=";
    array_print(arr, size);
    int target;
    cout<<"\n Enter the target sum you want to print=";
    cin>>target;
    pair_sum(arr, size, target);

    return 0;
}

    
