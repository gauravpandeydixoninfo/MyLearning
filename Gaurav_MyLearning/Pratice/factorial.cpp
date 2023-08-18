#include<iostream>
#include<stdio.h>
using namespace std;
int fact(int n)
{
    if(n==1)
        return n;
    else
        return n*fact(n-1);
}
int main()
{
    int n;
    cout<<"Enter the number=";
    cin>>n;
    int ans;
    ans= fact(n);
    cout<<"\nYour factorial ="<<ans;
    cout<<"\n";
    return 0;
}


