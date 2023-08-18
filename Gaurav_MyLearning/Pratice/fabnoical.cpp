#include<iostream>
#include<stdio.h>
using namespace std;
int fab(int n)
{
    if (n==0)
    {
        return 0;
    }
    else if(n==1)
    {
    return 1;
    }
    else{
           int b,c;
           b=fab(n-1);
           c=fab(n-2);
    return b+c;}

}
int main()
{
    int n;
    cout<<"\nEnter the number upto which fab series you want to print=";
    cin>>n;
    for(int i=0;i<n;i++)
    {
    int result;
    result=fab(i);
    cout<<result<<"\n";
        
    }
    
    /*int result;
    result=fab(n-1);
    cout<<result<<"\n";*/
    return 0;
}
    
