#include<iostream>
#include <iomanip>
using namespace std;
int main()
{
    float fh, cc;
    cout << "\nEnter the temprature in fareenheight =";
    cin >> fh;
    cc = (fh -32)*(float(5)/9);
    cout << setprecision(5);
    cout<<"\n temperature in cc =" << cc << "\n";
    return 0;
}

