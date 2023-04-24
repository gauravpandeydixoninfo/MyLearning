#include <iostream>
using namespace std;
int main()
{
    int even_sum=0 , odd_sum=0 , num , temp=0 , k = 0;
    cout << "\nEnter the number =" ;
    cin >> num ;
    while ( num!= 0)
    {
        temp = num%10;
        k = temp%2; 
        if ( k == 0)
        {
            even_sum = even_sum + temp ;
        }
        else
        {
            odd_sum = odd_sum + temp ;
        }
        num = num/10 ;
    }
    cout << "\n even number sum = " << even_sum ;
    cout << "\n odd number sum = " << odd_sum << "\n" ;
    return 0;
}

