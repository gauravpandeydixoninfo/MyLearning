#include <iostream>
using namespace std;
float fact(int n)
{   
    float num=1;
    for(int i=1; i<=n; i++)
    {
        num= num*i;
    }
    return num;
    
}

int main()
{
    float n, r, num=1, den=1, temp=1;
    cout<<"\nEnter the value of n=";
    cin>>n;
    cout<<"\nvalue of n="<<n; 
    cout<<"\nEnter the value of r=";
    cin>>r;
    cout<<"\nvalue of r="<<r;

    if(n<r)
    {
        cout<<"\nWrong Input\n";
        return 0;
    }
    num=fact(n);
    den=fact(r);
    temp=fact(n-r);
    float ans;
    ans=num/(den*temp);
    cout<<"\n answer="<<ans<<"\n";
    return 0;
}


