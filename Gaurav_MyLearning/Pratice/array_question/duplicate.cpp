#include<iostream>
#include<stdio.h>
using namespace std;
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
void show_array(int arr[], int size)
{
    for(int i=0; i<size; i++)
    {
        cout<< arr[i]<<"\n";
    }
}

int unique_element(int arr[], int size, int arr1[], int k=0)
{
    for(int i=0; i<size; i++)
    {
        if(arr[i]!=arr[i+1])
        {
            arr[k]=arr[i];
            k= k+1;
        }
    }
    return k;
}

int  common_element(int arr1[], int arr2[],int arr[], int s1, int s2)
{   int size=0, size1=0, size2=0;

    while(!(size1==s1|| size2==s2))
    {
        if(arr1[size1]==arr2[size2])
        {   cout<<"\nElement mached inserting element="<<arr1[size1]<<"\n";
            arr[size]=arr1[size1];
            size1++;
            size2++;
            size++;
            
           
        }
        else if(arr1[size1]<arr2[size2])
        {
            size1++;
        }   
        else if(arr2[size2]<arr1[size1])
        {
            size2++;
        }   
        else
        {
        cout<<"nothing to to do\n";
        }
    }
    return size;
}

int main()
{
    int size1;
    cout<<"\n Enter the size of array=";
    cin>> size1;
    int arr1[size1];
    insert_element(arr1, size1);
    cout<<"\n array element inserted by you=";
    //show_array(arr1, size1);
    shorting_array(arr1, size1);
    cout<<"\n array after shorting=";
    show_array(arr1, size1);
    int size2;
    cout<<"\n Enter the size of array=";
    cin>> size2;
    int arr2[size2];
    insert_element(arr2, size2);
    cout<<"\n array element inserted by you=";
    //show_array(arr2, size2);
    shorting_array(arr2, size2);
    cout<<"\n array after shorting=";
    show_array(arr2, size2);
     int limit;
    if(size1<=size2)
    {
        limit =size2;
    }
    else
    {
        limit =size1;
    }
    cout<<"\n size of new array="<<limit<<"\n";
    int arr[limit];
    int size;
    size=common_element(arr1, arr2, arr, size1, size2);
    cout<<"\n common element in arrays=";
    show_array(arr, size);
    return 0;
    
}

