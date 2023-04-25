#include<iostream>
using namespace std;
 
int main()
{
    int num, power, ans=1;
    cout << "\n Enter the number whose power we have to calculate=" ;
    cin >> num;
    cout<<"\nEnter the power of number=";
    cin >> power ;
    for ( int i =1; i<=power; i++)
    {
        ans  = ans*num;
    }
    cout<<"\n your answer is =" << ans << "\n";
    return 0;
   }

