#include<iostream>
#include<stdio.h>
using namespace std;
int main()
{
    int *p= new int ;
    cout<<"\nenter the value of integer=";
    cin>> *p;
    cout<<"\n value entered by user="<<*p<<endl;
    delete p;
    int *p1= new int[5];
    cout<<"\n ENter the array element=";
    for(int i=0; i<5; i++)
    {
        cin>>p1[i];
    }
    for(int i=0; i<5; i++)
    {
        cout<<p1[i]<<"\n";
    }
    delete [] p1;

    return 0;
}

