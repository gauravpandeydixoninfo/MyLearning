#include<iostream>
#include<stdio.h>
using namespace std;
int check(int arr[], int size)
{
    if(arr[0]==5)
        return 1;
    else if(size==0)
        return 0;
    else
    {
        check(arr+1, size-1);
    }
};
int main()
{
    int arr[5]={1,2,6,6,7};
    int size=sizeof(arr);
    int ret=check(arr, size);
    if(ret==1)
        cout<<"NO_found\n";
    else
        cout<<"NO_not_found\n";
    return 0;
}
