#include <iostream>
using namespace std;
int main()
{
    int row, col;
    cout<<"\n Enter the number of rows you want to print=";
    cin>> row;
    for(int i=1; i<= row; i++)
    {
        for(int j=1; j<=row; j++)
        {
            cout<<"*";
        }
        cout<<"\n";
    }
    return 0;
}

