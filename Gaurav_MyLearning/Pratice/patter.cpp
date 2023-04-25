#include<iostream>
using namespace std;
int main()
{
    int row, counter=1;
    cout << "\nEnter the value of number of rows=";
    cin >> row;
    for(int i=1; i<=row ; i++)
    {
            for( int k= 1; k<= row -i ; k++)
            {
                cout<<" ";
            }
            for( int p =1; p <= i ; p ++)
            {
            cout<<counter;
                counter++;
            }
            cout << "\n";
    }
    return 0; 
}

