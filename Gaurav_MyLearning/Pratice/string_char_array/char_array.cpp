#include<iostream>
#include<stdio.h>
using namespace std;
int main()
{
    char arr[10];
    cout<<"\n Enter your name=";
    cin>>arr;
    cout<<"\n Name entered by you="<< arr<<"\n";
    arr[3]='\0';
    cout<<arr<<"\n";
    return 0;
}

