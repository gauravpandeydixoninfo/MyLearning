#include<iostream>
using namespace std;
int main()
{
    int row, col;
    cout<<"\nEnter the number of rows=";
    cin>> row;
    for( int i =0 ; i<= row; i++)
    {
        for(int j=row; j>=1; j--)
        {
            cout<<j;
        }
        cout<<"\n";
    }
    return 0;
}

