#include<iostream>
#include<stdio.h>
using namespace std;
int main()
{
    int i=10;
    int &j=i;
    j=20;
    cout<<"\n value of i="<< i<<endl;
    cout<<"\n address of variable i="<<&i<<endl;
    cout<<"\n address of variable j="<<&j<<endl;

    return 0;
}

