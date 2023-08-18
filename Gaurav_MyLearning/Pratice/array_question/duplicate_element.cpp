#include<iostream>
#include<stdio.h>
using namespace std;
int duplicate(int arr[], int arr1[],int size)
{   int s=0;
    for(int i=0; i<size-1; i++)
    {
        if(arr[i]==arr[i+1])
        {
            arr1[s]=arr[i];
            s++;
        }
    }
    return s;
}
void shorting_array(int arr[], int size)
{
    for(int i=0; i<size-1; i++)
    {
        for(int j=i+1; j<size; j++)
        {
            if(arr[i]>arr[j])
            {
                int temp= arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
}
void show_array(int arr[], int size)
{
    for(int i=0; i<size; i++)
    {
        cout<< arr[i]<<"\n";
    }
}
        
void insert_element(int arr[], int size)
    {
        for(int i=0; i< size; i++)
        {
            cin>> arr[i];
            cout<<"\n";
        }
    }
int main()
{
    int size;
    cout<<"\nEnter the size of array=";
    cin>> size;
    int arr[size];
    cout<<"\nEnter the element of array=";
    insert_element(arr, size);

    shorting_array(arr, size);
    cout<<"\nArray after shorting=";
    show_array(arr, size);
    int arr1[size];
    int s;
    s=duplicate(arr, arr1, size);
    cout<<"\n Duplicate array=";
    show_array(arr1, s);
    return 0;
}


