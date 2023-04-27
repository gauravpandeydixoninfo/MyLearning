#include<iostream>
using namespace std;
int main()
{
    int bin, temp=0,num2=1, dec=0, j=0;
    cout<<"\nEnter the binary number=";
    cin>>bin;
    while(bin!=0)
    {   j++;
        temp= bin%10;
        for(int i =1; i<j; i++)
        {
            num2=2*num2;
        }
        temp= temp*num2;
        dec= dec + temp;
        bin= bin/10;
    }
    cout<<"\n decimal of number="<<dec<<"\n";
    return 0;
    
}   
