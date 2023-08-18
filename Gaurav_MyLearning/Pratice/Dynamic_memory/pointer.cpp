#include<iostream>
#include<stdio.h>
using namespace std;
int main()
{
    int i=5;
    int *p=&i;
    
    char *b=(char*)p;
   // p=&i;
   // cout<<"\nEnter the value of i=";
   // cin>>i;
   // cout<<*p<<"\n";
   // char *k=(char*)p;
    cout<<"Size of integer pointer="<<sizeof(p)<<"\n";
    cout<<"Size of character pointer="<<sizeof(b)<<"\n";
    cout<<"value of char pointer pointing to integer no="<<*b<<"\n";
    return 0;
}

