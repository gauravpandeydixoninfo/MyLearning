#include<iostream>
#include<stdio.h>
using namespace std;
int pow(int n, int m)
{
    if(m==1)
    {
        return n;
    }
    else
    {
        return n*pow(n, m-1);
    }
}
int main()
{
    int num,p;
    cout<<"\nEnter the number whose power you want to calculte=";
    cin>>num;
    cout<<"\nEnter the power you want to calculate=";
    cin>>p;
    int ans;
    ans=pow(num, p);
    cout<<"\n"<<num<<" power "<<p<<"="<<ans<<"\n";
    return 0;
}

