#include<iostream>
#include<stdio.h>
using namespace std;
int main()
{
   /* int  a=5;
    cout<<a;
    int &b=a;
    cout<<"\nvalue of b="<<b<<"\n";
    b=10;
    cout<<"\nvalue of b after change="<<b<<"\n";
    cout<<"\nvalue of a after change="<<a<<"\n";
    */
    /*
    const int a=5;
    const int &b=a;
    
    cout<<"\nvalue of a="<<a<<"\n";
    cout<<"\nvalue of b="<<b<<"\n";
    */
    
    int a=5;
    const int &b=a;
    //b++; --> not posible we have now get only read access to that location not write location
    
    cout<<"\nvalue of a="<<a<<"\n";
    cout<<"\nvalue of b="<<b<<"\n";
    return 0;
}

