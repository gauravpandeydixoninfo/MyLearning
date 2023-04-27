#include<iostream>
using namespace std;
int main()
{
    int num, rev=0, temp, ax;
    cout<<"\nEnter the number which reverse you want to see=";
    cin>>num;
    ax = num;
    while(num!=0)
    {
        temp = num%10;
        rev= rev*10;
        rev = rev + temp;
        num= num/10;
    }
 cout<<"\nrev of number="<<ax<<"\n"<<rev<<"\n";
 return 0;
}

